import { Link } from 'react-router-dom'
import { Section } from '../components/Section.jsx'
import { Accordion, InlineExpand } from '../components/Accordion.jsx'
import * as img from '../assets/images/index.js'
import { GLOBAL_FAQS } from '../data/faqs.js'
import { trackEvent } from '../utils/analytics.js'

const categories = [
  { title: 'Brewing Guides', to: '/brewing-guides', img: img.brewing.pourOver, blurb: 'Ratios, water, temperature and technique — the fundamentals that quietly govern every good cup.' },
  { title: 'Home Espresso', to: '/home-espresso', img: img.espresso.machine, blurb: 'Dose, yield and pressure. What actually happens under nine bars of pressure in nine seconds.' },
  { title: 'Pour Over', to: '/pour-over', img: img.pourOver.kettle, blurb: 'V60, Chemex, Kalita — the geometry of paper filters and the pours that suit each one.' },
  { title: 'French Press', to: '/french-press', img: img.frenchPress.press, blurb: 'A four-minute steep and a firm plunge. The most forgiving brewer worth mastering properly.' },
  { title: 'Coffee Beans', to: '/coffee-beans', img: img.beans.roasted, blurb: 'Origins, processing, roast level and how a specialty bag actually gets to your kitchen.' },
  { title: 'Home Coffee Bar', to: '/home-coffee-bar', img: img.bar.counter, blurb: 'A workable setup is more about layout than square footage. Where the grinder goes matters.' }
]

const brewingHighlights = [
  { title: 'A dialled-in ratio', body: 'Start at 1:16 by weight for filter — 30 g of coffee to 480 g of water. Adjust up or down to taste.' },
  { title: 'The right water temperature', body: '92°C – 96°C for most coffees. Slightly cooler for very light roasts if you want more clarity.' },
  { title: 'A fresh grind, every time', body: 'Ground coffee begins losing aromatics within twenty minutes. A grinder pays for itself in flavour.' },
  { title: 'A patient bloom', body: 'Give fresh coffee thirty to forty-five seconds with the first pour so trapped CO₂ can escape.' }
]

const homeFaqs = GLOBAL_FAQS.slice(0, 8)

