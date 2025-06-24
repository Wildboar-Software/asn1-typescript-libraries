import type { ASN1Element } from "@wildboar/asn1";

/**
 * @summary A function that decodes an LDAP value from a string.
 * @description
 * 
 * A function that decodes an LDAP value from a string.
 * 
 * @param value The string to decode.
 * @returns The decoded value.
 * @function
 */
export
type StringDecoder = (value: string) => ASN1Element;

export default StringDecoder;
