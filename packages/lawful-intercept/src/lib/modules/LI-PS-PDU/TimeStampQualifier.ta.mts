/* eslint-disable */
import {
    ASN1Element as _Element,
    ENUMERATED
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



export
enum _enum_for_TimeStampQualifier {
    unknown = 0,
    timeOfInterception = 1,
    timeOfMediation = 2,
    timeOfAggregation = 3,
}

/**
 * @summary TimeStampQualifier
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * TimeStampQualifier  ::=  ENUMERATED
 * {
 *     unknown(0),
 *     timeOfInterception(1),
 *     timeOfMediation(2),
 *     ...,
 *     timeOfAggregation(3)
 * }
 * ```
 * 
 * @enum {number}
 */
export
type TimeStampQualifier = _enum_for_TimeStampQualifier | ENUMERATED;

/**
 * @summary TimeStampQualifier_unknown
 * @constant
 * @type {number}
 */
export
const TimeStampQualifier_unknown: TimeStampQualifier = 0; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary unknown
 * @constant
 * @type {number}
 */
export
const unknown: TimeStampQualifier = TimeStampQualifier_unknown; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary TimeStampQualifier_timeOfInterception
 * @constant
 * @type {number}
 */
export
const TimeStampQualifier_timeOfInterception: TimeStampQualifier = 1; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary timeOfInterception
 * @constant
 * @type {number}
 */
export
const timeOfInterception: TimeStampQualifier = TimeStampQualifier_timeOfInterception; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary TimeStampQualifier_timeOfMediation
 * @constant
 * @type {number}
 */
export
const TimeStampQualifier_timeOfMediation: TimeStampQualifier = 2; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary timeOfMediation
 * @constant
 * @type {number}
 */
export
const timeOfMediation: TimeStampQualifier = TimeStampQualifier_timeOfMediation; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary TimeStampQualifier_timeOfAggregation
 * @constant
 * @type {number}
 */
export
const TimeStampQualifier_timeOfAggregation: TimeStampQualifier = 3; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary timeOfAggregation
 * @constant
 * @type {number}
 */
export
const timeOfAggregation: TimeStampQualifier = TimeStampQualifier_timeOfAggregation; /* SHORT_NAMED_ENUMERATED_VALUE */

let _cached_decoder_for_TimeStampQualifier: $.ASN1Decoder<TimeStampQualifier> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) TimeStampQualifier
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_TimeStampQualifier (el: _Element): TimeStampQualifier {
    if (!_cached_decoder_for_TimeStampQualifier) { _cached_decoder_for_TimeStampQualifier = $._decodeEnumerated; }
    return _cached_decoder_for_TimeStampQualifier(el);
}

let _cached_encoder_for_TimeStampQualifier: $.ASN1Encoder<TimeStampQualifier> | null = null;

/**
 * @summary Encodes a(n) TimeStampQualifier into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The TimeStampQualifier, encoded as an ASN.1 Element.
 */
export
function _encode_TimeStampQualifier (value: TimeStampQualifier, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_TimeStampQualifier) { _cached_encoder_for_TimeStampQualifier = $._encodeEnumerated; }
    return _cached_encoder_for_TimeStampQualifier(value, elGetter);
}


/* eslint-enable */
