# Anahata Admin — Plan de proyecto

Aplicación de gestión interna para el negocio Anahata. Cubre clientes, agenda, consultas, tiqueteras y contabilidad básica.

---

## Stack tecnológico

| Capa | Tecnología |
|---|---|
| Frontend / Full-stack | Next.js 15 (App Router) |
| Estilos | TailwindCSS |
| Base de datos | Supabase (PostgreSQL) |
| Autenticación | Supabase Auth |
| Deploy | Vercel |
| Lenguaje | TypeScript |

**Costo estimado inicial: $0/mes**

---

## Descripción y justificación del stack

### Next.js 15 (App Router)

Next.js es un framework full-stack construido sobre React. A diferencia del sitio web actual (Astro, pensado para contenido estático), una aplicación de gestión requiere:

- **Renderizado dinámico por usuario:** cada sesión carga datos distintos (agenda del día, clientes, tiqueteras activas). Next.js maneja esto nativamente con Server Components y Client Components.
- **Rutas de API integradas:** permite crear endpoints backend dentro del mismo proyecto sin necesitar un servidor separado. Por ejemplo, la lógica de "al completar una cita, descontar la tiquetera" vive en una Route Handler de Next.js.
- **App Router:** el sistema de rutas moderno de Next.js organiza el proyecto en carpetas (`/clientes`, `/agenda`, `/tiqueteras`) de forma intuitiva y soporta layouts anidados, ideal para un panel con sidebar persistente.
- **Deploy en Vercel sin configuración:** Vercel es la empresa creadora de Next.js, por lo que el deploy es automático, con previews por rama y sin necesidad de configurar servidores.

> **Por qué no Astro para este proyecto:** Astro es excelente para sitios de contenido estático o con poca interactividad. Una app de gestión tiene formularios complejos, tablas con filtros, estados en tiempo real y lógica de negocio — escenarios donde Next.js brilla y Astro requeriría demasiados workarounds.

---

### TailwindCSS

Framework de estilos basado en clases de utilidad. Se mantiene del sitio web actual por dos razones principales:

- **Consistencia visual:** se puede reutilizar la misma paleta de colores, tipografía y espaciados que ya define la identidad de Anahata.
- **Velocidad de desarrollo:** no se necesita escribir CSS personalizado. Los componentes se construyen directamente en el HTML con clases descriptivas (`flex`, `rounded-lg`, `text-sm`, etc.), lo que acelera el prototipado de pantallas como formularios y tablas.

---

### Supabase (PostgreSQL)

Supabase es un Backend-as-a-Service (BaaS) de código abierto que ofrece una base de datos PostgreSQL con una capa de APIs generadas automáticamente.

- **Base de datos relacional (PostgreSQL):** los datos del negocio tienen relaciones claras — un cliente tiene varias tiqueteras, una tiquetera pertenece a un servicio, una cita consume una tiquetera. PostgreSQL es el motor más adecuado para este tipo de modelo, con soporte completo para claves foráneas, transacciones y consultas complejas.
- **SDK para JavaScript:** Supabase provee un cliente oficial que se usa directamente en Next.js para leer y escribir datos sin necesidad de construir una API REST desde cero.
- **Free tier suficiente para comenzar:** 500 MB de base de datos y 5 GB de almacenamiento son más que suficientes para los primeros años de operación de un negocio pequeño.
- **Consola visual:** permite ver, editar y consultar los datos directamente desde el navegador, sin necesidad de usar herramientas externas como DBeaver o pgAdmin.
- **Tiempo real (opcional):** si en el futuro se quiere ver la agenda actualizarse en vivo, Supabase soporta suscripciones en tiempo real sobre la base de datos sin configuración adicional.

---

### Supabase Auth

El módulo de autenticación incluido en Supabase, sin costo adicional.

