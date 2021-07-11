
import type ACDFTupleExtended from "../types/ACDFTupleExtended";
import type ProtectedItem from "../types/ProtectedItem";
import type {
    AuthenticationLevel,
} from "../modules/BasicAccessControl/AuthenticationLevel.ta";
import type { OBJECT_IDENTIFIER } from "asn1-ts";
import type EqualityMatcher from "../types/EqualityMatcher";
import itemIsProtected from "./itemIsProtected";
import deniesAccess from "./deniesAccess";
import type {
    GrantsAndDenials,
} from "../modules/BasicAccessControl/GrantsAndDenials.ta";
import { TRUE_BIT } from "asn1-ts";

/**
 * Note that this function is different than `operationIsPermitted()`.
 *
 * @param operations
 * @param gad
 * @returns
 */
function operationRelevant (operations: number[], gad: GrantsAndDenials): boolean {
    /**
     * The wording of ITU Recommendation X.501 (2016), Section 18.8.3.4 is
     * tricky:
     *
     * > Discard all tuples that do not include the requested permission as one
     * > of the set bits in grantsAndDenials.
     *
     * As I read that, it means that we have to include any tuple that has a bit
     * set that affects the operation, whether it grants it or denies it.
     */
    return operations.some((op) => (
        (gad[(op * 2)] === TRUE_BIT) // If the grant bit is set.
        || (gad[(op * 2) + 1] === TRUE_BIT) // If the deny bit is set.
    ));
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
 * @param {ACDFTupleExtended[]} tuples The tuples of inputs to the ACDF as described in
 *  ITU Recommendation X.501, Section 18.8.2. An array of five items:
 *  `( userClasses, authenticationLevel, protectedItems, grantsAndDenials, precedence )`
 * @param {AuthenticationLevel} authLevel The authentication level of the user.
 * @param {ProtectedItem} request The thing that is being requested, which can
 *  be an entry, attribute type, or attribute value.
 * @param {number[]} operations The bit indices of the permissions that are
 *  being requested, divided by two. The permissions come from the definition of
 *  `GrantsAndDenials`. For clarification, an operation of 3 indicates a request
 *  for the remove permission.
 * @param {function} getEqualityMatcher A function that takes an object
 *  identifier and returns another function (if one can be found) that can be
 *  used to compare two values of the same attribute type.
 *  and returns a `boolean` indicating whether the user is a member of the group.
 * @returns {ACDFTupleExtended[]} Only the ACDF tuples that are relevant to this
 *  authorization request.
 * @function
 */
export
function discardNonRelevantACDFTuples (
    tuples: ACDFTupleExtended[],
    authLevel: AuthenticationLevel,
    request: ProtectedItem,
    operations: number[],
    getEqualityMatcher: (attributeType: OBJECT_IDENTIFIER) => EqualityMatcher | undefined,
): ACDFTupleExtended[] {
    return tuples
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
        .filter((tuple) => operationRelevant(operations, tuple[3]));
}

export default discardNonRelevantACDFTuples;
