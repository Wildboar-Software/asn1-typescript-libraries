/* eslint-disable */

import * as $ from "@wildboar/asn1/functional";
import { BIT_STRING, ASN1Element as _Element } from "@wildboar/asn1";



/**
 * @summary GetAgentState
 * @description
 * Capability bitmap for the Get Agent State service (ECMA-269 C.14.5, ECMA-285
 * §9.10). Presence of this entry in `LogicalServList` means the SF supports
 * that service. Each set bit is an optional parameter, enumerated value,
 * initial connection state, or miscellaneous characteristic from Annex C.
 *
 * @see {@link https://ecma-international.org/publications-and-standards/standards/ecma-269/}
 *
 * @see {@link https://ecma-international.org/publications-and-standards/standards/ecma-285/}
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * GetAgentState  ::=  BIT STRING
 * {     acdGroup                 ( 0),     -- optional parameters
 *     privateData                 ( 1),     -- optional parameters
 *     agentStateListAgentIDInAck         ( 2),     -- optional parameters
 *     agentGroupInAck             ( 3),     -- optional parameters
 *     pendingAgentStateInAck             ( 4),     -- optional parameters
 *     agentStateConditionForcedPauseInAck     ( 5),     -- optional parameters
 *     agentStateConditionPauseInAck         ( 6),     -- optional parameters
 *     privateDataInAck             ( 7) }
 * ```
 */
export
type GetAgentState = BIT_STRING;

/**
 * @summary GetAgentState_acdGroup
 * @constant
 * @description
 * Bit set means the SF supports the optional `acdGroup` parameter (ECMA-269
 * C.14.5).
 */
export
const GetAgentState_acdGroup: number = 0; /* LONG_NAMED_BIT */

/**
 * @summary acdGroup
 * @constant
 * @description
 * Alias of `GetAgentState_acdGroup`.
 */
export
const acdGroup: number = GetAgentState_acdGroup; /* SHORT_NAMED_BIT */

/**
 * @summary GetAgentState_privateData
 * @constant
 * @description
 * Bit set means the SF supports the optional `privateData` parameter (ECMA-269
 * C.14.5).
 */
export
const GetAgentState_privateData: number = 1; /* LONG_NAMED_BIT */

/**
 * @summary privateData
 * @constant
 * @description
 * Alias of `GetAgentState_privateData`.
 */
export
const privateData: number = GetAgentState_privateData; /* SHORT_NAMED_BIT */

/**
 * @summary GetAgentState_agentStateListAgentIDInAck
 * @constant
 * @description
 * Bit set means the SF supports optional `agentStateListAgentID` in the
 * acknowledgement (ECMA-269 C.14.5).
 */
export
const GetAgentState_agentStateListAgentIDInAck: number = 2; /* LONG_NAMED_BIT */

/**
 * @summary agentStateListAgentIDInAck
 * @constant
 * @description
 * Alias of `GetAgentState_agentStateListAgentIDInAck`.
 */
export
const agentStateListAgentIDInAck: number = GetAgentState_agentStateListAgentIDInAck; /* SHORT_NAMED_BIT */

/**
 * @summary GetAgentState_agentGroupInAck
 * @constant
 * @description
 * Bit set means the SF supports optional `agentGroup` in the acknowledgement
 * (ECMA-269 C.14.5).
 */
export
const GetAgentState_agentGroupInAck: number = 3; /* LONG_NAMED_BIT */

/**
 * @summary agentGroupInAck
 * @constant
 * @description
 * Alias of `GetAgentState_agentGroupInAck`.
 */
export
const agentGroupInAck: number = GetAgentState_agentGroupInAck; /* SHORT_NAMED_BIT */

/**
 * @summary GetAgentState_pendingAgentStateInAck
 * @constant
 * @description
 * Bit set means the SF supports optional `pendingAgentState` in the
 * acknowledgement (ECMA-269 C.14.5).
 */
export
const GetAgentState_pendingAgentStateInAck: number = 4; /* LONG_NAMED_BIT */

/**
 * @summary pendingAgentStateInAck
 * @constant
 * @description
 * Alias of `GetAgentState_pendingAgentStateInAck`.
 */
export
const pendingAgentStateInAck: number = GetAgentState_pendingAgentStateInAck; /* SHORT_NAMED_BIT */

/**
 * @summary GetAgentState_agentStateConditionForcedPauseInAck
 * @constant
 * @description
 * Bit set means the SF supports optional `agentStateConditionForcedPause` in
 * the acknowledgement (ECMA-269 C.14.5).
 */
export
const GetAgentState_agentStateConditionForcedPauseInAck: number = 5; /* LONG_NAMED_BIT */

/**
 * @summary agentStateConditionForcedPauseInAck
 * @constant
 * @description
 * Alias of `GetAgentState_agentStateConditionForcedPauseInAck`.
 */
export
const agentStateConditionForcedPauseInAck: number = GetAgentState_agentStateConditionForcedPauseInAck; /* SHORT_NAMED_BIT */

/**
 * @summary GetAgentState_agentStateConditionPauseInAck
 * @constant
 * @description
 * Bit set means the SF supports optional `agentStateConditionPause` in the
 * acknowledgement (ECMA-269 C.14.5).
 */
export
const GetAgentState_agentStateConditionPauseInAck: number = 6; /* LONG_NAMED_BIT */

/**
 * @summary agentStateConditionPauseInAck
 * @constant
 * @description
 * Alias of `GetAgentState_agentStateConditionPauseInAck`.
 */
export
const agentStateConditionPauseInAck: number = GetAgentState_agentStateConditionPauseInAck; /* SHORT_NAMED_BIT */

/**
 * @summary GetAgentState_privateDataInAck
 * @constant
 * @description
 * Bit set means the SF supports optional `privateData` in the acknowledgement
 * (ECMA-269 C.14.5).
 */
export
const GetAgentState_privateDataInAck: number = 7; /* LONG_NAMED_BIT */

/**
 * @summary privateDataInAck
 * @constant
 * @description
 * Alias of `GetAgentState_privateDataInAck`.
 */
export
const privateDataInAck: number = GetAgentState_privateDataInAck; /* SHORT_NAMED_BIT */

let _cached_decoder_for_GetAgentState: $.ASN1Decoder<GetAgentState> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) GetAgentState
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_GetAgentState (el: _Element): GetAgentState {
    if (!_cached_decoder_for_GetAgentState) { _cached_decoder_for_GetAgentState = $._decodeBitString; }
    return _cached_decoder_for_GetAgentState(el);
}

let _cached_encoder_for_GetAgentState: $.ASN1Encoder<GetAgentState> | null = null;

/**
 * @summary Encodes a(n) GetAgentState into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The GetAgentState, encoded as an ASN.1 Element.
 */
export
function _encode_GetAgentState (value: GetAgentState, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_GetAgentState) { _cached_encoder_for_GetAgentState = $._encodeBitString; }
    return _cached_encoder_for_GetAgentState(value, elGetter);
}


/* eslint-enable */
