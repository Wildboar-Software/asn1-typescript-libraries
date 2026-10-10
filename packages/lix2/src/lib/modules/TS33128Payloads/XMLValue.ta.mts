/* eslint-disable */
import {
    UTF8String
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary XMLValue
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * XMLValue  ::=  UTF8String
 * ```
 */
export
type XMLValue = UTF8String; // UTF8String

/**
 * @summary Decodes an ASN.1 element into a(n) XMLValue
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export const _decode_XMLValue = $._decodeUTF8String;

/**
 * @summary Encodes a(n) XMLValue into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The XMLValue, encoded as an ASN.1 Element.
 */
export const _encode_XMLValue = $._encodeUTF8String;


/* eslint-enable */
