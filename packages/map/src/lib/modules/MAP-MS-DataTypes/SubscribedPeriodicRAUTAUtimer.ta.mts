/* eslint-disable */
import {
    ASN1Element as _Element,
    ASN1OverflowError,
    INTEGER
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary SubscribedPeriodicRAUTAUtimer
 * @description
 *
 * Subscribed periodic TAU/RAU timer in seconds, as in 3GPP TS 24.008.
 *
 * (3GPP TS 29.002 V19.1.0 clause 17.7.1).
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * SubscribedPeriodicRAUTAUtimer  ::=  INTEGER (0..4294967295)
 * ```
 */
export
type SubscribedPeriodicRAUTAUtimer = INTEGER;

/**
 * @summary Decodes an ASN.1 element into a(n) SubscribedPeriodicRAUTAUtimer
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export const _decode_SubscribedPeriodicRAUTAUtimer = (el: _Element): SubscribedPeriodicRAUTAUtimer => {
    const value = $._decodeInteger(el);
    const n = typeof value === "bigint" ? Number(value) : value;
    if (n < 0 || n > 4294967295) {
        throw new ASN1OverflowError("SubscribedPeriodicRAUTAUtimer violates INTEGER range");
    }
    return value;
};

/**
 * @summary Encodes a(n) SubscribedPeriodicRAUTAUtimer into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The SubscribedPeriodicRAUTAUtimer, encoded as an ASN.1 Element.
 */
export const _encode_SubscribedPeriodicRAUTAUtimer = $._encodeInteger;


/* eslint-enable */
