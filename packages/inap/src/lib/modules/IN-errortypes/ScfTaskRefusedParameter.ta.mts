/* eslint-disable */
import {
    ASN1Element as _Element
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { OPTIONALLY_PROTECTED, _get_decoder_for_OPTIONALLY_PROTECTED, _get_encoder_for_OPTIONALLY_PROTECTED } from "../EnhancedSecurity/OPTIONALLY-PROTECTED.ta.mjs";
// export { OPTIONALLY_PROTECTED, _get_decoder_for_OPTIONALLY_PROTECTED, _get_encoder_for_OPTIONALLY_PROTECTED } from "../EnhancedSecurity/OPTIONALLY-PROTECTED.ta.mjs";
import { ScfTaskRefusedParameter_Type, _decode_ScfTaskRefusedParameter_Type, _encode_ScfTaskRefusedParameter_Type } from "../IN-errortypes/ScfTaskRefusedParameter-Type.ta.mjs";
// export { ScfTaskRefusedParameter_Type, _decode_ScfTaskRefusedParameter_Type, _encode_ScfTaskRefusedParameter_Type } from "../IN-errortypes/ScfTaskRefusedParameter-Type.ta.mjs";


/**
 * @summary ScfTaskRefusedParameter
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ScfTaskRefusedParameter  ::= 
 *   OPTIONALLY-PROTECTED
 *     {SEQUENCE {reason
 *                  ENUMERATED {generic(0), unobtainable(1), congestion(2)
 *                                                           --other values FFS
 *                                                           },
 *                securityParameters  [1]  SecurityParameters OPTIONAL
 *     }}
 * ```
 */
export
type ScfTaskRefusedParameter = OPTIONALLY_PROTECTED<ScfTaskRefusedParameter_Type>; // DefinedType

let _cached_decoder_for_ScfTaskRefusedParameter: $.ASN1Decoder<ScfTaskRefusedParameter> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) ScfTaskRefusedParameter
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_ScfTaskRefusedParameter (el: _Element): ScfTaskRefusedParameter {
    if (!_cached_decoder_for_ScfTaskRefusedParameter) { _cached_decoder_for_ScfTaskRefusedParameter = _get_decoder_for_OPTIONALLY_PROTECTED<ScfTaskRefusedParameter_Type>(_decode_ScfTaskRefusedParameter_Type); }
    return _cached_decoder_for_ScfTaskRefusedParameter(el);
}

let _cached_encoder_for_ScfTaskRefusedParameter: $.ASN1Encoder<ScfTaskRefusedParameter> | null = null;

/**
 * @summary Encodes a(n) ScfTaskRefusedParameter into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ScfTaskRefusedParameter, encoded as an ASN.1 Element.
 */
export
function _encode_ScfTaskRefusedParameter (value: ScfTaskRefusedParameter, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_ScfTaskRefusedParameter) { _cached_encoder_for_ScfTaskRefusedParameter = _get_encoder_for_OPTIONALLY_PROTECTED<ScfTaskRefusedParameter_Type>(_encode_ScfTaskRefusedParameter_Type); }
    return _cached_encoder_for_ScfTaskRefusedParameter(value, elGetter);
}


/* eslint-enable */
