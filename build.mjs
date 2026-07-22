import { execSync } from "child_process";
import { existsSync, readdirSync, cpSync, mkdirSync, rmSync } from "fs";

console.log("🧹 Clearing previous build output...");
rmSync(".vercel/output", { recursive: true, force: true });
rmSync("dist", { recursive: true, force: true });
console.log("✅ Cleared .vercel/output and dist");

console.log("🔨 Starting build...");
console.log("CWD:", process.cwd());
console.log("VERCEL:", process.env.VERCEL);
console.log("NODE_ENV:", process.env.NODE_ENV);

// Run vite build
execSync("npx vite build", { stdio: "inherit" });

console.log("\n📦 Build complete. Checking output...");

const checks = [
  "dist/client",
  ".output/public",
  ".vercel/output/static",
  ".vercel/output/static/assets",
];

for (const p of checks) {
  const exists = existsSync(p);
  console.log(`  ${exists ? "✅" : "❌"} ${p}${exists ? ` (${readdirSync(p).length} files)` : " (missing)"}`);
}

// Ensure static assets are in .vercel/output/static
const dest = ".vercel/output/static";
const sources = ["dist/client", ".output/public"];

let copied = false;
for (const src of sources) {
  if (existsSync(src)) {
    const files = readdirSync(src);
    if (files.length > 0) {
      console.log(`\n📋 Copying ${files.length} items from ${src} → ${dest}`);
      mkdirSync(dest, { recursive: true });
      cpSync(src, dest, { recursive: true });
      console.log("✅ Copy complete");
      copied = true;
      break;
    }
  }
}

if (!copied) {
  if (existsSync(`${dest}/assets`)) {
    const cssFiles = readdirSync(`${dest}/assets`).filter((f) => f.endsWith(".css"));
    if (cssFiles.length > 0) {
      console.log(`\n✅ Static assets already in place (${cssFiles[0]})`);
    } else {
      console.error("\n❌ ERROR: No CSS found in static/assets! Deployment will be broken.");
      process.exit(1);
    }
  } else {
    console.error("\n❌ ERROR: No static assets found anywhere! Deployment will be broken.");
    process.exit(1);
  }
}

console.log("\n🚀 Build verified successfully!");
