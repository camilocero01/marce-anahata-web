# Marce Anahata Web - AI Coding Instructions

## Project Overview
Wellness center website for Marce Anahata built with **Astro 5** + **Tailwind CSS 4**. Provides services (Kundalini Yoga, sound therapy, sacred rituals, corporate wellness) in Medellín, Colombia. Hosted on Vercel with Spanish content and Google Analytics via Partytown.

**Performance Optimizations Applied:**
- ✅ Sprints 1-3 Lighthouse optimizations completed (preconnect, fetchpriority, lazy-loading, accessibility)
- ✅ Core Web Vitals: CLS 0.063, TBT 170ms, Performance Score 77/100
- ✅ SEO Score: 100/100, Accessibility: 96/100

## Architecture & Tech Stack

### Core Technologies
- **Astro 5.16+**: Static-first MVC framework with `.astro` components
- **Tailwind CSS 4**: Using Vite plugin (`@tailwindcss/vite`) and `@theme` directive in CSS
- **Astro Integrations**: sitemap (dynamic), compress, partytown (for GA optimization), RSS, @vercel/analytics
- **Swiper.js**: For carousels/sliders (v12)
- **Lighthouse**: For performance auditing (`npm run lighthouse`)
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
npm run dev           # Start dev server at localhost:4321
npm run build         # Build for production → dist/
npm run preview       # Preview production build locally
npm run lighthouse    # Run Lighthouse audit on homepage (requires production URL)
npm run lighthouse:all # Audit all priority pages
```

### Adding New Pages
1. Create `.astro` file in `src/pages/` (e.g., `nueva-pagina.astro`)
2. Wrap content in `<Layout title="..." description="...">` from `src/layouts/Layout.astro`
3. Route automatically generated: `/nueva-pagina` (no trailing slash per `trailingSlash: 'never'`)

### Blog Posts
- Add `.md` files to `src/content/blog/` with frontmatter matching schema in [src/content/config.ts](src/content/config.ts):
  - Required: `title`, `description`, `pubDate`, `author`, `tags`
  - Optional: `seoTitle` (for distinct SEO titles), `updatedDate`, `draft`, `image`, `ogImage`, `canonical`
- **Naming convention**: `N-titulo-del-post.md` (use numeric prefix for ordering, e.g., `6-nuevo-post.md`)
- Retrieve posts with `await getCollection('blog', ({ data }) => !data.draft)`
- Blog pages: `blog.astro` (list), `blog/[slug].astro` (detail), `blog/page/[page].astro` (pagination)

### Adding Blog Posts (Non-Technical Users)
1. **Via GitHub Web Interface**:
   - Go to repo → `src/content/blog/` → "Add file" → "Create new file"
   - Name: `6-titulo-del-post.md` (increment number from last post)
   - Copy frontmatter template:
     ```yaml
     ---
     title: "Título del Post"
     seoTitle: "Título SEO (opcional)"
     description: "Descripción breve del post"
     pubDate: "2026-01-06"
     heroImage: "/images/hero-post.webp"
     tags:
       - bienestar
       - yoga
     ---
     ```
   - Write content in Markdown below frontmatter
   - Commit to new branch → Create Pull Request → Merge to `main` triggers Vercel deployment

2. **Via GitHub Desktop**:
   - Create `.md` file locally in `src/content/blog/`
   - Add images to `public/images/` if needed
   - Commit and push → Auto-deploys on merge to `main`

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
- Use `<Image>` from `astro:assets` with explicit `width` and `height` attributes (prevents CLS)
- **Performance Best Practice**: Always specify dimensions to avoid layout shifts
  ```astro
  <Image src={heroImg} alt="Hero" width={1200} height={630} />
  ```
- Use `fetchpriority="high"` for hero/above-the-fold images
- **Public static images**: Reference directly as `/images/ritual/ritual-pareja.webp` (no import)

### Component Patterns
- **Props**: Define TypeScript interface in frontmatter, destructure in component
- **Data Sources**: Import JSON from `src/data/` or use `getCollection()` for blog posts
- **Styling**: Tailwind utility classes + custom `.btn-claro`, no CSS modules

## SEO & Performance

### Performance Optimizations Implemented
**Sprint 1** (Resource Hints):
- Preconnect to Google Analytics (`rel="preconnect"`)
- DNS-prefetch for external resources
- `fetchpriority="high"` on hero images
- Video optimization with `preload="metadata"` and poster attributes

**Sprint 2** (CLS Prevention):
- Explicit `width` and `height` on all blog images
- Eliminated Cumulative Layout Shift (CLS: 0.063 ✅)
- Cache headers optimized (1 year for assets, 7 days for images)

**Sprint 3** (Lazy Loading & Accessibility):
- Lazy-load WhatsApp widget (30% scroll or 3s timeout)
- Accessibility improvements: aria-expanded, aria-label on menu toggle
- Reduced Total Blocking Time (TBT: 170ms ✅)

**Current Metrics** (Lighthouse - Jan 2026):
- Performance: 77/100 (Target: 90+)
- Accessibility: 96/100 ✅
- Best Practices: 96/100 ✅
- SEO: 100/100 ✅
- LCP: 4.6s (needs optimization)
- CLS: 0.063 ✅
- TBT: 170ms ✅

### Layout Features
[src/layouts/Layout.astro](src/layouts/Layout.astro) provides:
- SEO meta tags (OG, Twitter, canonical, RSS link)
- JSON-LD schemas: LocalBusiness + Organization
- Google Analytics via Partytown (non-blocking)
- Vercel Analytics for Real User Monitoring
- Fixed navigation with mobile hamburger menu (using `<details>` with aria-expanded)
- Skip link for accessibility (hidden until focused)
- Lazy-loaded WhatsApp widget (scroll-triggered)

### Vercel Config
[vercel.json](vercel.json) sets aggressive caching:
- `/_astro/*`, `/assets/*`: 1 year immutable
- Images: 1 week with revalidation

### Site Settings
- `site: 'https://marceanahata.com'` in [astro.config.mjs](astro.config.mjs)
- `trailingSlash: 'never'` - URLs like `/contacto` (not `/contacto/`)
- `prefetch: true` - Hover to prefetch links
- Dynamic sitemap via `@astrojs/sitemap` (excludes `/blog/page/1`, `/blog/tag/*/page/1`)
- robots.txt configured with AI crawler permissions (GPTBot, CCBot, anthropic-ai)
- llms.txt policy file for LLM crawlers

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
Uses `<details>` element for hamburger menu (see [Layout.astro](src/layouts/Layout.astro) line 125+). Features:
- `aria-expanded` attribute that updates on toggle
- `aria-label` on summary element for screen readers
- Wrapped in semantic `<nav>` tag
- Ensure mobile menu remains accessible when adding nav links

### WhatsApp Widget
Lazy-loaded widget in [Layout.astro](src/layouts/Layout.astro):
- Triggers on 30% scroll or 3-second timeout
- Desktop-only (hidden on mobile)
- localStorage to remember closed state
- Shows business hours and direct WhatsApp link

### Analytics
- **Google Tag** (G-N2S592YWN3) loaded via Partytown web worker. Critical: `forward: ['dataLayer.push']` in astro.config.mjs to pass events to main thread.
- **Vercel Analytics** (`@vercel/analytics/astro`) for Real User Monitoring
- Track Core Web Vitals in Vercel Dashboard → Analytics tab

## Monitoring & Performance

### Lighthouse Audits
```bash
# Audit homepage
npm run lighthouse

