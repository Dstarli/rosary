import { copyFileSync, cpSync, existsSync, mkdirSync, rmSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const root = dirname(dirname(fileURLToPath(import.meta.url)));
const dist = join(root, "dist");

rmSync(dist, { recursive: true, force: true });
mkdirSync(dist, { recursive: true });

for (const file of [
  "index.html",
  "prayers.js",
  "service-worker.js",
  "manifest.json",
  "icon-192.png",
  "icon-512.png"
]) {
  copyFileSync(join(root, file), join(dist, file));
}

for (const dir of ["assets", "vendor"]) {
  const source = join(root, dir);
  if (existsSync(source)) {
    cpSync(source, join(dist, dir), { recursive: true });
  }
}

console.log("Built static app in dist/");
