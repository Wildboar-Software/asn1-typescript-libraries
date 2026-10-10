/* eslint-disable */
import {
    UTF8String
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary APN
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * APN  ::=  UTF8String
 * ```
 */
export
type APN = UTF8String; // UTF8String

/**
 * @summary Decodes an ASN.1 element into a(n) APN
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export const _decode_APN = $._decodeUTF8String;

/**
 * @summary Encodes a(n) APN into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The APN, encoded as an ASN.1 Element.
 */
export const _encode_APN = $._encodeUTF8String;


/* eslint-enable */
