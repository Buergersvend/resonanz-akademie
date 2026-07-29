// fundscan.mjs  --  Fundkandidaten-Scanner fuer resonanz-akademie
// Liest src/data READ-ONLY. Schreibt NUR tools/FUNDSCAN.md / tools/fundscan.json.
// Aufruf:  node tools/fundscan.mjs
//
// Grundregel: Der Scanner faellt KEIN Urteil. Er liefert Kandidaten fuer die
// Volltextabnahme. Jeder Treffer ist von Hand zu pruefen (KVP-AM).
//
// Pflichtsatz-Schutz: Eine Zeile, die den Pflichtverweis traegt, ist bereits
// versorgt. Sie wird von R1..R5 und R8 uebersprungen, damit der Pflichtsatz
// nicht seine eigenen Stichworte meldet. R6 und R7 pruefen weiterhin.
//
// R5 ist dreigeteilt, weil ein blosser Wortfund noch kein Verstoss ist:
//   R5-HART  Arznei- und Anwendungsbegriffe. Immer melden.
//   R5-DIAG  Krankheitsbilder. Nur melden, wenn in der Naehe eine Wirkzusage
//            (R4) oder eine Statistik-/Forschungsberufung (R1) steht. Erst die
//            Kopplung macht aus der Nennung ein Heilversprechen.
//   R5-INFO  Allgemeinwoerter. Keine Einzelmeldung, nur Zaehlung je Kurs.

import fs from 'node:fs';
import path from 'node:path';

// ---------------------------------------------------------------- Konfiguration
const REPO = 'C:\\Users\\Sven\\resonanz-akademie';
const DATA = path.join(REPO, 'src', 'data');
const OUT_MD = path.join(REPO, 'tools', 'FUNDSCAN.md');
const OUT_JSON = path.join(REPO, 'tools', 'fundscan.json');

const PFLICHT = 'zu Arzt, Heilpraktiker oder Therapeut';

const KONTEXT_MAX = 160;
const DIAG_FENSTER = 2;   // Zeilen davor/danach, in denen R1/R4 koppeln darf

// ---------------------------------------------------------------- Wortlisten
// ACHTUNG: Suchbegriffe DUERFEN Umlaute enthalten und muessen es dort, wo der
// Kursbestand sie schreibt - eine ASCII-Transkription liefe sonst ins Leere.
// Code, Kommentare und Konsolenausgabe bleiben dagegen ASCII.

const L_CLAIM = ['Studien zeigen', 'Studien belegen', 'Meta-Analyse', 'Metaanalyse',
  'nachweislich', 'erforscht', 'Forschung zeigt', 'wissenschaftlich belegt',
  'Untersuchungen zeigen'];

const L_STAT = ['-Fache', 'fache höhere'];

const L_INSTITUT = ['University', 'Universit', 'Institut',
  'Klinik', 'Harvard', 'Stanford', 'MIT '];

const L_WIRKUNG = ['**Wirkung:**', 'lindert', 'hilft bei', 'reduziert', 'senkt den',
  'senkt die', 'beugt vor', 'stärkt das Immun', 'heilt', 'Heilung',
  'therapiert', 'behandelt'];

// R5-HART: Arznei, Anwendung, Dosis. Wortfund genuegt.
const L_HART = ['Antidepressiv', 'Psychopharmak', 'Medikament', 'Arznei',
  'Dosierung', 'Nebenwirkung', 'Chemotherap', 'Cortison', 'Ibuprofen',
  'Schmerzmittel', 'Beruhigungsmittel'];

// R5-DIAG: Krankheitsbild. Nur mit R1/R4 in der Naehe ein Fund.
const L_DIAG = ['Insomnie', 'ADHS', 'PTBS', 'Diabet', 'Hypertoni', 'Bluthochdruck',
  'Asthma', 'Krebs', 'Tumor', 'Demenz', 'Alzheimer', 'Arthros', 'Rheuma',
  'Schlafapno', 'Reizdarm', 'Neurodermit', 'Psorias', 'Migr', 'Angstst',
  'Depression', 'depressiv', 'Schilddr'];

