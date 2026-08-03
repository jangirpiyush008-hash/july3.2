import { PageHero, Section } from '../components/Section.jsx'
import { Accordion, InlineExpand } from '../components/Accordion.jsx'
import * as img from '../assets/images/index.js'
import { GLOBAL_FAQS } from '../data/faqs.js'

const faqs = GLOBAL_FAQS.slice(0, 10)

export default function BrewingGuides() {
  return (
    <>
      <PageHero
        eyebrow="Brewing Guides"
        title="The fundamentals of a good cup."
        subtitle="Regardless of the brewer you use, four variables do most of the work: ratio, water temperature, grind size and technique. Get these right and everything else is fine-tuning."
        image={img.brewing.pourOver}
        alt="Slow pour of hot water into a paper filter over a mug"
      />

      <Section eyebrow="The short version" title="A one-paragraph brewing recipe you can use tonight">
        <div className="prose-warm max-w-3xl">
          <p>
            Weigh 30 g of freshly ground coffee at a medium grind. Place it in a paper filter over your favourite mug.
            Weigh the mug and reset the scale. Pour 60 g of water off the boil (about 95°C) evenly over the grounds and
            wait 40 seconds — the bloom. Then pour slowly in concentric circles until the scale reads 480 g. Total
            contact time should be around 3 to 3½ minutes. That is a 1:16 ratio and, for most beans, a very drinkable
            cup on the first try.
          </p>
        </div>
      </Section>

      <Section eyebrow="Fundamentals" title="Four variables that quietly govern every good cup">
        <div className="grid gap-6 md:grid-cols-2">
          {[
            { t: 'Ratio', b: 'Coffee weight to water weight. 1:15 is stronger, 1:18 is milder. A kitchen scale to 0.1 g is the single most under-rated purchase in home coffee.' },
            { t: 'Water temperature', b: '92°C – 96°C for most brewing. Slightly cooler for very light roasts. Boiling water damages both extraction and flavour.' },
            { t: 'Grind size', b: 'A fresh grind matters more than a fancy grinder. Coarse for French press, medium for pour over, fine for espresso. Adjust based on taste.' },
            { t: 'Technique', b: 'Consistent bloom, gentle pour, minimal agitation. Small changes in how you pour produce meaningful changes in the cup.' }
          ].map((x, i) => (
            <div key={i} className="card p-6">
              <div className="text-xs uppercase tracking-widest text-copper-700">Variable {i + 1}</div>
              <h3 className="mt-3 font-display text-xl">{x.t}</h3>
              <p className="mt-3 text-ink/80">{x.b}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section eyebrow="Buying guide" title="What to buy first (and in what order)">
        <div className="prose-warm max-w-3xl">
          <ol>
            <li><strong>A digital scale that reads to 0.1 g</strong> (~$25). Every brewing method benefits.</li>
            <li><strong>A conical burr grinder</strong> ($150–$400). A modest brewer with a good grinder beats an expensive brewer with a bad one.</li>
            <li><strong>A dripper &amp; filters</strong> (a Hario V60 or Kalita Wave 155 is under $30 with a lifetime of use).</li>
            <li><strong>A gooseneck kettle</strong> ($40–$180). Temperature control is a bonus, not a necessity.</li>
            <li><strong>An airtight, opaque bean canister</strong>. Beans hate light and oxygen.</li>
          </ol>
          <p>
            Notice what is not on this list: a fancy brewer. A $200 Chemex will not save a bad grind. Spend money on
            the parts of the chain that touch the coffee first.
          </p>
        </div>
      </Section>

      <Section eyebrow="Tips" title="Small tips that make a real difference">
        <div className="grid gap-6 md:grid-cols-2">
          {[
            { t: 'Pre-heat the brewer', b: 'Rinse your V60 or Chemex with hot water before adding coffee. It also rinses paper flavour from the filter.' },
            { t: 'Weigh water, not volume', b: 'Volume is temperature-dependent. Weight is not. Use grams for both coffee and water.' },
            { t: 'Grind at the last moment', b: 'Ground coffee starts losing aromatics within 20 minutes. Grind directly into the brewer.' },
            { t: 'Taste before adjusting', b: 'Take a small unsweetened sip before you add milk or sugar. It teaches your palate what to fix next time.' }
          ].map((x, i) => (
            <InlineExpand key={i} title={x.t} cta="Show">
              <p>{x.b}</p>
              <p className="mt-3 text-sm text-ink/70">Small, cumulative habits. The best-brewed cup in the world starts with a slightly rinsed filter.</p>
            </InlineExpand>
          ))}
        </div>
      </Section>

      <Section eyebrow="Frequently asked" title="Reader questions about brewing fundamentals">
        <Accordion items={faqs} idPrefix="bg-faq" />
      </Section>
    </>
  )
}
