/* eslint-disable */
import {
    ASN1Element as _Element,
    INTEGER,
    ASN1OverflowError
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary QCI
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * QCI  ::=  INTEGER (0..255)
 * ```
 */
export
type QCI = INTEGER;

/**
 * @summary Decodes an ASN.1 element into a(n) QCI
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export const _decode_QCI = (el: _Element): QCI => {
    const value = $._decodeInteger(el);
    const _n = typeof value === "bigint" ? value : BigInt(value);
    if (_n < 0n || _n > 255n) {
        throw new ASN1OverflowError("QCI violates INTEGER range constraint");
    }
    return value;
};

/**
 * @summary Encodes a(n) QCI into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The QCI, encoded as an ASN.1 Element.
 */
export const _encode_QCI = $._encodeInteger;


/* eslint-enable */
