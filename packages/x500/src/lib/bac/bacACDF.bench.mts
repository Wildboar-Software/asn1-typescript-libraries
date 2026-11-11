// Run from the repo root:
//   npx vitest bench --run --config packages/x500/vite.config.ts src/lib/bac/bacACDF.bench.mts
import { ObjectIdentifier, TRUE_BIT, type BIT_STRING, type OBJECT_IDENTIFIER } from "@wildboar/asn1";
import { describe, expect, test } from "vitest";
import { bacACDF, PERMISSION_CATEGORY_READ } from "./bacACDF.mjs";
import { deniesAccess } from "./deniesAccess.mjs";
import { discardNonRelevantACDFTuples } from "./discardNonRelevantACDFTuples.mjs";
import { grantsAccess } from "./grantsAccess.mjs";
import { itemIsProtected } from "./itemIsProtected.mjs";
import { operationPermitted } from "./operationPermitted.mjs";
import { splitGrantsAndDenials } from "./splitGrantsAndDenials.mjs";
import ACDFTupleExtended from "../types/ACDFTupleExtended.mjs";
import type ProtectedItem from "../types/ProtectedItem.mjs";
import { UserClasses } from "../modules/BasicAccessControl/UserClasses.ta.mjs";
import { ProtectedItems } from "../modules/BasicAccessControl/ProtectedItems.ta.mjs";
import type { GrantsAndDenials } from "../modules/BasicAccessControl/GrantsAndDenials.ta.mjs";
import { grantRead, denyRead } from "../modules/BasicAccessControl/GrantsAndDenials.ta.mjs";
import type { AuthenticationLevel } from "../modules/BasicAccessControl/AuthenticationLevel.ta.mjs";
import { AuthenticationLevel_basicLevels } from "../modules/BasicAccessControl/AuthenticationLevel-basicLevels.ta.mjs";
import {
    AuthenticationLevel_basicLevels_level_none,
} from "../modules/BasicAccessControl/AuthenticationLevel-basicLevels-level.ta.mjs";
import applyACDFConstraints from "./applyACDFConstraints.mjs";
import type { EvaluateFilterSettings } from "../utils/evaluateFilter.mjs";

const BEFORE = "array methods";
const AFTER = "indexed loops";

const AUTH_NONE: AuthenticationLevel = {
    basicLevels: new AuthenticationLevel_basicLevels(AuthenticationLevel_basicLevels_level_none),
};
const ALL_USERS = new UserClasses(null);
const ENTRY_ITEMS = new ProtectedItems(null);
const COMMON_NAME = ObjectIdentifier.fromString("2.5.4.3");
const ENTRY_REQUEST: ProtectedItem = { entry: [] };
const READ = [ PERMISSION_CATEGORY_READ ];
const SETTINGS: EvaluateFilterSettings = {
    getEqualityMatcher: () => undefined,
    getOrderingMatcher: () => undefined,
    getSubstringsMatcher: () => undefined,
    getApproximateMatcher: () => undefined,
    getContextMatcher: () => undefined,
    determineAbsentMatch: () => false,
    isMatchingRuleCompatibleWithAttributeType: () => true,
    isAttributeSubtype: (a, b) => a.isEqualTo(b),
    permittedToMatch: () => true,
};

// Vite's module runner turns imported bindings into getters. Local copies keep
// that per-call overhead out of the measurement, on both sides.
const localDeniesAccess = deniesAccess;
const localGrantsAccess = grantsAccess;
const localSplit = splitGrantsAndDenials;
const localPermit = operationPermitted;
const localDiscard = discardNonRelevantACDFTuples;
const localProtect = itemIsProtected;
const localDecide = bacACDF;

let sink = 0;

function permissions (...bits: number[]): BIT_STRING {
    const result = new Uint8ClampedArray(26);
    for (let i = 0; i < bits.length; i++) {
        result[bits[i]] = TRUE_BIT;
    }
    return result;
}

function entryTuple (
    precedence: number,
    specificity: number,
    bits: BIT_STRING,
): ACDFTupleExtended {
    return new ACDFTupleExtended(
        ALL_USERS,
        AUTH_NONE,
        ENTRY_ITEMS,
        bits,
        precedence,
        specificity,
    );
}

