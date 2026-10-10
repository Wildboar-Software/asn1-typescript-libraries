/* eslint-disable */
import {
    ASN1Element as _Element,
    INTEGER,
    ASN1OverflowError
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary BarometricPressure
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * BarometricPressure  ::=  INTEGER (30000..115000)
 * ```
 */
export
type BarometricPressure = INTEGER;

/**
 * @summary Decodes an ASN.1 element into a(n) BarometricPressure
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export const _decode_BarometricPressure = (el: _Element): BarometricPressure => {
    const value = $._decodeInteger(el);
    const _n = typeof value === "bigint" ? value : BigInt(value);
    if (_n < 30000n || _n > 115000n) {
        throw new ASN1OverflowError("BarometricPressure violates INTEGER range constraint");
    }
    return value;
};

/**
 * @summary Encodes a(n) BarometricPressure into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The BarometricPressure, encoded as an ASN.1 Element.
 */
export const _encode_BarometricPressure = $._encodeInteger;


/* eslint-enable */
