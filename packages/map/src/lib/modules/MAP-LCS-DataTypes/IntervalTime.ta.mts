/* eslint-disable */
import {
    ASN1Element as _Element,
    ASN1OverflowError,
    INTEGER
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary IntervalTime
 * @description
 *
 * INTEGER (1..32767) seconds between area reports (3GPP TS 29.002 V19.1.0
 * clause 17.7.13).
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * IntervalTime  ::=  INTEGER (1..32767)
 * ```
 */
export
type IntervalTime = INTEGER;

/**
 * @summary Decodes an ASN.1 element into a(n) IntervalTime
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export const _decode_IntervalTime = (el: _Element): IntervalTime => {
    const value = $._decodeInteger(el);
    const n = typeof value === "bigint" ? Number(value) : value;
    if (n < 1 || n > 32767) {
        throw new ASN1OverflowError("IntervalTime violates INTEGER range");
    }
    return value;
};

/**
 * @summary Encodes a(n) IntervalTime into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The IntervalTime, encoded as an ASN.1 Element.
 */
export const _encode_IntervalTime = $._encodeInteger;


/* eslint-enable */
