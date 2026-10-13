/* eslint-disable */
import {
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
export const _decode_GcseEvent: $.ASN1Decoder<GcseEvent> = $._decodeEnumerated;
export const _encode_GcseEvent: $.ASN1Encoder<GcseEvent> = $._encodeEnumerated;


/* eslint-enable */
