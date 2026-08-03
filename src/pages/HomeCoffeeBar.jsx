import { PageHero, Section } from '../components/Section.jsx'
import { Accordion, InlineExpand } from '../components/Accordion.jsx'
import * as img from '../assets/images/index.js'
import { GLOBAL_FAQS } from '../data/faqs.js'

const faqs = GLOBAL_FAQS.slice(1, 10)

export default function HomeCoffeeBar() {
  return (
    <>
      <PageHero
        eyebrow="Home Coffee Bar"
        title="A setup you will actually use."
        subtitle="A workable home café is less about square footage than about layout. Where the grinder lives matters more than what it cost. A calm three-square-foot corner beats a cluttered kitchen."
        image={img.bar.counter}
        alt="Minimal home coffee bar with grinder, kettle and mugs on a wooden counter"
      />

      <Section eyebrow="Philosophy" title="Three principles for a home coffee bar">
        <div className="prose-warm max-w-3xl">
          <ol>
            <li><strong>One home.</strong> Everything you need should live within one arm’s reach. If you have to move things every morning, you eventually stop making coffee.</li>
            <li><strong>Ready to power.</strong> Grinder, kettle, and (if you have one) espresso machine should each have their own dedicated socket. Extension cords are the quiet killer of a coffee habit.</li>
            <li><strong>Wet zone, dry zone.</strong> Wet things (portafilter knock, water spillage, milk splatters) belong on one side; dry things (beans, filters, cups) on the other. Two feet of separation prevents a lot of cleanup.</li>
          </ol>
        </div>
      </Section>

      <Section eyebrow="Layout" title="What a workable coffee corner looks like">
        <div className="grid gap-8 md:grid-cols-2 items-center">
          <div className="rounded-3xl overflow-hidden shadow-card border border-border">
            <img src={img.bar.setup} alt="A well-organised home coffee bar with visible workflow" className="w-full h-auto block" />
          </div>
          <div className="prose-warm">
            <p>
              A three-foot section of counter, ideally next to a socket, is enough for most home setups. Left to right,
              a natural workflow is:
            </p>
            <ol>
              <li>Beans (in an opaque canister)</li>
              <li>Grinder</li>
              <li>Brewer or machine</li>
              <li>Cups &amp; a small tray for water</li>
            </ol>
            <p>
              A knock box for espresso pucks. A microfibre cloth on a hook. A small dustpan and brush inside a drawer.
              Everything else is aesthetics.
            </p>
          </div>
        </div>
      </Section>

      <Section eyebrow="Essentials" title="What to actually put on the counter">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {[
            { t: 'A digital scale (0.1 g)', b: 'The single most under-rated purchase. About $25.' },
            { t: 'A conical burr grinder', b: 'Matters more than the brewer. $150–$400 for a serious home grinder.' },
            { t: 'A gooseneck kettle', b: 'For pour over specifically. Temperature control is a nice-to-have.' },
            { t: 'A brewer of your choice', b: 'V60, Chemex, Kalita, French press, AeroPress, or a small espresso machine.' },
            { t: 'An opaque bean canister', b: 'Light and oxygen are the two enemies. An Airscape or Fellow Atmos is worth the small outlay.' },
            { t: 'A cleaning setup', b: 'Backflush disks, group brush, microfibre cloth. Espresso especially needs weekly attention.' }
          ].map((x, i) => (
            <div key={i} className="card p-6">
              <h3 className="font-display text-xl">{x.t}</h3>
              <p className="mt-2 text-ink/75 text-[15px]">{x.b}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section eyebrow="Aesthetics" title="Because a beautiful setup is one you use">
        <div className="grid gap-6 md:grid-cols-3">
          <div className="rounded-3xl overflow-hidden shadow-card border border-border">
            <img src={img.bar.scene} alt="Warm home coffee bar with a window and morning light" className="w-full h-full object-cover" />
          </div>
          <div className="rounded-3xl overflow-hidden shadow-card border border-border">
            <img src={img.bar.setup} alt="Organised counter with grinder and machine" className="w-full h-full object-cover" />
          </div>
          <div className="rounded-3xl overflow-hidden shadow-card border border-border">
            <img src={img.bar.counter} alt="Minimal home café counter" className="w-full h-full object-cover" />
          </div>
        </div>
        <p className="mt-6 text-ink/75 max-w-2xl">
          A wooden cutting board under the machine hides drips and looks intentional. A single small plant. A ceramic
          jar for filters. Aesthetics are not vanity — they are the difference between a hobby and a chore.
        </p>
      </Section>

      <Section eyebrow="Frequently asked" title="Reader questions about home coffee bars">
        <Accordion items={faqs} idPrefix="bar-faq" />
      </Section>
    </>
  )
}
