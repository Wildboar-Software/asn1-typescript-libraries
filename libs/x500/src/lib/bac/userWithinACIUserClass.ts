import type { OBJECT_IDENTIFIER } from "asn1-ts";
import type EqualityMatcher from "../types/EqualityMatcher";
import type {
    DistinguishedName,
} from "../modules/InformationFramework/DistinguishedName.ta";
import type {
    NameAndOptionalUID,
} from "../modules/SelectedAttributeTypes/NameAndOptionalUID.ta";
import type {
    UserClasses,
} from "../modules/BasicAccessControl/UserClasses.ta";
import type {
    OBJECT_CLASS,
} from "../modules/InformationFramework/OBJECT-CLASS.oca";
import compareDistinguishedName from "../comparators/compareDistinguishedName";
import compareBitStrings from "../comparators/compareBitStrings";
import dnWithinSubtreeSpecification from "../utils/dnWithinSubtreeSpecification";

/**
 * Determines if a user is within a user class as specified in
 * ITU Recommendation X.501 (2016), Section 18.4.2.4.b.
 *
 * This implementation returns `-1` if the user is not within the class, otherwise
 * this returns the tag number of the component by which it matched. This may
 * seem strange, but knowledge of which component the user matched on is
 * critical for later. If there is a stalemate in precedence between two ACI
 * items, we have to fallback on the more specific of the user classes that
 * matched. This also explains another peculiarity of how this function works:
 * you will notice that the more specific membership tests are applied first.
 *
 * As ITU Recommendation X.501 (2016), Section 18.8.4 specifies, the order of
 * specificity is as such (in order of ascending specificity):
 *
 * - `allUsers`
 * - `subtree`
 * - `userGroup`
 * - `name` and `thisEntry` (both having equal precedence)
 *
 * This means that, if you have to sort `UserClasses`, sort them by return
 * values in this order of precedence: `1 = 2 > 3 > 4 > 0`.
 *
 * ### ASN.1 Definitions:
 *
 * ```asn1
 * UserClasses ::= SEQUENCE {
 *   allUsers   [0]  NULL                                      OPTIONAL,
 *   thisEntry  [1]  NULL                                      OPTIONAL,
 *   name       [2]  SET SIZE (1..MAX) OF NameAndOptionalUID   OPTIONAL,
 *   userGroup  [3]  SET SIZE (1..MAX) OF NameAndOptionalUID   OPTIONAL,
 *                   -- dn component shall be the name of an
 *                   -- entry of GroupOfUniqueNames
 *   subtree    [4]  SET SIZE (1..MAX) OF SubtreeSpecification OPTIONAL,
 *   ... }
 * ```
 * @function
 */
export
function userWithinACIUserClass (
    administrativePoint: DistinguishedName,
    userClass: UserClasses,
    user: NameAndOptionalUID,
    entryDN: DistinguishedName,
    getEqualityMatcher: (attributeType: OBJECT_IDENTIFIER) => EqualityMatcher | undefined,
    isMemberOfGroup: (userGroup: NameAndOptionalUID, user: NameAndOptionalUID) => boolean | undefined,
): 0 | 1 | 2 | 3 | 4 | -1 {
    if (
        (userClass.thisEntry === null)
        && compareDistinguishedName(user.dn, entryDN, getEqualityMatcher)
    ) {
        return 1;
    }
    if (
        (userClass.name && (userClass.name.length > 0))
        && (userClass.name.some((n) => (
            compareDistinguishedName(user.dn, n.dn, getEqualityMatcher)
            && (
                (!user.uid && !n.uid)
                || compareBitStrings(user.uid, n.uid)
            )
        )))
    ) {
        return 2;
    }
    if (
        (userClass.userGroup && (userClass.userGroup.length > 0))
        && userClass.userGroup.some((ug) => isMemberOfGroup(ug, user))
    ) {
        return 3;
    }
    if (
        (userClass.subtree && (userClass.subtree.length > 0))
        && userClass.subtree.some((subtree) => dnWithinSubtreeSpecification(
            user.dn,
            [], // ITU Recommendation X.501 specifically says: this subtree is to be unrefined.
            subtree,
            administrativePoint,
            getEqualityMatcher,
        ))
    ) {
        return 4;
    }
    if (userClass.allUsers === null) {
        return 0;
    }
    return -1;
}

export default userWithinACIUserClass;
