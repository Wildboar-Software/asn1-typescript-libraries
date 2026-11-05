/**
 * `createEqualityMatcher` used to allocate `new Attribute(type_, [value])`
 * for every distinguished value, then walk `values`. An
 * `AttributeTypeAndValue` is one value, so the matcher now reads `.value`.
 *
 * The "before" case pays that allocation outside the matcher and then calls
 * the same function, so the comparison stays on `createEqualityMatcher`
 * rather than a copy of it.
 *
 * Run from the repo root:
 *   npx vitest bench --run --config packages/x500/vite.config.ts src/lib/types/matching.bench.mts
 */
import type { ASN1Element } from "@wildboar/asn1";
import { DER, _encodeInteger } from "@wildboar/asn1/functional";
import { describe, expect, test } from "vitest";
import {
    Attribute as ImportedAttribute,
    AttributeTypeAndValue as ImportedAttributeTypeAndValue,
} from "../modules/InformationFramework/index.mjs";
import { oidC } from "../modules/SelectedAttributeTypes/index.mjs";
import { createEqualityMatcher } from "./matching.mjs";

// Vite's module runner turns imported bindings into getters. Local copies keep
// that per-call overhead out of the measurement.
const Attribute = ImportedAttribute;
const AttributeTypeAndValue = ImportedAttributeTypeAndValue;

const BEFORE = "before: wrap ATAV in Attribute";
const AFTER = "after: evaluate ATAV value directly";

function integer (value: number | bigint): ASN1Element {
    return _encodeInteger(value, DER);
}

function integerATAV (value: number | bigint): AttributeTypeAndValue {
    return new AttributeTypeAndValue(oidC["&id"], integer(value));
}

const match = createEqualityMatcher(
    (el) => el.integer,
    (assertion, value) => assertion === value.integer,
);

function matchWrapped (
    assertion: ASN1Element,
    atav: AttributeTypeAndValue,
): boolean | undefined {
    return match(assertion, new Attribute(atav.type_, [ atav.value ]));
}

const assertion = integer(5);
const matchingAtav = integerATAV(5);
const missingAtav = integerATAV(7);
let sink = 0;

describe("createEqualityMatcher ATAV path", () => {
    test("single matching distinguished value", async ({ bench }) => {
        expect(matchWrapped(assertion, matchingAtav)).toBe(true);
        expect(match(assertion, matchingAtav)).toBe(true);
        const result = await bench.compare(
            bench(BEFORE, () => {
                sink += matchWrapped(assertion, matchingAtav) ? 1 : 0;
            }),
            bench(AFTER, () => {
                sink += match(assertion, matchingAtav) ? 1 : 0;
            }),
        );
        expect(result.get(AFTER)).toBeFasterThan(result.get(BEFORE));
    });

    test("single non-matching distinguished value", async ({ bench }) => {
        expect(matchWrapped(assertion, missingAtav)).toBe(false);
        expect(match(assertion, missingAtav)).toBe(false);
        const result = await bench.compare(
            bench(BEFORE, () => {
                sink += matchWrapped(assertion, missingAtav) ? 1 : 0;
            }),
            bench(AFTER, () => {
                sink += match(assertion, missingAtav) ? 1 : 0;
            }),
        );
        expect(result.get(AFTER)).toBeFasterThan(result.get(BEFORE));
    });
});

export { sink };
