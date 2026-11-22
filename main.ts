// Entri gta6-clipper-01: menyalin VIDEO.json (berisi URL Shorts YouTube klip GTA 6)
// ke direktori output harness. Harness membaca URL itu untuk menghitung views
// video di YouTube, yang menjadi satu-satunya faktor ranking lomba ini.
import { copyFile, mkdir } from "node:fs/promises";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const here = dirname(fileURLToPath(import.meta.url));
const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? join(here, "out");
const botDir = process.env.MAKEFUN_BOT_DIR ?? here;

await mkdir(outDir, { recursive: true });
await copyFile(join(botDir, "VIDEO.json"), join(outDir, "VIDEO.json"));
console.log("VIDEO.json copied to " + outDir);