/** Previous GrantsAndDenials split: always allocate both strings, then keep one. */
function splitWithAllocations (
    gad: GrantsAndDenials,
): [ GrantsAndDenials ] | [ GrantsAndDenials, GrantsAndDenials ] {
    const grants = new Uint8ClampedArray(gad.length);
    const denials = new Uint8ClampedArray(gad.length);
    let grantsEncountered = false;
    let denialsEncountered = false;
    for (let i = 0; i < gad.length; i++) {
        if ((i % 2) && gad[i]) {
            denials[i] = TRUE_BIT;
            denialsEncountered = true;
        } else if (gad[i]) {
            grants[i] = TRUE_BIT;
            grantsEncountered = true;
        }
    }
    return (grantsEncountered && denialsEncountered) ? [ grants, denials ] : [ gad ];
}

function deniesWithArrayFrom (permissionsBits: BIT_STRING): boolean {
    return Array.from(permissionsBits).some((perm, index) => (index % 2) ? Boolean(perm) : false);
}

function grantsWithArrayFrom (tuple: ACDFTupleExtended): boolean {
    return Array.from(tuple.grantsAndDenials).some((perm, index) => (index % 2) ? false : Boolean(perm));
}

function operationPermittedWithPredicates (
    operations: number[],
    tuple: ACDFTupleExtended,
): boolean {
    const gad = tuple.grantsAndDenials;
    if (!Number.isSafeInteger(tuple.userClassSpecificity) && (tuple.userClassSpecificity < 1)) {
        return false;
    }
    return operations.every((op) => gad[op * 2] === TRUE_BIT)
        && !operations.some((op) => gad[(op * 2) + 1] === TRUE_BIT);
}

function discardWithFilterMap (
    tuples: ACDFTupleExtended[],
): ACDFTupleExtended[] {
    return tuples
        .filter((tuple) => itemIsProtected(ENTRY_REQUEST, tuple.protectedItems, undefined, SETTINGS))
        .map((tuple) => applyACDFConstraints(tuple, ENTRY_REQUEST, READ, SETTINGS))
        .filter((tuple) => {
            const gad = tuple.grantsAndDenials;
            return READ.some((op) => (gad[op * 2] === TRUE_BIT) || (gad[(op * 2) + 1] === TRUE_BIT));
        });
}

/**
 * The previous bacACDF body: flatMap/map clones, filter/map/filter, Array.sort,
 * findIndex, and every().
 */
function bacACDFWithArrayMethods (tuples: ACDFTupleExtended[]): boolean {
    const split = tuples.flatMap((tuple) => splitWithAllocations(tuple.grantsAndDenials)
        .map((gad) => tuple.withGrantsAndDenials(gad)));
    const relevant = discardWithFilterMap(split);
    if (relevant.length === 0) {
        return false;
    }
    const byPrecedence = relevant.sort((a, b) => Number(b.precedence) - Number(a.precedence));
    const highestPrecedence = byPrecedence[0].precedence;
    const beta = byPrecedence.findIndex((tuple) => tuple.precedence < highestPrecedence);
    const stage1 = (beta < 0) ? byPrecedence : byPrecedence.slice(0, beta);
    if (stage1.length <= 1) {
        return (stage1.length === 1) && operationPermittedWithPredicates(READ, stage1[0]);
    }
    const byUser = stage1.sort((a, b) => (
        Math.floor(b.userClassSpecificity) - Math.floor(a.userClassSpecificity)
    ));
    const highestUser = Math.floor(byUser[0].userClassSpecificity);
    const charlie = byUser.findIndex((tuple) => Math.floor(tuple.userClassSpecificity) < highestUser);
    const stage2 = (charlie < 0) ? byUser : byUser.slice(0, charlie);
    if (stage2.length === 1) {
        return stage2.every((tuple) => operationPermittedWithPredicates(READ, tuple));
    }
    const byItem = stage2
        .map((tuple): [ ACDFTupleExtended, number ] => [ tuple, ("entry" in ENTRY_REQUEST) ? 0 : -1 ])
        .sort((a, b) => b[1] - a[1]);
    const highestItem = byItem[0][1];
    const delta = byItem.findIndex((tuple) => tuple[1] < highestItem);
    const stage3 = ((delta < 0) ? byItem : byItem.slice(0, delta)).map(([ tuple ]) => tuple);
    return stage3.every((tuple) => operationPermittedWithPredicates(READ, tuple));
}

