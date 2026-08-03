import { PageHero, Section } from '../components/Section.jsx'

export default function Affiliate() {
  return (
    <>
      <PageHero
        eyebrow="Trust"
        title="Affiliate disclosure."
        subtitle="A clear description of how we use affiliate links, when we use them, and how they do and do not influence what we write."
        kicker="Last updated: 2026-08-03"
      />
      <Section>
        <div className="prose-warm max-w-3xl">
          <h2>What an affiliate link is</h2>
          <p>An affiliate link is a special URL that identifies Brew &amp; Bean Journal as the source of a visit to a retailer. If you click the link and later make a purchase from that retailer, they may pay us a small commission at no additional cost to you.</p>

          <h2>Which links on this site are affiliate links</h2>
          <p>At the time this page was last updated, no article on the site contains an affiliate link. If any are added in the future, they will be clearly marked next to the link — for example: <code>(affiliate link)</code> — and this page will be updated to name the retailers we participate with.</p>

          <h2>How commissions do <em>not</em> influence editorial</h2>
          <ul>
            <li>We only recommend equipment we have used ourselves, over weeks of daily brewing, in a real kitchen.</li>
            <li>The presence or absence of a commission does not change our recommendation. If a product we criticise offers a commission and one we love does not, we still recommend the one we love.</li>
            <li>We do not accept payment for a specific editorial position. If a retailer offers to pay us for a positive review, we decline.</li>
            <li>We do not accept unsolicited review samples that come with any condition (positive coverage, guaranteed publication, exclusivity, etc.).</li>
          </ul>

          <h2>What you pay</h2>
          <p>Nothing extra. The retailer pays the commission out of their own margin. Your price is identical whether you use an affiliate link or navigate to the retailer directly.</p>

          <h2>Your choice</h2>
          <p>If you would prefer that we do not receive a commission from your purchase, simply navigate to the retailer directly instead of clicking through an affiliate link.</p>

          <h2>Corrections</h2>
          <p>If we ever fail to disclose an affiliate relationship properly, please write to us at <a className="link-underline text-copper-700" href="mailto:brewandbeanjournal@gmail.com">brewandbeanjournal@gmail.com</a> and we will fix it and note the correction on the affected article.</p>

          <h2>Regulatory note</h2>
          <p>This disclosure is provided in the spirit of the U.S. Federal Trade Commission’s Endorsement Guides, the UK Advertising Standards Authority’s CAP Code, and equivalent regulations in the EU and Australia. We aim to make commercial relationships obvious to any reader, regardless of jurisdiction.</p>
        </div>
      </Section>
    </>
  )
}
