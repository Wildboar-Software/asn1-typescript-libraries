import type { Name } from "../Name.ta.mjs";
import { compareRDNSequence } from "../rdnseq/compare.mjs";
import type { GetDistinguishedValueMatcher } from "../atav/compare.mjs";

/**
 * @summary Compare two `Name` values for equality
 * @description
 *
 * Compares two `Name` structures for equality. Currently, `rdnSequence` is the
 * only supported alternative of `Name`, so this serves as a wrapper around
 * {@link compareRDNSequence}.
 *
 * @param a One directory name
 * @param b The other directory name
 * @param getMatcher Optional function to look up the equality matcher for an attribute type
 * @param reverse Whether to compare RDNs from the end (index `len - 1` down to `0`)
 * @returns `true` if the names match; `false` otherwise
 * @function
 */
export function compareName(
    a: Name,
    b: Name,
    getMatcher?: GetDistinguishedValueMatcher,
    reverse: boolean = false,
): boolean {
    if ("rdnSequence" in a && "rdnSequence" in b) {
        return compareRDNSequence(a.rdnSequence, b.rdnSequence, getMatcher, reverse);
    }
    return false;
}

/**
 * @summary Compare two `Name` values starting from the last RDN (highest cardinality in X.500 order)
 *
 * @param a One directory name
 * @param b The other directory name
 * @param getMatcher Optional function to look up the equality matcher for an attribute type
 * @returns `true` if the names match; `false` otherwise
 * @function
 */
export function compareNameReverse(
    a: Name,
    b: Name,
    getMatcher?: GetDistinguishedValueMatcher,
): boolean {
    return compareName(a, b, getMatcher, true);
}

export default compareName;
