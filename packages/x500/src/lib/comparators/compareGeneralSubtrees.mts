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
 * @returns A string that can be used as a multiset key
 * @function
 */
function subtreeKey (subtree: GeneralSubtree): string {
    const minimum = subtree.minimum ?? 0;
    const maximum: string = subtree.maximum === undefined ? "" : String(subtree.maximum);
    return `${minimum}:${maximum}:${generalNameToKey(subtree.base)}`;
}

/**
 * @summary Compare two `GeneralSubtrees` values
 * @description
 *
 * By default (`exactOrdering`) each subtree is compared with the
 * subtree in the same position. When `exactOrdering` is false, order
 * is not significant, but multiplicities are: each subtree must pair
 * with a distinct equal subtree on the other side. Unordered equality
 * uses built-in `generalNameToKey` normalization and subtree bounds,
 * not custom equality matchers. Counting keys takes expected O(n)
 * time and O(n) space, excluding key generation and hashing costs.
 *
 * @param a One value
 * @param b The other
 * @param getEqualityMatcher A function that takes an attribute type and
 *  returns a function that can equality-match two values of that type.
 *  Used only when `exactOrdering` is true.
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
    const counts = new Map<string, number>();
    for (let i = 0; i < a.length; i++) {
        const key = subtreeKey(a[i]);
        counts.set(key, (counts.get(key) ?? 0) + 1);
    }
    for (let i = 0; i < b.length; i++) {
        const key = subtreeKey(b[i]);
        const count = counts.get(key);
        if (!count) {
            return false;
        }
        counts.set(key, count - 1);
    }
    return true;
}

export default compareGeneralSubtrees;
