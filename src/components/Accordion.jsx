export function Accordion({ items, idPrefix = 'acc' }) {
  return (
    <div className="space-y-3">
      {items.map((it, i) => (
        <details key={i} id={`${idPrefix}-${i}`} className="card p-5 md:p-6">
          <summary className="cursor-pointer list-none flex items-start justify-between gap-6">
            <span className="font-display text-lg text-ink">{it.q}</span>
            <span className="chev mt-1 text-copper-600" aria-hidden="true">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M6 9l6 6 6-6" /></svg>
            </span>
          </summary>
          <div className="accordion-body text-ink/80 text-[15.5px] leading-relaxed">
            {typeof it.a === 'string' ? <p>{it.a}</p> : it.a}
          </div>
        </details>
      ))}
    </div>
  )
}

export function InlineExpand({ title, cta = 'Read more', children }) {
  return (
    <details className="card p-5 md:p-6">
      <summary className="cursor-pointer list-none flex items-center justify-between gap-4">
        <span className="font-display text-xl text-ink">{title}</span>
        <span className="text-xs uppercase tracking-widest text-copper-600 flex items-center gap-1">
          {cta}
          <span className="chev inline-block" aria-hidden="true">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M6 9l6 6 6-6" /></svg>
          </span>
        </span>
      </summary>
      <div className="accordion-body text-ink/80 leading-relaxed">{children}</div>
    </details>
  )
}
