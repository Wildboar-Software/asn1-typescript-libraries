import path from 'node:path';
import { defineConfig } from 'vitest/config';

const packages = path.resolve(__dirname, '..');

export default defineConfig(() => ({
  root: __dirname,
  cacheDir: '../../node_modules/.vite/packages/stanag4406',
  resolve: {
    // x400 nests a compiled or-address 1.0.0. Point tests at the workspace
    // TypeScript sources so Vitest can load that import chain.
    alias: [
      {
        find: '@wildboar/or-address',
        replacement: path.join(packages, 'or-address/src/index.mts'),
      },
      {
        find: '@wildboar/presentation-address',
        replacement: path.join(packages, 'presentation-address/src/index.mts'),
      },
    ],
  },
  test: {
    name: '@wildboar/stanag4406',
    watch: false,
    globals: true,
    environment: 'node',
    include: ['{src,tests}/**/*.{test,spec}.{js,mjs,cjs,ts,mts,cts,jsx,tsx}'],
    reporters: ['default'],
    coverage: {
      reportsDirectory: './test-output/vitest/coverage',
      provider: 'v8' as const,
    }
  },
}));
