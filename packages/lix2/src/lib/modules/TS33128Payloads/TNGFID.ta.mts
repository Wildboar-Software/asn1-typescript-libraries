/* eslint-disable */
import {
    UTF8String
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary TNGFID
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * TNGFID  ::=  UTF8String
 * ```
 */
export
type TNGFID = UTF8String; // UTF8String

/**
 * @summary Decodes an ASN.1 element into a(n) TNGFID
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export const _decode_TNGFID = $._decodeUTF8String;

/**
 * @summary Encodes a(n) TNGFID into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The TNGFID, encoded as an ASN.1 Element.
 */
export const _encode_TNGFID = $._encodeUTF8String;


/* eslint-enable */
