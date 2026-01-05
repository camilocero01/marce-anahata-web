// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

import sitemap from '@astrojs/sitemap';

import partytown from '@astrojs/partytown';

import compress from 'astro-compress';

import mdx from '@astrojs/mdx';

// https://astro.build/config
export default defineConfig({
  vite: {
    plugins: [tailwindcss()]
  },

  integrations: [
    mdx(),
    sitemap({
      // Exclude low-value pages from sitemap
      // The `page` parameter is a full URL, so compare by path endings
      filter: (page) => {
        // Excluir páginas para no afectar el SEO
        if (page.endsWith('/links') 
          || page.endsWith('/privacidad')
          || page.endsWith('/buscar')
          || page.endsWith('/404')
        )  return false;
        // Excluir primera página de paginación (duplicados de páginas principales)
        if (page.endsWith('/blog/page/1')) return false;
        if (page.includes('/blog/tag/') && page.endsWith('/page/1')) return false;
        return true;
      }
    }),
    partytown({
      config: {
        // ESTO ES LO CRUCIAL:
        // Le dice a Partytown que deje pasar los datos de Google al hilo principal
        forward: ['dataLayer.push'],
      },
    }),
    compress()
  ],
  site: 'https://www.marceanahata.com', // URL de producción (usar dominio canonico)
  // 'always' fuerza la barra al final (ej: /contacto/)
  // 'never' la quita (ej: /contacto) -> Recomendado para Vercel
  trailingSlash: 'never', 
  prefetch: true, // Habilita la estrategia por defecto (hover)
  compressHTML: true,
});
