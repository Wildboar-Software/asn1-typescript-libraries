import type { ASN1Element } from "asn1-ts";

/**
 * A function for implement evaluation of X.500 directory context assertions.
 */
export
type ContextMatcher = (assertion: ASN1Element, value: ASN1Element) => boolean;

export default ContextMatcher;
