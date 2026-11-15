import { mkdirSync, statSync } from "node:fs";
import { dirname, extname, join } from "node:path";
import { fileURLToPath } from "node:url";
import sharp from "sharp";

const root = dirname(dirname(fileURLToPath(import.meta.url)));
const assets = join(root, "assets");
const sourceFiles = [
  "joyful_1.jpg",
  "joyful_2.jpg",
  "joyful_3.jpg",
  "joyful_4.jpg",
  "joyful_5.jpg",
  "sorrowful_1.jpg",
  "sorrowful_2.jpg",
  "sorrowful_3.jpg",
  "sorrowful_4.jpg",
  "sorrowful_5.jpg",
  "glorious_1.jpg",
  "glorious_2.jpg",
  "glorious_3.jpg",
  "glorious_4.jpg",
  "glorious_5.jpg",
  "luminous_1.jpg",
  "luminous_2.jpg",
  "luminous_3.jpg",
  "luminous_4.jpg",
  "luminous_5-v2.png",
  "divine-mercy-v2.png",
  "completion-angels.png"
];

mkdirSync(assets, { recursive: true });

let originalBytes = 0;
let optimizedBytes = 0;

for (const file of sourceFiles) {
  const source = join(assets, file);
  const output = join(assets, `${file.slice(0, -extname(file).length)}.webp`);
  originalBytes += statSync(source).size;

  await sharp(source)
    .rotate()
    .resize({
      width: 1024,
      height: 1024,
      fit: "inside",
      withoutEnlargement: true
    })
    .webp({
      quality: 84,
      alphaQuality: 90,
      effort: 6,
      smartSubsample: true
    })
    .toFile(output);

  optimizedBytes += statSync(output).size;
}

const formatMiB = bytes => `${(bytes / 1024 / 1024).toFixed(2)} MiB`;
const reduction = Math.round((1 - optimizedBytes / originalBytes) * 100);

console.log(`Optimized ${sourceFiles.length} images: ${formatMiB(originalBytes)} -> ${formatMiB(optimizedBytes)} (${reduction}% smaller)`);
