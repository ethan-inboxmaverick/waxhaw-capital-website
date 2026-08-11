# Waxhaw Capital Group — Website

Static single-page site for [waxhawcapital.com](https://waxhawcapital.com). No build step: `index.html` is the entire site (images embedded), so any static host serves it as-is.

## Deploy on Vercel
1. Push this repo to GitHub.
2. In Vercel: **Add New → Project → Import** this repo.
3. Framework preset: **Other** (no build command, output dir = root). Deploy.
4. In Vercel → Settings → Domains, add `waxhawcapital.com` and follow the DNS instructions.

## Before / at launch (from the copy-revisions checklist)
- [ ] Real phone number: currently there is **no** Call Now button (the old site's `tel:1234567890` placeholder was removed). Add one when a number exists.
- [ ] Contact form is an honest mailto composer (opens the visitor's email app, labeled as such). Wire a form provider (e.g. Formspree/Resend) for server delivery.
- [ ] Confirm permission to name the Crawl Space Brothers buyer before adding it to David's bio.
- [ ] 301-redirect any old-site URLs that change.
- [ ] Twenty minutes with the securities attorney on state registration / disclosures (see WCG_Website_Copy_Revisions).

## Content source of truth
Copy comes from `WCG_Website_Copy_Revisions` in the Claude project: EBITDA screen ($1M–$5M), services ordered Investments → Advisory → Real Estate, 78+ standardized, compliance language removed, footer advisor-and-principal disclosure included.
