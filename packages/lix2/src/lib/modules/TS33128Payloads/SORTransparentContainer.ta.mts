/* eslint-disable */
import {
    ASN1Element as _Element,
    OCTET_STRING
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary SORTransparentContainer
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * SORTransparentContainer  ::=  OCTET STRING (SIZE (17..65535))
 * ```
 */
export
type SORTransparentContainer = OCTET_STRING; // OctetStringType

/**
 * @summary Decodes an ASN.1 element into a(n) SORTransparentContainer
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export const _decode_SORTransparentContainer = $._decodeOctetString;

/**
 * @summary Encodes a(n) SORTransparentContainer into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The SORTransparentContainer, encoded as an ASN.1 Element.
 */
export const _encode_SORTransparentContainer = $._encodeOctetString;


/* eslint-enable */
