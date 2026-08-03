// Analytics helper. Every function is a no-op unless a valid GA4 measurement
// ID is present on window.__BBJ_GA_ID and the gtag library has loaded.

function isBrowser() { return typeof window !== 'undefined' }
function gaId() { return isBrowser() ? (window.__BBJ_GA_ID || '') : '' }
function hasGa() { return isBrowser() && typeof window.gtag === 'function' && /^G-[A-Z0-9]{6,}$/.test(gaId()) }

export function grantConsent() {
  if (!hasGa()) return
  window.gtag('consent', 'update', {
    ad_storage: 'granted', ad_user_data: 'granted', ad_personalization: 'granted', analytics_storage: 'granted'
  })
}
export function denyConsent() {
  if (!hasGa()) return
  window.gtag('consent', 'update', {
    ad_storage: 'denied', ad_user_data: 'denied', ad_personalization: 'denied', analytics_storage: 'denied'
  })
}
export function trackPageView(path) {
  if (!hasGa()) return
  window.gtag('event', 'page_view', { page_path: path, page_location: window.location.href, send_to: gaId() })
}
export function trackEvent(name, params = {}) {
  if (!hasGa()) return
  window.gtag('event', name, params)
}
