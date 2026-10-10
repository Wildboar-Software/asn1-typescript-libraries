/* eslint-disable */
import {
    UTF8String
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary SIPAccessInfo
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * SIPAccessInfo  ::=  UTF8String
 * ```
 */
export
type SIPAccessInfo = UTF8String; // UTF8String

/**
 * @summary Decodes an ASN.1 element into a(n) SIPAccessInfo
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export const _decode_SIPAccessInfo = $._decodeUTF8String;

/**
 * @summary Encodes a(n) SIPAccessInfo into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The SIPAccessInfo, encoded as an ASN.1 Element.
 */
export const _encode_SIPAccessInfo = $._encodeUTF8String;


/* eslint-enable */
