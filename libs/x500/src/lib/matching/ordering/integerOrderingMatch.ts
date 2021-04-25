import OrderingMatcher from "../../types/OrderingMatcher";
import type { ASN1Element } from "asn1-ts";

export
const integerOrderingMatch: OrderingMatcher = (
    assertion: ASN1Element,
    value: ASN1Element,
): number => {
    return (value.integer - assertion.integer);
}

export default integerOrderingMatch;
