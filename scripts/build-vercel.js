const { cp, mkdir, rm } = require("node:fs/promises");
const { join } = require("node:path");

const root = join(__dirname, "..");
const source = join(root, "tramada-replica");
const output = join(root, "public");

async function main() {
  await rm(output, { recursive: true, force: true });
  await mkdir(output, { recursive: true });

  for (const file of ["index.html", "styles.css", "script.js", "README.md"]) {
    await cp(join(source, file), join(output, file));
  }
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
