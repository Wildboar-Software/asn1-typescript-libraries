/* eslint-disable */

import * as $ from "@wildboar/asn1/functional";
import { BIT_STRING, ASN1Element as _Element } from "@wildboar/asn1";



/**
 * @summary AgentStateModels
 * @description
 *
 * Agent models (ECMA-269 Table 13-9): multi-state, multi-state
 * semi-independent linked, agent-oriented.
 *
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-269/
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-285/
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * AgentStateModels  ::=  BIT STRING
 * {     multiState                     (0),
 *     multiStateSemiIndependentLinked         (1),
 *     agentOriented                     (2) }
 * ```
 */
export
type AgentStateModels = BIT_STRING;

/**
 * @summary AgentStateModels_multiState
 * @constant
 */
export
const AgentStateModels_multiState: number = 0; /* LONG_NAMED_BIT */

/**
 * @summary multiState
 * @constant
 */
export
const multiState: number = AgentStateModels_multiState; /* SHORT_NAMED_BIT */

/**
 * @summary AgentStateModels_multiStateSemiIndependentLinked
 * @constant
 */
export
const AgentStateModels_multiStateSemiIndependentLinked: number = 1; /* LONG_NAMED_BIT */

/**
 * @summary multiStateSemiIndependentLinked
 * @constant
 */
export
const multiStateSemiIndependentLinked: number = AgentStateModels_multiStateSemiIndependentLinked; /* SHORT_NAMED_BIT */

/**
 * @summary AgentStateModels_agentOriented
 * @constant
 */
export
const AgentStateModels_agentOriented: number = 2; /* LONG_NAMED_BIT */

/**
 * @summary agentOriented
 * @constant
 */
export
const agentOriented: number = AgentStateModels_agentOriented; /* SHORT_NAMED_BIT */

let _cached_decoder_for_AgentStateModels: $.ASN1Decoder<AgentStateModels> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) AgentStateModels
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_AgentStateModels (el: _Element): AgentStateModels {
    if (!_cached_decoder_for_AgentStateModels) { _cached_decoder_for_AgentStateModels = $._decodeBitString; }
    return _cached_decoder_for_AgentStateModels(el);
}

let _cached_encoder_for_AgentStateModels: $.ASN1Encoder<AgentStateModels> | null = null;

/**
 * @summary Encodes a(n) AgentStateModels into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The AgentStateModels, encoded as an ASN.1 Element.
 */
export
function _encode_AgentStateModels (value: AgentStateModels, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_AgentStateModels) { _cached_encoder_for_AgentStateModels = $._encodeBitString; }
    return _cached_encoder_for_AgentStateModels(value, elGetter);
}


/* eslint-enable */
