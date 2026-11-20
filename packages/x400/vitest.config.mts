import { type ViteUserConfigFnObject, defineConfig } from "vitest/config";

const config: ViteUserConfigFnObject = defineConfig(() => ({
    root: import.meta.dirname,
    cacheDir: "../../node_modules/.vite/packages/x400",
    test: {
        name: "@wildboar/x400",
        watch: false,
        globals: true,
        environment: "node",
        include: ["{src,tests}/**/*.{test,spec}.{js,mjs,cjs,ts,mts,cts,jsx,tsx}"],
        reporters: ["default"],
    },
}));

export default config;
