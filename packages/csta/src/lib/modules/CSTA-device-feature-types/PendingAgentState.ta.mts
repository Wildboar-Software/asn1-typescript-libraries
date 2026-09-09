/* eslint-disable */

import * as $ from "@wildboar/asn1/functional";
import { ENUMERATED, ASN1Element as _Element } from "@wildboar/asn1";



/**
 * @summary PendingAgentState
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * PendingAgentState  ::=  ENUMERATED
 * {     agentNotReady             ( 0),
 *     agentNull             ( 1),
 *     agentReady             ( 2),
 *     agentWorkingAfterCall         ( 3) }
 * ```
 * 
 * @enum {number}
 */
export
enum _enum_for_PendingAgentState {
    agentNotReady = 0,
    agentNull = 1,
    agentReady = 2,
    agentWorkingAfterCall = 3,
}

/**
 * @summary PendingAgentState
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * PendingAgentState  ::=  ENUMERATED
 * {     agentNotReady             ( 0),
 *     agentNull             ( 1),
 *     agentReady             ( 2),
 *     agentWorkingAfterCall         ( 3) }
 * ```
 * 
 * @enum {number}
 */
export
type PendingAgentState = _enum_for_PendingAgentState;

/**
 * @summary PendingAgentState
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * PendingAgentState  ::=  ENUMERATED
 * {     agentNotReady             ( 0),
 *     agentNull             ( 1),
 *     agentReady             ( 2),
 *     agentWorkingAfterCall         ( 3) }
 * ```
 * 
 * @enum {number}
 */
export
const PendingAgentState = _enum_for_PendingAgentState;

/**
 * @summary PendingAgentState_agentNotReady
 * @constant
 * @type {number}
 */
export
const PendingAgentState_agentNotReady: PendingAgentState = PendingAgentState.agentNotReady; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary agentNotReady
 * @constant
 * @type {number}
 */
export
const agentNotReady: PendingAgentState = PendingAgentState.agentNotReady; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary PendingAgentState_agentNull
 * @constant
 * @type {number}
 */
export
const PendingAgentState_agentNull: PendingAgentState = PendingAgentState.agentNull; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary agentNull
 * @constant
 * @type {number}
 */
export
const agentNull: PendingAgentState = PendingAgentState.agentNull; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary PendingAgentState_agentReady
 * @constant
 * @type {number}
 */
export
const PendingAgentState_agentReady: PendingAgentState = PendingAgentState.agentReady; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary agentReady
 * @constant
 * @type {number}
 */
export
const agentReady: PendingAgentState = PendingAgentState.agentReady; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary PendingAgentState_agentWorkingAfterCall
 * @constant
 * @type {number}
 */
export
const PendingAgentState_agentWorkingAfterCall: PendingAgentState = PendingAgentState.agentWorkingAfterCall; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary agentWorkingAfterCall
 * @constant
 * @type {number}
 */
export
const agentWorkingAfterCall: PendingAgentState = PendingAgentState.agentWorkingAfterCall; /* SHORT_NAMED_ENUMERATED_VALUE */

let _cached_decoder_for_PendingAgentState: $.ASN1Decoder<PendingAgentState> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) PendingAgentState
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_PendingAgentState (el: _Element): PendingAgentState {
    if (!_cached_decoder_for_PendingAgentState) { _cached_decoder_for_PendingAgentState = $._decodeEnumerated; }
    return _cached_decoder_for_PendingAgentState(el);
}

let _cached_encoder_for_PendingAgentState: $.ASN1Encoder<PendingAgentState> | null = null;

/**
 * @summary Encodes a(n) PendingAgentState into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The PendingAgentState, encoded as an ASN.1 Element.
 */
export
function _encode_PendingAgentState (value: PendingAgentState, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_PendingAgentState) { _cached_encoder_for_PendingAgentState = $._encodeEnumerated; }
    return _cached_encoder_for_PendingAgentState(value, elGetter);
}


/* eslint-enable */
