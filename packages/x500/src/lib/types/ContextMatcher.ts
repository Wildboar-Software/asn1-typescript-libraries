import type { ASN1Element } from "asn1-ts";

export
type ContextMatcher = (assertion: ASN1Element, value: ASN1Element) => boolean;

export default ContextMatcher;
