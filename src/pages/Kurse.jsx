// ═══════════════════════════════════════════════════════════
// Kurse — Kursübersicht mit Bereiche-Filter
// Single Source of Truth: src/data/kurse.js
// ═══════════════════════════════════════════════════════════

import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useAuth } from '../config/AuthContext'
import { BEREICHE, KURSE, getGesamtLektionen } from '../data/kurse'
import { getProgress, getProgressPercent } from '../config/progress'
import AppShell from '../components/AppShell'

export default function Kurse() {
  const { user } = useAuth()
  const [activeBereich, setActiveBereich] = useState('alle')
  const [progressMap, setProgressMap] = useState({})

  // Fortschritt für alle Live-Kurse laden
  useEffect(() => {
    if (!user) return
    const liveKurse = KURSE.filter(k => k.status === 'live')
    Promise.all(
      liveKurse.map(k =>
        getProgress(user.uid, k.id).then(data => ({
          kursId: k.id,
          completed: data.completedLektionen || [],
        }))
      )
    ).then(results => {
      const map = {}
      results.forEach(r => {
        map[r.kursId] = r.completed
      })
      setProgressMap(map)
    })
  }, [user])

  const filtered = activeBereich === 'alle'
    ? KURSE
    : KURSE.filter(k => k.bereich === activeBereich)

  return (
    <AppShell>
      <div style={s.page}>
        <h1 style={s.title}>Kurse <span style={s.gold}>entdecken</span></h1>
        <p style={s.subtitle}>
          Über 100 Kurse in 11 Bereichen — finde deinen Einstieg.
        </p>

        {/* Bereich Filter */}
        <div style={s.filterWrap}>
          {BEREICHE.map(b => (
            <button
              key={b.id}
              onClick={() => setActiveBereich(b.id)}
              style={{
                ...s.filterBtn,
                ...(activeBereich === b.id ? s.filterActive : {}),
              }}
            >
              <span style={s.filterIcon}>{b.icon}</span>
              {b.name}
            </button>
          ))}
        </div>

        {/* Kurs-Grid */}
        <div style={s.grid}>
          {filtered.map(kurs => {
            const completed = progressMap[kurs.id] || []
            const total = getGesamtLektionen(kurs.id)
            const progress = getProgressPercent(completed, kurs.id)
            const hasProgress = completed.length > 0

            return (
              <div key={kurs.id} style={s.card}>
                {kurs.status === 'coming' && (
                  <div style={s.comingBadge}>Demnächst</div>
                )}
                <div style={s.cardHeader}>
                  <span style={s.cardFormat}>{kurs.symbol} {kurs.stunden}</span>
                  <span style={s.cardPreis}>
                    {kurs.originalPreis && (
                      <span style={s.originalPreis}>{kurs.originalPreis}</span>
                    )}
                    {' '}{kurs.preis}
                  </span>
                </div>
                <h3 style={s.cardTitle}>{kurs.titel}</h3>
                <p style={s.cardDesc}>{kurs.beschreibung || kurs.desc}</p>

                {/* Fortschritts-Leiste für aktive Kurse */}
                {kurs.status === 'live' && hasProgress && (
                  <div style={s.cardProgress}>
                    <div style={s.cardProgressBar}>
                      <div style={{
                        ...s.cardProgressFill,
                        width: `${progress}%`,
                        background: progress === 100
                          ? 'linear-gradient(90deg, #4CAF50, #66BB6A)'
                          : 'linear-gradient(90deg, #D4AF37, #E8D48B)',
                      }} />
                    </div>
                    <span style={s.cardProgressLabel}>{progress}%</span>
                  </div>
                )}

                <div style={s.cardFooter}>
                  <span style={s.cardModules}>
                    {kurs.module.length} Module{total > 0 ? ` · ${total} Lektionen` : ''}
                  </span>
                  {(kurs.status ?? 'live') !== 'coming' ? (
                    <Link to={`/kurs/${kurs.id}`} className="btn btn-gold" style={s.cardBtn}>
                      {hasProgress ? (progress === 100 ? 'Ansehen' : 'Fortsetzen') : 'Starten'}
                    </Link>
                  ) : (
                    <span style={s.cardComingSoon}>Bald verfügbar</span>
                  )}
                </div>
              </div>
            )
          })}
        </div>

        {/* Empty State */}
        {filtered.length === 0 && (
          <div style={s.empty}>
            <p style={s.emptyText}>
              In diesem Bereich sind noch keine Kurse verfügbar. 
              Neue Kurse werden laufend ergänzt.
            </p>
          </div>
        )}
      </div>
    </AppShell>
  )
}

