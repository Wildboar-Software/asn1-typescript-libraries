// Run with `npx vitest bench --run src/lib/matching/equality/dnsNameMatch.bench.mts`
// from packages/x500.
import { domainToUnicode } from "node:url";
import { describe, expect, test } from "vitest";
import {
    dnsNameMatchTyped,
    storedDnsNameNeedsIdna,
} from "./dnsNameMatch.mjs";
import { caseIgnoreMatchTyped } from "./caseIgnoreMatch.mjs";

const BEFORE = "before: domainToUnicode on every stored value";
const AFTER = "after: skip IDNA for ASCII LDH";

const localUnicode = domainToUnicode;
const localNeedsIdna = storedDnsNameNeedsIdna;
const localTyped = dnsNameMatchTyped;
const localCaseIgnore = caseIgnoreMatchTyped;

function compareLabels (
    a: string,
    b: string,
    wildcardAllowed: boolean,
): boolean | undefined {
    if (a === "*" || b === "*") {
        return wildcardAllowed;
    }
    return localCaseIgnore(a, b);
}

/**
 * Previous `dnsNameMatchTyped` stored path: always `domainToUnicode`.
 */
function alwaysUnicodeTyped (assertion: string, stored: string): boolean | undefined {
    const a = assertion;
    const v = localUnicode(stored.trim());
    if (a === "" || v === "") {
        return false;
    }
    let matched = true;
    let sawUndefined = false;
    let i = 0;
    let startA = 0;
    let startV = 0;
    while (i < 255) {
        const wildcardAllowed = (startA === 0) && (startV === 0);
        const nextDotA = a.indexOf(".", startA);
        const nextDotV = v.indexOf(".", startV);
        if (nextDotA === -1) {
            const labels = compareLabels(a.slice(startA), v.slice(startV), wildcardAllowed);
            if (labels === undefined) {
                sawUndefined = true;
            } else if (!labels) {
                matched = false;
            }
            break;
        }
        const labels = compareLabels(
            a.slice(startA, nextDotA),
            v.slice(startV, nextDotV),
            wildcardAllowed,
        );
        if (labels !== true) {
            return labels;
        }
        startA = nextDotA + 1;
        startV = nextDotV === -1 ? v.length : nextDotV + 1;
        i++;
    }
    if (sawUndefined) {
        return undefined;
    }
    return matched;
}

const assertion = "www.example.com";
const storedMixed = "WWW.Example.COM";
const storedLower = "www.example.com";

let sink = 0;

describe("dnsNameMatchTyped stored IDNA", () => {
    test("ASCII LDH stored value", async ({ bench }) => {
        expect(localNeedsIdna(storedMixed)).toBe(false);
        expect(alwaysUnicodeTyped(assertion, storedMixed)).toBe(true);
        expect(localTyped(assertion, storedMixed)).toBe(true);
        const result = await bench.compare(
            bench(BEFORE, () => {
                sink += alwaysUnicodeTyped(assertion, storedMixed) ? 1 : 0;
            }),
            bench(AFTER, () => {
                sink += localTyped(assertion, storedMixed) ? 1 : 0;
            }),
        );
        expect(result.get(AFTER)).toBeFasterThan(result.get(BEFORE));
    });

    test("already-lowercased ASCII LDH stored value", async ({ bench }) => {
        expect(alwaysUnicodeTyped(assertion, storedLower)).toBe(true);
        expect(localTyped(assertion, storedLower)).toBe(true);
        const result = await bench.compare(
            bench(BEFORE, () => {
                sink += alwaysUnicodeTyped(assertion, storedLower) ? 1 : 0;
            }),
            bench(AFTER, () => {
                sink += localTyped(assertion, storedLower) ? 1 : 0;
            }),
        );
        expect(result.get(AFTER)).toBeFasterThan(result.get(BEFORE));
    });
});

export { sink };
