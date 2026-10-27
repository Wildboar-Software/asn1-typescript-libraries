import type { OBJECT_IDENTIFIER } from "@wildboar/asn1";
import type EqualityMatcher from "./EqualityMatcher.mjs";

/**
 * The assertion is already prepared for this matching rule.
 * Preparation (stringprep, space removal, hyphen removal) is skipped.
 */
export const MATCH_FLAG_ASSERTION_PREPPED = 1 << 0;

/**
 * The stored value is already prepared for this matching rule.
 * The same bit is defined by `@wildboar/ldap`.
 */
export const MATCH_FLAG_VALUE_PREPPED = 1 << 1;

/**
 * Retrieves the equality rule for an attribute type nested in a value.
 * The third argument of `EqualityMatcher` and `SubstringsMatcher`.
 */
export type EqualityMatcherGetter = (
    attributeType: OBJECT_IDENTIFIER,
) => EqualityMatcher | undefined;

/**
 * @param flags Bit set from {@link MATCH_FLAG_ASSERTION_PREPPED}.
 * @returns Whether the assertion is already prepared.
 */
export
function assertionAlreadyPrepped (flags: number): boolean {
    return (flags & MATCH_FLAG_ASSERTION_PREPPED) !== 0;
}

/**
 * @param flags Bit set from {@link MATCH_FLAG_VALUE_PREPPED}.
 * @returns Whether the stored value is already prepared.
 */
export
function valueAlreadyPrepped (flags: number): boolean {
    return (flags & MATCH_FLAG_VALUE_PREPPED) !== 0;
}
