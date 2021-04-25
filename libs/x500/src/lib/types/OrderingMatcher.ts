import type { ASN1Element } from "asn1-ts";

export
type OrderingMatcher = (assertion: ASN1Element, value: ASN1Element) => number;

export default OrderingMatcher;
