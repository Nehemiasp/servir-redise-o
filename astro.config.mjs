import { defineConfig } from 'astro/config';

// SITE_URL: dominio final cuando se publique. Mientras sea una propuesta, no se indexa
// (ver PUBLIC_INDEXABLE en src/config.ts).
export default defineConfig({
  site: process.env.SITE_URL || 'https://servir-propuesta.example',
  trailingSlash: 'ignore',
  build: { format: 'directory' },
  devToolbar: { enabled: false },
});
