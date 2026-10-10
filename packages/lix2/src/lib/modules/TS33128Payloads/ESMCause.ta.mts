/* eslint-disable */
import {
    ASN1Element as _Element,
    INTEGER
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary ESMCause
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ESMCause  ::=  INTEGER (0..255)
 * ```
 */
export
type ESMCause = INTEGER;

/**
 * @summary Decodes an ASN.1 element into a(n) ESMCause
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export const _decode_ESMCause = $._decodeInteger;

/**
 * @summary Encodes a(n) ESMCause into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ESMCause, encoded as an ASN.1 Element.
 */
export const _encode_ESMCause = $._encodeInteger;


/* eslint-enable */
