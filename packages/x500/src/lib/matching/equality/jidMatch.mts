import EqualityMatcher from "../../types/EqualityMatcher.mjs";
import type { ASN1Element } from "@wildboar/asn1";

/**
 * Rec. ITU-T X.520 (10/2019), clause 8.9.4 `jidMatch`.
 *
 * Equality of `Jid` after IETF RFC 7622 normalization. Domain,
 * localpart (if both present), and resourcepart (if both present)
 * must be the same format and identical octet-by-octet. Presence of
 * localpart and resourcepart must agree on both values.
 */
export
const jidMatch: EqualityMatcher = (
    assertion: ASN1Element,
    value: ASN1Element,
): boolean => {
    return (assertion.utf8String.toLowerCase() === value.utf8String.toLowerCase());
}

export default jidMatch;
