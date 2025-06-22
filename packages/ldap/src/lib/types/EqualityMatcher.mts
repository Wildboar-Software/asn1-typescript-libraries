import { ASN1Element } from "@wildboar/asn1";

export
type EqualityMatcher = (assertion: ASN1Element, value: ASN1Element) => boolean;

export default EqualityMatcher;
