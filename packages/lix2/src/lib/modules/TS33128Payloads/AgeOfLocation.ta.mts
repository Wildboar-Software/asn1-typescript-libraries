/* eslint-disable */
import {
    ASN1Element as _Element,
    INTEGER
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary AgeOfLocation
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * AgeOfLocation  ::=  INTEGER (0..32767)
 * ```
 */
export
type AgeOfLocation = INTEGER;

/**
 * @summary Decodes an ASN.1 element into a(n) AgeOfLocation
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export const _decode_AgeOfLocation = $._decodeInteger;

/**
 * @summary Encodes a(n) AgeOfLocation into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The AgeOfLocation, encoded as an ASN.1 Element.
 */
export const _encode_AgeOfLocation = $._encodeInteger;


/* eslint-enable */
