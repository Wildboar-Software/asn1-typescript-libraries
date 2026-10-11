/* eslint-disable */
import {
    ASN1Element as _Element,
    ASN1OverflowError,
    INTEGER
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary SubscribedPeriodicLAUtimer
 * @description
 *
 * Subscribed periodic Location Area Update timer in seconds, as in 3GPP TS
 * 24.008.
 *
 * (3GPP TS 29.002 V19.1.0 clause 17.7.1).
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * SubscribedPeriodicLAUtimer  ::=  INTEGER (0..4294967295)
 * ```
 */
export
type SubscribedPeriodicLAUtimer = INTEGER;

/**
 * @summary Decodes an ASN.1 element into a(n) SubscribedPeriodicLAUtimer
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export const _decode_SubscribedPeriodicLAUtimer = (el: _Element): SubscribedPeriodicLAUtimer => {
    const value = $._decodeInteger(el);
    const n = typeof value === "bigint" ? Number(value) : value;
    if (n < 0 || n > 4294967295) {
        throw new ASN1OverflowError("SubscribedPeriodicLAUtimer violates INTEGER range");
    }
    return value;
};

/**
 * @summary Encodes a(n) SubscribedPeriodicLAUtimer into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The SubscribedPeriodicLAUtimer, encoded as an ASN.1 Element.
 */
export const _encode_SubscribedPeriodicLAUtimer = $._encodeInteger;


/* eslint-enable */
