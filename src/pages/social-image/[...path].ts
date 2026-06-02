import type { APIRoute } from 'astro';

// Endpoint SSR (serverless) que sirve las imágenes para vistas previas sociales
// SIEMPRE con HTTP 200 y sin soporte de rangos.
//
// Motivo: Vercel sirve los archivos estáticos de /public respondiendo 206
// (Partial Content) cuando el cliente envía un header `Range`. El fetcher de
// medios de WhatsApp pide por rangos y, al recibir 206 en una og:image, no
// renderiza la miniatura. Reenviar la imagen desde aquí garantiza un 200 limpio.
export const prerender = false;

export const GET: APIRoute = async ({ params, site }) => {
  const raw = params.path ?? '';
  // Seguridad: solo servir desde /images, sin path traversal.
  const clean = raw.replace(/\.\.+/g, '').replace(/^\/+/, '');
  if (!clean) return new Response('Not found', { status: 404 });

  const origin = site?.origin ?? 'https://www.marceanahata.com';
  const upstream = await fetch(`${origin}/images/${clean}`);

  if (!upstream.ok) return new Response('Not found', { status: 404 });

  const buffer = await upstream.arrayBuffer();
  const type = upstream.headers.get('content-type') ?? 'image/jpeg';

  return new Response(buffer, {
    status: 200,
    headers: {
      'Content-Type': type,
      'Content-Length': String(buffer.byteLength),
      'Cache-Control': 'public, max-age=31536000, immutable',
    },
  });
};
