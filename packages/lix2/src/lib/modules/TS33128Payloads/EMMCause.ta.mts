/* eslint-disable */
import {
    ASN1Element as _Element,
    INTEGER,
    ASN1OverflowError
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary EMMCause
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * EMMCause  ::=  INTEGER (0..255)
 * ```
 */
export
type EMMCause = INTEGER;

/**
 * @summary Decodes an ASN.1 element into a(n) EMMCause
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export const _decode_EMMCause = (el: _Element): EMMCause => {
    const value = $._decodeInteger(el);
    const _n = typeof value === "bigint" ? value : BigInt(value);
    if (_n < 0n || _n > 255n) {
        throw new ASN1OverflowError("EMMCause violates INTEGER range constraint");
    }
    return value;
};

/**
 * @summary Encodes a(n) EMMCause into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The EMMCause, encoded as an ASN.1 Element.
 */
export const _encode_EMMCause = $._encodeInteger;


/* eslint-enable */
