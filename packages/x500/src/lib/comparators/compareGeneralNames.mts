import type { OBJECT_IDENTIFIER } from "@wildboar/asn1";
import type { Matcher } from "../types/matching.mjs";
import {
    compareGeneralName,
    type GeneralNames,
    generalNameToKey,
} from "@wildboar/gn";
import type { AttributeType } from "../modules/InformationFramework/AttributeType.ta.mjs";
import { valueEqualityMatcher } from "../matching/valueEqualityMatcher.mjs";

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
 * @param getMatcher A function that takes an attribute type and
 *  returns a function that can equality-match two values of that type
 *  Custom equality matchers are not used for unordered comparison.
 * @returns {boolean} `true` if they match; `false` otherwise
 * @function
 */
export
function compareGeneralNames (
    a: GeneralNames,
    b: GeneralNames,
    getMatcher?: (attributeType: AttributeType) => Matcher | undefined,
): boolean {
    if (a.length !== b.length) {
        return false;
    }
    if (a.length === 1) {
        return compareGeneralName(a[0], b[0], valueEqualityMatcher(getMatcher));
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
