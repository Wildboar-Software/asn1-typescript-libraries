/* eslint-disable */
import {
    ASN1Element as _Element,
    INTEGER,
    ASN1OverflowError
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary MethodCode
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * MethodCode  ::=  INTEGER (16..31)
 * ```
 */
export
type MethodCode = INTEGER;

/**
 * @summary Decodes an ASN.1 element into a(n) MethodCode
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export const _decode_MethodCode = (el: _Element): MethodCode => {
    const value = $._decodeInteger(el);
    const _n = typeof value === "bigint" ? value : BigInt(value);
    if (_n < 16n || _n > 31n) {
        throw new ASN1OverflowError("MethodCode violates INTEGER range constraint");
    }
    return value;
};

/**
 * @summary Encodes a(n) MethodCode into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The MethodCode, encoded as an ASN.1 Element.
 */
export const _encode_MethodCode = $._encodeInteger;


/* eslint-enable */
