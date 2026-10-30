import type { ASN1Element, OBJECT_IDENTIFIER } from "@wildboar/asn1";
import type { ASN1Decoder } from "@wildboar/asn1/functional";
import type {
    FilterItem_substrings_strings_Item,
} from "../modules/DirectoryAbstractService/FilterItem-substrings-strings-Item.ta.mjs";
import {
    Attribute,
    AttributeTypeAndValue,
    type AttributeType,
} from "../modules/InformationFramework/index.mjs";

export type MatchFlags = number;

export const MATCH_FLAG_NONE: MatchFlags = 0;
export const MATCH_FLAG_USED_FOR_NAME: MatchFlags =        1 << 0;
export const MATCH_FLAG_ASSERTION_NORMALIZED: MatchFlags = 1 << 1;
export const MATCH_FLAG_VALUE_NORMALIZED: MatchFlags =     1 << 2;
export const MATCH_FLAG_DEBUG: MatchFlags =                1 << 3;
export const MATCH_FLAG_HIGH_WORK_BUDGET: MatchFlags =     1 << 4;
export const MATCH_FLAG_ASSERTION_VALIDATED: MatchFlags =  1 << 5;
export const MATCH_FLAG_VALUE_VALIDATED: MatchFlags =      1 << 6;
export const MATCH_FLAG_CONSTANT_TIME: MatchFlags =        1 << 7;
export const MATCH_FLAG_ORDERING_GREATER: MatchFlags =     1 << 8;
export const MATCH_FLAG_ORDERING_OR_EQUAL: MatchFlags =    1 << 9;

export type AssertedSubstring<T> = 
    | { initial: T }
    | { any_: T }
    | { final: T }
    | { control: Attribute }
    ;

// Attribute Matchers

export
type Matcher = (
    assertion: ASN1Element | FilterItem_substrings_strings_Item[],
    valueOrValues: AttributeTypeAndValue | Attribute,
    getEqualityMatcher?: (attributeType: AttributeType) => Matcher | undefined,
    flags?: number,
    matchedValues?: Attribute,
) => boolean | undefined;

// Individual Value Matchers

export
type TypedEquationFunction<A> = (
    assertion: A,
    value: ASN1Element,
    getEqualityMatcher?: (attributeType: AttributeType) => Matcher | undefined,
    flags?: number,
) => boolean | undefined;

export
type TypedOrderingFunction<A> = (
    assertion: A,
    value: ASN1Element,
    getEqualityMatcher?: (attributeType: AttributeType) => Matcher | undefined,
    flags?: number,
) => number | undefined;

// Utility Functions

export
function valueErrorMessage(
    hasContexts: boolean,
    i: number,
    attrtype: AttributeType,
    e: unknown,
): string {
    const oid: string = attrtype.dotDelimitedNotation;
    return (
        "@wildboar/x500: debug: value matching error: value "
        + (hasContexts ? "with contexts" : "(without contexts)")
        + ` at index ${i} of attribute type ${oid}: ${e}`
    );
}

export
function useOrderingAsEquality<A>(
    valueMatcher: TypedOrderingFunction<A>,
): TypedEquationFunction<A> {
    return function (
        assertion: A,
        value: ASN1Element,
        getEqualityMatcher?: (attributeType: AttributeType) => Matcher | undefined,
        flags: number = 0,
    ): boolean | undefined {
        const greaterThan = (flags & MATCH_FLAG_ORDERING_GREATER);
        const orEqual = (flags & MATCH_FLAG_ORDERING_OR_EQUAL);
        const result = valueMatcher(
            assertion,
            value,
            getEqualityMatcher,
            flags,
        );
        if (result === undefined) {
            return undefined;
        }
        if (orEqual && (result === 0)) {
            return true;
        }
        return (
            greaterThan
                ? (result < 0)
                : (result > 0)
        );
    };
}

