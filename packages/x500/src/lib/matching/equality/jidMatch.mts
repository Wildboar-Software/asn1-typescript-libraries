import type { ASN1Element } from "@wildboar/asn1";

/**
 * Rec. ITU-T X.520 (10/2019), clause 8.9.4 `jidMatch`.
 *
 * Equality of `Jid` after IETF RFC 7622 normalization. Domain,
 * localpart (if both present), and resourcepart (if both present)
 * must be the same format and identical octet-by-octet. Presence of
 * localpart and resourcepart must agree on both values.
 *
 * Each argument may be an `ASN1Element` or a string.
 */
export
function jidMatch (
    assertion: ASN1Element | string,
    value: ASN1Element | string,
): boolean {
    const presented = typeof assertion === "string" ? assertion : assertion.utf8String;
    const stored = typeof value === "string" ? value : value.utf8String;
    return presented.toLowerCase() === stored.toLowerCase();
}

export default jidMatch;
