// Run from the repo root:
//   npx vitest bench --run --config packages/x500/vite.config.ts src/lib/bac/grantsAndDenialsMask.bench.mts
import { TRUE_BIT } from "@wildboar/asn1";
import { describe, expect, test } from "vitest";
import { deniesAccess as deniesAccessImported } from "./deniesAccess.mjs";
import { splitGrantsAndDenials as splitImported } from "./splitGrantsAndDenials.mjs";
import {
    grantsAndDenialsPermit as permitImported,
    grantsAndDenialsRelevant as relevantImported,
    grantsAndDenialsToMask as toMaskImported,
    grantsAndDenialsWithoutBit as withoutBitImported,
} from "./grantsAndDenialsMask.mjs";

// Vite's module runner turns imported bindings into getters. Local copies keep
// that per-call overhead out of the measurement.
const deniesAccess = deniesAccessImported;
const splitGrantsAndDenials = splitImported;
const grantsAndDenialsPermit = permitImported;
const grantsAndDenialsRelevant = relevantImported;
const grantsAndDenialsToMask = toMaskImported;
const grantsAndDenialsWithoutBit = withoutBitImported;

const NUMBER = "number";
const ARRAY = "Uint8ClampedArray";

/**
 * Previous BIT STRING walks. The mask must agree with these before it is timed.
 */
function arrayDenies (gad: Uint8ClampedArray): boolean {
    const length = gad.length;
    for (let i = 1; i < length; i += 2) {
        if (gad[i]) {
            return true;
        }
    }
    return false;
}

function arraySplit (gad: Uint8ClampedArray): Uint8ClampedArray[] {
    const len = gad.length;
    let grantsEncountered = false;
    let denialsEncountered = false;
    for (let i = 0; i < len; i += 2) {
        if (gad[i]) {
            grantsEncountered = true;
        }
        const denialIndex = i + 1;
        if ((denialIndex < len) && gad[denialIndex]) {
            denialsEncountered = true;
        }
        if (grantsEncountered && denialsEncountered) {
            break;
        }
    }
    if (!grantsEncountered || !denialsEncountered) {
        return [ gad ];
    }
    const grants = new Uint8ClampedArray(len);
    const denials = new Uint8ClampedArray(len);
    for (let i = 0; i < len; i += 2) {
        if (gad[i]) {
            grants[i] = TRUE_BIT;
        }
        const denialIndex = i + 1;
        if ((denialIndex < len) && gad[denialIndex]) {
            denials[denialIndex] = TRUE_BIT;
        }
    }
    return [ grants, denials ];
}

function arrayPermit (gad: Uint8ClampedArray, operations: number[]): boolean {
    const count = operations.length;
    for (let i = 0; i < count; i++) {
        const bit = operations[i] * 2;
        if ((gad[bit] !== TRUE_BIT) || (gad[bit + 1] === TRUE_BIT)) {
            return false;
        }
    }
    return true;
}

function arrayClear (gad: Uint8ClampedArray, bit: number): Uint8ClampedArray {
    if (gad[bit] !== TRUE_BIT) {
        return gad;
    }
    const copy = gad.slice();
    copy[bit] = 0;
    return copy;
}

/** Rejected alternative: OR every grant flag, then test the mask once. */
function permitCombined (mask: number, operations: number[]): boolean {
    let grants = 0;
    const count = operations.length;
    for (let i = 0; i < count; i++) {
        const operation = operations[i];
        if ((operation >>> 0) > 15) {
            return false;
        }
        grants |= 1 << (operation << 1);
    }
    return ((mask & grants) === grants) && ((mask & (grants << 1)) === 0);
}

function toArray (setBits: readonly number[], length: number): Uint8ClampedArray {
    const out = new Uint8ClampedArray(length);
    for (let i = 0; i < setBits.length; i++) {
        out[setBits[i]] = TRUE_BIT;
    }
    return out;
}

const read = [ 2 ];
const three = [ 0, 2, 12 ];

const batchBits: number[][] = [
    [],
    [ 4 ],
    [ 5 ],
    [ 1 ],
    [ 4, 5 ],
    [ 25 ],
    [ 24, 25 ],
    [ 30 ],
    [ 31 ],
    [ 30, 31 ],
    [ 0, 2, 4, 6, 8, 10, 12, 14, 16, 18, 20, 22, 24 ],
    [ 1, 3, 5, 7, 9, 11, 13, 15, 17, 19, 21, 23, 25 ],
    Array.from({ length: 26 }, (_, i) => i),
    Array.from({ length: 32 }, (_, i) => i),
];

