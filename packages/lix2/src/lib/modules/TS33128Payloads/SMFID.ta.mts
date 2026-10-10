/* eslint-disable */
import {
    UTF8String
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary SMFID
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * SMFID  ::=  UTF8String
 * ```
 */
export
type SMFID = UTF8String; // UTF8String

/**
 * @summary Decodes an ASN.1 element into a(n) SMFID
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export const _decode_SMFID = $._decodeUTF8String;

/**
 * @summary Encodes a(n) SMFID into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The SMFID, encoded as an ASN.1 Element.
 */
export const _encode_SMFID = $._encodeUTF8String;


/* eslint-enable */