- **Email + contraseña:** suficiente para un panel de administración privado. Solo la persona administradora necesita acceso.
- **Sesiones seguras con JWT:** las sesiones se manejan con tokens estándar de la industria. Next.js verifica el token en cada petición a través del middleware, asegurando que ninguna ruta del panel sea accesible sin login.
- **Sin usuarios públicos:** se puede deshabilitar el registro libre para que solo los usuarios creados manualmente desde la consola de Supabase puedan ingresar — ideal para una herramienta de uso interno.
- **Integración nativa con Next.js:** el paquete `@supabase/ssr` gestiona las cookies de sesión de forma compatible con el App Router de Next.js, sin configuración compleja.

---

### Vercel

Plataforma de deploy en la nube especializada en aplicaciones JavaScript y en particular Next.js.

- **Deploy automático desde Git:** cada push a la rama principal despliega una nueva versión en producción automáticamente. No se necesita configurar servidores, pipelines de CI/CD ni Docker.
- **Previews por rama:** cada rama de desarrollo genera una URL de preview temporal, útil para revisar cambios antes de publicarlos.
- **Subdominio gratuito:** permite publicar la app en una URL como `marce-admin.vercel.app` sin costo, o configurar un subdominio propio como `admin.tu-dominio.com`.
- **Free tier sin límite de proyectos:** se pueden tener tanto el sitio web (Astro) como la app de gestión (Next.js) en la misma cuenta de Vercel sin pagar nada.

---

### TypeScript

Superconjunto de JavaScript que agrega tipado estático al lenguaje.

- **Reduce errores en lógica de negocio crítica:** operaciones como descontar sesiones de una tiquetera, calcular saldos o validar estados (`activa | agotada | vencida`) son propensas a bugs si los tipos de datos no están definidos. TypeScript detecta estos errores antes de ejecutar el código.
- **Mejor experiencia de desarrollo:** el editor muestra autocompletado, documentación inline y errores en tiempo real al escribir código, lo que acelera el desarrollo y reduce el tiempo de depuración.
- **Tipos compartidos entre frontend y backend:** se define una sola vez la estructura de un `Cliente` o una `Tiquetera` y se reutiliza en toda la aplicación, garantizando consistencia.

---

## Arquitectura general

```
┌──────────────────────────────────────────────────────┐
│                     VERCEL                           │
│                                                      │
│  ┌─────────────────┐    ┌────────────────────────┐  │
│  │  marce-web      │    │  marce-admin (este)    │  │
│  │  (Astro static) │    │  (Next.js SSR)         │  │
│  │  marce.com      │    │  admin.marce.com       │  │
│  └─────────────────┘    └───────────┬────────────┘  │
└──────────────────────────────────────┼───────────────┘
                                       │
                         ┌─────────────▼────────────┐
                         │       SUPABASE            │
                         │  - PostgreSQL             │
                         │  - Auth                   │
                         │  - Storage (archivos)     │
                         └──────────────────────────┘
```

---

## Estructura del proyecto

```
marce-admin/
├── app/
│   ├── (auth)/
│   │   └── login/
│   │       └── page.tsx
│   ├── (dashboard)/
│   │   ├── layout.tsx              # Layout con sidebar
│   │   ├── page.tsx                # Dashboard principal
│   │   ├── clientes/
│   │   │   ├── page.tsx            # Listado de clientes
│   │   │   ├── nuevo/page.tsx
│   │   │   └── [id]/page.tsx       # Detalle / edición
│   │   ├── agenda/
│   │   │   └── page.tsx            # Calendario de citas
│   │   ├── tiqueteras/
│   │   │   ├── page.tsx
│   │   │   └── [id]/page.tsx
│   │   └── contabilidad/
│   │       └── page.tsx
│   ├── api/
│   │   └── ...                     # Route handlers si se necesitan
│   └── layout.tsx
├── components/
│   ├── ui/                         # Componentes base (botones, inputs)
│   ├── clientes/
│   ├── agenda/
│   ├── tiqueteras/
│   └── contabilidad/
├── lib/
│   ├── supabase/
│   │   ├── client.ts               # Cliente del lado del navegador
│   │   └── server.ts               # Cliente del lado del servidor
│   └── types.ts                    # Tipos TypeScript globales
├── middleware.ts                   # Protección de rutas (auth)
├── .env.local                      # Variables de entorno (no commitear)
└── ...config files
```

