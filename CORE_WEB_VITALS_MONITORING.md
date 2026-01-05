# Core Web Vitals Monitoring Guide

## 🎯 Objetivos de Rendimiento

### Métricas Target (Good)
- **LCP (Largest Contentful Paint)**: < 2.5s
- **FID (First Input Delay)**: < 100ms
- **CLS (Cumulative Layout Shift)**: < 0.1
- **FCP (First Contentful Paint)**: < 1.8s
- **TTI (Time to Interactive)**: < 3.8s
- **TBT (Total Blocking Time)**: < 200ms

## 📊 Herramientas de Medición

### 1. PageSpeed Insights (Recomendado)
```
URL: https://pagespeed.web.dev/
Analiza: https://marceanahata.com
```

**Qué medir:**
- Performance Score (Mobile & Desktop)
- Core Web Vitals (LCP, FID, CLS)
- Field Data (datos reales de usuarios)
- Lab Data (datos sintéticos de prueba)

### 2. Lighthouse (Chrome DevTools)
```bash
# Opción 1: Chrome DevTools
1. Abre Chrome
2. F12 → Lighthouse tab
3. Select: Performance + Mobile
4. Generate report

# Opción 2: CLI
npm install -g lighthouse
lighthouse https://marceanahata.com --view
```

### 3. WebPageTest
```
URL: https://www.webpagetest.org/
Test URL: https://marceanahata.com
Location: Bogotá, Colombia (closest to target audience)
Connection: 4G LTE
```

### 4. Vercel Analytics (Real User Monitoring)
**Ya instalado en tu proyecto:**
- Dashboard: https://vercel.com/[tu-proyecto]/analytics
- Métricas en tiempo real de usuarios reales
- Core Web Vitals por página
- Datos de performance por país/dispositivo

## 🚀 Pasos para Medir Mejoras

### Paso 1: Baseline (Antes de Sprints)
```bash
# Tomar mediciones antes de optimizaciones
1. PageSpeed Insights → Guardar PDF
2. Lighthouse → Exportar JSON/HTML
3. Anotar scores en tabla comparativa
```

### Paso 2: Deploy a Producción
```bash
# Desde el proyecto
git add .
git commit -m "feat: Lighthouse optimizations Sprints 1-3"
git push origin main

# Vercel deployará automáticamente
# Espera ~2 minutos para deployment
```

### Paso 3: Post-Sprint Measurements
```bash
# Esperar 5 minutos después del deploy
# Ejecutar las mismas herramientas
# Comparar métricas
```

## 📈 Tabla de Comparación

| Métrica | Baseline | Sprint 1 | Sprint 2 | Sprint 3 | Target |
|---------|----------|----------|----------|----------|--------|
| **Performance Score** | ? | ? | ? | ? | 90+ |
| **LCP** | ? | ? | ? | ? | <2.5s |
| **FID** | ? | ? | ? | ? | <100ms |
| **CLS** | ? | ? | ? | ? | <0.1 |
| **FCP** | ? | ? | ? | ? | <1.8s |
| **TTI** | ? | ? | ? | ? | <3.8s |
| **TBT** | ? | ? | ? | ? | <200ms |

## 🔍 Optimizaciones Implementadas

### ✅ Sprint 1: Preconnect & Resource Prioritization
- Preconnect a Google Analytics
- DNS-prefetch para recursos externos
- `fetchpriority="high"` en imágenes hero
- `preload="metadata"` en videos
- **Impacto esperado:** LCP -300ms, FCP -200ms

### ✅ Sprint 2: Image Optimization
- `width` y `height` en todas las imágenes del blog
- Eliminación de CLS (Cumulative Layout Shift)
- Cache headers optimizados (1 año assets, 7 días imágenes)
- **Impacto esperado:** CLS <0.05, Performance Score +10-15

### ✅ Sprint 3: Lazy Loading & Accessibility
- Lazy-load WhatsApp widget (30% scroll o 3s timeout)
- Mejoras de accesibilidad (aria-expanded, aria-label)
- Script optimization para interactividad
- **Impacto esperado:** TTI -100ms, Accessibility Score +5-10

## 🎯 Comandos Rápidos de Medición

### Lighthouse CLI (Múltiples URLs)
```bash
# Homepage
lighthouse https://marceanahata.com --output html --output-path=./reports/home.html

# Blog
lighthouse https://marceanahata.com/blog --output html --output-path=./reports/blog.html

# Servicios
lighthouse https://marceanahata.com/terapia-sonido --output html --output-path=./reports/terapia.html
lighthouse https://marceanahata.com/clases --output html --output-path=./reports/clases.html
```

