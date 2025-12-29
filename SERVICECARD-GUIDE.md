# Guía completa: Componente ServiceCard

## Descripción general

`ServiceCard.astro` es un componente reutilizable que muestra tarjetas de servicios/rituales con imagen, descripción, duración y llamada a la acción. Está optimizado para SEO, accesibilidad y experiencia visual.

## Características principales

- ✅ **Diseño moderno**: Tarjeta limpia con hover effects fluidos
- ✅ **Imagen prominente**: Escalado suave al hacer hover
- ✅ **Responsive**: Se adapta a móvil, tablet y desktop
- ✅ **Lazy loading**: Imágenes cargan eficientemente
- ✅ **SEO optimizado**: Alt texts descriptivos automáticos
- ✅ **Accesible**: Semántica HTML correcta, ARIA labels
- ✅ **Flexible**: Reutilizable en múltiples contextos
- ✅ **Performance**: Transiciones suaves y eficientes
- ✅ **Interactiva**: Efectos visuales en hover

## Ubicación

```
src/components/cards/
└── ServiceCard.astro
```

## Props (Parámetros)

| Prop | Tipo | Requerido | Descripción |
|------|------|-----------|-------------|
| `titulo` | string | Sí | Nombre del servicio/ritual (ej: "Terapia de Sonido") |
| `descripcion` | string | Sí | Texto descriptivo del servicio (1-2 párrafos) |
| `imagen` | string | Sí | Ruta a la imagen (ej: `/images/ritual/terapia.webp`) |
| `duracion` | string | Sí | Tiempo estimado (ej: "60 minutos", "2 horas") |
| `link` | string | Sí | URL de destino (ej: `/terapia-sonido`) |

## Estructura HTML

```
┌─────────────────────────┐
│ Imagen (h-64)           │ ← 256px de altura
│ [hover: scale 1.05]     │
├─────────────────────────┤
│ Duración: 60 minutos    │ ← Etiqueta xs
│ Título del Servicio     │ ← text-2xl semibold
│ Descripción del         │ ← Crece con flex-grow
│ servicio...             │
│                         │
│ [Ver detalles y         │ ← CTA button
│  Reservar]              │
└─────────────────────────┘
```

## Cómo usar

### Uso básico en una página

```astro
---
import ServiceCard from '../components/cards/ServiceCard.astro';
---

<main>
  <section>
    <h2>Nuestros Servicios</h2>
    
    <ServiceCard
      titulo="Terapia de Sonido"
      descripcion="Sumérgete en vibraciones sanadoras. La terapia de sonido con cuencos tibetanos facilita la relajación profunda y el bienestar emocional."
      imagen="/images/terapia/sonido-principal.webp"
      duracion="60 minutos"
      link="/terapia-sonido"
    />
  </section>
</main>
```

### Uso en grilla (recomendado)

```astro
---
import ServiceCard from '../components/cards/ServiceCard.astro';

const servicios = [
  {
    titulo: "Terapia de Sonido",
    descripcion: "Sumérgete en vibraciones sanadoras...",
    imagen: "/images/terapia/sonido.webp",
    duracion: "60 minutos",
    link: "/terapia-sonido"
  },
  {
    titulo: "Clases de Yoga",
    descripcion: "Conecta cuerpo y mente...",
    imagen: "/images/clases/yoga.webp",
    duracion: "90 minutos",
    link: "/clases"
  },
  // ... más servicios
];
---

<section class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
  {servicios.map((servicio) => (
    <ServiceCard {...servicio} />
  ))}
</section>
```

### Con datos externos (JSON)

```astro
---
import ServiceCard from '../components/cards/ServiceCard.astro';
import servicios from '../data/servicios.json';
---

<section class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
  {servicios.map((s) => (
    <ServiceCard
      titulo={s.titulo}
      descripcion={s.descripcion}
      imagen={s.imagen}
      duracion={s.duracion}
      link={s.link}
    />
  ))}
</section>
```

## Estructura de datos (JSON opcional)

Si quieres mantener servicios en archivo JSON:

```json
[
  {
    "titulo": "Terapia de Sonido",
    "descripcion": "Sumérgete en vibraciones sanadoras. La terapia de sonido con cuencos tibetanos facilita la relajación profunda y el bienestar emocional.",
    "imagen": "/images/terapia/sonido.webp",
    "duracion": "60 minutos",
    "link": "/terapia-sonido"
  },
  {
    "titulo": "Clases de Yoga",
    "descripcion": "Conecta cuerpo y mente a través del movimiento consciente. Clases diseñadas para todos los niveles.",
    "imagen": "/images/clases/yoga.webp",
    "duracion": "90 minutos",
    "link": "/clases"
  },
  {
    "titulo": "Rituales Personalizados",
    "descripcion": "Ceremonias diseñadas especialmente para ti. Desde cumpleaños hasta despedidas, marcamos hitos importantes.",
    "imagen": "/images/rituales/personalizados.webp",
    "duracion": "A medida",
    "link": "/rituales"
  }
]
```

