// ═══════════════════════════════════════════════════════════
// Datenschutzerklärung — Human Resonanz Akademie
// Vorlage Stand 06/2026 · zur anwaltlichen Prüfung vorgesehen
// Abdeckung: Vercel (Hosting), Firebase Auth + Firestore,
// lokal gehostete Schriftarten (keine Google-Fonts-CDN-Einbindung)
// ═══════════════════════════════════════════════════════════

import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

const s = {
  page: {
    background: '#0a0a0a',
    minHeight: '100vh',
  },
  container: {
    maxWidth: '720px',
    margin: '0 auto',
    padding: '140px 24px 100px',
  },
  title: {
    fontFamily: "'Cormorant Garamond', serif",
    fontSize: 'clamp(2rem, 4vw, 2.8rem)',
    fontWeight: '400',
    color: '#E8E4D9',
    marginBottom: '40px',
  },
  heading: {
    fontFamily: "'Cormorant Garamond', serif",
    fontSize: '1.3rem',
    fontWeight: '600',
    color: '#D4AF37',
    marginTop: '36px',
    marginBottom: '12px',
  },
  text: {
    fontFamily: "'Raleway', sans-serif",
    fontSize: '0.95rem',
    lineHeight: '1.8',
    color: '#9A9589',
    marginBottom: '12px',
  },
  link: {
    color: '#D4AF37',
    textDecoration: 'none',
  },
}

export default function Datenschutz() {
  return (
    <div style={s.page}>
      <Navbar />
      <div style={s.container}>
        <h1 style={s.title}>Datenschutzerklärung</h1>

        <h2 style={s.heading}>1. Verantwortlicher</h2>
        <p style={s.text}>
          Verantwortlicher im Sinne der Datenschutz-Grundverordnung (DSGVO) ist:<br />
          Sven Donath, St.-Damian-Weg 12, 89284 Pfaffenhofen, Deutschland<br />
          E-Mail: <a href="mailto:info@human-resonanz.de" style={s.link}>info@human-resonanz.de</a>
        </p>

        <h2 style={s.heading}>2. Hosting (Vercel)</h2>
        <p style={s.text}>
          Diese Website wird bei Vercel Inc., 440 N Barranca Ave #4133, Covina, 
          CA 91723, USA, gehostet. Beim Aufruf der Website verarbeitet Vercel 
          technisch notwendige Daten (sogenannte Server-Logfiles), insbesondere 
          IP-Adresse, Datum und Uhrzeit des Zugriffs, aufgerufene Seite, 
          Browsertyp und Betriebssystem. Diese Verarbeitung ist für den Betrieb 
          und die Sicherheit der Website erforderlich (Art. 6 Abs. 1 lit. f 
          DSGVO — berechtigtes Interesse an einer sicheren und stabilen 
          Bereitstellung). Vercel kann Daten in den USA verarbeiten; die 
          Übermittlung erfolgt auf Grundlage der EU-Standardvertragsklauseln 
          bzw. des EU-US Data Privacy Framework.
        </p>

        <h2 style={s.heading}>3. Registrierung und Nutzerkonto (Firebase Authentication)</h2>
        <p style={s.text}>
          Für die Nutzung der Lernplattform ist eine Registrierung erforderlich. 
          Hierfür nutzen wir Firebase Authentication, einen Dienst der Google 
          Ireland Limited, Gordon House, Barrow Street, Dublin 4, Irland. 
          Verarbeitet werden Ihre E-Mail-Adresse, ein Passwort (verschlüsselt 
          gespeichert, für uns nicht einsehbar) sowie eine technische 
          Nutzerkennung (UID). Rechtsgrundlage ist Art. 6 Abs. 1 lit. b DSGVO 
          (Bereitstellung der von Ihnen gewünschten Plattformfunktionen).
        </p>

        <h2 style={s.heading}>4. Lernfortschritt (Firebase Firestore)</h2>
        <p style={s.text}>
          Ihr Lernfortschritt (begonnene und abgeschlossene Kurse und Lektionen, 
          Quiz-Ergebnisse) wird in Firebase Firestore (Google Ireland Limited) 
          gespeichert und Ihrer Nutzerkennung zugeordnet. Dies ist erforderlich, 
          um Ihnen Ihren Fortschritt und Teilnahmebestätigungen bereitstellen 
          zu können (Art. 6 Abs. 1 lit. b DSGVO). Google kann Daten in 
          Drittländer übermitteln; dies erfolgt auf Grundlage der 
          EU-Standardvertragsklauseln bzw. des EU-US Data Privacy Framework.
        </p>

        <h2 style={s.heading}>5. Schriftarten</h2>
        <p style={s.text}>
          Die auf dieser Website verwendeten Schriftarten sind lokal eingebunden. 
          Beim Aufruf der Seite wird keine Verbindung zu Servern von 
          Drittanbietern (z. B. Google Fonts) hergestellt.
        </p>

        <h2 style={s.heading}>6. Cookies und lokale Speicherung</h2>
        <p style={s.text}>
          Diese Website verwendet keine Werbe- oder Tracking-Cookies. Für die 
          Anmeldefunktion speichert Firebase Authentication technisch notwendige 
          Daten (Sitzungs-Token) im lokalen Speicher Ihres Browsers. Diese 
          Speicherung ist für die Bereitstellung der Login-Funktion zwingend 
          erforderlich (§ 25 Abs. 2 Nr. 2 TDDDG).
        </p>

        <h2 style={s.heading}>7. Speicherdauer</h2>
        <p style={s.text}>
          Ihre Kontodaten und Ihr Lernfortschritt werden gespeichert, solange 
          Ihr Nutzerkonto besteht. Sie können jederzeit die Löschung Ihres 
          Kontos per E-Mail an{' '}
          <a href="mailto:info@human-resonanz.de" style={s.link}>info@human-resonanz.de</a>{' '}
          verlangen; Ihre Daten werden dann gelöscht, soweit keine gesetzlichen 
          Aufbewahrungspflichten entgegenstehen.
        </p>

        <h2 style={s.heading}>8. Ihre Rechte</h2>
        <p style={s.text}>
          Sie haben gegenüber dem Verantwortlichen das Recht auf Auskunft 
          (Art. 15 DSGVO), Berichtigung (Art. 16 DSGVO), Löschung (Art. 17 
          DSGVO), Einschränkung der Verarbeitung (Art. 18 DSGVO), 
          Datenübertragbarkeit (Art. 20 DSGVO) sowie Widerspruch gegen 
          Verarbeitungen auf Grundlage von Art. 6 Abs. 1 lit. f DSGVO 
          (Art. 21 DSGVO). Zudem haben Sie das Recht, sich bei einer 
          Datenschutz-Aufsichtsbehörde zu beschweren (Art. 77 DSGVO); 
          zuständig ist beispielsweise das Bayerische Landesamt für 
          Datenschutzaufsicht (BayLDA), Ansbach.
        </p>

        <h2 style={s.heading}>9. Stand</h2>
        <p style={s.text}>
          Diese Datenschutzerklärung hat den Stand Juni 2026 und wird bei 
          Änderungen der Verarbeitungen aktualisiert.
        </p>
      </div>
      <Footer />
    </div>
  )
}
