import type { ASN1Element } from "@wildboar/asn1";

/**
 * A function that converts an LDAP string representation of a value to its
 * X.500 directory representation.
 */
export
type StringDecoder = (value: string) => ASN1Element;

export default StringDecoder;
