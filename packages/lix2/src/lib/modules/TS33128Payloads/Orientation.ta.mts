/* eslint-disable */
import {
    ASN1Element as _Element,
    INTEGER
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary Orientation
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * Orientation  ::=  INTEGER (0..180)
 * ```
 */
export
type Orientation = INTEGER;

/**
 * @summary Decodes an ASN.1 element into a(n) Orientation
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export const _decode_Orientation = $._decodeInteger;

/**
 * @summary Encodes a(n) Orientation into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The Orientation, encoded as an ASN.1 Element.
 */
export const _encode_Orientation = $._encodeInteger;


/* eslint-enable */
