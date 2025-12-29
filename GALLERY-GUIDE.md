# Guía de uso: Galería de imágenes con Lightbox

## Componente ImageGallery

El componente `ImageGallery.astro` muestra imágenes en grid con lightbox (ampliación al hacer clic), optimizado para SEO y experiencia de usuario.

### Características

- ✅ **SEO optimizado**: Alt texts descriptivos indexables
- ✅ **Lightbox interactivo**: Amplía imágenes al hacer clic
- ✅ **Navegación completa**: Flechas, teclado (← →), contador de imágenes
- ✅ **Grid responsive**: 2, 3 o 4 columnas según configuración
- ✅ **Lazy loading**: Carga eficiente de imágenes
- ✅ **Accesibilidad**: Navegable con teclado, cerrable con ESC
- ✅ **Títulos opcionales**: Caption visible al hacer hover

### Diferencias con ImageCarousel

| Característica | ImageCarousel | ImageGallery |
|----------------|---------------|--------------|
| Vista | Carrusel (1 imagen visible) | Grid (todas visibles) |
| Navegación | Swipe, autoplay | Clic para ampliar |
| Uso ideal | Storytelling secuencial | Vista general rápida |
| Espacio | Ocupa menos altura | Muestra todo el contenido |

### Cómo usarlo

#### 1. Importa el componente (en archivo .mdx)

```mdx
---
title: "Tu post"
# ... frontmatter
---

import ImageGallery from '../../components/ImageGallery.astro';
```

#### 2. Usa la galería

```mdx
<ImageGallery 
  id="nombre-unico"
  columns={3}
  images={[
    {
      src: "/images/carpeta/foto-1.webp",
      alt: "Descripción SEO completa de la imagen",
      title: "Texto breve que aparece al hacer hover"
    },
    {
      src: "/images/carpeta/foto-2.webp",
      alt: "Otra descripción detallada para SEO"
    }
  ]}
/>
```

### Parámetros

| Parámetro | Tipo | Requerido | Default | Descripción |
|-----------|------|-----------|---------|-------------|
| `id` | string | Sí | - | Identificador único (ej: "galeria", "momentos") |
| `columns` | 2 \| 3 \| 4 | No | 3 | Número de columnas en desktop |
| `images` | array | Sí | - | Array de objetos con `src`, `alt` y `title` opcional |

#### Detalles de `images`

| Campo | Tipo | Requerido | Descripción |
|-------|------|-----------|-------------|
| `src` | string | Sí | Ruta a la imagen (ej: `/images/galeria/foto.webp`) |
| `alt` | string | Sí | Descripción para SEO y accesibilidad |
| `title` | string | No | Caption que aparece al hover en grid y en lightbox |

### Comportamiento del grid responsive

```
columns={2}  →  1 columna móvil, 2 desktop
columns={3}  →  1 móvil, 2 tablet, 3 desktop  (default)
columns={4}  →  2 móvil, 3 tablet, 4 desktop
```

### Navegación en Lightbox

Cuando el usuario hace clic en una imagen:

1. **Se abre el lightbox** con la imagen ampliada en pantalla completa
2. **Navegación disponible:**
   - Flechas laterales (clic)
   - Teclado: `←` anterior, `→` siguiente
   - `ESC` para cerrar
   - Clic fuera de la imagen para cerrar
3. **Info visible:**
   - Alt text + title (si existe) como caption
   - Contador: "3 / 8" (imagen actual / total)

### Buenas prácticas SEO

#### Alt texts descriptivos

❌ Malo:
```mdx
alt: "foto1"
```

✅ Bueno:
```mdx
alt: "Mujer en meditación con cuencos tibetanos durante sesión de terapia de sonido en Medellín"
```

**Tips:**
- Describe qué muestra la imagen
- Incluye contexto relevante (lugar, actividad, emoción)
- Usa palabras clave naturalmente
- Entre 80-125 caracteres ideal

#### Títulos concisos

Los `title` son opcionales pero añaden contexto emocional:

```mdx
{
  src: "/images/ritual/abrazo.webp",
  alt: "Participantes abrazadas al finalizar círculo de mujeres en ritual de cierre",
  title: "Contención y hermandad"
}
```

**Tips para titles:**
- Cortos (2-5 palabras)
- Emotivos o conceptuales
- Complementan el alt, no lo repiten

### Ejemplos completos

#### Galería simple (2 columnas)

```mdx
<ImageGallery 
  id="antes-despues"
  columns={2}
  images={[
    {
      src: "/images/transformacion/antes.webp",
      alt: "Espacio vacío antes de preparar para ritual"
    },
    {
      src: "/images/transformacion/despues.webp",
      alt: "Espacio transformado con altar, velas y cojines dispuestos en círculo"
    }
  ]}
/>
```

