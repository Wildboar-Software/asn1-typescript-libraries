import { ASN1Element } from "@wildboar/asn1";

export
type OrderingMatcher = (assertion: ASN1Element, value: ASN1Element) => number;

export default OrderingMatcher;
