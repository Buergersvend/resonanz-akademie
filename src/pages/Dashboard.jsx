// ═══════════════════════════════════════════════════════════
// Dashboard — Akademie Startseite (eingeloggt)
// ═══════════════════════════════════════════════════════════

import { Link } from 'react-router-dom'
import { useAuth } from '../config/AuthContext'
import AppShell from '../components/AppShell'

export default function Dashboard() {
  const { user } = useAuth()
  const displayName = user?.displayName || user?.email?.split('@')[0] || 'Reisender'

  return (
    <AppShell>
      <div style={s.page}>
        {/* Welcome */}
        <div style={s.welcome}>
          <h1 style={s.greeting}>
            Willkommen, <span style={s.gold}>{displayName}</span>
          </h1>
          <p style={s.sub}>Dein persönlicher Lernraum in der Resonanz Akademie.</p>
        </div>

        {/* Quick Actions */}
        <div style={s.grid}>
          {/* Lernpfad Card */}
          <div style={s.card}>
            <div style={s.cardIcon}>◈</div>
            <h3 style={s.cardTitle}>Dein Lernpfad</h3>
            <p style={s.cardDesc}>
              Beantworte 5 kurze Fragen und erhalte deinen persönlichen 
              Einstiegspfad — maßgeschneidert auf deine Ziele und dein Level.
            </p>
            <button className="btn btn-gold" style={{ marginTop: '16px', fontSize: '0.88rem' }}>
              Assessment starten
            </button>
          </div>

          {/* Kurse Card */}
          <Link to="/kurse" style={{ textDecoration: 'none' }}>
            <div style={{ ...s.card, cursor: 'pointer' }}>
              <div style={s.cardIcon}>◈◈</div>
              <h3 style={s.cardTitle}>Kurse entdecken</h3>
              <p style={s.cardDesc}>
                Über 100 Kurse in 11 Bereichen — vom Schnupperkurs 
                bis zur vollständigen Fachausbildung.
              </p>
              <span style={s.cardLink}>Zur Kursübersicht →</span>
            </div>
          </Link>

          {/* Fortschritt Card */}
          <div style={s.card}>
            <div style={s.cardIcon}>◈◈◈</div>
            <h3 style={s.cardTitle}>Dein Fortschritt</h3>
            <p style={s.cardDesc}>
              Du hast noch keine Kurse begonnen. Starte dein erstes 
              Modul und verfolge deinen Weg hier.
            </p>
            <div style={s.progressBar}>
              <div style={s.progressFill} />
            </div>
            <span style={s.progressLabel}>0 von 0 Modulen abgeschlossen</span>
          </div>

          {/* Zertifikate Card */}
          <div style={s.card}>
            <div style={s.cardIcon}>◈◈◈◈</div>
            <h3 style={s.cardTitle}>Zertifikate</h3>
            <p style={s.cardDesc}>
              Deine erworbenen Zertifikate und Abzeichen erscheinen 
              hier — bereit zum Download und Teilen.
            </p>
            <span style={s.emptyState}>Noch keine Zertifikate</span>
          </div>
        </div>

        {/* Empfohlener Kurs */}
        <div style={s.featured}>
          <span style={s.featuredOverline}>Empfohlen für dich</span>
          <div style={s.featuredCard}>
            <div style={s.featuredLeft}>
              <span style={s.featuredBadge}>◈ Mikro-Kurs · 1–2h · Kostenlos</span>
              <h2 style={s.featuredTitle}>Quantenheilung — Einstieg</h2>
              <p style={s.featuredDesc}>
                Entdecke die Grundlagen der Quantenheilung. Lerne die Zwei-Punkt-Methode, 
                Herzfokussierte Kohärenzatmung und Intentionsbasierte Energielenkung 
                in 4 kompakten Modulen.
              </p>
              <Link to="/kurs/B10" className="btn btn-gold" style={{ fontSize: '0.9rem' }}>
                Kurs starten
              </Link>
            </div>
            <div style={s.featuredRight}>
              <div style={s.featuredModules}>
                <div style={s.module}>
                  <span style={s.moduleNr}>01</span>
                  <span style={s.moduleName}>Was ist Quantenheilung?</span>
                </div>
                <div style={s.module}>
                  <span style={s.moduleNr}>02</span>
                  <span style={s.moduleName}>Dein Energiesystem</span>
                </div>
                <div style={s.module}>
                  <span style={s.moduleNr}>03</span>
                  <span style={s.moduleName}>3 Übungen für den Alltag</span>
                </div>
                <div style={s.module}>
                  <span style={s.moduleNr}>04</span>
                  <span style={s.moduleName}>Integration & Reflexion</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </AppShell>
  )
}

