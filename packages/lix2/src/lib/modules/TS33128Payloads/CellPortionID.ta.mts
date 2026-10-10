/* eslint-disable */
import {
    ASN1Element as _Element,
    INTEGER
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary CellPortionID
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * CellPortionID  ::=  INTEGER (0..4095)
 * ```
 */
export
type CellPortionID = INTEGER;

/**
 * @summary Decodes an ASN.1 element into a(n) CellPortionID
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export const _decode_CellPortionID = $._decodeInteger;

/**
 * @summary Encodes a(n) CellPortionID into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The CellPortionID, encoded as an ASN.1 Element.
 */
export const _encode_CellPortionID = $._encodeInteger;


/* eslint-enable */
