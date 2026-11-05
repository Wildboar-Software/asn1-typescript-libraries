// Run with `npx vitest bench --run src/lib/types/matching.bench.mts` from packages/x500.
import type { ASN1Element } from "@wildboar/asn1";
import { DER, _encodeInteger } from "@wildboar/asn1/functional";
import { describe, expect, test } from "vitest";
import {
    Attribute,
    AttributeTypeAndValue,
    type AttributeType,
} from "../modules/InformationFramework/index.mjs";
import { oidC } from "../modules/SelectedAttributeTypes/index.mjs";
import {
    createEqualityMatcher,
    type Matcher,
    type TypedEquationFunction,
} from "./matching.mjs";

const BEFORE = "before: wrap ATAV in Attribute";
const AFTER = "after: evaluate ATAV value directly";

function integer (value: number | bigint): ASN1Element {
    return _encodeInteger(value, DER);
}

function integerATAV (value: number | bigint): AttributeTypeAndValue {
    return new AttributeTypeAndValue(oidC["&id"], integer(value));
}

const equalsValue: TypedEquationFunction<bigint> = (
    assertion: bigint,
    value: ASN1Element,
): boolean => BigInt(assertion) === BigInt(value.integer);

/**
 * The previous `createEqualityMatcher` body: every distinguished
 * value was re-wrapped as `new Attribute(type, [ value ])`.
 */
function createEqualityMatcherWrapping<A> (
    assertionDecoder: (el: ASN1Element) => A,
    valueMatcher: TypedEquationFunction<A>,
): Matcher {
    return function (
        assertion: ASN1Element,
        valueOrValues: AttributeTypeAndValue | Attribute,
        getEqualityMatcher?: (attributeType: AttributeType) => Matcher | undefined,
        flags: number = 0,
        matchedValues?: Attribute,
    ): boolean | undefined {
        const decodedAssertion = assertionDecoder(assertion);
        const attr: Attribute = (
            ("value" in valueOrValues)
            || (valueOrValues instanceof AttributeTypeAndValue)
        )
            ? new Attribute(valueOrValues.type_, [ valueOrValues.value ])
            : valueOrValues;
        for (let i = 0; i < attr.values.length; i++) {
            const value = attr.values[i];
            const result = valueMatcher(
                decodedAssertion,
                value,
                getEqualityMatcher,
                flags,
            );
            if (result === true) {
                if (matchedValues) {
                    matchedValues.values.push(value);
                } else {
                    return true;
                }
            }
        }
        return false;
    };
}

const wrappingMatcher = createEqualityMatcherWrapping((el) => el.integer, equalsValue);
const directMatcher = createEqualityMatcher((el) => el.integer, equalsValue);

const localWrapping = wrappingMatcher;
const localDirect = directMatcher;

const assertion = integer(5);
const matchingAtav = integerATAV(5);
const missingAtav = integerATAV(7);
let sink = 0;

describe("createEqualityMatcher ATAV path", () => {
    test("single matching distinguished value", async ({ bench }) => {
        expect(localWrapping(assertion, matchingAtav)).toBe(true);
        expect(localDirect(assertion, matchingAtav)).toBe(true);
        const result = await bench.compare(
            bench(BEFORE, () => {
                sink += localWrapping(assertion, matchingAtav) ? 1 : 0;
            }),
            bench(AFTER, () => {
                sink += localDirect(assertion, matchingAtav) ? 1 : 0;
            }),
        );
        expect(result.get(AFTER)).toBeFasterThan(result.get(BEFORE));
    });

    test("single non-matching distinguished value", async ({ bench }) => {
        expect(localWrapping(assertion, missingAtav)).toBe(false);
        expect(localDirect(assertion, missingAtav)).toBe(false);
        const result = await bench.compare(
            bench(BEFORE, () => {
                sink += localWrapping(assertion, missingAtav) ? 1 : 0;
            }),
            bench(AFTER, () => {
                sink += localDirect(assertion, missingAtav) ? 1 : 0;
            }),
        );
        expect(result.get(AFTER)).toBeFasterThan(result.get(BEFORE));
    });
});

export { sink };
