const sharp = require('sharp');

async function createStudioBW() {
  const meta = await sharp('public/images/vivek.jpg').metadata();
  const width = meta.width;
  const height = meta.height;

  // Create an SVG radial vignette mask
  const vignetteSvg = Buffer.from(`
    <svg width="${width}" height="${height}" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <radialGradient id="vig" cx="50%" cy="36%" r="48%" fx="50%" fy="36%">
          <stop offset="0%" stop-color="#fff" stop-opacity="1" />
          <stop offset="45%" stop-color="#fff" stop-opacity="0.95" />
          <stop offset="70%" stop-color="#fff" stop-opacity="0.5" />
          <stop offset="90%" stop-color="#000" stop-opacity="0.08" />
          <stop offset="100%" stop-color="#000" stop-opacity="0" />
        </radialGradient>
      </defs>
      <rect width="100%" height="100%" fill="url(#vig)" />
    </svg>
  `);

  // Convert to high contrast B&W base
  const bwBase = await sharp('public/images/vivek.jpg')
    .grayscale()
    .linear(1.18, -14)
    .modulate({ brightness: 0.96 })
    .sharpen({ sigma: 1.2, m1: 0.5, m2: 2.0 })
    .toBuffer();

  // Create pure black canvas
  const blackBackground = await sharp({
    create: {
      width,
      height,
      channels: 4,
      background: { r: 0, g: 0, b: 0, alpha: 1 }
    }
  }).png().toBuffer();

  // Mask bwBase with vignette
  const maskedBw = await sharp(bwBase)
    .composite([{ input: vignetteSvg, blend: 'dest-in' }])
    .png()
    .toBuffer();

  // Composite over pure black background
  await sharp(blackBackground)
    .composite([{ input: maskedBw, blend: 'over' }])
    .jpeg({ quality: 95 })
    .toFile('public/images/vivek-bw-studio.jpg');

  await sharp(blackBackground)
    .composite([{ input: maskedBw, blend: 'over' }])
    .webp({ quality: 95 })
    .toFile('public/images/vivek-bw-studio.webp');

  console.log('Successfully generated public/images/vivek-bw-studio.jpg and webp');
}

createStudioBW().catch(console.error);
