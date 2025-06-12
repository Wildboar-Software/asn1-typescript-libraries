import type { OBJECT_CLASS } from "../modules/InformationFramework/OBJECT-CLASS.oca.mjs";
import type { Refinement } from "../modules/InformationFramework/Refinement.ta.mjs";

// TODO: Review. I worked on this late at night and don't feel confident in this code.
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
