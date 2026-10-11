/* eslint-disable */
import {
    ASN1Element as _Element,
    ASN1OverflowError,
    INTEGER
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary NumberOfForwarding
 * @description
 *
 * INTEGER (1..5). Use and presence as in 3GPP TS 23.018 (3GPP TS 29.002 V19.1.0
 * clauses 10.1.3 and 17.7.3).
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * NumberOfForwarding  ::=  INTEGER (1..5)
 * ```
 */
export
type NumberOfForwarding = INTEGER;

/**
 * @summary Decodes an ASN.1 element into a(n) NumberOfForwarding
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export const _decode_NumberOfForwarding = (el: _Element): NumberOfForwarding => {
    const value = $._decodeInteger(el);
    const n = typeof value === "bigint" ? Number(value) : value;
    if (n < 1 || n > 5) {
        throw new ASN1OverflowError("NumberOfForwarding violates INTEGER range");
    }
    return value;
};

/**
 * @summary Encodes a(n) NumberOfForwarding into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The NumberOfForwarding, encoded as an ASN.1 Element.
 */
export const _encode_NumberOfForwarding = $._encodeInteger;


/* eslint-enable */
