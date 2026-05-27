// G06.js — Yogalehrer-Grundausbildung
// Standard ◈◈ · 6 Module · 18 Lektionen
// Human Resonanz Akademie · Mai 2026

const G06 = {
  id: 'G06',
  titel: 'Yogalehrer-Grundausbildung',
  untertitel: 'Philosophie · Asanas · Pranayama · Unterrichtsmethodik',
  bereich: 'koerpergeist',
  format: 'standard',
  dauer: '4–6 Stunden',
  level: 'Einsteiger bis Fortgeschrittene',
  voraussetzungen: 'Keine',
  beschreibung: `Yoga ist weit mehr als körperliche Übung — es ist ein jahrtausendealtes System zur Vereinigung von Körper, Geist und Atem. In diesem Kurs lernst du die philosophischen Grundlagen, die wichtigsten Asanas mit sicherem Alignment, Pranayama und Meditation sowie die Methodik, um Yoga professionell zu unterrichten. Von der Energieanatomie über Sequencing bis zur Ethik — du baust dir ein fundiertes Wissen auf, das dich befähigt, Yoga authentisch zu praktizieren und weiterzugeben.`,
  status: 'live',

  module: [
    // ============================================================
    // MODUL 1 — Was ist Yoga wirklich?
    // ============================================================
    {
      id: 'G06-M1',
      titel: 'Was ist Yoga wirklich?',
      beschreibung: 'Die philosophischen Wurzeln des Yoga verstehen, die großen Yoga-Wege kennenlernen und die Energieanatomie als Brücke zwischen Körper und Bewusstsein begreifen.',
      lektionen: [
        {
          id: 'G06-M1-L1',
          titel: 'Jenseits der Matte — Yoga als Lebensphilosophie',
          inhalt: `## Jenseits der Matte

### Yoga ist kein Sport

Das Wort "Yoga" kommt aus dem Sanskrit und bedeutet "Verbindung", "Vereinigung". Es beschreibt den Zustand, in dem Körper, Geist und Atem zu einer Einheit verschmelzen — und gleichzeitig den Weg dorthin. Yoga ist kein Fitnessprogramm, das zufällig auf einer Matte stattfindet. Es ist ein umfassendes Lebenssystem, das vor über 5.000 Jahren in Indien entstand und seither Millionen Menschen auf der ganzen Welt transformiert hat.

Die körperlichen Übungen — die Asanas — sind nur ein kleiner Teil des Yoga. In der klassischen Tradition sind sie ein Werkzeug unter vielen, um den Körper auf Meditation und innere Freiheit vorzubereiten. Dass der Westen Yoga primär als Körperpraxis kennt, ist eine historische Verengung des 20. Jahrhunderts.

### Die acht Glieder — Patanjalis Yogasutra

Der Weise Patanjali verfasste vor etwa 2.000 Jahren die Yogasutras — 196 kurze Lehrsätze, die das Wesen und die Praxis des Yoga systematisieren. Sein Achtgliedriger Pfad (Ashtanga — ashta = acht, anga = Glied) beschreibt den vollständigen Weg:

**1. Yama — der Umgang mit der Welt:**
Fünf ethische Leitlinien: Ahimsa (Gewaltlosigkeit), Satya (Wahrhaftigkeit), Asteya (Nicht-Stehlen), Brahmacharya (Maßhalten), Aparigraha (Nicht-Anhaften). Diese sind keine Regeln, sondern Orientierungspunkte — Spiegel, in denen du dein Handeln prüfen kannst.

**2. Niyama — der Umgang mit dir selbst:**
Fünf persönliche Übungsprinzipien: Saucha (Reinheit), Santosha (Zufriedenheit), Tapas (Disziplin/inneres Feuer), Svadhyaya (Selbststudium), Ishvara Pranidhana (Hingabe an etwas Größeres).

**3. Asana — die Körperhaltungen:**
Patanjali definiert Asana als "sthira sukham asanam" — eine Haltung, die gleichzeitig stabil und angenehm ist. Das ist die gesamte Asana-Philosophie in drei Worten: Stabilität und Leichtigkeit zugleich.

**4. Pranayama — die Atemlenkung:**
Bewusste Steuerung des Atems als Brücke zwischen Körper und Geist. Prana bedeutet Lebensenergie, Ayama bedeutet Ausdehnung — Pranayama dehnt die Lebensenergie aus.

**5. Pratyahara — Rückzug der Sinne:**
Die Fähigkeit, die Aufmerksamkeit von äußeren Reizen abzuziehen und nach innen zu lenken. Die Voraussetzung für Konzentration und Meditation.

**6. Dharana — Konzentration:**
Ausrichtung des Geistes auf einen einzigen Punkt — einen Klang, ein Bild, den Atem, eine Empfindung.

**7. Dhyana — Meditation:**
Wenn Dharana mühelos wird — wenn die Konzentration fließt, ohne dass du sie halten musst — ist das Meditation. Nicht das Bemühen um Stille, sondern das Eintauchen in Stille.

**8. Samadhi — Versenkung:**
Der Zustand vollkommener Einheit — das Auflösen der Grenze zwischen Beobachter und Beobachtetem. Samadhi ist kein permanenter Zustand, sondern ein Erleben, das in Momenten aufblitzt und sich mit der Praxis vertieft.

### Der rote Faden

Die acht Glieder sind keine Treppe, die du linear aufsteigst. Sie sind eher wie die Speichen eines Rades — alle gleichzeitig präsent, alle miteinander verbunden. Deine Asana-Praxis wird tiefer, wenn dein Atem bewusst wird. Dein Atem wird feiner, wenn deine Ethik klar ist. Deine Ethik klärt sich, wenn du meditierst.

### Übung: Die Acht Glieder in deinem Alltag

Gehe die acht Glieder durch und notiere für jedes einen konkreten Bezug zu deinem aktuellen Leben:
1. Yama: Wo praktiziere ich bereits Gewaltlosigkeit oder Wahrhaftigkeit?
2. Niyama: Welches der fünf Prinzipien fehlt mir am meisten?
3. Asana: Wie ist mein Verhältnis zu meinem Körper?
4. Pranayama: Wie oft atme ich bewusst?
5. Pratyahara: Wann war ich zuletzt wirklich frei von Ablenkung?
6. Dharana: Kann ich mich auf eine Sache konzentrieren?
7. Dhyana: Meditiere ich? Wenn ja — wie fühlt es sich an?
8. Samadhi: Kenne ich Momente totaler Präsenz?`
        },
        {
          id: 'G06-M1-L2',
          titel: 'Die großen Yoga-Wege — Hatha, Vinyasa, Yin, Kundalini & Ashtanga',
          inhalt: `## Die großen Yoga-Wege

### Yoga ist nicht gleich Yoga

Was wir im Westen als "Yoga" kennen, ist ein vielstimmiger Chor aus verschiedenen Traditionen, Stilen und Schulen. Jeder Weg hat seine eigene Philosophie, seinen eigenen Rhythmus und seine eigene Betonung. Keiner ist besser als der andere — sie sprechen unterschiedliche Menschen in unterschiedlichen Lebensphasen an.

### Hatha Yoga — die Wurzel

**Grundidee:** Ha = Sonne, Tha = Mond. Hatha Yoga strebt nach der Vereinigung von Gegensätzen — Aktivität und Ruhe, Kraft und Hingabe, Ein- und Ausatmung.

**Praxis:** Einzelne Haltungen werden länger gehalten (30 Sekunden bis mehrere Minuten). Zwischen den Haltungen gibt es Pausen. Der Fokus liegt auf Ausrichtung, Atmung und innerem Erleben.

**Für wen:** Einsteiger, Menschen die Achtsamkeit suchen, alle die einen ruhigen, gründlichen Zugang bevorzugen. Hatha ist die Grundlage, auf der alle modernen Yogastile aufbauen.

### Vinyasa Yoga — der Fluss

**Grundidee:** Vinyasa bedeutet "auf eine bestimmte Weise platzieren". Im Vinyasa wird jede Bewegung mit einem Atemzug synchronisiert — Einatmung hebt, Ausatmung senkt. Das Ergebnis ist ein fließender, meditativer Bewegungsfluss.

**Praxis:** Haltungen gehen dynamisch ineinander über. Es gibt keinen festen Ablauf — jede Klasse ist anders. Das Tempo variiert von langsam-meditativ bis athletisch-fordernd.

**Für wen:** Menschen, die Bewegung als Meditation erleben. Die sich durch Stillsitzen schwer konzentrieren können, aber im Fluss Ruhe finden. Sportler, Tänzer, Bewegungsfreudige.

### Ashtanga Yoga — die Disziplin

**Grundidee:** Eine fest definierte Abfolge von Haltungen (Serien), die immer gleich praktiziert wird. Die erste Serie (Primary Series) umfasst etwa 75 Haltungen und dauert 90 Minuten.

**Praxis:** Mysore-Stil — jeder Schüler übt im eigenen Tempo die gelernte Sequenz, der Lehrer korrigiert individuell. Traditionell wird 6 Tage pro Woche praktiziert, frühmorgens.

**Für wen:** Disziplinierte Menschen, die Struktur und Wiederholung schätzen. Die Regelmäßigkeit schafft eine tiefe körperliche und mentale Transformation.

### Yin Yoga — die Stille

**Grundidee:** Yin Yoga arbeitet mit dem Bindegewebe — Faszien, Bänder, Gelenkkapseln. Im Gegensatz zu den muskelbetonten "Yang"-Stilen werden Haltungen passiv und lange gehalten (3–5 Minuten), ohne muskuläre Anspannung.

**Praxis:** Wenige Haltungen pro Klasse, alle am Boden. Hilfsmittel (Bolster, Decken, Blöcke) unterstützen den Körper. Die Herausforderung ist nicht körperlich — sie ist mental: Stillhalten, Unbehagen aushalten, loslassen.

**Für wen:** Gestresste, Überaktive, Menschen mit steifem Bindegewebe. Perfekte Ergänzung zu dynamischen Stilen. In der energetischen Arbeit besonders wertvoll — Yin Yoga arbeitet entlang der Meridianlinien.

### Kundalini Yoga — die Energie

**Grundidee:** Kundalini ist die "schlafende Schlange" — eine Energiereserve an der Basis der Wirbelsäule. Kundalini Yoga zielt darauf ab, diese Energie zu wecken und durch die Chakren aufsteigen zu lassen.

**Praxis:** Kriyas (festgelegte Übungssets), intensive Atemübungen (Feueratem), Mantras, Meditation, Bandhas. Kundalini Yoga ist weniger körperlich-akrobatisch als Ashtanga, aber energetisch intensiv.

**Für wen:** Spiritual Seekers, Menschen die innere Transformation suchen. Kundalini Yoga kann tiefgreifende emotionale und energetische Prozesse auslösen — ein erfahrener Lehrer ist wichtig.

### Weitere Stile im Überblick

**Iyengar Yoga:** Höchste Präzision in der Ausrichtung. Intensive Nutzung von Hilfsmitteln. Therapeutisch orientiert.

**Restorative Yoga:** Vollständig passiv, unterstützt durch Hilfsmittel. Tiefe Entspannung des Nervensystems. Ideal für Erschöpfung und Regeneration.

**Yoga Nidra:** "Yogischer Schlaf" — eine geführte Tiefenentspannung im Liegen. Kein Asana, keine Bewegung. 30 Minuten Yoga Nidra entsprechen etwa 2 Stunden Schlaf.

**Aerial Yoga:** Yoga im Tuch. Spielerisch, befreiend, umkehrhaltungsfreundlich.

### Übung: Dein Yoga-Profil

Beantworte für dich:
1. Brauche ich eher Bewegung oder Stille?
2. Sprechen mich feste Strukturen (Ashtanga) oder freie Kreativität (Vinyasa) an?
3. Suche ich primär körperliche Fitness, innere Ruhe oder spirituelle Vertiefung?
4. Welcher Stil reizt mich — und welcher schreckt mich ab? (Der abstoßende Stil zeigt oft, was du am meisten brauchst.)

Notiere deinen aktuellen "Yoga-Typ" — und überprüfe nach dem Kurs, ob er sich verändert hat.`
        },
        {
          id: 'G06-M1-L3',
          titel: 'Energieanatomie im Yoga — Prana, Nadis, Bandhas & Chakren',
          inhalt: `## Energieanatomie im Yoga

### Der unsichtbare Körper

Hinter dem physischen Körper — den Knochen, Muskeln und Organen — liegt in der Yoga-Tradition ein Energiekörper: ein Netzwerk aus Kanälen, Zentren und Strömen, das die Lebensenergie transportiert. Dieses Modell ist keine Metapher — es ist ein präzises Kartensystem, das seit Jahrtausenden die Grundlage der Yoga-Praxis bildet.

### Prana — die Lebensenergie

Prana ist das Sanskrit-Wort für Lebensenergie — die Kraft, die alles Lebendige durchströmt. Prana ist im Atem, in der Nahrung, im Sonnenlicht, in der Berührung. Wo Prana frei fließt, ist Gesundheit. Wo Prana blockiert ist, entsteht Krankheit — körperlich, emotional oder mental.

### Die fünf Vayus — Prana in Bewegung

Prana manifestiert sich im Körper in fünf Hauptströmen (Vayus), die verschiedene Funktionen steuern:

**Prana Vayu (aufwärts, Brustbereich):** Einatmung, Aufnahme von Nahrung und Sinneseindrücken. Der Strom, der Energie hereinbringt.

**Apana Vayu (abwärts, Beckenbereich):** Ausatmung, Ausscheidung, Menstruation, Geburt. Der Strom, der loslässt und reinigt.

**Samana Vayu (zum Zentrum hin, Bauchbereich):** Verdauung — nicht nur von Nahrung, sondern auch von Erfahrungen und Emotionen. Der Strom, der assimiliert.

**Udana Vayu (aufwärts, Kehle):** Sprache, Ausdruck, Wachstum, Enthusiasmus. Der Strom, der kommuniziert und aufsteigt.

**Vyana Vayu (in alle Richtungen, gesamter Körper):** Kreislauf, Verteilung von Energie und Nährstoffen. Der Strom, der alles verbindet.

### Nadis — die Energiekanäle

Nadis (Sanskrit: "Röhren" oder "Kanäle") sind die Leitungsbahnen, durch die Prana fließt. Die Tradition spricht von 72.000 Nadis — drei davon sind entscheidend:

**Sushumna Nadi:** Der zentrale Kanal, der entlang der Wirbelsäule von der Basis bis zum Scheitel verläuft. Der wichtigste Nadi — wenn Prana durch Sushumna fließt, entstehen tiefe Meditationszustände.

**Ida Nadi:** Beginnt links der Wirbelsäule, endet am linken Nasenloch. Mondenergie — kühlend, beruhigend, introvertiert, empfangend. Verbunden mit dem parasympathischen Nervensystem.

**Pingala Nadi:** Beginnt rechts der Wirbelsäule, endet am rechten Nasenloch. Sonnenenergie — wärmend, aktivierend, extrovertiert, handelnd. Verbunden mit dem sympathischen Nervensystem.

Ida und Pingala winden sich in spiralförmigen Schleifen um Sushumna — ihre Kreuzungspunkte bilden die Chakren.

### Bandhas — die Energieverschlüsse

Bandhas sind muskuläre Verschlüsse, die den Energiefluss lenken — wie Schleusen in einem Kanal. Sie halten Prana im Körper, verhindern sein Entweichen und lenken es in die gewünschte Richtung.

**Mula Bandha (Wurzelverschluss):** Sanftes Anheben des Beckenbodens. Verhindert, dass Energie nach unten entweicht. Aktiviert Apana Vayu und lenkt es aufwärts. Grundlage aller anderen Bandhas.

**Uddiyana Bandha (Bauchverschluss):** Einziehen des Unterbauchs nach innen und oben. Massiert die inneren Organe, stimuliert das Verdauungsfeuer, zieht Prana in Sushumna. Nur bei leerem Magen und nach der Ausatmung praktizieren.

**Jalandhara Bandha (Kehlverschluss):** Kinn zur Brust senken, Halsrückseite verlängern. Reguliert den Energiefluss zum Kopf, schützt bei intensivem Pranayama vor Druckaufbau im Kopf.

**Maha Bandha (der große Verschluss):** Alle drei Bandhas gleichzeitig. Die intensivste energetische Praxis — nur unter Anleitung.

### Die sieben Hauptchakren im Yoga-Kontext

Die Chakren sind Energiezentren entlang der Wirbelsäule — Kreuzungspunkte von Nadis. Im Yoga werden sie durch Asanas, Pranayama, Mantras und Meditation angesprochen:

1. **Muladhara** (Wurzel, Steißbein) — Erdung, Sicherheit. Stehende Haltungen, Mula Bandha.
2. **Svadhisthana** (Sakral, unterhalb des Nabels) — Kreativität, Fließen. Hüftöffner, fließende Bewegungen.
3. **Manipura** (Solarplexus, Nabel) — Willenskraft, Feuer. Core-Arbeit, Drehungen, Uddiyana Bandha.
4. **Anahata** (Herz, Brustmitte) — Liebe, Mitgefühl. Rückbeugen, Herzöffner.
5. **Vishuddha** (Kehle) — Ausdruck, Wahrheit. Schulterstand, Pflug, Jalandhara Bandha.
6. **Ajna** (Stirn, Drittes Auge) — Intuition, Klarheit. Umkehrhaltungen, Meditation.
7. **Sahasrara** (Scheitel) — Verbindung, Einheit. Meditation, Stille, Samadhi.

### Übung: Den Energiekörper spüren

Setze dich aufrecht hin, schließe die Augen:
1. Atme 10 Atemzüge durch das linke Nasenloch (rechtes zuhalten) — spüre die kühlende Ida-Energie.
2. Atme 10 Atemzüge durch das rechte Nasenloch — spüre die wärmende Pingala-Energie.
3. Atme 10 Atemzüge durch beide Nasenlöcher — stelle dir vor, der Atem fließt durch die Wirbelsäule (Sushumna).
4. Aktiviere sanft Mula Bandha — spürst du einen Unterschied in der Energiequalität?

Notiere deine Wahrnehmung. Es geht nicht um "richtig" oder "falsch" — es geht um Aufmerksamkeit.`
        }
      ]
    },

    // ============================================================
    // MODUL 2 — Fundament: Körper & Ausrichtung
    // ============================================================
    {
      id: 'G06-M2',
      titel: 'Fundament — Körper & Ausrichtung',
      beschreibung: 'Die fünf Grundhaltungsfamilien verstehen, universelle Alignment-Prinzipien anwenden und Haltungen sicher für verschiedene Körper modifizieren.',
      lektionen: [
        {
          id: 'G06-M2-L4',
          titel: 'Die 5 Grundhaltungsfamilien — Stehend, Sitzend, Rückbeugen, Vorbeugen, Drehungen',
          inhalt: `## Die 5 Grundhaltungsfamilien

### Ordnung im Asana-Dschungel

Es gibt hunderte von Asanas — und es kommen ständig neue hinzu. Was auf den ersten Blick überwältigend wirkt, wird übersichtlich, wenn du die Grundfamilien verstehst. Jede Asana gehört zu einer oder mehreren dieser fünf Kategorien, und jede Kategorie hat spezifische Wirkungen auf Körper und Energiesystem.

### Familie 1: Stehende Haltungen

**Wirkung:** Erdung, Kraft, Stabilität, Selbstvertrauen. Stehende Haltungen aktivieren die großen Muskelgruppen der Beine und des Rumpfes und schaffen ein Fundament — physisch und energetisch.

**Typische Haltungen:** Tadasana (Berg), Virabhadrasana I–III (Krieger), Trikonasana (Dreieck), Parsvakonasana (Seitwinkel), Vrksasana (Baum), Utkatasana (Stuhl).

**Energetische Qualität:** Aktivierung des Wurzelchakras und des Solarplexus. Stehende Haltungen sagen dem Nervensystem: "Ich bin hier. Ich stehe fest."

### Familie 2: Sitzende Haltungen

**Wirkung:** Innenschau, Dehnung der Hüften und Oberschenkelrückseiten, Vorbereitung für Meditation. Sitzende Haltungen sind ruhiger als stehende und laden zur Reflexion ein.

**Typische Haltungen:** Dandasana (Stab), Sukhasana (einfacher Sitz), Padmasana (Lotus), Baddha Konasana (Schmetterling), Paschimottanasana (sitzende Vorbeuge), Janu Sirsasana (Kopf-zum-Knie).

**Energetische Qualität:** Erdung durch Kontakt mit dem Boden. Öffnung des Beckenbereichs — energetisch der Sitz von Kreativität und emotionaler Verarbeitung.

### Familie 3: Rückbeugen

**Wirkung:** Herzöffnung, Brustkorb-Weite, Mut, Verletzlichkeit. Rückbeugen dehnen die gesamte Vorderseite des Körpers — Brust, Bauch, Hüftbeuger — und stärken den Rücken.

**Typische Haltungen:** Bhujangasana (Kobra), Setu Bandhasana (Brücke), Ustrasana (Kamel), Dhanurasana (Bogen), Urdhva Dhanurasana (Rad).

**Energetische Qualität:** Öffnung des Herzchakras. Rückbeugen sind emotional intensiv — sie öffnen den Bereich, den wir im Alltag schützen (Herz, Bauch, Kehle). Tränen in Rückbeugen sind keine Seltenheit.

**Vorsicht:** Rückbeugen erfordern sorgfältige Vorbereitung. Ohne warme Muskulatur und aktive Rumpfstabilität besteht Verletzungsgefahr für die Lendenwirbelsäule.

### Familie 4: Vorbeugen

**Wirkung:** Loslassen, Hingabe, Beruhigung des Nervensystems. Vorbeugen dehnen die gesamte Körperrückseite — von den Fersen über die Oberschenkelrückseiten bis zum Rücken und Nacken.

**Typische Haltungen:** Uttanasana (stehende Vorbeuge), Paschimottanasana (sitzende Vorbeuge), Prasarita Padottanasana (gegrätschte Vorbeuge), Balasana (Kind).

**Energetische Qualität:** Beruhigung, Introversion, Rückzug der Sinne (Pratyahara). Vorbeugen wenden den Blick nach innen — du schaust nicht mehr nach vorne in die Welt, sondern nach innen zu dir.

### Familie 5: Drehungen

**Wirkung:** Entgiftung, Mobilisation der Wirbelsäule, Ausgleich. Drehungen "wringen" die inneren Organe aus — wie ein Handtuch — und fördern die Durchblutung und Verdauung.

**Typische Haltungen:** Ardha Matsyendrasana (halber Drehsitz), Parivrtta Trikonasana (gedrehtes Dreieck), Parivrtta Parsvakonasana (gedrehter Seitwinkel), Marichyasana (Marichi-Drehung).

**Energetische Qualität:** Reinigung, Loslassen von Altem, Perspektivwechsel. In der Drehung lässt du physisch los, was dich festhält — und oft folgt die emotionale Ebene.

### Sonderkategorie: Umkehrhaltungen

**Wirkung:** Perspektivwechsel, Aktivierung des Blutkreislaufs, Stärkung der Arme und des Rumpfes, Stimulation des Nervensystems.

**Typische Haltungen:** Sirsasana (Kopfstand), Sarvangasana (Schulterstand), Halasana (Pflug), Adho Mukha Vrksasana (Handstand), Pincha Mayurasana (Unterarmstand).

### Übung: Familien-Audit

Analysiere deine aktuelle Praxis: Welche der fünf Familien praktizierst du am häufigsten? Welche meidest du? Die gemiedene Familie zeigt oft den größten Wachstumsbereich.`
        },
        {
          id: 'G06-M2-L5',
          titel: 'Alignment-Prinzipien — Gelenksicherheit, Becken-Achse & häufige Fehler',
          inhalt: `## Alignment-Prinzipien

### Warum Ausrichtung entscheidend ist

Alignment — die korrekte Ausrichtung des Körpers in einer Haltung — ist kein ästhetisches Ideal. Es ist Gelenkschutz, Energielenkung und die Grundlage dafür, dass eine Haltung ihre volle Wirkung entfalten kann, ohne den Körper zu schädigen. Ein falsch ausgerichtetes Knie in Virabhadrasana II kann den Meniskus beschädigen. Eine kollabierte Lendenwirbelsäule in Uttanasana kann Bandscheiben belasten.

### Drei universelle Alignment-Prinzipien

**Prinzip 1: Stabilität vor Tiefe.**
Gehe nie tiefer in eine Haltung, als dein Körper stabil halten kann. Wackeliges Gleichgewicht, zitternde Muskeln und angehaltener Atem sind Warnsignale. Die Haltung ist dort "fertig", wo du stabil stehst und frei atmen kannst.

**Prinzip 2: Länge vor Beugung.**
Bevor du beugst, drehe oder beugst dich vor — schaffe zuerst Länge in der Wirbelsäule. "Wachse nach oben, bevor du nach vorne gehst." Das schützt die Bandscheiben und gibt der Wirbelsäule Raum.

**Prinzip 3: Knochen tragen, Muskeln arbeiten.**
Lass das Skelett die Last tragen — die Knochen sind dafür gebaut. Die Muskeln stabilisieren und führen die Bewegung, aber sie sollen nicht krampfen. Finde in jeder Haltung die Balance zwischen Anstrengung (Sthira) und Leichtigkeit (Sukha).

### Die Becken-Wirbelsäule-Achse

Das Becken ist das Fundament der Wirbelsäule — und die häufigste Fehlerquelle im Yoga. Die Position des Beckens bestimmt, was in der gesamten Wirbelsäule passiert:

**Beckenkippung nach vorne (Hyperlordose):** Hohlkreuz. Häufig in Rückbeugen und stehenden Haltungen. Belastet die Lendenwirbelsäule. Korrektur: Steißbein leicht nach unten ziehen, Unterbauch sanft aktivieren.

**Beckenkippung nach hinten (Flexion):** Rundung im unteren Rücken. Häufig in Vorbeugen und sitzenden Haltungen. Belastet Bandscheiben und ISG-Gelenk. Korrektur: Auf den Sitzbeinhöckern sitzen (nicht auf dem Kreuzbein), Hüftbeugung aus der Hüfte initiieren.

**Neutrales Becken:** Beide Beckenkämme auf gleicher Höhe, Kreuzbein in natürlicher Kurve. Das Ziel in den meisten Haltungen.

### Die fünf häufigsten Fehlhaltungen

**1. Überstrecktes Knie:** Die Knie "rasten ein" und biegen sich nach hinten (Hyperextension). Schädigt die Kniebänder. Korrektur: "Microbend" — das Knie minimal anwinkeln, Oberschenkelmuskulatur aktivieren.

**2. Kollabiertes Knie nach innen:** In Standhaltungen fällt das Knie nach innen (Valgusstellung). Belastet Meniskus und Innenbänder. Korrektur: Knie über die Mitte des Fußes ausrichten, Außenseite des Fußes verwurzeln.

**3. Hochgezogene Schultern:** Schultern wandern zu den Ohren — besonders in armgestützten Haltungen. Erzeugt Nackenspannung. Korrektur: Schulterblätter nach unten und hinten ziehen, Nacken lang.

**4. Komprimierte Lendenwirbelsäule:** In Rückbeugen "knickt" die Bewegung in der Lendenwirbelsäule statt sich gleichmäßig über die gesamte Wirbelsäule zu verteilen. Korrektur: Brustwirbelsäule aktiv öffnen, Bauchmuskeln leicht angespannt halten, Rückbeuge aus dem Brustkorb initiieren.

**5. Verkürzte Atmung:** Der häufigste "Fehler" überhaupt — in herausfordernden Haltungen hältst du den Atem an. Der Atem ist das beste Alignment-Tool: Wenn du nicht frei atmen kannst, bist du zu tief in der Haltung.

### Übung: Alignment-Check in Tadasana

Stehe in Tadasana (Bergpose) und überprüfe:
1. Füße parallel, Gewicht gleichmäßig auf alle vier "Ecken" der Füße verteilt
2. Knie weich (nicht überstreckt), Oberschenkel leicht angespannt
3. Becken neutral — Steißbein nach unten, Bauchnabel leicht nach innen
4. Wirbelsäule lang — als würde ein Faden dich vom Scheitel nach oben ziehen
5. Schultern weg von den Ohren, Schulterblätter leicht zueinander
6. Kinn parallel zum Boden, Nacken lang
7. Atem frei und tief

Tadasana ist die Mutter aller Haltungen. Wenn hier alles stimmt, hast du das Fundament.`
        },
        {
          id: 'G06-M2-L6',
          titel: 'Modifikation & Hilfsmittel — Jeden Körper willkommen heißen',
          inhalt: `## Modifikation & Hilfsmittel

### Yoga passt sich dem Menschen an — nicht umgekehrt

Es gibt keine "perfekte" Haltung — es gibt nur die Haltung, die für diesen Körper in diesem Moment richtig ist. Die Fähigkeit, Asanas zu modifizieren und Hilfsmittel einzusetzen, unterscheidet einen guten Lehrer von einem der nur Posen demonstriert.

### Die fünf Standard-Hilfsmittel

**Block (Yoga-Block):**
Aus Schaumstoff, Kork oder Holz. Drei Höhen (liegend, auf der Seite, stehend). Funktion: "Den Boden näher bringen." Ein Block unter der Hand in Trikonasana erlaubt aufrechten Oberkörper, auch wenn die Hände den Boden nicht erreichen. Ein Block zwischen den Oberschenkeln in Setu Bandhasana aktiviert die Adduktoren und schützt die Lendenwirbelsäule.

**Gurt (Yoga-Gurt):**
Ein Baumwoll- oder Nylongurt mit Schnalle. Funktion: "Die Arme verlängern." Um die Füße geschlungen in Paschimottanasana ermöglicht er eine aufrechte Wirbelsäule, auch bei verkürzten Oberschenkelrückseiten. Zwischen den Händen gehalten hinter dem Rücken öffnet er die Schultern.

**Bolster (Yoga-Rolle):**
Ein festes, zylindrisches oder rechteckiges Kissen. Funktion: "Den Körper tragen." In Restorative-Haltungen unterstützt es den Körper so, dass Muskeln vollständig loslassen können. Unter den Knien in Savasana entlastet es den unteren Rücken.

**Decke (Yoga-Decke):**
Gefaltet unter dem Gesäß in sitzenden Haltungen hebt sie das Becken und erleichtert die aufrechte Wirbelsäule. Gerollt unter den Knien schützt sie empfindliche Gelenke. Über den Körper in Savasana reguliert sie die Temperatur und gibt ein Gefühl von Geborgenheit.

**Wand:**
Das unterschätzte Hilfsmittel. Die Wand gibt Stabilität in Gleichgewichtshaltungen, Feedback in Umkehrhaltungen und Unterstützung in Armbalancen. Viparita Karani (Beine an der Wand) ist eine der wirksamsten Restorative-Haltungen.

### Modifikation nach Zielgruppe

**Senioren:**
Stuhl-Yoga ist kein "minderwertiges" Yoga — es ist eine vollwertige Praxis. Alle fünf Haltungsfamilien lassen sich auf einem Stuhl praktizieren. Fokus: Mobilität erhalten, Gleichgewicht trainieren, Sturzprävention, soziale Teilhabe.

**Schwangere:**
Ab dem zweiten Trimester: Keine tiefen Drehungen (komprimieren den Bauch), keine Bauchlage, keine tiefen Rückbeugen, keine intensiven Umkehrhaltungen. Breite Standpositionen, offene Drehungen, Seitlage statt Rückenlage. Beckenbodenarbeit integrieren.

**Übergewichtige:**
Breitere Standpositionen, Blöcke zur Unterstützung, Variationen die Raum für den Bauch schaffen (breitere Füße in Uttanasana, Knie weiter auseinander in Balasana). Keine Annahmen — viele übergewichtige Menschen sind beweglicher als erwartet.

**Einsteiger:**
Weniger ist mehr. Grundhaltungen gründlich unterrichten statt durch eine Sequenz zu hetzen. Jeden Übergang erklären. Pausen erlauben. Balasana als "sichere Basis" etablieren — jederzeit dorthin zurückkehren.

### Das Prinzip der Abstufung

Für jede Haltung gibt es drei Stufen:

**Stufe 1 — Zugänglich:** Die einfachste Form, die den Kern der Haltung erhält. Beispiel: Statt vollem Chaturanga — Knie am Boden.

**Stufe 2 — Standard:** Die klassische Form der Haltung. Beispiel: Chaturanga Dandasana mit geradem Körper.

**Stufe 3 — Vertieft:** Eine intensivere Variation für Fortgeschrittene. Beispiel: Chaturanga mit angehobenem Bein (Eka Pada Chaturanga).

Als Lehrer bietest du alle drei Stufen an — und machst klar, dass Stufe 1 kein "Versagen" ist, sondern eine vollwertige Praxis.

### Übung: Modifikations-Tabelle

Wähle drei Haltungen und erstelle für jede:
- Stufe 1 (zugänglich) mit Hilfsmittel
- Stufe 2 (standard)
- Stufe 3 (vertieft)
- Kontraindikation (wann NICHT machen)

Haltungen zum Üben: Uttanasana, Virabhadrasana II, Setu Bandhasana.`
        }
      ]
    },

    // ============================================================
    // MODUL 3 — Schlüssel-Asanas
    // ============================================================
    {
      id: 'G06-M3',
      titel: 'Schlüssel-Asanas',
      beschreibung: 'Die wichtigsten Haltungen aus drei Kategorien im Detail: stehende Kräftigungen, Herzöffner und Haltungen des Loslassens.',
      lektionen: [
        {
          id: 'G06-M3-L7',
          titel: 'Stehende Haltungen & Krieger-Reihe — Standfestigkeit, Kraft, Erdung',
          inhalt: `## Stehende Haltungen & Krieger-Reihe

### Die Haltungen, die dein Fundament bilden

Stehende Haltungen sind das Rückgrat jeder Yoga-Praxis. Sie bauen Kraft auf, schulen das Gleichgewicht und verbinden dich mit der Erde. In keiner anderen Haltungsfamilie lernst du so viel über Alignment — weil die Schwerkraft in voller Stärke wirkt.

### Tadasana — der Berg

Die Mutter aller Haltungen. Tadasana sieht einfach aus — und ist es nicht. Hier lernst du aufrecht zu stehen: verwurzelt und gleichzeitig leicht.

**Aufbau von unten nach oben:**
Füße parallel, hüftbreit oder zusammen. Gewicht gleichmäßig auf Großzehballen, Kleinzehballen und Ferse verteilt. Innere Fußgewölbe angehoben. Knie weich, Oberschenkel leicht angespannt. Becken neutral. Brustbein hebt, Schultern sinken. Arme an den Seiten, Handflächen nach vorne (Empfangsbereitschaft). Scheitel strebt nach oben.

**Wirkung:** Propriozeption, Haltungsbewusstsein, Erdung, Würde. Tadasana ist die Referenzhaltung — alle stehenden Haltungen beginnen und enden hier.

### Virabhadrasana I — Krieger I

**Aufbau:**
Aus Tadasana großer Schritt nach hinten. Hinterer Fuß 45° nach außen gedreht, Ferse geerdet. Vorderes Knie beugt über dem Knöchel (90°). Becken nach vorne ausgerichtet. Arme strecken nach oben, Schultern sinken weg von den Ohren. Blick nach oben zwischen die Hände — oder geradeaus, wenn der Nacken protestiert.

**Alignment-Fokus:** Hintere Ferse bleibt am Boden. Vorderes Knie weicht nicht nach innen. Unterbauch aktiviert, um die Lendenwirbelsäule zu schützen.

**Wirkung:** Kraft in den Beinen, Dehnung der Hüftbeuger (hinteres Bein), Brustkorbweite. Energetisch: Willenskraft, Durchhaltevermögen, Verbindung von Erde und Himmel.

### Virabhadrasana II — Krieger II

**Aufbau:**
Breiter Stand, vorderer Fuß nach vorne, hinterer Fuß parallel zur kurzen Mattenkante. Vorderes Knie beugt 90° direkt über dem Knöchel. Arme strecken zur Seite auf Schulterhöhe. Blick über die vorderen Finger. Oberkörper aufrecht — nicht nach vorne lehnen.

**Alignment-Fokus:** Knie über der zweiten Zehe ausrichten. Schultern direkt über dem Becken. Hinteren Arm genauso aktiv halten wie den vorderen.

**Wirkung:** Innere Oberschenkelstärke, Ausdauer, Konzentration. Energetisch: der Krieger, der gleichzeitig vorwärts und rückwärts schaut — Präsenz im gegenwärtigen Moment.

### Virabhadrasana III — Krieger III

**Aufbau:**
Aus Krieger I: Gewicht auf den vorderen Fuß verlagern, hinteres Bein vom Boden heben, Oberkörper nach vorne neigen — bis Oberkörper und hinteres Bein eine Linie bilden, parallel zum Boden. Arme nach vorne gestreckt, oder an den Seiten, oder Hände in Gebetshaltung.

**Alignment-Fokus:** Hüfte bleibt gerade (nicht nach oben kippen). Standbein-Knie minimal gebeugt. Blick zum Boden, Nacken in Verlängerung der Wirbelsäule.

**Wirkung:** Gleichgewicht, Rumpfstärke, Konzentration. Energetisch: Fokus, Zielgerichtetheit, das Vertrauen, auf einem Bein zu stehen.

### Trikonasana — das Dreieck

**Aufbau:**
Breiter Stand, vorderer Fuß nach vorne, hinterer Fuß 90° eingedreht. Beine gestreckt. Oberkörper über dem vorderen Bein zur Seite neigen — Hand zum Schienbein, Block oder Boden. Obere Hand streckt zur Decke. Blick zur oberen Hand.

**Alignment-Fokus:** Die Neigung kommt aus der Hüfte, nicht aus der Taille. Beide Seiten des Rumpfes bleiben gleich lang. Kein Einknicken im Brustkorb.

### Vrksasana — der Baum

**Aufbau:**
Standbein verwurzelt, Fuß des gehobenen Beins am inneren Oberschenkel oder Wade (nie am Knie!). Hände in Gebetshaltung vor dem Herzen oder über dem Kopf. Blick auf einen festen Punkt (Drishti).

**Wirkung:** Gleichgewicht, Konzentration, innere Ruhe. Ein wackelnder Baum ist kein gescheiterter Baum — er übt.

### Übung: Krieger-Sequenz

Praktiziere die drei Krieger als Sequenz (rechte Seite, dann links):
1. Krieger I — 5 Atemzüge
2. Öffne zu Krieger II — 5 Atemzüge
3. Verlagere in Krieger III — 5 Atemzüge
4. Zurück zu Tadasana

Notiere: Welcher Krieger ist dein stärkster? Welcher fordert dich am meisten?`
        },
        {
          id: 'G06-M3-L8',
          titel: 'Rückbeugen & Herzöffner — Mut, Verletzlichkeit, Brustkorb-Weite',
          inhalt: `## Rückbeugen & Herzöffner

### Die mutigsten Haltungen

Rückbeugen öffnen die Vorderseite des Körpers — den Bereich, den wir instinktiv schützen. Herz, Kehle, Bauch — alles, was verletzlich ist. In einer Rückbeuge sagst du dem Körper: "Es ist sicher, dich zu öffnen." Deshalb sind Rückbeugen oft emotional — sie lösen gespeicherte Spannungen im Herzraum.

### Bhujangasana — die Kobra

**Aufbau:**
Bauchlage. Hände neben den Schultern, Ellenbogen eng am Körper. Beim Einatmen: Oberkörper vom Boden heben — zuerst mit der Kraft des Rückens, dann unterstützt durch die Hände. Becken und Beine bleiben am Boden. Schultern weg von den Ohren. Blick geradeaus oder leicht nach oben.

**Stufen:**
- Baby-Kobra: Brustbein hebt wenige Zentimeter, Hände liegen nur leicht auf. Die Arbeit kommt aus dem Rücken.
- Halbe Kobra: Brustbein hebt höher, Ellenbogen noch gebeugt, Arme unterstützen.
- Volle Kobra: Arme strecken (nicht ganz durchdrücken), Brustkorb weit offen.

**Wirkung:** Stärkung der Rückenmuskulatur, Dehnung der Vorderseite, Herzöffnung. Therapeutisch bei Rundrücken und Schreibtisch-Haltung.

### Setu Bandhasana — die Brücke

**Aufbau:**
Rückenlage, Knie gebeugt, Füße hüftbreit, parallel, nah am Gesäß. Arme an den Seiten, Handflächen nach unten. Beim Einatmen: Becken heben — Wirbel für Wirbel von unten nach oben. Oberschenkel parallel halten (nicht nach außen fallen lassen). Gewicht auf Füßen und Schultern.

**Varianten:**
- Block zwischen den Oberschenkeln: Aktiviert Adduktoren, schützt Lendenwirbelsäule.
- Hände unter dem Rücken verschränken: Intensivere Schulteröffnung.
- Ein Bein heben: Eka Pada Setu Bandhasana — Gleichgewicht und Kraft.

**Wirkung:** Stärkung von Gesäß und Rücken, Dehnung der Hüftbeuger, Brustkorbweite. Energetisch: Verbindung von Erd- und Herzenergie.

### Ustrasana — das Kamel

**Aufbau:**
Kniestand, Knie hüftbreit. Hände in die Taille, Ellenbogen nach hinten. Beim Einatmen: Brustkorb nach oben und zurück schieben — die Rückbeuge kommt aus der Brustwirbelsäule. Hände gleiten zu den Fersen (oder bleiben an der Taille in Stufe 1). Kopf folgt der natürlichen Verlängerung der Wirbelsäule — oder wird sanft nach hinten gelegt.

**Alignment-Fokus:** Hüften bleiben direkt über den Knien (nicht nach hinten sinken). Becken schiebt nach vorne. Unterbauch aktiviert, um die Lendenwirbelsäule zu schützen.

**Vorsicht:** Ustrasana ist intensiv. Schwindel, Übelkeit oder emotionale Reaktionen sind möglich. Immer langsam herauskommen — Balasana als Gegenhaltung.

### Dhanurasana — der Bogen

**Aufbau:**
Bauchlage. Knie beugen, Hände greifen die Fußgelenke (oder einen Gurt um die Fußgelenke). Beim Einatmen: Gleichzeitig Oberkörper und Beine vom Boden heben. Die Kraft kommt aus dem Zug der Beine nach hinten — die Arme sind nur die Verbindung.

**Wirkung:** Intensive Dehnung der gesamten Vorderseite, Stärkung des Rückens, Massierung der Bauchorgane.

### Sicherheitsregeln für Rückbeugen

1. **Immer aufwärmen** — besonders Brustwirbelsäule und Hüftbeuger
2. **Rückbeuge aus dem Brustkorb initiieren** — nicht aus der Lendenwirbelsäule
3. **Bauchmuskeln leicht aktiv halten** — sie schützen den unteren Rücken
4. **Atmen** — in Rückbeugen neigt man zum Luftanhalten
5. **Gegenhaltung praktizieren** — Balasana oder sanfte Vorbeuge nach intensiven Rückbeugen
6. **Emotionen respektieren** — wenn Tränen kommen, dürfen sie fließen

### Übung: Rückbeugen-Aufbau

Praktiziere die Rückbeugen in aufsteigender Intensität:
1. Baby-Kobra — 5 Atemzüge
2. Volle Kobra — 3 Atemzüge
3. Setu Bandhasana — 5 Atemzüge
4. Ustrasana (Hände an der Taille) — 3 Atemzüge
5. Balasana — 10 Atemzüge

Spüre nach jeder Haltung: Was passiert in deinem Herzraum?`
        },
        {
          id: 'G06-M3-L9',
          titel: 'Vorbeugen, Drehungen & Umkehrhaltungen — Loslassen, Entgiftung, Perspektivwechsel',
          inhalt: `## Vorbeugen, Drehungen & Umkehrhaltungen

### Die Haltungen der Transformation

Wenn stehende Haltungen Kraft geben und Rückbeugen das Herz öffnen, dann lehren Vorbeugen das Loslassen, Drehungen die Reinigung und Umkehrhaltungen den Perspektivwechsel. Zusammen bilden sie die transformativen Haltungen — die, die am tiefsten verändern.

### Uttanasana — stehende Vorbeuge

**Aufbau:**
Aus Tadasana: Beim Ausatmen aus der Hüfte nach vorne beugen — nicht aus der Taille. Knie so weit beugen, wie nötig, damit der untere Rücken lang bleibt. Hände zum Boden, zu den Schienbeinen oder gegenüberliegende Ellenbogen greifen. Kopf hängen lassen, Nacken entspannen.

**Der häufigste Fehler:** Den unteren Rücken runden, um mit den Händen den Boden zu erreichen. Die Lösung: Knie beugen. Lieber mit gebeugten Knien und langem Rücken stehen als mit gestreckten Beinen und Rundrücken.

**Wirkung:** Dehnung der gesamten Körperrückseite, Beruhigung des Nervensystems, Blutversorgung des Gehirns. Energetisch: Hingabe, Ego loslassen ("den Kopf verbeugen").

### Paschimottanasana — sitzende Vorbeuge

**Aufbau:**
Sitz auf dem Boden, Beine gestreckt (Dandasana). Beim Einatmen: Arme nach oben, Wirbelsäule lang. Beim Ausatmen: Aus der Hüfte nach vorne beugen. Hände greifen Schienbeine, Füße oder einen Gurt um die Füße. Brustbein zieht nach vorne — nicht den Kopf zu den Knien zwingen.

**Modifikation:** Decke oder Block unter dem Gesäß hebt das Becken und erleichtert die Vorbeuge. Leicht gebeugte Knie schonen die Oberschenkelrückseiten.

### Balasana — die Kindshaltung

Die wichtigste Haltung im gesamten Yoga. Balasana ist jederzeit erlaubt — in jeder Klasse, in jeder Sequenz. Sie ist kein Zeichen von Schwäche, sondern von Körperbewusstsein.

**Aufbau:** Kniestand, Zehen zusammen, Knie hüftbreit oder weiter. Oberkörper nach vorne senken, Stirn auf den Boden (oder Block). Arme nach vorne gestreckt oder an den Seiten zurück.

**Wirkung:** Tiefe Beruhigung, Rückzug, Sicherheit. Die fötale Position aktiviert das parasympathische Nervensystem.

### Ardha Matsyendrasana — halber Drehsitz

**Aufbau:**
Sitz, rechtes Bein über das linke Knie stellen, rechter Fuß am Boden. Linker Arm umfasst das rechte Knie, rechte Hand hinter dem Rücken aufgestellt. Beim Einatmen: Wirbelsäule lang. Beim Ausatmen: Drehung nach rechts vertiefen. Blick über die rechte Schulter.

**Alignment-Fokus:** Drehung kommt aus der Brustwirbelsäule — nicht aus der Lendenwirbelsäule oder dem Nacken. Beide Sitzbeinhöcker bleiben am Boden. Länge vor Tiefe der Drehung.

**Wirkung:** Mobilisation der Wirbelsäule, Massage der inneren Organe, Anregung der Verdauung. Energetisch: Loslassen von Altem, Perspektivwechsel.

### Sarvangasana — der Schulterstand

Die "Mutter aller Asanas" — so bezeichnet in vielen klassischen Texten.

**Aufbau:**
Rückenlage. Beine anheben, Becken mit den Händen stützen, Beine zur Decke strecken. Gewicht auf Schultern und Oberarmen — nie auf dem Nacken. Ellenbogen schulterbreit. Blick zur Brust, Kinn sanft zum Brustbein.

**Kontraindikationen:** Nackenprobleme, Bluthochdruck, Menstruation (umstritten — manche Traditionen empfehlen Umkehrhaltungen, andere nicht), Grüner Star. Bei Unsicherheit: Viparita Karani (Beine an der Wand) als sichere Alternative.

**Wirkung:** Beruhigung des Nervensystems, Anregung der Schilddrüse, verbesserte venöse Durchblutung. Energetisch: Perspektivwechsel, die Welt auf den Kopf stellen.

### Viparita Karani — Beine an der Wand

Die sanfteste und zugänglichste Umkehrhaltung — und eine der therapeutisch wirksamsten.

**Aufbau:** Gesäß an die Wand, Beine nach oben gestreckt, Rücken am Boden. Optional: Bolster unter dem Becken. 5–15 Minuten halten.

**Wirkung:** Lindert müde Beine, beruhigt das Nervensystem, reguliert den Blutdruck, verbessert den Schlaf. Die perfekte Haltung nach einem langen Tag.

### Übung: Transformations-Sequenz

1. Paschimottanasana — 8 Atemzüge (Hingabe)
2. Ardha Matsyendrasana rechts — 5 Atemzüge (Reinigung)
3. Ardha Matsyendrasana links — 5 Atemzüge
4. Sarvangasana oder Viparita Karani — 10 Atemzüge (Perspektivwechsel)
5. Savasana — 2 Minuten

Beobachte: Wie verändert sich deine innere Landschaft durch diese Sequenz?`
        }
      ]
    },

    // ============================================================
    // MODUL 4 — Pranayama & Meditation im Yoga
    // ============================================================
    {
      id: 'G06-M4',
      titel: 'Pranayama & Meditation im Yoga',
      beschreibung: 'Die wichtigsten Atemtechniken beherrschen, Meditation im Yoga-Kontext verstehen und Mantra, Mudra und Klang als Praxiswerkzeuge nutzen.',
      lektionen: [
        {
          id: 'G06-M4-L10',
          titel: 'Ujjayi, Kapalabhati & Nadi Shodhana — Atem als Brücke zwischen Körper und Geist',
          inhalt: `## Pranayama — Atem als Brücke

### Warum der Atem alles verändert

Der Atem ist die einzige Körperfunktion, die sowohl automatisch als auch willentlich gesteuert werden kann. Er ist die Brücke zwischen dem autonomen Nervensystem und dem bewussten Geist. Wenn du den Atem veränderst, veränderst du deinen Zustand — zuverlässiger und schneller als durch Gedanken.

Im Yoga ist Pranayama keine Nebensache — es ist die vierte der acht Stufen des Yogapfades und die direkteste Methode, Prana (Lebensenergie) zu lenken.

### Ujjayi — der siegreiche Atem

**Der Yoga-Atem schlechthin.** Ujjayi begleitet die gesamte Asana-Praxis in Vinyasa und Ashtanga.

**Technik:**
1. Atme durch die Nase ein und aus
2. Verengt leicht den hinteren Rachenraum — als würdest du einen Spiegel anhauchen, aber mit geschlossenem Mund
3. Ein hörbares, sanftes Rauschen entsteht — wie das Geräusch des Ozeans in einer Muschel
4. Einatmung und Ausatmung sind gleich lang

**Wirkung:** Ujjayi verlangsamt den Atem, wärmt die Luft, beruhigt das Nervensystem und gibt der Praxis einen meditativen Rhythmus. Der Klang des Atems wird zum Anker — wenn du den Ujjayi verlierst, bist du wahrscheinlich zu tief in der Haltung.

**Häufige Fehler:** Zu laut, zu forciert, zu angespannt. Ujjayi ist ein leises Rauschen, kein Darth-Vader-Atem. Die Kehle ist leicht verengt, nicht zugeschnürt.

### Kapalabhati — der Schädelleuchter

**Technik:**
1. Aufrechter Sitz, Augen geschlossen
2. Passives Einatmen — aktives, stoßweises Ausatmen durch die Nase
3. Bei jeder Ausatmung: Bauchmuskeln kontrahieren schnell und kräftig
4. Die Einatmung geschieht automatisch — der Bauch entspannt sich und die Luft strömt von selbst ein
5. Beginne mit 30 Zyklen, dann eine Atempause. Steigere auf 60, dann 108

**Wirkung:** Reinigend, energetisierend, klärend. Kapalabhati feuert das innere Feuer (Agni) an, reinigt die Atemwege, aktiviert den Solarplexus und vertreibt Müdigkeit. Kapala = Schädel, Bhati = Leuchten — nach einer Runde leuchtet der Kopf tatsächlich klarer.

**Kontraindikationen:** Schwangerschaft, Menstruation (umstritten), Bluthochdruck, Hernien, akute Baucherkrankungen, Epilepsie. Bei Schwindel oder Unwohlsein sofort aufhören.

### Nadi Shodhana — die Wechselatmung

**Die Königin des Pranayama.** Nadi Shodhana reinigt die Energiekanäle (Nadis) und bringt Ida und Pingala — Mond- und Sonnenenergie — ins Gleichgewicht.

**Technik (Vishnu Mudra):**
Rechte Hand: Zeige- und Mittelfinger einfalten, Daumen und Ringfinger frei.
1. Rechtes Nasenloch mit dem Daumen verschließen
2. Durch das linke Nasenloch einatmen (4 Zählzeiten)
3. Beide Nasenlöcher verschließen (Ringfinger links, Daumen rechts) — halten (4 Zählzeiten)
4. Rechtes Nasenloch öffnen, ausatmen (4 Zählzeiten)
5. Durch rechts einatmen (4 Zählzeiten)
6. Halten (4 Zählzeiten)
7. Links öffnen, ausatmen (4 Zählzeiten)
8. Das ist ein Zyklus. 5–10 Zyklen.

**Verhältnis:** Beginne mit 4:4:4 (Einatmen:Halten:Ausatmen). Steigere auf 4:8:8, dann 4:16:8 für Fortgeschrittene. Nie forcieren.

**Wirkung:** Tiefe Beruhigung, mentale Klarheit, emotionale Balance. Nadi Shodhana ist die beste Vorbereitung auf Meditation. Regelmäßige Praxis (täglich 5–10 Minuten) hat messbare Auswirkungen auf Herzratenvariabilität und Cortisolspiegel.

### Pranayama in der Asana-Praxis

- **Grundregel:** Einatmung hebt, öffnet, streckt. Ausatmung senkt, schließt, vertieft.
- Einatmung in Rückbeugen, Ausatmung in Vorbeugen.
- Einatmung beim Arme-Heben, Ausatmung beim Arme-Senken.
- In gehaltenen Haltungen: Ruhiger, gleichmäßiger Ujjayi.

### Übung: 10-Minuten-Pranayama

1. 2 Minuten natürliche Beobachtung (nur wahrnehmen, nichts verändern)
2. 3 Minuten Ujjayi (gleichmäßig, hörbar, ruhig)
3. 30 Runden Kapalabhati, dann 30 Sekunden Stille
4. 5 Zyklen Nadi Shodhana

Notiere deinen Zustand vorher und nachher. Der Unterschied ist oft erstaunlich.`
        },
        {
          id: 'G06-M4-L11',
          titel: 'Meditation im Yoga-Kontext — Dharana, Dhyana & Samadhi',
          inhalt: `## Meditation im Yoga-Kontext

### Meditation ist kein Zubehör

In der westlichen Yogawelt wird Meditation oft ans Ende der Klasse gehängt — 5 Minuten Stille nach 55 Minuten Asana. In der klassischen Tradition ist es genau umgekehrt: Die Asanas bereiten den Körper auf das Sitzen vor, Pranayama bereitet den Geist vor — und dann beginnt die eigentliche Praxis: Meditation.

### Dharana — Konzentration

Dharana ist das sechste Glied des Yogapfades. Es bedeutet: den Geist auf einen einzigen Punkt ausrichten und dort halten.

**Konzentrationsobjekte im Yoga:**
- Der Atem (An der Nase spüren, im Bauch spüren, zählen)
- Ein Mantra (innerlich oder laut wiederholt)
- Ein Bild (inneres Bild einer Flamme, eines Symbols, eines Lichtpunkts)
- Eine Körperempfindung (Kontakt der Hände, Wärme im Herzraum)
- Ein äußerer Punkt (Kerzenflamme — Trataka)
- Ein Chakra (Aufmerksamkeit auf ein Energiezentrum richten)

**Die Realität von Dharana:** Der Geist wandert ab. Immer. Das ist nicht Versagen — das ist die Übung. Dharana besteht darin, das Abwandern zu bemerken und sanft zurückzukehren. Jedes Zurückkehren ist ein Wiederholungstraining für den Geist.

### Dhyana — Meditation

Wenn Dharana reift — wenn die Konzentration fließt, ohne dass du sie halten musst — wird sie zu Dhyana. Der Unterschied: In Dharana hältst du den Geist aktiv beim Objekt. In Dhyana ruht der Geist von selbst dort.

Es ist wie der Unterschied zwischen einem Ball, den du in der Luft hältst, und einem Ball, der in einer Schale ruht. Die Anstrengung fällt weg — nicht die Aufmerksamkeit.

Dhyana lässt sich nicht erzwingen. Es entsteht. Was du tun kannst: Regelmäßig Dharana üben, die Bedingungen schaffen, geduldig sein.

### Samadhi — Versenkung

Samadhi ist das achte und letzte Glied — der Zustand, in dem die Grenze zwischen dem Meditierenden und dem Meditationsobjekt verschwindet. Nicht "ich beobachte den Atem", sondern "es ist nur noch Atem".

Samadhi-Erfahrungen kommen in Blitzen — Momente vollkommener Einheit, Zeitlosigkeit, Frieden. Sie lassen sich nicht festhalten und nicht willentlich herbeiführen. Aber sie werden häufiger und tiefer mit regelmäßiger Praxis.

### Praktische Meditationsformen im Yoga

**Achtsamkeitsmeditation (Vipassana-Einfluss):**
Beobachte, was ist — Atem, Gedanken, Empfindungen — ohne zu urteilen, ohne zu reagieren. "Was ist gerade wahr?"

**Mantra-Meditation:**
Wiederholung eines Mantras — innerlich (Japa) oder laut. Das Mantra ersetzt den Gedankenstrom. Beispiele: "So Hum" (Ich bin das), "Om", "Om Namah Shivaya".

**Trataka (Kerzenmeditation):**
Blick auf eine Kerzenflamme richten, ohne zu blinzeln, bis die Augen tränen. Dann die Augen schließen und das Nachbild beobachten. Außergewöhnlich wirksam für Konzentration.

**Yoga Nidra (Yogischer Schlaf):**
Geführte Tiefenentspannung in Rückenlage (Savasana). Der Körper schläft, der Geist bleibt wach. 30 Minuten Yoga Nidra können 2 Stunden Schlaf ersetzen. Besonders heilsam bei Stress, Trauma und Schlafstörungen.

### Übung: 15-Minuten-Meditation

1. Sitze aufrecht (Kissen oder Stuhl)
2. 3 Minuten: Augen schließen, ankommen, natürlich atmen
3. 5 Minuten: Dharana — konzentriere dich auf den Punkt, wo der Atem die Nasenspitze berührt
4. 5 Minuten: Erweitere die Aufmerksamkeit — lass alles da sein (Geräusche, Empfindungen, Gedanken) ohne zu folgen
5. 2 Minuten: Stille — nichts tun, nichts beobachten, einfach sein

Übe täglich, gleiche Zeit, gleicher Ort. Die Gewohnheit ist wichtiger als die Dauer.`
        },
        {
          id: 'G06-M4-L12',
          titel: 'Mantra, Mudra & Klang — Hände, Stimme & Vibration als Praxiswerkzeuge',
          inhalt: `## Mantra, Mudra & Klang

### Werkzeuge jenseits der Matte

Yoga nutzt nicht nur den Körper und den Atem — es nutzt auch Klang, Handgesten und Vibration als Werkzeuge zur Transformation. Diese Praktiken sind Jahrtausende alt und in vielen Kulturen weltweit zu finden.

### Mantra — die Kraft des Klangs

Mantra (manas = Geist, tra = befreien/schützen) — ein Werkzeug, das den Geist befreit. Ein Mantra ist ein Klang, eine Silbe oder ein Satz, der wiederholt wird — laut, geflüstert oder innerlich.

**Die wichtigsten Mantras im Yoga:**

**Om (Aum):** Der Urklang, die Vibration des Universums. Drei Laute: A (Schöpfung), U (Erhaltung), M (Transformation/Auflösung). Om wird am Anfang und Ende der Praxis gesungen. Es richtet den Geist aus und schafft einen gemeinsamen Resonanzraum.

**So Hum:** "Ich bin das" — ein natürliches Mantra, das dem Atem folgt. "So" beim Einatmen, "Hum" beim Ausatmen. Verbindet den individuellen Atem mit dem universellen Atem.

**Om Namah Shivaya:** "Ich verbeuge mich vor dem Göttlichen in mir." Ein Devotions-Mantra, das das höhere Selbst anspricht.

**Bija-Mantras (Samen-Mantras):** Einsilbige Mantras, die den Chakren zugeordnet sind:
- LAM — Wurzelchakra
- VAM — Sakralchakra
- RAM — Solarplexus
- YAM — Herzchakra
- HAM — Halschakra
- OM — Stirnchakra
- Stille — Kronenchakra

**Japa — Mantra-Wiederholung:**
Traditionell wird ein Mantra 108 Mal wiederholt, gezählt mit einer Mala (Gebetskette). 108 gilt als heilige Zahl — der Abstand von Erde zu Sonne und Mond beträgt jeweils etwa das 108-fache ihres Durchmessers.

### Mudra — die Sprache der Hände

Mudras sind Handgesten, die den Energiefluss im Körper lenken. Jeder Finger repräsentiert ein Element:
- Daumen: Feuer (Agni)
- Zeigefinger: Luft (Vayu)
- Mittelfinger: Äther/Raum (Akasha)
- Ringfinger: Erde (Prithvi)
- Kleiner Finger: Wasser (Jala)

**Die wichtigsten Mudras:**

**Gyan Mudra:** Daumen und Zeigefinger berühren sich, andere Finger gestreckt. Verbindet Feuer und Luft — fördert Konzentration, Klarheit, Wissen. Das klassische Meditations-Mudra.

**Anjali Mudra (Namaste):** Handflächen vor dem Herzen zusammen. Vereinigung von links und rechts, Ida und Pingala, Geben und Empfangen. Ausdruck von Respekt und Einheit.

**Chin Mudra:** Wie Gyan Mudra, aber Handflächen nach unten. Erdend, introspektiv.

**Dhyana Mudra:** Beide Hände ruhen im Schoß, rechte Hand auf der linken, Daumen berühren sich leicht. Das Meditations-Mudra des Buddha — tiefe Versenkung.

### Klang in der Yoga-Praxis

**Klangschalen:** Zu Beginn oder Ende der Klasse. Der Klang einer Klangschale schafft einen Übergang — vom Alltag in die Praxis und zurück. Die Obertöne beruhigen das Nervensystem.

**Harmonium / Kirtan:** Call-and-Response-Singen von Mantras. Kirtan ist Bhakti Yoga — der Weg der Hingabe durch Klang. Keine Gesangsausbildung nötig — es geht um Ausdruck, nicht um Perfektion.

**Stille als Klang:** Die tiefste Form des Klangs im Yoga ist die Stille. Nach Om, nach der Klangschale, nach der Praxis — in der Stille integriert sich alles.

### Übung: Mantra-Meditation mit Mudra

1. Sitze aufrecht, Gyan Mudra (Daumen und Zeigefinger)
2. 3 Runden "Om" singen — laut, mit der vollen Ausatmung
3. Stille — den Nachklang spüren
4. 5 Minuten innerliches "So Hum" — "So" beim Einatmen, "Hum" beim Ausatmen
5. 2 Minuten Stille

Beobachte: Wie verändert der Klang deinen inneren Zustand? Wo im Körper spürst du die Vibration?`
        }
      ]
    },

    // ============================================================
    // MODUL 5 — Sequenzen & Unterrichtsmethodik
    // ============================================================
    {
      id: 'G06-M5',
      titel: 'Sequenzen & Unterrichtsmethodik',
      beschreibung: 'Den Aufbau einer Yogastunde verstehen, den Energiebogen einer Sequenz gestalten und sicher mit Assists und Hands-on arbeiten.',
      lektionen: [
        {
          id: 'G06-M5-L13',
          titel: 'Sequencing-Prinzipien — Aufwärmen, Peak-Pose & Cool-down',
          inhalt: `## Sequencing-Prinzipien

### Die Architektur einer Yogastunde

Eine gute Yogasequenz ist wie ein Musikstück — sie hat einen Anfang, einen Aufbau, einen Höhepunkt und ein Ausklingen. Sie folgt einem Energiebogen, der den Körper sicher vorbereitet, fordert und wieder zur Ruhe bringt.

### Der Energiebogen

**Phase 1 — Ankommen (5–10 Min):**
Zentrierung, Atembeobachtung, Intention setzen. Einfache Bewegungen im Sitzen oder Liegen. Ziel: Den Alltag loslassen, in der Praxis ankommen.

**Phase 2 — Aufwärmen (10–15 Min):**
Gelenkmobilisation, Sonnengrüße, sanfte stehende Haltungen. Ziel: Muskulatur aufwärmen, Herzfrequenz sanft erhöhen, den Körper auf intensivere Haltungen vorbereiten.

**Phase 3 — Aufbau (15–20 Min):**
Stehende Haltungen, Gleichgewichtshaltungen, kräftigende Sequenzen. Die Intensität steigt. Jede Haltung bereitet auf die nächste vor — anatomisch und energetisch.

**Phase 4 — Peak (5–10 Min):**
Die anspruchsvollste Haltung der Stunde — die Peak-Pose. Alles vorher hat diesen Moment vorbereitet. Die Peak-Pose muss nicht akrobatisch sein — sie ist der Höhepunkt der spezifischen Stunde.

**Phase 5 — Cool-down (10–15 Min):**
Die Intensität sinkt. Sitzende Haltungen, Drehungen, Vorbeugen, Umkehrhaltungen. Dehnungen werden länger gehalten. Das Nervensystem wechselt von Sympathikus zu Parasympathikus.

**Phase 6 — Integration (5–10 Min):**
Savasana — die wichtigste Haltung. Hier integriert der Körper alles, was in der Stunde passiert ist. Mindestens 5 Minuten, besser 10. Savasana abzukürzen ist, wie einen Kuchen aus dem Ofen zu nehmen, bevor er fertig ist.

### Die fünf Sequencing-Regeln

**Regel 1: Vorbereitung vor Ausführung.**
Jede Haltung muss anatomisch vorbereitet sein. Bevor du Ustrasana (Kamel) unterrichtest, müssen die Hüftbeuger und die Brustwirbelsäule geöffnet sein. Bevor du Sirsasana (Kopfstand) unterrichtest, muss die Rumpfkraft aufgebaut sein.

**Regel 2: Gegenhaltungen.**
Nach Rückbeugen → sanfte Vorbeuge. Nach intensiven Drehungen → neutrale Position. Nach Umkehrhaltungen → Savasana oder sanfte sitzende Haltung.

**Regel 3: Seitengleichheit.**
Was rechts passiert, passiert auch links — in der gleichen Dauer. Ausnahme: Der Schüler hat eine bekannte Asymmetrie und arbeitet bewusst an einer Seite länger.

**Regel 4: Weniger ist mehr.**
Eine Stunde mit 10 gut unterrichteten Haltungen ist wertvoller als 30 Haltungen im Schnelldurchlauf. Gib den Schülern Zeit, in der Haltung anzukommen.

**Regel 5: Savasana ist Pflicht.**
Keine Yogastunde ohne Savasana. Niemals. Nicht verkürzen, nicht überspringen, nicht durch eine andere Haltung ersetzen.

### Beispiel-Sequenz: 60 Minuten Vinyasa

1. Ankommen — Sitzen, Atembeobachtung, Om (5 Min)
2. Katze-Kuh, Beckenmobilisation (3 Min)
3. 3 Runden Surya Namaskar A (7 Min)
4. 2 Runden Surya Namaskar B (5 Min)
5. Krieger I → Krieger II → Seitwinkel, beide Seiten (8 Min)
6. Dreieck → Halbmond, beide Seiten (6 Min)
7. Baum-Haltung, beide Seiten (3 Min)
8. Peak: Krieger III → halber Mond (Ardha Chandrasana), beide Seiten (5 Min)
9. Sitzende Vorbeuge (3 Min)
10. Drehsitz, beide Seiten (4 Min)
11. Brücke oder Schulterstand (3 Min)
12. Savasana (8 Min)

### Übung: Deine erste Sequenz

Entwirf eine 45-Minuten-Sequenz mit dem Thema "Erdung":
- Welche Peak-Pose wählst du?
- Wie bereitest du sie vor?
- Welche Gegenhaltungen brauchst du?
- Wie viel Zeit für Savasana?`
        },
        {
          id: 'G06-M5-L14',
          titel: 'Eine Klasse aufbauen — Thema, Cues, Raum halten & Zeitmanagement',
          inhalt: `## Eine Klasse aufbauen

### Unterrichten ist eine eigene Kunstform

Eine Asana perfekt ausführen und eine Klasse unterrichten sind zwei völlig verschiedene Fähigkeiten. Du kannst ein hervorragender Praktizierender und ein mittelmäßiger Lehrer sein — oder umgekehrt. Unterrichten erfordert Kommunikation, Raumwahrnehmung, Empathie und die Fähigkeit, gleichzeitig bei dir und bei deinen Schülern zu sein.

### Ein Thema setzen

Jede gute Klasse hat ein Thema — einen roten Faden, der die Sequenz zusammenhält und der Stunde eine Richtung gibt. Das Thema muss nicht ausgesprochen werden — es kann subtil in der Auswahl der Haltungen und Worte liegen.

**Körperliche Themen:** Hüftöffner, Gleichgewicht, Schulteröffnung, Rückenstärkung, Flexibilität.

**Energetische Themen:** Erdung, Herzöffnung, Loslassen, inneres Feuer, Stille.

**Philosophische Themen:** Ahimsa (Gewaltlosigkeit — auch dir selbst gegenüber), Santosha (Zufriedenheit mit dem, was ist), Tapas (das innere Feuer der Disziplin).

### Die Kunst des Cueing

Cueing — die verbalen Anweisungen während der Klasse — ist die wichtigste Lehrerfähigkeit.

**Anatomische Cues:** "Beuge dein rechtes Knie über dem Knöchel." Präzise, neutral, jeder versteht es.

**Richtungs-Cues:** "Strecke die Arme zur Decke." "Schiebe das Becken nach vorne." "Verwurzle den hinteren Fuß."

**Bildhafte Cues:** "Stelle dir vor, deine Wirbelsäule ist ein Bambusrohr — fest und flexibel zugleich." "Lass deine Schulterblätter wie Schmetterlingsflügel nach unten sinken." Bilder sind mächtiger als anatomische Anweisungen — sie sprechen das Unterbewusstsein an.

**Atemanweisungen:** "Einatmen — Arme hoch. Ausatmen — falte nach vorne." "Atme in die Weite deines Brustkorbs." "Lass die Ausatmung doppelt so lang sein wie die Einatmung."

**Cue-Regeln:**
1. Weniger ist mehr — überfrachte nicht mit Anweisungen
2. Prioritäten setzen: Sicherheit vor Vertiefung vor Ästhetik
3. Positive Sprache: "Aktiviere den Unterbauch" statt "Lass den Bauch nicht hängen"
4. Demonstriere nicht ständig — wenn du die ganze Zeit vormachst, siehst du deine Schüler nicht

### Raum halten

"Raum halten" bedeutet: Eine Atmosphäre schaffen, in der sich die Schüler sicher fühlen — körperlich, emotional und energetisch.

**Praktische Aspekte:**
- Temperatur: Angenehm warm, nicht zu heiß (außer Hot Yoga). Frische Luft ohne Zugluft.
- Licht: Gedämpft, warm. Keine Neonröhren. Kerzen wenn möglich.
- Musik: Optional. Wenn ja: instrumental, leise, ohne Lyrics die ablenken. Manche Traditionen unterrichten in Stille.
- Handy: Dein Handy ist aus. Nicht auf lautlos — aus.

**Energetische Aspekte:**
- Beginne die Klasse pünktlich — das zeigt Respekt.
- Stehe nicht erhöht über den Schülern — bewege dich auf Augenhöhe durch den Raum.
- Scanne regelmäßig den Raum: Wer kämpft? Wer langweilt sich? Wer braucht Modifikation?
- Halte die Pause nach einer Anweisung — gib den Schülern Zeit, sie umzusetzen.

### Zeitmanagement

**Die häufigsten Timing-Fehler:**
- Zu viel Zeit im Aufwärmen, keine Zeit für Cool-down
- Peak-Pose zu spät, Savasana wird abgekürzt
- Zu viele Haltungen geplant, alles wird gehetzt

**Lösung:** Plane rückwärts. Savasana fest einplanen (mindestens 5 Minuten bei 60 Min, 8–10 Minuten bei 75–90 Min). Dann Peak-Pose, dann Aufbau, dann Ankommen. Was nicht passt, fällt weg — aber Savasana nie.

### Übung: Cue-Praxis

Wähle Virabhadrasana II und schreibe drei verschiedene Cues:
1. Ein anatomischer Cue für die Knie-Ausrichtung
2. Ein bildhafter Cue für die Armhaltung
3. Ein Atem-Cue für die Vertiefung

Lies sie laut vor. Klingen sie klar, einladend, umsetzbar?`
        },
        {
          id: 'G06-M5-L15',
          titel: 'Assists & Hands-on — Wann, Wie & Consent-Prinzip',
          inhalt: `## Assists & Hands-on

### Berührung als Lehrwerkzeug

Körperliche Assists — Berührungen, die eine Haltung korrigieren, vertiefen oder unterstützen — sind eines der wirksamsten Werkzeuge im Yoga-Unterricht. Und eines der sensibelsten. Eine gut platzierte Hand kann in drei Sekunden vermitteln, was drei Minuten verbale Anleitung nicht schaffen. Eine unerwünschte oder unsachgemäße Berührung kann Vertrauen zerstören und im schlimmsten Fall verletzen.

### Das Consent-Prinzip

**Regel Nummer 1: Berührung nur mit Einverständnis.**

Das Einverständnis muss vor der Klasse aktiv eingeholt werden. Nicht stillschweigend vorausgesetzt, nicht durch Anwesenheit impliziert.

**Praktische Umsetzung:**
- Zu Beginn der Klasse: "Ich biete heute körperliche Assists an. Wenn du heute nicht berührt werden möchtest, leg eine Hand auf die Brust — das ist unser Zeichen, und ich respektiere es ohne Frage."
- Consent-Karten: Manche Studios verwenden Karten (grün = ja, rot = nein), die neben die Matte gelegt werden.
- Im Einzelunterricht: "Darf ich deine Schulter korrigieren?" — Direkte Frage, jedes Mal.

**Wichtig:** "Nein" braucht keine Begründung. Ein Schüler, der keine Berührung wünscht, ist nicht "schwierig" — er hat klare Grenzen. Respektiere sie wortlos.

### Verbale vs. taktile Assists

**Verbaler Assist:** "Zieh deine Schulterblätter zusammen und nach unten." Vorteil: Kein Körperkontakt nötig, funktioniert bei allen. Nachteil: Abstrakt, erfordert Körperbewusstsein.

**Visueller Assist:** Du demonstrierst die gewünschte Bewegung. Vorteil: Anschaulich. Nachteil: Du verlierst den Blick auf den Rest der Klasse.

**Taktiler Assist:** Sanfte Berührung, die den Schüler in die richtige Richtung lenkt. Vorteil: Direkt, präzise, oft transformativ. Nachteil: Erfordert Consent, Können und Sensibilität.

### Prinzipien des taktilen Assists

**1. Stabilität geben, nicht Tiefe erzwingen.**
Der häufigste Fehler: Den Schüler tiefer in eine Haltung drücken. Ein guter Assist stabilisiert und gibt Sicherheit — er zwingt nicht. "Zeigen, nicht schieben."

**2. Fester, ruhiger Kontakt.**
Berühre mit der ganzen Hand, nicht mit einzelnen Fingern. Fester Kontakt vermittelt Sicherheit, zaghaftes Tippen verunsichert. Lege die Hand auf, lass sie einen Moment ruhen, dann leite sanft.

**3. In Richtung der Schwerkraft arbeiten.**
Nach unten drücken und verwurzeln ist sicherer als nach oben oder zur Seite schieben. Ein nach unten gerichteter Druck auf die Schultern in Uttanasana hilft der Wirbelsäule, sich zu verlängern.

**4. Nie über Gelenke drücken.**
Knie, Ellenbogen, Nacken — Gelenke werden nie direkt belastet. Immer muskulär arbeiten: Oberschenkel, Oberarme, Schulterblätter.

**5. Wenn im Zweifel — nicht berühren.**
Ein ausgelassener Assist schadet nie. Ein falscher kann es.

### Beispiele für sichere Assists

**Savasana:** Hände auf die Schultern legen und sanft nach unten ziehen — Schultern sinken, Nacken verlängert sich. Dann Hände sanft an die Schläfen legen und den Kopf minimal zur Seite drehen und zurück — löst Nackenverspannung.

**Uttanasana:** Hände auf den oberen Rücken legen und sanft nach unten Richtung Boden drücken — die Wirbelsäule verlängert sich.

**Balasana:** Hände auf das Kreuzbein legen und sanft in Richtung Fersen drücken — erdend, beruhigend, lösend.

### Übung: Assist-Paarübung

Übe mit einem Partner:
1. Frage nach Consent
2. Lege in Balasana die Hände auf das Kreuzbein — sanfter, ruhiger Druck
3. Partner gibt Feedback: Zu viel? Zu wenig? Richtige Stelle?
4. Wechseln

Die wichtigste Lektion: Fragen, zuhören, anpassen.`
        }
      ]
    },

    // ============================================================
    // MODUL 6 — Deine Yoga-Praxis & -Lehre
    // ============================================================
    {
      id: 'G06-M6',
      titel: 'Deine Yoga-Praxis & -Lehre',
      beschreibung: 'Yoga mit Energiearbeit verbinden, eine nachhaltige Eigenpraxis aufbauen und ethisch verantwortungsvoll unterrichten.',
      lektionen: [
        {
          id: 'G06-M6-L16',
          titel: 'Yoga & Energiearbeit verbinden — Asana + Chakra, Yin + Meridiane, Yoga Nidra',
          inhalt: `## Yoga & Energiearbeit verbinden

### Wo zwei Welten sich treffen

Yoga und Energiearbeit teilen dieselbe Grundannahme: Der Mensch ist mehr als sein physischer Körper. Beide Systeme arbeiten mit feinstofflicher Energie — Yoga nennt sie Prana, die chinesische Medizin nennt sie Chi, die westliche Energiearbeit spricht von Bioenergie. Die Integration beider Ansätze schafft eine Praxis, die tiefer wirkt als jede einzelne Methode.

### Chakra-Sequenzen

Jede Yogastunde kann auf ein bestimmtes Chakra ausgerichtet werden — durch die Wahl der Haltungen, der Atemübungen, der Mantras und der thematischen Ausrichtung.

**Wurzelchakra-Sequenz:** Stehende Haltungen, erdende Atemtechniken, Mula Bandha, Mantra LAM. Thema: Sicherheit, Stabilität, Ankommen.

**Herzchakra-Sequenz:** Rückbeugen, Herzöffner, Kapalabhati, Mantra YAM. Thema: Liebe, Mitgefühl, Verletzlichkeit zulassen.

**Stirnchakra-Sequenz:** Umkehrhaltungen, Trataka, Nadi Shodhana, Mantra OM. Thema: Intuition, innere Klarheit, Stille.

**Aufsteigende Sequenz (alle 7 Chakren):** Beginne mit erdenden Haltungen (Wurzel), arbeite dich über Hüftöffner (Sakral), Core-Arbeit (Solar), Herzöffner, Schulterstand (Kehle), Meditation (Stirn) nach oben zum Kronenchakra (Savasana in Stille). Eine vollständige energetische Reise.

### Yin Yoga & Meridiane

Yin Yoga arbeitet nicht nur mit Faszien — es folgt dem System der Meridiane aus der traditionellen chinesischen Medizin. Jede Yin-Haltung stimuliert spezifische Meridianlinien.

**Beispiele:**
- Schmetterling (Baddha Konasana im Yin): Stimuliert Nieren- und Blasenmeridian. Thema: Angst loslassen, Lebenskraft stärken.
- Drache (tiefer Ausfallschritt): Stimuliert Magen- und Milzmeridian. Thema: Verdauung, Sorgen loslassen.
- Sphinx/Robbe: Stimuliert Nieren- und Blasenmeridian im Rücken. Thema: Willenskraft, Vitalität.

**Integration in die Praxis:** Eine Yin-Stunde nach der Fünf-Elemente-Lehre aufbauen (Holz → Feuer → Erde → Metall → Wasser), wobei jedes Element bestimmte Meridiane und Emotionen anspricht.

### Yoga Nidra als Heilformat

Yoga Nidra — der "yogische Schlaf" — ist eine der wirkungsvollsten Brücken zwischen Yoga und Energiearbeit. In der Tiefenentspannung wird der Zugang zum Unterbewusstsein geöffnet — ein Zustand, in dem Heilung, Umprogrammierung und tiefe Regeneration stattfinden.

**Aufbau einer Yoga-Nidra-Sitzung:**
1. Entspannung (Körper-Scan, systematische Muskelentspannung)
2. Sankalpa — eine positive Intention, ein Herzenswunsch, als kurzer Satz
3. Rotation des Bewusstseins — Aufmerksamkeit wandert durch alle Körperteile
4. Atemlenkung — Visualisierung des Atems an verschiedenen Körperstellen
5. Gegenpaare — warm/kalt, schwer/leicht, Freude/Trauer — um emotionale Flexibilität zu schulen
6. Visualisierung — innere Bilder, Symbole, Landschaften
7. Sankalpa wiederholen
8. Rückkehr ins Wachbewusstsein

**Wirkung:** Stressreduktion, verbesserte Schlafqualität, Traumaverarbeitung, emotionale Regulation. Yoga Nidra ist besonders geeignet für Menschen, die nicht sitzen können oder wollen.

### Übung: Chakra-Kurzpraxis

Wähle ein Chakra, das du heute ansprechen möchtest, und gestalte eine 15-Minuten-Minisequenz:
- 2 Haltungen, die dieses Chakra aktivieren
- 1 Atemübung
- 1 Mantra (Bija-Mantra des Chakras)
- 3 Minuten stille Meditation mit Fokus auf das Energiezentrum`
        },
        {
          id: 'G06-M6-L17',
          titel: 'Eigenpraxis aufbauen & halten — Sadhana, Disziplin & Verletzungsprävention',
          inhalt: `## Eigenpraxis aufbauen & halten

### Sadhana — die tägliche Praxis

Sadhana bedeutet "tägliche spirituelle Praxis". Es ist das Fundament deiner Entwicklung als Yogapraktizierende und als Yogalehrende. Du kannst nur weitergeben, was du selbst lebst. Ein Yogalehrer ohne Eigenpraxis ist wie ein Musiker, der nicht übt — er kann Theorie erklären, aber nicht berühren.

### Die Realität der Regelmäßigkeit

**Die erste Wahrheit:** Jeden Tag 15 Minuten ist wertvoller als einmal pro Woche 2 Stunden. Die Gewohnheit ist der Meister — nicht die Intensität.

**Die zweite Wahrheit:** Deine Praxis wird sich verändern. In manchen Phasen sind 90-Minuten-Vinyasa-Sessions dran. In anderen Phasen sind 10 Minuten Meditation und Atemübung genug. In Krisenzeiten reicht Savasana. Alles ist Yoga.

**Die dritte Wahrheit:** Motivation kommt nicht vor der Praxis — sie kommt durch die Praxis. Warte nicht, bis du "Lust" hast. Steh auf die Matte, atme dreimal, und schau was passiert.

### Einen Rhythmus finden

**Morgenpraxis:** Traditionell die beste Zeit. Der Geist ist noch frisch, der Tag hat noch nicht begonnen. Ideal: 10–30 Minuten vor dem Frühstück. Beginne mit Pranayama, dann Asana, dann Meditation.

**Abendpraxis:** Sanfter, erdender, loslassend. Yin Yoga, Restorative, Yoga Nidra. Ideal vor dem Schlafengehen — hilft, den Tag zu verarbeiten und den Schlaf zu vertiefen.

**Mikro-Praxis:** 5 Minuten Atemübung zwischen Meetings. 3 Sonnengrüße am Morgen. 1 Minute bewusstes Stehen in Tadasana an der Bushaltestelle. Yoga in den Alltag weben — nicht als separate Aktivität, sondern als Lebenshaltung.

### Plateaus und Durststrecken

Jeder Praktizierende kennt Plateaus — Phasen, in denen nichts voranzugehen scheint. Die Haltungen fühlen sich gleich an, die Meditation stagniert, die Motivation sinkt.

**Was hilft:**
- Stil wechseln: Wenn du immer Vinyasa machst, probiere Yin. Wenn du immer allein übst, geh in eine Klasse.
- Workshop oder Weiterbildung: Neuer Input, neue Perspektive.
- Zurück zu den Basics: Nur Sonnengrüße, nur Atemübung, nur Sitzen.
- Akzeptanz: Plateaus sind Integrationszeiten. Der Körper und der Geist verarbeiten, was du gelernt hast.

### Verletzungsprävention

**Die häufigsten Yoga-Verletzungen:**
1. Handgelenke: Überlastung in armgestützten Haltungen (Plank, Chaturanga, Handstand). Prävention: Gewicht gleichmäßig verteilen, Finger spreizen, Handgelenke stärken.
2. Unterer Rücken: Kompression in Rückbeugen und Vorbeugen. Prävention: Core aktiv halten, aus der Hüfte beugen, Länge vor Tiefe.
3. Knie: Fehlbelastung in Standhaltungen und Drehungen. Prävention: Knie über der zweiten Zehe ausrichten, nie über 90° beugen.
4. Schultern: Überdehnung in Umkehrhaltungen und Binds. Prävention: Schulterblätter stabilisieren, nicht in die Gelenke hängen.
5. Nacken: Kompression in Schulterstand und Pflug. Prävention: Decke unter den Schultern, nie den Kopf drehen.

**Grundsatz:** Schmerz ist ein Signal, kein Hindernis. Unterscheide zwischen Dehnungsintensität (ok) und scharfem Schmerz (sofort aufhören). "No pain, no gain" ist kein Yoga-Prinzip — es ist das Gegenteil.

### Übung: Dein Sadhana-Plan

Erstelle einen realistischen Wochenplan:
- Wie viele Tage pro Woche?
- Wie viele Minuten?
- Welche Praxis? (Asana, Pranayama, Meditation, Mischung)
- Zu welcher Tageszeit?
- Was ist dein Minimum, wenn gar nichts geht? (z.B. 3 Atemzüge)

Schreib es auf. Hänge es an einen sichtbaren Ort. Beginne morgen.`
        },
        {
          id: 'G06-M6-L18',
          titel: 'Ethik, Geschäft & Weiterentwicklung — Yamas im Unterricht, Machtbewusstsein & Selbstfürsorge',
          inhalt: `## Ethik, Geschäft & Weiterentwicklung

### Die Verantwortung des Yoga-Lehrers

Als Yogalehrer stehst du in einer Vertrauensposition. Deine Schüler sind verletzlich — körperlich in den Haltungen, emotional in der Stille, psychologisch in der Lehrer-Schüler-Dynamik. Diese Verletzlichkeit ist der Nährboden für Transformation — und für Missbrauch. Ethik im Yoga ist kein optionales Kapitel — sie ist das Fundament.

### Die Yamas im Unterricht

Die fünf Yamas sind nicht nur persönliche Leitlinien — sie sind der ethische Rahmen für dein Unterrichten:

**Ahimsa (Gewaltlosigkeit):** Unterrichte so, dass niemand sich verletzt — körperlich oder emotional. Keine Haltung, die Schmerzen verursacht. Keine Worte, die beschämen. "Push through the pain" ist keine Yoga-Philosophie.

**Satya (Wahrhaftigkeit):** Sei ehrlich über dein Können und deine Grenzen. Wenn du eine Haltung nicht unterrichten kannst — sag es. Wenn ein Schüler eine Kontraindikation hat, die dein Wissen übersteigt — verweise weiter.

**Asteya (Nicht-Stehlen):** Steal keine Sequenzen anderer Lehrer ohne Anerkennung. Steal nicht die Zeit deiner Schüler durch Unpünktlichkeit. Steal nicht ihre Autonomie durch autoritäres Unterrichten.

**Brahmacharya (Maßhalten):** Halte professionelle Grenzen. Die Lehrer-Schüler-Beziehung ist keine Freundschaft und keine romantische Beziehung. Maßhalten bedeutet auch: Unterrichte nicht mehr, als du regenerieren kannst.

**Aparigraha (Nicht-Anhaften):** Hänge nicht an "deinen" Schülern. Freu dich, wenn sie zu anderen Lehrern gehen — das ist Wachstum. Hänge nicht an "deinem" Stil — lass dein Unterrichten sich entwickeln.

### Machtbewusstsein

Die Lehrer-Schüler-Dynamik erzeugt ein Machtgefälle — ob du es willst oder nicht. Du stehst vorne, du gibst Anweisungen, du berührst Körper, du sprichst in verletzlichen Momenten. Einige Schüler idealisieren dich. Einige übertragen (Transference) ungelöste Themen auf dich.

**Verantwortung:**
- Ermutige Eigenverantwortung: "Dein Körper, deine Praxis, deine Entscheidung."
- Sage nie "Du musst" — sage "Du kannst" oder "Ich lade dich ein."
- Wenn ein Schüler emotionale Bindung entwickelt, die über die Lehrer-Schüler-Beziehung hinausgeht — sprich es an und setze klare Grenzen.
- Wenn du selbst emotionale Verstrickung bemerkst — suche Supervision oder kollegiale Beratung.

### Gruppendynamik

**Verschiedene Level in einer Klasse:**
Die Realität: In jeder offenen Klasse sitzen Anfänger neben Fortgeschrittenen. Die Lösung ist nicht "den Mittelweg finden" — es ist, Variationen anzubieten. Stufe 1, 2, 3 für jede Haltung. "Wenn du mehr willst — hier ist die Variation. Wenn du es ruhiger brauchst — hier ist die Alternative."

**Umgang mit dominanten Schülern:**
Manche Schüler korrigieren andere, machen fortgeschrittene Varianten ohne Aufforderung, oder sprechen während der Klasse. Ansprechen — ruhig, privat, nach der Klasse: "Ich schätze deinen Enthusiasmus. In meiner Klasse leite ich die Praxis, und ich möchte, dass jeder seinen eigenen Raum hat."

### Preisgestaltung & Geschäft

**Dein Wert:** Yoga zu unterrichten ist Arbeit — wertvolle, qualifizierte Arbeit. Du hast in deine Ausbildung investiert, du investierst in deine Eigenpraxis, du bereitest jede Klasse vor. Dein Preis reflektiert diesen Wert.

**Zugänglichkeit:** Biete ein Preismodell an, das verschiedene finanzielle Situationen berücksichtigt: Normalpreis, ermäßigter Preis, Schnupperkurse. Yoga sollte nicht nur für die sein, die es sich leisten können.

### Selbstfürsorge als Lehrer

Yogalehrer geben viel Energie. Ohne bewusste Regeneration brennst du aus. Achte auf: Eigene Praxis beibehalten, regelmäßig selbst Schüler sein, nicht mehr Klassen unterrichten als du regenerieren kannst, Supervision oder Austausch mit Kollegen, klare Grenzen zwischen Arbeits- und Ruhezeit.

### Weiterentwicklung

Yoga-Lehrer-Sein ist kein Abschluss — es ist ein Anfang. Weiterbildungen in Anatomie, Philosophie, speziellen Stilen, therapeutischem Yoga, Meditation oder Energiearbeit vertiefen dein Können. Die besten Lehrer sind die, die nie aufhören zu lernen.

---

*Herzlichen Glückwunsch zum Abschluss dieses Kurses. Du hast jetzt das Wissen und die Werkzeuge, Yoga authentisch zu praktizieren und respektvoll weiterzugeben. Deine Matte wartet — und die Welt braucht Lehrer, die mit Integrität und Herz unterrichten.*`
        }
      ]
    }
  ]
};

export default G06;
