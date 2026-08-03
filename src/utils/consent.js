import { grantConsent, denyConsent } from './analytics.js'

const KEY = 'bbj_consent_v1'

export function loadConsent() {
  try {
    const v = typeof localStorage !== 'undefined' ? localStorage.getItem(KEY) : null
    if (v === 'granted') { grantConsent(); return 'granted' }
    if (v === 'denied') { denyConsent(); return 'denied' }
    return null
  } catch (_) { return null }
}

export function saveConsent(choice) {
  try { localStorage.setItem(KEY, choice) } catch (_) {}
  if (choice === 'granted') grantConsent()
  else denyConsent()
}
