import type { ASN1Element } from "@wildboar/asn1";

/**
 * @summary A function that encodes an LDAP value according to a syntax.
 * @description
 * 
 * A function that encodes an ASN.1 presentation value according to a syntax
 * to an LDAP value.
 * 
 * @param value The value to encode.
 */
export
type LDAPSyntaxEncoder = (value: ASN1Element) => Uint8Array;

export default LDAPSyntaxEncoder;
