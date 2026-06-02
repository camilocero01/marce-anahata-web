import sharp from 'sharp';
import path from 'node:path';

// Dimensiones por defecto (coinciden con /images/social-preview-wa.jpg).
const FALLBACK = { width: 1200, height: 634 };

// Cache para no leer el mismo archivo varias veces durante el build.
const cache = new Map<string, { width: number; height: number }>();

/**
 * Lee las dimensiones reales de una imagen ubicada en /public en tiempo de build.
 * WhatsApp/Facebook necesitan og:image:width y og:image:height correctos para
 * renderizar la vista previa al instante. Devuelve un fallback si la imagen es
 * remota o no se puede leer.
 */
export async function getOgImageSize(image: string): Promise<{ width: number; height: number }> {
  if (!image || image.startsWith('http')) return FALLBACK;
  if (cache.has(image)) return cache.get(image)!;

  try {
    const filePath = path.join(process.cwd(), 'public', image.replace(/^\//, ''));
    const meta = await sharp(filePath).metadata();
    const size = meta.width && meta.height
      ? { width: meta.width, height: meta.height }
      : FALLBACK;
    cache.set(image, size);
    return size;
  } catch {
    return FALLBACK;
  }
}