// R5-INFO: Allgemeinsprache. Nur Zaehlung, keine Meldung.
const L_INFO = ['chronisch', 'Erkrankung', 'Diagnose', 'Syndrom'];

// Fremdmarken und Personenanker. Liste waechst mit den Abnahmen.
const L_MARKE = ['Darth Vader', 'Star Wars', 'Yoga Alliance', 'Reiki', 'Bachblüte',
  'Bach-Blüte', 'Schüßler', 'Kinesiolog', 'Aromather', 'Ayurveda',
  'Feldenkrais', 'Rolfing', 'Pilates', 'TM-Technik', '5Rhythmen',
  'Gabrielle Roth', 'Huberman', 'Wim Hof'];

const L_BEFUGNIS = ['in deiner eigenen Praxis', 'in deiner Praxis', 'deine Klienten',
  'bevor du', 'empfiehlst', 'anleitest', 'wenn du jemanden',
  'befähigt', 'qualifiziert dich'];

// ---------------------------------------------------------------- Regex
const RE_PROZENT = /\d[\d.,]*\s*(?:%|Prozent)/;
const RE_PERSON = /\b(?:nach|von)\s+[A-Z][a-z]+\s+[A-Z][a-z]+/;
const RE_INDIKATION = /\*\*Bei\s+[^*]+:\*\*/;

// ---------------------------------------------------------------- Prioritaet
const PRIO = { R5: 1, R4: 2, R8: 2, R1: 3, R2: 3, R3: 3, R7: 3, R6: 4 };
const prioVon = (regel) => PRIO[regel.slice(0, 2)] || 9;

// ---------------------------------------------------------------- Hilfsfunktionen
const kuerze = (s) => { const t = s.trim(); return t.length > KONTEXT_MAX ? t.slice(0, KONTEXT_MAX) : t; };
const mdFeld = (s) => String(s).replace(/\|/g, '\\|');

// Erster Treffer aus einer Wortliste, sonst null.
function ersterAusListe(zeile, liste, ohneGross) {
  const h = ohneGross ? zeile.toLowerCase() : zeile;
  for (const w of liste) {
    const n = ohneGross ? w.toLowerCase() : w;
    if (h.includes(n)) return w;
  }
  return null;
}

// ---------------------------------------------------------------- Regelwerk je Zeile
// Liefert die zeilenlokalen Treffer. R5-DIAG wird hier nur als Kandidat
// zurueckgegeben - ob daraus ein Fund wird, entscheidet erst das Fenster.
function zeilenBefund(zeile) {
  const funde = [];
  const geschuetzt = zeile.includes(PFLICHT);
  let diag = null;
  let info = false;

  if (geschuetzt) {
    // R7 greift auch in Pflichtsatz-Zeilen
    const m = ersterAusListe(zeile, L_MARKE, false);
    if (m) funde.push({ regel: 'R7', treffer: m });
    return { funde, diag, info };
  }

  // R1-STAT  Zahl mit Prozentzeichen oder dem Wort Prozent, dazu Vielfaches
  const mStat = zeile.match(RE_PROZENT);
  if (mStat) funde.push({ regel: 'R1-STAT', treffer: mStat[0] });
  else {
    const w = ersterAusListe(zeile, L_STAT, false);
    if (w) funde.push({ regel: 'R1-STAT', treffer: w });
  }

  // R1-CLAIM  Berufung auf Forschung (case-insensitive)
  const wClaim = ersterAusListe(zeile, L_CLAIM, true);
  if (wClaim) funde.push({ regel: 'R1-CLAIM', treffer: wClaim });

  // R2  Personen- und Institutionsanker
  const mPers = zeile.match(RE_PERSON);
  if (mPers) funde.push({ regel: 'R2', treffer: mPers[0] });
  const wInst = ersterAusListe(zeile, L_INSTITUT, false);
  if (wInst) funde.push({ regel: 'R2', treffer: wInst });

  // R3  Indikationsliste in Fettschrift
  const mInd = zeile.match(RE_INDIKATION);
  if (mInd) funde.push({ regel: 'R3', treffer: mInd[0] });

  // R4  Wirkzusage (case-insensitive)
  const wWirk = ersterAusListe(zeile, L_WIRKUNG, true);
  if (wWirk) funde.push({ regel: 'R4', treffer: wWirk });

  // R5-HART  immer melden
  const wHart = ersterAusListe(zeile, L_HART, false);
  if (wHart) funde.push({ regel: 'R5-HART', treffer: wHart });

  // R5-DIAG  Kandidat, Entscheidung faellt im Fenster
  diag = ersterAusListe(zeile, L_DIAG, false);

  // R5-INFO  nur zaehlen
  info = ersterAusListe(zeile, L_INFO, false) !== null;

  // R7  Fremdmarken
  const wMarke = ersterAusListe(zeile, L_MARKE, false);
  if (wMarke) funde.push({ regel: 'R7', treffer: wMarke });

  // R8  Befugnis- und Anleitungssprache (case-insensitive)
  const wBef = ersterAusListe(zeile, L_BEFUGNIS, true);
  if (wBef) funde.push({ regel: 'R8', treffer: wBef });

  return { funde, diag, info };
}