## Personalización de estilos

### Altura de imagen

Cambiar en `ServiceCard.astro`:

```astro
<!-- Default: 256px (h-64) -->
<div class="h-64 overflow-hidden">  ← Cambiar a h-48, h-56, h-72, etc.
```

**Opciones recomendadas:**
- `h-48` = 192px (más compacto)
- `h-56` = 224px (balanced)
- `h-64` = 256px (estándar) ✓
- `h-80` = 320px (más grande)

### Padding interno

```astro
<div class="p-8 flex flex-col">  ← Cambiar p-8 a p-6, p-10, etc.
```

**Opciones:**
- `p-6` = 24px (más compacto)
- `p-8` = 32px (estándar) ✓
- `p-10` = 40px (más espacioso)

### Tamaño de título

```astro
<h3 class="text-2xl font-semibold">  ← Cambiar text-2xl a text-xl, text-3xl, etc.
```

**Opciones:**
- `text-xl` = 20px
- `text-2xl` = 24px (estándar) ✓
- `text-3xl` = 30px

### Sombras

```astro
<!-- Default: shadow-sm en reposo, shadow-md en hover -->
<article class="shadow-sm hover:shadow-md">  ← Cambiar opciones

<!-- Opciones de sombra:
  shadow-sm   = Muy sutil
  shadow-md   = Moderado (default)
  shadow-lg   = Fuerte
  shadow-xl   = Muy fuerte
-->
```

### Color del overlay

```astro
<div class="bg-stone-900/10 group-hover:bg-stone-900/0">
     ← Cambiar opacidad (10 = 10%, 20 = 20%, etc.)
```

**Efecto overlay:**
- Sin hover: `bg-stone-900/10` (oscurece 10%)
- Con hover: `bg-stone-900/0` (transparente, revela imagen)

Puedes cambiar a otros colores:
```astro
<!-- Overlay más oscuro -->
<div class="bg-stone-900/20 group-hover:bg-stone-900/0">

<!-- Overlay con color de marca -->
<div class="bg-[#5d5a8c]/10 group-hover:bg-[#5d5a8c]/0">
```

### Duración de transiciones

```astro
<!-- Imagen: 700ms de transición -->
transition-transform duration-700

<!-- Shadow: 300ms -->
transition-shadow duration-300

<!-- Puedes cambiar:
  duration-200 = 200ms (rápido)
  duration-300 = 300ms (rápido)
  duration-500 = 500ms (moderado)
  duration-700 = 700ms (lento) ✓
  duration-1000 = 1s (muy lento)
-->
```

### Botón CTA

```astro
<a 
  class="py-2 px-6 border border-stone-400 rounded-full text-stone-600 hover:bg-stone-800 hover:text-white"
>

<!-- Cambiar estilos:
  - Padding: py-2 px-6 (vertical, horizontal)
  - Border: border-stone-400
  - Color hover: hover:bg-stone-800 hover:text-white
  - Border-radius: rounded-full (píldora)
-->
```

### Hover effects avanzados

**Efecto 1: Escala más pronunciada**
```astro
group-hover:scale-125  ← Cambiar de 105 a 125 (zoom más fuerte)
```

**Efecto 2: Overlay coloreado**
```astro
<div class="bg-stone-900/10 group-hover:bg-purple-500/20">
  ← Muestra color de marca en hover
</div>
```

**Efecto 3: Desenfoque de fondo**
```astro
group-hover:backdrop-blur-sm  ← Agrega blur al fondo
```

## Buenas prácticas

### Imágenes

✅ **Recomendado:**
- Formato: WebP (mejor compresión) o JPG
- Tamaño: 1200x768px (ratio 16:10, máx 200KB)
- Contenido: Mostrar el servicio claramente
- Legibilidad: Texto visible si incluye overlay
- Consistencia: Todas las imágenes con mismo ratio

❌ **Evitar:**
- Imágenes muy pequeñas (< 800px ancho)
- Peso excesivo (> 300KB)
- Fondos distractores
- Imágenes borrosas o oscuras
- Ratios inconsistentes

**Herramientas:**
- Comprimir: https://squoosh.app/
- Resize: https://imageresizer.com/
- Optimizar SEO: Usar alt texts descriptivos

