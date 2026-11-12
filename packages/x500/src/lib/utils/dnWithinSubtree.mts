import type { OBJECT_IDENTIFIER } from "@wildboar/asn1";
import {
    dnStartsWith,
    type RDNSequenceDescending,
} from "@wildboar/dn";
import compareElements from "../comparators/compareElements.mjs";
import type { Matcher } from "../types/matching.mjs";
import { valueEqualityMatcher } from "../matching/valueEqualityMatcher.mjs";

/**
 * @summary Determine whether a distinguished name falls within a subtree of the DIT
 * @description
 *
 * Both names are X.500 distinguished names: DIT-descending, so a name
 * falls within the subtree when `dit` is a prefix of `dn` and the number
 * of RDNs below `dit` is between `minimum` and `maximum`, inclusive.
 *
 * Brand each name with `asDITDescending` from `@wildboar/dn`. A name in
 * LDAP (DIT-ascending) order is not assignable here; reverse it with
 * `toDITDescending` first.
 *
 * The `minimum` and `maximum` bounds are inclusive. A minimum of `0` is the
 * default. A maximum of `0` means only `dit` itself matches. The default
 * maximum is the largest safe integer.
 *
 * @param dn The distinguished name to be evaluated, in DIT-descending order.
 * @param dit The vertex that forms the top of the subtree, in DIT-descending order.
 * @param minimum The number of "levels" below `dit` that should comprise the matching area
 * @param maximum The number of "levels" below `dit` beyond which should NOT
 *  comprise the matching area
 * @param getEqualityMatcher A function that returns a function for matching
 *  values of a given attribute type when given the attribute type's OID.
 * @returns `true` if the distinguished name falls within the
 *  asserted subtree.
 * @function
 */
export
function dnWithinSubtree (
    dn: RDNSequenceDescending,
    dit: RDNSequenceDescending,
    minimum: number = 0,
    maximum: number = Number.MAX_SAFE_INTEGER,
    getEqualityMatcher?: (attributeType: OBJECT_IDENTIFIER) => Matcher | undefined,
): boolean {
    if (dn.length < (dit.length + minimum)) {
        return false;
    }
    if (dn.length > (dit.length + maximum)) {
        return false;
    }
    return dnStartsWith(
        dn,
        dit,
        valueEqualityMatcher(getEqualityMatcher) ?? (() => compareElements),
    );
}

export default dnWithinSubtree;
