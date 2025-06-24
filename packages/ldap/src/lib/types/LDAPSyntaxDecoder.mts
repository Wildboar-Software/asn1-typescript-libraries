import type { ASN1Element } from "@wildboar/asn1";

/**
 * @summary A function that decodes an LDAP value according to a syntax.
 * @description
 * 
 * A function that decodes an LDAP value according to a syntax to an ASN.1
 * presentation value.
 * 
 * @param value The value to decode.
 * @returns The decoded value.
 */
export
type LDAPSyntaxDecoder = (value: Uint8Array) => ASN1Element;

export default LDAPSyntaxDecoder;
