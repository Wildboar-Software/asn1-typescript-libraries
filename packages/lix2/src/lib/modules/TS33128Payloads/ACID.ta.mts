/* eslint-disable */
import {
    UTF8String
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary ACID
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ACID  ::=  UTF8String
 * ```
 */
export
type ACID = UTF8String; // UTF8String

/**
 * @summary Decodes an ASN.1 element into a(n) ACID
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export const _decode_ACID = $._decodeUTF8String;

/**
 * @summary Encodes a(n) ACID into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ACID, encoded as an ASN.1 Element.
 */
export const _encode_ACID = $._encodeUTF8String;


/* eslint-enable */
