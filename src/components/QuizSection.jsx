// ═══════════════════════════════════════════════════════════
// QuizSection — Selbsttest zum Kurs (freiwillig, ohne Bewertung)
// Human Resonanz Lernwelt · Juli 2026
//
// Schema: kurs.quiz = [ { frage, antworten|optionen: [..], richtig: <Index> } ]
// Feld-Fallback: `antworten` (Standard) ODER `optionen` (C03/S15).
// Bewusst KEINE Kopplung an Fortschritt, Zertifikat oder Freischaltung —
// der Selbsttest ist ein Lernwerkzeug, keine Prüfung.
// ═══════════════════════════════════════════════════════════

import { useState } from 'react'

export default function QuizSection({ quiz }) {
  // gewaehlt[i] = Index der gewählten Antwort für Frage i (undefined = offen)
  const [gewaehlt, setGewaehlt] = useState({})

  if (!quiz || quiz.length === 0) return null

  const beantwortet = Object.keys(gewaehlt).length
  const alleBeantwortet = beantwortet === quiz.length
  const richtige = quiz.reduce(
    (sum, f, i) => sum + (gewaehlt[i] === f.richtig ? 1 : 0),
    0
  )

  const waehlen = (frageIdx, antwortIdx) => {
    // Antwort pro Frage nur einmal wählbar (kein Umklicken nach Feedback)
    if (gewaehlt[frageIdx] !== undefined) return
    setGewaehlt(prev => ({ ...prev, [frageIdx]: antwortIdx }))
  }

  const zuruecksetzen = () => setGewaehlt({})

  const ergebnisText = () => {
    const quote = richtige / quiz.length
    if (quote === 1) return 'Alle Fragen richtig — du hast die Inhalte sicher verankert.'
    if (quote >= 0.66) return 'Ein solides Verständnis. Wirf gern noch einen Blick auf die Themen der offenen Fragen.'
    return 'Ein guter Anlass, die entsprechenden Lektionen noch einmal in Ruhe anzuschauen. Der Selbsttest steht dir jederzeit offen.'
  }

  return (
    <div style={q.section}>
      <h2 style={q.sectionTitle}>Selbsttest</h2>
      <p style={q.intro}>
        Prüfe dein Verständnis der Kursinhalte. Der Selbsttest ist freiwillig,
        dient allein deiner eigenen Orientierung und hat keinen Einfluss auf
        deinen Kursabschluss.
      </p>

      <div style={q.frageList}>
        {quiz.map((f, fi) => {
          const optionen = f.antworten || f.optionen || []
          const auswahl = gewaehlt[fi]
          const beantwortetF = auswahl !== undefined

          return (
            <div key={fi} style={q.frageCard}>
              <div style={q.frageKopf}>
                <span style={q.frageNr}>{String(fi + 1).padStart(2, '0')}</span>
                <span style={q.frageText}>{f.frage}</span>
              </div>

              <div style={q.antwortList}>
                {optionen.map((opt, oi) => {
                  const istAuswahl = auswahl === oi
                  const istRichtig = f.richtig === oi

                  let stil = q.antwort
                  if (beantwortetF) {
                    if (istRichtig) stil = { ...q.antwort, ...q.antwortRichtig }
                    else if (istAuswahl) stil = { ...q.antwort, ...q.antwortFalsch }
                    else stil = { ...q.antwort, ...q.antwortInaktiv }
                  }

                  return (
                    <button
                      key={oi}
                      onClick={() => waehlen(fi, oi)}
                      style={stil}
                      disabled={beantwortetF}
                    >
                      <span style={q.antwortMarker}>
                        {beantwortetF && istRichtig
                          ? '✓'
                          : beantwortetF && istAuswahl
                          ? '✕'
                          : String.fromCharCode(65 + oi)}
                      </span>
                      <span style={q.antwortText}>{opt}</span>
                    </button>
                  )
                })}
              </div>

              {beantwortetF && (
                <div style={auswahl === f.richtig ? q.feedbackRichtig : q.feedbackFalsch}>
                  {auswahl === f.richtig
                    ? 'Richtig.'
                    : 'Nicht ganz — die markierte Antwort ist die passende.'}
                </div>
              )}
            </div>
          )
        })}
      </div>

      {alleBeantwortet && (
        <div style={q.ergebnisBox}>
          <span style={q.ergebnisIcon}>✦</span>
          <div style={q.ergebnisInhalt}>
            <h3 style={q.ergebnisTitel}>
              {richtige} von {quiz.length} richtig
            </h3>
            <p style={q.ergebnisText}>{ergebnisText()}</p>
            <button onClick={zuruecksetzen} className="btn btn-outline" style={q.resetBtn}>
              Selbsttest wiederholen
            </button>
          </div>
        </div>
      )}
    </div>
  )
}

