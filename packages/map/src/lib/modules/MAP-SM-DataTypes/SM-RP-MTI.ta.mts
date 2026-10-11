/* eslint-disable */
import {
    ASN1Element as _Element,
    ASN1OverflowError,
    INTEGER
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary SM_RP_MTI
 * @description
 *
 * INTEGER (0..10): 0 SMS Deliver, 1 SMS Status Report; other values reserved
 * and discarded if received (3GPP TS 29.002 V19.1.0 clause 17.7.6).
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * SM-RP-MTI  ::=  INTEGER (0..10)
 * ```
 */
export
type SM_RP_MTI = INTEGER;

/**
 * @summary Decodes an ASN.1 element into a(n) SM_RP_MTI
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export const _decode_SM_RP_MTI = (el: _Element): SM_RP_MTI => {
    const value = $._decodeInteger(el);
    const n = typeof value === "bigint" ? Number(value) : value;
    if (n < 0 || n > 10) {
        throw new ASN1OverflowError("SM_RP_MTI violates INTEGER range");
    }
    return value;
};

/**
 * @summary Encodes a(n) SM_RP_MTI into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The SM_RP_MTI, encoded as an ASN.1 Element.
 */
export const _encode_SM_RP_MTI = $._encodeInteger;


/* eslint-enable */
