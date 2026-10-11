/* eslint-disable */
import {
    ENUMERATED
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";

export
enum _enum_for_TETRA_LI_Event {
    callSetupMobileOriginating = 1,
    callSetupMobileTerminating = 2,
    ringing = 3,
    queueing = 4,
    connected = 5,
    handover = 6,
    callRelease = 7,
    locationUpdate = 8,
    sDSMobileOriginating = 9,
    sDSMobileTerminating = 10,
    callForward = 11,
    callHold = 12,
    groupIndication = 13,
    txGranted = 14,
    mobileOn = 15,
    mobileOff = 16,
    dMO = 17,
}

/**
 * @summary TETRA_LI_Event
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * TETRA-LI-Event  ::=  ENUMERATED
 * {
 *     callSetupMobileOriginating(1),
 *         -- Start of call, A party is target
 *     callSetupMobileTerminating(2),
 *         -- Start of call, B party is target
 *     ringing(3),
 *         -- Call reaches other party
 *     queueing(4),
 *         -- Call waiting at other party
 *     connected(5),
 *         -- Call established
 *     handover(6),
 *         -- Location change during call
 *     callRelease(7),
 *         -- Call is released
 *     locationUpdate(8),
 *         -- TETRA switch change while not in call
 *     sDSMobileOriginating(9),
 *         -- Target sends SDS
 *     sDSMobileTerminating(10),
 *         -- Target receives SDS
 *     callForward(11),
 *         -- Call forwarded to C party
 *     callHold(12),
 *         -- Call on hold
 *     groupIndication(13),
 *         -- Group indication action
 *     txGranted(14),
 *         -- Group talker tx granted
 *     mobileOn(15),
 *         -- Handset switched on
 *     mobileOff(16),
 *         -- Handset switched off
 *     dMO(17),
 *         -- Direct Mode Operation
 *     ...
 * }
 * ```
 * 
 * @enum {number}
 */
export
type TETRA_LI_Event = _enum_for_TETRA_LI_Event | ENUMERATED;

/**
 * @summary TETRA_LI_Event_callSetupMobileOriginating
 * @constant
 * @type {number}
 */
export
const TETRA_LI_Event_callSetupMobileOriginating: TETRA_LI_Event = 1; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary callSetupMobileOriginating
 * @constant
 * @type {number}
 */
export
const callSetupMobileOriginating: TETRA_LI_Event = TETRA_LI_Event_callSetupMobileOriginating; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary TETRA_LI_Event_callSetupMobileTerminating
 * @constant
 * @type {number}
 */
export
const TETRA_LI_Event_callSetupMobileTerminating: TETRA_LI_Event = 2; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary callSetupMobileTerminating
 * @constant
 * @type {number}
 */
export
const callSetupMobileTerminating: TETRA_LI_Event = TETRA_LI_Event_callSetupMobileTerminating; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary TETRA_LI_Event_ringing
 * @constant
 * @type {number}
 */
export
const TETRA_LI_Event_ringing: TETRA_LI_Event = 3; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary ringing
 * @constant
 * @type {number}
 */
export
const ringing: TETRA_LI_Event = TETRA_LI_Event_ringing; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary TETRA_LI_Event_queueing
 * @constant
 * @type {number}
 */
export
const TETRA_LI_Event_queueing: TETRA_LI_Event = 4; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary queueing
 * @constant
 * @type {number}
 */
export
const queueing: TETRA_LI_Event = TETRA_LI_Event_queueing; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary TETRA_LI_Event_connected
 * @constant
 * @type {number}
 */
export
const TETRA_LI_Event_connected: TETRA_LI_Event = 5; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary connected
 * @constant
 * @type {number}
 */
export
const connected: TETRA_LI_Event = TETRA_LI_Event_connected; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary TETRA_LI_Event_handover
 * @constant
 * @type {number}
 */
export
const TETRA_LI_Event_handover: TETRA_LI_Event = 6; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary handover
 * @constant
 * @type {number}
 */
export
const handover: TETRA_LI_Event = TETRA_LI_Event_handover; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary TETRA_LI_Event_callRelease
 * @constant
 * @type {number}
 */
export
const TETRA_LI_Event_callRelease: TETRA_LI_Event = 7; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary callRelease
 * @constant
 * @type {number}
 */
export
const callRelease: TETRA_LI_Event = TETRA_LI_Event_callRelease; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary TETRA_LI_Event_locationUpdate
 * @constant
 * @type {number}
 */
export
const TETRA_LI_Event_locationUpdate: TETRA_LI_Event = 8; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary locationUpdate
 * @constant
 * @type {number}
 */
export
const locationUpdate: TETRA_LI_Event = TETRA_LI_Event_locationUpdate; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary TETRA_LI_Event_sDSMobileOriginating
 * @constant
 * @type {number}
 */
export
const TETRA_LI_Event_sDSMobileOriginating: TETRA_LI_Event = 9; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary sDSMobileOriginating
 * @constant
 * @type {number}
 */
export
const sDSMobileOriginating: TETRA_LI_Event = TETRA_LI_Event_sDSMobileOriginating; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary TETRA_LI_Event_sDSMobileTerminating
 * @constant
 * @type {number}
 */
export
const TETRA_LI_Event_sDSMobileTerminating: TETRA_LI_Event = 10; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary sDSMobileTerminating
 * @constant
 * @type {number}
 */
export
const sDSMobileTerminating: TETRA_LI_Event = TETRA_LI_Event_sDSMobileTerminating; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary TETRA_LI_Event_callForward
 * @constant
 * @type {number}
 */
export
const TETRA_LI_Event_callForward: TETRA_LI_Event = 11; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary callForward
 * @constant
 * @type {number}
 */
export
const callForward: TETRA_LI_Event = TETRA_LI_Event_callForward; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary TETRA_LI_Event_callHold
 * @constant
 * @type {number}
 */
export
const TETRA_LI_Event_callHold: TETRA_LI_Event = 12; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary callHold
 * @constant
 * @type {number}
 */
export
const callHold: TETRA_LI_Event = TETRA_LI_Event_callHold; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary TETRA_LI_Event_groupIndication
 * @constant
 * @type {number}
 */
export
const TETRA_LI_Event_groupIndication: TETRA_LI_Event = 13; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary groupIndication
 * @constant
 * @type {number}
 */
export
const groupIndication: TETRA_LI_Event = TETRA_LI_Event_groupIndication; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary TETRA_LI_Event_txGranted
 * @constant
 * @type {number}
 */
export
const TETRA_LI_Event_txGranted: TETRA_LI_Event = 14; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary txGranted
 * @constant
 * @type {number}
 */
export
const txGranted: TETRA_LI_Event = TETRA_LI_Event_txGranted; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary TETRA_LI_Event_mobileOn
 * @constant
 * @type {number}
 */
export
const TETRA_LI_Event_mobileOn: TETRA_LI_Event = 15; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary mobileOn
 * @constant
 * @type {number}
 */
export
const mobileOn: TETRA_LI_Event = TETRA_LI_Event_mobileOn; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary TETRA_LI_Event_mobileOff
 * @constant
 * @type {number}
 */
export
const TETRA_LI_Event_mobileOff: TETRA_LI_Event = 16; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary mobileOff
 * @constant
 * @type {number}
 */
export
const mobileOff: TETRA_LI_Event = TETRA_LI_Event_mobileOff; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary TETRA_LI_Event_dMO
 * @constant
 * @type {number}
 */
export
const TETRA_LI_Event_dMO: TETRA_LI_Event = 17; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary dMO
 * @constant
 * @type {number}
 */
export
const dMO: TETRA_LI_Event = TETRA_LI_Event_dMO; /* SHORT_NAMED_ENUMERATED_VALUE */

export const _decode_TETRA_LI_Event: $.ASN1Decoder<TETRA_LI_Event> = $._decodeEnumerated;

export const _encode_TETRA_LI_Event: $.ASN1Encoder<TETRA_LI_Event> = $._encodeEnumerated;

/* eslint-enable */
