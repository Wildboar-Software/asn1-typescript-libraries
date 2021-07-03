import { TRUE_BIT } from "asn1-ts";
import type ACDFTuple from "../types/ACDFTuple";
import type ProtectedItem from "../types/ProtectedItem";
import type {
    AuthenticationLevel,
} from "../modules/BasicAccessControl/AuthenticationLevel.ta";
import type { OBJECT_IDENTIFIER } from "asn1-ts";
import type EqualityMatcher from "../types/EqualityMatcher";
import type {
    DistinguishedName,
} from "../modules/InformationFramework/DistinguishedName.ta";
import type {
    NameAndOptionalUID,
} from "../modules/SelectedAttributeTypes/NameAndOptionalUID.ta";
import type {
    GrantsAndDenials,
} from "../modules/BasicAccessControl/GrantsAndDenials.ta";
import userWithinACIUserClass from "./userWithinACIUserClass";
import itemIsProtected from "./itemIsProtected";

function deniesAccess (tuple: ACDFTuple): boolean {
    const permissions = tuple[3];
    // All the odd bits are denials.
    return Array.from(permissions).some((perm, index) => (index % 2) ? Boolean(perm) : false);
}

/**
 * @summary Discards ACDF tuples that are not related to the current authorization request.
 * @description
 *
 * Implementation of the algorithm outlined in ITU Recommendation X.501 (2016),
 * Section 18.8.3.
 *
 * ### Parameters
 *
 * @param {DistinguishedName} administrativePoint The distinguished name of the
 *  administrative point in which the user resides.
 * @param {ACDFTuple[]} tuples The tuples of inputs to the ACDF as described in
 *  ITU Recommendation X.501, Section 18.8.2. An array of five items:
 *  `( userClasses, authenticationLevel, protectedItems, grantsAndDenials, precedence )`
 * @param {AuthenticationLevel} authLevel The authentication level of the user.
 * @param {NameAndOptionalUID} user The distinguished name and optional unique
 *  identifier of the user whose authorization is determined by this function.
 * @param {DistinguishedName} entry The entry that is the predicate of the
 *  ACDF, or whose attributes are. The entry to whose entirety or whose
 *  attributes the subject is seeking authorization.
 * @param {ProtectedItem} request The thing that is being requested, which can
 *  be an entry, attribute type, or attribute value.
 * @param {number[]} operations The bit indices of the permissions that are
 *  being requested, divided by two. The permissions come from the definition of
 *  `GrantsAndDenials`. For clarification, an operation of 3 indicates a request
 *  for the remove permission.
 * @param {function} getEqualityMatcher A function that takes an object
 *  identifier and returns another function (if one can be found) that can be
 *  used to compare two values of the same attribute type.
 * @param {function} isMemberOfGroup A function that takes a user group and user
 *  and returns a `boolean` indicating whether the user is a member of the group.
 * @param {boolean} tuplesAreAlreadyFilteredByUser Whether all of the tuples
 *  supplied to this function are already filtered to be only those related to
 *  the current user.
 * @returns {ACDFTuple[]} Only the ACDF tuples that are relevant to this
 *  authorization request.
 * @function
 */
export
function discardNonRelevantACDFTuples (
    administrativePoint: DistinguishedName,
    tuples: ACDFTuple[],
    authLevel: AuthenticationLevel,
    user: NameAndOptionalUID,
    entry: DistinguishedName,
    request: ProtectedItem,
    operations: number[],
    getEqualityMatcher: (attributeType: OBJECT_IDENTIFIER) => EqualityMatcher | undefined,
    isMemberOfGroup: (userGroup: NameAndOptionalUID, user: NameAndOptionalUID) => boolean | undefined,
    tuplesAreAlreadyFilteredByUser: boolean = false,
): ACDFTuple[] {

    function operationPermitted (gad: GrantsAndDenials): boolean {
        return (
            operations.every((op) => gad[(op * 2)] === TRUE_BIT) // Every required "grant" bit is set.
            && !operations.some((op) => gad[(op * 2) + 1] === TRUE_BIT) // None of the corresponding "deny" bits are set.
        );
    }

    const relevantTuples = tuplesAreAlreadyFilteredByUser
        ? tuples
        : tuples
            .filter((tuple) => (userWithinACIUserClass(
                administrativePoint,
                tuple[0],
                user,
                entry,
                getEqualityMatcher,
                isMemberOfGroup,
            ) > -1));

    return relevantTuples
        .filter((tuple) => {
            const aci = tuple[1];
            if (!("basicLevels" in aci) || !("basicLevels" in authLevel)) {
                return false; // We do not know how to compare EXTERNALs.
            }
            const aciBL = aci.basicLevels;
            const userBL = authLevel.basicLevels;
            const denies = deniesAccess(tuple);
            const userLQ = userBL.localQualifier ?? 0;
            const aciLQ = aciBL.localQualifier ?? 0;
            const sufficientAuthentication = (
                (userBL.level >= aci.basicLevels.level) // User's auth level meets the threshold.
                && (userLQ >= aciLQ) // User's local qualifier meets the minimum.
                && (!aciBL.signed || (Boolean(aciBL.signed) === Boolean(userBL.signed))) // Signing requirements met.
            );
            return (
                (!denies && sufficientAuthentication)
                || (denies && !sufficientAuthentication)
            );
        })
        .filter((tuple) => itemIsProtected(request, tuple[2], getEqualityMatcher))
        // WARNING: Step 3 is skipped. I don't understand it.
        .filter((tuple) => operationPermitted(tuple[3]));
}

export default discardNonRelevantACDFTuples;
