/* eslint-disable */
import {
    ASN1Element as _Element,
    UTF8String
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary MMSContentType
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * MMSContentType  ::=  UTF8String
 * ```
 */
export
type MMSContentType = UTF8String; // UTF8String

/**
 * @summary Decodes an ASN.1 element into a(n) MMSContentType
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export const _decode_MMSContentType = $._decodeUTF8String;

/**
 * @summary Encodes a(n) MMSContentType into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The MMSContentType, encoded as an ASN.1 Element.
 */
export const _encode_MMSContentType = $._encodeUTF8String;


/* eslint-enable */
