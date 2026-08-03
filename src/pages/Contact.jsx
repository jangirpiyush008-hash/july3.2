import { useState } from 'react'
import { PageHero, Section } from '../components/Section.jsx'
import { Accordion } from '../components/Accordion.jsx'
import * as img from '../assets/images/index.js'
import { trackEvent } from '../utils/analytics.js'

const contactFaqs = [
  { q: 'How quickly do you reply?', a: 'We aim to respond within a few business days. If your message is time-sensitive, please put URGENT in the subject line.' },
  { q: 'Do you accept guest submissions?', a: 'Occasionally. If you would like to pitch a guest article, please include a short outline and one or two paragraphs of the piece in your email.' },
  { q: 'Do you review products?', a: 'Yes, but only equipment we have purchased ourselves or borrowed for extended personal use. We do not accept unsolicited review samples that come with conditions.' },
  { q: 'Where is your postal address?', a: 'The Journal is run remotely by a small editorial team. For any legal correspondence that requires a mailing address, please email us first and we will supply one.' }
]

export default function Contact() {
  const [sent, setSent] = useState(false)
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Write to the editors."
        subtitle="Brew & Bean Journal is a small editorial team. We answer every message that arrives, and we like hearing from readers."
        image={img.community.talk}
        alt="Two people in conversation over cups of coffee at a wooden table"
      />

      <Section>
        <div className="grid gap-8 md:grid-cols-2">
          <div className="card p-8">
            <h2 className="font-display text-2xl">By email</h2>
            <address className="not-italic mt-4 text-ink/85 space-y-1.5">
              <div><a className="link-underline text-copper-700" href="mailto:brewandbeanjournal@gmail.com">brewandbeanjournal@gmail.com</a></div>
              <div className="pt-3 text-sm text-ink/70">
                Phone number and postal address are available on request via email — we prefer to keep them off the
                public site so the inbox stays reader-focused.
              </div>
            </address>
            <div className="divider-warm my-8" />
            <h3 className="font-display text-xl">Business hours</h3>
            <p className="mt-3 text-ink/80">Monday–Friday. We do not monitor email on weekends.</p>
            <div className="divider-warm my-8" />
            <h3 className="font-display text-xl">Expected response time</h3>
            <p className="mt-3 text-ink/80">Two to four business days for most enquiries. Corrections are usually processed the same day.</p>
            <div className="divider-warm my-8" />
            <h3 className="font-display text-xl">Privacy notice</h3>
            <p className="mt-3 text-ink/80 text-sm">
              Emails you send are used only to reply to your enquiry. We do not add correspondents to any marketing
              list. See our full <a className="link-underline text-copper-700" href="/legal/privacy">Privacy Policy</a>.
            </p>
          </div>

          <div className="card p-8">
            <h2 className="font-display text-2xl">Send a note</h2>
            <p className="mt-2 text-sm text-ink/70">
              This form opens your default email client with a pre-filled message. Nothing you type is stored on the
              site.
            </p>
            {sent ? (
              <div className="mt-8 p-6 rounded-2xl border border-copper-500/30 bg-copper-500/5 text-ink">
                Your email client has been opened with the message pre-filled. Please click <em>Send</em> in that
                window to deliver it. If nothing opened, please write to us directly at
                {' '}<a className="link-underline text-copper-700" href="mailto:brewandbeanjournal@gmail.com">brewandbeanjournal@gmail.com</a>.
              </div>
            ) : (
              <form
                className="mt-6 grid gap-5"
                onSubmit={(e) => {
                  e.preventDefault()
                  const f = e.currentTarget
                  const name = (f.elements['name'].value || '').trim()
                  const email = (f.elements['email'].value || '').trim()
                  const subject = (f.elements['subject'].value || '').trim() || 'Website enquiry'
                  const message = (f.elements['message'].value || '').trim()
                  trackEvent('contact_form', {})
                  window.location.href = `mailto:brewandbeanjournal@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\n${message}\n`)}`
                  setSent(true)
                }}
              >
                <div className="grid gap-2">
                  <label className="text-xs uppercase tracking-widest text-ink/60" htmlFor="f-name">Your name</label>
                  <input id="f-name" name="name" required className="rounded-xl px-4 py-3 bg-paper border border-border focus:border-copper-600 focus:outline-none" />
                </div>
                <div className="grid gap-2">
                  <label className="text-xs uppercase tracking-widest text-ink/60" htmlFor="f-email">Email</label>
                  <input id="f-email" name="email" type="email" required className="rounded-xl px-4 py-3 bg-paper border border-border focus:border-copper-600 focus:outline-none" />
                </div>
                <div className="grid gap-2">
                  <label className="text-xs uppercase tracking-widest text-ink/60" htmlFor="f-subj">Subject</label>
                  <input id="f-subj" name="subject" className="rounded-xl px-4 py-3 bg-paper border border-border focus:border-copper-600 focus:outline-none" />
                </div>
                <div className="grid gap-2">
                  <label className="text-xs uppercase tracking-widest text-ink/60" htmlFor="f-msg">Message</label>
                  <textarea id="f-msg" name="message" rows="6" required className="rounded-xl px-4 py-3 bg-paper border border-border focus:border-copper-600 focus:outline-none"></textarea>
                </div>
                <button className="rounded-xl px-5 py-3 font-medium bg-espresso-900 text-cream hover:bg-espresso-800 transition">Send the letter</button>
              </form>
            )}
          </div>
        </div>
      </Section>

      <Section eyebrow="Common questions" title="Reader questions about contacting us">
        <Accordion items={contactFaqs} idPrefix="con-faq" />
      </Section>

      <Section eyebrow="Location" title="Where we are">
        <div className="card overflow-hidden">
          <div className="w-full h-72 bg-warm-gradient flex items-center justify-center text-ink/60 text-sm">
            <div className="text-center px-4">
              <p className="font-display text-xl text-ink">Editorial team — remote</p>
              <p className="mt-2 max-w-md mx-auto">Brew &amp; Bean Journal is a distributed editorial team. A postal address is available on request via email. This section will show a real map once a physical office is added.</p>
            </div>
          </div>
        </div>
      </Section>
    </>
  )
}
