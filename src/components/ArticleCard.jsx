import { InlineExpand } from './Accordion.jsx'
import { trackEvent } from '../utils/analytics.js'

export default function ArticleCard({ post }) {
  return (
    <article className="card overflow-hidden">
      <img src={post.img} alt={post.title} loading="lazy" className="w-full aspect-[16/10] object-cover" />
      <div className="p-6">
        <div className="flex flex-wrap items-center gap-2 text-xs uppercase tracking-widest text-copper-700">
          <span>{post.category}</span>
          <span aria-hidden="true">·</span>
          <span>{post.difficulty}</span>
          <span aria-hidden="true">·</span>
          <span>{post.time}</span>
        </div>
        <h3 className="mt-3 font-display text-xl leading-snug">{post.title}</h3>
        <p className="mt-2 text-sm text-ink/70">Editorial · Brew &amp; Bean Journal</p>
        <p className="mt-3 text-[15px] text-ink/85">{post.excerpt}</p>
        <div className="mt-5">
          <InlineExpand title="Read the guide" cta="Read">
            <p>
              This guide walks through the practical steps — equipment, ratio, water, grind and technique — with the
              small details that separate a serviceable cup from a genuinely memorable one. Where a claim depends on
              external data (extraction chemistry, water hardness ranges, roast development timelines), we cite widely
              accepted references such as the Specialty Coffee Association’s brewing standards.
            </p>
            <p className="mt-3">
              All recommendations reflect the honest opinions of the editorial team and are based on repeated
              hands-on brewing sessions. Where an outbound link is an affiliate link, we mark it clearly. See our
              affiliate disclosure for the full policy.
            </p>
            <button
              onClick={() => trackEvent('read_more', { slug: post.slug })}
              className="mt-4 inline-flex items-center gap-2 rounded-xl px-4 py-2 text-sm font-medium bg-espresso-900 text-cream hover:bg-espresso-800 transition"
            >
              Mark as read
            </button>
          </InlineExpand>
        </div>
      </div>
    </article>
  )
}
