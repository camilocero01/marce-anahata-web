# Guía completa: Componente ReviewsSection

## Descripción general

`ReviewsSection.astro` es un componente que muestra testimonios/reseñas de clientes en un carrusel interactivo, optimizado para SEO y experiencia de usuario. Está diseñado para ser integrado en cualquier página (home, servicios, about, etc.).

## Características principales

- ✅ **Carrusel responsive**: 1 reseña móvil, 2 tablet, 3 desktop
- ✅ **Autoplay inteligente**: Avanza cada 5 segundos, se pausa al interactuar
- ✅ **Gestos táctiles**: Swipe completo en móvil
- ✅ **Paginación visual**: Dots clickeables y dinámicos
- ✅ **Datos externos**: Importa de `reviews.json` (fácil actualizar)
- ✅ **Banderas de países**: Muestra país de origen de cada reseña
- ✅ **Fotos de perfil**: Avatar opcional con fallback a iniciales
- ✅ **Link a Google Reviews**: CTA integrado
- ✅ **Accesible**: ARIA labels, navegable por teclado
- ✅ **Renderización de estrellas**: ★★★★★ visual

## Ubicación de archivos

```
src/components/cards/
└── ReviewsSection.astro        ← Componente

src/data/
└── reviews.json                ← Base de datos de reseñas
```

## Estructura de reviews.json

```json
[
  {
    "nombre": "Paula",
    "ubicacion": "Medellín, Colombia",
    "bandera": "co",
    "foto": "/images/testimonios/paula.jpg",
    "estrellas": 5,
    "texto": "Llegué con el corazón oprimido y me fui liviana. No sabía cuánto necesitaba esto.",
    "link": "https://www.google.com/maps/..."
  },
  {
    "nombre": "Sarah",
    "ubicacion": "Toronto, Canadá",
    "bandera": "ca",
    "foto": null,
    "estrellas": 5,
    "texto": "La terapia de sonido fue transformadora. Recomiendo 100%",
    "link": "https://www.google.com/maps/..."
  }
]
```

### Campos explicados

| Campo | Tipo | Requerido | Descripción |
|-------|------|-----------|-------------|
| `nombre` | string | Sí | Nombre de la persona |
| `ubicacion` | string | Sí | Ciudad y país |
| `bandera` | string | Sí | Código ISO de país (ej: "co", "us", "fr") |
| `foto` | string\|null | No | Ruta a foto de perfil, o null para iniciales |
| `estrellas` | number | Sí | 1-5 (cantidad de estrellas a mostrar) |
| `texto` | string | Sí | Testimonial (máx 200 caracteres recomendado) |
| `link` | string | No | URL a la reseña en Google Maps |

## Cómo usar el componente

### 1. Importarlo en una página

```astro
---
import ReviewsSection from '../components/cards/ReviewsSection.astro';
---

<main>
  <!-- Otro contenido -->
  
  <ReviewsSection />
</main>
```

### 2. Actualizar reseñas

Edita `src/data/reviews.json`:

```json
[
  {
    "nombre": "Juan",
    "ubicacion": "Bogotá, Colombia",
    "bandera": "co",
    "foto": "/images/testimonios/juan.jpg",
    "estrellas": 5,
    "texto": "La mejor experiencia de bienestar que he tenido. Marce es una facilitadora increíble.",
    "link": "https://maps.google.com/..."
  },
  // ... más reseñas
]
```

### 3. El componente es responsivo automáticamente

No requiere parámetros. Se adapta según el viewport:
- **Móvil**: 1 reseña por vista
- **Tablet**: 2 reseñas
- **Desktop**: 3 reseñas

## Detalle de componentes internos

### Layout de reseña

```
┌─────────────────────┐
│ ★★★★★              │
│                     │
│ "Testimonio texto"  │
│ [Link a Google]     │
│                     │
│ [foto] Nombre       │
│        País 🇨🇴      │
└─────────────────────┘
```

### Área de foto

Si `foto` es null:
```html
<div class="w-12 h-12 bg-[#6ed8d9]/10 rounded-full flex items-center justify-center">
  J  ← Primera letra del nombre
</div>
```

Si `foto` existe:
```html
<img 
  src="/images/testimonios/juan.jpg" 
  alt="Foto de Juan"
  class="w-12 h-12 rounded-full"
  loading="lazy"
/>
```

### Banderas

