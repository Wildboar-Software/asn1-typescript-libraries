/* eslint-disable */
import {
    ASN1Element as _Element,
    INTEGER,
    ASN1OverflowError
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary QFI
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * QFI  ::=  INTEGER (0..63)
 * ```
 */
export
type QFI = INTEGER;

/**
 * @summary Decodes an ASN.1 element into a(n) QFI
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export const _decode_QFI = (el: _Element): QFI => {
    const value = $._decodeInteger(el);
    const _n = typeof value === "bigint" ? value : BigInt(value);
    if (_n < 0n || _n > 63n) {
        throw new ASN1OverflowError("QFI violates INTEGER range constraint");
    }
    return value;
};

/**
 * @summary Encodes a(n) QFI into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The QFI, encoded as an ASN.1 Element.
 */
export const _encode_QFI = $._encodeInteger;


/* eslint-enable */
