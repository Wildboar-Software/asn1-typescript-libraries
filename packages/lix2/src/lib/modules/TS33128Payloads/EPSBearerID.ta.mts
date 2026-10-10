/* eslint-disable */
import {
    ASN1Element as _Element,
    INTEGER
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary EPSBearerID
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * EPSBearerID  ::=  INTEGER (0..255)
 * ```
 */
export
type EPSBearerID = INTEGER;

/**
 * @summary Decodes an ASN.1 element into a(n) EPSBearerID
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export const _decode_EPSBearerID = $._decodeInteger;

/**
 * @summary Encodes a(n) EPSBearerID into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The EPSBearerID, encoded as an ASN.1 Element.
 */
export const _encode_EPSBearerID = $._encodeInteger;


/* eslint-enable */
