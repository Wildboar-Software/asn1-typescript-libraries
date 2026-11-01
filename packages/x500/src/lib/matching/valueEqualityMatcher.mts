import type { OBJECT_IDENTIFIER } from "@wildboar/asn1";
import { AttributeTypeAndValue } from "../modules/InformationFramework/AttributeTypeAndValue.ta.mjs";
import type EqualityMatcher from "../types/EqualityMatcher.mjs";
import type { Matcher } from "../types/matching.mjs";

/**
 * Present a `Matcher` lookup as the single-value equality lookup used
 * when comparing distinguished names and other nested values.
 *
 * A `Matcher` compares an assertion with an attribute. Name comparison
 * has two encoded values, so the stored value is wrapped in an
 * `AttributeTypeAndValue` of the naming attribute's type. An UNDEFINED
 * value outcome does not match.
 */
export
function valueEqualityMatcher (
    getEqualityMatcher?: (attributeType: OBJECT_IDENTIFIER) => Matcher | undefined,
): ((attributeType: OBJECT_IDENTIFIER) => EqualityMatcher | undefined) | undefined {
    if (!getEqualityMatcher) {
        return undefined;
    }
    return (attributeType) => {
        const matcher = getEqualityMatcher(attributeType);
        if (!matcher) {
            return undefined;
        }
        return (assertion, value) => matcher(
            assertion,
            new AttributeTypeAndValue(attributeType, value),
        ) === true;
    };
}
