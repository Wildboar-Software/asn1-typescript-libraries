/* eslint-disable */
import {
    ASN1Element as _Element,
    UTF8String
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary SIPEndpoint
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * SIPEndpoint  ::=  UTF8String
 * ```
 */
export
type SIPEndpoint = UTF8String; // UTF8String

/**
 * @summary Decodes an ASN.1 element into a(n) SIPEndpoint
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export const _decode_SIPEndpoint = $._decodeUTF8String;

/**
 * @summary Encodes a(n) SIPEndpoint into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The SIPEndpoint, encoded as an ASN.1 Element.
 */
export const _encode_SIPEndpoint = $._encodeUTF8String;


/* eslint-enable */
