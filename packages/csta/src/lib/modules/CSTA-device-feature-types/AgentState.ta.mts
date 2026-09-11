/* eslint-disable */

import * as $ from "@wildboar/asn1/functional";
import { ENUMERATED, ASN1Element as _Element } from "@wildboar/asn1";



/**
 * @summary AgentState
 * @description
 *
 * Agent state relative to an ACD device or ACD group. An agent may have several
 * states across groups, or one state for all. This Standard does not restrict
 * transitions; unsupported ones are rejected on Set Agent State. ECMA-269
 * §6.1.1.6.4, §22.
 *
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-269/
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * AgentState  ::=  ENUMERATED
 * {    agentNotReady             (0),
 *     agentNull             (1),
 *     agentReady             (2),
 *     agentBusy             (3),
 *     agentWorkingAfterCall         (4) }
 * ```
 * 
 * @enum {number}
 */
export
enum _enum_for_AgentState {
    agentNotReady = 0,
    agentNull = 1,
    agentReady = 2,
    agentBusy = 3,
    agentWorkingAfterCall = 4,
}

/**
 * @summary AgentState
 * @description
 *
 * Agent state relative to an ACD device or ACD group. An agent may have several
 * states across groups, or one state for all. This Standard does not restrict
 * transitions; unsupported ones are rejected on Set Agent State. ECMA-269
 * §6.1.1.6.4, §22.
 *
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-269/
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * AgentState  ::=  ENUMERATED
 * {    agentNotReady             (0),
 *     agentNull             (1),
 *     agentReady             (2),
 *     agentBusy             (3),
 *     agentWorkingAfterCall         (4) }
 * ```
 * 
 * @enum {number}
 */
export
type AgentState = _enum_for_AgentState;

/**
 * @summary AgentState
 * @description
 *
 * Agent state relative to an ACD device or ACD group. An agent may have several
 * states across groups, or one state for all. This Standard does not restrict
 * transitions; unsupported ones are rejected on Set Agent State. ECMA-269
 * §6.1.1.6.4, §22.
 *
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-269/
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * AgentState  ::=  ENUMERATED
 * {    agentNotReady             (0),
 *     agentNull             (1),
 *     agentReady             (2),
 *     agentBusy             (3),
 *     agentWorkingAfterCall         (4) }
 * ```
 * 
 * @enum {number}
 */
export
const AgentState = _enum_for_AgentState;

/**
 * @summary AgentState_agentNotReady
 * @description
 * Logged on to an ACD device or group but not prepared to handle
 * ACD-distributed calls. Non-ACD calls may still be received. Entry event:
 * Agent Not Ready. ECMA-269 §6.1.1.6.4.
 * @constant
 * @type {number}
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-269/
 */
export
const AgentState_agentNotReady: AgentState = AgentState.agentNotReady; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary agentNotReady
 * @description Alias of {@link AgentState_agentNotReady}.
 * @constant
 * @type {number}
 */
export
const agentNotReady: AgentState = AgentState.agentNotReady; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary AgentState_agentNull
 * @description
 * Not logged on to the ACD device or group at this device. Entry event: Agent
 * Logged Off. ECMA-269 §6.1.1.6.4.
 * @constant
 * @type {number}
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-269/
 */
export
const AgentState_agentNull: AgentState = AgentState.agentNull; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary agentNull
 * @description Alias of {@link AgentState_agentNull}.
 * @constant
 * @type {number}
 */
export
const agentNull: AgentState = AgentState.agentNull; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary AgentState_agentReady
 * @description
 * Logged on and prepared to handle ACD calls, even if involved with non-ACD
 * calls. Entry event: Agent Ready. ECMA-269 §6.1.1.6.4.
 * @constant
 * @type {number}
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-269/
 */
export
const AgentState_agentReady: AgentState = AgentState.agentReady; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary agentReady
 * @description Alias of {@link AgentState_agentReady}.
 * @constant
 * @type {number}
 */
export
const agentReady: AgentState = AgentState.agentReady; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary AgentState_agentBusy
 * @description
 * Involved with an existing ACD call at the device, including a call on hold.
 * Entry event: Agent Busy. ECMA-269 §6.1.1.6.4.
 * @constant
 * @type {number}
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-269/
 */
export
const AgentState_agentBusy: AgentState = AgentState.agentBusy; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary agentBusy
 * @description Alias of {@link AgentState_agentBusy}.
 * @constant
 * @type {number}
 */
export
const agentBusy: AgentState = AgentState.agentBusy; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary AgentState_agentWorkingAfterCall
 * @description
 * No longer connected to an ACD call but still occupied with work related to a
 * previous ACD call. Cannot receive ACD calls. Entry event: Agent Working After
 * Call. ECMA-269 §6.1.1.6.4.
 * @constant
 * @type {number}
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-269/
 */
export
const AgentState_agentWorkingAfterCall: AgentState = AgentState.agentWorkingAfterCall; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary agentWorkingAfterCall
 * @description Alias of {@link AgentState_agentWorkingAfterCall}.
 * @constant
 * @type {number}
 */
export
const agentWorkingAfterCall: AgentState = AgentState.agentWorkingAfterCall; /* SHORT_NAMED_ENUMERATED_VALUE */

let _cached_decoder_for_AgentState: $.ASN1Decoder<AgentState> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) AgentState
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_AgentState (el: _Element): AgentState {
    if (!_cached_decoder_for_AgentState) { _cached_decoder_for_AgentState = $._decodeEnumerated; }
    return _cached_decoder_for_AgentState(el);
}

let _cached_encoder_for_AgentState: $.ASN1Encoder<AgentState> | null = null;

/**
 * @summary Encodes a(n) AgentState into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The AgentState, encoded as an ASN.1 Element.
 */
export
function _encode_AgentState (value: AgentState, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_AgentState) { _cached_encoder_for_AgentState = $._encodeEnumerated; }
    return _cached_encoder_for_AgentState(value, elGetter);
}


/* eslint-enable */
