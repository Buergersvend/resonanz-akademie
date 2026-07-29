// fortschritt.mjs  --  Messreihe fortschreiben fuer resonanz-akademie
// Liest tools/kursmatrix_kennzahlen.json und tools/fundscan.json READ-ONLY.
// Schreibt AUSSCHLIESSLICH:
//   C:\Users\Sven\Documents\HumanResonanz\Fortschritt\messwerte.json
// Aufruf:  node tools/fortschritt.mjs
//
// fortschritt.json im selben Zielordner wird NICHT angefasst - weder gelesen
// noch geschrieben. Sie ist kuratiert (schema fortschritt-v1, Monatsebene mit
// Themen und Phasenhistorie) und bezieht ihre KPI-Felder beim Monatsritual
// von Hand aus messwerte.json.
//
// Grundregel: messwerte.json ist maschinell. Ein Lauf schreibt genau einen
// Eintrag. Ein zweiter Lauf am selben Tag ersetzt den Eintrag dieses Tages.

import fs from 'node:fs';
import path from 'node:path';

// ---------------------------------------------------------------- Konfiguration
const REPO = 'C:\\Users\\Sven\\resonanz-akademie';
const ZIEL_ORDNER = 'C:\\Users\\Sven\\Documents\\HumanResonanz\\Fortschritt';
const ZIEL = path.join(ZIEL_ORDNER, 'messwerte.json');

const Q_KURSE = path.join(REPO, 'tools', 'kursmatrix_kennzahlen.json');
const Q_FUND = path.join(REPO, 'tools', 'fundscan.json');

const SCHEMA = 'messwerte-v1';
const HINWEIS = 'Maschinell erzeugte Messreihe. Nie von Hand bearbeiten. '
  + 'Quelle fuer die KPI-Felder in fortschritt.json beim Monatsritual.';

// Pflichtfelder aus der Kennzahlendatei. Beide werden von kursmatrix.mjs
// geschrieben; fehlt eines, ist die Quelle veraltet.
const FELD_SUMME = 'stufensumme';
const FELD_MAX = 'stufensumme_max';

// ---------------------------------------------------------------- Hilfsfunktionen
const zweistellig = (n) => (n < 10 ? '0' : '') + n;

// Ortszeit, nicht UTC: ein Lauf um 00:30 soll auf dem laufenden Tag landen.
function jetzt() {
  const d = new Date();
  return {
    datum: d.getFullYear() + '-' + zweistellig(d.getMonth() + 1) + '-' + zweistellig(d.getDate()),
    zeit: zweistellig(d.getHours()) + ':' + zweistellig(d.getMinutes())
  };
}

function lies(pfad, was) {
  try { return JSON.parse(fs.readFileSync(pfad, 'utf8')); }
  catch (e) { console.log('ROT   ' + was + ' ist kein gueltiges JSON: ' + e.message); process.exit(1); }
}

// ---------------------------------------------------------------- 1. Zielordner
// Wird bewusst NICHT angelegt: ein fehlender Ordner bedeutet, dass die
// Ablagestruktur anders liegt als erwartet. Dann waere Anlegen falsch.
if (!fs.existsSync(ZIEL_ORDNER) || !fs.statSync(ZIEL_ORDNER).isDirectory()) {
  console.log('ROT   Zielordner fehlt');
  process.exit(1);
}

// ---------------------------------------------------------------- 2. Bestand
let bestand = { schema: SCHEMA, hinweis: HINWEIS, messungen: [] };
if (fs.existsSync(ZIEL)) {
  const alt = lies(ZIEL, 'messwerte.json');
  if (alt.schema !== SCHEMA) {
    console.log('ROT   Fremdes Schema in messwerte.json - nichts geschrieben');
    process.exit(1);
  }
  bestand = alt;
  if (!Array.isArray(bestand.messungen)) bestand.messungen = [];
  bestand.hinweis = HINWEIS;
}

// ---------------------------------------------------------------- 3. Kennzahlen
if (!fs.existsSync(Q_KURSE)) {
  console.log('ROT   kursmatrix_kennzahlen.json fehlt - erst kursmatrix.mjs laufen lassen');
  process.exit(1);
}
const kennzahlen = lies(Q_KURSE, 'kursmatrix_kennzahlen.json');

// 'generiert' gehoert zur Quelldatei, nicht in die Messreihe - dort tragen
// datum und zeit den Zeitstempel.
const kurse = Object.assign({}, kennzahlen);
delete kurse.generiert;

for (const feld of [FELD_SUMME, FELD_MAX]) {
  if (kennzahlen[feld] === undefined) {
    console.log('ROT   Feld ' + feld + ' fehlt in kursmatrix_kennzahlen.json');
    process.exit(1);
  }
}
const stufensumme = kennzahlen[FELD_SUMME];
const stufenmax = kennzahlen[FELD_MAX];

// ---------------------------------------------------------------- 4. Fundscan
let fundscan = null;
if (!fs.existsSync(Q_FUND)) {
  console.log('HINWEIS fundscan.json fehlt - Eintrag ohne Scannerwerte');
} else {
  const f = lies(Q_FUND, 'fundscan.json');
  const kurseFund = f.kurse || {};
  const vorrang = Object.keys(kurseFund)
    .filter(id => kurseFund[id] && kurseFund[id].proRegel && kurseFund[id].proRegel.R5 > 0).length;
  fundscan = { funde: f.gesamt, proRegel: f.proRegel, vorrang };
}

// ---------------------------------------------------------------- 5. Eintrag
const stempel = jetzt();
const eintrag = {
  datum: stempel.datum,
  zeit: stempel.zeit,
  kurse,
  fundscan,
  notiz: ''
};

// ---------------------------------------------------------------- 6. Einordnen
const treffer = bestand.messungen.findIndex(m => m && m.datum === stempel.datum);
if (treffer >= 0) {
  // Eine von Hand gesetzte Notiz ist der einzige Teil des Eintrags, den der
  // Lauf nicht neu erzeugen kann - sie ueberlebt das Ersetzen.
  const alteNotiz = bestand.messungen[treffer].notiz;
  if (alteNotiz) eintrag.notiz = alteNotiz;
  bestand.messungen[treffer] = eintrag;
  console.log('HINWEIS Messung fuer ' + stempel.datum + ' ersetzt');
  if (alteNotiz) console.log('HINWEIS Notiz aus vorheriger Messung uebernommen');
} else {
  bestand.messungen.push(eintrag);
}

// ---------------------------------------------------------------- 7. Schreiben
fs.writeFileSync(ZIEL, JSON.stringify(bestand, null, 2), 'utf8');

// ---------------------------------------------------------------- 8. Konsole
console.log('GRUEN messwerte.json: ' + bestand.messungen.length + ' Messungen \u00b7 Stufensumme '
  + stufensumme + '/' + stufenmax);
