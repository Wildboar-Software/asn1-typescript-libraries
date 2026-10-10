/* eslint-disable */
import {
    UTF8String
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary SCEFID
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * SCEFID  ::=  UTF8String
 * ```
 */
export
type SCEFID = UTF8String; // UTF8String

/**
 * @summary Decodes an ASN.1 element into a(n) SCEFID
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export const _decode_SCEFID = $._decodeUTF8String;

/**
 * @summary Encodes a(n) SCEFID into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The SCEFID, encoded as an ASN.1 Element.
 */
export const _encode_SCEFID = $._encodeUTF8String;


/* eslint-enable */
