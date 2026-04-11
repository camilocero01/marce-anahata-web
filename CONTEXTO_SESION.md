# Contexto de trabajo — Marce Anahata Web

> Última actualización: 11 de abril de 2026  
> Este archivo existe para retomar el hilo de trabajo en futuras sesiones sin perder contexto.

---

## El proyecto web actual

**Repo:** `marce-anahata-web`  
**Stack:** Astro 5 + TailwindCSS 4 + Vercel  
**URL producción:** `https://marceanahata.com`  
**Contenido del blog:** archivos `.mdx` en `src/content/blog/`  
**Layout principal:** `src/layouts/Layout.astro` (contiene nav, footer, i18n)  
**Traducciones:** `src/i18n/ui.ts`

---

## Campaña principal activa: El Viaje de las 450 Vibraciones

### ¿Qué es?
Un programa de 9 baños de gong mensuales a lo largo de 2026 (abril a diciembre). Cada sesión tiene un elemento y una intención distinta. Es la alternativa mensual a una Puja de Gong tradicional de 8-10 horas, distribuida mes a mes con propósito.

### Precio
- **Individual:** $120.000 COP por persona
- **Dúo** (cualquier acompañante): $90.000 COP por persona
- **Anticipo reserva:** 50% del valor (individual: $60.000 / dúo: $45.000 c/u)
- **Pago:** Bancolombia ahorros 935-972725-35 — Marcela Zuleta cc 32297153
- **WhatsApp confirmación:** +57 3207329921
- **Retiro de diciembre:** precio por definir (evento de 2 días)

### Mapa completo de sesiones 2026

| # | Mes | Fecha | Elemento | Nombre | Post | Estado |
|---|---|---|---|---|---|---|
| 1 | Abril | 24 abr | Tierra | La Semilla y el Silencio | `12-viaje-450-vibraciones-abril-2026.mdx` | ✅ Publicado |
| 2 | Mayo | 22 may | Agua | Limpieza de Aguas | `13-viaje-450-vibraciones-mayo-2026.mdx` | ✅ Publicado |
| 3 | Junio | 26 jun | Fuego | El Solsticio y el Fuego Interno | `14-viaje-450-vibraciones-junio-2026.mdx` | ✅ Publicado |
| 4 | Julio | Jul 2026 | Aire | El Viento y la Palabra | — | ⏳ Pendiente |
| 5 | Agosto | Ago 2026 | Éter | La Caverna Interior | — | ⏳ Pendiente |
| 6 | Septiembre | Sep 2026 | Equilibrio | El Equinoccio y el Puente | — | ⏳ Pendiente |
| 7 | Octubre | Oct 2026 | Profundidad | La Sombra y el Tesoro | — | ⏳ Pendiente |
| 8 | Noviembre | Nov 2026 | Memoria | El Retorno | — | ⏳ Pendiente |
| 9 | Diciembre | **5-6 dic** | Totalidad | **Retiro de Cierre — La Gran Puja** | — | ⏳ Pendiente (retiro 2 días, temática por definir) |

> **Nota diciembre:** No es un baño de gong ordinario. Es un **retiro de sábado 5 a domingo 6 de diciembre de 2026**. Allí ocurre el último baño de gong del año como ceremonia de cierre. El precio y la temática están por definir.

> **Convención de numeración de posts:** Los posts del Viaje empiezan en el 12. Los siguientes meses serán 15 (julio), 16 (agosto), 17 (sep), 18 (oct), 19 (nov), 20 (dic). Crear cada post ~2 semanas antes del evento.

---

## Archivos creados / modificados en esta campaña

### Nuevos archivos
| Archivo | Descripción |
|---|---|
| `src/content/blog/12-viaje-450-vibraciones-abril-2026.mdx` | Post evento abril |
| `src/content/blog/13-viaje-450-vibraciones-mayo-2026.mdx` | Post evento mayo |
| `src/content/blog/14-viaje-450-vibraciones-junio-2026.mdx` | Post evento junio |
| `src/pages/viaje-450-vibraciones.astro` | Landing page del viaje completo |
| `ADMIN_APP_PLAN.md` | Plan de arquitectura de la app de gestión (proyecto futuro) |

