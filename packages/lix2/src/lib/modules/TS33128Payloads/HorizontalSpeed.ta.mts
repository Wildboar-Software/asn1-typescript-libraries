/* eslint-disable */
import {
    UTF8String
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary HorizontalSpeed
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * HorizontalSpeed  ::=  UTF8String
 * ```
 */
export
type HorizontalSpeed = UTF8String; // UTF8String

/**
 * @summary Decodes an ASN.1 element into a(n) HorizontalSpeed
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export const _decode_HorizontalSpeed = $._decodeUTF8String;

/**
 * @summary Encodes a(n) HorizontalSpeed into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The HorizontalSpeed, encoded as an ASN.1 Element.
 */
export const _encode_HorizontalSpeed = $._encodeUTF8String;


/* eslint-enable */
