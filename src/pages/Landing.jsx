// ═══════════════════════════════════════════════════════════
// Landing Page — Human Resonanz Lernwelt
// Eine Welt. Unendlich viele Wege zu dir.
// v5 — 12.06.2026: Original-Supernova von human-resonanz.de
// 1:1 portiert (Canvas-Partikel, Klick aufs Siegel + Auto-Zündung)
// Quelle: human-resonanz-web/index.html — identische Parameter
// ═══════════════════════════════════════════════════════════

import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { KURSE } from '../data/kurse'

// ── Dynamischer Live-Zähler (Single Source of Truth: src/data/kurse.js) ──
const LIVE_COUNT = KURSE.filter(k => (k.status ?? 'live') === 'live').length

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
  { andere: 'Überladene Plattformen', hr: 'Klar, schnell, intuitiv' },
  { andere: 'Manuelle Prüfungsbewertung', hr: 'Automatische Quiz & Teilnahmebestätigungen' },
  { andere: 'Theorie ohne Anwendung', hr: 'Brücke zwischen Energetik, Bewusstsein & Technologie' },
  { andere: 'Keine Community', hr: 'Resonanz-Netzwerk: Gleichgesinnte verbinden sich' },
]

export default function Landing() {
  const heroRef = useRef(null)
  const ambientRef = useRef(null)
  const snCanvasRef = useRef(null)
  const flashRef = useRef(null)
  const logoRef = useRef(null)
  const fireRef = useRef(() => {})

  // ─── Ambient-Sternenfeld (Original: 140 Vierzack-Sterne, driftend) ───
  useEffect(() => {
    const canvas = ambientRef.current
    const hero = heroRef.current
    if (!canvas || !hero) return
    const ctx = canvas.getContext('2d')
    let W, H, raf

    function resize() {
      const rect = hero.getBoundingClientRect()
      W = canvas.width = rect.width
      H = canvas.height = rect.height
    }
    resize()
    window.addEventListener('resize', resize)

    function drawStar(cx, cy, r, o, gold) {
      const spikes = 4, inner = r * 0.38
      ctx.save()
      ctx.translate(cx, cy)
      ctx.rotate(Math.PI / 4)
      ctx.beginPath()
      for (let i = 0; i < spikes * 2; i++) {
        const radius = i % 2 === 0 ? r : inner
        const angle = (i * Math.PI) / spikes
        i === 0 ? ctx.moveTo(Math.cos(angle) * radius, Math.sin(angle) * radius)
                : ctx.lineTo(Math.cos(angle) * radius, Math.sin(angle) * radius)
      }
      ctx.closePath()
      ctx.fillStyle = gold ? `rgba(201,168,76,${o})` : `rgba(245,240,232,${o * 0.55})`
      ctx.fill()
      if (r > 1.2) {
        ctx.beginPath()
        ctx.arc(0, 0, r * 2.2, 0, Math.PI * 2)
        ctx.fillStyle = gold ? `rgba(201,168,76,${o * 0.08})` : `rgba(245,240,232,${o * 0.05})`
        ctx.fill()
      }
      ctx.restore()
    }

    const particles = Array.from({ length: 140 }, () => ({
      x: Math.random() * window.innerWidth,
      y: Math.random() * window.innerHeight,
      size: Math.random() * 1.1 + 0.3,
      sx: (Math.random() - 0.5) * 0.06,
      sy: (Math.random() - 0.5) * 0.05 - 0.015,
      op: Math.random() * 0.45 + 0.15,
      ph: Math.random() * Math.PI * 2,
      ps: 0.003 + Math.random() * 0.007,
      gold: Math.random() > 0.75,
    }))

    function ap() {
      ctx.clearRect(0, 0, W, H)
      particles.forEach(p => {
        p.ph += p.ps
        const o = p.op * (0.5 + 0.5 * Math.sin(p.ph))
        drawStar(p.x, p.y, p.size, o, p.gold)
        p.x += p.sx; p.y += p.sy
        if (p.x < -5) p.x = W + 5
        if (p.x > W + 5) p.x = -5
        if (p.y < -5) p.y = H + 5
        if (p.y > H + 5) p.y = -5
      })
      raf = requestAnimationFrame(ap)
    }
    raf = requestAnimationFrame(ap)

    return () => {
      cancelAnimationFrame(raf)
      window.removeEventListener('resize', resize)
    }
  }, [])

  // ─── SUPERNOVA — 1:1 von human-resonanz.de portiert ───
  useEffect(() => {
    const cv = snCanvasRef.current
    const hero = heroRef.current
    const logo = logoRef.current
    const flash = flashRef.current
    if (!cv || !hero || !logo || !flash) return
    const sCtx = cv.getContext('2d')

    let sParticles = [], sRings = [], sRays = [], sStarfield = []
    let sGlow = { opacity: 0, radius: 0 }
    let sCoreGlow = { opacity: 0 }
    let sRunning = false
    let sDims = { w: 0, h: 0, cx: 0, cy: 0 }
    let raf

    function sAnimate() {
      const { w, h, cx, cy } = sDims
      sCtx.clearRect(0, 0, w, h)

      // Starfield
      for (let i = sStarfield.length - 1; i >= 0; i--) {
        const s = sStarfield[i]
        s.twinkle += s.speed
        s.life--
        if (s.life <= 0) { sStarfield.splice(i, 1); continue }
        const a = (s.life / s.maxLife) * (0.3 + Math.sin(s.twinkle) * 0.2)
        sCtx.beginPath()
        sCtx.arc(s.x, s.y, s.size, 0, Math.PI * 2)
        sCtx.fillStyle = `rgba(201,168,76,${a})`
        sCtx.fill()
      }

      // Core glow
      if (sGlow.opacity > 0) {
        const g = sCtx.createRadialGradient(cx, cy, 0, cx, cy, sGlow.radius)
        g.addColorStop(0, `rgba(201,168,76,${sGlow.opacity})`)
        g.addColorStop(0.4, `rgba(201,168,76,${sGlow.opacity * 0.3})`)
        g.addColorStop(1, 'rgba(201,168,76,0)')
        sCtx.fillStyle = g
        sCtx.beginPath()
        sCtx.arc(cx, cy, sGlow.radius, 0, Math.PI * 2)
        sCtx.fill()
        sGlow.radius += 1.5
        sGlow.opacity *= 0.975
        if (sGlow.opacity < 0.01) sGlow.opacity = 0
      }

      // Center afterglow
      if (sCoreGlow.opacity > 0) {
        const cg = sCtx.createRadialGradient(cx, cy, 0, cx, cy, 80)
        cg.addColorStop(0, `rgba(255,240,200,${sCoreGlow.opacity * 0.4})`)
        cg.addColorStop(1, 'rgba(201,168,76,0)')
        sCtx.fillStyle = cg
        sCtx.beginPath()
        sCtx.arc(cx, cy, 80, 0, Math.PI * 2)
        sCtx.fill()
        sCoreGlow.opacity *= 0.97
        if (sCoreGlow.opacity < 0.01) sCoreGlow.opacity = 0
      }

      // Rays
      for (let i = sRays.length - 1; i >= 0; i--) {
        const r = sRays[i]
        if (r.length < r.maxLength) r.length += r.speed
        else r.opacity -= 0.015
        if (r.opacity <= 0) { sRays.splice(i, 1); continue }
        sCtx.save()
        sCtx.translate(cx, cy)
        sCtx.rotate(r.angle)
        const lg = sCtx.createLinearGradient(0, 0, r.length, 0)
        lg.addColorStop(0, `rgba(201,168,76,${r.opacity})`)
        lg.addColorStop(1, 'rgba(201,168,76,0)')
        sCtx.strokeStyle = lg
        sCtx.lineWidth = r.width
        sCtx.beginPath()
        sCtx.moveTo(35, 0)
        sCtx.lineTo(35 + r.length, 0)
        sCtx.stroke()
        sCtx.restore()
      }

      // Shockwave rings
      for (let i = sRings.length - 1; i >= 0; i--) {
        const r = sRings[i]
        r.radius += r.speed
        r.opacity -= 0.006
        if (r.opacity <= 0 || r.radius > r.maxRadius) { sRings.splice(i, 1); continue }
        sCtx.beginPath()
        sCtx.arc(cx, cy, r.radius, 0, Math.PI * 2)
        sCtx.strokeStyle = `rgba(201,168,76,${r.opacity})`
        sCtx.lineWidth = r.width
        sCtx.stroke()
      }

      // Particles
      for (let i = sParticles.length - 1; i >= 0; i--) {
        const p = sParticles[i]
        if (p.trail && p.life > 10) {
          sCtx.beginPath()
          sCtx.moveTo(p.x, p.y)
          sCtx.lineTo(p.x - p.vx * 3, p.y - p.vy * 3)
          const ta = (p.life / p.maxLife) * 0.3
          sCtx.strokeStyle = `rgba(${p.r},${p.g},${p.b},${ta})`
          sCtx.lineWidth = p.size * (p.life / p.maxLife) * 0.6
          sCtx.stroke()
        }
        p.x += p.vx; p.y += p.vy
        p.vx *= 0.988; p.vy *= 0.988
        if (p.ember) {
          p.vx += (Math.random() - 0.5) * 0.2
          p.vy += (Math.random() - 0.5) * 0.2
        }
        p.life--
        if (p.life <= 0) { sParticles.splice(i, 1); continue }
        const al = p.life / p.maxLife
        const sz = p.size * al
        sCtx.beginPath()
        sCtx.arc(p.x, p.y, sz, 0, Math.PI * 2)
        sCtx.fillStyle = `rgba(${p.r},${p.g},${p.b},${al})`
        sCtx.fill()
        if (sz > 2) {
          sCtx.beginPath()
          sCtx.arc(p.x, p.y, sz * 3, 0, Math.PI * 2)
          sCtx.fillStyle = `rgba(${p.r},${p.g},${p.b},${al * 0.1})`
          sCtx.fill()
        }
      }

      const alive = sParticles.length > 0 || sRings.length > 0 || sRays.length > 0 || sStarfield.length > 0 || sGlow.opacity > 0 || sCoreGlow.opacity > 0
      if (alive) {
        raf = requestAnimationFrame(sAnimate)
      } else {
        sRunning = false
      }
    }

    function fireSupernova() {
      const rect = hero.getBoundingClientRect()
      const dpr = window.devicePixelRatio || 1
      cv.width = rect.width * dpr
      cv.height = rect.height * dpr
      cv.style.width = rect.width + 'px'
      cv.style.height = rect.height + 'px'
      sCtx.setTransform(1, 0, 0, 1, 0, 0)
      sCtx.scale(dpr, dpr)
      const w = rect.width, h = rect.height

      // Siegel-Mittelpunkt relativ zum Hero
      const logoRect = logo.getBoundingClientRect()
      const cx = logoRect.left - rect.left + logoRect.width / 2
      const cy = logoRect.top - rect.top + logoRect.height / 2
      sDims = { w, h, cx, cy }

      sParticles = []; sRings = []; sRays = []; sStarfield = []

      // Siegel: zusammenziehen → aufspringen → einpendeln
      logo.style.transition = 'transform 0.12s cubic-bezier(0.4,0,1,1)'
      logo.style.transform = 'scale(0.82)'
      setTimeout(() => {
        logo.style.transition = 'transform 0.5s cubic-bezier(0,0.8,0.2,1.2)'
        logo.style.transform = 'scale(1.12)'
        setTimeout(() => {
          logo.style.transition = 'transform 0.4s ease-out'
          logo.style.transform = 'scale(1)'
        }, 500)
      }, 120)

      // Bildschirm-Beben
      hero.style.animation = 'none'
      void hero.offsetWidth
      hero.style.animation = 'lk-shake 0.4s ease-out'

      // Blitz
      flash.style.transition = 'opacity 0.06s'
      flash.style.opacity = '1'
      setTimeout(() => {
        flash.style.transition = 'opacity 0.7s ease-out'
        flash.style.opacity = '0'
      }, 60)

      // Partikel (100 Haupt + 30 Glut — Original-Parameter)
      for (let i = 0; i < 100; i++) {
        const a = Math.random() * Math.PI * 2
        const spd = 2.5 + Math.random() * 8
        const sz = 1.2 + Math.random() * 4
        const l = 55 + Math.floor(Math.random() * 65)
        const t = Math.random()
        sParticles.push({
          x: cx, y: cy,
          vx: Math.cos(a) * spd, vy: Math.sin(a) * spd,
          size: sz, life: l, maxLife: l,
          r: t < 0.6 ? 201 : 255,
          g: t < 0.6 ? 168 : t < 0.85 ? 200 : 255,
          b: t < 0.6 ? 76 : t < 0.85 ? 120 : 220,
          trail: sz > 2.5,
        })
      }
      for (let i = 0; i < 30; i++) {
        const a = Math.random() * Math.PI * 2
        const d = 20 + Math.random() * 45
        sParticles.push({
          x: cx + Math.cos(a) * d, y: cy + Math.sin(a) * d,
          vx: Math.cos(a) * (0.2 + Math.random() * 0.8),
          vy: Math.sin(a) * (0.2 + Math.random() * 0.8),
          size: 0.8 + Math.random() * 1.5,
          life: 90 + Math.floor(Math.random() * 60), maxLife: 150,
          r: 201, g: 168, b: 76, ember: true,
        })
      }

      // Schockwellen (5, hauchdünn, verglühend)
      for (let i = 0; i < 5; i++) {
        sRings.push({ radius: 20, maxRadius: 200 + i * 70, opacity: 0.55 - i * 0.08, width: 2.5 - i * 0.35, speed: 3.5 + i * 1.2 })
      }

      // Lichtstrahlen (16)
      for (let i = 0; i < 16; i++) {
        const a = (Math.PI * 2 / 16) * i + (Math.random() - 0.5) * 0.3
        sRays.push({ angle: a, length: 0, maxLength: 100 + Math.random() * 140, opacity: 0.35 + Math.random() * 0.25, width: 1 + Math.random() * 2, speed: 5 + Math.random() * 4 })
      }

      // Temporäres Sternenfeld (60)
      for (let i = 0; i < 60; i++) {
        sStarfield.push({
          x: Math.random() * w, y: Math.random() * h,
          size: 0.5 + Math.random() * 1.4,
          twinkle: Math.random() * Math.PI * 2,
          speed: 0.02 + Math.random() * 0.04,
          life: 80 + Math.floor(Math.random() * 80), maxLife: 160,
        })
      }

      sGlow = { opacity: 0.65, radius: 50 }
      sCoreGlow = { opacity: 1 }

      if (!sRunning) {
        sRunning = true
        raf = requestAnimationFrame(sAnimate)
      }
    }

    fireRef.current = fireSupernova

    // Auto-Zündung beim Seitenaufruf (1.2s nach Laden)
    const autoTimer = setTimeout(fireSupernova, 1200)

    return () => {
      clearTimeout(autoTimer)
      cancelAnimationFrame(raf)
    }
  }, [])

  return (
    <div style={{ background: '#0a0a0a', minHeight: '100vh' }}>
      <style>{`
        @keyframes spin { to { transform: rotate(360deg); } }
        @keyframes breathe { 0%, 100% { transform: scale(1); } 50% { transform: scale(1.04); } }
        @keyframes lk-shake {
          0% { transform: translate(0,0); }
          15% { transform: translate(-3px, 2px); }
          30% { transform: translate(3px, -2px); }
          45% { transform: translate(-2px, 1px); }
          60% { transform: translate(2px, -1px); }
          75% { transform: translate(-1px, 1px); }
          100% { transform: translate(0,0); }
        }
        @keyframes heroRise {
          from { opacity: 0; transform: translateY(18px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .hero-rise { animation: heroRise 0.9s ease-out both; }
        .hero-rise.d1 { animation-delay: 0.1s; }
        .hero-rise.d2 { animation-delay: 0.25s; }
        .hero-rise.d3 { animation-delay: 0.4s; }
        .siegel-ring { animation: spin 30s linear infinite; }
        .siegel-ring2 { animation: spin 55s linear infinite reverse; }
        .siegel-breathe { animation: breathe 7s ease-in-out infinite; }
        .hr-card { transition: transform 0.3s ease, border-color 0.3s ease, box-shadow 0.3s ease; }
        .hr-card:hover {
          transform: translateY(-3px);
          border-color: rgba(212, 175, 55, 0.35) !important;
          box-shadow: 0 8px 32px rgba(212, 175, 55, 0.08);
        }
        @media (prefers-reduced-motion: reduce) {
          .siegel-ring, .siegel-ring2, .siegel-breathe, .hero-rise { animation: none; }
        }
      `}</style>

      <Navbar />
      
      {/* ═══ HERO mit Original-Supernova ═══ */}
      <section ref={heroRef} style={hero.section}>
        {/* Ambient-Sternenfeld (Canvas) */}
        <canvas ref={ambientRef} style={hero.ambientCanvas} aria-hidden="true" />
        {/* Supernova-Canvas + Blitz */}
        <canvas ref={snCanvasRef} style={hero.snCanvas} aria-hidden="true" />
        <div ref={flashRef} style={hero.flash} aria-hidden="true" />
        
        <div style={hero.content}>
          {/* Siegel — Klick zündet die Supernova */}
          <div className="hero-rise" style={{ marginBottom: '32px' }}>
          <div style={hero.logoWrap}>
            <div className="siegel-ring" style={hero.ring1} aria-hidden="true" />
            <div className="siegel-ring2" style={hero.ring2} aria-hidden="true" />
            <img
              ref={logoRef}
              src="/logo-siegel.png"
              alt="Human Resonanz Lernwelt — Siegel (anklicken!)"
              title="Klick mich ✦"
              className="siegel-breathe"
              style={hero.logoImg}
              onClick={() => fireRef.current()}
            />
          </div>
          </div>

          <div className="hero-rise" style={hero.badge}>
            ◈ Jetzt in der Beta-Phase
          </div>
          
          <h1 className="hero-rise d1" style={hero.title}>
            Eine Welt.
            <br />Unendlich viele <span style={hero.gold}>Wege zu dir.</span>
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
            {FORMATE.map((f) => (
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
              <div style={{ ...unterschied.headerCell, color: '#D4AF37' }}>Human Resonanz Lernwelt</div>
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

      {/* ═══ CTA ═══ */}
      <section style={cta.section}>
        <div style={cta.glow} />
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

const hero = {
  section: {
    position: 'relative',
    minHeight: '100vh',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '120px 24px 80px',
    overflow: 'hidden',
  },
  ambientCanvas: {
    position: 'absolute',
    inset: 0,
    pointerEvents: 'none',
    opacity: 0.65,
  },
  snCanvas: {
    position: 'absolute',
    top: 0,
    left: 0,
    pointerEvents: 'none',
    zIndex: 4,
  },
  flash: {
    position: 'absolute',
    inset: 0,
    background: 'radial-gradient(circle at 50% 35%, rgba(255,240,200,0.9) 0%, rgba(201,168,76,0.3) 40%, transparent 70%)',
    opacity: 0,
    pointerEvents: 'none',
    zIndex: 5,
  },
  content: {
    position: 'relative',
    textAlign: 'center',
    maxWidth: '820px',
    zIndex: 1,
  },
  logoWrap: {
    position: 'relative',
    display: 'inline-block',
  },
  ring1: {
    position: 'absolute',
    inset: '-24px',
    border: '1px solid rgba(201, 168, 76, 0.10)',
    borderRadius: '50%',
    pointerEvents: 'none',
  },
  ring2: {
    position: 'absolute',
    inset: '-50px',
    border: '1px solid rgba(201, 168, 76, 0.04)',
    borderRadius: '50%',
    pointerEvents: 'none',
  },
  logoImg: {
    position: 'relative',
    zIndex: 1,
    width: 'clamp(130px, 17vw, 180px)',
    height: 'auto',
    display: 'block',
    cursor: 'pointer',
    filter: 'drop-shadow(0 0 28px rgba(201, 168, 76, 0.35))',
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
    width: '600px',
    height: '400px',
    background: 'radial-gradient(circle, rgba(212, 175, 55, 0.08) 0%, transparent 70%)',
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
