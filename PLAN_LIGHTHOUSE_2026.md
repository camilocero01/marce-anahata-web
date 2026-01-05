# Plan de Trabajo: Lighthouse Performance Optimization
**Fecha:** 5 de enero, 2026  
**Objetivo:** Alcanzar Performance 90+, Accessibility 95+, SEO 100

---

## 📋 Estado Actual

### ✅ Completado (desde dic 2025)
- Lazy loading en imágenes
- Image optimization (WebP, densities)
- CSS/HTML compression
- Font optimization con font-display: swap
- Static generation (SSG)
- Meta tags completos + JSON-LD schemas
- Sitemap dinámico con exclusiones SEO
- robots.txt y llms.txt configurados
- Skip link y HTML semántico

### ⚠️ Pendiente de Implementación
10 optimizaciones críticas identificadas (ver LIGHTHOUSE_OPTIMIZATION.md)

---

## 🎯 Plan de Implementación (4 Sprints)

### SPRINT 1: Critical Performance (30-45 min) - PRIORIDAD MÁXIMA

**Objetivo:** Mejorar LCP/FCP en 1-2 segundos

#### Tarea 1.1: Preload Critical Resources
**Archivo:** `src/layouts/Layout.astro`

Agregar en `<head>`:
```astro
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link rel="dns-prefetch" href="https://www.googletagmanager.com">
<link rel="preconnect" href="https://www.googletagmanager.com">
```

**Impacto:** +200ms FCP, mejor conexión a CDNs

---

#### Tarea 1.2: Fetchpriority en Hero Images
**Archivos:** 
- `src/pages/index.astro`
- `src/pages/terapia-sonido.astro`
- `src/pages/clases.astro`
- `src/pages/bienestar-corporativo.astro`

**Cambio:** Agregar `fetchpriority="high"` a imagen hero principal:
```astro
<Image 
  src={heroImage} 
  alt="..."
  loading="eager"
  fetchpriority="high"  <!-- NUEVO -->
  width={1920}
  densities={[1.5, 2]}
/>
```

**Impacto:** Prioriza carga de contenido above-the-fold, mejora LCP en 300-500ms

---

#### Tarea 1.3: Optimizar Videos Hero
**Archivos:**
- `src/pages/index.astro` (si usa video)
- `src/pages/terapia-sonido.astro`
- `src/pages/bienestar-corporativo.astro`

**Cambio:** Agregar `preload="metadata"` y `poster`:
```html
<video 
  autoplay 
  muted 
  loop 
  playsinline 
  preload="metadata"  <!-- NUEVO -->
  poster="/images/video-poster.webp"  <!-- NUEVO -->
>
  <source src="/videos/hero.mp4" type="video/mp4" />
</video>
```

**Impacto:** Reduce carga inicial de video, mejora LCP en 1-2s

**Tiempo estimado Sprint 1:** 45 minutos

---

### SPRINT 2: Cache y Recursos (45-60 min)

**Objetivo:** Optimizar carga de recursos estáticos y fuentes

#### Tarea 2.1: Dimensiones Explícitas en Blog Images
**Archivos:**
- `src/pages/blog.astro` (cards)
- `src/pages/blog/[slug].astro` (hero + related)

**Cambio en blog.astro:**
```astro
<!-- En post cards -->
<img 
  src={post.data.image} 
  alt={post.data.title}
  width="400"   <!-- NUEVO -->
  height="300"  <!-- NUEVO -->
  loading="lazy"
/>
```

**Cambio en [slug].astro:**
```astro
<!-- Hero image del post -->
<img 
  src={image} 
  alt={title} 
  width="1200"  <!-- NUEVO -->
  height="630"  <!-- NUEVO -->
  loading="eager" 
/>

<!-- Related posts images -->
<img
  src={rp.data.image}
  alt={rp.data.title}
  width="400"   <!-- NUEVO -->
  height="300"  <!-- NUEVO -->
  loading="lazy"
/>
```

**Impacto:** Elimina CLS (Cumulative Layout Shift), mejora de ~0.15 a <0.05

---

#### Tarea 2.2: Verificar Cache Headers
**Archivo:** `vercel.json`

