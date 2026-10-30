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
        let allUndefined: boolean = true;
        let deferredResult: boolean | undefined = false;
        for (let i = 0; i < attr.values.length; i++) {
            const value = attr.values[i];
            try {
                const result = valueMatcher(
                    decodedAssertion,
                    value,
                    getEqualityMatcher,
                    flags,
                );

                if (result !== undefined) {
                    allUndefined = false;
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
                } else if (deferredResult !== true) {
                    // UNDEFINED takes precedence over FALSE as a reflection of
                    // the fact that the value _could_ have matched, but we are
                    // unsure. A TRUE already found must stay TRUE.
                    deferredResult = (deferredResult === undefined) ? undefined : result;
                }
            } catch (e) {
                const debug = (flags & MATCH_FLAG_DEBUG);
                if (debug && !constantTime) {
                    console.error(valueErrorMessage(false, i, attr.type_, e));
                }
                deferredResult = deferredResult || undefined;
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

                if (result !== undefined) {
                    allUndefined = false;
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
                } else if (deferredResult !== true) {
                    // UNDEFINED takes precedence over FALSE as a reflection of
                    // the fact that the value _could_ have matched, but we are
                    // unsure. A TRUE already found must stay TRUE.
                    deferredResult = (deferredResult === undefined) ? undefined : result;
                }
            } catch (e) {
                const debug = (flags & MATCH_FLAG_DEBUG);
                if (debug && !constantTime) {
                    console.error(valueErrorMessage(false, i, attr.type_, e));
                }
                deferredResult = deferredResult || undefined;
                continue;
            }
        }
        if (allUndefined) {
            return undefined;
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

/**
 * @returns 1 when `haystack` contains `needle` at `start`, otherwise 0.
 * The loop always runs `needle.length` times. Out-of-range positions still
 * read a haystack character, so a needle that overhangs does not skip the reads.
 * 
 * This returns an integer instead of a boolean so it can be used in branchless
 * programming.
 */
function ctEqualAt (haystack: string, start: number, needle: string): number {
    const n = needle.length;
    const hlen = haystack.length;
    let mismatch = (start >= 0 && (start + n) <= hlen) ? 0 : 1;
    for (let j = 0; j < n; j++) {
        const pos = start + j;
        const inPos = (pos >= 0 && pos < hlen) ? 1 : 0;
        const hc = hlen === 0 ? 0 : haystack.charCodeAt(inPos ? pos : 0);
        mismatch |= (hc ^ needle.charCodeAt(j)) | (inPos ^ 1);
    }
    return mismatch === 0 ? 1 : 0;
}

/**
 * Earliest index of `needle` at or after `from` and ending at or before `end`.
 * One alignment is tried per haystack index, including indexes where `needle`
 * overhangs the end. Stopping at `haystack.length - needle.length` would skip
 * the loop entirely whenever the needle is longer than the haystack, so
 * shortening that needle until the loop starts would reveal the haystack length.
 * Returns -1 on a miss.
 */
function ctIndexOf (
    haystack: string,
    needle: string,
    from: number,
    end: number,
): number {
    const needleLength = needle.length;
    const haystackLength = haystack.length;
    let earliestIndex = -1;
    for (let index = 0; index <= haystackLength; index++) {
        const needleMatchesHere = ctEqualAt(haystack, index, needle);
        const startsAtOrAfterWindow = index >= from ? 1 : 0;
        const endsAtOrBeforeWindow = (index + needleLength) <= end ? 1 : 0;
        const noEarlierMatch = earliestIndex < 0 ? 1 : 0;
        const useThisIndex = needleMatchesHere
            & startsAtOrAfterWindow
            & endsAtOrBeforeWindow
            & noEarlierMatch;
        // useThisIndex is 1 or 0, so this sets earliestIndex to index on the
        // first in-window hit and leaves it unchanged on every other iteration.
        earliestIndex += useThisIndex * (index - earliestIndex);
    }
    return earliestIndex;
}

/**
 * Same partition as the early-exit substring walk. Each component scans the
 * whole prepared string, so a miss does not return early and does not shrink
 * the amount of work left for the next component.
 */
function matchSubstringsConstantTime (
    prepared: string,
    assertion: AssertedSubstring<string>[],
): boolean {
    let cursor = 0;
    let end = prepared.length;
    let matched = 1;
    for (let i = 0; i < assertion.length; i++) {
        const subass = assertion[i];
        if ("any_" in subass) {
            const needle = subass.any_;
            const found = ctIndexOf(prepared, needle, cursor, end);
            const hit = found >= 0 ? 1 : 0;
            matched &= hit;
            cursor += hit * (found + needle.length - cursor);
        } else if ("initial" in subass) {
            const needle = subass.initial;
            const hit = ctEqualAt(prepared, cursor, needle)
                & ((cursor + needle.length) <= end ? 1 : 0);
            matched &= hit;
            cursor += hit * needle.length;
        } else if ("final" in subass) {
            const needle = subass.final;
            const start = end - needle.length;
            const hit = ctEqualAt(prepared, start, needle)
                & (start >= cursor ? 1 : 0);
            matched &= hit;
            end -= hit * needle.length;
        }
    }
    return matched === 1;
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
        const prepared = valuePrepper(value);
        if (flags & MATCH_FLAG_CONSTANT_TIME) {
            return matchSubstringsConstantTime(prepared, assertion);
        }
        let v = prepared;
        for (let i = 0; i < assertion.length; i++) {
            const subass = assertion[i];
            if ("any_" in subass) {
                const idx = v.indexOf(subass.any_);
                if (idx >= 0) {
                    v = v.slice(idx + subass.any_.length);
                } else {
                    return false;
                }
            } else if ("initial" in subass) {
                if (v.startsWith(subass.initial)) {
                    v = v.slice(subass.initial.length);
                } else {
                    return false;
                }
            } else if ("final" in subass) {
                if (v.endsWith(subass.final)) {
                    v = v.slice(0, v.length - subass.final.length);
                } else {
                    return false;
                }
            }
        }
        return true;
    };
}
