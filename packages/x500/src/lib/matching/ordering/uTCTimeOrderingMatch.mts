import OrderingMatcher from "../../types/OrderingMatcher.mjs";
import type { ASN1Element, UTCTime } from "asn1-ts";

export
const uTCTimeOrderingMatch: OrderingMatcher = (
    assertion: ASN1Element,
    value: ASN1Element,
): number => {
    const a: UTCTime = assertion.utcTime;
    const v: UTCTime = value.utcTime;
    /**
     * From ITU Recommendation X.520, Section 8.3.2:
     *
     * > The rule returns TRUE if the attribute value represents a time which
     * is earlier than the presented time.
     */
    return (a.valueOf() - v.valueOf());
}

export default uTCTimeOrderingMatch;
