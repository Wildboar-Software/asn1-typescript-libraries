import type ACDFTupleExtended from "../types/ACDFTupleExtended.mjs";
import type {
    GrantsAndDenials,
} from "../modules/BasicAccessControl/GrantsAndDenials.ta.mjs";
import type ProtectedItem from "../types/ProtectedItem.mjs";
import { TRUE_BIT, INTEGER } from "asn1-ts";
import {
    PERMISSION_CATEGORY_ADD,
    PERMISSION_CATEGORY_IMPORT,
} from "./bacACDF.mjs";

export
function operationPermitted (
    operations: number[],
    tuple: ACDFTupleExtended,
    request: ProtectedItem,
): boolean {
    const items = tuple[2];
    const gad: GrantsAndDenials = tuple[3];
    const adds = operations.includes(PERMISSION_CATEGORY_ADD);
    const imports = operations.includes(PERMISSION_CATEGORY_IMPORT);
    if (
        (adds || imports)
        && (items.maxImmSub !== undefined)
        && ("entry" in request)
        && Number.isSafeInteger(request.siblingsCount)
        && (request.siblingsCount > items.maxImmSub)
    ) {
        return false;
    }
    const maxValueCount: INTEGER | undefined = (("attributeType" in request) && (items.maxValueCount?.length))
        ? items.maxValueCount.find((mvc) => mvc.type_.isEqualTo(request.attributeType))?.maxCount
        : undefined;
    if (
        adds
        && (maxValueCount !== undefined)
        && ("attributeType" in request)
        && Number.isSafeInteger(request.valuesCount)
        && (request.valuesCount > Number(maxValueCount))
    ) {
        return false;
    }

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
