/* eslint-disable */
import {
    ASN1Element as _Element,
    INTEGER,
    ASN1OverflowError
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary InnerRadius
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * InnerRadius  ::=  INTEGER (0..327675)
 * ```
 */
export
type InnerRadius = INTEGER;

/**
 * @summary Decodes an ASN.1 element into a(n) InnerRadius
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export const _decode_InnerRadius = (el: _Element): InnerRadius => {
    const value = $._decodeInteger(el);
    const _n = typeof value === "bigint" ? value : BigInt(value);
    if (_n < 0n || _n > 327675n) {
        throw new ASN1OverflowError("InnerRadius violates INTEGER range constraint");
    }
    return value;
};

/**
 * @summary Encodes a(n) InnerRadius into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The InnerRadius, encoded as an ASN.1 Element.
 */
export const _encode_InnerRadius = $._encodeInteger;


/* eslint-enable */
