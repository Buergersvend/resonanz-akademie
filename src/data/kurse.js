// ═══════════════════════════════════════════════════════════
// KURSDATEN — Single Source of Truth
// Lokale JS-Daten für MVP · Migration zu Firestore in Phase 3+
// ═══════════════════════════════════════════════════════════
// Struktur: KURSE[] → module[] → lektionen[]
// Jede Lektion hat: id, titel, inhalt (Markdown-ähnlich), uebung
// ═══════════════════════════════════════════════════════════

export const BEREICHE = [
  { id: 'alle', name: 'Alle Bereiche', icon: '✦' },
  { id: 'organsprache', name: 'Organsprache', icon: '🫀' },
  { id: 'chakren', name: 'Chakrenarbeit', icon: '🔮' },
  { id: 'aura', name: 'Aura & Energiefeld', icon: '✨' },
  { id: 'humanenergetik', name: 'Humanenergetik', icon: '⚡' },
  { id: 'medialitaet', name: 'Medialität', icon: '👁️' },
  { id: 'karma', name: 'Karma & Seelenarbeit', icon: '🌀' },
  { id: 'humandesign', name: 'Human Design', icon: '◇' },
  { id: 'schamanismus', name: 'Schamanismus', icon: '🌿' },
  { id: 'schutz', name: 'Schutz & Erdung', icon: '🛡️' },
  { id: 'quanten', name: 'Quantenarbeit', icon: '∞' },
  { id: 'praxis', name: 'Praxis & Business', icon: '💎' },
]

