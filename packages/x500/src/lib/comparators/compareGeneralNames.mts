import type { OBJECT_IDENTIFIER } from "@wildboar/asn1";
import type EqualityMatcher from "../types/EqualityMatcher.mjs";
import type {
    GeneralNames,
} from "../modules/CertificateExtensions/GeneralNames.ta.mjs";
import compareGeneralName from "./compareGeneralName.mjs";

/**
 * @summary Compare two `GeneralNames` values
 * @description
 *
 * `GeneralNames` is a SEQUENCE OF names, but matching treats it as
 * an unordered collection: each name on one side must pair with a
 * distinct equal name on the other.
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
    getEqualityMatcher?: (attributeType: OBJECT_IDENTIFIER) => EqualityMatcher | undefined,
): boolean {
    if (a.length !== b.length) {
        return false;
    }
    const used: boolean[] = new Array(b.length).fill(false);
    for (const name of a) {
        const index = b.findIndex((other, i) => (
            !used[i]
            && compareGeneralName(name, other, getEqualityMatcher)
        ));
        if (index < 0) {
            return false;
        }
        used[index] = true;
    }
    return true;
}

export default compareGeneralNames;
