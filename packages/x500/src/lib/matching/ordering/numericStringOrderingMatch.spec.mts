import { ObjectIdentifier, type ASN1Element } from "@wildboar/asn1";
import { DER, _encodeNumericString } from "@wildboar/asn1/functional";
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
import numericStringOrderingMatch from "./numericStringOrderingMatch.mjs";

function numeric (value: string): ASN1Element {
    return _encodeNumericString(value, DER);
}

const attributeType = ObjectIdentifier.fromParts([1, 1, 1, 1]);
const name: Name = { rdnSequence: [] };

const options: EvaluateFilterSettings = {
    getEqualityMatcher: () => undefined,
    getOrderingMatcher: () => numericStringOrderingMatch,
    getSubstringsMatcher: () => undefined,
    getContextMatcher: () => undefined,
    determineAbsentMatch: () => true,
    getApproximateMatcher: () => undefined,
    isMatchingRuleCompatibleWithAttributeType: () => true,
    isAttributeSubtype: (attribute, parent) => attribute.isEqualTo(parent),
    permittedToMatch: () => true,
};

function entryHolding (...values: string[]): EntryInformation {
    return new EntryInformation(
        name,
        true,
        [
            {
                attribute: new Attribute(
                    attributeType,
                    values.map(numeric),
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
    assertion: string,
): Filter {
    const ava = new AttributeValueAssertion(
        attributeType,
        numeric(assertion),
        undefined,
    );
    return {
        item: kind === "greaterOrEqual"
            ? { greaterOrEqual: ava }
            : { lessOrEqual: ava },
    };
}

function matches (filter: Filter, ...values: string[]): boolean | undefined {
    return evaluateFilter(filter, [entryHolding(...values)], options).matched;
}

describe("numericStringOrderingMatch", () => {
    it("returns TRUE when the attribute value is less than the asserted value", () => {
        expect(numericStringOrderingMatch(numeric("2"), numeric("1 0"))).toBeGreaterThan(0);
        expect(numericStringOrderingMatch(numeric("9 9"), numeric("1 0 0"))).toBeGreaterThan(0);
        expect(numericStringOrderingMatch(numeric("1 0 0"), numeric("1 0"))).toBeGreaterThan(0);
    });

    it("returns FALSE when the attribute value is not less than the asserted value", () => {
        expect(numericStringOrderingMatch(numeric("1 0"), numeric("2"))).toBeLessThan(0);
        expect(numericStringOrderingMatch(numeric("1 0 0"), numeric("9 9"))).toBeLessThan(0);
        expect(numericStringOrderingMatch(numeric("10 0"), numeric("1 0 0"))).toBe(0);
        expect(numericStringOrderingMatch(numeric("1 5  15"), numeric("1515"))).toBe(0);
    });

    it("matches a greaterOrEqual filter when a value is greater than or equal to the assertion", () => {
        expect(matches(orderingFilter("greaterOrEqual", "1 0"), "2")).toBe(true);
        expect(matches(orderingFilter("greaterOrEqual", "1 0"), "10 0")).toBe(true);
        expect(matches(orderingFilter("greaterOrEqual", "2"), "1 0")).toBe(false);
        expect(matches(orderingFilter("greaterOrEqual", "1 0 0"), "9 9")).toBe(true);
        expect(matches(orderingFilter("greaterOrEqual", "9 9"), "1 0 0")).toBe(false);
        expect(matches(orderingFilter("greaterOrEqual", "1 0"), "0 9", "2 0")).toBe(true);
        expect(matches(orderingFilter("greaterOrEqual", "15  15"), "1 5 1 5")).toBe(true);
    });

    it("matches a lessOrEqual filter when a value is less than or equal to the assertion", () => {
        expect(matches(orderingFilter("lessOrEqual", "2"), "1 0")).toBe(true);
        expect(matches(orderingFilter("lessOrEqual", "10 0"), "1 0 0")).toBe(true);
        expect(matches(orderingFilter("lessOrEqual", "1 0"), "2")).toBe(false);
        expect(matches(orderingFilter("lessOrEqual", "9 9"), "1 0 0")).toBe(true);
        expect(matches(orderingFilter("lessOrEqual", "1 0 0"), "9 9")).toBe(false);
        expect(matches(orderingFilter("lessOrEqual", "1 0"), "2 0", "0 9")).toBe(true);
        expect(matches(orderingFilter("lessOrEqual", "1515"), "1 5  15")).toBe(true);
    });
});
