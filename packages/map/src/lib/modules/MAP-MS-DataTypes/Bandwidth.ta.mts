/* eslint-disable */
import {
    ASN1Element as _Element,
    INTEGER
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary Bandwidth
 * @description
 *
 * Bit rate in bits per second, used in AMBR (3GPP TS 29.002 V19.1.0 clause
 * 17.7.1).
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * Bandwidth  ::=  INTEGER
 * ```
 */
export
type Bandwidth = INTEGER;

/**
 * @summary Decodes an ASN.1 element into a(n) Bandwidth
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export const _decode_Bandwidth = $._decodeInteger;

/**
 * @summary Encodes a(n) Bandwidth into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The Bandwidth, encoded as an ASN.1 Element.
 */
export const _encode_Bandwidth = $._encodeInteger;


/* eslint-enable */
