// ═══════════════════════════════════════════════════════════
// Navbar — Öffentliche Navigation
// 11.06.2026: Markensiegel statt "A"-Platzhalter
// ═══════════════════════════════════════════════════════════

import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'

const styles = {
  nav: {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    zIndex: 1000,
    padding: '0 24px',
    transition: 'all 0.35s ease',
  },
  inner: {
    maxWidth: '1200px',
    margin: '0 auto',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    height: '72px',
  },
  logo: {
    display: 'flex',
    alignItems: 'center',
    gap: '12px',
    textDecoration: 'none',
    color: '#E8E4D9',
  },
  logoMark: {
    width: '40px',
    height: '40px',
    borderRadius: '50%',
    flexShrink: 0,
    boxShadow: '0 0 18px rgba(212, 175, 55, 0.35)',
  },
  logoText: {
    fontFamily: "'Cormorant Garamond', serif",
    fontSize: '1.15rem',
    fontWeight: '500',
    letterSpacing: '0.04em',
  },
  logoAccent: {
    color: '#D4AF37',
  },
  links: {
    display: 'flex',
    alignItems: 'center',
    gap: '32px',
  },
  link: {
    fontFamily: "'Raleway', sans-serif",
    fontSize: '0.85rem',
    fontWeight: '500',
    color: '#9A9589',
    textDecoration: 'none',
    letterSpacing: '0.06em',
    textTransform: 'uppercase',
    transition: 'color 0.25s ease',
    cursor: 'pointer',
  },
  cta: {
    padding: '8px 20px',
    background: 'transparent',
    border: '1.5px solid rgba(212, 175, 55, 0.4)',
    borderRadius: '6px',
    color: '#D4AF37',
    fontFamily: "'Raleway', sans-serif",
    fontSize: '0.82rem',
    fontWeight: '600',
    letterSpacing: '0.06em',
    textTransform: 'uppercase',
    textDecoration: 'none',
    transition: 'all 0.25s ease',
    cursor: 'pointer',
  },
}

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const isLanding = location.pathname === '/'

  return (
    <nav style={{
      ...styles.nav,
      background: scrolled ? 'rgba(10, 10, 10, 0.95)' : 'transparent',
      backdropFilter: scrolled ? 'blur(12px)' : 'none',
      borderBottom: scrolled ? '1px solid rgba(212, 175, 55, 0.1)' : '1px solid transparent',
    }}>
      <div style={styles.inner}>
        <Link to="/" style={styles.logo}>
          <img src="/logo-siegel.png" alt="Human Resonanz Siegel" style={styles.logoMark} />
          <span style={styles.logoText}>
            Human Resonanz <span style={styles.logoAccent}>Akademie</span>
          </span>
        </Link>
        
        <div style={styles.links}>
          {isLanding && (
            <>
              <a href="#bereiche" style={styles.link}>Bereiche</a>
              <a href="#formate" style={styles.link}>Formate</a>
              <a href="#unterschied" style={styles.link}>Warum wir</a>
            </>
          )}
          <Link to="/login" style={styles.cta}>
            Einloggen
          </Link>
        </div>
      </div>
    </nav>
  )
}