// ---------------------------------------------------------------- Regelwerk je Datei
// Zwei Durchgaenge: erst alle zeilenlokalen Treffer, dann die R5-DIAG-Kopplung
// gegen das Fenster aus R1/R4.
function analysiereZeilen(zeilen) {
  const proZeile = zeilen.map(zeilenBefund);

  // Koppelnder Treffer je Zeile: erster R1- oder R4-Fund.
  const koppler = proZeile.map(b => b.funde.find(f => f.regel.slice(0, 2) === 'R1'
    || f.regel === 'R4') || null);

  const funde = [];
  let infoZahl = 0;

  proZeile.forEach((b, i) => {
    for (const f of b.funde) {
      funde.push({ zeile: i + 1, regel: f.regel, treffer: f.treffer, kontext: kuerze(zeilen[i]) });
    }
    if (b.info) infoZahl++;
    if (!b.diag) return;

    // Fenster in der Reihenfolge naechstliegend zuerst absuchen.
    const reihenfolge = [i];
    for (let d = 1; d <= DIAG_FENSTER; d++) { reihenfolge.push(i - d, i + d); }
    for (const j of reihenfolge) {
      if (j < 0 || j >= zeilen.length || !koppler[j]) continue;
      funde.push({
        zeile: i + 1, regel: 'R5-DIAG', treffer: b.diag, kontext: kuerze(zeilen[i]),
        kopplung: { regel: koppler[j].regel, treffer: koppler[j].treffer, zeile: j + 1 }
      });
      break;
    }
  });

  return { funde, infoZahl };
}

// R6  Lektionsluecke: Segment ab 'inhalt:' ohne 'Abkl' hat keinen Pflichtverweis.
function pruefeSegmente(zeilen) {
  const funde = [];
  const start = [];
  zeilen.forEach((z, i) => { if (z.includes('inhalt:')) start.push(i); });
  for (let k = 0; k < start.length; k++) {
    const von = start[k];
    const bis = (k + 1 < start.length) ? start[k + 1] : zeilen.length;
    const segment = zeilen.slice(von, bis).join('\n');
    if (!segment.includes('Abkl')) {
      funde.push({ zeile: von + 1, regel: 'R6', treffer: 'Segment ohne Abkl', kontext: kuerze(zeilen[von]) });
    }
  }
  return funde;
}

