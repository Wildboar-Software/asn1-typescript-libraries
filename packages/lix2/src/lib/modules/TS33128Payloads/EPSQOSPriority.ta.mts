/* eslint-disable */
import {
    ASN1Element as _Element,
    INTEGER
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary EPSQOSPriority
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * EPSQOSPriority  ::=  INTEGER (1..15)
 * ```
 */
export
type EPSQOSPriority = INTEGER;

/**
 * @summary Decodes an ASN.1 element into a(n) EPSQOSPriority
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export const _decode_EPSQOSPriority = $._decodeInteger;

/**
 * @summary Encodes a(n) EPSQOSPriority into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The EPSQOSPriority, encoded as an ASN.1 Element.
 */
export const _encode_EPSQOSPriority = $._encodeInteger;


/* eslint-enable */
