// verweisort.mjs  --  Verweis-Ortsbestimmung fuer resonanz-akademie
// Liest src/data READ-ONLY (ohne kurse.js). Schreibt NUR VERWEISORT.md im Repo-Root.
// Aufruf:  node tools/verweisort.mjs
//
// Frage, die dieses Werkzeug beantwortet: WO steht der Pflichtverweis?
// kursmatrix.mjs zaehlt nur OB er dasteht. Ein Verweis, der ausschliesslich
// in einer Quizfrage auftaucht, ist im Lesefluss der Lektion unsichtbar.
//
// Ortsbestimmung je Fundstelle: lastIndexOf('inhalt:') vs lastIndexOf('frage:')
// vor der Fundstelle. Der groessere Index gewinnt. Beide -1 => Kopf.
// Bewusst NICHT ueber "vor/nach dem Quizblock" - der Quizblock steht nicht
// bei jedem Kurs am Dateiende.
//
// Muster 1 case-insensitiv (deckungsgleich zu /abkl/i in kursmatrix.mjs Z. 42).
// Muster 2 case-SENSITIV: kursmatrix.mjs Z. 46 prueft n.includes(PFLICHT),
//   und .includes() ist case-sensitiv. Case-insensitiv waere nicht deckungsgleich.
// Muster 3 case-sensitiv wie beauftragt.

import fs from 'node:fs';
import path from 'node:path';

// ---------------------------------------------------------------- Konfiguration
const REPO = 'C:\\Users\\Sven\\resonanz-akademie';
const DATA = path.join(REPO, 'src', 'data');
const OUT_MD = path.join(REPO, 'VERWEISORT.md');

const SOLL_DATEIEN = 71;

const MUSTER = [
  { key: 'abkl', kurz: 'Abkl', text: 'Abkl', flags: 'gi' },
  { key: 'frag', kurz: 'Fragment', text: 'zu Arzt, Heilpraktiker oder Therapeut', flags: 'g' },
  {
    key: 'voll', kurz: 'Vollsatz',
    text: 'Bei körperlichen oder gesundheitlichen Beschwerden gehört die Abklärung zu Arzt, Heilpraktiker oder Therapeut.',
    flags: 'g'
  }
];

const ORTE = ['Inhalt', 'Quiz', 'Kopf'];

// Selbsttest-Erwartungen: Reihenfolge Inhalt / Quiz / Kopf
const ERWARTUNG = {
  G01: { abkl: [3, 2, 0], frag: [3, 1, 0], voll: [3, 0, 0] },
  C03: { abkl: [0, 0, 0], frag: [0, 0, 0], voll: [0, 0, 0] },
  G02: { abkl: [0, 0, 0], frag: [0, 0, 0], voll: [0, 0, 0] }
};

// ---------------------------------------------------------------- Hilfsfunktionen
const maskiere = s => s.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');

function fundstellen(text, muster) {
  const re = new RegExp(maskiere(muster.text), muster.flags);
  const pos = [];
  let m;
  while ((m = re.exec(text)) !== null) {
    pos.push(m.index);
    if (m[0].length === 0) re.lastIndex++;
  }
  return pos;
}

function ortBei(text, pos) {
  const i = text.lastIndexOf('inhalt:', pos);
  const f = text.lastIndexOf('frage:', pos);
  if (i === -1 && f === -1) return 'Kopf';
  return i > f ? 'Inhalt' : 'Quiz';
}

const ersteGruppe = (t, re) => { const m = t.match(re); return m ? m[1] : ''; };

// ---------------------------------------------------------------- Messung
if (!fs.existsSync(DATA)) {
  console.log('ROT   src/data nicht gefunden: ' + DATA);
  process.exit(1);
}

const dateien = fs.readdirSync(DATA)
  .filter(f => f.endsWith('.js') && f !== 'kurse.js')
  .sort();

if (dateien.length !== SOLL_DATEIEN) {
  console.log('ROT   ' + dateien.length + ' Kursdateien gefunden, erwartet ' + SOLL_DATEIEN
    + '. Bestand geaendert - Messung abgebrochen, nichts geschrieben.');
  process.exit(1);
}