---

## Modelo de base de datos

### Clientes

```sql
create table clientes (
  id          uuid primary key default gen_random_uuid(),
  nombre      text not null,
  email       text unique,
  telefono    text,
  notas       text,
  created_at  timestamptz default now()
);
```

### Servicios

```sql
create table servicios (
  id                uuid primary key default gen_random_uuid(),
  nombre            text not null,
  descripcion       text,
  precio            numeric(10,2) not null,
  duracion_minutos  int,
  tipo              text check (tipo in ('individual', 'grupal')),
  activo            boolean default true
);
```

### Citas / Agenda

```sql
create table citas (
  id            uuid primary key default gen_random_uuid(),
  cliente_id    uuid references clientes(id),
  servicio_id   uuid references servicios(id),
  fecha_hora    timestamptz not null,
  estado        text check (estado in ('agendada', 'completada', 'cancelada')) default 'agendada',
  notas         text,
  created_at    timestamptz default now()
);
```

### Tiqueteras

```sql
create table tiqueteras (
  id                 uuid primary key default gen_random_uuid(),
  cliente_id         uuid references clientes(id),
  servicio_id        uuid references servicios(id),
  sesiones_totales   int not null,
  sesiones_usadas    int default 0,
  precio_pagado      numeric(10,2),
  fecha_compra       date default current_date,
  fecha_vencimiento  date,
  estado             text check (estado in ('activa', 'agotada', 'vencida')) default 'activa',
  created_at         timestamptz default now()
);

-- Registro de cada uso de tiquetera
create table uso_tiqueteras (
  id             uuid primary key default gen_random_uuid(),
  tiquetera_id   uuid references tiqueteras(id),
  cita_id        uuid references citas(id),
  fecha_uso      timestamptz default now()
);
```

> **Regla de negocio:** Al confirmar una cita que descuenta tiquetera, se inserta en `uso_tiqueteras` y se incrementa `sesiones_usadas`. Si `sesiones_usadas = sesiones_totales`, el estado pasa a `agotada`.

### Contabilidad

```sql
create table ventas (
  id          uuid primary key default gen_random_uuid(),
  cliente_id  uuid references clientes(id),
  fecha       date default current_date,
  total       numeric(10,2) not null,
  tipo        text check (tipo in ('tiquetera', 'producto', 'sesion_suelta')),
  referencia_id uuid,               -- id de la tiquetera o producto vendido
  notas       text,
  created_at  timestamptz default now()
);

create table items_venta (
  id              uuid primary key default gen_random_uuid(),
  venta_id        uuid references ventas(id),
  descripcion     text not null,
  cantidad        int default 1,
  precio_unitario numeric(10,2) not null
);
```

---

## Módulos y funcionalidades

### Dashboard
- Resumen del día: citas de hoy, tiqueteras próximas a vencer
- Ingresos del mes
- Últimos clientes registrados

### Clientes
- Listado con búsqueda y filtros
- Ficha de cliente: datos + historial de citas + tiqueteras activas
- Crear / editar / desactivar cliente

### Agenda
- Vista semanal/mensual de citas
- Crear cita: seleccionar cliente → servicio → fecha/hora
- Al completar cita: descontar tiquetera si aplica
- Estados: agendada → completada / cancelada

### Tiqueteras
- Listado: activas, agotadas, vencidas
- Crear tiquetera para un cliente (asociar a servicio)
- Detalle: sesiones usadas / restantes, historial de uso
- Alerta automática cuando quedan 1 o 2 sesiones