### Análisis de Bundle Size
```bash
npm run build

# Ver tamaño de archivos generados
ls -lh dist/_astro/

# Tamaño total
du -sh dist/
```

## 🔧 Google Search Console Setup

1. **Añadir propiedad:**
   - URL: https://search.google.com/search-console
   - Añadir propiedad → Dominio o URL
   - Verificar con DNS o archivo HTML

2. **Core Web Vitals Report:**
   - Experiencia → Core Web Vitals
   - Ver URLs con problemas
   - Monitoreo mensual automático

3. **Alertas:**
   - Configurar notificaciones para:
     - Problemas de Core Web Vitals
     - Errores de indexación
     - Penalizaciones de rendimiento

## 📱 Mobile Performance Testing

### Chrome DevTools Device Mode
```bash
1. F12 → Toggle Device Toolbar (Ctrl+Shift+M)
2. Select: iPhone 12 Pro / Samsung Galaxy S20
3. Network: Fast 4G
4. Run Lighthouse with Mobile preset
```

### Real Device Testing (Recomendado)
- **Android:** Chrome Remote Debugging
- **iOS:** Safari Web Inspector con iPhone físico
- **Herramienta:** BrowserStack (https://www.browserstack.com/)

## 📊 Vercel Analytics Dashboard

### Acceder a métricas:
```bash
1. https://vercel.com/dashboard
2. Select: marce-anahata-web
3. Analytics tab
4. Filtrar por:
   - Time range (últimos 7 días)
   - Device (Mobile vs Desktop)
   - Country (Colombia)
   - Page (comparar páginas)
```

### Métricas clave en Vercel:
- **Real User Monitoring (RUM)**
- Core Web Vitals por página
- Performance score distribution
- Error tracking
- Page load times

## 🎨 Visual Comparison Tools

### 1. Filmstrip Comparison
```
WebPageTest → Advanced Settings → Visual Comparison
Compare: Before vs After optimization
```

### 2. Screenshots de Lighthouse
Lighthouse genera screenshots del proceso de carga:
- First Contentful Paint
- Largest Contentful Paint
- Speed Index frames

## ⚠️ Notas Importantes

### 1. Variabilidad de Métricas
- Ejecutar mínimo 3 tests y promediar
- Factores que afectan: red, servidor, caché, hora del día
- Field Data (usuarios reales) más confiable que Lab Data

### 2. Priorizar Field Data
- Google usa Field Data para ranking
- Vercel Analytics muestra datos reales
- PageSpeed Insights muestra ambos

### 3. Mobile First
- 80%+ tráfico es mobile en Colombia
- Optimizar primero para mobile
- Desktop generalmente tiene scores más altos

## 🚦 Acción Siguiente

1. **Desplegar a producción** (si no está ya)
2. **Esperar 24h** para acumular Field Data
3. **Ejecutar PageSpeed Insights** en:
   - https://marceanahata.com
   - https://marceanahata.com/blog
   - https://marceanahata.com/terapia-sonido
4. **Documentar resultados** en la tabla de comparación
5. **Compartir screenshots** del before/after

## 📝 Template de Reporte

```markdown
## Performance Audit Report - [Fecha]

### URLs Tested:
- Homepage: https://marceanahata.com
- Blog: https://marceanahata.com/blog
- Terapia: https://marceanahata.com/terapia-sonido

### Results (Mobile):

#### Homepage
- Performance: [score]/100
- LCP: [time]s
- FID: [time]ms
- CLS: [score]

#### Insights:
- ✅ Improvements: [lista]
- ⚠️ Opportunities: [lista]
- 🔴 Issues: [lista]

### Next Steps:
1. [acción]
2. [acción]
```

## 🎯 Performance Budget

Establece límites para mantener performance:

| Resource | Budget | Current | Status |
|----------|--------|---------|--------|
| Total JS | < 200 KB | ~84 KB | ✅ |
| Total CSS | < 50 KB | ~8 KB | ✅ |
| Total Images | < 1.5 MB | TBD | ⏳ |
| Page Load | < 3s | TBD | ⏳ |
| TTI | < 4s | TBD | ⏳ |

## 🔗 Recursos Útiles

- [Web Vitals Extension](https://chrome.google.com/webstore/detail/web-vitals/ahfhijdlegdabablpippeagghigmibma)
- [Core Web Vitals Guide](https://web.dev/vitals/)
- [Lighthouse Scoring Calculator](https://googlechrome.github.io/lighthouse/scorecalc/)
- [PageSpeed Insights API](https://developers.google.com/speed/docs/insights/v5/get-started)
