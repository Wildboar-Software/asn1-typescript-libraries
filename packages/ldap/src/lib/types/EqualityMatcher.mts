import type { ASN1Element, OBJECT_IDENTIFIER } from "@wildboar/asn1";

/**
 * @summary An equality matcher for X.500 directory values.
 * @description
 *
 * A function that compares an X.500 directory value against an assertion value
 * exactly: this is used for implementing equality matching rules.
 *
 * `getEqualityMatcher` retrieves the equality rule for an attribute type
 * nested inside a value. `flags` carries `MATCH_FLAG_ASSERTION_PREPPED` and
 * `MATCH_FLAG_VALUE_PREPPED` for rules that prepare strings before comparing.
 *
 * @param assertion The assertion value.
 * @param value The value to match.
 * @param getEqualityMatcher Equality rule for a nested attribute type.
 * @param flags Preparation bits. See `MatchFlags`.
 * @returns Whether the assertion value matches the value.
 * @function
 */
export
type EqualityMatcher = (
    assertion: ASN1Element,
    value: ASN1Element,
    getEqualityMatcher?: (attributeType: OBJECT_IDENTIFIER) => EqualityMatcher | undefined,
    flags?: number,
) => boolean;

export type { EqualityMatcher as default };
