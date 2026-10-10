/* eslint-disable */
import {
    ASN1Element as _Element,
    INTEGER,
    ASN1OverflowError
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
export const _decode_Orientation = (el: _Element): Orientation => {
    const value = $._decodeInteger(el);
    const _n = typeof value === "bigint" ? value : BigInt(value);
    if (_n < 0n || _n > 180n) {
        throw new ASN1OverflowError("Orientation violates INTEGER range constraint");
    }
    return value;
};

/**
 * @summary Encodes a(n) Orientation into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The Orientation, encoded as an ASN.1 Element.
 */
export const _encode_Orientation = $._encodeInteger;


/* eslint-enable */
