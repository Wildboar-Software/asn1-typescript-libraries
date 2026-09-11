/* eslint-disable */

import * as $ from "@wildboar/asn1/functional";
import { ENUMERATED, ASN1Element as _Element } from "@wildboar/asn1";



/**
 * @summary ReqAgentState
 * @description
 *
 * Requested agent state for Set Agent State (ECMA-269 §22.1.15.1). Distinct
 * from Get's `agentState` (no Busy).
 *
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-269/
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-285/
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ReqAgentState  ::=  ENUMERATED
 * {    loggedOn            (0),
 *     loggedOff            (1),
 *     notReady            (2),
 *     ready                (3),
 *     workingAfterCall        (4) }
 * ```
 * 
 * @enum {number}
 */
export
enum _enum_for_ReqAgentState {
    loggedOn = 0,
    loggedOff = 1,
    notReady = 2,
    ready = 3,
    workingAfterCall = 4,
}

/**
 * @summary ReqAgentState
 * @description
 *
 * Requested agent state for Set Agent State (ECMA-269 §22.1.15.1). Distinct
 * from Get's `agentState` (no Busy).
 *
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-269/
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-285/
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ReqAgentState  ::=  ENUMERATED
 * {    loggedOn            (0),
 *     loggedOff            (1),
 *     notReady            (2),
 *     ready                (3),
 *     workingAfterCall        (4) }
 * ```
 * 
 * @enum {number}
 */
export
type ReqAgentState = _enum_for_ReqAgentState;

/**
 * @summary ReqAgentState
 * @description
 *
 * Requested agent state for Set Agent State (ECMA-269 §22.1.15.1). Distinct
 * from Get's `agentState` (no Busy).
 *
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-269/
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-285/
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ReqAgentState  ::=  ENUMERATED
 * {    loggedOn            (0),
 *     loggedOff            (1),
 *     notReady            (2),
 *     ready                (3),
 *     workingAfterCall        (4) }
 * ```
 * 
 * @enum {number}
 */
export
const ReqAgentState = _enum_for_ReqAgentState;

/**
 * @summary ReqAgentState_loggedOn
 * @description
 *
 * Request that the agent be logged on.
 * @constant
 * @type {number}
 */
export
const ReqAgentState_loggedOn: ReqAgentState = ReqAgentState.loggedOn; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary loggedOn
 * @constant
 * @type {number}
 */
export
const loggedOn: ReqAgentState = ReqAgentState.loggedOn; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary ReqAgentState_loggedOff
 * @description
 *
 * Request that the agent be logged off.
 * @constant
 * @type {number}
 */
export
const ReqAgentState_loggedOff: ReqAgentState = ReqAgentState.loggedOff; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary loggedOff
 * @constant
 * @type {number}
 */
export
const loggedOff: ReqAgentState = ReqAgentState.loggedOff; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary ReqAgentState_notReady
 * @description
 *
 * Place the agent in notReady.
 * @constant
 * @type {number}
 */
export
const ReqAgentState_notReady: ReqAgentState = ReqAgentState.notReady; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary notReady
 * @constant
 * @type {number}
 */
export
const notReady: ReqAgentState = ReqAgentState.notReady; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary ReqAgentState_ready
 * @description
 *
 * Place the agent in ready.
 * @constant
 * @type {number}
 */
export
const ReqAgentState_ready: ReqAgentState = ReqAgentState.ready; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary ready
 * @constant
 * @type {number}
 */
export
const ready: ReqAgentState = ReqAgentState.ready; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary ReqAgentState_workingAfterCall
 * @description
 *
 * Place the agent in workingAfterCall.
 * @constant
 * @type {number}
 */
export
const ReqAgentState_workingAfterCall: ReqAgentState = ReqAgentState.workingAfterCall; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary workingAfterCall
 * @constant
 * @type {number}
 */
export
const workingAfterCall: ReqAgentState = ReqAgentState.workingAfterCall; /* SHORT_NAMED_ENUMERATED_VALUE */

let _cached_decoder_for_ReqAgentState: $.ASN1Decoder<ReqAgentState> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) ReqAgentState
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_ReqAgentState (el: _Element): ReqAgentState {
    if (!_cached_decoder_for_ReqAgentState) { _cached_decoder_for_ReqAgentState = $._decodeEnumerated; }
    return _cached_decoder_for_ReqAgentState(el);
}

let _cached_encoder_for_ReqAgentState: $.ASN1Encoder<ReqAgentState> | null = null;

/**
 * @summary Encodes a(n) ReqAgentState into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ReqAgentState, encoded as an ASN.1 Element.
 */
export
function _encode_ReqAgentState (value: ReqAgentState, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_ReqAgentState) { _cached_encoder_for_ReqAgentState = $._encodeEnumerated; }
    return _cached_encoder_for_ReqAgentState(value, elGetter);
}


/* eslint-enable */
