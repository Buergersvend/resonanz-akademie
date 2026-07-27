// kursmatrix.mjs  --  Kursmatrix-Generator fuer resonanz-akademie
// Liest src/data READ-ONLY. Schreibt NUR KURSMATRIX.md / .csv im Repo-Root.
// Aufruf:  node tools/kursmatrix.mjs
//
// Grundregel (KVP-AM): Gemessene Spalten werden NIE getippt.
// Urteilsspalten stehen ausschliesslich in tools/kursmatrix_urteile.json.
//
// Klassenlogik ist ZEICHENGLEICH zur PS-Messung vom 27.07.2026 uebernommen.
// Wird sie geaendert, sind alle Vorwerte ungueltig (KVP-W).

import fs from 'node:fs';
import path from 'node:path';

// ---------------------------------------------------------------- Konfiguration
const REPO = 'C:\\Users\\Sven\\resonanz-akademie';
const DATA = path.join(REPO, 'src', 'data');
const URTEILE = path.join(REPO, 'tools', 'kursmatrix_urteile.json');
const OUT_MD = path.join(REPO, 'KURSMATRIX.md');
const OUT_CSV = path.join(REPO, 'KURSMATRIX.csv');

const PFLICHT = 'zu Arzt, Heilpraktiker oder Therapeut';

// Ankersatz Kurs-Sanierungs-Fahrplan 26.07.2026
const ANKER1 = ['Cortisol', 'Adrenalin', 'Serotonin', 'Dopamin'];          // Biochemie
const ANKER2 = ['Studien zeigen', 'neurowissensch', 'Hirnforschung'];      // Autoritaet
const ANKER3 = ['Diagnostik'];                                            // richtungsoffen

// Umfang-Standard (Doppelraute): 6 Module / 18 Lektionen / 6 Quizfragen
const SOLL_MODULE = 6, SOLL_LEKTIONEN = 18, SOLL_QUIZ = 6;

// Kontrollkurse: muessen nach der Messung Klasse 1 tragen (KVP-AG)
const KONTROLLE_KLASSE1 = ['C10', 'G03', 'G06'];

