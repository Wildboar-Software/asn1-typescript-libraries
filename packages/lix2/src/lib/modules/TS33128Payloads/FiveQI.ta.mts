/* eslint-disable */
import {
    ASN1Element as _Element,
    INTEGER
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary FiveQI
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * FiveQI  ::=  INTEGER (0..255)
 * ```
 */
export
type FiveQI = INTEGER;

/**
 * @summary Decodes an ASN.1 element into a(n) FiveQI
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export const _decode_FiveQI = $._decodeInteger;

/**
 * @summary Encodes a(n) FiveQI into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The FiveQI, encoded as an ASN.1 Element.
 */
export const _encode_FiveQI = $._encodeInteger;


/* eslint-enable */
