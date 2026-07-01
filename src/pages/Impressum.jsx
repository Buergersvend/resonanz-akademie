// ═══════════════════════════════════════════════════════════
// Impressum — Pflichtangaben nach § 5 DDG
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
  },
  link: {
    color: '#D4AF37',
    textDecoration: 'none',
  },
}

export default function Impressum() {
  return (
    <div style={s.page}>
      <Navbar />
      <div style={s.container}>
        <h1 style={s.title}>Impressum</h1>

        <h2 style={s.heading}>Angaben gemäß § 5 DDG</h2>
        <p style={s.text}>
          Sven Donath<br />
          St.-Damian-Weg 12<br />
          89284 Pfaffenhofen<br />
          Deutschland
        </p>

        <h2 style={s.heading}>Kontakt</h2>
        <p style={s.text}>
          E-Mail: <a href="mailto:info@human-resonanz.de" style={s.link}>info@human-resonanz.de</a>
        </p>

        <h2 style={s.heading}>Verantwortlich für den Inhalt gemäß § 18 Abs. 2 MStV</h2>
        <p style={s.text}>
          Sven Donath<br />
          St.-Damian-Weg 12<br />
          89284 Pfaffenhofen
        </p>

        <h2 style={s.heading}>Hinweis zu den Inhalten</h2>
        <p style={s.text}>
          Die Inhalte der Human Resonanz Lernwelt dienen der persönlichen
          Weiterbildung und Selbsterfahrung. Sie stellen keine medizinische, 
          psychotherapeutische oder heilkundliche Beratung dar und ersetzen 
          keinen Besuch bei Ärztin/Arzt, Therapeutin/Therapeut oder 
          Apothekerin/Apotheker.
        </p>

        <h2 style={s.heading}>Streitbeilegung</h2>
        <p style={s.text}>
          Wir sind nicht bereit und nicht verpflichtet, an 
          Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle 
          teilzunehmen.
        </p>
      </div>
      <Footer />
    </div>
  )
}
