/* eslint-disable */
import {
    ASN1Element as _Element
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { OPTIONALLY_PROTECTED, _get_decoder_for_OPTIONALLY_PROTECTED, _get_encoder_for_OPTIONALLY_PROTECTED } from "../EnhancedSecurity/OPTIONALLY-PROTECTED.ta.mjs";
// export { OPTIONALLY_PROTECTED, _get_decoder_for_OPTIONALLY_PROTECTED, _get_encoder_for_OPTIONALLY_PROTECTED } from "../EnhancedSecurity/OPTIONALLY-PROTECTED.ta.mjs";
import { RunUserScriptArg_Type, _decode_RunUserScriptArg_Type, _encode_RunUserScriptArg_Type } from "../IN-SCF-SCF-ops-args/RunUserScriptArg-Type.ta.mjs";
// export { RunUserScriptArg_Type, _decode_RunUserScriptArg_Type, _encode_RunUserScriptArg_Type } from "../IN-SCF-SCF-ops-args/RunUserScriptArg-Type.ta.mjs";


/**
 * @summary RunUserScriptArg
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * RunUserScriptArg  ::= 
 *   OPTIONALLY-PROTECTED
 *     {SEQUENCE {srfAddress          [0]  CalledPartyNumber,
 *                correlationID       [1]  CorrelationID,
 *                scfID               [2]  ScfID,
 *                userToConnect       [3]  UserToConnect OPTIONAL,
 *                securityParameters  [7]  SecurityParameters OPTIONAL,
 *                ...,
 *                ...,
 *                extensions          [30]  Extensions OPTIONAL
 *     }}
 * ```
 */
export
type RunUserScriptArg = OPTIONALLY_PROTECTED<RunUserScriptArg_Type>; // DefinedType

let _cached_decoder_for_RunUserScriptArg: $.ASN1Decoder<RunUserScriptArg> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) RunUserScriptArg
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_RunUserScriptArg (el: _Element): RunUserScriptArg {
    if (!_cached_decoder_for_RunUserScriptArg) { _cached_decoder_for_RunUserScriptArg = _get_decoder_for_OPTIONALLY_PROTECTED<RunUserScriptArg_Type>(_decode_RunUserScriptArg_Type); }
    return _cached_decoder_for_RunUserScriptArg(el);
}

let _cached_encoder_for_RunUserScriptArg: $.ASN1Encoder<RunUserScriptArg> | null = null;

/**
 * @summary Encodes a(n) RunUserScriptArg into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The RunUserScriptArg, encoded as an ASN.1 Element.
 */
export
function _encode_RunUserScriptArg (value: RunUserScriptArg, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_RunUserScriptArg) { _cached_encoder_for_RunUserScriptArg = _get_encoder_for_OPTIONALLY_PROTECTED<RunUserScriptArg_Type>(_encode_RunUserScriptArg_Type); }
    return _cached_encoder_for_RunUserScriptArg(value, elGetter);
}


/* eslint-enable */
