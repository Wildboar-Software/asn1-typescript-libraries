/* eslint-disable */

import * as $ from "@wildboar/asn1/functional";
import { BIT_STRING, ASN1Element as _Element } from "@wildboar/asn1";



/**
 * @summary AgentLogOnModels
 * @description
 *
 * Agent log-on models (Table 13-9): ACD device; ACD group explicit
 * one-step / two-step; ACD group implicit one-step.
 *
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-269/
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-285/
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * AgentLogOnModels  ::=  BIT STRING
 * {     logOnACDDevice                     (0),
 *     logOnACDGroupExplOneStep             (1),
 *     logOnACDGroupExplTwoSteps             (2),
 *     logOnACDGroupImplOneStep             (3) }
 * ```
 */
export
type AgentLogOnModels = BIT_STRING;

/**
 * @summary AgentLogOnModels_logOnACDDevice
 * @constant
 */
export
const AgentLogOnModels_logOnACDDevice: number = 0; /* LONG_NAMED_BIT */

/**
 * @summary logOnACDDevice
 * @constant
 */
export
const logOnACDDevice: number = AgentLogOnModels_logOnACDDevice; /* SHORT_NAMED_BIT */

/**
 * @summary AgentLogOnModels_logOnACDGroupExplOneStep
 * @constant
 */
export
const AgentLogOnModels_logOnACDGroupExplOneStep: number = 1; /* LONG_NAMED_BIT */

/**
 * @summary logOnACDGroupExplOneStep
 * @constant
 */
export
const logOnACDGroupExplOneStep: number = AgentLogOnModels_logOnACDGroupExplOneStep; /* SHORT_NAMED_BIT */

/**
 * @summary AgentLogOnModels_logOnACDGroupExplTwoSteps
 * @constant
 */
export
const AgentLogOnModels_logOnACDGroupExplTwoSteps: number = 2; /* LONG_NAMED_BIT */

/**
 * @summary logOnACDGroupExplTwoSteps
 * @constant
 */
export
const logOnACDGroupExplTwoSteps: number = AgentLogOnModels_logOnACDGroupExplTwoSteps; /* SHORT_NAMED_BIT */

/**
 * @summary AgentLogOnModels_logOnACDGroupImplOneStep
 * @constant
 */
export
const AgentLogOnModels_logOnACDGroupImplOneStep: number = 3; /* LONG_NAMED_BIT */

/**
 * @summary logOnACDGroupImplOneStep
 * @constant
 */
export
const logOnACDGroupImplOneStep: number = AgentLogOnModels_logOnACDGroupImplOneStep; /* SHORT_NAMED_BIT */

let _cached_decoder_for_AgentLogOnModels: $.ASN1Decoder<AgentLogOnModels> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) AgentLogOnModels
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_AgentLogOnModels (el: _Element): AgentLogOnModels {
    if (!_cached_decoder_for_AgentLogOnModels) { _cached_decoder_for_AgentLogOnModels = $._decodeBitString; }
    return _cached_decoder_for_AgentLogOnModels(el);
}

let _cached_encoder_for_AgentLogOnModels: $.ASN1Encoder<AgentLogOnModels> | null = null;

/**
 * @summary Encodes a(n) AgentLogOnModels into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The AgentLogOnModels, encoded as an ASN.1 Element.
 */
export
function _encode_AgentLogOnModels (value: AgentLogOnModels, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_AgentLogOnModels) { _cached_encoder_for_AgentLogOnModels = $._encodeBitString; }
    return _cached_encoder_for_AgentLogOnModels(value, elGetter);
}


/* eslint-enable */
