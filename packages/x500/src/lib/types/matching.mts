import type { ASN1Element } from "@wildboar/asn1";
import type { ASN1Decoder } from "@wildboar/asn1/functional";
import type {
    FilterItem_substrings_strings_Item,
} from "../modules/DirectoryAbstractService/FilterItem-substrings-strings-Item.ta.mjs";
import {
    Attribute,
    AttributeTypeAndValue,
    type AttributeType,
} from "../modules/InformationFramework/index.mjs";

/** Flags used by matching rule implementations. */
export type MatchFlags = number;

/** Alias for no flags. */
export const MATCH_FLAG_NONE: MatchFlags = 0;
/**
 * Expect assertion to have same syntax as value.
 * Asymmetric syntaxes return an error.
 */
export const MATCH_FLAG_USED_FOR_NAME: MatchFlags =        1 << 0;
/**
 * Assume the assertion is already "normalized," such as by being prepared
 * according to the string preparation procedures described in
 * ITU-T Recommendation X.520 (2019), Section 7.
 */
export const MATCH_FLAG_ASSERTION_NORMALIZED: MatchFlags = 1 << 1;
/**
 * Assume the value is already "normalized," such as by being prepared
 * according to the string preparation procedures described in
 * ITU-T Recommendation X.520 (2019), Section 7.
 */
export const MATCH_FLAG_VALUE_NORMALIZED: MatchFlags =     1 << 2;
/** Log unusual code paths to stderr for debugging purposes. */
export const MATCH_FLAG_DEBUG: MatchFlags =                1 << 3;
/**
 * Relax limits on iterations or recursion normally used to prevent
 * denial-of-service.
 */
export const MATCH_FLAG_HIGH_WORK_BUDGET: MatchFlags =     1 << 4;
/**
 * Assume the assertion has already been validated. This is different from
 * normalization. It just means that the assertion is encoded as expected,
 * such as by not having prohibited characters, or not having integer
 * values out-of-range.
 */
export const MATCH_FLAG_ASSERTION_VALIDATED: MatchFlags =  1 << 5;
/**
 * Assume the value has already been validated. This is different from
 * normalization. It just means that the value is encoded as expected,
 * such as by not having prohibited characters, or not having integer
 * values out-of-range.
 */
export const MATCH_FLAG_VALUE_VALIDATED: MatchFlags =      1 << 6;
/**
 * Provide matching in constant-time. This greatly increases the time
 * taken to perform matching (which is bad), but constant-time matching
 * prevents timing oracle attacks where nefarious users can "read"
 * values they do not have permission to read by watching subtle changes
 * in match timing. This should generally only be used for evaluating
 * access control decisions that prevent users from reading particular
 * sensitive values and where the restricted user should not be allowed
 * to know what these restricted values are.
 */
export const MATCH_FLAG_CONSTANT_TIME: MatchFlags =        1 << 7;
/**
 * When using ordering matching, return true if the value is greater than the
 * assertion, rather than less than. This is used to provide `greaterOrEqual`
 * in a filter evaluation; in this case, `MATCH_FLAG_ORDERING_OR_EQUAL` must
 * also be set.
 */
export const MATCH_FLAG_ORDERING_GREATER: MatchFlags =     1 << 8;
/**
 * When using ordering matching, return true if the value is equal to the
 * assertion. This is typically used to provide the "or equal" part of
 * `lessOrEqual` or `greaterOrEqual` filter item evaluation.
 */
export const MATCH_FLAG_ORDERING_OR_EQUAL: MatchFlags =    1 << 9;

/**
 * A substring within a substrings matching assertion.
 */
export type AssertedSubstring<T> = 
    | { initial: T }
    | { any_: T }
    | { final: T }
    | { control: Attribute }
    ;

