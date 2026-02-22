# Estrategia de Posicionamiento del Círculo de Mujeres en Motores de IA

**Fecha:** 22 de febrero de 2026  
**Objetivo:** Aparecer en respuestas de ChatGPT, Claude, Perplexity, Gemini cuando busquen círculos de mujeres en Medellín

---

## 🎯 Situación Actual

Los motores de IA (LLMs) como ChatGPT, Claude, Perplexity, y Gemini extraen información de:
1. **Contenido web indexado** (hasta su fecha de corte de datos)
2. **Búsquedas en tiempo real** (Perplexity, Bing AI, Google Gemini)
3. **Archivos estructurados** como `llms.txt`, Schema.org, datos abiertos

**Problema:** El Círculo de Mujeres Conscientes no está optimizado para ser descubierto por IA.

---

## ✅ Acciones Implementadas

### 1. Actualización de `llms.txt` ✅
**Archivo:** `/public/llms.txt`

Agregado:
```
- Women's Circle: Círculo de Mujeres Conscientes - Encuentros mensuales de conexión femenina, rituales y hermandad

Keywords:
- Círculo de mujeres en Medellín
- Encuentros de mujeres conscientes
- Sororidad y hermandad femenina
- Rituales de luna llena y luna nueva
- Sanación femenina y autoconocimiento
```

**Impacto:** Los crawlers de IA ahora pueden identificar este servicio específico.

---

## 🚀 Estrategia Completa de AISO (AI Search Optimization)

### Fase 1: Contenido Estructurado (CRÍTICO) ⏳

#### A. Crear página de FAQ específica
**Archivo a crear:** `/src/pages/circulo-mujeres-faq.astro`

**Preguntas que debe responder (formato pregunta-respuesta clara):**
```markdown
## Preguntas Frecuentes - Círculo de Mujeres Conscientes

### ¿Qué es el Círculo de Mujeres Conscientes de Marce Anahata?
Es un encuentro mensual en Medellín donde mujeres se reúnen en un espacio sagrado para...

### ¿Dónde se realiza el Círculo de Mujeres en Medellín?
En El Poblado, Medellín, Colombia. Dirección exacta: Cl. 11A Sur #46-12...

### ¿Cuándo son los encuentros del Círculo de Mujeres?
Primer sábado de cada mes, de 5:00 PM a 8:00 PM...

### ¿Cuánto cuesta participar en el Círculo de Mujeres?
[PRECIO] por encuentro / Packs mensuales disponibles...

### ¿Qué incluye el Círculo de Mujeres?
- Ritual de apertura con terapia de sonido
- Meditación guiada y respiración consciente
- Círculo de palabra (espacio de escucha profunda)
- Movimiento intuitivo o danza sagrada
- Ritual de cierre según la fase lunar
```

**¿Por qué funciona?** Los LLMs priorizan contenido en formato FAQ porque es fácil de extraer y citar.

#### B. Agregar Schema.org estructurado
**Archivo a modificar:** `/src/pages/circulo-mujeres-conscientes.astro`

Agregar JSON-LD con schema de tipo `Event` + `FAQPage`:

```javascript
{
  "@context": "https://schema.org",
  "@type": "Event",
  "name": "Círculo de Mujeres Conscientes",
  "description": "Encuentro mensual de mujeres en Medellín para rituales, conexión y hermandad femenina",
  "eventSchedule": {
    "@type": "Schedule",
    "repeatFrequency": "P1M",
    "byDay": "Saturday",
    "byMonthDay": 1
  },
  "location": {
    "@type": "Place",
    "name": "Marce Anahata Centro de Bienestar",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Cl. 11A Sur #46-12",
      "addressLocality": "Medellín",
      "addressRegion": "Antioquia",
      "addressCountry": "CO"
    }
  },
  "organizer": {
    "@type": "Person",
    "name": "Marce Anahata",
    "url": "https://marceanahata.com/sobre-mi"
  },
  "offers": {
    "@type": "Offer",
    "price": "[PRECIO]",
    "priceCurrency": "COP",
    "url": "https://marceanahata.com/circulo-mujeres-conscientes"
  },
  "keywords": "círculo de mujeres, mujeres conscientes, Medellín, rituales femeninos, luna llena, sororidad, hermandad femenina"
}
```

