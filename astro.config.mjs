// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

import sitemap from '@astrojs/sitemap';

import partytown from '@astrojs/partytown';

// https://astro.build/config
export default defineConfig({
  vite: {
    plugins: [tailwindcss()]
  },

  integrations: [sitemap(), partytown()],
  site: 'https://marce-anahata-web.vercel.app', // Tu URL de producción
  // 'always' fuerza la barra al final (ej: /contacto/)
  // 'never' la quita (ej: /contacto) -> Recomendado para Vercel
  trailingSlash: 'never', 
  prefetch: true, // Habilita la estrategia por defecto (hover)
});