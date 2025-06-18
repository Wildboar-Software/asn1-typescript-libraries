import type { OBJECT_IDENTIFIER } from "asn1-ts";
import type EqualityMatcher from "../types/EqualityMatcher.mjs";
import type { DistinguishedName } from "../modules/InformationFramework/DistinguishedName.ta.mjs";
import compareRDNSequence from "./compareRDNSequence.mjs";

/**
 * @summary Compare two `DistinguishedName` values
 * @param a One value
 * @param b The other
 * @returns {boolean} `true` if they match; `false` otherwise
 * @function
 */
export default function compare(
    a: DistinguishedName,
    b: DistinguishedName,
    getEqualityMatcher: (attributeType: OBJECT_IDENTIFIER) => EqualityMatcher | undefined,
): boolean {
    return compareRDNSequence(a, b, getEqualityMatcher);
}
