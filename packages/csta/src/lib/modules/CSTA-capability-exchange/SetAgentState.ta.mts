/* eslint-disable */

import * as $ from "@wildboar/asn1/functional";
import { BIT_STRING, ASN1Element as _Element } from "@wildboar/asn1";



/**
 * @summary SetAgentState
 * @description
 * Capability bitmap for the Set Agent State service (ECMA-269 C.14.15, ECMA-285
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
 * SetAgentState  ::=  BIT STRING
 * {     requestedAgentStateLoggedOn         ( 0),     -- optional parameters
 *     requestedAgentStateLoggedOff         ( 1),     -- optional parameters
 *     requestedAgentStateNotReady         ( 2),     -- optional parameters
 *     requestedAgentStateReady         ( 3),     -- optional parameters
 *     requestedAgentStateWorkingAfterCall     ( 4),     -- optional parameters
 *     agentID                 ( 5),     -- optional parameters
 *     password                 ( 6),     -- optional parameters
 *     group                     ( 7),     -- optional parameters
 *     privateData                 ( 8),     -- optional parameters
 *     pendingAgentStateWorkingAfterCallInAck    ( 9),     -- optional parameters
 *     pendingAgentStateNotReadyInAck         (10),     -- optional parameters
 *     pendingAgentStateNullInAck         (11),     -- optional parameters
 *     privateDataInAck             (12),     -- optional parameters
 *     ackModelMultiStep             (13),     -- misc characteristics
 *     groupDeviceAllowedInReq         (14),     -- misc characteristics
 *     aCDDeviceAllowedInReq             (15),     -- misc characteristics
 *     delayTransitionIfBusy             (16),     -- misc characteristics
 *     delayTransitionIfWorkingAfterCall     (17) }
 * ```
 */
export
type SetAgentState = BIT_STRING;

/**
 * @summary SetAgentState_requestedAgentStateLoggedOn
 * @constant
 * @description
 * Bit set means the SF supports listed in this capability bitmap without a
 * separate Annex C prose gloss (ECMA-269 C.14.15).
 */
export
const SetAgentState_requestedAgentStateLoggedOn: number = 0; /* LONG_NAMED_BIT */

/**
 * @summary requestedAgentStateLoggedOn
 * @constant
 * @description
 * Alias of `SetAgentState_requestedAgentStateLoggedOn`.
 */
export
const requestedAgentStateLoggedOn: number = SetAgentState_requestedAgentStateLoggedOn; /* SHORT_NAMED_BIT */

/**
 * @summary SetAgentState_requestedAgentStateLoggedOff
 * @constant
 * @description
 * Bit set means the SF supports listed in this capability bitmap without a
 * separate Annex C prose gloss (ECMA-269 C.14.15).
 */
export
const SetAgentState_requestedAgentStateLoggedOff: number = 1; /* LONG_NAMED_BIT */

/**
 * @summary requestedAgentStateLoggedOff
 * @constant
 * @description
 * Alias of `SetAgentState_requestedAgentStateLoggedOff`.
 */
export
const requestedAgentStateLoggedOff: number = SetAgentState_requestedAgentStateLoggedOff; /* SHORT_NAMED_BIT */

/**
 * @summary SetAgentState_requestedAgentStateNotReady
 * @constant
 * @description
 * Bit set means the SF supports listed in this capability bitmap without a
 * separate Annex C prose gloss (ECMA-269 C.14.15).
 */
export
const SetAgentState_requestedAgentStateNotReady: number = 2; /* LONG_NAMED_BIT */

/**
 * @summary requestedAgentStateNotReady
 * @constant
 * @description
 * Alias of `SetAgentState_requestedAgentStateNotReady`.
 */
export
const requestedAgentStateNotReady: number = SetAgentState_requestedAgentStateNotReady; /* SHORT_NAMED_BIT */

/**
 * @summary SetAgentState_requestedAgentStateReady
 * @constant
 * @description
 * Bit set means the SF supports listed in this capability bitmap without a
 * separate Annex C prose gloss (ECMA-269 C.14.15).
 */
export
const SetAgentState_requestedAgentStateReady: number = 3; /* LONG_NAMED_BIT */

/**
 * @summary requestedAgentStateReady
 * @constant
 * @description
 * Alias of `SetAgentState_requestedAgentStateReady`.
 */
export
const requestedAgentStateReady: number = SetAgentState_requestedAgentStateReady; /* SHORT_NAMED_BIT */

/**
 * @summary SetAgentState_requestedAgentStateWorkingAfterCall
 * @constant
 * @description
 * Bit set means the SF supports listed in this capability bitmap without a
 * separate Annex C prose gloss (ECMA-269 C.14.15).
 */
