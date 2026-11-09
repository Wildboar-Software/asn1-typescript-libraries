import type { OBJECT_IDENTIFIER } from "@wildboar/asn1";
import type { Matcher } from "../types/matching.mjs";
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
 * Equality uses the built-in `generalNameToKey` normalization only.
 * Counting keys takes expected O(n) time and O(n) space, excluding
 * the cost of generating and hashing the keys.
 *
 * @param a One value
 * @param b The other
 * @param _getEqualityMatcher Retained for call compatibility; ignored.
 *  Custom equality matchers are not used for unordered comparison.
 * @returns {boolean} `true` if they match; `false` otherwise
 * @function
 */
export
function compareGeneralNames (
    a: GeneralNames,
    b: GeneralNames,
    _getEqualityMatcher?: (attributeType: OBJECT_IDENTIFIER) => Matcher | undefined,
): boolean {
    if (a.length !== b.length) {
        return false;
    }
    // Count keys instead of collapsing duplicates into a Set.
    const counts = new Map<string, number>();
    for (let i = 0; i < a.length; i++) {
        const key = generalNameToKey(a[i]);
        counts.set(key, (counts.get(key) ?? 0) + 1);
    }
    for (let i = 0; i < b.length; i++) {
        const key = generalNameToKey(b[i]);
        const count = counts.get(key);
        if (!count) {
            return false;
        }
        counts.set(key, count - 1);
    }
    return true;
}

export default compareGeneralNames;
