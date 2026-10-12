/* eslint-disable */
import {
    ASN1Element as _Element,
    ENUMERATED
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



export
enum _enum_for_GcseEvent {
    activationOfGcseGroupComms = 1,
    startOfInterceptionGcseGroupComms = 2,
    userAdded = 3,
    userDropped = 4,
    targetConnectionModification = 5,
    targetdropped = 6,
    deactivationOfGcseGroupComms = 7,
}

/**
 * @summary GcseEvent
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * GcseEvent  ::=  ENUMERATED
 * {
 *     activationOfGcseGroupComms                (1),
 *     startOfInterceptionGcseGroupComms        (2),
 *     userAdded                                (3),
 *     userDropped                                (4),
 *     targetConnectionModification            (5),
 *     targetdropped                            (6),
 *     deactivationOfGcseGroupComms            (7),
 *     ...
 * }
 * ```
 * 
 * @enum {number}
 */
export
type GcseEvent = _enum_for_GcseEvent | ENUMERATED;

/**
 * @summary GcseEvent_activationOfGcseGroupComms
 * @constant
 * @type {number}
 */
export
const GcseEvent_activationOfGcseGroupComms: GcseEvent = 1; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary activationOfGcseGroupComms
 * @constant
 * @type {number}
 */
export
const activationOfGcseGroupComms: GcseEvent = GcseEvent_activationOfGcseGroupComms; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary GcseEvent_startOfInterceptionGcseGroupComms
 * @constant
 * @type {number}
 */
export
const GcseEvent_startOfInterceptionGcseGroupComms: GcseEvent = 2; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary startOfInterceptionGcseGroupComms
 * @constant
 * @type {number}
 */
export
const startOfInterceptionGcseGroupComms: GcseEvent = GcseEvent_startOfInterceptionGcseGroupComms; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary GcseEvent_userAdded
 * @constant
 * @type {number}
 */
export
const GcseEvent_userAdded: GcseEvent = 3; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary userAdded
 * @constant
 * @type {number}
 */
export
const userAdded: GcseEvent = GcseEvent_userAdded; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary GcseEvent_userDropped
 * @constant
 * @type {number}
 */
export
const GcseEvent_userDropped: GcseEvent = 4; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary userDropped
 * @constant
 * @type {number}
 */
export
const userDropped: GcseEvent = GcseEvent_userDropped; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary GcseEvent_targetConnectionModification
 * @constant
 * @type {number}
 */
export
const GcseEvent_targetConnectionModification: GcseEvent = 5; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary targetConnectionModification
 * @constant
 * @type {number}
 */
export
const targetConnectionModification: GcseEvent = GcseEvent_targetConnectionModification; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary GcseEvent_targetdropped
 * @constant
 * @type {number}
 */
export
const GcseEvent_targetdropped: GcseEvent = 6; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary targetdropped
 * @constant
 * @type {number}
 */
export
const targetdropped: GcseEvent = GcseEvent_targetdropped; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary GcseEvent_deactivationOfGcseGroupComms
 * @constant
 * @type {number}
 */
export
const GcseEvent_deactivationOfGcseGroupComms: GcseEvent = 7; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary deactivationOfGcseGroupComms
 * @constant
 * @type {number}
 */
export
const deactivationOfGcseGroupComms: GcseEvent = GcseEvent_deactivationOfGcseGroupComms; /* SHORT_NAMED_ENUMERATED_VALUE */

let _cached_decoder_for_GcseEvent: $.ASN1Decoder<GcseEvent> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) GcseEvent
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_GcseEvent (el: _Element): GcseEvent {
    if (!_cached_decoder_for_GcseEvent) { _cached_decoder_for_GcseEvent = $._decodeEnumerated; }
    return _cached_decoder_for_GcseEvent(el);
}

let _cached_encoder_for_GcseEvent: $.ASN1Encoder<GcseEvent> | null = null;

/**
 * @summary Encodes a(n) GcseEvent into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The GcseEvent, encoded as an ASN.1 Element.
 */
export
function _encode_GcseEvent (value: GcseEvent, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_GcseEvent) { _cached_encoder_for_GcseEvent = $._encodeEnumerated; }
    return _cached_encoder_for_GcseEvent(value, elGetter);
}


/* eslint-enable */
