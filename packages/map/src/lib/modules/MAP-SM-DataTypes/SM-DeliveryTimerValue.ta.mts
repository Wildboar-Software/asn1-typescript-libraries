/* eslint-disable */
import {
    ASN1Element as _Element,
    ASN1OverflowError,
    INTEGER
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary SM_DeliveryTimerValue
 * @description
 *
 * INTEGER (30..600). Used by the SMS-GMSC (3GPP TS 29.002 V19.1.0 clause
 * 17.7.6).
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * SM-DeliveryTimerValue  ::=  INTEGER (30..600)
 * ```
 */
export
type SM_DeliveryTimerValue = INTEGER;

/**
 * @summary Decodes an ASN.1 element into a(n) SM_DeliveryTimerValue
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export const _decode_SM_DeliveryTimerValue = (el: _Element): SM_DeliveryTimerValue => {
    const value = $._decodeInteger(el);
    const n = typeof value === "bigint" ? Number(value) : value;
    if (n < 30 || n > 600) {
        throw new ASN1OverflowError("SM_DeliveryTimerValue violates INTEGER range");
    }
    return value;
};

/**
 * @summary Encodes a(n) SM_DeliveryTimerValue into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The SM_DeliveryTimerValue, encoded as an ASN.1 Element.
 */
export const _encode_SM_DeliveryTimerValue = $._encodeInteger;


/* eslint-enable */
