import type { RDNSequence } from "../RDNSequence.ta.mjs";
import { compareRelativeDistinguishedName } from "../rdn/compare.mjs";
import type { GetDistinguishedValueMatcher } from "../atav/compare.mjs";

/**
 * @summary Compare two `RDNSequence`s for equality
 * @description
 *
 * Compares two RDN sequences in order.
 *
 * - Returns `false` if `a.length !== b.length`.
 * - If both are empty (`length === 0`), returns `true` (an empty RDN sequence represents the root DIT name).
 * - If `reverse` is `false` (default), compares RDNs starting from index `0` up to `len - 1`
 *   (forward order, best when lowest/leaf entry is first, as in LDAP DNs).
 * - If `reverse` is `true`, compares RDNs starting from `len - 1` down to `0`
 *   (reverse order, best when root entry is first and lowest/leaf entry is last, as in standard X.500 DIT order).
 *
 * @param a One RDN sequence
 * @param b The other RDN sequence
 * @param getMatcher Optional function to look up the equality matcher for an attribute type
 * @param reverse Whether to compare from the end (index `len - 1` down to `0`) instead of index `0` forward
 * @returns `true` if all RDNs match; `false` otherwise
 * @function
 */
export function compareRDNSequence(
    a: RDNSequence,
    b: RDNSequence,
    getMatcher?: GetDistinguishedValueMatcher,
    reverse: boolean = false,
): boolean {
    if (a.length !== b.length) {
        return false;
    }
    if (reverse) {
        for (let i = a.length - 1; i >= 0; i--) {
            if (!compareRelativeDistinguishedName(a[i], b[i], getMatcher)) {
                return false;
            }
        }
    } else {
        for (let i = 0; i < a.length; i++) {
            if (!compareRelativeDistinguishedName(a[i], b[i], getMatcher)) {
                return false;
            }
        }
    }
    return true;
}

/**
 * @summary Compare two `RDNSequence`s starting from the last RDN (highest cardinality in X.500 order)
 * @description
 *
 * In standard X.500 directory ordering, the root entry is at index 0 and the
 * leaf (lowest) entry is at the last index. Comparing starting from the end
 * optimizes fail-fast performance because the leaf entry has the highest cardinality.
 *
 * @param a One RDN sequence
 * @param b The other RDN sequence
 * @param getMatcher Optional function to look up the equality matcher for an attribute type
 * @returns `true` if all RDNs match; `false` otherwise
 * @function
 */
export function compareRDNSequenceReverse(
    a: RDNSequence,
    b: RDNSequence,
    getMatcher?: GetDistinguishedValueMatcher,
): boolean {
    return compareRDNSequence(a, b, getMatcher, true);
}

/**
 * @summary Compare two `RDNSequence`s assuming X.500 ordering (lowest entry last)
 * @description
 *
 * Starts comparison from the end of the sequence (highest cardinality) for faster mismatches.
 *
 * @param a One RDN sequence
 * @param b The other RDN sequence
 * @param getMatcher Optional function to look up the equality matcher for an attribute type
 * @returns `true` if all RDNs match; `false` otherwise
 * @function
 */
export const compareX500RDNSequence = compareRDNSequenceReverse;

/**
 * @summary Compare two `RDNSequence`s assuming LDAP ordering (lowest entry first)
 * @description
 *
 * Starts comparison from index 0 (highest cardinality in LDAP order) for faster mismatches.
 *
 * @param a One RDN sequence
 * @param b The other RDN sequence
 * @param getMatcher Optional function to look up the equality matcher for an attribute type
 * @returns `true` if all RDNs match; `false` otherwise
 * @function
 */
export function compareLdapRDNSequence(
    a: RDNSequence,
    b: RDNSequence,
    getMatcher?: GetDistinguishedValueMatcher,
): boolean {
    return compareRDNSequence(a, b, getMatcher, false);
}

export default compareRDNSequence;
