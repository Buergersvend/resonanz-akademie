# Verweisort — resonanz-akademie

> Generiert 2026-08-04 von `tools/verweisort.mjs`. **Nicht von Hand bearbeiten.**
> Read-only auf `src/data` (71 Dateien, ohne `kurse.js`).

Gemessen wird nicht *ob*, sondern *wo* der Pflichtverweis steht. Ein Verweis, der
nur in einer Quizfrage vorkommt, erreicht die Leserin im Lektionstext nicht.

**Ortsbestimmung:** je Fundstelle wird `lastIndexOf('inhalt:')` gegen
`lastIndexOf('frage:')` vor der Fundstelle gestellt; der groessere Index gewinnt.
Sind beide `-1`, liegt die Stelle im Dateikopf.

**Muster:**

| # | Muster | Gross-/Kleinschreibung |
|---|---|---|
| Abkl | `Abkl` | egal (wie `/abkl/i` in `kursmatrix.mjs` Z. 42) |
| Fragment | `zu Arzt, Heilpraktiker oder Therapeut` | **exakt** (wie `.includes()` in `kursmatrix.mjs` Z. 46) |
| Vollsatz | vollstaendiger Pflichtsatz | **exakt** |

Es gilt per Konstruktion Vollsatz ≤ Fragment ≤ Abkl je Ort.

## Kennzahlen (LIVE)

| Kennzahl | Wert |
|---|---|
| LIVE-Kurse | **53** |
| Kurse mit `Vollsatz_Inhalt >= 1` | **28 / 53** |
| Kurse mit `Vollsatz_Inhalt >= 3` | **12 / 53** |

---

## LIVE-Kurse

