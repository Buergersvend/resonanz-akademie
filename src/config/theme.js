// ═══════════════════════════════════════════════════════════
// RESONANZ AKADEMIE — Design System
// Dark/Gold Tokens · Cormorant Garamond + Raleway
// Konsistent mit Lichtkern Ästhetik
// ═══════════════════════════════════════════════════════════

export const theme = {
  // ── Farben ──────────────────────────────────────────────
  colors: {
    // Basis
    bg: '#0a0a0a',
    bgCard: '#111111',
    bgElevated: '#1a1a1a',
    bgHover: '#1f1f1f',
    bgOverlay: 'rgba(0, 0, 0, 0.85)',
    
    // Gold-Palette
    gold: '#D4AF37',
    goldLight: '#E8D48B',
    goldDark: '#B8960C',
    goldMuted: 'rgba(212, 175, 55, 0.15)',
    goldBorder: 'rgba(212, 175, 55, 0.25)',
    goldGlow: 'rgba(212, 175, 55, 0.08)',
    
    // Text
    text: '#E8E4D9',
    textMuted: '#9A9589',
    textDim: '#6B6760',
    textGold: '#D4AF37',
    
    // Akzente
    success: '#4CAF50',
    warning: '#FF9800',
    error: '#E74C3C',
    info: '#5B9BD5',
    
    // Spezial
    cream: '#F5F0E8',
    white: '#FFFFFF',
  },
  
  // ── Typografie ──────────────────────────────────────────
  fonts: {
    heading: "'Cormorant Garamond', 'Georgia', serif",
    body: "'Raleway', 'Helvetica Neue', sans-serif",
  },
  
  // ── Abstände ────────────────────────────────────────────
  spacing: {
    xs: '4px',
    sm: '8px',
    md: '16px',
    lg: '24px',
    xl: '32px',
    xxl: '48px',
    xxxl: '64px',
  },
  
  // ── Radien ──────────────────────────────────────────────
  radius: {
    sm: '4px',
    md: '8px',
    lg: '12px',
    xl: '16px',
    round: '50%',
    pill: '999px',
  },
  
  // ── Schatten ────────────────────────────────────────────
  shadows: {
    card: '0 2px 12px rgba(0, 0, 0, 0.4)',
    elevated: '0 8px 32px rgba(0, 0, 0, 0.6)',
    goldGlow: '0 0 20px rgba(212, 175, 55, 0.15)',
    goldStrong: '0 0 40px rgba(212, 175, 55, 0.25)',
  },
  
  // ── Übergänge ───────────────────────────────────────────
  transitions: {
    fast: '0.15s ease',
    normal: '0.25s ease',
    slow: '0.4s ease',
    spring: '0.5s cubic-bezier(0.34, 1.56, 0.64, 1)',
  },
  
  // ── Breakpoints ─────────────────────────────────────────
  breakpoints: {
    mobile: '480px',
    tablet: '768px',
    desktop: '1024px',
    wide: '1280px',
  },
  
  // ── Kursformat-Symbole ──────────────────────────────────
  courseFormats: {
    mikro: { symbol: '◈', label: 'Mikro-Kurs', hours: '1–2h' },
    standard: { symbol: '◈◈', label: 'Standard-Kurs', hours: '3–6h' },
    intensiv: { symbol: '◈◈◈', label: 'Intensiv-Schulung', hours: '8–16h' },
    ausbildung: { symbol: '◈◈◈◈', label: 'Ausbildung', hours: '30–60h' },
  },
}

export default theme
