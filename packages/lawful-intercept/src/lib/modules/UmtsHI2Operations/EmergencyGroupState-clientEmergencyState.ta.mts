/* eslint-disable */
import {
    type ENUMERATED
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



export
enum _enum_for_EmergencyGroupState_clientEmergencyState {
    inform = 1,
    response = 2,
    cancelInform = 3,
    cancelResponse = 4,
}

/**
 * @summary EmergencyGroupState_clientEmergencyState
 * @description
 * 
 * Client side of an MCPTT emergency call: inform, response, cancellation of the
 * notification, or cancellation of the response.
 * 
 * Annex B.3 says this is the response for the client. It does not define a
 * further procedure for each value. Optional on the emergency-group state; the
 * annex requires at least one of the client state and the group state.
 * 
 * 3GPP TS 33.108, clause 17.3 and annex B.3.
 * 
 * https://www.3gpp.org/DynaReport/33108.htm
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * EmergencyGroupState-clientEmergencyState ::= ENUMERATED {
 *     -- in case of MCPTT call, indicates the response for the client
 *     inform             (1),
 *     response         (2),
 *     cancelInform      (3),
 *     cancelResponse     (4),
 *     ...
 * }
 * ```
 * 
 * @enum {number}
 */
export
type EmergencyGroupState_clientEmergencyState = _enum_for_EmergencyGroupState_clientEmergencyState | ENUMERATED;

/**
 * @summary EmergencyGroupState_clientEmergencyState_inform
 * @description
 * 
 * The MCPTT client is informed of the emergency. Annex B.3 does not define a
 * further procedure for this value.
 * 
 * 3GPP TS 33.108, clause 17.3 and annex B.3.
 * @constant
 * @type {number}
 */
export
const EmergencyGroupState_clientEmergencyState_inform = _enum_for_EmergencyGroupState_clientEmergencyState.inform; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary inform
 * @description
 * 
 * Client informed of the MCPTT emergency (annex B.3).
 * @constant
 * @type {number}
 */
export
const inform = EmergencyGroupState_clientEmergencyState_inform; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary EmergencyGroupState_clientEmergencyState_response
 * @description
 * 
 * The MCPTT client's response to the emergency. Annex B.3 does not define a
 * further procedure for this value.
 * 
 * 3GPP TS 33.108, clause 17.3 and annex B.3.
 * @constant
 * @type {number}
 */
export
const EmergencyGroupState_clientEmergencyState_response = _enum_for_EmergencyGroupState_clientEmergencyState.response; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary response
 * @description
 * 
 * Client response to the MCPTT emergency (annex B.3).
 * @constant
 * @type {number}
 */
export
const response = EmergencyGroupState_clientEmergencyState_response; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary EmergencyGroupState_clientEmergencyState_cancelInform
 * @description
 * 
 * Cancellation of the notification to the MCPTT client. Annex B.3 does not
 * define a further procedure for this value.
 * 
 * 3GPP TS 33.108, clause 17.3 and annex B.3.
 * @constant
 * @type {number}
 */
export
const EmergencyGroupState_clientEmergencyState_cancelInform = _enum_for_EmergencyGroupState_clientEmergencyState.cancelInform; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary cancelInform
 * @description
 * 
 * Cancellation of the client emergency notification (annex B.3).
 * @constant
 * @type {number}
 */
export
const cancelInform = EmergencyGroupState_clientEmergencyState_cancelInform; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary EmergencyGroupState_clientEmergencyState_cancelResponse
 * @description
 * 
 * Cancellation of the MCPTT client's emergency response. Annex B.3 does not
 * define a further procedure for this value.
 * 
 * 3GPP TS 33.108, clause 17.3 and annex B.3.
 * @constant
 * @type {number}
 */
export
const EmergencyGroupState_clientEmergencyState_cancelResponse = _enum_for_EmergencyGroupState_clientEmergencyState.cancelResponse; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary cancelResponse
 * @description
 * 
 * Cancellation of the client emergency response (annex B.3).
 * @constant
 * @type {number}
 */
export
const cancelResponse = EmergencyGroupState_clientEmergencyState_cancelResponse; /* SHORT_NAMED_ENUMERATED_VALUE */
export const _decode_EmergencyGroupState_clientEmergencyState: $.ASN1Decoder<EmergencyGroupState_clientEmergencyState> = $._decodeEnumerated;
export const _encode_EmergencyGroupState_clientEmergencyState: $.ASN1Encoder<EmergencyGroupState_clientEmergencyState> = $._encodeEnumerated;


/* eslint-enable */