### Títulos

✅ **Bueno:**
```
"Terapia de Sonido"
"Círculo de Mujeres"
"Yoga Restaurativo"
```
- Cortos (2-3 palabras)
- Descriptivos
- Fácil de leer

❌ **Evitar:**
```
"Terapia de Sonido Sagrada y Transformadora con Cuencos"
"Círculo"
"Yoga para la Alma"
```

### Descripciones

✅ **Bueno:**
```
"Sumérgete en vibraciones sanadoras con cuencos tibetanos. 
Facilita la relajación profunda y el bienestar emocional 
en sesiones de 60 minutos."
```
- 2-3 oraciones máximo
- Beneficios claros
- Llamada a la acción implícita
- Tono cálido pero profesional

❌ **Evitar:**
```
"Lorem ipsum dolor sit amet..."
"Terapia muy buena"
"La mejor experiencia jamás" (sin detalles)
```

### Duración

Sé específico:

✅ **Bueno:**
```
"60 minutos"
"90 minutos"
"2 horas"
"A medida"
"3-5 horas"
```

❌ **Evitar:**
```
"Depende"
"Variable"
"Flexible"
```

### Links

Asegurar que el `link` apunte a:
1. Página de detalles del servicio
2. Página con formulario de reserva
3. Calendario de disponibilidad
4. Página de contacto

```astro
<!-- ✅ Bueno -->
link="/terapia-sonido"
link="/rituales/baby-blessing"
link="/contacto?servicio=yoga"

<!-- ❌ Evitar -->
link="#"
link="javascript:void(0)"
```

## SEO y Accesibilidad

### Alt text automático

El componente genera automáticamente:
```astro
alt={`Ritual de ${titulo} en Marce Anahata`}
```

Resultado: `alt="Ritual de Terapia de Sonido en Marce Anahata"`

✅ Descriptivo, SEO-friendly, accesible

### Semántica HTML

```astro
<article>  ← Identifica como artículo/contenido principal
  <img alt="...">  ← Alt text obligatorio
  <h3>...</h3>  ← Heading para estructura
  <a href="...">  ← Link semántico
</article>
```

### Schema.org (JSON-LD)

Para máximo SEO, agregar en la página padre:

```astro
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "Terapia de Sonido",
  "description": "Sumérgete en vibraciones sanadoras...",
  "provider": {
    "@type": "LocalBusiness",
    "name": "Marce Anahata",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Medellín",
      "addressCountry": "CO"
    }
  },
  "offers": {
    "@type": "Offer",
    "priceCurrency": "COP",
    "price": "150000"
  }
}
</script>
```

### Accesibilidad

El componente incluye:
- ✅ Alt texts descriptivos
- ✅ Semántica HTML correcta
- ✅ Contraste de color adecuado
- ✅ Texto suficiente en botón CTA
- ✅ Focus visible en enlaces

## Ejemplos de implementación

### Ejemplo 1: Home page con grid de servicios

```astro
---
import ServiceCard from '../components/cards/ServiceCard.astro';

const servicios = [
  {
    titulo: "Terapia de Sonido",
    descripcion: "Sumérgete en vibraciones sanadoras con cuencos tibetanos.",
    imagen: "/images/terapia/sonido.webp",
    duracion: "60 minutos",
    link: "/terapia-sonido"
  },
  {
    titulo: "Clases de Yoga",
    descripcion: "Conecta cuerpo y mente a través del movimiento consciente.",
    imagen: "/images/clases/yoga.webp",
    duracion: "90 minutos",
    link: "/clases"
  },
  {
    titulo: "Bienestar Corporativo",
    descripcion: "Programas diseñados para equipos y empresas.",
    imagen: "/images/corporativo/bienestar.webp",
    duracion: "Flexible",
    link: "/bienestar-corporativo"
  }
];
---

<Layout title="Servicios">
  <section class="py-24 max-w-7xl mx-auto px-6">
    <h1 class="text-4xl font-serif mb-12">Nuestros Servicios</h1>
    
    <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
      {servicios.map((s) => (
        <ServiceCard {...s} />
      ))}
    </div>
  </section>
</Layout>
```

### Ejemplo 2: Página de rituales

