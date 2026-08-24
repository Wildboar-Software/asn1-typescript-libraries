# AGENTS.md

## Cursor Cloud specific instructions

This repo is an **Nx monorepo of ASN.1 TypeScript libraries** (npm workspaces under
`packages/*`). There is **no server or GUI application** — the "products" are the
libraries themselves. Development means building, testing, and type-checking the
packages. Dependencies are installed by the startup update script (`npm ci`), so you
generally don't need to reinstall.

### Toolchain
- Node and npm are already present; `npm ci` installs the workspace deps.
- Package manager is **npm** (there is a `package-lock.json`). Do not use pnpm/yarn.
- The `@wildboar/asn1` dependency is pulled from the **JSR registry** via `.npmrc`
  (`@jsr:registry=https://npm.jsr.io`). Keep that `.npmrc` in place or installs fail.
- Task runner is **Nx** (`npx nx <target> <project>`).

### Running tests
- Prefer the Nx target: `npx nx test <project>` (e.g. `npx nx test x500`,
  `npx nx test ldap`). Nx builds each project's dependencies first, then runs Vitest
  with the project's own config (which sets `globals: true`).
- **Gotcha:** the root `package.json` scripts `test:x500` / `test:ldap` call
  `vitest run <path>` directly. That double-runs each spec — once via the project
  config (passes) and once via a config-less root project **without `globals`**, which
  fails with `ReferenceError: describe is not defined`. This is a harness quirk, not a
  real test failure. Use `npx nx test <project>` instead for clean results.
- Run everything with `npx nx run-many -t test`.

### Building
- `npx nx build <project>` compiles a package with `tsc` into `dist/packages/<project>`
  (as ESM `.mjs` + `.d.mts`). Build also performs full type-checking.
- `npx nx run-many -t build` builds all packages.

### Lint / typecheck
- There is **no ESLint/TSLint setup** wired into Nx (the `tslint` note in `README.md`
  is stale). The closest thing to a lint is the `typecheck` target.
- **Gotcha:** `npx nx typecheck <project>` refuses to run until the workspace TS project
  references are synced, printing "The workspace is out of sync". Running `npx nx sync`
  fixes it but **rewrites committed `tsconfig*.json` files**, so only do that if you
  intend to commit those changes. Day-to-day, rely on `npx nx build` for type-checking
  instead (it runs `tsc` and will surface type errors).

### Modules are ESM-only
- Packages are `"type": "module"` and use `.mts`/`.mjs`. There is no CommonJS build.
- Per-package entry points are granular: import from subpath exports (e.g.
  `@wildboar/x500/AuthenticationFramework`) rather than expecting everything from the
  package root. See a package's `package.json` `exports` map.
