# Marce Anahata Web - AI Coding Instructions

## Project Overview
Wellness center website for Marce Anahata built with **Astro 5** + **Tailwind CSS 4**. Provides services (Kundalini Yoga, sound therapy, sacred rituals, corporate wellness) in Medellín, Colombia. Hosted on Vercel with Spanish content and Google Analytics via Partytown.

## Architecture & Tech Stack

### Core Technologies
- **Astro 5.16+**: Static-first MVC framework with `.astro` components
- **Tailwind CSS 4**: Using Vite plugin (`@tailwindcss/vite`) and `@theme` directive in CSS
- **Astro Integrations**: sitemap, compress, partytown (for GA optimization), RSS
- **Swiper.js**: For carousels/sliders (v12)
- No React/Vue/Svelte - pure Astro components

### Key File Structure
```
src/
├── pages/           # File-based routing (e.g., rituales.astro → /rituales)
├── layouts/         # Layout.astro: global wrapper with nav, footer, SEO, GA
├── components/      # Reusable .astro components (ServiceCard, ReviewsSection, etc.)
├── content/         # Content collections (blog/ with Markdown + frontmatter)
├── data/            # Static JSON files (reviews.json, rituales.json)
├── assets/          # Images imported as ESM (optimized by Astro)
├── styles/          # global.css with Tailwind 4 @theme directive
public/              # Static files served as-is (robots.txt, sitemap.xml, videos/)
```

## Development Workflows

### Commands
```bash
npm run dev      # Start dev server at localhost:4321
npm run build    # Build for production → dist/
npm run preview  # Preview production build locally
```

### Adding New Pages
1. Create `.astro` file in `src/pages/` (e.g., `nueva-pagina.astro`)
2. Wrap content in `<Layout title="..." description="...">` from `src/layouts/Layout.astro`
3. Route automatically generated: `/nueva-pagina` (no trailing slash per `trailingSlash: 'never'`)

### Blog Posts
- Add `.md` files to `src/content/blog/` with frontmatter matching schema in [src/content/config.ts](src/content/config.ts):
  - Required: `title`, `description`, `pubDate`, `author`, `tags`
  - Optional: `updatedDate`, `draft`, `image`, `ogImage`, `canonical`
- Retrieve posts with `await getCollection('blog', ({ data }) => !data.draft)`
- Blog pages: `blog.astro` (list), `blog/[slug].astro` (detail), `blog/page/[page].astro` (pagination)

## Design System & Conventions

### Custom Colors (Tailwind 4)
Defined in [src/styles/global.css](src/styles/global.css) using `@theme`:
- `--color-marce-base-1: #5d5a8c` (purple) → `bg-marce-base-1`, `text-marce-base-1`
- `--color-marce-base-2: #6ed8d9` (teal) → `bg-marce-base-2`, `text-marce-base-2`
- `--color-marce-base-3: #243c5a` (dark blue) → `bg-marce-base-3`, `text-marce-base-3`

### Reusable Button Class
`.btn-claro` in [global.css](src/styles/global.css): Purple button with hover states. Use for primary CTAs:
```astro
<a href="/rituales" class="btn-claro">Ver Rituales</a>
```

### Image Handling
- **Import from `src/assets/`** for optimization: `import img from '../assets/hero.webp'`
- Use `<Image>` from `astro:assets` with `width` and `densities={[1.5, 2]}` for responsive images
- **Public static images**: Reference directly as `/images/ritual/ritual-pareja.webp` (no import)

### Component Patterns
- **Props**: Define TypeScript interface in frontmatter, destructure in component
- **Data Sources**: Import JSON from `src/data/` or use `getCollection()` for blog posts
- **Styling**: Tailwind utility classes + custom `.btn-claro`, no CSS modules

## SEO & Performance

### Layout Features
[src/layouts/Layout.astro](src/layouts/Layout.astro) provides:
- SEO meta tags (OG, Twitter, canonical)
- JSON-LD schema for local business (HealthAndBeautyBusiness)
- Google Analytics via Partytown (non-blocking)
- Fixed navigation with mobile hamburger menu (using `<details>`)

### Vercel Config
[vercel.json](vercel.json) sets aggressive caching:
- `/_astro/*`, `/assets/*`: 1 year immutable
- Images: 1 week with revalidation

### Site Settings
- `site: 'https://marce-anahata-web.vercel.app'` in [astro.config.mjs](astro.config.mjs)
- `trailingSlash: 'never'` - URLs like `/contacto` (not `/contacto/`)
- `prefetch: true` - Hover to prefetch links
- Sitemap excludes `/links` and `/privacidad`

## Content Guidelines

### Service Pages Pattern
Services (yoga, sound therapy, rituals) follow this structure:
1. **Hero section**: Full-height with background image/video, title, CTA
2. **Description section**: 2-column text + image explaining service
3. **Features/Benefits**: Grid of cards with icons (3-column on desktop)
4. **Reviews**: Filtered from `src/data/reviews.json` by service type
5. **CTA section**: WhatsApp link or booking button

### Ritual Pages
Each ritual has:
- Dedicated page (e.g., `ritual-cumpleanos.astro`)
- Entry in `src/data/rituales.json` with `id`, `titulo`, `descripcion`, `imagen`, `duracion`, `slug`
- BirthdayRitualPage.astro or similar component with 4-section structure

### Reviews System
[src/data/reviews.json](src/data/reviews.json) contains testimonials with:
- `nombre`, `bandera` (country code), `ubicacion` (service type), `texto`, `estrellas`, `foto`, `link`
- Filter reviews by service: `reviewsData.filter(review => review.ubicacion.includes('Ritual'))`

## Critical Considerations

### Astro-Specific
- **No client-side JS** by default - use `client:load` directive only when necessary (e.g., Swiper)
- **Static site generation**: All pages pre-rendered at build time (no SSR)
- **Content collections**: Type-safe with Zod schemas in `src/content/config.ts`

### Deployment
- Vercel auto-deploys from `main` branch
- Build command: `npm run build` (outputs to `dist/`)
- Node.js environment required

### Mobile Navigation
Uses `<details>` element for hamburger menu (see [Layout.astro](src/layouts/Layout.astro) line 125+). Ensure mobile menu remains accessible when adding nav links.

### Analytics
Google Tag (G-N2S592YWN3) loaded via Partytown web worker. Critical: `forward: ['dataLayer.push']` in astro.config.mjs to pass events to main thread.

## Common Tasks

### Add a New Service
1. Create page in `src/pages/nueva-servicio.astro`
2. Add images to `src/assets/nueva-servicio/`
3. Add nav link in [Layout.astro](src/layouts/Layout.astro) desktop + mobile menus
4. Update homepage [index.astro](src/pages/index.astro) services grid if needed

### Update Rituals
1. Add entry to [src/data/rituales.json](src/data/rituales.json)
2. Create dedicated page `ritual-nuevo.astro` with hero, description, features, booking
3. Add image to `public/images/ritual/`

### Modify Colors
Update `@theme` variables in [src/styles/global.css](src/styles/global.css) - changes apply globally to all `marce-base-*` utilities.
