/* eslint-disable */
import {
    ASN1Element as _Element,
    UTF8String
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary RCSServerURI
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * RCSServerURI  ::=  UTF8String
 * ```
 */
export
type RCSServerURI = UTF8String; // UTF8String

/**
 * @summary Decodes an ASN.1 element into a(n) RCSServerURI
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export const _decode_RCSServerURI = $._decodeUTF8String;

/**
 * @summary Encodes a(n) RCSServerURI into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The RCSServerURI, encoded as an ASN.1 Element.
 */
export const _encode_RCSServerURI = $._encodeUTF8String;


/* eslint-enable */
