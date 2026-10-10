/* eslint-disable */
import {
    ASN1Element as _Element,
    INTEGER
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary QFI
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * QFI  ::=  INTEGER (0..63)
 * ```
 */
export
type QFI = INTEGER;

/**
 * @summary Decodes an ASN.1 element into a(n) QFI
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export const _decode_QFI = $._decodeInteger;

/**
 * @summary Encodes a(n) QFI into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The QFI, encoded as an ASN.1 Element.
 */
export const _encode_QFI = $._encodeInteger;


/* eslint-enable */
