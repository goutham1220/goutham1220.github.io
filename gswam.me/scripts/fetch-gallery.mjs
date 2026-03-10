#!/usr/bin/env node
/**
 * Fetch gallery images from Squarespace CDN.
 * Run while the Squarespace site is still live.
 *
 * Usage: node scripts/fetch-gallery.mjs
 */
import { writeFile, mkdir } from "fs/promises";
import { existsSync } from "fs";
import path from "path";

const CDN_BASE = "https://images.squarespace-cdn.com/content/v1";
const OUT_DIR = path.resolve("public/images/gallery/full");

// Add Squarespace image IDs here when ready to fetch
const imageIds = [
  // Example: "622a1b2c3d4e5f6a7b8c9d0e/image.jpg"
];

async function fetchImage(id) {
  const url = `${CDN_BASE}/${id}?format=original`;
  const filename = id.split("/").pop();
  const outPath = path.join(OUT_DIR, filename);

  if (existsSync(outPath)) {
    console.log(`  Skip (exists): ${filename}`);
    return;
  }

  const res = await fetch(url);
  if (!res.ok) {
    console.error(`  Failed: ${filename} (${res.status})`);
    return;
  }

  const buffer = Buffer.from(await res.arrayBuffer());
  await writeFile(outPath, buffer);
  console.log(`  Downloaded: ${filename} (${(buffer.length / 1024).toFixed(0)} KB)`);
}

async function main() {
  await mkdir(OUT_DIR, { recursive: true });
  console.log(`Fetching ${imageIds.length} gallery images...`);

  for (const id of imageIds) {
    await fetchImage(id);
  }

  console.log("Done!");
}

main().catch(console.error);
