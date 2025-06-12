import type { OBJECT_IDENTIFIER } from "asn1-ts";
import type EqualityMatcher from "../types/EqualityMatcher.mjs";
import type {
    DistinguishedName,
} from "../modules/InformationFramework/DistinguishedName.ta.mjs";
import type {
    NameAndOptionalUID,
} from "../modules/SelectedAttributeTypes/NameAndOptionalUID.ta.mjs";
import type {
    UserClasses,
} from "../modules/BasicAccessControl/UserClasses.ta.mjs";
import type {
    AuthenticationLevel,
} from "../modules/BasicAccessControl/AuthenticationLevel.ta.mjs";
import type ACDFTuple from "../types/ACDFTuple.mjs";
import compareDistinguishedName from "../comparators/compareDistinguishedName.mjs";
import compareBitStrings from "../comparators/compareBitStrings.mjs";
import dnWithinSubtreeSpecification from "../utils/dnWithinSubtreeSpecification.mjs";
import compareAuthenticationLevel from "../comparators/compareAuthenticationLevel.mjs";
import deniesAccess from "./deniesAccess.mjs";

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
 * @param {UserClasses} userClass The data structure that identifies which users
 *  an ACI item applies to.
 * @param {NameAndOptionalUID} user The distinguished name and optional unique
 *  identifier of the user whose authorization is determined by the ACDF.
 * @param {AuthenticationLevel} authLevel The authentication level of the user.
 * @param {DistinguishedName} entryDN The entry that is the predicate of the
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
    tuple: ACDFTuple,
    user: NameAndOptionalUID | undefined | null,
    authLevel: AuthenticationLevel, // FIXME: Not in JSDoc.
    entryDN: DistinguishedName,
    getEqualityMatcher: (attributeType: OBJECT_IDENTIFIER) => EqualityMatcher | undefined,
    isMemberOfGroup: (userGroup: NameAndOptionalUID, user: NameAndOptionalUID) => Promise<boolean | undefined>,
): Promise<number> {
    const userClass: UserClasses = tuple[0];
    if (!user) {
        return (userClass.allUsers === null) ? 1 : 0;
    }
    const requiredAuthLevel: AuthenticationLevel = tuple[1];
    const denies = deniesAccess(tuple[3]);
    if (
        denies
        && ("basicLevels" in authLevel)
        && ("basicLevels" in requiredAuthLevel)
        && compareAuthenticationLevel(requiredAuthLevel.basicLevels, authLevel.basicLevels)
    ) {
        /**
         * Per ITU Recommendation X.501, Section 18.8.3, bullet point 1.2, if
         * the specified authentication level is higher than that of the user
         * and the tuple denies access, we need to include this tuple. To
         * include this tuple, we must return a non-negative integer.
         *
         * However, it is unclear in the specification how this should "count"
         * when comparing the specificity of user classes. Since we presumably
         * want this to _always_ count, we should return the highest value
         * possible, which means that this tuple will override all others, at
         * least in terms of user-class specificity.
         */
        return 5;
    }
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
                !n.uid // If there is no uid, all entries with this name are relevant.
                || (user.uid && compareBitStrings(user.uid, n.uid))
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
            [], // Note that, with ACIItems, the subtree is always relative to the root.
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
