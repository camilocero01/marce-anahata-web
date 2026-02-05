# Plan de Limpieza - Google Search Console

## 📋 Resumen del Problema

Google Search Console reporta **URLs fantasma** que fueron descubiertas en versiones anteriores del sitio pero **ya no existen** en el sitemap actual ni en el código.

### Tipos de URLs problemáticas:

1. **URLs duplicadas** (versiones en español de posts que solo existen en inglés)
2. **Páginas de bajo valor SEO** que no deberían indexarse
3. **Archivos duplicados eliminados**

---

## ✅ Correcciones Ya Implementadas

### 1. Código Fuente (Completado)
- ✅ Corregido `src/pages/blog/[slug].astro` para solo servir posts en español
- ✅ Corregido `src/pages/rss.xml.js` para filtrar por idioma
- ✅ Eliminado archivo duplicado `5-tecnica-respiracion-para-dominar-la-anisedad copy.md`
- ✅ Mejorado filtro de sitemap en `astro.config.mjs`

### 2. Robots.txt (Completado)
- ✅ Bloqueadas páginas de bajo valor: `/admin`, `/links`, `/privacidad`
- ✅ Bloqueadas páginas de paginación duplicadas: `/blog/page/1`, `/blog/tag/*/page/1`
- ✅ Bloqueadas versiones en inglés de páginas de bajo valor

### 3. Canonical & Hreflang Tags (Completado)
- ✅ Corregido canonical tag para usar path normalizado sin trailing slashes
- ✅ Hreflang alternates ya estaban correctamente configurados
- ✅ Resuelve "Alternate page with proper canonical tag" warning

---

## 🛠️ Acciones en Google Search Console

### Paso 1: Eliminar URLs Inexistentes (Inmediato)

Google permite solicitar la eliminación de URLs que retornan **404** o **410 Gone**.

**Instrucciones:**

1. **Ir a Google Search Console** → https://search.google.com/search-console
2. **Seleccionar propiedad:** `https://www.marceanahata.com`
3. **Menú lateral:** Eliminaciones → Nueva solicitud
4. **Crear solicitud masiva** para eliminar URLs:

#### URLs a Eliminar (Retornan 404):

**Posts duplicados (versiones en español que no existen):**
```
https://www.marceanahata.com/blog/1-conscious-breathing-wellness/
https://www.marceanahata.com/blog/2-healing-power-sound-therapy/
https://www.marceanahata.com/blog/3-why-we-need-rituals/
https://www.marceanahata.com/blog/5-square-breathing-technique/
https://www.marceanahata.com/blog/8-gong-bath-february-2026/
https://www.marceanahata.com/blog/5-tecnica-respiracion-para-dominar-la-anisedad-copy/
```

**Páginas de paginación duplicadas:**
```
https://www.marceanahata.com/blog/page/1/
https://www.marceanahata.com/en/blog/page/1/
https://www.marceanahata.com/blog/tag/*/page/1/
https://www.marceanahata.com/en/blog/tag/*/page/1/
```

**Nota:** Google elimina las solicitudes en ~24 horas, pero el efecto completo puede tardar 1-2 semanas.

---

### Paso 2: Usar Canonical URLs para Duplicados Legítimos

Para las páginas `/blog/page/1` que son **duplicados legítimos** de `/blog`, asegurar que tienen canonical:

**Verificar en código:**
- ✅ `src/pages/blog.astro` debe tener `<link rel="canonical" href="https://www.marceanahata.com/blog/" />`
- ✅ `src/pages/blog/page/[page].astro` para `page=1` debe redirigir a `/blog` o tener canonical

---

### Paso 3: Actualizar Sitemap en GSC (Inmediato)

1. **Ir a:** Sitemaps en Google Search Console
2. **Eliminar sitemap antiguo** (si existe uno problemático)
3. **Agregar sitemap limpio:**
   ```
   https://www.marceanahata.com/sitemap-index.xml
   ```
