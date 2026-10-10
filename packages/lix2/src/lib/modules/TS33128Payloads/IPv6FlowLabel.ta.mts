/* eslint-disable */
import {
    ASN1Element as _Element,
    INTEGER,
    ASN1OverflowError
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary IPv6FlowLabel
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * IPv6FlowLabel  ::=  INTEGER(0..1048575)
 * ```
 */
export
type IPv6FlowLabel = INTEGER;

/**
 * @summary Decodes an ASN.1 element into a(n) IPv6FlowLabel
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export const _decode_IPv6FlowLabel = (el: _Element): IPv6FlowLabel => {
    const value = $._decodeInteger(el);
    const _n = typeof value === "bigint" ? value : BigInt(value);
    if (_n < 0n || _n > 1048575n) {
        throw new ASN1OverflowError("IPv6FlowLabel violates INTEGER range constraint");
    }
    return value;
};

/**
 * @summary Encodes a(n) IPv6FlowLabel into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The IPv6FlowLabel, encoded as an ASN.1 Element.
 */
export const _encode_IPv6FlowLabel = $._encodeInteger;


/* eslint-enable */
