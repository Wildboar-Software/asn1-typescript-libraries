import EqualityMatcher from "../../types/EqualityMatcher";
import type { ASN1Element } from "asn1-ts";
import compareDistinguishedName from "../../comparators/compareDistinguishedName";
import {
    DistinguishedName,
    _decode_DistinguishedName,
} from "../../modules/InformationFramework/DistinguishedName.ta";

export
const distinguishedNameMatch: EqualityMatcher = (
    assertion: ASN1Element,
    value: ASN1Element,
): boolean => {
    const a: DistinguishedName = _decode_DistinguishedName(assertion);
    const v: DistinguishedName = _decode_DistinguishedName(value)
    return compareDistinguishedName(a, v);
}

export default distinguishedNameMatch;
