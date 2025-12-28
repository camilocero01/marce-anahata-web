# Marce Anahata Web

Sitio en Astro 5 con Tailwind CSS 4 y contenido de blog gestionado con `astro:content`. Este README refleja el estado actual del proyecto y cómo trabajar con él.

## 🚀 Tech Stack

- Astro `^5.16.5`
- Tailwind CSS `^4.1.18` (+ Typography)
- Content Collections (`astro:content`)
- RSS & Sitemap (`@astrojs/rss`, `@astrojs/sitemap`)
- Swiper para sliders

## 📁 Estructura principal

```
marce-anahata-web/
├─ public/                # assets estáticos
├─ src/
│  ├─ assets/             # imágenes y media internas
│  ├─ components/         # componentes Astro
│  ├─ content/
│  │  ├─ config.ts        # esquema Zod de blog
│  │  └─ blog/            # artículos (.md)
│  ├─ layouts/            # Layout.astro
│  ├─ pages/              # rutas del sitio
│  └─ styles/             # CSS global + Tailwind
├─ astro.config.mjs
├─ tailwind.config.js
├─ tsconfig.json
├─ vercel.json
└─ package.json
```

## 📝 Contenido del blog

- Esquema en `src/content/config.ts`:
	- `title`, `description`, `pubDate`, `updatedDate?`, `draft` (boolean), `author`, `tags: string[]`, `image?`, `canonical?`, `ogImage?`
- Cada post es un `.md` bajo `src/content/blog/` con frontmatter acorde al esquema.
- Importante: usar `pubDate` (no `date`).

## 🧩 Bloques de posts y filtros

Se muestran 3 posts por bloque, ordenados por fecha desc (últimos primero) y excluyendo borradores por defecto (`!data.draft`).

- Rituales (overview y detalle): tag `rituales`
- Clases: tag `yoga` OR `meditación`
- Bienestar corporativo: tag `burnout` OR `bienestar corporativo`
- Terapia de sonido: tag `terapia de sonido`
- Sobre mí: tag `Marce Anahata`
- Blog detalle y 404: globales sin filtro (últimos publicados)

Orden global (no random):

```ts
.sort((a, b) => new Date(b.data.pubDate).getTime() - new Date(a.data.pubDate).getTime())
.slice(0, 3)
```

## 🧪 Uso de borradores (drafts)

- Marca un borrador con `draft: true` en el frontmatter.
- En desarrollo, puedes incluir borradores con:

```ts
const includeDrafts = import.meta.env.DEV; // true en dev
const posts = await getCollection('blog', ({ data }) => includeDrafts ? true : !data.draft);
```

- Previsualización por URL:

```ts
const includeDrafts = import.meta.env.DEV || Astro.url.searchParams.get('preview') === '1';
```

- Para producción, usa un secreto sencillo:

```ts
const includeDrafts = Astro.url.searchParams.get('preview') === import.meta.env.PUBLIC_PREVIEW_SECRET;
// Define PUBLIC_PREVIEW_SECRET en variables de entorno
```

## 🧞 Comandos

Todos desde la raíz del proyecto:

| Comando         | Acción                                  |
|-----------------|------------------------------------------|
| `npm install`   | Instala dependencias                     |
| `npm run dev`   | Levanta dev server en `localhost:4321`   |
| `npm run build` | Compila producción en `./dist/`          |
| `npm run preview`| Previsualiza build local                 |
| `npm run astro` | CLI de Astro (`add`, `check`, etc.)      |

## 🛠️ Cambios recientes

- Se reemplazó el orden aleatorio por orden por fecha (desc) en todos los bloques.
- Página 404 rediseñada con últimos 3 posts globales.
- Página de detalle de blog muestra últimos 3 posts globales y excluye el actual.
- Se revirtió la sección de servicios del home al diseño original (grid 4 columnas, CTA "Saber más →").

## ❗ Troubleshooting

- Error al ejecutar `npm run dev` (Exit Code 1):
	- Verifica que los posts usen `pubDate` y no `date`.
	- Evita extensiones inválidas (por ejemplo, `.md2`). Debe ser `.md`.
	- Revisa el frontmatter requerido por `src/content/config.ts`.
	- Si falla Tailwind 4, elimina caché (`node_modules/.cache`) y reinstala.

## 🚢 Deploy

- Vercel recomendado (incluye `vercel.json`).
- Ejecuta el build con `npm run build` y sirve `./dist/`.

---

Documentación Astro: https://docs.astro.build • Discord: https://astro.build/chat