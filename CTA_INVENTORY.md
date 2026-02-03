# Inventario Completo de CTAs - Marce Anahata Web

**Fecha:** 3 de Febrero de 2026  
**Propósito:** Identificar rápidamente desde qué página/sección los usuarios te están contactando  
**Total de CTAs:** 50+ botones rastreables

---

## 📊 Resumen por Sección

| Sección | CTAs WhatsApp | CTAs Pricing | CTAs Otros | Total |
|---------|---------------|--------------|-----------|-------|
| Homepage | 1 | - | - | 1 |
| Kundalini Yoga | 4 | 1 | - | 5 |
| Terapia de Sonido | 2 | 1 | - | 3 |
| Rituales (5 tipos) | 10 | 5 | - | 15 |
| Bienestar Corporativo | 2 | 1 | - | 3 |
| Círculo Mujeres | 3 | - | - | 3 |
| Sobre Mí | 1 | - | - | 1 |
| Tarifas/Pricing | 1 | - | - | 1 |
| Contacto | 1 | - | 1 Instagram | 2 |
| FAQ | 16 | - | - | 16 |
| Global (Nav/Footer) | - | 3 | 1 WhatsApp | 4 |
| **TOTAL ESPAÑOL** | **41** | **11** | **1** | **53** |
| **TOTAL ENGLISH** | Similar | Similar | Similar | ~53 |
| **GRAN TOTAL** | **~82-90** | **~22** | **~2** | **~106** |

---

## 🎯 CTAs Rastreable por Página

### 🏠 HOMEPAGE (index.astro)

#### WhatsApp CTA
```
Ubicación: Hero/Banner Principal
Label GA4: "Homepage - Main CTA" (si aplica)
Texto: Variable (default)
Análisis: Primer punto de contacto para nuevos visitantes
```

---

### 🧘‍♀️ KUNDALINI YOGA / CLASES

#### clases.astro (ES)
```
1️⃣ HERO SECTION
   Label: "Yoga Classes - Hero CTA"
   Texto: "Reservar Ahora"
   Mensaje WhatsApp: "Hola Marce Anahata, estoy interesad@ en tus clases de Kundalini Yoga..."

2️⃣ OFFER CARDS (3 opciones)
   - Clases Grupales Regulares
     Label: "Classes - Regular Groups CTA"
     Texto: "Reservar Ahora"
     
   - Sesiones Privadas Personalizadas
     Label: "Classes - Private Sessions CTA"
     Texto: "Agendar Sesión"
     
   - Talleres Temáticos
     Label: "Classes - Workshops CTA"
     Texto: "Consultar"

3️⃣ SCHEDULE SECTION
   Label: "Classes - Schedule Questions CTA"
   Texto: "Consultar por WhatsApp"
   
4️⃣ FINAL CTA
   Label: "Classes - Final CTA"
   Texto: "Reservar Mi Clase"

📊 PRICING LINK
   Label: "Nav - Pricing Link" (si viene del nav)

⏱️ ANÁLISIS: Clases es página HIGH INTENT - múltiples CTAs = usuarios listos para agendar
```

#### en/clases.astro (EN)
```
Mismo patrón que ES con textos en inglés
```

---

### 🎵 TERAPIA DE SONIDO

#### terapia-sonido.astro (ES)
```
1️⃣ HERO CTA
   Label: "Sound Therapy - Hero CTA"
   Texto: "Agendar Sesión"

2️⃣ FINAL CTA
   Label: "Sound Therapy - Final CTA"
   Texto: "Reservar Mi Sesión"

📊 PRICING LINK
   Label: "Nav - Pricing Link"

⏱️ ANÁLISIS: 2 CTAs bien posicionados
```

#### en/terapia-sonido.astro (EN)
```
Mismo patrón en inglés
```

---

### 🎉 RITUALES SAGRADOS (5 tipos × 2 idiomas = 10 páginas)

