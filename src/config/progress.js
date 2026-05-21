// ═══════════════════════════════════════════════════════════
// PROGRESS — Firestore Fortschritts-Tracking
// Struktur: users/{uid}/kursProgress/{kursId}
// Dokument: { completedLektionen: ['B10-M1-L1', ...], startedAt, lastActivity }
// ═══════════════════════════════════════════════════════════

import { db } from './firebase'
import { doc, getDoc, setDoc, updateDoc, arrayUnion, serverTimestamp } from 'firebase/firestore'
import { getAlleLektionIds } from '../data/kurse'

// ── Fortschritt laden ────────────────────────────────────

/** Fortschritt für einen Kurs laden */
export async function getProgress(uid, kursId) {
  try {
    const ref = doc(db, 'users', uid, 'kursProgress', kursId)
    const snap = await getDoc(ref)
    if (snap.exists()) {
      return snap.data()
    }
    return { completedLektionen: [] }
  } catch (err) {
    console.error('Fehler beim Laden des Fortschritts:', err)
    return { completedLektionen: [] }
  }
}

// ── Lektion als abgeschlossen markieren ──────────────────

/** Eine Lektion abschließen */
export async function completeLektion(uid, kursId, lektionId) {
  try {
    const ref = doc(db, 'users', uid, 'kursProgress', kursId)
    const snap = await getDoc(ref)
    
    if (snap.exists()) {
      await updateDoc(ref, {
        completedLektionen: arrayUnion(lektionId),
        lastActivity: serverTimestamp(),
      })
    } else {
      // Erstes Mal — Dokument anlegen
      await setDoc(ref, {
        completedLektionen: [lektionId],
        startedAt: serverTimestamp(),
        lastActivity: serverTimestamp(),
      })
    }
    return true
  } catch (err) {
    console.error('Fehler beim Speichern des Fortschritts:', err)
    return false
  }
}

// ── Helper-Funktionen ────────────────────────────────────

/** Prüfen ob ein Modul abgeschlossen ist */
export function isModulComplete(completedLektionen, modul) {
  return modul.lektionen.every(l => completedLektionen.includes(l.id))
}

/** Prüfen ob ein Modul freigeschaltet ist (sequentiell) */
export function isModulUnlocked(completedLektionen, kurs, modulNr) {
  // Modul 1 ist immer frei
  if (modulNr === 1) return true
  // Alle vorherigen Module müssen abgeschlossen sein
  const vorherigesModul = kurs.module.find(m => m.nr === modulNr - 1)
  if (!vorherigesModul) return false
  return isModulComplete(completedLektionen, vorherigesModul)
}

/** Prüfen ob eine Lektion freigeschaltet ist */
export function isLektionUnlocked(completedLektionen, kurs, lektionId) {
  const allIds = getAlleLektionIds(kurs.id)
  const idx = allIds.indexOf(lektionId)
  
  // Erste Lektion immer frei
  if (idx === 0) return true
  
  // Vorherige Lektion muss abgeschlossen sein
  const prevId = allIds[idx - 1]
  return completedLektionen.includes(prevId)
}

/** Gesamtfortschritt in Prozent */
export function getProgressPercent(completedLektionen, kursId) {
  const total = getAlleLektionIds(kursId).length
  if (total === 0) return 0
  const done = completedLektionen.filter(id => id.startsWith(kursId)).length
  return Math.round((done / total) * 100)
}

/** Kurs abgeschlossen? */
export function isKursComplete(completedLektionen, kursId) {
  return getProgressPercent(completedLektionen, kursId) === 100
}
