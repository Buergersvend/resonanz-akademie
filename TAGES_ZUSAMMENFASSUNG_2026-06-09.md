# Tageszusammenfassung Kurs-Sanierung — 2026-06-09

## Heute bearbeitet (Cluster 2: Heilkunde/Medizin)

| Kurs | Titel (neu) | Ergebnis | Build |
|------|-------------|----------|-------|
| K04 | „Akupressur für dich selbst" (ehem. Akupressur) | SANIERT — Umbau zu Selbst-Wellness/Selbstanwendung | grün, committet |
| C10 | „Epigenetik verstehen und leben" | (bereits am Vortag fertig) committet | grün |
| N08 | „Das Denkmodell der TCM verstehen" | GEPRÜFT — grün, KEINE Sanierung nötig (bereits reiner Bildungs-/Reflexionskurs, klare Heilkunde-Abgrenzung) | n/a, status:live |
| C04 | „Ernährung verstehen und leben" (ehem. Ernährungscoach) | SANIERT — Umbau zu Wissens-/Selbstanwendungskurs | grün, committet |
| T02 | „Tierkommunikation — Vertiefung" | SANIERT — Heilkunde am Tier raus (Körper-Scan, Krankheitsspiegelung, Traumaheilung, Einschläferungsberatung), Geschäfts-/Ausbildungsframing raus | grün, committet |
| N07 | „Ayurveda Grundlagen" | SANIERT — Umbau zu Kultur-/Selbsterfahrungswissen (Heilmittel/Dosierungen/Indikationen raus, Klient-Stellen raus) | Build steht noch aus (heute Schluss) |

## Sanierungsdetails

### K04 — Akupressur für dich selbst
- Option B (Großumbau zu Selbst-Wellness). Titel neu. bereich bleibt 'koerper'.
- M4-L1 „Organ-Emotions-Verbindung" (rote Linie Symptom→Organ-Diagnose) GESTRICHEN + ersetzt durch „Akupressur-Punkte zur eigenen emotionalen Balance".
- M3 „Behandlungsprotokolle" → „Wohlfühl-Sequenzen"; M5 „Klientenarbeit" → „Akupressur im eigenen Alltag" (M5-L3 Kontraindikationen bleibt als Sicherheitslektion); M6 Rezepturen/Praxis → Selbstanwendung; ~50 Punkt-Indikationen zu Wohlbefinden entschärft.
- 6 Module / 18 Lektionen.

### N08 — Das Denkmodell der TCM verstehen
- Bereits sauber: Bildungs-/Reflexionskurs, eigene Lektionen „Grenze zur Heilkunde" / „Seriös umgehen", Quiz verstärkt die nicht-heilkundliche Haltung. Keine Änderung, keine neue Datei.
- Technische Notiz: anderes Datenschema (`text` statt `inhalt`/`uebung`, plus `quiz`-Block).

### C04 — Ernährung verstehen und leben
- Option B (Großumbau, wie C10/K04). bereich bleibt 'coaching'.
- M3-L2 Krankheits-Kausalkette (Entzündung→Diabetes/Krebs/Alzheimer) + M5-L2 (Prävention/Hormonsupport) neutralisiert.
- M4 „Coaching-Gespräch" → „Den eigenen Veränderungsweg gestalten" (Erstgespräch→Standortbestimmung, Motivational Interviewing→innerer Dialog, Prozess über Sitzungen→eigener Weg).
- M6 „Praxisaufbau" → „Vertiefung / eigener Weg"; Coach/Klient/Honorar/Nische raus.
- Disordered-Eating-Sensibilität beachtet: Anti-Diät-Haltung beibehalten, „½–1 kg/Woche"-Zahl entfernt, Hinweise auf psychotherapeutische Hilfe ergänzt.
- 6 Module / 18 Lektionen.

### T02 — Tierkommunikation Vertiefung
- Großumbau: reiner Erlebnis-/Verbindungskurs.
- M4-L1 „Tiergesundheit/Körper-Scan" → „Wohlbefinden" (Körper-Scan/Schmerzlokalisierung raus).
- M3-L2 „Krankheitsspiegelung" (Symptom→Ursache am Tier) → emotionale Resonanz, körperliche Erkrankungen ausdrücklich tierärztlich.
- M2 „Energetische Arbeit" → „Verbindung" (Heilung/Fernheilung/Entzündungserkennung raus); Traumaheilung → einfühlsame Verbindung + Verweis Tierverhaltensfachperson.
- Einschläferungs-/Krisenberatung: nur emotionale Perspektive, Gesundheitliches strikt Tierarzt.
- M5 Geschäfts-/Ausbildungsframing („Absolventin Human Resonanz Akademie", Honorar/Mentoring/Premium) raus.
- 6 Module / 18 Lektionen. bereich bleibt 'tiere'.

### N07 — Ayurveda Grundlagen
- Großumbau (wie C04): Kultur-/Selbsterfahrungswissen.
- M4 (Heilkunde-Kern) komplett umgebaut: „Heilmittel & Kräuter" → „Gewürze & Kräuter in der Küche". Alle Dosierungen + Krankheitsindikationen + Indikations-„Hausapotheke" entfernt; Pflanzen/Gewürze nur kulturell „nach ayurvedischer Lehre" + Verweis Arzt/Apotheke.
- M5-L2/M6-L2 Klientenarbeit → Selbstpraxis; Marma-Wirkversprechen → Wohlfühl-Ritual.
- M1/M2 „Krankheit entsteht…", „jeder Geschmack ist Medizin", „entzündungshemmend/fiebersenkend" → Modell-/Typ-Wissen.
- M6-L3 „Was du empfehlen darfst" + Therapeuten-Sprungbrett → „Was der Kurs ist/nicht ist" + Disclaimer.
- 6 Module / 18 Lektionen. bereich bleibt 'naturheilkunde'.
- Technische Notiz: Markdown-inhalt-Schema, mehr Kopffelder (untertitel, format, dauer, level, voraussetzungen).

## Offen / als Nächstes (Cluster 2, noch nicht bearbeitet)
- N07-Build + Commit nachholen (heute Schluss).
- Dann: C02, N16, B14, K03, danach N09–N15.
- Danach: Cluster 1 (depublizierte Kurse) einzeln + G08-status-Bug.

## Technische Lernpunkte (heute bestätigt)
- Mehrere Datenschemata im Repo: (a) inhalt/uebung/anleitung/dauer, (b) text+quiz (N08), (c) Markdown-inhalt mit erweitertem Kopf (N07).
- Block-Ersetzungen ganzer `inhalt`-Werte: schließenden Backtick im new-Wert WEGLASSEN (öffnenden behalten), sonst doppelter/fehlender Backtick → Syntaxfehler. Bei T02 trat einmal ein fehlender Backtick auf (per str_replace gefixt).
- Edits als JSON via create_file + generischer Runner (json.load + assert count==1) umgeht Em-Dash/Quote-Probleme in Python-Heredocs. Innere Quotes in JSON typografisch („ ") statt ASCII, um vorzeitiges String-Ende zu vermeiden.
- Finale Datei: UTF-8 ohne BOM, CRLF, .js-Endung. node --check via .mjs-Kopie.

## Hinweis (aus Memory, weiterhin offen)
- Vor öffentlichem Marketing der Lichtkern-App: Sipgate-Nummer fürs Impressum einrichten.
