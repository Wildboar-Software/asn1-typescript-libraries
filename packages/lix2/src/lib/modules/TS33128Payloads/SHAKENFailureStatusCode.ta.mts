/* eslint-disable */
import {
    INTEGER
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary SHAKENFailureStatusCode
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * SHAKENFailureStatusCode  ::=  INTEGER
 * ```
 */
export
type SHAKENFailureStatusCode = INTEGER;

/**
 * @summary Decodes an ASN.1 element into a(n) SHAKENFailureStatusCode
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export const _decode_SHAKENFailureStatusCode = $._decodeInteger;

/**
 * @summary Encodes a(n) SHAKENFailureStatusCode into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The SHAKENFailureStatusCode, encoded as an ASN.1 Element.
 */
export const _encode_SHAKENFailureStatusCode = $._encodeInteger;


/* eslint-enable */
