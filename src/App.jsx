// ═══════════════════════════════════════════════════════════
// App.jsx — Human Resonanz Akademie Root
// 11.06.2026: Routen /impressum + /datenschutz,
// Schriftarten lokal (@fontsource), globaler Gold-Scrollbalken
// ═══════════════════════════════════════════════════════════

// ── Lokale Schriftarten (DSGVO: keine Google-Fonts-CDN-Verbindung) ──
import '@fontsource/cormorant-garamond/300.css'
import '@fontsource/cormorant-garamond/400.css'
import '@fontsource/cormorant-garamond/500.css'
import '@fontsource/cormorant-garamond/600.css'
import '@fontsource/cormorant-garamond/700.css'
import '@fontsource/cormorant-garamond/400-italic.css'
import '@fontsource/cormorant-garamond/500-italic.css'
import '@fontsource/raleway/300.css'
import '@fontsource/raleway/400.css'
import '@fontsource/raleway/500.css'
import '@fontsource/raleway/600.css'
import '@fontsource/raleway/700.css'

import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import { AuthProvider, useAuth } from './config/AuthContext'
import Landing from './pages/Landing'
import Login from './pages/Login'
import Dashboard from './pages/Dashboard'
import Kurse from './pages/Kurse'
import KursDetail from './pages/KursDetail'
import Lektion from './pages/Lektion'
import Impressum from './pages/Impressum'
import Datenschutz from './pages/Datenschutz'

// ── Globale Styles: gut sichtbarer Gold-Scrollbalken ─────────
const GLOBAL_STYLES = `
  /* Firefox */
  html {
    scrollbar-width: thin;
    scrollbar-color: rgba(212, 175, 55, 0.45) #0d0d0d;
  }
  /* Chrome / Edge / Safari */
  ::-webkit-scrollbar {
    width: 11px;
    height: 11px;
  }
  ::-webkit-scrollbar-track {
    background: #0d0d0d;
  }
  ::-webkit-scrollbar-thumb {
    background: rgba(212, 175, 55, 0.40);
    border-radius: 6px;
    border: 2px solid #0d0d0d;
  }
  ::-webkit-scrollbar-thumb:hover {
    background: rgba(212, 175, 55, 0.65);
  }
`

// ── Protected Route ──────────────────────────────────────────
function ProtectedRoute({ children }) {
  const { user, loading } = useAuth()
  
  if (loading) {
    return (
      <div style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100vh',
        background: '#0a0a0a',
      }}>
        <div style={{
          width: '40px',
          height: '40px',
          border: '3px solid rgba(212, 175, 55, 0.2)',
          borderTopColor: '#D4AF37',
          borderRadius: '50%',
          animation: 'spin 0.8s linear infinite',
        }} />
        <style>{`@keyframes spin { to { transform: rotate(360deg); } }`}</style>
      </div>
    )
  }
  
  if (!user) return <Navigate to="/login" replace />
  return children
}

// ── Public Route (redirect wenn eingeloggt) ─────────────
function PublicRoute({ children }) {
  const { user, loading } = useAuth()
  if (loading) return null
  if (user) return <Navigate to="/dashboard" replace />
  return children
}

// ── App ──────────────────────────────────────────────────────
export default function App() {
  return (
    <AuthProvider>
      <style>{GLOBAL_STYLES}</style>
      <BrowserRouter>
        <Routes>
          {/* Public */}
          <Route path="/" element={<Landing />} />
          <Route path="/login" element={
            <PublicRoute><Login /></PublicRoute>
          } />
          <Route path="/impressum" element={<Impressum />} />
          <Route path="/datenschutz" element={<Datenschutz />} />
          
          {/* Protected */}
          <Route path="/dashboard" element={
            <ProtectedRoute><Dashboard /></ProtectedRoute>
          } />
          <Route path="/kurse" element={
            <ProtectedRoute><Kurse /></ProtectedRoute>
          } />
          <Route path="/kurs/:kursId" element={
            <ProtectedRoute><KursDetail /></ProtectedRoute>
          } />
          <Route path="/kurs/:kursId/lektion/:lektionId" element={
            <ProtectedRoute><Lektion /></ProtectedRoute>
          } />
          
          {/* Fallback */}
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  )
}
