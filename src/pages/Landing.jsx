// ═══════════════════════════════════════════════════════════
// Landing Page — Human Resonanz Akademie
// Das Netflix der Resonanz
// v2 — 11.06.2026: Rechtlich saniert + Supernova-Design
// (kosmischer Lichtkern, Sternenfeld, Aura-Ringe — analog
//  Homepage & Zertifikat-Ästhetik)
// ═══════════════════════════════════════════════════════════

import { Link } from 'react-router-dom'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { KURSE } from '../data/kurse'

// ── Dynamischer Live-Zähler (Single Source of Truth: src/data/kurse.js) ──
const LIVE_COUNT = KURSE.filter(k => (k.status ?? 'live') === 'live').length

// ── Sternenfeld (einmalig generiert, deterministisch pro Load) ──
const STARS = Array.from({ length: 80 }, (_, i) => ({
  id: i,
  left: Math.random() * 100,
  top: Math.random() * 100,
  size: 1 + Math.random() * 1.8,
  delay: Math.random() * 6,
  duration: 3 + Math.random() * 5,
  opacity: 0.15 + Math.random() * 0.45,
}))

// ── 11 Bereiche ──────────────────────────────────────────────
const BEREICHE = [
  { nr: 1, name: 'Organsprache', icon: '🫀', desc: 'Was dein Körper dir wirklich sagt' },
  { nr: 2, name: 'Chakrenarbeit', icon: '🔮', desc: 'Energiezentren verstehen und harmonisieren' },
  { nr: 3, name: 'Aura & Energiefeld', icon: '✨', desc: 'Sehen, spüren, verstehen' },
  { nr: 4, name: 'Humanenergetik', icon: '⚡', desc: 'Grundlagen energetischer Arbeit' },
  { nr: 5, name: 'Medialität & Hellsinne', icon: '👁️', desc: 'Deine feinstoffliche Wahrnehmung schulen' },
  { nr: 6, name: 'Karma & Seelenarbeit', icon: '🌀', desc: 'Seelenverträge und karmische Muster' },
  { nr: 7, name: 'Human Design', icon: '◇', desc: 'Dein energetischer Bauplan' },
  { nr: 8, name: 'Schamanismus', icon: '🌿', desc: 'Uraltes Wissen für die moderne Welt' },
  { nr: 9, name: 'Schutz & Erdung', icon: '🛡️', desc: 'Energetische Hygiene und Stabilität' },
  { nr: 10, name: 'Quantenarbeit', icon: '∞', desc: 'Bewusstsein und Quantenfelder erforschen' },
  { nr: 11, name: 'Praxis & Business', icon: '💎', desc: 'Deine Praxis professionell aufbauen' },
]

const FORMATE = [
  { symbol: '◈', name: 'Mikro-Kurs', hours: '1–2 Stunden', desc: 'Ein Thema, ein konkretes Ergebnis', preis: 'Kostenlos · Gründungsphase' },
  { symbol: '◈◈', name: 'Standard-Kurs', hours: '3–6 Stunden', desc: 'Vollständiger Themenkomplex mit Workbook', preis: 'Kostenlos · Gründungsphase' },
  { symbol: '◈◈◈', name: 'Intensiv-Kurs', hours: '8–16 Stunden', desc: 'Umfassende Vertiefung mit Praxisübungen', preis: 'Kostenlos · Gründungsphase' },
  { symbol: '◈◈◈◈', name: 'Vertiefungsweg', hours: '30–60 Stunden', desc: 'Umfassender Lernweg mit Teilnahmezertifikat', preis: 'Kostenlos · Gründungsphase' },
]

const UNTERSCHIEDE = [
  { andere: 'Starre Kurs-Struktur', hr: 'Persönliches Assessment → individueller Lernpfad' },
  { andere: 'Generische Inhalte', hr: 'Praxisnah aufgebaute, eigenständige Inhalte' },
  { andere: 'Überladene Plattformen', hr: 'Netflix-Feeling: klar, schnell, intuitiv' },
  { andere: 'Manuelle Prüfungsbewertung', hr: 'Automatische Quiz & Teilnahmebestätigungen' },
  { andere: 'Theorie ohne Anwendung', hr: 'Brücke zwischen Energetik, Bewusstsein & Technologie' },
  { andere: 'Keine Community', hr: 'Resonanz-Netzwerk: Gleichgesinnte verbinden sich' },
]

