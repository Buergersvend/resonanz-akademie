// ═══════════════════════════════════════════════════════
// G01 — Meditation Grundlagen
// Standard-Kurs · 6 Module · 18 Lektionen · 4–6h
// Bereich: Körper-Geist-Verbindung
// ═══════════════════════════════════════════════════════

const G01 = {
  id: 'G01',
  titel: 'Meditation — Grundlagen & Praxis',
  bereich: 'psyche',
  format: 'standard',
  symbol: '◈◈',
  stunden: '4–6h',
  preis: 'Kostenlos',
  originalPreis: '89 €',
  status: 'live',
  desc: 'Der vollständige Einstieg in die Meditation — von der ersten stillen Minute bis zur stabilen täglichen Praxis. 6 Module mit verschiedenen Meditationsformen, Atemtechniken und Strategien für einen ruhigen Geist. Kein Vorwissen nötig, keine Ausrüstung, keine Dogmen.',
  module: [
    // ──────────────────────────────────────────────
    // MODUL 1 — Was Meditation wirklich ist
    // ──────────────────────────────────────────────
    {
      nr: 1,
      titel: 'Was Meditation wirklich ist',
      dauer: '25 Min',
      lektionen: [
        {
          id: 'G01-M1-L1',
          titel: 'Meditation entmystifiziert',
          inhalt: `Meditation ist keine Entspannungstechnik. Sie ist kein religiöses Ritual. Sie ist kein Versuch, den Geist leer zu machen. Und sie ist definitiv nichts, wofür du stundenlang im Lotussitz auf einem Bergipfel sitzen musst.

Meditation ist im Kern eine Sache: bewusstes Üben von Aufmerksamkeit. Du entscheidest, wohin deine Aufmerksamkeit geht — statt sie vom nächsten Gedanken, der nächsten Benachrichtigung oder dem nächsten Impuls entführen zu lassen.

Das klingt simpel, und das ist es auch. Aber simpel bedeutet nicht einfach. Dein Geist ist eine Gedankenmaschine — er produziert ununterbrochen. Schätzungen gehen von 60.000 bis 80.000 Gedanken pro Tag aus, die meisten davon unbewusst, repetitiv und nicht besonders hilfreich.

Meditation verändert dieses Verhältnis. Nicht indem du die Gedanken abschaltest — das ist weder möglich noch wünschenswert. Sondern indem du lernst, sie zu bemerken, ohne ihnen automatisch zu folgen. Du wirst zum Beobachter deines eigenen Geistes.

Stell dir vor, du sitzt am Ufer eines Flusses. Die Gedanken sind das Wasser — sie fließen vorbei. Normalerweise springst du bei jedem interessanten Gedanken ins Wasser und lässt dich mitreißen. Meditation bedeutet: am Ufer sitzen bleiben und zusehen.

Diese Fähigkeit — Gedanken wahrzunehmen ohne sich mit ihnen zu identifizieren — verändert alles. Deine Reaktionen werden bewusster. Dein Stresslevel sinkt. Deine Klarheit steigt. Und das passiert nicht nach Jahren des Übens, sondern oft schon nach wenigen Wochen regelmäßiger Praxis.`,
          uebung: {
            titel: 'Eine Minute Stille',
            anleitung: `Stelle einen Timer auf 60 Sekunden. Schließe die Augen. Deine einzige Aufgabe: Zähle, wie viele einzelne Gedanken in dieser Minute auftauchen. Nicht bewerten, nicht festhalten — nur zählen.

Nach 60 Sekunden: Wie viele waren es? Die meisten Menschen kommen auf 15–30. Das ist dein Ausgangswert. Am Ende des Kurses wiederholst du diese Übung — und wirst überrascht sein.`,
            dauer: '2 Min',
          },
        },
        {
          id: 'G01-M1-L2',
          titel: 'Was die Wissenschaft sagt',
          inhalt: `Meditation ist eine der am intensivsten erforschten Praktiken der letzten 30 Jahre. Tausende von Studien belegen messbare Veränderungen in Gehirn, Körper und Psyche — und zwar nicht bei Mönchen nach 20 Jahren Praxis, sondern bei ganz normalen Menschen nach wenigen Wochen.

Die wichtigsten Befunde:

Gehirnstruktur: Regelmäßige Meditation verdickt nachweislich den präfrontalen Cortex — den Bereich, der für Entscheidungsfindung, Impulskontrolle und emotionale Regulation zuständig ist. Gleichzeitig schrumpft die Amygdala, das Angstzentrum. Dein Gehirn wird buchstäblich umgebaut.

Stressreaktion: Meditation senkt den Cortisolspiegel, verringert die Aktivität des sympathischen Nervensystems (Kampf-oder-Flucht) und stärkt den Parasympathikus (Ruhe-und-Erholung). Chronischer Stress wird auf biologischer Ebene reduziert.

Immunsystem: Studien zeigen, dass Meditierende höhere Antikörperspiegel entwickeln und weniger krankheitsanfällig sind. Die Entzündungswerte im Blut sinken messbar.

Emotionale Gesundheit: Meta-Analysen bestätigen die Wirksamkeit bei Angststörungen, Depressionen und chronischem Stress — teilweise vergleichbar mit Medikamenten, aber ohne Nebenwirkungen.

Aufmerksamkeit und Fokus: Schon nach 4 Tagen Meditationstraining verbessert sich die Fähigkeit zur sustained attention — dem anhaltenden Fokus auf eine Aufgabe.

Das Bemerkenswerte: Diese Effekte treten nicht erst nach Jahren auf. Viele Studien zeigen signifikante Veränderungen bereits nach 8 Wochen mit 10–20 Minuten täglicher Praxis. Einige Effekte — wie die Reduktion von Angst und die Verbesserung der Stimmung — sind schon nach einer einzelnen Sitzung messbar.`,
          uebung: {
            titel: 'Dein persönlicher Baseline-Check',
            anleitung: `Bewerte dich selbst auf einer Skala von 1–10 in diesen fünf Bereichen. Schreibe die Zahlen auf — du wirst sie am Ende des Kurses erneut bewerten.

1. Innere Ruhe im Alltag: ___/10
2. Fähigkeit, mich zu konzentrieren: ___/10
3. Umgang mit Stress: ___/10
4. Schlafqualität: ___/10
5. Allgemeines Wohlbefinden: ___/10

Sei ehrlich — es gibt keine richtigen oder falschen Antworten. Dieser Baseline ist nur für dich.`,
            dauer: '3 Min',
          },
        },
        {
          id: 'G01-M1-L3',
          titel: 'Die häufigsten Missverständnisse',
          inhalt: `Bevor wir in die Praxis einsteigen, räumen wir die häufigsten Irrtümer aus dem Weg. Diese Missverständnisse sind der Grund, warum viele Menschen Meditation versuchen, frustriert aufgeben und glauben, es sei „nichts für sie".

„Ich muss meinen Geist leermachen." — Der hartnäckigste Mythos überhaupt. Dein Geist wird nie leer sein. Das Ziel ist nicht Gedankenlosigkeit, sondern Gedankenfreiheit — die Freiheit, nicht jedem Gedanken nachlaufen zu müssen.

„Ich kann nicht meditieren, weil ich zu viele Gedanken habe." — Das ist wie zu sagen „Ich kann nicht ins Fitnessstudio, weil ich zu unsportlich bin." Die vielen Gedanken sind genau der Grund, warum Meditation so wertvoll für dich ist.

„Meditation braucht viel Zeit." — 5 Minuten reichen. Wirklich. Natürlich ist mehr besser, aber 5 Minuten täglich schlagen 0 Minuten um Welten. Und sie schlagen auch 30 Minuten einmal pro Woche.

„Ich muss im Lotus sitzen." — Du kannst auf einem Stuhl sitzen, auf dem Sofa, auf dem Boden, auf einem Kissen. Du kannst sogar im Liegen meditieren (Gefahr des Einschlafens beachten) oder im Gehen. Die Haltung ist weniger wichtig als die innere Ausrichtung.

„Meditation ist esoterisch." — Meditation ist Training für deinen Geist, so wie Joggen Training für deinen Körper ist. Es gibt spirituelle Traditionen, die Meditation nutzen — aber die Praxis selbst ist so weltlich wie Zähneputzen.

„Ich habe es versucht, es funktioniert nicht bei mir." — Wahrscheinlich hast du zu viel erwartet, zu schnell aufgegeben oder keine Anleitung gehabt. Dieser Kurs gibt dir alles, was du brauchst, um es diesmal anders zu erleben.`,
          uebung: {
            titel: 'Deine Meditations-Geschichte',
            anleitung: `Beantworte kurz und ehrlich:

1. Hast du schon einmal meditiert? Wenn ja — wie war die Erfahrung?
2. Was hat dich dazu gebracht, diesen Kurs zu beginnen?
3. Was erhoffst du dir von einer regelmäßigen Meditationspraxis?

Schreibe deine Antworten auf. Sie sind dein persönliches „Warum" — und an Tagen, an denen die Motivation fehlt, wird dieses Warum dich tragen.`,
            dauer: '3 Min',
          },
        },
      ],
    },

    // ──────────────────────────────────────────────
    // MODUL 2 — Die Grundlagen der Praxis
    // ──────────────────────────────────────────────
    {
      nr: 2,
      titel: 'Die Grundlagen der Praxis',
      dauer: '30 Min',
      lektionen: [
        {
          id: 'G01-M2-L1',
          titel: 'Haltung, Ort und Zeit — Dein Setting',
          inhalt: `Ein gutes Meditationssetting ist wie ein guter Arbeitsplatz — es macht die Sache nicht automatisch erfolgreich, aber es reduziert die Hindernisse dramatisch.

Die Haltung: Aufrecht, aber nicht steif. Ob auf einem Stuhl, einem Kissen oder einer Bank — deine Wirbelsäule sollte gerade sein, als würde ein unsichtbarer Faden dich am Scheitel nach oben ziehen. Die Schultern sind entspannt, die Hände liegen auf den Oberschenkeln oder im Schoß. Das Kinn ist leicht gesenkt.

Warum aufrecht? Dein Körper und dein Geist sind verbunden. Eine aufrechte Haltung signalisiert deinem Nervensystem: wach und aufmerksam. Eine zusammengesunkene Haltung signalisiert: müde und passiv. Du willst wach UND entspannt — das ist die Balance.

Der Ort: Idealerweise immer derselbe. Dein Nervensystem lernt durch Assoziation — wenn du jeden Tag am selben Platz meditierst, wird dein Körper mit der Zeit allein durch das Hinsetzen in den Meditationsmodus wechseln. Der Ort muss nicht perfekt sein — ruhig genug, einigermaßen komfortabel, nicht zu hell.

Die Zeit: Morgens nach dem Aufwachen ist die goldene Zeit. Dein Geist ist noch ruhig, der Tag hat noch nicht angefangen dich zu bombardieren. Aber letztlich ist die beste Zeit die, die du tatsächlich einhältst. Manche meditieren in der Mittagspause, andere abends. Finde deinen Rhythmus.

Die Dauer: Starte mit 5 Minuten. Wirklich — nur 5. Wenn du denkst, du musst sofort 20 Minuten schaffen, wirst du es drei Tage tun und dann aufhören. 5 Minuten sind so kurz, dass dein innerer Widerstand nichts dagegen einwenden kann. Nach 1–2 Wochen kannst du auf 10 steigern, nach einem Monat auf 15–20.`,
          uebung: {
            titel: 'Deinen Meditationsplatz einrichten',
            anleitung: `Wähle jetzt deinen Meditationsplatz. Es muss nichts Besonderes sein — ein Stuhl, eine Ecke, ein Kissen am Boden.

Beantworte:
1. Wo werde ich meditieren? (konkreter Ort)
2. Wann? (konkrete Uhrzeit oder Trigger wie „direkt nach dem Kaffee")
3. Wie lange starte ich? (empfohlen: 5 Min)
4. Was ist mein Timer? (Handy-Wecker? App? Sanduhr?)

Gehe jetzt zu deinem gewählten Platz. Setze dich hin. Richte deine Haltung ein — aufrecht, Schultern entspannt, Hände auf den Oberschenkeln. Bleib 60 Sekunden einfach so sitzen und spüre, wie sich dieser Platz anfühlt.`,
            dauer: '3 Min',
          },
        },
        {
          id: 'G01-M2-L2',
          titel: 'Die Atemmeditation — Dein Anker',
          inhalt: `Die Atemmeditation ist die fundamentalste aller Meditationsformen. Sie ist das Fundament, auf dem alles andere aufbaut. Wenn du nur eine einzige Technik aus diesem Kurs mitnimmst, dann diese.

Das Prinzip ist radikal einfach: Du beobachtest deinen Atem. Nicht verändern, nicht steuern, nicht bewerten — einfach beobachten. Einatmen. Ausatmen. Das ist alles.

Der Atem ist der perfekte Meditationsanker, weil er drei einzigartige Eigenschaften hat. Er ist immer da — du brauchst nichts Zusätzliches. Er passiert im Jetzt — du kannst nicht den Atem von gestern beobachten. Und er verbindet Bewusstes und Unbewusstes — du kannst ihn steuern, aber er läuft auch von selbst.

Die Technik: Richte deine Aufmerksamkeit auf die Stelle, an der du deinen Atem am deutlichsten spürst. Für die meisten Menschen ist das die Nasenspitze (die kühle Luft beim Einatmen, die warme beim Ausatmen), der Brustkorb (das Heben und Senken) oder der Bauch (das Ausdehnen und Zusammenziehen). Wähle eine Stelle und bleib dabei.

Was wird passieren: Nach ein paar Atemzügen wird dein Geist abschweifen. Garantiert. Du wirst an deine To-do-Liste denken, an ein Gespräch von gestern, an das Abendessen. Das ist nicht das Problem — das IST die Übung.

Der magische Moment in der Meditation ist nicht die Stille. Es ist der Moment, in dem du MERKST, dass du abgeschweift bist. Dieses Bemerken ist ein Akt des Bewusstseins. Jedes Mal, wenn du merkst „Oh, ich bin abgeschweift" und sanft zum Atem zurückkehrst, trainierst du deinen Aufmerksamkeitsmuskel. Es ist wie ein Bizeps-Curl für deinen Geist.`,
          uebung: {
            titel: 'Atemmeditation — 5 Minuten',
            anleitung: `Setze dich an deinen Meditationsplatz. Timer auf 5 Minuten.

1. Schließe die Augen oder senke den Blick.
2. Nimm 3 tiefe Atemzüge, um anzukommen.
3. Lass den Atem dann natürlich fließen — nicht steuern.
4. Richte deine Aufmerksamkeit auf eine Stelle: Nase, Brust oder Bauch.
5. Beobachte jeden Atemzug. Einatmen... Ausatmen...
6. Wenn dein Geist abschweift: Lächle innerlich, und kehre zum Atem zurück.

Nach 5 Minuten: Öffne langsam die Augen. Nimm wahr, wie du dich fühlst.

Notiere: Wie oft bist du abgeschweift? (Schätzung reicht) Wie hat es sich angefühlt, zurückzukehren?`,
            dauer: '7 Min',
          },
        },
        {
          id: 'G01-M2-L3',
          titel: 'Umgang mit dem unruhigen Geist',
          inhalt: `Du hast gerade deine erste Atemmeditation gemacht — und wahrscheinlich festgestellt, dass dein Geist alles andere als ruhig war. Willkommen im Club. Das ist nicht dein persönliches Versagen — das ist die menschliche Erfahrung.

Der unruhige Geist, im Buddhismus „Monkey Mind" genannt, ist wie ein Affe, der von Ast zu Ast springt. Er ist rastlos, unberechenbar und liebt es, Drama zu erzeugen. Und er wird nicht ruhig, nur weil du es ihm sagst.

Die wichtigste Erkenntnis: Du musst den Affen nicht einfangen. Du musst ihn nicht beruhigen. Du musst ihm nicht mal zuhören. Du musst ihn nur SEHEN. Das bewusste Wahrnehmen des Monkey Mind ist bereits Meditation.

Hier sind die häufigsten Muster des unruhigen Geistes und wie du mit ihnen umgehst:

Der Planer: „Ich muss noch einkaufen, dann die E-Mail schreiben, und morgen..." — Erkenne: „Das ist Planen." Zurück zum Atem.

Der Kritiker: „Du machst das falsch. Du bist nicht gut in Meditation." — Erkenne: „Das ist Bewertung." Zurück zum Atem.

Der Geschichtenerzähler: „Erinnerst du dich an damals, als..." — Erkenne: „Das ist eine Geschichte." Zurück zum Atem.

Der Körpermelder: „Mein Rücken tut weh. Mein Bein schläft ein." — Erkenne die Empfindung, passe ggf. deine Haltung an, zurück zum Atem.

Das Muster ist immer dasselbe: Bemerken, benennen (optional), zurückkehren. Ohne Ärger, ohne Frustration, ohne Selbstkritik. Jedes Mal mit der gleichen Freundlichkeit, mit der du ein Kind an die Hand nimmst, das sich verlaufen hat.`,
          uebung: {
            titel: 'Gedanken-Etikettierung',
            anleitung: `Meditiere 5 Minuten mit dem Atem als Anker. Diesmal mit einer Zusatzübung: Wenn ein Gedanke auftaucht, gib ihm ein sanftes Etikett.

„Planen" — wenn du an die Zukunft denkst
„Erinnern" — wenn du an die Vergangenheit denkst
„Bewerten" — wenn du urteilst
„Sorgen" — wenn Angst aufkommt
„Fantasieren" — wenn du tagträumst

Sprich das Etikett innerlich aus, ohne Wertung, und kehre zum Atem zurück. Am Ende: Welches Etikett kam am häufigsten vor? Das zeigt dir die Lieblingsrichtung deines Monkey Mind.`,
            dauer: '7 Min',
          },
        },
      ],
    },

    // ──────────────────────────────────────────────
    // MODUL 3 — Meditationsformen entdecken
    // ──────────────────────────────────────────────
    {
      nr: 3,
      titel: 'Meditationsformen entdecken',
      dauer: '35 Min',
      lektionen: [
        {
          id: 'G01-M3-L1',
          titel: 'Body Scan — Den Körper bewusst durchfühlen',
          inhalt: `Der Body Scan ist eine der wirkungsvollsten Meditationsformen für Einsteiger. Statt dich auf den Atem zu konzentrieren, wanderst du mit deiner Aufmerksamkeit systematisch durch deinen gesamten Körper — von den Zehen bis zum Scheitel oder umgekehrt.

Warum der Body Scan so kraftvoll ist: Die meisten Menschen leben in ihrem Kopf. Sie nehmen ihren Körper nur wahr, wenn etwas wehtut. Der Body Scan stellt die Verbindung zwischen Geist und Körper wieder her — und das hat tiefgreifende Auswirkungen.

Während des Scans wirst du Bereiche finden, die angespannt sind, ohne dass du es wusstest. Stellen, die warm oder kalt sind. Regionen, die sich lebendig anfühlen, und solche, die sich taub anfühlen. All das ist Information — dein Körper spricht ständig mit dir, du hast nur verlernt zuzuhören.

Die Technik: Du beginnst an den Füßen und wanderst langsam aufwärts — Füße, Unterschenkel, Knie, Oberschenkel, Becken, Bauch, Brust, Rücken, Hände, Arme, Schultern, Nacken, Gesicht, Scheitel. Bei jedem Bereich bleibst du 3–5 Atemzüge und nimmst wahr, was da ist.

Die Kunst des Body Scans liegt im Nicht-Verändern-Wollen. Wenn du eine Verspannung findest, versuche nicht sofort, sie aufzulösen. Beobachte sie. Atme in sie hinein. Oft löst sich Spannung allein dadurch, dass sie bewusst wahrgenommen wird — ohne jedes Zutun.

Der Body Scan eignet sich hervorragend als Abendpraxis, weil er den Körper auf natürliche Weise entspannt. Er ist auch ein kraftvolles Werkzeug bei Einschlafproblemen, chronischen Schmerzen und psychosomatischen Beschwerden.`,
          uebung: {
            titel: 'Geführter Body Scan — 7 Minuten',
            anleitung: `Lege dich hin oder sitze bequem. Timer auf 7 Minuten. Schließe die Augen.

Wandere mit deiner Aufmerksamkeit durch diese 7 Stationen — je ca. 1 Minute:

1. Füße und Unterschenkel — Was spürst du? Wärme, Druck, Kribbeln?
2. Oberschenkel und Becken — Schwer oder leicht? Entspannt oder angespannt?
3. Bauch und unterer Rücken — Wie bewegt sich der Atem hier?
4. Brust und oberer Rücken — Eng oder weit?
5. Hände und Arme — Gibt es einen Unterschied links/rechts?
6. Schultern und Nacken — Wo sitzt Spannung?
7. Gesicht und Scheitel — Stirn, Kiefer, Augen — wo hältst du fest?

Am Ende: 3 tiefe Atemzüge für den ganzen Körper gleichzeitig. Notiere die Stelle mit der stärksten Empfindung.`,
            dauer: '9 Min',
          },
        },
        {
          id: 'G01-M3-L2',
          titel: 'Gehmeditation — Meditation in Bewegung',
          inhalt: `Nicht jede Meditation muss im Sitzen stattfinden. Die Gehmeditation verbindet die Achtsamkeitspraxis mit natürlicher Bewegung — und ist perfekt für Menschen, die beim Stillsitzen unruhig werden.

Das Prinzip: Du gehst langsam — deutlich langsamer als normal — und richtest deine volle Aufmerksamkeit auf den Akt des Gehens selbst. Jeder Schritt wird bewusst wahrgenommen: das Anheben des Fußes, das Vorwärtsbewegen, das Aufsetzen, die Gewichtsverlagerung.

Was du entdecken wirst: Gehen ist unglaublich komplex. Es involviert dutzende Muskeln, subtile Gewichtsverlagerungen und ein ständiges Zusammenspiel von Balance und Bewegung. All das passiert normalerweise vollständig unbewusst. In der Gehmeditation machst du es bewusst — und das verändert dein gesamtes Körpergefühl.

Die Praxis: Wähle eine kurze Strecke — 5 bis 10 Meter reichen. Du gehst hin, wendest bewusst, gehst zurück. Immer wieder. Dein Blick ist gesenkt, etwa 2 Meter vor dir auf dem Boden. Deine Hände sind ruhig — verschränkt vor dem Körper, hinter dem Rücken oder seitlich hängend.

Die Gehmeditation hat einen besonderen Vorteil: Du kannst sie in deinen Alltag integrieren, ohne zusätzliche Zeit zu brauchen. Der Weg zur Arbeit, der Gang zum Supermarkt, die Treppe im Büro — jeder Weg kann zur Meditation werden, wenn du ihn bewusst gehst.

Ein weiterer Vorteil: Gehmeditation ist besonders hilfreich bei starker Unruhe, Angst oder wenn du nach langem Sitzen eine Meditationsform brauchst, die den Körper einbezieht.`,
          uebung: {
            titel: 'Gehmeditation — 5 Minuten',
            anleitung: `Finde einen Platz, an dem du 5–10 Meter ungestört gehen kannst (Zimmer, Flur, Garten).

1. Stehe aufrecht. Spüre den Kontakt deiner Füße mit dem Boden.
2. Beginne, sehr langsam zu gehen. Halb so schnell wie normal — mindestens.
3. Spüre jeden Schritt: Anheben... Bewegen... Aufsetzen...
4. Wenn du am Ende deiner Strecke ankommst, halte inne. Atme. Wende bewusst.
5. Gehe zurück. Wiederhole 5 Minuten lang.

Beobachte: Wie fühlt sich bewusstes Gehen an im Vergleich zum automatischen Gehen? Welche Details nimmst du wahr, die dir normalerweise entgehen?`,
            dauer: '7 Min',
          },
        },
        {
          id: 'G01-M3-L3',
          titel: 'Liebende-Güte-Meditation — Das Herz öffnen',
          inhalt: `Die Liebende-Güte-Meditation (im Buddhismus „Metta" genannt) ist die vielleicht transformativste aller Meditationsformen. Während die Atemmeditation den Geist trainiert und der Body Scan den Körper erschließt, öffnet Metta das Herz.

Das Prinzip: Du sendest bewusst Wünsche des Wohlwollens — zuerst an dich selbst, dann an andere. Dabei verwendest du einfache Sätze wie: „Möge ich glücklich sein. Möge ich gesund sein. Möge ich in Frieden leben."

Die Wissenschaft dahinter ist beeindruckend: Studien zeigen, dass regelmäßige Metta-Praxis die Fähigkeit zur Empathie messbar steigert, Entzündungsmarker im Blut senkt, und sogar die Telomere — die Schutzkappen unserer Chromosomen — verlangsamt verkürzen lässt. Liebevolle Gedanken verändern buchstäblich deine Biologie.

Der Ablauf in konzentrischen Kreisen:

Kreis 1 — Du selbst: „Möge ich glücklich sein. Möge ich gesund sein. Möge ich sicher sein. Möge ich mit Leichtigkeit leben." Viele Menschen finden diesen Kreis am schwierigsten. Sich selbst Gutes zu wünschen fühlt sich oft fremd oder sogar unangemessen an. Genau deshalb ist es so wichtig.

Kreis 2 — Ein geliebter Mensch: Denke an jemanden, den du liebst, und sende die gleichen Wünsche an diese Person.

Kreis 3 — Eine neutrale Person: Jemand, den du kennst, aber keine starken Gefühle für hast — der Nachbar, die Kassiererin.

Kreis 4 — Eine schwierige Person: Jemand, mit dem du Konflikte hast. Dieser Kreis ist herausfordernd, aber transformativ.

Kreis 5 — Alle Wesen: „Mögen alle Wesen glücklich sein."

Du musst nicht alle Kreise in einer Sitzung durchgehen. Starte mit dir selbst und einem geliebten Menschen. Die anderen Kreise kommen mit der Zeit.`,
          uebung: {
            titel: 'Metta-Meditation — 5 Minuten',
            anleitung: `Setze dich bequem hin. Lege eine Hand aufs Herz, wenn es sich gut anfühlt.

Kreis 1 — Du selbst (2 Min):
Wiederhole innerlich, langsam und mit Gefühl:
„Möge ich glücklich sein."
„Möge ich gesund sein."
„Möge ich sicher sein."
„Möge ich mit Leichtigkeit leben."

Kreis 2 — Ein geliebter Mensch (2 Min):
Stelle dir diese Person vor. Wiederhole:
„Mögest du glücklich sein."
„Mögest du gesund sein."
„Mögest du sicher sein."
„Mögest du mit Leichtigkeit leben."

Abschluss (1 Min):
„Mögen alle Wesen glücklich sein."
3 tiefe Atemzüge. Augen öffnen.

Notiere: Wie hat es sich angefühlt, dir selbst Gutes zu wünschen? War es leicht oder schwer?`,
            dauer: '7 Min',
          },
        },
      ],
    },

    // ──────────────────────────────────────────────
    // MODUL 4 — Atem als Meditationswerkzeug
    // ──────────────────────────────────────────────
    {
      nr: 4,
      titel: 'Atem als Meditationswerkzeug',
      dauer: '30 Min',
      lektionen: [
        {
          id: 'G01-M4-L1',
          titel: 'Bauchatmung — Die natürliche Tiefatmung',
          inhalt: `Die meisten Erwachsenen atmen falsch — flach, in die Brust, mit angespanntem Bauch. Babys und Kleinkinder atmen natürlich in den Bauch — tief, rhythmisch, entspannt. Irgendwann haben wir das verlernt, durch Stress, durch „Bauch einziehen", durch chronische Anspannung.

Die Bauchatmung (auch Zwerchfellatmung genannt) ist keine Technik — sie ist die Rückkehr zur natürlichen Atmung. Wenn du in den Bauch atmest, senkt sich das Zwerchfell, die Lunge füllt sich vollständig, und dein Nervensystem erhält das Signal: „Alles ist sicher."

Physiologisch passiert Folgendes: Das Zwerchfell drückt beim Einatmen auf den Solarplexus-Nervenknoten (Plexus coeliacus), der direkt mit dem Vagusnerv verbunden ist. Der Vagusnerv ist der Hauptnerv des Parasympathikus — des Entspannungssystems. Tiefe Bauchatmung stimuliert also direkt dein Beruhigungssystem.

Wie du die Bauchatmung wiederlernst: Lege eine Hand auf deine Brust und eine auf deinen Bauch. Atme normal. Welche Hand bewegt sich mehr? Wenn die Brusthand sich mehr bewegt, atmest du flach. Ziel ist, dass die Bauchhand sich deutlich hebt und senkt, während die Brusthand relativ still bleibt.

Übe das Umlernen bewusst: Atme ein und lasse deinen Bauch sich nach außen wölben. Atme aus und lasse ihn sich natürlich zurückziehen. Die Brust bleibt weitgehend ruhig. Es fühlt sich anfangs seltsam an, wird aber schnell natürlich.

In der Meditation kombinierst du die Bauchatmung mit Aufmerksamkeit: Du beobachtest das Ausdehnen und Zusammenziehen des Bauches als deinen Anker — genauso wie du den Atem an der Nase beobachtet hast, nur weiter unten.`,
          uebung: {
            titel: 'Bauchatmung trainieren',
            anleitung: `Lege dich auf den Rücken — das macht die Bauchatmung am leichtesten. Lege ein Buch auf deinen Bauch.

1. Atme ein — das Buch steigt. Dein Bauch wölbt sich nach oben.
2. Atme aus — das Buch sinkt. Dein Bauch flacht ab.
3. Die Brust bewegt sich kaum.

Wiederhole 10 Atemzüge mit dem Buch. Dann entferne das Buch und mache 10 weitere Atemzüge — behalte das Gefühl bei.

Dann setze dich auf und versuche dasselbe im Sitzen. 10 Atemzüge. Beobachte: Fühlt sich die Bauchatmung im Sitzen anders an als im Liegen?

Ziel: Diese Atmung wird dein Standard — in der Meditation und im Alltag.`,
            dauer: '5 Min',
          },
        },
        {
          id: 'G01-M4-L2',
          titel: 'Zählatmung — Struktur für den unruhigen Geist',
          inhalt: `Die Zählatmung ist eine elegante Methode, deinem Geist eine Struktur zu geben, an der er sich festhalten kann. Statt nur den Atem zu beobachten (was für viele Anfänger zu formlos ist), gibst du jedem Atemzug eine Nummer.

Die einfachste Form: Zähle deine Ausatmungen von 1 bis 10. Einatmen (still), Ausatmen „eins". Einatmen (still), Ausatmen „zwei". Bei 10 angekommen, beginnst du wieder bei 1. Wenn du dich verzählst oder bei 15 landest — kein Problem. Beginne einfach wieder bei 1.

Warum funktioniert das so gut? Das Zählen gibt dem präfrontalen Cortex eine Aufgabe. Dein analytischer Verstand ist beschäftigt — und hat weniger Kapazität für das übliche Gedankenkarussell. Gleichzeitig bleibt die Aufmerksamkeit beim Atem verankert.

Die fortgeschrittene Variante: Zähle von 10 rückwärts bis 1. Das erfordert etwas mehr Konzentration und ist ein guter nächster Schritt, wenn das Vorwärtszählen zu einfach wird.

Die Meditations-Variante: Zähle 4 Sekunden ein, halte 4 Sekunden, atme 4 Sekunden aus, halte 4 Sekunden. Dieser „Box Breathing" Rhythmus (auch 4-4-4-4 genannt) wird von Spezialeinheiten und Astronauten genutzt, um unter extremem Stress ruhig zu bleiben. Er wirkt, weil er dem Nervensystem einen präzisen, vorhersagbaren Rhythmus gibt.

Die Zählatmung ist perfekt für Tage, an denen dein Monkey Mind besonders wild ist. Die Struktur gibt dir Halt — wie ein Geländer auf einer schwankenden Brücke.`,
          uebung: {
            titel: 'Zählatmung — 3 Varianten testen',
            anleitung: `Teste alle drei Varianten jeweils 2 Minuten:

Variante A — Vorwärtszählen (2 Min):
Zähle Ausatmungen von 1 bis 10, dann von vorne. Wie weit kommst du, ohne dich zu verzählen?

Variante B — Rückwärtszählen (2 Min):
Zähle Ausatmungen von 10 bis 1, dann von vorne. Spürst du den Unterschied in der Konzentration?

Variante C — Box Breathing (2 Min):
4 Sekunden ein — 4 halten — 4 aus — 4 halten. Wiederhole.

Welche Variante hat dich am meisten beruhigt? Welche hat deinen Geist am effektivsten verankert? Die Gewinner-Variante wird dein Go-to-Werkzeug für unruhige Tage.`,
            dauer: '8 Min',
          },
        },
        {
          id: 'G01-M4-L3',
          titel: 'Atembeobachtung ohne Kontrolle',
          inhalt: `Du hast jetzt mehrere Atemtechniken gelernt — Bauchatmung, Zählatmung, Box Breathing. All diese Techniken haben eines gemeinsam: Du steuerst den Atem aktiv. Jetzt kommt die Meisterklasse: den Atem beobachten, ohne ihn zu steuern.

Das klingt paradox: Wie kann ich meinen Atem beobachten, ohne ihn zu verändern? Ist nicht allein die Aufmerksamkeit eine Veränderung? Ja — und genau hier liegt die Übung. Du lernst, so leicht und unaufdringlich zu beobachten, dass dein Atem seinen natürlichen Rhythmus findet.

Stell dir vor, du beobachtest einen Schmetterling auf einer Blume. Wenn du dich zu schnell bewegst, fliegt er weg. Wenn du zu stark starrst, versteifst du dich. Die Kunst ist eine offene, sanfte, fast beiläufige Aufmerksamkeit — präsent, aber nicht kontrollierend.

In der Praxis bedeutet das: Du sitzt, du bemerkst den Atem, und du lässt ihn sein wie er ist. Manchmal tief, manchmal flach. Manchmal schnell, manchmal langsam. Manchmal kommt eine Pause — lass sie. Dein Körper weiß, wie er atmen muss. Deine Aufgabe ist nur, dabei zu sein.

Diese Form der Atemmeditation führt dich tiefer als alle Techniken, weil sie das Loslassen von Kontrolle trainiert. Und Loslassen von Kontrolle ist eine der wichtigsten Fähigkeiten, die Meditation dir schenken kann — nicht nur auf dem Kissen, sondern im Leben.

Wenn der Atem sich von selbst vertieft und verlangsamt — und das wird er — widersetze dich nicht. Wenn er flach und schnell wird — auch das ist in Ordnung. Du bist der Zeuge. Nicht der Regisseur.`,
          uebung: {
            titel: 'Stilles Beobachten — 5 Minuten',
            anleitung: `Setze dich an deinen Meditationsplatz. Timer auf 5 Minuten.

Die Anweisung ist die einfachste — und die schwierigste — dieses Kurses:

Beobachte deinen Atem. Verändere nichts. Kontrolliere nichts. Zähle nichts.

Einfach sitzen und atmen. Wenn du merkst, dass du anfängst zu steuern — lass los. Wenn der Atem stockt — lass ihn. Wenn er tief wird — lass ihn.

Dein einziger Job: Da sein. Wahrnehmen. Loslassen.

Nach 5 Minuten: Wie war diese Erfahrung verglichen mit den strukturierten Atemübungen? Leichter? Schwerer? Anders? Notiere einen Satz.`,
            dauer: '7 Min',
          },
        },
      ],
    },

    // ──────────────────────────────────────────────
    // MODUL 5 — Hindernisse & Vertiefung
    // ──────────────────────────────────────────────
    {
      nr: 5,
      titel: 'Hindernisse & Vertiefung',
      dauer: '30 Min',
      lektionen: [
        {
          id: 'G01-M5-L1',
          titel: 'Die 5 klassischen Hindernisse',
          inhalt: `Seit 2.500 Jahren beschreiben Meditationslehrer dieselben fünf Hindernisse. Sie sind so universell, dass du sie garantiert schon erlebt hast — vielleicht alle fünf in einer einzigen Sitzung.

Hindernis 1 — Verlangen: Der Wunsch, woanders zu sein, etwas anderes zu tun, etwas zu haben. „Ich könnte jetzt einen Kaffee trinken." „Wann ist die Meditation vorbei?" Lösung: Erkenne das Verlangen als Verlangen. Benenne es. „Das ist Verlangen." Zurück zum Atem.

Hindernis 2 — Widerwille: Abneigung gegen das, was ist. Körperliches Unbehagen, unangenehme Emotionen, Langeweile. „Ich hasse dieses Jucken am Rücken." Lösung: Beobachte den Widerwillen ohne ihm nachzugeben. Oft löst er sich auf, wenn du ihm Raum gibst.

Hindernis 3 — Trägheit und Schläfrigkeit: Müdigkeit, schwere Augenlider, der Wunsch zu schlafen. Lösung: Öffne die Augen leicht. Richte dich auf. Mache ein paar tiefe Atemzüge. Wenn die Müdigkeit real ist (zu wenig Schlaf), meditiere zu einer anderen Tageszeit.

Hindernis 4 — Unruhe und Sorge: Das Monkey Mind in Höchstform. Gedankenrasen, körperliche Ruhelosigkeit, Zukunftsangst. Lösung: Nutze die Zählatmung als Anker. Oder wechsle zur Gehmeditation, wenn das Sitzen unmöglich ist.

Hindernis 5 — Zweifel: „Bringt das überhaupt was?" „Ich bin nicht der Typ für Meditation." „Vielleicht mache ich es falsch." Lösung: Erkenne den Zweifel als Gedanken — nicht als Wahrheit. Erinnere dich an die Forschung. Und mache einfach weiter.

Diese Hindernisse sind nicht Zeichen deines Versagens. Sie SIND die Praxis. Jedes überwundene Hindernis stärkt deinen Geist — genau wie Gegenwind einen Drachen steigen lässt.`,
          uebung: {
            titel: 'Hindernis-Meditation',
            anleitung: `Meditiere 5 Minuten. Diesmal mit einer besonderen Aufmerksamkeit für die Hindernisse.

Jedes Mal, wenn ein Hindernis auftaucht, benenne es innerlich:
• „Verlangen" — ich will etwas anderes
• „Widerwille" — ich mag das nicht
• „Trägheit" — ich bin müde/gelangweilt
• „Unruhe" — mein Geist rast
• „Zweifel" — ich glaube, das bringt nichts

Notiere danach, welche Hindernisse aufgetaucht sind und wie du damit umgegangen bist. Welches ist dein „Lieblingshindernis" — das, welches am häufigsten kommt?`,
            dauer: '7 Min',
          },
        },
        {
          id: 'G01-M5-L2',
          titel: 'Von 5 auf 15 Minuten — Die Praxis ausweiten',
          inhalt: `Du meditierst jetzt seit einigen Tagen oder Wochen 5 Minuten. Es ist Zeit, die Dauer schrittweise zu erhöhen. Nicht weil 5 Minuten nicht genug wären — sondern weil längere Sitzungen dir Zugang zu tieferen Bewusstseinszuständen geben.

Was bei längerer Meditation passiert: In den ersten 5 Minuten beruhigt sich der oberflächliche Gedankenlärm. Zwischen 5 und 10 Minuten beginnt der Geist, sich tiefer zu entspannen — die Gedanken werden langsamer, die Abstände zwischen ihnen größer. Ab 10–15 Minuten erlebst du möglicherweise Momente von Stille, Weite oder tiefer Ruhe, die in kurzen Sitzungen selten auftreten.

Der Übergangsplan: Erhöhe deine Meditationsdauer alle 3–5 Tage um 2 Minuten. Von 5 auf 7, von 7 auf 9, von 9 auf 12, von 12 auf 15. Dieser graduelle Aufbau verhindert, dass du dich überfordern und aufgeben wirst.

Was sich ab 10 Minuten verändert: Du wirst die Hindernisse intensiver erleben — und intensiver überwinden. Du wirst Phasen haben, in denen alles fließt, und Phasen, in denen nichts zu funktionieren scheint. Beides gehört dazu. Die Magie passiert oft genau an dem Punkt, an dem du denkst „Ich halte das nicht mehr aus" — und trotzdem sitzen bleibst.

Wichtig: 15 Minuten sind kein Muss. Wenn 10 Minuten dein Sweet Spot sind, bleib dabei. Die perfekte Meditationsdauer ist die, die du regelmäßig durchhältst. 10 Minuten jeden Tag schlagen 30 Minuten dreimal pro Woche.`,
          uebung: {
            titel: 'Deine erste 10-Minuten-Sitzung',
            anleitung: `Heute machst du den Sprung auf 10 Minuten. Wähle die Technik, die dir bisher am besten lag — Atembeobachtung, Zählatmung oder Body Scan.

Timer auf 10 Minuten.

Erwarte nichts Bestimmtes. Wenn es nach 5 Minuten unruhig wird — das ist normal. Atme durch. Bleib sitzen.

Danach notiere:
1. Wie hat sich Minute 1–5 angefühlt?
2. Wie hat sich Minute 5–10 angefühlt?
3. Gab es einen spürbaren Unterschied?
4. Was war dein stärkstes Hindernis?

Wenn 10 Minuten gut liefen: Bleib diese Woche bei 10. Nächste Woche → 12. Dann 15.`,
            dauer: '12 Min',
          },
        },
        {
          id: 'G01-M5-L3',
          titel: 'Achtsamkeit im Alltag — Meditation ohne Kissen',
          inhalt: `Die formelle Meditation — das Sitzen auf dem Kissen mit Timer — ist das Training. Aber der eigentliche Spielplatz ist dein Alltag. Achtsamkeit im Alltag bedeutet, die Qualitäten, die du in der Meditation trainierst (Präsenz, Beobachtung, Nicht-Reaktivität) in dein tägliches Leben zu tragen.

Die Idee: Jede Aktivität kann zur Meditation werden, wenn du sie mit voller Aufmerksamkeit ausführst. Zähneputzen, Abwaschen, Treppensteigen, Essen, Autofahren — all das sind Gelegenheiten, präsent zu sein statt im Autopilot zu funktionieren.

Praktische Achtsamkeitsübungen für den Alltag:

Achtsames Essen: Beim nächsten Essen die ersten drei Bissen mit voller Aufmerksamkeit. Wie sieht das Essen aus? Wie riecht es? Wie fühlt es sich im Mund an? Wie schmeckt es — wirklich? Die meisten Menschen schmecken ihr Essen gar nicht, weil sie beim Essen fernsehen, scrollen oder arbeiten.

Achtsames Zuhören: Im nächsten Gespräch — höre wirklich zu. Nicht um zu antworten, nicht um zu bewerten, nicht um deine Meinung vorzubereiten. Einfach zuhören. Beobachte, wie schwer das ist.

Achtsame Übergänge: Die Momente zwischen Aktivitäten — vom Schreibtisch aufstehen, vom Auto zur Tür gehen, vom Arbeits- in den Feierabendmodus wechseln — nutze diese Übergänge für drei bewusste Atemzüge.

Achtsames Warten: Jede Warteschlange, jede rote Ampel, jeder langsame Computer wird zur Mini-Meditation. Statt ungeduldig zu werden, nutze die Zeit für Atembeobachtung.

Das Schöne an Alltagsachtsamkeit: Du brauchst keine zusätzliche Zeit. Du verwandelst Zeit, die du sowieso verbringst, in Übungszeit.`,
          uebung: {
            titel: '3 Achtsamkeitsanker für morgen',
            anleitung: `Wähle 3 alltägliche Aktivitäten, die du morgen achtsam ausführen wirst:

1. Morgens: _______________ (z.B. erste Tasse Kaffee bewusst trinken)
2. Mittags: _______________ (z.B. 3 Bissen achtsam essen)
3. Abends: _______________ (z.B. achtsam Zähne putzen)

Schreibe dir eine Erinnerung (Post-It, Handy-Alarm). Abends beantworte: Habe ich es geschafft? Was habe ich bemerkt, das mir sonst entgeht?

Die Achtsamkeitsanker sind der Übergang von „ich meditiere" zu „ich lebe achtsam." Das ist das eigentliche Ziel.`,
            dauer: '3 Min',
          },
        },
      ],
    },

    // ──────────────────────────────────────────────
    // MODUL 6 — Deine nachhaltige Praxis
    // ──────────────────────────────────────────────
    {
      nr: 6,
      titel: 'Deine nachhaltige Praxis',
      dauer: '25 Min',
      lektionen: [
        {
          id: 'G01-M6-L1',
          titel: 'Gewohnheit aufbauen — Die 30-Tage-Struktur',
          inhalt: `Du hast jetzt alle Werkzeuge. Du kennst verschiedene Meditationsformen, Atemtechniken und Alltagsanker. Die entscheidende Frage ist nicht mehr „Was soll ich tun?" sondern „Wie bleibe ich dran?"

Forschung zur Gewohnheitsbildung zeigt: Der wichtigste Faktor ist nicht Willenskraft, sondern Struktur. Willenskraft ist eine begrenzte Ressource — sie aufzubrauchen ist ein Verliererspiel. Struktur hingegen funktioniert auf Autopilot.

Die 30-Tage-Struktur für deine Meditationspraxis:

Woche 1 — Fundament legen: 5 Minuten täglich, immer zur selben Zeit, am selben Ort. Nur Atemmeditation. Ziel: Die Gewohnheit verankern, nicht die Technik perfektionieren.

Woche 2 — Erkunden: 7 Minuten täglich. Wechsle zwischen Atemmeditation und Body Scan. Finde heraus, was sich für dich natürlicher anfühlt.

Woche 3 — Vertiefen: 10 Minuten täglich. Experimentiere mit Gehmeditation oder Metta. Füge einen Achtsamkeitsanker im Alltag hinzu.

Woche 4 — Stabilisieren: 10–15 Minuten täglich. Nutze die Technik, die dir am meisten gibt. Dein Morgenritual steht.

Zwei Regeln, die alles einfacher machen:

Die Niemals-Null-Regel: An Tagen, an denen nichts geht — krank, verreist, verschlafen — machst du mindestens 1 Minute. Ein Atemzug. Nur damit die Kette nicht reißt.

Die Keine-Perfektion-Regel: Eine unruhige Meditation, in der du 50 Mal abgeschweift bist, ist besser als keine Meditation. Es gibt keine schlechte Meditation — es gibt nur Meditation und keine Meditation.`,
          uebung: {
            titel: 'Deinen 30-Tage-Plan erstellen',
            anleitung: `Fülle jetzt deinen persönlichen 30-Tage-Plan aus:

Woche 1 (Tag 1–7):
• Technik: Atemmeditation
• Dauer: 5 Min
• Uhrzeit: ___
• Ort: ___

Woche 2 (Tag 8–14):
• Technik: Atemmeditation + Body Scan (abwechselnd)
• Dauer: 7 Min

Woche 3 (Tag 15–21):
• Technik: Deine Wahl + 1 Alltagsanker
• Dauer: 10 Min

Woche 4 (Tag 22–30):
• Technik: Dein persönlicher Mix
• Dauer: 10–15 Min

Startdatum: ___
Tag 30 fällt auf: ___

Erstelle einen einfachen Tracker (30 Kästchen auf Papier) und beginne HEUTE mit Tag 1.`,
            dauer: '5 Min',
          },
        },
        {
          id: 'G01-M6-L2',
          titel: 'Dein persönlicher Meditationsstil',
          inhalt: `Es gibt keinen „richtigen" Meditationsstil — es gibt nur deinen. In diesem Kurs hast du verschiedene Formen kennengelernt, und inzwischen hast du wahrscheinlich ein Gefühl dafür, was bei dir am besten funktioniert.

Hier ist eine Orientierungshilfe:

Wenn du ein Kopfmensch bist — ständig am Denken, Analysieren, Planen: Die Atemmeditation oder Zählatmung ist wahrscheinlich dein bester Anker. Sie gibt deinem analytischen Verstand genug Struktur, um zur Ruhe zu kommen.

Wenn du ein Körpermensch bist — du erlebst die Welt über Empfindungen, Bewegung, physisches Spüren: Der Body Scan und die Gehmeditation sind deine Stärke. Sie nutzen deinen natürlichen Zugang zum Körper als Meditationstür.

Wenn du ein Herzmensch bist — Beziehungen sind zentral, du fühlst viel, Empathie ist deine Superkraft: Die Metta-Meditation ist wie für dich gemacht. Sie nutzt deine emotionale Tiefe als Sprungbrett.

Wenn du ein unruhiger Geist bist — Stillsitzen ist Folter, du brauchst Action: Gehmeditation und Achtsamkeit im Alltag sind dein Weg. Du kannst auch dynamische Formen wie achtsames Yoga oder Tai Chi erkunden.

Die beste Strategie: Habe eine Hauptpraxis (deine „Brot-und-Butter-Meditation") und 1–2 Varianten für besondere Tage. Zum Beispiel: Morgens Atemmeditation (Hauptpraxis), abends Body Scan (wenn der Tag anstrengend war), Metta (wenn du emotional aufgeladen bist).

Lass deine Praxis sich mit dir entwickeln. Was heute funktioniert, muss nicht in einem Jahr noch dein Ding sein. Meditation ist lebendig — sie wächst mit dir.`,
          uebung: {
            titel: 'Dein Meditations-Profil',
            anleitung: `Bewerte jede Technik, die du in diesem Kurs gelernt hast, auf einer Skala von 1–10 (wie gut hat sie für mich funktioniert?):

• Atemmeditation (Nase/Bauch): ___/10
• Body Scan: ___/10
• Gehmeditation: ___/10
• Metta-Meditation: ___/10
• Zählatmung: ___/10
• Box Breathing: ___/10
• Stilles Beobachten: ___/10

Deine Top 1 = Hauptpraxis: ___
Deine Top 2 = Variante für besondere Tage: ___

Ab jetzt hast du ein klares Meditationsprofil — kein Raten mehr, kein Ausprobieren aus Unsicherheit. Du weißt, was funktioniert.`,
            dauer: '5 Min',
          },
        },
        {
          id: 'G01-M6-L3',
          titel: 'Abschluss — Dein stiller Raum',
          inhalt: `Du hast den Kurs „Meditation — Grundlagen & Praxis" abgeschlossen. Lass uns zusammenfassen, was du jetzt besitzt.

In Modul 1 hast du verstanden, was Meditation wirklich ist — bewusstes Üben von Aufmerksamkeit, wissenschaftlich fundiert und für jeden zugänglich.

In Modul 2 hast du die Grundlagen gemeistert — deinen Platz eingerichtet, die Atemmeditation gelernt und den Umgang mit dem unruhigen Geist.

In Modul 3 hast du drei verschiedene Meditationsformen entdeckt — Body Scan, Gehmeditation und Liebende-Güte-Meditation.

In Modul 4 hast du den Atem als Werkzeug vertieft — Bauchatmung, Zählatmung und das stille Beobachten ohne Kontrolle.

In Modul 5 hast du die klassischen Hindernisse kennengelernt, deine Praxis auf 10–15 Minuten ausgeweitet und Achtsamkeit in den Alltag gebracht.

In diesem Modul hast du deinen persönlichen Meditationsstil gefunden und einen 30-Tage-Plan erstellt.

Das Wertvollste, was du aus diesem Kurs mitnimmst, ist kein Wissen — es ist eine Erfahrung. Die Erfahrung, dass in dir ein stiller Raum existiert, der immer da ist, egal was draußen passiert. Du musst ihn nicht erschaffen. Du musst ihn nur besuchen.

Dieser stille Raum wartet auf dich — morgens auf deinem Kissen, mittags in einem bewussten Atemzug, abends im Moment bevor du einschläfst. Er wird größer, je öfter du kommst.

Dein Weg der Stille hat begonnen.`,
          uebung: {
            titel: 'Abschluss-Meditation & Baseline-Vergleich',
            anleitung: `Zum Abschluss: Meditiere 10 Minuten mit deiner Lieblingstechnik.

Danach bewerte dich erneut in den fünf Bereichen von Modul 1:

1. Innere Ruhe im Alltag: ___/10 (vorher: ___)
2. Fähigkeit, mich zu konzentrieren: ___/10 (vorher: ___)
3. Umgang mit Stress: ___/10 (vorher: ___)
4. Schlafqualität: ___/10 (vorher: ___)
5. Allgemeines Wohlbefinden: ___/10 (vorher: ___)

Und wiederhole die 60-Sekunden-Übung: Zähle deine Gedanken in 1 Minute.
Vorher: ___ Gedanken. Jetzt: ___ Gedanken.

Vergleiche. Staune. Und dann: Weiter üben.`,
            dauer: '15 Min',
          },
        },
      ],
    },
  ],
}

export default G01
