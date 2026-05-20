// ═══════════════════════════════════════════════════════════
// Firebase Konfiguration — Resonanz Akademie
// ═══════════════════════════════════════════════════════════
// Option A: Gleiche Firebase-Instanz wie Lichtkern (lichtkern-43757)
// Option B: Eigenes Firebase-Projekt für Akademie
// → Sven entscheidet bei Deploy. Vorerst: gleiche Instanz.

import { initializeApp } from 'firebase/app'
import { getAuth } from 'firebase/auth'
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY || '',
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN || '',
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID || 'lichtkern-43757',
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET || '',
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID || '',
  appId: import.meta.env.VITE_FIREBASE_APP_ID || '',
}

const app = initializeApp(firebaseConfig)
export const auth = getAuth(app)
export const db = getFirestore(app)
export default app