export default function Landing() {
  return (
    <div style={{ background: '#0a0a0a', minHeight: '100vh' }}>
      {/* ═══ Supernova / Kosmos Animationen ═══ */}
      <style>{`
        @keyframes novaPulse {
          0%, 100% { transform: translate(-50%, -50%) scale(1); opacity: 0.7; }
          50% { transform: translate(-50%, -50%) scale(1.25); opacity: 1; }
        }
        @keyframes novaBreath {
          0%, 100% { transform: translate(-50%, -50%) scale(1); opacity: 0.5; }
          50% { transform: translate(-50%, -50%) scale(1.06); opacity: 0.75; }
        }
        @keyframes ringDrift {
          from { transform: translate(-50%, -50%) rotate(0deg); }
          to { transform: translate(-50%, -50%) rotate(360deg); }
        }
        @keyframes starTwinkle {
          0%, 100% { opacity: var(--star-min); }
          50% { opacity: var(--star-max); }
        }
        @keyframes novaBurst {
          0% { transform: translate(-50%, -50%) scale(0.4); opacity: 0.6; }
          60% { opacity: 0.2; }
          100% { transform: translate(-50%, -50%) scale(2.1); opacity: 0; }
        }
        @keyframes logoFloat {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-7px); }
        }
        @keyframes heroRise {
          from { opacity: 0; transform: translateY(18px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .nova-core { animation: novaPulse 7s ease-in-out infinite; }
        .nova-halo { animation: novaBreath 11s ease-in-out infinite; }
        .nova-ring { animation: ringDrift 90s linear infinite; }
        .nova-ring.slow { animation-duration: 150s; animation-direction: reverse; }
        .hr-star { animation: starTwinkle var(--star-dur) ease-in-out infinite; }
        .logo-float { animation: logoFloat 6s ease-in-out infinite; }
        .nova-burst { animation: novaBurst 5.4s ease-out infinite; }
        .nova-burst.b2 { animation-delay: 1.8s; }
        .nova-burst.b3 { animation-delay: 3.6s; }
        .hero-rise { animation: heroRise 0.9s ease-out both; }
        .hero-rise.d1 { animation-delay: 0.1s; }
        .hero-rise.d2 { animation-delay: 0.25s; }
        .hero-rise.d3 { animation-delay: 0.4s; }
        .hr-card { transition: transform 0.3s ease, border-color 0.3s ease, box-shadow 0.3s ease; }
        .hr-card:hover {
          transform: translateY(-3px);
          border-color: rgba(212, 175, 55, 0.35) !important;
          box-shadow: 0 8px 32px rgba(212, 175, 55, 0.08);
        }
        @media (prefers-reduced-motion: reduce) {
          .nova-core, .nova-halo, .nova-ring, .nova-burst, .hr-star, .hero-rise, .logo-float { animation: none; opacity: 0.3; }
        }
      `}</style>

      <Navbar />
      
      {/* ═══ HERO mit Supernova ═══ */}
      <section style={hero.section}>
        {/* Sternenfeld */}
        <div style={nova.starfield} aria-hidden="true">
          {STARS.map(st => (
            <span
              key={st.id}
              className="hr-star"
              style={{
                position: 'absolute',
                left: `${st.left}%`,
                top: `${st.top}%`,
                width: `${st.size}px`,
                height: `${st.size}px`,
                borderRadius: '50%',
                background: '#E8DFC8',
                '--star-min': st.opacity * 0.3,
                '--star-max': st.opacity,
                '--star-dur': `${st.duration}s`,
                animationDelay: `${st.delay}s`,
              }}
            />
          ))}
        </div>

        <div style={hero.content}>
          {/* Supernova — Markensiegel mit Lichtkern */}
          <div className="hero-rise" style={hero.logoWrap} >
            <div className="nova-halo" style={hero.logoHalo} aria-hidden="true" />
            <div className="nova-core" style={hero.logoCore} aria-hidden="true" />
            <div className="nova-ring" style={{ ...hero.logoRing, width: '330px', height: '330px', opacity: 0.20 }} aria-hidden="true" />
            <div className="nova-ring slow" style={{ ...hero.logoRing, width: '470px', height: '470px', opacity: 0.11 }} aria-hidden="true" />
            <div className="nova-ring" style={{ ...hero.logoRing, width: '640px', height: '640px', opacity: 0.06, animationDuration: '210s' }} aria-hidden="true" />
            <div className="nova-burst" style={hero.burst} aria-hidden="true" />
            <div className="nova-burst b2" style={hero.burst} aria-hidden="true" />
            <div className="nova-burst b3" style={hero.burst} aria-hidden="true" />
            <img
              src="/logo-siegel.png"
              alt="Human Resonanz Akademie — Siegel"
              className="logo-float"
              style={hero.logoImg}
            />
          </div>

          <div className="hero-rise" style={hero.badge}>
            ◈ Jetzt in der Beta-Phase
          </div>
          
          <h1 className="hero-rise d1" style={hero.title}>
            Das <span style={hero.gold}>Netflix</span> der
            <br />Resonanz
          </h1>
          
          <p className="hero-rise d2" style={hero.subtitle}>
            {LIVE_COUNT} Kurse, persönliche Lernpfade und Teilnahmezertifikate. 
            Von einem Praktiker für Praktiker — mit persönlichem Assessment 
            und klar strukturierten Inhalten in digitalem Format.
          </p>
          
          <div className="hero-rise d3" style={hero.actions}>
            <Link to="/login" className="btn btn-gold" style={{ fontSize: '1rem', padding: '14px 36px' }}>
              Kostenlos starten
            </Link>
            <a href="#bereiche" className="btn btn-outline" style={{ fontSize: '1rem', padding: '14px 36px' }}>
              Bereiche entdecken
            </a>
          </div>
          
          <div className="hero-rise d3" style={hero.stats}>
            <div style={hero.stat}>
              <span style={hero.statNum}>11</span>
              <span style={hero.statLabel}>Themen-Bereiche</span>
            </div>
            <div style={hero.divider} />
            <div style={hero.stat}>
              <span style={hero.statNum}>{LIVE_COUNT}</span>
              <span style={hero.statLabel}>Kurse</span>
            </div>
            <div style={hero.divider} />
            <div style={hero.stat}>
              <span style={hero.statNum}>4</span>
              <span style={hero.statLabel}>Kurs-Formate</span>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ BEREICHE ═══ */}
      <section id="bereiche" style={bereiche.section}>
        <div style={bereiche.container}>
          <div style={bereiche.header}>
            <span style={bereiche.overline}>11 Themen-Bereiche</span>
            <h2 style={bereiche.title}>Dein Wissen. Dein Weg.</h2>
            <p style={bereiche.subtitle}>
              Jeder Bereich ist eine eigenständige Lernwelt — vom 
              Schnupperkurs bis zum umfassenden Vertiefungsweg.
            </p>
          </div>
          
          <div style={bereiche.grid}>
            {BEREICHE.map((b, i) => (
              <div 
                key={b.nr} 
                className="hr-card"
                style={{
                  ...bereiche.card,
                  animationDelay: `${i * 0.05}s`,
                }}
              >
                <div style={bereiche.cardIcon}>{b.icon}</div>
                <div>
                  <div style={bereiche.cardName}>{b.name}</div>
                  <div style={bereiche.cardDesc}>{b.desc}</div>
                </div>
                <div style={bereiche.cardNr}>
                  {String(b.nr).padStart(2, '0')}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ FORMATE ═══ */}
      <section id="formate" style={formate.section}>
        <div style={formate.container}>
          <span style={bereiche.overline}>4 Kurs-Formate</span>
          <h2 style={{ ...bereiche.title, marginBottom: '16px' }}>
            Vom Einstieg bis zur Vertiefung
          </h2>
          <p style={{ ...bereiche.subtitle, marginBottom: '48px' }}>
            Jedes Format hat ein klar definiertes Level — vom 90-Minuten-Einstieg 
            bis zum 60-Stunden-Vertiefungsweg.
          </p>
          
          <div style={formate.grid}>
            {FORMATE.map((f, i) => (
              <div key={f.symbol} className="hr-card" style={formate.card}>
                <div style={formate.symbol}>{f.symbol}</div>
                <h3 style={formate.name}>{f.name}</h3>
                <div style={formate.hours}>{f.hours}</div>
                <p style={formate.desc}>{f.desc}</p>
                <div style={formate.preisWrap}>
                  <span style={formate.preisNeu}>{f.preis}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ UNTERSCHIED ═══ */}
      <section id="unterschied" style={unterschied.section}>
        <div style={unterschied.container}>
          <span style={bereiche.overline}>Warum Human Resonanz</span>
          <h2 style={{ ...bereiche.title, marginBottom: '48px' }}>
            Kein Vergleich
          </h2>
          
          <div style={unterschied.table}>
            <div style={unterschied.headerRow}>
              <div style={unterschied.headerCell}>Andere Anbieter</div>
              <div style={{ ...unterschied.headerCell, color: '#D4AF37' }}>Human Resonanz Akademie</div>
            </div>
            {UNTERSCHIEDE.map((u, i) => (
              <div key={i} style={unterschied.row}>
                <div style={unterschied.cellAndere}>{u.andere}</div>
                <div style={unterschied.cellHR}>{u.hr}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ CTA mit Mini-Nova ═══ */}
      <section style={cta.section}>
        <div className="nova-halo" style={cta.glow} />
        <div className="nova-ring slow" style={cta.ring} aria-hidden="true" />
        <div style={cta.content}>
          <h2 style={cta.title}>
            Bereit für <span style={{ color: '#D4AF37' }}>deinen Weg</span>?
          </h2>
          <p style={cta.subtitle}>
            5 Fragen. Dein persönlicher Lernpfad. Sofort starten.
          </p>
          <Link to="/login" className="btn btn-gold" style={{ fontSize: '1.05rem', padding: '16px 44px' }}>
            Jetzt kostenlos starten
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  )
}

// ═══════════════════════════════════════════════════════════
// Styles
// ═══════════════════════════════════════════════════════════

const nova = {
  starfield: {
    position: 'absolute',
    inset: 0,
    overflow: 'hidden',
    pointerEvents: 'none',
  },
}

const hero = {
  logoWrap: {
    position: 'relative',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: '32px',
  },
  logoImg: {
    position: 'relative',
    zIndex: 1,
    width: 'clamp(130px, 17vw, 180px)',
    height: 'auto',
    filter: 'drop-shadow(0 0 32px rgba(255, 220, 120, 0.45)) drop-shadow(0 0 90px rgba(212, 175, 55, 0.25))',
  },
  burst: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: '230px',
    height: '230px',
    borderRadius: '50%',
    border: '1.5px solid rgba(232, 212, 139, 0.55)',
    boxShadow: '0 0 28px rgba(212, 175, 55, 0.30), inset 0 0 22px rgba(212, 175, 55, 0.18)',
    pointerEvents: 'none',
  },
  logoCore: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: '300px',
    height: '300px',
    borderRadius: '50%',
    background: 'radial-gradient(circle, rgba(255, 251, 230, 0.30) 0%, rgba(232, 223, 200, 0.16) 25%, rgba(212, 175, 55, 0.09) 50%, transparent 72%)',
    filter: 'blur(2px)',
    pointerEvents: 'none',
  },
  logoHalo: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: '760px',
    height: '760px',
    borderRadius: '50%',
    background: 'radial-gradient(circle, rgba(212, 175, 55, 0.09) 0%, rgba(212, 175, 55, 0.03) 45%, transparent 70%)',
    pointerEvents: 'none',
  },
  logoRing: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    borderRadius: '50%',
    border: '1px solid rgba(212, 175, 55, 0.5)',
    pointerEvents: 'none',
  },
  section: {
    position: 'relative',
    minHeight: '100vh',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '120px 24px 80px',
    overflow: 'hidden',
  },
  content: {
    position: 'relative',
    textAlign: 'center',
    maxWidth: '820px',
    zIndex: 1,
  },
  badge: {
    display: 'inline-block',
    padding: '6px 16px',
    background: 'rgba(212, 175, 55, 0.1)',
    border: '1px solid rgba(212, 175, 55, 0.2)',
    borderRadius: '999px',
    fontFamily: "'Raleway', sans-serif",
    fontSize: '0.78rem',
    fontWeight: '600',
    color: '#D4AF37',
    letterSpacing: '0.08em',
    textTransform: 'uppercase',
    marginBottom: '28px',
  },
  title: {
    fontFamily: "'Cormorant Garamond', serif",
    fontSize: 'clamp(2.4rem, 6vw, 4.2rem)',
    fontWeight: '400',
    lineHeight: '1.15',
    color: '#E8E4D9',
    marginBottom: '24px',
    letterSpacing: '-0.01em',
    textShadow: '0 0 60px rgba(212, 175, 55, 0.25)',
  },
  gold: {
    color: '#D4AF37',
    fontStyle: 'italic',
  },
  subtitle: {
    fontFamily: "'Raleway', sans-serif",
    fontSize: 'clamp(0.95rem, 1.8vw, 1.12rem)',
    lineHeight: '1.7',
    color: '#9A9589',
    maxWidth: '640px',
    margin: '0 auto 40px',
  },
  actions: {
    display: 'flex',
    gap: '16px',
    justifyContent: 'center',
    flexWrap: 'wrap',
    marginBottom: '64px',
  },
  stats: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '32px',
    flexWrap: 'wrap',
  },
  stat: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: '4px',
  },
  statNum: {
    fontFamily: "'Cormorant Garamond', serif",
    fontSize: '2rem',
    fontWeight: '600',
    color: '#D4AF37',
  },
  statLabel: {
    fontFamily: "'Raleway', sans-serif",
    fontSize: '0.78rem',
    color: '#6B6760',
    letterSpacing: '0.04em',
    textTransform: 'uppercase',
  },
  divider: {
    width: '1px',
    height: '40px',
    background: 'rgba(212, 175, 55, 0.15)',
  },
}

