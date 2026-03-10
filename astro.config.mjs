// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

import sitemap from '@astrojs/sitemap';

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
    // Inline all CSS to eliminate render-blocking stylesheet requests
    inlineStylesheets: 'always'
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
        // Excluir páginas para no afectar el SEO
        // Con trailingSlash: 'never', las URLs no tienen / final
        const url = new URL(page);
        const path = url.pathname.replace(/\/$/, ''); // Normalizar por seguridad
        if (['/admin', '/links', '/privacidad', '/buscar', '/404',
             '/en/links', '/en/privacidad', '/en/buscar', '/en/404'
        ].includes(path)) return false;
        // Excluir primera página de paginación (duplicados de páginas principales)
        if (path.endsWith('/blog/page/1')) return false;
        if (path.endsWith('/en/blog/page/1')) return false;
        // Excluir páginas de etiquetas de la primera página
        if (path.includes('/blog/tag/') && path.endsWith('/page/1')) return false;
        if (path.includes('/en/blog/tag/') && path.endsWith('/page/1')) return false;
        return true;
      }
    }),
    compress()
  ],
  site: 'https://www.marceanahata.com', // URL de producción (usar dominio canonico)
  // 'always' fuerza la barra al final (ej: /contacto/)
  // 'never' la quita (ej: /contacto) -> Recomendado para Vercel
  // Usar 'never' para que sitemap y canonical coincidan sin trailing slash
  trailingSlash: 'never', 
  prefetch: true, // Habilita la estrategia por defecto (hover)
  compressHTML: true,
});
