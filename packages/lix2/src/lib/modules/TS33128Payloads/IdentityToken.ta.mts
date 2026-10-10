/* eslint-disable */
import {
    ASN1Element as _Element,
    UTF8String
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary IdentityToken
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * IdentityToken  ::=  UTF8String
 * ```
 */
export
type IdentityToken = UTF8String; // UTF8String

/**
 * @summary Decodes an ASN.1 element into a(n) IdentityToken
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export const _decode_IdentityToken = $._decodeUTF8String;

/**
 * @summary Encodes a(n) IdentityToken into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The IdentityToken, encoded as an ASN.1 Element.
 */
export const _encode_IdentityToken = $._encodeUTF8String;


/* eslint-enable */