export default function Home() {
  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden bg-warm-gradient border-b border-border">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 md:py-32 grid gap-12 md:grid-cols-5 items-center">
          <div className="md:col-span-3">
            <span className="pill">Independent editorial · Since day one</span>
            <h1 className="mt-6 font-display text-4xl sm:text-5xl md:text-7xl leading-[1.02] text-ink">
              Coffee, brewed with attention.
              <span className="block text-copper-600">A slow journal of the craft.</span>
            </h1>
            <p className="mt-8 text-lg md:text-xl text-ink/80 max-w-2xl">
              Brew &amp; Bean Journal is an independent editorial publication about specialty coffee. We write patient,
              beginner-friendly guides for home brewers — pour over, espresso, French press, coffee bean origins and
              the small daily rituals that make a morning cup worth waking up for.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row gap-4">
              <Link to="/brewing-guides" className="inline-flex items-center justify-center rounded-2xl px-6 py-3.5 font-medium text-cream bg-espresso-900 hover:bg-espresso-800 transition">
                Start with the fundamentals
              </Link>
              <Link to="/blog" className="inline-flex items-center justify-center rounded-2xl px-6 py-3.5 font-medium border border-border text-ink hover:bg-milk transition">
                Read the Journal
              </Link>
            </div>
            <dl className="mt-14 grid grid-cols-3 gap-4 max-w-lg">
              <div><dt className="text-xs uppercase tracking-widest text-ink/50">Free to read</dt><dd className="font-display text-xl text-ink mt-1">Every guide</dd></div>
              <div><dt className="text-xs uppercase tracking-widest text-ink/50">On-page ads</dt><dd className="font-display text-xl text-ink mt-1">None</dd></div>
              <div><dt className="text-xs uppercase tracking-widest text-ink/50">Editorial</dt><dd className="font-display text-xl text-ink mt-1">Independent</dd></div>
            </dl>
          </div>
          <div className="md:col-span-2">
            <div className="rounded-3xl overflow-hidden shadow-card border border-border">
              <img src={img.hero.pour} alt="Slow pour of hot water into a Hario V60 dripper" className="w-full h-auto block" />
            </div>
          </div>
        </div>
      </section>

      {/* EDITORIAL PROMISE */}
      <Section eyebrow="Editorial promise" title="What this website is, in one paragraph">
        <div className="prose-warm max-w-3xl">
          <p>
            Brew &amp; Bean Journal is a small, independent editorial site about specialty coffee. Everything you read
            here is <strong>general educational content and personal opinion</strong> — not professional or nutritional
            advice. We do not sell coffee, we do not sell equipment, and we do not accept paid product placements. Some
            outbound links may be affiliate links; when they are, we mark them clearly and the editorial position never
            changes because of a commission. If you spot a mistake, please tell us — we correct promptly and note the
            date of the correction at the bottom of the article.
          </p>
          <ul>
            <li><Link to="/legal/editorial-policy" className="link-underline">Editorial policy &amp; corrections</Link></li>
            <li><Link to="/legal/affiliate-disclosure" className="link-underline">Affiliate disclosure</Link></li>
            <li><Link to="/legal/privacy" className="link-underline">Privacy &amp; cookies</Link></li>
          </ul>
        </div>
      </Section>

      {/* CATEGORIES */}
      <Section
        eyebrow="Explore the site"
        title="Six patient ways in"
        intro="Each section is written like a long letter from a friend who happens to spend more than the average amount of time thinking about coffee. Read them in any order; the fundamentals apply everywhere."
      >
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {categories.map(c => (
            <Link key={c.to} to={c.to} onClick={() => trackEvent('category_click', { category: c.title })} className="card overflow-hidden block">
              <img src={c.img} alt={c.title} loading="lazy" className="w-full aspect-[4/3] object-cover" />
              <div className="p-6">
                <h3 className="font-display text-xl">{c.title}</h3>
                <p className="mt-2 text-ink/75 text-sm">{c.blurb}</p>
                <span className="mt-4 inline-block text-copper-700 text-sm">Open guide →</span>
              </div>
            </Link>
          ))}
        </div>
      </Section>

      {/* BREWING FUNDAMENTALS */}
      <Section eyebrow="Fundamentals" title="Four things that quietly govern every good cup" intro="Regardless of the brewer, four variables do most of the work. Get these right and the specifics of technique become fine-tuning.">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {brewingHighlights.map((b, i) => (
            <div key={i} className="card p-6">
              <div className="text-xs uppercase tracking-widest text-copper-700">Fundamental {i + 1}</div>
              <h3 className="mt-3 font-display text-xl">{b.title}</h3>
              <p className="mt-3 text-ink/80 text-[15px]">{b.body}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* FROM THE JOURNAL */}
      <Section eyebrow="From the Journal" title="Popular reading" intro="Long-form guides — each one written to actually be useful in a home kitchen, not to fill a page.">
        <div className="grid gap-6 md:grid-cols-2">
          <InlineExpand title="A Complete Pour Over Guide for Home Brewers" cta="Read">
            <img src={img.blog[0]} alt="Pour over brewer with paper filter and hot water" loading="lazy" className="w-full aspect-[16/9] object-cover rounded-xl mb-4" />
            <div className="flex items-center gap-3 text-xs uppercase tracking-widest text-copper-700 mb-3">
              <span>Pour Over</span><span aria-hidden="true">·</span><span>Beginner</span><span aria-hidden="true">·</span><span>9 min</span>
            </div>
            <p>
              A well-made pour over is what convinces most home brewers that coffee is worth thinking about. Get the ratio
              right (1:16 is a friendly starting point), the water temperature between 92°C and 96°C, and the grind about
              as coarse as coarse sea salt. Bloom with twice the weight of dry coffee for 30–45 seconds, then pour in slow
              concentric circles until you reach your target weight, aiming for a total contact time of about 3½ minutes.
            </p>
            <p className="mt-3">The full guide covers filter choice, kettle geometry, and how to diagnose the three most common pour-over faults.</p>
            <p className="mt-3"><Link to="/pour-over" className="link-underline text-copper-700">Continue in the Pour Over guide →</Link></p>
          </InlineExpand>

          <InlineExpand title="The Science of Espresso Extraction" cta="Read">
            <img src={img.espresso.pull} alt="Espresso shot pouring from a portafilter" loading="lazy" className="w-full aspect-[16/9] object-cover rounded-xl mb-4" />
            <div className="flex items-center gap-3 text-xs uppercase tracking-widest text-copper-700 mb-3">
              <span>Espresso</span><span aria-hidden="true">·</span><span>Intermediate</span><span aria-hidden="true">·</span><span>11 min</span>
            </div>
            <p>
              Modern espresso is defined by three numbers: <strong>dose</strong> (how many grams of dry coffee), <strong>yield</strong>
              (how many grams of liquid coffee end up in the cup), and <strong>time</strong> (how long the pump has been
              running). A common starting point for a modern shot is 18 g in, 36 g out, in 28 seconds — a 1:2 ratio at
              around nine bars of pressure.
            </p>
            <p className="mt-3">If it tastes sour, extract longer. Bitter and hollow, extract less. The taste map is remarkably reliable once you learn to read it.</p>
            <p className="mt-3"><Link to="/home-espresso" className="link-underline text-copper-700">Continue in the Espresso guide →</Link></p>
          </InlineExpand>
        </div>
      </Section>

      {/* EQUIPMENT SHOWCASE */}
      <Section eyebrow="Equipment" title="Where the spending actually pays off" intro="A short, opinionated list of the equipment upgrades that make a real difference. We receive no commission on any brand mentioned by name on this page.">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {[
            { title: 'A digital scale that reads to 0.1 g', body: 'The single most under-rated purchase in home coffee. About $25, useful every day for the rest of your life.', img: img.brewing.scale },
            { title: 'A good conical burr grinder', body: 'A modest brewer with a good grinder beats a great brewer with a bad grinder almost every time. Budget $150–$400.', img: img.brewing.pourOver },
            { title: 'A gooseneck kettle', body: 'For pour over specifically, a swan-neck spout lets you pour a slow, controlled stream. Temperature control is a bonus.', img: img.pourOver.kettle }
          ].map(t => (
            <div key={t.title} className="card overflow-hidden">
              <img src={t.img} alt={t.title} loading="lazy" className="w-full aspect-[4/3] object-cover" />
              <div className="p-6">
                <h3 className="font-display text-xl">{t.title}</h3>
                <p className="mt-3 text-ink/80 text-[15px]">{t.body}</p>
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* HOME COFFEE BAR */}
      <Section eyebrow="Home coffee bar" title="A workable setup, in a real kitchen">
        <div className="grid gap-8 md:grid-cols-2 items-center">
          <div className="rounded-3xl overflow-hidden shadow-card border border-border">
            <img src={img.bar.setup} alt="Home coffee bar setup on a wooden countertop" loading="lazy" className="w-full h-auto block" />
          </div>
          <div className="prose-warm">
            <p>
              A workable home café is less about square footage than about layout. If you have to move things every time
              you make a coffee, you eventually stop making coffee. Give your grinder a permanent home next to a socket,
              keep beans in an opaque airtight container within arm’s reach, and put a small tray under the machine or
              dripper to catch drips.
            </p>
            <p>
              The rest is aesthetics — and aesthetics matter, because a beautiful setup is one you look forward to using.
            </p>
            <p><Link to="/home-coffee-bar" className="link-underline text-copper-700">Read the full home bar guide →</Link></p>
          </div>
        </div>
      </Section>

      {/* NEWSLETTER */}
      <Section eyebrow="Optional email updates" title="Slow reading, one email at a time">
        <div className="warm-panel p-8 md:p-10 grid gap-6 md:grid-cols-5 items-center">
          <div className="md:col-span-3">
            <p className="text-ink/85">
              If we start an email newsletter, you can request to be added below. Your email address will only be used
              to send the newsletter, is never sold or shared, and you can unsubscribe at any time by writing to us.
              We publish no fake subscriber counts and make no promises about frequency.
            </p>
          </div>
          <form
            className="md:col-span-2 flex flex-col sm:flex-row gap-3"
            onSubmit={(e) => {
              e.preventDefault()
              const em = (e.currentTarget.elements.email.value || '').trim()
              if (!em) return
              trackEvent('newsletter_signup', {})
              window.location.href = `mailto:brewandbeanjournal@gmail.com?subject=${encodeURIComponent('Please add me to the newsletter')}&body=${encodeURIComponent(`Please add this email to the Brew & Bean Journal newsletter:\n\n${em}\n`)}`
            }}
          >
            <label htmlFor="nl-email" className="sr-only">Email address</label>
            <input id="nl-email" name="email" type="email" required placeholder="you@example.com" className="flex-1 rounded-xl px-4 py-3 bg-paper border border-border focus:border-copper-600 focus:outline-none" />
            <button type="submit" className="rounded-xl px-5 py-3 font-medium bg-espresso-900 text-cream hover:bg-espresso-800 transition">Request to join</button>
          </form>
        </div>
      </Section>

      {/* FAQ */}
      <Section eyebrow="Frequently asked" title="A short version of the FAQ" intro="Eight of the questions we hear most. The full 25-question list lives at the bottom of every category page.">
        <Accordion items={homeFaqs} idPrefix="home-faq" />
      </Section>

      {/* CONTACT */}
      <Section eyebrow="Get in touch" title="Write to the editors">
        <div className="grid gap-6 md:grid-cols-2">
          <div className="card p-8">
            <h3 className="font-display text-xl">By email</h3>
            <address className="not-italic mt-4 text-ink/80 space-y-1">
              <div><a className="link-underline text-copper-700" href="mailto:brewandbeanjournal@gmail.com">brewandbeanjournal@gmail.com</a></div>
              <div>We aim to respond within a few business days.</div>
            </address>
            <p className="mt-6 text-sm text-ink/60">
              For factual corrections please put <em>Correction</em> in the subject line. For a topic suggestion,
              please put <em>Suggestion</em>.
            </p>
          </div>
          <div className="card p-8">
            <h3 className="font-display text-xl">Send a note</h3>
            <p className="mt-2 text-sm text-ink/70">This form opens your email client pre-filled — no data is stored on the site.</p>
            <form
              className="mt-4 grid gap-4"
              onSubmit={(e) => {
                e.preventDefault()
                const f = e.currentTarget
                const name = (f.elements['name'].value || '').trim()
                const email = (f.elements['email'].value || '').trim()
                const message = (f.elements['message'].value || '').trim()
                trackEvent('contact_form', {})
                window.location.href = `mailto:brewandbeanjournal@gmail.com?subject=${encodeURIComponent('Website enquiry')}&body=${encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\n${message}\n`)}`
              }}
            >
              <div className="grid gap-2">
                <label className="text-xs uppercase tracking-widest text-ink/60" htmlFor="c-name">Name</label>
                <input id="c-name" name="name" required className="rounded-xl px-4 py-3 bg-paper border border-border focus:border-copper-600 focus:outline-none" />
              </div>
              <div className="grid gap-2">
                <label className="text-xs uppercase tracking-widest text-ink/60" htmlFor="c-email">Email</label>
                <input id="c-email" name="email" type="email" required className="rounded-xl px-4 py-3 bg-paper border border-border focus:border-copper-600 focus:outline-none" />
              </div>
              <div className="grid gap-2">
                <label className="text-xs uppercase tracking-widest text-ink/60" htmlFor="c-msg">Message</label>
                <textarea id="c-msg" name="message" rows="4" required className="rounded-xl px-4 py-3 bg-paper border border-border focus:border-copper-600 focus:outline-none"></textarea>
              </div>
              <button className="rounded-xl px-5 py-3 font-medium bg-espresso-900 text-cream hover:bg-espresso-800 transition">Send</button>
            </form>
          </div>
        </div>
      </Section>
    </>
  )
}
