/* eslint-disable */
import {
    UTF8String
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary EASID
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * EASID  ::=  UTF8String
 * ```
 */
export
type EASID = UTF8String; // UTF8String

/**
 * @summary Decodes an ASN.1 element into a(n) EASID
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export const _decode_EASID = $._decodeUTF8String;

/**
 * @summary Encodes a(n) EASID into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The EASID, encoded as an ASN.1 Element.
 */
export const _encode_EASID = $._encodeUTF8String;


/* eslint-enable */