function decisionOf (tuples: ACDFTupleExtended[]): boolean {
    return localDecide(tuples, undefined, ENTRY_REQUEST, READ, SETTINGS).authorized;
}

function attributeTypeWithSome (
    request: Extract<ProtectedItem, { attributeType: OBJECT_IDENTIFIER }>,
    items: ProtectedItems,
): boolean {
    return Boolean(
        ((items.allUserAttributeTypes === null) && !request.operational)
        || items.attributeType?.some((at) => request.attributeType.isEqualTo(at))
        || ((items.allUserAttributeTypesAndValues === null) && !request.operational)
    );
}

type Keyed = { key: number; id: number };

/** Insertion sort used for lists of at most eight. Same comparison as bacACDF. */
function insertionSortDescending (items: Keyed[]): void {
    const count = items.length;
    const keys = new Float64Array(count);
    for (let i = 0; i < count; i++) {
        keys[i] = items[i].key;
    }
    for (let i = 1; i < count; i++) {
        const item = items[i];
        const key = keys[i];
        let j = i - 1;
        while ((j >= 0) && (keys[j] < key)) {
            items[j + 1] = items[j];
            keys[j + 1] = keys[j];
            j--;
        }
        items[j + 1] = item;
        keys[j + 1] = key;
    }
}

function nativeSortDescending (items: Keyed[]): void {
    items.sort((a, b) => b.key - a.key);
}

function keyed (count: number): Keyed[] {
    const items = new Array<Keyed>(count);
    for (let i = 0; i < count; i++) {
        items[i] = { key: (i * 17) % Math.max(count, 1), id: i };
    }
    return items;
}

function copyKeyed (source: Keyed[]): Keyed[] {
    const items = new Array<Keyed>(source.length);
    for (let i = 0; i < source.length; i++) {
        items[i] = source[i];
    }
    return items;
}

function idsOf (items: Keyed[]): string {
    let out = "";
    for (let i = 0; i < items.length; i++) {
        out += `${items[i].id},`;
    }
    return out;
}

const PURE_GRANT = permissions(grantRead);
const PURE_DENY = permissions(denyRead);
const MIXED = permissions(grantRead, denyRead);
const NO_DENIAL = new Uint8ClampedArray(26);
const DENIAL_AT_END = new Uint8ClampedArray(26);
DENIAL_AT_END[25] = TRUE_BIT;
const GRANT_TUPLE = entryTuple(1, 1, PURE_GRANT);

const uniqueEight = [ 0, 1, 2, 3, 4, 5, 6, 7 ].map((precedence, index) => (
    entryTuple(precedence, 1, index === 7 ? PURE_DENY : PURE_GRANT)
));
const uniqueThirtyTwo = new Array<ACDFTupleExtended>(32);
for (let i = 0; i < 32; i++) {
    uniqueThirtyTwo[i] = entryTuple(i, 1, i === 31 ? PURE_DENY : PURE_GRANT);
}
const equalPrecedence = new Array<ACDFTupleExtended>(32);
for (let i = 0; i < 32; i++) {
    equalPrecedence[i] = entryTuple(10, 1, i === 0 ? PURE_DENY : PURE_GRANT);
}
const mixedPair = [
    entryTuple(20, 1, MIXED),
    entryTuple(10, 1, PURE_GRANT),
];

const oneAttributeType = [ COMMON_NAME ];
const typeItems = new ProtectedItems(undefined, undefined, oneAttributeType);
const typeRequest: ProtectedItem = { attributeType: COMMON_NAME, operational: false };
const otherType = ObjectIdentifier.fromString("2.5.4.13");
const otherRequest: ProtectedItem = { attributeType: otherType, operational: false };