#### Galería estándar (3 columnas con títulos)

```mdx
<ImageGallery 
  id="elementos"
  columns={3}
  images={[
    {
      src: "/images/elementos/cuencos.webp",
      alt: "Cuencos tibetanos de bronce dispuestos en semicírculo",
      title: "Cuencos de 7 metales"
    },
    {
      src: "/images/elementos/gong.webp",
      alt: "Gong ceremonial de 80cm con baqueta de fieltro",
      title: "Gong planetario"
    },
    {
      src: "/images/elementos/cristales.webp",
      alt: "Cristales de cuarzo transparente y amatista sobre altar",
      title: "Cristales para amplificar"
    }
  ]}
/>
```

#### Galería grande (4 columnas, muchas fotos)

```mdx
## Galería completa del evento

<ImageGallery 
  id="evento-completo"
  columns={4}
  images={[
    {
      src: "/images/evento/llegada.webp",
      alt: "Participantes llegando al centro de bienestar"
    },
    {
      src: "/images/evento/registro.webp",
      alt: "Mesa de registro con esencias y bienvenida"
    },
    {
      src: "/images/evento/circulo.webp",
      alt: "Vista cenital del círculo de meditación"
    },
    {
      src: "/images/evento/sonido.webp",
      alt: "Facilitadora tocando cuenco tibetano durante ceremonia"
    },
    {
      src: "/images/evento/respiracion.webp",
      alt: "Grupo practicando respiración consciente en círculo"
    },
    {
      src: "/images/evento/compartir.webp",
      alt: "Participante sosteniendo bastón de la palabra"
    },
    {
      src: "/images/evento/te.webp",
      alt: "Mesa con tés y snacks saludables para cierre"
    },
    {
      src: "/images/evento/despedida.webp",
      alt: "Abrazo grupal de despedida con sonrisas"
    }
  ]}
/>
```

### Cuándo usar cada componente

**Usa ImageCarousel cuando:**
- Quieres contar una historia paso a paso
- Las imágenes tienen un orden narrativo
- Prefieres autoplay para guiar la atención
- Quieres que el usuario navegue secuencialmente

**Usa ImageGallery cuando:**
- Quieres mostrar muchas fotos de un evento
- El usuario debe elegir qué ver
- No hay orden específico importante
- Quieres vista rápida de todo el contenido

**Usa ambos en el mismo post cuando:**
- Primero: Carrusel para introducir/destacar 3-4 imágenes clave
- Después: Galería para mostrar todas las demás fotos

### Combinación ideal

```mdx
## Los momentos más especiales

<ImageCarousel 
  id="destacados"
  images={[
    // 3-4 mejores fotos con captions narrativos
  ]}
/>

## Galería completa

Explora todas las fotos del día. Haz clic para ampliar.

<ImageGallery 
  id="completa"
  columns={3}
  images={[
    // Todas las demás fotos
  ]}
/>
```

### Formato de imágenes recomendado

- **Formato**: WebP (mejor compresión)
- **Tamaño galería**: 800x800px (cuadradas) o 1200x800px
- **Peso máximo**: 150KB por imagen
- **Comprimir con**: https://squoosh.app/

### Accesibilidad

El componente incluye:
- ✅ `aria-label` en botones
- ✅ `role="dialog"` en lightbox
- ✅ Navegación por teclado
- ✅ Alt texts obligatorios
- ✅ Focus visible en elementos interactivos
- ✅ Cierre con ESC

### Personalización

Edita estilos en:
```
src/components/ImageGallery.astro
```

Variables principales:
- Grid gaps: `gap-4` (Tailwind)
- Hover overlay: `bg-black/20`
- Lightbox background: `bg-black/95`
- Color accent: `#6ed8d9` (turquesa marca)
- Transiciones: `duration-300`, `duration-500`

### Troubleshooting

**Problema**: Las imágenes se ven deformadas  
**Solución**: Usa `aspect-square` para grid cuadrado o ajusta en el código

**Problema**: El lightbox no cierra  
**Solución**: Verifica que el `id` sea único y no tengas conflictos de JavaScript

**Problema**: Imágenes no cargan  
**Solución**: Verifica rutas en `/public/images/` y que los archivos existan

**Problema**: En móvil las flechas tapan la imagen  
**Solución**: Están reducidas automáticamente en `@media (max-width: 768px)`

### Ejemplo real

Ver implementación en:
```
src/content/blog/6-ritual.mdx
```

---

**Tip pro**: Combina carrusel al inicio (storytelling) y galería al final (exploración libre) para la mejor experiencia de usuario.
