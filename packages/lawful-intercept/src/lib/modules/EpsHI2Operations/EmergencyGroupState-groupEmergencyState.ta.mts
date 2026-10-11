/* eslint-disable */
import {
    ENUMERATED
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";

export
enum _enum_for_EmergencyGroupState_groupEmergencyState {
    inForm = 1,
    reSponse = 2,
    cancelInform = 3,
    cancelResponse = 4,
}

/**
 * @summary EmergencyGroupState_groupEmergencyState
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * EmergencyGroupState-groupEmergencyState ::= ENUMERATED
 * {
 *     -- in case of MCPTT group call, indicates if there is a group emergency or
 *     -- a response from the Target to indicate current Client state of emergency.
 *     inForm            (1),
 *     reSponse        (2),
 *     cancelInform     (3),
 *     cancelResponse    (4),
 *     ...
 * }
 * ```
 * 
 * @enum {number}
 */
export
type EmergencyGroupState_groupEmergencyState = _enum_for_EmergencyGroupState_groupEmergencyState | ENUMERATED;

/**
 * @summary EmergencyGroupState_groupEmergencyState_inForm
 * @constant
 * @type {number}
 */
export
const EmergencyGroupState_groupEmergencyState_inForm: EmergencyGroupState_groupEmergencyState = 1; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary inForm
 * @constant
 * @type {number}
 */
export
const inForm: EmergencyGroupState_groupEmergencyState = EmergencyGroupState_groupEmergencyState_inForm; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary EmergencyGroupState_groupEmergencyState_reSponse
 * @constant
 * @type {number}
 */
export
const EmergencyGroupState_groupEmergencyState_reSponse: EmergencyGroupState_groupEmergencyState = 2; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary reSponse
 * @constant
 * @type {number}
 */
export
const reSponse: EmergencyGroupState_groupEmergencyState = EmergencyGroupState_groupEmergencyState_reSponse; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary EmergencyGroupState_groupEmergencyState_cancelInform
 * @constant
 * @type {number}
 */
export
const EmergencyGroupState_groupEmergencyState_cancelInform: EmergencyGroupState_groupEmergencyState = 3; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary cancelInform
 * @constant
 * @type {number}
 */
export
const cancelInform: EmergencyGroupState_groupEmergencyState = EmergencyGroupState_groupEmergencyState_cancelInform; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary EmergencyGroupState_groupEmergencyState_cancelResponse
 * @constant
 * @type {number}
 */
export
const EmergencyGroupState_groupEmergencyState_cancelResponse: EmergencyGroupState_groupEmergencyState = 4; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary cancelResponse
 * @constant
 * @type {number}
 */
export
const cancelResponse: EmergencyGroupState_groupEmergencyState = EmergencyGroupState_groupEmergencyState_cancelResponse; /* SHORT_NAMED_ENUMERATED_VALUE */

export const _decode_EmergencyGroupState_groupEmergencyState: $.ASN1Decoder<EmergencyGroupState_groupEmergencyState> = $._decodeEnumerated;

export const _encode_EmergencyGroupState_groupEmergencyState: $.ASN1Encoder<EmergencyGroupState_groupEmergencyState> = $._encodeEnumerated;

/* eslint-enable */
