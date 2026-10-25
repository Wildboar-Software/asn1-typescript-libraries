/* eslint-disable */
import {
    type ENUMERATED
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
 * GCSE event that caused the IRI. Table 14.1 assigns begin, continue, or end.
 * The module also defines a target-dropped value that table 14.1 does not name.
 * 3GPP TS 33.108, clause 14.2.6.
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
 * @description
 * 
 * A GCSE group that includes the target was activated, or the target was added
 * to an active group. IRI-BEGIN. 3GPP TS 33.108, clause 14.2.6.2.2, tables 14.1
 * and 14.3.
 * 
 * @constant
 * @type {number}
 */
export
const GcseEvent_activationOfGcseGroupComms = _enum_for_GcseEvent.activationOfGcseGroupComms satisfies GcseEvent; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary activationOfGcseGroupComms
 * @description
 * 
 * GCSE group activated for the target. IRI-BEGIN. 3GPP TS 33.108, clause
 * 14.2.6.2.2.
 * 
 * @constant
 * @type {number}
 */
export
const activationOfGcseGroupComms = GcseEvent_activationOfGcseGroupComms satisfies GcseEvent; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary GcseEvent_startOfInterceptionGcseGroupComms
 * @description
 * 
 * Interception started for a target already in an active group. IRI-BEGIN. If
 * the GCS AS does not know of multiple authorizations, the MF/DF builds the
 * record from retained information. Do not send it to an LEMF that was already
 * intercepting that target. 3GPP TS 33.108, clause 14.2.6.2.2, tables 14.1 and
 * 14.4.
 * 
 * @constant
 * @type {number}
 */
export
const GcseEvent_startOfInterceptionGcseGroupComms = _enum_for_GcseEvent.startOfInterceptionGcseGroupComms satisfies GcseEvent; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary startOfInterceptionGcseGroupComms
 * @description
 * 
 * Interception started on an active GCSE group. IRI-BEGIN. 3GPP TS 33.108,
 * clause 14.2.6.2.2.
 * 
 * @constant
 * @type {number}
 */
export
const startOfInterceptionGcseGroupComms = GcseEvent_startOfInterceptionGcseGroupComms satisfies GcseEvent; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary GcseEvent_userAdded
 * @description
 * 
 * A user became a participant, or was added to the membership list.
 * IRI-CONTINUE. The added user is required. 3GPP TS 33.108, clause 14.2.6.2.3,
 * tables 14.1 and 14.5.
 * 
 * @constant
 * @type {number}
 */
export
const GcseEvent_userAdded = _enum_for_GcseEvent.userAdded satisfies GcseEvent; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary userAdded
 * @description
 * 
 * User added to the group. IRI-CONTINUE. 3GPP TS 33.108, clause 14.2.6.2.3.
 * 
 * @constant
 * @type {number}
 */
export
const userAdded = GcseEvent_userAdded satisfies GcseEvent; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary GcseEvent_userDropped
 * @description
 * 
 * A user ceased to be a participant, or was removed from the membership list.
 * IRI-CONTINUE. The dropped user is required. 3GPP TS 33.108, clause
 * 14.2.6.2.3, tables 14.1 and 14.6.
 * 
 * @constant
 * @type {number}
 */
export
const GcseEvent_userDropped = _enum_for_GcseEvent.userDropped satisfies GcseEvent; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary userDropped
 * @description
 * 
 * User dropped from the group. IRI-CONTINUE. 3GPP TS 33.108, clause 14.2.6.2.3.
 * 
 * @constant
 * @type {number}
 */
export
const userDropped = GcseEvent_userDropped satisfies GcseEvent; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary GcseEvent_targetConnectionModification
 * @description
 * 
 * The target's connection to the GCS AS changed. IRI-CONTINUE. The modified
 * connection method is required. 3GPP TS 33.108, clause 14.2.6.2.3, tables 14.1
 * and 14.7.
 * 
 * @constant
 * @type {number}
 */
export
const GcseEvent_targetConnectionModification = _enum_for_GcseEvent.targetConnectionModification satisfies GcseEvent; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary targetConnectionModification
 * @description
 * 
 * Target connection to the GCS AS changed. IRI-CONTINUE. 3GPP TS 33.108, clause
 * 14.2.6.2.3.
 * 
 * @constant
 * @type {number}
 */
export
const targetConnectionModification = GcseEvent_targetConnectionModification satisfies GcseEvent; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary GcseEvent_targetdropped
 * @description
 * 
 * Present in annex B.14.1. Table 14.1 does not name it. Clause 14.2.6.2.4
 * triggers an end record when the target is dropped from an active group, and
 * also when interception is deactivated. The specification does not say which
 * of those cases uses this value.
 * 
 * @constant
 * @type {number}
 */
export
const GcseEvent_targetdropped = _enum_for_GcseEvent.targetdropped satisfies GcseEvent; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary targetdropped
 * @description
 * 
 * Table 14.1 does not name this value. See clause 14.2.6.2.4.
 * 
 * @constant
 * @type {number}
 */
export
const targetdropped = GcseEvent_targetdropped satisfies GcseEvent; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary GcseEvent_deactivationOfGcseGroupComms
 * @description
 * 
 * Deactivation of the GCSE group communications. Table 14.1 maps that event to
 * IRI-END. Clause 14.2.6.2.4 also ends interception when the target is dropped
 * or when interception is deactivated for a member. 3GPP TS 33.108, clause
 * 14.2.6.2.4, tables 14.1 and 14.8.
 * 
 * @constant
 * @type {number}
 */
export
const GcseEvent_deactivationOfGcseGroupComms = _enum_for_GcseEvent.deactivationOfGcseGroupComms satisfies GcseEvent; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary deactivationOfGcseGroupComms
 * @description
 * 
 * GCSE group communications deactivated. IRI-END. 3GPP TS 33.108, table 14.1.
 * 
 * @constant
 * @type {number}
 */
export
const deactivationOfGcseGroupComms = GcseEvent_deactivationOfGcseGroupComms satisfies GcseEvent; /* SHORT_NAMED_ENUMERATED_VALUE */
export const _decode_GcseEvent: $.ASN1Decoder<GcseEvent> = $._decodeEnumerated;
export const _encode_GcseEvent: $.ASN1Encoder<GcseEvent> = $._encodeEnumerated;


/* eslint-enable */
