import type { OBJECT_IDENTIFIER } from "asn1-ts";
import type EqualityMatcher from "../types/EqualityMatcher.mjs";
import type {
    GeneralSubtrees,
} from "../modules/CertificateExtensions/GeneralSubtrees.ta.mjs";
import compareGeneralSubtree from "./compareGeneralSubtree.mjs";

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
