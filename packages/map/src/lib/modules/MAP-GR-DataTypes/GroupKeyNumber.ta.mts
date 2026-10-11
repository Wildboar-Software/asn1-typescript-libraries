/* eslint-disable */
import {
    ASN1Element as _Element,
    ASN1OverflowError,
    INTEGER
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary GroupKeyNumber
 * @description
 *
 * INTEGER (0..15). Broadcast VK-Id; values 2–15 reserved (3GPP TS 29.002
 * V19.1.0 clauses 10.4.3 and 17.7.12).
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * GroupKeyNumber  ::=  INTEGER (0..15)
 * ```
 */
export
type GroupKeyNumber = INTEGER;

/**
 * @summary Decodes an ASN.1 element into a(n) GroupKeyNumber
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export const _decode_GroupKeyNumber = (el: _Element): GroupKeyNumber => {
    const value = $._decodeInteger(el);
    const n = typeof value === "bigint" ? Number(value) : value;
    if (n < 0 || n > 15) {
        throw new ASN1OverflowError("GroupKeyNumber violates INTEGER range");
    }
    return value;
};

/**
 * @summary Encodes a(n) GroupKeyNumber into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The GroupKeyNumber, encoded as an ASN.1 Element.
 */
export const _encode_GroupKeyNumber = $._encodeInteger;


/* eslint-enable */
