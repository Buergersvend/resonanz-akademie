// begriffsgrep.mjs  --  Begriffs-Grep fuer resonanz-akademie (Regel 36)
// Liest src/data READ-ONLY. Schreibt NUR BEGRIFFSGREP.md im Repo-Root.
// Aufruf:  node tools/begriffsgrep.mjs
//
// Zweck: Regel 36 verlangt vor jeder Volltextabnahme einen sauberen Grep ueber
// die Leitvokabeln. Von Hand ist das 49 Mal derselbe Handgriff.
//
// ENTWURFSREGEL (aus der Handmessung 07.08.2026):
//   Ein Pruefwerkzeug darf UEBERzaehlen, nie UNTERzaehlen.
//   Belegt: 'Hormon' case-sensitiv = 0 in G04, 'hormon' ignore-case = 3.
//   Die drei Stellen stecken in Zusammensetzungen ('Stresshormone').
//   Falschpositive kosten einen Blick. Falschnegative kosten eine Abnahme.
//   -> Alle Muster laufen ignore-case. Distraktoren werden KATEGORISIERT,
//      nie unterdrueckt (Regel 5).
//
// ABGRENZUNG: Dieses Werkzeug fuehrt eine EIGENE Zahl. fundscan.mjs bleibt
// unberuehrt, damit die Zeitreihe (2154 am 07.08.2026) nicht bricht.

import fs from 'node:fs';
import path from 'node:path';

// ---------------------------------------------------------------- Konfiguration
const REPO = 'C:\\Users\\Sven\\resonanz-akademie';
const DATA = path.join(REPO, 'src', 'data');
const URTEILE = path.join(REPO, 'tools', 'kursmatrix_urteile.json');
const OUT_MD = path.join(REPO, 'BEGRIFFSGREP.md');

const KONTEXT_VOR = 90;
const KONTEXT_LAENGE = 200;

// ---------------------------------------------------------------- Begriffsgruppen
// Gruppen A-D: Uebergabe 06.08.2026. Gruppe E: J0 (Ursprungs-Strang 05.08.2026).
const GRUPPEN = {
  A: {
    name: 'Wirkmechanismus',
    begriffe: ['gehirn', 'neuronal', 'synapt', 'hirnare', 'nervensystem', 'hormon',
      'vagus', 'theta', 'alpha', 'frequenz', 'botenstoff', 'cortisol',
      'amygdala', 'limbisch', 'blutdruck', 'stoffwechsel']
  },
  B: {
    name: 'Autoritaet / Statistik',
    begriffe: ['studie', 'forschung', 'wissenschaft', 'untersuchung', 'bewiesen',
      'erwiesen', 'nachgewiesen', 'prozent', '%', 'experte', 'universit']
  },
  C: {
    name: 'Heilkunde',
    begriffe: ['heilt', 'heilung', 'therapie', 'depression', 'angststoerung',
      'angststörung', 'diagnose', 'symptom', 'krankheit', 'lindern',
      'medikament', 'trauma']
  },
  D: {
    name: 'Wirkversprechen',
    begriffe: ['garantiert', 'fuer immer', 'für immer', 'dauerhaft',
      'veraendert dein leben', 'verändert dein leben',
      'funktioniert immer', 'in jedem fall']
  },
  E: {
    name: 'J0 — neue Anker (Jahreskreis)',
    begriffe: ['melatonin', 'vitamin d', 'zirkadian', 'biorhythmus', 'immun',
      'winterdepression', 'saisonal-affektiv', 'jahreszeit']
  }
};

// Blindmuster: darf NIRGENDS treffen. Trifft es doch, ist die Suche kaputt.
const BLIND = 'zwiebelkuchen';
// Positivmuster: muss in JEDER Kursdatei treffen.
const POSITIV = 'inhalt:';

