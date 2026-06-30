# Little Blessings Preschool — Website

A warm, single-page landing site for **Little Blessings Preschool**, a Christ-centered
preschool in **Madison, Minnesota** — a ministry of **Faith Lutheran Church**. Built with
[Astro](https://astro.build) and deployed to **Cloudflare** (Workers static assets).

The page is built to **attract new students and families**: a friendly hero, the school's
mission, programs by age, a "typical day," reasons families choose Little Blessings, and a
clear *Visit & Enroll* section with map, class times, and contact details.

> **Status:** Design build. Core facts (address, church phone, Facebook page, MN license,
> ages served, Christian mission) come from public listings and the church's own pages.
> Program names, exact class days/times, and any staff names are **reasonable placeholders
> to confirm with the director before launch.**

---

## Brand & design

A soft, faith-forward palette — sage **green** + sunny **gold** on warm **cream** — with
rounded, friendly type. The layout intentionally avoids a "card grid": content flows as
full-width bands, alternating program rows, a day timeline, and a borderless feature list.

| Token | Value | Use |
| --- | --- | --- |
| Primary green | `#4f8a6a` | Buttons, links, headings |
| Deep green | `#356152` → `#2f5544` | Dark bands, footer |
| Sunny gold | `#f4b942` | Accents, "now enrolling" pill |
| Sky / coral | `#7cb8d4` / `#ef8d7a` | Soft secondary accents |
| Cream | `#fbf7ee` | Page background |

- **Display font:** Baloo 2 (rounded, warm)
- **Body font:** Nunito

All design tokens live as CSS custom properties in [`src/styles/global.css`](src/styles/global.css).

---

## Editing content

Nearly all copy and data is centralized in **[`src/data/site.ts`](src/data/site.ts)** —
school name, contact info, the Bible verse, age programs, daily schedule, "why us" reasons,
enrollment steps, and class times. Edit that one file to update most of the site.

### ⚠️ Verify before launch
- **Address & phone** — `106 W 8th St, Madison, MN 56256` and `(320) 598-3630` are the
  Faith Lutheran Church office (from public listings). Confirm the preschool's direct line.
- **Class days/times** in `site.hours` are a typical part-day pattern — replace with the
  real schedule.
- **Program names** (Little Lambs / Sonshine / Pre-K Pathways) are friendly suggestions.
- **Domain** — `site` in `astro.config.mjs`, the sitemap URL in `public/robots.txt`, and the
  canonical URL in the JSON-LD (`src/layouts/BaseLayout.astro`) all use a placeholder domain.
- Add a real Open Graph share image and swap the illustrated hero for photos when available.

---

## Develop

```bash
npm install      # install dependencies
npm run dev      # local dev server at http://localhost:4321
npm run build    # production build to ./dist
npm run preview  # preview the production build locally
```

---

## Deploy to Cloudflare

The site builds to static HTML in `./dist` and deploys as a Cloudflare Worker serving those
static assets (configured in [`wrangler.toml`](wrangler.toml)).

**One-time setup** — authenticate Wrangler with your Cloudflare account:

```bash
npx wrangler login
# …or set an API token in your environment:
export CLOUDFLARE_API_TOKEN=...      # token with Workers edit permission
export CLOUDFLARE_ACCOUNT_ID=...
```

**Deploy:**

```bash
npm run deploy
# = astro build && wrangler deploy
```

The first deploy creates the `little-blessings-preschool` Worker and returns a
`*.workers.dev` URL. Add the custom domain in the Cloudflare dashboard under the Worker's
**Settings → Domains & Routes**.

Alternatively, connect this Git repo in **Workers & Pages → Create → Import a repository**;
Cloudflare detects Astro (build = `npm run build`, output = `dist`) for automatic deploys.

---

## Project structure

```
src/
  components/   Header, Footer, Icon
  data/site.ts  ← single source of truth for content
  layouts/      BaseLayout (head, fonts, JSON-LD, header/footer)
  pages/        index.astro (the landing page) + 404.astro
  styles/       global.css (design tokens + base styles)
public/         favicon, robots.txt
astro.config.mjs
wrangler.toml   Cloudflare Worker (static assets) config
```
