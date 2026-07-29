import type { OBJECT_IDENTIFIER } from "@wildboar/asn1";
import type EqualityMatcher from "../types/EqualityMatcher.mjs";
import type { DistinguishedName } from "../modules/InformationFramework/DistinguishedName.ta.mjs";
import compareRDNSequence from "./compareRDNSequence.mjs";

/**
 * @summary Compare two `DistinguishedName` values
 * @param a One value
 * @param b The other
 * @param getEqualityMatcher A function that takes an attribute type and
 *  returns a function that can equality-match two values of that type
 * @returns {boolean} `true` if they match; `false` otherwise
 * @function
 */
export function compareDistinguishedName(
    a: DistinguishedName,
    b: DistinguishedName,
    getEqualityMatcher: (attributeType: OBJECT_IDENTIFIER) => EqualityMatcher | undefined,
): boolean {
    return compareRDNSequence(a, b, getEqualityMatcher);
}

export default compareDistinguishedName;

