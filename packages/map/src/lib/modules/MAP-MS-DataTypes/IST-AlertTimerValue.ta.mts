/* eslint-disable */
import {
    ASN1Element as _Element,
    ASN1OverflowError,
    INTEGER
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary IST_AlertTimerValue
 * @description
 *
 * IST Alert Timer in minutes (15..255) used by the MSC to inform the HLR about
 * the subscriber's call activities. (3GPP TS 29.002 V19.1.0 clauses 7.6.3.66,
 * 8.8.1.3, and 17.7.1)
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * IST-AlertTimerValue  ::=  INTEGER (15..255)
 * ```
 */
export
type IST_AlertTimerValue = INTEGER;

/**
 * @summary Decodes an ASN.1 element into a(n) IST_AlertTimerValue
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export const _decode_IST_AlertTimerValue = (el: _Element): IST_AlertTimerValue => {
    const value = $._decodeInteger(el);
    const n = typeof value === "bigint" ? Number(value) : value;
    if (n < 15 || n > 255) {
        throw new ASN1OverflowError("IST_AlertTimerValue violates INTEGER range");
    }
    return value;
};

/**
 * @summary Encodes a(n) IST_AlertTimerValue into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The IST_AlertTimerValue, encoded as an ASN.1 Element.
 */
export const _encode_IST_AlertTimerValue = $._encodeInteger;


/* eslint-enable */
