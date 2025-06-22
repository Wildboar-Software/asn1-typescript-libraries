import type { ASN1Element } from "@wildboar/asn1";

/**
 * A function that converts an X.500 directory value to its LDAP string
 * representation.
 */
export
type StringEncoder = (value: ASN1Element) => string;

export default StringEncoder;