// ---------------------------------------------------------------- Selbsttest
// Sollwerte aus der Handmessung am 07.08.2026 (PowerShell, [regex]::Matches).
// KEINE geschaetzten Werte (Regel 35). Wird eine Zeile hier geaendert,
// sind alle Vorlaeufe ungueltig.
const SOLL = [
  ['G04', 'hormon', 3],
  ['G04', 'nervensystem', 25],
  ['G04', 'immun', 6],
  ['G04', 'studie', 2],
  ['G04', 'alpha', 0],
  ['G04', 'prozent', 0],
  ['G04', '%', 0],
  ['G04', BLIND, 0],
  ['G04', POSITIV, 18],
  ['P03', 'hormon', 0],
  ['P03', 'studie', 0],
  ['P03', 'prozent', 0],
  ['P03', '%', 1],
  ['P03', BLIND, 0],
  ['P03', POSITIV, 18]
];

// ---------------------------------------------------------------- Hilfsfunktionen
const maskiere = s => s.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');

function treffer(text, begriff) {
  const re = new RegExp(maskiere(begriff), 'gi');
  const out = [];
  let m;
  while ((m = re.exec(text)) !== null) {
    out.push(m.index);
    if (m.index === re.lastIndex) re.lastIndex++;   // Schutz gegen Nullbreite
  }
  return out;
}

// Ortsbestimmung wie verweisort.mjs: letzter Strukturmarker VOR der Fundstelle.
function ort(text, index) {
  const i = text.lastIndexOf('inhalt:', index);
  const f = text.lastIndexOf('frage:', index);
  if (i < 0 && f < 0) return 'Kopf';
  return f > i ? 'Quiz' : 'Inhalt';
}

function ausschnitt(text, index) {
  const a = Math.max(0, index - KONTEXT_VOR);
  const l = Math.min(KONTEXT_LAENGE, text.length - a);
  return text.substr(a, l).replace(/\s+/g, ' ').trim();
}

// ---------------------------------------------------------------- Einlesen
if (!fs.existsSync(DATA)) { console.log('ROT   src/data nicht gefunden - Pfad pruefen.'); process.exit(1); }

const dateien = fs.readdirSync(DATA).filter(f => f.endsWith('.js') && f !== 'kurse.js').sort();
if (dateien.length === 0) { console.log('ROT   Keine Kursdateien gefunden.'); process.exit(1); }

let urteile = {};
if (fs.existsSync(URTEILE)) {
  try { urteile = JSON.parse(fs.readFileSync(URTEILE, 'utf8')); }
  catch (e) { console.log('ROT   kursmatrix_urteile.json ist kein gueltiges JSON: ' + e.message); process.exit(1); }
}

const texte = {};
for (const f of dateien) texte[f.replace(/\.js$/, '')] = fs.readFileSync(path.join(DATA, f), 'utf8');
const ids = Object.keys(texte).sort();

// ---------------------------------------------------------------- Selbsttest
console.log('--- Selbsttest ---');
let testOk = true;
for (const [id, begriff, soll] of SOLL) {
  if (!texte[id]) { console.log('ROT   ' + id + ' nicht im Bestand'); testOk = false; continue; }
  const ist = treffer(texte[id], begriff).length;
  if (ist === soll) console.log('GRUEN ' + id + ' ' + begriff + ' = ' + soll);
  else { console.log('ROT   ' + id + ' ' + begriff + ' = ' + ist + ' - erwartet ' + soll); testOk = false; }
}

// Blindkontrolle ueber den GESAMTEN Bestand, nicht nur ueber zwei Kurse.
const blindGesamt = ids.reduce((s, id) => s + treffer(texte[id], BLIND).length, 0);
if (blindGesamt === 0) console.log('GRUEN Blindmuster trifft nirgends im Bestand');
else { console.log('ROT   Blindmuster trifft ' + blindGesamt + ' Mal - Suche unbrauchbar'); testOk = false; }

