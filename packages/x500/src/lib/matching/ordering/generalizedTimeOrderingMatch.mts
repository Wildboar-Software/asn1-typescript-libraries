import { ASN1Element } from "@wildboar/asn1";

/**
 * Rec. ITU-T X.520 (10/2019), clause 8.3.4
 * `generalizedTimeOrderingMatch`.
 *
 * Directory TRUE iff the stored GeneralizedTime is earlier than
 * the presented time. Absent minutes or seconds are treated as
 * zero.
 *
 * Each argument may be an `ASN1Element` or a `Date`.
 */
export
function generalizedTimeOrderingMatch (
    assertion: ASN1Element | Date,
    value: ASN1Element | Date,
): number {
    const presented = ASN1Element.isElement(assertion) ? assertion.generalizedTime : assertion;
    const stored = ASN1Element.isElement(value) ? value.generalizedTime : value;
    return presented.valueOf() - stored.valueOf();
}

export default generalizedTimeOrderingMatch;