```astro
---
import ServiceCard from '../components/cards/ServiceCard.astro';

const rituales = [
  {
    titulo: "Baby Blessing",
    descripcion: "Ritual de bienvenida para el recién nacido. Bendiciones de comunidad.",
    imagen: "/images/rituales/baby-blessing.webp",
    duracion: "120 minutos",
    link: "/ritual-baby-blessing"
  },
  {
    titulo: "Círculo de Mujeres",
    descripcion: "Espacio sagrado de contención y sisterhood.",
    imagen: "/images/rituales/circulo.webp",
    duracion: "150 minutos",
    link: "/rituales"
  },
  // ... más rituales
];
---

<section>
  <h2>Rituales para momentos clave</h2>
  <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
    {rituales.map((r) => (
      <ServiceCard {...r} />
    ))}
  </div>
</section>
```

### Ejemplo 3: Personalizando estilos

```astro
---
import ServiceCard from '../components/cards/ServiceCard.astro';
---

<style>
  /* Personalizar tamaño de tarjetas -->
  :global(.service-card) {
    max-width: 400px;
  }
  
  /* Cambiar efecto hover -->
  :global(.service-card img) {
    transition: transform 1s cubic-bezier(0.4, 0, 0.2, 1);
  }
</style>

<div class="grid gap-12 max-w-5xl">
  <ServiceCard ... />
</div>
```

## Variantes y extensiones

### Variante 1: Con precio

Agregar precio al componente:

```astro
// En ServiceCard.astro
interface Props {
  titulo: string;
  descripcion: string;
  imagen: string;
  duracion: string;
  precio?: string;  // ← Nuevo
  link: string;
}

const { precio } = Astro.props;

// En el HTML:
{precio && (
  <p class="text-2xl font-semibold text-marce-base-1 my-2">
    ${precio}
  </p>
)}
```

### Variante 2: Con rating

```astro
interface Props {
  titulo: string;
  descripcion: string;
  imagen: string;
  duracion: string;
  link: string;
  rating?: number;  // ← Nuevo (1-5)
}

// En el HTML:
{rating && (
  <div class="flex justify-center gap-1">
    {[...Array(Math.round(rating))].map(() => (
      <span class="text-yellow-500">★</span>
    ))}
  </div>
)}
```

### Variante 3: Con badge

```astro
interface Props {
  titulo: string;
  descripcion: string;
  imagen: string;
  duracion: string;
  link: string;
  badge?: string;  // ← Nuevo (ej: "Nuevo", "Popular")
}

// En el HTML:
{badge && (
  <div class="absolute top-4 right-4 bg-marce-base-1 text-white px-3 py-1 rounded-full text-xs font-semibold">
    {badge}
  </div>
)}
```

## Responsividad

El componente es responsive automáticamente:

- **Móvil**: Full width, imagen h-48 (más compacta)
- **Tablet**: Grid 2 columnas
- **Desktop**: Grid 3-4 columnas

Para ajustar en grid padre:

```astro
<!-- 2 columnas en móvil, 3 en tablet, 4 en desktop -->
<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
  {servicios.map((s) => (
    <ServiceCard {...s} />
  ))}
</div>

<!-- O más simple: 3 columnas en desktop -->
<div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
  {servicios.map((s) => (
    <ServiceCard {...s} />
  ))}
</div>
```

## Performance

### Lazy loading

Automático en el componente:
```astro
<img loading="lazy" />  ← Solo carga si es visible
```

### Optimización de imágenes

1. **Comprimir**: https://squoosh.app/
   - Tamaño: 1200x768px
   - Formato: WebP o JPG
   - Peso: < 150KB

2. **Usar WebP**:
   ```astro
   imagen="/images/servicios/yoga.webp"  ← Mejor compresión
   ```

3. **Lazy loading avanzado**:
   ```astro
   <img 
     src={imagen}
     loading="lazy"
     decoding="async"  ← Decodifica de forma asíncrona
   />
   ```

## Troubleshooting

### Problema: Imagen distorsionada

**Causa**: Ratio incorrecto

**Solución**: 
- Usar imágenes 1200x768px
- Verificar `object-cover` en CSS (ya está)

### Problema: Texto se desborda

**Causa**: Descripción muy larga

**Solución**:
- Limitar descripción a 2 oraciones
- O usar `line-clamp` en CSS:

```astro
<p class="line-clamp-3">  ← Max 3 líneas
  {descripcion}
</p>
```

### Problema: Botón no clickeable

**Causa**: Z-index de overlay

**Solución**: El overlay tiene `z-10`, el botón está debajo sin overlay, por lo que siempre es clickeable ✓

### Problema: Hover effect muy rápido/lento

**Causa**: `duration-700` puede no ser ideal

**Solución**: Cambiar en `ServiceCard.astro`:

```astro
<!-- Más rápido -->
transition-transform duration-300

<!-- Más lento -->
transition-transform duration-1000
```

### Problema: Sombra no se ve

