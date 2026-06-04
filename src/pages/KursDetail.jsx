// ═══════════════════════════════════════════════════════════
// KursDetail — Kursübersicht mit Modulen, Lektionen & Fortschritt
// ═══════════════════════════════════════════════════════════

import { useState, useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'
import { useAuth } from '../config/AuthContext'
import { getKurs, getGesamtLektionen } from '../data/kurse'
import {
  getProgress,
  isModulComplete,
  isModulUnlocked,
  isLektionUnlocked,
  getProgressPercent,
  isKursComplete,
} from '../config/progress'
import AppShell from '../components/AppShell'

export default function KursDetail() {
  const { kursId } = useParams()
  const { user } = useAuth()
  const kurs = getKurs(kursId)

  const [completedLektionen, setCompletedLektionen] = useState([])
  const [expandedModul, setExpandedModul] = useState(null)
  const [loaded, setLoaded] = useState(false)

  // Fortschritt laden
  useEffect(() => {
    if (!user || !kurs) return
    getProgress(user.uid, kursId).then(data => {
      setCompletedLektionen(data.completedLektionen || [])
      setLoaded(true)
      
      // Auto-expand: erstes nicht-abgeschlossenes Modul
      if (kurs.module.length > 0) {
        const firstIncomplete = kurs.module.find(
          m => !m.lektionen.every(l => (data.completedLektionen || []).includes(l.id))
        )
        setExpandedModul(firstIncomplete ? firstIncomplete.nr : kurs.module[0].nr)
      }
    })
  }, [user, kursId])

  if (!kurs) {
    return (
      <AppShell>
        <div style={s.notFound}>
          <h2 style={s.nfTitle}>Kurs nicht gefunden</h2>
          <p style={s.nfDesc}>
            Dieser Kurs existiert nicht oder ist noch nicht verfügbar.
          </p>
          <Link to="/kurse" className="btn btn-outline">
            Zurück zur Übersicht
          </Link>
        </div>
      </AppShell>
    )
  }

  const progress = getProgressPercent(completedLektionen, kursId)
  const totalLektionen = getGesamtLektionen(kursId)
  const completedCount = completedLektionen.filter(id => id.startsWith(kursId)).length
  const kursCompleted = isKursComplete(completedLektionen, kursId)

  // Erste freie Lektion finden für "Fortsetzen" Button
  const getNextLektion = () => {
    for (const modul of kurs.module) {
      for (const lektion of modul.lektionen) {
        if (!completedLektionen.includes(lektion.id)) {
          return lektion.id
        }
      }
    }
    return kurs.module[0]?.lektionen[0]?.id || null
  }

  return (
    <AppShell>
      <div style={s.page}>
        {/* Breadcrumb */}
        <div style={s.breadcrumb}>
          <Link to="/kurse" style={s.breadLink}>Kurse</Link>
          <span style={s.breadSep}>/</span>
          <span style={s.breadCurrent}>{kurs.titel}</span>
        </div>

        {/* Header */}
        <div style={s.header}>
          <span style={s.badge}>{kurs.symbol} {kurs.format === 'mikro' ? 'Mikro-Kurs' : kurs.format === 'standard' ? 'Standard-Kurs' : kurs.format === 'intensiv' ? 'Intensiv-Schulung' : 'Ausbildung'} · {kurs.stunden} · {kurs.preis}</span>
          <h1 style={s.title}>{kurs.titel}</h1>
          <p style={s.desc}>{kurs.beschreibung || kurs.desc}</p>
        </div>

        {/* Fortschritts-Leiste */}
        {loaded && totalLektionen > 0 && (
          <div style={s.progressSection}>
            <div style={s.progressHeader}>
              <span style={s.progressLabel}>
                {kursCompleted ? '✓ Kurs abgeschlossen' : `${completedCount} von ${totalLektionen} Lektionen`}
              </span>
              <span style={s.progressPercent}>{progress}%</span>
            </div>
            <div style={s.progressBar}>
              <div style={{
                ...s.progressFill,
                width: `${progress}%`,
                background: kursCompleted
                  ? 'linear-gradient(90deg, #4CAF50, #66BB6A)'
                  : 'linear-gradient(90deg, #D4AF37, #E8D48B)',
              }} />
            </div>
            {!kursCompleted && completedCount > 0 && (
              <Link
                to={`/kurs/${kursId}/lektion/${getNextLektion()}`}
                className="btn btn-gold"
                style={s.continueBtn}
              >
                Fortsetzen →
              </Link>
            )}
          </div>
        )}

        {/* Module */}
        <div style={s.moduleSection}>
          <h2 style={s.sectionTitle}>Module</h2>
          <div style={s.moduleList}>
            {kurs.module.map(m => {
              const unlocked = isModulUnlocked(completedLektionen, kurs, m.nr)
              const complete = isModulComplete(completedLektionen, m)
              const isExpanded = expandedModul === m.nr
              const completedInModul = m.lektionen.filter(l => completedLektionen.includes(l.id)).length

              return (
                <div key={m.nr} style={{
                  ...s.moduleCard,
                  ...(unlocked ? {} : s.moduleCardLocked),
                  ...(complete ? s.moduleCardComplete : {}),
                }}>
                  {/* Modul-Header */}
                  <button
                    onClick={() => unlocked && setExpandedModul(isExpanded ? null : m.nr)}
                    style={s.moduleHeader}
                    disabled={!unlocked}
                  >
                    <div style={s.moduleLeft}>
                      <span style={{
                        ...s.moduleNr,
                        color: complete ? '#4CAF50' : unlocked ? 'rgba(212, 175, 55, 0.5)' : 'rgba(212, 175, 55, 0.15)',
                      }}>
                        {complete ? '✓' : String(m.nr).padStart(2, '0')}
                      </span>
                      <div>
                        <div style={{
                          ...s.moduleTitel,
                          color: unlocked ? '#E8E4D9' : '#4a4a4a',
                        }}>{m.titel}</div>
                        <div style={s.moduleMeta}>
                          {m.lektionen.length} Lektionen · {m.dauer}
                          {unlocked && completedInModul > 0 && !complete && (
                            <span style={s.moduleProgress}> · {completedInModul}/{m.lektionen.length}</span>
                          )}
                        </div>
                      </div>
                    </div>
                    <div style={s.moduleRight}>
                      {!unlocked ? (
                        <span style={s.locked}>Gesperrt</span>
                      ) : (
                        <span style={{
                          ...s.expandArrow,
                          transform: isExpanded ? 'rotate(180deg)' : 'rotate(0deg)',
                        }}>▾</span>
                      )}
                    </div>
                  </button>

                  {/* Lektions-Liste (expanded) */}
                  {isExpanded && unlocked && (
                    <div style={s.lektionList}>
                      {m.lektionen.map((l, idx) => {
                        const lCompleted = completedLektionen.includes(l.id)
                        const lUnlocked = isLektionUnlocked(completedLektionen, kurs, l.id)

                        return (
                          <div key={l.id} style={s.lektionItem}>
                            <span style={{
                              ...s.lektionDot,
                              background: lCompleted ? '#4CAF50' : lUnlocked ? '#D4AF37' : '#333',
                            }} />
                            {lUnlocked ? (
                              <Link
                                to={`/kurs/${kursId}/lektion/${l.id}`}
                                style={{
                                  ...s.lektionLink,
                                  color: lCompleted ? '#9A9589' : '#E8E4D9',
                                }}
                              >
                                {l.titel}
                                {lCompleted && <span style={s.lektionCheck}> ✓</span>}
                              </Link>
                            ) : (
                              <span style={s.lektionLocked}>
                                {l.titel}
                              </span>
                            )}
                            {l.uebung && (
                              <span style={s.lektionUebung} title="Enthält Übung">◈</span>
                            )}
                          </div>
                        )
                      })}
                      
                      {/* Start/Fortsetzen Button im Modul */}
                      {!complete && (
                        <div style={s.moduleCTA}>
                          <Link
                            to={`/kurs/${kursId}/lektion/${
                              m.lektionen.find(l => !completedLektionen.includes(l.id))?.id || m.lektionen[0].id
                            }`}
                            className="btn btn-gold"
                            style={s.moduleStartBtn}
                          >
                            {completedInModul > 0 ? 'Fortsetzen' : 'Modul starten'}
                          </Link>
                        </div>
                      )}
                    </div>
                  )}
                </div>
              )
            })}
          </div>
        </div>

        {/* Kurs-Abschluss */}
        {kursCompleted && (
          <div style={s.completedBanner}>
            <span style={s.completedIcon}>✦</span>
            <div>
              <h3 style={s.completedTitle}>Kurs abgeschlossen!</h3>
              <p style={s.completedText}>
                Du hast alle {totalLektionen} Lektionen erfolgreich durchgearbeitet.
                Dein Zertifikat wird bald hier verfügbar sein.
              </p>
            </div>
          </div>
        )}
      </div>
    </AppShell>
  )
}

// ── Styles ────────────────────────────────────────────────
const s = {
  page: { maxWidth: '800px' },
  breadcrumb: {
    display: 'flex',
    alignItems: 'center',
    gap: '8px',
    marginBottom: '28px',
  },
  breadLink: {
    fontFamily: "'Raleway', sans-serif",
    fontSize: '0.82rem',
    color: '#6B6760',
    textDecoration: 'none',
  },
  breadSep: { color: '#4a4a4a', fontSize: '0.78rem' },
  breadCurrent: {
    fontFamily: "'Raleway', sans-serif",
    fontSize: '0.82rem',
    color: '#9A9589',
  },
  header: { marginBottom: '28px' },
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
    marginBottom: '16px',
  },
  title: {
    fontFamily: "'Cormorant Garamond', serif",
    fontSize: 'clamp(1.6rem, 3vw, 2.2rem)',
    fontWeight: '400',
    color: '#E8E4D9',
    marginBottom: '12px',
  },
  desc: {
    fontFamily: "'Raleway', sans-serif",
    fontSize: '0.95rem',
    color: '#9A9589',
    lineHeight: '1.7',
    maxWidth: '640px',
  },

  // Progress
  progressSection: {
    marginBottom: '36px',
    padding: '20px 24px',
    background: '#111111',
    borderRadius: '12px',
    border: '1px solid rgba(212, 175, 55, 0.08)',
  },
  progressHeader: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: '10px',
  },
  progressLabel: {
    fontFamily: "'Raleway', sans-serif",
    fontSize: '0.85rem',
    color: '#9A9589',
  },
  progressPercent: {
    fontFamily: "'Cormorant Garamond', serif",
    fontSize: '1.1rem',
    fontWeight: '600',
    color: '#D4AF37',
  },
  progressBar: {
    height: '4px',
    background: 'rgba(212, 175, 55, 0.1)',
    borderRadius: '2px',
    overflow: 'hidden',
  },
  progressFill: {
    height: '100%',
    borderRadius: '2px',
    transition: 'width 0.6s ease',
  },
  continueBtn: {
    marginTop: '16px',
    fontSize: '0.85rem',
    padding: '8px 20px',
  },

  // Module
  moduleSection: { marginBottom: '40px' },
  sectionTitle: {
    fontFamily: "'Cormorant Garamond', serif",
    fontSize: '1.3rem',
    fontWeight: '500',
    color: '#E8E4D9',
    marginBottom: '16px',
  },
  moduleList: {
    display: 'flex',
    flexDirection: 'column',
    gap: '10px',
  },
  moduleCard: {
    background: '#111111',
    borderRadius: '10px',
    border: '1px solid rgba(212, 175, 55, 0.08)',
    overflow: 'hidden',
    transition: 'border-color 0.3s ease',
  },
  moduleCardLocked: {
    opacity: 0.55,
  },
  moduleCardComplete: {
    borderColor: 'rgba(76, 175, 80, 0.2)',
  },
  moduleHeader: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: '18px 20px',
    width: '100%',
    background: 'none',
    border: 'none',
    cursor: 'pointer',
    textAlign: 'left',
  },
  moduleLeft: {
    display: 'flex',
    alignItems: 'center',
    gap: '16px',
  },
  moduleNr: {
    fontFamily: "'Cormorant Garamond', serif",
    fontSize: '1.1rem',
    fontWeight: '600',
    width: '28px',
    textAlign: 'center',
    flexShrink: 0,
  },
  moduleTitel: {
    fontFamily: "'Raleway', sans-serif",
    fontSize: '0.92rem',
    fontWeight: '500',
    marginBottom: '3px',
  },
  moduleMeta: {
    fontFamily: "'Raleway', sans-serif",
    fontSize: '0.78rem',
    color: '#6B6760',
  },
  moduleProgress: {
    color: '#D4AF37',
  },
  moduleRight: {},
  locked: {
    fontFamily: "'Raleway', sans-serif",
    fontSize: '0.78rem',
    color: '#4a4a4a',
    fontStyle: 'italic',
  },
  expandArrow: {
    color: '#D4AF37',
    fontSize: '0.9rem',
    transition: 'transform 0.25s ease',
  },

  // Lektionen
  lektionList: {
    borderTop: '1px solid rgba(212, 175, 55, 0.06)',
    padding: '12px 20px 16px',
    animation: 'fadeIn 0.3s ease forwards',
  },
  lektionItem: {
    display: 'flex',
    alignItems: 'center',
    gap: '12px',
    padding: '10px 0 10px 28px',
    borderBottom: '1px solid rgba(255,255,255,0.03)',
  },
  lektionDot: {
    width: '8px',
    height: '8px',
    borderRadius: '50%',
    flexShrink: 0,
  },
  lektionLink: {
    fontFamily: "'Raleway', sans-serif",
    fontSize: '0.88rem',
    textDecoration: 'none',
    flex: 1,
    transition: 'color 0.2s ease',
  },
  lektionCheck: {
    color: '#4CAF50',
    fontSize: '0.8rem',
  },
  lektionLocked: {
    fontFamily: "'Raleway', sans-serif",
    fontSize: '0.88rem',
    color: '#4a4a4a',
    flex: 1,
  },
  lektionUebung: {
    color: '#D4AF37',
    fontSize: '0.7rem',
    flexShrink: 0,
    opacity: 0.6,
  },
  moduleCTA: {
    paddingTop: '12px',
    paddingLeft: '28px',
  },
  moduleStartBtn: {
    fontSize: '0.82rem',
    padding: '8px 20px',
  },

  // Completed Banner
  completedBanner: {
    display: 'flex',
    alignItems: 'flex-start',
    gap: '16px',
    padding: '24px',
    background: 'rgba(76, 175, 80, 0.06)',
    borderRadius: '12px',
    border: '1px solid rgba(76, 175, 80, 0.2)',
  },
  completedIcon: {
    fontSize: '1.4rem',
    color: '#4CAF50',
    marginTop: '2px',
  },
  completedTitle: {
    fontFamily: "'Cormorant Garamond', serif",
    fontSize: '1.2rem',
    fontWeight: '600',
    color: '#4CAF50',
    marginBottom: '6px',
  },
  completedText: {
    fontFamily: "'Raleway', sans-serif",
    fontSize: '0.88rem',
    color: '#9A9589',
    lineHeight: '1.6',
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
