// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// Static output deploys directly to Cloudflare (Workers static assets).
// Update `site` to the preschool's real domain before launch.
export default defineConfig({
  site: 'https://www.littleblessingsmadison.org',
  output: 'static',
  trailingSlash: 'ignore',
  integrations: [sitemap()],
  build: {
    format: 'directory',
  },
});
