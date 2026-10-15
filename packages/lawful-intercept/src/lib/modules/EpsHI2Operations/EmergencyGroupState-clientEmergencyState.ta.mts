/* eslint-disable */
import {
    ENUMERATED
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
 * How an MCPTT client call is answering an emergency: inform, response, or the
 * cancel of either (module comment). At least one of the client state and the
 * group state is present on the emergency group state (module comment on that
 * structure). 3GPP TS 33.108 (https://www.3gpp.org/DynaReport/33108.htm).
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
 * The MCPTT client is informed of the emergency (module comment).
 * 
 * @constant
 * @type {number}
 */
export
const EmergencyGroupState_clientEmergencyState_inform: EmergencyGroupState_clientEmergencyState = 1; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary inform
 * @description
 * 
 * Client is informed of the emergency.
 * 
 * @constant
 * @type {number}
 */
export
const inform: EmergencyGroupState_clientEmergencyState = EmergencyGroupState_clientEmergencyState_inform; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary EmergencyGroupState_clientEmergencyState_response
 * @description
 * 
 * The MCPTT client is responding to the emergency (module comment).
 * 
 * @constant
 * @type {number}
 */
export
const EmergencyGroupState_clientEmergencyState_response: EmergencyGroupState_clientEmergencyState = 2; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary response
 * @description
 * 
 * Client is responding to the emergency.
 * 
 * @constant
 * @type {number}
 */
export
const response: EmergencyGroupState_clientEmergencyState = EmergencyGroupState_clientEmergencyState_response; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary EmergencyGroupState_clientEmergencyState_cancelInform
 * @description
 * 
 * The MCPTT client emergency inform is cancelled (module comment).
 * 
 * @constant
 * @type {number}
 */
export
const EmergencyGroupState_clientEmergencyState_cancelInform: EmergencyGroupState_clientEmergencyState = 3; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary cancelInform
 * @description
 * 
 * Client emergency inform is cancelled.
 * 
 * @constant
 * @type {number}
 */
export
const cancelInform: EmergencyGroupState_clientEmergencyState = EmergencyGroupState_clientEmergencyState_cancelInform; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary EmergencyGroupState_clientEmergencyState_cancelResponse
 * @description
 * 
 * The MCPTT client emergency response is cancelled (module comment).
 * 
 * @constant
 * @type {number}
 */
export
const EmergencyGroupState_clientEmergencyState_cancelResponse: EmergencyGroupState_clientEmergencyState = 4; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary cancelResponse
 * @description
 * 
 * Client emergency response is cancelled.
 * 
 * @constant
 * @type {number}
 */
export
const cancelResponse: EmergencyGroupState_clientEmergencyState = EmergencyGroupState_clientEmergencyState_cancelResponse; /* SHORT_NAMED_ENUMERATED_VALUE */
export const _decode_EmergencyGroupState_clientEmergencyState: $.ASN1Decoder<EmergencyGroupState_clientEmergencyState> = $._decodeEnumerated;
export const _encode_EmergencyGroupState_clientEmergencyState: $.ASN1Encoder<EmergencyGroupState_clientEmergencyState> = $._encodeEnumerated;


/* eslint-enable */
