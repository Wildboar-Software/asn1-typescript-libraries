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
 * As ITU Recommendation X.501 (2016), Section 18.8.4 specifies, the order of
 * specificity is as such (in order of ascending specificity):
 *
 * - `allUsers`
 * - `subtree`
 * - `userGroup`
 * - `name` and `thisEntry` (both having equal precedence)
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
 *  and resolves a `boolean` indicating whether the user is a member of the
 *  group or `undefined` if it could not be determined.
 * @returns A `number` that ascends with increasing specificity of the match, or
 *  `0` if it did not match. This number will be non-integral if group
 *  membership was checked, but group membership could not be determined.
 *
 * @function
 */
export
async function userWithinACIUserClass (
    administrativePoint: DistinguishedName,
    userClass: UserClasses,
    user: NameAndOptionalUID,
    entryDN: DistinguishedName,
    getEqualityMatcher: (attributeType: OBJECT_IDENTIFIER) => EqualityMatcher | undefined,
    isMemberOfGroup: (userGroup: NameAndOptionalUID, user: NameAndOptionalUID) => Promise<boolean | undefined>,
): Promise<number> {
    let couldNotDetermineGroupMembership: boolean = false;
    if (
        (userClass.thisEntry === null)
        && compareDistinguishedName(user.dn, entryDN, getEqualityMatcher)
    ) {
        return 4;
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
        return 4;
    }
    if (
        (userClass.userGroup && (userClass.userGroup.length > 0))
        && userClass.userGroup.some((ug) => isMemberOfGroup(ug, user))
    ) {
        for (const ug of userClass.userGroup) {
            const isMember = await isMemberOfGroup(ug, user);
            if (isMember === undefined) {
                couldNotDetermineGroupMembership = true;
            } else if (isMember) {
                return 3;
            }
        }
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
        if (couldNotDetermineGroupMembership) {
            return 2.5;
        }
        return 2;
    }
    if (userClass.allUsers === null) {
        if (couldNotDetermineGroupMembership) {
            return 1.5;
        }
        return 1;
    }
    if (couldNotDetermineGroupMembership) {
        return 0.5;
    }
    return 0;
}

export default userWithinACIUserClass;
