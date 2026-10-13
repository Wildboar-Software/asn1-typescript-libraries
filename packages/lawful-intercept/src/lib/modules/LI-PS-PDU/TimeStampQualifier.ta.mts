/* eslint-disable */
import {
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
export const _decode_TimeStampQualifier: $.ASN1Decoder<TimeStampQualifier> = $._decodeEnumerated;
export const _encode_TimeStampQualifier: $.ASN1Encoder<TimeStampQualifier> = $._encodeEnumerated;


/* eslint-enable */
