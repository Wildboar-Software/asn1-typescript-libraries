import type { RelativeDistinguishedName } from "../RelativeDistinguishedName.ta.mjs";
import {
    compareAttributeTypeAndValue,
    compareBytes,
    type GetDistinguishedValueMatcher,
} from "../atav/compare.mjs";

/**
 * @summary Compare two `RelativeDistinguishedName`s for equality
 * @description
 *
 * Two relative distinguished names match if, for every attribute type-and-value
 * pair (ATAV) in one, there is an ATAV of the same type in the other whose values
 * match under that attribute type's equality matching rule.
 *
 * - Fails the match (`false`) if either RDN is empty, per ASN.1 definition
 *   (`SET SIZE (1..MAX) OF AttributeTypeAndValue`).
 * - Fails the match (`false`) if the two RDNs have different numbers of ATAVs.
 * - Single-valued RDNs (1 ATAV) are compared directly without sorting.
 * - Multi-valued RDNs (> 1 ATAV) sort copies of the ATAVs by attribute type OID
 *   bytes using {@link compareBytes} on the buffer returned from `toBytesUnsafe()`
 *   before checking that each ATAV matches in lockstep.
 *
 * @param a One relative distinguished name
 * @param b The other relative distinguished name
 * @param getMatcher Optional function to look up the equality matcher for an attribute type
 * @returns `true` if the RDNs match; `false` otherwise
 * @function
 */
export function compareRelativeDistinguishedName(
    a: RelativeDistinguishedName,
    b: RelativeDistinguishedName,
    getMatcher?: GetDistinguishedValueMatcher,
): boolean {
    if (a.length === 0 || b.length === 0) {
        return false;
    }
    if (a.length !== b.length) {
        return false;
    }
    if (a.length === 1) {
        return compareAttributeTypeAndValue(a[0], b[0], getMatcher);
    }
    const sortedA = a
        .slice()
        .sort((x, y) => compareBytes((x.type_).toBytesUnsafe(), (y.type_).toBytesUnsafe()));
    const sortedB = b
        .slice()
        .sort((x, y) => compareBytes((x.type_).toBytesUnsafe(), (y.type_).toBytesUnsafe()));
    for (let i = 0; i < sortedA.length; i++) {
        if (!compareAttributeTypeAndValue(sortedA[i], sortedB[i], getMatcher)) {
            return false;
        }
    }
    return true;
}

export default compareRelativeDistinguishedName;
