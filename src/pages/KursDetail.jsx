// ═══════════════════════════════════════════════════════════
// KursDetail — Einzelkurs-Ansicht (Platzhalter für Session 2)
// Session 2 baut hier die Kurs-Engine: Modul-Navigation,
// Lektions-Ansicht, Fortschritts-Tracking via Firestore
// ═══════════════════════════════════════════════════════════

import { useParams, Link } from 'react-router-dom'
import AppShell from '../components/AppShell'

// Vorläufige Kursdaten (wird in Session 2 durch Firestore ersetzt)
const KURS_DATA = {
  B10: {
    titel: 'Quantenheilung — Einstieg',
    format: '◈ Mikro-Kurs',
    stunden: '1–2 Stunden',
    preis: 'Kostenlos',
    desc: 'Entdecke die Grundlagen der Quantenheilung. Lerne die Zwei-Punkt-Methode, Herzfokussierte Kohärenzatmung und Intentionsbasierte Energielenkung in 4 kompakten Modulen.',
    module: [
      { nr: 1, titel: 'Was ist Quantenheilung?', lektionen: 3, dauer: '20 Min' },
      { nr: 2, titel: 'Dein Energiesystem verstehen', lektionen: 4, dauer: '25 Min' },
      { nr: 3, titel: '3 Übungen für den Alltag', lektionen: 3, dauer: '30 Min' },
      { nr: 4, titel: 'Integration & Reflexion', lektionen: 2, dauer: '15 Min' },
    ],
  },
}

export default function KursDetail() {
  const { kursId } = useParams()
  const kurs = KURS_DATA[kursId]

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
          <span style={s.badge}>{kurs.format} · {kurs.stunden} · {kurs.preis}</span>
          <h1 style={s.title}>{kurs.titel}</h1>
          <p style={s.desc}>{kurs.desc}</p>
        </div>

        {/* Module */}
        <div style={s.moduleSection}>
          <h2 style={s.sectionTitle}>Module</h2>
          <div style={s.moduleList}>
            {kurs.module.map((m, i) => (
              <div key={m.nr} style={s.moduleCard}>
                <div style={s.moduleLeft}>
                  <span style={s.moduleNr}>{String(m.nr).padStart(2, '0')}</span>
                  <div>
                    <div style={s.moduleTitel}>{m.titel}</div>
                    <div style={s.moduleMeta}>
                      {m.lektionen} Lektionen · {m.dauer}
                    </div>
                  </div>
                </div>
                <div style={s.moduleStatus}>
                  {i === 0 ? (
                    <button className="btn btn-gold" style={s.startBtn}>
                      Starten
                    </button>
                  ) : (
                    <span style={s.locked}>Gesperrt</span>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Hinweis */}
        <div style={s.note}>
          <span style={s.noteIcon}>◈</span>
          <p style={s.noteText}>
            Die Kurs-Engine wird in Session 2 gebaut. Dann kannst du 
            Module durcharbeiten, Lektionen lesen und deinen Fortschritt verfolgen.
          </p>
        </div>
      </div>
    </AppShell>
  )
}

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
  breadSep: {
    color: '#4a4a4a',
    fontSize: '0.78rem',
  },
  breadCurrent: {
    fontFamily: "'Raleway', sans-serif",
    fontSize: '0.82rem',
    color: '#9A9589',
  },
  header: {
    marginBottom: '40px',
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
  moduleSection: {
    marginBottom: '40px',
  },
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
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: '18px 20px',
    background: '#111111',
    borderRadius: '10px',
    border: '1px solid rgba(212, 175, 55, 0.08)',
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
    color: 'rgba(212, 175, 55, 0.3)',
    width: '28px',
  },
  moduleTitel: {
    fontFamily: "'Raleway', sans-serif",
    fontSize: '0.92rem',
    fontWeight: '500',
    color: '#E8E4D9',
    marginBottom: '3px',
  },
  moduleMeta: {
    fontFamily: "'Raleway', sans-serif",
    fontSize: '0.78rem',
    color: '#6B6760',
  },
  moduleStatus: {},
  startBtn: {
    padding: '6px 16px',
    fontSize: '0.8rem',
  },
  locked: {
    fontFamily: "'Raleway', sans-serif",
    fontSize: '0.78rem',
    color: '#4a4a4a',
    fontStyle: 'italic',
  },
  note: {
    display: 'flex',
    alignItems: 'flex-start',
    gap: '12px',
    padding: '16px 20px',
    background: 'rgba(212, 175, 55, 0.04)',
    borderRadius: '10px',
    border: '1px solid rgba(212, 175, 55, 0.08)',
  },
  noteIcon: {
    color: '#D4AF37',
    fontSize: '0.9rem',
    marginTop: '2px',
  },
  noteText: {
    fontFamily: "'Raleway', sans-serif",
    fontSize: '0.85rem',
    color: '#9A9589',
    lineHeight: '1.6',
  },
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
