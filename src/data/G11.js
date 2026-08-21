// ============================================
// G11 - Schutzarbeit & Energiehygiene
// Standard-Kurs · 6 Module · 18 Lektionen · 6-8h
// Bereich: Schutz & Erdung
// Neubau 16./17.08.2026 nach KURS_ERZEUGUNGSAUFTRAG v3.2
// ============================================

const G11 = {
  id: 'G11',
  titel: 'Schutzarbeit & Energiehygiene',
  bereich: 'schutz',
  format: 'standard',
  symbol: '◈◈',
  stunden: '6-8h',
  level: 'Einsteiger',
  preis: 'Kostenlos',
  status: 'coming',
  voraussetzungen: 'Keine Vorkenntnisse. Die Übungen ab Modul 4 sind nicht geeignet bei Herz-Kreislauf-Erkrankungen, Bluthochdruck, Epilepsie, Asthma, Glaukom, Schwangerschaft, akuter psychischer Belastung, frischen Operationen oder Fieber. Modul 1-3 sind uneingeschränkt lesbar.',
  beschreibung: 'Ein Selbsterfahrungskurs zur eigenen Wahrnehmung: den eigenen Zustand bemerken, benennen und von Zuschreibungen unterscheiden. Mit einem eigenen Modul zu Grenzen und Sicherheit. Kein Ersatz für ärztliche oder therapeutische Abklärung.',
  module: [
    // ------------------------------------------
    // MODUL 1 - Grundverständnis
    // ------------------------------------------
    {
      nr: 1,
      titel: 'Grundverständnis',
      dauer: '55 Min',
      lektionen: [
        {
          id: 'G11-M1-L1',
          titel: 'Was mit Schutzarbeit gemeint ist',
          inhalt: 'Der Begriff „Schutz" trägt in diesem Kurs eine genaue Bedeutung, und es lohnt sich, sie am Anfang festzulegen — weil er im Alltag oft anders verwendet wird.\n\nGemeint ist die Fähigkeit, zwischen dem eigenen Erleben und dem Erleben anderer zu unterscheiden. Wer aus einem langen Gespräch geht und sich anders fühlt als vorher, hat etwas wahrgenommen. Die Frage, um die es hier geht, ist nicht, *ob* das passiert — sondern ob man im Nachhinein sagen kann, was davon die eigene Reaktion war und was die Situation.\n\nDiese Unterscheidung ist erlernbar. Sie besteht aus drei Teilen: bemerken, dass sich etwas verändert hat; benennen, was genau; und einordnen, woher es kommt. Die meisten Menschen können den ersten Teil bereits und überspringen die beiden anderen.\n\nEin Beispiel für die drei Teile im Zusammenhang. Jemand bemerkt am späten Nachmittag, dass er gereizter ist als sonst — das ist **bemerken**. Beim Nachfragen zeigt sich: Es ist keine allgemeine Gereiztheit, sondern eine Ungeduld bei Nachfragen, die sonst nicht stört — das ist **benennen**. Und beim Zurückgehen fällt auf, dass die letzten drei Stunden aus lauter kurzen Unterbrechungen bestanden — das ist **einordnen**.\n\nOhne den zweiten und dritten Schritt bleibt es bei einem allgemeinen Eindruck von schlechter Verfassung. Das ist nicht falsch, aber es führt zu nichts. Mit ihnen steht am Ende eine Beobachtung, mit der sich etwas anfangen lässt.\n\n**Ein Hinweis zur Sprache, der für den ganzen Kurs gilt.** Begriffe wie „Energie", „Feld" oder „Aufladung" werden hier als **Bilder** verwendet, nicht als physikalische Beschreibungen. Sie sind nützlich, weil sie einem Erleben eine Sprache geben, für das der Alltag wenig Worte hat. Sie sind keine Aussage darüber, was messbar geschieht. Wo dieser Kurs ein solches Bild benutzt, steht es als Bild — nicht als Beleg.\n\nDas ist keine Einschränkung, sondern eine Präzisierung. Ein Bild, das als Bild verstanden wird, lässt sich prüfen: Passt es auf das, was ich erlebe? Ein Bild, das für eine Tatsache gehalten wird, lässt sich nicht mehr prüfen — und wird dadurch unbrauchbar.\n\nDiese Unterscheidung wird im ganzen Kurs durchgehalten. Wo ein Bild auftaucht, steht dabei, dass es eines ist. Das mag anfangs umständlich wirken. Es ist der Unterschied zwischen einer Sprache, die trägt, und einer, die nur überzeugt.'
        },
        {
          id: 'G11-M1-L2',
          titel: 'Wahrnehmung und Zuschreibung',
          inhalt: 'Zwischen dem, was jemand wahrnimmt, und dem, was er sich daraus erklärt, liegt ein Schritt. Er läuft meist so schnell ab, dass er unbemerkt bleibt.\n\nEin Beispiel. Jemand sitzt zwei Stunden in einer Besprechung und ist danach erschöpft. Das ist die **Wahrnehmung**: Erschöpfung, jetzt, nach dieser Situation. Der nächste Satz lautet oft: „Die Person mir gegenüber hat mir Energie gezogen." Das ist die **Zuschreibung** — eine Erklärung, die über das Wahrgenommene hinausgeht.\n\nDie Zuschreibung mag sich stimmig anfühlen. Sie ist trotzdem etwas anderes als die Beobachtung. Und sie ist nicht die einzige mögliche: Zwei Stunden Konzentration ermüden. Ein ungelöster Konflikt ermüdet. Ein schlecht gelüfteter Raum ermüdet. Schlafmangel vom Vortag wirkt bis in den Nachmittag.\n\nBemerkenswert ist, wie ungleich diese Erklärungen behandelt werden. Der Hinweis auf zwei Stunden Konzentration klingt banal und wird deshalb selten ausgesprochen. Der Satz über entzogene Energie klingt bedeutsam und wird erinnert. Die Erklärung, die sich interessanter anfühlt, setzt sich durch — nicht die, die besser passt.\n\nDas ist kein Vorwurf an irgendjemanden. Es ist die normale Arbeitsweise von Erinnerung: Sie bevorzugt, was sich als Geschichte erzählen lässt.\n\nWarum das wichtig ist: Wer die Zuschreibung für die Beobachtung hält, kommt zu Maßnahmen, die am Eigentlichen vorbeigehen. Wer glaubt, ein Kollege ziehe Energie, baut Abstand auf — und übersieht, dass die Besprechungen zu lang sind.\n\nDie Übung dieser Lektion ändert daran nichts grundsätzlich. Sie fügt nur einen Moment ein, bevor die Geschichte fertig ist.\n\n**Die Übung dieser Lektion besteht aus einem Satz.** Wenn Sie das nächste Mal bemerken, dass sich Ihr Zustand verändert hat, formulieren Sie zuerst nur die Beobachtung: *Was genau nehme ich wahr, seit wann, in welcher Situation?* Die Erklärung darf danach kommen — aber getrennt, als zweiter Satz, erkennbar als Vermutung.\n\nDas ist unspektakulär und wirkt schnell selbstverständlich. In der Anwendung ist es die schwierigste Übung des Kurses, weil die Zuschreibung immer schneller ist als die Beobachtung.'
        },
        {
          id: 'G11-M1-L3',
          titel: 'Wofür dieser Kurs nicht zuständig ist',
          inhalt: 'Ein Kurs, der über Erschöpfung, Belastung und Abgrenzung spricht, berührt Bereiche, in denen andere zuständig sind. Diese Grenze gehört an den Anfang, nicht ans Ende.\n\nAnhaltende Erschöpfung, Schlafstörungen, wiederkehrende Schmerzen, Beklemmung oder das Gefühl, den Alltag nicht mehr zu bewältigen, sind **keine Themen dieses Kurses**. Sie haben Ursachen, die abgeklärt gehören — und die Abklärung ist eine fachliche, keine übende Tätigkeit.\n\n> **Bei körperlichen oder gesundheitlichen Beschwerden gehört die Abklärung zu Arzt, Heilpraktiker oder Therapeut.**\n\nDieser Satz ist keine Formalie. Er markiert eine Grenze, die in beide Richtungen wirkt: Was dieser Kurs anbietet, ersetzt keine Abklärung — und eine laufende Behandlung wird durch nichts hier Beschriebenes ergänzt, verändert oder unterstützt.\n\nWarum das ausdrücklich dasteht: Erschöpfung und Unruhe sind Zustände, die viele Ursachen haben können — von der Schilddrüse über Eisenmangel bis zu einer Belastung, die ausgesprochen gehört. Ein Kurs kann das nicht auseinanderhalten und soll es nicht versuchen. Wer die Abklärung aufschiebt, weil er zuerst etwas anderes probiert, verliert Zeit an der einzigen Stelle, an der Zeit zählt.\n\nWas der Kurs dagegen kann: Er hilft, genauer zu beschreiben, was Sie erleben. Das ist auch für ein ärztliches Gespräch nützlich. Die Angabe, es trete seit sechs Wochen morgens auf und hänge nicht vom Schlaf ab, ist eine andere Auskunft als die Feststellung, es gehe einem nicht gut.\n\nWas der Kurs leistet: Er vermittelt Unterscheidungen und Übungen zur Selbstwahrnehmung. Das ist Selbsterfahrung und Wissen. Es ist keine Ausbildung, keine Qualifikation und keine Befähigung, mit anderen Menschen in dieser Weise zu arbeiten.\n\n**Und eine Anmerkung zum Üben selbst.** Wenn eine Übung in diesem Kurs unangenehm wird, ist das kein Zwischenschritt und kein Zeichen, dass sie wirkt. Es ist ein Grund aufzuhören. Aussetzen ist jederzeit möglich, ohne dass etwas verloren geht — die Lektionen bauen inhaltlich aufeinander auf, nicht als Übungsserie, die einen Durchhaltebogen verlangt. Wer eine Übung überspringt, kann die nächste Lektion vollständig verstehen.'
        }
      ]
    },
    // ------------------------------------------
    // MODUL 2 - Wahrnehmung
    // ------------------------------------------
    {
      nr: 2,
      titel: 'Wahrnehmung',
      dauer: '55 Min',
      lektionen: [
        {
          id: 'G11-M2-L1',
          titel: 'Die eigene Grundlinie kennen',
          inhalt: 'Um zu bemerken, dass sich etwas verändert hat, braucht es einen Vergleichswert. Genau der fehlt den meisten — nicht aus Unachtsamkeit, sondern weil der eigene Normalzustand selten Anlass gibt, hinzusehen.\n\nDas lässt sich nachholen. Nicht durch Beobachtung in belastenden Momenten, sondern im Gegenteil: an unauffälligen Tagen, in ruhigen Stunden. Was gemeint ist, sind einfache Angaben. Wie ist die Spannung in Schultern und Kiefer, wenn nichts Besonderes ansteht? Wie schnell komme ich morgens in Gang? Wie lange halte ich Konzentration, bevor sie nachlässt? Wie ist meine Stimmung an einem Tag ohne besondere Ereignisse — nicht gut, nicht schlecht, sondern *wie*?\n\nDiese Angaben sind unspektakulär, und das ist ihr Wert. Sie sind der Maßstab, gegen den später verglichen wird. Ohne sie bleibt jede Aussage über Veränderung ungenau: „Ich fühle mich anders als sonst" setzt voraus, dass „sonst" bekannt ist.\n\nEin zweiter Punkt gehört dazu. Die Grundlinie ist nicht konstant. Sie verschiebt sich mit Schlaf, Jahreszeit, Lebensphase, Alter. Wer sie einmal bestimmt und für dauerhaft hält, vergleicht irgendwann gegen einen Wert, den es nicht mehr gibt. Zwei- bis dreimal im Jahr neu hinsehen genügt.\n\nPraktisch heißt das: Notieren Sie die Angaben einmal, an drei ruhigen Tagen, und schreiben Sie das Datum dazu. Drei Tage deshalb, weil ein einzelner Tag zufällig sein kann. Was Sie erhalten, sind keine Messwerte, sondern ein Eindruck in Worten — und der genügt vollständig.\n\n**Und eine Abgrenzung, die hierher gehört.** Wenn beim Hinsehen auffällt, dass der eigene Normalzustand seit längerem von Erschöpfung, Schwere oder Antriebslosigkeit geprägt ist, dann ist das kein Ausgangspunkt für Übungen. Es ist ein Befund, der abgeklärt gehört. **Bei körperlichen oder gesundheitlichen Beschwerden gehört die Abklärung zu Arzt, Heilpraktiker oder Therapeut.** Der Kurs arbeitet mit Schwankungen um eine tragfähige Grundlinie — nicht mit einer Grundlinie, die selbst das Problem ist.'
        },
        {
          id: 'G11-M2-L2',
          titel: 'Vier Quellen für Zustandsveränderungen',
          inhalt: 'Wenn sich der eigene Zustand verändert, gibt es mehr Erklärungen als die naheliegende. Vier Gruppen lassen sich unterscheiden — nicht als vollständige Liste, sondern als Prüfreihe, die man durchgeht, bevor man sich festlegt.\n\n**Körperliche Faktoren.** Schlaf, Essen, Trinken, Bewegung, Raumluft, Licht, Zyklus, beginnender Infekt. Die banalste Gruppe und die am häufigsten übersehene, weil sie nichts erklärt, was interessant klingt.\n\nEin Beispiel, das häufiger zutrifft als vermutet: zu wenig getrunken. Die Wirkung setzt schleichend ein und äußert sich als Konzentrationsabfall und dumpfer Kopf — Zeichen, die selten dem Trinken zugeordnet werden, weil kein Durstgefühl dazwischenliegt.\n\n**Aufgabenbezogene Faktoren.** Dauer und Art der Anforderung. Konzentration ermüdet. Entscheidungen ermüden stärker als Ausführung. Unklare Aufgaben ermüden stärker als schwere.\n\n**Zwischenmenschliche Faktoren.** Ungelöste Spannungen, unausgesprochene Erwartungen, Rollen, in denen man sich anders verhält als sonst. Wirkt oft zeitversetzt und wird deshalb der falschen Situation zugeordnet.\n\nDer Zeitversatz ist hier das Tückische. Ein Gespräch am Vormittag kann am Nachmittag wirken, und dann wird die Nachmittagssituation beschuldigt.\n\n**Situative Faktoren.** Lärm, Enge, Gerüche, unvertraute Umgebung, viele Menschen auf wenig Raum. Wirkt unterhalb der Aufmerksamkeitsschwelle und summiert sich.\n\nDer Nutzen dieser Einteilung liegt nicht darin, die richtige Gruppe zu finden — meist wirken mehrere zusammen. Er liegt darin, die Frage offenzuhalten. Wer alle vier durchgeht, kommt zu genaueren Antworten als jemand, der bei der ersten plausiblen Erklärung stehenbleibt.\n\nEine Beobachtung, die dabei hilft: Wenn mehrere Faktoren zusammenkommen, addieren sie sich nicht einfach. Zwei kleine Belastungen gleichzeitig wirken oft stärker als eine große — vermutlich, weil keine davon groß genug ist, um bemerkt und behandelt zu werden. Genau deshalb lohnt das Durchgehen aller vier: Nicht die große Ursache wird gesucht, sondern die Summe der kleinen.\n\n**Zur Übung:** Notieren Sie beim nächsten deutlichen Zustandswechsel zu jeder der vier Gruppen einen Satz. Auch dann, wenn eine Gruppe offensichtlich nichts beiträgt — gerade das Ausschließen macht das Ergebnis belastbar.'
        },
        {
          id: 'G11-M2-L3',
          titel: 'Was Wahrnehmung nicht leistet',
          inhalt: 'Wahrnehmung ist ein Instrument mit bekannten Grenzen. Wer sie kennt, arbeitet genauer.\n\n**Sie ist nicht neutral.** Was erwartet wird, wird eher bemerkt. Wer eine Begegnung als anstrengend erwartet, registriert Anzeichen von Anstrengung stärker — und übersieht die entlastenden. Das ist keine Schwäche, sondern die normale Arbeitsweise von Aufmerksamkeit.\n\nDas lässt sich abmildern, nicht abstellen. Wer die eigene Erwartung vor einer Situation kurz benennt, erkennt sie hinterher im Ergebnis wieder — und kann sie herausrechnen.\n\n**Sie unterscheidet nicht zwischen innen und außen.** Ein flaues Gefühl fühlt sich gleich an, ob es von Hunger, Nervosität oder einer unangenehmen Situation kommt. Die Zuordnung ist immer eine Deutung, nie Teil der Wahrnehmung selbst.\n\n**Sie erlaubt keine Aussage über andere.** Was jemand in Gegenwart einer anderen Person wahrnimmt, ist eine Information über den eigenen Zustand in dieser Situation. Sie sagt nichts darüber, wie es der anderen Person geht, was sie beabsichtigt oder wie sie beschaffen ist. Diese Grenze ist die wichtigste des ganzen Kurses: Der Schritt von „ich fühle mich in ihrer Nähe unwohl" zu „sie zieht mir Energie" ist keine Verfeinerung der Wahrnehmung, sondern eine Behauptung über einen Menschen, die aus dem eigenen Empfinden nicht folgt.\n\nDieser Schritt ist so verbreitet, dass er unauffällig geworden ist. Man hört ihn in beiläufigen Formulierungen über Menschen, die angeblich Energie ziehen oder vor denen man sich schützen müsse — Sätze, die wie Beobachtungen klingen und Urteile sind.\n\n**Und sie ersetzt keine Abklärung.** Wiederkehrende körperliche Zeichen — Schmerz, Schwindel, Herzklopfen, Atemenge — sind keine Wahrnehmungsphänomene, an denen geübt wird. **Bei körperlichen oder gesundheitlichen Beschwerden gehört die Abklärung zu Arzt, Heilpraktiker oder Therapeut.**\n\nWas bleibt, ist trotzdem viel: eine geschulte Selbstwahrnehmung zeigt früher an, dass etwas kippt. Früher heißt: solange noch Handlungsspielraum besteht. Das ist der praktische Ertrag — nicht Deutungssicherheit, sondern Vorlaufzeit.'
        }
      ]
    },
    // ------------------------------------------
    // MODUL 3 - Grenzen & Sicherheit
    // ------------------------------------------
    {
      nr: 3,
      titel: 'Grenzen & Sicherheit',
      dauer: '55 Min',
      lektionen: [
        {
          id: 'G11-M3-L1',
          titel: 'Wann nicht geübt wird',
          inhalt: 'Die Übungen ab Modul 4 arbeiten mit Atmung, Körperwahrnehmung und Aufmerksamkeitslenkung. Das klingt harmlos und ist es meistens auch. Es gibt aber Situationen, in denen genau diese Übungen ungeeignet sind — und die gehören benannt, bevor geübt wird.\n\n**Nicht angewendet wird bei:**\n\n- **Herz-Kreislauf-Erkrankungen, Bluthochdruck oder nach kurz zurückliegenden Herzereignissen.** Atemübungen verändern Kreislaufparameter.\n- **Epilepsie oder Krampfanfällen in der Vorgeschichte.** Veränderte Atmung kann ein Auslöser sein.\n- **Asthma oder akuten Atemwegserkrankungen.** Bewusste Atemsteuerung kann Enge verstärken statt lösen.\n- **Schwangerschaft.** Nicht wegen besonderer Gefahr, sondern weil Kreislaufreaktionen anders ausfallen und individuell einzuschätzen sind.\n- **Glaukom.** Druckverändernde Atemtechniken sind hier nicht angezeigt.\n- **Akuter psychischer Belastung, kurz zurückliegender Traumatisierung, dissoziativen Zuständen.** Nach innen gerichtete Aufmerksamkeit kann belastendes Material verstärken.\n- **Frischen Operationen, akuten Entzündungen, Fieber.** Der Körper ist mit anderem beschäftigt.\n\nZwei Hinweise zum Umgang mit dieser Liste. Erstens: Sie ist nicht vollständig und kann es nicht sein. Wenn eine Erkrankung vorliegt, die hier nicht steht, heißt das nicht, dass die Übungen unbedenklich sind — es heißt, dass die Frage nicht durch eine Liste zu beantworten ist. Zweitens: Vergangenheit zählt. Eine Epilepsie, die seit Jahren keine Anfälle mehr zeigt, gehört trotzdem in diese Kategorie.\n\nDiese Liste ist kein Ausschluss von Personen und keine Bewertung. Sie sagt: **Diese Übungen sind für diese Lagen nicht das richtige Mittel.** Wer betroffen ist, kann den Kurs vollständig lesen und die Unterscheidungen aus Modul 1 bis 3 uneingeschränkt nutzen — sie verlangen nichts vom Körper.\n\nDas ist ausdrücklich so gebaut. Die Unterscheidungen aus Modul 1 und 2 sind der Kern dieses Kurses, und sie kosten den Körper nichts. Wer nur diesen Teil nutzt, hat nicht die halbe Sache, sondern die tragende.\n\n**Bei körperlichen oder gesundheitlichen Beschwerden gehört die Abklärung zu Arzt, Heilpraktiker oder Therapeut.** Wenn Sie unsicher sind, ob einer der Punkte auf Sie zutrifft, ist das die Stelle, an der die Frage hingehört — nicht in eine Selbsteinschätzung anhand einer Kursliste.'
        },
        {
          id: 'G11-M3-L2',
          titel: 'Abbruchzeichen',
          inhalt: '„Achten Sie auf Ihren Körper" ist ein nutzloser Satz. Er sagt nicht, worauf. Deshalb hier konkret:\n\n**Sofort abbrechen bei:**\n\n- **Schmerz oder Druck im Brustkorb**, auch leicht, auch wenn er wieder nachlässt\n- **Atemnot** oder dem Gefühl, nicht durchzukommen\n- **Schwindel mit Schwarzwerden vor den Augen**\n- **Herzrasen oder Herzstolpern**, das sich neu anfühlt\n- **Ohnmachtsgefühl**, Kaltschweißigkeit\n- **Kribbeln in Händen, Füßen oder um den Mund**, Muskelverkrampfung — Zeichen von Überatmung\n- **Plötzlichem, starkem Kopfschmerz**\n- **Übelkeit**, die während der Übung entsteht\n\n**Ebenso abbrechen bei:**\n\n- **Aufsteigender Angst** oder Beklemmung\n- **Dem Gefühl, neben sich zu stehen**, den Körper nicht zu spüren, die Umgebung als unwirklich zu erleben\n- **Aufkommenden belastenden Erinnerungen**\n- **Weinen, das sich nicht wie Erleichterung anfühlt**\n\nWarum zwei getrennte Listen. Die erste betrifft Kreislauf und Atmung, die zweite die Verarbeitung. Beide sind gleich ernst zu nehmen, aber die zweite wird häufiger übergangen — weil Angst oder Weinen sich weniger nach einem Grund zum Aufhören anfühlen als Brustschmerz. Sie sind es genauso.\n\nAbbrechen heißt: aufhören, Augen öffnen, aufsetzen oder aufstehen, ruhig weiteratmen, sich im Raum umsehen und drei Dinge benennen, die man sieht. Trinken. Wenn möglich, jemanden ansprechen.\n\n**Ein Abbruch ist kein misslungener Versuch.** Er ist die Übung, die funktioniert hat — die Wahrnehmung hat gemeldet, und Sie haben gehandelt. Genau das ist der Zweck von allem, was in Modul 1 und 2 steht.\n\nEin Zusatz zum Umfeld: Wenn Sie wissen, dass Sie zu solchen Reaktionen neigen, üben Sie nicht allein in einer Wohnung, in der niemand erreichbar ist. Das ist keine Dramatisierung — es ist dieselbe Vorsicht, die man beim Schwimmen anwendet.\n\nWenn ein Abbruchzeichen auftritt, wird die Übung **nicht am nächsten Tag erneut versucht**, um zu sehen, ob es diesmal geht. Sie wird ausgesetzt, und die Ursache wird geklärt. Bei körperlichen Zeichen ärztlich, bei den zweiten vier Punkten mit fachlicher Begleitung.'
        },
        {
          id: 'G11-M3-L3',
          titel: 'Wer zuständig ist',
          inhalt: 'Ein Kurs kann Unterscheidungen vermitteln. Er kann nicht einschätzen, was bei einem einzelnen Menschen los ist — und er ist nicht erreichbar, wenn es darauf ankommt.\n\n**Bei akuter Gefahr, Bewusstlosigkeit, Atemnot, Verdacht auf Herzinfarkt oder Schlaganfall: 112.** Ohne Abwägung, ohne vorher zu prüfen, ob es „schlimm genug" ist.\n\n**Bei ärztlichen Fragen außerhalb der Sprechzeiten: 116 117**, der ärztliche Bereitschaftsdienst.\n\n**Bei seelischer Not, in Krisen, bei Gedanken, die Angst machen:** Die Telefonseelsorge ist rund um die Uhr, kostenfrei und anonym erreichbar unter **0800 111 0 111** und **0800 111 0 222**. Auch dann, wenn sich die Lage nicht dramatisch genug anfühlt, um anzurufen — gerade dann.\n\nEine Anmerkung, weil sie erfahrungsgemäß nötig ist: Diese Nummern sind nicht erst für den Fall gedacht, in dem etwas eindeutig schwerwiegend ist. Sie sind für Unsicherheit. Der Anruf, bei dem sich herausstellt, dass nichts weiter ist, ist kein Fehlalarm — er ist genau der Zweck.\n\n**Bei anhaltenden Beschwerden:** Hausärztin oder Hausarzt als erste Stelle. **Bei körperlichen oder gesundheitlichen Beschwerden gehört die Abklärung zu Arzt, Heilpraktiker oder Therapeut.**\n\nUnd eine Grenze, die diesen Kurs betrifft: Was hier vermittelt wird, ist **Selbsterfahrung und Wissen**. Es ist keine Ausbildung, keine Qualifikation und keine Befähigung, mit anderen Menschen in dieser Weise zu arbeiten. Wer die Übungen für sich nutzt, tut das im eigenen Erleben. Wer sie bei anderen anwenden möchte, bewegt sich in einem Bereich, für den es Berufsbilder mit eigenen Zulassungen gibt — und dieser Kurs führt nicht dorthin.\n\nDer Unterschied liegt nicht im Können, sondern in der Verantwortung. Wer mit anderen arbeitet, muss einschätzen, was er auslöst, und dafür einstehen. Diese Einschätzung ist Gegenstand einer Ausbildung — sie entsteht nicht dadurch, dass man Übungen an sich selbst kennt.\n\nNichts in diesem Kurs ergänzt, unterstützt oder verändert eine laufende ärztliche oder therapeutische Behandlung. Wenn Sie in Behandlung sind und unsicher sind, ob eine Übung passt, fragen Sie dort. Die Antwort dort gilt, nicht die hier.'
        }
      ]
    },
    // ------------------------------------------
    // MODUL 4 - Übungspraxis
    // ------------------------------------------
    {
      nr: 4,
      titel: 'Übungspraxis',
      dauer: '60 Min',
      lektionen: [
        {
          id: 'G11-M4-L1',
          titel: 'Die Grundübung: Zustand feststellen',
          inhalt: 'Die erste Übung ist keine Technik, sondern eine Bestandsaufnahme. Sie dauert zwei Minuten und ist die Voraussetzung für alles Weitere — ohne sie üben Sie ins Blaue.\n\n**Bevor Sie beginnen:** Die Übungen dieses Moduls sind nicht geeignet, wenn einer der Punkte aus Modul 3, Lektion 1 auf Sie zutrifft. Die Abbruchzeichen aus Modul 3, Lektion 2 gelten für jede Übung in diesem Modul — insbesondere Druck im Brustkorb, Atemnot, Schwindel mit Schwarzwerden vor den Augen und aufsteigende Angst. Bei einem dieser Zeichen wird sofort abgebrochen, nicht abgewartet.\n\n**Die Übung.** Setzen Sie sich hin, Füße auf dem Boden. Augen offen oder geschlossen, wie es angenehmer ist. Atmen Sie normal weiter — nichts wird verändert.\n\nGehen Sie drei Bereiche durch und benennen Sie innerlich, was Sie vorfinden:\n\n**Körper** — wo ist Spannung, wo ist Weite? Kiefer, Schultern, Bauch, Hände. Nicht bewerten, nur feststellen.\n\n**Atem** — kurz oder lang, oben in der Brust oder unten im Bauch, gleichmäßig oder stockend? Wieder: nur feststellen, nicht korrigieren.\n\n**Stimmung** — welches Wort trifft es am besten? Ein Wort genügt. Wenn keines passt, ist auch das eine Auskunft.\n\nDas war die ganze Übung. Zwei Minuten, drei Angaben.\n\n**Warum sie zuerst kommt.** Alles, was danach folgt, setzt voraus, dass Sie Ihren Zustand kennen — sonst wissen Sie hinterher nicht, ob sich etwas verändert hat. Und sie ist die einzige Übung, die auch dann funktioniert, wenn Sie sich schlecht fühlen: Sie verlangt keine Veränderung, nur Auskunft.\n\nWer nur diese eine Übung mitnimmt und die übrigen nicht, hat den praktisch wertvollsten Teil des Kurses. Das ist nicht als Trost gemeint, sondern als Einordnung.'
        },
        {
          id: 'G11-M4-L2',
          titel: 'Atem als Anker',
          inhalt: 'Diese Übung arbeitet mit dem Atem — und deshalb gilt hier die Sicherheitsvorgabe am strengsten.\n\n**Nicht geeignet bei:** allen Ausschlüssen aus Modul 3, Lektion 1, ohne Ausnahme. Für diese Übung wiegen davon Asthma und akute Atemwegserkrankungen, Herz-Kreislauf-Erkrankungen, Bluthochdruck, Epilepsie, Glaukom und Schwangerschaft besonders, weil hier die Atmung verändert wird — die übrigen Punkte gelten deshalb nicht weniger. Und wie dort gesagt: Die Liste ist nicht vollständig und kann es nicht sein.\n\n**Abbruchzeichen für diese Übung besonders:** Kribbeln in Händen, Füßen oder um den Mund und Muskelverkrampfung — das sind Zeichen von Überatmung und bedeuten sofort aufhören, normal weiteratmen. Ebenso Atemnot, Schwindel oder das Gefühl, nicht durchzukommen.\n\n**Die Übung.** Atmen Sie normal. Zählen Sie beim Einatmen mit, wie weit Sie kommen — vielleicht drei, vielleicht vier. Zählen Sie beim Ausatmen ebenso. Das ist Ihre Ausgangslänge, und sie wird **nicht** verändert.\n\nDann, für sechs bis acht Atemzüge: Lassen Sie das Ausatmen ein wenig länger werden als das Einatmen. Ein Zählschritt genügt. Wenn Sie bei vier ein- und vier ausatmen, werden es vier und fünf. Nicht mehr.\n\nDanach lassen Sie den Atem wieder von selbst laufen und stellen fest, ob sich etwas verändert hat — mit den drei Angaben aus Lektion 1.\n\nWarum ausgerechnet die Ausatmung. Ein längeres Ausatmen ist die einzige Veränderung, die den Atem ruhiger macht, ohne ihn zu verkrampfen — jede Vertiefung der Einatmung führt in die Gegenrichtung. Das ist der Grund, warum diese Übung nichts hinzufügt, sondern nur eine Seite geringfügig verschiebt.\n\n**Zwei Hinweise, die zur Übung gehören.** Erstens: Wenn das Zählen anstrengt oder das Verlängern sich erzwungen anfühlt, ist die Übung an dieser Stelle vorbei. Erzwungenes Atmen ist das Gegenteil dessen, was gemeint ist. Zweitens: Wenn sich nichts verändert, ist das kein Fehler und kein Zeichen von irgendetwas. Es ist eine Beobachtung.\n\nSechs bis acht Atemzüge sind bewusst wenig. Wer daraus zwanzig macht, weil es „besser wirken soll", verlässt den Rahmen, für den diese Übung beschrieben ist.\n\nWenn Sie die Übung mehrmals über den Tag nutzen wollen, spricht aus Sicht dieses Kurses nichts dagegen — eine Zusage über Ihre persönliche Verträglichkeit ist das nicht, und die Punkte aus Modul 3, Lektion 1 gelten für jede einzelne Anwendung — mehrere kurze Anwendungen sind etwas anderes als eine lange. Was nicht gemeint ist: eine feste Anzahl pro Tag, an der Sie sich messen.'
        },
        {
          id: 'G11-M4-L3',
          titel: 'Grenzen setzen im Kontakt',
          inhalt: 'Diese Übung verlangt nichts vom Körper. Die körperlichen Ausschlüsse aus Modul 3, Lektion 1 greifen hier deshalb nicht — Kreislauf, Atmung und Augendruck sind nicht beteiligt.\n\n**Die übrigen Ausschlüsse gelten sehr wohl.** Bei akuter psychischer Belastung, kurz zurückliegender Traumatisierung oder dissoziativen Zuständen ist diese Übung nicht angezeigt. Sie richtet die Aufmerksamkeit auf eine belastende Begegnung — genau der Vorgang, der für diese Lagen ausgeschlossen wurde. **Bei körperlichen oder gesundheitlichen Beschwerden gehört die Abklärung zu Arzt, Heilpraktiker oder Therapeut.**\n\nDie Abbruchzeichen aus Modul 3, Lektion 2 gelten unverändert: Wenn beim Durchdenken einer Situation aufsteigende Angst, belastende Erinnerungen oder das Gefühl entsteht, neben sich zu stehen, wird abgebrochen — das ist kein Übungswiderstand, sondern ein Signal.\n\n**Die Übung besteht aus drei Fragen zu einer konkreten, bereits vergangenen Begegnung.** Nicht zur schwierigsten, die Ihnen einfällt — zu einer mittleren.\n\n**Erstens: Was genau war anstrengend?** Nicht „die Person", sondern was sie tat oder was die Situation verlangte. Lange Dauer? Ein Thema, das Sie nichts angeht? Die Erwartung, eine bestimmte Rolle einzunehmen?\n\n**Zweitens: Was davon lag in Ihrem Einfluss?** Hätten Sie früher gehen können? Eine Frage stellen? Ein Thema wechseln? Manches liegt nicht in Ihrem Einfluss — das festzustellen ist genauso nützlich.\n\n**Drittens: Was würde beim nächsten Mal einen Unterschied machen?** Ein Satz, ein Zeitlimit, ein anderer Ort. Eine einzige konkrete Sache, nicht ein Vorsatz.\n\n**Und dann, wenn Sie mögen: ein Wort dafür.** In Modul 1 stand, dass Bilder nützlich sind, weil sie einem Erleben Sprache geben. Hier ist die Stelle, an der sich das auszahlt. Drei Wörter, die viele Menschen für das Muster brauchbar finden, das sie bei sich entdecken:\n\n**Durchlässig** — Situationen, in denen Sie alles aufnehmen, was ankommt, ohne zu wählen.\n**Abgeschottet** — Situationen, in denen Sie nichts durchlassen, auch das nicht, was Sie gebraucht hätten.\n**Gefiltert** — Situationen, in denen Sie gewählt haben, bewusst oder aus Gewohnheit.\n\nDiese Wörter sind Beschreibungen, keine Zustände. Sie sagen nichts darüber, was mit Ihnen geschieht — sie fassen zusammen, was Sie in Frage eins bis drei über Ihre eigenen Entscheidungen herausgefunden haben. Ein Bild ist ein Griff für eine Erkenntnis, kein Ersatz für sie.\n\n**Warum das hierher gehört.** Was umgangssprachlich „Abgrenzung" heißt, besteht in der Praxis fast nie aus einer inneren Haltung, sondern aus Entscheidungen: früher gehen, nicht antworten, einen Termin nicht annehmen. Die innere Arbeit hilft, diese Entscheidungen zu erkennen. Sie ersetzt sie nicht.\n\nUnd die Grenze aus Modul 2 gilt weiter: Das Ergebnis dieser Übung ist eine Aussage über Ihre Situation und Ihre Möglichkeiten — nicht über den anderen Menschen.'
        }
      ]
    },
    // ------------------------------------------
    // MODUL 5 - Alltag & Umfeld
    // ------------------------------------------
    {
      nr: 5,
      titel: 'Alltag & Umfeld',
      dauer: '55 Min',
      lektionen: [
        {
          id: 'G11-M5-L1',
          titel: 'Wiederkehrende Situationen erkennen',
          inhalt: 'Bis hierher ging es um einzelne Begegnungen. Der größere Ertrag liegt aber im Muster: Die meisten Menschen haben nicht dreißig belastende Situationen, sondern drei Typen, die dreißigmal vorkommen.\n\n**Die Übung ist eine Bestandsaufnahme über eine Woche.** Notieren Sie jeden Abend in einem Satz, welche Situation an diesem Tag Zustand gekostet hat. Nur eine, die deutlichste. Kein Tagebuch, keine Auswertung — nur die Zeile.\n\nNach sieben Tagen lesen Sie die sieben Zeilen hintereinander. Fast immer zeigen sich zwei oder drei Muster: dieselbe Tageszeit, dieselbe Art von Anforderung, dieselbe Konstellation von Menschen.\n\n**Das ist der Punkt, an dem sich das Vokabular aus Modul 4 auszahlt.** Zu jedem Muster passt meist eines der drei Wörter. Wo waren Sie **durchlässig** — haben aufgenommen, was ankam, ohne zu wählen? Wo **abgeschottet** — haben auch das nicht durchgelassen, was Sie gebraucht hätten? Wo **gefiltert**?\n\nEin praktischer Hinweis zur Woche: Schreiben Sie die Zeile am selben Abend, nicht am Wochenende aus dem Gedächtnis. Rückblickend gleichen sich Tage an, und die Unterschiede — auf die es hier ankommt — verschwinden zuerst.\n\nDas dritte ist das interessanteste. Situationen, in denen es gut lief, werden selten untersucht. Dabei steht dort, was funktioniert — und das lässt sich übertragen.\n\n**Wenn nichts erkennbar wird**, ist die Woche nicht umsonst gewesen. Es heißt, dass Ihre Belastung situativ ist und nicht strukturell. Das ist eine brauchbare Auskunft, keine gescheiterte Übung.\n\nUnd eine zweite Möglichkeit, die häufiger vorkommt, als man denkt: Es zeigt sich ein Muster, das Sie längst kennen und bisher hingenommen haben. Auch das ist ein Ergebnis. Der Unterschied zu vorher ist, dass es jetzt aufgeschrieben dasteht — und Aufgeschriebenes lässt sich schlechter beiseiteschieben als ein Eindruck.\n\nUnd wenn sich beim Lesen der sieben Zeilen zeigt, dass jeder Tag belastend war, ohne erkennbares Muster: Dann ist die Frage größer als dieser Kurs. **Bei körperlichen oder gesundheitlichen Beschwerden gehört die Abklärung zu Arzt, Heilpraktiker oder Therapeut.**'
        },
        {
          id: 'G11-M5-L2',
          titel: 'Räume, Rhythmus, Übergänge',
          inhalt: 'Umgebungen wirken, und sie wirken unterhalb der Aufmerksamkeit. Das ist der Grund, warum sie so oft übersehen werden: Was man nicht bemerkt, schreibt man keinem Faktor zu.\n\n**Drei Ansatzpunkte, in der Reihenfolge ihres Ertrags:**\n\n**Übergänge.** Der Wechsel zwischen zwei Situationen ist die Stelle mit dem größten Hebel und dem geringsten Aufwand. Zwei Minuten zwischen Besprechung und Schreibtisch, ein kurzer Gang, ein Glas Wasser — nicht als Ritual, sondern als Unterbrechung. Ohne Übergang läuft die eine Situation in die nächste hinein, und am Abend ist unklar, woher die Erschöpfung stammt.\n\nKonkret genügen zwei Minuten mit einer klaren Zäsur — aufstehen, den Raum wechseln, etwas trinken. Entscheidend ist der Wechsel, nicht die Dauer.\n\n**Räume.** Licht, Luft, Lautstärke, Sitzposition, Blickrichtung. Das sind Stellschrauben, die niemand für erwähnenswert hält und die messbar wirken. Wer den ganzen Tag mit dem Rücken zur Tür sitzt, hat eine Restaufmerksamkeit gebunden, die woanders fehlt.\n\nPrüfen Sie eines davon eine Woche lang, statt alles zu ändern. Wer das Licht wechselt und gleichzeitig die Sitzposition, weiß hinterher nicht, was gewirkt hat.\n\n**Rhythmus.** Wann sind Sie aufnahmefähig, wann nicht? Anspruchsvolle Gespräche in die aufnahmefähige Zeit zu legen ist wirksamer als jede Technik danach.\n\nDer Rhythmus ist zugleich der Punkt mit dem geringsten Spielraum. Wer fremdbestimmte Termine hat, kann die aufnahmefähige Zeit nicht frei belegen. Dann verschiebt sich die Frage: Nicht welche Zeit die beste wäre, sondern welcher der Termine überhaupt verschiebbar ist. Meist ist es genau einer — und der reicht.\n\n**Zur Umsetzung:** Nehmen Sie **eine** Sache aus dieser Liste. Nicht drei. Die häufigste Ursache dafür, dass nichts davon bleibt, ist der Versuch, alles gleichzeitig zu ändern.\n\nUnd was die Umgebung nicht leistet: Sie ersetzt keine Entscheidung. Ein besserer Raum macht ein Gespräch nicht überflüssig, das geführt werden muss.'
        },
        {
          id: 'G11-M5-L3',
          titel: 'Was mit anderen Menschen zu tun hat — und was nicht',
          inhalt: 'Der häufigste Fehlschluss in diesem Themenfeld betrifft andere. Er ist so verbreitet, dass er eine eigene Lektion verdient.\n\nEr lautet: Wenn ich mich in Gegenwart einer bestimmten Person regelmäßig schlechter fühle, dann liegt es an dieser Person.\n\n**Das kann stimmen. Es folgt aber nicht.** Aus Modul 2: Wahrnehmung sagt etwas über den eigenen Zustand in einer Situation — nicht über den anderen Menschen. Regelmäßigkeit ändert daran nichts, sie macht nur die Zuschreibung überzeugender.\n\nWas tatsächlich folgt, ist begrenzter und praktisch nützlicher: **In dieser Konstellation läuft etwas, das Sie Zustand kostet.** Die Konstellation umfasst beide Seiten, den Rahmen, die Rollen, die Vorgeschichte. Wo darin die Ursache sitzt, ist mit Selbstwahrnehmung nicht zu klären.\n\n**Warum die Unterscheidung nicht bloß akademisch ist.** Wer eine Person als Ursache festlegt, hat nur zwei Handlungsoptionen: Abstand oder Konfrontation. Wer bei der Konstellation bleibt, hat mehr: die Dauer verkürzen, den Rahmen ändern, ein Thema aussparen, eine dritte Person hinzuziehen, etwas ansprechen. Meist wirkt eine davon, und keine verlangt ein Urteil über einen Menschen.\n\n**Und die Grenze in die andere Richtung.** Nichts aus diesem Kurs erlaubt eine Aussage darüber, wie es einem anderen Menschen geht, was er beabsichtigt oder was er „aussendet". Wer solche Aussagen trifft, verlässt den Bereich der Selbstwahrnehmung. Dieser Kurs vermittelt **Selbsterfahrung und Wissen** — keine Ausbildung, keine Qualifikation und keine Befähigung, mit anderen Menschen in dieser Weise zu arbeiten.\n\nDas gilt auch für gut Gemeintes. Jemandem zu sagen, er trage etwas Belastendes bei sich, ist eine Zuschreibung über einen Menschen — unabhängig davon, wie freundlich sie formuliert ist.'
        }
      ]
    },
    // ------------------------------------------
    // MODUL 6 - Einordnung
    // ------------------------------------------
    {
      nr: 6,
      titel: 'Einordnung',
      dauer: '55 Min',
      lektionen: [
        {
          id: 'G11-M6-L1',
          titel: 'Was dieser Kurs vermittelt hat',
          inhalt: 'Ein Rückblick, der nicht wiederholt, sondern zusammenfasst, was tatsächlich in der Hand liegt.\n\n**Eine Unterscheidung.** Zwischen Wahrnehmung und Zuschreibung. Sie ist der Kern von allem Übrigen und die Übung, die am längsten braucht, weil die Zuschreibung immer schneller ist.\n\n**Ein Vergleichsmaßstab.** Die eigene Grundlinie. Ohne sie ist jede Aussage über Veränderung ungenau.\n\n**Ein Prüfraster.** Vier Quellen für Zustandsveränderungen — körperlich, aufgabenbezogen, zwischenmenschlich, situativ. Der Nutzen liegt nicht im Finden der richtigen Gruppe, sondern im Offenhalten der Frage.\n\n**Drei Grenzen.** Wahrnehmung ist nicht neutral, unterscheidet nicht zwischen innen und außen, und erlaubt keine Aussage über andere.\n\n**Eine Sicherheitsstruktur.** Wann nicht geübt wird, woran ein Abbruch erkennbar ist, wer zuständig ist.\n\n**Drei Übungen.** Zustand feststellen, Ausatem verlängern, drei Fragen zu einer Begegnung.\n\n**Ein Vokabular.** Durchlässig, abgeschottet, gefiltert — als Griff für eine Erkenntnis, nicht als Ersatz für sie.\n\nWenn Sie prüfen wollen, was davon tatsächlich sitzt, gibt es einen einfachen Test. Nehmen Sie eine Situation aus den letzten Tagen und gehen Sie sie durch: Was habe ich wahrgenommen, was habe ich daraus gemacht, und welche der vier Quellen habe ich geprüft? Wo Sie ins Stocken geraten, liegt die Stelle, an der es sich lohnt, noch einmal nachzulesen.\n\nDiese sieben Punkte sind bewusst wenige. Ein Kurs, der zwanzig Dinge vermittelt, hinterlässt keine — weil nichts davon greifbar bleibt.\n\nDas ist weniger, als der Umfang des Kurses vermuten lässt, und mehr, als es klingt. Der größte Teil des Textes bestand aus Abgrenzungen — aus dem, was **nicht** gefolgert werden darf. Das ist kein Beiwerk. Wer die Unterscheidungen kennt, aber die Grenzen nicht, kommt zu selbstsicheren Fehlschlüssen.\n\nDas ist auch der Grund, warum dieser Kurs an mehreren Stellen dieselbe Grenze wiederholt. Nicht aus Vorsicht gegenüber Ihnen, sondern weil eine Grenze, die nur einmal am Anfang steht, im Moment der Anwendung nicht da ist.'
        },
        {
          id: 'G11-M6-L2',
          titel: 'Was das Modell leistet und was nicht',
          inhalt: 'Dieser Kurs arbeitet mit einer Denkfigur: dass man den eigenen Zustand beobachten, benennen und teilweise beeinflussen kann. Diese Figur hat Reichweite und sie hat Grenzen.\n\n**Was sie leistet.** Sie schafft Abstand zwischen Reiz und Reaktion. Wer bemerkt, dass sich etwas verändert, bevor es sich auswirkt, hat Handlungsspielraum. Das ist der praktische Ertrag: nicht Deutungssicherheit, sondern Vorlaufzeit.\n\n**Was sie nicht leistet.** Sie erklärt nicht, warum etwas geschieht. Sie kann eine Ursache nicht bestimmen. Sie ersetzt weder Diagnostik noch Behandlung noch die Entscheidung, etwas im eigenen Leben zu ändern.\n\nDiese Aufzählung ist nicht als Einschränkung gemeint, sondern als Zuständigkeitsbeschreibung. Ein Werkzeug, das alles könnte, wäre bei nichts verlässlich. Der Wert dieser Denkfigur liegt gerade darin, dass ihr Anwendungsbereich klein und dafür belastbar ist.\n\n**Und ein Punkt, der zur Redlichkeit gehört.** Die Sprache dieses Feldes — Energie, Feld, Durchlässigkeit — ist Bildsprache. Sie ist nützlich, weil sie Erlebtes greifbar macht. Sie ist kein Nachweis, dass ein solches Feld existiert, und dieser Kurs behauptet das an keiner Stelle. Wer die Bilder für Tatsachen hält, verliert die Fähigkeit, sie zu prüfen — und damit ihren Nutzen.\n\nDas ist keine Relativierung von außen. Es ist die Bedingung, unter der die Bilder überhaupt brauchbar bleiben.\n\nPraktisch erkennen Sie den Unterschied an der Frage, ob eine Aussage sich noch prüfen lässt. Die Feststellung, es helfe Ihnen, etwas als Durchlässigkeit zu beschreiben, ist prüfbar — Sie können feststellen, ob es hilft. Die Aussage, Ihr Feld sei durchlässig gewesen, ist es nicht mehr; sie setzt voraus, was sie beschreibt.\n\n**Woran Sie erkennen, dass es zu weit geht.** Wenn eine Erklärung nicht mehr widerlegbar ist, ist sie keine Erklärung mehr. Wenn Zweifel als Beleg für die Richtigkeit gilt, ebenso. Wenn ein Modell jede Beobachtung erklärt, erklärt es keine. Diese drei Prüfsätze gelten über diesen Kurs hinaus.\n\nSie sind nicht gegen dieses Themenfeld gerichtet. Sie gelten für Ratgeber, für Werbung, für politische Argumente und für jeden Kurs — auch für diesen.'
        },
        {
          id: 'G11-M6-L3',
          titel: 'Wie es weitergeht',
          inhalt: 'Zum Schluss die Frage, was mit dem Gelernten geschieht.\n\n**Im Alltag.** Die realistische Erwartung ist nicht tägliche Praxis, sondern gelegentlicher Zugriff. Die meisten Menschen nutzen von einem Kurs wie diesem ein bis zwei Dinge, und zwar dann, wenn sie sie brauchen. Das ist kein Scheitern, sondern der Normalfall — und deshalb wurde jede Übung so gebaut, dass sie einzeln funktioniert.\n\n**Wenn Sie länger nichts tun** und in einem halben Jahr zurückkommen, fangen Sie nicht von vorn an. Die Unterscheidung zwischen Wahrnehmung und Zuschreibung bleibt, auch ungeübt.\n\n**Wenn Sie weitergehen wollen**, liegt der nächste Schritt in der Genauigkeit, nicht in neuen Techniken. Die drei Fragen aus Modul 4 tragen deutlich weiter als die erste Anwendung vermuten lässt.\n\n**Wo dieser Kurs endet.** Er endet an drei Stellen zuverlässig:\n\nBei allem, was **abgeklärt gehört** — anhaltende Erschöpfung, Schmerz, Schlafstörungen, Beklemmung, Zustände, die den Alltag beeinträchtigen. **Bei körperlichen oder gesundheitlichen Beschwerden gehört die Abklärung zu Arzt, Heilpraktiker oder Therapeut.** In akuten Lagen gelten die Stellen aus Modul 3, Lektion 3.\n\nBei allem, was **andere Menschen betrifft**. Was hier vermittelt wurde, ist Selbsterfahrung und Wissen. Es ist keine Ausbildung, keine Qualifikation und keine Befähigung, mit anderen Menschen in dieser Weise zu arbeiten.\n\nBei allem, was **eine Entscheidung verlangt**. Wenn eine Situation regelmäßig Zustand kostet und die drei Fragen immer dasselbe ergeben, ist die nächste Bewegung keine Übung. Sie ist ein Gespräch, eine Änderung, ein Nein. Innere Arbeit hilft, das zu erkennen — sie ersetzt es nicht.\n\nDamit ist der Kurs zu Ende. Was bleibt, ist eine Unterscheidung und die Bereitschaft, sie anzuwenden.'
        }
      ]
    }
  ],
  quiz: [
    {
      frage: 'Sie sind nach einer zweistündigen Besprechung erschöpft. Welcher Satz ist eine Beobachtung?',
      antworten: [
        'Die Person mir gegenüber hat mir Energie gezogen',
        'Ich bin seit dem Ende der Besprechung erschöpft',
        'In dieser Runde bin ich immer durchlässig',
        'Der Raum war energetisch belastet'
      ],
      richtig: 1,
    },
    {
      frage: 'Warum werden bei einem Zustandswechsel alle vier Quellen durchgegangen, auch die offensichtlich unbeteiligten?',
      antworten: [
        'Weil immer alle vier gleichzeitig wirken',
        'Weil das Ausschließen einer Gruppe das Ergebnis belastbar macht',
        'Weil die körperliche Gruppe die häufigste ist',
        'Weil sich so die eigentliche Ursache bestimmen lässt'
      ],
      richtig: 1,
    },
    {
      frage: 'Während der Atemübung entsteht ein Kribbeln in den Händen und um den Mund. Was tun Sie?',
      antworten: [
        'Weiteratmen, denn Kribbeln zeigt an, dass die Übung greift',
        'Die Ausatmung noch etwas verlängern',
        'Sofort aufhören und normal weiteratmen, das ist ein Zeichen von Überatmung',
        'Morgen kürzer versuchen, um zu sehen, ob es dann geht'
      ],
      richtig: 2,
    },
    {
      frage: 'Für welche Lage sind die Übungen ab Modul 4 nicht vorgesehen?',
      antworten: [
        'Wenig Zeit',
        'Keine Vorkenntnisse',
        'Bluthochdruck',
        'Wenig Ruhe in der Wohnung'
      ],
      richtig: 2,
    },
    {
      frage: 'Sie fühlen sich in Gegenwart einer Kollegin regelmäßig schlechter. Was folgt daraus?',
      antworten: [
        'Sie zieht Ihnen Energie',
        'Sie sollten den Kontakt meiden',
        'In dieser Konstellation läuft etwas, das Sie Zustand kostet',
        'Sie sind bei ihr besonders durchlässig, das ist eine Eigenschaft von ihr'
      ],
      richtig: 2,
    },
    {
      frage: 'Woran erkennen Sie, dass eine Erklärung zu weit geht?',
      antworten: [
        'Wenn sie sich unangenehm anfühlt',
        'Wenn Zweifel daran als Beleg für ihre Richtigkeit gilt',
        'Wenn sie nicht zur eigenen Erfahrung passt',
        'Wenn sie ohne Fachbegriffe auskommt'
      ],
      richtig: 1,
    }
  ],
};

export default G11;
