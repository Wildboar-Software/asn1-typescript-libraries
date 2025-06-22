import type { ASN1Element, OBJECT_IDENTIFIER } from "@wildboar/asn1";

/**
 * A function for implement equality matching of X.500 directory values. It
 * takes another function that can retrieve another equality matching function
 * from the OID of the attribute type. This is needed so values that themselves
 * contain attribute values, like the `DistinguishedName` type, can be matched.
 */
export
type EqualityMatcher = (
    assertion: ASN1Element,
    value: ASN1Element,
    getEqualityMatcher?: (attributeType: OBJECT_IDENTIFIER) => EqualityMatcher | undefined,
) => boolean;

export default EqualityMatcher;