// ---------------------------------------------------------------- Selbsttest Kodierung
// Laeuft als ERSTES. Geprueft werden die ECHTEN Regel-Literale, nicht eine Kopie:
// eine separate Testzeichenkette wuerde bei Doppelkodierung genauso verfaelscht
// wie die Liste und sich selbst bestaetigen. Die Codepoint-Folge dagegen faellt
// sofort auf - aus 'ö' (246) wird bei Doppelkodierung das Paar 195,182.
// Positionen werden bewusst nicht geprueft, das braeche bei jeder Wortaenderung.
const nonAscii = s => [...s].map(c => c.codePointAt(0)).filter(c => c > 127);

// Begriff - Regelliste, in der er stehen muss - Regelname - erwartete Codepoints
const KOD_FAELLE = [
  { begriff: 'fache höhere', liste: L_STAT, regel: 'R1-STAT', soll: [246] },
  { begriff: 'stärkt das Immun', liste: L_WIRKUNG, regel: 'R4', soll: [228] },
  { begriff: 'Bachblüte', liste: L_MARKE, regel: 'R7', soll: [252] },
  { begriff: 'Bach-Blüte', liste: L_MARKE, regel: 'R7', soll: [252] },
  { begriff: 'Schüßler', liste: L_MARKE, regel: 'R7', soll: [252, 223] },
  { begriff: 'befähigt', liste: L_BEFUGNIS, regel: 'R8', soll: [228] }
];

function selbsttestKodierung() {
  for (const f of KOD_FAELLE) {
    const eintrag = f.liste.find(w => w === f.begriff);
    if (eintrag === undefined) {
      console.log('ROT   Kodierung: ' + f.begriff + ' fehlt in der Regelliste');
      console.log('\nERGEBNIS: ROT - nichts geschrieben.');
      process.exit(1);
    }
    const ist = nonAscii(eintrag);
    if (ist.join(',') !== f.soll.join(',')) {
      console.log('ROT   Kodierung: ' + f.begriff + ' hat [' + ist.join(',')
        + '], erwartet [' + f.soll.join(',') + ']');
      console.log('\nERGEBNIS: ROT - nichts geschrieben.');
      process.exit(1);
    }
  }
  console.log('GRUEN Kodierung ' + KOD_FAELLE.length + '/' + KOD_FAELLE.length);
}

// ---------------------------------------------------------------- Selbsttest Muster
const TESTZEILE = 'Studien zeigen 90 Prozent Wirkung nach Andrew Huberman: '
  + '**Bei Schlafproblemen:** lindert Depression besser als jedes Medikament, '
  + 'bevor du das anleitest.';

// Reiner Pflichtsatz - darf R5 nicht ausloesen.
const TESTZEILE_PFLICHT = 'Bei koerperlichen oder gesundheitlichen Beschwerden gehoert '
  + 'die Abklaerung zu Arzt, Heilpraktiker oder Therapeut.';

// Pflichtsatz MIT R5-HART-Stichwort - beweist, dass der Schutz wirklich greift
// und der Nulltreffer oben nicht nur am fehlenden Stichwort liegt.
const TESTZEILE_SCHUTZ = 'Bei Nebenwirkungen von Medikamenten gehoert die Abklaerung '
  + 'zu Arzt, Heilpraktiker oder Therapeut.';