export
const SetAgentState_requestedAgentStateWorkingAfterCall: number = 4; /* LONG_NAMED_BIT */

/**
 * @summary requestedAgentStateWorkingAfterCall
 * @constant
 * @description
 * Alias of `SetAgentState_requestedAgentStateWorkingAfterCall`.
 */
export
const requestedAgentStateWorkingAfterCall: number = SetAgentState_requestedAgentStateWorkingAfterCall; /* SHORT_NAMED_BIT */

/**
 * @summary SetAgentState_agentID
 * @constant
 * @description
 * Bit set means the SF supports the optional `agentID` parameter (ECMA-269
 * C.14.15).
 */
export
const SetAgentState_agentID: number = 5; /* LONG_NAMED_BIT */

/**
 * @summary agentID
 * @constant
 * @description
 * Alias of `SetAgentState_agentID`.
 */
export
const agentID: number = SetAgentState_agentID; /* SHORT_NAMED_BIT */

/**
 * @summary SetAgentState_password
 * @constant
 * @description
 * Bit set means the SF supports listed in this capability bitmap without a
 * separate Annex C prose gloss (ECMA-269 C.14.15).
 */
export
const SetAgentState_password: number = 6; /* LONG_NAMED_BIT */

/**
 * @summary password
 * @constant
 * @description
 * Alias of `SetAgentState_password`.
 */
export
const password: number = SetAgentState_password; /* SHORT_NAMED_BIT */

/**
 * @summary SetAgentState_group
 * @constant
 * @description
 * Bit set means the SF supports listed in this capability bitmap without a
 * separate Annex C prose gloss (ECMA-269 C.14.15).
 */
export
const SetAgentState_group: number = 7; /* LONG_NAMED_BIT */

/**
 * @summary group
 * @constant
 * @description
 * Alias of `SetAgentState_group`.
 */
export
const group: number = SetAgentState_group; /* SHORT_NAMED_BIT */

/**
 * @summary SetAgentState_privateData
 * @constant
 * @description
 * Bit set means the SF supports the optional `privateData` parameter (ECMA-269
 * C.14.15).
 */
export
const SetAgentState_privateData: number = 8; /* LONG_NAMED_BIT */

/**
 * @summary privateData
 * @constant
 * @description
 * Alias of `SetAgentState_privateData`.
 */
export
const privateData: number = SetAgentState_privateData; /* SHORT_NAMED_BIT */

/**
 * @summary SetAgentState_pendingAgentStateWorkingAfterCallInAck
 * @constant
 * @description
 * Bit set means the SF supports optional `pendingAgentStateWorkingAfterCall` in
 * the acknowledgement (ECMA-269 C.14.15).
 */
export
const SetAgentState_pendingAgentStateWorkingAfterCallInAck: number = 9; /* LONG_NAMED_BIT */

/**
 * @summary pendingAgentStateWorkingAfterCallInAck
 * @constant
 * @description
 * Alias of `SetAgentState_pendingAgentStateWorkingAfterCallInAck`.
 */
export
const pendingAgentStateWorkingAfterCallInAck: number = SetAgentState_pendingAgentStateWorkingAfterCallInAck; /* SHORT_NAMED_BIT */

/**
 * @summary SetAgentState_pendingAgentStateNotReadyInAck
 * @constant
 * @description
 * Bit set means the SF supports optional `pendingAgentStateNotReady` in the
 * acknowledgement (ECMA-269 C.14.15).
 */
export
const SetAgentState_pendingAgentStateNotReadyInAck: number = 10; /* LONG_NAMED_BIT */

/**
 * @summary pendingAgentStateNotReadyInAck
 * @constant
 * @description
 * Alias of `SetAgentState_pendingAgentStateNotReadyInAck`.
 */
export
const pendingAgentStateNotReadyInAck: number = SetAgentState_pendingAgentStateNotReadyInAck; /* SHORT_NAMED_BIT */

/**
 * @summary SetAgentState_pendingAgentStateNullInAck
 * @constant
 * @description
 * Bit set means the SF supports optional `pendingAgentStateNull` in the
 * acknowledgement (ECMA-269 C.14.15).
 */
export
const SetAgentState_pendingAgentStateNullInAck: number = 11; /* LONG_NAMED_BIT */

/**
 * @summary pendingAgentStateNullInAck
 * @constant
 * @description
 * Alias of `SetAgentState_pendingAgentStateNullInAck`.
 */
export
const pendingAgentStateNullInAck: number = SetAgentState_pendingAgentStateNullInAck; /* SHORT_NAMED_BIT */

