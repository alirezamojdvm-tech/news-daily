// astro.config.mjs
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://blog.hsc-co.ir', // آدرس سایت شما
  integrations: [sitemap()],
  // اگر می‌خواهید صفحات خاصی از نقشه سایت حذف شوند:
  // sitemap: {
  //   filter: (page) => page !== 'https://blog.hsc-co.ir/admin/'
  // }
});