function selbsttestMuster() {
  console.log('--- Selbsttest Muster ---');
  let ok = true;

  const gefunden = analysiereZeilen([TESTZEILE]).funde.map(f => f.regel);
  const erwartet = ['R1-STAT', 'R1-CLAIM', 'R2', 'R3', 'R4', 'R5-HART', 'R5-DIAG', 'R7', 'R8'];
  for (const r of erwartet) {
    if (gefunden.includes(r)) console.log('GRUEN ' + r + ' trifft auf der Testzeile');
    else { console.log('ROT   Selbsttest fehlgeschlagen: ' + r); ok = false; }
  }

  const zaehleR5 = (z) => analysiereZeilen([z]).funde
    .filter(f => f.regel.slice(0, 2) === 'R5').length;

  if (zaehleR5(TESTZEILE_PFLICHT) === 0) console.log('GRUEN R5 schweigt auf dem reinen Pflichtsatz');
  else { console.log('ROT   Selbsttest fehlgeschlagen: R5 (Pflichtsatz)'); ok = false; }

  if (zaehleR5(TESTZEILE_SCHUTZ) === 0) console.log('GRUEN Pflichtsatz-Schutz unterdrueckt R5 trotz Stichwort');
  else { console.log('ROT   Selbsttest fehlgeschlagen: R5 (Schutz greift nicht)'); ok = false; }

  // R5-DIAG ohne Kopplung darf NICHT melden.
  const ohneKopplung = zaehleR5('Viele Menschen kennen Phasen von Depression im Winter.');
  if (ohneKopplung === 0) console.log('GRUEN R5-DIAG schweigt ohne R1/R4 in der Naehe');
  else { console.log('ROT   Selbsttest fehlgeschlagen: R5-DIAG (Kopplung)'); ok = false; }

  if (!ok) { console.log('\nERGEBNIS: ROT - nichts geschrieben.'); process.exit(1); }
}

selbsttestKodierung();
selbsttestMuster();

// ---------------------------------------------------------------- Messung
const dateien = fs.readdirSync(DATA)
  .filter(f => f.endsWith('.js') && f !== 'kurse.js')
  .sort();

if (dateien.length === 0) { console.log('ROT   Keine Kursdateien gefunden - Pfad pruefen.'); process.exit(1); }

const REGELN = ['R1', 'R2', 'R3', 'R4', 'R5', 'R6', 'R7', 'R8'];
const leerZaehler = () => REGELN.reduce((o, r) => { o[r] = 0; return o; }, {});

const kurse = {};
const proRegelGesamt = leerZaehler();
let gesamt = 0;
let infoGesamt = 0;

for (const datei of dateien) {
  const id = datei.replace(/\.js$/, '');
  const text = fs.readFileSync(path.join(DATA, datei), 'utf8');
  const zeilen = text.split(/\r?\n/);

  const erg = analysiereZeilen(zeilen);
  const funde = erg.funde.concat(pruefeSegmente(zeilen));

  // Schwerstes zuerst, innerhalb der Stufe in Dateireihenfolge.
  funde.sort((a, b) => (prioVon(a.regel) - prioVon(b.regel)) || (a.zeile - b.zeile));

  const proRegel = leerZaehler();
  let hart = 0, diag = 0;
  for (const f of funde) {
    proRegel[f.regel.slice(0, 2)]++;
    proRegelGesamt[f.regel.slice(0, 2)]++;
    if (f.regel === 'R5-HART') hart++;
    if (f.regel === 'R5-DIAG') diag++;
  }

  kurse[id] = { summe: funde.length, proRegel, r5hart: hart, r5diag: diag, r5info: erg.infoZahl, funde };
  gesamt += funde.length;
  infoGesamt += erg.infoZahl;
}

// ---------------------------------------------------------------- Aufbereitung
const ids = Object.keys(kurse);
const nachSumme = ids.slice().sort((a, b) =>
  (kurse[b].summe - kurse[a].summe) || a.localeCompare(b));
const vorrang = ids.filter(id => kurse[id].proRegel.R5 > 0)
  .sort((a, b) => (kurse[b].proRegel.R5 - kurse[a].proRegel.R5) || a.localeCompare(b));

const heute = new Date().toISOString().slice(0, 10);

// ---------------------------------------------------------------- Markdown
let md = [
  '# Fundscan - resonanz-akademie',
  '',
  '> Generiert ' + heute + ' von `tools/fundscan.mjs`. **Nicht von Hand bearbeiten.**',
  '> Read-only auf `src/data` - keine Kursdatei wird veraendert.',
  '',
  '**Kandidaten, kein Urteil.** Jeder Treffer ist von Hand zu pruefen. Ein Treffer',
  'bedeutet nicht, dass die Stelle falsch ist - nur, dass sie angesehen gehoert.',
  'Zeilen, die den Pflichtverweis tragen, sind von R1 bis R5 und R8 ausgenommen.',
  '',
  '---',
  '',
  '## Vorrang',
  '',
  'Kurse mit R5-HART- oder gekoppelten R5-DIAG-Treffern.',
  'Kandidatenliste, keine Entscheidung.',
  ''
];

