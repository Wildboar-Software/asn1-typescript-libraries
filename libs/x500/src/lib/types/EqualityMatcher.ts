import type { ASN1Element, OBJECT_IDENTIFIER } from "asn1-ts";

export
type EqualityMatcher = (
    assertion: ASN1Element,
    value: ASN1Element,
    getEqualityMatcher?: (attributeType: OBJECT_IDENTIFIER) => EqualityMatcher | undefined,
) => boolean;

export default EqualityMatcher;
