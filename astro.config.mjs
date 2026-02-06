// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

import sitemap from '@astrojs/sitemap';

import partytown from '@astrojs/partytown';

import compress from 'astro-compress';

import mdx from '@astrojs/mdx';

// https://astro.build/config
export default defineConfig({
  i18n: {
    defaultLocale: 'es',
    locales: ['es', 'en'],
    routing: {
      prefixDefaultLocale: false,
      redirectToDefaultLocale: true
    }
  },
  vite: {
    plugins: [tailwindcss()]
  },
  build: {
    inlineStylesheets: 'auto'
  },

  integrations: [
    mdx(),
    sitemap({
      // Exclude low-value pages from sitemap
      // The `page` parameter is a full URL, so compare by path endings
      filter: (page) => {
        // Excluir archivos de feed y configuración
        if (page.endsWith('/rss.xml')
          || page.endsWith('/feed.xml')
          || page.endsWith('/sitemap-index.xml')
        ) return false;
        // Excluir páginas para no afectar el SEO (incluir / final)
        if ( page.endsWith('/admin/')
          || page.endsWith('/links/') 
          || page.endsWith('/privacidad/')
          || page.endsWith('/buscar/')
          || page.endsWith('/404/')
          || page.endsWith('/en/links/')
          || page.endsWith('/en/privacidad/')
          || page.endsWith('/en/buscar/')
          || page.endsWith('/en/404/')
        )  return false;
        // Excluir primera página de paginación (duplicados de páginas principales)
        if (page.endsWith('/blog/page/1/')) return false;
        if (page.endsWith('/en/blog/page/1/')) return false;
        // Excluir páginas de etiquetas de la primera página
        if (page.includes('/blog/tag/') && page.endsWith('/page/1/')) return false;
        if (page.includes('/en/blog/tag/') && page.endsWith('/page/1/')) return false;
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
  trailingSlash: 'ignore', 
  prefetch: true, // Habilita la estrategia por defecto (hover)
  compressHTML: true,
});