if (vorrang.length === 0) {
  md.push('Kein Kurs mit R5-HART- oder gekoppeltem R5-DIAG-Treffer.', '');
} else {
  md.push('| Kurs | R5-HART | R5-DIAG | Summe aller Regeln |', '|---|---|---|---|');
  for (const id of vorrang) {
    md.push('| **' + id + '** | ' + kurse[id].r5hart + ' | ' + kurse[id].r5diag
      + ' | ' + kurse[id].summe + ' |');
  }
  md.push('', 'Kurse im Abschnitt Vorrang: **' + vorrang.length + ' von ' + ids.length + '**', '');
}

md.push('---', '', '## Uebersicht', '',
  '| Kurs | R1 | R2 | R3 | R4 | R5 | R6 | R7 | R8 | Summe | R5-info |',
  '|---|---|---|---|---|---|---|---|---|---|---|');
for (const id of nachSumme) {
  const p = kurse[id].proRegel;
  md.push('| ' + id + ' | ' + REGELN.map(r => p[r]).join(' | ')
    + ' | **' + kurse[id].summe + '** | ' + kurse[id].r5info + ' |');
}

md.push('', 'R1 Statistik und Forschungsberufung - R2 Personen und Institute -',
  'R3 Indikationsliste - R4 Wirkzusage - R5 Arznei und Diagnose (HART + gekoppelte DIAG) -',
  'R6 Lektion ohne Pflichtverweis - R7 Fremdmarke - R8 Befugnissprache',
  '',
  'R5-info zaehlt Zeilen mit Allgemeinwoertern (chronisch, Erkrankung, Diagnose,',
  'Syndrom). Diese Zahl ist reine Information und geht NICHT in die Summe ein.',
  '', '---', '', '## Funde je Kurs', '');

for (const id of nachSumme) {
  const k = kurse[id];
  md.push('### ' + id + '  (' + k.summe + ')', '');
  if (k.summe === 0) { md.push('Kein Treffer.', ''); continue; }
  md.push('| Zeile | Regel | Treffer | Kontext |', '|---|---|---|---|');
  for (const f of k.funde) {
    const t = f.kopplung
      ? mdFeld(f.treffer) + ' <- koppelt ' + f.kopplung.regel + ' "'
        + mdFeld(f.kopplung.treffer) + '" Zeile ' + f.kopplung.zeile
      : mdFeld(f.treffer);
    md.push('| ' + f.zeile + ' | ' + f.regel + ' | ' + t + ' | ' + mdFeld(f.kontext) + ' |');
  }
  md.push('');
}

md.push('---', '',
  '*Generiert ' + heute + ' - ' + dateien.length + ' Dateien gelesen - '
  + gesamt + ' Treffer gesamt - ' + infoGesamt + ' R5-info-Zeilen - read-only auf src/data*', '');

fs.mkdirSync(path.dirname(OUT_MD), { recursive: true });
fs.writeFileSync(OUT_MD, md.join('\n'), 'utf8');

// ---------------------------------------------------------------- JSON
const jsonAus = {
  generiert: heute,
  dateien: dateien.length,
  gesamt,
  proRegel: proRegelGesamt,
  r5infoGesamt: infoGesamt,
  kurse
};
fs.writeFileSync(OUT_JSON, JSON.stringify(jsonAus, null, 2), 'utf8');

// ---------------------------------------------------------------- Konsole
console.log('Dateien ' + dateien.length + ' \u00b7 Funde ' + gesamt
  + ' \u00b7 R5-Kurse: ' + (vorrang.length ? vorrang.join(', ') : 'keine'));
