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
 * @summary Set of subtree keys, keeping duplicate subtrees distinct
 * @description
 *
 * Each subtree contributes one element. A repeated key is stored
 * again with its occurrence, so two copies do not collapse into one.
 *
 * @param subtrees The subtrees to hash
 * @returns One set element per subtree
 * @function
 */
function subtreeKeySet (subtrees: GeneralSubtrees): Set<string> {
    const seen: Map<string, number> = new Map();
    const keys: Set<string> = new Set();
    for (let i = 0; i < subtrees.length; i++) {
        const key: string = subtreeKey(subtrees[i]);
        const occurrence: number = (seen.get(key) ?? 0) + 1;
        seen.set(key, occurrence);
        keys.add(`#${occurrence}:${key}`);
    }
    return keys;
}

/**
 * @summary Compare two `GeneralSubtrees` values
 * @description
 *
 * By default each subtree is compared with the subtree in the same
 * position. When `ignoreOrder` is true, order is not significant:
 * both sequences are turned into sets of {@link subtreeKey} values
 * and those sets must be equal. That agrees with
 * `compareGeneralSubtree` when no equality matcher is supplied. A
 * matcher can equate directory names whose keys differ; only the
 * ordered comparison uses the matcher.
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
    const aKeys: Set<string> = subtreeKeySet(a);
    for (const key of subtreeKeySet(b)) {
        if (!aKeys.delete(key)) {
            return false;
        }
    }
    return aKeys.size === 0;
}

export default compareGeneralSubtrees;
