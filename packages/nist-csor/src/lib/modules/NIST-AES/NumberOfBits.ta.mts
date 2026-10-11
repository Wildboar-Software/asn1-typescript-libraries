/* eslint-disable */
import {
    ASN1Element as _Element,
    ASN1OverflowError,
    INTEGER,
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary NumberOfBits
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * NumberOfBits  ::=  INTEGER(1..128)
 * ```
 */
export
type NumberOfBits = INTEGER;

/**
 * @summary Decodes an ASN.1 element into a(n) NumberOfBits
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export const _decode_NumberOfBits = (el: _Element): NumberOfBits => {
    const value = $._decodeInteger(el);
    const n = typeof value === "bigint" ? Number(value) : value;
    if (n < 1 || n > 128) {
        throw new ASN1OverflowError("NumberOfBits violates INTEGER range");
    }
    return value;
};

/**
 * @summary Encodes a(n) NumberOfBits into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The NumberOfBits, encoded as an ASN.1 Element.
 */
export const _encode_NumberOfBits = $._encodeInteger;


/* eslint-enable */
