// ═══════════════════════════════════════════════════════════
// Login / Register — Resonanz Akademie
// Dark/Gold Auth Screen
// ═══════════════════════════════════════════════════════════

import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useAuth } from '../config/AuthContext'

export default function Login() {
  const [isRegister, setIsRegister] = useState(false)
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)
  
  const { login, register } = useAuth()
  const navigate = useNavigate()

  const handleSubmit = async (e) => {
    e.preventDefault()
    setError('')
    setLoading(true)
    
    try {
      if (isRegister) {
        await register(email, password, name)
      } else {
        await login(email, password)
      }
      navigate('/dashboard')
    } catch (err) {
      const code = err.code || ''
      if (code === 'auth/user-not-found' || code === 'auth/wrong-password' || code === 'auth/invalid-credential') {
        setError('E-Mail oder Passwort ist falsch.')
      } else if (code === 'auth/email-already-in-use') {
        setError('Diese E-Mail wird bereits verwendet.')
      } else if (code === 'auth/weak-password') {
        setError('Das Passwort muss mindestens 6 Zeichen haben.')
      } else {
        setError('Ein Fehler ist aufgetreten. Bitte versuche es erneut.')
      }
    } finally {
      setLoading(false)
    }
  }

  return (
    <div style={s.page}>
      {/* Background */}
      <div style={s.glow} />
      
      {/* Back Link */}
      <Link to="/" style={s.backLink}>
        ← Zurück zur Startseite
      </Link>
      
      {/* Auth Card */}
      <div style={s.card}>
        <div style={s.logoMark}>A</div>
        
        <h1 style={s.title}>
          {isRegister ? 'Konto erstellen' : 'Willkommen zurück'}
        </h1>
        <p style={s.subtitle}>
          {isRegister 
            ? 'Starte deinen persönlichen Lernpfad' 
            : 'Dein Wissen wartet auf dich'}
        </p>

        {error && (
          <div style={s.error}>{error}</div>
        )}

        <form onSubmit={handleSubmit} style={s.form}>
          {isRegister && (
            <div style={s.field}>
              <label style={s.label}>Name</label>
              <input
                type="text"
                value={name}
                onChange={e => setName(e.target.value)}
                placeholder="Dein vollständiger Name"
                required={isRegister}
                style={s.input}
              />
            </div>
          )}
          
          <div style={s.field}>
            <label style={s.label}>E-Mail</label>
            <input
              type="email"
              value={email}
              onChange={e => setEmail(e.target.value)}
              placeholder="deine@email.de"
              required
              style={s.input}
            />
          </div>
          
          <div style={s.field}>
            <label style={s.label}>Passwort</label>
            <input
              type="password"
              value={password}
              onChange={e => setPassword(e.target.value)}
              placeholder="Mindestens 6 Zeichen"
              required
              minLength={6}
              style={s.input}
            />
          </div>

          <button 
            type="submit" 
            className="btn btn-gold" 
            style={{ width: '100%', marginTop: '8px', opacity: loading ? 0.7 : 1 }}
            disabled={loading}
          >
            {loading 
              ? '...' 
              : isRegister ? 'Konto erstellen' : 'Einloggen'
            }
          </button>
        </form>

        <div style={s.toggle}>
          <span style={s.toggleText}>
            {isRegister ? 'Bereits ein Konto?' : 'Noch kein Konto?'}
          </span>
          <button 
            onClick={() => { setIsRegister(!isRegister); setError('') }}
            style={s.toggleBtn}
          >
            {isRegister ? 'Einloggen' : 'Registrieren'}
          </button>
        </div>
      </div>
    </div>
  )
}

const s = {
  page: {
    minHeight: '100vh',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '24px',
    background: '#0a0a0a',
    position: 'relative',
    overflow: 'hidden',
  },
  glow: {
    position: 'absolute',
    top: '20%',
    left: '50%',
    transform: 'translateX(-50%)',
    width: '500px',
    height: '500px',
    background: 'radial-gradient(circle, rgba(212, 175, 55, 0.05) 0%, transparent 70%)',
    pointerEvents: 'none',
  },
  backLink: {
    position: 'absolute',
    top: '24px',
    left: '24px',
    fontFamily: "'Raleway', sans-serif",
    fontSize: '0.85rem',
    color: '#6B6760',
    textDecoration: 'none',
    transition: 'color 0.2s ease',
    zIndex: 10,
  },
  card: {
    position: 'relative',
    width: '100%',
    maxWidth: '420px',
    background: '#111111',
    borderRadius: '16px',
    border: '1px solid rgba(212, 175, 55, 0.12)',
    padding: '40px 36px',
    boxShadow: '0 8px 32px rgba(0, 0, 0, 0.5)',
    textAlign: 'center',
    zIndex: 1,
  },
  logoMark: {
    width: '48px',
    height: '48px',
    borderRadius: '50%',
    background: 'linear-gradient(135deg, #D4AF37, #B8960C)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontFamily: "'Cormorant Garamond', serif",
    fontSize: '1.3rem',
    fontWeight: '700',
    color: '#0a0a0a',
    margin: '0 auto 24px',
  },
  title: {
    fontFamily: "'Cormorant Garamond', serif",
    fontSize: '1.6rem',
    fontWeight: '500',
    color: '#E8E4D9',
    marginBottom: '8px',
  },
  subtitle: {
    fontFamily: "'Raleway', sans-serif",
    fontSize: '0.88rem',
    color: '#6B6760',
    marginBottom: '28px',
  },
  error: {
    background: 'rgba(231, 76, 60, 0.1)',
    border: '1px solid rgba(231, 76, 60, 0.3)',
    borderRadius: '8px',
    padding: '10px 14px',
    marginBottom: '20px',
    fontFamily: "'Raleway', sans-serif",
    fontSize: '0.85rem',
    color: '#E74C3C',
    textAlign: 'left',
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    gap: '16px',
    textAlign: 'left',
  },
  field: {
    display: 'flex',
    flexDirection: 'column',
    gap: '6px',
  },
  label: {
    fontFamily: "'Raleway', sans-serif",
    fontSize: '0.8rem',
    fontWeight: '500',
    color: '#9A9589',
    letterSpacing: '0.02em',
  },
  input: {
    // Uses global input styles from CSS
  },
  toggle: {
    marginTop: '24px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '8px',
  },
  toggleText: {
    fontFamily: "'Raleway', sans-serif",
    fontSize: '0.85rem',
    color: '#6B6760',
  },
  toggleBtn: {
    background: 'none',
    border: 'none',
    fontFamily: "'Raleway', sans-serif",
    fontSize: '0.85rem',
    fontWeight: '600',
    color: '#D4AF37',
    cursor: 'pointer',
    padding: 0,
    transition: 'color 0.2s ease',
  },
}
