import { type OBJECT_IDENTIFIER, compareBitStrings } from "@wildboar/asn1";
import type { Matcher } from "../types/matching.mjs";
import { valueEqualityMatcher } from "../matching/valueEqualityMatcher.mjs";
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
import { compareRDNSequence } from "@wildboar/dn";
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
 *   allUsers   [0]  NULL                                      type OPTIONAL,
 *   thisEntry  [1]  NULL                                      type OPTIONAL,
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
 * @returns {Promise<number>} A `number` that ascends with increasing specificity
 *  of the match, or `0` if it did not match. This number will be non-integral
 *  if group membership was checked, but group membership could not be determined.
 *
 * @function
 */
export
async function userWithinACIUserClass (
    tuple: ACDFTuple,
    user: NameAndOptionalUID | undefined | null,
    authLevel: AuthenticationLevel,
    entryDN: DistinguishedName,
    getEqualityMatcher: (attributeType: OBJECT_IDENTIFIER) => Matcher | undefined,
    isMemberOfGroup: (userGroup: NameAndOptionalUID, user: NameAndOptionalUID) => Promise<boolean | undefined>,
): Promise<number> {
    const userClass: UserClasses = tuple.userClasses;
    const requiredAuthLevel: AuthenticationLevel = tuple.authenticationLevel;
    const denies = deniesAccess(tuple.grantsAndDenials);
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
         * This applies even when the requestor has no bound name. A missing
         * name is not proof of non-membership in `name` / `userGroup` /
         * `subtree`, so those denials must still be retained when the ACI
         * demands stronger authentication than the requestor presented.
         *
         * However, it is unclear in the specification how this should "count"
         * when comparing the specificity of user classes. Since we presumably
         * want this to _always_ count, we should return the highest value
         * possible, which means that this tuple will override all others, at
         * least in terms of user-class specificity.
         */
        return 5;
    }
    if (!user) {
        return (userClass.allUsers === null) ? 1 : 0;
    }
    let couldNotDetermineGroupMembership: boolean = false;
    if (
        (userClass.thisEntry === null)
        && compareRDNSequence(user.dn, entryDN, valueEqualityMatcher(getEqualityMatcher))
    ) {
        return 4;
    }
    const names = userClass.name;
    if (names && (names.length > 0)) {
        const matchName = valueEqualityMatcher(getEqualityMatcher);
        const nameCount = names.length;
        for (let i = 0; i < nameCount; i++) {
            const named = names[i];
            if (
                compareRDNSequence(user.dn, named.dn, matchName)
                && (
                    !named.uid // If there is no uid, all entries with this name are relevant.
                    || (user.uid && compareBitStrings(user.uid, named.uid))
                )
            ) {
                return 4;
            }
        }
    }
    const groups = userClass.userGroup;
    if (groups && (groups.length > 0)) {
        const groupCount = groups.length;
        for (let i = 0; i < groupCount; i++) {
            const isMember = await isMemberOfGroup(groups[i], user);
            if (isMember === undefined) {
                couldNotDetermineGroupMembership = true;
            } else if (isMember) {
                return 3;
            }
        }
    }
    const subtrees = userClass.subtree;
    if (subtrees && (subtrees.length > 0)) {
        // X.501 says this subtree is unrefined, and an ACI subtree is relative
        // to the root. One empty list is enough for every candidate.
        const noObjectClasses: OBJECT_IDENTIFIER[] = [];
        const rootScope: DistinguishedName = [];
        const subtreeCount = subtrees.length;
        let inSubtree = false;
        for (let i = 0; i < subtreeCount; i++) {
            if (dnWithinSubtreeSpecification(
                user.dn,
                noObjectClasses,
                subtrees[i],
                rootScope,
                getEqualityMatcher,
            )) {
                inSubtree = true;
                break;
            }
        }
        if (inSubtree) {
            if (couldNotDetermineGroupMembership) {
                return 2.5;
            }
            return 2;
        }
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
