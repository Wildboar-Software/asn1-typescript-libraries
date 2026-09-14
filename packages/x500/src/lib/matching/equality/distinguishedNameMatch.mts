import type EqualityMatcher from "../../types/EqualityMatcher.mjs";
import type { ASN1Element, OBJECT_IDENTIFIER } from "@wildboar/asn1";
import compareDistinguishedName from "../../comparators/compareDistinguishedName.mjs";
import {
    DistinguishedName,
    _decode_DistinguishedName,
} from "../../modules/InformationFramework/DistinguishedName.ta.mjs";

/**
 * Rec. ITU-T X.501 (10/2019), clause 13.5.2
 * `distinguishedNameMatch` (also 8.9.6 and 9.4).
 *
 * TRUE iff both names have the same number of RDNs, corresponding
 * RDNs have the same number of `AttributeTypeAndValue`, and
 * corresponding AVAs (same RDN, same attribute type) have values
 * that match using the attribute type's equality matching rule.
 *
 * `getEqualityMatcher` is required so nested naming attributes can
 * be compared with their own equality rules.
 */
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
