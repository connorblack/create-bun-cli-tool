import { cpSync, readFileSync, writeFileSync, existsSync } from "fs";
import { join } from "path";

const args = Bun.argv.slice(2);
const projectName = args[0] || "bun-cli";

if (existsSync(projectName)) {
  console.error(`${projectName} already exists`);
  process.exit(1);
}

const templateDir = new URL("./template", import.meta.url).pathname;
cpSync(templateDir, projectName, { recursive: true });

const pkgPath = join(projectName, "package.json");
const pkg = JSON.parse(readFileSync(pkgPath, "utf8"));

pkg.name = projectName;
pkg.bin = { [projectName]: `bin/${projectName}` };
writeFileSync(pkgPath, JSON.stringify(pkg, null, 2));

console.log(`Created ${projectName}`);
console.log(`Run:\n  cd ${projectName}\n  bun install\n  bun run build`);

