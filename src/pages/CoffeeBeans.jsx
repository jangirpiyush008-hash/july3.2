import { PageHero, Section } from '../components/Section.jsx'
import { Accordion, InlineExpand } from '../components/Accordion.jsx'
import * as img from '../assets/images/index.js'
import { GLOBAL_FAQS } from '../data/faqs.js'

const faqs = GLOBAL_FAQS.slice(3, 13)

const origins = [
  { name: 'Ethiopia', notes: 'The birthplace of coffee. Bright, tea-like acidity; notes of jasmine, bergamot, blueberry. Washed and natural processes both common.', img: img.beans.roasted },
  { name: 'Colombia', notes: 'The reliable friend of the coffee world. Balanced body, chocolate and caramel sweetness, gentle citrus. A safe first single origin.', img: img.beans.bag },
  { name: 'Kenya', notes: 'Dense, punchy acidity — tomato, black currant, grapefruit. Grown at high altitudes on volcanic soil.', img: img.beans.open },
  { name: 'Guatemala', notes: 'Chocolate, dried fruit, brown spice. Often full-bodied. Excellent for both filter and espresso.', img: img.beans.roasted },
  { name: 'Sumatra', notes: 'Earthy, herbal, deep. Wet-hulled processing gives Sumatran coffees their distinctive rustic character.', img: img.beans.open },
  { name: 'Brazil', notes: 'The workhorse of espresso blends. Nutty, chocolatey, low acidity, heavy body. Rarely thrilling on its own but essential to blends.', img: img.beans.bag }
]

export default function CoffeeBeans() {
  return (
    <>
      <PageHero
        eyebrow="Coffee Beans"
        title="A reader’s guide to the bag on your shelf."
        subtitle="Origin, altitude, variety, processing method, roast level, roast date. What each of these actually means, and which of them are worth paying attention to."
        image={img.beans.bag}
        alt="Bag of specialty coffee beans on a wooden shelf"
      />

      <Section eyebrow="How to read a bag" title="Six things printed on a specialty coffee label — what they mean">
        <div className="prose-warm max-w-3xl">
          <ol>
            <li><strong>Origin.</strong> Where the coffee was grown. Increasingly specific down to the farm and lot.</li>
            <li><strong>Altitude.</strong> Meters above sea level. Higher altitude usually means denser beans and more complex acidity.</li>
            <li><strong>Variety.</strong> The genetic type — Bourbon, Typica, Geisha, SL28, etc. Fun to learn, not essential.</li>
            <li><strong>Processing.</strong> Washed, natural, honey, anaerobic. This has an enormous effect on flavour.</li>
            <li><strong>Roast level.</strong> Light, medium, or dark. Light preserves origin character; dark emphasizes roast character.</li>
            <li><strong>Roast date.</strong> Fresh beans are 7–21 days off the roaster. Bags older than six weeks lose aromatic clarity even if unopened.</li>
          </ol>
        </div>
      </Section>

      <Section eyebrow="Origins" title="A tour of the origins you will meet most">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {origins.map(o => (
            <article key={o.name} className="card overflow-hidden">
              <img src={o.img} alt={o.name} loading="lazy" className="w-full aspect-[4/3] object-cover" />
              <div className="p-6">
                <h3 className="font-display text-xl">{o.name}</h3>
                <p className="mt-3 text-ink/80 text-[15px]">{o.notes}</p>
              </div>
            </article>
          ))}
        </div>
      </Section>

      <Section eyebrow="Processing" title="Washed, natural, honey — a quick guide">
        <div className="prose-warm max-w-3xl">
          <ul>
            <li><strong>Washed (wet).</strong> Fruit is removed before drying. Clean, precise flavours. Highlights origin character.</li>
            <li><strong>Natural (dry).</strong> Cherry is dried whole around the bean. Sweeter, heavier, fruit-forward. Can be wild.</li>
            <li><strong>Honey.</strong> Some mucilage left on the bean during drying. Middle ground: clean but sweet.</li>
            <li><strong>Anaerobic / experimental.</strong> Fermented in sealed containers. Can be spectacular or divisive. Increasingly common.</li>
          </ul>
        </div>
      </Section>

      <Section eyebrow="Roast levels" title="How roast changes the cup">
        <div className="prose-warm max-w-3xl">
          <p>
            Light roasts preserve the origin character of the bean — you taste more of Ethiopia, less of caramel.
            Medium roasts balance origin and roast character. Dark roasts emphasize roast character — the classic
            bittersweet, chocolate-heavy espresso profile. None is objectively better; it depends on what you like.
          </p>
          <p>
            A common beginner mistake is to associate dark roast with "strong" and light roast with "weak". Roast level
            and strength are not the same thing. A properly extracted light roast can be far stronger, more complex,
            and more caffeinated than a poorly extracted dark roast.
          </p>
        </div>
      </Section>

      <Section eyebrow="Storage" title="How to store beans, and what to skip">
        <div className="prose-warm max-w-3xl">
          <ul>
            <li>An airtight, opaque container at room temperature. That is essentially the whole recipe.</li>
            <li>Not the fridge. Beans absorb odours; humidity swings damage them.</li>
            <li>Freezer only for long-term storage of unopened bags. Thaw once, use quickly.</li>
            <li>Buy what you will drink in three weeks. Two bags of 250 g are better than one bag of 500 g for most households.</li>
          </ul>
        </div>
      </Section>

      <Section eyebrow="Frequently asked" title="Reader questions about beans">
        <Accordion items={faqs} idPrefix="beans-faq" />
      </Section>
    </>
  )
}
