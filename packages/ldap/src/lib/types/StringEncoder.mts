import type { ASN1Element } from "@wildboar/asn1";

/**
 * @summary A function that encodes an LDAP value to a string.
 * @description
 * 
 * A function that encodes an LDAP value to a string.
 * 
 * @param value The value to encode.
 * @returns The encoded value.
 * @function
 */
export
type StringEncoder = (value: ASN1Element) => string;

export default StringEncoder;
