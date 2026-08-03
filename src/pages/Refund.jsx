import { PageHero, Section } from '../components/Section.jsx'

export default function Refund() {
  return (
    <>
      <PageHero
        eyebrow="Legal"
        title="Refund &amp; digital content policy."
        subtitle="A short, plain-English refund policy — and an explanation of how affiliate links work for any product you buy after clicking one."
        kicker="Last updated: 2026-08-03"
      />
      <Section>
        <div className="prose-warm max-w-3xl">
          <h2>1. What we currently sell</h2>
          <p>Brew &amp; Bean Journal does not currently sell any product or paid service. All articles and guides on this site are provided free of charge. Because we do not process payments, there is nothing to refund.</p>

          <h2>2. Digital content policy</h2>
          <p>All articles are made available under a personal, non-transferable licence to read them on this website. You may quote short passages with attribution and a link back to the source. Republishing whole articles requires prior written permission.</p>

          <h2>3. Affiliate disclosure</h2>
          <p>Some outbound links on this site may be affiliate links. When you click one and later make a purchase, the retailer may pay us a small commission at no additional cost to you. This has no effect on the price you pay and no effect on our editorial position. See the full <a className="link-underline text-copper-700" href="/legal/affiliate-disclosure">Affiliate Disclosure</a>.</p>

          <h2>4. Refunds for affiliate-linked purchases</h2>
          <p>Because affiliate purchases are made from the retailer’s own store, refunds are handled entirely by that retailer under their own policy. We are not part of the transaction and cannot process a refund on their behalf. Please contact the seller directly with any refund request.</p>

          <h2>5. Future paid products</h2>
          <p>If we introduce paid products in the future — for example, a printed annual coffee guide or a member-supported edition of the site — a full refund policy will be published on this page before any transaction takes place. The default terms will be:</p>
          <ul>
            <li>30-day money-back guarantee for digital purchases.</li>
            <li>30-day return window for physical goods in resaleable condition.</li>
            <li>Replacement at no cost for items that arrive damaged or defective.</li>
          </ul>

          <h2>6. How to request a refund</h2>
          <p>If, in the future, we sell a product from which a refund is due, write to <a className="link-underline text-copper-700" href="mailto:brewandbeanjournal@gmail.com">brewandbeanjournal@gmail.com</a> with the words <em>Refund request</em> in the subject line, along with your order number and the reason for the request. Approved refunds are processed within 10 business days to the original payment method.</p>

          <h2>7. Contact</h2>
          <p>Refund questions should be sent to <a className="link-underline text-copper-700" href="mailto:brewandbeanjournal@gmail.com">brewandbeanjournal@gmail.com</a>.</p>
        </div>
      </Section>
    </>
  )
}
