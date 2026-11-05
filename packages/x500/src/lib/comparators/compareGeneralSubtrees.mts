import type { OBJECT_IDENTIFIER } from "@wildboar/asn1";
import { generalNameToKey } from "@wildboar/gn";
import type EqualityMatcher from "../types/EqualityMatcher.mjs";
import type {
    GeneralSubtree,
} from "../modules/CertificateExtensions/GeneralSubtree.ta.mjs";
import type {
    GeneralSubtrees,
} from "../modules/CertificateExtensions/GeneralSubtrees.ta.mjs";
import compareGeneralSubtree from "./compareGeneralSubtree.mjs";

/**
 * @summary Key for one `GeneralSubtree`
 * @description
 *
 * `generalNameToKey` hashes the base name the same way
 * `compareGeneralName` compares it when no equality matcher is
 * supplied. Minimum defaults to 0. Absent maximum is an empty field
 * so it does not collide with maximum 0.
 *
 * @param subtree The subtree to hash
 * @returns A string that can be stored in a set
 * @function
 */
function subtreeKey (subtree: GeneralSubtree): string {
    const minimum: number = subtree.minimum ?? 0;
    const maximum: string = subtree.maximum === undefined ? "" : String(subtree.maximum);
    return `${minimum}:${maximum}:${generalNameToKey(subtree.base)}`;
}

/**
 * @summary Compare two `GeneralSubtrees` values
 * @description
 *
 * By default (`exactOrdering`) each subtree is compared with the
 * subtree in the same position. When `exactOrdering` is false, order
 * is not significant: keys from the first sequence go in a set. If
 * the number of keys differs from the number of subtrees in the
 * other sequence, they do not match. Otherwise each subtree on the
 * other side must have a key in that set. A repeated subtree
 * collapses to one key. That agrees with `compareGeneralSubtree`
 * when no equality matcher is supplied. A matcher can equate
 * directory names whose keys differ; only the ordered comparison
 * uses the matcher.
 *
 * @param a One value
 * @param b The other
 * @param getEqualityMatcher A function that takes an attribute type and
 *  returns a function that can equality-match two values of that type
 * @param exactOrdering When true, subtree order must match. When
 *  false, order is ignored. Defaults to true.
 * @returns {boolean} `true` if they match; `false` otherwise
 * @function
 */
export
function compareGeneralSubtrees (
    a: GeneralSubtrees,
    b: GeneralSubtrees,
    getEqualityMatcher?: (attributeType: OBJECT_IDENTIFIER) => EqualityMatcher | undefined,
    exactOrdering: boolean = true,
): boolean {
    if (a.length !== b.length) {
        return false;
    }
    if (exactOrdering) {
        for (let i = 0; i < a.length; i++) {
            if (!compareGeneralSubtree(a[i], b[i], getEqualityMatcher)) {
                return false;
            }
        }
        return true;
    }
    const keys: Set<string> = new Set();
    for (let i = 0; i < a.length; i++) {
        keys.add(subtreeKey(a[i]));
    }
    if (keys.size !== b.length) {
        return false;
    }
    for (let i = 0; i < b.length; i++) {
        if (!keys.delete(subtreeKey(b[i]))) {
            return false;
        }
    }
    return true;
}

export default compareGeneralSubtrees;
