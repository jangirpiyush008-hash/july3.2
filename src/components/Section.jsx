export function Section({ id, eyebrow, title, intro, children, className = '' }) {
  return (
    <section id={id} className={`relative py-16 md:py-24 ${className}`}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {(eyebrow || title || intro) && (
          <div className="max-w-3xl">
            {eyebrow && <span className="pill">{eyebrow}</span>}
            {title && <h2 className="mt-4 font-display text-3xl md:text-5xl leading-tight text-ink">{title}</h2>}
            {intro && <p className="mt-5 text-lg text-ink/75">{intro}</p>}
          </div>
        )}
        <div className={eyebrow || title || intro ? 'mt-12' : ''}>{children}</div>
      </div>
    </section>
  )
}

export function PageHero({ eyebrow, title, subtitle, image, alt, kicker }) {
  return (
    <section className="relative overflow-hidden bg-warm-gradient border-b border-border">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 md:py-24 grid gap-10 md:grid-cols-5 items-center">
        <div className="md:col-span-3">
          {eyebrow && <span className="pill">{eyebrow}</span>}
          <h1 className="mt-5 font-display text-4xl md:text-6xl leading-[1.05] text-ink">{title}</h1>
          {subtitle && <p className="mt-6 text-lg md:text-xl text-ink/75 max-w-2xl">{subtitle}</p>}
          {kicker && <p className="mt-4 text-sm text-muted">{kicker}</p>}
        </div>
        {image && (
          <div className="md:col-span-2">
            <div className="rounded-3xl overflow-hidden shadow-card border border-border">
              <img src={image} alt={alt} className="w-full h-auto block" loading="eager" />
            </div>
          </div>
        )}
      </div>
    </section>
  )
}
