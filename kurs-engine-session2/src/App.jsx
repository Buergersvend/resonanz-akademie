// ═══════════════════════════════════════════════════════════
// App.jsx — Resonanz Akademie Root
// ═══════════════════════════════════════════════════════════

import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import { AuthProvider, useAuth } from './config/AuthContext'
import Landing from './pages/Landing'
import Login from './pages/Login'
import Dashboard from './pages/Dashboard'
import Kurse from './pages/Kurse'
import KursDetail from './pages/KursDetail'
import Lektion from './pages/Lektion'

// ── Protected Route ───────────────────────────────────────
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

// ── Public Route (redirect wenn eingeloggt) ───────────────
function PublicRoute({ children }) {
  const { user, loading } = useAuth()
  if (loading) return null
  if (user) return <Navigate to="/dashboard" replace />
  return children
}

// ── App ───────────────────────────────────────────────────
export default function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          {/* Public */}
          <Route path="/" element={<Landing />} />
          <Route path="/login" element={
            <PublicRoute><Login /></PublicRoute>
          } />
          
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
