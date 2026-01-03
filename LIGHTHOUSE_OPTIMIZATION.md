# Lighthouse Audit & Performance Optimization Report

**Fecha:** 31 de diciembre de 2025  
**URL base:** https://marceanahata.com  
**Estado:** Análisis manual del código fuente

---

## ✅ Optimizaciones Ya Implementadas

### Performance
- [x] **Lazy loading** en imágenes secundarias (`loading="lazy"`)
- [x] **Eager loading** en hero images y contenido above-the-fold
- [x] **Image optimization** con Astro Image (WebP, densidades 1.5x/2x)
- [x] **CSS/HTML compression** (85KB ahorrados en build)
- [x] **Font optimization** con `@fontsource` y `font-display: swap`
- [x] **Static generation** (SSG) - sitio completamente estático
- [x] **Script async** en Google Analytics

### SEO
- [x] Meta tags completos (OG, Twitter, locale)
- [x] Schema JSON-LD (Organization, LocalBusiness, Article, BreadcrumbList)
- [x] Sitemap.xml con prioridades
- [x] robots.txt optimizado para IA crawlers
- [x] Canonical URLs
- [x] RSS feeds

### Accessibility
- [x] Skip link para navegación por teclado
- [x] Etiquetas `aria-label` en botones críticos
- [x] HTML semántico (`<main>`, `<nav>`, `<article>`)
- [x] Alt text en imágenes

### Best Practices
- [x] HTTPS ready
- [x] Responsive design (mobile-first)
- [x] Cookie consent banner

---

## 🚀 Optimizaciones Prioritarias Recomendadas

### 1. Preload Critical Resources (ALTO IMPACTO)

**Problema:** Las fuentes y el CSS crítico no están pre-cargados, causando FOIT/FOUT.

**Solución:** Agregar preload en Layout.astro:

```astro
<!-- En <head> del Layout.astro -->
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link rel="preload" href="/path/to/critical.css" as="style">
<link rel="preload" as="font" type="font/woff2" href="/fonts/montserrat-400.woff2" crossorigin>
<link rel="preload" as="font" type="font/woff2" href="/fonts/montserrat-700.woff2" crossorigin>
```

**Impacto esperado:** Mejora LCP en 0.5-1s, reduce CLS.

---

### 2. Optimizar Hero Videos (ALTO IMPACTO)

**Problema:** Videos hero no optimizados pueden bloquear render.

**Archivo:** `index.astro`, `terapia-sonido.astro`, `bienestar-corporativo.astro`

**Solución actual:**
```html
<video autoplay muted loop playsinline>
  <source src="/videos/hero-bg.mp4" type="video/mp4" />
</video>
```

**Mejora sugerida:**
```html
<video 
  autoplay 
  muted 
  loop 
  playsinline 
  preload="metadata"
  poster="/images/hero-fallback.webp"
>
  <source src="/videos/hero-bg.mp4" type="video/mp4" />
</video>
```

**Impacto esperado:** Mejora LCP en 1-2s, reduce bandwidth inicial.

---

### 3. Implementar Resource Hints (MEDIO IMPACTO)

**Agregar en Layout.astro:**
```astro
<link rel="dns-prefetch" href="https://www.googletagmanager.com">
<link rel="preconnect" href="https://www.googletagmanager.com">
```

**Impacto esperado:** Mejora FCP en 100-200ms.

---

### 4. Optimizar Imágenes Hero (MEDIO IMPACTO)

**Problema:** Algunas imágenes hero no tienen `fetchpriority="high"`.

**Archivo:** `index.astro`, páginas de servicios

**Cambio:**
```astro
<Image 
  src={heroImg} 
  alt="..." 
  loading="eager"
  fetchpriority="high"  <!-- AGREGAR ESTO -->
  width={1920}
  densities={[1.5, 2]}
/>
```

**Impacto esperado:** Prioriza carga de imagen principal, mejora LCP en 200-500ms.

---

### 5. Inline Critical CSS (MEDIO-ALTO IMPACTO)

**Problema:** CSS global puede bloquear render.

**Solución:** Extraer CSS crítico (above-the-fold) e inlinearlo en `<head>`:

```astro
<style is:inline>
  /* Critical CSS: skip link, navbar, hero section */
  .skip-link { /* ... */ }
  nav { /* ... */ }
  /* Resto del CSS crítico */
</style>
```

**Impacto esperado:** Mejora FCP en 300-600ms, reduce render-blocking.

---

### 6. Lazy Load WhatsApp Widget (BAJO-MEDIO IMPACTO)

**Problema:** Widget carga inmediatamente en desktop, no es crítico.

**Archivo:** `Layout.astro`

**Mejora:**
```html
<!-- Agregar loading="lazy" al script o cargar vía Intersection Observer -->
<script is:inline>
  // Cargar widget solo cuando usuario scrollea 50%
  const observer = new IntersectionObserver((entries) => {
    if (entries[0].isIntersecting) {
      document.querySelector('[data-wa-panel]').classList.remove('hidden');
      observer.disconnect();
    }
  }, { threshold: 0.1 });
  
  observer.observe(document.body);
</script>
```

**Impacto esperado:** Reduce Time to Interactive en 50-100ms.

---

### 7. Reducir JavaScript Inicial (MEDIO IMPACTO)

