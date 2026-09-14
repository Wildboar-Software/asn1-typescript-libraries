import EqualityMatcher from "../../types/EqualityMatcher.mjs";
import type { ASN1Element } from "@wildboar/asn1";

/**
 * Rec. ITU-T X.520 (10/2019), clause 8.9.3 `intEmailMatch`.
 *
 * Equality of `IntEmail`: both local-part and domain-part must
 * match. The local-part uses `caseIgnoreMatch`; the domain-part
 * uses `dnsNameMatch` (clause 8.9.2).
 */
export
const intEmailMatch: EqualityMatcher = (
    assertion: ASN1Element,
    value: ASN1Element,
): boolean => {
    return (assertion.utf8String.trim().toLowerCase() === value.utf8String.trim().toLowerCase());
}

export default intEmailMatch;
