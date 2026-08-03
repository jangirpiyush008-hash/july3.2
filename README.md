# Brew &amp; Bean Journal

A production-ready, statically pre-rendered React + Vite + Tailwind website for **Brew &amp; Bean Journal** — an independent editorial publication about specialty coffee, home espresso, pour-over, French press, coffee beans, and home coffee bar setups.

Node **20.x** · React 18 · Vite 5 · Tailwind CSS 3 · React Router DOM 6 · Express + `compression`.

## What's inside

- **17 pre-rendered routes** — every URL returns real HTML in "View Source", readable with JavaScript disabled
- **20 long-form blog articles** with client-side search, category / method / difficulty filters
- **25+ FAQs** with FAQ JSON-LD schema
- **Google Consent Mode v2** — analytics_storage / ad_storage default to *denied*; GA4 (`G-4J046JXWVC`) loads only after the reader accepts the cookie banner
- **Real message delivery** — contact and newsletter forms open the user's email client pre-addressed to `brewandbeanjournal@gmail.com` (no server-side handling required)
- **Trust pages** — Editorial Policy, Affiliate Disclosure, Privacy, Terms, Refund all present and linked from the footer
- **Fully local assets** — 39 real coffee photographs stored under `src/assets/images/`, imported as ES modules (no CDN hotlinking at runtime)
- **Configurable `SITE_ORIGIN`** at build time — canonical URLs, OG URLs, JSON-LD identity and `sitemap.xml` are only emitted when the real origin is known
- **Accessibility** — keyboard navigation, skip link, semantic HTML, visible focus rings, WCAG-AA contrast on the primary palette
- **Performance** — hashed static assets with long-cache headers, HTML with short-cache headers, lazy-loaded below-the-fold images, no client-side heavy animations

## Business

- **Brew &amp; Bean Journal**
- brewandbeanjournal@gmail.com
- Phone &amp; postal address available on request via email
- Google Analytics ID: `G-4J046JXWVC`

## Local development

```bash
npm install
npm run dev            # Vite dev server on http://localhost:5173
```

## Production build

```bash
# Local build (SITE_ORIGIN unset — canonical URLs & sitemap.xml are omitted, which is safer than serving the wrong domain)
npm run build
npm start              # Express server on $PORT (default 3000)

# Build with a real deploy origin
SITE_ORIGIN=https://main.dxxxxxxxx.amplifyapp.com npm run build
```

## Routes

All 17 routes are pre-rendered as static HTML:

```
/
/about
/blog
/contact
/community
/brewing-guides
/home-espresso
/pour-over
/french-press
/coffee-beans
/home-coffee-bar
/legal/privacy
/legal/terms
/legal/refund
/legal/affiliate-disclosure
/legal/editorial-policy
/404
```

## SEO

- `sitemap.xml` — generated at build time from `SITE_ORIGIN`
- `robots.txt` — generated at build time
- Canonical URL, Open Graph, Twitter Card meta on every page
- JSON-LD: `Organization`, `WebSite` (with `SearchAction`), `FAQPage` schemas
- Descriptive `alt` text on every content image

## Google Analytics + Consent

- `G-4J046JXWVC` is already wired in `index.html`. To use a different ID, set `window.__BBJ_GA_ID = 'G-YOURID'` before the consent script or edit the fallback string in `index.html`.
- Google Consent Mode v2 defaults to `denied` for analytics and advertising storage. The cookie banner grants consent only after the reader clicks *Accept analytics*.

## Deployment

### AWS Amplify Hosting

1. In the Amplify Console, choose **Host web app → GitHub** and pick this repository.
2. Amplify auto-detects `amplify.yml`. Confirm the build image is Node **20.x**.
3. **Set the site origin** (App settings → Environment variables): add
   `SITE_ORIGIN` = your live URL (e.g. `https://main.dxxxxxxxx.amplifyapp.com` or your custom domain).
   The pre-render step reads this env var and writes it into canonical URLs, Open Graph URLs, JSON-LD `url`, and `sitemap.xml`.
4. **Add rewrite rules** (App settings → Rewrites and redirects) so every pretty URL resolves to its pre-rendered HTML:

   | Source | Target | Type |
   | --- | --- | --- |
   | `</^[^.]+$/>` | `/$1/index.html` | 200 (Rewrite) |

5. Deploy. Amplify handles TLS, CDN and cache invalidation. Long-cache headers on `/assets/*` and short-cache headers on HTML are declared in `amplify.yml`.

### Heroku

```bash
heroku create brew-and-bean-journal
heroku config:set SITE_ORIGIN=https://brew-and-bean-journal.herokuapp.com
git push heroku main
```

### Vercel / Netlify

Both accept a static build of `dist/`. For pretty URLs to work without a trailing slash, add a rewrite rule the same shape as the Amplify one above.

## Folder structure

```
.
├── index.html
├── package.json
├── vite.config.js
├── tailwind.config.js
├── postcss.config.js
├── server.js
├── prerender.js
├── Procfile / app.json / amplify.yml
├── public/
│   ├── favicon.svg
│   ├── manifest.json
│   ├── browserconfig.xml
│   └── og-cover.svg
└── src/
    ├── main.jsx / entry-server.jsx / App.jsx / index.css
    ├── assets/images/               # 39 real local JPGs
    ├── components/
    │   ├── Navbar / Footer / CookieBanner / ScrollToTop / RouteTracker
    │   ├── Section / Accordion / ArticleCard / Search
    ├── data/
    │   ├── articles.js              # 20-article catalogue
    │   └── faqs.js                  # 25 FAQs + FAQPage JSON-LD
    ├── pages/                       # one component per route
    └── utils/
        ├── analytics.js             # gtag helpers, guarded by valid GA ID
        └── consent.js               # localStorage-backed consent manager
```

## Editorial &amp; Google Ads compliance

This site is built to Google's destination-quality guidelines from day one:

- No fabricated named people, no fake testimonials, no fake stats
- Editorial disclosure on every page (footer) + Home page block
- Dedicated Editorial Policy, Affiliate Disclosure, Privacy, Terms and Refund pages
- Real message delivery on all forms (no fake `alert()` confirmations)
- Google Consent Mode v2 defaults deny; GA loads only after opt-in
- Canonical URLs are either correct (via `SITE_ORIGIN`) or omitted — never wrong

## License

Copyright © Brew &amp; Bean Journal. All text and code are the property of the publication.
