import type EqualityMatcher from "../../types/EqualityMatcher.js";
import type { ASN1Element, OBJECT_IDENTIFIER } from "asn1-ts";
import compareDistinguishedName from "../../comparators/compareDistinguishedName.js";
import {
    DistinguishedName,
    _decode_DistinguishedName,
} from "../../modules/InformationFramework/DistinguishedName.ta.js";

export
const distinguishedNameMatch: EqualityMatcher = (
    assertion: ASN1Element,
    value: ASN1Element,
    getEqualityMatcher?: (attributeType: OBJECT_IDENTIFIER) => EqualityMatcher | undefined,
): boolean => {
    const a: DistinguishedName = _decode_DistinguishedName(assertion);
    const v: DistinguishedName = _decode_DistinguishedName(value);
    return compareDistinguishedName(a, v, getEqualityMatcher);
}

export default distinguishedNameMatch;
