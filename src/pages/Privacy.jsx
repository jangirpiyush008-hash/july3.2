import { PageHero, Section } from '../components/Section.jsx'

export default function Privacy() {
  return (
    <>
      <PageHero
        eyebrow="Legal"
        title="Privacy policy."
        subtitle="A plain-English description of what we collect, why we collect it, and how you can ask us to stop."
        kicker="Last updated: 2026-08-03"
      />
      <Section>
        <div className="prose-warm max-w-3xl">
          <h2>1. Who we are</h2>
          <p>Brew &amp; Bean Journal (“we”, “us”, “our”) is an independent editorial publication about specialty coffee.
            You can contact us at <a className="link-underline text-copper-700" href="mailto:brewandbeanjournal@gmail.com">brewandbeanjournal@gmail.com</a>.</p>

          <h2>2. Scope</h2>
          <p>This policy applies to this website and any subdomains we operate. It does not apply to any third-party websites we may link to.</p>

          <h2>3. What we collect</h2>
          <ul>
            <li><strong>Analytics data</strong> — anonymised pageviews, referrers, browser type and country, via Google Analytics 4, only after you accept the cookie banner.</li>
            <li><strong>Contact-form data</strong> — the name, email and message you voluntarily send using the contact form. This form opens your email client; the site itself never stores the message.</li>
            <li><strong>Server logs</strong> — IP address, user agent and requested URL, retained for up to 14 days for security purposes.</li>
          </ul>

          <h2>4. What we do not collect</h2>
          <p>We do not collect payment information (we do not sell anything), we do not use device fingerprinting, we do not track you across other websites, and we do not sell or share your personal data with advertisers.</p>

          <h2>5. Consent for analytics</h2>
          <p>Google Analytics loads only after you accept the cookie banner. Until then, analytics_storage and ad_storage remain <em>denied</em> under Google Consent Mode v2. If you decline, no analytics cookies are set and no analytics events are recorded.</p>

          <h2>6. Cookies we set</h2>
          <ul>
            <li><strong>bbj_consent_v1</strong> — remembers your cookie choice (first-party, expires after 12 months).</li>
            <li><strong>_ga, _ga_XXXXX</strong> — set by Google Analytics only after you accept.</li>
          </ul>

          <h2>7. How long we keep data</h2>
          <p>Analytics data is retained for 14 months. Emails sent to us are kept for up to 24 months to help us maintain continuity of correspondence.</p>

          <h2>8. Your rights</h2>
          <p>You may request a copy of your data, ask for correction, or ask us to delete it. Write to <a className="link-underline text-copper-700" href="mailto:brewandbeanjournal@gmail.com">brewandbeanjournal@gmail.com</a> with the words <em>Privacy request</em> in the subject line. We respond within 30 days.</p>

          <h2>9. Children</h2>
          <p>Our audience is adults. We do not knowingly collect data from anyone under 13.</p>

          <h2>10. Data location</h2>
          <p>Website hosting is provided in the United States. Google Analytics data is processed by Google LLC subject to its own terms.</p>

          <h2>11. Security</h2>
          <p>The site is served over HTTPS. Data is protected with commercially reasonable measures. No system is perfectly secure and we make no absolute guarantee.</p>

          <h2>12. Changes to this policy</h2>
          <p>Material changes are noted with an updated date at the top of this page.</p>

          <h2>13. Contact</h2>
          <p>For any question about this policy, please email <a className="link-underline text-copper-700" href="mailto:brewandbeanjournal@gmail.com">brewandbeanjournal@gmail.com</a>.</p>
        </div>
      </Section>
    </>
  )
}
