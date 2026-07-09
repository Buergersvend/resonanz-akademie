// ═══════════════════════════════════════════════════════════
// Auth Context — onAuthStateChanged statt auth.currentUser
// (Lesson learned: Race Condition vermeiden!)
// ═══════════════════════════════════════════════════════════

import { createContext, useContext, useState, useEffect } from 'react'
import { auth } from '../config/firebase'
import { 
  onAuthStateChanged, 
  signInWithEmailAndPassword, 
  createUserWithEmailAndPassword,
  signOut,
  updateProfile 
} from 'firebase/auth'

const AuthContext = createContext(null)

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (firebaseUser) => {
      setUser(firebaseUser)
      setLoading(false)
    })
    return unsubscribe
  }, [])

  const login = async (email, password) => {
    return signInWithEmailAndPassword(auth, email, password)
  }

  const register = async (email, password, displayName) => {
    const cred = await createUserWithEmailAndPassword(auth, email, password)
    if (displayName) {
      await updateProfile(cred.user, { displayName })
    }
    return cred
  }

  const logout = async () => {
    return signOut(auth)
  }

  const setDisplayName = async (name) => {
    if (!user) return;
    await updateProfile(user, { displayName: name });
    setUser({ ...user, displayName: name });
  };

  return (
    <AuthContext.Provider value={{ user, loading, login, register, logout, setDisplayName }}>
      {children}
    </AuthContext.Provider>
  )
}

export function useAuth() {
  const context = useContext(AuthContext)
  if (!context) throw new Error('useAuth must be used within AuthProvider')
  return context
}