// ---------------------------------------------------------------- Hilfsfunktionen
const zaehle = (t, s) => t.split(s).length - 1;
const ersteGruppe = (t, re) => { const m = t.match(re); return m ? m[1] : ''; };
const csvFeld = (v) => '"' + String(v == null ? '' : v).replace(/"/g, '""') + '"';

function klassifiziere(normalisiert) {
  // Reihenfolge ist bedeutungstragend: spaeter gesetzt gewinnt.
  let k = 5;
  if (/abkl/i.test(normalisiert)) k = 4;
  if (normalisiert.includes('Tierarzt')) k = 3;
  if (normalisiert.includes('Heilpraktiker')) k = 2;
  if (normalisiert.includes(PFLICHT)) k = 1;
  return k;
}

const KLASSENNAME = {
  1: '1 exakt', 2: '2 HP-Variante', 3: '3 Tierarzt',
  4: '4 Arzt-only', 5: '5 kein Verweis'
};

// ---------------------------------------------------------------- Urteile laden
let urteile = {};
if (fs.existsSync(URTEILE)) {
  try { urteile = JSON.parse(fs.readFileSync(URTEILE, 'utf8')); }
  catch (e) { console.log('ROT   kursmatrix_urteile.json ist kein gueltiges JSON: ' + e.message); process.exit(1); }
} else {
  console.log('HINWEIS  kursmatrix_urteile.json fehlt - wird mit leeren Eintraegen angelegt.');
}

// ---------------------------------------------------------------- Messung
const dateien = fs.readdirSync(DATA)
  .filter(f => f.endsWith('.js') && f !== 'kurse.js')
  .sort();

if (dateien.length === 0) { console.log('ROT   Keine Kursdateien gefunden - Pfad pruefen.'); process.exit(1); }

const zeilen = dateien.map(f => {
  const voll = path.join(DATA, f);
  const roh = fs.readFileSync(voll);
  const bom = roh.length >= 3 && roh[0] === 0xEF && roh[1] === 0xBB && roh[2] === 0xBF;
  const t = roh.toString('utf8');
  const n = t.replace(/\s+/g, ' ');           // whitespace-normalisiert wie PS-Messung

  const crlf = zaehle(t, '\r\n');
  const lf = zaehle(t, '\n') - crlf;

  const lektionen = zaehle(t, 'inhalt:');
  const module = zaehle(t, 'lektionen:');
  const quiz = zaehle(t, 'frage:');

  const a1 = ANKER1.reduce((s, a) => s + zaehle(t, a), 0);
  const a2 = ANKER2.reduce((s, a) => s + zaehle(t, a), 0);
  const a3 = ANKER3.reduce((s, a) => s + zaehle(t, a), 0);

  const id = f.replace(/\.js$/, '');
  const u = urteile[id] || {};
  if (!urteile[id]) urteile[id] = { abgenommen_gegen: null, notiz: '' };

  const klasse = klassifiziere(n);
  const status = ersteGruppe(t, /status:\s*'([^']*)'/);

  const verweisOk = (klasse === 1 || klasse === 3);
  const quizOk = quiz >= SOLL_QUIZ;
  const ankerFrei = (a1 === 0);
  const abgenommen = !!u.abgenommen_gegen;
  // Gestufte Bewertung: eine Standarderhoehung darf geleistete Arbeit nicht unsichtbar machen.
  const stufe = (quizOk ? 1 : 0) + (verweisOk ? 1 : 0) + (ankerFrei ? 1 : 0) + (abgenommen ? 1 : 0);
  const mechanisch = status === 'live' && quizOk && verweisOk && ankerFrei;
  const fertig = mechanisch && abgenommen;

  return {
    id,
    titel: ersteGruppe(t, /titel:\s*'([^']*)'/),
    bereich: ersteGruppe(t, /bereich:\s*'([^']*)'/),
    status: status || '(fehlt)',
    format: ersteGruppe(t, /format:\s*'([^']*)'/),
    level: ersteGruppe(t, /level:\s*'([^']*)'/),
    module, lektionen, quiz,
    zeichenProLektion: lektionen ? Math.round(t.length / lektionen) : 0,
    klasse,
    verweisAnzahl: zaehle(n, PFLICHT),
    a1, a2, a3,
    eol: (crlf > 0 && lf === 0) ? 'CRLF' : (crlf === 0 ? 'LF' : 'MIX'),
    bom,
    bytes: roh.length,
    abgenommenGegen: u.abgenommen_gegen || '',
    notiz: u.notiz || '',
    quizOk, verweisOk, ankerFrei, stufe, mechanisch, fertig
  };
});

// Urteilsdatei ggf. um neue Kurse ergaenzen (nie ueberschreiben)
fs.mkdirSync(path.dirname(URTEILE), { recursive: true });
fs.writeFileSync(URTEILE, JSON.stringify(urteile, null, 2), 'utf8');

// ---------------------------------------------------------------- Kontrolle (KVP-AG)
console.log('--- Kontrolle ---');
let kontrolleOk = true;
for (const k of KONTROLLE_KLASSE1) {
  const z = zeilen.find(x => x.id === k);
  if (!z) { console.log('ROT   ' + k + ' nicht gefunden'); kontrolleOk = false; continue; }
  if (z.klasse === 1) console.log('GRUEN ' + k + ' Klasse 1 wie erwartet');
  else { console.log('ROT   ' + k + ' Klasse ' + z.klasse + ' - erwartet 1. Messung unbrauchbar.'); kontrolleOk = false; }
}
const mitBom = zeilen.filter(z => z.bom);
if (mitBom.length) { console.log('ROT   BOM gefunden in: ' + mitBom.map(z => z.id).join(', ')); kontrolleOk = false; }
else console.log('GRUEN kein BOM im Bestand');
if (!kontrolleOk) { console.log('\nERGEBNIS: ROT - nichts geschrieben.'); process.exit(1); }

