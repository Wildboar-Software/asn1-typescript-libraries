import type { OBJECT_IDENTIFIER } from "asn1-ts";
import type { AttributeTypeAndValue } from "../modules/InformationFramework/AttributeTypeAndValue.ta";
import type EqualityMatcher from "../types/EqualityMatcher";
import compareElements from "./compareElements";

export default function compare(
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
