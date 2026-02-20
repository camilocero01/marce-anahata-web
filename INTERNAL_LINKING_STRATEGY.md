# Estrategia de Internal Linking Mejorada - Marce Anahata

## 📋 Estructura de Silos Temáticos

### Silo 1: KUNDALINI YOGA
**Página Principal:** `/clases`
- Blog posts relacionados:
  - `1-bienestar-respiracion.md` → Link en Clases
  - Posts sobre kundalini yoga (cuando existan)
- Cross-links: Terapia de Sonido (complementaria)
- CTA: "Descubre cómo el sonido mejora tu práctica" → Terapia de Sonido

### Silo 2: TERAPIA DE SONIDO  
**Página Principal:** `/terapia-sonido`
- Blog posts relacionados:
  - `1-bienestar-respiracion.md` → Link en Terapia de Sonido
  - Posts sobre sonido y vibración (cuando existan)
- Cross-links: Clases de Yoga (complementaria)
- CTA: "Profundiza con una clase de yoga" → Clases

### Silo 3: RITUALES SAGRADOS
**Página Principal:** `/rituales`
- Rituales específicos:
  - `/ritual-cumpleanos`
  - `/ritual-pareja`
  - `/ritual-despedida-soltera`
  - `/ritual-cierre-apertura`
  - `/ritual-baby-blessing`
- Blog posts sobre rituales
- CTA cruzadas entre rituales relacionados

### Silo 4: BIENESTAR CORPORATIVO
**Página Principal:** `/bienestar-corporativo`
- Programas de empresa
- Link a Terapia de Sonido (para grupos)
- Link a Clases de Yoga (team building)

### Silo 5: CÍRCULO DE MUJERES
**Página Principal:** `/circulo-mujeres-conscientes`
- Blog posts sobre sanación femenina
- Link a Rituales (rituales para mujeres)
- Link a Terapia de Sonido

### Silo 6: SOBRE MÍ & CREDIBILIDAD
**Página Principal:** `/sobre-mi`
- Link a todos los servicios desde contexto de formación
- Blog posts de autoridad
- Link a FAQ (preguntas sobre Marce)

## 🎯 Estrategia de Links en Blog Posts

### Post: `1-bienestar-respiracion.md`
**Anchor texts a usar:**

1. **Hacia Clases de Yoga:**
   - "clases de Kundalini Yoga" → `/clases`
   - "práctica de yoga" → `/clases`
   - "técnicas avanzadas de respiración" → `/clases`

2. **Hacia Terapia de Sonido:**
   - "terapia sonora" → `/terapia-sonido`
   - "medicina vibracional" → `/terapia-sonido`
   - "herramientas holísticas" → `/terapia-sonido`

3. **Hacia Bienestar Corporativo:**
   - "bienestar en el trabajo" → `/bienestar-corporativo`
   - "programas de bienestar empresarial" → `/bienestar-corporativo`

4. **Hacia Sobre-mi:**
   - "Mi certificación" → `/sobre-mi#Formación`
   - "Mi formación" → `/sobre-mi`

### Estructura de Links en Cada Página:

#### 1. Hero/Intro Section
- Link a página principal del silo

#### 2. Body Content
- Links contextuales a pages complementarias (2-3 máximo)
- Anchor texts descriptivos (NO "click aquí")

#### 3. CTA Section (final)
- Link a servicio complementario
- Link a blog post más profundo
- Link a contact/WhatsApp

#### 4. Footer Related Services
- 3-4 links a servicios relacionados

## 🔗 Links Específicos a Implementar

### En `/terapia-sonido.astro`
```
- Enlace a Clases: "combina con una clase de yoga" 
- Enlace a Bienestar Corporativo: "para equipos corporativos"
- Enlace a Blog: "artículos sobre terapia de sonido"
```

### En `/clases.astro`
```
- Enlace a Terapia de Sonido: "complementa con terapia sonora"
- Enlace a Sobre-mi: "conoce mi formación"
- Enlace a Blog post respiración: "técnicas de respiración consciente"
```

### En `/rituales.astro`
```
- Enlace a rituales específicos
- Enlace a Terapia de Sonido: "sanación vibracional en rituales"
- Enlace a Círculo de Mujeres: "espacios sagrados para mujeres"
```

### En `/sobre-mi.astro`
```
- Enlace a Clases: desde sección de Kundalini Yoga
- Enlace a Terapia de Sonido: desde sección de formación
- Enlace a Bienestar Corporativo: desde promesa/servicios
- Enlace a FAQ: "preguntas frecuentes sobre mí"
```

### En `/blog.astro` (listado)
```
- Tags/categorías: Yoga, Sonido, Rituales, Bienestar
- Links en cards: "Leer más" con anchor coherente
- Link en intro: "Descubre nuestros servicios" → servicios
```

### En `/index.astro` (homepage)
```
- Sección Servicios: enlaces ya existentes
- Sección Blog: "Ver todos los artículos" → /blog
- Sección Testimonios: link a "Conocer formación" → /sobre-mi
- CTA final: "¿Preguntas?" → /faq
```

## 📊 Estructura de Anchor Texts (SEO Best Practice)

### Branded (15%)
- "Marce Anahata"
- "Mi sitio web"

### Partial Match (35%)  
- "kundalini yoga en Medellín"
- "terapia de sonido certificada"
- "rituales sagrados"

### Exact Match (5%)
- "terapia de sonido" 
- "kundalini yoga"
- (Usar con moderación)

### LSI Keywords (30%)
- "clases de yoga"
- "medicina vibracional"
- "bienestar integral"
- "sanación holística"

### Natural/Contextual (15%)
- "aquí"
- "descubre"
- "aprende más"

## 🎯 Métricas de Éxito

Después de 1 mes de implementación, medir:
- ✅ Pages con >3 internal links incoming
- ✅ Blog posts con 2+ links a servicios
- ✅ Servicios con 2+ links entre ellos
- ✅ Reducción de bounce rate en pages clave
- ✅ Aumento de páginas por sesión (avg >2.5)

## 🚀 Implementación Prioridad

### ALTA PRIORIDAD (Inmediato)
1. Links en `1-bienestar-respiracion.md` (post viral)
2. Links cruzados Terapia ↔ Clases
3. Links en Sobre-mi → Servicios

### MEDIA PRIORIDAD (Esta semana)
4. Links en otros blog posts
5. Links en páginas de rituales
6. Actualizar homepage con links contextuales

### BAJA PRIORIDAD (Próximas semanas)
7. Links en páginas de soporte (FAQ, Privacidad)
8. Crear hub de recursos
9. Implementar "Related Posts" en blog

---

**Nota:** Evitar spam de links. Máximo 3-4 links internos relevantes por página, siempre contextuales y naturales.