4. **Reenviar** para forzar re-crawl

---

### Paso 4: Marcar URLs de Bajo Valor como "Noindex" (Opcional)

Si prefieres que Google **nunca indexe** ciertas páginas:

**Páginas a marcar con noindex:**
- `/admin`
- `/links`
- `/privacidad`
- `/en/links`
- `/en/privacidad`

**Implementación:**

En `src/layouts/Layout.astro`, agregar lógica:

```astro
---
const noindexPages = ['/admin', '/links', '/privacidad', '/en/links', '/en/privacidad'];
const shouldNoindex = noindexPages.some(path => Astro.url.pathname.startsWith(path));
---

<head>
  {shouldNoindex && <meta name="robots" content="noindex, nofollow" />}
  <!-- resto del head -->
</head>
```

---

## 📊 Monitoreo y Validación

### 1. Verificar que URLs no existen (Retornan 404)

Ejecutar en terminal:

```bash
# Verificar URLs problemáticas
$urls = @(
  "https://www.marceanahata.com/blog/1-conscious-breathing-wellness/",
  "https://www.marceanahata.com/blog/2-healing-power-sound-therapy/",
  "https://www.marceanahata.com/blog/5-square-breathing-technique/",
  "https://www.marceanahata.com/blog/5-tecnica-respiracion-para-dominar-la-anisedad-copy/"
)

foreach ($url in $urls) {
  try {
    $response = Invoke-WebRequest -Uri $url -Method Head -ErrorAction Stop
    Write-Host "$url - Status: $($response.StatusCode)" -ForegroundColor Yellow
  } catch {
    Write-Host "$url - Status: 404 ✅" -ForegroundColor Green
  }
}
```

**Resultado esperado:** Todas retornan **404** (no encontradas).

---

### 2. Verificar Sitemap Limpio

```bash
# Descargar sitemap y verificar
curl https://www.marceanahata.com/sitemap-index.xml

# Verificar que NO contiene URLs problemáticas
curl https://www.marceanahata.com/sitemap-0.xml | Select-String "conscious-breathing-wellness"
```

**Resultado esperado:** Solo URLs con prefijo `/en/blog/` para posts en inglés.

---

### 3. Monitorear Google Search Console

**Dashboard → Cobertura:**
- **Semana 1:** Las URLs fantasma aparecerán como "Eliminadas por solicitud"
- **Semana 2-4:** Las URLs fantasma desaparecerán del reporte
- **Mes 1-2:** Google re-crawleará el sitio limpio y actualizará el índice

**Métricas a revisar:**
- **Valid (Válidas):** Debe aumentar (URLs correctas indexadas)
- **Excluded (Excluidas):** Debe aumentar (URLs bloqueadas por robots.txt)
- **Error (Errores):** Debe disminuir a 0
- **Valid with warnings (Válidas con advertencias):** Debe disminuir

---

## 🔗 URLs que SÍ Deberían Indexarse (Whitelist)

Estas URLs **son correctas** y eventualmente deberían indexarse:

**Posts en español:**
```
https://www.marceanahata.com/blog/1-bienestar-respiracion/
https://www.marceanahata.com/blog/2-el-poder-sanador-terapia-sonido/
https://www.marceanahata.com/blog/3-por-que-necesitamos-rituales/
https://www.marceanahata.com/blog/4-yoga-y-meditacion-para-tu-trabajo/
https://www.marceanahata.com/blog/8-bano-de-gong-febrero-2026/
```

**Posts en inglés:**
```
https://www.marceanahata.com/en/blog/1-conscious-breathing-wellness/
https://www.marceanahata.com/en/blog/2-healing-power-sound-therapy/
https://www.marceanahata.com/en/blog/3-why-we-need-rituals/
https://www.marceanahata.com/en/blog/4-yoga-meditation-for-work/
https://www.marceanahata.com/en/blog/5-square-breathing-technique/
https://www.marceanahata.com/en/blog/8-gong-bath-february-2026/
```

