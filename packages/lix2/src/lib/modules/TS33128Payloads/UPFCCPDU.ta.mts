/* eslint-disable */
import {
    OCTET_STRING
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary UPFCCPDU
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * UPFCCPDU  ::=  OCTET STRING
 * ```
 */
export
type UPFCCPDU = OCTET_STRING; // OctetStringType

/**
 * @summary Decodes an ASN.1 element into a(n) UPFCCPDU
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export const _decode_UPFCCPDU = $._decodeOctetString;

/**
 * @summary Encodes a(n) UPFCCPDU into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The UPFCCPDU, encoded as an ASN.1 Element.
 */
export const _encode_UPFCCPDU = $._encodeOctetString;


/* eslint-enable */
