/* eslint-disable */
import {
    OCTET_STRING
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary SMPDUDNRequest
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * SMPDUDNRequest  ::=  OCTET STRING
 * ```
 */
export
type SMPDUDNRequest = OCTET_STRING; // OctetStringType

/**
 * @summary Decodes an ASN.1 element into a(n) SMPDUDNRequest
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export const _decode_SMPDUDNRequest = $._decodeOctetString;

/**
 * @summary Encodes a(n) SMPDUDNRequest into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The SMPDUDNRequest, encoded as an ASN.1 Element.
 */
export const _encode_SMPDUDNRequest = $._encodeOctetString;


/* eslint-enable */