export const KURSE = [
  // ═══════════════════════════════════════════════════════
  // B10 — Quantenheilung Einstieg (LIVE)
  // ═══════════════════════════════════════════════════════
  {
    id: 'B10',
    titel: 'Quantenheilung — Einstieg',
    bereich: 'quanten',
    format: 'mikro',
    symbol: '◈',
    stunden: '1–2h',
    preis: 'Kostenlos',
    originalPreis: '49 €',
    desc: 'Entdecke die Grundlagen der Quantenheilung. Lerne die Zwei-Punkt-Methode, Herzfokussierte Kohärenzatmung und Intentionsbasierte Energielenkung in 4 kompakten Modulen.',
    status: 'live',
    module: [
      {
        nr: 1,
        titel: 'Was ist Quantenheilung?',
        dauer: '20 Min',
        lektionen: [
          {
            id: 'B10-M1-L1',
            titel: 'Die Grundidee der Quantenheilung',
            inhalt: `Die Quantenheilung basiert auf der Erkenntnis, dass unser Körper und unser Bewusstsein auf einer tieferen Ebene miteinander verbunden sind. Im Kern geht es darum, durch bewusste Intention und Aufmerksamkeit einen Zustand innerer Kohärenz herzustellen — einen Zustand, in dem Körper, Geist und Energiefeld in Einklang kommen.

Anders als bei vielen anderen Methoden steht hier nicht die Analyse eines Problems im Vordergrund, sondern die Aktivierung der natürlichen Selbstregulation. Der Körper besitzt eine erstaunliche Fähigkeit zur Selbstheilung — die Quantenheilung schafft lediglich den Raum dafür.

Die drei Säulen der Quantenheilung sind:
• Bewusste Wahrnehmung — das achtsame Beobachten ohne Bewertung
• Intentionsarbeit — die klare Ausrichtung auf ein gewünschtes Ergebnis  
• Energetische Resonanz — das Erspüren und Lenken subtiler Energien`,
            uebung: {
              titel: 'Stille Beobachtung',
              anleitung: `Nimm dir 3 Minuten Zeit. Setze dich bequem hin, schließe die Augen und beobachte einfach, was du wahrnimmst — ohne etwas zu verändern. Körperempfindungen, Gedanken, Emotionen. Beobachte sie wie Wolken am Himmel. 

Nach 3 Minuten: Notiere in einem Satz, was dir am meisten aufgefallen ist.`,
              dauer: '3 Min',
            },
          },
          {
            id: 'B10-M1-L2',
            titel: 'Bewusstsein als Werkzeug',
            inhalt: `Dein Bewusstsein ist das mächtigste Werkzeug, das dir zur Verfügung steht. In der Quantenheilung nutzen wir es gezielt, um Veränderungen auf energetischer Ebene anzustoßen.

Was bedeutet das konkret? Stell dir vor, du richtest deine volle Aufmerksamkeit auf einen bestimmten Punkt in deinem Körper. Allein durch diese fokussierte Wahrnehmung verändert sich dort etwas — die Durchblutung steigt, die Muskelspannung verändert sich, die Zellaktivität wird beeinflusst.

Dieses Prinzip — dass Beobachtung Veränderung erzeugt — kennen wir auch aus der Physik. In der Quantenmechanik verändert der Beobachter allein durch seine Messung das Ergebnis. Übertragen auf unsere Praxis bedeutet das: Wo du deine Aufmerksamkeit hinlenkst, dort fließt Energie.

Die Qualität deiner Aufmerksamkeit entscheidet über die Qualität der Veränderung. Deshalb trainieren wir in diesem Kurs zunächst die Wahrnehmung, bevor wir mit konkreten Techniken arbeiten.`,
            uebung: {
              titel: 'Aufmerksamkeits-Scan',
              anleitung: `Richte deine Aufmerksamkeit nacheinander auf diese drei Körperbereiche — je 60 Sekunden:

1. Deine Hände — spüre jede Fingerspitze einzeln
2. Dein Herzzentrum — die Mitte deiner Brust
3. Deinen Scheitel — die Oberseite deines Kopfes

Bemerke: Verändert sich etwas, wenn du deine Aufmerksamkeit dort hältst? Wärme? Kribbeln? Pulsieren?`,
              dauer: '3 Min',
            },
          },
          {
            id: 'B10-M1-L3',
            titel: 'Dein Einstieg: Die innere Haltung',
            inhalt: `Bevor wir in die konkreten Techniken einsteigen, ist eines entscheidend: deine innere Haltung.

Die Quantenheilung funktioniert nicht über Anstrengung oder Willenskraft. Im Gegenteil — je mehr du versuchst, etwas zu erzwingen, desto weniger geschieht. Das Geheimnis liegt in einer Kombination aus klarer Intention und gleichzeitigem Loslassen.

Stell dir das so vor: Du pflanzt einen Samen (Intention), gießt ihn (Aufmerksamkeit), und lässt die Natur den Rest machen (Loslassen). Du ziehst nicht an der Pflanze, um sie schneller wachsen zu lassen.

Diese innere Haltung lässt sich in drei Worten zusammenfassen:

Offen — für das, was kommt
Neugierig — ohne vorgefasste Erwartungen
Vertrauend — in den natürlichen Prozess

Wenn du diese Haltung in den kommenden Modulen beibehältst, wirst du die besten Ergebnisse erzielen.`,
            uebung: {
              titel: 'Intentions-Setting',
              anleitung: `Formuliere in einem einzigen Satz, was du dir von diesem Kurs erhoffst. Beginne mit "Ich bin offen für..." 

Beispiele:
• "Ich bin offen für neue Wege der Selbstheilung."
• "Ich bin offen für ein tieferes Verständnis meiner Energie."

Schreibe deinen Satz auf und lege ihn neben dich. Er begleitet dich durch den gesamten Kurs.`,
              dauer: '2 Min',
            },
          },
        ],
      },
      {
        nr: 2,
        titel: 'Dein Energiesystem verstehen',
        dauer: '25 Min',
        lektionen: [
          {
            id: 'B10-M2-L1',
            titel: 'Das menschliche Energiefeld',
            inhalt: `Jeder Mensch ist von einem Energiefeld umgeben, das über den physischen Körper hinausreicht. Dieses Feld — manchmal als Aura, Biofeld oder elektromagnetisches Feld bezeichnet — ist nicht esoterisch, sondern messbar.

Dein Herz erzeugt ein elektromagnetisches Feld, das mit empfindlichen Instrumenten noch in mehreren Metern Entfernung gemessen werden kann. Dein Gehirn produziert elektrische Impulse, die wir als EEG-Wellen kennen. Jede Zelle deines Körpers ist ein kleiner elektrischer Generator.

In der Quantenheilung arbeiten wir mit der Vorstellung, dass dieses Energiefeld Informationen trägt — über deinen körperlichen Zustand, deine Emotionen, deine Gedankenmuster. Störungen in diesem Feld zeigen sich oft als Beschwerden, lange bevor sie sich körperlich manifestieren.

Wenn wir lernen, dieses Feld wahrzunehmen und zu harmonisieren, aktivieren wir einen natürlichen Heilungsprozess.`,
            uebung: {
              titel: 'Energiefeld spüren',
              anleitung: `Halte deine Handflächen etwa 30 cm auseinander, die Finger entspannt. Bewege die Hände nun langsam aufeinander zu — Zentimeter für Zentimeter.

Achte auf das, was du zwischen den Händen spürst:
• Ab welchem Abstand bemerkst du etwas?
• Fühlt es sich an wie Wärme? Druck? Ein Kissen?
• Was passiert, wenn du die Hände ganz langsam wieder auseinanderziehst?

Das, was du spürst, ist dein eigenes Energiefeld. Es ist real, und du kannst lernen, gezielt damit zu arbeiten.`,
              dauer: '3 Min',
            },
          },
          {
            id: 'B10-M2-L2',
            titel: 'Kohärenz — der Schlüsselzustand',
            inhalt: `Kohärenz ist ein Begriff aus der Physik und beschreibt einen Zustand, in dem verschiedene Elemente harmonisch zusammenschwingen. In der Quantenheilung ist Kohärenz der angestrebte Zustand — ein Zustand, in dem Herz, Gehirn und Nervensystem synchron arbeiten.

Forschungen des HeartMath-Instituts haben gezeigt, dass der Mensch in einem kohärenten Zustand besser denkt, fühlt und heilt. Die Herzrhythmusvariabilität (HRV) wird gleichmäßiger, das autonome Nervensystem balanciert sich aus, und das Immunsystem arbeitet effizienter.

Wie erkennst du Kohärenz? Du kennst diesen Zustand bereits:
• Das Gefühl tiefer Ruhe nach einer Meditation
• Der Flow-Zustand beim Ausüben einer Tätigkeit, die du liebst
• Das warme Gefühl im Brustbereich, wenn du an jemanden denkst, den du liebst

Quantenheilung ist im Kern die Kunst, diesen Zustand bewusst herzustellen und auf einen bestimmten Bereich zu richten.`,
            uebung: {
              titel: 'Herzfokus-Atmung',
              anleitung: `Dies ist eine der wichtigsten Übungen des gesamten Kurses:

1. Lege eine Hand auf dein Herzzentrum (Mitte der Brust)
2. Atme langsam ein (5 Sekunden) — stelle dir vor, der Atem fließt direkt in dein Herz
3. Halte kurz (2 Sekunden)
4. Atme langsam aus (5 Sekunden) — stelle dir vor, vom Herz fließt warmes Licht in den ganzen Körper
5. Wiederhole 5 Zyklen

Achte darauf, wie sich dein innerer Zustand nach 5 Zyklen verändert hat. Dieses einfache Werkzeug wirst du in den kommenden Modulen immer wieder nutzen.`,
              dauer: '5 Min',
            },
          },
          {
            id: 'B10-M2-L3',
            titel: 'Die drei Ebenen der Wahrnehmung',
            inhalt: `In der praktischen Arbeit unterscheiden wir drei Ebenen der Wahrnehmung, die aufeinander aufbauen:

Die körperliche Ebene ist die greifbarste. Hier nimmst du Temperatur, Druck, Spannung und Bewegung wahr. Die meisten Menschen haben einen natürlichen Zugang zu dieser Ebene — sie können sofort sagen, ob ein Bereich ihres Körpers warm oder kalt, entspannt oder angespannt ist.

Die emotionale Ebene liegt darunter. Hier spürst du Gefühle, die an bestimmte Körperbereiche gebunden sind — das Engegefühl in der Brust bei Sorgen, der Kloß im Hals, die Schwere in den Beinen. In der Quantenheilung lernen wir, diese emotionalen Signaturen zu lesen und zu transformieren.

Die energetische Ebene ist die subtilste. Hier geht es um das Spüren von Qualitäten wie Fließen oder Stagnation, Leichtigkeit oder Schwere, Ausdehnung oder Verdichtung. Für viele Menschen öffnet sich diese Ebene erst durch regelmäßiges Üben — und genau das trainieren wir in diesem Kurs.

Alle drei Ebenen sind gleichzeitig aktiv und beeinflussen einander. Eine Veränderung auf einer Ebene wirkt sich auf die anderen aus.`,
            uebung: {
              titel: 'Drei-Ebenen-Scan',
              anleitung: `Wähle einen Körperbereich, der gerade deine Aufmerksamkeit zieht. Scanne ihn auf allen drei Ebenen:

1. Körperlich (30 Sek): Was spürst du physisch? Warm/kalt? Schwer/leicht? Eng/weit?
2. Emotional (30 Sek): Welches Gefühl ist mit diesem Bereich verbunden? Gibt es eine Emotion?
3. Energetisch (30 Sek): Wie fließt die Energie dort? Frei oder stockend? Gibt es eine Richtung?

Notiere deine Beobachtungen in Stichworten. Es gibt kein Richtig oder Falsch — jede Wahrnehmung zählt.`,
              dauer: '3 Min',
            },
          },
        ],
      },
      {
        nr: 3,
        titel: '3 Übungen für den Alltag',
        dauer: '30 Min',
        lektionen: [
          {
            id: 'B10-M3-L1',
            titel: 'Die Zwei-Punkt-Methode',
            inhalt: `Die Zwei-Punkt-Methode ist eine der bekanntesten Techniken der Quantenheilung und zugleich eine der wirkungsvollsten. Das Prinzip ist verblüffend einfach:

Du berührst (oder visualisierst) zwei Punkte — am eigenen Körper oder am Körper eines anderen Menschen — und verbindest sie in deiner Wahrnehmung miteinander. Durch diese Verbindung entsteht ein energetischer Kreislauf, der Blockaden lösen und den natürlichen Energiefluss wiederherstellen kann.

Warum funktioniert das? Indem du zwei Punkte gleichzeitig wahrnimmst, erzeugst du eine Art "Quantenverschränkung" auf der Ebene deines Bewusstseins. Dein Nervensystem reagiert auf diese doppelte Aufmerksamkeit, indem es in einen Zustand der Reorganisation geht. Oft zeigt sich das als spontanes Loslassen, ein Gefühl des Sinkens oder eine Welle der Entspannung.

Die Kunst liegt nicht in der perfekten Punktwahl, sondern in der Qualität deiner Präsenz. Je offener und entspannter du bist, desto wirkungsvoller die Methode.`,
            uebung: {
              titel: 'Zwei-Punkt-Methode — Grundübung',
              anleitung: `1. Bringe dich durch 3 tiefe Atemzüge in einen ruhigen Zustand.

2. Lege einen Finger deiner linken Hand auf einen Punkt, der sich gerade "meldet" — eine Stelle, die spannt, drückt oder deine Aufmerksamkeit zieht.

3. Lege einen Finger deiner rechten Hand auf einen zweiten Punkt, der sich intuitiv richtig anfühlt. Vertraue deinem ersten Impuls.

4. Halte beide Punkte und nimm wahr, was zwischen ihnen geschieht. Spürst du eine Verbindung? Ein Fließen? Eine Veränderung?

5. Bleibe 60–90 Sekunden in dieser Wahrnehmung. Lasse los, wenn es sich "fertig" anfühlt.

6. Nimm die Hände weg und beobachte: Hat sich etwas verändert?`,
              dauer: '5 Min',
            },
          },
          {
            id: 'B10-M3-L2',
            titel: 'Herzfokussierte Kohärenzatmung',
            inhalt: `Du hast die Herzfokus-Atmung bereits in Modul 2 kennengelernt. Jetzt vertiefen wir sie zu einer vollständigen Kohärenzatmung, die du als tägliches Werkzeug nutzen kannst.

Der Unterschied zur einfachen Version: Wir fügen eine emotionale Komponente hinzu. Forschungen zeigen, dass die Kombination aus rhythmischer Atmung und positiver Emotion den stärksten Kohärenz-Effekt erzeugt.

Der erweiterte Ablauf:

Phase 1 — Ankommen: Richte deine Aufmerksamkeit auf dein Herzzentrum. Atme so, als würde der Atem direkt durch dein Herz fließen.

Phase 2 — Rhythmus: Finde einen gleichmäßigen Atemrhythmus (5 Sekunden ein, 5 Sekunden aus). Dieser Rhythmus von etwa 6 Atemzügen pro Minute ist der physiologische Sweet Spot für Kohärenz.

Phase 3 — Emotion: Während du atmest, erinnere dich an ein Gefühl aufrichtiger Dankbarkeit, Fürsorge oder Wertschätzung. Nicht denken — fühlen. Lass dieses Gefühl mit jedem Atemzug stärker werden.

Diese drei Phasen zusammen erzeugen einen messbaren Zustand der Herzkohärenz, der noch Stunden nachwirken kann.`,
            uebung: {
              titel: 'Kohärenzatmung — 5 Minuten',
              anleitung: `Setze oder lege dich bequem hin. Lege eine Hand auf dein Herzzentrum.

Minute 1–2: Atme durch dein Herz. 5 Sekunden ein, 5 Sekunden aus. Finde deinen Rhythmus.

Minute 2–3: Erinnere dich an einen Moment, für den du zutiefst dankbar bist. Lass das Gefühl in deinem Herzen wachsen.

Minute 3–5: Verbinde beides — Rhythmus und Gefühl. Stelle dir vor, dass mit jedem Ausatmen dieses warme Gefühl sich in deinem ganzen Körper ausbreitet.

Zum Abschluss: Nimm 3 normale Atemzüge und öffne langsam die Augen.

Tipp: Diese Übung eignet sich hervorragend als Morgenritual oder vor wichtigen Situationen.`,
              dauer: '5 Min',
            },
          },
          {
            id: 'B10-M3-L3',
            titel: 'Intentionsbasierte Energielenkung',
            inhalt: `Die dritte Kernübung verbindet alles, was du bisher gelernt hast: Wahrnehmung, Kohärenz und bewusste Intention.

Intentionsbasierte Energielenkung bedeutet: Du richtest deine Aufmerksamkeit und deine Absicht gezielt auf einen Bereich oder ein Thema — und lässt die Energie dorthin fließen, wo sie gebraucht wird.

Der Ablauf ist schlicht:
1. Kohärenz herstellen (durch Herzatmung)
2. Intention formulieren (klar, positiv, im Präsens)
3. Energie lenken (Aufmerksamkeit + Intention dorthin richten)
4. Loslassen (dem Prozess vertrauen)

Ein wichtiger Grundsatz: Formuliere deine Intention immer positiv und im Präsens. Nicht "Ich will keine Kopfschmerzen mehr", sondern "Mein Kopf ist leicht und klar." Nicht "Ich möchte weniger Stress", sondern "Ich bin in meiner Mitte."

Das Nervensystem reagiert auf Bilder und Gefühle stärker als auf Worte. Je lebendiger du dir den gewünschten Zustand vorstellen kannst — je mehr du ihn bereits fühlen kannst — desto wirkungsvoller die Energielenkung.`,
            uebung: {
              titel: 'Energie-Intention — Praxis',
              anleitung: `1. Beginne mit 5 Zyklen Kohärenzatmung (wie in der vorherigen Lektion).

2. Formuliere eine klare Intention für einen Bereich deines Lebens. Sprich sie innerlich aus, als wäre sie bereits Realität.

3. Richte deine Aufmerksamkeit auf den Körperbereich, der mit diesem Thema in Verbindung steht (z.B. Herz für Beziehungen, Solarplexus für Selbstvertrauen, Stirn für Klarheit).

4. Stelle dir vor, wie goldenes Licht in diesen Bereich fließt und ihn mit deiner Intention auflädt. Halte dieses Bild für 60 Sekunden.

5. Lass alles los. Atme tief durch. Vertraue darauf, dass der Samen gepflanzt ist.

Wiederhole diese Übung 3 Tage lang mit der gleichen Intention und beobachte, was sich verändert.`,
              dauer: '5 Min',
            },
          },
        ],
      },
      {
        nr: 4,
        titel: 'Integration & Reflexion',
        dauer: '15 Min',
        lektionen: [
          {
            id: 'B10-M4-L1',
            titel: 'Dein persönliches Protokoll',
            inhalt: `Du hast in den drei vorangegangenen Modulen drei kraftvolle Werkzeuge kennengelernt: die Zwei-Punkt-Methode, die Kohärenzatmung und die Intentionsbasierte Energielenkung.

Jetzt geht es darum, diese Werkzeuge in deinen Alltag zu integrieren. Denn Quantenheilung ist keine Technik, die man einmal lernt und dann "kann" — sie ist eine Praxis, die durch regelmäßige Anwendung immer tiefer und wirkungsvoller wird.

Hier ist ein einfaches tägliches Protokoll, das du sofort umsetzen kannst:

Morgens (5 Min): Kohärenzatmung + Tagesintention
→ Beginne den Tag in Kohärenz und setze eine klare Absicht.

Mittags (2 Min): Zwei-Punkt-Check-in
→ Spüre, wo sich gerade Spannung zeigt, und verbinde zwei Punkte.

Abends (3 Min): Energielenkung + Reflexion
→ Richte Energie auf das, was du integrieren möchtest, und reflektiere deinen Tag.

Insgesamt 10 Minuten pro Tag. Das ist alles, was du brauchst, um diese Praxis nachhaltig zu verankern.`,
            uebung: {
              titel: 'Protokoll-Planung',
              anleitung: `Nimm dir jetzt einen Moment und beantworte diese drei Fragen schriftlich:

1. Wann morgens werde ich meine Kohärenzatmung machen? (Uhrzeit oder Trigger: "direkt nach dem Aufstehen", "nach dem ersten Kaffee" etc.)

2. Was ist mein Erinnerungs-Anker für den Mittags-Check-in? (Handy-Alarm? Nach dem Mittagessen? Vor einem Meeting?)

3. Wie integriere ich die Abendreflexion? (Im Bett? Am Schreibtisch? Auf dem Sofa?)

Je konkreter dein Plan, desto wahrscheinlicher die Umsetzung. Schreibe es auf — das macht es verbindlich.`,
              dauer: '3 Min',
            },
          },
          {
            id: 'B10-M4-L2',
            titel: 'Abschluss & Ausblick',
            inhalt: `Herzlichen Glückwunsch — du hast den Grundlagenkurs Quantenheilung abgeschlossen.

Lass uns kurz rekapitulieren, was du gelernt hast:

In Modul 1 hast du die Grundidee verstanden: Bewusste Wahrnehmung, Intention und energetische Resonanz als drei Säulen der Quantenheilung. Du hast erfahren, dass dein Bewusstsein ein aktives Werkzeug ist.

In Modul 2 hast du dein Energiesystem kennengelernt: das menschliche Energiefeld, den Kohärenz-Zustand und die drei Ebenen der Wahrnehmung (körperlich, emotional, energetisch).

In Modul 3 hast du drei praktische Werkzeuge erlernt: die Zwei-Punkt-Methode, die Kohärenzatmung und die Intentionsbasierte Energielenkung.

Und in diesem Modul hast du einen konkreten Plan erstellt, wie du diese Werkzeuge in deinen Alltag integrierst.

Das ist erst der Anfang. Die Resonanz Akademie bietet vertiefende Kurse zu jedem dieser Themen — von fortgeschrittener Energiearbeit über Chakrenarbeit bis hin zur vollständigen Ausbildung zum Quanten-Energetiker.

Dein Weg der Resonanz hat begonnen. Vertraue dem Prozess.`,
            uebung: {
              titel: 'Abschluss-Reflexion',
              anleitung: `Beantworte zum Abschluss diese drei Fragen — ehrlich und aus dem Herzen:

1. Was war meine wichtigste Erkenntnis in diesem Kurs?

2. Welche der drei Techniken hat mich am meisten angesprochen — und warum?

3. Was hat sich in meiner Wahrnehmung verändert, seit ich mit dem Kurs begonnen habe?

Bewahre diese Reflexion auf. Lies sie in 4 Wochen noch einmal — du wirst staunen, wie weit du bereits gekommen bist.`,
              dauer: '5 Min',
            },
          },
        ],
      },
    ],
  },

  // ═══════════════════════════════════════════════════════
  // P03 — Affirmationstraining (COMING SOON)
  // ═══════════════════════════════════════════════════════
  {
    id: 'P03',
    titel: 'Affirmationstraining — Worte als Werkzeug',
    bereich: 'humanenergetik',
    format: 'standard',
    symbol: '◈◈',
    stunden: '3–4h',
    preis: 'Kostenlos',
    originalPreis: '89 €',
    desc: 'Wie du Affirmationen gezielt in deine Praxis und deinen Alltag integrierst.',
    status: 'coming',
    module: [],
  },

  // ═══════════════════════════════════════════════════════
  // P02 — Emotionscode Grundlagen (LIVE)
  // ═══════════════════════════════════════════════════════
  {
    id: 'P02',
    titel: 'Emotionscode — Grundlagen',
    bereich: 'humanenergetik',
    format: 'standard',
    symbol: '◈◈',
    stunden: '4–6h',
    preis: 'Kostenlos',
    originalPreis: '129 €',
    desc: 'Eingeschlossene Emotionen erkennen und lösen. Lerne, wie sich unverarbeitete Gefühle im Körper speichern und wie du sie mit einfachen Techniken befreien kannst.',
    status: 'live',
    module: [
      {
        nr: 1,
        titel: 'Was sind eingeschlossene Emotionen?',
        dauer: '30 Min',
        lektionen: [
          {
            id: 'P02-M1-L1',
            titel: 'Emotionen als Energie',
            inhalt: `Jede Emotion, die du jemals empfunden hast, war zunächst einmal Energie in Bewegung. Das Wort "Emotion" selbst enthält diesen Hinweis — "E-Motion", Energie in Bewegung.

Im Normalfall durchläuft eine Emotion einen natürlichen Zyklus: Sie entsteht als Reaktion auf ein Ereignis, wird vom Körper verarbeitet und löst sich wieder auf. Freude kommt und geht, Trauer kommt und geht, Wut kommt und geht. Dieser Fluss ist gesund und natürlich.

Doch manchmal wird dieser Zyklus unterbrochen. Eine Emotion ist zu intensiv, kommt im falschen Moment, oder wir haben schlicht nicht die Kapazität, sie vollständig zu verarbeiten. Dann geschieht etwas Bemerkenswertes: Die Energie der Emotion bleibt im Körper gespeichert — wie ein Paket, das nie geöffnet wurde.

Diese gespeicherten Emotionen nennen wir "eingeschlossene Emotionen". Sie sind keine Metapher — sie sind messbare Energiemuster, die sich in Gewebe, Muskeln und Organen festsetzen und dort über Jahre oder sogar Jahrzehnte verbleiben können.`,
            uebung: {
              titel: 'Emotionale Bestandsaufnahme',
              anleitung: `Nimm dir 5 Minuten und beantworte folgende Fragen schriftlich — spontan, ohne lange nachzudenken:

1. Welche Emotion empfindest du am häufigsten, obwohl es dafür keinen konkreten aktuellen Anlass gibt?

2. Gibt es eine Körperstelle, die immer wieder schmerzt oder verspannt ist, ohne dass ein medizinischer Grund gefunden wurde?

3. Welche Situation aus deiner Vergangenheit ruft noch heute eine starke emotionale Reaktion hervor, wenn du daran denkst?

Bewahre deine Antworten auf — sie werden dir im weiteren Kursverlauf als persönliche Referenz dienen.`,
              dauer: '5 Min',
            },
          },
          {
            id: 'P02-M1-L2',
            titel: 'Wie Emotionen sich im Körper speichern',
            inhalt: `Dein Körper ist kein passives Gefäß — er ist ein hochintelligentes System, das jede Erfahrung registriert und speichert. Die moderne Forschung bestätigt zunehmend, was Heiler seit Jahrhunderten wissen: Der Körper erinnert sich.

Wenn eine Emotion nicht vollständig verarbeitet wird, sucht sich die verbleibende Energie einen Ort im Körper. Dieser Ort ist nicht zufällig — er folgt einer inneren Logik:

Trauer und Verlust manifestieren sich häufig im Brustbereich und in den Lungen. Das "gebrochene Herz" ist mehr als eine Redewendung — Menschen mit unverarbeiteter Trauer berichten oft von Engegefühl in der Brust, flacher Atmung oder einem Gefühl der Schwere im Herzbereich.

Angst und Sorge setzen sich bevorzugt im Bauchraum fest. Die Verbindung zwischen Darm und Emotionen ist wissenschaftlich gut dokumentiert — das enterische Nervensystem im Darm wird nicht umsonst als "zweites Gehirn" bezeichnet.

Wut und Frustration zeigen sich oft in Nacken, Schultern und Kiefer. Das unwillkürliche Zusammenpressen der Zähne, die verspannten Schultern — der Körper bereitet sich auf einen Kampf vor, der nie stattfindet.

Scham und Schuld können sich im gesamten Körper ausbreiten, zeigen sich aber häufig im Solarplexus oder als allgemeines Schweregefühl, als würde man buchstäblich eine Last tragen.`,
            uebung: {
              titel: 'Körper-Emotions-Mapping',
              anleitung: `Schließe die Augen und scanne deinen Körper langsam von Kopf bis Fuß. Wo immer du eine Auffälligkeit bemerkst — Spannung, Schwere, Druck, Taubheit — halte inne und frage dich:

"Welche Emotion könnte hier gespeichert sein?"

Akzeptiere die erste Antwort, die kommt. Notiere:
• Körperstelle
• Wahrgenommene Empfindung (Druck, Hitze, Kälte, Schwere etc.)
• Die Emotion, die sich meldet

Wiederhole das für 3–4 Körperstellen. Dieses Mapping ist dein persönlicher Ausgangspunkt für die Befreiungsarbeit in den kommenden Modulen.`,
              dauer: '5 Min',
            },
          },
          {
            id: 'P02-M1-L3',
            titel: 'Die Auswirkungen unverarbeiteter Emotionen',
            inhalt: `Eingeschlossene Emotionen sind nicht harmlos. Sie wirken im Verborgenen — manchmal subtil, manchmal massiv. Ihre Auswirkungen lassen sich in drei Kategorien einteilen:

Körperliche Auswirkungen: Chronische Schmerzen ohne klare medizinische Ursache, wiederkehrende Verspannungen, Verdauungsprobleme, Schlafstörungen, ein geschwächtes Immunsystem. Der Körper verwendet ständig Energie, um diese emotionalen Pakete "in Schach zu halten" — Energie, die ihm dann für Heilung und Regeneration fehlt.

Emotionale Auswirkungen: Überreaktionen auf harmlose Situationen ("Trigger"), chronische Stimmungsmuster wie unterschwellige Traurigkeit oder latente Gereiztheit, Schwierigkeiten in Beziehungen, das Gefühl, "blockiert" zu sein oder nicht weiterzukommen.

Verhaltensmuster: Selbstsabotage, Vermeidungsverhalten, unbewusste Wiederholung von schmerzhaften Situationen, Schwierigkeiten beim Setzen von Grenzen, emotionales Essen oder andere Kompensationsstrategien.

Der entscheidende Punkt: Diese Auswirkungen fühlen sich oft an, als wären sie "einfach so". Die meisten Menschen identifizieren sich mit ihren eingeschlossenen Emotionen — sie halten chronische Traurigkeit für einen Teil ihrer Persönlichkeit, ständige Anspannung für "normal". Die gute Nachricht: Wenn du die eingeschlossene Emotion befreist, verändert sich auch das, was du für unveränderbar hieltest.`,
            uebung: {
              titel: 'Muster-Erkennung',
              anleitung: `Beantworte diese Fragen ehrlich für dich:

1. Welches emotionale Muster wiederholt sich in deinem Leben immer wieder? (z.B. immer wieder verlassen werden, sich nie gut genug fühlen, Konflikte vermeiden)

2. Wann ist dieses Muster zum ersten Mal aufgetreten? Was war damals los?

3. Auf einer Skala von 1–10: Wie stark beeinflusst dieses Muster aktuell dein Leben?

Diese Reflexion hilft dir, den Zusammenhang zwischen eingeschlossenen Emotionen und deinen heutigen Mustern zu erkennen. Bewahre sie auf — wir kommen in Modul 4 darauf zurück.`,
              dauer: '5 Min',
            },
          },
        ],
      },
      {
        nr: 2,
        titel: 'Die Herzwand verstehen',
        dauer: '35 Min',
        lektionen: [
          {
            id: 'P02-M2-L1',
            titel: 'Was ist eine Herzwand?',
            inhalt: `Das Konzept der Herzwand ist eines der kraftvollsten in der gesamten Arbeit mit eingeschlossenen Emotionen. Die Idee ist einfach und zugleich tiefgreifend:

Wenn ein Mensch wiederholt emotionalen Schmerz erlebt — besonders Herzschmerz wie Verlust, Zurückweisung oder Verrat — kann das Unterbewusstsein beginnen, eine Art Schutzwall um das Herz zu errichten. Dieser Schutzwall besteht aus mehreren Schichten eingeschlossener Emotionen und dient einem verständlichen Zweck: Er soll verhindern, dass du diesen Schmerz noch einmal empfindest.

Das Problem: Was dich vor Schmerz schützt, schützt dich auch vor Freude, Liebe und tiefer Verbindung. Die Herzwand filtert nicht selektiv — sie dämpft alles.

Menschen mit einer ausgeprägten Herzwand beschreiben oft:
• Das Gefühl, von anderen Menschen "abgeschnitten" zu sein
• Schwierigkeiten, Liebe anzunehmen oder zu geben
• Eine unerklärliche Taubheit oder Leere im Brustbereich
• Das Gefühl, durch eine Glasscheibe auf das eigene Leben zu schauen
• Beziehungen, die oberflächlich bleiben, egal wie sehr man sich bemüht

Die Herzwand ist keine Krankheit und kein Defekt. Sie ist eine kreative Überlebensstrategie deines Unterbewusstseins. Aber sie hat ihren Preis — und die gute Nachricht ist: Sie kann Schicht für Schicht aufgelöst werden.`,
            uebung: {
              titel: 'Herzwand-Selbsteinschätzung',
              anleitung: `Bewerte die folgenden Aussagen auf einer Skala von 0 (trifft gar nicht zu) bis 10 (trifft vollkommen zu):

1. Ich fühle mich oft emotional "taub" oder abgestumpft.
2. Es fällt mir schwer, Komplimente oder Liebe wirklich anzunehmen.
3. Ich spüre eine Art Barriere zwischen mir und anderen Menschen.
4. Ich vermeide es, mich emotional wirklich verletzbar zu machen.
5. Tiefe Freude fühlt sich ungewohnt oder sogar bedrohlich an.

Addiere deine Punkte:
• 0–15: Wahrscheinlich keine starke Herzwand
• 16–30: Mögliche Herzwand, Schichten vorhanden
• 31–50: Deutliche Herzwand, Befreiungsarbeit empfohlen

Unabhängig von deinem Ergebnis: Die Übungen in Modul 5 werden dir helfen, Schicht für Schicht freizulegen.`,
              dauer: '5 Min',
            },
          },
          {
            id: 'P02-M2-L2',
            titel: 'Wie eine Herzwand entsteht',
            inhalt: `Eine Herzwand entsteht selten durch ein einzelnes Ereignis. Meist ist es eine Abfolge von Erfahrungen, die sich über Monate, Jahre oder sogar Generationen aufbauen.

Die erste Schicht bildet sich oft in der Kindheit. Ein Kind, das lernt, dass es für seine Tränen bestraft wird, beginnt unbewusst, sein Herz zu verschließen. Ein Verlust — sei es ein Elternteil, ein Haustier, eine Freundschaft — kann den ersten Grundstein legen.

Die weiteren Schichten folgen durch das Leben: Herzschmerz in einer Beziehung, eine schmerzhafte Trennung, Vertrauensbruch, der Tod eines geliebten Menschen, Mobbing, Zurückweisung. Jede dieser Erfahrungen kann eine weitere Schicht zur Herzwand hinzufügen — besonders wenn die Emotion nicht vollständig verarbeitet wurde.

Interessant ist, dass viele Menschen intuitiv spüren, dass ihre Herzwand existiert. Sie beschreiben es mit Worten wie:
"Ich lasse niemanden wirklich an mich ran."
"Etwas hält mich davon ab, mich voll einzulassen."
"Ich weiß, dass ich mehr fühlen könnte, aber es geht nicht."

Diese Selbstwahrnehmung ist bereits der erste Schritt zur Befreiung. Denn was du erkennen kannst, kannst du auch verändern.`,
            uebung: {
              titel: 'Herzwand-Zeitlinie',
              anleitung: `Zeichne auf einem Blatt Papier eine horizontale Linie — deine Lebenszeitlinie, von der Geburt bis heute.

Markiere darauf alle Ereignisse, die dein Herz "verschlossen" haben könnten. Das können sein:
• Verluste (Tod, Trennungen, Umzüge)
• Zurückweisung (sozial, romantisch, familiär)
• Vertrauensbrüche
• Momente, in denen du gelernt hast, deine Gefühle zu unterdrücken

Für jedes Ereignis: Welche Emotion war dominant? Schreibe sie dazu.

Diese Übersicht gibt dir eine Landkarte deiner Herzwand — du wirst sehen, welche Schichten zuerst aufgebaut wurden und welche am frischesten sind.`,
              dauer: '10 Min',
            },
          },
          {
            id: 'P02-M2-L3',
            titel: 'Leben ohne Herzwand',
            inhalt: `Stell dir vor, die Herzwand wäre nicht da. Stell dir vor, du könntest die Welt mit einem vollkommen offenen Herzen erleben — ohne Filter, ohne Schutzwall, ohne die ständige unterschwellige Anspannung, die es kostet, dein Herz verschlossen zu halten.

Menschen, die ihre Herzwand aufgelöst haben, berichten oft von tiefgreifenden Veränderungen:

In Beziehungen: Plötzlich sind tiefe Gespräche möglich, die vorher an einer unsichtbaren Grenze gestoppt haben. Partner bemerken die Veränderung oft, bevor man selbst darüber spricht. Kinder spüren es sofort — sie kommen näher, öffnen sich mehr.

Im Körper: Häufig lösen sich chronische Beschwerden im Brustbereich, die Atmung wird freier, die Stimme klarer. Manche berichten von einem Gefühl physischer Leichtigkeit, als wäre buchstäblich eine Last von der Brust genommen.

Im Erleben: Farben wirken intensiver, Musik berührt tiefer, Momente der Freude werden nicht mehr automatisch gedämpft. Es ist, als hätte jemand einen Filter entfernt, durch den du die Welt gesehen hast.

Im Selbstgefühl: Ein grundlegendes Gefühl von "Ich bin in Ordnung" stellt sich ein. Nicht als intellektuelle Überzeugung, sondern als körperlich spürbare Gewissheit.

Dieses Bild ist nicht übertrieben — es ist das, was möglich wird, wenn du die Befreiungsarbeit konsequent durchführst. Und genau das wirst du in den nächsten Modulen lernen.`,
            uebung: {
              titel: 'Vision ohne Herzwand',
              anleitung: `Schließe die Augen und stelle dir 3 Minuten lang vor, wie dein Leben aussehen würde, wenn dein Herz vollkommen offen wäre. Keine Angst vor Verletzung, keine Mauer, kein Filter.

Beantworte danach:
1. Wie würde sich dein Alltag verändern?
2. Welche Beziehung in deinem Leben würde sich am meisten verändern?
3. Was würdest du tun, das du jetzt nicht tust?

Schreibe deine Antworten auf. Sie sind dein "Warum" — deine Motivation für die Befreiungsarbeit, die jetzt kommt.`,
              dauer: '5 Min',
            },
          },
        ],
      },
      {
        nr: 3,
        titel: 'Emotionen identifizieren',
        dauer: '40 Min',
        lektionen: [
          {
            id: 'P02-M3-L1',
            titel: 'Die Emotionsliste — dein Werkzeug',
            inhalt: `Um eingeschlossene Emotionen zu befreien, musst du sie zuerst identifizieren können. Dafür arbeiten wir mit einer strukturierten Emotionsliste — einem Werkzeug, das dir hilft, die oft vagen Empfindungen in konkrete, benennbare Emotionen zu übersetzen.

Die Emotionsliste ist in zwei Spalten und sechs Reihen organisiert — insgesamt 60 Emotionen. Jede Reihe ist einem Organ- oder Körpersystem zugeordnet, was die energetische Verbindung zwischen Emotion und Körper widerspiegelt:

Reihe 1 — Herz/Dünndarm: Verlassenheit, Verrat, Schüchternheit, Verletzlichkeit, Kummer, Herzschmerz, Unsicherheit, Überanstrengung, Hilflosigkeit, Trauer

Reihe 2 — Milz/Magen: Angst, Verzweiflung, Ekel, Nervosität, Sorge, Selbstmitleid, Hilflosigkeit, Kontrollverlust, Minderwertigkeit, Ruhelosigkeit

Reihe 3 — Lunge/Dickdarm: Weinen, Verwirrung, Abwehr, Trauer, Kummer, Ablehnung, Traurigkeit, Selbstbestrafung, Sturheit, Sehnsucht

Reihe 4 — Niere/Blase: Angst, Entsetzen, Konfliktscheu, Schock, Unsicherheit, kreative Unsicherheit, Furcht, Grauen, Panik, Überwältigung

Reihe 5 — Leber/Gallenblase: Wut, Bitterkeit, Schuld, Hass, Hilflosigkeit, Depression, Frustration, Unentschlossenheit, Panik, Groll

Reihe 6 — Drüsen/Sexualorgane: Demütigung, Eifersucht, Sehnsucht, Lust, Überwältigung, Stolz, Scham, Schock, Unwürdigkeit, Wertlosigkeit

Diese Zuordnungen sind Orientierungshilfen — keine starren Regeln. Eine eingeschlossene Wut kann sich durchaus im Magenbereich zeigen, obwohl sie der Leber-Reihe zugeordnet ist. Dein Körper ist individuell.`,
            uebung: {
              titel: 'Emotionsliste erkunden',
              anleitung: `Lies die Emotionsliste langsam durch. Bei welchen Emotionen reagiert dein Körper? Achte auf:

• Welche Worte lösen ein Ziehen, Drücken oder eine Reaktion aus?
• Bei welchen Emotionen denkst du sofort "Ja, das kenne ich"?
• Welche Emotionen fühlst du körperlich, während du sie liest?

Markiere die 5 Emotionen, die die stärkste Reaktion in dir auslösen. Diese 5 sind wahrscheinlich deine aktivsten eingeschlossenen Emotionen — und gute Kandidaten für die erste Befreiungsarbeit.`,
              dauer: '5 Min',
            },
          },
          {
            id: 'P02-M3-L2',
            titel: 'Muskeltests und Körpersignale',
            inhalt: `Eine der faszinierendsten Methoden, um eingeschlossene Emotionen zu identifizieren, ist der kinesiologische Muskeltest. Das Prinzip dahinter: Dein Unterbewusstsein kennt die Antwort — und dein Körper kann sie zeigen.

Der Muskeltest basiert auf der Beobachtung, dass der Körper auf Wahrheit mit Stärke und auf Unwahrheit mit Schwäche reagiert. Wenn du eine Aussage machst, die wahr ist ("Mein Name ist [dein Name]"), bleibt der getestete Muskel stark. Bei einer unwahren Aussage ("Mein Name ist Freiherr von Münchhausen") gibt der Muskel nach.

Für die Selbstarbeit nutzen wir den Schwanktest — eine vereinfachte Form des Muskeltests, die du alleine durchführen kannst:

Stell dich aufrecht hin, Füße schulterbreit. Schließe die Augen. Sage innerlich oder laut "Ja" — und beobachte, ob dein Körper leicht nach vorne oder hinten schwankt. Sage dann "Nein" — und beobachte die entgegengesetzte Reaktion.

Bei den meisten Menschen bedeutet ein Schwanken nach vorne "Ja/Wahr" und nach hinten "Nein/Unwahr". Manche Menschen erleben es umgekehrt — finde deine persönliche Kalibrierung heraus.

Mit diesem Werkzeug kannst du nun die Emotionsliste durchgehen und dein Unterbewusstsein befragen: "Habe ich eine eingeschlossene Emotion aus Reihe 1?" — und der Körper antwortet.`,
            uebung: {
              titel: 'Schwanktest kalibrieren',
              anleitung: `Stell dich aufrecht hin, Füße schulterbreit, Augen geschlossen. Atme dreimal tief durch.

Schritt 1 — Kalibrierung:
• Sage laut oder innerlich: "Mein Name ist [dein echter Name]."
  Beobachte: In welche Richtung schwankt dein Körper?
• Sage: "Mein Name ist Pumuckl."
  Beobachte: In welche Richtung schwankt dein Körper jetzt?

Die Richtung bei deinem echten Namen = dein "Ja".
Die Richtung beim falschen Namen = dein "Nein".

Schritt 2 — Teste:
• "Ich habe eine eingeschlossene Emotion." (Beobachte die Reaktion)
• "Diese Emotion ist aus Reihe 1." (Ja/Nein)
• Gehe die Reihen durch, bis du ein klares "Ja" bekommst.
• Dann gehe die Emotionen in dieser Reihe einzeln durch.

Die stärkste Körperreaktion zeigt dir die eingeschlossene Emotion.`,
              dauer: '10 Min',
            },
          },
          {
            id: 'P02-M3-L3',
            titel: 'Fragen stellen — das Identifikationsprotokoll',
            inhalt: `Der Schwanktest ist ein mächtiges Werkzeug, aber er wird noch wirkungsvoller, wenn du lernst, die richtigen Fragen zu stellen. Hier ist ein strukturiertes Protokoll, das dich Schritt für Schritt zur eingeschlossenen Emotion führt:

Frage 1: "Habe ich eine eingeschlossene Emotion, die jetzt bereit ist, losgelassen zu werden?"
→ Beginne immer mit dieser Frage. Das "jetzt bereit" ist wichtig — dein Unterbewusstsein weiß, welche Emotion als nächstes an der Reihe ist.

Frage 2: "Ist diese Emotion in Spalte A?" (Ja/Nein) → Spalte eingrenzen
Frage 3: "Ist sie in Reihe 1?" → Reihe für Reihe durchgehen
Frage 4: Die Emotionen der identifizierten Reihe einzeln durchgehen

Frage 5: "Brauche ich mehr Informationen über diese Emotion?" 
→ Manchmal reicht die Identifikation allein. Manchmal will das Unterbewusstsein, dass du verstehst, woher die Emotion kommt.

Mögliche Zusatzfragen:
"Ist diese Emotion aus meiner Kindheit?"
"Hängt sie mit einer bestimmten Person zusammen?"
"Ist sie von jemand anderem übernommen?"
"Hat sie mit [Thema] zu tun?"

Frage 6: "Kann ich diese Emotion jetzt loslassen?"
→ Fast immer ist die Antwort Ja. Wenn Nein: Stelle mehr Zusatzfragen — das Unterbewusstsein braucht noch etwas, bevor es loslassen kann.

Dieses Protokoll klingt mechanisch, wird aber mit etwas Übung zu einem fließenden Dialog mit deinem inneren Wissen.`,
            uebung: {
              titel: 'Identifikations-Durchlauf',
              anleitung: `Führe jetzt einen vollständigen Identifikations-Durchlauf durch:

1. Stelle dich hin, kalibriere deinen Schwanktest.
2. Frage: "Habe ich eine eingeschlossene Emotion, die jetzt bereit ist, losgelassen zu werden?"
3. Folge dem Protokoll aus der Lektion: Spalte → Reihe → Emotion
4. Wenn identifiziert: Frage, ob du mehr Informationen brauchst.
5. Notiere: Welche Emotion? Welche Reihe? Welche zusätzlichen Infos kamen?

Wichtig: Noch nicht loslassen! Das Befreien lernen wir im nächsten Modul. Jetzt geht es nur darum, sicher identifizieren zu können.

Wiederhole den Durchlauf 2–3 Mal, um Übung zu bekommen.`,
              dauer: '10 Min',
            },
          },
        ],
      },
      {
        nr: 4,
        titel: 'Emotionen befreien — die Technik',
        dauer: '45 Min',
        lektionen: [
          {
            id: 'P02-M4-L1',
            titel: 'Das Prinzip der Befreiung',
            inhalt: `Jetzt wird es konkret. Du hast gelernt, was eingeschlossene Emotionen sind, wie sie sich im Körper zeigen und wie du sie identifizierst. Nun lernst du, sie tatsächlich zu befreien.

Das Prinzip der Befreiung basiert auf zwei einfachen Wahrheiten:

Erstens: Eine eingeschlossene Emotion ist Energie. Sie hat eine bestimmte Frequenz, eine bestimmte "Signatur". Wenn du diese Emotion identifizierst — wenn du sie beim Namen nennst und anerkennst — bringst du sie aus dem Unterbewussten ins Bewusstsein. Allein dieser Schritt verändert bereits etwas.

Zweitens: Der Lenkungsmeridian — der Hauptmeridian, der über die Mittellinie deines Körpers verläuft — funktioniert wie ein Hauptkanal des Energiesystems. Wenn du entlang dieses Meridians streichst, während du die Intention hältst, die identifizierte Emotion loszulassen, wird die eingeschlossene Energie buchstäblich aus dem System gelöst.

Das klingt zu einfach? Die Einfachheit ist die Stärke dieser Methode. Du brauchst keine komplizierten Rituale, keine teuren Hilfsmittel, keine jahrelange Ausbildung. Du brauchst:
• Die identifizierte Emotion (aus Modul 3)
• Deine Hand
• Die klare Intention, loszulassen

In den nächsten Lektionen lernst du den exakten Ablauf — Schritt für Schritt.`,
            uebung: {
              titel: 'Meridian-Sensibilisierung',
              anleitung: `Bevor wir mit der eigentlichen Befreiungstechnik starten, sensibilisiere dich für deinen Lenkungsmeridian:

1. Lege 3 Finger auf deinen Scheitel (höchster Punkt des Kopfes).
2. Streiche langsam über die Stirn, die Nase, die Lippen, das Kinn herunter.
3. Weiter über den Hals und das Brustbein bis zum Solarplexus.

Wiederhole das 3 Mal — langsam, bewusst.

Beobachte: Spürst du den Meridian? Gibt es Stellen, die sich anders anfühlen als andere? Wärme? Kribbeln? Blockaden?

Dieses Streichen über den Lenkungsmeridian ist die zentrale Bewegung der Befreiungstechnik. Je vertrauter du damit bist, desto wirkungsvoller wird die Arbeit.`,
              dauer: '3 Min',
            },
          },
          {
            id: 'P02-M4-L2',
            titel: 'Die Befreiungstechnik — Schritt für Schritt',
            inhalt: `Hier ist der vollständige Ablauf der Befreiungstechnik. Lies ihn erst komplett durch, bevor du ihn ausführst.

Schritt 1 — Identifikation:
Nutze den Schwanktest und das Identifikationsprotokoll aus Modul 3, um die eingeschlossene Emotion zu finden. Stelle alle nötigen Zusatzfragen.

Schritt 2 — Anerkennung:
Sage (laut oder innerlich): "Ich erkenne an, dass ich eine eingeschlossene Emotion der [Name] trage. Ich bin bereit, sie jetzt loszulassen."

Schritt 3 — Befreiung:
Lege 2–3 Finger auf deinen Scheitel. Atme tief ein. Während du ausatmest, streiche mit sanftem Druck über den Lenkungsmeridian — vom Scheitel über die Stirn, Nase, Lippen, Kinn, Hals bis zum Brustbein.

Wiederhole dieses Streichen 3 Mal, während du die klare Intention hältst: "Ich lasse diese Emotion los. Sie darf jetzt gehen."

Schritt 4 — Überprüfung:
Frage mit dem Schwanktest: "Ist die Emotion der [Name] jetzt befreit?" 
Wenn Ja → weiter zu Schritt 5. 
Wenn Nein → wiederhole Schritt 3 noch 3 Mal.

Schritt 5 — Integration:
Trinke ein Glas Wasser. Atme 3 Mal tief durch. Nimm wahr, wie sich dein Körper jetzt anfühlt. Es ist normal, wenn du Leichtigkeit, Gähnen, Seufzen oder leichte Emotionalität erlebst.

Das ist die komplette Technik. Einfach, kraftvoll, wiederholbar.`,
            uebung: {
              titel: 'Erste Befreiung',
              anleitung: `Jetzt ist der Moment — deine erste Befreiung einer eingeschlossenen Emotion.

1. Stehe auf. Kalibriere deinen Schwanktest.
2. Frage: "Habe ich eine eingeschlossene Emotion, die jetzt bereit ist, losgelassen zu werden?"
3. Identifiziere sie mit dem Protokoll.
4. Wenn gefunden: Führe die Befreiungstechnik durch (Anerkennung → 3x Meridian streichen → Überprüfung).
5. Trinke danach ein Glas Wasser.

Notiere:
• Welche Emotion wurde befreit?
• Wie fühlt sich dein Körper danach an?
• Was hat sich verändert?

Gratulation — du hast gerade deine erste eingeschlossene Emotion befreit. Das ist ein bedeutender Schritt.`,
              dauer: '10 Min',
            },
          },
          {
            id: 'P02-M4-L3',
            titel: 'Verarbeitungszeit und Selbstfürsorge',
            inhalt: `Nach jeder Befreiung braucht dein Körper Zeit, um die Veränderung zu integrieren. Diese Phase wird "Verarbeitungszeit" genannt und ist ein natürlicher Teil des Prozesses.

Was passiert während der Verarbeitungszeit? Dein Energiesystem reorganisiert sich. Die Stelle, an der die eingeschlossene Emotion saß, ist jetzt "frei" — und der Körper muss sich an diese neue Freiheit gewöhnen. Das kann 1–3 Tage dauern, selten länger.

Mögliche Verarbeitungszeichen:
• Müdigkeit oder erhöhtes Schlafbedürfnis (dein Körper heilt im Schlaf)
• Lebhafte Träume (das Unterbewusstsein verarbeitet)
• Leichte Emotionalität (aufsteigende Gefühle, die durchfließen wollen)
• Körperliche Veränderungen (leichte Kopfschmerzen, veränderte Verdauung)
• Ein Gefühl der Leichtigkeit oder Euphorie

All das ist normal und ein Zeichen, dass die Befreiung gewirkt hat.

Wichtig — die Grundregeln der Selbstfürsorge nach einer Befreiung:
Trinke viel Wasser — das unterstützt den Körper bei der energetischen Reinigung. Ruhe dich aus, wenn dein Körper danach fragt. Vermeide es, am selben Tag weitere intensive emotionale Arbeit zu machen. Gib dir selbst die gleiche Fürsorge, die du einem guten Freund geben würdest.

Eine Faustregel: Befreie nicht mehr als 2–3 Emotionen pro Sitzung, und lasse zwischen intensiven Sitzungen mindestens 24 Stunden Verarbeitungszeit.`,
            uebung: {
              titel: 'Verarbeitungs-Tagebuch',
              anleitung: `Starte ein einfaches Tagebuch für deine Befreiungsarbeit. Für jede Sitzung notierst du:

Datum: ___
Befreite Emotion(en): ___
Körpergefühl direkt danach: ___

In den folgenden 1–3 Tagen:
• Tag 1: Wie geht es mir? Was fällt mir auf?
• Tag 2: Welche Veränderungen bemerke ich?
• Tag 3: Fühlt sich etwas anders an als vor der Befreiung?

Dieses Tagebuch wird über die Wochen zu einem faszinierenden Dokument deiner Transformation. Du wirst Muster erkennen, Zusammenhänge sehen und deinen eigenen Fortschritt schwarz auf weiß verfolgen können.`,
              dauer: '5 Min',
            },
          },
        ],
      },
      {
        nr: 5,
        titel: 'Die Herzwand auflösen',
        dauer: '40 Min',
        lektionen: [
          {
            id: 'P02-M5-L1',
            titel: 'Herzwand-Befreiung — das Protokoll',
            inhalt: `Die Auflösung der Herzwand folgt dem gleichen Grundprinzip wie die Befreiung einzelner Emotionen — mit einer wichtigen Besonderheit: Die Herzwand besteht aus mehreren Schichten, und jede Schicht muss einzeln identifiziert und befreit werden.

Das erweiterte Protokoll:

Schritt 1: "Habe ich eine Herzwand?" → Schwanktest
Wenn Nein → Herzlichen Glückwunsch, du brauchst dieses Modul nicht.
Wenn Ja → weiter.

Schritt 2: "Besteht meine Herzwand aus mehr als einer Schicht?" → Fast immer Ja.

Schritt 3: "Kann ich jetzt eine Schicht der Herzwand befreien?" → Wenn Ja, beginne die Identifikation.

Schritt 4: Identifiziere die Emotion der äußersten Schicht mit dem bekannten Protokoll (Spalte → Reihe → Emotion). Stelle Zusatzfragen wenn nötig.

Schritt 5: Führe die Befreiungstechnik durch (Anerkennung → 3x Meridian streichen → Überprüfung).

Schritt 6: Frage: "Ist die äußerste Schicht der Herzwand jetzt befreit?" → Wenn Ja, frage: "Gibt es noch weitere Schichten?" → Wenn Ja, wiederhole ab Schritt 4.

Die Herzwand kann aus 3, 5, 10 oder auch 20+ Schichten bestehen. Befreie pro Sitzung maximal 3 Schichten und respektiere die Verarbeitungszeit.

Eines Tages wirst du fragen "Habe ich noch eine Herzwand?" und die Antwort wird "Nein" sein. Das ist der Moment, auf den du hinarbeitest.`,
            uebung: {
              titel: 'Erste Herzwand-Schicht',
              anleitung: `Wenn du in Modul 2 eine mögliche oder deutliche Herzwand identifiziert hast, starte jetzt mit der ersten Schicht:

1. Schwanktest: "Habe ich eine Herzwand?" 
2. Wenn Ja: "Kann ich jetzt eine Schicht befreien?"
3. Identifiziere die Emotion der äußersten Schicht.
4. Befreiungstechnik: Anerkennung → 3x Meridian streichen → Überprüfung.
5. Trinke Wasser. Notiere im Verarbeitungs-Tagebuch.

Wenn der Test "Nein" zu Herzwand ergibt: Befreie stattdessen eine reguläre eingeschlossene Emotion mit dem Standardprotokoll.

Herzwand-Arbeit ist tiefe Arbeit. Sei geduldig mit dir.`,
              dauer: '10 Min',
            },
          },
          {
            id: 'P02-M5-L2',
            titel: 'Übernommene und vererbte Emotionen',
            inhalt: `Nicht alle eingeschlossenen Emotionen, die du trägst, sind deine eigenen. Das ist eine der überraschendsten Erkenntnisse in der Arbeit mit dem Emotionscode: Emotionen können übernommen und sogar vererbt werden.

Übernommene Emotionen entstehen, wenn du die Emotion eines anderen Menschen absorbierst. Das passiert häufiger als du denkst — besonders bei empathischen Menschen, Therapeuten, Eltern oder sensiblen Kindern. Du warst in der Nähe von jemand, der intensiven Schmerz empfand, und dein Energiesystem hat einen Teil dieser Emotion aufgenommen.

Vererbte Emotionen gehen noch tiefer. Neuere Forschung zur Epigenetik zeigt, dass traumatische Erfahrungen genetische Marker hinterlassen können, die an nachfolgende Generationen weitergegeben werden. Du trägst möglicherweise die unverarbeitete Trauer deiner Großmutter oder die Überlebensangst deines Urgroßvaters — ohne jemals deren Erfahrungen gemacht zu haben.

Wie erkennst du sie? Im Identifikationsprotokoll stellst du die Zusatzfrage: "Ist diese Emotion meine eigene?" Wenn Nein: "Ist sie übernommen?" oder "Ist sie vererbt?"

Die Befreiungstechnik funktioniert identisch — das Streichen über den Lenkungsmeridian löst die Emotion, unabhängig von ihrem Ursprung. Aber das Wissen um den Ursprung kann tief berührend sein und ein größeres Verständnis für Familienmuster eröffnen.`,
            uebung: {
              titel: 'Herkunfts-Check',
              anleitung: `Führe eine Identifikation durch und frage bei der gefundenen Emotion:

1. "Ist diese Emotion meine eigene?" (Schwanktest)

Wenn Nein:
2. "Ist sie von einer lebenden Person übernommen?"
3. "Ist sie von meiner Mutter/meinem Vater vererbt?"
4. "Geht sie weiter zurück — Großeltern oder früher?"

Wenn du eine übernommene oder vererbte Emotion findest:
• Befreie sie mit der Standardtechnik
• Notiere im Tagebuch: eigene / übernommen / vererbt + von wem

Beobachte in den kommenden Tagen: Verändert sich etwas in deinem Verhältnis zu der Person, von der die Emotion stammt?`,
              dauer: '10 Min',
            },
          },
          {
            id: 'P02-M5-L3',
            titel: 'Mehrere Sitzungen planen',
            inhalt: `Die Auflösung einer Herzwand ist kein Sprint — es ist ein Prozess, der sich über Wochen oder Monate erstrecken kann. Und das ist gut so. Jede befreite Schicht ist ein Fortschritt, den du spüren wirst.

Hier ist ein realistischer Zeitplan für die Herzwand-Arbeit:

Woche 1: 2 Sitzungen, jeweils 1–2 Schichten. Fokus auf das Einüben des Protokolls.

Woche 2–3: 2–3 Sitzungen pro Woche, jeweils 2–3 Schichten. Du wirst schneller und sicherer im Identifizieren.

Ab Woche 4: Du findest deinen eigenen Rhythmus. Manche bevorzugen tägliche kurze Sitzungen, andere 2–3 intensive Sitzungen pro Woche.

Zwischen den Herzwand-Sitzungen kannst du auch reguläre eingeschlossene Emotionen befreien — die müssen nicht zur Herzwand gehören. Dein Unterbewusstsein wird dir zeigen, was gerade Priorität hat.

Zeichen, dass du Fortschritt machst:
• Die Emotionen der äußeren Schichten sind oft "leichter" (Frustration, Ärger)
• Je tiefer du kommst, desto fundamentaler werden die Emotionen (tiefe Trauer, Verlassenheit, Verrat)
• Dein emotionales Erleben verändert sich zwischen den Sitzungen spürbar
• Andere Menschen bemerken Veränderungen an dir

Der Tag, an dem der Schwanktest auf "Habe ich noch eine Herzwand?" mit Nein antwortet, ist ein Tag, den du feiern darfst. Es ist einer der bedeutsamsten Momente in der persönlichen Entwicklung.`,
            uebung: {
              titel: 'Persönlicher Sitzungsplan',
              anleitung: `Erstelle deinen persönlichen Sitzungsplan für die nächsten 2 Wochen:

Woche 1:
• Sitzung 1 am: ___ (Tag + Uhrzeit)
• Sitzung 2 am: ___

Woche 2:
• Sitzung 1 am: ___
• Sitzung 2 am: ___
• Sitzung 3 am: ___ (optional)

Für jede Sitzung:
• Ort: Wo hast du 15–20 Minuten ungestörte Ruhe?
• Vorbereitung: Glas Wasser bereitstellen, Tagebuch griffbereit
• Nachbereitung: 5 Min Ruhe, Tagebuch-Eintrag

Je konkreter der Plan, desto wahrscheinlicher die Umsetzung. Trage die Termine jetzt in deinen Kalender ein.`,
              dauer: '5 Min',
            },
          },
        ],
      },
      {
        nr: 6,
        titel: 'Integration & tägliche Praxis',
        dauer: '30 Min',
        lektionen: [
          {
            id: 'P02-M6-L1',
            titel: 'Dein tägliches Befreiungsritual',
            inhalt: `Du hast jetzt alle Werkzeuge, die du brauchst. In diesem letzten Modul geht es darum, die Arbeit mit eingeschlossenen Emotionen zu einer nachhaltigen Praxis zu machen — etwas, das du nicht nur einmal machst, sondern das dich dauerhaft begleitet.

Das tägliche Befreiungsritual dauert nur 10 Minuten und kann in deinen Morgen- oder Abendalltag integriert werden:

Minute 1–2: Ankommen. Stehe aufrecht, schließe die Augen, atme dreimal tief. Verbinde dich mit deinem Körper.

Minute 2–4: Check-in. Scanne deinen Körper: Gibt es heute eine Auffälligkeit? Eine Spannung, eine Emotion, die sich meldet? Frage mit dem Schwanktest: "Gibt es eine eingeschlossene Emotion, die heute bereit ist, losgelassen zu werden?"

Minute 4–8: Identifikation & Befreiung. Wenn Ja: Folge dem Protokoll (Spalte → Reihe → Emotion → Befreiung). Wenn Nein: Nutze die Zeit für Herzwand-Arbeit oder einfach stille Wahrnehmung.

Minute 8–10: Integration. Trinke Wasser, notiere im Tagebuch, setze eine positive Intention für den Tag.

Das ist alles. 10 Minuten pro Tag. Konsequent durchgeführt, wirst du innerhalb von Wochen eine fundamentale Veränderung in deinem emotionalen Erleben, deiner körperlichen Verfassung und deinen Beziehungen bemerken.`,
            uebung: {
              titel: '10-Minuten-Ritual — erster Durchlauf',
              anleitung: `Führe jetzt einen vollständigen Durchlauf des 10-Minuten-Rituals durch:

1. Ankommen (2 Min): Stehe auf, Augen zu, 3 tiefe Atemzüge.
2. Check-in (2 Min): Körper-Scan + Schwanktest-Frage.
3. Befreiung (4 Min): Identifiziere und befreie eine Emotion.
4. Integration (2 Min): Wasser trinken, Tagebuch-Eintrag, Tagesintention.

Notiere danach: Wie fühlt sich dieses Ritual an? Morgens oder abends besser? Welche Anpassungen würden es für dich einfacher machen?

Ziel: Dieses Ritual 21 Tage am Stück durchführen. Danach ist es eine Gewohnheit.`,
              dauer: '10 Min',
            },
          },
          {
            id: 'P02-M6-L2',
            titel: 'Anwendung für andere',
            inhalt: `Alles, was du in diesem Kurs gelernt hast, kannst du grundsätzlich auch für andere Menschen anwenden — vorausgesetzt, sie stimmen zu und sind offen dafür.

Die Anwendung für andere unterscheidet sich in einigen wichtigen Punkten:

Der Muskeltest: Statt des Schwanktests kannst du den klassischen Armtest verwenden. Die Person hält einen Arm waagerecht ausgestreckt, du stellst die Fragen und testest den Widerstand des Arms. Stark = Ja, gibt nach = Nein.

Die Befreiung: Du streichst den Lenkungsmeridian der anderen Person — vom Scheitel abwärts — oder die Person tut es selbst, während du die Fragen stellst.

Für Fernarbeit: Die Intention reicht. Du kannst dich stellvertretend testen lassen (Surrogat-Arbeit) oder den Schwanktest für eine andere Person durchführen, indem du die Verbindung innerlich herstellst. Dies ist fortgeschrittene Praxis und erfordert Übung.

Wichtige ethische Grundsätze:
• Arbeite nur mit expliziter Erlaubnis der Person
• Teile gefundene Emotionen respektvoll und ohne Wertung mit
• Du bist kein Therapeut (es sei denn, du bist einer) — empfehle professionelle Hilfe bei schweren Traumata
• Vertraulichkeit ist absolut — was in einer Sitzung geteilt wird, bleibt dort

Wenn dich die Arbeit mit anderen fasziniert, ist das ein starkes Zeichen. Die vertiefenden Kurse der Resonanz Akademie bereiten dich auf die professionelle Anwendung vor.`,
            uebung: {
              titel: 'Partner-Übung (optional)',
              anleitung: `Wenn du eine Vertrauensperson hast, die offen für diese Arbeit ist:

1. Erkläre ihr kurz das Prinzip (eingeschlossene Emotionen + Befreiung).
2. Frage um Erlaubnis.
3. Führe gemeinsam einen Armtest durch:
   - Die Person streckt einen Arm waagerecht aus.
   - Sage: "Halte stark." Drücke leicht auf den Unterarm.
   - Teste mit wahren/unwahren Aussagen zur Kalibrierung.
4. Identifiziere eine Emotion mit dem Protokoll.
5. Befreie sie (die Person streicht selbst über ihren Meridian, oder du tust es).

Falls keine Vertrauensperson verfügbar: Führe stattdessen eine weitere eigene Befreiung durch und notiere, wie sich deine Sicherheit mit dem Protokoll entwickelt hat.`,
              dauer: '15 Min',
            },
          },
          {
            id: 'P02-M6-L3',
            titel: 'Abschluss & dein Weg weiter',
            inhalt: `Du hast den Grundlagenkurs Emotionscode abgeschlossen. Lass uns zurückblicken auf das, was du gelernt und erfahren hast:

In Modul 1 hast du verstanden, was eingeschlossene Emotionen sind — Energie, die im Körper gespeichert bleibt, wenn der natürliche Verarbeitungszyklus unterbrochen wird. Du hast die Auswirkungen auf Körper, Psyche und Verhalten kennengelernt.

In Modul 2 hast du das Konzept der Herzwand entdeckt — den Schutzwall aus eingeschlossenen Emotionen, der dich vor Schmerz schützt, aber auch Freude und tiefe Verbindung blockiert.

In Modul 3 hast du gelernt, eingeschlossene Emotionen präzise zu identifizieren — mit der Emotionsliste, dem Schwanktest und dem Identifikationsprotokoll.

In Modul 4 hast du die Befreiungstechnik gelernt und deine erste Emotion tatsächlich losgelassen. Du hast erfahren, wie Verarbeitungszeit funktioniert und wie du gut für dich sorgst.

In Modul 5 hast du die Herzwand-Arbeit begonnen und gelernt, dass manche Emotionen übernommen oder vererbt sein können.

In diesem Modul hast du ein tägliches 10-Minuten-Ritual etabliert und die Grundlagen für die Arbeit mit anderen Menschen kennengelernt.

Du bist jetzt in der Lage, selbstständig mit eingeschlossenen Emotionen zu arbeiten. Das ist eine Fähigkeit, die dein ganzes Leben lang wertvoll sein wird. Bleib dran, bleib neugierig, und vertraue dem Prozess.

Dein Weg der emotionalen Befreiung hat gerade erst begonnen.`,
            uebung: {
              titel: 'Abschluss-Reflexion',
              anleitung: `Beantworte zum Abschluss diese Fragen — aus dem Herzen, mit offenem Blick:

1. Welche eingeschlossene Emotion hat dich am meisten überrascht?

2. Was hat sich seit Beginn des Kurses bereits verändert — in deinem Körper, deinen Emotionen, deinem Erleben?

3. Welches Muster aus der Muster-Erkennung (Modul 1, Lektion 3) siehst du jetzt mit anderen Augen?

4. Was ist dein Commitment für die nächsten 21 Tage? Formuliere es als konkreten Satz: "Ich befreie jeden Tag mindestens eine eingeschlossene Emotion, indem ich..."

Bewahre diese Reflexion neben der aus Modul 1 auf. Lies beides in 4 Wochen noch einmal — der Unterschied wird dich berühren.`,
              dauer: '5 Min',
            },
          },
        ],
      },
    ],
  },

  // ═══════════════════════════════════════════════════════
  // Y05 — Human Design × Numerologie (COMING SOON)
  // ═══════════════════════════════════════════════════════
  {
    id: 'Y05',
    titel: 'Human Design × Numerologie',
    bereich: 'humandesign',
    format: 'intensiv',
    symbol: '◈◈◈',
    stunden: '8–12h',
    preis: 'Kostenlos',
    originalPreis: '299 €',
    desc: 'Die Synthese zweier Systeme — dein Bodygraph trifft auf deine Lebenszahlen.',
    status: 'coming',
    module: [],
  },
]

