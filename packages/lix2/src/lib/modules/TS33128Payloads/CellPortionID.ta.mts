/* eslint-disable */
import {
    ASN1Element as _Element,
    INTEGER,
    ASN1OverflowError
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
export const _decode_CellPortionID = (el: _Element): CellPortionID => {
    const value = $._decodeInteger(el);
    const _n = typeof value === "bigint" ? value : BigInt(value);
    if (_n < 0n || _n > 4095n) {
        throw new ASN1OverflowError("CellPortionID violates INTEGER range constraint");
    }
    return value;
};

/**
 * @summary Encodes a(n) CellPortionID into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The CellPortionID, encoded as an ASN.1 Element.
 */
export const _encode_CellPortionID = $._encodeInteger;


/* eslint-enable */
