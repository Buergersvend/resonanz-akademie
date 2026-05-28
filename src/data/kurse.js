import P01 from './P01.js'
import G01 from './G01.js'
import K01 from './K01.js'
import G03 from './G03.js'
import G11 from './G11.js'
import G05 from './G05.js'
import G08 from './G08.js'
import P04 from './P04.js'
import N01 from './N01.js'
import G06 from './G06.js'
import P06 from './P06.js'
import S01 from './S01.js'
import N02 from './N02.js'
import P05 from './P05.js'
import K02 from './K02.js'
import G04 from './G04.js'
import P18 from './P18.js'
import S17 from './S17.js'
import E01 from './E01.js'
import G09 from './G09.js'
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
  { id: 'psyche', name: 'Psyche & Persönlichkeit', icon: '◉' },
  { id: 'naturheilkunde', name: 'Natur & Pflanzenheilkunde', icon: '✦' },
  { id: 'koerpergeist', name: 'Körper-Geist-Verbindung', icon: '◇' },
{ id: 'energie', name: 'Energetik & Bewusstsein', icon: '◈' },
{ id: 'koerper', name: 'Körper & Physische Heilung', icon: '⊕' },
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
  // P03 — Affirmationstraining (LIVE)
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
    desc: 'Wie Affirmationen wirklich funktionieren — jenseits von Wunschdenken. Lerne die Wissenschaft, die Technik und die tägliche Praxis, um mit gezielten Worten dein Unterbewusstsein neu zu programmieren.',
    status: 'live',
    module: [
      {
        nr: 1,
        titel: 'Warum Worte wirken',
        dauer: '25 Min',
        lektionen: [
          {
            id: 'P03-M1-L1',
            titel: 'Die Macht der Sprache',
            inhalt: `Worte sind mehr als Schall und Tinte. Jedes Wort, das du sprichst, denkst oder hörst, löst eine Kaskade von Reaktionen in deinem Nervensystem aus — messbar, reproduzierbar und weitreichender als die meisten Menschen ahnen.

Wenn jemand zu dir sagt "Stell dir eine Zitrone vor — du schneidest sie auf, der Saft läuft über deine Finger, du beißt hinein" — dann produziert dein Mund Speichel. Obwohl keine Zitrone da ist. Obwohl du weißt, dass es nur Worte sind. Dein Körper reagiert trotzdem.

Dieses Prinzip ist der Schlüssel zum Verständnis von Affirmationen: Dein Unterbewusstsein unterscheidet nicht zwischen einer realen Erfahrung und einer lebhaft vorgestellten. Worte, die mit Überzeugung und Wiederholung gesprochen werden, erzeugen neuronale Muster — genau wie tatsächliche Erlebnisse.

Neurowissenschaftlich betrachtet passiert Folgendes: Wenn du einen Satz wiederholst, stärkt sich die synaptische Verbindung, die diesem Gedanken zugrunde liegt. Je öfter du den Satz wiederholst, desto stärker wird die Verbindung — bis sie zu einer automatischen Überzeugung wird. Das funktioniert in beide Richtungen: Negative Sätze verstärken negative Überzeugungen, positive Sätze verstärken positive.

Affirmationen nutzen diesen Mechanismus bewusst und gezielt.`,
            uebung: {
              titel: 'Wort-Wirkung erleben',
              anleitung: `Teste die Wirkung von Worten direkt an deinem Körper:

Runde 1: Schließe die Augen und wiederhole 30 Sekunden lang innerlich: "Ich bin müde. Ich bin erschöpft. Alles ist anstrengend." — Beobachte deinen Körper. Was passiert?

Pause: 3 tiefe Atemzüge.

Runde 2: Wiederhole 30 Sekunden lang: "Ich bin wach. Energie fließt durch mich. Ich fühle mich lebendig." — Beobachte wieder.

Notiere den Unterschied. Wie hat sich dein Körper in Runde 1 vs. Runde 2 angefühlt? Energie? Haltung? Atmung?

Das, was du gerade erlebt hast, ist der Beweis: Worte verändern deinen körperlichen Zustand — in Sekunden.`,
              dauer: '3 Min',
            },
          },
          {
            id: 'P03-M1-L2',
            titel: 'Dein innerer Dialog — die Bestandsaufnahme',
            inhalt: `Bevor du anfängst, neue Überzeugungen zu pflanzen, ist es wichtig zu verstehen, welche Sätze bereits in dir laufen. Dein innerer Dialog — das, was du dir selbst sagst, oft ohne es bewusst zu bemerken — ist das mächtigste Affirmationsprogramm, das es gibt. Und es läuft seit Jahrzehnten.

Forschungen schätzen, dass ein Mensch zwischen 60.000 und 80.000 Gedanken pro Tag hat. Davon sind etwa 80% negativ und etwa 95% Wiederholungen vom Vortag. Das bedeutet: Die meisten Menschen befinden sich in einer Endlosschleife aus negativen Selbstgesprächen, ohne es zu merken.

Typische negative Affirmationen, die unbewusst laufen:
"Ich kann das nicht."
"Das schaffe ich nie."
"Ich bin nicht gut genug."
"Immer passiert mir sowas."
"Andere können das besser als ich."

Diese Sätze sind Affirmationen — nur eben destruktive. Sie wurden irgendwann von außen übernommen (Eltern, Lehrer, Gesellschaft) und durch jahrelange Wiederholung zu "Wahrheiten" in deinem Unterbewusstsein.

Die gute Nachricht: Was programmiert wurde, kann umprogrammiert werden. Und genau das ist das Ziel dieses Kurses.`,
            uebung: {
              titel: 'Innerer-Dialog-Protokoll',
              anleitung: `In den nächsten 2 Stunden (oder morgen den ganzen Vormittag) achte bewusst auf deine Selbstgespräche. Jedes Mal, wenn du einen bewertenden Gedanken über dich selbst bemerkst, schreibe ihn auf.

Nicht filtern. Nicht bewerten. Einfach dokumentieren.

Beispiele:
"Schon wieder zu spät." 
"Das war dumm von mir."
"Ich sehe heute schlecht aus."
"Warum kann ich nicht einfach..."

Zähle am Ende: Wie viele waren positiv? Wie viele negativ? Wie viele neutral?

Dieses Protokoll ist oft ein Augenöffner. Es zeigt dir schwarz auf weiß, welches Programm gerade in dir läuft — und welche Sätze am dringendsten ersetzt werden müssen.`,
              dauer: '5 Min (+ 2h Beobachtung)',
            },
          },
          {
            id: 'P03-M1-L3',
            titel: 'Die Neuroplastizität — dein Verbündeter',
            inhalt: `Lange glaubte die Wissenschaft, das Gehirn sei nach der Kindheit "fertig verdrahtet" — unveränderbar. Heute wissen wir: Das stimmt nicht. Dein Gehirn verändert sich dein ganzes Leben lang. Diese Fähigkeit heißt Neuroplastizität, und sie ist dein mächtigster Verbündeter beim Affirmationstraining.

Neuroplastizität bedeutet: Jeder Gedanke, den du denkst, verändert die physische Struktur deines Gehirns. Wiederholte Gedanken stärken bestimmte neuronale Verbindungen und schwächen andere. Was du oft denkst, wird zur Autobahn — schnell und mühelos. Was du selten denkst, verkümmert zum Trampelpfad.

Für Affirmationen bedeutet das konkret:

Die ersten Tage: Die neue Affirmation fühlt sich fremd an, vielleicht sogar unwahr. Normal — du legst gerade einen neuen Trampelpfad an, während die alte Autobahn noch dominant ist.

Nach 1–2 Wochen: Der neue Pfad wird breiter. Die Affirmation fühlt sich vertrauter an. Du ertappst dich dabei, den Satz spontan zu denken.

Nach 3–4 Wochen: Die neue Verbindung beginnt, mit der alten zu konkurrieren. Situationen, in denen du früher automatisch "Ich kann das nicht" gedacht hast, werden von "Ich schaffe das" unterbrochen.

Nach 2–3 Monaten: Die neue Überzeugung wird zur neuen Autobahn. Sie läuft automatisch, ohne bewusste Anstrengung. Das ist der Moment, in dem echte Transformation stattfindet.

Der Schlüssel ist Konsistenz. Nicht Intensität, sondern Wiederholung über Zeit. 5 Minuten täglich schlagen 1 Stunde einmal pro Woche — bei Weitem.`,
            uebung: {
              titel: 'Überzeugung identifizieren',
              anleitung: `Wähle aus deinem Innerer-Dialog-Protokoll den negativen Satz, der am häufigsten aufgetaucht ist. Das ist deine dominanteste negative Überzeugung.

Schreibe sie auf:
"Meine stärkste negative Überzeugung ist: _______________"

Frage dich:
1. Seit wann glaube ich das? (Jahre? Jahrzehnte?)
2. Von wem habe ich diesen Satz übernommen?
3. Welche Beweise sammle ich unbewusst, um diesen Glauben zu bestätigen?

Diese Überzeugung wird dein erstes "Projekt" in den kommenden Modulen. Du wirst lernen, sie Schritt für Schritt durch eine kraftvolle Affirmation zu ersetzen.`,
              dauer: '5 Min',
            },
          },
        ],
      },
      {
        nr: 2,
        titel: 'Wirksame Affirmationen formulieren',
        dauer: '30 Min',
        lektionen: [
          {
            id: 'P03-M2-L1',
            titel: 'Die 5 Regeln einer wirksamen Affirmation',
            inhalt: `Nicht jeder positive Satz ist eine wirksame Affirmation. Es gibt klare Regeln, die den Unterschied machen zwischen einem Satz, der dein Unterbewusstsein erreicht, und einem, der an der Oberfläche abprallt.

Regel 1 — Positiv formulieren: Dein Unterbewusstsein kann keine Verneinung verarbeiten. "Ich habe keine Angst" erzeugt das Bild von Angst. Stattdessen: "Ich bin mutig und vertraue mir."

Regel 2 — Präsens verwenden: Nicht "Ich werde selbstbewusst sein" (Zukunft = noch nicht real), sondern "Ich bin selbstbewusst." Das Präsens signalisiert dem Unterbewusstsein: Das ist bereits meine Realität.

Regel 3 — Persönlich und spezifisch: "Alles wird gut" ist vage. "Ich handle in meiner Arbeit mit Klarheit und Zuversicht" ist konkret und auf dich bezogen. Je spezifischer, desto wirkungsvoller.

Regel 4 — Emotional aufgeladen: Eine Affirmation, die dich kalt lässt, wirkt kaum. Sie muss etwas in dir auslösen — ein Ziehen, eine Sehnsucht, ein "Ja, das will ich sein!" Wenn du sie liest und nichts spürst, formuliere um.

Regel 5 — Glaubbar: "Ich bin Milliardär" wird bei den meisten Menschen auf inneren Widerstand stoßen. Das Unterbewusstsein erkennt die Diskrepanz und blockiert. Besser: "Mein Wohlstand wächst jeden Tag" oder "Ich bin offen für Fülle in meinem Leben." Die Affirmation darf ambitioniert sein, aber nicht so weit von deiner aktuellen Realität entfernt, dass sie unglaubwürdig wird.`,
            uebung: {
              titel: 'Regel-Check',
              anleitung: `Hier sind 5 Affirmationen. Prüfe jede gegen die 5 Regeln und korrigiere die fehlerhaften:

1. "Ich will nicht mehr so schüchtern sein."
   → Problem: ___  → Korrektur: ___

2. "Ich werde eines Tages erfolgreich."
   → Problem: ___  → Korrektur: ___

3. "Alles ist wunderbar."
   → Problem: ___  → Korrektur: ___

4. "Ich bin der reichste Mensch der Welt."
   → Problem: ___  → Korrektur: ___

5. "Ich verdiene Liebe und Respekt."
   → Problem: ___  → Korrektur: ___

Lösungshinweis: Nur Nr. 5 erfüllt alle Regeln. Die anderen brauchen jeweils eine Anpassung.`,
              dauer: '5 Min',
            },
          },
          {
            id: 'P03-M2-L2',
            titel: 'Von der negativen Überzeugung zur Affirmation',
            inhalt: `Jetzt wird es persönlich. Du nimmst die negative Überzeugung, die du in Modul 1 identifiziert hast, und verwandelst sie in eine kraftvolle Affirmation.

Der Transformationsprozess in 4 Schritten:

Schritt 1 — Die negative Überzeugung benennen:
Beispiel: "Ich bin nicht gut genug."

Schritt 2 — Den Kern identifizieren:
Was steckt dahinter? Welches Bedürfnis wird nicht erfüllt? Bei "Ich bin nicht gut genug" ist der Kern oft: Anerkennung, Zugehörigkeit, Selbstwert.

Schritt 3 — Das Gegenteil positiv formulieren:
Nicht einfach umkehren ("Ich bin gut genug" fühlt sich oft schwach an), sondern den gewünschten Zustand kraftvoll beschreiben: "Ich bin wertvoll — genau so, wie ich bin."

Schritt 4 — Emotional aufladen:
Füge ein Gefühlswort oder ein Bild hinzu: "Ich bin wertvoll und spüre meine innere Stärke in jeder Situation."

Noch einige Beispiele für die Transformation:
"Ich schaffe das nie" → "Ich wachse an jeder Herausforderung und finde meinen Weg."
"Niemand versteht mich" → "Ich drücke mich klar aus und ziehe Menschen an, die mich verstehen."
"Ich habe kein Glück" → "Gute Dinge fließen in mein Leben, weil ich offen dafür bin."

Beachte: Die neue Affirmation soll sich anfühlen wie eine Einladung — nicht wie ein Befehl. Dein Unterbewusstsein reagiert besser auf sanfte Überzeugung als auf Druck.`,
            uebung: {
              titel: 'Deine persönliche Affirmation',
              anleitung: `Nimm deine stärkste negative Überzeugung aus Modul 1 und verwandle sie jetzt:

Schritt 1 — Negative Überzeugung: "_______________"

Schritt 2 — Kern/Bedürfnis dahinter: _______________

Schritt 3 — Positiv formuliert (Präsens, persönlich, spezifisch):
"_______________"

Schritt 4 — Emotional aufgeladen:
"_______________"

Teste die finale Version gegen die 5 Regeln:
☐ Positiv? ☐ Präsens? ☐ Persönlich? ☐ Emotional? ☐ Glaubbar?

Sprich den Satz 3 Mal laut aus. Spürst du etwas? Wenn ja — du hast deine erste Affirmation. Wenn nicht — justiere, bis es sich richtig anfühlt.`,
              dauer: '5 Min',
            },
          },
          {
            id: 'P03-M2-L3',
            titel: 'Affirmationen für die 7 Lebensbereiche',
            inhalt: `Eine einzelne Affirmation kann dein Leben verändern. Aber die meisten Menschen haben in mehreren Lebensbereichen Überzeugungen, die ein Update verdienen. Hier ist ein Framework, das dir hilft, für jeden wichtigen Bereich eine passende Affirmation zu entwickeln.

Die 7 Lebensbereiche:

Selbstwert: Wie du über dich selbst denkst.
Beispiel: "Ich bin genug — mit allem, was ich bin und was ich nicht bin."

Gesundheit: Wie du deinen Körper und deine Vitalität erlebst.
Beispiel: "Mein Körper ist stark, und ich sorge jeden Tag liebevoll für ihn."

Beziehungen: Wie du Nähe, Liebe und Verbindung erlebst.
Beispiel: "Ich gebe und empfange Liebe frei und ohne Angst."

Beruf & Berufung: Wie du deine Arbeit und deinen Beitrag erlebst.
Beispiel: "Meine Arbeit ist wertvoll, und ich wachse mit jeder Aufgabe."

Finanzen: Wie du Geld und Fülle erlebst.
Beispiel: "Ich bin ein guter Verwalter meiner Ressourcen, und Fülle fließt natürlich in mein Leben."

Kreativität & Wachstum: Wie du lernst und dich entwickelst.
Beispiel: "Ich bin neugierig, offen und lerne jeden Tag dazu."

Spiritualität & Sinn: Wie du deine Verbindung zum größeren Ganzen erlebst.
Beispiel: "Ich vertraue dem Fluss des Lebens und bin geführt."

Du brauchst nicht für alle 7 Bereiche gleichzeitig zu arbeiten. Beginne mit dem, der dich am meisten beschäftigt — und erweitere nach und nach.`,
            uebung: {
              titel: 'Lebensbereich-Affirmationen',
              anleitung: `Wähle 3 der 7 Lebensbereiche, die dir gerade am wichtigsten sind. Formuliere für jeden eine persönliche Affirmation nach den 5 Regeln:

Bereich 1: _______________
Affirmation: "_______________"

Bereich 2: _______________
Affirmation: "_______________"

Bereich 3: _______________
Affirmation: "_______________"

Du hast jetzt 3–4 Affirmationen (inkl. der aus der vorherigen Übung). Das ist dein persönliches "Affirmations-Set" für die kommenden Wochen.

Tipp: Schreibe sie auf eine Karteikarte oder in die Notiz-App deines Handys — an einem Ort, den du täglich siehst.`,
              dauer: '10 Min',
            },
          },
        ],
      },
      {
        nr: 3,
        titel: 'Techniken der Verankerung',
        dauer: '35 Min',
        lektionen: [
          {
            id: 'P03-M3-L1',
            titel: 'Spiegeltechnik — Augenkontakt mit dir selbst',
            inhalt: `Die Spiegeltechnik ist eine der ältesten und wirkungsvollsten Methoden, Affirmationen zu verankern. Sie wurde in verschiedenen Formen seit Jahrhunderten praktiziert und bleibt bis heute eine der intensivsten Übungen im Affirmationstraining.

Die Grundform ist simpel: Du stehst vor einem Spiegel, schaust dir selbst in die Augen und sprichst deine Affirmation laut aus.

Was dabei passiert, ist alles andere als simpel. Der Augenkontakt mit dir selbst aktiviert Hirnareale, die mit Selbstwahrnehmung und emotionaler Verarbeitung verbunden sind. Du kannst dir selbst nicht in die Augen schauen und gleichzeitig "auschecken" — der Spiegel zwingt dich in volle Präsenz.

Für viele Menschen ist diese Übung anfangs unangenehm. Manche können sich nicht länger als wenige Sekunden in die Augen schauen. Manche fühlen Widerstand, Scham oder den Impuls, wegzuschauen. Das ist normal — und es ist wichtig. Denn genau dieser Widerstand zeigt dir, wie tief die negative Überzeugung sitzt, die du ersetzen willst.

Der Ablauf:
1. Stelle dich vor einen Spiegel, in dem du mindestens dein Gesicht sehen kannst.
2. Schaue dir selbst in die Augen — wähle ein Auge, auf das du dich fokussierst.
3. Sprich deine Affirmation laut, langsam und mit Überzeugung.
4. Halte den Augenkontakt. Atme. Wiederhole.
5. Beginne mit 2 Minuten und steigere auf 5.

Die Spiegeltechnik ist am wirkungsvollsten morgens (du setzt den Ton für den Tag) und abends (die letzte Botschaft vor dem Schlaf).`,
            uebung: {
              titel: 'Spiegel-Session',
              anleitung: `Geh jetzt zu einem Spiegel. Nimm deine stärkste Affirmation mit.

1. Stelle dich aufrecht hin. Atme 3 Mal tief.
2. Schau dir selbst in die Augen.
3. Sprich deine Affirmation laut und langsam — 5 Mal.
4. Halte dabei den Augenkontakt. Nicht wegschauen.
5. Nach dem 5. Mal: Bleib noch 10 Sekunden stehen und beobachte, was du fühlst.

Notiere danach:
• Wie hat es sich angefühlt? (leicht/schwer/emotional/seltsam?)
• Konntest du den Augenkontakt halten?
• Ab welcher Wiederholung hat sich etwas verändert?

Wenn es sich unangenehm anfühlt — gut. Das zeigt, dass du an der richtigen Stelle arbeitest.`,
              dauer: '5 Min',
            },
          },
          {
            id: 'P03-M3-L2',
            titel: 'Schreibtechnik — die Hand-Gehirn-Verbindung',
            inhalt: `Das handschriftliche Schreiben von Affirmationen ist eine unterschätzte, aber außerordentlich wirksame Technik. Der Grund liegt in der Neurowissenschaft: Handschrift aktiviert andere Hirnareale als Tippen oder Sprechen. Die motorische Komponente — jeder Buchstabe wird einzeln geformt — verlangsamt den Prozess und gibt dem Gehirn mehr Zeit, den Inhalt zu verarbeiten und zu integrieren.

Die klassische Methode:
Schreibe deine Affirmation 15–20 Mal hintereinander auf Papier. Nicht abschreiben, sondern jedes Mal bewusst neu formulieren — als würdest du den Satz zum ersten Mal denken.

Die 3-Perspektiven-Methode (fortgeschritten):
Schreibe die gleiche Affirmation in drei Perspektiven:
• Ich-Form: "Ich bin mutig und vertraue meinem Weg."
• Du-Form: "[Dein Name], du bist mutig und vertraust deinem Weg."
• Er/Sie-Form: "[Dein Name] ist mutig und vertraut seinem/ihrem Weg."

Warum drei Perspektiven? Weil negative Überzeugungen oft aus verschiedenen Quellen stammen — eigene Gedanken (Ich), Aussagen anderer über dich (Du), und gesellschaftliche Urteile (Er/Sie). Indem du in allen drei Perspektiven affirmierst, erreichst du alle Schichten.

Die Journaling-Methode:
Schreibe morgens nach dem Aufwachen 5 Minuten lang frei über deine Affirmation — nicht nur den Satz, sondern wie es sich anfühlt, wenn er wahr ist. "Ich bin mutig und vertraue meinem Weg. Das bedeutet für mich, dass ich heute..." Diese Methode verbindet die Affirmation mit konkreten Bildern und Handlungen.`,
            uebung: {
              titel: '3-Perspektiven-Schreiben',
              anleitung: `Nimm ein Blatt Papier und einen Stift. Schreibe deine Affirmation jeweils 5 Mal in jeder Perspektive:

ICH-FORM (5x):
"Ich bin/habe/kann _______________"
"Ich bin/habe/kann _______________"
(... 5 Mal)

DU-FORM (5x):
"[Dein Name], du bist/hast/kannst _______________"
(... 5 Mal)

ER/SIE-FORM (5x):
"[Dein Name] ist/hat/kann _______________"
(... 5 Mal)

Beobachte: Welche Perspektive fühlt sich am stärksten an? Welche löst den meisten Widerstand aus? Die mit dem meisten Widerstand zeigt dir, wo die tiefste Programmierung sitzt.`,
              dauer: '10 Min',
            },
          },
          {
            id: 'P03-M3-L3',
            titel: 'Körperbasierte Verankerung',
            inhalt: `Affirmationen wirken noch tiefer, wenn du deinen Körper einbeziehst. Dein Unterbewusstsein speichert Informationen nicht nur als Gedanken, sondern auch als Körpergefühle, Haltungen und Bewegungen. Körperbasierte Verankerung nutzt diese Verbindung.

Technik 1 — Power Posing + Affirmation:
Nimm eine aufrechte, raumgreifende Haltung ein — Brust offen, Schultern zurück, Kinn leicht angehoben. Diese Haltung allein verändert bereits deine Hormonspiegel (mehr Testosteron, weniger Cortisol). Sprich in dieser Haltung deine Affirmation — dein Körper bestätigt, was dein Mund sagt.

Technik 2 — Herzhand-Verankerung:
Lege eine Hand auf dein Herz, während du die Affirmation sprichst. Die Berührung aktiviert den Vagusnerv und erzeugt ein Gefühl von Sicherheit. Dein Nervensystem interpretiert: "Dieser Satz ist sicher. Dieser Satz darf bleiben."

Technik 3 — Geh-Affirmation:
Gehe spazieren und sprich bei jedem Schritt ein Wort deiner Affirmation. "Ich — bin — mutig — und — vertraue — meinem — Weg." Der Rhythmus des Gehens verankert den Satz in deiner Motorik — ähnlich wie ein Lied, das du beim Laufen hörst, danach noch stundenlang im Kopf bleibt.

Technik 4 — Atemverankerung:
Verbinde die Affirmation mit deinem Atemrhythmus. Einatmen: "Ich bin mutig." Ausatmen: "Ich vertraue meinem Weg." Der Atemrhythmus ist einer der tiefsten Rhythmen deines Körpers — was daran gekoppelt wird, wird tief verankert.

Experimentiere mit allen vier Techniken und finde heraus, welche sich für dich am natürlichsten anfühlt. Die beste Technik ist die, die du tatsächlich jeden Tag anwendest.`,
            uebung: {
              titel: 'Körper-Verankerung testen',
              anleitung: `Teste jetzt zwei der vier Techniken mit deiner persönlichen Affirmation:

Technik A — Herzhand:
1. Lege eine Hand auf dein Herz.
2. Sprich deine Affirmation 5 Mal langsam, während du den Druck der Hand auf deiner Brust spürst.
3. Intensität danach (1–10): ___

Technik B — Power Posing:
1. Stehe aufrecht, Arme in die Hüften oder über den Kopf.
2. Sprich deine Affirmation 5 Mal laut und bestimmt.
3. Intensität danach (1–10): ___

Welche Technik hat stärker gewirkt? Die wird Teil deiner täglichen Praxis.`,
              dauer: '5 Min',
            },
          },
        ],
      },
      {
        nr: 4,
        titel: 'Widerstände überwinden',
        dauer: '30 Min',
        lektionen: [
          {
            id: 'P03-M4-L1',
            titel: 'Warum Affirmationen manchmal nicht wirken',
            inhalt: `Irgendwann wird es passieren: Du sprichst deine Affirmation, und eine innere Stimme antwortet sofort mit "Das stimmt doch gar nicht" oder "Hör auf, dir etwas vorzumachen." Das ist kein Zeichen, dass Affirmationen nicht funktionieren — es ist ein Zeichen, dass sie funktionieren. Du hast gerade die Schutzmechanismen deines Unterbewusstseins aktiviert.

Dein Unterbewusstsein hat eine Kernaufgabe: dich zu schützen. Und eine seiner Strategien ist, den Status quo zu bewahren. Jede Veränderung — selbst eine positive — wird zunächst als potenzielle Bedrohung eingestuft.

Die häufigsten Widerstände und ihre Ursachen:

"Das ist doch Quatsch" — Der intellektuelle Widerstand. Dein Verstand will Beweise, bevor er etwas glaubt. Lösung: Erinnere dich an die Neuroplastizität. Du baust gerade neue neuronale Verbindungen — natürlich fühlt sich das anfangs fremd an.

"Das stimmt nicht für mich" — Der Identitätswiderstand. Die neue Affirmation passt nicht zu deinem Selbstbild. Lösung: Formuliere eine Brückenaffirmation (dazu gleich mehr).

"Es verändert sich ja nichts" — Der Ungedulds-Widerstand. Du erwartest schnelle Ergebnisse. Lösung: Neuroplastizität braucht mindestens 21 Tage für erste Veränderungen, 66 Tage für echte Gewohnheitsbildung.

"Ich fühle mich albern" — Der Scham-Widerstand. Oft verbunden mit der Überzeugung, dass man es nicht verdient hat, gut über sich zu denken. Lösung: Genau das ist die Überzeugung, die transformiert werden will.`,
            uebung: {
              titel: 'Widerstand protokollieren',
              anleitung: `Sprich deine stärkste Affirmation 5 Mal laut vor dem Spiegel. Achte dabei auf JEDE innere Reaktion, die dagegen spricht.

Schreibe jede "Gegenrede" deines inneren Kritikers auf:
• Affirmation: "Ich bin wertvoll, genau so wie ich bin."
• Innerer Kritiker sagt: "_______________"
• Innerer Kritiker sagt: "_______________"
• Innerer Kritiker sagt: "_______________"

Lies dir die Gegenreden durch. Das sind nicht deine Feinde — das sind die alten Programme, die gerade überschrieben werden. Jede Gegenrede zeigt dir exakt, welche Überzeugung noch im Weg steht.`,
              dauer: '5 Min',
            },
          },
          {
            id: 'P03-M4-L2',
            titel: 'Brückenaffirmationen',
            inhalt: `Wenn der Sprung von deiner aktuellen Überzeugung zur gewünschten Affirmation zu groß ist, brauchst du eine Brücke. Brückenaffirmationen sind Zwischenstufen, die dein Unterbewusstsein akzeptieren kann — und die dich schrittweise zum Ziel führen.

Das Prinzip der Brücke:
Statt direkt von "Ich bin ein Versager" zu "Ich bin erfolgreich" zu springen (was inneren Widerstand erzeugt), baust du Stufen:

Stufe 1 — Offenheit: "Ich bin offen für die Möglichkeit, dass ich erfolgreich sein kann."
Stufe 2 — Prozess: "Ich lerne jeden Tag dazu und werde immer besser."
Stufe 3 — Bestätigung: "Ich erlebe immer mehr Momente des Erfolgs."
Stufe 4 — Integration: "Erfolg ist ein natürlicher Teil meines Lebens."

Jede Stufe hat weniger Widerstand als die nächste. Du bleibst auf einer Stufe, bis sie sich wahr anfühlt — dann steigst du auf.

Nützliche Brücken-Formulierungen:
"Ich bin offen für..."
"Ich erlaube mir..."
"Ich lerne gerade..."
"Es wird jeden Tag leichter..."
"Ich entscheide mich für..."
"Ich bin auf dem Weg zu..."

Diese Formulierungen sind ehrlich — du bist tatsächlich offen, du erlaubst dir tatsächlich, du lernst tatsächlich. Und weil sie ehrlich sind, erzeugen sie keinen Widerstand.`,
            uebung: {
              titel: 'Brücke bauen',
              anleitung: `Nimm deine Affirmation und baue eine 4-stufige Brücke:

Deine Ziel-Affirmation: "_______________"

Stufe 1 (Offenheit):
"Ich bin offen für _______________"

Stufe 2 (Prozess):
"Ich lerne/entwickle/wachse _______________"

Stufe 3 (Bestätigung):
"Ich erlebe/bemerke/spüre _______________"

Stufe 4 (= Ziel-Affirmation):
"_______________"

Sprich alle 4 Stufen nacheinander aus. Wo fühlst du den geringsten Widerstand? Dort startest du. Wenn Stufe 3 sich gut anfühlt, beginne dort. Wenn nur Stufe 1 geht, beginne dort. Es gibt kein "zu langsam".`,
              dauer: '5 Min',
            },
          },
          {
            id: 'P03-M4-L3',
            titel: 'Emotionale Aufladung — der Turbo',
            inhalt: `Du weißt jetzt, wie du Affirmationen formulierst und wie du Widerstände überwindest. Jetzt lernst du den Faktor, der eine Affirmation von "nett" zu "transformativ" macht: emotionale Aufladung.

Dein Unterbewusstsein lernt nicht durch Worte allein — es lernt durch Gefühle. Eine Affirmation, die du mechanisch wiederholst, wie ein Mantra ohne Bedeutung, erzeugt schwache neuronale Verbindungen. Eine Affirmation, die du fühlst, während du sie sprichst, erzeugt starke Verbindungen.

Die Technik der emotionalen Aufladung:

Schritt 1: Sprich deine Affirmation und frage dich: "Wie würde es sich anfühlen, wenn das zu 100% wahr wäre?"

Schritt 2: Lasse dieses Gefühl entstehen. Nicht erzwingen — einladen. Vielleicht ist es Wärme, Leichtigkeit, Stolz, Freiheit, Geborgenheit.

Schritt 3: Halte das Gefühl und sprich die Affirmation erneut — diesmal getränkt in dieses Gefühl.

Der Unterschied ist enorm. Probiere es aus: Sage "Ich bin frei" einmal neutral und einmal, während du das Gefühl absoluter Freiheit in dir erzeugst. Zwei komplett verschiedene Erfahrungen.

Hilfsmittel für die emotionale Aufladung:
• Musik, die das gewünschte Gefühl erzeugt
• Eine Erinnerung an einen Moment, in dem die Affirmation bereits wahr war
• Visualisierung: Stelle dir eine konkrete Szene vor, in der die Affirmation Realität ist
• Dankbarkeit: Danke im Voraus für das, was die Affirmation beschreibt

Die Kombination aus klarem Wort, starkem Gefühl und regelmäßiger Wiederholung ist die Formel, die Affirmationen von einem Konzept zu einer lebensverändernden Praxis macht.`,
            uebung: {
              titel: 'Gefühlte Affirmation',
              anleitung: `Wähle deine stärkste Affirmation. Setze oder stelle dich bequem hin.

Runde 1 — Neutral:
Sprich die Affirmation 3 Mal laut, sachlich, ohne besondere Betonung.
Intensität des Gefühls (1–10): ___

Runde 2 — Mit Emotion:
Schließe die Augen. Erinnere dich an einen Moment, in dem das Gefühl hinter der Affirmation real war. Lass es aufsteigen. Wenn das Gefühl da ist — öffne die Augen und sprich die Affirmation 3 Mal, getränkt in dieses Gefühl.
Intensität des Gefühls (1–10): ___

Vergleiche die Werte. Der Unterschied zeigt dir die Kraft der emotionalen Aufladung.

Ab jetzt: Jede Affirmation wird gefühlt gesprochen. Neutral ist verboten.`,
              dauer: '5 Min',
            },
          },
        ],
      },
      {
        nr: 5,
        titel: 'Dein tägliches Ritual',
        dauer: '25 Min',
        lektionen: [
          {
            id: 'P03-M5-L1',
            titel: 'Morgenritual — den Tag programmieren',
            inhalt: `Der Morgen ist die goldene Zeit für Affirmationsarbeit. In den ersten Minuten nach dem Aufwachen befindet sich dein Gehirn noch in einem Zustand zwischen Schlaf und Wachheit — dem sogenannten Theta-Zustand. In diesem Zustand ist das Unterbewusstsein besonders empfänglich für neue Informationen.

Dein Morgenritual — 7 Minuten für einen anderen Tag:

Minute 1 — Ankommen (im Bett):
Bleib liegen. Schließe die Augen. Nimm 3 tiefe Atemzüge. Bevor ein einziger Alltagsgedanke Platz nehmen kann, sage innerlich: "Heute ist ein guter Tag. Ich bin bereit."

Minute 2–3 — Herzhand-Affirmation:
Lege eine Hand auf dein Herz. Sprich deine Kern-Affirmation 5 Mal langsam und gefühlt — innerlich oder leise.

Minute 4–5 — Visualisierung:
Stelle dir einen konkreten Moment des heutigen Tages vor, in dem deine Affirmation Realität ist. Wie sieht das aus? Wie fühlt es sich an? Mache es so lebendig wie möglich.

Minute 6 — Dankbarkeit:
Nenne 3 Dinge, für die du dankbar bist. Spüre die Dankbarkeit körperlich.

Minute 7 — Intention:
Setze eine Intention für den Tag: "Heute achte ich darauf, wie [Affirmation] sich in meinem Alltag zeigt."

Dann erst: Aufstehen, Handy checken, in den Tag starten. Diese 7 Minuten sind eine Investition, die sich den ganzen Tag lang auszahlt.`,
            uebung: {
              titel: 'Morgenritual — erster Durchlauf',
              anleitung: `Wenn du diesen Kurs morgens machst: Perfekt, führe das Ritual jetzt durch.

Wenn nicht: Plane es für morgen früh. Stelle dir einen Wecker 7 Minuten früher als gewöhnlich und führe das Ritual im Bett durch, bevor du aufstehst.

Morgenritual-Checkliste:
☐ 3 Atemzüge + "Heute ist ein guter Tag"
☐ Hand aufs Herz, Affirmation 5x
☐ Visualisierung: Ein Moment heute, in dem die Affirmation lebt
☐ 3 Dinge Dankbarkeit
☐ Tagesintention setzen

Notiere danach: Wie fühlt sich der Start in den Tag an? Unterschied zum normalen Aufstehen?

Ziel: 21 Tage am Stück. Ein Post-It am Nachttisch hilft als Erinnerung.`,
              dauer: '7 Min',
            },
          },
          {
            id: 'P03-M5-L2',
            titel: 'Abendritual — den Tag integrieren',
            inhalt: `Wenn der Morgen der Moment des Säens ist, dann ist der Abend der Moment des Gießens. Dein Unterbewusstsein verarbeitet im Schlaf, was du ihm zuletzt gegeben hast. Die letzten Gedanken vor dem Einschlafen haben überproportionalen Einfluss auf deine innere Programmierung.

Dein Abendritual — 5 Minuten für tiefe Integration:

Minute 1 — Tagesrückblick:
Wann heute hat sich deine Affirmation gezeigt? Wann warst du das, was deine Affirmation beschreibt? Suche nach Beweisen — auch kleinen.

Minute 2 — Anerkennung:
Anerkenne dich für das, was du heute getan hast. Nicht nur große Dinge — auch, dass du den Kurs machst, dass du an dir arbeitest, dass du nicht aufgibst.

Minute 3–4 — Spiegel-Affirmation:
Vor dem Spiegel, Augenkontakt, Affirmation 5 Mal. Leise, langsam, mit Liebe.

Minute 5 — Einschlaf-Programmierung:
Im Bett, Augen zu. Wiederhole deine Affirmation innerlich, immer langsamer, bis sie in den Schlaf übergeht.

Die Einschlaf-Programmierung ist besonders kraftvoll, weil dein Gehirn beim Einschlafen vom Beta- in den Alpha- und dann in den Theta-Zustand übergeht — genau die Frequenzen, in denen das Unterbewusstsein am empfänglichsten ist.`,
            uebung: {
              titel: 'Abendritual planen',
              anleitung: `Beantworte diese Planungsfragen:

1. Wo ist mein Abendspiegel? (Bad? Flur? Schlafzimmer?)
   → _______________

2. Wann genau mache ich das Ritual? (Nach dem Zähneputzen? Vorm Licht-Ausschalten?)
   → _______________

3. Was ist mein Trigger? (Der Moment, der mich automatisch ans Ritual erinnert)
   → _______________

4. Was könnte mich davon abhalten? Und wie verhindere ich das?
   → _______________

Führe heute Abend den ersten Durchlauf durch. Morgen früh: Morgenritual. Damit hast du den vollständigen Tagesrhythmus etabliert.`,
              dauer: '5 Min',
            },
          },
          {
            id: 'P03-M5-L3',
            titel: 'Mikro-Affirmationen im Alltag',
            inhalt: `Morgen- und Abendritual sind die Grundpfeiler. Aber die wahre Magie passiert zwischendurch — in den kleinen Momenten des Tages, in denen du eine bewusste Wahl triffst, wie du mit dir sprichst.

Mikro-Affirmationen sind kurze, spontane positive Selbstgespräche, die du in deinen Alltag einstreust. Sie brauchen keinen Spiegel, kein Ritual, keine besondere Umgebung. Sie brauchen nur deine Aufmerksamkeit.

Strategie 1 — Trigger-Response:
Definiere einen alltäglichen Trigger und verknüpfe ihn mit deiner Affirmation:
• Jedes Mal, wenn du eine Tür öffnest → "Ich öffne mich für neue Möglichkeiten."
• Jedes Mal, wenn du Wasser trinkst → "Ich nähre mich mit Liebe."
• Jedes Mal, wenn du in den Spiegel schaust → Ein Lächeln + "Hallo, du bist großartig."

Strategie 2 — Umformulierung:
Wenn du dich bei einem negativen Selbstgespräch ertappst, formuliere sofort um:
"Ich bin so vergesslich" → "Mein Geist ist klar, ich erinnere mich an das Wichtige."
"Das war dumm" → "Ich lerne aus jeder Erfahrung."

Strategie 3 — Umgebungsanker:
Platziere deine Affirmation an Orten, die du täglich siehst:
• Handy-Sperrbildschirm
• Post-It am Badezimmerspiegel
• Notiz im Geldbeutel
• Hintergrund deines Computers

Strategie 4 — Stille Wiederholung:
Im Wartezimmer, in der Bahn, beim Spaziergang — wiederhole deine Affirmation innerlich wie ein sanftes Mantra. Kein Druck, kein Performance-Denken. Einfach wiederholen.

Je mehr Berührungspunkte du zwischen deiner Affirmation und deinem Alltag schaffst, desto schneller wird sie zur automatischen Überzeugung.`,
            uebung: {
              titel: '3 Trigger definieren',
              anleitung: `Definiere 3 Alltags-Trigger und verknüpfe sie mit deiner Affirmation oder einer Mikro-Affirmation:

Trigger 1: Wenn ich _______________ 
→ sage ich innerlich: "_______________"

Trigger 2: Wenn ich _______________
→ sage ich innerlich: "_______________"

Trigger 3: Wenn ich _______________
→ sage ich innerlich: "_______________"

Setze alle 3 heute noch um. Der erste Trigger, den du automatisch ausführst, ohne daran denken zu müssen, ist dein Durchbruch — das bedeutet, die neue Gewohnheit hat sich verankert.`,
              dauer: '5 Min',
            },
          },
        ],
      },
      {
        nr: 6,
        titel: 'Integration & Langzeitpraxis',
        dauer: '25 Min',
        lektionen: [
          {
            id: 'P03-M6-L1',
            titel: 'Die 66-Tage-Regel',
            inhalt: `Du hast jetzt alle Werkzeuge für eine transformative Affirmationspraxis. Die große Frage ist: Wie bleibst du dran?

Forschungen der University College London haben gezeigt, dass es durchschnittlich 66 Tage dauert, bis eine neue Gewohnheit automatisch wird. Nicht 21 Tage, wie oft behauptet — 66. Das ist wichtiger als es klingt, denn die meisten Menschen geben zwischen Tag 21 und Tag 66 auf — genau dann, wenn die eigentliche Transformation gerade beginnt.

Die 4 Phasen der Gewohnheitsbildung:

Phase 1 — Honeymoon (Tag 1–7): Alles ist neu und aufregend. Die Motivation ist hoch. Genieße diese Phase.

Phase 2 — Widerstand (Tag 8–30): Die Neuheit ist verflogen, der Alltag holt dich ein. Du vergisst Tage, zweifelst. Das ist normal. Genau hier scheitern die meisten. Dein Job: Weitermachen, auch wenn es sich sinnlos anfühlt.

Phase 3 — Gewöhnung (Tag 31–50): Es wird leichter. Du vergisst seltener. Die Affirmation fühlt sich vertrauter an. Erste Veränderungen im Alltag werden sichtbar.

Phase 4 — Integration (Tag 51–66+): Die Affirmation wird zum automatischen Gedanken. Du ertappst dich dabei, sie spontan zu denken, ohne bewusste Anstrengung. Das ist der Moment der echten Transformation.

Ein versäumter Tag ist kein Grund aufzuhören. Die Regel ist nicht "66 perfekte Tage in Folge" — die Regel ist "66 Tage, in denen du es mehr tust als nicht." Rückschläge sind eingeplant.`,
            uebung: {
              titel: '66-Tage-Tracker starten',
              anleitung: `Erstelle einen simplen Tracker für deine Affirmationspraxis:

Option A — Papier: Zeichne 66 Kästchen auf ein Blatt. Hänge es dort auf, wo du es täglich siehst. Kreuze jeden Tag an, an dem du dein Morgen- ODER Abendritual gemacht hast.

Option B — Digital: Erstelle eine Notiz in deinem Handy mit 66 Zeilen. Trage jeden Tag ein Häkchen ein.

Startdatum: _______________
Tag 66 fällt auf: _______________

Dein Minimum pro Tag: Eine Affirmation, einmal gesprochen, mit Gefühl. Das zählt als Häkchen. Alles darüber hinaus ist Bonus.

Beginne HEUTE mit Tag 1.`,
              dauer: '5 Min',
            },
          },
          {
            id: 'P03-M6-L2',
            titel: 'Affirmationen weiterentwickeln',
            inhalt: `Deine Affirmationen sind nicht in Stein gemeißelt. Sie dürfen — und sollen — sich mit dir weiterentwickeln. Wenn eine Affirmation sich nicht mehr herausfordernd anfühlt, sondern wie eine Selbstverständlichkeit, dann hat sie ihren Job getan. Zeit für die nächste Stufe.

Zeichen, dass eine Affirmation "angekommen" ist:
• Du denkst sie automatisch, ohne Anstrengung
• Sie fühlt sich wahr an — nicht als Wunsch, sondern als Fakt
• Du handelst bereits danach, ohne dich daran erinnern zu müssen
• Andere Menschen bemerken die Veränderung

Was dann kommt:
Nimm dir die nächste negative Überzeugung vor. Oder formuliere die bestehende Affirmation ambitionierter. "Ich bin mutig" kann zu "Ich führe mit Mut und inspiriere andere" werden.

Der Lebensbereich-Rotation:
Ein effektiver Langzeitansatz ist die Rotation zwischen Lebensbereichen. 2–3 Monate Fokus auf Selbstwert, dann 2–3 Monate auf Beziehungen, dann Finanzen. So transformierst du systematisch alle Bereiche deines Lebens.

Affirmationen für Lebensphasen:
Manche Affirmationen sind zeitgebunden — für einen Jobwechsel, eine Trennung, eine schwierige Phase. Andere sind zeitlos — "Ich bin wertvoll" wird nie veraltet. Baue beide Typen in deine Praxis ein.`,
            uebung: {
              titel: 'Affirmations-Roadmap',
              anleitung: `Erstelle deine persönliche Affirmations-Roadmap für die nächsten 6 Monate:

Monat 1–2: Fokus-Bereich _______________
Affirmation: "_______________"

Monat 3–4: Fokus-Bereich _______________
Affirmation: "_______________"

Monat 5–6: Fokus-Bereich _______________
Affirmation: "_______________"

Für jeden Zeitraum:
• Welche negative Überzeugung wird ersetzt?
• Welche Brückenaffirmation nutze ich, falls Widerstand kommt?
• Woran erkenne ich, dass die Affirmation "angekommen" ist?

Diese Roadmap ist flexibel — passe sie an, wenn sich deine Prioritäten ändern. Aber sie gibt dir Richtung und Struktur.`,
              dauer: '10 Min',
            },
          },
          {
            id: 'P03-M6-L3',
            titel: 'Abschluss — du bist das Werkzeug',
            inhalt: `Du hast den Kurs "Affirmationstraining — Worte als Werkzeug" abgeschlossen. Lass uns zusammenfassen, was du mitgenommen hast:

In Modul 1 hast du verstanden, warum Worte wirken — die Macht der Sprache, dein innerer Dialog und die Neuroplastizität als Verbündeter. Du hast eine Bestandsaufnahme deiner negativen Überzeugungen gemacht.

In Modul 2 hast du gelernt, wirksame Affirmationen zu formulieren — die 5 Regeln, die Transformation von negativen Überzeugungen und das 7-Lebensbereiche-Framework.

In Modul 3 hast du drei Verankerungstechniken gelernt — Spiegeltechnik, Schreibtechnik und körperbasierte Verankerung. Du weißt, welche für dich am stärksten wirkt.

In Modul 4 hast du gelernt, Widerstände zu überwinden — mit Brückenaffirmationen und emotionaler Aufladung.

In Modul 5 hast du ein tägliches System etabliert — Morgenritual, Abendritual und Mikro-Affirmationen im Alltag.

In diesem Modul hast du die Langzeitperspektive — die 66-Tage-Regel und eine Roadmap für die kommenden Monate.

Das Wichtigste zum Schluss: Die Affirmation selbst ist nur ein Werkzeug. Das wahre Werkzeug bist du — dein Bewusstsein, deine Entscheidung, jeden Tag aufs Neue zu wählen, wie du mit dir sprichst. Diese Wahl hast du jetzt. Nutze sie.

Dein Weg der bewussten Sprache hat begonnen.`,
            uebung: {
              titel: 'Abschluss-Commitment',
              anleitung: `Formuliere dein persönliches Commitment — einen Satz, der zusammenfasst, was du ab heute anders machst:

"Ab heute _______________"

Beispiele:
"Ab heute spreche ich morgens und abends bewusst mit mir selbst."
"Ab heute ersetze ich jeden negativen Satz sofort durch eine Brückenaffirmation."
"Ab heute nutze ich meine Worte als Werkzeug statt als Waffe."

Sprich diesen Commitment-Satz laut aus — vor dem Spiegel, mit Hand auf dem Herzen, mit vollem Gefühl.

Dann: Starte deinen 66-Tage-Tracker. Tag 1 beginnt jetzt.

Gratulation — du hast einen Kurs abgeschlossen, der dein Verhältnis zu deiner eigenen Sprache für immer verändert hat.`,
              dauer: '5 Min',
            },
          },
        ],
      },
    ],
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

  P01,
  G01,
  K01,
  G03,
G11,
  G05,
  G08,
  P04,
  N01,
  G06,
  P06,
  S01,
  N02,
  P05,
  K02,
  G04,
  P18,
  S17,
  E01,
  G09,
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
