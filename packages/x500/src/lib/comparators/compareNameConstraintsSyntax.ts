import type { OBJECT_IDENTIFIER } from "asn1-ts";
import type EqualityMatcher from "../types/EqualityMatcher.js";
import type {
    NameConstraintsSyntax,
} from "../modules/CertificateExtensions/NameConstraintsSyntax.ta.js";
import compareGeneralSubtrees from "../comparators/compareGeneralSubtrees.js";

export
function compareNameConstraintsSyntax (
    a: NameConstraintsSyntax,
    b: NameConstraintsSyntax,
    getEqualityMatcher: (attributeType: OBJECT_IDENTIFIER) => EqualityMatcher | undefined,
): boolean {
    if (Boolean(a.permittedSubtrees) !== Boolean(b.permittedSubtrees)) {
        return false;
    }
    if (Boolean(a.excludedSubtrees) !== Boolean(b.excludedSubtrees)) {
        return false;
    }
    if (
        a.permittedSubtrees
        && b.permittedSubtrees
        && !compareGeneralSubtrees(a.permittedSubtrees, b.permittedSubtrees, getEqualityMatcher)
    ) {
        return false;
    }
    if (
        a.excludedSubtrees
        && b.excludedSubtrees
        && !compareGeneralSubtrees(a.excludedSubtrees, b.excludedSubtrees, getEqualityMatcher)
    ) {
        return false;
    }
    return true;
}

export default compareNameConstraintsSyntax;
