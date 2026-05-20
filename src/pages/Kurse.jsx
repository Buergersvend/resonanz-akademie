// ═══════════════════════════════════════════════════════════
// Kurse — Kursübersicht mit Bereiche-Filter
// ═══════════════════════════════════════════════════════════

import { useState } from 'react'
import { Link } from 'react-router-dom'
import AppShell from '../components/AppShell'

const BEREICHE = [
  { id: 'alle', name: 'Alle Bereiche', icon: '✦' },
  { id: 'organsprache', name: 'Organsprache', icon: '🫀' },
  { id: 'chakren', name: 'Chakrenarbeit', icon: '🔮' },
  { id: 'aura', name: 'Aura & Energiefeld', icon: '✨' },
  { id: 'humanenergetik', name: 'Humanenergetik', icon: '⚡' },
  { id: 'medialitaet', name: 'Medialität', icon: '👁️' },
  { id: 'karma', name: 'Karma & Seelenarbeit', icon: '🌀' },
  { id: 'humandesign', name: 'Human Design', icon: '◇' },
  { id: 'schamanismus', name: 'Schamanismus', icon: '🌿' },
  { id: 'schutz', name: 'Schutz & Erdung', icon: '🛡️' },
  { id: 'quanten', name: 'Quantenarbeit', icon: '∞' },
  { id: 'praxis', name: 'Praxis & Business', icon: '💎' },
]

// Beispiel-Kurse (wird später aus Firestore geladen)
const KURSE = [
  {
    id: 'B10',
    titel: 'Quantenheilung — Einstieg',
    bereich: 'quanten',
    format: 'mikro',
    symbol: '◈',
    stunden: '1–2h',
    preis: 'Kostenlos',
    desc: 'Grundlagen der Quantenheilung: Zwei-Punkt-Methode, Kohärenzatmung und Energielenkung.',
    module: 4,
    status: 'live',
  },
  {
    id: 'P03',
    titel: 'Affirmationstraining — Worte als Werkzeug',
    bereich: 'humanenergetik',
    format: 'standard',
    symbol: '◈◈',
    stunden: '3–4h',
    preis: 'Kostenlos',
    desc: 'Wie du Affirmationen gezielt in deine Praxis und deinen Alltag integrierst.',
    module: 6,
    status: 'coming',
  },
  {
    id: 'P02',
    titel: 'Emotionscode — Grundlagen',
    bereich: 'humanenergetik',
    format: 'standard',
    symbol: '◈◈',
    stunden: '4–6h',
    preis: 'Kostenlos',
    desc: 'Eingeschlossene Emotionen erkennen und lösen mit dem Emotionscode.',
    module: 8,
    status: 'coming',
  },
  {
    id: 'Y05',
    titel: 'Human Design × Numerologie',
    bereich: 'humandesign',
    format: 'intensiv',
    symbol: '◈◈◈',
    stunden: '8–12h',
    preis: 'Kostenlos',
    desc: 'Die Synthese zweier Systeme — dein Bodygraph trifft auf deine Lebenszahlen.',
    module: 10,
    status: 'coming',
  },
]

export default function Kurse() {
  const [activeBereich, setActiveBereich] = useState('alle')

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
          {filtered.map(kurs => (
            <div key={kurs.id} style={s.card}>
              {kurs.status === 'coming' && (
                <div style={s.comingBadge}>Demnächst</div>
              )}
              <div style={s.cardHeader}>
                <span style={s.cardFormat}>{kurs.symbol} {kurs.stunden}</span>
                <span style={s.cardPreis}>{kurs.preis}</span>
              </div>
              <h3 style={s.cardTitle}>{kurs.titel}</h3>
              <p style={s.cardDesc}>{kurs.desc}</p>
              <div style={s.cardFooter}>
                <span style={s.cardModules}>{kurs.module} Module</span>
                {kurs.status === 'live' ? (
                  <Link to={`/kurs/${kurs.id}`} className="btn btn-gold" style={s.cardBtn}>
                    Starten
                  </Link>
                ) : (
                  <span style={s.cardComingSoon}>Bald verfügbar</span>
                )}
              </div>
            </div>
          ))}
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
