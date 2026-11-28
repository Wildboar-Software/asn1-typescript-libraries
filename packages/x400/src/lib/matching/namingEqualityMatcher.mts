import type { OBJECT_IDENTIFIER } from "@wildboar/asn1";
import type { GetDistinguishedValueMatcher } from "@wildboar/dn";
import { AttributeTypeAndValue } from "@wildboar/x500/InformationFramework";
import {
    MATCH_FLAG_USED_FOR_NAME,
    type Matcher,
} from "@wildboar/x500";

/**
 * Present a `Matcher` lookup as the single-value equality lookup used
 * when comparing distinguished names nested in an O/R name.
 */
export
function namingEqualityMatcher(
    getEqualityMatcher?: (attributeType: OBJECT_IDENTIFIER) => Matcher | undefined,
    flags: number = 0,
): GetDistinguishedValueMatcher | undefined {
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
            getEqualityMatcher,
            flags | MATCH_FLAG_USED_FOR_NAME,
        ) === true;
    };
}
