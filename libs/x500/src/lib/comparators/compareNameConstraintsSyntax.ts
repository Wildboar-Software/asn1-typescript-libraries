import type { OBJECT_IDENTIFIER } from "asn1-ts";
import type EqualityMatcher from "../types/EqualityMatcher";
import type {
    NameConstraintsSyntax,
} from "../modules/CertificateExtensions/NameConstraintsSyntax.ta";
import compareGeneralSubtrees from "../comparators/compareGeneralSubtrees";

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
