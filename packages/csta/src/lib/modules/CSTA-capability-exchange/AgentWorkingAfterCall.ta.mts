/* eslint-disable */

import * as $ from "@wildboar/asn1/functional";
import { BIT_STRING, ASN1Element as _Element } from "@wildboar/asn1";



/**
 * @summary AgentWorkingAfterCall
 * @description
 * Capability bitmap for the Agent Working After Call event (ECMA-269 C.15.6,
 * ECMA-285 §9.10). Presence of this entry in `LogicalEvtsList` means the SF
 * supports that event. Each set bit is an optional parameter, enumerated value,
 * initial connection state, or miscellaneous characteristic from Annex C.
 *
 * @see {@link https://ecma-international.org/publications-and-standards/standards/ecma-269/}
 *
 * @see {@link https://ecma-international.org/publications-and-standards/standards/ecma-285/}
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * AgentWorkingAfterCall  ::=  BIT STRING
 * {     agentID                 ( 0),     -- optional parameters
 *     acdGroup                 ( 1),     -- optional parameters
 *     pendingAgentStateNotReady         ( 2),     -- optional parameters
 *     pendingAgentStateReady             ( 3),     -- optional parameters
 *     pendingAgentStateNull             ( 4),     -- optional parameters
 *     cause                     ( 5),     -- optional parameters
 *     privateData                 ( 6) }
 * ```
 */
export
type AgentWorkingAfterCall = BIT_STRING;

/**
 * @summary AgentWorkingAfterCall_agentID
 * @constant
 * @description
 * Bit set means the SF supports the optional `agentID` parameter (ECMA-269
 * C.15.6).
 */
export
const AgentWorkingAfterCall_agentID: number = 0; /* LONG_NAMED_BIT */

/**
 * @summary agentID
 * @constant
 * @description
 * Alias of `AgentWorkingAfterCall_agentID`.
 */
export
const agentID: number = AgentWorkingAfterCall_agentID; /* SHORT_NAMED_BIT */

/**
 * @summary AgentWorkingAfterCall_acdGroup
 * @constant
 * @description
 * Bit set means the SF supports the optional `acdGroup` parameter (ECMA-269
 * C.15.6).
 */
export
const AgentWorkingAfterCall_acdGroup: number = 1; /* LONG_NAMED_BIT */

/**
 * @summary acdGroup
 * @constant
 * @description
 * Alias of `AgentWorkingAfterCall_acdGroup`.
 */
export
const acdGroup: number = AgentWorkingAfterCall_acdGroup; /* SHORT_NAMED_BIT */

/**
 * @summary AgentWorkingAfterCall_pendingAgentStateNotReady
 * @constant
 * @description
 * Bit set means the SF supports optional pending agent state `notReady`
 * (ECMA-269 C.15.6).
 */
export
const AgentWorkingAfterCall_pendingAgentStateNotReady: number = 2; /* LONG_NAMED_BIT */

/**
 * @summary pendingAgentStateNotReady
 * @constant
 * @description
 * Alias of `AgentWorkingAfterCall_pendingAgentStateNotReady`.
 */
export
const pendingAgentStateNotReady: number = AgentWorkingAfterCall_pendingAgentStateNotReady; /* SHORT_NAMED_BIT */

/**
 * @summary AgentWorkingAfterCall_pendingAgentStateReady
 * @constant
 * @description
 * Bit set means the SF supports optional pending agent state `ready` (ECMA-269
 * C.15.6).
 */
export
const AgentWorkingAfterCall_pendingAgentStateReady: number = 3; /* LONG_NAMED_BIT */

/**
 * @summary pendingAgentStateReady
 * @constant
 * @description
 * Alias of `AgentWorkingAfterCall_pendingAgentStateReady`.
 */
export
const pendingAgentStateReady: number = AgentWorkingAfterCall_pendingAgentStateReady; /* SHORT_NAMED_BIT */

/**
 * @summary AgentWorkingAfterCall_pendingAgentStateNull
 * @constant
 * @description
 * Bit set means the SF supports optional pending agent state `null` (ECMA-269
 * C.15.6).
 */
export
const AgentWorkingAfterCall_pendingAgentStateNull: number = 4; /* LONG_NAMED_BIT */

/**
 * @summary pendingAgentStateNull
 * @constant
 * @description
 * Alias of `AgentWorkingAfterCall_pendingAgentStateNull`.
 */
export
const pendingAgentStateNull: number = AgentWorkingAfterCall_pendingAgentStateNull; /* SHORT_NAMED_BIT */

/**
 * @summary AgentWorkingAfterCall_cause
 * @constant
 * @description
 * Bit set means the SF supports the optional `cause` parameter (ECMA-269
 * C.15.6).
 */
export
const AgentWorkingAfterCall_cause: number = 5; /* LONG_NAMED_BIT */

/**
 * @summary cause
 * @constant
 * @description
 * Alias of `AgentWorkingAfterCall_cause`.
 */
export
const cause: number = AgentWorkingAfterCall_cause; /* SHORT_NAMED_BIT */

/**
 * @summary AgentWorkingAfterCall_privateData
 * @constant
 * @description
 * Bit set means the SF supports the optional `privateData` parameter (ECMA-269
 * C.15.6).
 */
export
const AgentWorkingAfterCall_privateData: number = 6; /* LONG_NAMED_BIT */

/**
 * @summary privateData
 * @constant
 * @description
 * Alias of `AgentWorkingAfterCall_privateData`.
 */
export
const privateData: number = AgentWorkingAfterCall_privateData; /* SHORT_NAMED_BIT */

let _cached_decoder_for_AgentWorkingAfterCall: $.ASN1Decoder<AgentWorkingAfterCall> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) AgentWorkingAfterCall
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_AgentWorkingAfterCall (el: _Element): AgentWorkingAfterCall {
    if (!_cached_decoder_for_AgentWorkingAfterCall) { _cached_decoder_for_AgentWorkingAfterCall = $._decodeBitString; }
    return _cached_decoder_for_AgentWorkingAfterCall(el);
}

let _cached_encoder_for_AgentWorkingAfterCall: $.ASN1Encoder<AgentWorkingAfterCall> | null = null;

/**
 * @summary Encodes a(n) AgentWorkingAfterCall into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The AgentWorkingAfterCall, encoded as an ASN.1 Element.
 */
export
function _encode_AgentWorkingAfterCall (value: AgentWorkingAfterCall, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_AgentWorkingAfterCall) { _cached_encoder_for_AgentWorkingAfterCall = $._encodeBitString; }
    return _cached_encoder_for_AgentWorkingAfterCall(value, elGetter);
}


/* eslint-enable */
