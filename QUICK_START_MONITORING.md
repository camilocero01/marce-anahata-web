## 🎯 Quick Start: Monitor Core Web Vitals

### Opción 1: PageSpeed Insights (Más Rápido)

1. **Visita:** https://pagespeed.web.dev/
2. **Ingresa URL:** `https://marceanahata.com`
3. **Click:** "Analyze"
4. **Revisa:**
   - Performance Score (Mobile)
   - Core Web Vitals (LCP, FID, CLS)
   - Field Data vs Lab Data

### Opción 2: Lighthouse Local (Automatizado)

```bash
# 1. Instalar dependencias
npm install

# 2. Ejecutar audit para homepage
npm run lighthouse

# 3. Ejecutar audit para todas las páginas
npm run lighthouse:all

# Los reportes se guardan en: lighthouse-reports/
```

### Opción 3: Chrome DevTools

1. Abre https://marceanahata.com en Chrome
2. F12 → Lighthouse tab
3. Categories: Performance, Accessibility, SEO
4. Device: Mobile
5. Click "Analyze page load"

### Opción 4: Vercel Analytics (Real Users)

1. https://vercel.com/dashboard
2. Selecciona tu proyecto
3. Tab "Analytics" → "Performance"
4. Visualiza Core Web Vitals de usuarios reales

---

## 📊 URLs Prioritarias para Auditar

1. **Homepage:** https://marceanahata.com
2. **Blog:** https://marceanahata.com/blog
3. **Terapia de Sonido:** https://marceanahata.com/terapia-sonido
4. **Clases de Yoga:** https://marceanahata.com/clases
5. **Bienestar Corporativo:** https://marceanahata.com/bienestar-corporativo

---

## ✅ Checklist de Verificación

- [ ] Sitio desplegado en producción
- [ ] PageSpeed Insights ejecutado (Mobile)
- [ ] Lighthouse report generado
- [ ] Scores documentados en tabla
- [ ] Field Data disponible (después de 24h)
- [ ] Vercel Analytics configurado
- [ ] Google Search Console añadido

---

## 🎯 Targets Esperados Post-Optimización

| Metric | Before | Target | Status |
|--------|--------|--------|--------|
| Performance | 60-70 | 90+ | ⏳ |
| LCP | 3-4s | <2.5s | ⏳ |
| CLS | 0.1-0.2 | <0.1 | ⏳ |
| FCP | 2-3s | <1.8s | ⏳ |

---

## 📝 Next Action

**Ejecuta ahora mismo:**

```bash
# Si tienes Lighthouse instalado localmente
npm run lighthouse
```

**O usa PageSpeed Insights:**
👉 https://pagespeed.web.dev/analysis?url=https://marceanahata.com

---

Ver guía completa en: [CORE_WEB_VITALS_MONITORING.md](./CORE_WEB_VITALS_MONITORING.md)
