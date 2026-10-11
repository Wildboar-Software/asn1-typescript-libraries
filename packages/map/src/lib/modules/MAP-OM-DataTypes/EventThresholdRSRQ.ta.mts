/* eslint-disable */
import {
    ASN1Element as _Element,
    INTEGER
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary EventThresholdRSRQ
 * @description
 *
 * INTEGER (0..34) (3GPP TS 29.002 V19.1.0 clause 17.7.2).
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * EventThresholdRSRQ  ::=  INTEGER
 *     (0..34)
 * ```
 */
export
type EventThresholdRSRQ = INTEGER;

/**
 * @summary Decodes an ASN.1 element into a(n) EventThresholdRSRQ
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export const _decode_EventThresholdRSRQ = $._decodeInteger;

/**
 * @summary Encodes a(n) EventThresholdRSRQ into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The EventThresholdRSRQ, encoded as an ASN.1 Element.
 */
export const _encode_EventThresholdRSRQ = $._encodeInteger;


/* eslint-enable */
