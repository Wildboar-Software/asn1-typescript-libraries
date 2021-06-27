import { ASN1Element } from "asn1-ts";

export
type ApproxMatcher = (assertion: ASN1Element, value: ASN1Element) => boolean;

export default ApproxMatcher;
