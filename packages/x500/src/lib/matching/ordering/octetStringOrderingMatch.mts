import OrderingMatcher from "../../types/OrderingMatcher.mjs";
import type { ASN1Element } from "@wildboar/asn1";

export
const octetStringOrderingMatch: OrderingMatcher = (
    assertion: ASN1Element,
    value: ASN1Element,
): number => {
    return Buffer.compare(assertion.octetString, value.octetString);
}

export default octetStringOrderingMatch;
