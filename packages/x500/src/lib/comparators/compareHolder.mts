import { type OBJECT_IDENTIFIER } from "@wildboar/asn1";
import type EqualityMatcher from "../types/EqualityMatcher.mjs";
import type {
    Holder,
} from "../modules/AttributeCertificateDefinitions/Holder.ta.mjs";

/**
 * @summary Compare two `Holder` values
 * @param a One value
 * @param b The other
 * @param getEqualityMatcher A function that takes an attribute type and
 *  returns a function that can equality-match two values of that type
 * @returns {boolean} `true` if they match; `false` otherwise
 * @function
 */
export
function compareHolder (
    a: Holder,
    b: Holder,
    getEqualityMatcher?: (attributeType: OBJECT_IDENTIFIER) => EqualityMatcher | undefined,
): boolean {
    return a.isEqualTo(b);
}

export default compareHolder;
