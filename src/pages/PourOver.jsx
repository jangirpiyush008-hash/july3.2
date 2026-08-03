import { PageHero, Section } from '../components/Section.jsx'
import { Accordion, InlineExpand } from '../components/Accordion.jsx'
import * as img from '../assets/images/index.js'
import { GLOBAL_FAQS } from '../data/faqs.js'

const faqs = GLOBAL_FAQS.slice(6, 15)

export default function PourOver() {
  return (
    <>
      <PageHero
        eyebrow="Pour Over"
        title="The world’s most rewarding brewing method."
        subtitle="V60, Chemex, Kalita, Origami — the manual pour-over family. Slightly fussy, deeply satisfying, and capable of producing the cleanest cup of coffee you will drink at home."
        image={img.pourOver.kettle}
        alt="Gooseneck kettle pouring a thin stream of water into a V60"
      />

      <Section eyebrow="A recipe" title="A dependable V60 recipe, in one paragraph">
        <div className="prose-warm max-w-3xl">
          <p>
            Weigh 20 g of medium-ground coffee. Pre-heat your V60 with a paper filter by rinsing with hot water; discard the
            rinse. Add the coffee, tap gently to level the bed. Start a timer and pour 40 g of water at ~95°C over the
            grounds for the bloom. At 45 seconds, pour in slow concentric circles to 160 g. At 1:15, pour again to
            240 g. At 1:45, pour to 320 g. Total brew should finish drawing down around 3:00 to 3:30. A total 320 g of
            water on 20 g of coffee is a 1:16 ratio — a friendly starting point.
          </p>
        </div>
      </Section>

      <Section eyebrow="Choosing a dripper" title="V60, Chemex, Kalita — what actually differs">
        <div className="prose-warm max-w-3xl">
          <p>
            All three are paper-filter pour-over cones. Their geometry changes how water flows through the coffee bed:
          </p>
          <ul>
            <li><strong>Hario V60</strong> — a 60° cone with a large single hole. Fastest drawdown, most control, most sensitive to grind and technique. Rewards attention.</li>
            <li><strong>Chemex</strong> — an hourglass with a very thick paper filter. Slower, cleaner, more forgiving. Beautiful, larger capacity.</li>
            <li><strong>Kalita Wave</strong> — a flat-bottom with three small holes. Most forgiving of pour technique. Consistent and calm.</li>
          </ul>
          <p>
            If you are choosing your first pour-over, the Kalita Wave 155 is the friendliest. If you enjoy fussing, get a V60.
          </p>
        </div>
        <div className="mt-6 rounded-3xl overflow-hidden shadow-card border border-border">
          <img src={img.pourOver.v60} alt="Ceramic V60 pour-over dripper with paper filter on a wooden table" className="w-full h-auto block" />
        </div>
      </Section>

      <Section eyebrow="Tips" title="Small pour-over tips that quietly improve every cup">
        <div className="grid gap-6 md:grid-cols-2">
          {[
            { t: 'Rinse the paper', b: 'Rinsing removes the papery taste from the filter and pre-heats the ceramic. Two seconds of preparation, better cup every time.' },
            { t: 'Bloom generously', b: 'Use twice the coffee’s weight in water for the bloom, and let it sit for 30–45 seconds. Trapped CO₂ needs to escape.' },
            { t: 'Pour gently', b: 'A slow, low pour agitates less. Excessive agitation causes fines migration and a muddled cup.' },
            { t: 'Keep the bed level', b: 'A tilted bed produces uneven extraction. A gentle swirl at the end of each pour re-levels the coffee.' }
          ].map((x, i) => (
            <InlineExpand key={i} title={x.t} cta="Show">
              <p>{x.b}</p>
            </InlineExpand>
          ))}
        </div>
      </Section>

      <Section eyebrow="Frequently asked" title="Reader questions about pour-over">
        <Accordion items={faqs} idPrefix="po-faq" />
      </Section>
    </>
  )
}
