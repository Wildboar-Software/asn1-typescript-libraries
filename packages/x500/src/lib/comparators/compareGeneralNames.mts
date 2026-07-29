import type { OBJECT_IDENTIFIER } from "@wildboar/asn1";
import type EqualityMatcher from "../types/EqualityMatcher.mjs";
import type {
    GeneralNames,
} from "../modules/CertificateExtensions/GeneralNames.ta.mjs";
import compareGeneralName from "./compareGeneralName.mjs";

/**
 * @summary Compare two `GeneralNames` values
 * @param a One value
 * @param b The other
 * @param getEqualityMatcher A function that takes an attribute type and
 *  returns a function that can equality-match two values of that type
 * @returns {boolean} `true` if they match; `false` otherwise
 * @function
 */
export
function compareGeneralNames (
    a: GeneralNames,
    b: GeneralNames,
    getEqualityMatcher: (attributeType: OBJECT_IDENTIFIER) => EqualityMatcher | undefined,
): boolean {
    // TODO: At least group by types first.
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
