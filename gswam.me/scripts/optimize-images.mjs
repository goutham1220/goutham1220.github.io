#!/usr/bin/env node
/**
 * Optimize gallery images: generate WebP thumbnails (300px) and full-size (1500px).
 *
 * Usage: node scripts/optimize-images.mjs
 * Requires: sharp (npm install --save-dev sharp)
 */
import sharp from "sharp";
import { readdir, mkdir } from "fs/promises";
import path from "path";

const FULL_DIR = path.resolve("public/images/gallery/full");
const THUMB_DIR = path.resolve("public/images/gallery/thumbs");
const THUMB_WIDTH = 300;
const FULL_WIDTH = 1500;

async function optimizeImage(filename) {
  const inputPath = path.join(FULL_DIR, filename);
  const baseName = filename.replace(/\.(jpg|jpeg|png|JPG|JPEG|PNG)$/, "");

  // Generate thumbnail
  const thumbPath = path.join(THUMB_DIR, `${baseName}.webp`);
  await sharp(inputPath)
    .resize(THUMB_WIDTH, null, { withoutEnlargement: true })
    .webp({ quality: 80 })
    .toFile(thumbPath);

  // Resize full-size (if wider than FULL_WIDTH)
  const fullPath = path.join(FULL_DIR, `${baseName}.webp`);
  await sharp(inputPath)
    .resize(FULL_WIDTH, null, { withoutEnlargement: true })
    .webp({ quality: 85 })
    .toFile(fullPath);

  console.log(`  Optimized: ${filename}`);
}

async function main() {
  await mkdir(THUMB_DIR, { recursive: true });
  const files = (await readdir(FULL_DIR)).filter((f) =>
    /\.(jpg|jpeg|png|JPG|JPEG|PNG)$/i.test(f)
  );

  console.log(`Optimizing ${files.length} images...`);

  for (const file of files) {
    await optimizeImage(file);
  }

  console.log("Done!");
}

main().catch(console.error);
