/* eslint-disable */
import {
    ASN1Element as _Element
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary AccuracyFulfilmentIndicator
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * AccuracyFulfilmentIndicator  ::=  ENUMERATED
 * {
 *     requestedAccuracyFulfilled(1),
 *     requestedAccuracyNotFulfilled(2)
 * }
 * ```
 * 
 * @enum {number}
 */
export
enum _enum_for_AccuracyFulfilmentIndicator {
    requestedAccuracyFulfilled = 1,
    requestedAccuracyNotFulfilled = 2,
}

/**
 * @summary AccuracyFulfilmentIndicator
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * AccuracyFulfilmentIndicator  ::=  ENUMERATED
 * {
 *     requestedAccuracyFulfilled(1),
 *     requestedAccuracyNotFulfilled(2)
 * }
 * ```
 * 
 * @enum {number}
 */
export
type AccuracyFulfilmentIndicator = _enum_for_AccuracyFulfilmentIndicator;

/**
 * @summary AccuracyFulfilmentIndicator
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * AccuracyFulfilmentIndicator  ::=  ENUMERATED
 * {
 *     requestedAccuracyFulfilled(1),
 *     requestedAccuracyNotFulfilled(2)
 * }
 * ```
 * 
 * @enum {number}
 */
export
const AccuracyFulfilmentIndicator = _enum_for_AccuracyFulfilmentIndicator;

/**
 * @summary AccuracyFulfilmentIndicator_requestedAccuracyFulfilled
 * @constant
 * @type {number}
 */
export
const AccuracyFulfilmentIndicator_requestedAccuracyFulfilled: AccuracyFulfilmentIndicator = AccuracyFulfilmentIndicator.requestedAccuracyFulfilled; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary requestedAccuracyFulfilled
 * @constant
 * @type {number}
 */
export
const requestedAccuracyFulfilled: AccuracyFulfilmentIndicator = AccuracyFulfilmentIndicator.requestedAccuracyFulfilled; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary AccuracyFulfilmentIndicator_requestedAccuracyNotFulfilled
 * @constant
 * @type {number}
 */
export
const AccuracyFulfilmentIndicator_requestedAccuracyNotFulfilled: AccuracyFulfilmentIndicator = AccuracyFulfilmentIndicator.requestedAccuracyNotFulfilled; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary requestedAccuracyNotFulfilled
 * @constant
 * @type {number}
 */
export
const requestedAccuracyNotFulfilled: AccuracyFulfilmentIndicator = AccuracyFulfilmentIndicator.requestedAccuracyNotFulfilled; /* SHORT_NAMED_ENUMERATED_VALUE */

let _cached_decoder_for_AccuracyFulfilmentIndicator: $.ASN1Decoder<AccuracyFulfilmentIndicator> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) AccuracyFulfilmentIndicator
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_AccuracyFulfilmentIndicator (el: _Element): AccuracyFulfilmentIndicator {
    if (!_cached_decoder_for_AccuracyFulfilmentIndicator) { _cached_decoder_for_AccuracyFulfilmentIndicator = $._decodeEnumerated; }
    return _cached_decoder_for_AccuracyFulfilmentIndicator(el);
}

let _cached_encoder_for_AccuracyFulfilmentIndicator: $.ASN1Encoder<AccuracyFulfilmentIndicator> | null = null;

/**
 * @summary Encodes a(n) AccuracyFulfilmentIndicator into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The AccuracyFulfilmentIndicator, encoded as an ASN.1 Element.
 */
export
function _encode_AccuracyFulfilmentIndicator (value: AccuracyFulfilmentIndicator, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_AccuracyFulfilmentIndicator) { _cached_encoder_for_AccuracyFulfilmentIndicator = $._encodeEnumerated; }
    return _cached_encoder_for_AccuracyFulfilmentIndicator(value, elGetter);
}


/* eslint-enable */
