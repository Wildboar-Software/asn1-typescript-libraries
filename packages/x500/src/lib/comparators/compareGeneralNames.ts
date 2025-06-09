import type { OBJECT_IDENTIFIER } from "asn1-ts";
import type EqualityMatcher from "../types/EqualityMatcher.js";
import type {
    GeneralNames,
} from "../modules/CertificateExtensions/GeneralNames.ta.js";
import compareGeneralName from "./compareGeneralName.js";

export
function compareGeneralNames (
    a: GeneralNames,
    b: GeneralNames,
    getEqualityMatcher: (attributeType: OBJECT_IDENTIFIER) => EqualityMatcher | undefined,
): boolean {
    if (a.length !== b.length) {
        return false;
    }
    for (let i = 0; i < a.length; i++) {
        if (!compareGeneralName(a[i], b[i], getEqualityMatcher)) {
            return false;
        }
    }
    return true;
}

export default compareGeneralNames;