// Positivkontrolle: jede Kursdatei muss Lektionen haben.
const ohnePositiv = ids.filter(id => treffer(texte[id], POSITIV).length === 0);
if (ohnePositiv.length === 0) console.log('GRUEN Positivmuster trifft in allen ' + ids.length + ' Dateien');
else { console.log('ROT   ohne "' + POSITIV + '": ' + ohnePositiv.join(', ')); testOk = false; }

// Fall-Gegenprobe: der Befund, der dieses Werkzeug geformt hat.
const gross = (texte['G04'] || '').split('Hormon').length - 1;
const egal = treffer(texte['G04'] || '', 'hormon').length;
if (egal > gross) console.log('GRUEN Fall-Gegenprobe G04: ignore-case ' + egal + ' > case-sensitiv ' + gross);
else { console.log('ROT   Fall-Gegenprobe G04 greift nicht - ignore-case wirkt nicht'); testOk = false; }

if (!testOk) { console.log('\nERGEBNIS: ROT - nichts geschrieben.'); process.exit(1); }

// ---------------------------------------------------------------- Messung
const kurse = ids.map(id => {
  const t = texte[id];
  const funde = [];
  for (const [gk, g] of Object.entries(GRUPPEN)) {
    for (const b of g.begriffe) {
      for (const idx of treffer(t, b)) {
        funde.push({ gruppe: gk, begriff: b, index: idx, ort: ort(t, idx), text: ausschnitt(t, idx) });
      }
    }
  }
  funde.sort((a, b) => a.index - b.index);
  const proGruppe = {};
  for (const gk of Object.keys(GRUPPEN)) proGruppe[gk] = funde.filter(f => f.gruppe === gk).length;
  return {
    id,
    abgenommen: !!(urteile[id] && urteile[id].abgenommen_gegen),
    gegen: (urteile[id] && urteile[id].abgenommen_gegen) || '',
    funde,
    proGruppe,
    imInhalt: funde.filter(f => f.ort === 'Inhalt').length,
    gesamt: funde.length
  };
});

const mitFunden = kurse.filter(k => k.gesamt > 0);
const sauber = kurse.filter(k => k.gesamt === 0);
const abgenommenMitFunden = kurse.filter(k => k.abgenommen && k.gesamt > 0);
const gesamtFunde = kurse.reduce((s, k) => s + k.gesamt, 0);
const heute = new Date().toISOString().slice(0, 10);

// ---------------------------------------------------------------- Markdown
const L = [];
L.push('# Begriffs-Grep — resonanz-akademie', '');
L.push('> Generiert ' + heute + ' von `tools/begriffsgrep.mjs`. **Nicht von Hand bearbeiten.**');
L.push('> Read-only auf `src/data`. Eigene Zahl — unabhaengig von `fundscan.mjs`.');
L.push('>');
L.push('> **Ein Treffer ist kein Urteil.** Distraktoren stehen bewusst mit drin und');
L.push('> werden einzeln beurteilt (Regel 5: kategorisieren, nie unterdruecken).');
L.push('');
L.push('## Ergebnis', '');
L.push('| Kennzahl | Wert |', '|---|---|');
L.push('| Dateien gelesen | ' + ids.length + ' |');
L.push('| Kurse ohne Treffer | **' + sauber.length + '** |');
L.push('| Kurse mit Treffern | ' + mitFunden.length + ' |');
L.push('| Treffer gesamt | ' + gesamtFunde + ' |');
L.push('| davon im Lektionsinhalt | ' + kurse.reduce((s, k) => s + k.imInhalt, 0) + ' |');
L.push('| **abgenommene Kurse mit Treffern** | **' + abgenommenMitFunden.length + ' / ' + kurse.filter(k => k.abgenommen).length + '** |');
L.push('');

