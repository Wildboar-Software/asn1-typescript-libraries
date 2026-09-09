/* eslint-disable */

import * as $ from "@wildboar/asn1/functional";
import { BIT_STRING, ASN1Element as _Element } from "@wildboar/asn1";



/**
 * @summary AgentWorkingAfterCall
 * @description
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
 */
export
const AgentWorkingAfterCall_agentID: number = 0; /* LONG_NAMED_BIT */

/**
 * @summary agentID
 * @constant
 */
export
const agentID: number = AgentWorkingAfterCall_agentID; /* SHORT_NAMED_BIT */

/**
 * @summary AgentWorkingAfterCall_acdGroup
 * @constant
 */
export
const AgentWorkingAfterCall_acdGroup: number = 1; /* LONG_NAMED_BIT */

/**
 * @summary acdGroup
 * @constant
 */
export
const acdGroup: number = AgentWorkingAfterCall_acdGroup; /* SHORT_NAMED_BIT */

/**
 * @summary AgentWorkingAfterCall_pendingAgentStateNotReady
 * @constant
 */
export
const AgentWorkingAfterCall_pendingAgentStateNotReady: number = 2; /* LONG_NAMED_BIT */

/**
 * @summary pendingAgentStateNotReady
 * @constant
 */
export
const pendingAgentStateNotReady: number = AgentWorkingAfterCall_pendingAgentStateNotReady; /* SHORT_NAMED_BIT */

/**
 * @summary AgentWorkingAfterCall_pendingAgentStateReady
 * @constant
 */
export
const AgentWorkingAfterCall_pendingAgentStateReady: number = 3; /* LONG_NAMED_BIT */

/**
 * @summary pendingAgentStateReady
 * @constant
 */
export
const pendingAgentStateReady: number = AgentWorkingAfterCall_pendingAgentStateReady; /* SHORT_NAMED_BIT */

/**
 * @summary AgentWorkingAfterCall_pendingAgentStateNull
 * @constant
 */
export
const AgentWorkingAfterCall_pendingAgentStateNull: number = 4; /* LONG_NAMED_BIT */

/**
 * @summary pendingAgentStateNull
 * @constant
 */
export
const pendingAgentStateNull: number = AgentWorkingAfterCall_pendingAgentStateNull; /* SHORT_NAMED_BIT */

/**
 * @summary AgentWorkingAfterCall_cause
 * @constant
 */
export
const AgentWorkingAfterCall_cause: number = 5; /* LONG_NAMED_BIT */

/**
 * @summary cause
 * @constant
 */
export
const cause: number = AgentWorkingAfterCall_cause; /* SHORT_NAMED_BIT */

/**
 * @summary AgentWorkingAfterCall_privateData
 * @constant
 */
export
const AgentWorkingAfterCall_privateData: number = 6; /* LONG_NAMED_BIT */

/**
 * @summary privateData
 * @constant
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