/**
 * @summary SetAgentState_privateDataInAck
 * @constant
 * @description
 * Bit set means the SF supports optional `privateData` in the acknowledgement
 * (ECMA-269 C.14.15).
 */
export
const SetAgentState_privateDataInAck: number = 12; /* LONG_NAMED_BIT */

/**
 * @summary privateDataInAck
 * @constant
 * @description
 * Alias of `SetAgentState_privateDataInAck`.
 */
export
const privateDataInAck: number = SetAgentState_privateDataInAck; /* SHORT_NAMED_BIT */

/**
 * @summary SetAgentState_ackModelMultiStep
 * @constant
 * @description
 * Bit set means the SF supports the multi-step positive acknowledgement model
 * (ECMA-269 C.14.15).
 */
export
const SetAgentState_ackModelMultiStep: number = 13; /* LONG_NAMED_BIT */

/**
 * @summary ackModelMultiStep
 * @constant
 * @description
 * Alias of `SetAgentState_ackModelMultiStep`.
 */
export
const ackModelMultiStep: number = SetAgentState_ackModelMultiStep; /* SHORT_NAMED_BIT */

/**
 * @summary SetAgentState_groupDeviceAllowedInReq
 * @constant
 * @description
 * Bit set means the SF supports optional `groupDeviceAllowed` in the service
 * request (ECMA-269 C.14.15).
 */
export
const SetAgentState_groupDeviceAllowedInReq: number = 14; /* LONG_NAMED_BIT */

/**
 * @summary groupDeviceAllowedInReq
 * @constant
 * @description
 * Alias of `SetAgentState_groupDeviceAllowedInReq`.
 */
export
const groupDeviceAllowedInReq: number = SetAgentState_groupDeviceAllowedInReq; /* SHORT_NAMED_BIT */

/**
 * @summary SetAgentState_aCDDeviceAllowedInReq
 * @constant
 * @description
 * Bit set means the SF supports optional `aCDDeviceAllowed` in the service
 * request (ECMA-269 C.14.15).
 */
export
const SetAgentState_aCDDeviceAllowedInReq: number = 15; /* LONG_NAMED_BIT */

/**
 * @summary aCDDeviceAllowedInReq
 * @constant
 * @description
 * Alias of `SetAgentState_aCDDeviceAllowedInReq`.
 */
export
const aCDDeviceAllowedInReq: number = SetAgentState_aCDDeviceAllowedInReq; /* SHORT_NAMED_BIT */

/**
 * @summary SetAgentState_delayTransitionIfBusy
 * @constant
 * @description
 * Bit set means the SF supports listed in this capability bitmap without a
 * separate Annex C prose gloss (ECMA-269 C.14.15).
 */
export
const SetAgentState_delayTransitionIfBusy: number = 16; /* LONG_NAMED_BIT */

/**
 * @summary delayTransitionIfBusy
 * @constant
 * @description
 * Alias of `SetAgentState_delayTransitionIfBusy`.
 */
export
const delayTransitionIfBusy: number = SetAgentState_delayTransitionIfBusy; /* SHORT_NAMED_BIT */

/**
 * @summary SetAgentState_delayTransitionIfWorkingAfterCall
 * @constant
 * @description
 * Bit set means the SF supports listed in this capability bitmap without a
 * separate Annex C prose gloss (ECMA-269 C.14.15).
 */
export
const SetAgentState_delayTransitionIfWorkingAfterCall: number = 17; /* LONG_NAMED_BIT */

/**
 * @summary delayTransitionIfWorkingAfterCall
 * @constant
 * @description
 * Alias of `SetAgentState_delayTransitionIfWorkingAfterCall`.
 */
export
const delayTransitionIfWorkingAfterCall: number = SetAgentState_delayTransitionIfWorkingAfterCall; /* SHORT_NAMED_BIT */

let _cached_decoder_for_SetAgentState: $.ASN1Decoder<SetAgentState> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) SetAgentState
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_SetAgentState (el: _Element): SetAgentState {
    if (!_cached_decoder_for_SetAgentState) { _cached_decoder_for_SetAgentState = $._decodeBitString; }
    return _cached_decoder_for_SetAgentState(el);
}

let _cached_encoder_for_SetAgentState: $.ASN1Encoder<SetAgentState> | null = null;

/**
 * @summary Encodes a(n) SetAgentState into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The SetAgentState, encoded as an ASN.1 Element.
 */
export
function _encode_SetAgentState (value: SetAgentState, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_SetAgentState) { _cached_encoder_for_SetAgentState = $._encodeBitString; }
    return _cached_encoder_for_SetAgentState(value, elGetter);
}


/* eslint-enable */
