/* eslint-disable */
import {
    ASN1Element as _Element,
    UTF8String
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary VerticalSpeed
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * VerticalSpeed  ::=  UTF8String
 * ```
 */
export
type VerticalSpeed = UTF8String; // UTF8String

/**
 * @summary Decodes an ASN.1 element into a(n) VerticalSpeed
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export const _decode_VerticalSpeed = $._decodeUTF8String;

/**
 * @summary Encodes a(n) VerticalSpeed into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The VerticalSpeed, encoded as an ASN.1 Element.
 */
export const _encode_VerticalSpeed = $._encodeUTF8String;


/* eslint-enable */