const warnungen = [];

// Wortformen-Erhebung: je Muster-1-Treffer die folgenden 12 Zeichen.
// Zweck: sichtbar machen, welche Abkl-Treffer eine Verweisstelle sind
// und welche nur Wortformen wie 'abklingen' oder 'abklopfst'.
const wortformen = new Map();   // 12-Zeichen-Fortsetzung -> { anzahl, kurse:Map }

const zeilen = dateien.map(f => {
  const text = fs.readFileSync(path.join(DATA, f), 'utf8');
  const norm = text.replace(/\s+/g, ' ');
  const id = f.replace(/\.js$/, '');

  const werte = {};
  for (const m of MUSTER) {
    const pos = fundstellen(text, m);
    const z = { Inhalt: 0, Quiz: 0, Kopf: 0 };
    for (const p of pos) z[ortBei(text, p)]++;
    werte[m.key] = z;

    if (m.key === 'abkl') {
      for (const p of pos) {
        const form = text.substr(p + m.text.length, 12);
        let e = wortformen.get(form);
        if (!e) { e = { anzahl: 0, kurse: new Map() }; wortformen.set(form, e); }
        e.anzahl++;
        e.kurse.set(id, (e.kurse.get(id) || 0) + 1);
      }
    }

    // Summenerhaltung: Rohtext gegen whitespace-normalisierten Text.
    // Abweichung heisst: das Muster ist im Rohtext ueber einen Zeilenumbruch
    // gebrochen (oder umgekehrt durch Normalisierung erst entstanden).
    // Kein ROT - die Ortsbestimmung bleibt gueltig -, aber sichtbar zu machen.
    const nRoh = pos.length;
    const nNorm = fundstellen(norm, m).length;
    if (nRoh !== nNorm) {
      warnungen.push({ id, muster: m.kurz, roh: nRoh, norm: nNorm });
    }
  }

  return {
    id,
    titel: ersteGruppe(text, /titel:\s*'([^']*)'/),
    status: ersteGruppe(text, /status:\s*'([^']*)'/) || '(fehlt)',
    werte
  };
});

const nachId = Object.fromEntries(zeilen.map(z => [z.id, z]));

// ---------------------------------------------------------------- Selbsttest
// Laeuft vor jedem Schreibvorgang. ROT => exit(1), nichts wird geschrieben.
console.log('--- Selbsttest ---');
let ok = true;

for (const [id, soll] of Object.entries(ERWARTUNG)) {
  const z = nachId[id];
  if (!z) { console.log('ROT   ' + id + ' nicht gefunden'); ok = false; continue; }
  for (const m of MUSTER) {
    const ist = ORTE.map(o => z.werte[m.key][o]);
    const e = soll[m.key];
    if (ist.join('/') === e.join('/')) {
      console.log('GRUEN ' + id + ' ' + m.kurz + ' ' + ist.join('/'));
    } else {
      console.log('ROT   ' + id + ' ' + m.kurz + ' ' + ist.join('/') + ' - erwartet ' + e.join('/'));
      ok = false;
    }
  }
}

// Monotonie: Vollsatz enthaelt Fragment enthaelt Abkl. Je Ort muss gelten
// voll <= frag <= abkl. Bricht das, ist die Ortsbestimmung selbst defekt.
for (const z of zeilen) {
  for (const o of ORTE) {
    const a = z.werte.abkl[o], fr = z.werte.frag[o], v = z.werte.voll[o];
    if (!(v <= fr && fr <= a)) {
      console.log('ROT   ' + z.id + ' ' + o + ': Vollsatz ' + v + ' / Fragment ' + fr + ' / Abkl ' + a
        + ' - Teilmengenordnung verletzt.');
      ok = false;
    }
  }
}
if (ok) console.log('GRUEN Teilmengenordnung Vollsatz <= Fragment <= Abkl haelt in allen ' + zeilen.length + ' Dateien');

