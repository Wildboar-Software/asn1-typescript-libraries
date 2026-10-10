/* eslint-disable */
import {
    ASN1Element as _Element,
    INTEGER,
    ASN1OverflowError
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary SUPIType
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * SUPIType  ::=  INTEGER (0..7)
 * ```
 */
export
type SUPIType = INTEGER;

/**
 * @summary Decodes an ASN.1 element into a(n) SUPIType
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export const _decode_SUPIType = (el: _Element): SUPIType => {
    const value = $._decodeInteger(el);
    const _n = typeof value === "bigint" ? value : BigInt(value);
    if (_n < 0n || _n > 7n) {
        throw new ASN1OverflowError("SUPIType violates INTEGER range constraint");
    }
    return value;
};

/**
 * @summary Encodes a(n) SUPIType into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The SUPIType, encoded as an ASN.1 Element.
 */
export const _encode_SUPIType = $._encodeInteger;


/* eslint-enable */
