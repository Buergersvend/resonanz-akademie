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
  // P02 — Emotionscode Grundlagen (COMING SOON)
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
    desc: 'Eingeschlossene Emotionen erkennen und lösen mit dem Emotionscode.',
    status: 'coming',
    module: [],
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
