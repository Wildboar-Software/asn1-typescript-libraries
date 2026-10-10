/* eslint-disable */
import {
    OCTET_STRING
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary ThreeGPP2SMSTPDU
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ThreeGPP2SMSTPDU  ::=  OCTET STRING
 * ```
 */
export
type ThreeGPP2SMSTPDU = OCTET_STRING; // OctetStringType

/**
 * @summary Decodes an ASN.1 element into a(n) ThreeGPP2SMSTPDU
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export const _decode_ThreeGPP2SMSTPDU = $._decodeOctetString;

/**
 * @summary Encodes a(n) ThreeGPP2SMSTPDU into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ThreeGPP2SMSTPDU, encoded as an ASN.1 Element.
 */
export const _encode_ThreeGPP2SMSTPDU = $._encodeOctetString;


/* eslint-enable */
