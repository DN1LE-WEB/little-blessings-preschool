# Image assets

Drop Little Blessings' real photos and brand assets here, then reference them from
`src/data/site.ts` or the relevant component.

Suggested files:

- `logo.svg` / `logo.png` — preschool logo (swap the cross `.brand-mark` in
  `src/components/Header.astro` and `src/components/Footer.astro`)
- `favicon.svg` — already in `/public/favicon.svg`; replace with the real mark
- `hero.jpg` — a warm classroom / children-at-play photo to replace the illustrated
  hero scene in `src/pages/index.astro` (the `.scene` block)
- `og-image.jpg` — 1200×630 social share image (wire into `BaseLayout.astro` as `og:image`)
- `classroom/` — a few friendly photos for the programs or "our day" sections

Tips:
- Always use photos you have permission to publish; follow your church's media-consent
  policy for any images that include children.
- Prefer `.webp` or optimized `.jpg` for photos; `.svg` for the logo.
- Keep hero/photo images ~1600px wide max for fast loads.
- Once added, Astro serves anything in `/public` at the site root (e.g. `/images/hero.jpg`).
