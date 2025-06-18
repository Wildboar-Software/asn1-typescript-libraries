import type EqualityMatcher from "../types/EqualityMatcher.mjs";
import type { OBJECT_IDENTIFIER } from "asn1-ts";
import type {
    DistinguishedName,
} from "../modules/InformationFramework/DistinguishedName.ta.mjs";
import compareDistinguishedName from "../comparators/compareDistinguishedName.mjs";

// TODO: This should be split into two: nameWithinGeneralSubtree and dnWithinSubtreeSpecification

/**
 * @summary Determine whether a distinguished name falls within a subtree of the DIT
 * @description
 * 
 * The `minimum` and `maximum` bounds are inclusive. A minimum of `0` is the
 * default. A maximum of `0` is the default.
 * 
 * @param {DistinguishedName} dn The distinguished name to be evaluated
 * @param {DistinguishedName} dit The vertex that forms the top of the subtree
 * @param {number} minimum The number of "levels" below `dit` that should comprise the matching area
 * @param {number} maximum The number of "levels" below `dit` beyond which should NOT
 *  comprise the matching area
 * @param {Function} getEqualityMatcher A function that returns a function for matching
 *  values of a given attribute type when given the attribute type's OID.
 * @returns {Boolean} `true` if the distinguished name falls within the
 *  asserted subtree.
 * @function
 */
export
function dnWithinSubtree (
    dn: DistinguishedName,
    dit: DistinguishedName,
    minimum: number = 0,
    maximum: number = 0,
    getEqualityMatcher?: (attributeType: OBJECT_IDENTIFIER) => EqualityMatcher | undefined,
): boolean {
    if (dn.length < (dit.length + minimum)) {
        return false;
    }
    if (dn.length > (dit.length + maximum)) {
        return false;
    }
    // We spread the arrays, because Array.reverse() reverses in-place!
    return compareDistinguishedName(
        [ ...dit ].reverse(),
        [ ...dn ].reverse().slice(0, dit.length),
        getEqualityMatcher ?? (() => () => false),
    );
}

export default dnWithinSubtree;
