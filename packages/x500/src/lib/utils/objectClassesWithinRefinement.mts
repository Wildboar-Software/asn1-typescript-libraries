import type { OBJECT_CLASS } from "../modules/InformationFramework/OBJECT-CLASS.oca.mjs";
import type { Refinement } from "../modules/InformationFramework/Refinement.ta.mjs";

// TODO: Re-write to use for loops?
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
): boolean {
    if ("and" in refinement) {
        return refinement.and.every((r) => objectClassesWithinRefinement(classes, r));
    } else if ("or" in refinement) {
        return refinement.or.some((r) => objectClassesWithinRefinement(classes, r));
    } else if ("not" in refinement) {
        return !objectClassesWithinRefinement(classes, refinement.not);
    } else if ("item" in refinement) {
        return classes.some((c) => refinement.item.isEqualTo(c));
    } else {
        return false;
    }
}

export default objectClassesWithinRefinement;
