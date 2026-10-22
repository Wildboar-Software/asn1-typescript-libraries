/* eslint-disable */
import {
    ASN1Element as _Element
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { OPTIONALLY_PROTECTED, _get_decoder_for_OPTIONALLY_PROTECTED, _get_encoder_for_OPTIONALLY_PROTECTED } from "../EnhancedSecurity/OPTIONALLY-PROTECTED.ta.mjs";
// export { OPTIONALLY_PROTECTED, _get_decoder_for_OPTIONALLY_PROTECTED, _get_encoder_for_OPTIONALLY_PROTECTED } from "../EnhancedSecurity/OPTIONALLY-PROTECTED.ta.mjs";
import { ReferralParameter_Type, _decode_ReferralParameter_Type, _encode_ReferralParameter_Type } from "../IN-CS2-SCF-SCF-ops-args/ReferralParameter-Type.ta.mjs";
// export { ReferralParameter_Type, _decode_ReferralParameter_Type, _encode_ReferralParameter_Type } from "../IN-CS2-SCF-SCF-ops-args/ReferralParameter-Type.ta.mjs";


/**
 * @summary ReferralParameter
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ReferralParameter  ::= 
 *   OPTIONALLY-PROTECTED
 *     {SEQUENCE {tryhere             [0]  AccessPointInformation,
 *                securityParameters  [1]  SecurityParameters OPTIONAL
 *     }}
 * ```
 */
export
type ReferralParameter = OPTIONALLY_PROTECTED<ReferralParameter_Type>; // DefinedType

let _cached_decoder_for_ReferralParameter: $.ASN1Decoder<ReferralParameter> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) ReferralParameter
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_ReferralParameter (el: _Element): ReferralParameter {
    if (!_cached_decoder_for_ReferralParameter) { _cached_decoder_for_ReferralParameter = _get_decoder_for_OPTIONALLY_PROTECTED<ReferralParameter_Type>(_decode_ReferralParameter_Type); }
    return _cached_decoder_for_ReferralParameter(el);
}

let _cached_encoder_for_ReferralParameter: $.ASN1Encoder<ReferralParameter> | null = null;

/**
 * @summary Encodes a(n) ReferralParameter into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ReferralParameter, encoded as an ASN.1 Element.
 */
export
function _encode_ReferralParameter (value: ReferralParameter, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_ReferralParameter) { _cached_encoder_for_ReferralParameter = _get_encoder_for_OPTIONALLY_PROTECTED<ReferralParameter_Type>(_encode_ReferralParameter_Type); }
    return _cached_encoder_for_ReferralParameter(value, elGetter);
}


/* eslint-enable */
