// Genera una imagen Open Graph de 1200x630 (formato que WhatsApp/Facebook
// renderizan de forma confiable) a partir de cualquier foto, incluso vertical.
// Técnica: fondo difuminado de la misma imagen + foto nítida centrada encima.
//
// Uso:  node scripts/make-og-image.mjs <entrada> <salida>
// Ej.:  node scripts/make-og-image.mjs public/images/blog/foto.jpg public/images/blog/foto-og.jpg

import sharp from 'sharp';

const [, , input, output] = process.argv;

if (!input || !output) {
  console.error('Uso: node scripts/make-og-image.mjs <entrada> <salida>');
  process.exit(1);
}

const W = 1200;
const H = 630;

const fondo = await sharp(input)
  .resize(W, H, { fit: 'cover' })
  .blur(28)
  .modulate({ brightness: 0.62 })
  .toBuffer();

const frente = await sharp(input)
  .resize(W, H, { fit: 'inside', withoutEnlargement: false })
  .toBuffer();

await sharp(fondo)
  .composite([{ input: frente, gravity: 'center' }])
  .jpeg({ quality: 86, mozjpeg: true })
  .toFile(output);

console.log(`✓ Imagen OG 1200x630 creada: ${output}`);