describe("access-control array walks", () => {
    test("deniesAccess, no denial bit set", async ({ bench }) => {
        expect(deniesWithArrayFrom(NO_DENIAL)).toBe(localDeniesAccess(NO_DENIAL));
        const result = await bench.compare(
            bench(BEFORE, () => {
                sink += deniesWithArrayFrom(NO_DENIAL) ? 1 : 0;
            }),
            bench(AFTER, () => {
                sink += localDeniesAccess(NO_DENIAL) ? 1 : 0;
            }),
        );
        expect(result.get(AFTER)).toBeFasterThan(result.get(BEFORE));
    });

    test("deniesAccess, denial on the last odd bit", async ({ bench }) => {
        expect(deniesWithArrayFrom(DENIAL_AT_END)).toBe(true);
        expect(localDeniesAccess(DENIAL_AT_END)).toBe(true);
        const result = await bench.compare(
            bench(BEFORE, () => {
                sink += deniesWithArrayFrom(DENIAL_AT_END) ? 1 : 0;
            }),
            bench(AFTER, () => {
                sink += localDeniesAccess(DENIAL_AT_END) ? 1 : 0;
            }),
        );
        expect(result.get(AFTER)).toBeFasterThan(result.get(BEFORE));
    });

    test("grantsAccess", async ({ bench }) => {
        expect(grantsWithArrayFrom(GRANT_TUPLE)).toBe(localGrantsAccess(GRANT_TUPLE));
        const result = await bench.compare(
            bench(BEFORE, () => {
                sink += grantsWithArrayFrom(GRANT_TUPLE) ? 1 : 0;
            }),
            bench(AFTER, () => {
                sink += localGrantsAccess(GRANT_TUPLE) ? 1 : 0;
            }),
        );
        expect(result.get(AFTER)).toBeFasterThan(result.get(BEFORE));
    });

    test("splitGrantsAndDenials, pure grant", async ({ bench }) => {
        expect(splitWithAllocations(PURE_GRANT)[0]).toBe(PURE_GRANT);
        expect(localSplit(PURE_GRANT)[0]).toBe(PURE_GRANT);
        const result = await bench.compare(
            bench(BEFORE, () => {
                sink += splitWithAllocations(PURE_GRANT).length;
            }),
            bench(AFTER, () => {
                sink += localSplit(PURE_GRANT).length;
            }),
        );
        expect(result.get(AFTER)).toBeFasterThan(result.get(BEFORE));
    });

    test("splitGrantsAndDenials, mixed grant and deny", async ({ bench }) => {
        const before = splitWithAllocations(MIXED);
        const after = localSplit(MIXED);
        expect(after[0]).toEqual(before[0]);
        expect(after[1]).toEqual(before[1]);
        const result = await bench.compare(
            bench(BEFORE, () => {
                sink += splitWithAllocations(MIXED).length;
            }),
            bench(AFTER, () => {
                sink += localSplit(MIXED).length;
            }),
        );
        expect(result.get(AFTER)).toBeFasterThan(result.get(BEFORE));
    });

    test("operationPermitted, one read", async ({ bench }) => {
        expect(operationPermittedWithPredicates(READ, GRANT_TUPLE))
            .toBe(localPermit(READ, GRANT_TUPLE, ENTRY_REQUEST));
        const result = await bench.compare(
            bench(BEFORE, () => {
                sink += operationPermittedWithPredicates(READ, GRANT_TUPLE) ? 1 : 0;
            }),
            bench(AFTER, () => {
                sink += localPermit(READ, GRANT_TUPLE, ENTRY_REQUEST) ? 1 : 0;
            }),
        );
        expect(result.get(AFTER)).toBeFasterThan(result.get(BEFORE));
    });

    test("discardNonRelevantACDFTuples, 32 tuples", async ({ bench }) => {
        expect(discardWithFilterMap(uniqueThirtyTwo).length)
            .toBe(localDiscard(
                uniqueThirtyTwo, undefined, ENTRY_REQUEST, READ, SETTINGS,
            ).length);
        // The protected-item and constraint checks dominate this walk, so the
        // loop's advantage over filter/map/filter is too small to gate on.
        // The bacACDF benches below are the end-to-end measurement.
        await bench.compare(
            bench(BEFORE, () => {
                sink += discardWithFilterMap(uniqueThirtyTwo).length;
            }),
            bench(AFTER, () => {
                sink += localDiscard(
                    uniqueThirtyTwo, undefined, ENTRY_REQUEST, READ, SETTINGS,
                ).length;
            }),
        );
    });

    test("itemIsProtected, one attribute type", async ({ bench }) => {
        expect(attributeTypeWithSome(typeRequest, typeItems))
            .toBe(localProtect(typeRequest, typeItems, undefined, SETTINGS) === true);
        expect(attributeTypeWithSome(otherRequest, typeItems))
            .toBe(localProtect(otherRequest, typeItems, undefined, SETTINGS) === true);
        // One object-identifier comparison dominates, so this is reported
        // rather than gated. Bit walks and bacACDF are the gates.
        await bench.compare(
            bench(BEFORE, () => {
                sink += attributeTypeWithSome(otherRequest, typeItems) ? 1 : 0;
            }),
            bench(AFTER, () => {
                sink += localProtect(otherRequest, typeItems, undefined, SETTINGS) ? 1 : 0;
            }),
        );
    });
});