/**
 * A type representing an implementation of an X.500 directory matching rule.
 * 
 * The `assertion` may be:
 * 
 * 1. An encoding of the assertion syntax specified by the matching rule
 *    definition.
 * 2. An encoding that can be converted to the assertion syntax specified by
 *    the matching rule definition.
 * 3. Any compatible encoded ASN.1 value if the matching rule does not specify
 *    an assertion syntax.
 * 4. The individual strings (or control attributes) specified in the
 *    `substrings` alternative of a `FilterItem`.
 * 
 * The value may be:
 * 
 * 1. An `AttributeTypeAndValue` or
 * 2. An entire `Attribute.
 * 
 * An `AttributeTypeAndValue` is converted to an `Attribute` of like type with
 * a single value and no contexts and evaluated as such. All values are
 * evaluated until a match is found, unless the `MATCH_FLAG_CONSTANT_TIME`
 * flag is used--implementations are expected to (but might not) evaluate all
 * attribute values, even if one is known to match.
 * 
 * `getEqualityMatcher` is a function that takes an attribute type and returns
 * the corresponding value equality matcher. This is generally so that
 * distinguished names within a value can be matched, such as in a
 * `NameAndOptionalUID`.
 * 
 * `flags` contains flags that modulate matching behavior, generally in ways
 * that do not make the matching incorrect, such as enabling debugging output,
 * performing constant-time matching, skipping string preparation, etc. These
 * flags are generally used for enhanced security or performance.
 * 
 * `matchedValues` is an out parameter. If provided, it will be populated with
 * values that matched the assertion. If `valuesWithContext` is absent, values
 * that match will be pushed to the `values` array. This is basically only
 * useful if the caller does not want the context values. Pass in an empty
 * array for `valuesWithContext` if you want to preserve the context values.
 * 
 * Functions of this type signature return:
 * 
 * 1. `true`, which corresponds to a `TRUE` evaluation of the match, or
 * 2. `false`, which corresponds to a `FALSE` evaluation of the match, or
 * 3. `undefined`, which corresponds to a `UNDEFINED` evaluation of the match.
 * 
 * Malformed values are expected to be treated as `UNDEFINED` match outcomes.
 * Malformed assertions are expected to throw errors; the caller shall assume
 * that thrown errors mean that the assertion is malformed.
 */
export
type Matcher = (
    assertion: ASN1Element | FilterItem_substrings_strings_Item[],
    valueOrValues: AttributeTypeAndValue | Attribute,
    getEqualityMatcher?: (attributeType: AttributeType) => Matcher | undefined,
    flags?: number,
    matchedValues?: Attribute,
) => boolean | undefined;

/**
 * A function that takes a typed assertion that is prepared for matching
 * already. The `value` is the value to be matched against the assertion.
 * 
 * `getEqualityMatcher` is a function that takes an attribute type and returns
 * the corresponding value equality matcher. This is generally so that
 * distinguished names within a value can be matched, such as in a
 * `NameAndOptionalUID`.
 * 
 * `flags` contains flags that modulate matching behavior, generally in ways
 * that do not make the matching incorrect, such as enabling debugging output,
 * performing constant-time matching, skipping string preparation, etc. These
 * flags are generally used for enhanced security or performance.
 * 
 * Functions of this type signature return:
 * 
 * 1. `true`, which corresponds to a `TRUE` evaluation of the match, or
 * 2. `false`, which corresponds to a `FALSE` evaluation of the match, or
 * 3. `undefined`, which corresponds to a `UNDEFINED` evaluation of the match.
 * 
 * Malformed values are expected to throw errors.
 */
export
type TypedEquationFunction<A> = (
    assertion: A,
    value: ASN1Element,
    getEqualityMatcher?: (attributeType: AttributeType) => Matcher | undefined,
    flags?: number,
) => boolean | undefined;

/**
 * A function that takes a typed assertion that is prepared for matching
 * already. The `value` is the value to be matched against the assertion.
 * 
 * `getEqualityMatcher` is a function that takes an attribute type and returns
 * the corresponding value equality matcher. This is generally so that
 * distinguished names within a value can be matched, such as in a
 * `NameAndOptionalUID`.
 * 
 * `flags` contains flags that modulate matching behavior, generally in ways
 * that do not make the matching incorrect, such as enabling debugging output,
 * performing constant-time matching, skipping string preparation, etc. These
 * flags are generally used for enhanced security or performance.
 * 
 * Functions of this type signature return a `number` that, if returned as the
 * predicate of Javascript's `Array.sort()`, would sort the values in ascending
 * order according to the logic of the ordering matching rule. For example, if
 * this is an implementation of `integerOrderingMatch`, the `number` returned
 * would sort the integers in ascending order. This may return `undefined`,
 * which corresponds to the `UNDEFINED` outcome of the match.
 * 
 * Malformed values are expected to throw errors.
 * 
 * @human
 */
export
type TypedOrderingFunction<A> = (
    assertion: A,
    value: A | ASN1Element,
    getEqualityMatcher?: (attributeType: AttributeType) => Matcher | undefined,
    flags?: number,
) => number | undefined;

