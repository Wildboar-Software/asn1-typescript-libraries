/* eslint-disable */
import {
    ASN1Element as _Element,
    ASN1OverflowError,
    INTEGER
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary HopCounter
 * @description
 *
 * Loop-prevention counter for MAP_SEND_IDENTIFICATION. Use is specified in 3GPP
 * TS 23.012. (3GPP TS 29.002 V19.1.0 clauses 8.1.4.3 and 17.7.1)
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * HopCounter  ::=  INTEGER (0..3)
 * ```
 */
export
type HopCounter = INTEGER;

/**
 * @summary Decodes an ASN.1 element into a(n) HopCounter
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export const _decode_HopCounter = (el: _Element): HopCounter => {
    const value = $._decodeInteger(el);
    const n = typeof value === "bigint" ? Number(value) : value;
    if (n < 0 || n > 3) {
        throw new ASN1OverflowError("HopCounter violates INTEGER range");
    }
    return value;
};

/**
 * @summary Encodes a(n) HopCounter into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The HopCounter, encoded as an ASN.1 Element.
 */
export const _encode_HopCounter = $._encodeInteger;


/* eslint-enable */
