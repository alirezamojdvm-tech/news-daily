import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://vet.hsc-co.ir',
  integrations: [sitemap()],
  trailingSlash: 'always',  // این خط رو اضافه کن
});