/**
 * @internal
 * @human
 */
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

/**
 * @summary Use an ordering matcher as an equality matcher.
 * @description
 * 
 * Utility higher-order function that allows an ordering matcher to be used as
 * an equality matcher.
 * 
 * This function responds to the `MATCH_FLAG_ORDERING_GREATER` and
 * `MATCH_FLAG_ORDERING_OR_EQUAL` flags, so it can be used in both `lessOrEqual`
 * and `greaterOrEqual` filter item evaluation.
 * 
 * Malformed values are expected to throw errors.
 *
 * @param valueMatcher function that returns a `number` that, if returned as the
 * predicate of Javascript's `Array.sort()`, would sort the values in ascending
 * order according to the logic of the ordering matching rule. For example, if
 * this is an implementation of `integerOrderingMatch`, the `number` returned
 * would sort the integers in ascending order. This may return `undefined`,
 * which corresponds to the `UNDEFINED` outcome of the match.
 * @returns function that takes a typed assertion and a value and returns a
 * `boolean` that indicates whether the value matches the assertion.
 * @function
 * @human
 */
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

/**
 * @summary Create an equality matcher.
 * @description
 * 
 * Create an equality matcher function from a function for decoding the assertion,
 * a function that compares the decoded assertion with a single value, and an optional
 * function that converts a list of substrings into a typed assertion.
 * 
 * The returned function uses the `MATCH_FLAG_CONSTANT_TIME` flag: if this flag is
 * set, the matcher iterates over all values, even if a match is found.
 * 
 * The returned function also uses the `MATCH_FLAG_DEBUG` flag: if this flag is
 * set, the matcher will log debugging information to the console when an error is
 * thrown while matching a value.
 * 
 * All parameters of the returned function are used as they are described,
 * including the `matchedValues` parameter, to which the matched values are
 * pushed, if provided.
 * 
 * @param assertionDecoder function that decodes something from an ASN.1 encoding
 * @param valueMatcher function that takes a typed assertion and a value and returns a
 * `boolean` that indicates whether the value matches the assertion, or `undefined`.
 * @param subtringsConverter function that converts a list of substrings into a
 *  typed assertion. The returned matcher cannot be used for substrings matching if
 *  this argument is not provided.
 * @returns function that takes an assertion and a value and returns a
 * `boolean` that indicates whether the value matches the assertion, or `undefined`.
 * @function
 * @human
 */
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

/**
 * @summary Create an ordering matcher that can be used like an equality matcher.
 * @param assertionDecoder function that decodes something from an ASN.1 encoding
 * @param valueMatcher function that takes a typed assertion and a value and returns a
 * `number` that, if returned as the predicate of Javascript's `Array.sort()`, would
 * sort the values in ascending order according to the logic of the ordering matching
 * rule. For example, if this is an implementation of `integerOrderingMatch`, the
 * `number` returned would sort the integers in ascending order. This may return
 * `undefined`, which corresponds to the `UNDEFINED` outcome of the match.
 * @returns function that takes an assertion and a value and returns a
 * `boolean` that indicates whether the value matches the assertion, or `undefined`.
 * @function
 * @human
 */
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

/**
 * @summary Create a substrings matcher that can be used like an equality matcher.
 * @param assertionDecoder function that decodes something from an ASN.1 encoding
 * @param valueMatcher function that takes a typed assertion and a value and returns a
 * `boolean` that indicates whether the value matches the assertion, or `undefined`.
 * @param subtringsConverter function that converts a list of substrings into a
 *  typed assertion.
 * @returns function that takes an assertion and a value and returns a
 * `boolean` that indicates whether the value matches the assertion, or `undefined`.
 * @function
 * @human
 */
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
 * 
 * @internal
 * @author Cursor Grok 4.7 High
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
 * 
 * @internal
 * @author Cursor Grok 4.7 High
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
 * 
 * @internal
 * @author Cursor Grok 4.7 High
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

/**
 * @summary Create a function that performs substrings matching on a string-typed value.
 * @description
 * 
 * Create a function that performs substrings matching on a string-typed value.
 * 
 * This function uses the `MATCH_FLAG_CONSTANT_TIME` flag: if this flag is
 * set, the matcher iterates over all substrings, even if a match is found.
 * 
 * @param valuePrepper function that takes a ASN.1 encoding and decodes it as
 *  a string that is prepared for matching.
 * @returns A function that performs substrings matching on a string-typed value.
 * @function
 * @human
 */
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
