# create-bun-cli-tool

This repository contains a `bun create` template for bootstrapping a Bun
native CLI tool.

The template scaffolds a TypeScript project configured to build a single
cross&#x2011;platform executable using `bun build --compile`. It includes
preinstalled support for [commander](https://github.com/tj/commander.js/) and
[ora](https://github.com/sindresorhus/ora) for building rich command line
interfaces.

## Usage

```bash
bun create ./create-bun-cli-tool <project-name>
cd <project-name>
bun install
bun run build
```

After running `bun run build` the compiled executable is available in the
`bin/` directory and can be published to npm as your CLI tool entry point.

