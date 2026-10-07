import type { OBJECT_IDENTIFIER } from "@wildboar/asn1";
import type EqualityMatcher from "../types/EqualityMatcher.mjs";
import {
    type GeneralNames,
    generalNameToKey,
} from "@wildboar/gn";

/**
 * @summary Compare two `GeneralNames` values
 * @description
 *
 * `GeneralNames` is a SEQUENCE SIZE (1..MAX) OF `GeneralName`. Encoding
 * order is not significant for matching: each name on one side must
 * pair with a distinct equal name on the other (multiset equality).
 *
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
    const aSet: Set<string> = new Set();
    for (let i = 0; i < a.length; i++) {
        aSet.add(generalNameToKey(a[i]));
    }
    for (let i = 0; i < b.length; i++) {
        if (!aSet.delete(generalNameToKey(b[i]))) {
            return false;
        }
    }
    return true;
}

export default compareGeneralNames;
