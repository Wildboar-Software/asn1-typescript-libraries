/* eslint-disable */
import {
    ASN1Element as _Element,
    INTEGER
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary EventThresholdRSRP
 * @description
 *
 * INTEGER (0..97) (3GPP TS 29.002 V19.1.0 clause 17.7.2).
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * EventThresholdRSRP  ::=  INTEGER
 *     (0..97)
 * ```
 */
export
type EventThresholdRSRP = INTEGER;

/**
 * @summary Decodes an ASN.1 element into a(n) EventThresholdRSRP
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export const _decode_EventThresholdRSRP = $._decodeInteger;

/**
 * @summary Encodes a(n) EventThresholdRSRP into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The EventThresholdRSRP, encoded as an ASN.1 Element.
 */
export const _encode_EventThresholdRSRP = $._encodeInteger;


/* eslint-enable */
