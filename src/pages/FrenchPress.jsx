import { PageHero, Section } from '../components/Section.jsx'
import { Accordion, InlineExpand } from '../components/Accordion.jsx'
import * as img from '../assets/images/index.js'
import { GLOBAL_FAQS } from '../data/faqs.js'

const faqs = GLOBAL_FAQS.slice(4, 13)

export default function FrenchPress() {
  return (
    <>
      <PageHero
        eyebrow="French Press"
        title="The most forgiving brewer worth mastering properly."
        subtitle="A metal mesh, a glass beaker, and a plunger. Four minutes of contact time. A firm plunge, a slow decant, and possibly the best cup of coffee your kitchen can make with almost no equipment."
        image={img.frenchPress.press}
        alt="Bodum French press full of freshly brewed coffee"
      />

      <Section eyebrow="Recipe" title="A dependable French press recipe">
        <div className="prose-warm max-w-3xl">
          <p>
            Weigh 30 g of coarsely ground coffee — about as coarse as coarse sea salt — into a preheated French press.
            Pour 500 g of water at 95°C evenly over the grounds. Stir gently to break the crust that forms on top. Put
            the lid on but do not plunge. Wait four minutes. Plunge slowly and firmly. Decant into a warmed jug or into
            cups immediately; do not leave the coffee in contact with the grounds.
          </p>
          <p>
            The single biggest French press mistake is leaving brewed coffee in the press. Even a five-minute delay
            over-extracts the cup and turns a bright brew into a dull one.
          </p>
        </div>
      </Section>

      <Section eyebrow="Why we like French press" title="What French press does that other methods can’t">
        <div className="prose-warm max-w-3xl">
          <ul>
            <li><strong>Body.</strong> The mesh filter passes coffee oils and micro-fines that paper filters remove. The result is a heavier, silkier mouthfeel that many drinkers prefer.</li>
            <li><strong>Forgiveness.</strong> Grind is less critical than in pour-over or espresso. If you get within a range, the cup is good.</li>
            <li><strong>Capacity.</strong> A 1-litre French press serves four cups in one brew, without any pouring choreography.</li>
            <li><strong>Simplicity.</strong> No paper filters to keep in stock, no drippers to store, no learning curve to speak of.</li>
          </ul>
        </div>
        <div className="mt-6 rounded-3xl overflow-hidden shadow-card border border-border">
          <img src={img.frenchPress.pour} alt="Pouring coffee from a French press into a mug" className="w-full h-auto block" />
        </div>
      </Section>

      <Section eyebrow="Buying a French press" title="What to look for">
        <div className="prose-warm max-w-3xl">
          <p>
            Any well-made French press works. What matters:
          </p>
          <ul>
            <li>A double-mesh screen (fewer fines pass through).</li>
            <li>A borosilicate glass or double-walled steel beaker.</li>
            <li>A comfortable handle and a firm-fitting plunger.</li>
          </ul>
          <p>
            The Bodum Chambord is a long-standing budget-friendly choice; the Espro P7 is heavier, better filtered, and
            about three times the price. Both make excellent coffee. Skip anything with a fiddly plastic lid that
            snaps.
          </p>
        </div>
      </Section>

      <Section eyebrow="Tips" title="Small tweaks that improve every plunge">
        <div className="grid gap-6 md:grid-cols-2">
          {[
            { t: 'Skim the crust', b: 'After the initial pour, a crust of coffee floats on the water. Break it with a spoon and skim off the surface foam — it holds most of the fines.' },
            { t: 'Warm the vessel', b: 'A cold beaker steals heat from the water. Rinse with boiling water for ten seconds before adding coffee.' },
            { t: 'Decant immediately', b: 'Even five extra minutes with the grounds over-extracts. Pour into a warmed jug or cup as soon as you plunge.' },
            { t: 'Clean the mesh weekly', b: 'Coffee oils stick to the disks and go rancid. Disassemble the plunger and rinse the mesh under warm water at least once a week.' }
          ].map((x, i) => (
            <InlineExpand key={i} title={x.t} cta="Show">
              <p>{x.b}</p>
            </InlineExpand>
          ))}
        </div>
      </Section>

      <Section eyebrow="Frequently asked" title="Reader questions about French press">
        <Accordion items={faqs} idPrefix="fp-faq" />
      </Section>
    </>
  )
}
