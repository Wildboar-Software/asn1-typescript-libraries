import type {
    NameConstraintsSyntax,
} from "../modules/CertificateExtensions/NameConstraintsSyntax.ta";
import compareGeneralSubtrees from "../comparators/compareGeneralSubtrees";

export
function compareNameConstraintsSyntax (a: NameConstraintsSyntax, b: NameConstraintsSyntax): boolean {
    if (Boolean(a.permittedSubtrees) !== Boolean(b.permittedSubtrees)) {
        return false;
    }
    if (Boolean(a.excludedSubtrees) !== Boolean(b.excludedSubtrees)) {
        return false;
    }
    if (
        a.permittedSubtrees
        && b.permittedSubtrees
        && !compareGeneralSubtrees(a.permittedSubtrees, b.permittedSubtrees)
    ) {
        return false;
    }
    if (
        a.excludedSubtrees
        && b.excludedSubtrees
        && !compareGeneralSubtrees(a.excludedSubtrees, b.excludedSubtrees)
    ) {
        return false;
    }
    return true;
}

export default compareNameConstraintsSyntax;