| Kurs | Titel | Abkl I | Abkl Q | Abkl K | Frag I | Frag Q | Frag K | Voll I | Voll Q | Voll K |
|---|---|---|---|---|---|---|---|---|---|---|
| **B14** | Vitalität & Resilienz — Bewusstsein, Lebensstil & Wohlbefinden | 1 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| **C03** | Die großen Fragen: Spirituelle Selbsterforschung | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| **F01** | Zyklus verstehen: weibliche Rhythmen bewusst leben | 2 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| **F03** | Bewusste Elternschaft — deine Familie mit neuen Augen sehen | 5 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| **G02** | Meditation anleiten: Didaktik & Praxis | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| **G05** | Reiki — Arbeit mit universeller Lebensenergie | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| **G11** | Schutzarbeit & Energiehygiene | 1 | 1 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| **G12** | Waldbaden & Naturachtsamkeit | 2 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| **H01** | Einführung Human Design | 1 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| **K01** | Aura- & Chakraarbeit — Einstieg | 0 | 1 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| **K03** | Meridiane & Akupressur — Selbstfürsorge & Entspannung | 4 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| **K04** | Akupressur für dich selbst | 2 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| **N01** | Aromakunde | 7 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| **N02** | Küchen- & Genusspflanzen: Anbau, Ernte, Zubereitung | 1 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| **N08** | Das Denkmodell der TCM verstehen | 1 | 1 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| **N09** | Darmgesundheit ganzheitlich verstehen | 6 | 1 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| **N10** | Nähr- & Vitalstoffe verstehen | 4 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| **N11** | Nährstoff-Überblick kompakt | 5 | 0 | 1 | 0 | 0 | 0 | 0 | 0 | 0 |
| **N12** | Nahrungsergänzung mit Verstand | 1 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| **N13** | Hautgesundheit ganzheitlich | 3 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| **N14** | Schilddrüsengesundheit ganzheitlich | 7 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| **P03** | Affirmationstraining — Worte als Werkzeug | 0 | 1 | 0 | 0 | 1 | 0 | 0 | 0 | 0 |
| **S15** | Traumarbeit & innere Bilderwelten | 1 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| **T01** | Tierkommunikation — Einstieg | 5 | 1 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| **T02** | Tierkommunikation — Vertiefung | 1 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| **B10** | Herzkohärenz & innere Balance — Einstieg | 1 | 0 | 0 | 1 | 0 | 0 | 1 | 0 | 0 |
| **C04** | Ernährung verstehen und leben | 1 | 0 | 0 | 1 | 0 | 0 | 1 | 0 | 0 |
| **C06** | Business-Energetik & Geldblockaden | 2 | 0 | 0 | 2 | 0 | 0 | 1 | 0 | 0 |
| **N04** | Pflanzenwirkung verstehen: Wirkprinzipien & Sicherheit | 1 | 0 | 0 | 1 | 0 | 0 | 1 | 0 | 0 |
| **N07** | Ayurveda Grundlagen | 1 | 0 | 0 | 1 | 0 | 0 | 1 | 0 | 0 |
| **N15** | Natürliche Substanzen & Pflanzen verstehen | 1 | 0 | 0 | 1 | 0 | 0 | 1 | 0 | 0 |
| **N16** | Symbolische Arbeit & symbolische Zeichen | 1 | 0 | 0 | 1 | 0 | 0 | 1 | 0 | 0 |
| **Y02** | Human Design Vertiefung | 1 | 1 | 0 | 1 | 1 | 0 | 1 | 0 | 0 |
| **Y03** | Numerologie | 1 | 2 | 0 | 1 | 1 | 0 | 1 | 0 | 0 |
| **Z01** | Einführung Numerologie | 1 | 0 | 0 | 1 | 0 | 0 | 1 | 0 | 0 |
| **Z03** | Digitale Praxis aufbauen | 1 | 0 | 0 | 1 | 0 | 0 | 1 | 0 | 0 |
| **B09** | Bewusstseinsbildung & Steuerung | 3 | 1 | 0 | 2 | 0 | 0 | 2 | 0 | 0 |
| **C10** | Epigenetik verstehen und leben | 2 | 0 | 0 | 2 | 0 | 0 | 2 | 0 | 0 |
| **G03** | Atemarbeit — Verbundener Atem & Breathwork | 2 | 0 | 0 | 2 | 0 | 0 | 2 | 0 | 0 |
| **G06** | Yoga — Philosophie, Asanas & Praxis | 2 | 1 | 0 | 2 | 0 | 0 | 2 | 0 | 0 |
| **S01** | Schamanismus — Grundlagen & Praxis | 3 | 1 | 0 | 3 | 1 | 0 | 2 | 0 | 0 |
| **C02** | Wellnesscoaching & ganzheitliche Selbstfürsorge | 5 | 1 | 0 | 3 | 1 | 0 | 3 | 0 | 0 |
| **C09** | Stressmanagement für Führungskräfte | 5 | 1 | 0 | 3 | 1 | 0 | 3 | 0 | 0 |
| **E01** | Einführung Energiearbeit | 3 | 1 | 0 | 3 | 1 | 0 | 3 | 0 | 0 |
| **G01** | Meditation — Grundlagen & Praxis | 3 | 2 | 0 | 3 | 1 | 0 | 3 | 0 | 0 |
| **P02** | Emotionale Prägungen verstehen und ihnen begegnen | 4 | 1 | 0 | 3 | 1 | 0 | 3 | 0 | 0 |
| **P05** | Persönlichkeitstraining energetisch | 3 | 0 | 0 | 3 | 0 | 0 | 3 | 0 | 0 |
| **P12** | Emotionale Intelligenz | 3 | 1 | 0 | 3 | 1 | 0 | 3 | 0 | 0 |
| **T07** | Hausreinigung & Raumenergetik | 3 | 2 | 0 | 3 | 2 | 0 | 3 | 1 | 0 |
| **Y05** | Human Design × Numerologie — Deine persönliche Synthese | 4 | 1 | 0 | 3 | 1 | 0 | 3 | 0 | 0 |
| **C08** | Affirmationen & innere Ausrichtung | 5 | 1 | 0 | 5 | 1 | 0 | 5 | 0 | 0 |
| **G09** | Meditation Komplett | 7 | 1 | 0 | 7 | 1 | 0 | 7 | 1 | 0 |
| **G04** | Atemtechniken Komplett | 13 | 1 | 0 | 12 | 1 | 0 | 12 | 0 | 0 |

Spalten: I=Inhalt · Q=Quiz · K=Kopf. Sortiert nach `Voll I` aufsteigend —
oben steht, was im Lektionstext fehlt.

## Wortformen

Je Treffer von Muster 1 (`Abkl`, case-insensitiv) die **folgenden 12 Zeichen**,
gruppiert ueber alle 71 Dateien, absteigend nach Haeufigkeit.
Macht sichtbar, welche Muster-1-Treffer ueberhaupt eine Verweisstelle sind und
welche nur Wortformen wie `abklingen` oder `abklopfst`. Kein ROT-Kriterium.

Anzeige: Whitespace als `·`, Laenge bleibt 12 Zeichen.

