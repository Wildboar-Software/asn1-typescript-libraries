import type { OBJECT_CLASS } from "../modules/InformationFramework/OBJECT-CLASS.oca.mjs";
import type { Refinement } from "../modules/InformationFramework/Refinement.ta.mjs";

/**
 * @summary Determine whether object classes match a refinement
 * @description
 * 
 * If the refinement type is not understood, `false` is returned. This function
 * is recursive.
 * 
 * @param {OBJECT_IDENTIFIER[]} classes The object classes to be evaluated for a match
 * @param {Refinement} refinement The object class refinement
 * @returns {Boolean} `true` if the object classes match the refinement
 * @function
 */
export
function objectClassesWithinRefinement (
    classes: OBJECT_CLASS["&id"][],
    refinement: Refinement,
    recursionTTL: number = 20,
): boolean {
    if (recursionTTL <= 0) {
        return false;
    }
    if ("and" in refinement) {
        return refinement.and
            .every((r) => objectClassesWithinRefinement(classes, r, recursionTTL - 1));
    } else if ("or" in refinement) {
        return refinement.or
            .some((r) => objectClassesWithinRefinement(classes, r, recursionTTL - 1));
    } else if ("not" in refinement) {
        return !objectClassesWithinRefinement(classes, refinement.not, recursionTTL - 1);
    } else if ("item" in refinement) {
        return classes.some((c) => refinement.item.isEqualTo(c));
    } else {
        return false;
    }
}

export default objectClassesWithinRefinement;
