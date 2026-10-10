/* eslint-disable */
import {
    ASN1Element as _Element,
    INTEGER,
    ASN1OverflowError
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary Confidence
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * Confidence  ::=  INTEGER (0..100)
 * ```
 */
export
type Confidence = INTEGER;

/**
 * @summary Decodes an ASN.1 element into a(n) Confidence
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export const _decode_Confidence = (el: _Element): Confidence => {
    const value = $._decodeInteger(el);
    const _n = typeof value === "bigint" ? value : BigInt(value);
    if (_n < 0n || _n > 100n) {
        throw new ASN1OverflowError("Confidence violates INTEGER range constraint");
    }
    return value;
};

/**
 * @summary Encodes a(n) Confidence into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The Confidence, encoded as an ASN.1 Element.
 */
export const _encode_Confidence = $._encodeInteger;


/* eslint-enable */
