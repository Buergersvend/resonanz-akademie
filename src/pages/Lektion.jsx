// ═══════════════════════════════════════════════════════════
// Lektion — Einzellektion mit Text, Übung und Navigation
// ═══════════════════════════════════════════════════════════

import { useState, useEffect } from 'react'
import { useParams, useNavigate, Link } from 'react-router-dom'
import { useAuth } from '../config/AuthContext'
import { getLektion, getNavigation } from '../data/kurse'
import { getProgress, completeLektion, isLektionUnlocked } from '../config/progress'
import AppShell from '../components/AppShell'

export default function Lektion() {
  const { kursId, lektionId } = useParams()
  const { user } = useAuth()
  const navigate = useNavigate()
  
  const [completedLektionen, setCompletedLektionen] = useState([])
  const [completing, setCompleting] = useState(false)
  const [showUebung, setShowUebung] = useState(false)
  const [loaded, setLoaded] = useState(false)

  const result = getLektion(kursId, lektionId)
  const nav = getNavigation(kursId, lektionId)

  // Fortschritt laden
  useEffect(() => {
    if (!user) return
    getProgress(user.uid, kursId).then(data => {
      setCompletedLektionen(data.completedLektionen || [])
      setLoaded(true)
    })
  }, [user, kursId, lektionId])

  // Scroll to top bei Lektionswechsel
  useEffect(() => {
    window.scrollTo(0, 0)
    setShowUebung(false)
  }, [lektionId])

  if (!result) {
    return (
      <AppShell>
        <div style={s.notFound}>
          <h2 style={s.nfTitle}>Lektion nicht gefunden</h2>
          <Link to={`/kurs/${kursId}`} className="btn btn-outline">
            Zurück zum Kurs
          </Link>
        </div>
      </AppShell>
    )
  }

  const { lektion, modul, kurs } = result
  const isCompleted = completedLektionen.includes(lektionId)
  const isUnlocked = isLektionUnlocked(completedLektionen, kurs, lektionId)

  // Gesperrt → zurück zur Kursübersicht
  if (loaded && !isUnlocked) {
    return (
      <AppShell>
        <div style={s.notFound}>
          <h2 style={s.nfTitle}>Lektion noch gesperrt</h2>
          <p style={s.nfDesc}>
            Schließe zuerst die vorherige Lektion ab, um diese freizuschalten.
          </p>
          <Link to={`/kurs/${kursId}`} className="btn btn-outline">
            Zurück zum Kurs
          </Link>
        </div>
      </AppShell>
    )
  }

  const handleComplete = async () => {
    if (isCompleted || completing) return
    setCompleting(true)
    const success = await completeLektion(user.uid, kursId, lektionId)
    if (success) {
      setCompletedLektionen(prev => [...prev, lektionId])
    }
    setCompleting(false)
  }

  const handleNext = async () => {
    // Automatisch abschließen wenn noch nicht erledigt
    if (!isCompleted) {
      await completeLektion(user.uid, kursId, lektionId)
    }
    if (nav.next) {
      navigate(`/kurs/${kursId}/lektion/${nav.next}`)
    } else {
      // Kurs fertig → zurück zur Übersicht
      navigate(`/kurs/${kursId}`)
    }
  }

  // Text-Rendering: Absätze und Aufzählungszeichen
  const renderInhalt = (text) => {
    return text.split('\n\n').map((block, i) => {
      // Aufzählungsliste
      if (block.includes('\n•') || block.startsWith('•')) {
        const lines = block.split('\n')
        const intro = lines[0].startsWith('•') ? null : lines[0]
        const items = lines.filter(l => l.startsWith('•')).map(l => l.replace('•', '').trim())
        return (
          <div key={i} style={s.textBlock}>
            {intro && <p style={s.paragraph}>{intro}</p>}
            <ul style={s.list}>
              {items.map((item, j) => (
                <li key={j} style={s.listItem}>{item}</li>
              ))}
            </ul>
          </div>
        )
      }
      return <p key={i} style={s.paragraph}>{block}</p>
    })
  }

  return (
    <AppShell>
      <div style={s.page}>
        {/* Sticky Rückweg-Zeile */}
        <div style={s.breadcrumb}>
          <Link to={`/kurs/${kursId}`} style={s.breadBack}>← Zurück zum Kurs</Link>
          <span style={s.breadSep}>·</span>
          <span style={s.breadCurrent}>Modul {modul.nr} · {kurs.titel}</span>
        </div>

        {/* Header */}
        <div style={s.header}>
          <div style={s.headerMeta}>
            <span style={s.badge}>
              Modul {modul.nr} · Lektion {nav.position} von {nav.total}
            </span>
            {isCompleted && (
              <span style={s.completedBadge}>✓ Abgeschlossen</span>
            )}
          </div>
          <h1 style={s.title}>{lektion.titel}</h1>
        </div>

        {/* Progress Bar */}
        <div style={s.progressWrap}>
          <div style={s.progressBar}>
            <div style={{
              ...s.progressFill,
              width: `${(nav.position / nav.total) * 100}%`,
            }} />
          </div>
          <span style={s.progressLabel}>
            {nav.position} / {nav.total}
          </span>
        </div>

        {/* Inhalt */}
        <div style={s.content}>
          {renderInhalt(lektion.inhalt)}
        </div>

        {/* Übung */}
        {lektion.uebung && (
          <div style={s.uebungSection}>
            <button
              onClick={() => setShowUebung(!showUebung)}
              style={s.uebungToggle}
            >
              <span style={s.uebungIcon}>◈</span>
              <span style={s.uebungLabel}>
                Übung: {lektion.uebung.titel}
                <span style={s.uebungDauer}> · {lektion.uebung.dauer}</span>
              </span>
              <span style={{
                ...s.uebungArrow,
                transform: showUebung ? 'rotate(180deg)' : 'rotate(0deg)',
              }}>
                ▾
              </span>
            </button>
            
            {showUebung && (
              <div style={s.uebungContent}>
                {lektion.uebung.anleitung.split('\n\n').map((block, i) => (
                  <p key={i} style={s.uebungText}>{block}</p>
                ))}
              </div>
            )}
          </div>
        )}

        {/* Navigation */}
        <div style={s.navSection}>
          <div style={s.navButtons}>
            {nav.prev ? (
              <Link
                to={`/kurs/${kursId}/lektion/${nav.prev}`}
                className="btn btn-outline"
                style={s.navBtn}
              >
                ← Vorherige
              </Link>
            ) : (
              <Link
                to={`/kurs/${kursId}`}
                className="btn btn-outline"
                style={s.navBtn}
              >
                ← Kursübersicht
              </Link>
            )}

            {!isCompleted ? (
              <button
                onClick={handleNext}
                className="btn btn-gold"
                style={s.navBtn}
                disabled={completing}
              >
                {completing ? 'Speichere...' : nav.isLast ? 'Kurs abschließen ✓' : 'Abschließen & Weiter →'}
              </button>
            ) : nav.next ? (
              <Link
                to={`/kurs/${kursId}/lektion/${nav.next}`}
                className="btn btn-gold"
                style={s.navBtn}
              >
                Weiter →
              </Link>
            ) : (
              <Link
                to={`/kurs/${kursId}`}
                className="btn btn-gold"
                style={s.navBtn}
              >
                Kurs abgeschlossen ✓
              </Link>
            )}
          </div>
        </div>
      </div>
    </AppShell>
  )
}

