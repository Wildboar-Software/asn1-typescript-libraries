/* eslint-disable */
import {
    UTF8String
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary SIPURI
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * SIPURI  ::=  UTF8String
 * ```
 */
export
type SIPURI = UTF8String; // UTF8String

/**
 * @summary Decodes an ASN.1 element into a(n) SIPURI
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export const _decode_SIPURI = $._decodeUTF8String;

/**
 * @summary Encodes a(n) SIPURI into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The SIPURI, encoded as an ASN.1 Element.
 */
export const _encode_SIPURI = $._encodeUTF8String;


/* eslint-enable */
