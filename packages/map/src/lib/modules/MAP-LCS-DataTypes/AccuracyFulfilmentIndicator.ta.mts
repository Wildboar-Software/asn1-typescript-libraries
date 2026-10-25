/* eslint-disable */
import {
    type ASN1Element as _Element,
    type ENUMERATED
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



export
enum _enum_for_AccuracyFulfilmentIndicator {
    requestedAccuracyFulfilled = 0,
    requestedAccuracyNotFulfilled = 1,
}

/**
 * @summary AccuracyFulfilmentIndicator
 * @description
 *
 * See 3GPP TS 23.271 (3GPP TS 29.002 V19.1.0 clauses 7.6.11.28 and 17.7.13).
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * AccuracyFulfilmentIndicator  ::=  ENUMERATED {
 *     requestedAccuracyFulfilled  (0),
 *     requestedAccuracyNotFulfilled  (1),
 *     ...    }
 * ```
 * 
 * @enum {number}
 */
export
type AccuracyFulfilmentIndicator = _enum_for_AccuracyFulfilmentIndicator | ENUMERATED;

/**
 * @summary AccuracyFulfilmentIndicator_requestedAccuracyFulfilled
 * @description
 *
 * `requestedAccuracyFulfilled (0)` (3GPP TS 29.002 V19.1.0 clause 7.6.11.28).
 *
 * @constant
 * @type {number}
 */
export
const AccuracyFulfilmentIndicator_requestedAccuracyFulfilled: _enum_for_AccuracyFulfilmentIndicator.requestedAccuracyFulfilled = _enum_for_AccuracyFulfilmentIndicator.requestedAccuracyFulfilled; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary requestedAccuracyFulfilled
 * @description
 *
 * `requestedAccuracyFulfilled (0)` (3GPP TS 29.002 V19.1.0 clause 7.6.11.28).
 *
 * @constant
 * @type {number}
 */
export
const requestedAccuracyFulfilled: _enum_for_AccuracyFulfilmentIndicator.requestedAccuracyFulfilled = AccuracyFulfilmentIndicator_requestedAccuracyFulfilled; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary AccuracyFulfilmentIndicator_requestedAccuracyNotFulfilled
 * @description
 *
 * `requestedAccuracyNotFulfilled (1)` (3GPP TS 29.002 V19.1.0 clause
 * 7.6.11.28).
 *
 * @constant
 * @type {number}
 */
export
const AccuracyFulfilmentIndicator_requestedAccuracyNotFulfilled: _enum_for_AccuracyFulfilmentIndicator.requestedAccuracyNotFulfilled = _enum_for_AccuracyFulfilmentIndicator.requestedAccuracyNotFulfilled; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary requestedAccuracyNotFulfilled
 * @description
 *
 * `requestedAccuracyNotFulfilled (1)` (3GPP TS 29.002 V19.1.0 clause
 * 7.6.11.28).
 *
 * @constant
 * @type {number}
 */
export
const requestedAccuracyNotFulfilled: _enum_for_AccuracyFulfilmentIndicator.requestedAccuracyNotFulfilled = AccuracyFulfilmentIndicator_requestedAccuracyNotFulfilled; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary Decodes an ASN.1 element into a(n) AccuracyFulfilmentIndicator
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export const _decode_AccuracyFulfilmentIndicator: $.ASN1Decoder<number> = $._decodeEnumerated;

/**
 * @summary Encodes a(n) AccuracyFulfilmentIndicator into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The AccuracyFulfilmentIndicator, encoded as an ASN.1 Element.
 */
export const _encode_AccuracyFulfilmentIndicator: $.ASN1Encoder<number> = $._encodeEnumerated;


/* eslint-enable */