if (!ok) {
  console.log('\nERGEBNIS: ROT - nichts geschrieben.');
  process.exit(1);
}

for (const w of warnungen) {
  console.log('WARNUNG ' + w.id + ' ' + w.muster + ': Rohtext ' + w.roh + ' Treffer, normalisiert '
    + w.norm + ' - Muster ueber Zeilenumbruch gebrochen.');
}

// ---------------------------------------------------------------- Kennzahlen
const live = zeilen.filter(z => z.status === 'live');
const coming = zeilen.filter(z => z.status !== 'live');

const vollInhalt1 = live.filter(z => z.werte.voll.Inhalt >= 1);
const vollInhalt3 = live.filter(z => z.werte.voll.Inhalt >= 3);

const heute = new Date().toISOString().slice(0, 10);

// ---------------------------------------------------------------- Wortformen
// Reine Aufstellung, kein ROT-Kriterium. Gruppiert wird auf den ROHEN
// 12 Zeichen; fuer die Anzeige wird jedes Whitespace-Zeichen durch · ersetzt
// (zeichenweise, damit die Laenge erhalten bleibt und zwei Formen nicht
// versehentlich gleich aussehen).
const zeigeForm = s => '`' + s
  .replace(/\s/g, '·')
  .replace(/\|/g, '\\|')
  .replace(/`/g, 'ˋ') + '`';

const wfSortiert = [...wortformen.entries()]
  .sort((a, b) => (b[1].anzahl - a[1].anzahl) || a[0].localeCompare(b[0]));

const wfGesamt = wfSortiert.reduce((s, [, e]) => s + e.anzahl, 0);

const wortformenMd = ['## Wortformen', '',
  'Je Treffer von Muster 1 (`Abkl`, case-insensitiv) die **folgenden 12 Zeichen**,',
  'gruppiert ueber alle ' + zeilen.length + ' Dateien, absteigend nach Haeufigkeit.',
  'Macht sichtbar, welche Muster-1-Treffer ueberhaupt eine Verweisstelle sind und',
  'welche nur Wortformen wie `abklingen` oder `abklopfst`. Kein ROT-Kriterium.',
  '',
  'Anzeige: Whitespace als `·`, Laenge bleibt 12 Zeichen.',
  '',
  '| Fortsetzung (12 Zeichen) | Anzahl | Kurse |',
  '|---|---|---|']
  .concat(wfSortiert.map(([form, e]) => '| ' + zeigeForm(form) + ' | ' + e.anzahl + ' | '
    + [...e.kurse.entries()].sort((a, b) => a[0].localeCompare(b[0]))
      .map(([k, n]) => k + (n > 1 ? ' ×' + n : '')).join(', ') + ' |'))
  .concat(['',
    'Summe ' + wfGesamt + ' Treffer in ' + wfSortiert.length + ' Wortformen.',
    '']);

// ---------------------------------------------------------------- Markdown
const md = [
  '# Verweisort — resonanz-akademie',
  '',
  '> Generiert ' + heute + ' von `tools/verweisort.mjs`. **Nicht von Hand bearbeiten.**',
  '> Read-only auf `src/data` (' + zeilen.length + ' Dateien, ohne `kurse.js`).',
  '',
  'Gemessen wird nicht *ob*, sondern *wo* der Pflichtverweis steht. Ein Verweis, der',
  'nur in einer Quizfrage vorkommt, erreicht die Leserin im Lektionstext nicht.',
  '',
  '**Ortsbestimmung:** je Fundstelle wird `lastIndexOf(\'inhalt:\')` gegen',
  '`lastIndexOf(\'frage:\')` vor der Fundstelle gestellt; der groessere Index gewinnt.',
  'Sind beide `-1`, liegt die Stelle im Dateikopf.',
  '',
  '**Muster:**',
  '',
  '| # | Muster | Gross-/Kleinschreibung |',
  '|---|---|---|',
  '| Abkl | `Abkl` | egal (wie `/abkl/i` in `kursmatrix.mjs` Z. 42) |',
  '| Fragment | `zu Arzt, Heilpraktiker oder Therapeut` | **exakt** (wie `.includes()` in `kursmatrix.mjs` Z. 46) |',
  '| Vollsatz | vollstaendiger Pflichtsatz | **exakt** |',
  '',
  'Es gilt per Konstruktion Vollsatz \u2264 Fragment \u2264 Abkl je Ort.',
  '',
  '## Kennzahlen (LIVE)',
  '',
  '| Kennzahl | Wert |',
  '|---|---|',
  '| LIVE-Kurse | **' + live.length + '** |',
  '| Kurse mit `Vollsatz_Inhalt >= 1` | **' + vollInhalt1.length + ' / ' + live.length + '** |',
  '| Kurse mit `Vollsatz_Inhalt >= 3` | **' + vollInhalt3.length + ' / ' + live.length + '** |',
  '',
  '---',
  '',
  '## LIVE-Kurse',
  '',
  '| Kurs | Titel | Abkl I | Abkl Q | Abkl K | Frag I | Frag Q | Frag K | Voll I | Voll Q | Voll K |',
  '|---|---|---|---|---|---|---|---|---|---|---|'
]
  .concat(live.slice()
    .sort((a, b) => (a.werte.voll.Inhalt === b.werte.voll.Inhalt
      ? a.id.localeCompare(b.id)
      : a.werte.voll.Inhalt - b.werte.voll.Inhalt))
    .map(z => '| **' + z.id + '** | ' + (z.titel || '—') + ' | '
      + MUSTER.map(m => ORTE.map(o => z.werte[m.key][o]).join(' | ')).join(' | ') + ' |'))
  .concat([
    '',
    'Spalten: I=Inhalt · Q=Quiz · K=Kopf. Sortiert nach `Voll I` aufsteigend —',
    'oben steht, was im Lektionstext fehlt.',
    ''
  ])
  .concat(wortformenMd)
  .concat(warnungen.length
    ? ['## Warnungen — Summenerhaltung', '',
       'Rohtext-Trefferzahl weicht von der Zaehlung auf `text.replace(/\\s+/g, \' \')` ab.',
       'Kein ROT: die Ortsbestimmung bleibt gueltig. Hinweis darauf, dass das Muster',
       'im Rohtext ueber einen Zeilenumbruch gebrochen ist.', '',
       '| Kurs | Muster | Rohtext | normalisiert |', '|---|---|---|---|']
      .concat(warnungen.map(w => '| ' + w.id + ' | ' + w.muster + ' | ' + w.roh + ' | ' + w.norm + ' |'))
      .concat([''])
    : ['## Warnungen — Summenerhaltung', '',
       'Keine. Rohtext- und normalisierte Zaehlung stimmen in allen ' + zeilen.length + ' Dateien ueberein.', ''])
  .concat([
    '---',
    '',
    '## `coming` (nicht oeffentlich abrufbar, nicht in den Kennzahlen)',
    '',
    '| Kurs | Abkl I | Abkl Q | Abkl K | Frag I | Frag Q | Frag K | Voll I | Voll Q | Voll K |',
    '|---|---|---|---|---|---|---|---|---|---|'
  ])
  .concat(coming.map(z => '| ' + z.id + ' | '
    + MUSTER.map(m => ORTE.map(o => z.werte[m.key][o]).join(' | ')).join(' | ') + ' |'))
  .concat(['', '*Generiert ' + heute + ' · ' + zeilen.length + ' Dateien gelesen · read-only auf src/data*', ''])
  .join('\n');

fs.writeFileSync(OUT_MD, md, 'utf8');   // utf8 ohne BOM

console.log('\n--- Ergebnis ---');
console.log('LIVE ' + live.length
  + ' · Vollsatz im Inhalt >=1 ' + vollInhalt1.length
  + ' · >=3 ' + vollInhalt3.length
  + ' · Warnungen ' + warnungen.length
  + ' · Dateien gelesen ' + zeilen.length);
console.log('GRUEN geschrieben: VERWEISORT.md');