**Estado:** Ya configurado parcialmente. Verificar que incluya:
```json
{
  "headers": [
    {
      "source": "/_astro/(.*)",
      "headers": [
        { "key": "Cache-Control", "value": "public, max-age=31536000, immutable" }
      ]
    },
    {
      "source": "/(.*)\\.(webp|jpg|jpeg|png|svg|ico)",
      "headers": [
        { "key": "Cache-Control", "value": "public, max-age=604800, must-revalidate" }
      ]
    }
  ]
}
```

**Impacto:** Mejora repeat visitors en 80-90%

**Tiempo estimado Sprint 2:** 60 minutos

---

### SPRINT 3: JavaScript y Interactividad (1-2 horas)

**Objetivo:** Reducir TBT (Total Blocking Time) y mejorar TTI

#### Tarea 3.1: Lazy Load WhatsApp Widget
**Archivo:** `src/layouts/Layout.astro`

**Cambio:** Modificar script del widget para cargar solo al scrollear:
```html
<script is:inline>
  // Lazy load WhatsApp widget
  let waWidgetLoaded = false;
  
  const loadWAWidget = () => {
    if (waWidgetLoaded) return;
    waWidgetLoaded = true;
    
    const waPanel = document.querySelector('[data-wa-panel]');
    if (waPanel) waPanel.classList.remove('hidden');
  };
  
  // Cargar si usuario scrollea 30% de la página
  window.addEventListener('scroll', () => {
    if (window.scrollY > window.innerHeight * 0.3) {
      loadWAWidget();
    }
  }, { once: true, passive: true });
  
  // Fallback: cargar después de 3s si no hay scroll
  setTimeout(loadWAWidget, 3000);
</script>
```

**Impacto:** Reduce TTI en 50-100ms

---

#### Tarea 3.2: Verificar Bundle Size de ReviewsSection
**Archivo:** `src/components/cards/ReviewsSection.astro`

**Acción:**
1. Revisar dependencias (¿usa Swiper u otra librería pesada?)
2. Si usa librería de carousel, considerar reemplazar con CSS scroll-snap nativo
3. Ejecutar build y verificar tamaño del bundle

**Cambio sugerido (si usa Swiper):**
```css
/* Alternativa CSS puro con scroll-snap */
.reviews-container {
  display: flex;
  overflow-x: auto;
  scroll-snap-type: x mandatory;
  gap: 1rem;
}

.review-card {
  scroll-snap-align: start;
  min-width: 300px;
}
```

**Impacto:** Reduce JS bundle de ~82KB a <20KB, mejora TBT en 200-500ms

---

#### Tarea 3.3: Mejorar Accesibilidad del Menú Mobile
**Archivo:** `src/layouts/Layout.astro`

**Cambio en el `<details>` del nav:**
```html
<details class="md:hidden group relative">
  <summary 
    class="cursor-pointer p-2 list-none" 
    aria-label="Abrir menú de navegación"
    aria-expanded="false"
  >
    <!-- SVG menu icon -->
  </summary>
  <nav aria-label="Menú principal mobile">
    <!-- menu items -->
  </nav>
</details>

<script is:inline>
  const summary = document.querySelector('details summary');
  const details = summary?.parentElement;
  
  summary?.addEventListener('toggle', () => {
    const isOpen = details?.hasAttribute('open');
    summary.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
  });
</script>
```

**Impacto:** Mejora Accessibility score de ~85 a ~95

**Tiempo estimado Sprint 3:** 90-120 minutos

---

### SPRINT 4: Inline Critical CSS (Avanzado - 2-3 horas)

**Objetivo:** Eliminar render-blocking CSS

#### Tarea 4.1: Extraer CSS Crítico
**Archivos:** `src/styles/global.css`

**Proceso:**
1. Identificar CSS usado above-the-fold (skip-link, nav, hero)
2. Extraer a archivo separado o inline en Layout
3. Cargar resto del CSS de forma asíncrona

**Implementación:**
```astro
<!-- En Layout.astro <head> -->
<style is:inline>
  /* Critical CSS inline */
  .skip-link { /* ... */ }
  nav { /* ... */ }
  .hero-section { /* ... */ }
  /* Resto del CSS crítico (~5-10KB) */
</style>

<link rel="preload" href="/styles/global.css" as="style" onload="this.onload=null;this.rel='stylesheet'">
<noscript><link rel="stylesheet" href="/styles/global.css"></noscript>
```

