// ═══════════════════════════════════════════════════════════
// AppShell — Layout für eingeloggte Seiten
// Sidebar + Content Area
// ═══════════════════════════════════════════════════════════

import { NavLink, useNavigate } from 'react-router-dom'
import { useAuth } from '../config/AuthContext'

const NAV_ITEMS = [
  { path: '/dashboard', label: 'Dashboard', icon: '◈' },
  { path: '/kurse', label: 'Kurse', icon: '◈◈' },
]

const s = {
  layout: {
    display: 'flex',
    minHeight: '100vh',
    background: '#0a0a0a',
  },
  sidebar: {
    width: '240px',
    background: '#111111',
    borderRight: '1px solid rgba(212, 175, 55, 0.12)',
    padding: '24px 0',
    display: 'flex',
    flexDirection: 'column',
    position: 'fixed',
    top: 0,
    left: 0,
    bottom: 0,
    zIndex: 100,
  },
  logo: {
    padding: '0 24px 32px',
    borderBottom: '1px solid rgba(212, 175, 55, 0.08)',
    marginBottom: '16px',
  },
  logoText: {
    fontFamily: "'Cormorant Garamond', serif",
    fontSize: '1.1rem',
    fontWeight: '500',
    color: '#E8E4D9',
    letterSpacing: '0.03em',
    textDecoration: 'none',
    display: 'block',
  },
  logoAccent: {
    color: '#D4AF37',
  },
  nav: {
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    gap: '4px',
    padding: '0 12px',
  },
  navLink: {
    display: 'flex',
    alignItems: 'center',
    gap: '12px',
    padding: '10px 16px',
    borderRadius: '8px',
    fontFamily: "'Raleway', sans-serif",
    fontSize: '0.9rem',
    fontWeight: '500',
    color: '#9A9589',
    textDecoration: 'none',
    transition: 'all 0.2s ease',
  },
  navLinkActive: {
    background: 'rgba(212, 175, 55, 0.1)',
    color: '#D4AF37',
  },
  navIcon: {
    fontSize: '0.7rem',
    width: '24px',
    textAlign: 'center',
    color: 'inherit',
  },
  footer: {
    padding: '16px 24px',
    borderTop: '1px solid rgba(212, 175, 55, 0.08)',
  },
  userName: {
    fontFamily: "'Raleway', sans-serif",
    fontSize: '0.82rem',
    color: '#9A9589',
    marginBottom: '8px',
  },
  logoutBtn: {
    background: 'none',
    border: 'none',
    color: '#6B6760',
    fontFamily: "'Raleway', sans-serif",
    fontSize: '0.8rem',
    cursor: 'pointer',
    padding: '4px 0',
    transition: 'color 0.2s ease',
  },
  content: {
    flex: 1,
    marginLeft: '240px',
    padding: '32px',
    minHeight: '100vh',
  },
}

export default function AppShell({ children }) {
  const { user, logout } = useAuth()
  const navigate = useNavigate()

  const handleLogout = async () => {
    await logout()
    navigate('/')
  }

  return (
    <div style={s.layout}>
      {/* Sidebar */}
      <aside style={s.sidebar}>
        <div style={s.logo}>
          <span style={s.logoText}>
            Resonanz <span style={s.logoAccent}>Akademie</span>
          </span>
        </div>

        <nav style={s.nav}>
          {NAV_ITEMS.map(item => (
            <NavLink
              key={item.path}
              to={item.path}
              style={({ isActive }) => ({
                ...s.navLink,
                ...(isActive ? s.navLinkActive : {}),
              })}
            >
              <span style={s.navIcon}>{item.icon}</span>
              {item.label}
            </NavLink>
          ))}
        </nav>

        <div style={s.footer}>
          <div style={s.userName}>
            {user?.displayName || user?.email?.split('@')[0] || 'Teilnehmer'}
          </div>
          <button 
            onClick={handleLogout} 
            style={s.logoutBtn}
            onMouseEnter={e => e.target.style.color = '#D4AF37'}
            onMouseLeave={e => e.target.style.color = '#6B6760'}
          >
            Abmelden
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <main style={s.content}>
        {children}
      </main>
    </div>
  )
}
