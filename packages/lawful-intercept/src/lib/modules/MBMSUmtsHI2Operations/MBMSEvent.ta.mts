/* eslint-disable */
import {
    ASN1Element as _Element,
    ENUMERATED
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



export
enum _enum_for_MBMSEvent {
    mBMSServiceJoining = 1,
    mBMSServiceLeaving = 2,
    mBMSSubscriptionActivation = 3,
    mBMSSubscriptionModification = 4,
    mBMSSubscriptionTermination = 5,
    startofInterceptWithMBMSServiceActive = 6,
}

/**
 * @summary MBMSEvent
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * MBMSEvent  ::=  ENUMERATED
 * {
 *     mBMSServiceJoining                           (1),
 *     mBMSServiceLeaving                        (2),
 *     mBMSSubscriptionActivation                (3),
 *     mBMSSubscriptionModification            (4),
 *     mBMSSubscriptionTermination                (5),
 *     startofInterceptWithMBMSServiceActive    (6),
 * 
 *     ...
 * }
 * ```
 * 
 * @enum {number}
 */
export
type MBMSEvent = _enum_for_MBMSEvent | ENUMERATED;

/**
 * @summary MBMSEvent_mBMSServiceJoining
 * @constant
 * @type {number}
 */
export
const MBMSEvent_mBMSServiceJoining: MBMSEvent = 1; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary mBMSServiceJoining
 * @constant
 * @type {number}
 */
export
const mBMSServiceJoining: MBMSEvent = MBMSEvent_mBMSServiceJoining; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary MBMSEvent_mBMSServiceLeaving
 * @constant
 * @type {number}
 */
export
const MBMSEvent_mBMSServiceLeaving: MBMSEvent = 2; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary mBMSServiceLeaving
 * @constant
 * @type {number}
 */
export
const mBMSServiceLeaving: MBMSEvent = MBMSEvent_mBMSServiceLeaving; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary MBMSEvent_mBMSSubscriptionActivation
 * @constant
 * @type {number}
 */
export
const MBMSEvent_mBMSSubscriptionActivation: MBMSEvent = 3; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary mBMSSubscriptionActivation
 * @constant
 * @type {number}
 */
export
const mBMSSubscriptionActivation: MBMSEvent = MBMSEvent_mBMSSubscriptionActivation; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary MBMSEvent_mBMSSubscriptionModification
 * @constant
 * @type {number}
 */
export
const MBMSEvent_mBMSSubscriptionModification: MBMSEvent = 4; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary mBMSSubscriptionModification
 * @constant
 * @type {number}
 */
export
const mBMSSubscriptionModification: MBMSEvent = MBMSEvent_mBMSSubscriptionModification; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary MBMSEvent_mBMSSubscriptionTermination
 * @constant
 * @type {number}
 */
export
const MBMSEvent_mBMSSubscriptionTermination: MBMSEvent = 5; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary mBMSSubscriptionTermination
 * @constant
 * @type {number}
 */
export
const mBMSSubscriptionTermination: MBMSEvent = MBMSEvent_mBMSSubscriptionTermination; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary MBMSEvent_startofInterceptWithMBMSServiceActive
 * @constant
 * @type {number}
 */
export
const MBMSEvent_startofInterceptWithMBMSServiceActive: MBMSEvent = 6; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary startofInterceptWithMBMSServiceActive
 * @constant
 * @type {number}
 */
export
const startofInterceptWithMBMSServiceActive: MBMSEvent = MBMSEvent_startofInterceptWithMBMSServiceActive; /* SHORT_NAMED_ENUMERATED_VALUE */

let _cached_decoder_for_MBMSEvent: $.ASN1Decoder<MBMSEvent> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) MBMSEvent
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_MBMSEvent (el: _Element): MBMSEvent {
    if (!_cached_decoder_for_MBMSEvent) { _cached_decoder_for_MBMSEvent = $._decodeEnumerated; }
    return _cached_decoder_for_MBMSEvent(el);
}

let _cached_encoder_for_MBMSEvent: $.ASN1Encoder<MBMSEvent> | null = null;

/**
 * @summary Encodes a(n) MBMSEvent into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The MBMSEvent, encoded as an ASN.1 Element.
 */
export
function _encode_MBMSEvent (value: MBMSEvent, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_MBMSEvent) { _cached_encoder_for_MBMSEvent = $._encodeEnumerated; }
    return _cached_encoder_for_MBMSEvent(value, elGetter);
}


/* eslint-enable */
