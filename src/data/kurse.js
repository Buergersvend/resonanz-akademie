import P01 from './P01.js'
import G01 from './G01.js'
import K01 from './K01.js'
import G03 from './G03.js'
import G11 from './G11.js'
import G05 from './G05.js'
import G08 from './G08.js'
import P04 from './P04.js'
import N01 from './N01.js'
import G06 from './G06.js'
import P06 from './P06.js'
import S01 from './S01.js'
import N02 from './N02.js'
import P05 from './P05.js'
import K02 from './K02.js'
import G04 from './G04.js'
import P18 from './P18.js'
import S17 from './S17.js'
import E01 from './E01.js'
import G09 from './G09.js'
import N07 from './N07.js'
import H01 from './H01.js'
import Z01 from './Z01.js'
import C01 from './C01.js'
import C06 from './C06.js'
import C07 from './C07.js'
import C02 from './C02.js'
import K03 from './K03.js'
import C08 from './C08.js'
import Y02 from './Y02.js'
import Y05 from './Y05.js'
import P22 from './P22.js'
import F01 from './F01.js'
import F02 from './F02.js'
import G02 from './G02.js'
import T01 from './T01.js'
import P23 from './P23.js'
import F03 from './F03.js'
import F04 from './F04.js'
import T02 from './T02.js'
import T07 from './T07.js'
import G07 from './G07.js'
import G12 from './G12.js'
import B01 from './B01.js'
import B02 from './B02.js'
import B08 from './B08.js'
import B09 from './B09.js'
import K04 from './K04.js'
import B10 from './B10.js'
import P03 from './P03.js'
import P02 from './P02.js'
import B14 from './B14.js'
import C03 from './C03.js'
import C04 from './C04.js'
import C09 from './C09.js'
import C10 from './C10.js'
import N04 from './N04.js'
import N08 from './N08.js'
import N09 from './N09.js'
import N10 from './N10.js'
import N11 from './N11.js'
import N12 from './N12.js'
import N13 from './N13.js'
import N14 from './N14.js'
import N15 from './N15.js'
import N16 from './N16.js'
import P07 from './P07.js'
import P12 from './P12.js'
import S15 from './S15.js'
import Y03 from './Y03.js'
import Z03 from './Z03.js'
// ═══════════════════════════════════════════════════════════
// KURSDATEN — Single Source of Truth
// Lokale JS-Daten für MVP · Migration zu Firestore in Phase 3+
// ═══════════════════════════════════════════════════════════
// Struktur: KURSE[] → module[] → lektionen[]
// Jede Lektion hat: id, titel, inhalt (Markdown-ähnlich), uebung
// ═══════════════════════════════════════════════════════════

export const BEREICHE = [
  { id: 'alle', name: 'Alle Bereiche', icon: '✦' },
  { id: 'grundlagen', name: 'Grundlagen', icon: '◇' },
  { id: 'psyche', name: 'Psyche & Persönlichkeit', icon: '◉' },
  { id: 'bewusstsein', name: 'Bewusstsein & Energie', icon: '◈' },
  { id: 'energie', name: 'Energetik & Bewusstsein', icon: '⚡' },
  { id: 'koerper', name: 'Körper & Vitalität', icon: '⊕' },
  { id: 'koerpergeist', name: 'Körper-Geist-Verbindung', icon: '◇' },
  { id: 'naturheilkunde', name: 'Natur & Pflanzenkunde', icon: '🌿' },
  { id: 'coaching', name: 'Coaching & Begleitung', icon: '💎' },
  { id: 'spiritualitaet', name: 'Spiritualität', icon: '🙏' },
  { id: 'humandesign', name: 'Human Design', icon: '◇' },
  { id: 'zahlen', name: 'Numerologie & Zahlen', icon: '🔢' },
  { id: 'frauen', name: 'Frauen & Zyklen', icon: '✨' },
  { id: 'schutz', name: 'Schutz & Erdung', icon: '🛡️' },
  { id: 'chakren', name: 'Chakrenarbeit', icon: '🔮' },
  { id: 'tiere', name: 'Tierkommunikation', icon: '🐾' },
  { id: 'quanten', name: 'Quantenarbeit', icon: '∞' },
  { id: 'humanenergetik', name: 'Humanenergetik', icon: '◐' },
]

export const KURSE = [
  B10,
  P03,
  P02,
  P01,
  G01,
  K01,
  G03,
G11,
  G05,
  G08,
  P04,
  N01,
  G06,
  P06,
  S01,
  N02,
  P05,
  K02,
  G04,
  P18,
  S17,
  E01,
  G09,
  N07,
  H01,
  Z01,
  C01,
  C06,
  C07,
  C02,
  K03,
  C08,
  Y02,
  Y05,
  P22,
  F01,
  F02,
  G02,
  T01,
  P23,
  F03,
  F04,
  T02,
  T07,
  G07,
  G12,
  B01,
  B02,
  B08,
  B09,
  K04,
  B14,
  C03,
  C04,
  C09,
  C10,
  N04,
  N08,
  N09,
  N10,
  N11,
  N12,
  N13,
  N14,
  N15,
  N16,
  P07,
  P12,
  S15,
  Y03,
  Z03,
]

// ── Helper-Funktionen ────────────────────────────────────

/** Kurs nach ID finden */
export function getKurs(kursId) {
  return KURSE.find(k => k.id === kursId) || null
}

/** Lektion nach ID finden (z.B. 'B10-M1-L1') */
export function getLektion(kursId, lektionId) {
  const kurs = getKurs(kursId)
  if (!kurs) return null
  for (const modul of kurs.module) {
    const lektion = modul.lektionen.find(l => l.id === lektionId)
    if (lektion) return { lektion, modul, kurs }
  }
  return null
}

/** Alle Lektions-IDs eines Kurses in Reihenfolge */
export function getAlleLektionIds(kursId) {
  const kurs = getKurs(kursId)
  if (!kurs) return []
  return kurs.module.flatMap(m => m.lektionen.map(l => l.id))
}

/** Gesamtzahl Lektionen eines Kurses */
export function getGesamtLektionen(kursId) {
  return getAlleLektionIds(kursId).length
}

/** Nächste/Vorherige Lektion */
export function getNavigation(kursId, lektionId) {
  const ids = getAlleLektionIds(kursId)
  const idx = ids.indexOf(lektionId)
  return {
    prev: idx > 0 ? ids[idx - 1] : null,
    next: idx < ids.length - 1 ? ids[idx + 1] : null,
    isFirst: idx === 0,
    isLast: idx === ids.length - 1,
    position: idx + 1,
    total: ids.length,
  }
}
