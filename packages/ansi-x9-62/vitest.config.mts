import { defineConfig, type ViteUserConfigFnObject } from "vitest/config";

const _default_1: ViteUserConfigFnObject=defineConfig(() => ({
    root: __dirname,
    cacheDir: "../../node_modules/.vite/packages/ansi-x9-62",
    test: {
        name: "ansi-x9-62",
        watch: false,
        globals: true,
        environment: "node",
        include: ["{src,tests}/**/*.{test,spec}.{js,mjs,cjs,ts,mts,cts,jsx,tsx}"],
        reporters: ["default"],
        coverage: {
            reportsDirectory: "./test-output/vitest/coverage",
            provider: "v8" as const,
        },
    },
}));
export default _default_1;
