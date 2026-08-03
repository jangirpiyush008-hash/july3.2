import { PageHero, Section } from '../components/Section.jsx'
import { Accordion } from '../components/Accordion.jsx'
import * as img from '../assets/images/index.js'
import { GLOBAL_FAQS } from '../data/faqs.js'

export default function Community() {
  return (
    <>
      <PageHero
        eyebrow="Community"
        title="Coffee is happiest when it’s shared."
        subtitle="Notes on finding your local specialty coffee community — cafés, roaster tastings, online forums and small home-brew meetups worth attending."
        image={img.community.friends}
        alt="Friends chatting over cups of coffee at a small café table"
      />

      <Section eyebrow="Getting involved" title="Where to meet other specialty coffee people">
        <div className="prose-warm max-w-3xl">
          <p>
            One of the quiet pleasures of getting into specialty coffee is discovering how generous the community is
            with beginners. Roasters host free public cuppings. Baristas will re-pour a shot for you if you ask a real
            question. Online forums have long threads of patient, technical answers. Below are the routes into that
            world that we recommend most often.
          </p>

          <h2>Visit your local specialty roaster</h2>
          <p>
            Nearly every mid-sized city now has at least one independent roaster. Many run monthly free public cuppings
            — you sit around a table, slurp a spoon of each coffee, and talk about what you taste. It is by far the
            fastest way to develop a palate. Ask your favourite local café where their beans come from; if they roast
            in-house, ask when their next cupping is.
          </p>

          <h2>National and international resources</h2>
          <ul>
            <li><strong>Specialty Coffee Association (SCA)</strong> — a global professional body whose standards for
              extraction, water and brewing quality are used by nearly every specialty roaster.</li>
            <li><strong>Barista Hustle</strong> — a widely respected online education platform with free introductory
              articles and paid courses.</li>
            <li><strong>Home-Barista.com</strong> — a long-running English-language forum with a searchable archive of
              answered questions going back over a decade.</li>
            <li><strong>r/espresso</strong> and <strong>r/pourover</strong> on Reddit — approachable and mostly
              friendly, if you are willing to include a photograph of your pour when you ask.</li>
            <li><strong>Coffee &amp; Water</strong> by Maxwell Colonna-Dashwood and <strong>The World Atlas of Coffee</strong>
              by James Hoffmann — two widely recommended books, if you prefer paper.</li>
          </ul>

          <h2>Small ways to meet other home brewers</h2>
          <ul>
            <li>Take your Aeropress to a café that lets you brew on their bar — many do, on quiet Sunday mornings.</li>
            <li>Ask your local library whether they have hosted a barista talk. Many will if you propose it.</li>
            <li>Attend a "latte art throwdown" at a specialty bar. Even complete beginners are welcomed as spectators.</li>
            <li>Start a slow weekly brewing session in your own kitchen. Coffee tastes better when there are two of you.</li>
          </ul>

          <h2>Contributing to Brew &amp; Bean Journal</h2>
          <p>
            If you would like to suggest a topic, share a home coffee bar photograph, or write to correct a mistake,
            please email <a className="link-underline text-copper-700" href="mailto:brewandbeanjournal@gmail.com">brewandbeanjournal@gmail.com</a>.
            We read every message and reply within a few business days. Any material you send remains your own, and we
            only publish it with your written permission.
          </p>
        </div>
      </Section>

      <Section eyebrow="Frequently asked" title="Reader questions about the wider community">
        <Accordion items={GLOBAL_FAQS.slice(8, 16)} idPrefix="com-faq" />
      </Section>
    </>
  )
}