#### ritual-cumpleanos.astro (Español)
```
1️⃣ HERO CTA
   Label: "Birthday Ritual - Hero CTA"
   Texto: "Reservar mi Celebración"
   Mensaje: "Hola Marce Anahata, ¡es mi cumpleaños pronto!..."

2️⃣ FINAL CTA
   Label: "Birthday Ritual CTA Final"
   Texto: "Agendar mi Ritual de Cumpleaños"

📊 PRICING LINK (en Verde)
   Label: "Birthday Ritual - Pricing Link"
   Texto: "Ver Precios"
   Destino: /tarifas#rituales

⏱️ NOTA: Usuarios que ven detalles del ritual + precios = MUY CALIFICADOS
```

**CTAs similares para:**
- ritual-pareja.astro (Couple Rituals)
- ritual-despedida-soltera.astro (Bachelorette)
- ritual-cierre-apertura.astro (Cycle Closure)
- ritual-baby-blessing.astro (Baby Blessings)

**Versiones en English (en/):**
- en/ritual-cumpleaños.astro
- en/ritual-pareja.astro
- en/ritual-despedida-soltera.astro
- en/ritual-cierre-apertura.astro
- en/ritual-baby-blessing.astro

**📊 ANÁLISIS RITUALES:**
- Cada ritual tiene 2 CTAs WhatsApp = múltiples oportunidades
- Pricing link muestra interés en costos = decision stage
- Data label específico por ritual = tracking granular

---

### 🏢 BIENESTAR CORPORATIVO

#### bienestar-corporativo.astro (ES)
```
1️⃣ HERO CTA
   Label: "Corporate Wellness - Hero CTA"
   Texto: "Solicitar Cotización"

2️⃣ FINAL CTA
   Label: "Corporate Wellness - Final CTA"
   Texto: "Agendar Consulta"

📊 PRICING LINK
   Label: "Nav - Pricing Link"

⏱️ ANÁLISIS: Decisión B2B = leads de alto valor
```

#### en/bienestar-corporativo.astro (EN)
```
Mismo patrón en inglés
```

---

### 👩‍🤝‍👩 CÍRCULO MUJERES CONSCIENTES

#### circulo-mujeres-conscientes.astro (ES)
```
1️⃣ HERO CTA
   Label: "Women's Circle - Hero CTA"
   Texto: "Reservar Mi Lugar"

2️⃣ BENEFITS SECTION CTA
   Label: "Women's Circle - Reserve Spot CTA"
   Texto: "Quiero Ser Parte"

3️⃣ FINAL CTA
   Label: "Women's Circle - Final CTA"
   Texto: "Agendar Consulta"

⏱️ ANÁLISIS: 3 CTAs = usuarios explorando comunidad
```

#### en/circulo-mujeres-conscientes.astro (EN)
```
Mismo patrón en inglés
```

---

### 👋 SOBRE MÍ

#### sobre-mi.astro (ES)
```
1️⃣ SINGLE CTA (al final)
   Label: "About Page - Let's Talk CTA"
   Texto: "Hablemos"
   
⏱️ ANÁLISIS: CTA único, late en page = usuario muy interesado
```

#### en/sobre-mi.astro (EN)
```
Mismo en inglés
```

---

### 💰 TARIFAS / PRICING

#### tarifas.astro (ES)
```
1️⃣ FINAL CTA
   Label: "Pricing Page - Final CTA"
   Texto: "Contáctame por WhatsApp"
   Ubicación: Debajo de todas las tarifas
   
📊 CONTEXTO: Usuario revisó TODOS los precios = decisión casi tomada

⏱️ ANÁLISIS: MUY CALIFICADO - visitó tarifas completas
```

#### en/tarifas.astro (EN)
```
Label: "EN Pricing Page - Final CTA"
```

---

### 📞 CONTACTO