**Herramienta recomendada:**
```bash
npm install -D critical
# O usar: https://web.dev/extract-critical-css/
```

**Impacto:** Mejora FCP en 300-600ms, elimina warnings de render-blocking

**Tiempo estimado Sprint 4:** 2-3 horas (opcional, alto impacto técnico)

---

## 🧪 Testing y Validación

### Después de cada Sprint:

1. **Build local:**
   ```bash
   npm run build
   npm run preview
   ```

2. **Lighthouse local:**
   - Abrir Chrome DevTools (F12)
   - Tab "Lighthouse"
   - Seleccionar: Performance + Accessibility + SEO
   - Mode: Navigation (Default)
   - Device: Mobile + Desktop
   - Click "Analyze page load"

3. **Verificar métricas:**
   - LCP < 2.5s
   - CLS < 0.1
   - FID/TBT < 100ms

### Post-Deploy en Producción:

1. **PageSpeed Insights:**
   ```
   https://pagespeed.web.dev/
   URL: https://www.marceanahata.com
   ```

2. **Google Search Console:**
   - Core Web Vitals report
   - Verificar URLs afectadas

3. **Real User Monitoring (opcional):**
   - Vercel Analytics ya instalado (pendiente activar)
   - Verificar métricas reales de usuarios

---

## 📊 Métricas Target

| Métrica | Actual (estimado) | Target | Prioridad |
|---------|-------------------|--------|-----------|
| **Performance Score** | 75-85 | 90+ | 🔴 Alta |
| **Accessibility** | 85-90 | 95+ | 🟡 Media |
| **SEO** | 95-100 | 100 | 🟢 Excelente |
| **LCP** | 2.5-3.5s | <2.5s | 🔴 Alta |
| **CLS** | 0.1-0.2 | <0.1 | 🟡 Media |
| **TBT** | 150-250ms | <150ms | 🟡 Media |

---

## 🚀 Comandos Rápidos

```bash
# Build y preview
npm run build && npm run preview

# Instalar Lighthouse CLI (si no está)
npm install -g lighthouse

# Ejecutar audit local
lighthouse http://localhost:4321/ --view --only-categories=performance,accessibility,seo

# Ejecutar audit en producción
lighthouse https://www.marceanahata.com --view

# Ver tamaño de bundles
npm run build | grep -E "dist|kB"
```

---

## ✅ Checklist de Implementación

### Sprint 1 (Crítico)
- [ ] Preconnect a Google Fonts y GA
- [ ] Fetchpriority="high" en hero images (4 páginas)
- [ ] Preload="metadata" en videos hero (2-3 páginas)
- [ ] Test con Lighthouse local

### Sprint 2 (Importante)
- [ ] Width/height en blog post images
- [ ] Width/height en related posts
- [ ] Verificar cache headers en vercel.json
- [ ] Test CLS < 0.1

### Sprint 3 (Optimización)
- [ ] Lazy load WhatsApp widget
- [ ] Revisar bundle de ReviewsSection
- [ ] Mejorar accesibilidad menú mobile
- [ ] Test Accessibility score

### Sprint 4 (Avanzado - Opcional)
- [ ] Extraer critical CSS
- [ ] Async load de CSS no crítico
- [ ] Test FCP improvement

### Post-Deploy
- [ ] Lighthouse en producción
- [ ] Verificar Core Web Vitals en GSC
- [ ] Activar Vercel Analytics
- [ ] Documentar métricas finales

---

## 📝 Notas Importantes

1. **No romper funcionalidad:** Testear cada cambio antes de commit
2. **Mobile first:** Todas las optimizaciones deben probarse en mobile (throttling 4G)
3. **Incremental:** Implementar sprint por sprint, no todo junto
4. **Medir impacto:** Ejecutar Lighthouse antes y después de cada sprint
5. **Documentar:** Actualizar este documento con métricas reales post-implementación

---

**Próxima acción recomendada:**  
Implementar Sprint 1 (30-45 min) → Build → Lighthouse → Commit → Deploy

**Estimación total:** 4-6 horas de trabajo técnico distribuidas en 4 sprints
