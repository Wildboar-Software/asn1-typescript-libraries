import OrderingMatcher from "../../types/OrderingMatcher.mjs";
import type { ASN1Element, GeneralizedTime } from "asn1-ts";

export
const generalizedTimeOrderingMatch: OrderingMatcher = (
    assertion: ASN1Element,
    value: ASN1Element,
): number => {
    const a: GeneralizedTime = assertion.generalizedTime;
    const v: GeneralizedTime = value.generalizedTime;
    /**
     * From ITU Recommendation X.520, Section 8.3.4:
     *
     * > The rule returns TRUE if the attribute value represents a time which
     * is earlier than the presented time.
     */
    return (a.valueOf() - v.valueOf());
}

export default generalizedTimeOrderingMatch;
