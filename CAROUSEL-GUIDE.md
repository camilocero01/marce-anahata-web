# Guía de uso: Carrusel de imágenes en posts

## Componente ImageCarousel

El componente `ImageCarousel.astro` permite incluir galerías de imágenes interactivas en tus posts de blog, optimizadas para SEO y rendimiento.

### Características

- ✅ **SEO optimizado**: Todos los alt texts y captions son indexables
- ✅ **Responsive**: Se adapta automáticamente a móvil, tablet y desktop
- ✅ **Lazy loading**: Las imágenes solo cargan cuando son visibles
- ✅ **Navegación múltiple**: Flechas, dots, teclado y gestos táctiles
- ✅ **Autoplay inteligente**: Se pausa al interactuar o hacer hover
- ✅ **Accesibilidad**: Navegable con teclado (flechas ← →)

### Cómo usarlo

#### 1. Convierte tu post a `.mdx`

Cambia la extensión de `.md` a `.mdx` en `src/content/blog/`:

```
tu-post.md  →  tu-post.mdx
```

#### 2. Importa el componente

Al inicio del archivo MDX (después del frontmatter), añade:

```mdx
---
title: "Tu título"
description: "Tu descripción"
# ... resto del frontmatter
---

import ImageCarousel from '../../components/ImageCarousel.astro';
```

#### 3. Usa el carrusel

Inserta el componente donde quieras mostrar imágenes:

```mdx
<ImageCarousel 
  id="nombre-unico"
  images={[
    {
      src: "/images/tu-carpeta/imagen-1.webp",
      alt: "Descripción detallada de la imagen para SEO",
      caption: "Texto opcional que aparece sobre la imagen"
    },
    {
      src: "/images/tu-carpeta/imagen-2.webp",
      alt: "Otra descripción SEO-friendly",
      caption: "Otra caption opcional"
    }
  ]}
/>
```

### Parámetros

| Parámetro | Tipo | Requerido | Descripción |
|-----------|------|-----------|-------------|
| `id` | string | Sí | Identificador único (ej: "altar", "ceremonia") |
| `images` | array | Sí | Array de objetos con `src`, `alt` y `caption` |
| `src` | string | Sí | Ruta a la imagen (relativa a `/public`) |
| `alt` | string | Sí | Texto alternativo para SEO y accesibilidad |
| `caption` | string | No | Texto que se superpone en la imagen |

### Buenas prácticas para SEO

#### Alt texts efectivos

❌ Malo: `alt: "imagen1"`  
✅ Bueno: `alt: "Altar decorado con velas, flores blancas y elementos naturales para el círculo de mujeres"`

- Describe qué muestra la imagen
- Incluye palabras clave relevantes
- Sé específico y descriptivo
- Mantén entre 80-125 caracteres

#### Captions emocionales

Los captions añaden contexto y emoción:

```mdx
caption: "Cada elemento tiene un propósito: las velas representan la luz interior"
```

#### Nombres de archivos SEO-friendly

❌ Malo: `IMG_1234.jpg`  
✅ Bueno: `meditacion-circulo-mujeres-medellin.webp`

#### Formato de imagen recomendado

- **WebP**: Mejor compresión y calidad (preferido)
- **JPG**: Fotos con muchos colores
- **PNG**: Si necesitas transparencia
- Tamaño recomendado: 1200x750px (ratio 16:10)
- Peso máximo: 200KB por imagen

### Ejemplos completos

#### Carrusel simple (2 imágenes)

```mdx
<ImageCarousel 
  id="intro"
  images={[
    {
      src: "/images/ritual/preparacion.webp",
      alt: "Espacio ceremonial preparado con cojines en círculo"
    },
    {
      src: "/images/ritual/altar.webp",
      alt: "Altar central con velas y flores para ritual de luna nueva"
    }
  ]}
/>
```

#### Carrusel con captions (múltiples imágenes)

```mdx
<ImageCarousel 
  id="ceremonia"
  images={[
    {
      src: "/images/terapia/cuencos-tibetanos.webp",
      alt: "Set de cuencos tibetanos de diferentes tamaños para terapia de sonido",
      caption: "Cada cuenco tiene una frecuencia específica"
    },
    {
      src: "/images/terapia/gong-ceremonial.webp",
      alt: "Gong ceremonial dorado usado en sesiones de sanación sonora",
      caption: "El gong induce estados profundos de relajación"
    },
    {
      src: "/images/terapia/persona-recibiendo-sonido.webp",
      alt: "Persona acostada recibiendo terapia de sonido con cuencos tibetanos",
      caption: "Las vibraciones trabajan a nivel celular"
    }
  ]}
/>
```

### Navegación

Los usuarios pueden moverse por el carrusel de varias formas:

- **Desktop**: Flechas laterales, dots, teclado (← →), arrastre con mouse
- **Móvil/Tablet**: Swipe táctil, dots
- **Autoplay**: Avanza automáticamente cada 4 segundos (se pausa al interactuar)

### Personalización

Si necesitas modificar el estilo del carrusel, edita:

```
src/components/ImageCarousel.astro
```

Colores y estilos principales:
- Botones: `background: rgba(93, 90, 140, 0.8)` (violeta marca)
- Dots activos: `#5d5a8c` (violeta marca)
- Transiciones: `duration-300` (Tailwind)

### Estructura de carpetas recomendada

```
public/
└── images/
    ├── experiencias/     # Posts de vivencias
    ├── ritual/           # Imágenes de rituales
    ├── terapia/          # Terapia de sonido
    ├── clases/           # Yoga y meditación
    └── corporativo/      # Bienestar corporativo
```

### Troubleshooting

**Problema**: Las imágenes no se ven  
**Solución**: Verifica que la ruta comience con `/images/` y que el archivo esté en `/public/images/`

**Problema**: El carrusel no se mueve  
**Solución**: Asegúrate de que `id` sea único en cada carrusel del mismo post

**Problema**: Error al compilar  
**Solución**: Verifica que el archivo sea `.mdx` (no `.md`) y que hayas importado el componente

**Problema**: Imágenes muy pesadas  
**Solución**: Comprime con https://squoosh.app/ o convierte a WebP

### Ejemplo real

Ver implementación completa en:
```
src/content/blog/6-ritual.mdx
```

---

**Tip pro**: Combina carruseles con texto descriptivo entre ellos. Esto mejora el SEO y da contexto a los lectores sobre lo que están viendo.
