// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

import sitemap from '@astrojs/sitemap';

import partytown from '@astrojs/partytown';

import compress from 'astro-compress';

// https://astro.build/config
export default defineConfig({
  vite: {
    plugins: [tailwindcss()]
  },

  integrations: [sitemap(), partytown(), compress()],
  site: 'https://marce-anahata-web.vercel.app', // Tu URL de producción
  // 'always' fuerza la barra al final (ej: /contacto/)
  // 'never' la quita (ej: /contacto) -> Recomendado para Vercel
  trailingSlash: 'never', 
  prefetch: true, // Habilita la estrategia por defecto (hover)
  compressHTML: true,
  build: {
    // 'auto' inyecta estilos pequeños en el HTML y deja los grandes en archivos aparte.
    // 'always' inyecta TODO el CSS en el HTML (bueno para sitios pequeños).
    inlineStylesheets: 'always', 
  }
});