// ── Helper-Funktionen ────────────────────────────────────

/** Kurs nach ID finden */
export function getKurs(kursId) {
  return KURSE.find(k => k.id === kursId) || null
}

/** Lektion nach ID finden (z.B. 'B10-M1-L1') */
export function getLektion(kursId, lektionId) {
  const kurs = getKurs(kursId)
  if (!kurs) return null
  for (const modul of kurs.module) {
    const lektion = modul.lektionen.find(l => l.id === lektionId)
    if (lektion) return { lektion, modul, kurs }
  }
  return null
}

/** Alle Lektions-IDs eines Kurses in Reihenfolge */
export function getAlleLektionIds(kursId) {
  const kurs = getKurs(kursId)
  if (!kurs) return []
  return kurs.module.flatMap(m => m.lektionen.map(l => l.id))
}

/** Gesamtzahl Lektionen eines Kurses */
export function getGesamtLektionen(kursId) {
  return getAlleLektionIds(kursId).length
}

/** Nächste/Vorherige Lektion */
export function getNavigation(kursId, lektionId) {
  const ids = getAlleLektionIds(kursId)
  const idx = ids.indexOf(lektionId)
  return {
    prev: idx > 0 ? ids[idx - 1] : null,
    next: idx < ids.length - 1 ? ids[idx + 1] : null,
    isFirst: idx === 0,
    isLast: idx === ids.length - 1,
    position: idx + 1,
    total: ids.length,
  }
}
