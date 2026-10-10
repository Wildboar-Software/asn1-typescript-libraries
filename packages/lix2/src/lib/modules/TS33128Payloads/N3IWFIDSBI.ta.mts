/* eslint-disable */
import {
    ASN1Element as _Element,
    UTF8String
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary N3IWFIDSBI
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * N3IWFIDSBI  ::=  UTF8String
 * ```
 */
export
type N3IWFIDSBI = UTF8String; // UTF8String

/**
 * @summary Decodes an ASN.1 element into a(n) N3IWFIDSBI
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export const _decode_N3IWFIDSBI = $._decodeUTF8String;

/**
 * @summary Encodes a(n) N3IWFIDSBI into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The N3IWFIDSBI, encoded as an ASN.1 Element.
 */
export const _encode_N3IWFIDSBI = $._encodeUTF8String;


/* eslint-enable */
