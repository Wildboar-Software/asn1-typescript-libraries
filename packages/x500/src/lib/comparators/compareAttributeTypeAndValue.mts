import type { OBJECT_IDENTIFIER } from "@wildboar/asn1";
import type { AttributeTypeAndValue } from "../modules/InformationFramework/AttributeTypeAndValue.ta.mjs";
import type EqualityMatcher from "../types/EqualityMatcher.mjs";
import compareElements from "./compareElements.mjs";

/**
 * @summary Compare two `AttributeTypeAndValue` values
 * @param a One value
 * @param b The other
 * @param getEqualityMatcher A function that takes an attribute type and
 *  returns a function that can equality-match two values of that type
 * @returns {boolean} `true` if they match; `false` otherwise
 * @function
 */
export function compareAttributeTypeAndValue(
    a: Readonly<AttributeTypeAndValue>,
    b: Readonly<AttributeTypeAndValue>,
    getEqualityMatcher: (attributeType: OBJECT_IDENTIFIER) => EqualityMatcher | undefined,
): boolean {
    if (a.type_.toString() !== b.type_.toString()) {
        return false;
    }
    const matcher = getEqualityMatcher(a.type_);
    // If we could not find an equality matcher, we just take a stab at comparing the undecoded elements.
    if (!matcher) {
        return compareElements(a.value, b.value);
    }
    return matcher(a.value, b.value);
}

export default compareAttributeTypeAndValue;
