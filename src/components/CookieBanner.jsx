import { useEffect, useState } from 'react'
import { loadConsent, saveConsent } from '../utils/consent.js'
import { Link } from 'react-router-dom'

export default function CookieBanner() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const existing = loadConsent()
    if (!existing) setVisible(true)
  }, [])

  if (!visible) return null

  const accept = () => { saveConsent('granted'); setVisible(false) }
  const reject = () => { saveConsent('denied'); setVisible(false) }

  return (
    <div
      role="dialog"
      aria-live="polite"
      aria-label="Cookie consent"
      className="fixed inset-x-4 bottom-4 z-[60] md:inset-x-auto md:right-6 md:bottom-6 md:max-w-md"
    >
      <div className="card p-5 md:p-6">
        <h3 className="font-display text-lg text-ink">Cookies &amp; analytics</h3>
        <p className="mt-2 text-sm text-ink/75 leading-relaxed">
          We use Google Analytics to understand which brewing guides are read most, so we can improve them.
          No cookies are set until you accept. You can decline and still read every article on the site.
          See our <Link to="/legal/privacy" className="link-underline">Privacy Policy</Link>.
        </p>
        <div className="mt-4 flex flex-col sm:flex-row gap-3">
          <button
            onClick={accept}
            className="inline-flex items-center justify-center rounded-xl px-4 py-2.5 text-sm font-medium bg-espresso-900 text-cream hover:bg-espresso-800 transition"
          >
            Accept analytics
          </button>
          <button
            onClick={reject}
            className="inline-flex items-center justify-center rounded-xl px-4 py-2.5 text-sm font-medium border border-border text-ink hover:bg-cream transition"
          >
            Reject
          </button>
        </div>
      </div>
    </div>
  )
}
