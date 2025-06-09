import type { OBJECT_IDENTIFIER } from "asn1-ts";
import type EqualityMatcher from "../types/EqualityMatcher.js";
import type {
    GeneralSubtrees,
} from "../modules/CertificateExtensions/GeneralSubtrees.ta.js";
import compareGeneralSubtree from "./compareGeneralSubtree.js";

export
function compareGeneralNames (
    a: GeneralSubtrees,
    b: GeneralSubtrees,
    getEqualityMatcher: (attributeType: OBJECT_IDENTIFIER) => EqualityMatcher | undefined,
): boolean {
    if (a.length !== b.length) {
        return false;
    }
    for (let i = 0; i < a.length; i++) {
        if (!compareGeneralSubtree(a[i], b[i], getEqualityMatcher)) {
            return false;
        }
    }
    return true;
}

export default compareGeneralNames;
