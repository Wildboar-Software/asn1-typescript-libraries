/* eslint-disable */
import {
    type ENUMERATED
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
 * MCPTT group-call emergency: either a group emergency, or the target's
 * response that reports the client's emergency state (module comment). Used
 * when an MCPTT emergency call indicates an emergency state, and when that
 * group state is cancelled (tables 17.3.2 and 17.3.3). 3GPP TS 33.108
 * (https://www.3gpp.org/DynaReport/33108.htm).
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * EmergencyGroupState-groupEmergencyState ::= ENUMERATED {
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
 * @description
 * 
 * A group emergency is indicated (module comment).
 * 
 * @constant
 * @type {number}
 */
export
const EmergencyGroupState_groupEmergencyState_inForm = _enum_for_EmergencyGroupState_groupEmergencyState.inForm; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary inForm
 * @description
 * 
 * Group emergency is indicated.
 * 
 * @constant
 * @type {number}
 */
export
const inForm = EmergencyGroupState_groupEmergencyState_inForm; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary EmergencyGroupState_groupEmergencyState_reSponse
 * @description
 * 
 * The target answers with the client's current emergency state (module
 * comment).
 * 
 * @constant
 * @type {number}
 */
export
const EmergencyGroupState_groupEmergencyState_reSponse = _enum_for_EmergencyGroupState_groupEmergencyState.reSponse; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary reSponse
 * @description
 * 
 * Target reports the client's emergency state.
 * 
 * @constant
 * @type {number}
 */
export
const reSponse = EmergencyGroupState_groupEmergencyState_reSponse; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary EmergencyGroupState_groupEmergencyState_cancelInform
 * @description
 * 
 * The group-emergency indication is cancelled (module comment; table 17.3.3).
 * 
 * @constant
 * @type {number}
 */
export
const EmergencyGroupState_groupEmergencyState_cancelInform = _enum_for_EmergencyGroupState_groupEmergencyState.cancelInform; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary cancelInform
 * @description
 * 
 * Group-emergency indication is cancelled.
 * 
 * @constant
 * @type {number}
 */
export
const cancelInform = EmergencyGroupState_groupEmergencyState_cancelInform; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary EmergencyGroupState_groupEmergencyState_cancelResponse
 * @description
 * 
 * The target's emergency-state response is cancelled (module comment).
 * 
 * @constant
 * @type {number}
 */
export
const EmergencyGroupState_groupEmergencyState_cancelResponse = _enum_for_EmergencyGroupState_groupEmergencyState.cancelResponse; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary cancelResponse
 * @description
 * 
 * Emergency-state response is cancelled.
 * 
 * @constant
 * @type {number}
 */
export
const cancelResponse = EmergencyGroupState_groupEmergencyState_cancelResponse; /* SHORT_NAMED_ENUMERATED_VALUE */
export const _decode_EmergencyGroupState_groupEmergencyState: $.ASN1Decoder<EmergencyGroupState_groupEmergencyState> = $._decodeEnumerated;
export const _encode_EmergencyGroupState_groupEmergencyState: $.ASN1Encoder<EmergencyGroupState_groupEmergencyState> = $._encodeEnumerated;


/* eslint-enable */
