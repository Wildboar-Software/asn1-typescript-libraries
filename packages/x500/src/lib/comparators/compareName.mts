import type { OBJECT_IDENTIFIER } from "@wildboar/asn1";
import type { Name } from "../modules/InformationFramework/Name.ta.mjs";
import type EqualityMatcher from "../types/EqualityMatcher.mjs";
import compareRDNSequence from "./compareRDNSequence.mjs";

/**
 * @summary Compare two `Name` values
 * @param a One value
 * @param b The other
 * @param getEqualityMatcher A function that takes an attribute type and
 *  returns a function that can equality-match two values of that type
 * @returns {boolean} `true` if they match; `false` otherwise
 * @function
 */
export function compareName(
    a: Name,
    b: Name,
    getEqualityMatcher: (attributeType: OBJECT_IDENTIFIER) => EqualityMatcher | undefined,
): boolean {
    return compareRDNSequence(a.rdnSequence, b.rdnSequence, getEqualityMatcher);
}

export default compareName;

