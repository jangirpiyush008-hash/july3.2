# AWS Amplify Hosting — deploy checklist

This project is a **statically pre-rendered React site** (Vite + React Router). Amplify serves the pre-rendered HTML files from `dist/` after the build runs. Follow the four steps below in order.

---

## 1. Connect the repository

In the Amplify Console → **Host web app → GitHub** → pick
`jangirpiyush008-hash/july3.2`, branch `main`.

Amplify will auto-detect [`amplify.yml`](./amplify.yml). Leave the build settings on **Use existing amplify.yml**.

## 2. Confirm the build image is Node 20

App settings → **Build settings → Build image settings → Edit** →

- Build image: **Amazon Linux 2023**
- Node.js version: **20** (or use the default; `.nvmrc` in this repo pins it)

## 3. Add the `SITE_ORIGIN` environment variable

App settings → **Environment variables → Manage variables → Add**

| Key | Value |
| --- | --- |
| `SITE_ORIGIN` | `https://<your-amplify-subdomain>.amplifyapp.com` **(no trailing slash)** |

- Save. Amplify will re-run the build automatically on the next commit.
- On first deploy, if you don't know the URL yet, deploy once without this variable, then add it and redeploy — the second build will bake it into canonical URLs, JSON-LD identity, and `sitemap.xml`.
- **If `SITE_ORIGIN` is not set, the canonical URL, `og:url` meta and JSON-LD `url` field are stripped from the HTML** — safer than serving the wrong domain to a Google Ads reviewer.

## 4. Add the pretty-URL rewrite rule (critical)

App settings → **Rewrites and redirects → Edit → Add rule**

| Source address | Target address | Type |
| --- | --- | --- |
| `</^[^.]+$/>` | `/<*>/index.html` | `200 (Rewrite)` |

> If Amplify auto-suggested a generic SPA fallback (`</^[^.]+$\|\.(?!...)/>` → `/index.html`), **delete it first**. Sending every pretty URL to a shared `index.html` would defeat the pre-rendering and cost you the per-page canonical URLs, per-page meta tags, and per-page JSON-LD.

The rule above maps `/pour-over` → `/pour-over/index.html` while leaving asset URLs (`/assets/…`) alone.

---

## What Amplify serves after these four steps

| URL | Serves | HTTP |
| --- | --- | --- |
| `/` | `dist/index.html` — pre-rendered Home | 200 |
| `/pour-over` | `dist/pour-over/index.html` | 200 |
| `/legal/privacy` | `dist/legal/privacy/index.html` | 200 |
| `/assets/*` | hashed JS/CSS/JPG with 1-year immutable cache | 200 |
| `/sitemap.xml` | Generated at build time from `SITE_ORIGIN` | 200 |
| `/robots.txt` | Generated at build time | 200 |
| Any other path | Falls through to `dist/404/index.html` | 404 |

## Verifying the deploy

Once the first deploy finishes, from your terminal:

```bash
DOMAIN="https://<your-amplify-subdomain>.amplifyapp.com"
for r in / /about /pour-over /legal/privacy /sitemap.xml /robots.txt; do
  printf "%-24s %s\n" "$r" "$(curl -sSI "$DOMAIN$r" | head -1)"
done
```

Every route above should return `HTTP/2 200`.

Then open View Source on `/pour-over` and confirm the full essay text is present in raw HTML — that's the guarantee Google Ads reviewers want.

## Google Analytics

`G-4J046JXWVC` is already wired in [`index.html`](./index.html). Google Consent Mode v2 defaults to *denied* and only loads GA after the reader accepts the cookie banner. To change the ID, edit `index.html`:

```html
var __BBJ_GA_ID = window.__BBJ_GA_ID || 'G-4J046JXWVC';
```

## Custom domain (optional)

After you attach a custom domain in Amplify:

1. Update `SITE_ORIGIN` in Environment variables to the new custom domain.
2. Trigger a redeploy.
3. Confirm `sitemap.xml`, canonical URLs and JSON-LD reflect the new domain.

That's it — same four steps re-run.
