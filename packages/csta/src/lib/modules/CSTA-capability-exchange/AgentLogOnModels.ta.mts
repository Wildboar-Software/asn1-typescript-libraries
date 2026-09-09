/* eslint-disable */

import * as $ from "@wildboar/asn1/functional";
import { BIT_STRING, ASN1Element as _Element } from "@wildboar/asn1";



/**
 * @summary AgentLogOnModels
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * AgentLogOnModels  ::=  BIT STRING
 * {     logOnToACDDevice             ( 0),
 *     logOnToACDGroupExplOneStep         ( 1),
 *     logOnToACDGroupExplTwoSteps         ( 2),
 *     logOnToACDImplOneStep             ( 3) }
 * ```
 */
export
type AgentLogOnModels = BIT_STRING;

/**
 * @summary AgentLogOnModels_logOnToACDDevice
 * @constant
 */
export
const AgentLogOnModels_logOnToACDDevice: number = 0; /* LONG_NAMED_BIT */

/**
 * @summary logOnToACDDevice
 * @constant
 */
export
const logOnToACDDevice: number = AgentLogOnModels_logOnToACDDevice; /* SHORT_NAMED_BIT */

/**
 * @summary AgentLogOnModels_logOnToACDGroupExplOneStep
 * @constant
 */
export
const AgentLogOnModels_logOnToACDGroupExplOneStep: number = 1; /* LONG_NAMED_BIT */

/**
 * @summary logOnToACDGroupExplOneStep
 * @constant
 */
export
const logOnToACDGroupExplOneStep: number = AgentLogOnModels_logOnToACDGroupExplOneStep; /* SHORT_NAMED_BIT */

/**
 * @summary AgentLogOnModels_logOnToACDGroupExplTwoSteps
 * @constant
 */
export
const AgentLogOnModels_logOnToACDGroupExplTwoSteps: number = 2; /* LONG_NAMED_BIT */

/**
 * @summary logOnToACDGroupExplTwoSteps
 * @constant
 */
export
const logOnToACDGroupExplTwoSteps: number = AgentLogOnModels_logOnToACDGroupExplTwoSteps; /* SHORT_NAMED_BIT */

/**
 * @summary AgentLogOnModels_logOnToACDImplOneStep
 * @constant
 */
export
const AgentLogOnModels_logOnToACDImplOneStep: number = 3; /* LONG_NAMED_BIT */

/**
 * @summary logOnToACDImplOneStep
 * @constant
 */
export
const logOnToACDImplOneStep: number = AgentLogOnModels_logOnToACDImplOneStep; /* SHORT_NAMED_BIT */

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
