// Static pre-render of every route into real HTML files.
// Runs after `vite build` and `vite build --ssr`.
//
// Set SITE_ORIGIN (e.g. "https://main.dxxxxxxxx.amplifyapp.com" or your custom
// domain, no trailing slash) so canonical / OG / JSON-LD URLs point at the
// real deploy. If SITE_ORIGIN is not set, absolute-URL declarations are
// omitted rather than serving the wrong domain.
import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath, pathToFileURL } from 'node:url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const dist = path.join(__dirname, 'dist')
const serverDist = path.join(dist, 'server')
const template = fs.readFileSync(path.join(dist, 'index.html'), 'utf-8')

const rawOrigin = (process.env.SITE_ORIGIN || '').trim().replace(/\/+$/, '')
const SITE_ORIGIN = /^https?:\/\/[^\s]+$/i.test(rawOrigin) ? rawOrigin : ''
if (!SITE_ORIGIN) console.warn('prerender: SITE_ORIGIN not set — canonical URLs & sitemap.xml will be omitted.')
else console.log(`prerender: SITE_ORIGIN=${SITE_ORIGIN}`)

const routes = [
  '/', '/about', '/blog', '/contact', '/community',
  '/brewing-guides', '/home-espresso', '/pour-over', '/french-press',
  '/coffee-beans', '/home-coffee-bar',
  '/legal/privacy', '/legal/terms', '/legal/refund',
  '/legal/affiliate-disclosure', '/legal/editorial-policy',
  '/404'
]

const meta = {
  '/': { title: 'Brew & Bean Journal — Specialty Coffee, Home Espresso & Brewing Guides',
    description: 'An independent editorial guide to specialty coffee: pour-over, espresso, French press, bean origins and home coffee bar setups.' },
  '/about': { title: 'About — Brew & Bean Journal',
    description: 'An independent editorial site about specialty coffee. Our mission, editorial standards, and testing methodology.' },
  '/blog': { title: 'The Journal — Brew & Bean Journal',
    description: 'Long-form beginner-friendly essays about brewing, equipment, beans and the culture of specialty coffee.' },
  '/contact': { title: 'Contact — Brew & Bean Journal',
    description: 'Write to the Brew & Bean Journal editorial team. We reply to every message within a few business days.' },
  '/community': { title: 'Community — Brew & Bean Journal',
    description: 'Ways to get involved with the wider specialty coffee community — cafés, roaster cuppings, forums and books.' },
  '/brewing-guides': { title: 'Brewing Guides — Brew & Bean Journal',
    description: 'Ratio, water temperature, grind size and technique — the fundamentals that quietly govern every good cup.' },
  '/home-espresso': { title: 'Home Espresso — Brew & Bean Journal',
    description: 'Dose, yield, time and pressure — how to dial in a modern espresso shot at home.' },
  '/pour-over': { title: 'Pour Over — Brew & Bean Journal',
    description: 'V60, Chemex and Kalita compared — a dependable pour-over recipe you can use tonight.' },
  '/french-press': { title: 'French Press — Brew & Bean Journal',
    description: 'The most forgiving brewer worth mastering properly. A dependable recipe and cleaning routine.' },
  '/coffee-beans': { title: 'Coffee Beans — Brew & Bean Journal',
    description: 'A reader’s guide to origins, processing, roast level and storage. What actually matters on a bag.' },
  '/home-coffee-bar': { title: 'Home Coffee Bar — Brew & Bean Journal',
    description: 'How to design a home coffee bar you will actually use. Layout, essentials, and small aesthetic touches.' },
  '/legal/privacy': { title: 'Privacy Policy — Brew & Bean Journal', description: 'Our plain-English privacy policy.' },
  '/legal/terms': { title: 'Terms of Use — Brew & Bean Journal', description: 'The rules of the road for readers and contributors.' },
  '/legal/refund': { title: 'Refund Policy — Brew & Bean Journal', description: 'Our refund policy and digital content policy.' },
  '/legal/affiliate-disclosure': { title: 'Affiliate Disclosure — Brew & Bean Journal',
    description: 'How we use affiliate links and how they do (and do not) influence what we write.' },
  '/legal/editorial-policy': { title: 'Editorial Policy — Brew & Bean Journal',
    description: 'How our articles are written, how equipment is tested, and how corrections are handled.' },
  '/404': { title: 'Page not found — Brew & Bean Journal', description: 'The kettle’s off the boil.' }
}