const bereiche = {
  section: {
    padding: '100px 24px',
    background: '#0a0a0a',
  },
  container: {
    maxWidth: '1200px',
    margin: '0 auto',
  },
  header: {
    textAlign: 'center',
    marginBottom: '56px',
  },
  overline: {
    display: 'block',
    fontFamily: "'Raleway', sans-serif",
    fontSize: '0.72rem',
    fontWeight: '600',
    color: '#D4AF37',
    letterSpacing: '0.14em',
    textTransform: 'uppercase',
    marginBottom: '12px',
  },
  title: {
    fontFamily: "'Cormorant Garamond', serif",
    fontSize: 'clamp(1.8rem, 4vw, 2.8rem)',
    fontWeight: '400',
    color: '#E8E4D9',
    marginBottom: '12px',
  },
  subtitle: {
    fontFamily: "'Raleway', sans-serif",
    fontSize: '1rem',
    color: '#9A9589',
    lineHeight: '1.7',
    maxWidth: '560px',
    margin: '0 auto',
  },
  grid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))',
    gap: '12px',
  },
  card: {
    display: 'flex',
    alignItems: 'center',
    gap: '16px',
    padding: '20px 24px',
    background: '#111111',
    borderRadius: '10px',
    border: '1px solid rgba(212, 175, 55, 0.08)',
    cursor: 'default',
    position: 'relative',
  },
  cardIcon: {
    fontSize: '1.5rem',
    width: '42px',
    height: '42px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    background: 'rgba(212, 175, 55, 0.06)',
    borderRadius: '10px',
    flexShrink: 0,
  },
  cardName: {
    fontFamily: "'Cormorant Garamond', serif",
    fontSize: '1.1rem',
    fontWeight: '600',
    color: '#E8E4D9',
    marginBottom: '2px',
  },
  cardDesc: {
    fontFamily: "'Raleway', sans-serif",
    fontSize: '0.82rem',
    color: '#6B6760',
  },
  cardNr: {
    position: 'absolute',
    top: '12px',
    right: '16px',
    fontFamily: "'Cormorant Garamond', serif",
    fontSize: '0.82rem',
    color: 'rgba(212, 175, 55, 0.2)',
    fontWeight: '600',
  },
}

