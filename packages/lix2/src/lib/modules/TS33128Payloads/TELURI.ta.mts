/* eslint-disable */
import {
    UTF8String
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary TELURI
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * TELURI  ::=  UTF8String
 * ```
 */
export
type TELURI = UTF8String; // UTF8String

/**
 * @summary Decodes an ASN.1 element into a(n) TELURI
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export const _decode_TELURI = $._decodeUTF8String;

/**
 * @summary Encodes a(n) TELURI into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The TELURI, encoded as an ASN.1 Element.
 */
export const _encode_TELURI = $._encodeUTF8String;


/* eslint-enable */