**Causa**: Fondo con color similar

**Solución**: Cambiar `shadow-sm` a `shadow-md` o `shadow-lg`

### Problema: Link no lleva a donde debe

**Causa**: Ruta incorrecta

**Solución**:
```astro
<!-- ✅ Correcto -->
link="/terapia-sonido"
link="/rituales/baby-blessing"

<!-- ❌ Incorrecto -->
link="terapia-sonido"  ← Falta /
link="https://..."     ← Usar rutas relativas
```

## Integración con otras herramientas

### Con formulario de contacto

```astro
<a 
  href="/contacto"
  onclick="document.getElementById('servicio').value = '{titulo}'"
>
  Ver detalles y Reservar
</a>
```

### Con calendario de reservas

```astro
<a 
  href="/reservar?servicio={titulo.toLowerCase().replace(' ', '-')}"
>
  Ver detalles y Reservar
</a>
```

### Con carrito de compras

Agregar data attribute:

```astro
<a 
  href="/carrito/agregar"
  data-producto={titulo}
  data-precio="150000"
>
  Ver detalles y Reservar
</a>
```

## Casos de uso

✅ Home page (sección de servicios)
✅ Página dedicada /servicios
✅ Página de rituales
✅ Página de clases
✅ Página de bienestar corporativo
✅ Blog post sobre servicios
✅ Email newsletter
✅ Social media posts

## Mantenimiento

### Agregar servicio

1. Agregar data a array o JSON
2. Usar componente con props
3. Imagen se carga automáticamente

```astro
<ServiceCard
  titulo="Nuevo Servicio"
  descripcion="..."
  imagen="/images/nuevo.webp"
  duracion="60 minutos"
  link="/nuevo-servicio"
/>
```

### Cambiar estilos globales

Editar en `ServiceCard.astro` todos los estilos de una vez

### Actualizar imágenes

1. Nuevas imágenes a `/public/images/servicios/`
2. Actualizar rutas en props
3. Listo

## Ejemplo completo de uso

```astro
---
import Layout from '../layouts/Layout.astro';
import ServiceCard from '../components/cards/ServiceCard.astro';

const servicios = [
  {
    titulo: "Terapia de Sonido",
    descripcion: "Sumérgete en vibraciones sanadoras con cuencos tibetanos. Facilita la relajación profunda y el bienestar emocional en sesiones de 60 minutos.",
    imagen: "/images/terapia/sonido.webp",
    duracion: "60 minutos",
    link: "/terapia-sonido"
  },
  {
    titulo: "Clases de Yoga",
    descripcion: "Conecta cuerpo y mente a través del movimiento consciente. Clases diseñadas para todos los niveles con énfasis en presencia.",
    imagen: "/images/clases/yoga.webp",
    duracion: "90 minutos",
    link: "/clases"
  },
  {
    titulo: "Rituales Personalizados",
    descripcion: "Ceremonias diseñadas especialmente para ti. Desde cumpleaños hasta despedidas, marcamos hitos importantes con intención.",
    imagen: "/images/rituales/personalizados.webp",
    duracion: "120 minutos",
    link: "/rituales"
  },
  {
    titulo: "Bienestar Corporativo",
    descripcion: "Programas para equipos. Reducción de estrés, mindfulness y conexión en el workplace.",
    imagen: "/images/corporativo/bienestar.webp",
    duracion: "Flexible",
    link: "/bienestar-corporativo"
  }
];
---

<Layout title="Servicios">
  <main class="max-w-7xl mx-auto px-6 py-24">
    <header class="text-center mb-16">
      <h1 class="text-4xl md:text-5xl font-serif text-marce-base-3 mb-4">
        Nuestros Servicios
      </h1>
      <p class="text-lg text-marce-base-3/70 max-w-2xl mx-auto">
        Experiencias diseñadas para tu bienestar integral
      </p>
    </header>

    <section class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
      {servicios.map((servicio) => (
        <ServiceCard {...servicio} />
      ))}
    </section>

    <section class="mt-24 text-center">
      <h2 class="text-2xl font-serif mb-6">¿No encuentras lo que buscas?</h2>
      <a href="/contacto" class="btn btn-primary">
        Contáctame para consultas personalizadas
      </a>
    </section>
  </main>
</Layout>
```

## Conclusión

`ServiceCard` es un componente **robusto, flexible y fácil de mantener** que:
- Requiere mínima configuración
- Es reutilizable en múltiples contextos
- Está optimizado para SEO y accesibilidad
- Tiene excelente rendimiento visual
- Se personaliza fácilmente

---

**Última actualización**: 29 de diciembre, 2024
