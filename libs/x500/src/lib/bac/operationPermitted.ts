import type ACDFTupleExtended from "../types/ACDFTupleExtended";
import type {
    GrantsAndDenials,
} from "../modules/BasicAccessControl/GrantsAndDenials.ta";
import { TRUE_BIT } from "asn1-ts";

export
function operationPermitted (operations: number[], tuple: ACDFTupleExtended): boolean {
    const gad: GrantsAndDenials = tuple[3];
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
    if (!Number.isSafeInteger(tuple[5]) && (tuple[5] < 1)) {
        return false;
    }
    return (
        operations.every((op) => gad[(op * 2)] === TRUE_BIT) // Every required "grant" bit is set.
        && !operations.some((op) => gad[(op * 2) + 1] === TRUE_BIT) // None of the corresponding "deny" bits are set.
    );
}

export default operationPermitted;
