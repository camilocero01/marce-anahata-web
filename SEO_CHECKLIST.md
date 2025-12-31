# SEO & Visibilidad en IA - Checklist de Implementación

## ✅ Implementado

### Técnico SEO
- [x] Meta tags OG/Twitter en layout global
- [x] Meta description única y persuasiva en páginas clave
- [x] Canonical URLs coherentes
- [x] Skip link y accesibilidad básica
- [x] Responsive design (mobile-first)
- [x] Schema JSON-LD:
  - [x] LocalBusiness (negocio local)
  - [x] Organization (entidad general)
  - [x] Article (blog posts)
  - [x] Blog (listado)
  - [x] BreadcrumbList (navegación)
- [x] robots.txt mejorado (permite IA crawlers: GPTBot, Claude, Bingbot)
- [x] sitemap.xml completo con prioridades
- [x] RSS feed (`/rss.xml`)
- [x] Locale es_CO para búsquedas colombianas
- [x] Google Analytics con anonimización

### Contenido
- [x] 5 artículos de blog publicados
- [x] Páginas de servicios principales (clases, terapia, rituales, corporativo)
- [x] Bio y contacto
- [x] Newsletter

---

## 📋 Acciones Pendientes Inmediatas (PRIORIDAD ALTA)

### 1. Google Search Console
**Por qué:** Google necesita verificar la propiedad del sitio antes de indexar.

**Pasos:**
1. Ir a [https://search.google.com/search-console](https://search.google.com/search-console)
2. Agregar propiedad: `https://marceanahata.com`
3. Verificar propiedad (opción recomendada: HTML tag en `<head>` o archivo DNS)
4. Una vez verificado:
   - Enviar sitemap.xml
   - Revisar "Coverage" para verificar indexación
   - Monitorear "Performance" (impresiones, clics, CTR)
   - Revisar "Mobile Usability"

---

### 2. Google My Business (Local SEO)
**Por qué:** Aparecerás en Google Maps y recomendaciones locales.

**Pasos:**
1. Ir a [https://www.google.com/business](https://www.google.com/business)
2. Crear/verificar negocio:
   - Nombre: "Marce Anahata Centro de Bienestar"
   - Categorías: "Wellness Center", "Yoga Instructor", "Meditation Center"
   - Ubicación: Cl. 11A Sur #46-12, Barrio La Aguacatala, Medellín
   - Teléfono: +57 320 732 9921
   - Horarios: L-V 8:00-18:00, S 9:00-13:00, D Cerrado
   - Sitio web: https://marceanahata.com
3. Agregar fotos/videos del espacio
4. Responder reseñas regularmente
5. Publicar actualizaciones/eventos

---

### 3. Lighthouse Audit
**Por qué:** Optimizar performance y Core Web Vitals mejora posicionamiento.

**Pasos (después de build):**
```bash
npm run build
npm run preview
# Luego: DevTools (F12) > Lighthouse > Generate report
```

**Métricas clave a chequear:**
- LCP (Largest Contentful Paint): < 2.5s
- CLS (Cumulative Layout Shift): < 0.1
- FID (First Input Delay): < 100ms
- Accesibilidad: > 90
- SEO: 100

**Acciones comunes:**
- Optimizar imágenes (WebP/AVIF)
- Minificar JS/CSS
- Lazy loading en imágenes no críticas
- Font loading optimization

---

### 4. Expandir Contenido de Blog
**Por qué:** Más contenido de calidad = mejor posicionamiento y más traffic.

**Recomendado escribir:**
1. "Kundalini Yoga vs Yoga tradicional: Diferencias y beneficios" (1500+ palabras)
2. "Estrés laboral en Colombia: Soluciones de bienestar corporativo" (1500+ palabras)
3. "Guía completa: Terapia de sonido para ansiedad y depresión" (1500+ palabras)

**Estructura SEO para blogs:**
- H1 único (palabra clave principal)
- H2/H3 con secundarias
- Párrafos de 100-150 palabras
- Listas y viñetas
- Call-to-action claro
- Meta description: 155 caracteres con CTA
- SEO title: 60 caracteres con palabra clave

---

## 🤖 Visibilidad en IA (ChatGPT, Claude, Perplexity)

### Cómo funcionan:
- **GPTBot**: Respeta `robots.txt`; crawlea públicamente.
- **Claude** (Anthropic): Usa datos de entrenamiento; respeta `robots.txt`.
- **Perplexity/Bing Copilot**: Indexan vía Bing; respetan `robots.txt`.

### Acciones para IA:
- [x] robots.txt permite GPTBot, CCBot, anthropic-ai, Claude-Web
- [ ] Crear página "/about" o "/about-us" con propuesta única (Marce, credenciales, filosofía)
- [ ] Escribir "testimonio de cliente" con historia de transformación
- [ ] Link building: aparecer en directorios locales y blogs de wellness

---

## 🔗 Directorios Locales Recomendados

**Registrarse en (gratuitamente o freemium):**
1. [Jamyo](https://www.jamyo.com) - Directorios de servicios Colombia
2. [Google My Business](https://www.google.com/business) - Local SEO
3. [Yelp](https://www.yelp.com) - Reseñas (si atiendes público general)
4. [TripAdvisor](https://www.tripadvisor.com) - Bienestar y wellness
5. [LinkedIn](https://www.linkedin.com) - Bienestar corporativo B2B

---

## 📊 Monitoreo Continuo

### Herramientas gratuitas:
1. **Google Search Console**: Monitorear indexación y keywords
2. **Google Analytics**: Tráfico, comportamiento, conversiones
3. **Ubersuggest** (freemium): Auditoría SEO, palabras clave
4. **Mobile-Friendly Test**: Verificar responsividad
5. **PageSpeed Insights**: Performance

### Métricas a seguir mensualmente:
- Páginas indexadas
- Impresiones en búsqueda
- Click-through rate (CTR)
- Posición promedio (ranking keywords)
- Tráfico organizado
- Tasa de rebote

---

## 🚀 Próximos Pasos (30 días)

**Semana 1:**
- [ ] Verificar sitio en Google Search Console
- [ ] Crear Google My Business

**Semana 2:**
- [ ] Pasar Lighthouse audit y corregir issues críticos
- [ ] Escribir 1 artículo largo (1500+ palabras)

**Semana 3:**
- [ ] Registrar en 2-3 directorios locales
- [ ] Optimizar imágenes a WebP

**Semana 4:**
- [ ] Revisar performance en GSC
- [ ] Preparar estrategia de contenido Q1 2026

---

## 📞 Información de Contacto

Actualizar en todas las páginas y directorios:
- **Teléfono**: +57 320 732 9921 (WhatsApp)
- **Email**: info@marceanahata.com (crear si no existe)
- **Ubicación**: Cl. 11A Sur #46-12, Barrio La Aguacatala, El Poblado, Medellín
- **Horarios**: L-V 8:00-18:00, S 9:00-13:00, D Cerrado
- **Instagram**: @marce_anahata

---

**Última actualización:** 31 de diciembre de 2025  
**Estado:** Listo para implementación post-build
