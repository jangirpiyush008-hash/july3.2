import { PageHero, Section } from '../components/Section.jsx'
import * as img from '../assets/images/index.js'

export default function About() {
  return (
    <>
      <PageHero
        eyebrow="About the publication"
        title="An independent editorial site about specialty coffee."
        subtitle="Brew & Bean Journal exists to make specialty coffee more approachable at home. We publish patient, opinion-driven guides for home brewers, and everything on the site is free to read."
        image={img.community.cafe}
        alt="A specialty coffee café interior with warm wood countertops"
      />

      <Section eyebrow="Our story" title="How this project started">
        <div className="prose-warm max-w-3xl">
          <p>
            Brew &amp; Bean Journal began as a private notebook of brewing experiments — grind settings, ratios, water
            recipes, tasting notes — kept over several years by a small group of home brewers who wanted to be a little
            more thoughtful about their morning cup. Once the notebook grew past a few hundred entries, it seemed
            silly not to share it. The publication you are reading now is that notebook, rewritten in public.
          </p>
          <h2>Our mission</h2>
          <p>
            Specialty coffee can feel intimidating from the outside. Bean menus with tasting notes like "grapefruit,
            honey, jasmine," instruments that cost more than a small holiday, and a vocabulary that changes every few
            years. Our mission is simple: to translate that world into plain language, and to help anyone with a
            kitchen scale and a kettle make a genuinely good cup at home.
          </p>
          <h2>What we publish</h2>
          <ul>
            <li>Beginner-oriented brewing guides for pour over, espresso, French press, AeroPress and cold brew</li>
            <li>Long-form essays on coffee bean origins, processing and roast</li>
            <li>Home coffee bar inspiration and layout advice</li>
            <li>Equipment guides — grinders, kettles, scales, filters, accessories</li>
            <li>Occasional pieces on the ritual and culture of coffee</li>
          </ul>
          <h2>What we do not do</h2>
          <ul>
            <li>We do not sell coffee, equipment or any physical product.</li>
            <li>We do not run display advertising on the site.</li>
            <li>We do not accept paid product placements or sponsored reviews.</li>
            <li>Some outbound links may be affiliate links. When they are, we say so clearly, and editorial choices are made independently of any commission.</li>
            <li>Nothing on this site is professional or nutritional advice. Please talk to a doctor about any health-related questions about coffee.</li>
          </ul>

          <h2>Editorial standards</h2>
          <p>
            Every article is written or edited by a contributor to Brew &amp; Bean Journal and reviewed by a second
            pair of eyes before it is published. When we make factual claims we cite widely accepted references — for
            example, the Specialty Coffee Association’s brewing standards for extraction and TDS, or SCA / MASTERCLASS
            /  scientific literature for water chemistry. Opinions are labelled as opinions. If we recommend a specific
            piece of equipment we have used it ourselves, over weeks, in a real kitchen — not in a review room.
          </p>

          <h2>How we test coffee &amp; equipment</h2>
          <p>
            Coffee is tasted blind wherever possible, with two brewers of the same method dialled to the same recipe.
            Equipment is used for a minimum of two weeks of daily brewing before we write about it, and revisited a
            few months later to check that our impressions were durable. We never publish a review based on unboxing.
          </p>

          <h2>Content update schedule</h2>
          <p>
            Long-form guides are reviewed at least once a year for accuracy and freshness. Where a guide has been
            substantially revised we note the date at the bottom. Corrections are noted inline. This is a slow
            publication — we would rather publish a small number of accurate, useful guides than a large number of
            hurried ones.
          </p>

          <h2>Editorial independence</h2>
          <p>
            No roaster, equipment brand, retailer, or trade association has editorial influence over what appears on
            this site. Affiliate links, where they appear, are clearly marked and do not change our recommendation.
            If our recommendation for a category ever changes because of a commission structure, we will publish that
            change on the <a className="link-underline text-copper-700" href="/legal/affiliate-disclosure">Affiliate Disclosure</a> page.
          </p>

          <h2>Community goals</h2>
          <p>
            Coffee is happiest when it is shared. If you would like to send a topic suggestion, a piece of feedback, or
            a first-light photograph of your home coffee bar, please write to
            {' '}<a className="link-underline text-copper-700" href="mailto:brewandbeanjournal@gmail.com">brewandbeanjournal@gmail.com</a>.
            We read every message and reply within a few business days.
          </p>
        </div>
      </Section>
    </>
  )
}
