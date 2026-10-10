/* eslint-disable */
import {
    ASN1Element as _Element,
    INTEGER
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary RDSPortNumber
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * RDSPortNumber  ::=  INTEGER (0..15)
 * ```
 */
export
type RDSPortNumber = INTEGER;

/**
 * @summary Decodes an ASN.1 element into a(n) RDSPortNumber
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export const _decode_RDSPortNumber = $._decodeInteger;

/**
 * @summary Encodes a(n) RDSPortNumber into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The RDSPortNumber, encoded as an ASN.1 Element.
 */
export const _encode_RDSPortNumber = $._encodeInteger;


/* eslint-enable */
