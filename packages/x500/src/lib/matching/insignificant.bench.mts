// Run with `npx vitest bench --run src/lib/matching` from packages/x500.
import { describe, expect, test } from "vitest";
import { normalizeTelephoneNumber, stripSpaces } from "./insignificant.mjs";

const localStripSpaces = stripSpaces;
const localNormalizeTelephone = normalizeTelephoneNumber;

function stripSpacesRegex (numeric: string): string {
    return numeric.replace(/\s+/g, "");
}

function normalizeTelephoneRegex (telephoneNumber: string): string {
    return telephoneNumber.replace(/[- ]/g, "");
}

let sink = 0;

describe("stripSpaces vs replace(/\\s+/g)", () => {
    for (const [ name, input ] of [
        [ "already clean", "1234567890" ],
        [ "spaces between groups", "1 234 567 890" ],
    ] as const) {
        test(name, async ({ bench }) => {
            expect(localStripSpaces(input)).toBe(stripSpacesRegex(input));
            const result = await bench.compare(
                bench("replace /\\s+/g", () => {
                    sink += stripSpacesRegex(input).length;
                }),
                bench("scan, skip alloc if clean", () => {
                    sink += localStripSpaces(input).length;
                }),
            );
            expect(result.get("scan, skip alloc if clean")).toBeFasterThan(result.get("replace /\\s+/g"));
        });
    }
});

describe("normalizeTelephoneNumber vs replace(/[- ]/g)", () => {
    for (const [ name, input ] of [
        [ "already digits", "+17035551212" ],
        [ "formatted", "+1 703-555-1212" ],
    ] as const) {
        test(name, async ({ bench }) => {
            expect(localNormalizeTelephone(input)).toBe(normalizeTelephoneRegex(input));
            const result = await bench.compare(
                bench("replace /[- ]/g", () => {
                    sink += normalizeTelephoneRegex(input).length;
                }),
                bench("scan, skip alloc if clean", () => {
                    sink += localNormalizeTelephone(input).length;
                }),
            );
            expect(result.get("scan, skip alloc if clean")).toBeFasterThan(result.get("replace /[- ]/g"));
        });
    }
});

export { sink };