// ── Styles ────────────────────────────────────────────────
const q = {
  section: {
    marginBottom: '40px',
  },
  sectionTitle: {
    fontFamily: "'Cormorant Garamond', serif",
    fontSize: '1.3rem',
    fontWeight: '500',
    color: '#E8E4D9',
    marginBottom: '8px',
  },
  intro: {
    fontFamily: "'Raleway', sans-serif",
    fontSize: '0.85rem',
    color: '#6B6760',
    lineHeight: '1.6',
    maxWidth: '640px',
    marginBottom: '16px',
  },
  frageList: {
    display: 'flex',
    flexDirection: 'column',
    gap: '10px',
  },
  frageCard: {
    background: '#111111',
    borderRadius: '10px',
    border: '1px solid rgba(212, 175, 55, 0.08)',
    padding: '18px 20px',
  },
  frageKopf: {
    display: 'flex',
    alignItems: 'flex-start',
    gap: '16px',
    marginBottom: '14px',
  },
  frageNr: {
    fontFamily: "'Cormorant Garamond', serif",
    fontSize: '1.1rem',
    fontWeight: '600',
    color: 'rgba(212, 175, 55, 0.5)',
    width: '28px',
    textAlign: 'center',
    flexShrink: 0,
  },
  frageText: {
    fontFamily: "'Raleway', sans-serif",
    fontSize: '0.92rem',
    fontWeight: '500',
    color: '#E8E4D9',
    lineHeight: '1.55',
  },
  antwortList: {
    display: 'flex',
    flexDirection: 'column',
    gap: '8px',
    paddingLeft: '44px',
  },
  antwort: {
    display: 'flex',
    alignItems: 'flex-start',
    gap: '12px',
    padding: '10px 14px',
    background: 'rgba(255,255,255,0.02)',
    border: '1px solid rgba(212, 175, 55, 0.10)',
    borderRadius: '8px',
    cursor: 'pointer',
    textAlign: 'left',
    width: '100%',
    transition: 'border-color 0.2s ease, background 0.2s ease',
  },
  antwortRichtig: {
    background: 'rgba(76, 175, 80, 0.08)',
    border: '1px solid rgba(76, 175, 80, 0.35)',
    cursor: 'default',
  },
  antwortFalsch: {
    background: 'rgba(180, 70, 70, 0.07)',
    border: '1px solid rgba(180, 70, 70, 0.30)',
    cursor: 'default',
  },
  antwortInaktiv: {
    opacity: 0.45,
    cursor: 'default',
  },
  antwortMarker: {
    fontFamily: "'Cormorant Garamond', serif",
    fontSize: '0.95rem',
    fontWeight: '600',
    color: '#D4AF37',
    width: '18px',
    textAlign: 'center',
    flexShrink: 0,
    marginTop: '1px',
  },
  antwortText: {
    fontFamily: "'Raleway', sans-serif",
    fontSize: '0.86rem',
    color: '#C9C4B8',
    lineHeight: '1.55',
  },
  feedbackRichtig: {
    fontFamily: "'Raleway', sans-serif",
    fontSize: '0.8rem',
    color: '#4CAF50',
    marginTop: '10px',
    paddingLeft: '44px',
  },
  feedbackFalsch: {
    fontFamily: "'Raleway', sans-serif",
    fontSize: '0.8rem',
    color: '#9A9589',
    marginTop: '10px',
    paddingLeft: '44px',
  },
  ergebnisBox: {
    display: 'flex',
    alignItems: 'flex-start',
    gap: '16px',
    padding: '24px',
    marginTop: '16px',
    background: 'rgba(212, 175, 55, 0.05)',
    borderRadius: '12px',
    border: '1px solid rgba(212, 175, 55, 0.2)',
  },
  ergebnisIcon: {
    fontSize: '1.4rem',
    color: '#D4AF37',
    marginTop: '2px',
  },
  ergebnisInhalt: {},
  ergebnisTitel: {
    fontFamily: "'Cormorant Garamond', serif",
    fontSize: '1.2rem',
    fontWeight: '600',
    color: '#D4AF37',
    marginBottom: '6px',
  },
  ergebnisText: {
    fontFamily: "'Raleway', sans-serif",
    fontSize: '0.88rem',
    color: '#9A9589',
    lineHeight: '1.6',
    marginBottom: '14px',
  },
  resetBtn: {
    fontSize: '0.82rem',
    padding: '8px 20px',
  },
}
