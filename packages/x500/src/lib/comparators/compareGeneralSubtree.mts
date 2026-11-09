import type { OBJECT_IDENTIFIER } from "@wildboar/asn1";
import type { Matcher } from "../types/matching.mjs";
import { valueEqualityMatcher } from "../matching/valueEqualityMatcher.mjs";
import type {
    GeneralSubtree,
} from "../modules/CertificateExtensions/GeneralSubtree.ta.mjs";
import { compareGeneralName } from "@wildboar/gn";

const DEFAULT_MINIMUM: number = 0;

/**
 * @summary Compare two `GeneralSubtree` values
 * @param a One value
 * @param b The other
 * @param getEqualityMatcher A function that takes an attribute type and
 *  returns a function that can equality-match two values of that type
 * @returns {boolean} `true` if they match; `false` otherwise
 * @function
 */
export
function compareGeneralSubtree (
    a: GeneralSubtree,
    b: GeneralSubtree,
    getEqualityMatcher?: (attributeType: OBJECT_IDENTIFIER) => Matcher | undefined,
): boolean {
    if ((a.minimum ?? DEFAULT_MINIMUM) != (b.minimum ?? DEFAULT_MINIMUM)) {
        return false;
    }
    if (a.maximum != b.maximum) {
        return false;
    }
    return compareGeneralName(a.base, b.base, valueEqualityMatcher(getEqualityMatcher));
}

export default compareGeneralSubtree;