// ── Styles ────────────────────────────────────────────────
const s = {
  page: {
    maxWidth: '720px',
    animation: 'fadeIn 0.4s ease forwards',
  },
  breadcrumb: {
    position: 'sticky',
    top: 0,
    zIndex: 20,
    display: 'flex',
    alignItems: 'center',
    gap: '10px',
    padding: '12px 0',
    marginBottom: '20px',
    background: 'rgba(10, 10, 10, 0.85)',
    backdropFilter: 'blur(10px)',
    WebkitBackdropFilter: 'blur(10px)',
    borderBottom: '1px solid rgba(212, 175, 55, 0.08)',
  },
  breadBack: {
    fontFamily: "'Raleway', sans-serif",
    fontSize: '0.82rem',
    fontWeight: '600',
    color: '#D4AF37',
    textDecoration: 'none',
    letterSpacing: '0.03em',
    whiteSpace: 'nowrap',
    flexShrink: 0,
  },
  breadSep: {
    color: '#4a4a4a',
    fontSize: '0.78rem',
    flexShrink: 0,
  },
  breadCurrent: {
    fontFamily: "'Raleway', sans-serif",
    fontSize: '0.82rem',
    color: '#9A9589',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    whiteSpace: 'nowrap',
  },
  header: {
    marginBottom: '20px',
  },
  headerMeta: {
    display: 'flex',
    alignItems: 'center',
    gap: '12px',
    marginBottom: '12px',
    flexWrap: 'wrap',
  },
  badge: {
    display: 'inline-block',
    padding: '5px 14px',
    background: 'rgba(212, 175, 55, 0.08)',
    borderRadius: '999px',
    fontFamily: "'Raleway', sans-serif",
    fontSize: '0.72rem',
    fontWeight: '600',
    color: '#D4AF37',
    letterSpacing: '0.04em',
  },
  completedBadge: {
    display: 'inline-block',
    padding: '5px 14px',
    background: 'rgba(76, 175, 80, 0.1)',
    borderRadius: '999px',
    fontFamily: "'Raleway', sans-serif",
    fontSize: '0.72rem',
    fontWeight: '600',
    color: '#4CAF50',
    letterSpacing: '0.04em',
  },
  title: {
    fontFamily: "'Cormorant Garamond', serif",
    fontSize: 'clamp(1.5rem, 3vw, 2rem)',
    fontWeight: '400',
    color: '#E8E4D9',
    lineHeight: '1.3',
  },
  progressWrap: {
    display: 'flex',
    alignItems: 'center',
    gap: '12px',
    marginBottom: '36px',
  },
  progressBar: {
    flex: 1,
    height: '3px',
    background: 'rgba(212, 175, 55, 0.1)',
    borderRadius: '2px',
    overflow: 'hidden',
  },
  progressFill: {
    height: '100%',
    background: 'linear-gradient(90deg, #D4AF37, #E8D48B)',
    borderRadius: '2px',
    transition: 'width 0.5s ease',
  },
  progressLabel: {
    fontFamily: "'Raleway', sans-serif",
    fontSize: '0.72rem',
    color: '#6B6760',
    whiteSpace: 'nowrap',
  },
  content: {
    marginBottom: '40px',
  },
  textBlock: {
    marginBottom: '20px',
  },
  paragraph: {
    fontFamily: "'Raleway', sans-serif",
    fontSize: '0.95rem',
    color: '#C8C4B9',
    lineHeight: '1.85',
    marginBottom: '20px',
  },
  list: {
    listStyle: 'none',
    padding: 0,
    margin: '12px 0',
    display: 'flex',
    flexDirection: 'column',
    gap: '8px',
  },
  listItem: {
    fontFamily: "'Raleway', sans-serif",
    fontSize: '0.93rem',
    color: '#C8C4B9',
    lineHeight: '1.7',
    paddingLeft: '20px',
    position: 'relative',
    // Pseudo-element via CSS wäre besser, aber inline-styles erlauben es nicht.
    // Wir nutzen den Text-Inhalt direkt mit "· " Prefix
  },

  // Übung
  uebungSection: {
    marginBottom: '40px',
    borderRadius: '12px',
    border: '1px solid rgba(212, 175, 55, 0.15)',
    overflow: 'hidden',
  },
  uebungToggle: {
    display: 'flex',
    alignItems: 'center',
    gap: '12px',
    width: '100%',
    padding: '18px 20px',
    background: 'rgba(212, 175, 55, 0.04)',
    border: 'none',
    cursor: 'pointer',
    textAlign: 'left',
  },
  uebungIcon: {
    color: '#D4AF37',
    fontSize: '1rem',
    flexShrink: 0,
  },
  uebungLabel: {
    fontFamily: "'Raleway', sans-serif",
    fontSize: '0.9rem',
    fontWeight: '600',
    color: '#E8E4D9',
    flex: 1,
  },
  uebungDauer: {
    fontWeight: '400',
    color: '#9A9589',
    fontSize: '0.82rem',
  },
  uebungArrow: {
    color: '#D4AF37',
    fontSize: '0.9rem',
    transition: 'transform 0.25s ease',
    flexShrink: 0,
  },
  uebungContent: {
    padding: '20px 24px',
    borderTop: '1px solid rgba(212, 175, 55, 0.1)',
    background: 'rgba(212, 175, 55, 0.02)',
    animation: 'fadeIn 0.3s ease forwards',
  },
  uebungText: {
    fontFamily: "'Raleway', sans-serif",
    fontSize: '0.9rem',
    color: '#C8C4B9',
    lineHeight: '1.8',
    marginBottom: '16px',
    whiteSpace: 'pre-line',
  },

  // Navigation
  navSection: {
    paddingTop: '24px',
    borderTop: '1px solid rgba(212, 175, 55, 0.08)',
  },
  navButtons: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    gap: '12px',
    flexWrap: 'wrap',
  },
  navBtn: {
    fontSize: '0.88rem',
    padding: '10px 22px',
  },

  // Not Found
  notFound: {
    textAlign: 'center',
    padding: '80px 24px',
  },
  nfTitle: {
    fontFamily: "'Cormorant Garamond', serif",
    fontSize: '1.6rem',
    color: '#E8E4D9',
    marginBottom: '12px',
  },
  nfDesc: {
    fontFamily: "'Raleway', sans-serif",
    fontSize: '0.95rem',
    color: '#6B6760',
    marginBottom: '24px',
  },
}
