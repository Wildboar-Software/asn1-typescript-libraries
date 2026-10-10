/* eslint-disable */
import {
    ASN1Element as _Element,
    INTEGER,
    ASN1OverflowError
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary AMFPointer
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * AMFPointer  ::=  INTEGER (0..63)
 * ```
 */
export
type AMFPointer = INTEGER;

/**
 * @summary Decodes an ASN.1 element into a(n) AMFPointer
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export const _decode_AMFPointer = (el: _Element): AMFPointer => {
    const value = $._decodeInteger(el);
    const _n = typeof value === "bigint" ? value : BigInt(value);
    if (_n < 0n || _n > 63n) {
        throw new ASN1OverflowError("AMFPointer violates INTEGER range constraint");
    }
    return value;
};

/**
 * @summary Encodes a(n) AMFPointer into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The AMFPointer, encoded as an ASN.1 Element.
 */
export const _encode_AMFPointer = $._encodeInteger;


/* eslint-enable */