const s = {
  page: { maxWidth: '1000px' },
  title: {
    fontFamily: "'Cormorant Garamond', serif",
    fontSize: 'clamp(1.6rem, 3vw, 2.2rem)',
    fontWeight: '400',
    color: '#E8E4D9',
    marginBottom: '8px',
  },
  gold: { color: '#D4AF37' },
  subtitle: {
    fontFamily: "'Raleway', sans-serif",
    fontSize: '0.95rem',
    color: '#6B6760',
    marginBottom: '32px',
  },
  filterWrap: {
    display: 'flex',
    flexWrap: 'wrap',
    gap: '8px',
    marginBottom: '32px',
  },
  filterBtn: {
    display: 'inline-flex',
    alignItems: 'center',
    gap: '6px',
    padding: '7px 14px',
    background: 'transparent',
    border: '1px solid rgba(212, 175, 55, 0.1)',
    borderRadius: '999px',
    fontFamily: "'Raleway', sans-serif",
    fontSize: '0.78rem',
    fontWeight: '500',
    color: '#6B6760',
    cursor: 'pointer',
    transition: 'all 0.2s ease',
    whiteSpace: 'nowrap',
  },
  filterActive: {
    background: 'rgba(212, 175, 55, 0.12)',
    borderColor: 'rgba(212, 175, 55, 0.3)',
    color: '#D4AF37',
  },
  filterIcon: { fontSize: '0.85rem' },
  grid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
    gap: '16px',
  },
  card: {
    position: 'relative',
    background: '#111111',
    borderRadius: '12px',
    border: '1px solid rgba(212, 175, 55, 0.08)',
    padding: '24px',
    display: 'flex',
    flexDirection: 'column',
    gap: '12px',
    transition: 'border-color 0.3s ease',
  },
  comingBadge: {
    position: 'absolute',
    top: '12px',
    right: '12px',
    padding: '3px 10px',
    background: 'rgba(212, 175, 55, 0.08)',
    borderRadius: '999px',
    fontFamily: "'Raleway', sans-serif",
    fontSize: '0.68rem',
    fontWeight: '600',
    color: '#D4AF37',
    letterSpacing: '0.04em',
    textTransform: 'uppercase',
  },
  cardHeader: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  cardFormat: {
    fontFamily: "'Raleway', sans-serif",
    fontSize: '0.78rem',
    fontWeight: '600',
    color: '#D4AF37',
    letterSpacing: '0.04em',
  },
  cardPreis: {
    fontFamily: "'Raleway', sans-serif",
    fontSize: '0.78rem',
    fontWeight: '600',
    color: '#9A9589',
  },
  originalPreis: {
    textDecoration: 'line-through',
    color: '#E74C3C',
    marginRight: '6px',
    fontSize: '0.75rem',
  },
  cardTitle: {
    fontFamily: "'Cormorant Garamond', serif",
    fontSize: '1.2rem',
    fontWeight: '600',
    color: '#E8E4D9',
  },
  cardDesc: {
    fontFamily: "'Raleway', sans-serif",
    fontSize: '0.85rem',
    color: '#6B6760',
    lineHeight: '1.6',
    flex: 1,
  },
  cardProgress: {
    display: 'flex',
    alignItems: 'center',
    gap: '10px',
  },
  cardProgressBar: {
    flex: 1,
    height: '3px',
    background: 'rgba(212, 175, 55, 0.1)',
    borderRadius: '2px',
    overflow: 'hidden',
  },
  cardProgressFill: {
    height: '100%',
    borderRadius: '2px',
    transition: 'width 0.5s ease',
  },
  cardProgressLabel: {
    fontFamily: "'Raleway', sans-serif",
    fontSize: '0.72rem',
    color: '#D4AF37',
    fontWeight: '600',
  },
  cardFooter: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingTop: '12px',
    borderTop: '1px solid rgba(212, 175, 55, 0.06)',
  },
  cardModules: {
    fontFamily: "'Raleway', sans-serif",
    fontSize: '0.78rem',
    color: '#6B6760',
  },
  cardBtn: {
    padding: '7px 18px',
    fontSize: '0.82rem',
  },
  cardComingSoon: {
    fontFamily: "'Raleway', sans-serif",
    fontSize: '0.78rem',
    color: '#4a4a4a',
    fontStyle: 'italic',
  },
  empty: {
    textAlign: 'center',
    padding: '60px 24px',
  },
  emptyText: {
    fontFamily: "'Raleway', sans-serif",
    fontSize: '0.95rem',
    color: '#6B6760',
  },
}
