/* eslint-disable */
import {
    ASN1Element as _Element,
    UTF8String
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary NEFID
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * NEFID  ::=  UTF8String
 * ```
 */
export
type NEFID = UTF8String; // UTF8String

/**
 * @summary Decodes an ASN.1 element into a(n) NEFID
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export const _decode_NEFID = $._decodeUTF8String;

/**
 * @summary Encodes a(n) NEFID into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The NEFID, encoded as an ASN.1 Element.
 */
export const _encode_NEFID = $._encodeUTF8String;


/* eslint-enable */
