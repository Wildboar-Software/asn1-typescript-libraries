import OrderingMatcher from "../../types/OrderingMatcher.js";
import type { ASN1Element } from "asn1-ts";

export
const integerOrderingMatch: OrderingMatcher = (
    assertion: ASN1Element,
    value: ASN1Element,
): number => {
    return Number(BigInt(value.integer) - BigInt(assertion.integer));
}

export default integerOrderingMatch;
