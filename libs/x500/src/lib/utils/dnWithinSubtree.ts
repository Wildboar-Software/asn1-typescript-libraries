import type EqualityMatcher from "../types/EqualityMatcher";
import type { OBJECT_IDENTIFIER } from "asn1-ts";
import type {
    DistinguishedName,
} from "../modules/InformationFramework/DistinguishedName.ta";
import compareDistinguishedName from "../comparators/compareDistinguishedName";

export
function dnWithinSubtree (
    dn: DistinguishedName,
    dit: DistinguishedName,
    minimum: number = 0,
    maximum: number = 0,
    getEqualityMatcher?: (attributeType: OBJECT_IDENTIFIER) => EqualityMatcher | undefined,
): boolean {
    if (dn.length < (dit.length + minimum)) {
        return false;
    }
    if (dn.length > (dit.length + maximum)) {
        return false;
    }
    return compareDistinguishedName(dit.reverse(), dn.reverse().slice(0, dit.length), getEqualityMatcher);
}

export default dnWithinSubtree;
