/* eslint-disable */
import {
    ASN1Element as _Element,
    INTEGER
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary AMFSetID
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * AMFSetID  ::=  INTEGER (0..1023)
 * ```
 */
export
type AMFSetID = INTEGER;

/**
 * @summary Decodes an ASN.1 element into a(n) AMFSetID
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export const _decode_AMFSetID = $._decodeInteger;

/**
 * @summary Encodes a(n) AMFSetID into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The AMFSetID, encoded as an ASN.1 Element.
 */
export const _encode_AMFSetID = $._encodeInteger;


/* eslint-enable */
