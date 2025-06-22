import type { OBJECT_IDENTIFIER } from "@wildboar/asn1";
import type EqualityMatcher from "../types/EqualityMatcher.mjs";
import {
    GeneralSubtree,
} from "../modules/CertificateExtensions/GeneralSubtree.ta.mjs";
import compareGeneralName from "./compareGeneralName.mjs";

const DEFAULT_MINIMUM: number = GeneralSubtree._default_value_for_minimum;

/**
 * @summary Compare two `GeneralSubtree` values
 * @param a One value
 * @param b The other
 * @returns {boolean} `true` if they match; `false` otherwise
 * @function
 */
export
function compareGeneralSubtree (
    a: GeneralSubtree,
    b: GeneralSubtree,
    getEqualityMatcher: (attributeType: OBJECT_IDENTIFIER) => EqualityMatcher | undefined,
): boolean {
    if ((a.minimum ?? DEFAULT_MINIMUM) !== (b.minimum ?? DEFAULT_MINIMUM)) {
        return false;
    }
    if (a.maximum !== b.maximum) {
        return false;
    }
    return compareGeneralName(a.base, b.base, getEqualityMatcher);
}

export default compareGeneralSubtree;
