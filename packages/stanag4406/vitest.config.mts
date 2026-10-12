import { existsSync } from 'node:fs';
import { defineConfig, type Plugin } from 'vitest/config';

// Workspace packages point `main` at compiled `.mjs` files. Those files are
// produced by `nx build` and are absent in a source checkout, so Vitest
// follows the same path and loads the `.mts` source instead.
const fallbackMjsToMts: Plugin = {
  name: 'fallback-mjs-to-mts',
  enforce: 'pre',
  async resolveId(source, importer, options) {
    const resolved = await this.resolve(source, importer, { ...options, skipSelf: true });
    if (!resolved || resolved.external) {
      return null;
    }
    if (!resolved.id.endsWith('.mjs') || existsSync(resolved.id)) {
      return null;
    }
    const mts = `${resolved.id.slice(0, -4)}.mts`;
    if (!mts.includes('/packages/') || !existsSync(mts)) {
      return null;
    }
    return mts;
  },
};

export default defineConfig(() => ({
  plugins: [fallbackMjsToMts],
  root: __dirname,
  cacheDir: '../../node_modules/.vite/packages/stanag4406',
  test: {
    name: '@wildboar/stanag4406',
    watch: false,
    globals: true,
    environment: 'node',
    server: {
      deps: {
        inline: [/@wildboar\/(?!asn1(?:\/|$))/],
      },
    },
    include: ['{src,tests}/**/*.{test,spec}.{js,mjs,cjs,ts,mts,cts,jsx,tsx}'],
    reporters: ['default'],
    coverage: {
      reportsDirectory: '../../dist/packages/stanag4406/coverage',
      provider: 'v8' as const,
    }
  },
}));