const { render } = await import(pathToFileURL(path.join(serverDist, 'entry-server.js')).href)

function applyOrigin(page, route) {
  const routePath = route === '/' ? '/' : route
  if (SITE_ORIGIN) {
    const canonical = `${SITE_ORIGIN}${routePath}`
    page = page.replaceAll('__CANONICAL__', canonical)
  } else {
    page = page.replace(/\s*<link rel="canonical" href="__CANONICAL__" \/>/g, '')
    page = page.replace(/\s*<meta property="og:url" content="__CANONICAL__" \/>/g, '')
    page = page.replaceAll('"url": "__CANONICAL__",', '')
    page = page.replaceAll('"url": "__CANONICAL__"', '')
    page = page.replaceAll('"target": "__CANONICAL__/blog?q={search_term_string}"', '"target": "/blog?q={search_term_string}"')
    // Clean up dangling comma if url was last property in an object
    page = page.replace(/,(\s*})/g, '$1')
  }
  return page
}

for (const route of routes) {
  const html = render(route)
  const m = meta[route] || {}
  let page = template.replace('<!--app-html-->', html)
  if (m.title) page = page.replace(/<title>[^<]*<\/title>/, `<title>${m.title}</title>`)
  if (m.description) {
    page = page.replace(/(<meta name="description" content=")[^"]*(")/, `$1${m.description}$2`)
    page = page.replace(/(<meta property="og:description" content=")[^"]*(")/, `$1${m.description}$2`)
    page = page.replace(/(<meta name="twitter:description" content=")[^"]*(")/, `$1${m.description}$2`)
  }
  if (m.title) {
    page = page.replace(/(<meta property="og:title" content=")[^"]*(")/, `$1${m.title}$2`)
    page = page.replace(/(<meta name="twitter:title" content=")[^"]*(")/, `$1${m.title}$2`)
  }
  page = applyOrigin(page, route)

  const outPath = route === '/' ? path.join(dist, 'index.html') : path.join(dist, route, 'index.html')
  fs.mkdirSync(path.dirname(outPath), { recursive: true })
  fs.writeFileSync(outPath, page, 'utf-8')
  console.log('prerendered', route, '→', path.relative(dist, outPath))
}

// Sitemap + robots — only generated with a real SITE_ORIGIN.
const sitemapPath = path.join(dist, 'sitemap.xml')
const robotsPath = path.join(dist, 'robots.txt')
if (SITE_ORIGIN) {
  const pri = (r) => (r === '/' ? '1.0' : r.startsWith('/legal/') ? '0.4' : r === '/404' ? '0.1' : '0.8')
  const freq = (r) => (r === '/' || r === '/blog' ? 'weekly' : r.startsWith('/legal/') ? 'yearly' : 'monthly')
  const urls = routes.filter(r => r !== '/404').map(r =>
    `  <url><loc>${SITE_ORIGIN}${r}</loc><changefreq>${freq(r)}</changefreq><priority>${pri(r)}</priority></url>`
  ).join('\n')
  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>\n`
  fs.writeFileSync(sitemapPath, sitemap, 'utf-8')
  fs.writeFileSync(robotsPath, `User-agent: *\nAllow: /\n\nSitemap: ${SITE_ORIGIN}/sitemap.xml\n`, 'utf-8')
  console.log('wrote sitemap.xml + robots.txt')
} else {
  if (fs.existsSync(sitemapPath)) fs.unlinkSync(sitemapPath)
  fs.writeFileSync(robotsPath, `User-agent: *\nAllow: /\n`, 'utf-8')
  console.log('SITE_ORIGIN not set — sitemap.xml omitted; robots.txt allows all.')
}

fs.rmSync(serverDist, { recursive: true, force: true })
console.log('done.')
