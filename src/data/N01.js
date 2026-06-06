// N01.js — Aromakunde
// Standard ◈◈ · 6 Module · 18 Lektionen
// Human Resonanz Akademie · Mai 2026
// Rechtlich saniert (Zuschnitt): Heilaussagen entfernt, Wohlbefinds-/Duftrahmen, Disclaimer

const N01 = {
  id: 'N01',
  titel: 'Aromakunde',
  untertitel: 'Ätherische Öle · Duftcharakter · Anwendung in Praxis & Alltag',
  bereich: 'naturheilkunde',
  format: 'standard',
  dauer: '4–6 Stunden',
  level: 'Einsteiger bis Fortgeschrittene',
  voraussetzungen: 'Keine',
  beschreibung: `Ätherische Öle sind hochkonzentrierte Pflanzenkraft — flüchtige Substanzen, die seit Jahrtausenden zur Pflege, Reinigung und für das Wohlbefinden geschätzt werden. In diesem Kurs lernst du, was ätherische Öle sind, woran du hochwertige Qualität erkennst, wie sie über den Geruchssinn wirken und wie du sie sicher und kreativ für mehr Wohlbefinden in deinem Alltag und deiner Praxis einsetzt. Von der Qualitätserkennung über die Mischungslehre bis zur achtsamen Duftarbeit — du baust dir ein fundiertes Wissen auf, das dich sicher mit Düften arbeiten lässt.

Hinweis: Dieser Kurs vermittelt Duft- und Pflanzenkunde für Wohlbefinden, Entspannung und Selbsterfahrung. Er ersetzt keine ärztliche, heilkundliche oder pharmazeutische Beratung und ist keine Anleitung zur Behandlung von Krankheiten. Bei gesundheitlichen Beschwerden wende dich bitte an Ärztin oder Arzt, Apotheke oder Heilpraktiker.`,
  status: 'live',

  module: [
    // ============================================================
    // MODUL 1 — Die Welt der ätherischen Öle
    // ============================================================
    {
      id: 'N01-M1',
      titel: 'Die Welt der ätherischen Öle',
      beschreibung: 'Verstehen, was ätherische Öle sind, wie sie gewonnen werden und woran du hochwertige Qualität erkennst.',
      lektionen: [
        {
          id: 'N01-M1-L1',
          titel: 'Was sind ätherische Öle — Pflanzenkraft in konzentrierter Form',
          inhalt: `## Pflanzenkraft in konzentrierter Form

### Der Duft als Überlebensstrategie

Ätherische Öle sind flüchtige, aromatische Verbindungen, die Pflanzen in spezialisierten Drüsenzellen produzieren. Sie sind keine "Öle" im klassischen Sinn — sie enthalten kein Fett, verdunsten vollständig und hinterlassen keinen fettigen Rückstand. Der Name "ätherisch" kommt vom griechischen "aither" — das Himmlische, das Flüchtige.

Für die Pflanze erfüllen diese Substanzen lebenswichtige Funktionen: Sie locken bestäubende Insekten an, wehren Fressfeinde ab, schützen vor Pilzbefall und Bakterien, regulieren die Verdunstung und kommunizieren mit benachbarten Pflanzen. Was für die Pflanze Überlebenschemie ist, fasziniert den Menschen seit Jahrtausenden als Duft.

### Die Konzentration

Um die Potenz ätherischer Öle zu verstehen, hilft ein Vergleich: Für einen einzigen Tropfen Rosenöl werden etwa 30 Rosenblüten benötigt. Für ein Kilogramm Rosenöl braucht es rund 4.000 bis 5.000 Kilogramm Rosenblätter. Diese extreme Konzentration erklärt sowohl die Intensität als auch die Notwendigkeit, mit ätherischen Ölen respektvoll und verdünnt zu arbeiten.

### Wo in der Pflanze?

Ätherische Öle finden sich in verschiedenen Pflanzenteilen — und der Pflanzenanteil bestimmt den Charakter des Öls:

**Blüten:** Rose, Jasmin, Ylang-Ylang, Kamille, Lavendel — oft die kostbarsten und duftintensivsten Öle.

**Blätter:** Eukalyptus, Teebaum, Pfefferminze, Rosmarin — typisch frisch und klärend im Duft.

**Schalen/Rinden:** Zitrone, Orange, Bergamotte (Schale), Zimt (Rinde) — Zitrusöle duften hell und spritzig, Rindenöle warm.

**Wurzeln:** Ingwer, Vetiver, Angelika — erdig, warm, schwer im Duft.

**Harz:** Weihrauch, Myrrhe, Benzoe — tiefe, meditative Düfte mit langer Duftnote.

**Holz:** Sandelholz, Zedernholz — weich, zentrierend, langanhaltend.

**Samen/Früchte:** Fenchel, Anis, Schwarzer Pfeffer — oft würzig und wärmend im Charakter.

### Chemische Vielfalt

Der Charakter eines ätherischen Öls hängt von seiner chemischen Zusammensetzung ab. Die wichtigsten Stoffgruppen:

**Monoterpene** (z.B. in Zitrusölen, Kiefer): Leicht und flüchtig, frisch und spritzig im Duft.

**Sesquiterpene** (z.B. in Kamille, Vetiver): Schwerere Moleküle, weicher, erdiger Duftcharakter.

**Oxide** (z.B. 1,8-Cineol in Eukalyptus): Klar, frisch, durchdringend im Duft.

**Alkohole** (z.B. Linalool in Lavendel): Sanft, mild, gut hautverträglich.

**Phenole** (z.B. in Thymian, Oregano): Sehr intensiv und potenziell hautreizend — erfordern besondere Vorsicht und gute Verdünnung.

### Übung: Dein erster bewusster Duft

Nimm ein ätherisches Öl (falls vorhanden) oder eine frische Pflanze (Rosmarin, Minze, Lavendel, Zitronenschale). Halte sie unter die Nase und atme langsam ein:
1. Erster Eindruck: Welches Wort kommt spontan? (frisch, warm, süß, herb, scharf?)
2. Emotion: Welches Gefühl löst der Duft aus?
3. Körperreaktion: Wo spürst du den Duft im Körper?
4. Erinnerung: Taucht ein Bild oder eine Erinnerung auf?

Notiere deine Eindrücke — das ist der Beginn deiner persönlichen Duftsprache.`
        },
        {
          id: 'N01-M1-L2',
          titel: 'Gewinnung — Destillation, Kaltpressung & Extraktion',
          inhalt: `## Gewinnung ätherischer Öle

### Wie der Duft in die Flasche kommt

Die Art der Gewinnung bestimmt die Qualität, Reinheit und Zusammensetzung eines ätherischen Öls. Es gibt drei Hauptmethoden — jede mit eigenen Stärken und Grenzen.

### Wasserdampfdestillation

Die älteste und häufigste Methode. Das Prinzip ist seit über tausend Jahren bekannt und im Kern unverändert:

**Der Prozess:**
1. Pflanzenmaterial (Blüten, Blätter, Wurzeln) wird in einen Destillationskessel gefüllt
2. Heißer Wasserdampf durchströmt das Pflanzenmaterial
3. Der Dampf löst die flüchtigen aromatischen Verbindungen aus den Pflanzenzellen
4. Das Dampf-Öl-Gemisch steigt auf und wird durch ein Kühlsystem geleitet
5. Im Auffangbehälter trennen sich Öl (oben) und Hydrolat/Pflanzenwasser (unten)

**Qualitätsfaktoren bei der Destillation:**
- Temperatur: Zu hoch zerstört empfindliche Inhaltsstoffe, zu niedrig löst nicht alle Verbindungen
- Druck: Niederdruck-Destillation schont die empfindlichsten Moleküle
- Dauer: Manche Pflanzen brauchen nur 15 Minuten, andere mehrere Stunden (Ylang-Ylang wird fraktioniert destilliert — die erste Fraktion "Extra" ist die wertvollste)
- Wasserqualität: Reines Quellwasser liefert die besten Ergebnisse

**Hydrolate als Nebenprodukt:**
Das Pflanzenwasser, das bei der Destillation entsteht, ist kein Abfall — es enthält wasserlösliche Pflanzenbestandteile und einen kleinen Anteil ätherischen Öls. Rosenhydrolat, Lavendelhydrolat und Kamillenhydrolat sind wertvolle eigenständige Produkte für die Hautpflege und sanfte Duftanwendung.

### Kaltpressung (Expression)

Ausschließlich für Zitrusöle: Zitrone, Orange, Bergamotte, Grapefruit, Mandarine, Limette.

**Der Prozess:**
Die Schalen der Zitrusfrüchte werden mechanisch gepresst — ohne Hitze. In der traditionellen Methode wurden die Schalen von Hand über einem Auffanggefäß ausgedrückt. Heute übernehmen Maschinen, die die ganze Frucht pressen und anschließend das Öl vom Saft separieren.

**Besonderheiten:**
- Kaltgepresste Zitrusöle enthalten natürliche Farbstoffe und Wachse, die in destillierten Ölen fehlen
- Sie sind lichtempfindlich (phototoxisch) — nach Auftragen auf die Haut keine direkte Sonneneinstrahlung für 12 Stunden
- Sie oxidieren schneller als destillierte Öle — kühl und dunkel lagern, innerhalb von 12 Monaten verbrauchen

### Lösungsmittel-Extraktion

Für empfindliche Blüten, deren Duftstoffe die Hitze der Destillation nicht überstehen: Jasmin, Tuberose, Mimose, teilweise Rose.

**Der Prozess:**
1. Blüten werden in ein Lösungsmittel (typisch: Hexan) eingelegt
2. Das Lösungsmittel löst die Duftstoffe und Pflanzenwachse
3. Nach dem Verdampfen des Lösungsmittels bleibt eine wachartige Masse zurück: das **Concrète**
4. Das Concrète wird mit Alkohol gewaschen — der Alkohol löst die Duftstoffe aus dem Wachs
5. Nach dem Verdampfen des Alkohols bleibt das **Absolue** — ein hochkonzentriertes Duftextrakt

**Wichtig zu wissen:**
- Absolues sind technisch keine "ätherischen Öle" — sie enthalten minimale Lösungsmittelreste
- Für die direkte Hautanwendung werden sie in der klassischen Aromakunde zurückhaltend beurteilt
- Für die Raumbeduftung und emotionale Duftarbeit sind sie hervorragend

### CO₂-Extraktion

Eine neuere Methode, die die Vorteile von Destillation und Lösungsmittel-Extraktion vereint.

**Der Prozess:**
Kohlendioxid wird unter hohem Druck verflüssigt und als Lösungsmittel genutzt. Es löst die Duftstoffe schonend und hinterlässt — im Gegensatz zu Hexan — keinerlei Rückstände, da es bei Normaldruck einfach verdampft.

**Vorteile:** Sehr reines Produkt, schonend, keine Lösungsmittelreste. **Nachteil:** Teurer als Destillation.

### Übung: Herkunft deiner Öle

Überprüfe drei ätherische Öle, die du besitzt (oder beim nächsten Kauf):
1. Welche Gewinnungsmethode wird angegeben?
2. Welcher Pflanzenteil wurde verwendet?
3. Aus welchem Land stammt das Öl?
4. Wird der botanische Name (lateinisch) angegeben?

Diese vier Informationen sollten auf jedem seriösen Etikett stehen.`
        },
        {
          id: 'N01-M1-L3',
          titel: 'Qualität erkennen — worauf es beim Kauf ankommt',
          inhalt: `## Qualität erkennen

### Warum Qualität entscheidend ist

Ein minderwertiges oder verfälschtes ätherisches Öl ist nicht nur schwach im Duft — es kann der Haut schaden. Synthetische Duftstoffe, gestreckte Öle oder verunreinigte Produkte können Hautreizungen, allergische Reaktionen oder Kopfschmerzen auslösen. Die Fähigkeit, Qualität zu erkennen, ist keine optionale Zusatzkompetenz — sie ist Grundvoraussetzung für den sicheren Umgang mit Düften.

### Die fünf Qualitätsmerkmale

**1. Botanische Bezeichnung**
Jedes seriöse Öl trägt den lateinischen Pflanzennamen auf dem Etikett. Das ist entscheidend, weil Volksnamen mehrdeutig sind: "Kamille" kann Matricaria chamomilla (Deutsche Kamille — blau) oder Chamaemelum nobile (Römische Kamille — gelblich) sein. Zwei völlig verschiedene Öle.

**2. Pflanzenteil und Herkunft**
Der Pflanzenteil (Blüte, Blatt, Wurzel, Schale) und das Anbauland beeinflussen die Zusammensetzung. Lavendel aus 1.200 Metern Höhe in der Provence hat ein anderes Profil als Lavendel aus der Ebene. Teebaum aus Australien unterscheidet sich von Teebaum aus Südafrika.

**3. Gewinnungsmethode**
Destillation, Kaltpressung, CO₂-Extraktion oder Absolue — die Methode muss deklariert sein. Ein "Rosenöl" ohne Angabe der Gewinnungsmethode ist verdächtig.

**4. Reinheit**
"100% reines ätherisches Öl" oder "naturreines ätherisches Öl" — das bedeutet: unverdünnt, nicht gestreckt, nicht synthetisch ergänzt. Begriffe wie "Duftöl", "Aromaöl" oder "natürliches Parfümöl" sind keine ätherischen Öle — sie enthalten synthetische Bestandteile.

**5. Analyse-Zertifikat**
Professionelle Anbieter stellen auf Anfrage (oder online) das GC/MS-Analysezertifikat (Gaschromatographie/Massenspektrometrie) zur Verfügung. Dieses zeigt die exakte chemische Zusammensetzung und beweist, ob das Öl natürlichen Ursprungs ist.

### Die häufigsten Qualitätsfallen

**Strecken mit Trägeröl:** Ein teures Öl (Rose, Jasmin, Neroli) wird mit günstigem Jojoba- oder Mandelöl verdünnt. Test: Ein Tropfen reines ätherisches Öl auf Papier verdunstet rückstandsfrei. Ein gestrecktes Öl hinterlässt einen fettigen Fleck.

**Synthetische Zusätze:** Günstige synthetische Duftstoffe werden zugemischt, um das Öl zu "verbessern" oder das Volumen zu strecken. Nur das GC/MS-Zertifikat entlarvt dies zuverlässig.

**Falsche Bezeichnung:** Ein günstiges Öl wird als teureres verkauft. Beispiel: Lavandin (Lavandula x intermedia — ein Hybrid) wird als echter Lavendel (Lavandula angustifolia) verkauft. Lavandin ist nicht schlecht — aber es hat andere Eigenschaften und einen Bruchteil des Preises.

**"Therapeutische Qualität" als Marketing:** Es gibt keine offizielle Zertifizierung für "therapeutische Qualität" ätherischer Öle. Kein unabhängiges Gremium vergibt dieses Siegel. Wenn ein Anbieter damit wirbt, ist es ein Marketingbegriff — kein Qualitätsnachweis.

### Preisorientierung

Qualität hat ihren Preis — aber extreme Preise in beide Richtungen sind Warnsignale:

- **Lavendelöl** (10ml): 6–15 € (gute Qualität)
- **Teebaumöl** (10ml): 5–12 €
- **Pfefferminzöl** (10ml): 5–12 €
- **Rosenöl** (2ml): 15–40 € — echtes Rosenöl ist teuer. Ein "Rosenöl" für 5 € ist kein echtes Rosenöl.
- **Weihrauchöl** (5ml): 8–20 €

Wenn alle Öle eines Anbieters den gleichen Preis haben, ist das verdächtig — die Herstellungskosten variieren enorm.

### Lagerung

Ätherische Öle korrekt lagern:
- Dunkelglasflasche (braun oder blau) — Licht zersetzt die Inhaltsstoffe
- Kühl lagern (Raumtemperatur bis Kühlschrank)
- Fest verschließen — die Öle verdunsten
- Zitrusöle innerhalb von 12 Monaten verbrauchen, andere Öle halten 2–5 Jahre
- Oxidierte Öle (verändert im Geruch, zähflüssig) entsorgen — sie können die Haut reizen

### Übung: Qualitätscheck

Nimm ein ätherisches Öl aus deinem Bestand und prüfe:
1. Botanischer Name auf dem Etikett? □ Ja □ Nein
2. Pflanzenteil angegeben? □ Ja □ Nein
3. Gewinnungsmethode angegeben? □ Ja □ Nein
4. Herkunftsland angegeben? □ Ja □ Nein
5. "100% naturrein" deklariert? □ Ja □ Nein
6. GC/MS-Zertifikat verfügbar? □ Ja □ Nein

Weniger als 4× Ja? Recherchiere den Anbieter oder erwäge einen Wechsel.`
        }
      ]
    },

    // ============================================================
    // MODUL 2 — Wie ätherische Öle wirken
    // ============================================================
    {
      id: 'N01-M2',
      titel: 'Wie ätherische Öle auf uns wirken',
      beschreibung: 'Die Wege ätherischer Öle verstehen — über den Geruchssinn, über die Haut und auf die Stimmung.',
      lektionen: [
        {
          id: 'N01-M2-L4',
          titel: 'Wirkung über den Geruchssinn — das limbische System',
          inhalt: `## Wirkung über den Geruchssinn

### Der schnellste Weg ins Gehirn

Von allen Sinnen hat der Geruchssinn den direktesten Zugang zum Gehirn. Während visuelle oder akustische Reize mehrere Verarbeitungsstationen durchlaufen, erreichen Duftmoleküle das limbische System — das emotionale Zentrum des Gehirns — in weniger als einer Sekunde.

Dieser direkte Weg erklärt, warum ein Duft dich in Sekundenbruchteilen in eine Erinnerung versetzen kann, die 30 Jahre zurückliegt — lebhafter als jedes Foto.

### Der Weg des Dufts

**Schritt 1 — Einatmung:**
Duftmoleküle gelangen mit der Atemluft in die Nasenhöhle. Dort treffen sie auf die Riechschleimhaut — ein briefmarkengroßes Areal, auf dem rund 30 Millionen Riechzellen sitzen.

**Schritt 2 — Rezeptorbindung:**
Jede Riechzelle trägt Rezeptoren, die wie Schlösser funktionieren. Die Duftmoleküle sind die Schlüssel. Der Mensch besitzt etwa 350 verschiedene Rezeptortypen — ihre Kombinationen ermöglichen es, rund 10.000 verschiedene Düfte zu unterscheiden.

**Schritt 3 — Signalweiterleitung:**
Die Riechzellen senden elektrische Signale über den Riechnerv direkt an den Bulbus olfactorius — und von dort ins limbische System. Kein anderer Sinn hat einen so kurzen, so direkten Weg ins emotionale Gehirn.

### Das limbische System — warum Düfte Gefühle machen

Das limbische System ist die älteste Gehirnstruktur — evolutionär älter als die Großhirnrinde, die für rationales Denken zuständig ist. Es verarbeitet Emotionen, Erinnerungen und Instinkte. Die wichtigsten Strukturen:

**Amygdala (Mandelkern):**
Verarbeitet emotionale Reaktionen — besonders Angst, aber auch Freude, Ekel und Überraschung. Ein Duft kann die Amygdala aktivieren, bevor du bewusst wahrgenommen hast, was du riechst. Das erklärt "Bauchgefühle" bei bestimmten Düften.

**Hippocampus:**
Das Gedächtniszentrum. Düfte werden hier mit Erinnerungen verknüpft — und diese Verknüpfungen sind außergewöhnlich stabil. Der Geruch von Vanille, der dich an die Küche deiner Großmutter erinnert, wird dich ein Leben lang begleiten.

**Hypothalamus:**
Steht in Verbindung mit dem autonomen Nervensystem. Über diesen Weg lässt sich nachvollziehen, warum Düfte unsere Stimmung und unser Empfinden so unmittelbar beeinflussen können — der Duft von Lavendel wird von vielen als beruhigend erlebt, Pfefferminze von vielen als wach machend.

### Wahrnehmbare Wirkungen auf das Befinden

Dass Düfte auf das Befinden wirken, ist gut nachvollziehbar und teils wissenschaftlich untersucht — wobei die Stärke der Wirkung individuell sehr unterschiedlich ist:

- Lavendelduft wird von vielen Menschen als beruhigend und entspannend erlebt
- Pfefferminzduft empfinden viele als anregend und konzentrationsfördernd
- Zitrusdüfte werden häufig als stimmungsaufhellend und erfrischend beschrieben
- Rosmarinduft wird traditionell mit geistiger Wachheit in Verbindung gebracht

Diese Beschreibungen sind Erfahrungswerte, keine garantierten Wirkungen — wie ein Duft auf dich wirkt, ist immer auch persönlich.

### Die Macht der Assoziation

Neben der unmittelbaren Duftwirkung haben Düfte eine starke assoziative Komponente: Ein Duft, den du in einem glücklichen Moment erlebt hast, wird dich glücklich stimmen — unabhängig von seiner chemischen Zusammensetzung. Das bedeutet: Die Wirkung ätherischer Öle ist teilweise individuell. Was den einen entspannt, kann den anderen an eine negative Erfahrung erinnern.

### Übung: Dein Duft-Emotions-Profil

Rieche an drei verschiedenen ätherischen Ölen (oder Pflanzen/Gewürzen). Notiere für jedes:
1. Spontane Emotion (erstes Gefühl innerhalb von 3 Sekunden)
2. Erinnerung oder Bild (was taucht auf?)
3. Körperreaktion (Entspannung? Anregung? Engegefühl?)
4. Bewertung: Mag ich den Duft? (1–10)

Vergleiche deine Reaktionen mit der "üblichen" Beschreibung des Öls — Übereinstimmungen und Abweichungen sind gleichermaßen informativ.`
        },
        {
          id: 'N01-M2-L5',
          titel: 'Wirkung über die Haut — Aufnahme, Trägeröle & Verdünnung',
          inhalt: `## Wirkung über die Haut

### Durch die Barriere

Ätherische Öle bestehen aus kleinen, lipophilen (fettlöslichen) Molekülen — und genau das macht sie zu den wenigen Substanzen, die die Hautbarriere durchdringen können. Die Haut ist kein undurchlässiger Panzer — sie ist ein semipermeables Organ, das bestimmte Stoffe aufnimmt und andere abweist.

### Der Weg durch die Haut

**Die Hautbarriere:**
Die äußerste Schicht der Haut — das Stratum corneum — besteht aus abgestorbenen Hautzellen, die wie Ziegelsteine in einer "Mörtelschicht" aus Lipiden eingebettet sind. Die kleinen, fettlöslichen Moleküle ätherischer Öle können durch diese Lipidschicht hindurchdiffundieren.

**Aufnahmewege:**
1. Transzellulärer Weg: Direkt durch die Hautzellen hindurch
2. Interzellulärer Weg: Durch die Lipidschichten zwischen den Zellen (Hauptweg für ätherische Öle)
3. Follikulärer Weg: Durch Haarfollikel und Talgdrüsen — eine Art "Abkürzung" durch die Hautbarriere

**Geschwindigkeit:**
Ätherische Öle durchdringen die Haut innerhalb von Minuten. Eukalyptusöl ist bereits 20 Minuten nach dem Auftragen im Blut nachweisbar. Die vollständige Aufnahme dauert je nach Öl und Hautzustand 20–60 Minuten.

### Faktoren, die die Aufnahme beeinflussen

**Verstärkend:**
- Warme Haut (nach Bad, Massage, Sport) — erweiterte Poren und Blutgefäße
- Feuchte Haut — Wasser quillt die Hornschicht auf und erleichtert die Durchdringung
- Massage — erhöht die Durchblutung und damit die Aufnahme
- Dünne Hautstellen: Handgelenke, Schläfen, Fußsohlen, hinter den Ohren

**Hemmend:**
- Trockene, verhornte Haut — dickere Barriere
- Kälte — verengte Blutgefäße
- Narbengewebe — veränderte Hautstruktur

### Die Rolle der Trägeröle

Ätherische Öle werden fast nie pur auf die Haut aufgetragen — sie werden in einem Trägeröl verdünnt. Trägeröle sind pflanzliche, fette Öle, die die ätherischen Öle "tragen" und gleichzeitig die Haut pflegen.

**Die wichtigsten Trägeröle:**

*Jojobaöl:* Technisch ein flüssiges Wachs. Zieht schnell ein, nicht komedogen, sehr stabil (oxidiert kaum). Hervorragend für Gesichtsanwendungen.

*Mandelöl:* Mild, gut verträglich, leicht pflegend. Der Klassiker für Körpermassage.

*Kokosöl:* Kühlend im Gefühl. Wird bei Raumtemperatur fest. Gut für tropische Klimazonen.

*Sesamöl:* Wärmend, nährend, traditionell in der ayurvedischen Massage verwendet. Etwas schwerer als Mandelöl.

*Arganöl:* Reich an Vitamin E, sehr pflegend. Premium-Trägeröl für Gesicht und Haare.

### Verdünnungsrichtlinien

Die Verdünnung schützt vor Hautreizungen und allergischen Reaktionen:

- **Körpermassage (Erwachsene):** 2–3% → 6–9 Tropfen ätherisches Öl auf 15 ml Trägeröl
- **Gesicht:** 1% → 3 Tropfen auf 15 ml Trägeröl
- **Kinder (über 6 Jahre):** 1% → 3 Tropfen auf 15 ml Trägeröl
- **Schwangere:** 1% → nur bestimmte Öle, und nur nach Rücksprache mit Ärztin oder Arzt
- **Punktuelle, kurzzeitige Anwendung (kleiner Bereich):** bis 5% → 15 Tropfen auf 15 ml Trägeröl
- **Babys und Kleinkinder (0–6):** Generell keine ätherischen Öle direkt auf die Haut

**1 ml = ca. 20 Tropfen** ätherisches Öl (Faustregel, variiert je nach Öl und Tropfer).

### Übung: Verdünnung berechnen

Du möchtest ein Pflegeöl herstellen:
- 30 ml Mandelöl als Basis
- 2% Verdünnung
- Wie viele Tropfen ätherisches Öl brauchst du?

Lösung: 30 ml × 0,02 = 0,6 ml → 0,6 × 20 = 12 Tropfen.

Übe mit verschiedenen Mengen und Verdünnungsgraden, bis du die Berechnung sicher beherrschst.`
        },
        {
          id: 'N01-M2-L6',
          titel: 'Wirkung auf Stimmung & Emotionen — Öle als Stimmungsbegleiter',
          inhalt: `## Wirkung auf Stimmung & Emotionen

### Düfte als Begleiter der Stimmung

Die emotionale Wirkung ätherischer Öle ist einer der faszinierendsten Aspekte der Aromakunde. Jedes ätherische Öl hat neben seinem Duftcharakter ein emotionales Profil: eine Tendenz, bestimmte Stimmungen zu begleiten, zu unterstützen oder auszugleichen — wobei das Erleben immer individuell bleibt.

### Die vier emotionalen Grundrichtungen

**Beruhigend / entspannend:**
Öle, deren Duft von vielen als beruhigend erlebt wird und die mit Ruhe und Gelassenheit in Verbindung gebracht werden.
Beispiele: Lavendel, Kamille, Ylang-Ylang, Sandelholz, Neroli, Vetiver, Bergamotte.
Stimmungskontext: Anspannung, Unruhe, das Bedürfnis nach Ruhe am Abend.

**Anregend / belebend:**
Öle, deren Duft als frisch und wach machend empfunden wird.
Beispiele: Pfefferminze, Rosmarin, Eukalyptus, Zitrone, Grapefruit, Schwarzer Pfeffer.
Stimmungskontext: Müdigkeit, das Bedürfnis nach Frische und Klarheit, ein Energietief am Nachmittag.

**Stimmungsaufhellend:**
Öle, deren Duft von vielen als heiter und aufhellend erlebt wird.
Beispiele: Orange, Bergamotte, Jasmin, Rose, Ylang-Ylang, Grapefruit, Mandarine.
Stimmungskontext: graue Tage, emotionale Schwere, das Bedürfnis nach Leichtigkeit.

**Erdend / zentrierend:**
Öle, die ein Gefühl von Stabilität, Verwurzelung und innerem Halt vermitteln.
Beispiele: Vetiver, Weihrauch, Sandelholz, Zedernholz, Patchouli, Myrrhe.
Stimmungskontext: Gedankenkreisen, Rastlosigkeit, das Bedürfnis nach Bodenhaftung.

Wichtig: Diese Einordnungen sind Erfahrungswerte und ersetzen keine fachliche Beratung. Bei anhaltender innerer Belastung, gedrückter Stimmung oder Schlafproblemen, die über normale Schwankungen hinausgehen, wende dich bitte an Ärztin, Arzt oder eine psychotherapeutische Fachperson — Düfte können das Wohlbefinden begleiten, aber keine fachliche Hilfe ersetzen.

### Duft und Erinnerung

Ein einzigartiger Aspekt der Duftarbeit: Düfte können Stimmungen "ankern". Wenn du in einem Zustand tiefer Entspannung regelmäßig Lavendelöl einatmest, wird der Lavendelduft allein mit der Zeit dazu beitragen, dich an diesen Entspannungszustand zu erinnern. Dieses Prinzip — bekannt als konditionierte Reaktion — macht ätherische Öle zu hilfreichen Werkzeugen für die emotionale Selbstfürsorge.

**Praktische Anwendung des Ankerns:**
1. Wähle einen Duft für den gewünschten Zustand (z.B. Lavendel für Ruhe)
2. Rieche an dem Öl in Momenten, in denen du den Zustand bereits erlebst (z.B. nach Meditation)
3. Wiederhole über 2–3 Wochen
4. Der Duft allein erinnert dich nun an den gewünschten Zustand — auch in anspruchsvollen Momenten

### Die Duftnote als emotionaler Fingerabdruck

Jedes ätherische Öl hat eine bestimmte Duftnote — eine Art zeitliche Signatur:

**Kopfnote (Top Note):** Leicht, schnell wahrnehmbar, verflüchtigt sich in 1–2 Stunden. Emotional: erster Impuls, spontane Reaktion. Beispiele: Zitrone, Pfefferminze, Eukalyptus, Orange.

**Herznote (Middle Note):** Mittelschwer, wird nach 10–30 Minuten spürbar, hält 3–4 Stunden. Emotional: die tiefere Wirkung, das eigentliche Thema. Beispiele: Lavendel, Rosmarin, Kamille, Rose, Geranium.

**Basisnote (Base Note):** Schwer, erdend, entwickelt sich langsam, hält 6–24 Stunden. Emotional: die Grundstimmung, die tragende Schicht. Beispiele: Sandelholz, Vetiver, Patchouli, Myrrhe, Weihrauch.

### Übung: Emotionale Duft-Sammlung

Erstelle deine persönliche Duft-Sammlung. Notiere für jeden Bereich ein Öl (oder eine Pflanze), das bei dir wirkt:
1. Mein Beruhigungs-Duft: ___
2. Mein Energie-Duft: ___
3. Mein Stimmungsaufheller: ___
4. Mein Erdungs-Duft: ___
5. Mein Fokus-Duft: ___`
        }
      ]
    },

    // ============================================================
    // MODUL 3 — Die 12 wichtigsten Öle
    // ============================================================
    {
      id: 'N01-M3',
      titel: 'Die 12 wichtigsten Öle',
      beschreibung: 'Zwölf Schlüssel-Öle nach Duftcharakter und traditioneller Verwendung kennenlernen.',
      lektionen: [
        {
          id: 'N01-M3-L7',
          titel: 'Lavendel, Teebaum & Pfefferminze — die Allrounder',
          inhalt: `## Die Allrounder

### Die drei Öle, mit denen alles beginnt

Wenn du nur drei ätherische Öle besitzen dürftest, wären es diese. Sie decken das breiteste Duftspektrum ab und sind die Grundlage jeder Duftsammlung und jeder Praxis.

---

### Lavendel (Lavandula angustifolia)

**Der Universalist.** Kein anderes Öl ist so vielseitig, so gut verträglich und so umfassend erforscht.

**Gewinnung:** Wasserdampfdestillation der Blüten
**Duftnote:** Herznote — blumig, krautig, leicht süß
**Hauptinhaltsstoffe:** Linalool, Linalylacetat

**Duftcharakter & Erleben:**
- Wird von vielen als beruhigend und ausgleichend erlebt
- Häufig genutzter Begleiter für entspannte Abende und erholsame Ruhe
- Sanft und unaufdringlich — eines der mildesten Öle

**Anwendung (Wohlbefinden):**
- Diffuser am Abend für eine entspannte Atmosphäre
- 1–2 Tropfen auf das Kopfkissen
- In der Badewanne (5 Tropfen mit etwas Sahne oder Salz emulgiert)
- Verdünnt als Pflegeöl für die Haut

**Besonderheit:** Lavendel gilt als besonders mild und gut verträglich. Dennoch gilt auch hier: Verdünnung ist die beste Praxis.

---

### Teebaum (Melaleuca alternifolia)

**Der Klärende.** Ein traditionsreiches Öl mit frischem, markantem Duft.

**Gewinnung:** Wasserdampfdestillation der Blätter
**Duftnote:** Kopfnote — frisch, medizinisch, kampferartig
**Hauptinhaltsstoffe:** Terpinen-4-ol, γ-Terpinen, α-Terpinen

**Duftcharakter & Erleben:**
- Frisch, klar, durchdringend
- Wird traditionell für ein Gefühl von Sauberkeit und Frische geschätzt
- Auf der Duftebene als reinigend und klärend empfunden

**Anwendung (Wohlbefinden & Pflege):**
- Verdünnt in der Hautpflege (2% in Jojobaöl)
- Im Diffuser zur frischen Raumatmosphäre
- Als Zusatz in selbstgemachten Reinigungssprays für den Haushalt

**Wichtig:** Teebaum oxidiert schnell — nach dem Öffnen innerhalb von 6–12 Monaten verbrauchen. Oxidiertes Teebaumöl ist hautreizend.

---

### Pfefferminze (Mentha × piperita)

**Der Wachmacher.** Kühlend und sofort spürbar — Pfefferminze ist das Öl für einen klaren Kopf.

**Gewinnung:** Wasserdampfdestillation der Blätter
**Duftnote:** Kopfnote — scharf, kühlend, mentholig
**Hauptinhaltsstoffe:** Menthol, Menthon

**Duftcharakter & Erleben:**
- Frisch und kühlend im Dufterleben
- Wird von vielen als anregend und konzentrationsfördernd empfunden
- Belebend, ohne aufzuputschen

**Anwendung (Wohlbefinden):**
- Diffuser am Arbeitsplatz für eine frische Atmosphäre
- Inhalation für ein Gefühl von Frische
- Ein Tropfen auf die Handflächen, verreiben, inhalieren — ein frischer Moment

**Kontraindikationen / Vorsicht:** Nicht bei Kindern unter 6 Jahren (Menthol kann Atemkrämpfe auslösen). Nicht in der Nähe der Augen. Nicht bei Epilepsie. Abends meiden — der Duft wird als wach machend erlebt. Bei Unsicherheit Rücksprache mit Ärztin, Arzt oder Apotheke.

### Übung: Die drei Allrounder vergleichen

Wenn du alle drei Öle hast, mache einen direkten Vergleich:
1. Rieche an jedem Öl einzeln — 3 tiefe Atemzüge
2. Notiere: Welches Öl wirkt am stärksten auf dich?
3. Rieche sie in verschiedenen Stimmungen — morgens, mittags, abends
4. Welches Öl "ruft" dich in welcher Situation?`
        },
        {
          id: 'N01-M3-L8',
          titel: 'Weihrauch, Rosmarin & Eukalyptus — Tiefe & Klarheit',
          inhalt: `## Tiefe & Klarheit

### Drei Öle für den Geist

Diese drei Öle bilden das nächste Fundament: Weihrauch für die meditative Tiefe, Rosmarin für die mentale Frische, Eukalyptus für das Gefühl von Klarheit.

---

### Weihrauch (Boswellia carterii / B. sacra)

**Das sakrale Öl.** Seit über 5.000 Jahren in Ritualen und Zeremonien verwendet — einer der ältesten bekannten Dufte der Menschheit.

**Gewinnung:** Wasserdampfdestillation des Harzes (Olibanum)
**Duftnote:** Basisnote — warm, harzig, leicht würzig, tiefgründig
**Hauptinhaltsstoffe:** α-Pinen, Limonen, Incensol

**Duftcharakter & Erleben:**
- Tief, warm, getragen — ein klassischer Meditationsduft
- Wird von vielen als beruhigend und sammelnd erlebt
- Begleitet Momente der Stille und inneren Einkehr
- Traditionell mit Andacht und Ritual verbunden

**Anwendung (Wohlbefinden):**
- Diffuser während Meditation oder stiller Praxis
- Gesichtspflegeöl (1% in Arganöl) für reife Haut
- Ein Tropfen auf die Innenseite der Handgelenke — für Momente der Erdung im Alltag

**Besonderheit:** Weihrauch gilt als das Öl der Wahl für alle Formen meditativer und kontemplativer Praxis.

---

### Rosmarin (Rosmarinus officinalis ct. 1,8-Cineol)

**Der Klare.** Rosmarin ist seit der Antike mit Erinnerung und geistiger Frische assoziiert.

**Gewinnung:** Wasserdampfdestillation der blühenden Spitzen
**Duftnote:** Herznote — krautig, frisch, leicht kampferig
**Hauptinhaltsstoffe:** 1,8-Cineol, Kampfer, α-Pinen

**Chemotypen — wichtig!**
Rosmarin gibt es in verschiedenen Chemotypen (gleiche Pflanze, aber je nach Standort unterschiedliche chemische Zusammensetzung):
- *ct. 1,8-Cineol:* Am häufigsten. Frisch, klar. Standard für die Aromakunde.
- *ct. Kampfer:* Markanter, kräftiger im Duft.
- *ct. Verbenon:* Mildeste Variante, besonders hautfreundlich.

**Duftcharakter & Erleben:**
- Frisch, krautig, klärend
- Wird traditionell mit geistiger Wachheit und Konzentration verbunden
- Von vielen als belebend und fokussierend erlebt

**Anwendung (Wohlbefinden):**
- Diffuser während der Arbeit oder beim Lernen
- Kopfhautpflegeöl (3 Tropfen in 15 ml Jojobaöl)
- Morgendliche Inhalation für einen frischen Start

**Kontraindikationen / Vorsicht:** Nicht bei Epilepsie (kampferhaltig). Nicht bei Bluthochdruck in hoher Dosierung. Nicht in der Schwangerschaft. Bei Unsicherheit Rücksprache mit Ärztin, Arzt oder Apotheke.

---

### Eukalyptus (Eucalyptus globulus / E. radiata)

**Der Frische.** Kein Öl duftet so klar, kühl und durchdringend wie Eukalyptus.

**Gewinnung:** Wasserdampfdestillation der Blätter
**Duftnote:** Kopfnote — kampferig, frisch, kühl, medizinisch
**Hauptinhaltsstoffe:** 1,8-Cineol (bis zu 80%), α-Pinen

**Zwei wichtige Arten:**
- *E. globulus:* Intensiver, stärker. Für Erwachsene. Das "klassische" Eukalyptusöl.
- *E. radiata:* Milder, besser verträglich. Für Kinder ab 6 Jahren und empfindliche Erwachsene.

**Duftcharakter & Erleben:**
- Klar, kühl, weit — vermittelt ein Gefühl von Frische und Weite
- Wird von vielen als befreiend und klärend empfunden
- Ein typischer Winterduft

**Anwendung (Wohlbefinden):**
- Dufterlebnis im Diffuser für eine frische Raumatmosphäre
- Als Zusatz im selbstgemachten Raumspray
- Verdünnt als belebendes Pflegeöl

**Kontraindikationen / Vorsicht:** E. globulus nicht bei Kindern unter 10 Jahren. Vorsicht bei Asthma (kann die Atemwege reizen). Nicht innerlich einnehmen. Bei gesundheitlichen Fragen Rücksprache mit Ärztin, Arzt oder Apotheke.

### Übung: Steckbrief erstellen

Wähle eines der drei Öle und erstelle einen persönlichen Steckbrief:
- Mein erster Eindruck beim Riechen: ___
- In welcher Stimmung greife ich am liebsten danach: ___
- Meine bevorzugte Anwendungsform: ___
- In welcher Situation begleitet es mich: ___`
        },
        {
          id: 'N01-M3-L9',
          titel: 'Orange, Ylang-Ylang, Zitrone & Co. — Leichtigkeit & Herz',
          inhalt: `## Leichtigkeit & Herz

### Sechs Öle für Freude und Herzöffnung

Die verbleibenden sechs Schlüssel-Öle bilden die emotionale Palette deiner Duftpraxis: Düfte, die aufhellen, wärmen, öffnen und das Herz berühren.

---

### Orange (Citrus sinensis)

**Das Sonnenkind.** Kein anderes Öl erzeugt so unmittelbar ein Gefühl von Wärme und Geborgenheit.

**Duftnote:** Kopfnote — süß, fruchtig, warm
**Gewinnung:** Kaltpressung der Schale

**Duftcharakter & Erleben:** Wird von vielen als stimmungsaufhellend und wärmend erlebt — das Öl der Wahl für graue Tage und das Bedürfnis nach Leichtigkeit. Es hebt die Stimmung sanft, wie ein inneres Lächeln.

**Besonderheit:** Leicht phototoxisch — nach Hautanwendung 12 Stunden keine direkte Sonne. Oxidiert schnell — kühl lagern, zügig verbrauchen.

---

### Zitrone (Citrus limon)

**Der Frischekick.** Klar, sauber, wach — Zitrone ist der Duft des Neuanfangs.

**Duftnote:** Kopfnote — hell, scharf, frisch
**Gewinnung:** Kaltpressung der Schale

**Duftcharakter & Erleben:** Wird als frisch, klar und konzentrationsfördernd empfunden. In Japan wird Zitrusduft traditionell in Büros eingesetzt, weil er als aufmerksamkeitssteigernd gilt.

**Anwendung (Wohlbefinden):** Diffuser im Arbeitsraum. Selbstgemachtes Reinigungsspray (10 Tropfen in 100 ml Wasser mit etwas Alkohol). Morgens im Badezimmer für einen frischen Start.

---

### Bergamotte (Citrus bergamia)

**Der Stimmungsbegleiter.** Bergamotte verbindet die Frische der Zitrusdüfte mit einer floralen Tiefe, die kein anderes Zitrusöl hat.

**Duftnote:** Kopf-/Herznote — zitrusartig, leicht blumig, komplex
**Gewinnung:** Kaltpressung der Schale

**Duftcharakter & Erleben:** Wird zugleich als beruhigend und aufhellend erlebt — eine seltene Kombination, die Bergamotte zu einem beliebten Begleiter für die emotionale Selbstfürsorge macht.

**Wichtig:** Stark phototoxisch — unbedingt 12–24 Stunden keine Sonne nach Hautanwendung. Es gibt "bergaptenfreie" Bergamotte (FCF — Furanocumarin-frei), die nicht phototoxisch ist.

---

### Ylang-Ylang (Cananga odorata)

**Die Blüte der Sinnlichkeit.** Schwer, süß, exotisch — Ylang-Ylang ist der Duft, der das Herz öffnet und die Sinne erweckt.

**Duftnote:** Herz-/Basisnote — intensiv blumig, süß, exotisch
**Gewinnung:** Wasserdampfdestillation der Blüten (fraktioniert: Extra → I → II → III)

**Duftcharakter & Erleben:** Wird als sinnlich, herzöffnend und beruhigend erlebt. Ein Duft, der häufig mit Genuss und Entspannung verbunden wird.

**Anwendung (Wohlbefinden):** Sparsam dosieren — der intensive Duft kann in hoher Konzentration als kopfschwer empfunden werden. 1–2 Tropfen im Diffuser reichen. Hervorragend in sinnlichen Pflegemischungen (1% mit Jojobaöl).

---

### Geranium (Pelargonium graveolens)

**Der Harmonisierer.** Geranium ist das Öl der Balance — duftlich ein Ausgleicher.

**Duftnote:** Herznote — rosig, krautig, süß-herb
**Gewinnung:** Wasserdampfdestillation der Blätter

**Duftcharakter & Erleben:** Wird als harmonisierend und ausgleichend erlebt. Geranium wird oft "das arme Rosenöl" genannt — es hat ein ähnliches Duftprofil wie Rose, ist aber deutlich günstiger. In der Hautpflege ist es für viele Hauttypen beliebt.

**Besonderheit:** Ein vielseitiger, gut harmonierender Duft, der sich in vielen Mischungen als Brücke zwischen Zitrus und Blüte einsetzen lässt.

---

### Rose (Rosa damascena)

**Die Königin.** Das teuerste und emotional tiefgreifendste aller ätherischen Öle — ein Tropfen Rose kann eine Atmosphäre verwandeln.

**Duftnote:** Herz-/Basisnote — tief blumig, süß, komplex, vielschichtig
**Gewinnung:** Wasserdampfdestillation der Blütenblätter (oder Absolue)

**Duftcharakter & Erleben:** Wird als tief herzöffnend erlebt — traditionell mit dem Herzchakra verbunden. Ein Duft, der für viele Mitgefühl, Zärtlichkeit und Wärme berührt.

**Preis:** Echtes Rosenöl kostet 15–40 € für 2 ml. Ein Tropfen genügt — weniger ist mehr. Bereits der Duft eines geöffneten Fläschchens (ohne einen Tropfen zu verwenden) kann berühren.

**Anwendung (Wohlbefinden):** Ein Tropfen auf dem Herzbereich (verdünnt). Im Diffuser in Momenten, in denen du Trost und Wärme suchst. In der Duftbegleitung: ein Tropfen auf ein Taschentuch.

### Übung: Dein Herzöl finden

Rieche an so vielen dieser sechs Öle wie möglich. Welches berührt dich am tiefsten? Welches erzeugt ein Gefühl von Öffnung, Wärme oder Rührung? Das ist dein persönliches Herzöl — das Öl, zu dem du in emotionalen Momenten als Erstes greifen magst.`
        }
      ]
    },

    // ============================================================
    // MODUL 4 — Anwendungsmethoden
    // ============================================================
    {
      id: 'N01-M4',
      titel: 'Anwendungsmethoden',
      beschreibung: 'Die Hauptwege der Duftanwendung beherrschen: Diffusion, Hautanwendung und traditionelle Formen wie Bäder und Kompressen.',
      lektionen: [
        {
          id: 'N01-M4-L10',
          titel: 'Diffusion & Inhalation — Raumbeduftung & frische Atmosphäre',
          inhalt: `## Diffusion & Inhalation

### Der einfachste Zugang

Die Diffusion über die Raumluft ist die sicherste und zugänglichste Anwendungsform ätherischer Öle. Sie erfordert keine Verdünnung, kein Fachwissen über Hautverträglichkeit und wirkt innerhalb von Sekunden über den Geruchssinn.

### Methoden der Raumbeduftung

**Ultraschall-Diffuser:**
Der Standard in der modernen Duftpraxis. Ultraschallvibrationen zerstäuben ein Wasser-Öl-Gemisch in feinste Tröpfchen, die als sichtbarer Nebel in den Raum abgegeben werden.

Vorteile: Kein Erhitzen (schont die Inhaltsstoffe), befeuchtet gleichzeitig die Luft, einfach zu handhaben. Empfehlung: 3–5 Tropfen pro 100 ml Wasser. In einem 20-m²-Raum reichen 4–6 Tropfen für 1–2 Stunden.

Praxis-Tipp: Diffuser nicht dauerbetrieben lassen — 30–60 Minuten an, dann Pause. Das Nervensystem gewöhnt sich sonst an den Duft und nimmt ihn weniger wahr. Intervall-Betrieb (30 Min an / 30 Min aus) ist wirksamer als Dauerbetrieb.

**Duftlampe (Aromalampe):**
Klassisch: Eine Schale über einer Teelichtkerze. Wasser plus Öl wird durch die Kerzenwärme erwärmt und verdunstet.

Vorteil: Atmosphärisch, kein Strom nötig. Nachteil: Die Hitze kann empfindliche Inhaltsstoffe verändern und das Duftprofil beeinflussen.

**Duftstein / Terrakotta-Stein:**
1–3 Tropfen auf einen unglasierten Tonstein. Das Öl verdunstet langsam und sanft.

Vorteil: Keine Hitze, keine Technik, kein Wasser. Ideal für den Nachttisch, den Schreibtisch oder im Auto. Nachteil: Geringe Reichweite — nur im unmittelbaren Umfeld wahrnehmbar.

**Beduftetes Taschentuch / Duftstreifen:**
1–2 Tropfen auf ein Taschentuch oder einen Duftstreifen aus Pappe. Bei Bedarf daran riechen.

Vorteil: Portabel, sofort einsetzbar, ideal für unterwegs.

### Direkte Inhalation

**Die Handflächenmethode:**
1 Tropfen auf die Handflächen geben, Hände verreiben, Hände schalenförmig vor Nase und Mund halten, 3–5 tiefe Atemzüge. Sofortiges, intensives Dufterlebnis.

Achtung: Nicht mit hautreizenden Ölen (Pfefferminze, Eukalyptus, Zimt) — diese können die Augen reizen. Danach nicht ins Gesicht fassen.

**Dampfinhalation:**
3–5 Tropfen in eine Schüssel mit heißem (nicht kochendem) Wasser. Handtuch über den Kopf, Augen geschlossen, 5–10 Minuten durch die Nase einatmen.

Als wohltuendes Frische-Ritual beliebt. Beste Öle: Eukalyptus, Pfefferminze, Teebaum. Vorsicht: Nicht bei Asthma (der Dampf kann die Atemwege reizen). Nicht bei Kindern unter 6 Jahren. Bei gesundheitlichen Beschwerden Rücksprache mit Ärztin, Arzt oder Apotheke.

**Riechstift (Inhaler):**
Ein kleiner Stift mit einem Baumwolldocht, auf den 10–15 Tropfen ätherisches Öl gegeben werden. Der Stift verschließt sich und kann jederzeit gezückt werden — ideal für unterwegs, für anspruchsvolle Momente oder als kleine Duftpause im Alltag.

### Sicherheit bei der Inhalation

- Gut lüften — ätherische Öle in geschlossenen Räumen nicht stundenlang laufen lassen
- Haustiere beachten — Katzen sind besonders empfindlich gegenüber bestimmten Ölen (Teebaum, Eukalyptus, Zitrus)
- Bei Kopfschmerzen, Übelkeit oder Schwindel: Sofort lüften, Diffuser ausschalten
- Babys und Kleinkinder: Nur sehr milde Öle (Lavendel, Mandarine) und nur in minimaler Dosierung im Diffuser

### Übung: Drei Diffuser-Mischungen

Erstelle drei Mischungen für deinen Diffuser (je 4–6 Tropfen gesamt):

1. **Entspannte Abende:** ___ Tropfen ___ + ___ Tropfen ___
2. **Fokus & Arbeit:** ___ Tropfen ___ + ___ Tropfen ___
3. **Gute Laune:** ___ Tropfen ___ + ___ Tropfen ___

Teste jede Mischung an einem passenden Tag und bewerte das Dufterlebnis.`
        },
        {
          id: 'N01-M4-L11',
          titel: 'Topische Anwendung — Verdünnung, Trägeröle & Pflegeöle',
          inhalt: `## Topische Anwendung

### Die Kraft der Berührung plus Duft

Die topische Anwendung — das Auftragen auf die Haut — verbindet zwei Erlebnisebenen: die Pflege der Haut durch das Trägeröl und das Dufterlebnis über die Nase. Wenn die Anwendung als Massage erfolgt, kommt die wohltuende Qualität der achtsamen Berührung hinzu.

### Verdünnungstabelle — dein Referenzwerkzeug

| Verdünnung | Tropfen pro 10 ml | Tropfen pro 30 ml | Einsatz |
|------------|-------------------|-------------------|---------|
| 0,5% | 1 | 3 | Gesicht (empfindlich), Kleinkinder |
| 1% | 2 | 6 | Gesicht (normal), Kinder 6–12, Schwangere |
| 2% | 4 | 12 | Standard Körperpflegeöl |
| 3% | 6 | 18 | Intensives Pflegeöl |
| 5% | 10 | 30 | Punktuelle, kurzzeitige Anwendung |

**Faustregel:** Im Zweifel weniger. Du kannst immer nachträglich verstärken — eine Hautreaktion lässt sich nicht rückgängig machen.

### Pflegeöl herstellen — Schritt für Schritt

1. **Trägeröl wählen** — passend zum Hauttyp und Zweck
2. **Ätherische Öle auswählen** — maximal 3–4 verschiedene für eine ausgewogene Mischung
3. **Verdünnung berechnen** — siehe Tabelle
4. **Mischen** — Ätherische Öle in die leere Flasche tropfen, dann Trägeröl dazu gießen. Sanft schwenken (nicht schütteln).
5. **Beschriften** — Datum, Inhalt, Verdünnung auf die Flasche schreiben. Innerhalb von 3 Monaten verbrauchen.

### Beliebte Anwendungsstellen

**Hohe Aufnahme (dünne Haut):**
- Handgelenke (innen) — ideal für emotionale Öle
- Fußsohlen — angenehm vor dem Schlafengehen
- Hinter den Ohren — diskrete Alltagsanwendung
- Schläfen — für ein frisches Gefühl (Lavendel, Pfefferminze)
- Herzbereich — für herzöffnende Öle (Rose, Ylang-Ylang)

**Als Wohlfühl-Anwendung:**
- Nacken/Schultern — ein wohltuendes Pflegeöl nach einem langen Tag (Lavendel, Rosmarin)
- Eine sanfte Bauchmassage im Uhrzeigersinn als Entspannungsritual (Pfefferminze, Fenchel, Ingwer)
- Eine wärmende Pflege für den unteren Rücken (Lavendel, Muskatellersalbei)
- Eine pflegende Brustanwendung mit frischen Düften (Eukalyptus radiata)

Hinweis: Diese Anwendungen dienen dem Wohlbefinden und der Pflege. Bei gesundheitlichen Beschwerden wende dich bitte an Ärztin, Arzt, Apotheke oder Heilpraktiker.

### Patch-Test — immer zuerst

Vor der erstmaligen Verwendung eines neuen Öls auf der Haut:
1. Mische 1 Tropfen ätherisches Öl in 4 Tropfen Trägeröl
2. Trage die Mischung auf die Innenseite des Unterarms auf
3. Warte 24 Stunden
4. Keine Reaktion? Sicher zu verwenden. Rötung, Juckreiz, Schwellung? Dieses Öl nicht auf der Haut verwenden.

### Roll-on — die praktischste Alltagsform

Ein Roll-on (10 ml Glasflasche mit Rollkugelaufsatz) ist die eleganteste Form der täglichen Duftpflege:
- 10 ml Jojobaöl als Basis
- 4–6 Tropfen ätherisches Öl (2–3%)
- Mischen, verschließen, überallhin mitnehmen

**Drei bewährte Roll-on-Rezepturen:**
- **Ruhe & Gelassenheit:** 2 Tr. Lavendel + 2 Tr. Bergamotte + 1 Tr. Ylang-Ylang in 10 ml Jojoba
- **Fokus:** 2 Tr. Rosmarin + 2 Tr. Zitrone + 1 Tr. Pfefferminze in 10 ml Jojoba
- **Frische:** 2 Tr. Pfefferminze + 2 Tr. Lavendel + 1 Tr. Eukalyptus in 10 ml Jojoba

### Übung: Dein erstes Pflegeöl

Stelle ein Pflegeöl her:
- 30 ml Mandelöl
- 2% Verdünnung = 12 Tropfen
- Wähle 2–3 ätherische Öle nach deinem Bedürfnis
- Mische, beschrifte, verwende es eine Woche lang abends nach dem Duschen
- Notiere: Wie fühlt sich deine Haut an? Wie verändert sich deine Stimmung?`
        },
        {
          id: 'N01-M4-L12',
          titel: 'Bäder, Kompressen & Wickel — traditionelle Anwendungsformen',
          inhalt: `## Bäder, Kompressen & Wickel

### Die Kraft des Wassers

Bäder, Kompressen und Wickel gehören zu den ältesten Wohlfühl-Ritualen überhaupt. In Kombination mit ätherischen Ölen entsteht eine besonders sinnliche Anwendungsform: Das warme Wasser öffnet die Poren, die Feuchtigkeit erleichtert die Aufnahme durch die Haut, und der aufsteigende Dampf sorgt gleichzeitig für ein Dufterlebnis.

### Das Aromabad

**Warum nicht einfach Öl ins Wasser tropfen?**
Ätherische Öle sind nicht wasserlöslich. Sie schwimmen als Film auf der Oberfläche und kommen so unverdünnt mit der Haut in Kontakt — das kann Reizungen verursachen, besonders bei empfindlicher Haut oder intensiven Ölen. Deshalb: Immer emulgieren.

**Emulgatoren — das Öl ins Wasser bringen:**
- Sahne oder Vollmilch (2–3 EL) — fettreich genug, um die Öle zu binden
- Meersalz oder Bittersalz (2–3 EL) — Öle auf das Salz tropfen, dann ins Wasser
- Neutrales Duschgel oder Basisshampoo (1 EL) — als Tensid
- Honig (1 EL) — bindet die Öle und pflegt die Haut

**Dosierung:**
- Vollbad: 5–8 Tropfen (nie mehr als 10)
- Sitzbad: 3–4 Tropfen
- Fußbad: 3–5 Tropfen
- Handbad: 2–3 Tropfen
- Badedauer: 15–20 Minuten — nicht länger, sonst kann die Haut austrocknen

**Rezepturen nach Stimmung:**

*Entspannungsbad:* 3 Tr. Lavendel + 2 Tr. Kamille + 1 Tr. Ylang-Ylang in 2 EL Sahne. Wassertemperatur: 37–38°C. Abends, 1 Stunde vor dem Schlafengehen.

*Frische-Bad:* 3 Tr. Eukalyptus + 2 Tr. Teebaum + 1 Tr. Pfefferminze in 3 EL Meersalz. Wassertemperatur: 38–39°C. Für ein belebendes Dufterlebnis an kalten Tagen. Danach warm einpacken.

*Wohlfühlbad nach Aktivität:* 3 Tr. Rosmarin + 2 Tr. Lavendel + 2 Tr. Schwarzer Pfeffer in 3 EL Bittersalz. Wassertemperatur: 38°C. Ein wärmendes Ritual nach Sport oder einem langen Tag.

*Stimmungsbad:* 3 Tr. Orange + 2 Tr. Bergamotte + 1 Tr. Geranium in 1 EL Honig. Wassertemperatur: 37°C. Für graue Tage und das Bedürfnis nach Leichtigkeit.

### Kompressen

**Warme Kompresse:**
1. Schüssel mit heißem Wasser (nicht kochend)
2. 3–4 Tropfen ätherisches Öl hinzufügen
3. Waschlappen eintauchen, auswringen
4. Auf den gewünschten Bereich legen
5. Mit einem trockenen Tuch abdecken, um die Wärme zu halten
6. 15–20 Minuten einwirken lassen

Als wohltuendes, wärmendes Ritual beliebt — etwa für den Nacken oder die Schultern nach einem langen Tag.

**Kalte Kompresse:**
Gleicher Ablauf, aber mit kaltem Wasser (optional mit Eiswürfeln). Wird als erfrischend und kühlend erlebt.

### Wickel

**Der wohltuende Brustwickel:**
1. Warme Kompresse mit 3 Tr. Eukalyptus + 2 Tr. Teebaum auf die Brust
2. Baumwolltuch darüber
3. Wollschal als äußere Schicht
4. 30–60 Minuten einwirken lassen, dabei ruhen

Ein klassisches Wärme- und Frische-Ritual für gemütliche Winterabende.

### Sicherheit bei Wasseranwendungen

- Immer emulgieren — Öle nie direkt ins Wasser
- Bei Herz-Kreislauf-Empfindlichkeit: Wassertemperatur unter 37°C halten und im Zweifel ärztlich abklären
- Schwangere: Nur milde Öle, kurze Bäder, moderate Temperatur, nach Rücksprache
- Nach dem Baden: 30 Minuten ruhen
- Bei Hautreaktionen: Sofort raus, Haut mit Trägeröl (nicht mit Wasser) abreiben

Hinweis: Bei Fieber, akuten Beschwerden oder Erkrankungen sind Wickel und Bäder kein Ersatz für ärztliche Behandlung — bitte ärztlichen Rat einholen.

### Übung: Dein erstes Aromabad

Wähle eine der Rezepturen und nimm ein bewusstes 20-minütiges Aromabad:
1. Handy aus, Kerze an, Tür zu
2. Achte auf die Wirkung des Dufts
3. Spüre, wie sich dein Körper im Wasser verändert
4. Notiere danach: Wie hat sich deine Stimmung, dein Körpergefühl verändert?`
        }
      ]
    },

    // ============================================================
    // MODUL 5 — Aromakunde in der Praxis
    // ============================================================
    {
      id: 'N01-M5',
      titel: 'Aromakunde in der Praxis',
      beschreibung: 'Achtsame Duftberatung, Mischungslehre und bewährte Duftrituale für Wohlbefinden im Alltag.',
      lektionen: [
        {
          id: 'N01-M5-L13',
          titel: 'Duftberatung — den richtigen Duft finden',
          inhalt: `## Duftberatung

### Der Duft wählt den Menschen

In der achtsamen Duftberatung empfiehlst du nicht einfach pauschal "Lavendel". Du findest gemeinsam mit dem Menschen den Duft, der zu ihm in seiner aktuellen Situation passt. Die Duftberatung ist der Prozess, der dorthin führt — als Begleitung für mehr Wohlbefinden, nicht als Behandlung.

### Das Prinzip der Duftpräferenz

Ein faszinierendes Phänomen der Aromakunde: Menschen fühlen sich intuitiv zu den Düften hingezogen, die zu ihrer aktuellen Stimmung passen. Wer nach Lavendel greift, sucht oft Ruhe. Wer Pfefferminze wählt, sucht Frische. Die Duftpräferenz ist ein wertvoller Wegweiser.

Auch Abneigungen sind aufschlussreich. Ein Duft, der Unbehagen auslöst, berührt manchmal ein Thema, das gerade nicht im Vordergrund stehen mag. Das bedeutet nicht, dass man diesen Duft erzwingen sollte — aber es lohnt sich, die Reaktion zu bemerken.

### Der Duftberatungs-Prozess

**Schritt 1 — Das Gespräch (10 Min):**
Bevor ein einziges Fläschchen geöffnet wird, stellst du Fragen rund um Stimmung und Wohlbefinden:
- Was wünschst du dir für dein Wohlbefinden? (Anliegen)
- Wie ist deine Stimmung gerade? (Stimmungslage)
- Wie sind deine Abende und dein Schlaf? (Alltagsrhythmus)
- Hast du Erfahrung mit ätherischen Ölen? (Vorwissen)
- Gibt es Düfte, die du liebst oder gar nicht magst? (Präferenzen)
- Allergien, Schwangerschaft, Hautempfindlichkeiten? (Sicherheit)

Wichtig: Die Duftberatung ist keine gesundheitliche Anamnese. Treten gesundheitliche Beschwerden zur Sprache, verweise an Ärztin, Arzt, Apotheke oder Heilpraktiker — Düfte begleiten das Wohlbefinden, ersetzen aber keine fachliche Abklärung.

**Schritt 2 — Die Duftvorstellung (10 Min):**
Wähle 4–6 Öle vor, die zum Wohlfühl-Anliegen passen könnten. Lasse die Person an jedem riechen — ohne die Namen zu nennen.

Für jedes Öl fragt sie sich:
- Mag ich diesen Duft? (1–10)
- Welches Gefühl löst er aus?
- Welche Farbe, welches Bild kommt?
- Wo spüre ich den Duft im Körper?

**Schritt 3 — Die Auswahl (5 Min):**
Die Person wählt 2–3 Favoriten. Diese bilden die Grundlage der individuellen Mischung. Du ergänzt — basierend auf deinem Duftwissen — mit Ölen, die das Duftprofil abrunden.

### Dokumentation

Führe eine Duftkarte:
- Name, Datum, Wohlfühl-Anliegen
- Vorgestellte Öle und Bewertung (1–10)
- Gewählte Mischung (Öle, Verdünnung, Menge)
- Anwendungsempfehlung
- Rückmeldung beim nächsten Termin

### Typische Muster

**Der "Ich-mag-alles"-Typ:**
Riecht alles gern — hat manchmal Schwierigkeiten, sich zu entscheiden. Grenze ein: "Wenn du nur eines mitnehmen dürftest — welches?"

**Der "Ich-rieche-nichts"-Typ:**
Spürt wenig bei der Duftvorstellung. Beginne mit einfachen, klaren Düften (Pfefferminze, Orange) und arbeite dich zu subtileren vor. (Bei dauerhaft fehlendem Geruchssinn ist eine ärztliche Abklärung sinnvoll.)

**Die starke Abwehr:**
Ein Duft löst Unbehagen oder Abneigung aus. Respektiere die Grenze. Notiere es, verwende den Duft nicht.

### Übung: Selbst-Duftberatung

Führe die Duftberatung mit dir selbst durch:
1. Wähle 5 verschiedene Öle blind (lass jemanden die Fläschchen nummerieren)
2. Bewerte jeden Duft auf der 1–10-Skala
3. Notiere Gefühl, Bild, Körperreaktion
4. Löse auf, welches Öl welche Nummer war
5. Vergleiche: Deckt sich deine Reaktion mit dem bekannten Duftprofil?`
        },
        {
          id: 'N01-M5-L14',
          titel: 'Mischungen erstellen — Kopf-, Herz- & Basisnoten',
          inhalt: `## Mischungen erstellen

### Die Kunst des Blendings

Eine gute Duftmischung ist mehr als die Summe ihrer Einzelöle. Sie ist eine komponierte Einheit — ein Zusammenspiel von Düften, die sich gegenseitig verstärken, ergänzen und abrunden. Die Grundlage dieser Komposition ist das System der Duftnoten.

### Das Drei-Noten-System

Jedes ätherische Öl hat eine primäre Duftnote — bestimmt durch die Flüchtigkeit seiner Moleküle:

**Kopfnote (Top Note) — 15–30% der Mischung:**
Leicht, schnell wahrnehmbar, verflüchtigt sich als Erstes (innerhalb von 1–2 Stunden). Der erste Eindruck einer Mischung.
Typische Kopfnoten: Zitrone, Orange, Bergamotte, Pfefferminze, Eukalyptus, Grapefruit, Mandarine.

**Herznote (Middle Note) — 40–60% der Mischung:**
Mittelschwer, bildet den Hauptcharakter der Mischung, entwickelt sich nach 15–30 Minuten und hält 3–4 Stunden. Das "Herz" der Komposition.
Typische Herznoten: Lavendel, Rosmarin, Geranium, Kamille, Muskatellersalbei, Ylang-Ylang, Teebaum.

**Basisnote (Base Note) — 15–30% der Mischung:**
Schwer, entwickelt sich langsam, hält 6–24 Stunden. Gibt der Mischung Tiefe, Wärme und Beständigkeit. Fixiert die flüchtigeren Noten.
Typische Basisnoten: Sandelholz, Vetiver, Patchouli, Weihrauch, Myrrhe, Zedernholz, Benzoe.

### Die Dreier-Regel

Die einfachste und oft wirkungsvollste Mischung besteht aus drei Ölen — je eines pro Duftnote:

**Kopfnote** (der Einstieg) + **Herznote** (der Kern) + **Basisnote** (der Anker)

Beispiel: Bergamotte + Lavendel + Sandelholz = Eine elegante, entspannende Mischung mit Tiefe.

### Duftfamilien und Harmonien

Bestimmte Duftkategorien harmonieren besonders gut miteinander:

**Blumig + Holzig:** Rose + Zedernholz — warm, romantisch
**Zitrus + Krautig:** Zitrone + Rosmarin — frisch, klar
**Harzig + Blumig:** Weihrauch + Lavendel — meditativ, beruhigend
**Würzig + Zitrus:** Ingwer + Orange — energetisierend, wärmend
**Krautig + Holzig:** Rosmarin + Vetiver — erdend, fokussierend

**Allgemeine Regel:** Öle aus derselben oder benachbarten Duftfamilien harmonieren fast immer. Je weiter entfernt die Familien, desto mutiger (und riskanter) die Kombination.

### Mischungsverhältnisse in der Praxis

Für eine 10-ml-Mischung (Pflegeöl, 2% = 4 Tropfen):
- 1 Tropfen Kopfnote
- 2 Tropfen Herznote
- 1 Tropfen Basisnote

Für eine 30-ml-Mischung (2% = 12 Tropfen):
- 3 Tropfen Kopfnote
- 5–6 Tropfen Herznote
- 3–4 Tropfen Basisnote

### Fünf bewährte Mischungen

**"Entspannte Abende":** Bergamotte (2) + Lavendel (3) + Vetiver (1)
**"Klarer Kopf":** Zitrone (2) + Rosmarin (3) + Weihrauch (1)
**"Herzöffner":** Orange (2) + Geranium (3) + Sandelholz (1)
**"Frische Atmosphäre":** Eukalyptus (2) + Teebaum (3) + Zitrone (1)
**"Erdung":** Bergamotte (1) + Ylang-Ylang (2) + Zedernholz (2) + Vetiver (1)

### Übung: Deine erste Dreier-Mischung

1. Wähle ein Thema: Entspannung, Energie, Fokus, Herzöffnung oder Erdung
2. Wähle je ein Öl pro Duftnote
3. Tropfe die Öle auf einen Duftstreifen (oder Papiertaschentuch) im Verhältnis 1:2:1
4. Rieche — passt es? Fehlt etwas? Ist ein Öl zu dominant?
5. Justiere und notiere deine finale Rezeptur`
        },
        {
          id: 'N01-M5-L15',
          titel: 'Duftrituale für den Alltag — Ruhe, Schlaf, Energie, Fokus',
          inhalt: `## Duftrituale für den Alltag

### Bewährte Duftrituale für mehr Wohlbefinden

Die folgenden Rituale sind Ausgangspunkte — keine starren Vorschriften. Passe sie an dich selbst oder an die Person an, die du begleitest, basierend auf der Duftberatung und der persönlichen Reaktion. Sie dienen dem Wohlbefinden und ersetzen keine ärztliche oder therapeutische Hilfe.

### Ritual 1: Ruhe & Gelassenheit

**Hauptöle:** Lavendel, Bergamotte, Ylang-Ylang, Kamille, Neroli
**Unterstützend:** Weihrauch, Vetiver, Muskatellersalbei

**Sofort-Moment:**
- Handflächenmethode: 1 Tr. Lavendel + 1 Tr. Bergamotte auf die Handflächen, 5 tiefe Atemzüge
- Alternativ: Roll-on auf Handgelenke und Schläfen

**Tagesritual:**
- Morgens: 3 Tr. Bergamotte + 2 Tr. Geranium im Diffuser (30 Min)
- Bei Bedarf tagsüber: Roll-on (Ruhe & Gelassenheit)
- Abends: Aromabad mit 3 Tr. Lavendel + 2 Tr. Kamille + 1 Tr. Ylang-Ylang in Sahne
- Vor dem Schlaf: 1 Tr. Lavendel aufs Kopfkissen

**Dauer:** 2–4 Wochen ausprobieren, dann beobachten. Öle wechseln, wenn der Duft nicht mehr anspricht.

### Ritual 2: Erholsame Abende

**Hauptöle:** Lavendel, Kamille (römisch), Vetiver, Zedernholz, Muskatellersalbei
**Unterstützend:** Mandarine, Bergamotte, Sandelholz

**Abendliches Wohlfühl-Ritual:**
- 90 Min vor dem Schlafen: Diffuser mit 3 Tr. Lavendel + 2 Tr. Zedernholz + 1 Tr. Vetiver
- Fußpflege: 2% Mischung in Mandelöl — ein angenehmes Ritual vor dem Schlafengehen
- Kopfkissen: 1 Tr. Lavendel oder 1 Tr. Kamille
- Optional: Roll-on auf Handgelenke

**Wichtig:** Pfefferminze, Rosmarin, Eukalyptus und Zitrone am Abend meiden — ihr Duft wird als wach machend erlebt.

Hinweis: Bei anhaltenden Schlafproblemen wende dich bitte an Ärztin oder Arzt — ein Duftritual kann den Abend begleiten, aber keine medizinische Abklärung ersetzen.

### Ritual 3: Energie & Frische

**Hauptöle:** Pfefferminze, Rosmarin, Zitrone, Orange, Grapefruit
**Unterstützend:** Schwarzer Pfeffer, Ingwer, Eukalyptus

**Morgenritual:**
- Dusche: 2 Tr. Pfefferminze + 2 Tr. Rosmarin auf den Duschboden tropfen — der Dampf verteilt den Duft
- Diffuser im Frühstücksraum: 3 Tr. Orange + 2 Tr. Pfefferminze
- Roll-on für unterwegs: Zitrone + Rosmarin + Schwarzer Pfeffer

**Nachmittags-Frische:**
- Handflächenmethode: 1 Tr. Pfefferminze
- Oder: Riechstift mit Rosmarin + Grapefruit
- Kaltes Fußbad mit 3 Tr. Pfefferminze (10 Minuten)

### Ritual 4: Konzentration & Fokus

**Hauptöle:** Rosmarin, Zitrone, Pfefferminze, Weihrauch, Basilikum
**Unterstützend:** Grapefruit, Eukalyptus radiata, Zedernholz

**Arbeits-/Lernritual:**
- Diffuser am Arbeitsplatz: 3 Tr. Rosmarin + 2 Tr. Zitrone + 1 Tr. Pfefferminze
- Intervallbetrieb: 30 Min an / 30 Min aus (verhindert Gewöhnung)
- Für Prüfungen: Gleichen Duft beim Lernen und in der Prüfung verwenden (Ankerprinzip)
- Riechstift mit der Arbeitsmischung für unterwegs

### Ritual 5: Leichtigkeit & Wärme

**Hauptöle:** Rose, Bergamotte, Orange, Neroli, Jasmin
**Unterstützend:** Weihrauch, Ylang-Ylang, Geranium

**Tagesbegleitung:**
- Morgens: Diffuser mit 3 Tr. Orange + 2 Tr. Bergamotte (Lichtgefühl)
- Herzbereich: Roll-on oder 1 Tr. Rose (2% in Jojoba) auf das Brustbein
- Nachmittags: Duftpause — Handflächenmethode mit Neroli oder Jasmin
- Abends: Warme Kompresse auf dem Herzbereich mit Lavendel + Geranium

**Wichtig:** Bei anhaltender gedrückter Stimmung, die über normale Schwankungen hinausgeht, ist professionelle Unterstützung angeraten. Düfte können den Alltag begleiten, aber keine fachliche Hilfe ersetzen.

### Übung: Dein erstes Duftritual

Erstelle ein individuelles 1-Wochen-Duftritual für ein selbstgewähltes Wohlfühl-Thema:
- Welche Öle? (Haupt + unterstützend)
- Welche Anwendungsform? (Diffuser, topisch, Bad)
- Welches Timing? (Morgens, mittags, abends)
- Wie beobachtest du die Wirkung auf dein Wohlbefinden?`
        }
      ]
    },

    // ============================================================
    // MODUL 6 — Deine Aromakunde-Praxis
    // ============================================================
    {
      id: 'N01-M6',
      titel: 'Deine Aromakunde-Praxis',
      beschreibung: 'Sicherheit und Grenzen kennen, ätherische Öle in die achtsame Praxis integrieren und deinen persönlichen Aromakoffer zusammenstellen.',
      lektionen: [
        {
          id: 'N01-M6-L16',
          titel: 'Sicherheit & Grenzen — verantwortungsvoller Umgang',
          inhalt: `## Sicherheit & Grenzen

### Respekt vor der Konzentration

Ätherische Öle sind hochkonzentrierte Pflanzenextrakte. Ein Tropfen Pfefferminzöl entspricht etwa 28 Tassen Pfefferminztee. Diese Potenz macht sie intensiv — und potenziell riskant, wenn sie unsachgemäß verwendet werden. Sicherheitswissen ist keine Einschränkung deiner Praxis — es ist ihre Grundlage.

### Allgemeine Sicherheitsregeln

**Regel 1: Immer verdünnen.**
Kein ätherisches Öl sollte routinemäßig pur auf die Haut aufgetragen werden. Auch bei Lavendel und Teebaum — die oft als "sicher pur" bezeichnet werden — ist Verdünnung die beste Praxis. Langfristige unverdünnte Anwendung kann Sensibilisierung verursachen.

**Regel 2: Weniger ist mehr.**
Ätherische Öle wirken in erstaunlich kleinen Mengen. 1–2 Tropfen im Diffuser können ausreichen. Eine höhere Dosis ist nicht automatisch besser — aber potenziell reizender.

**Regel 3: Nicht innerlich einnehmen.**
Die orale Einnahme ätherischer Öle gehört ausschließlich in fachkundige Hände und ist ohne ärztliche oder apothekerliche Begleitung nicht zu empfehlen. Einige Öle sind oral giftig (Wintergreen, Kampfer, thujonhaltige Öle), und auch "sichere" Öle können die Schleimhäute schädigen.

**Regel 4: Kontakt mit Augen und Schleimhäuten vermeiden.**
Bei versehentlichem Augenkontakt: Mit Trägeröl (nicht mit Wasser) ausspülen. Wasser verteilt das Öl, Fettöl bindet es.

**Regel 5: Außerhalb der Reichweite von Kindern aufbewahren.**
Das Verschlucken ätherischer Öle kann für Kinder sehr gefährlich sein. Bereits kleine Mengen mancher Öle (z.B. Eukalyptusöl) können für ein Kleinkind bedrohlich sein. Im Notfall sofort den Giftnotruf bzw. ärztliche Hilfe kontaktieren.

### Spezielle Hinweis-Gruppen

**Schwangere:**
Viele Öle werden in der Schwangerschaft nicht empfohlen — besonders im ersten Trimester. Häufig als unkritisch geltende Optionen (nach dem 1. Trimester, niedrig dosiert): Lavendel, Mandarine, Orange, Zitrone, Kamille (römisch). Im Zweifel immer mit Ärztin, Arzt, Hebamme oder Apotheke abklären.
Eher meiden: Rosmarin, Pfefferminze, Salbei, Muskatellersalbei, Nelke, Zimt, Kampfer, Wacholder.

**Kinder:**
- 0–2 Jahre: Nur Raumbeduftung mit milden Ölen (Lavendel, Mandarine), minimale Dosierung
- 2–6 Jahre: Verdünnt auf der Haut (0,5%), nur sanfte Öle. Kein Eukalyptus globulus, keine Pfefferminze, kein Rosmarin
- 6–12 Jahre: 1% Verdünnung, breiteres Spektrum möglich. E. radiata statt E. globulus

**Epilepsie:**
Rosmarin, Kampfer, Fenchel, Ysop und Salbei gelten als ungeeignet. Bitte ärztlich abklären.

**Asthma / empfindliche Atemwege:**
Stark riechende oder kampferhaltige Öle können die Atemwege reizen. Vorsichtig beginnen, beobachten, im Zweifel weglassen und ärztlich abklären.

**Medikamenteneinnahme:**
Einige Öle können mit Medikamenten in Wechselwirkung treten. Bei regelmäßiger Medikamenteneinnahme: vor der Anwendung Rücksprache mit Ärztin, Arzt oder Apotheke.

### Sensibilisierung

Eine der am meisten unterschätzten Gefahren: **Sensibilisierung** ist eine allergische Reaktion, die durch wiederholten Kontakt mit einem Öl entsteht — oft nach Wochen oder Monaten problemloser Nutzung.

Einmal sensibilisiert, reagiert die Haut bei jedem zukünftigen Kontakt — oft nicht nur auf das auslösende Öl, sondern auf verwandte Substanzen. Sensibilisierung ist irreversibel.

Vorbeugung: Immer verdünnen. Öle rotieren (nicht monatelang dasselbe Öl verwenden). Bei Hautreaktionen: sofort absetzen.

### Die wichtigste Grenze

Aromakunde ist Pflanzen- und Duftkunde für Wohlbefinden und Selbstfürsorge. Sie ist keine Heilkunde. Bei Krankheiten, anhaltenden Beschwerden, unklaren Symptomen oder vor Behandlungen gilt immer: Erst zu Ärztin, Arzt, Apotheke oder Heilpraktiker. Düfte können den Alltag bereichern und begleiten — die Verantwortung für gesundheitliche Fragen liegt bei den dafür qualifizierten Fachpersonen.

### Übung: Sicherheits-Checkliste erstellen

Erstelle eine Sicherheits-Checkliste für deine Praxis:
- Welche Öle habe ich, die mit Vorsicht zu verwenden sind? ___
- Frage ich nach Schwangerschaft, Allergien, Medikamenten? □
- Habe ich Trägeröl für Notfälle griffbereit? □
- Sind meine Öle kindersicher gelagert? □
- Rotiere ich meine Öle regelmäßig? □`
        },
        {
          id: 'N01-M6-L17',
          titel: 'Ätherische Öle in der achtsamen Praxis — Chakren, Meditation & Rituale',
          inhalt: `## Ätherische Öle in der achtsamen Praxis

### Wo Pflanzenkraft und Achtsamkeit sich treffen

Ätherische Öle sind nicht nur biochemische Substanzen — viele Menschen erleben sie auch als Träger einer bestimmten Stimmung oder Qualität. In vielen spirituellen Traditionen werden Pflanzen als Wesen mit einer eigenen Essenz verstanden. Die Integration ätherischer Öle in die achtsame und meditative Praxis verbindet sinnliches Dufterleben mit innerer Sammlung.

### Ätherische Öle und die Chakren

In der Chakren-Lehre wird jedem Energiezentrum eine Qualität zugeordnet — und bestimmte ätherische Öle werden traditionell mit diesen Qualitäten in Verbindung gebracht:

**Wurzelchakra (Muladhara) — Erdung, Sicherheit:**
Vetiver, Patchouli, Zedernholz, Schwarzer Pfeffer, Ingwer
Anwendung: Fußsohlen, unterer Rücken (verdünnt)

**Sakralchakra (Svadhisthana) — Kreativität, Sinnlichkeit:**
Ylang-Ylang, Orange, Sandelholz, Jasmin, Mandarine
Anwendung: Unterbauch, Hüften (verdünnt)

**Solarplexus (Manipura) — Willenskraft, Selbstvertrauen:**
Zitrone, Rosmarin, Grapefruit, Ingwer, Pfefferminze
Anwendung: Oberbauch (verdünnt)

**Herzchakra (Anahata) — Liebe, Mitgefühl:**
Rose, Geranium, Bergamotte, Neroli, Ylang-Ylang
Anwendung: Brustbein, zwischen den Schulterblättern (verdünnt)

**Halschakra (Vishuddha) — Ausdruck, Kommunikation:**
Kamille (blau), Eukalyptus, Pfefferminze, Teebaum
Anwendung: Hals, Nacken (verdünnt)

**Stirnchakra (Ajna) — Intuition, Klarheit:**
Lavendel, Weihrauch, Muskatellersalbei, Rosmarin
Anwendung: Stirn, Schläfen (verdünnt)

**Kronenchakra (Sahasrara) — Anbindung, Spiritualität:**
Weihrauch, Myrrhe, Sandelholz, Lavendel, Lotus
Anwendung: Scheitel, Diffuser während Meditation

### Integration in die Meditation

**Vor der Meditation:**
1 Tropfen des gewählten Öls auf die Handflächen, verreiben, vor der Nase 3 tiefe Atemzüge. Dann die Hände auf den Oberschenkeln ablegen — der Duft begleitet sanft die gesamte Sitzung.

**Achtsamkeitsmeditation mit Duft:**
Den Duft selbst zum Meditationsobjekt machen. Augen schließen, riechen, dem Duft innerlich folgen: Wo nimmst du ihn wahr? Wie verändert er sich? Was passiert, wenn du tiefer einatmest? Der Duft wird zum Anker — wie der Atem in der Atemmeditation.

**Chakra-Meditation:**
Während einer Chakra-Meditation das entsprechende Öl am jeweiligen Energiezentrum auftragen (verdünnt!) oder auf einem Duftstein neben dir platzieren. Der Duft verstärkt die Visualisierung und das innere Erleben.

### Integration in achtsame Sitzungen

**Raum vorbereiten:**
10 Minuten vor der Sitzung: Diffuser mit einem erdenden Öl (Weihrauch, Zedernholz). Das schafft eine ruhige, klare Atmosphäre und signalisiert: Hier ist ein besonderer Raum.

**Während der Sitzung:**
- Achtsame Duftbegleitung: einen Tropfen des gewählten Öls (verdünnt) auf die Handflächen geben — die Hände tragen dann den Duft.
- Emotionale Öffnung: Wenn jemand Schwierigkeiten hat, in Kontakt mit dem eigenen Empfinden zu kommen — ein Tropfen Rose auf ein Taschentuch kann einen sanften Zugang schaffen.

**Nach der Sitzung:**
Ein beduftetes Tuch oder einen Roll-on mitgeben — als "Erinnerung" an die entspannte Atmosphäre. Der Duft wird zum Anker, der das Wohlgefühl der Sitzung in den Alltag verlängert.

### Rituale mit Düften

Ätherische Öle verstärken Rituale — Segnungen, Übergänge, bewusste Momente. Ein Tropfen Weihrauch auf den Rand einer Kerze (nicht in die Flamme), ein beduftetes Tuch auf dem Altar, ein Raumspray vor einem wichtigen Gespräch.

### Übung: Chakra-Duftreise

Wähle für jedes Chakra ein Öl und führe eine aufsteigende Meditation durch:
1. Beginne am Wurzelchakra — rieche am erdenden Öl, visualisiere rotes Licht
2. Wandere nach oben — an jedem Chakra das zugehörige Öl, die zugehörige Farbe
3. Am Kronenchakra angekommen: Stille. Weihrauch. Weißes Licht.
4. Notiere danach: Welches Chakra hat am stärksten reagiert?`
        },
        {
          id: 'N01-M6-L18',
          titel: 'Dein Aromakoffer — Grundausstattung & Weiterentwicklung',
          inhalt: `## Dein Aromakoffer

### Der Werkzeugkasten der Aromakunde

So wie ein Handwerker seinen Werkzeugkoffer pflegt, baust du dir in der Aromakunde einen Aromakoffer auf — deine persönliche Sammlung von Ölen, Trägerölen und Zubehör, die dich in Praxis und Alltag begleitet.

### Die Grundausstattung — 12 Öle für den Start

**Die "unverzichtbaren Vier":**
1. Lavendel (Lavandula angustifolia) — der Allrounder
2. Teebaum (Melaleuca alternifolia) — der Klärende
3. Pfefferminze (Mentha × piperita) — der Frische-Geber
4. Zitrone (Citrus limon) — der Frischekick

**Die "emotionale Vier":**
5. Orange (Citrus sinensis) — der Stimmungsaufheller
6. Bergamotte (Citrus bergamia) — der Ausgleicher
7. Ylang-Ylang (Cananga odorata) — der Herzöffner
8. Geranium (Pelargonium graveolens) — der Harmonisierer

**Die "tiefe Vier":**
9. Weihrauch (Boswellia carterii) — der Meditationsbegleiter
10. Eukalyptus (Eucalyptus radiata) — der Frische-Bringer
11. Rosmarin (Rosmarinus off. ct. Cineol) — der Klare
12. Vetiver (Vetiveria zizanioides) — der Erder

**Budget:** Diese 12 Öle kosten in guter Qualität zusammen ca. 80–120 €. Es ist die Investition, die deine gesamte Praxis fundiert.

### Trägeröle — die Basis

**Für den Start reichen drei:**
- Jojobaöl (Gesicht, universell) — ca. 8–12 €/100 ml
- Mandelöl (Körperpflege) — ca. 5–8 €/100 ml
- Kokosöl (Haare, Sommer) — ca. 6–10 €/250 ml

### Zubehör

**Grundausstattung:**
- Ultraschall-Diffuser (20–40 €)
- 5 leere 10-ml-Glasfläschchen mit Rollkugelaufsatz (Roll-ons)
- 3 leere 30-ml-Braunglasfläschchen (Mischungen)
- 1 leere 100-ml-Sprühflasche (Raumsprays)
- Pipetten oder Tropfer
- Duftteststreifen (Parfümerie-Streifen oder Papierstreifen)
- Etiketten und wasserfester Stift zum Beschriften

**Für die Praxis:**
- Zweiter Diffuser für den Praxisraum
- Aufbewahrungsbox für ätherische Öle (dunkel, gepolstert)
- Riechstifte (Inhaler) zum Befüllen
- Kompressenstoff oder Waschlappen
- Dufttagebuch / Duftkarten

### Dein Aromakoffer erweitern

**Phase 2 — Nach 3–6 Monaten:**
Ergänze nach Bedarf und Erfahrung:
- Kamille (römisch) — für sanfte, milde Düfte
- Muskatellersalbei — warm und krautig
- Schwarzer Pfeffer — würzig, wärmend im Duft
- Ingwer — würzig, belebend
- Sandelholz — für tiefe Meditation und Hautpflege

**Phase 3 — Nach 1 Jahr:**
Die Luxusöle und Spezialisten:
- Rose (auch als 5%-Verdünnung in Jojoba erhältlich — günstiger Einstieg)
- Neroli — für feine, blumige Kompositionen und Hautpflege
- Jasmin Absolue — für sinnliche, tiefe Düfte
- Ravintsara — frisch und klar im Duft
- Helichrysum (Immortelle) — für anspruchsvolle Hautpflege-Mischungen

### Pflege und Organisation

- Öle aufrecht lagern, fest verschlossen, dunkel und kühl
- Datum des Öffnens auf jede Flasche schreiben
- Zitrusöle nach 12 Monaten ersetzen
- Oxidierte Öle (veränderter Geruch, zähflüssig) nicht mehr auf der Haut verwenden
- Bestand regelmäßig prüfen — leere Flaschen ersetzen, kaum genutzte Öle verschenken

### Dein Aromakunde-Profil

Die wichtigste Frage zum Schluss: Welcher Aromakunde-Typ bist du?

**Der Praktiker:** Du integrierst Düfte in eine bestehende Praxis (Massage, Energiearbeit, Coaching). Dein Aromakoffer ist ein Werkzeug neben anderen.

**Der Spezialist:** Du baust eine eigenständige, duftorientierte Praxis auf. Dein Wissen wird tiefer, dein Koffer größer, deine Mischungen differenzierter.

**Der Alltagsanwender:** Du nutzt Öle primär für dich selbst und deine Familie. Dein Koffer bleibt kompakt, aber gezielt.

Alle drei Wege sind richtig. Aromakunde skaliert — von einem einzigen Fläschchen Lavendel bis zur Sammlung mit 100 Ölen.

---

*Herzlichen Glückwunsch zum Abschluss dieses Kurses. Du hast jetzt das Wissen, ätherische Öle sicher und kreativ für dein Wohlbefinden einzusetzen — ob für dich selbst, für deine Liebsten oder als Begleitung für die Menschen, mit denen du arbeitest. Denke immer daran: Aromakunde dient dem Wohlbefinden und ersetzt keine ärztliche, pharmazeutische oder heilkundliche Beratung. Dein Aromakoffer wartet darauf, gefüllt zu werden.*`
        }
      ]
    }
  ]
};

export default N01;