### Archivos modificados
| Archivo | Qué se cambió |
|---|---|
| `src/layouts/Layout.astro` | Agregado enlace "✨ Viaje 450 Vibraciones" en nav desktop y mobile |
| `src/i18n/ui.ts` | Nueva clave `nav.viaje` en ES e EN |
| `src/pages/index.astro` | Bloque de campaña del Viaje entre Servicios y Próximos Eventos |
| `src/pages/tarifas.astro` | Nueva sección Baño de Gong con tabla de precios individual/dúo |
| `ADMIN_APP_PLAN.md` | Mapa de sesiones y estado de prioridades actualizado |

### Imágenes
Las imágenes de los posts 12, 13 y 14 usan las fotos de `/images/blog/8/` (no existen carpetas propias aún).  
Cuando haya fotos de cada evento, crear `/images/blog/12/`, `/13/`, `/14/` y actualizar rutas en los `.mdx`.

---

## Pendientes priorizados

### Viaje de las 450 Vibraciones
| # | Tarea | Prioridad |
|---|---|---|
| 1 | ~~Menú de navegación~~ | ✅ Hecho |
| 2 | ~~Landing `/viaje-450-vibraciones`~~ | ✅ Hecha |
| 3 | ~~Bloque en el home~~ | ✅ Hecho |
| 4 | **Página `/links`** — verificar si incluye el viaje como enlace | Alta |
| 5 | **Post solsticio (publicar antes del 21 jun)** — artículo educativo "¿Qué es el solsticio y por qué importa para tu energía?" sin vender, apunta al evento del 26 jun | Alta — tiene fecha límite |
| 6 | **Posts julio–diciembre** — crear uno por mes, ~2 semanas antes de cada evento, con la temática que defina Marce | Media |
| 7 | **Precio retiro diciembre** — cuando esté definido, actualizar `tarifas.astro` y la landing | Media |
| 8 | **Versión inglés** `/en/viaje-450-vibraciones` | Baja |

### Sitio general
| # | Tarea | Prioridad |
|---|---|---|
| 9 | **Artículo 11 faltante** — existe `/public/images/blog/11-agotamiento-mental-rumiacion.jpg` pero no hay `.mdx` correspondiente | Media |
| 10 | **Fotos propias para posts 12-14** — reemplazar imágenes de `/blog/8/` por fotos específicas de cada evento cuando estén disponibles | Media |

---

## Proyecto futuro: App de gestión (marce-admin)

Documentado en `ADMIN_APP_PLAN.md`. Stack propuesto: **Next.js 15 + Supabase + Vercel**. Costo inicial $0/mes.

**Módulos planificados:** Clientes · Agenda · Servicios · Tiqueteras (control de consumo) · Contabilidad básica

**Estado:** Solo planificación, sin desarrollo iniciado.

---

## Información clave del negocio

- **Nombre:** Marce Anahata Centro de Bienestar
- **Propietaria:** Marcela Zuleta, cc 32297153
- **Dirección:** Cl. 11A Sur #46-12, Barrio La Aguacatala, El Poblado, Medellín, Antioquia
- **WhatsApp:** +57 3207329921
- **Cuenta Bancolombia:** Ahorros 935-972725-35
- **Política de reserva:** 50% anticipo para separar cupo, saldo 2 días antes del evento
- **Capacidad baños de gong:** 15 personas
- **Hora estándar eventos:** 7:00 PM

---

## Convenciones del proyecto

- Los posts de eventos tienen `isEvent: true` en el frontmatter
- La numeración de posts es secuencial: el siguiente disponible es el **15**
- Todas las galerías e imágenes usan rutas absolutas desde `/public/`
- El formulario de inscripción usa Formspree con ID `mgovwznp`
- Los posts en inglés van en `src/content/blog/en/` y las páginas en `src/pages/en/`
- Colores de la marca: `#243c5a` (azul oscuro), `#6ed8d9` (turquesa), `#5d5a8c` (morado)