// ---------------------------------------------------------------- Kennzahlen
const live = zeilen.filter(z => z.status === 'live');
const coming = zeilen.filter(z => z.status !== 'live');
const fertig = live.filter(z => z.fertig);
const mechanisch = live.filter(z => z.mechanisch);
const quizErfuellt = live.filter(z => z.quizOk);
const verweisErfuellt = live.filter(z => z.verweisOk);
const ankerFrei = live.filter(z => z.ankerFrei);
const kl = [1, 2, 3, 4, 5].map(k => live.filter(z => z.klasse === k).length);
const ohneQuiz = live.filter(z => z.quiz < SOLL_QUIZ);
const mitAnker1 = live.filter(z => z.a1 > 0);
const nichtAbgenommen = live.filter(z => !z.abgenommenGegen);

const heute = new Date().toISOString().slice(0, 10);

// ---------------------------------------------------------------- Markdown
const kopf = [
  '# Kursmatrix — resonanz-akademie',
  '',
  '> Generiert ' + heute + ' von `tools/kursmatrix.mjs`. **Nicht von Hand bearbeiten.**',
  '> Urteilsspalten (Abgenommen, Notiz) stehen in `tools/kursmatrix_urteile.json`.',
  '',
  '## Fertigstellungsstand',
  '',
  '| Kennzahl | Wert |',
  '|---|---|',
  '| Kursdateien gesamt | ' + zeilen.length + ' |',
  '| davon LIVE | **' + live.length + '** |',
  '| davon `coming` | ' + coming.length + ' |',
  '',
  '### Stufen (LIVE) — jede Achse zaehlt einzeln',
  '',
  '| Stufe | erfuellt | offen |',
  '|---|---|---|',
  '| Quiz (>=' + SOLL_QUIZ + ' Fragen) | **' + quizErfuellt.length + ' / ' + live.length + '** | ' + (live.length - quizErfuellt.length) + ' |',
  '| Pflichtverweis (Klasse 1 oder 3) | **' + verweisErfuellt.length + ' / ' + live.length + '** | ' + (live.length - verweisErfuellt.length) + ' |',
  '| frei von Biochemie-Ankern | **' + ankerFrei.length + ' / ' + live.length + '** | ' + (live.length - ankerFrei.length) + ' |',
  '| **mechanisch versorgt** (alle drei) | **' + mechanisch.length + ' / ' + live.length + '** | ' + (live.length - mechanisch.length) + ' |',
  '| **volltextabgenommen** (KVP-AB) | **' + fertig.length + ' / ' + live.length + '** | ' + nichtAbgenommen.length + ' |',
  '',
  '> „Mechanisch versorgt" ist die geleistete Arbeit. „Volltextabgenommen" ist die',
  '> Pruefung gegen den **aktuellen** Ankerstand (KVP-W) — ein steigender Standard',
  '> setzt diesen Zaehler zurueck, ohne die Arbeit zu entwerten.',
  '',
  '### Pflichtverweis (LIVE)',
  '',
  '| Klasse | Anzahl | Bedeutung |',
  '|---|---|---|',
  '| 1 exakt | ' + kl[0] + ' | versorgt |',
  '| 2 HP-Variante | ' + kl[1] + ' | Wortlaut pruefen |',
  '| 3 Tierarzt | ' + kl[2] + ' | eigener Pflichtsatz, nicht nachruesten |',
  '| 4 Arzt-only | ' + kl[3] + ' | Nachruestung, Verweisstelle vorhanden |',
  '| 5 kein Verweis | ' + kl[4] + ' | Nachruestung, reine Anhaengung |',
  '',
  '**Nachruestbedarf: ' + (kl[3] + kl[4]) + '** (Klassen 4+5), davon ' + kl[4] + ' reine Anhaengefaelle.',
  '',
  '### Weitere offene Achsen (LIVE)',
  '',
  '- Quiz unter ' + SOLL_QUIZ + ' Fragen: **' + ohneQuiz.length + '** ' + (ohneQuiz.length ? '(' + ohneQuiz.map(z => z.id).join(', ') + ')' : ''),
  '- Biochemie-Anker (Klasse 1) vorhanden: **' + mitAnker1.length + '** ' + (mitAnker1.length ? '(' + mitAnker1.map(z => z.id).join(', ') + ')' : ''),
  '',
  '---',
  '',
  '## LIVE-Kurse',
  '',
  '| Kurs | Titel | Bereich | M | L | Quiz | Verw. | A1 | A2 | A3 | Stufe | Abgenommen |',
  '|---|---|---|---|---|---|---|---|---|---|---|---|'
];

