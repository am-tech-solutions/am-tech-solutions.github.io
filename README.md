# AM Tech Solutions — Website & Launch Guide

This folder is the whole website: plain HTML/CSS/JS, no build step, no framework,
free to host. The plan below launches at **zero cost** on `am-tech-solutions.github.io`
first; a paid custom domain is a later, optional upgrade you can add without
rebuilding anything.

## What's in here
- `index.html` — the single-page site (Hero, Platforms, Services, Approach, About, Contact)
- `styles.css`, `script.js` — styling and small interactions (mobile nav, contact form)
- `robots.txt`, `sitemap.xml` — SEO basics
- `assets/favicon.svg` — browser-tab icon

---

## 1. Put the site live — free, on `am-tech-solutions.github.io`

The GitHub **account/organization name** becomes the subdomain, not the repo name —
so this has to be set up in a specific order to land on a clean URL.

1. Create a free GitHub **organization** named `am-tech-solutions` (confirmed
   available). Organizations → New organization → free plan. (A personal account
   with that exact username works too, but a dedicated org keeps this separate
   from any personal GitHub account you already have.)
2. Inside that org, create a **public** repo named **exactly**
   `am-tech-solutions.github.io` — this exact name is what makes GitHub serve it
   at the root URL instead of a `/repo-name/` sub-path.
3. Push everything in this folder to it (or drag-and-drop upload via the GitHub
   web UI — no git experience required):
   ```
   git init
   git add .
   git commit -m "Launch AM Tech Solutions site"
   git branch -M main
   git remote add origin https://github.com/am-tech-solutions/am-tech-solutions.github.io.git
   git push -u origin main
   ```
4. Check **Settings → Pages** in the repo — for a repo named `<name>.github.io`,
   GitHub Pages usually turns itself on automatically (source: `main` / root).
   If it shows as off, set it manually.
5. Within a few minutes, the site is live at **https://am-tech-solutions.github.io/**
   — free, real SSL, no domain purchase needed.

## 2. Wire up the contact form (free, no backend)
1. Go to [web3forms.com](https://web3forms.com), enter your email, get a free
   **access key** (no account signup needed).
2. In `index.html`, find:
   ```html
   <input type="hidden" name="access_key" value="YOUR_WEB3FORMS_ACCESS_KEY">
   ```
   and replace `YOUR_WEB3FORMS_ACCESS_KEY` with the key you were given.
3. Redeploy (push the change) — form submissions will now land in your inbox.

## 3. Get listed on Google

### A. Google Business Profile (the map/knowledge-panel listing)
This is what most people mean by "listing on Google."
1. Go to [google.com/business](https://www.google.com/business/) → Manage now.
2. Business name: `AM Tech Solutions`.
3. Category: **Business management consultant** or **Software company**.
4. When asked about a storefront, choose **"I deliver goods and services to my
   customers"** → set it as a **service-area business** (no public address shown),
   service area = wherever you're willing to work (can be "Worldwide").
5. Add phone/email, and `https://am-tech-solutions.github.io/` as the website URL.
6. Verification: Google offers phone, email, or video verification for
   service-area businesses without a storefront — follow whichever it offers.
7. Once verified, fill out the profile fully: description (reuse the site's hero
   copy), services list (mirror the Services section), and add your logo.

### B. Google Search Console (gets the site itself indexed & ranked)
1. Go to [search.google.com/search-console](https://search.google.com/search-console).
2. Add property → **URL prefix** → `https://am-tech-solutions.github.io/`.
3. Verify via the **HTML tag** method (easiest with no server access).
4. Once verified, go to **Sitemaps** → submit `sitemap.xml`.
5. Use **URL Inspection** → "Request indexing" on your homepage to speed up the
   first crawl.

### C. LinkedIn (free, and where a lot of B2B consulting leads come from)
Create a LinkedIn **Company Page** for AM Tech Solutions, link it to the website,
and post occasionally about ecommerce OMS / fulfillment topics — this also gives
Google Business Profile and the site's structured data (`sameAs` in the JSON-LD)
something real to point to for credibility.

---

## Later (optional): moving to a paid custom domain

A `.github.io` URL is completely functional but reads as a free/hobby site to
anyone who recognizes the pattern. Once the business can justify ~$10–30/yr,
here's the confirmed-available option set (checked via registry lookup):

| Domain | Cost | Note |
|---|---|---|
| `amtechsolutions.co` | ~$25–30/yr | Closest match to the exact brand name |
| `amtechoms.com` | ~$10–12/yr | Cheapest `.com`, leans into the OMS specialty |
| `amtechfulfillment.com` | ~$10–12/yr | Cheapest `.com`, plain-English positioning |

**Steps once you buy one:**
1. Buy it at any registrar (Namecheap, Porkbun, GoDaddy).
2. Add a `CNAME` file to this repo's root containing just the domain
   (e.g. `amtechsolutions.co`), commit, and push.
3. In **Settings → Pages**, enter the domain under "Custom domain" and save.
   Check "Enforce HTTPS" once available.
4. At the registrar's DNS settings, add four **A** records for `@` pointing to
   `185.199.108.153`, `185.199.109.153`, `185.199.110.153`, `185.199.111.153`,
   plus a **CNAME** record: `www` → `am-tech-solutions.github.io`. Takes up to a
   few hours to propagate.
5. Free business email: use **ImprovMX** (no nameserver change needed) — sign up,
   add the domain, add the MX/SPF records it gives you, and set up
   `hello@yourdomain` → your personal Gmail forwarding.
6. Update these references from the `.github.io` URL to the new domain:
   `index.html` (canonical link, `og:url`, `og:image`, and the JSON-LD `url`
   field), `robots.txt` (Sitemap line), `sitemap.xml` (`<loc>`), and add the
   `mailto:` link back into the Contact section's `contact-links` list.
7. Update the Google Business Profile and Search Console entries to the new URL.

---

## Ongoing (all free)
- **Analytics**: skip paid tools — Search Console's performance tab + Google
  Business Profile insights are both free and need no cookie-consent banner.
- **Content**: add 1–2 short posts/case-writeups over time (e.g. "SFCC vs.
  Sterling OMS vs. Fluent Commerce", "BOPIS setup checklist") — this is the
  single biggest lever for organic Google ranking, more than any code change.
- **Trust signals**: once you have even one client project, add a short case
  study or testimonial section — right now the site intentionally avoids fake
  client logos/testimonials since you're just starting out.

## To change content later
Everything is in plain HTML in `index.html` — no CMS, no build step. Edit the
text directly, commit, and push; GitHub Pages redeploys automatically within a
minute or two.
