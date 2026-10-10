/* eslint-disable */
import {
    ASN1Element as _Element,
    UTF8String
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary SMFErrorCodes
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * SMFErrorCodes  ::=  UTF8String
 * ```
 */
export
type SMFErrorCodes = UTF8String; // UTF8String

/**
 * @summary Decodes an ASN.1 element into a(n) SMFErrorCodes
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export const _decode_SMFErrorCodes = $._decodeUTF8String;

/**
 * @summary Encodes a(n) SMFErrorCodes into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The SMFErrorCodes, encoded as an ASN.1 Element.
 */
export const _encode_SMFErrorCodes = $._encodeUTF8String;


/* eslint-enable */