const zeileMd = z => '| **' + z.id + '** | ' + (z.titel || '—') + ' | ' + (z.bereich || '—') + ' | '
  + z.module + ' | ' + z.lektionen + ' | ' + z.quiz + ' | ' + KLASSENNAME[z.klasse] + ' | '
  + z.a1 + ' | ' + z.a2 + ' | ' + z.a3 + ' | '
  + z.stufe + '/4' + (z.fertig ? ' FERTIG' : (z.mechanisch ? ' mech.' : '')) + ' | '
  + (z.abgenommenGegen || '—') + ' |';

const md = kopf
  .concat(live.slice().sort((a, b) => (a.stufe === b.stufe ? a.id.localeCompare(b.id) : a.stufe - b.stufe)).map(zeileMd))
  .concat([
    '',
    'Spalten: M=Module · L=Lektionen · Verw.=Pflichtverweis-Klasse · ',
    'A1=Biochemie-Anker · A2=Autoritaetsberufung · A3=Diagnostik',
    '',
    '---',
    '',
    '## `coming` (geparkt, nicht oeffentlich abrufbar)',
    '',
    '| Kurs | Titel | M | L | Quiz | Verw. | A1 |',
    '|---|---|---|---|---|---|---|'
  ])
  .concat(coming.map(z => '| ' + z.id + ' | ' + (z.titel || '—') + ' | ' + z.module + ' | ' + z.lektionen
    + ' | ' + z.quiz + ' | ' + KLASSENNAME[z.klasse] + ' | ' + z.a1 + ' |'))
  .concat(['', '*Generiert ' + heute + ' · ' + zeilen.length + ' Dateien gelesen · read-only auf src/data*', ''])
  .join('\n');

fs.writeFileSync(OUT_MD, md, 'utf8');

// ---------------------------------------------------------------- CSV
const spalten = ['id', 'titel', 'bereich', 'status', 'format', 'level', 'module', 'lektionen',
  'quiz', 'zeichenProLektion', 'klasse', 'verweisAnzahl', 'a1', 'a2', 'a3', 'eol', 'bytes',
  'abgenommenGegen', 'notiz', 'fertig'];
const csv = [spalten.join(';')]
  .concat(zeilen.map(z => spalten.map(s => csvFeld(z[s])).join(';')))
  .join('\r\n');
fs.writeFileSync(OUT_CSV, '\uFEFF' + csv, 'utf8');   // BOM nur fuer Excel-CSV, nicht fuer Kursdateien

console.log('\n--- Ergebnis ---');
console.log('LIVE ' + live.length
  + ' · Quiz ' + quizErfuellt.length
  + ' · Verweis ' + verweisErfuellt.length
  + ' · ankerfrei ' + ankerFrei.length
  + ' · mechanisch versorgt ' + mechanisch.length
  + ' · volltextabgenommen ' + fertig.length);
console.log('GRUEN geschrieben: KURSMATRIX.md · KURSMATRIX.csv · tools/kursmatrix_urteile.json');
