import type ACDFTupleExtended from "../types/ACDFTupleExtended.mjs";
import type {
    GrantsAndDenials,
} from "../modules/BasicAccessControl/GrantsAndDenials.ta.mjs";
import type ProtectedItem from "../types/ProtectedItem.mjs";
import { TRUE_BIT } from "@wildboar/asn1";

/**
 * @summary Check if at least one ACDF tuple grants access and none deny
 * @description
 * 
 * This is the last step of the Basic Access Control (BAC) Access Control
 * Decision Function (ACDF): this function evaluates whether the
 * operation is permitted by checking that at least one relevant ACDF tuple
 * grants access and that none deny access.
 * Constraints must already have been applied by `discardNonRelevantACDFTuples`.
 * 
 * @param {number[]} operations - An array of `PERMISSION_CATEGORY_*` constants
 *  defined in `@wildboar/x500`.
 * @param {ACDFTupleExtended} tuple - The Access Control Decision Function
 *  (ACDF) tuple.
 * @param {ProtectedItem} request 
 * @returns {Boolean} `true` if the operation is permitted 
 * @function
 */
export
function operationPermitted (
    operations: number[],
    tuple: ACDFTupleExtended,
    _request: ProtectedItem,
): boolean {
    const gad: GrantsAndDenials = tuple.grantsAndDenials;

    /** 1E9DC3EB-E3DB-4CFA-A7BE-B86342F7EF75
     * Section 18.4.2.5.a of ITU Recommendation X.501 (2016) states that, if
     * group membership cannot be determined, a user should be assumed to be a
     * member of that group if membership is used to deny access, and the user
     * should be assumed to _not_ be a member of that group if membership is
     * used to grant access.
     *
     * The `userWithinACIUserClass()` function returns a non-integral number to
     * signal in-band that the group membership could not be determined. More
     * specifically, 0.5 is added to the specificity of the next most specific
     * match. So if the value is 0.5, it means that no other fields of the
     * `UserClasses` matched the requestor, but the group membership was
     * undetermined.
     *
     * So here, if membership is the only means by which the user matches, and
     * even that could not be determined, we return `false` to deny access.
     */
    if (!Number.isSafeInteger(tuple.userClassSpecificity) && (tuple.userClassSpecificity < 1)) {
        return false;
    }
    return (
        operations.every((op) => gad[(op * 2)] === TRUE_BIT) // Every required "grant" bit is set.
        && !operations.some((op) => gad[(op * 2) + 1] === TRUE_BIT) // None of the corresponding "deny" bits are set.
    );
}

export default operationPermitted;
