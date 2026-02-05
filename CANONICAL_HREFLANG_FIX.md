# Solución: "Alternate page with proper canonical tag" en Google Search Console

## 🔴 Problema Identificado

Google Search Console reporta: **"Alternate page with proper canonical tag"** para múltiples páginas:

```
https://www.marceanahata.com/blog (sin trailing slash)
https://www.marceanahata.com/rituales
https://www.marceanahata.com/en/terapia-sonido
https://www.marceanahata.com/clases
https://www.marceanahata.com/en/clases
... y más
```

### Causa Raíz

El canonical tag no normalizaba correctamente las URLs con/sin trailing slash. Google detectaba:
- `/blog` (sin slash) 
- `/blog/` (con slash)

...como dos páginas diferentes, causando confusión sobre cuál es la canónica.

---

## ✅ Correcciones Implementadas

### 1. Canonical Tag Normalizado

**Archivo:** `src/layouts/Layout.astro`

**Cambio:**
```astro
<!-- ANTES (PROBLEMA) -->
<link rel="canonical" href={Astro.url} />

<!-- DESPUÉS (CORREGIDO) -->
<link rel="canonical" href={`${siteUrl}${normalizedPath || '/'}`} />
```

**Explicación:**
- `normalizedPath` ya estaba definido en el código y elimina trailing slashes innecesarios
- Ahora todas las URLs canónicas son consistentes sin slash final
- Google puede identificar correctamente la página principal vs alternativas

### 2. Hreflang Tags (Ya Correcto)

Los hreflang tags ya estaban correctamente configurados:
```astro
<link rel="alternate" hreflang="es-CO" href={resolvedEsUrl} />
<link rel="alternate" hreflang="en" href={resolvedEnUrl} />
<link rel="alternate" hreflang="x-default" href={resolvedEsUrl} />
```

### 3. Sitemap Filter (Ya Corregido)

El filtro de sitemap en `astro.config.mjs` ya fue actualizado anteriormente para incluir trailing slashes.

---

## 📊 Impacto Esperado

| Métrica | Antes | Después |
|---------|-------|---------|
| **Canonical inconsistente** | Sí | No ✅ |
| **Alternate warnings** | Múltiples | 0 ✅ |
| **Google confusión sobre URLs** | Sí | No ✅ |

---

## 🔍 Validación

### URLs Problemáticas Afectadas

Estas páginas ahora tendrán canonical correcto:

**Páginas Principales:**
- ✅ `/blog` → Canonical: `https://www.marceanahata.com/blog`
- ✅ `/rituales` → Canonical: `https://www.marceanahata.com/rituales`
- ✅ `/clases` → Canonical: `https://www.marceanahata.com/clases`
- ✅ `/en/clases` → Canonical: `https://www.marceanahata.com/en/clases`
- ✅ `/en/terapia-sonido` → Canonical: `https://www.marceanahata.com/en/terapia-sonido`

**Páginas de Ritual:**
- ✅ `/en/ritual-cierre-apertura` → Canonical correcto
- ✅ `/en/ritual-cumpleanos` → Canonical correcto
- ✅ `/en/ritual-despedida-soltera` → Canonical correcto

**Páginas de Tags:**
- ✅ `/en/blog/tag/Marce Anahata` → Canonical correcto
- ✅ `/blog/tag/movimiento somático` → Canonical correcto
- ✅ `/blog/tag/ansiedad` → Canonical correcto
- ✅ `/blog/tag/sistema nervioso` → Canonical correcto

---

## 📝 Deploy Status

✅ **Commit:** `fix: resolve canonical tag and hreflang issues for proper alternate page indexing`  
✅ **Push:** Completado a GitHub  
⏳ **Vercel Deploy:** En progreso (~3-5 minutos)

---

## 🎯 Próximos Pasos

### 1. Esperar Deploy en Vercel (3-5 minutos)

Vercel construirá y desplegará automáticamente con los canonical tags corregidos.

### 2. Verificar Canonical Tags

Una vez desplegado, verifica que todas las URLs tengan canonical consistente:

```powershell
# Verificar canonical de página principal
curl https://www.marceanahata.com/blog | Select-String "canonical"
# Resultado esperado: <link rel="canonical" href="https://www.marceanahata.com/blog">

# Verificar página con trailing slash
curl https://www.marceanahata.com/blog/ | Select-String "canonical"  
# Resultado esperado: Mismo canonical (sin slash final)
```

### 3. Revalidar en Google Search Console

1. **Ir a:** https://search.google.com/search-console
2. **Seleccionar propiedad:** `https://www.marceanahata.com`
3. **Ir a:** Experiencia en la Web → Datos de la Web
4. **Buscar URL** (ejemplo: `https://www.marceanahata.com/blog`)
5. **Hacer clic:** "Inspeccionar URL"
6. **Solicitar indexación** para re-rastrear con canonical nuevo

### 4. Monitoreo

**Semana 1:**
- Google debería reconocer las páginas como correctamente configuradas
- El error "Alternate page with proper canonical tag" debería desaparecer
- Las alternativas de idioma serán reconocidas correctamente

**Semana 2-4:**
- Google re-indexará el sitio con canonical correcto
- Las URLs alternativas seguirán siendo descubiertas pero correctamente agrupadas
- Desaparición gradual del warning de GSC

---

## 📚 Referencias Técnicas

### Canonical Tag Correcto

Formato correcto que estamos usando:
```html
<link rel="canonical" href="https://www.marceanahata.com/blog" />
```

**Características:**
- ✅ URL absoluta con protocolo
- ✅ Sin trailing slash (consistente)
- ✅ Única por página
- ✅ Paired con hreflang alternates

### Hreflang Correcto

```html
<!-- Versión en Español -->
<link rel="alternate" hreflang="es-CO" href="https://www.marceanahata.com/blog" />

<!-- Versión en Inglés -->
<link rel="alternate" hreflang="en" href="https://www.marceanahata.com/en/blog" />

<!-- Fallback Default -->
<link rel="alternate" hreflang="x-default" href="https://www.marceanahata.com/blog" />
```

---

## ⚠️ Notas Importantes

1. **Trailing Slashes:** Astro tiene `trailingSlash: 'ignore'`, por lo que `/blog` y `/blog/` son equivalentes. El canonical ahora elimina el trailing slash para consistencia.

2. **Google demora:** Google puede tardar 24-48 horas en re-rastrear y actualizar su índice.

3. **Hreflang + Canonical:** Ambos trabajaban juntos:
   - **Canonical:** Indica la versión principal
   - **Hreflang:** Indica las alternativas de idioma

4. **No hay penalización:** Las páginas no serán penalizadas, solo no indexadas hasta que se resuelva.

---

## ✅ Estado Actual

- [x] Canonical tag corregido
- [x] Commit realizado
- [x] Push a GitHub
- [ ] Vercel deploy completado
- [ ] Validar en GSC
- [ ] Monitorear 2 semanas

---

**Fecha:** 5 de febrero de 2026  
**Prioridad:** MEDIA (No impacta tráfico inmediatamente, pero previene indexación incorrecta)  
**Tiempo hasta resolución:** 1-4 semanas (Google)
