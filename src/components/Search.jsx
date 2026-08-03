import { useMemo, useState } from 'react'
import { ARTICLES } from '../data/articles.js'
import ArticleCard from './ArticleCard.jsx'
import { trackEvent } from '../utils/analytics.js'

const CATEGORIES = ['All', ...Array.from(new Set(ARTICLES.map(a => a.category)))]
const METHODS = ['All', ...Array.from(new Set(ARTICLES.map(a => a.method)))]
const DIFFICULTIES = ['All', 'Beginner', 'Intermediate', 'Advanced']

export default function Search() {
  const [q, setQ] = useState('')
  const [cat, setCat] = useState('All')
  const [meth, setMeth] = useState('All')
  const [diff, setDiff] = useState('All')

  const filtered = useMemo(() => {
    const needle = q.trim().toLowerCase()
    return ARTICLES.filter(a => {
      if (cat !== 'All' && a.category !== cat) return false
      if (meth !== 'All' && a.method !== meth) return false
      if (diff !== 'All' && a.difficulty !== diff) return false
      if (!needle) return true
      return (a.title + ' ' + a.excerpt + ' ' + a.category).toLowerCase().includes(needle)
    })
  }, [q, cat, meth, diff])

  return (
    <div>
      <div className="warm-panel p-5 md:p-6 grid gap-4 md:grid-cols-4">
        <div className="md:col-span-2">
          <label htmlFor="s-q" className="text-xs uppercase tracking-widest text-ink/60">Search articles</label>
          <input
            id="s-q"
            value={q}
            onChange={(e) => { setQ(e.target.value); if (e.target.value.length > 2) trackEvent('search', { q: e.target.value }) }}
            placeholder="pour over, espresso, grinder…"
            className="mt-2 w-full rounded-xl px-4 py-3 bg-paper border border-border focus:border-copper-600 focus:outline-none"
          />
        </div>
        <div>
          <label htmlFor="s-cat" className="text-xs uppercase tracking-widest text-ink/60">Category</label>
          <select id="s-cat" value={cat} onChange={(e) => { setCat(e.target.value); trackEvent('category_click', { category: e.target.value }) }} className="mt-2 w-full rounded-xl px-4 py-3 bg-paper border border-border focus:border-copper-600 focus:outline-none">
            {CATEGORIES.map(c => <option key={c}>{c}</option>)}
          </select>
        </div>
        <div className="grid grid-cols-2 gap-3">
          <div>
            <label htmlFor="s-meth" className="text-xs uppercase tracking-widest text-ink/60">Method</label>
            <select id="s-meth" value={meth} onChange={(e) => setMeth(e.target.value)} className="mt-2 w-full rounded-xl px-3 py-3 bg-paper border border-border focus:border-copper-600 focus:outline-none text-sm">
              {METHODS.map(m => <option key={m}>{m}</option>)}
            </select>
          </div>
          <div>
            <label htmlFor="s-diff" className="text-xs uppercase tracking-widest text-ink/60">Difficulty</label>
            <select id="s-diff" value={diff} onChange={(e) => setDiff(e.target.value)} className="mt-2 w-full rounded-xl px-3 py-3 bg-paper border border-border focus:border-copper-600 focus:outline-none text-sm">
              {DIFFICULTIES.map(d => <option key={d}>{d}</option>)}
            </select>
          </div>
        </div>
      </div>

      <p className="mt-4 text-sm text-ink/60">{filtered.length} of {ARTICLES.length} articles</p>

      <div className="mt-6 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {filtered.map(p => <ArticleCard key={p.slug} post={p} />)}
      </div>

      {filtered.length === 0 && (
        <div className="mt-10 text-center card p-10">
          <p className="font-display text-xl">No articles match those filters.</p>
          <p className="mt-2 text-ink/70">Try clearing the search box or setting the filters back to "All".</p>
        </div>
      )}
    </div>
  )
}
