/* eslint-disable */

import * as $ from "@wildboar/asn1/functional";
import { BIT_STRING, ASN1Element as _Element } from "@wildboar/asn1";



/**
 * @summary AgentLogOnModels
 * @description
 * Agent log-on models supported at a device or in the SF. Implicit/one-step
 * ACD-group log-on cannot be combined with log-on to an ACD device (ECMA-269
 * §13.1.2.2.1 / §13.1.4.2.1, ECMA-285 §9.10).
 *
 * @see {@link https://ecma-international.org/publications-and-standards/standards/ecma-269/}
 *
 * @see {@link https://ecma-international.org/publications-and-standards/standards/ecma-285/}
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
 * @description
 * Bit set means the SF supports Log On to an ACD device (ECMA-269 §13.1.4.2.1
 * Table 13-9).
 */
export
const AgentLogOnModels_logOnToACDDevice: number = 0; /* LONG_NAMED_BIT */

/**
 * @summary logOnToACDDevice
 * @constant
 * @description
 * Alias of `AgentLogOnModels_logOnToACDDevice`.
 */
export
const logOnToACDDevice: number = AgentLogOnModels_logOnToACDDevice; /* SHORT_NAMED_BIT */

/**
 * @summary AgentLogOnModels_logOnToACDGroupExplOneStep
 * @constant
 * @description
 * Bit set means the SF supports Log On to an ACD Group (explicit/one step)
 * (ECMA-269 §13.1.4.2.1 Table 13-9).
 */
export
const AgentLogOnModels_logOnToACDGroupExplOneStep: number = 1; /* LONG_NAMED_BIT */

/**
 * @summary logOnToACDGroupExplOneStep
 * @constant
 * @description
 * Alias of `AgentLogOnModels_logOnToACDGroupExplOneStep`.
 */
export
const logOnToACDGroupExplOneStep: number = AgentLogOnModels_logOnToACDGroupExplOneStep; /* SHORT_NAMED_BIT */

/**
 * @summary AgentLogOnModels_logOnToACDGroupExplTwoSteps
 * @constant
 * @description
 * Bit set means the SF supports Log On to an ACD Group (explicit/two steps)
 * (ECMA-269 §13.1.4.2.1 Table 13-9).
 */
export
const AgentLogOnModels_logOnToACDGroupExplTwoSteps: number = 2; /* LONG_NAMED_BIT */

/**
 * @summary logOnToACDGroupExplTwoSteps
 * @constant
 * @description
 * Alias of `AgentLogOnModels_logOnToACDGroupExplTwoSteps`.
 */
export
const logOnToACDGroupExplTwoSteps: number = AgentLogOnModels_logOnToACDGroupExplTwoSteps; /* SHORT_NAMED_BIT */

/**
 * @summary AgentLogOnModels_logOnToACDImplOneStep
 * @constant
 * @description
 * Bit set means the SF supports Log On to an ACD Group (implicit/one step)
 * (ECMA-269 §13.1.4.2.1 Table 13-9).
 */
export
const AgentLogOnModels_logOnToACDImplOneStep: number = 3; /* LONG_NAMED_BIT */

/**
 * @summary logOnToACDImplOneStep
 * @constant
 * @description
 * Alias of `AgentLogOnModels_logOnToACDImplOneStep`.
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
