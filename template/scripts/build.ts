import { readFile, mkdir } from "fs/promises";

const pkg = JSON.parse(await readFile("package.json", "utf8"));
const name = pkg.name || "cli";

await mkdir("bin", { recursive: true });

const proc = Bun.spawnSync({
  cmd: ["bun", "build", "src/index.ts", "--compile", "--outfile", `bin/${name}`],
});

if (proc.exitCode !== 0) {
  console.error(proc.stderr.toString());
  process.exit(proc.exitCode);
}

console.log(`Built bin/${name}`);
