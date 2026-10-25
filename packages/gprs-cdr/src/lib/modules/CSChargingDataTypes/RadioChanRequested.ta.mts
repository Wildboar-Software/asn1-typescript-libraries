/* eslint-disable */
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary RadioChanRequested
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * RadioChanRequested  ::=  ENUMERATED {
 *    halfRateChannel          ( 0 ),
 *    fullRateChannel          ( 1 ),
 *    dualHalfRatePreferred    ( 2 ),
 *    dualFullRatePreferred    ( 3 ) }
 * ```
 * 
 * @enum {number}
 */
export
enum _enum_for_RadioChanRequested {
    halfRateChannel = 0,
    fullRateChannel = 1,
    dualHalfRatePreferred = 2,
    dualFullRatePreferred = 3,
}

/**
 * @summary RadioChanRequested
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * RadioChanRequested  ::=  ENUMERATED {
 *    halfRateChannel          ( 0 ),
 *    fullRateChannel          ( 1 ),
 *    dualHalfRatePreferred    ( 2 ),
 *    dualFullRatePreferred    ( 3 ) }
 * ```
 * 
 * @enum {number}
 */
export
type RadioChanRequested = _enum_for_RadioChanRequested;

/**
 * @summary RadioChanRequested
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * RadioChanRequested  ::=  ENUMERATED {
 *    halfRateChannel          ( 0 ),
 *    fullRateChannel          ( 1 ),
 *    dualHalfRatePreferred    ( 2 ),
 *    dualFullRatePreferred    ( 3 ) }
 * ```
 * 
 * @enum {number}
 */
export
const RadioChanRequested = _enum_for_RadioChanRequested;

/**
 * @summary RadioChanRequested_halfRateChannel
 * @constant
 * @type {number}
 */
export
const RadioChanRequested_halfRateChannel = RadioChanRequested.halfRateChannel satisfies RadioChanRequested; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary halfRateChannel
 * @constant
 * @type {number}
 */
export
const halfRateChannel = RadioChanRequested.halfRateChannel satisfies RadioChanRequested; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary RadioChanRequested_fullRateChannel
 * @constant
 * @type {number}
 */
export
const RadioChanRequested_fullRateChannel = RadioChanRequested.fullRateChannel satisfies RadioChanRequested; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary fullRateChannel
 * @constant
 * @type {number}
 */
export
const fullRateChannel = RadioChanRequested.fullRateChannel satisfies RadioChanRequested; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary RadioChanRequested_dualHalfRatePreferred
 * @constant
 * @type {number}
 */
export
const RadioChanRequested_dualHalfRatePreferred = RadioChanRequested.dualHalfRatePreferred satisfies RadioChanRequested; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary dualHalfRatePreferred
 * @constant
 * @type {number}
 */
export
const dualHalfRatePreferred = RadioChanRequested.dualHalfRatePreferred satisfies RadioChanRequested; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary RadioChanRequested_dualFullRatePreferred
 * @constant
 * @type {number}
 */
export
const RadioChanRequested_dualFullRatePreferred = RadioChanRequested.dualFullRatePreferred satisfies RadioChanRequested; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary dualFullRatePreferred
 * @constant
 * @type {number}
 */
export
const dualFullRatePreferred = RadioChanRequested.dualFullRatePreferred satisfies RadioChanRequested; /* SHORT_NAMED_ENUMERATED_VALUE */

export
const _decode_RadioChanRequested: $.ASN1Decoder<RadioChanRequested> = $._decodeEnumerated;

export
const _encode_RadioChanRequested: $.ASN1Encoder<RadioChanRequested> = $._encodeEnumerated;

/* eslint-enable */
