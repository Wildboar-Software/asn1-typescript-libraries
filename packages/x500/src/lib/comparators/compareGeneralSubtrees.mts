import type { OBJECT_IDENTIFIER } from "@wildboar/asn1";
import type EqualityMatcher from "../types/EqualityMatcher.mjs";
import type {
    GeneralSubtrees,
} from "../modules/CertificateExtensions/GeneralSubtrees.ta.mjs";
import compareGeneralSubtree from "./compareGeneralSubtree.mjs";

/**
 * @summary Compare two `GeneralSubtrees` values
 * @description
 *
 * By default each subtree is compared with the subtree in the same
 * position. When `ignoreOrder` is true, order is not significant:
 * each subtree must pair with a distinct equal subtree on the other
 * side.
 *
 * @param a One value
 * @param b The other
 * @param getEqualityMatcher A function that takes an attribute type and
 *  returns a function that can equality-match two values of that type
 * @param ignoreOrder When true, subtree order does not affect the result
 * @returns {boolean} `true` if they match; `false` otherwise
 * @function
 */
export
function compareGeneralSubtrees (
    a: GeneralSubtrees,
    b: GeneralSubtrees,
    getEqualityMatcher?: (attributeType: OBJECT_IDENTIFIER) => EqualityMatcher | undefined,
    ignoreOrder: boolean = false,
): boolean {
    if (a.length !== b.length) {
        return false;
    }
    if (!ignoreOrder) {
        for (let i = 0; i < a.length; i++) {
            if (!compareGeneralSubtree(a[i], b[i], getEqualityMatcher)) {
                return false;
            }
        }
        return true;
    }
    const paired: boolean[] = new Array(b.length).fill(false);
    for (let i = 0; i < a.length; i++) {
        let matched: boolean = false;
        for (let j = 0; j < b.length; j++) {
            if (paired[j]) {
                continue;
            }
            if (compareGeneralSubtree(a[i], b[j], getEqualityMatcher)) {
                paired[j] = true;
                matched = true;
                break;
            }
        }
        if (!matched) {
            return false;
        }
    }
    return true;
}

export default compareGeneralSubtrees;
