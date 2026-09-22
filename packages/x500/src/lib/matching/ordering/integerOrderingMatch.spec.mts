import { ObjectIdentifier, type ASN1Element } from "@wildboar/asn1";
import { DER, _encodeInteger } from "@wildboar/asn1/functional";
import { Attribute } from "../../modules/InformationFramework/Attribute.ta.mjs";
import {
    AttributeValueAssertion,
} from "../../modules/InformationFramework/AttributeValueAssertion.ta.mjs";
import {
    EntryInformation,
} from "../../modules/DirectoryAbstractService/EntryInformation.ta.mjs";
import type { Filter } from "../../modules/DirectoryAbstractService/Filter.ta.mjs";
import type { Name } from "../../modules/InformationFramework/Name.ta.mjs";
import {
    evaluateFilter,
    type EvaluateFilterSettings,
} from "../../utils/evaluateFilter.mjs";
import integerOrderingMatch from "./integerOrderingMatch.mjs";

function integer (value: number | bigint): ASN1Element {
    return _encodeInteger(value, DER);
}

const attributeType = ObjectIdentifier.fromParts([1, 1, 1, 1]);
const name: Name = { rdnSequence: [] };

const options: EvaluateFilterSettings = {
    getEqualityMatcher: () => undefined,
    getOrderingMatcher: () => integerOrderingMatch,
    getSubstringsMatcher: () => undefined,
    getContextMatcher: () => undefined,
    determineAbsentMatch: () => true,
    getApproximateMatcher: () => undefined,
    isMatchingRuleCompatibleWithAttributeType: () => true,
    isAttributeSubtype: (attribute, parent) => attribute.isEqualTo(parent),
    permittedToMatch: () => true,
};

function entryHolding (...values: Array<number | bigint>): EntryInformation {
    return new EntryInformation(
        name,
        true,
        [
            {
                attribute: new Attribute(
                    attributeType,
                    values.map(integer),
                    undefined,
                ),
            },
        ],
        false,
        false,
        false,
    );
}

function orderingFilter (
    kind: "greaterOrEqual" | "lessOrEqual",
    assertion: number | bigint,
): Filter {
    const ava = new AttributeValueAssertion(
        attributeType,
        integer(assertion),
        undefined,
    );
    return {
        item: kind === "greaterOrEqual"
            ? { greaterOrEqual: ava }
            : { lessOrEqual: ava },
    };
}

function matches (filter: Filter, ...values: Array<number | bigint>): boolean | undefined {
    return evaluateFilter(filter, [entryHolding(...values)], options).matched;
}

describe("integerOrderingMatch", () => {
    it("returns TRUE when the attribute value is less than the asserted value", () => {
        expect(integerOrderingMatch(integer(5), integer(1))).toBeGreaterThan(0);
        expect(integerOrderingMatch(integer(0), integer(-1))).toBeGreaterThan(0);
        expect(integerOrderingMatch(integer(-1), integer(-8))).toBeGreaterThan(0);
        const above = BigInt(Number.MAX_SAFE_INTEGER) + 2n;
        expect(integerOrderingMatch(integer(above), integer(above - 1n))).toBeGreaterThan(0);
    });

    it("returns FALSE when the attribute value is not less than the asserted value", () => {
        expect(integerOrderingMatch(integer(1), integer(5))).toBeLessThan(0);
        expect(integerOrderingMatch(integer(-8), integer(-1))).toBeLessThan(0);
        expect(integerOrderingMatch(integer(4), integer(4))).toBe(0);
        expect(integerOrderingMatch(integer(-3), integer(-3))).toBe(0);
    });

    it("matches a greaterOrEqual filter when a value is greater than or equal to the assertion", () => {
        expect(matches(orderingFilter("greaterOrEqual", 5), 7)).toBe(true);
        expect(matches(orderingFilter("greaterOrEqual", 5), 5)).toBe(true);
        expect(matches(orderingFilter("greaterOrEqual", 5), 1)).toBe(false);
        expect(matches(orderingFilter("greaterOrEqual", -1), 0)).toBe(true);
        expect(matches(orderingFilter("greaterOrEqual", 0), -1)).toBe(false);
        expect(matches(orderingFilter("greaterOrEqual", 5), 1, 7)).toBe(true);
        const above = BigInt(Number.MAX_SAFE_INTEGER) + 2n;
        expect(matches(orderingFilter("greaterOrEqual", above - 1n), above)).toBe(true);
        expect(matches(orderingFilter("greaterOrEqual", above), above - 1n)).toBe(false);
    });

    it("matches a lessOrEqual filter when a value is less than or equal to the assertion", () => {
        expect(matches(orderingFilter("lessOrEqual", 5), 1)).toBe(true);
        expect(matches(orderingFilter("lessOrEqual", 5), 5)).toBe(true);
        expect(matches(orderingFilter("lessOrEqual", 5), 7)).toBe(false);
        expect(matches(orderingFilter("lessOrEqual", 0), -1)).toBe(true);
        expect(matches(orderingFilter("lessOrEqual", -1), 0)).toBe(false);
        expect(matches(orderingFilter("lessOrEqual", 5), 7, 1)).toBe(true);
        const above = BigInt(Number.MAX_SAFE_INTEGER) + 2n;
        expect(matches(orderingFilter("lessOrEqual", above), above - 1n)).toBe(true);
        expect(matches(orderingFilter("lessOrEqual", above - 1n), above)).toBe(false);
    });
});