#### contacto.astro (ES)
```
1️⃣ DIRECT WhatsApp LINK
   Label: "Contact Page - Direct WhatsApp"
   Sección: Información de contacto
   Texto: "Escríbeme para agendar"
   
2️⃣ EMAIL LINK
   Label: (sin tracking actualmente)
   Tipo: mailto:
   
3️⃣ INSTAGRAM LINK
   Label: "Instagram" (data-event: external_link)
   Tipo: social_media

⏱️ ANÁLISIS: Contacto directo = usuario SABE lo que quiere
```

#### en/contacto.astro (EN)
```
English version con textos adaptados
```

---

### ❓ FAQ (Preguntas Frecuentes)

#### faq.astro (ES)
```
16 ACCORDION ITEMS (data-event="faq_open")

Labels (primeras 50 caracteres de pregunta):
1. "¿Qué es el Kundalini Yoga y para quié"
2. "¿Necesito experiencia previa para asist"
3. "¿Qué debo llevar a mi primera clase d"
4. "¿Qué es la Terapia de Sonido y cómo f"
5. "¿Cuánto dura una sesión de Terapia de"
6. "¿Qué es un Baño de Gong?"
7. "¿Qué son los Rituales Sagrados y cuán"
8. "¿Puedo personalizar un Ritual para una"
9. "¿Qué incluye el servicio de Bienestar"
10. "¿Cuántas personas pueden asistir a un"
11. "¿Ofrecen clases online o solo presenc"
12. "¿Cuál es el costo de las clases y ses"
13. "¿Cómo puedo agendar una cita o reserv"
14. "¿Dónde están ubicados y tienen parque"
15. "¿Puedo asistir si estoy embarazada?"
16. "¿Qué métodos de pago aceptan?"

⏱️ ANÁLISIS: FAQ tracker = objeciones comunes, intent = consideration
```

#### en/faq.astro (EN)
```
16 items en inglés
```

---

### 🌍 GLOBAL - NAVBAR & FOOTER (Layout.astro)

#### Desktop Navbar
```
1️⃣ Dropdown "Nosotros > Precios"
   Label: "Nav - Pricing Link"
   
2️⃣ Mobile Menu "Precios"
   Label: "Mobile Menu - Pricing Link"
   
3️⃣ Footer "Contáctanos"
   Label: "Footer - Contact Link" (si existe)
```

#### Footer
```
1️⃣ WhatsApp Icon
   Tipo: Direct WhatsApp link
   
2️⃣ Phone Link
   Tipo: tel:+573207329921
   
3️⃣ Contact Link
   Label: /contacto
```

#### Fixed WhatsApp Widget (Desktop only)
```
📱 FLOATING BUTTON
   Ubicación: Bottom-right (latency-loaded)
   Default Message: "Hola Marce Anahata, estaba visitando tu sitio..."
   
⏱️ ANÁLISIS: Siempre disponible = acceso fácil desde ANY página
```

---

## 🔍 Cómo Interpretar GA4 Data

### Ejemplo 1: Usuario contacta desde Clases
```
GA4 Event: whatsapp_cta_click
event_label: "Classes - Final CTA"
page_path: /clases

✅ INSIGHT: Usuario visitó clases, vio todas las opciones, click en final CTA
→ Persona type: Buscador de yoga presencial
→ Próxima acción: Ofrecer trial class o combo plan
```

### Ejemplo 2: Usuario contacta desde Rituales + Precios
```
Sequence:
1. whatsapp_cta_click (page_path: /ritual-cumpleanos)
2. pricing_page_click (page_path: /ritual-cumpleanos, label: "...Pricing Link")
3. whatsapp_cta_click (page_path: /tarifas, label: "Pricing Page - Final CTA")

✅ INSIGHT: Usuario exploró ritual → vio precios → contactó desde tarifas
→ Persona type: Price-conscious, considering specific service
→ Próxima acción: Enviar paquete personalizado
```

