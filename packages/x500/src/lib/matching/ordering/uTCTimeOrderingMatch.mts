import { ASN1Element } from "@wildboar/asn1";

/**
 * Rec. ITU-T X.520 (10/2019), clause 8.3.2 `uTCTimeOrderingMatch`.
 *
 * Directory TRUE iff the stored UTCTime is earlier than the
 * presented time. Two-digit years 00–49 mean 2000–2049; 50–99 mean
 * 1950–1999. Absent seconds are treated as zero.
 *
 * Each argument may be an `ASN1Element` or a `Date`.
 */
export
function uTCTimeOrderingMatch (
    assertion: ASN1Element | Date,
    value: ASN1Element | Date,
): number {
    const presented = ASN1Element.isElement(assertion) ? assertion.utcTime : assertion;
    const stored = ASN1Element.isElement(value) ? value.utcTime : value;
    return presented.valueOf() - stored.valueOf();
}

export default uTCTimeOrderingMatch;
