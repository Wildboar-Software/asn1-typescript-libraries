import type { OBJECT_IDENTIFIER } from "@wildboar/asn1";
import type { RDNSequence } from "../modules/InformationFramework/RDNSequence.ta.mjs";
import type EqualityMatcher from "../types/EqualityMatcher.mjs";
import compareRelativeDistinguishedName from "./compareRelativeDistinguishedName.mjs";

/**
 * @summary Compare two `RDNSequence` values
 * @param a One value
 * @param b The other
 * @param getEqualityMatcher A function that takes an attribute type and
 *  returns a function that can equality-match two values of that type
 * @returns {boolean} `true` if they match; `false` otherwise
 * @function
 */
export function compareRDNSequence(
    a: RDNSequence,
    b: RDNSequence,
    getEqualityMatcher: (attributeType: OBJECT_IDENTIFIER) => EqualityMatcher | undefined,
): boolean {
    if (a.length !== b.length) {
        return false;
    }
    for (let i = 0; i < a.length; i++) {
        if (!compareRelativeDistinguishedName(a[i], b[i], getEqualityMatcher)) {
            return false;
        }
    }
    return true;
}

export default compareRDNSequence;