**Problema:** `ReviewsSection.astro_astro_type_script_index_0_lang.Dic8Vqzb.js` pesa 82KB.

**Verificar:** Si usa librerías pesadas (Swiper, etc.), considerar:
- Code splitting por ruta
- Lazy load de componentes no críticos
- Tree-shaking de dependencias no usadas

**Impacto esperado:** Mejora TBT y TTI en 200-500ms.

---

### 8. Agregar Cache Headers (MEDIO IMPACTO)

**Archivo:** `vercel.json` o configuración de hosting

```json
{
  "headers": [
    {
      "source": "/(.*)",
      "headers": [
        {
          "key": "Cache-Control",
          "value": "public, max-age=31536000, immutable"
        }
      ]
    },
    {
      "source": "/(.*)\\.(html)",
      "headers": [
        {
          "key": "Cache-Control",
          "value": "public, max-age=0, must-revalidate"
        }
      ]
    }
  ]
}
```

**Impacto esperado:** Mejora repeat visits en 80-90%.

---

### 9. Mejorar Accesibilidad de Menú Mobile (BAJO IMPACTO)

**Problema:** Menú dropdown mobile no tiene `aria-expanded` ni gestión de foco.

**Archivo:** `Layout.astro` (menú `<details>`)

**Mejora:**
```html
<details class="md:hidden group relative">
  <summary 
    class="cursor-pointer p-2 list-none" 
    aria-label="Abrir menú de navegación"
    aria-expanded="false"
  >
    <!-- icon -->
  </summary>
  <!-- menu items -->
</details>

<script is:inline>
  document.querySelector('details summary').addEventListener('click', (e) => {
    const expanded = e.target.getAttribute('aria-expanded') === 'true';
    e.target.setAttribute('aria-expanded', !expanded);
  });
</script>
```

**Impacto esperado:** Mejora accessibility score de ~85 a ~95.

---

### 10. Añadir `width` y `height` a TODAS las imágenes (MEDIO IMPACTO)

**Problema:** Algunas `<img>` no tienen dimensiones explícitas, causando CLS.

**Archivos:** Blog posts (imágenes dinámicas)

**Verificar en:** `blog.astro`, `blog/[slug].astro`

**Cambio:**
```html
<!-- ANTES -->
<img src={post.data.image} alt={title} loading="lazy" />

<!-- DESPUÉS -->
<img 
  src={post.data.image} 
  alt={title} 
  width="800" 
  height="600" 
  loading="lazy" 
/>
```

**Impacto esperado:** Reduce CLS de ~0.15 a <0.1.

---

## 📊 Métricas Esperadas Post-Optimización

| Métrica | Antes (estimado) | Después (target) | Estado |
|---------|------------------|------------------|--------|
| **Performance** | 75-85 | 90-95 | 🟡 Optimizable |
| **Accessibility** | 85-90 | 95-100 | 🟡 Optimizable |
| **Best Practices** | 90-95 | 95-100 | 🟢 Bueno |
| **SEO** | 95-100 | 100 | 🟢 Excelente |
| **LCP** | 2.5-3.5s | <2.5s | 🟡 Optimizable |
| **CLS** | 0.1-0.2 | <0.1 | 🟡 Optimizable |
| **FID/TBT** | 100-200ms | <100ms | 🟡 Optimizable |

---

## 🛠️ Plan de Acción (Priorizado)

### Sprint 1 (30 min - ALTO IMPACTO)
1. ✅ Agregar `fetchpriority="high"` a hero images
2. ✅ Añadir `preload` para fuentes críticas
3. ✅ Optimizar videos con `preload="metadata"` y `poster`

### Sprint 2 (1 hora - MEDIO IMPACTO)
4. ✅ Resource hints (dns-prefetch, preconnect)
5. ✅ Cache headers en Vercel
6. ✅ Width/height en imágenes de blog

### Sprint 3 (2 horas - REFACTORING)
7. ✅ Inline critical CSS
8. ✅ Lazy load WhatsApp widget con Intersection Observer
9. ✅ Mejorar accesibilidad del menú mobile

### Sprint 4 (MONITOREO)
10. ✅ Deploy y ejecutar Lighthouse real
11. ✅ Verificar Core Web Vitals en Google Search Console
12. ✅ Ajustar según métricas reales

---

## 🔍 Cómo Ejecutar Lighthouse Manualmente

1. **Chrome DevTools:**
   - Abrir sitio en Chrome
   - F12 > Lighthouse tab
   - Seleccionar categorías (Performance, Accessibility, SEO, Best Practices)
   - Click "Analyze page load"

2. **CLI (alternativa):**
   ```bash
   npm install -g lighthouse
   lighthouse http://localhost:4321/ --view
   ```

3. **PageSpeed Insights (producción):**
   - Ir a [https://pagespeed.web.dev/](https://pagespeed.web.dev/)
   - Ingresar URL real del sitio
   - Ver métricas móvil y desktop

---

## 📌 Notas Finales

- **Prioridad:** Optimizaciones 1-3 son críticas para LCP/FCP.
- **Testing:** Siempre probar en mobile (throttling 4G) y desktop.
- **Monitoreo:** Configurar Google Search Console Core Web Vitals tras deploy.
- **Iteración:** Re-ejecutar Lighthouse cada 2 semanas post-optimización.

---

**Próxima acción recomendada:** Implementar Sprint 1 ahora mismo (30 min).