const batchArrays = batchBits.map((bits) => toArray(bits, 32));
const batchMasks = batchArrays.map((bits) => grantsAndDenialsToMask(bits));
const batchCount = batchArrays.length;

const grantsOnly = toArray([ 0, 4, 8, 24 ], 26);
const grantsOnlyMask = grantsAndDenialsToMask(grantsOnly);
const earlyDenial = toArray([ 1 ], 26);
const earlyDenialMask = grantsAndDenialsToMask(earlyDenial);
const lateDenial = toArray([ 31 ], 32);
const lateDenialMask = grantsAndDenialsToMask(lateDenial);
const mixed = toArray([ 4, 5, 24, 25, 30, 31 ], 32);
const mixedMask = grantsAndDenialsToMask(mixed);
const pureGrant = toArray([ 4 ], 26);
const pureGrantMask = grantsAndDenialsToMask(pureGrant);

let sink = 0;

describe("GrantsAndDenials number mask vs Uint8ClampedArray", () => {
    test("denial scan with no denial bit", async ({ bench }) => {
        expect(deniesAccess(grantsOnlyMask)).toBe(arrayDenies(grantsOnly));
        // One value is a tie once the call is counted. The batch below is the
        // stable gap.
        await bench.compare(
            bench(ARRAY, () => {
                sink += arrayDenies(grantsOnly) ? 1 : 0;
            }),
            bench(NUMBER, () => {
                sink += deniesAccess(grantsOnlyMask) ? 1 : 0;
            }),
        );
    });

    test("denial scan of a mixed batch", async ({ bench }) => {
        const result = await bench.compare(
            bench(ARRAY, () => {
                let hits = 0;
                for (let i = 0; i < batchCount; i++) {
                    hits += arrayDenies(batchArrays[i]) ? 1 : 0;
                }
                sink += hits;
            }),
            bench(NUMBER, () => {
                let hits = 0;
                for (let i = 0; i < batchCount; i++) {
                    hits += deniesAccess(batchMasks[i]) ? 1 : 0;
                }
                sink += hits;
            }),
        );
        expect(result.get(NUMBER)).toBeFasterThan(result.get(ARRAY), { delta: 0.5 });
    });

    test("denial already at bit 1", async ({ bench }) => {
        expect(deniesAccess(earlyDenialMask)).toBe(true);
        expect(arrayDenies(earlyDenial)).toBe(true);
        // The array returns on the first odd byte, so this case is a tie.
        await bench.compare(
            bench(ARRAY, () => {
                sink += arrayDenies(earlyDenial) ? 1 : 0;
            }),
            bench(NUMBER, () => {
                sink += deniesAccess(earlyDenialMask) ? 1 : 0;
            }),
        );
    });

    test("denial at bit 31", async ({ bench }) => {
        expect(deniesAccess(lateDenialMask)).toBe(arrayDenies(lateDenial));
        // A single late denial is only modestly faster; the batch is the check.
        await bench.compare(
            bench(ARRAY, () => {
                sink += arrayDenies(lateDenial) ? 1 : 0;
            }),
            bench(NUMBER, () => {
                sink += deniesAccess(lateDenialMask) ? 1 : 0;
            }),
        );
    });

    test("packing on every denial scan is slower than indexing", async ({ bench }) => {
        const result = await bench.compare(
            bench(ARRAY, () => {
                sink += arrayDenies(grantsOnly) ? 1 : 0;
            }),
            bench("number, convert every call", () => {
                sink += deniesAccess(grantsAndDenialsToMask(grantsOnly)) ? 1 : 0;
            }),
            bench("number, already packed", () => {
                sink += deniesAccess(grantsOnlyMask) ? 1 : 0;
            }),
        );
        expect(result.get(ARRAY)).toBeFasterThan(result.get("number, convert every call"), { delta: 0.05 });
        expect(result.get("number, already packed")).toBeFasterThan(result.get(ARRAY), { delta: 0.05 });
    });

    test("split a mixed batch", async ({ bench }) => {
        for (let i = 0; i < batchCount; i++) {
            expect(splitGrantsAndDenials(batchMasks[i]).length).toBe(arraySplit(batchArrays[i]).length);
        }
        const result = await bench.compare(
            bench(ARRAY, () => {
                let parts = 0;
                for (let i = 0; i < batchCount; i++) {
                    parts += arraySplit(batchArrays[i]).length;
                }
                sink += parts;
            }),
            bench(NUMBER, () => {
                let parts = 0;
                for (let i = 0; i < batchCount; i++) {
                    parts += splitGrantsAndDenials(batchMasks[i]).length;
                }
                sink += parts;
            }),
        );
        expect(result.get(NUMBER)).toBeFasterThan(result.get(ARRAY), { delta: 0.5 });
    });

    test("split one pure grant", async ({ bench }) => {
        expect(splitGrantsAndDenials(pureGrantMask)).toEqual([ pureGrantMask ]);
        expect(arraySplit(pureGrant)).toHaveLength(1);
        const result = await bench.compare(
            bench(ARRAY, () => {
                sink += arraySplit(pureGrant).length;
            }),
            bench(NUMBER, () => {
                sink += splitGrantsAndDenials(pureGrantMask).length;
            }),
        );
        expect(result.get(NUMBER)).toBeFasterThan(result.get(ARRAY), { delta: 0.1 });
    });

    test("clear a set grantAdd across a batch", async ({ bench }) => {
        const result = await bench.compare(
            bench(ARRAY, () => {
                let bits = 0;
                for (let i = 0; i < batchCount; i++) {
                    bits += arrayClear(batchArrays[i], 0)[0];
                }
                sink += bits;
            }),
            bench(NUMBER, () => {
                let bits = 0;
                for (let i = 0; i < batchCount; i++) {
                    bits += grantsAndDenialsWithoutBit(batchMasks[i], 0);
                }
                sink += bits;
            }),
        );
        expect(result.get(NUMBER)).toBeFasterThan(result.get(ARRAY), { delta: 0.5 });
    });

    test("split, then relevance, then permit for one read", async ({ bench }) => {
        const result = await bench.compare(
            bench(ARRAY, () => {
                let hits = 0;
                for (let i = 0; i < batchCount; i++) {
                    const parts = arraySplit(batchArrays[i]);
                    for (let p = 0; p < parts.length; p++) {
                        const part = parts[p];
                        if ((part[4] !== TRUE_BIT) && (part[5] !== TRUE_BIT)) {
                            continue;
                        }
                        hits += arrayPermit(part, read) ? 1 : 0;
                    }
                }
                sink += hits;
            }),
            bench(NUMBER, () => {
                let hits = 0;
                for (let i = 0; i < batchCount; i++) {
                    const parts = splitGrantsAndDenials(batchMasks[i]);
                    for (let p = 0; p < parts.length; p++) {
                        const part = parts[p];
                        if (!grantsAndDenialsRelevant(part, read)) {
                            continue;
                        }
                        hits += grantsAndDenialsPermit(part, read) ? 1 : 0;
                    }
                }
                sink += hits;
            }),
        );
        expect(result.get(NUMBER)).toBeFasterThan(result.get(ARRAY), { delta: 0.5 });
    });

    test("one read permission is a tie", async ({ bench }) => {
        expect(grantsAndDenialsPermit(pureGrantMask, read)).toBe(arrayPermit(pureGrant, read));
        expect(permitCombined(pureGrantMask, read)).toBe(arrayPermit(pureGrant, read));
        // A single read sits within the noise of two array indexes, and folding
        // the grant flags first does not pull ahead. Three permissions, below,
        // is where per-operation flags beat the folded mask.
        await bench.compare(
            bench(ARRAY, () => {
                sink += arrayPermit(pureGrant, read) ? 1 : 0;
            }),
            bench("number per operation", () => {
                sink += grantsAndDenialsPermit(pureGrantMask, read) ? 1 : 0;
            }),
            bench("number folded flags", () => {
                sink += permitCombined(pureGrantMask, read) ? 1 : 0;
            }),
        );
    });

    test("three permissions: per-operation flags beat one folded mask", async ({ bench }) => {
        for (let i = 0; i < batchCount; i++) {
            expect(grantsAndDenialsPermit(batchMasks[i], three)).toBe(permitCombined(batchMasks[i], three));
            expect(grantsAndDenialsPermit(batchMasks[i], three)).toBe(arrayPermit(batchArrays[i], three));
        }
        const result = await bench.compare(
            bench(ARRAY, () => {
                let hits = 0;
                for (let i = 0; i < batchCount; i++) {
                    hits += arrayPermit(batchArrays[i], three) ? 1 : 0;
                }
                sink += hits;
            }),
            bench("number per operation", () => {
                let hits = 0;
                for (let i = 0; i < batchCount; i++) {
                    hits += grantsAndDenialsPermit(batchMasks[i], three) ? 1 : 0;
                }
                sink += hits;
            }),
            bench("number folded flags", () => {
                let hits = 0;
                for (let i = 0; i < batchCount; i++) {
                    hits += permitCombined(batchMasks[i], three) ? 1 : 0;
                }
                sink += hits;
            }),
        );
        expect(result.get("number per operation")).toBeFasterThan(
            result.get("number folded flags"),
            { delta: 0.2 },
        );
    });
});

export { sink };