Usa API de flagcdn.com (gratuita):
```html
<img 
  src="https://flagcdn.com/co.svg" 
  alt="Bandera de Colombia"
  class="w-5 h-auto"
/>
```

**Códigos ISO de país soportados:**
- `co` = Colombia
- `us` = Estados Unidos
- `ca` = Canadá
- `es` = España
- `mx` = México
- `ar` = Argentina
- `fr` = Francia
- `de` = Alemania
- `it` = Italia
- `br` = Brasil
- [Lista completa](https://flagcdn.com/) (2 caracteres)

## Configuración del carrusel

Edita en `ReviewsSection.astro`:

```javascript
const swiper = new Swiper('.reviews-carousel', {
  // Velocidad autoplay (milisegundos)
  autoplay: {
    delay: 5000,  // ← Cambiar aquí (5 segundos default)
    disableOnInteraction: false,
    pauseOnMouseEnter: true,
  },
  
  // Espaciado entre tarjetas
  spaceBetween: 24,  // ← Cambiar aquí
  
  // Breakpoints (responsivo)
  breakpoints: {
    640: { 
      slidesPerView: 2,    // ← Tablet
      spaceBetween: 24 
    },
    1024: { 
      slidesPerView: 3,    // ← Desktop
      spaceBetween: 32 
    }
  }
});
```

## Personalización de estilos

### Colores

En `src/components/cards/ReviewsSection.astro`:

```astro
<!-- Cambiar color de las estrellas -->
<div class="text-[#5d5a8c] mb-4">  ← Cambiar este color

<!-- Cambiar color de nombre -->
<p class="text-[#243c5a] text-base">  ← Cambiar este color

<!-- Cambiar color de border -->
<div class="border border-marce-base-1">  ← Cambiar este color
```

### Tamaño de tarjetas

```astro
<!-- Padding (espaciado interno) -->
<div class="p-6 rounded-2xl">  ← p-6 es 24px, prueba p-5 o p-7

<!-- Tamaño de foto -->
<img class="w-12 h-12">  ← 12 es 48px, puedes cambiar a w-10, w-14, etc.

<!-- Tamaño de texto -->
<blockquote class="text-base">  ← base es 16px, prueba text-sm o text-lg
```

### Sombras y bordes

```astro
<!-- Sombra normal -->
<div class="shadow-sm">  ← shadow-sm, shadow-md, shadow-lg

<!-- Hover effect -->
hover:shadow-lg  ← Cambiar a shadow-2xl para mayor efecto
hover:border-[#5d5a8c]/100  ← Transparencia del border al hover
```

## Buenas prácticas

### Fotografías de perfil

✅ **Recomendado:**
- Formato: JPG o WebP
- Tamaño: 200x200px mínimo (se mostrará en 48x48px)
- Peso: Max 50KB
- Contenido: Foto de perfil clara, rostro visible
- Fondo: Neutro o natural

❌ **Evitar:**
- Logos de empresa
- Imágenes borrosas
- Fondos muy coloridos
- Tamaños muy grandes

### Textos de testimonios

✅ **Bueno:**
```
"Llegué con el corazón oprimido y me fui liviana. 
No sabía cuánto necesitaba esto."
```
- Corto (1-2 frases)
- Emocional y honesto
- Específico (qué cambió)
- Máx 200 caracteres

❌ **Evitar:**
```
"El servicio fue muy bueno y la persona fue profesional 
y las instalaciones fueron limpias y tenían un buen ambiente 
y recomendaría a todos mis amigos y familia"
```
- Muy largo
- Genérico
- Menos impactante

### Orden de reseñas

- **Reseñas nuevas**: Al inicio del array
- **Mejor valoradas**: Destacarlas (5 estrellas primero)
- **Diversidad**: Mezclar países, géneros, experiencias
- **Máximo recomendado**: 10-15 reseñas (carrusel eficiente)

### URLs de Google Maps/Reviews

Obtén el link de la reseña desde Google Maps:
1. Abre Google Maps
2. Busca "Marce Anahata Medellín" (o tu nombre de negocio)
3. Copia el URL cuando estés en tu negocio
4. Pega en el campo `link`

Formato esperado:
```
https://www.google.com/maps/place/...
```

## SEO y Accesibilidad

### Alt texts en fotos

Automático en el componente:
```astro
alt={`Foto de ${review.nombre}`}
```

Esto genera: `alt="Foto de Paula"` — Descriptivo y SEO-friendly ✅

### Estructura semántica

El componente usa:
- `<section id="reviews">` — Identifica la sección
- `<blockquote>` — Marca testimonios semánticamente
- `<img alt="...">` — Todos los alt texts
- ARIA labels en botones

### JSON-LD Schema (recomendado agregar)

Para máximo SEO, considera agregar en la página que incluye ReviewsSection:

```astro
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "Marce Anahata",
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.8",
    "ratingCount": "12",
    "bestRating": "5",
    "worstRating": "1"
  }
}
</script>
```

## Casos de uso

### Home page
```astro
---
import ReviewsSection from '../components/cards/ReviewsSection.astro';
---

<main>
  <!-- Hero -->
  <!-- Servicios -->
  <ReviewsSection />  ← Después de servicios, antes de footer
  <!-- CTA -->
</main>
```

### Página de servicios específico
```astro
<section>
  <h2>Terapia de Sonido</h2>
  <!-- Descripción -->
  <ReviewsSection />  ← Mostrar reseñas de terapia
</section>
```

### Página About/Bio
```astro
<section>
  <h2>Lo que dicen mis clientes</h2>
  <ReviewsSection />
</section>
```

## Versiones avanzadas (personalización)

### Versión 1: Filtrar por servicio

Si quieres mostrar solo reseñas de un servicio:

```json
[
  {
    "nombre": "Paula",
    "servicio": "terapia-sonido",  ← Agregar campo
    // ... resto
  }
]
```

```astro
---
import reviewsData from '../../data/reviews.json';

interface Props {
  servicio?: string;
}

const { servicio } = Astro.props;
const filtered = servicio 
  ? reviewsData.filter(r => r.servicio === servicio)
  : reviewsData;
---

{filtered.map((review) => (
  // ... renderizar
))}
```

### Versión 2: Carrusel automático vs manual

Cambiar `disableOnInteraction`:

```javascript
autoplay: {
  delay: 5000,
  disableOnInteraction: false,  // ← true: Autoplay se detiene si interactúas
  pauseOnMouseEnter: true,
}
```

### Versión 3: Paginación diferente

Cambiar de dots a números:

```javascript
pagination: {
  el: '.swiper-pagination',
  type: 'bullets',  // ← Cambiar a 'fraction' para "1 / 10"
  clickable: true,
}
```

## Troubleshooting

### Problema: Las fotos no se ven

**Causa**: Ruta incorrecta o archivo no existe

**Solución**:
1. Verifica que la foto esté en `public/images/testimonios/`
2. Comprueba la ruta en `reviews.json`
3. Asegúrate de usar `/` al inicio (ej: `/images/testimonios/juan.jpg`)

```json
// ❌ Malo
"foto": "images/testimonios/juan.jpg"

// ✅ Bueno
"foto": "/images/testimonios/juan.jpg"
```

### Problema: Las banderas no aparecen

**Causa**: Código ISO incorrecto

**Solución**: Usa código de 2 letras minúsculas:

```json
// ❌ Malo
"bandera": "Colombia"

// ✅ Bueno
"bandera": "co"
```

[Lista de códigos](https://flagcdn.com/)

### Problema: El carrusel va muy rápido/lento

**Causa**: Valor de `delay` inadecuado

**Solución**: Edita en `ReviewsSection.astro`:

```javascript
autoplay: {
  delay: 5000,  // ← Cambiar a 3000 (rápido), 8000 (lento), etc.
}
```

### Problema: Las estrellas se ven raras

**Causa**: Caracteres no soportados o fuente

**Solución**: El símbolo `★` es Unicode estándar, pero verifica:

```astro
{"★".repeat(review.estrellas)}  ← Asegura encoding UTF-8
```

En astro.config.mjs:
```javascript
compressHTML: true,  // Asegura compresión correcta
```

### Problema: Overflow en móvil

**Causa**: Espaciado o padding grande

**Solución**: Reducir en mobile:

```astro
<div class="px-6 md:px-0">  ← px-6 en móvil, px-0 en desktop
```

### Problema: Link a Google Reviews no funciona

**Causa**: URL malformado

**Solución**:
1. Obtén URL de Google Maps
2. Verifica que empiece con `https://`
3. Copia el link completo (no lo acortes)

```json
// Válido:
"link": "https://www.google.com/maps/place/..."

// Inválido:
"link": "google.com"
"link": "https://goo.gl/..."
```

## Performance

### Lazy loading

Las fotos cargan con `loading="lazy"` automáticamente:

```astro
<img 
  src={review.foto}
  loading="lazy"  ← Solo carga si la foto es visible
/>
```

### Optimización de imágenes

Para mejor performance:

1. **Comprimir fotos**: https://squoosh.app/
   - Formato: WebP (mejor)
   - Tamaño: 200x200px
   - Peso: Max 50KB

2. **Usar CDN**: Hostear fotos en Vercel o Cloudinary

3. **Lazy images**:
   ```json
   "foto": "/images/testimonios/paula.webp"  ← Usar WebP
   ```

### Tamaño del JSON

Mantener `reviews.json` optimizado:
- Max 15-20 reseñas (carrusel más rápido)
- Textos concisos (menos bytes)
- Considera archivar reseñas antiguas

## Mantenimiento

### Agregar nueva reseña

1. Edita `src/data/reviews.json`
2. Agrégalo al inicio del array (para que aparezca primero)
3. Si tiene foto, cópiala a `public/images/testimonios/`
4. El componente se actualiza automáticamente

```json
[
  {
    "nombre": "Nueva Persona",
    "ubicacion": "...",
    "bandera": "...",
    "foto": "...",
    "estrellas": 5,
    "texto": "...",
    "link": "..."
  },
  // ... reseñas antiguas
]
```

### Eliminar reseña antigua

Simplemente bórrala del array en `reviews.json`

### Actualizar enlace de Google Reviews

1. Abre `ReviewsSection.astro`
2. Busca `const googleReviewsLink =`
3. Reemplaza con nuevo URL de tu negocio en Maps

```astro
const googleReviewsLink = "https://maps.google.com/...";
```

## Consideraciones legales

✅ **Usa solo reseñas reales**:
- Con consentimiento del cliente
- Testimonios auténticos
- No inventar reseñas

✅ **Privacidad**:
- Si usas fotos, obtén consentimiento
- Respeta GDPR si tienes clientes en EU

## Integración con otras herramientas

### Importar de Google Reviews (avanzado)

Google no tiene API pública de reseñas gratuita, pero hay servicios:
- [Trustpilot](https://www.trustpilot.com/)
- [Birdeye](https://www.birdeye.com/)
- [BrightLocal](https://www.brightlocal.com/)

Estos permiten exportar reseñas a JSON.

### Enviar reseñas por formulario (avanzado)

Para que clientes envíen reseñas directamente:
- Crear formulario en página
- Guardar en base de datos
- Sincronizar con `reviews.json`

## Ejemplo completo de reviews.json

```json
[
  {
    "nombre": "Paula",
    "ubicacion": "Medellín, Colombia",
    "bandera": "co",
    "foto": "/images/testimonios/paula.webp",
    "estrellas": 5,
    "texto": "Llegué con el corazón oprimido y me fui liviana. No sabía cuánto necesitaba esto.",
    "link": "https://www.google.com/maps/place/Marce+Anahata/@6.2476,-75.5644,17z"
  },
  {
    "nombre": "Sarah",
    "ubicacion": "Toronto, Canadá",
    "bandera": "ca",
    "foto": "/images/testimonios/sarah.webp",
    "estrellas": 5,
    "texto": "La terapia de sonido fue transformadora. Me duermo profundamente desde entonces.",
    "link": "https://www.google.com/maps/place/Marce+Anahata/@6.2476,-75.5644,17z"
  },
  {
    "nombre": "Camila",
    "ubicacion": "Medellín, Colombia",
    "bandera": "co",
    "foto": null,
    "estrellas": 4,
    "texto": "Es la primera vez que siento que puedo hablar sin miedo al juicio.",
    "link": "https://www.google.com/maps/place/Marce+Anahata/@6.2476,-75.5644,17z"
  },
  {
    "nombre": "Robert",
    "ubicacion": "Nueva York, USA",
    "bandera": "us",
    "foto": "/images/testimonios/robert.webp",
    "estrellas": 5,
    "texto": "Profesional, cálida y muy preparada. Altamente recomendado.",
    "link": "https://www.google.com/maps/place/Marce+Anahata/@6.2476,-75.5644,17z"
  }
]
```

## Conclusión

ReviewsSection es un componente **listo para producción** que:
- Requiere mínima configuración
- Es fácil de actualizar (solo JSON)
- Está optimizado para SEO y mobile
- Se ve profesional y moderno

Para dudas sobre la implementación, revisa el código en:
```
src/components/cards/ReviewsSection.astro
```

---

**Última actualización**: 29 de diciembre, 2024
