// ═══════════════════════════════════════════════════════════
// Dashboard — Lernwelt Startseite (eingeloggt)
// Zeigt echten Fortschritt aus Firestore
// Saniert 11.06.2026: Featured-Kurs dynamisch aus Kursdaten,
// Zähler dynamisch, Teilnahmezertifikate, Markenname korrigiert
// ═══════════════════════════════════════════════════════════

import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useAuth } from '../config/AuthContext'
import { KURSE, getGesamtLektionen, BEREICHE } from '../data/kurse'
import { getProgress, getProgressPercent, isKursComplete } from '../config/progress'
import AppShell from '../components/AppShell'
import Teilnahmebescheinigung from '../components/Teilnahmebescheinigung'

const LIVE_COUNT = KURSE.filter(k => (k.status ?? 'live') === 'live').length
const FEATURED_ID = 'B10'

export default function Dashboard() {
  const { user, setDisplayName } = useAuth()
  const displayName = user?.displayName || user?.email?.split('@')[0] || 'Reisender'

  const [progressData, setProgressData] = useState({})
  const [loaded, setLoaded] = useState(false)
  const [nameEingabe, setNameEingabe] = useState('')

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
      results.forEach(r => { map[r.kursId] = r.completed })
      setProgressData(map)
      setLoaded(true)
    })
  }, [user])

  // Aggregierte Stats berechnen
  const liveKurse = KURSE.filter(k => k.status === 'live')
  const totalLektionen = liveKurse.reduce((sum, k) => sum + getGesamtLektionen(k.id), 0)
  const completedLektionen = Object.values(progressData).reduce((sum, arr) => sum + arr.length, 0)
  const completedKurse = liveKurse.filter(k => isKursComplete(progressData[k.id] || [], k.id)).length
  const abgeschlosseneKurse = liveKurse.filter(k => isKursComplete(progressData[k.id] || [], k.id))
  const [zeigeKurs, setZeigeKurs] = useState(null)
  const activeKurse = liveKurse.filter(k => {
    const c = progressData[k.id] || []
    return c.length > 0 && !isKursComplete(c, k.id)
  })

  // Empfohlener Kurs — Titel & Beschreibung dynamisch aus den Kursdaten
  // (Single Source of Truth: nie wieder veraltete Featured-Texte)
  const featuredKurs = KURSE.find(k => k.id === FEATURED_ID)

  // Nächste Lektion finden (aus dem aktiven Kurs)
  const getNextLektionInfo = () => {
    for (const kurs of liveKurse) {
      const completed = progressData[kurs.id] || []
      if (completed.length === 0) continue
      if (isKursComplete(completed, kurs.id)) continue
      // Erste nicht-abgeschlossene Lektion finden
      for (const modul of kurs.module) {
        for (const lektion of modul.lektionen) {
          if (!completed.includes(lektion.id)) {
            return { kurs, modul, lektion }
          }
        }
      }
    }
    return null
  }

  const nextInfo = loaded ? getNextLektionInfo() : null

  return (
    <AppShell>
      <div style={s.page}>
        {/* Welcome */}
        <div style={s.welcome}>
          <h1 style={s.greeting}>
            Willkommen, <span style={s.gold}>{displayName}</span>
          </h1>
          <p style={s.sub}>Dein persönlicher Lernraum in der Human Resonanz Lernwelt.</p>
        </div>

        {/* Weiter lernen — wenn aktiver Kurs vorhanden */}
        {nextInfo && (
          <div style={s.continueSection}>
            <span style={s.sectionOverline}>Weiter lernen</span>
            <div style={s.continueCard}>
              <div style={s.continueLeft}>
                <span style={s.continueBadge}>
                  {nextInfo.kurs.symbol} {nextInfo.kurs.titel}
                </span>
                <h2 style={s.continueTitle}>{nextInfo.lektion.titel}</h2>
                <p style={s.continueMeta}>
                  Modul {nextInfo.modul.nr}: {nextInfo.modul.titel}
                </p>
                <div style={s.continueProgressWrap}>
                  <div style={s.continueProgressBar}>
                    <div style={{
                      ...s.continueProgressFill,
                      width: `${getProgressPercent(progressData[nextInfo.kurs.id] || [], nextInfo.kurs.id)}%`,
                    }} />
                  </div>
                  <span style={s.continueProgressLabel}>
                    {getProgressPercent(progressData[nextInfo.kurs.id] || [], nextInfo.kurs.id)}%
                  </span>
                </div>
                <Link
                  to={`/kurs/${nextInfo.kurs.id}/lektion/${nextInfo.lektion.id}`}
                  className="btn btn-gold"
                  style={{ fontSize: '0.88rem', marginTop: '8px' }}
                >
                  Fortsetzen →
                </Link>
              </div>
            </div>
          </div>
        )}

        {/* Quick Actions */}
        <div style={s.grid}>
          {user && !user.displayName && (
            <div style={{ ...s.card, borderColor: s.gold.color }}>
              <h3 style={s.cardTitle}>Dein Name für Bescheinigungen</h3>
              <p style={s.cardDesc}>Hinterlege deinen vollständigen Namen — er erscheint auf deinen Teilnahmebescheinigungen.</p>
              <div style={{ display: 'flex', gap: '10px', marginTop: '8px' }}>
                <input
                  type="text"
                  value={nameEingabe}
                  onChange={e => setNameEingabe(e.target.value)}
                  placeholder="Vor- und Nachname"
                  style={{ flex: 1, padding: '8px 12px', borderRadius: '8px', border: `1px solid ${s.gold.color}`, background: 'transparent', color: s.cardTitle.color, fontFamily: 'Raleway, sans-serif', fontSize: '14px' }}
                />
                <button
                  onClick={async () => { if (nameEingabe.trim()) { await setDisplayName(nameEingabe.trim()); setNameEingabe(''); } }}
                  style={{ fontFamily: 'Raleway, sans-serif', fontSize: '13px', fontWeight: 600, color: s.gold.color, background: 'transparent', border: `1px solid ${s.gold.color}`, borderRadius: '8px', padding: '8px 16px', cursor: 'pointer', whiteSpace: 'nowrap' }}
                >Speichern</button>
              </div>
            </div>
          )}
          {/* Kurse Card */}
          <Link to="/kurse" style={{ textDecoration: 'none' }}>
            <div style={{ ...s.card, cursor: 'pointer' }}>
              <div style={s.cardIcon}>◈◈</div>
              <h3 style={s.cardTitle}>Kurse entdecken</h3>
              <p style={s.cardDesc}>
                {LIVE_COUNT} Kurse in 11 Bereichen — vom Schnupperkurs 
                bis zum umfassenden Vertiefungsweg.
              </p>
              <span style={s.cardLink}>Zur Kursübersicht →</span>
            </div>
          </Link>

          {/* Fortschritt Card */}
          <div style={s.card}>
            <div style={s.cardIcon}>◈◈◈</div>
            <h3 style={s.cardTitle}>Dein Fortschritt</h3>
            {loaded ? (
              completedLektionen > 0 ? (
                <>
                  <p style={s.cardDesc}>
                    {completedKurse > 0
                      ? `${completedKurse} Kurs${completedKurse > 1 ? 'e' : ''} abgeschlossen. `
                      : ''}
                    {completedLektionen} von {totalLektionen} Lektionen erledigt.
                  </p>
                  <div style={s.progressBar}>
                    <div style={{
                      ...s.progressFill,
                      width: `${Math.round((completedLektionen / totalLektionen) * 100)}%`,
                    }} />
                  </div>
                  <span style={s.progressLabel}>
                    {completedLektionen} von {totalLektionen} Lektionen
                  </span>
                </>
              ) : (
                <>
                  <p style={s.cardDesc}>
                    Du hast noch keine Kurse begonnen. Starte dein erstes 
                    Modul und verfolge deinen Weg hier.
                  </p>
                  <div style={s.progressBar}>
                    <div style={s.progressFill} />
                  </div>
                  <span style={s.progressLabel}>0 von {totalLektionen} Lektionen</span>
                </>
              )
            ) : (
              <p style={s.cardDesc}>Lade Fortschritt...</p>
            )}
          </div>

          {/* Teilnahmezertifikate Card */}
          <div style={s.card}>
            <div style={s.cardIcon}>🎓</div>
            <h3 style={s.cardTitle}>Teilnahmebescheinigungen</h3>
            {abgeschlosseneKurse.length > 0 ? (
              <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', marginTop: '8px' }}>
                {abgeschlosseneKurse.map(k => (
                  <div key={k.id} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '12px' }}>
                    <span style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: '16px', color: s.cardTitle.color }}>{k.titel}</span>
                    <button onClick={() => setZeigeKurs(k)} style={{ fontFamily: 'Raleway, sans-serif', fontSize: '12px', fontWeight: 600, letterSpacing: '0.5px', color: s.gold.color, background: 'transparent', border: `1px solid ${s.gold.color}`, borderRadius: '8px', padding: '6px 12px', cursor: 'pointer', whiteSpace: 'nowrap' }}>Bescheinigung ansehen</button>
                  </div>
                ))}
              </div>
            ) : (
              <>
                <p style={s.cardDesc}>Deine Teilnahmebescheinigungen für abgeschlossene Kurse erscheinen hier — bereit zum Ansehen und Speichern.</p>
                <span style={s.emptyState}>Noch keine abgeschlossenen Kurse</span>
              </>
            )}
          </div>
        </div>

        {/* Empfohlener Kurs — nur wenn kein aktiver Kurs oder Neuling */}
        {loaded && !nextInfo && featuredKurs && (
          <div style={s.featured}>
            <span style={s.featuredOverline}>Empfohlen für dich</span>
            <div style={s.featuredCard}>
              <div style={s.featuredLeft}>
                <span style={s.featuredBadge}>
                  {featuredKurs.symbol} {featuredKurs.stunden} · {featuredKurs.preis}
                </span>
                <h2 style={s.featuredTitle}>{featuredKurs.titel}</h2>
                <p style={s.featuredDesc}>
                  {featuredKurs.beschreibung || featuredKurs.desc}
                </p>
                <Link to={`/kurs/${FEATURED_ID}`} className="btn btn-gold" style={{ fontSize: '0.9rem' }}>
                  {(progressData[FEATURED_ID] || []).length > 0 ? 'Fortsetzen' : 'Kurs starten'}
                </Link>
              </div>
              <div style={s.featuredRight}>
                <div style={s.featuredModules}>
                  {featuredKurs.module.map(m => (
                    <div key={m.nr} style={s.module}>
                      <span style={s.moduleNr}>{String(m.nr).padStart(2, '0')}</span>
                      <span style={s.moduleName}>{m.titel}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
      {zeigeKurs && (
        <Teilnahmebescheinigung
          name={displayName}
          kursTitel={zeigeKurs.titel}
          bereich={BEREICHE.find(b => b.id === zeigeKurs.bereich)?.name || ''}
          datum={new Date().toLocaleDateString('de-DE', { day: 'numeric', month: 'long', year: 'numeric' })}
          monatJahr={new Date().toLocaleDateString('de-DE', { month: 'long', year: 'numeric' })}
          nummer={('HR-' + zeigeKurs.id + '-' + Math.abs([...(user?.uid || 'anon')].reduce((a, c) => (a * 31 + c.charCodeAt(0)) | 0, 7)).toString(36).toUpperCase()).slice(0, 16)}
          onClose={() => setZeigeKurs(null)}
        />
      )}
    </AppShell>
  )
}

const s = {
  page: { maxWidth: '1000px' },
  welcome: { marginBottom: '40px' },
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

  // Weiter lernen
  continueSection: { marginBottom: '36px' },
  sectionOverline: {
    display: 'block',
    fontFamily: "'Raleway', sans-serif",
    fontSize: '0.72rem',
    fontWeight: '600',
    color: '#D4AF37',
    letterSpacing: '0.14em',
    textTransform: 'uppercase',
    marginBottom: '12px',
  },
  continueCard: {
    background: '#111111',
    borderRadius: '14px',
    border: '1px solid rgba(212, 175, 55, 0.12)',
    padding: '28px 28px',
  },
  continueLeft: {},
  continueBadge: {
    display: 'inline-block',
    padding: '4px 12px',
    background: 'rgba(212, 175, 55, 0.08)',
    borderRadius: '999px',
    fontFamily: "'Raleway', sans-serif",
    fontSize: '0.72rem',
    fontWeight: '600',
    color: '#D4AF37',
    letterSpacing: '0.04em',
    marginBottom: '12px',
  },
  continueTitle: {
    fontFamily: "'Cormorant Garamond', serif",
    fontSize: '1.4rem',
    fontWeight: '500',
    color: '#E8E4D9',
    marginBottom: '6px',
  },
  continueMeta: {
    fontFamily: "'Raleway', sans-serif",
    fontSize: '0.85rem',
    color: '#9A9589',
    marginBottom: '16px',
  },
  continueProgressWrap: {
    display: 'flex',
    alignItems: 'center',
    gap: '10px',
    marginBottom: '8px',
  },
  continueProgressBar: {
    flex: 1,
    maxWidth: '300px',
    height: '3px',
    background: 'rgba(212, 175, 55, 0.1)',
    borderRadius: '2px',
    overflow: 'hidden',
  },
  continueProgressFill: {
    height: '100%',
    background: 'linear-gradient(90deg, #D4AF37, #E8D48B)',
    borderRadius: '2px',
    transition: 'width 0.5s ease',
  },
  continueProgressLabel: {
    fontFamily: "'Raleway', sans-serif",
    fontSize: '0.72rem',
    color: '#D4AF37',
    fontWeight: '600',
  },

  // Grid Cards
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

  // Featured
  featured: { marginBottom: '32px' },
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
  featuredLeft: { flex: '1 1 300px' },
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
  featuredRight: { flex: '1 1 260px' },
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