const formate = {
  section: {
    padding: '100px 24px',
    background: '#0d0d0d',
  },
  container: {
    maxWidth: '1200px',
    margin: '0 auto',
    textAlign: 'center',
  },
  grid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
    gap: '20px',
  },
  card: {
    padding: '32px 24px',
    background: '#111111',
    borderRadius: '12px',
    border: '1px solid rgba(212, 175, 55, 0.08)',
    textAlign: 'center',
  },
  symbol: {
    fontFamily: "'Cormorant Garamond', serif",
    fontSize: '1.4rem',
    color: '#D4AF37',
    marginBottom: '16px',
    letterSpacing: '2px',
  },
  name: {
    fontFamily: "'Cormorant Garamond', serif",
    fontSize: '1.25rem',
    fontWeight: '600',
    color: '#E8E4D9',
    marginBottom: '8px',
  },
  hours: {
    fontFamily: "'Raleway', sans-serif",
    fontSize: '0.82rem',
    fontWeight: '600',
    color: '#D4AF37',
    marginBottom: '12px',
    letterSpacing: '0.04em',
  },
  desc: {
    fontFamily: "'Raleway', sans-serif",
    fontSize: '0.88rem',
    color: '#9A9589',
    lineHeight: '1.6',
    marginBottom: '16px',
  },
  preisWrap: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: '4px',
  },
  preisNeu: {
    fontFamily: "'Raleway', sans-serif",
    fontSize: '0.82rem',
    fontWeight: '600',
    color: '#D4AF37',
    letterSpacing: '0.02em',
  },
}

