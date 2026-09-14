import OrderingMatcher from "../../types/OrderingMatcher.mjs";
import type { ASN1Element, GeneralizedTime } from "@wildboar/asn1";

/**
 * Rec. ITU-T X.520 (10/2019), clause 8.3.4
 * `generalizedTimeOrderingMatch`.
 *
 * Directory TRUE iff the stored GeneralizedTime is earlier than
 * the presented time. Absent minutes or seconds are treated as
 * zero.
 */
export
const generalizedTimeOrderingMatch: OrderingMatcher = (
    assertion: ASN1Element,
    value: ASN1Element,
): number => {
    const a: GeneralizedTime = assertion.generalizedTime;
    const v: GeneralizedTime = value.generalizedTime;
    return (a.valueOf() - v.valueOf());
}

export default generalizedTimeOrderingMatch;
