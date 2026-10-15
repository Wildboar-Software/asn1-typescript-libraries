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
 * Group side of an MCPTT emergency call: a group emergency, the target's
 * response giving the client's current emergency state, or a cancellation of
 * either.
 * 
 * Annex B.3 does not define a further procedure for each value. Table 17.3.2
 * includes this state when an emergency is indicated. Table 17.3.3 includes it
 * when the group emergency state was cancelled.
 * 
 * 3GPP TS 33.108, clause 17.3 and annex B.3.
 * 
 * https://www.3gpp.org/DynaReport/33108.htm
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
 * A group emergency is indicated on the MCPTT group call. Annex B.3 does not
 * define a further procedure for this value.
 * 
 * 3GPP TS 33.108, clause 17.3 and annex B.3.
 * @constant
 * @type {number}
 */
export
const EmergencyGroupState_groupEmergencyState_inForm: EmergencyGroupState_groupEmergencyState = 1; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary inForm
 * @description
 * 
 * MCPTT group emergency is indicated (annex B.3).
 * @constant
 * @type {number}
 */
export
const inForm: EmergencyGroupState_groupEmergencyState = EmergencyGroupState_groupEmergencyState_inForm; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary EmergencyGroupState_groupEmergencyState_reSponse
 * @description
 * 
 * The target responds with the client's current emergency state. Annex B.3 does
 * not define a further procedure for this value.
 * 
 * 3GPP TS 33.108, clause 17.3 and annex B.3.
 * @constant
 * @type {number}
 */
export
const EmergencyGroupState_groupEmergencyState_reSponse: EmergencyGroupState_groupEmergencyState = 2; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary reSponse
 * @description
 * 
 * Target reports the client's emergency state (annex B.3).
 * @constant
 * @type {number}
 */
export
const reSponse: EmergencyGroupState_groupEmergencyState = EmergencyGroupState_groupEmergencyState_reSponse; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary EmergencyGroupState_groupEmergencyState_cancelInform
 * @description
 * 
 * The group-emergency notification is cancelled. Table 17.3.3 reports the group
 * emergency state when it was cancelled. Annex B.3 does not say this value
 * alone is that cancellation.
 * 
 * 3GPP TS 33.108, table 17.3.3 and annex B.3.
 * @constant
 * @type {number}
 */
export
const EmergencyGroupState_groupEmergencyState_cancelInform: EmergencyGroupState_groupEmergencyState = 3; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary cancelInform
 * @description
 * 
 * Group-emergency notification cancelled (table 17.3.3).
 * @constant
 * @type {number}
 */
export
const cancelInform: EmergencyGroupState_groupEmergencyState = EmergencyGroupState_groupEmergencyState_cancelInform; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary EmergencyGroupState_groupEmergencyState_cancelResponse
 * @description
 * 
 * The response to the group emergency is cancelled. Annex B.3 does not define a
 * further procedure for this value.
 * 
 * 3GPP TS 33.108, clause 17.3 and annex B.3.
 * @constant
 * @type {number}
 */
export
const EmergencyGroupState_groupEmergencyState_cancelResponse: EmergencyGroupState_groupEmergencyState = 4; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary cancelResponse
 * @description
 * 
 * Group-emergency response cancelled (annex B.3).
 * @constant
 * @type {number}
 */
export
const cancelResponse: EmergencyGroupState_groupEmergencyState = EmergencyGroupState_groupEmergencyState_cancelResponse; /* SHORT_NAMED_ENUMERATED_VALUE */
export const _decode_EmergencyGroupState_groupEmergencyState: $.ASN1Decoder<EmergencyGroupState_groupEmergencyState> = $._decodeEnumerated;
export const _encode_EmergencyGroupState_groupEmergencyState: $.ASN1Encoder<EmergencyGroupState_groupEmergencyState> = $._encodeEnumerated;


/* eslint-enable */
