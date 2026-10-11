/* eslint-disable */
import {
    ASN1Element as _Element,
    INTEGER
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary EventThreshold1F
 * @description
 *
 * INTEGER (-120..165) (3GPP TS 29.002 V19.1.0 clause 17.7.2).
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * EventThreshold1F  ::=  INTEGER
 *     (-120..165)
 * ```
 */
export
type EventThreshold1F = INTEGER;

/**
 * @summary Decodes an ASN.1 element into a(n) EventThreshold1F
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export const _decode_EventThreshold1F = $._decodeInteger;

/**
 * @summary Encodes a(n) EventThreshold1F into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The EventThreshold1F, encoded as an ASN.1 Element.
 */
export const _encode_EventThreshold1F = $._encodeInteger;


/* eslint-enable */
