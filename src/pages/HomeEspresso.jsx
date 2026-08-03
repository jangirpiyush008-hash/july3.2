import { PageHero, Section } from '../components/Section.jsx'
import { Accordion, InlineExpand } from '../components/Accordion.jsx'
import * as img from '../assets/images/index.js'
import { GLOBAL_FAQS } from '../data/faqs.js'

const faqs = GLOBAL_FAQS.slice(9, 18)

export default function HomeEspresso() {
  return (
    <>
      <PageHero
        eyebrow="Home Espresso"
        title="Espresso at home, taken seriously."
        subtitle="Dose, yield, time and pressure — the four numbers that describe a modern espresso shot, and the small daily habits that turn nine seconds under nine bars into a genuinely great cup."
        image={img.espresso.machine}
        alt="Chrome espresso machine on a wooden kitchen counter"
      />

      <Section eyebrow="The short version" title="A dialled-in modern shot, in one paragraph">
        <div className="prose-warm max-w-3xl">
          <p>
            Grind 18 g of coffee fine, distribute it evenly in your portafilter basket, tamp firmly. Lock in and start
            the pump. The first drop should appear at around 8–12 seconds. Stop the shot when your cup reads 36 g, at
            a total time of 25–32 seconds. That is a 1:2 ratio at approximately nine bars of pressure. If it tastes
            sour, extract longer (grind finer or extend time). If bitter and hollow, extract less (grind coarser or
            shorten time).
          </p>
        </div>
      </Section>

      <Section eyebrow="Buying guide" title="What to buy for espresso at home">
        <div className="prose-warm max-w-3xl">
          <p>
            Espresso is unusually equipment-sensitive. You need a machine that holds nine bars steadily, and a grinder
            capable of the very fine, uniform grind espresso demands. Common combinations we see in serious home
            setups:
          </p>
          <ul>
            <li><strong>Entry (~$500 total)</strong> — a Breville Bambino or Gaggia Classic Pro plus a Baratza Encore ESP or Eureka Mignon Silenzio. Compromises on shot stability but a genuine espresso experience.</li>
            <li><strong>Mid (~$1,500)</strong> — a Rancilio Silvia Pro or Lelit Anna plus a Mignon Specialità or Baratza Vario+. Where most enthusiasts land.</li>
            <li><strong>Enthusiast ($2,500+)</strong> — a Profitec Pro 500 or Lelit Bianca plus a DF64/DF83 or Niche Zero. Diminishing returns, but a beautiful workflow.</li>
          </ul>
          <p>
            We receive no commission from any of the brands above. These are the machines and grinders we have used
            ourselves; there are excellent alternatives at every price point.
          </p>
        </div>
      </Section>

      <Section eyebrow="Technique" title="The four small habits that dial a shot in">
        <div className="grid gap-6 md:grid-cols-2">
          {[
            { t: 'Weigh both dose and yield', b: 'Never eyeball. 18.0 in, 36.0 out — a 0.1 g scale under the cup is worth its weight in blonde shots.' },
            { t: 'Distribute before you tamp', b: 'A WDT tool (or a straightened paperclip) breaks up clumps and makes the puck uniform. Under-rated.' },
            { t: 'Tamp level, not hard', b: 'Level matters far more than force. 15 kg of pressure is enough. Uneven tamps cause channelling.' },
            { t: 'Purge and pre-heat', b: 'A short flush of hot water through the group before you lock in the portafilter stabilises temperature at the puck.' }
          ].map((x, i) => (
            <InlineExpand key={i} title={x.t} cta="Show">
              <p>{x.b}</p>
              <p className="mt-3 text-sm text-ink/70">Small habits, compound results.</p>
            </InlineExpand>
          ))}
        </div>
      </Section>

      <Section eyebrow="Milk" title="Steamed milk that makes latte art possible">
        <div className="prose-warm max-w-3xl">
          <p>
            Aim for microfoam: milk steamed to 55–65°C with air folded in so evenly that individual bubbles are
            invisible. Start with cold whole milk in a clean pitcher. Position the wand just below the surface to
            introduce a hiss of air for the first three or four seconds, then submerge it slightly deeper to spin the
            milk. Stop when the pitcher is uncomfortable to hold. Bang the pitcher on the counter, swirl to
            re-integrate, and pour immediately.
          </p>
          <p>The classic beginner mistake is either too much air (foamy, dry milk) or too little (flat, hot milk).</p>
        </div>
        <div className="mt-6 rounded-3xl overflow-hidden shadow-card border border-border">
          <img src={img.espresso.latteArt} alt="Latte art heart poured into an espresso" className="w-full h-auto block" />
        </div>
      </Section>

      <Section eyebrow="Frequently asked" title="Reader questions about home espresso">
        <Accordion items={faqs} idPrefix="es-faq" />
      </Section>
    </>
  )
}
