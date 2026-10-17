import { existsSync, readFileSync } from "node:fs";
import { dirname, join, resolve } from "node:path";
import { fileURLToPath } from "node:url";
import { defineConfig, type Plugin } from "vitest/config";

const packagesRoot = resolve(dirname(fileURLToPath(import.meta.url)), "..");

/**
 * Workspace packages publish `src/index.mjs`, which is produced by `tsc` and
 * is not present in a fresh checkout. Tests load the TypeScript source instead.
 * `@wildboar/asn1` is a real install and is left alone.
 */
function wildboarWorkspaceSource(): Plugin {
    return {
        name: "wildboar-workspace-source",
        enforce: "pre",
        resolveId(source) {
            return resolveWorkspacePackage(source);
        },
    };
}

function resolveWorkspacePackage(source: string): string | null {
    if (!source.startsWith("@wildboar/") || source === "@wildboar/asn1" || source.startsWith("@wildboar/asn1/")) {
        return null;
    }
    const spec = source.slice("@wildboar/".length);
    const slash = spec.indexOf("/");
    const name = slash === -1 ? spec : spec.slice(0, slash);
    const subpath = slash === -1 ? "" : spec.slice(slash + 1);
    const pkgDir = join(packagesRoot, name);
    const manifestPath = join(pkgDir, "package.json");
    if (!existsSync(manifestPath)) {
        return null;
    }
    const manifest = JSON.parse(readFileSync(manifestPath, "utf8")) as {
        exports?: Record<string, unknown>;
        module?: string;
        main?: string;
    };
    const exportTarget = subpath
        ? pickExport(manifest.exports?.[`./${subpath}`])
        : pickExport(manifest.exports?.["."]) ?? manifest.module ?? manifest.main ?? "./src/index.mts";
    if (!exportTarget) {
        return null;
    }
    return preferExistingSource(join(pkgDir, exportTarget));
}

function pickExport(exp: unknown): string | null {
    if (typeof exp === "string") {
        return exp;
    }
    if (!exp || typeof exp !== "object") {
        return null;
    }
    const record = exp as Record<string, unknown>;
    for (const key of ["development", "import", "default", "module"]) {
        const value = record[key];
        if (typeof value === "string") {
            return value;
        }
    }
    return null;
}

function preferExistingSource(absPath: string): string | null {
    const candidates = [absPath];
    if (absPath.endsWith(".mjs")) {
        candidates.unshift(absPath.slice(0, -4) + ".mts");
    } else if (absPath.endsWith(".js")) {
        candidates.unshift(absPath.slice(0, -3) + ".ts");
    }
    for (const candidate of candidates) {
        if (existsSync(candidate)) {
            return candidate;
        }
    }
    return null;
}

export default defineConfig(() => ({
    plugins: [wildboarWorkspaceSource()],
    resolve: {
        conditions: ["development", "import", "module", "default"],
    },
    root: __dirname,
    cacheDir: "../../node_modules/.vite/packages/ltans-scvp-extension",
    test: {
        name: "@wildboar/ltans-scvp-extension",
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
