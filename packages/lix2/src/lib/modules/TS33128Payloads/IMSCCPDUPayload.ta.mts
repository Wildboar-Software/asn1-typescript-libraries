/* eslint-disable */
import {
    OCTET_STRING
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary IMSCCPDUPayload
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * IMSCCPDUPayload  ::=  OCTET STRING
 * ```
 */
export
type IMSCCPDUPayload = OCTET_STRING; // OctetStringType

/**
 * @summary Decodes an ASN.1 element into a(n) IMSCCPDUPayload
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export const _decode_IMSCCPDUPayload = $._decodeOctetString;

/**
 * @summary Encodes a(n) IMSCCPDUPayload into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The IMSCCPDUPayload, encoded as an ASN.1 Element.
 */
export const _encode_IMSCCPDUPayload = $._encodeOctetString;


/* eslint-enable */
