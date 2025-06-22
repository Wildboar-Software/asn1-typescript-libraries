import type ACDFTupleExtended from "../types/ACDFTupleExtended.mjs";
import type ProtectedItem from "../types/ProtectedItem.mjs";
import itemIsProtected from "./itemIsProtected.mjs";
import type {
    GrantsAndDenials,
} from "../modules/BasicAccessControl/GrantsAndDenials.ta.mjs";
import { TRUE_BIT } from "@wildboar/asn1";
import type { EvaluateFilterSettings } from "../utils/evaluateFilter.mjs";
import type {
    NameAndOptionalUID,
} from "../modules/SelectedAttributeTypes/NameAndOptionalUID.ta.mjs";

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
    requester: NameAndOptionalUID | undefined | null,
    request: ProtectedItem,
    operations: number[],
    settings: EvaluateFilterSettings,
): ACDFTupleExtended[] {
    return tuples
        // This section was commented out entirely, because this should just be
        // done once prior to calling the ACDF functions.
        // .filter((tuple) => {
        //     /**
        //      * ITU Recommendation X.501 (2016), Section 18.8.3, states that
        //      *
        //      * > Also retain all tuples that deny access and which specify an
        //      * > authentication level higher than that associated with the
        //      * > requestor in accordance with 18.4.2.3. All other tuples that
        //      * > deny access are discarded.
        //      *
        //      * The rationale for doing this is in the footnote right below it:
        //      *
        //      * > The second requirement [...]  reflects the fact that the
        //      * > requestor has not adequately proved non-membership in the user
        //      * > class for which the denial is specified.
        //      *
        //      * If the tuple denies access, we automatically consider it
        //      * relevant, because it is the expectation of this function that all
        //      * tuples supplied to the bacACDF function are relevant to the user.
        //      */
        //     if (deniesAccess(tuple[3])) {
        //         return true;
        //     }
        //     const aci = tuple[1];
        //     if (!("basicLevels" in aci) || !("basicLevels" in authLevel)) {
        //         return false; // We do not know how to compare EXTERNALs.
        //     }
        //     const authenticationLevelIsHigherThanRequester = authLevelHigher(aci.basicLevels, authLevel.basicLevels);
        //     return !authenticationLevelIsHigherThanRequester;
        // })
        .filter((tuple) => itemIsProtected(request, tuple[2], requester, settings))
        // WARNING: Step 3 is skipped. I don't understand it.
        .filter((tuple) => operationRelevant(operations, tuple[3]));
}

export default discardNonRelevantACDFTuples;
