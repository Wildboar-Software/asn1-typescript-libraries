import type {
    GeneralSubtrees,
} from "../modules/CertificateExtensions/GeneralSubtrees.ta";
import compareGeneralSubtree from "./compareGeneralSubtree";

export
function compareGeneralNames (a: GeneralSubtrees, b: GeneralSubtrees): boolean {
    if (a.length !== b.length) {
        return false;
    }
    for (let i = 0; i < a.length; i++) {
        if (!compareGeneralSubtree(a[i], b[i])) {
            return false;
        }
    }
    return true;
}

export default compareGeneralNames;