const s = {
  page: {
    maxWidth: '1000px',
  },
  welcome: {
    marginBottom: '40px',
  },
  greeting: {
    fontFamily: "'Cormorant Garamond', serif",
    fontSize: 'clamp(1.6rem, 3vw, 2.2rem)',
    fontWeight: '400',
    color: '#E8E4D9',
    marginBottom: '8px',
  },
  gold: { color: '#D4AF37' },
  sub: {
    fontFamily: "'Raleway', sans-serif",
    fontSize: '0.95rem',
    color: '#6B6760',
  },
  grid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
    gap: '16px',
    marginBottom: '48px',
  },
  card: {
    background: '#111111',
    borderRadius: '12px',
    border: '1px solid rgba(212, 175, 55, 0.08)',
    padding: '28px 24px',
    transition: 'all 0.3s ease',
  },
  cardIcon: {
    fontFamily: "'Cormorant Garamond', serif",
    fontSize: '1.1rem',
    color: '#D4AF37',
    marginBottom: '16px',
    letterSpacing: '2px',
  },
  cardTitle: {
    fontFamily: "'Cormorant Garamond', serif",
    fontSize: '1.2rem',
    fontWeight: '600',
    color: '#E8E4D9',
    marginBottom: '8px',
  },
  cardDesc: {
    fontFamily: "'Raleway', sans-serif",
    fontSize: '0.85rem',
    color: '#6B6760',
    lineHeight: '1.6',
  },
  cardLink: {
    display: 'inline-block',
    marginTop: '16px',
    fontFamily: "'Raleway', sans-serif",
    fontSize: '0.85rem',
    fontWeight: '600',
    color: '#D4AF37',
    letterSpacing: '0.02em',
  },
  progressBar: {
    marginTop: '16px',
    height: '4px',
    background: 'rgba(212, 175, 55, 0.1)',
    borderRadius: '2px',
    overflow: 'hidden',
  },
  progressFill: {
    width: '0%',
    height: '100%',
    background: 'linear-gradient(90deg, #D4AF37, #E8D48B)',
    borderRadius: '2px',
    transition: 'width 0.5s ease',
  },
  progressLabel: {
    display: 'block',
    marginTop: '8px',
    fontFamily: "'Raleway', sans-serif",
    fontSize: '0.78rem',
    color: '#6B6760',
  },
  emptyState: {
    display: 'block',
    marginTop: '16px',
    fontFamily: "'Raleway', sans-serif",
    fontSize: '0.82rem',
    color: '#4a4a4a',
    fontStyle: 'italic',
  },
  featured: {
    marginBottom: '32px',
  },
  featuredOverline: {
    display: 'block',
    fontFamily: "'Raleway', sans-serif",
    fontSize: '0.72rem',
    fontWeight: '600',
    color: '#D4AF37',
    letterSpacing: '0.14em',
    textTransform: 'uppercase',
    marginBottom: '12px',
  },
  featuredCard: {
    background: '#111111',
    borderRadius: '14px',
    border: '1px solid rgba(212, 175, 55, 0.12)',
    padding: '32px',
    display: 'flex',
    gap: '40px',
    flexWrap: 'wrap',
  },
  featuredLeft: {
    flex: '1 1 300px',
  },
  featuredBadge: {
    display: 'inline-block',
    padding: '4px 12px',
    background: 'rgba(212, 175, 55, 0.08)',
    borderRadius: '999px',
    fontFamily: "'Raleway', sans-serif",
    fontSize: '0.72rem',
    fontWeight: '600',
    color: '#D4AF37',
    letterSpacing: '0.04em',
    marginBottom: '16px',
  },
  featuredTitle: {
    fontFamily: "'Cormorant Garamond', serif",
    fontSize: '1.5rem',
    fontWeight: '500',
    color: '#E8E4D9',
    marginBottom: '12px',
  },
  featuredDesc: {
    fontFamily: "'Raleway', sans-serif",
    fontSize: '0.9rem',
    color: '#9A9589',
    lineHeight: '1.7',
    marginBottom: '20px',
  },
  featuredRight: {
    flex: '1 1 260px',
  },
  featuredModules: {
    display: 'flex',
    flexDirection: 'column',
    gap: '10px',
  },
  module: {
    display: 'flex',
    alignItems: 'center',
    gap: '14px',
    padding: '12px 16px',
    background: 'rgba(212, 175, 55, 0.04)',
    borderRadius: '8px',
    border: '1px solid rgba(212, 175, 55, 0.06)',
  },
  moduleNr: {
    fontFamily: "'Cormorant Garamond', serif",
    fontSize: '0.9rem',
    fontWeight: '600',
    color: 'rgba(212, 175, 55, 0.4)',
    width: '24px',
  },
  moduleName: {
    fontFamily: "'Raleway', sans-serif",
    fontSize: '0.85rem',
    color: '#E8E4D9',
  },
}
