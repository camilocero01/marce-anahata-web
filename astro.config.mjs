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
      filter: (page) => {
        if (page.endsWith('/rss.xml')
          || page.endsWith('/feed.xml')
          || page.endsWith('/sitemap-index.xml')
        ) return false;
        const url = new URL(page);
        const path = url.pathname.replace(/\/$/, '');
        if (['/admin', '/links', '/privacidad', '/buscar', '/404',
             '/en/links', '/en/privacidad', '/en/buscar', '/en/404'
        ].includes(path)) return false;
        if (path.endsWith('/blog/page/1')) return false;
        if (path.endsWith('/en/blog/page/1')) return false;
        if (path.includes('/blog/tag/') && path.endsWith('/page/1')) return false;
        if (path.includes('/en/blog/tag/') && path.endsWith('/page/1')) return false;
        return true;
      },
      customPages: [],
      serialize(item) {
        const path = new URL(item.url).pathname.replace(/\/$/, '');

        // Páginas de máxima prioridad
        if ([
          '/bano-de-gong',
          '/viaje-450-vibraciones',
          '/terapia-sonido',
          '/en/viaje-450-vibraciones',
        ].includes(path)) {
          return { ...item, priority: 1.0, changefreq: 'weekly' };
        }

        // Páginas de alta prioridad
        if ([
          '/',
          '/clases',
          '/rituales',
          '/sobre-mi',
          '/tarifas',
          '/circulo-mujeres-conscientes',
          '/bienestar-corporativo',
        ].includes(path)) {
          return { ...item, priority: 0.9, changefreq: 'monthly' };
        }

        // Posts de eventos activos
        if ([
          '/blog/12-viaje-450-vibraciones-abril-2026',
          '/blog/13-viaje-450-vibraciones-mayo-2026',
          '/blog/14-viaje-450-vibraciones-junio-2026',
        ].includes(path)) {
          return { ...item, priority: 0.9, changefreq: 'weekly' };
        }

        // Post educativo del gong
        if (path === '/blog/8-bano-de-gong-febrero-2026') {
          return { ...item, priority: 0.8, changefreq: 'monthly' };
        }

        // Páginas de tags SEO relevantes
        if (path.startsWith('/blog/tag/')) {
          return { ...item, priority: 0.7, changefreq: 'weekly' };
        }

        // Resto del blog
        if (path.startsWith('/blog/')) {
          return { ...item, priority: 0.6, changefreq: 'monthly' };
        }

        // Default
        return { ...item, priority: 0.5, changefreq: 'monthly' };
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
