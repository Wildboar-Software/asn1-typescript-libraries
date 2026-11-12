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
import applyACDFConstraints from "./applyACDFConstraints.mjs";

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
    const operationCount = operations.length;
    for (let i = 0; i < operationCount; i++) {
        const bit = operations[i] * 2;
        if ((gad[bit] === TRUE_BIT) || (gad[bit + 1] === TRUE_BIT)) {
            return true;
        }
    }
    return false;
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
 * @param {ACDFTupleExtended[] | IterableIterator<ACDFTupleExtended>} tuples The tuples of inputs to the ACDF as described in
 *  ITU Recommendation X.501, Section 18.8.2 (`userClasses`,
 *  `authenticationLevel`, `protectedItems`, `grantsAndDenials`, `precedence`).
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
    tuples: ACDFTupleExtended[] | IterableIterator<ACDFTupleExtended>,
    requester: NameAndOptionalUID | undefined | null,
    request: ProtectedItem,
    operations: number[],
    settings: EvaluateFilterSettings,
): ACDFTupleExtended[] {
    // Authentication-level filtering is applied once before this function.
    // `operations` stays an array: each tuple consults it again.
    // An array keeps the indexed walk. An iterator is read once into an array
    // so both inputs share that walk.
    const list = Array.isArray(tuples) ? tuples : Array.from(tuples);
    const relevant: ACDFTupleExtended[] = [];
    const tupleCount = list.length;
    for (let i = 0; i < tupleCount; i++) {
        const tuple = list[i];
        // `undefined` means a class refinement could not be decided. Drop it,
        // as the previous `.filter()` did.
        if (!itemIsProtected(request, tuple.protectedItems, requester, settings)) {
            continue;
        }
        const constrained = applyACDFConstraints(tuple, request, operations, settings);
        if (operationRelevant(operations, constrained.grantsAndDenials)) {
            relevant.push(constrained);
        }
    }
    return relevant;
}

export default discardNonRelevantACDFTuples;