# Audit all priority pages
npm run lighthouse:all
```
Reports saved to `lighthouse-reports/` (excluded from git). View HTML reports for detailed insights on:
- Core Web Vitals (LCP, FID, CLS, FCP, TTI, TBT)
- Opportunities for optimization
- Diagnostics and filmstrip

### Core Web Vitals Targets
- **LCP** (Largest Contentful Paint): < 2.5s
- **FID** (First Input Delay): < 100ms
- **CLS** (Cumulative Layout Shift): < 0.1 ✅ (Currently: 0.063)
- **FCP** (First Contentful Paint): < 1.8s
- **TTI** (Time to Interactive): < 3.8s
- **TBT** (Total Blocking Time): < 200ms ✅ (Currently: 170ms)

### Performance Documentation
- [CORE_WEB_VITALS_MONITORING.md](../CORE_WEB_VITALS_MONITORING.md): Comprehensive monitoring guide
- [QUICK_START_MONITORING.md](../QUICK_START_MONITORING.md): Quick reference for audits
- [LIGHTHOUSE_OPTIMIZATION.md](../LIGHTHOUSE_OPTIMIZATION.md): Sprint-based optimization plan

## Common Tasks

### Run Performance Audit
1. Ensure site is deployed to production
2. Run `npm run lighthouse` for homepage audit
3. Run `npm run lighthouse:all` for comprehensive audit
4. Review HTML reports in `lighthouse-reports/` folder
5. Compare metrics with targets in CORE_WEB_VITALS_MONITORING.md

### Add a New Blog Post
1. Create `.md` file in `src/content/blog/` with numeric prefix (e.g., `6-nuevo-post.md`)
2. Use frontmatter template with required fields (title, description, pubDate, tags)
3. Add `seoTitle` if page title should differ from visible title
4. Add hero image to `public/images/` if needed
5. Commit and push → Auto-deploys to Vercel on merge to `main`

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

## Performance Best Practices

### Images
- Always specify `width` and `height` attributes to prevent CLS
- Use `fetchpriority="high"` for above-the-fold images
- Prefer WebP format for better compression
- Use `loading="lazy"` for below-the-fold images (Astro default)

### Scripts & Resources
- Use `rel="preconnect"` for critical third-party origins
- Use `rel="dns-prefetch"` for third-party resources
- Defer non-critical JavaScript
- Lazy-load widgets and embeds (scroll-triggered or timeout-based)

### Accessibility
- Include `aria-label` on interactive elements without visible text
- Use `aria-expanded` for collapsible menus
- Maintain semantic HTML structure (nav, main, section, article)
- Ensure skip links are present and functional
- Test with keyboard navigation

### Content Strategy
- Write unique `seoTitle` for blog posts (distinct from display title)
- Keep meta descriptions between 150-160 characters
- Use descriptive alt text for all images
- Include relevant tags for blog posts (3-5 tags recommended)
- Maintain consistent numeric prefixes on blog post filenames for ordering
