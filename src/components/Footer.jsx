// ═══════════════════════════════════════════════════════════
// Footer — Öffentliche Seiten
// ═══════════════════════════════════════════════════════════

const s = {
  footer: {
    background: '#0a0a0a',
    borderTop: '1px solid rgba(212, 175, 55, 0.1)',
    padding: '48px 24px 32px',
  },
  inner: {
    maxWidth: '1200px',
    margin: '0 auto',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    flexWrap: 'wrap',
    gap: '32px',
  },
  brand: {
    fontFamily: "'Cormorant Garamond', serif",
    fontSize: '1.1rem',
    fontWeight: '500',
    color: '#E8E4D9',
    marginBottom: '8px',
  },
  accent: {
    color: '#D4AF37',
  },
  tagline: {
    fontFamily: "'Raleway', sans-serif",
    fontSize: '0.82rem',
    color: '#6B6760',
    maxWidth: '300px',
    lineHeight: '1.6',
  },
  links: {
    display: 'flex',
    gap: '48px',
  },
  col: {
    display: 'flex',
    flexDirection: 'column',
    gap: '8px',
  },
  colTitle: {
    fontFamily: "'Raleway', sans-serif",
    fontSize: '0.72rem',
    fontWeight: '600',
    color: '#9A9589',
    textTransform: 'uppercase',
    letterSpacing: '0.1em',
    marginBottom: '4px',
  },
  link: {
    fontFamily: "'Raleway', sans-serif",
    fontSize: '0.85rem',
    color: '#6B6760',
    textDecoration: 'none',
    transition: 'color 0.25s ease',
  },
  bottom: {
    maxWidth: '1200px',
    margin: '32px auto 0',
    paddingTop: '24px',
    borderTop: '1px solid rgba(212, 175, 55, 0.06)',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexWrap: 'wrap',
    gap: '16px',
  },
  copy: {
    fontFamily: "'Raleway', sans-serif",
    fontSize: '0.78rem',
    color: '#4a4a4a',
  },
}

export default function Footer() {
  return (
    <footer style={s.footer}>
      <div style={s.inner}>
        <div>
          <div style={s.brand}>
            Human Resonanz <span style={s.accent}>Akademie</span>
          </div>
          <p style={s.tagline}>
            Das Netflix der ganzheitlichen Gesundheit. Kurse, Zertifizierungen 
            und persönliche Lernpfade für Energetiker, Heiler und Coaches.
          </p>
        </div>
        
        <div style={s.links}>
          <div style={s.col}>
            <span style={s.colTitle}>Plattform</span>
            <a href="#bereiche" style={s.link}>Bereiche</a>
            <a href="#formate" style={s.link}>Formate</a>
            <a href="/login" style={s.link}>Einloggen</a>
          </div>
          <div style={s.col}>
            <span style={s.colTitle}>Ökosystem</span>
            <a href="https://human-resonanz.de" target="_blank" rel="noopener" style={s.link}>Human Resonanz</a>
            <a href="https://lichtkern.vercel.app" target="_blank" rel="noopener" style={s.link}>Lichtkern</a>
            <a href="https://human-resonanz.de/netzwerk" target="_blank" rel="noopener" style={s.link}>Netzwerk</a>
          </div>
          <div style={s.col}>
            <span style={s.colTitle}>Rechtliches</span>
            <a href="/impressum" style={s.link}>Impressum</a>
            <a href="/datenschutz" style={s.link}>Datenschutz</a>
            <a href="/agb" style={s.link}>AGB</a>
          </div>
        </div>
      </div>
      
      <div style={s.bottom}>
        <span style={s.copy}>
          © {new Date().getFullYear()} Human Resonanz · Sven Donath
        </span>
        <span style={s.copy}>
          Handgefertigt mit Hingabe ✦
        </span>
      </div>
    </footer>
  )
}