| Fortsetzung (12 Zeichen) | Anzahl | Kurse |
|---|---|---|
| `ärung·zu·Arz` | 90 | B09 ×2, B10, C02 ×4, C04, C06 ×2, C08 ×6, C09 ×4, C10 ×2, E01 ×4, F03, G01 ×4, G03 ×2, G04 ×13, G06 ×2, G09 ×8, N04, N07, N15, N16, P02 ×4, P03, P05 ×3, P12 ×4, S01 ×4, T07 ×5, Y02, Y03 ×2, Y05 ×4, Z01, Z03 |
| `ärung·zu·Kin` | 4 | F03 ×4 |
| `ärung·zum·Ti` | 4 | T01 ×4 |
| `ärung·zum·Ar` | 3 | K03 ×3 |
| `ären·lassen,` | 2 | N11, N14 |
| `ären·zu·lass` | 2 | N10, N11 |
| `ärung·als·da` | 2 | N10, N11 |
| `ärung·ersetz` | 2 | B09, N01 |
| `ärung·schlie` | 2 | F01, N14 |
| `ärung·stattg` | 2 | C02, T01 |
| `ärung·unverz` | 2 | N09, N14 |
| `ärung.·Beide` | 2 | N09, N14 |
| `ären·-·Schwa` | 1 | N01 |
| `ären·—·das·P` | 1 | G06 |
| `ären·—·ich·k` | 1 | N10 |
| `ären·—·und·a` | 1 | N08 |
| `ären·lassen·` | 1 | N09 |
| `ären·lassen.` | 1 | N14 |
| `ären·lassen)` | 1 | S17 |
| `ären,·statt·` | 1 | N02 |
| `ären,·welche` | 1 | G12 |
| `ären.··**Ast` | 1 | N01 |
| `ären.··**Med` | 1 | N01 |
| `ären.··Die·w` | 1 | K03 |
| `ären.·Eher·m` | 1 | N01 |
| `ären."·Diese` | 1 | T01 |
| `ärung·—·gera` | 1 | N14 |
| `ärung·—·nich` | 1 | N09 |
| `ärung·(Arzt/` | 1 | N08 |
| `ärung·abzura` | 1 | G04 |
| `ärung·bedürf` | 1 | B14 |
| `ärung·der·ri` | 1 | F01 |
| `ärung·durch·` | 1 | Y03 |
| `ärung·gehört` | 1 | Y02 |
| `ärung·in·ärz` | 1 | K04 |
| `ärung·körper` | 1 | G11 |
| `ärung·raten.` | 1 | G12 |
| `ärung·sinnvo` | 1 | N01 |
| `ärung·und·Be` | 1 | S15 |
| `ärung·und·ni` | 1 | N14 |
| `ärung·zu·Ärz` | 1 | K01 |
| `ärung·zu·ers` | 1 | N13 |
| `ärung·zu·set` | 1 | N09 |
| `ärung,·kein·` | 1 | N09 |
| `ärung,·nicht` | 1 | C09 |
| `ärung,·wo·di` | 1 | B09 |
| `ärung.··**Sc` | 1 | N01 |
| `ärung.··###·` | 1 | N11 |
| `ärung.··Ersc` | 1 | C09 |
| `ärung.····##` | 1 | N12 |
| `ärung.·Anhal` | 1 | P02 |
| `ärung.·Bei·k` | 1 | Y05 |
| `ärung.·Ein·v` | 1 | N10 |
| `ärung.·Er·is` | 1 | N11 |
| `ärung.·Ganzh` | 1 | N13 |
| `ärung.·Gleic` | 1 | C02 |
| `ärung.·Ideal` | 1 | N11 |
| `ärung.·Verwe` | 1 | T02 |
| `ärung.',····` | 1 | G01 |
| `ärung.ˋ,····` | 1 | N13 |
| `ärung',·····` | 1 | N09 |
| `ingen·zu·las` | 1 | K04 |
| `ingen,·erleb` | 1 | H01 |
| `ingen.·Du·hä` | 1 | B01 |
| `ingt,·sich·"` | 1 | G08 |
| `opfst.····Mi` | 1 | G11 |

Summe 171 Treffer in 66 Wortformen.

## Warnungen — Summenerhaltung

Keine. Rohtext- und normalisierte Zaehlung stimmen in allen 71 Dateien ueberein.

---

## `coming` (nicht oeffentlich abrufbar, nicht in den Kennzahlen)

| Kurs | Abkl I | Abkl Q | Abkl K | Frag I | Frag Q | Frag K | Voll I | Voll Q | Voll K |
|---|---|---|---|---|---|---|---|---|---|
| B01 | 1 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| B02 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| B08 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| C01 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| C07 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| F02 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| F04 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| G07 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| G08 | 1 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| K02 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| P01 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| P04 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| P06 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| P07 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| P18 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| P22 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| P23 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| S17 | 1 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |

*Generiert 2026-08-04 · 71 Dateien gelesen · read-only auf src/data*
