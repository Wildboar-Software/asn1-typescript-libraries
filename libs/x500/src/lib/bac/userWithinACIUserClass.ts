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
import compareDistinguishedName from "../comparators/compareDistinguishedName";
import compareBitStrings from "../comparators/compareBitStrings";
import dnWithinSubtreeSpecification from "../utils/dnWithinSubtreeSpecification";

/**
 * @summary Determines if a user falls within an ACI item's `UserClasses`.
 * @description
 *
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
 *
 * ### Parameters
 *
 * @param {DistinguishedName} administrativePoint The distinguished name of the
 *  administrative point in which the user resides.
 * @param {UserClasses} userClass The data structure that identifies which users
 *  an ACI item applies to.
 * @param {NameAndOptionalUID} user The distinguished name and optional unique
 *  identifier of the user whose authorization is determined by the ACDF.
 * @param {DistinguishedName} entry The entry that is the predicate of the
 *  ACDF, or whose attributes are. The entry to whose entirety or whose
 *  attributes the subject is seeking authorization.
 * @param {function} getEqualityMatcher A function that takes an object
 *  identifier and returns another function (if one can be found) that can be
 *  used to compare two values of the same attribute type.
 * @param {function} isMemberOfGroup A function that takes a user group and user
 *  and returns a `boolean` indicating whether the user is a member of the group.
 * @returns The tag number of the most specific `UserClasses` component by
 *  which this user was targeted, or `-1` if the user did not match.
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