export
function createEqualityMatcher<A>(
    assertionDecoder: ASN1Decoder<A>,
    valueMatcher: TypedEquationFunction<A>,
    subtringsConverter?: (strings: FilterItem_substrings_strings_Item[]) => A,
): Matcher {
    return function (
        assertion: ASN1Element | FilterItem_substrings_strings_Item[],
        valueOrValues: AttributeTypeAndValue | Attribute,
        getEqualityMatcher?: (attributeType: AttributeType) => Matcher | undefined,
        flags: number = 0,
        matchedValues?: Attribute,
    ): boolean | undefined {
        let decodedAssertion: A;
        if (Array.isArray(assertion)) {
            if (!subtringsConverter) {
                const oid = valueOrValues.type_.dotDelimitedNotation;
                throw new Error(
                    "substrings cannot be used to construct non-substrings "
                    + `matching assertion for attribute type ${oid}`
                );
            }
            decodedAssertion = subtringsConverter(assertion);
        } else {
            decodedAssertion = assertionDecoder(assertion);
        }
        const attr: Attribute = (
            ("value" in valueOrValues)
            || (valueOrValues instanceof AttributeTypeAndValue)
        )
            ? new Attribute(valueOrValues.type_, [ valueOrValues.value ])
            : valueOrValues;
        const constantTime = (flags & MATCH_FLAG_CONSTANT_TIME);
        let deferredResult: boolean = false;
        for (let i = 0; i < attr.values.length; i++) {
            const value = attr.values[i];
            try {
                const result = valueMatcher(
                    decodedAssertion,
                    value,
                    getEqualityMatcher,
                    flags,
                );
                if (result === undefined) {
                    // TODO: Should there be a separate flag for debug undefined?
                    continue;
                }
                if (result === true) {
                    if (matchedValues) {
                        matchedValues.values.push(value);
                    } else if (constantTime) {
                        // TODO: Review: is it a good idea to cycle through all values in constant time?
                        // or should this just be per-value?
                        deferredResult = true;
                    } else {
                        return true;
                    }
                }                  
            } catch (e) {
                const debug = (flags & MATCH_FLAG_DEBUG);
                if (debug) {
                    console.error(valueErrorMessage(false, i, attr.type_, e));
                }
                // Value decoding error treated as UNDEFINED. Continuing.
                continue;
            }
        }
        const vwcs = attr.valuesWithContext ?? [];
        for (let i = 0; i < vwcs.length; i++) {
            const vwc = vwcs[i];
            const value = vwc.value;
            try {
                const result = valueMatcher(
                    decodedAssertion,
                    value,
                    getEqualityMatcher,
                    flags,
                );
                if (result === undefined) {
                    // TODO: Should there be a separate flag for debug undefined?
                    continue;
                }
                if (result === true) {
                    if (matchedValues) {
                        if (matchedValues.valuesWithContext) {
                            matchedValues.valuesWithContext.push(vwc);
                        } else {
                            matchedValues.values.push(value);
                        }
                    } else if (constantTime) {
                        // TODO: Review: is it a good idea to cycle through all values in constant time?
                        // or should this just be per-value?
                        deferredResult = true;
                    } else {
                        return true;
                    }
                }                  
            } catch (e) {
                const debug = (flags & MATCH_FLAG_DEBUG);
                if (debug) {
                    console.error(valueErrorMessage(false, i, attr.type_, e));
                }
                // Value decoding error treated as UNDEFINED. Continuing.
                continue;
            }
        }
        if (
            matchedValues
            && (
                (matchedValues.values.length > 0)
                || (matchedValues.valuesWithContext?.length)
            )
        ) {
            return true;
        }
        return deferredResult;
    };
}

export
function createOrderingMatcher<A>(
    assertionDecoder: ASN1Decoder<A>,
    valueMatcher: TypedOrderingFunction<A>,
): Matcher {
    return createEqualityMatcher(
        assertionDecoder,
        useOrderingAsEquality(valueMatcher),
    );
}

export
function createSubstringsMatcher<A>(
    assertionDecoder: ASN1Decoder<A>,
    valueMatcher: TypedEquationFunction<A>,
    subtringsConverter: (strings: FilterItem_substrings_strings_Item[]) => A,
): Matcher {
    return createEqualityMatcher(
        assertionDecoder,
        valueMatcher,
        subtringsConverter,
    );
}

export
function getStringSubstringsMatcher (
    valuePrepper: (value: ASN1Element) => string,
): TypedEquationFunction<AssertedSubstring<string>[]> {
    return function (
        assertion: AssertedSubstring<string>[],
        value: ASN1Element,
        _getEqualityMatcher?: (attributeType: AttributeType) => Matcher | undefined,
        flags: number = 0,
    ): boolean | undefined {
        const constantTime = (flags & MATCH_FLAG_CONSTANT_TIME);
        let v = valuePrepper(value);
        let deferredResult: boolean = true;
        for (let i = 0; i < assertion.length; i++) {
            const subass = assertion[i];
            if ("any_" in subass) {
                const idx = v.indexOf(subass.any_);
                if (idx >= 0) {
                    v = v.slice(idx + subass.any_.length);
                } else if (constantTime) {
                    v = v.slice(subass.any_.length); // Slice as though it did match.
                    deferredResult = false; // Did not match, but don't return yet.
                } else {
                    return false; // Did not match, bail out now.
                }
            } else if ("initial" in subass) {
                if (v.startsWith(subass.initial)) {
                    v = v.slice(subass.initial.length);
                } else if (constantTime) {
                    v = v.slice(subass.initial.length); // Slice as though it did match.
                    deferredResult = false; // Did not match, but don't return yet.
                } else {
                    return false; // Did not match, bail out now.q
                }
            } else if ("final" in subass) {
                if (v.endsWith(subass.final)) {
                    v = v.slice(0, v.length - subass.final.length);
                } else if (constantTime) {
                    if (subass.final.length > v.length) {
                        v = ""; // Slice as though it did match.
                    } else {
                        v = v.slice(0, v.length - subass.final.length); // Slice as though it did match.
                    }
                    deferredResult = false; // Did not match, but don't return yet.
                } else {
                    return false; // Did not match, bail out now.
                }
            }
        }
        return deferredResult;
    };
}