**Páginas principales:**
```
https://www.marceanahata.com/
https://www.marceanahata.com/en/
https://www.marceanahata.com/blog/
https://www.marceanahata.com/en/blog/
https://www.marceanahata.com/clases/
https://www.marceanahata.com/terapia-sonido/
https://www.marceanahata.com/rituales/
https://www.marceanahata.com/bienestar-corporativo/
https://www.marceanahata.com/sobre-mi/
```

---

## ⏱️ Timeline Esperado

| Acción | Plazo | Resultado |
|--------|-------|-----------|
| **Deploy cambios a producción** | Inmediato | Sitemap limpio, robots.txt actualizado |
| **Reenviar sitemap en GSC** | +1 día | Google empieza re-crawl |
| **Solicitar eliminaciones en GSC** | +1-2 días | URLs fantasma marcadas para eliminación |
| **Google procesa eliminaciones** | +1 semana | URLs fantasma desaparecen de GSC |
| **Google re-indexa sitio** | +2-4 semanas | URLs correctas indexadas, fantasmas removidas |
| **Estabilización completa** | +1-2 meses | Índice limpio sin advertencias |

---

## 🚨 Troubleshooting

### Problema: "URLs aún aparecen después de 1 semana"

**Solución:**
- Verificar que robots.txt está desplegado: `curl https://www.marceanahata.com/robots.txt`
- Forzar re-crawl en GSC: Inspeccionar URL → Solicitar indexación
- Verificar logs de Vercel para errores 404 (deben retornar correctamente)

### Problema: "Google dice que las URLs existen (200 OK)"

**Solución:**
- Verificar que el código corregido está en producción
- Limpiar caché de Vercel/CDN
- Verificar que no hay redirects 301/302 a las URLs fantasma

### Problema: "Tags con espacios no se bloquean en robots.txt"

**Solución:**
El wildcard `*` en `Disallow: /blog/tag/*/page/1` no funciona en todos los crawlers.

**Alternativa:** Usar `noindex` meta tag en páginas de paginación (ver Paso 4).

---

## 📝 Checklist de Deploy

Antes de hacer push a producción:

- [x] Código corregido (filtros por idioma)
- [x] Archivo duplicado eliminado
- [x] Robots.txt actualizado
- [x] Sitemap config mejorado
- [ ] **Push a GitHub/Vercel**
- [ ] **Verificar deploy exitoso**
- [ ] **Reenviar sitemap en GSC**
- [ ] **Solicitar eliminaciones en GSC**
- [ ] **Monitorear durante 2 semanas**

---

## 🎯 KPIs de Éxito

**Semana 1:**
- ✅ Sitemap limpio desplegado
- ✅ Robots.txt bloqueando páginas de bajo valor
- ✅ Solicitudes de eliminación enviadas a GSC

**Mes 1:**
- ✅ 0 URLs fantasma en "Discovered - not indexed"
- ✅ URLs correctas en "Indexed"
- ✅ Coverage report sin errores

**Mes 2-3:**
- ✅ Tráfico orgánico estable o creciente
- ✅ No hay contenido duplicado en rankings
- ✅ Core Web Vitals saludables (LCP < 2.5s, CLS < 0.1)

---

## 📚 Referencias

- [Google: Remove URLs](https://support.google.com/webmasters/answer/9689846)
- [Google: Sitemaps](https://developers.google.com/search/docs/crawling-indexing/sitemaps/overview)
- [Robots.txt Specification](https://developers.google.com/search/docs/crawling-indexing/robots/robots_txt)
- [Canonical URLs Best Practices](https://developers.google.com/search/docs/crawling-indexing/canonicalization)

---

**Última actualización:** 5 de febrero de 2026  
**Estado:** Listo para deploy y limpieza en GSC