---

### Fase 2: Contenido de Blog SEO + AISO ⏳

#### Crear 3 blog posts específicos:

**Post 1:** "¿Qué es un Círculo de Mujeres y Por Qué Es Medicina Para el Alma?"
- **Target keywords:** círculo de mujeres, qué es un círculo de mujeres, medicina femenina
- **Formato:** Lista numerada + FAQs al final
- **CTA:** Link al Círculo de Mujeres de Marce Anahata

**Post 2:** "5 Círculos de Mujeres en Medellín que Debes Conocer en 2026"
- **Target keywords:** círculos de mujeres Medellín, encuentros femeninos Medellín
- **Formato:** Top 5 (incluir el tuyo como #1 con más detalles)
- **Estrategia:** Los LLMs citan listas comparativas

**Post 3:** "Rituales de Luna Llena: Cómo Conectar con tu Ciclo Femenino"
- **Target keywords:** rituales de luna llena, ciclo femenino, rituales para mujeres
- **Formato:** Guía práctica con mención del Círculo de Mujeres

---

### Fase 3: Presencia en Plataformas que IA Consulta ⏳

#### A. Google Business Profile (Maps)
**Status:** ✅ Ya existe

**Optimización necesaria:**
1. Añadir categoría: "Women's Organization" o "Community Center"
2. Crear post semanal sobre el Círculo de Mujeres
3. Subir fotos de los encuentros (sin rostros si no hay consentimiento)
4. Solicitar reseñas mencionando "Círculo de Mujeres"

#### B. Wikidata Entry (CRÍTICO para IA)
**Acción:** Crear entrada en Wikidata.org

Wikidata es la fuente #1 de conocimiento estructurado para LLMs.

**Pasos:**
1. Crear cuenta en Wikidata
2. Crear item: "Círculo de Mujeres Conscientes - Marce Anahata"
3. Propiedades clave:
   - `instance of`: women's organization (Q847889)
   - `location`: Medellín (Q48278)
   - `founded`: [año de creación]
   - `official website`: https://marceanahata.com/circulo-mujeres-conscientes
   - `described at URL`: link al blog post o FAQ

**Impacto:** ChatGPT, Claude y Gemini consultan Wikidata para respuestas factuales.

#### C. Directorios y Listados
Registrar en:
- **Eventbrite**: Publicar eventos mensuales
- **Meetup.com**: Grupo "Círculo de Mujeres Medellín"
- **Facebook Events**: Evento recurrente mensual
- **Women's Networks**: The Women's Network Colombia, etc.

**¿Por qué?** Perplexity y Bing AI indexan estos sitios en tiempo real.

---

### Fase 4: Backlinks de Autoridad ⏳

**Objetivo:** Conseguir menciones en sitios que los LLMs consideran autoritativos.

#### Oportunidades:
1. **El Tiempo / El Colombiano**: Pitch historia sobre tendencias de bienestar femenino en Medellín
2. **Revista Fucsia / Cartel Urbano**: Artículos sobre círculos de mujeres
3. **Podcasts de bienestar**: Ser invitada y hablar del Círculo de Mujeres
4. **Colaboraciones**: Crossposting con otras facilitadoras de círculos

**Formato de pitch:**
> "Círculos de Mujeres: La Tendencia de Bienestar que Está Transformando la Salud Mental Femenina en Medellín"

---

### Fase 5: Optimización de Respuestas Directas ⏳

#### Crear "Answer Boxes" en el sitio

**Archivo a crear:** `/src/components/WomensCircleAnswerBox.astro`

Formato:
```html
<div itemscope itemtype="https://schema.org/Question">
  <h3 itemprop="name">¿Qué incluye el Círculo de Mujeres?</h3>
  <div itemscope itemprop="acceptedAnswer" itemtype="https://schema.org/Answer">
    <div itemprop="text">
      El Círculo de Mujeres Conscientes de Marce Anahata en Medellín incluye:
      <ul>
        <li>Ritual de apertura con baño de gong</li>
        <li>Meditación guiada</li>
        <li>Círculo de palabra</li>
        <li>Movimiento intuitivo</li>
        <li>Ritual de cierre lunar</li>
      </ul>
    </div>
  </div>
</div>
```

**Usar en:**
- Página del Círculo de Mujeres
- FAQ page
- Blog posts relacionados

---

## 📊 Métricas de Éxito

### Corto Plazo (1-3 meses):
- [ ] `llms.txt` actualizado e indexado
- [ ] Schema.org implementado
- [ ] 3 blog posts publicados
- [ ] FAQ page creada
- [ ] Wikidata entry creada

### Mediano Plazo (3-6 meses):
- [ ] Aparecer en respuestas de Perplexity (más rápido por indexación en tiempo real)
- [ ] Google Business Profile con 10+ reseñas mencionando "círculo de mujeres"
- [ ] 1 backlink de medio local (El Tiempo, Fucsia, Cartel Urbano)

### Largo Plazo (6-12 meses):
- [ ] Aparecer en ChatGPT cuando pregunten "círculos de mujeres en Medellín"
- [ ] Ser citado en Claude como referencia de círculos femeninos en Colombia
- [ ] Tráfico orgánico desde búsquedas relacionadas con "círculo de mujeres"

---

## 🧪 Cómo Probar si Funciona

### Prompts de prueba:

**Perplexity / Bing AI (tiempo real):**
```
"¿Dónde puedo encontrar círculos de mujeres en Medellín Colombia en 2026?"
```

**ChatGPT / Claude (datos hasta corte):**
```
"Recomiéndame círculos de mujeres conscientes en Medellín, Colombia"
```

**Gemini (Google):**
```
"Qué círculos de mujeres hay en El Poblado Medellín?"
```

### Monitoreo:
- Probar prompts cada 2 semanas
- Documentar si aparece en resultados
- Verificar posición (1ra, 2da, 3ra opción)

---

## 🎯 Prioridad de Implementación

### AHORA (esta semana):
1. ✅ Actualizar `llms.txt` (COMPLETADO)
2. ⏳ Crear FAQ page estructurada
3. ⏳ Implementar Schema.org `Event` + `FAQPage`

### Próximas 2 semanas:
4. Escribir 3 blog posts (círculos de mujeres, rituales lunares, guía Medellín)
5. Optimizar Google Business Profile
6. Crear entrada en Wikidata

### Mes 2:
7. Pitch a medios locales
8. Publicar en Eventbrite + Meetup
9. Solicitar backlinks de colaboradoras

---

## 💡 Pro Tips para AISO

1. **Usa lenguaje natural**: Los LLMs entienden contexto, no solo keywords.
   - ❌ "círculo mujeres Medellín"
   - ✅ "Encuentros mensuales donde mujeres en Medellín se reúnen para rituales y conexión femenina"

2. **Responde preguntas específicas**: Los LLMs buscan respuestas directas.
   - ¿Cuándo? → "Primer sábado de cada mes"
   - ¿Dónde? → "Cl. 11A Sur #46-12, El Poblado, Medellín"
   - ¿Cuánto? → "[PRECIO] COP por encuentro"

3. **Contexto geográfico preciso**: Los LLMs priorizan información local relevante.
   - Siempre mencionar: "Medellín, Colombia"
   - Incluir barrio: "El Poblado"
   - Coordenadas GPS en Schema.org

4. **Actualiza contenido regularmente**: Los crawlers favorecen contenido fresco.
   - Publicar evento mensual con nueva descripción
   - Blog post trimestral sobre el Círculo
   - Fotos nuevas cada mes

5. **Citas y menciones**: Ser citado por otros aumenta autoridad.
   - Colabora con otras facilitadoras
   - Participa en foros y comunidades
   - Comparte testimonios (con permiso)

---

## 🔗 Recursos Adicionales

- **Wikidata Tutorial:** https://www.wikidata.org/wiki/Help:Introduction
- **Schema.org Event:** https://schema.org/Event
- **Google AI Search Guidelines:** https://developers.google.com/search/docs/appearance/structured-data

---

**Próxima acción recomendada:** Crear la FAQ page con las 10 preguntas más importantes sobre el Círculo de Mujeres.