if (abgenommenMitFunden.length) {
  L.push('## 🔴 Abgenommene Kurse mit Treffern', '');
  L.push('*`volltextabgenommen` misst gegen das Raster von damals. Diese Kurse tragen');
  L.push('das Siegel und Treffer nach dem heutigen Raster. Jeder Treffer einzeln beurteilen —');
  L.push('viele werden Distraktoren sein.*', '');
  L.push('| Kurs | abgenommen gegen | Treffer | davon Inhalt | A | B | C | D | E |', '|---|---|---|---|---|---|---|---|---|');
  for (const k of abgenommenMitFunden.slice().sort((a, b) => b.gesamt - a.gesamt)) {
    L.push('| **' + k.id + '** | `' + k.gegen + '` | **' + k.gesamt + '** | ' + k.imInhalt + ' | '
      + k.proGruppe.A + ' | ' + k.proGruppe.B + ' | ' + k.proGruppe.C + ' | ' + k.proGruppe.D + ' | ' + k.proGruppe.E + ' |');
  }
  L.push('');
}

L.push('## Alle Kurse mit Treffern', '');
L.push('| Kurs | abg. | Treffer | Inhalt | A | B | C | D | E |', '|---|---|---|---|---|---|---|---|---|');
for (const k of mitFunden.slice().sort((a, b) => b.gesamt - a.gesamt || a.id.localeCompare(b.id))) {
  L.push('| ' + k.id + ' | ' + (k.abgenommen ? '✅' : '—') + ' | **' + k.gesamt + '** | ' + k.imInhalt + ' | '
    + k.proGruppe.A + ' | ' + k.proGruppe.B + ' | ' + k.proGruppe.C + ' | ' + k.proGruppe.D + ' | ' + k.proGruppe.E + ' |');
}
L.push('');
L.push('Gruppen: A=' + GRUPPEN.A.name + ' · B=' + GRUPPEN.B.name + ' · C=' + GRUPPEN.C.name
  + ' · D=' + GRUPPEN.D.name + ' · E=' + GRUPPEN.E.name);
L.push('');

if (sauber.length) {
  L.push('## Kurse ohne Treffer (' + sauber.length + ')', '');
  L.push(sauber.map(k => k.id).join(' · '), '');
}

L.push('---', '', '## Fundliste je Kurs', '');
for (const k of mitFunden.slice().sort((a, b) => a.id.localeCompare(b.id))) {
  L.push('### ' + k.id + ' — ' + k.gesamt + ' Treffer' + (k.abgenommen ? ' · ⚠️ abgenommen gegen `' + k.gegen + '`' : ''), '');
  L.push('| # | Gr. | Begriff | Ort | Zeichen | Umfeld |', '|---|---|---|---|---|---|');
  k.funde.forEach((f, i) => {
    L.push('| ' + (i + 1) + ' | ' + f.gruppe + ' | `' + f.begriff + '` | ' + f.ort + ' | ' + f.index
      + ' | ' + f.text.replace(/\|/g, '\\|') + ' |');
  });
  L.push('');
}

L.push('---', '');
L.push('*Generiert ' + heute + ' · ' + ids.length + ' Dateien · read-only auf src/data ·');
L.push('Selbsttest ' + SOLL.length + ' Sollwerte + Blind- + Positiv- + Fall-Gegenprobe*', '');

fs.writeFileSync(OUT_MD, L.join('\n'), 'utf8');

// ---------------------------------------------------------------- Konsole
console.log('\n--- Ergebnis ---');
console.log('Dateien ' + ids.length
  + ' · Treffer ' + gesamtFunde
  + ' · davon im Inhalt ' + kurse.reduce((s, k) => s + k.imInhalt, 0)
  + ' · Kurse sauber ' + sauber.length
  + ' · abgenommen mit Treffern ' + abgenommenMitFunden.length);
if (abgenommenMitFunden.length) {
  console.log('ACHTUNG abgenommen und dennoch Treffer: '
    + abgenommenMitFunden.map(k => k.id + '(' + k.gesamt + ')').join(', '));
}
console.log('GRUEN geschrieben: BEGRIFFSGREP.md');
