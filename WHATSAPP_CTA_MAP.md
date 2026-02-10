# Mapa técnico de CTAs WhatsApp

**Fecha:** 2026-02-09  
**Objetivo:** identificar la procedencia exacta de cada CTA hacia WhatsApp en el código.

> Nota: ya existe un inventario funcional en [CTA_INVENTORY.md](CTA_INVENTORY.md). Este mapa añade referencias directas a archivos y líneas.

---

## ✅ Global (layout + tracking)

- Menú/íconos/footers + widget fijo: [src/layouts/Layout.astro](src/layouts/Layout.astro)
  - WhatsApp en nav/footer: [src/layouts/Layout.astro](src/layouts/Layout.astro#L126)
  - WhatsApp en footer (icono): [src/layouts/Layout.astro](src/layouts/Layout.astro#L563)
  - WhatsApp como teléfono en footer: [src/layouts/Layout.astro](src/layouts/Layout.astro#L600)
  - Widget fijo (mensaje prellenado): [src/layouts/Layout.astro](src/layouts/Layout.astro#L642)
  - CTA flotante (botón): [src/layouts/Layout.astro](src/layouts/Layout.astro#L657)
  - Tracking de evento `whatsapp_cta_click`: [src/layouts/Layout.astro](src/layouts/Layout.astro#L234)

---

## 🇪🇸 Páginas ES

- Clases (múltiples CTAs):
  - Link general: [src/pages/clases.astro](src/pages/clases.astro#L17)
  - CTA hero (usa link general): [src/pages/clases.astro](src/pages/clases.astro#L102)
  - CTAs por oferta (array): [src/pages/clases.astro](src/pages/clases.astro#L151)
  - CTA ofertas (anchor): [src/pages/clases.astro](src/pages/clases.astro#L179)
  - CTA sección horario/preguntas: [src/pages/clases.astro](src/pages/clases.astro#L314)
  - CTA final: [src/pages/clases.astro](src/pages/clases.astro#L342)

- Terapia de sonido:
  - Link base: [src/pages/terapia-sonido.astro](src/pages/terapia-sonido.astro#L20)
  - CTA hero: [src/pages/terapia-sonido.astro](src/pages/terapia-sonido.astro#L80)
  - CTA final: [src/pages/terapia-sonido.astro](src/pages/terapia-sonido.astro#L341)

- Rituals landing:
  - Link base: [src/pages/rituales.astro](src/pages/rituales.astro#L16)

- Rituales individuales (cada uno con 2 CTAs):
  - Ritual cumpleaños: [src/pages/ritual-cumpleanos.astro](src/pages/ritual-cumpleanos.astro#L50)
  - Ritual pareja: [src/pages/ritual-pareja.astro](src/pages/ritual-pareja.astro#L50)
  - Ritual despedida: [src/pages/ritual-despedida-soltera.astro](src/pages/ritual-despedida-soltera.astro#L50)
  - Ritual baby blessing: [src/pages/ritual-baby-blessing.astro](src/pages/ritual-baby-blessing.astro#L50)
  - Ritual cierre/apertura: [src/pages/ritual-cierre-apertura.astro](src/pages/ritual-cierre-apertura.astro#L50)

- Círculo de mujeres (3 CTAs):
  - CTA hero: [src/pages/circulo-mujeres-conscientes.astro](src/pages/circulo-mujeres-conscientes.astro#L52)
  - CTA sección beneficios: [src/pages/circulo-mujeres-conscientes.astro](src/pages/circulo-mujeres-conscientes.astro#L86)
  - CTA final: [src/pages/circulo-mujeres-conscientes.astro](src/pages/circulo-mujeres-conscientes.astro#L127)

- Sobre mí:
  - CTA final: [src/pages/sobre-mi.astro](src/pages/sobre-mi.astro#L254)

- Contacto:
  - CTA directo WhatsApp: [src/pages/contacto.astro](src/pages/contacto.astro#L41)

- FAQ:
  - CTA WhatsApp: [src/pages/faq.astro](src/pages/faq.astro#L160)

- Tarifas:
  - CTA final: [src/pages/tarifas.astro](src/pages/tarifas.astro#L440)

- Links (bio / link-in-bio):
  - Link WhatsApp directo: [src/pages/links.astro](src/pages/links.astro#L25)

---

## 🇬🇧 Páginas EN

- Classes (múltiples CTAs):
  - Link general: [src/pages/en/clases.astro](src/pages/en/clases.astro#L16)
  - CTA hero: [src/pages/en/clases.astro](src/pages/en/clases.astro#L98)
  - CTAs por oferta (array): [src/pages/en/clases.astro](src/pages/en/clases.astro#L148)
  - CTA ofertas (anchor): [src/pages/en/clases.astro](src/pages/en/clases.astro#L176)
  - CTA sección horario/preguntas: [src/pages/en/clases.astro](src/pages/en/clases.astro#L311)
  - CTA final: [src/pages/en/clases.astro](src/pages/en/clases.astro#L339)

- Sound therapy:
  - Link base: [src/pages/en/terapia-sonido.astro](src/pages/en/terapia-sonido.astro#L19)
  - CTA hero: [src/pages/en/terapia-sonido.astro](src/pages/en/terapia-sonido.astro#L76)
  - CTA final: [src/pages/en/terapia-sonido.astro](src/pages/en/terapia-sonido.astro#L336)

- Corporate wellness:
  - CTA hero: [src/pages/en/bienestar-corporativo.astro](src/pages/en/bienestar-corporativo.astro#L67)
  - CTA final: [src/pages/en/bienestar-corporativo.astro](src/pages/en/bienestar-corporativo.astro#L258)

- Rituals landing:
  - CTA custom ritual: [src/pages/en/rituales.astro](src/pages/en/rituales.astro#L124)

- Rituals (cada uno con 2 CTAs):
  - Birthday ritual: [src/pages/en/ritual-cumpleanos.astro](src/pages/en/ritual-cumpleanos.astro#L62)
  - Couple ritual: [src/pages/en/ritual-pareja.astro](src/pages/en/ritual-pareja.astro#L62)
  - Bachelorette ritual: [src/pages/en/ritual-despedida-soltera.astro](src/pages/en/ritual-despedida-soltera.astro#L62)
  - Baby blessing: [src/pages/en/ritual-baby-blessing.astro](src/pages/en/ritual-baby-blessing.astro#L62)
  - Closure & opening: [src/pages/en/ritual-cierre-apertura.astro](src/pages/en/ritual-cierre-apertura.astro#L62)

- About:
  - CTA final: [src/pages/en/sobre-mi.astro](src/pages/en/sobre-mi.astro#L212)

- Contact:
  - CTA directo WhatsApp: [src/pages/en/contacto.astro](src/pages/en/contacto.astro#L5)

- FAQ:
  - CTA WhatsApp: [src/pages/en/faq.astro](src/pages/en/faq.astro#L161)

- Pricing:
  - CTA final: [src/pages/en/tarifas.astro](src/pages/en/tarifas.astro#L419)

---

## 🧩 Componentes con enlaces WhatsApp

- Registro de evento (pago con WhatsApp):
  - ES: [src/components/EventRegistration.astro](src/components/EventRegistration.astro#L17)
  - EN: [src/components/EventRegistrationEN.astro](src/components/EventRegistrationEN.astro#L17)

- Ritual cumpleaños (opciones individuales/grupales):
  - [src/components/BirthdayRitualPage.astro](src/components/BirthdayRitualPage.astro#L138)

---

## 📝 Blog (MDX)

- Baño de gong (ES):
  - CTA WhatsApp: [src/content/blog/8-bano-de-gong-febrero-2026.mdx](src/content/blog/8-bano-de-gong-febrero-2026.mdx#L192)

- Gong bath (EN):
  - CTA WhatsApp: [src/content/blog/en/8-gong-bath-february-2026.mdx](src/content/blog/en/8-gong-bath-february-2026.mdx#L192)

---

## ✅ Siguiente paso recomendado

Si quieres, actualizo [CTA_INVENTORY.md](CTA_INVENTORY.md) con este mapa técnico para que todo quede en un solo documento.
