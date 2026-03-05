import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://appsforlanguages.com',
  output: 'static',
  integrations: [sitemap()],
});
