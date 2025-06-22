import OrderingMatcher from "../../types/OrderingMatcher.mjs";
import type { ASN1Element } from "@wildboar/asn1";

export
const integerOrderingMatch: OrderingMatcher = (
    assertion: ASN1Element,
    value: ASN1Element,
): number => {
    return Number(BigInt(value.integer) - BigInt(assertion.integer));
}

export default integerOrderingMatch;
