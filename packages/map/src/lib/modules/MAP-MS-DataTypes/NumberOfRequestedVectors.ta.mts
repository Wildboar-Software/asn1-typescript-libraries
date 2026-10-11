/* eslint-disable */
import {
    ASN1Element as _Element,
    ASN1OverflowError,
    INTEGER
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary NumberOfRequestedVectors
 * @description
 *
 * How many authentication vectors the new VLR is prepared to receive (1..5).
 * The previous VLR shall not return more than this. Present in the first
 * MAP_SEND_IDENTIFICATION request of a dialogue and shall not be present in
 * subsequent requests; if received later it shall be discarded. (3GPP TS 29.002
 * V19.1.0 clauses 8.1.4.3 and 17.7.1)
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * NumberOfRequestedVectors  ::=  INTEGER (1..5)
 * ```
 */
export
type NumberOfRequestedVectors = INTEGER;

/**
 * @summary Decodes an ASN.1 element into a(n) NumberOfRequestedVectors
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export const _decode_NumberOfRequestedVectors = (el: _Element): NumberOfRequestedVectors => {
    const value = $._decodeInteger(el);
    const n = typeof value === "bigint" ? Number(value) : value;
    if (n < 1 || n > 5) {
        throw new ASN1OverflowError("NumberOfRequestedVectors violates INTEGER range");
    }
    return value;
};

/**
 * @summary Encodes a(n) NumberOfRequestedVectors into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The NumberOfRequestedVectors, encoded as an ASN.1 Element.
 */
export const _encode_NumberOfRequestedVectors = $._encodeInteger;


/* eslint-enable */