### Contabilidad
- Registro de ventas (tiqueteras + productos sueltos)
- Resumen mensual de ingresos por tipo
- Exportar a CSV (básico)

---

## Setup inicial paso a paso

### 1. Crear el proyecto

```bash
npx create-next-app@latest marce-admin \
  --typescript \
  --tailwind \
  --app \
  --src-dir=false \
  --import-alias="@/*"

cd marce-admin
```

### 2. Instalar dependencias principales

```bash
npm install @supabase/supabase-js @supabase/ssr
npm install @supabase/auth-helpers-nextjs   # helpers de auth para Next.js
```

### 3. Crear proyecto en Supabase

1. Ir a [supabase.com](https://supabase.com) → New project
2. Copiar `Project URL` y `anon public key`
3. Crear `.env.local`:

```env
NEXT_PUBLIC_SUPABASE_URL=https://xxxx.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=eyJ...
```

### 4. Crear las tablas

Ejecutar el SQL del modelo de datos en **Supabase → SQL Editor**, en el orden:
1. `clientes`
2. `servicios`
3. `citas`
4. `tiqueteras` + `uso_tiqueteras`
5. `ventas` + `items_venta`

### 5. Configurar autenticación

En Supabase → Authentication:
- Habilitar Email + Password
- Crear usuario administrador manualmente en la consola
- (Opcional) Deshabilitar signups públicos para que solo tú puedas acceder

### 6. Middleware de protección de rutas

```typescript
// middleware.ts
import { createMiddlewareClient } from '@supabase/auth-helpers-nextjs'
import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export async function middleware(req: NextRequest) {
  const res = NextResponse.next()
  const supabase = createMiddlewareClient({ req, res })
  const { data: { session } } = await supabase.auth.getSession()

  if (!session && !req.nextUrl.pathname.startsWith('/login')) {
    return NextResponse.redirect(new URL('/login', req.url))
  }

  return res
}

export const config = {
  matcher: ['/((?!_next/static|_next/image|favicon.ico).*)'],
}
```

### 7. Deploy en Vercel

```bash
# Conectar repositorio en vercel.com o via CLI:
npx vercel

# Agregar variables de entorno en Vercel dashboard:
# NEXT_PUBLIC_SUPABASE_URL
# NEXT_PUBLIC_SUPABASE_ANON_KEY
```

Configurar subdominio en Vercel: `admin.tu-dominio.com`

---

## Hoja de ruta (fases)

### Fase 1 — Base (semanas 1-3)
- [ ] Setup del proyecto (Next.js + Supabase + Auth)
- [ ] Login y protección de rutas
- [ ] Layout con navegación lateral
- [ ] Módulo de Clientes (CRUD completo)
- [ ] Módulo de Servicios

### Fase 2 — Core del negocio (semanas 4-7)
- [ ] Módulo de Agenda / Citas
- [ ] Módulo de Tiqueteras
- [ ] Lógica de consumo de sesiones al completar una cita
- [ ] Alertas de tiqueteras próximas a vencer/agotar

### Fase 3 — Contabilidad y reportes (semanas 8-9)
- [ ] Registro de ventas
- [ ] Dashboard con métricas del mes
- [ ] Exportar datos a CSV

---

## Costos estimados

| Servicio | Plan | Límite gratuito | Costo |
|---|---|---|---|
| Vercel | Hobby | Proyectos ilimitados | $0/mes |
| Supabase | Free | 500MB DB · 50k usuarios | $0/mes |
| Dominio | — | Subdominio de tu dominio actual | $0/mes |
| **Total inicial** | | | **$0/mes** |

Cuando el negocio escale:
- Supabase Pro: $25/mes (8GB DB, backups diarios)
- Vercel Pro: $20/mes (solo si necesitas más builds/ancho de banda)

---

## Repositorios relacionados

| Repo | Descripción |
|---|---|
| `marce-anahata-web` | Sitio web público (Astro) |
| `marce-admin` | Esta aplicación de gestión (Next.js) |
