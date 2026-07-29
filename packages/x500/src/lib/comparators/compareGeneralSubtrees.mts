import type { OBJECT_IDENTIFIER } from "@wildboar/asn1";
import type EqualityMatcher from "../types/EqualityMatcher.mjs";
import type {
    GeneralSubtrees,
} from "../modules/CertificateExtensions/GeneralSubtrees.ta.mjs";
import compareGeneralSubtree from "./compareGeneralSubtree.mjs";

/**
 * @summary Compare two `GeneralSubtrees` values
 * @param a One value
 * @param b The other
 * @param getEqualityMatcher A function that takes an attribute type and
 *  returns a function that can equality-match two values of that type
 * @returns {boolean} `true` if they match; `false` otherwise
 * @function
 */
export
function compareGeneralSubtrees (
    a: GeneralSubtrees,
    b: GeneralSubtrees,
    getEqualityMatcher: (attributeType: OBJECT_IDENTIFIER) => EqualityMatcher | undefined,
): boolean {
    // TODO: At least group them by type as with GeneralNames
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

export default compareGeneralSubtrees;