### Ejemplo 3: Newsletter → Multiple CTAs
```
GA4 Events:
1. newsletter_signup (page_path: /index) → Lead captured
2. Luego: whatsapp_cta_click (page_path: /terapia-sonido)

✅ INSIGHT: Newsletter subscriber visitó Sound Therapy
→ Persona type: Warm lead, interesado en bienestar integral
→ Próxima acción: Email secuencia sobre sound therapy
```

---

## 📈 Análisis de Intención por CTA

### 🟢 HIGH INTENT (Usuario listo para agendar)
- Final CTAs en cualquier página
- Pricing Page CTAs
- Contact Page WhatsApp
- CTAs después de revisar 2+ secciones

**Acción recomendada:** Respuesta <2 horas con opciones de disponibilidad

### 🟡 MEDIUM INTENT (Usuario considerando)
- Hero CTAs
- FAQ acordeones abiertos
- Pricing links
- Newsletter signups

**Acción recomendada:** Email de follow-up con detalles/testimonios

### 🔴 LOW INTENT (Usuario informándose)
- Language switcher
- Scroll depth tracking
- Gallery views
- Primera visita a página de servicio

**Acción recomendada:** Retargeting ads, email nurture

---

## 🎯 CTAs por Idioma

### ESPAÑOL (ES)
- Total: ~53 CTAs
- Distribución: 41 WhatsApp + 11 Pricing + 1 Social

### ENGLISH (EN)
- Total: ~53 CTAs  
- Distribución: Similar a ES
- Rutas: /en/[page]

### ✨ Pro Tip
Cuando recibas mensaje WhatsApp, pregunta:
**"¿De qué página viniste?"** → Correlaciona con GA4 data_label

---

## 📊 Dashboard GA4 Recomendado

### Report 1: CTA Performance por Página
```
Dimension: event_label
Metric: event_count
Filter: event_name = whatsapp_cta_click

Resultado: Top CTAs por conversión
```

### Report 2: Conversion Funnel
```
1. Page view
2. FAQ open (consideration)
3. Pricing click
4. WhatsApp CTA click
5. (Offline: Conversion en WhatsApp)
```

### Report 3: Scroll Depth + Final CTA
```
Correlaciona:
- Usuarios que scrollean 100%
- Con click en final CTA
- Por página

Insight: Highly engaged users convert better
```

---

## 🔧 Cambios Futuros

Si agregas nuevas páginas:
1. Agrega `data-event="whatsapp_click"` a nuevos CTAs
2. Crea unique `data-label` por ubicación (ej: "New Service - Hero CTA")
3. Pricing links: `data-event="pricing_click"`
4. Newsletter: `data-event="newsletter_signup"`

---

## 📌 Quick Reference - Buscar por Intención

**Quiero saber quién busca...** → **Mira evento:**

| Intención | Evento | Label |
|-----------|--------|-------|
| Yoga presencial | whatsapp_cta_click | Classes - * |
| Sonido terapia | whatsapp_cta_click | Sound Therapy - * |
| Ritual específico | whatsapp_cta_click | [Ritual Name] - * |
| Bienestar empresa | whatsapp_cta_click | Corporate Wellness - * |
| Círculo mujeres | whatsapp_cta_click | Women's Circle - * |
| Precios | pricing_page_click | * - Pricing Link |
| Decisión tomada | whatsapp_cta_click | Pricing Page - Final CTA |
| Información general | newsletter_signup | * |
| Preguntas frecuentes | faq_interaction | [Specific question] |
| Curiosidad | scroll_depth | 75% / 100% |

---

## 🚀 Utiliza Este Inventario

**Guardalo en:** Favoritos GA4 o Notion  
**Actualización:** Cada trimestre o cuando agregues nuevos servicios  
**Compartir:** Con tu equipo de marketing/community manager

---

**Creado:** 3 de Febrero de 2026  
**Última actualización:** 2026-02-03  
**Versión:** 1.0
