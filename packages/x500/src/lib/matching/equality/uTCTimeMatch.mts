import { ASN1Element } from "@wildboar/asn1";

/**
 * Rec. ITU-T X.520 (10/2019), clause 8.3.1 `uTCTimeMatch`.
 *
 * TRUE iff both UTCTime values represent the same instant. If
 * seconds are absent, they are treated as zero.
 *
 * Each argument may be an `ASN1Element` or a `Date`.
 */
export
function uTCTimeMatch (
    assertion: ASN1Element | Date,
    value: ASN1Element | Date,
): boolean {
    const presented = ASN1Element.isElement(assertion) ? assertion.utcTime : assertion;
    const stored = ASN1Element.isElement(value) ? value.utcTime : value;
    return presented.toISOString() === stored.toISOString();
}

export default uTCTimeMatch;
