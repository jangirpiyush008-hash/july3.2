import { PageHero, Section } from '../components/Section.jsx'

export default function Editorial() {
  return (
    <>
      <PageHero
        eyebrow="Trust"
        title="Editorial, review &amp; corrections policy."
        subtitle="How articles are written, how equipment is tested, how facts are checked, and how mistakes are corrected."
        kicker="Last updated: 2026-08-03"
      />
      <Section>
        <div className="prose-warm max-w-3xl">
          <h2>Who writes for us</h2>
          <p>All content on Brew &amp; Bean Journal is written or edited by a contributor to the publication — a human, not an AI. Contributors are amateur or professional home coffee enthusiasts. Where a piece is written by a specific named contributor, their byline appears at the top of the article; where a piece is a collaborative editorial effort, it is credited to the editorial team.</p>

          <h2>How articles are written</h2>
          <ol>
            <li>A topic is chosen based on reader questions and gaps in existing coverage.</li>
            <li>The author drafts the article, tests any recipe or technique described, and cites external sources for factual claims.</li>
            <li>A second editor reads the draft, checks facts, tests the recipe independently where practical, and either signs off or sends it back for revision.</li>
            <li>The article is published with a publication date. If it is substantially revised later, the revision date is added at the bottom.</li>
          </ol>

          <h2>How we test equipment</h2>
          <p>We use equipment for a minimum of two weeks of daily brewing before writing about it, and revisit it a few months later to confirm our impressions were durable. Equipment we recommend has been in our own kitchens; nothing is reviewed on the basis of an unboxing or a manufacturer’s spec sheet alone. Where a machine is expensive, we say so, and where a cheaper option is nearly as good, we say that too.</p>

          <h2>Fact-checking policy</h2>
          <ul>
            <li>Numerical claims (temperatures, ratios, times, extraction percentages) are checked against widely accepted references — the Specialty Coffee Association, published academic literature, and manufacturer documentation.</li>
            <li>Historical and geographic claims are cross-referenced against at least two independent sources.</li>
            <li>Subjective claims are clearly labelled as opinion.</li>
          </ul>

          <h2>Corrections policy</h2>
          <p>When we make a factual mistake, we correct the article inline and add a brief correction note at the bottom explaining what was wrong, when we learned about it, and how we fixed it. We do not silently edit. If a correction materially changes the conclusion of an article, we mark the change prominently at the top.</p>
          <p>If you spot a mistake, please write to <a className="link-underline text-copper-700" href="mailto:brewandbeanjournal@gmail.com">brewandbeanjournal@gmail.com</a> with the words <em>Correction</em> in the subject line.</p>

          <h2>Editorial independence</h2>
          <p>No roaster, equipment brand, retailer, or trade association has editorial influence over the site. Advertising is not accepted. Affiliate links may appear on the site; when they do, they are clearly marked (see <a className="link-underline text-copper-700" href="/legal/affiliate-disclosure">Affiliate Disclosure</a>). If our recommendation for a product category ever changes because of a commission structure, we will publish that on the Affiliate Disclosure page.</p>

          <h2>Content update schedule</h2>
          <p>All long-form guides are reviewed at least once a year for accuracy and freshness. Where a guide has been substantially revised, the date is noted at the bottom. This is a slow publication — we would rather publish a small number of accurate, useful guides than a large number of hurried ones.</p>

          <h2>Removal requests</h2>
          <p>If you appear in an image or quotation on the site and would like to be removed, please email us at <a className="link-underline text-copper-700" href="mailto:brewandbeanjournal@gmail.com">brewandbeanjournal@gmail.com</a>. We honour reasonable removal requests within 14 days.</p>
        </div>
      </Section>
    </>
  )
}