const unterschied = {
  section: {
    padding: '100px 24px',
    background: '#0a0a0a',
  },
  container: {
    maxWidth: '900px',
    margin: '0 auto',
    textAlign: 'center',
  },
  table: {
    borderRadius: '12px',
    overflow: 'hidden',
    border: '1px solid rgba(212, 175, 55, 0.12)',
  },
  headerRow: {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    background: '#141414',
  },
  headerCell: {
    padding: '16px 24px',
    fontFamily: "'Raleway', sans-serif",
    fontSize: '0.78rem',
    fontWeight: '600',
    color: '#9A9589',
    letterSpacing: '0.08em',
    textTransform: 'uppercase',
    textAlign: 'left',
  },
  row: {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    borderTop: '1px solid rgba(212, 175, 55, 0.06)',
  },
  cellAndere: {
    padding: '14px 24px',
    fontFamily: "'Raleway', sans-serif",
    fontSize: '0.9rem',
    color: '#6B6760',
    textAlign: 'left',
    background: '#0d0d0d',
    textDecoration: 'line-through',
    textDecorationColor: 'rgba(107, 103, 96, 0.3)',
  },
  cellHR: {
    padding: '14px 24px',
    fontFamily: "'Raleway', sans-serif",
    fontSize: '0.9rem',
    color: '#E8E4D9',
    textAlign: 'left',
    background: 'rgba(212, 175, 55, 0.04)',
  },
}

const cta = {
  section: {
    position: 'relative',
    padding: '120px 24px',
    textAlign: 'center',
    overflow: 'hidden',
  },
  glow: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: '700px',
    height: '500px',
    borderRadius: '50%',
    background: 'radial-gradient(circle, rgba(212, 175, 55, 0.09) 0%, rgba(212, 175, 55, 0.03) 45%, transparent 70%)',
    pointerEvents: 'none',
  },
  ring: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: '560px',
    height: '420px',
    borderRadius: '50%',
    border: '1px solid rgba(212, 175, 55, 0.5)',
    opacity: 0.08,
    pointerEvents: 'none',
  },
  content: {
    position: 'relative',
    zIndex: 1,
  },
  title: {
    fontFamily: "'Cormorant Garamond', serif",
    fontSize: 'clamp(1.8rem, 4vw, 2.8rem)',
    fontWeight: '400',
    color: '#E8E4D9',
    marginBottom: '16px',
  },
  subtitle: {
    fontFamily: "'Raleway', sans-serif",
    fontSize: '1.05rem',
    color: '#9A9589',
    marginBottom: '36px',
  },
}
