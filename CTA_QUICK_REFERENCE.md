# CTA Quick Lookup - Identificación Rápida de Contactos

## 🎯 Busca el Evento en GA4 → Identifica La Fuente

```
EVENTO EN GA4                          SIGNIFICA QUE...                    ACCIÓN RECOMENDADA
─────────────────────────────────────────────────────────────────────────────────────────────

whatsapp_cta_click
└─ label: "Classes - Hero CTA"         Visitó página de YOGA              Enviar info de clases
└─ label: "Classes - Final CTA"        Exploró TODAS opciones yoga        ⭐ MUY INTERESADO
└─ label: "Classes - Regular..."       Específico: clases grupales        Enviar horarios
└─ label: "Classes - Private..."       Específico: sesiones privadas      Enviar precios 1x1

─────────────────────────────────────────────────────────────────────────────────────────────

└─ label: "Sound Therapy - Hero CTA"   Visitó página TERAPIA SONIDO       Enviar descripción
└─ label: "Sound Therapy - Final CTA"  Exploró sonido completo            ⭐ MUY INTERESADO
└─ label: "Baño de Gong"               Específico: gong bath              Enviar horarios gong

─────────────────────────────────────────────────────────────────────────────────────────────

└─ label: "Birthday Ritual CTA Hero"   Visitó RITUAL CUMPLEAÑOS           Enviar detalles ritual
└─ label: "Birthday Ritual CTA Final"  Exploró ritual completo            ⭐ MUY INTERESADO
└─ label: "Couple Ritual..."           Visitó RITUAL DE PAREJA            Enviar ceremonias
└─ label: "Bachelorette Ritual..."     Visitó DESPEDIDA SOLTERA          Enviar opciones grupo
└─ label: "Cycle Closure Ritual..."    Visitó CIERRE DE CICLO            Enviar ritual details
└─ label: "Baby Blessing Ritual..."    Visitó BENDICIÓN DE BEBÉ          Enviar ceremonias

─────────────────────────────────────────────────────────────────────────────────────────────

└─ label: "Corporate Wellness..."      Visitó BIENESTAR CORPORATIVO       Enviar propuesta B2B
└─ label: "Women's Circle..."          Visitó CÍRCULO DE MUJERES          Enviar info suscripción
└─ label: "About Page - Let's Talk"    Visitó SOBRE MÍ (bottom)           ⭐ SUPER INTERESADO

─────────────────────────────────────────────────────────────────────────────────────────────

└─ label: "Contact Page Direct..."     Fue directo a CONTACTO             Usuario sabe lo que quiere
└─ label: "Pricing Page - Final CTA"   Revisó TODAS las tarifas           ⭐ CASI LISTOS

─────────────────────────────────────────────────────────────────────────────────────────────

pricing_page_click
└─ label: "Birthday Ritual - Pricing"  Revisó PRECIOS de cumpleaños       Enviar paquetes
└─ label: "Couple - Pricing"           Revisó PRECIOS parejas             Enviar opciones pareja
└─ label: "Nav - Pricing Link"         Visitó desde NAV                   Explorador genérico

─────────────────────────────────────────────────────────────────────────────────────────────

newsletter_signup                      Se suscribió al NEWSLETTER         Agregar a email list
                                                                           Enviar contenido

─────────────────────────────────────────────────────────────────────────────────────────────

faq_interaction                        Abrió ACORDEÓN en FAQ              Tienen dudas específicas
└─ faq_action: "opened"                (revisar label para la pregunta)   Responder por email
└─ faq_action: "closed"

─────────────────────────────────────────────────────────────────────────────────────────────

scroll_depth                           Scrolleó mucha página              Engage con retargeting
└─ scroll_depth_threshold: 100%        (top engaged users)               Mostrar ads conversión

─────────────────────────────────────────────────────────────────────────────────────────────

external_link_click                    Visitó INSTAGRAM                   Engagement social
└─ label: "Instagram"
└─ link_type: "social_media"

─────────────────────────────────────────────────────────────────────────────────────────────
```

## 🔥 Priority Matrix

```
           CONTACTO INMEDIATO
                 |
                 |
    Pricing Page Final CTA ──────────────────────┐
    About Page Final CTA                         |
    Final CTAs (cualquier página)                |
                 |                               |
    ⭐ Dentro de 30 minutos ←─────────────────────┘
                 |
    ─────────────────────────────
                 |
    Hero CTAs
    Medium intent CTAs
                 |
    ⭐ Dentro de 2 horas
                 |
    ─────────────────────────────
                 |
    Newsletter signups
    FAQ readers
                 |
    ⭐ Email nurture secuence
                 |
    ─────────────────────────────
```

## 📍 Ubicación en Página → Intención

```
UBICACIÓN                          INTENCIÓN
═══════════════════════════════════════════════════════════
Hero Section (top)                 Curiosidad inicial 🔵
Middle Content                      Consideración 🟡
Offer/Pricing Cards                Comparando opciones 🟡
Final CTA (bottom)                 Decisión tomada ⭐🟢
Footer                             Last chance 🟢
Floating Widget                    Any time interest 🟡
```

## 🌐 Idioma → Mercado

```
event_label contiene:
- Sin prefijo "EN"          → ESPAÑOL (mercado local)
- Prefijo "EN" o "EN"       → ENGLISH (potencial expat/international)
```

## 📊 Análisis Ejemplo Real

### Escenario 1: Alguien pregunta "¿De dónde contactaste?"
```
RESPUESTA DEL USUARIO          GA4 MOSTRARÁ
─────────────────────────────────────────────────────────
"Vi tu página de tarifas"      whatsapp_cta_click 
                               label: "Pricing Page - Final CTA"

"Voy a yoga, vuestras clases"  whatsapp_cta_click
                               label: "Classes - Final CTA"

"Me interesa lo de rituales"    whatsapp_cta_click
                               label: "[Ritual Type] - CTA Final"
```

### Escenario 2: Múltiples contactos misma persona
```
Session 1: scroll_depth (100%) → visited clases page
Session 2: pricing_page_click   → went to tarifas
Session 3: whatsapp_cta_click   → "Classes - Final CTA"

🔍 INSIGHT: Usuario exploró, comparó, decidió = HIGH QUALITY LEAD
⭐ Prioridad: Ofrecer demo o trial
```

---

## 🚨 Red Flags (Usuarios que NO contactan)

Si ves muchas vistas pero pocas `whatsapp_cta_click`:
- Pricing too high? → Falta CTA en precios bajos
- Confusión? → Revisar FAQ, mejorar clarity
- Duda sobre calidad? → Agregar más testimonios
- Mobile UX issue? → Revisar botones en mobile

---

## 💡 Pro Tips para GA4

1. **Filtro rápido por servicio:**
   - Filter: event_label contains "Ritual"
   - Result: Todos los ritual leads

2. **Embudo de conversión:**
   - Funnel: Page view → FAQ open → Pricing click → WhatsApp CTA
   - Análisis: En qué paso se caen usuarios

3. **Comparación de CTAs:**
   - Hero CTA vs Final CTA (mismo servicio)
   - Cuál convierte mejor?

4. **Descubrimiento de servicios populares:**
   - Event: whatsapp_cta_click
   - Group by: event_label
   - Ordena por: Count (descendente)
   - Result: Top 5 servicios más solicitados

---

**Última actualización:** 3 de Febrero 2026  
**Mantener actualizado:** Cuando agregues nuevos servicios
