/* eslint-disable */
import {
    ASN1Element as _Element,
    INTEGER,
    ASN1OverflowError
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary Angle
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * Angle  ::=  INTEGER (0..360)
 * ```
 */
export
type Angle = INTEGER;

/**
 * @summary Decodes an ASN.1 element into a(n) Angle
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export const _decode_Angle = (el: _Element): Angle => {
    const value = $._decodeInteger(el);
    const _n = typeof value === "bigint" ? value : BigInt(value);
    if (_n < 0n || _n > 360n) {
        throw new ASN1OverflowError("Angle violates INTEGER range constraint");
    }
    return value;
};

/**
 * @summary Encodes a(n) Angle into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The Angle, encoded as an ASN.1 Element.
 */
export const _encode_Angle = $._encodeInteger;


/* eslint-enable */
