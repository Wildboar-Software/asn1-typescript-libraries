import type { OBJECT_CLASS } from "../modules/InformationFramework/OBJECT-CLASS.oca.mjs";
import type { Refinement } from "../modules/InformationFramework/Refinement.ta.mjs";

const MAX_REFINEMENT_DEPTH = 128;

/**
 * @summary Determine whether object classes match a refinement
 * @description
 * 
 * If the refinement type is not understood or its truth cannot be determined
 * within the depth budget, `undefined` is returned. AND, OR, and NOT preserve
 * three-valued logic, so NOT cannot turn exhaustion into a match.
 * 
 * @param {OBJECT_IDENTIFIER[]} classes The object classes to be evaluated for a match
 * @param {Refinement} refinement The object class refinement
 * @param recursionTTL Maximum nodes on a recursive path (default 20, capped
 *  at 128 for stack safety). Non-finite or non-positive budgets return UNDEFINED.
 * @returns `true` if the object classes match, `false` if they do not, or
 *  `undefined` if the result cannot be determined.
 * @function
 */
export
function objectClassesWithinRefinement (
    classes: OBJECT_CLASS["&id"][],
    refinement: Refinement,
    recursionTTL: number = 20,
): boolean | undefined {
    if (!Number.isFinite(recursionTTL)) {
        return undefined;
    }
    return evaluateRefinement(classes, refinement, Math.min(recursionTTL, MAX_REFINEMENT_DEPTH));
}

/** Three-valued evaluation, including at the public boundary. */
function evaluateRefinement (
    classes: OBJECT_CLASS["&id"][],
    refinement: Refinement,
    remainingDepth: number,
): boolean | undefined {
    if (remainingDepth <= 0) {
        return undefined;
    }
    if ("and" in refinement) {
        let indeterminate = false;
        for (const child of refinement.and) {
            const result = evaluateRefinement(classes, child, remainingDepth - 1);
            if (result === false) {
                return false;
            }
            indeterminate ||= result === undefined;
        }
        return indeterminate ? undefined : true;
    } else if ("or" in refinement) {
        let indeterminate = false;
        for (const child of refinement.or) {
            const result = evaluateRefinement(classes, child, remainingDepth - 1);
            if (result === true) {
                return true;
            }
            indeterminate ||= result === undefined;
        }
        return indeterminate ? undefined : false;
    } else if ("not" in refinement) {
        const result = evaluateRefinement(classes, refinement.not, remainingDepth - 1);
        return result === undefined ? undefined : !result;
    } else if ("item" in refinement) {
        return classes.some((c) => refinement.item.isEqualTo(c));
    } else {
        return undefined;
    }
}

export default objectClassesWithinRefinement;
