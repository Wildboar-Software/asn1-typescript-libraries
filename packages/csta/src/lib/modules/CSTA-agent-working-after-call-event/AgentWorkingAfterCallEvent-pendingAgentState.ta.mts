/* eslint-disable */

import * as $ from "@wildboar/asn1/functional";
import { ENUMERATED, ASN1Element as _Element } from "@wildboar/asn1";



/**
 * @summary AgentWorkingAfterCallEvent_pendingAgentState
 * @description
 *
 * Pending state after Working After Call (ECMA-269 §22.2.6.1): notReady, ready,
 * or null_.
 *
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-269/
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-285/
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * AgentWorkingAfterCallEvent_pendingAgentState ::= ENUMERATED {
 *     notReady (0),
 *     ready (1),
 *     null_ (2)
 * }
 * ```
 * 
 * @enum {number}
 */
export
enum _enum_for_AgentWorkingAfterCallEvent_pendingAgentState {
    notReady = 0,
    ready = 1,
    null_ = 2,
}

/**
 * @summary AgentWorkingAfterCallEvent_pendingAgentState
 * @description
 *
 * Pending state after Working After Call (ECMA-269 §22.2.6.1): notReady, ready,
 * or null_.
 *
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-269/
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-285/
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * AgentWorkingAfterCallEvent_pendingAgentState ::= ENUMERATED {
 *     notReady (0),
 *     ready (1),
 *     null_ (2)
 * }
 * ```
 * 
 * @enum {number}
 */
export
type AgentWorkingAfterCallEvent_pendingAgentState = _enum_for_AgentWorkingAfterCallEvent_pendingAgentState;

/**
 * @summary AgentWorkingAfterCallEvent_pendingAgentState
 * @description
 *
 * Pending state after Working After Call (ECMA-269 §22.2.6.1): notReady, ready,
 * or null_.
 *
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-269/
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-285/
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * AgentWorkingAfterCallEvent_pendingAgentState ::= ENUMERATED {
 *     notReady (0),
 *     ready (1),
 *     null_ (2)
 * }
 * ```
 * 
 * @enum {number}
 */
export
const AgentWorkingAfterCallEvent_pendingAgentState = _enum_for_AgentWorkingAfterCallEvent_pendingAgentState;

/**
 * @summary AgentWorkingAfterCallEvent_pendingAgentState_notReady
 * @description
 *
 * Transition to Not Ready.
 * @constant
 * @type {number}
 */
export
const AgentWorkingAfterCallEvent_pendingAgentState_notReady: AgentWorkingAfterCallEvent_pendingAgentState = AgentWorkingAfterCallEvent_pendingAgentState.notReady; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary notReady
 * @constant
 * @type {number}
 */
export
const notReady: AgentWorkingAfterCallEvent_pendingAgentState = AgentWorkingAfterCallEvent_pendingAgentState.notReady; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary AgentWorkingAfterCallEvent_pendingAgentState_ready
 * @description
 *
 * Transition to Ready.
 * @constant
 * @type {number}
 */
export
const AgentWorkingAfterCallEvent_pendingAgentState_ready: AgentWorkingAfterCallEvent_pendingAgentState = AgentWorkingAfterCallEvent_pendingAgentState.ready; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary ready
 * @constant
 * @type {number}
 */
export
const ready: AgentWorkingAfterCallEvent_pendingAgentState = AgentWorkingAfterCallEvent_pendingAgentState.ready; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary AgentWorkingAfterCallEvent_pendingAgentState_null_
 * @description
 *
 * Transition to Null.
 * @constant
 * @type {number}
 */
export
const AgentWorkingAfterCallEvent_pendingAgentState_null_: AgentWorkingAfterCallEvent_pendingAgentState = AgentWorkingAfterCallEvent_pendingAgentState.null_; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary null_
 * @constant
 * @type {number}
 */
export
const null_: AgentWorkingAfterCallEvent_pendingAgentState = AgentWorkingAfterCallEvent_pendingAgentState.null_; /* SHORT_NAMED_ENUMERATED_VALUE */

let _cached_decoder_for_AgentWorkingAfterCallEvent_pendingAgentState: $.ASN1Decoder<AgentWorkingAfterCallEvent_pendingAgentState> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) AgentWorkingAfterCallEvent_pendingAgentState
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_AgentWorkingAfterCallEvent_pendingAgentState (el: _Element): AgentWorkingAfterCallEvent_pendingAgentState {
    if (!_cached_decoder_for_AgentWorkingAfterCallEvent_pendingAgentState) { _cached_decoder_for_AgentWorkingAfterCallEvent_pendingAgentState = $._decodeEnumerated; }
    return _cached_decoder_for_AgentWorkingAfterCallEvent_pendingAgentState(el);
}

let _cached_encoder_for_AgentWorkingAfterCallEvent_pendingAgentState: $.ASN1Encoder<AgentWorkingAfterCallEvent_pendingAgentState> | null = null;

/**
 * @summary Encodes a(n) AgentWorkingAfterCallEvent_pendingAgentState into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The AgentWorkingAfterCallEvent_pendingAgentState, encoded as an ASN.1 Element.
 */
export
function _encode_AgentWorkingAfterCallEvent_pendingAgentState (value: AgentWorkingAfterCallEvent_pendingAgentState, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_AgentWorkingAfterCallEvent_pendingAgentState) { _cached_encoder_for_AgentWorkingAfterCallEvent_pendingAgentState = $._encodeEnumerated; }
    return _cached_encoder_for_AgentWorkingAfterCallEvent_pendingAgentState(value, elGetter);
}


/* eslint-enable */
