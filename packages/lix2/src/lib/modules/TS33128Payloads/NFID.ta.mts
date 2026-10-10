/* eslint-disable */
import {
    ASN1Element as _Element,
    UTF8String
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary NFID
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * NFID  ::=  UTF8String
 * ```
 */
export
type NFID = UTF8String; // UTF8String

/**
 * @summary Decodes an ASN.1 element into a(n) NFID
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export const _decode_NFID = $._decodeUTF8String;

/**
 * @summary Encodes a(n) NFID into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The NFID, encoded as an ASN.1 Element.
 */
export const _encode_NFID = $._encodeUTF8String;


/* eslint-enable */