describe("bacACDF", () => {
    test("8 tuples, unique precedence", async ({ bench }) => {
        expect(bacACDFWithArrayMethods(uniqueEight)).toBe(decisionOf(uniqueEight));
        const result = await bench.compare(
            bench(BEFORE, () => {
                sink += bacACDFWithArrayMethods(uniqueEight) ? 1 : 0;
            }),
            bench(AFTER, () => {
                sink += decisionOf(uniqueEight) ? 1 : 0;
            }),
        );
        expect(result.get(AFTER)).toBeFasterThan(result.get(BEFORE));
    });

    test("32 tuples, unique precedence", async ({ bench }) => {
        expect(bacACDFWithArrayMethods(uniqueThirtyTwo)).toBe(decisionOf(uniqueThirtyTwo));
        const result = await bench.compare(
            bench(BEFORE, () => {
                sink += bacACDFWithArrayMethods(uniqueThirtyTwo) ? 1 : 0;
            }),
            bench(AFTER, () => {
                sink += decisionOf(uniqueThirtyTwo) ? 1 : 0;
            }),
        );
        expect(result.get(AFTER)).toBeFasterThan(result.get(BEFORE));
    });

    test("32 tuples, one shared precedence", async ({ bench }) => {
        expect(bacACDFWithArrayMethods(equalPrecedence)).toBe(false);
        expect(decisionOf(equalPrecedence)).toBe(false);
        const result = await bench.compare(
            bench(BEFORE, () => {
                sink += bacACDFWithArrayMethods(equalPrecedence) ? 1 : 0;
            }),
            bench(AFTER, () => {
                sink += decisionOf(equalPrecedence) ? 1 : 0;
            }),
        );
        expect(result.get(AFTER)).toBeFasterThan(result.get(BEFORE));
    });

    test("mixed grant and deny bits", async ({ bench }) => {
        expect(bacACDFWithArrayMethods(mixedPair)).toBe(decisionOf(mixedPair));
        const result = await bench.compare(
            bench(BEFORE, () => {
                sink += bacACDFWithArrayMethods(mixedPair) ? 1 : 0;
            }),
            bench(AFTER, () => {
                sink += decisionOf(mixedPair) ? 1 : 0;
            }),
        );
        expect(result.get(AFTER)).toBeFasterThan(result.get(BEFORE));
    });
});

describe("ranking sort", () => {
    test("8 keys: insertion sort is faster than Array.sort", async ({ bench }) => {
        const source = keyed(8);
        const inserted = copyKeyed(source);
        const native = copyKeyed(source);
        insertionSortDescending(inserted);
        nativeSortDescending(native);
        expect(idsOf(inserted)).toBe(idsOf(native));
        const result = await bench.compare(
            bench("Array.sort", () => {
                const copy = copyKeyed(source);
                nativeSortDescending(copy);
                sink += copy.length;
            }),
            bench("insertion sort", () => {
                const copy = copyKeyed(source);
                insertionSortDescending(copy);
                sink += copy.length;
            }),
        );
        expect(result.get("insertion sort")).toBeFasterThan(result.get("Array.sort"));
    });

    test("256 keys: Array.sort is faster than insertion sort", async ({ bench }) => {
        const source = keyed(256);
        const inserted = copyKeyed(source);
        const native = copyKeyed(source);
        insertionSortDescending(inserted);
        nativeSortDescending(native);
        expect(idsOf(inserted)).toBe(idsOf(native));
        const result = await bench.compare(
            bench("insertion sort", () => {
                const copy = copyKeyed(source);
                insertionSortDescending(copy);
                sink += copy.length;
            }),
            bench("Array.sort", () => {
                const copy = copyKeyed(source);
                nativeSortDescending(copy);
                sink += copy.length;
            }),
        );
        expect(result.get("Array.sort")).toBeFasterThan(result.get("insertion sort"));
    });
});

export { sink };
