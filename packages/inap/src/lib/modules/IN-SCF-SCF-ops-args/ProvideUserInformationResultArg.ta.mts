/* eslint-disable */
import {
    ASN1Element as _Element
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { OPTIONALLY_PROTECTED, _get_decoder_for_OPTIONALLY_PROTECTED, _get_encoder_for_OPTIONALLY_PROTECTED } from "../EnhancedSecurity/OPTIONALLY-PROTECTED.ta.mjs";
// export { OPTIONALLY_PROTECTED, _get_decoder_for_OPTIONALLY_PROTECTED, _get_encoder_for_OPTIONALLY_PROTECTED } from "../EnhancedSecurity/OPTIONALLY-PROTECTED.ta.mjs";
import { ProvideUserInformationResultArg_Type, _decode_ProvideUserInformationResultArg_Type, _encode_ProvideUserInformationResultArg_Type } from "../IN-SCF-SCF-ops-args/ProvideUserInformationResultArg-Type.ta.mjs";
// export { ProvideUserInformationResultArg_Type, _decode_ProvideUserInformationResultArg_Type, _encode_ProvideUserInformationResultArg_Type } from "../IN-SCF-SCF-ops-args/ProvideUserInformationResultArg-Type.ta.mjs";


/**
 * @summary ProvideUserInformationResultArg
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ProvideUserInformationResultArg  ::= 
 *   OPTIONALLY-PROTECTED
 *     {SEQUENCE {userInformation     [0]  ReceivedInformation,
 *                securityParameters  [1]  SecurityParameters OPTIONAL,
 *                extensions          [2]  Extensions OPTIONAL
 *     }}
 * ```
 */
export
type ProvideUserInformationResultArg = OPTIONALLY_PROTECTED<ProvideUserInformationResultArg_Type>; // DefinedType

let _cached_decoder_for_ProvideUserInformationResultArg: $.ASN1Decoder<ProvideUserInformationResultArg> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) ProvideUserInformationResultArg
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_ProvideUserInformationResultArg (el: _Element): ProvideUserInformationResultArg {
    if (!_cached_decoder_for_ProvideUserInformationResultArg) { _cached_decoder_for_ProvideUserInformationResultArg = _get_decoder_for_OPTIONALLY_PROTECTED<ProvideUserInformationResultArg_Type>(_decode_ProvideUserInformationResultArg_Type); }
    return _cached_decoder_for_ProvideUserInformationResultArg(el);
}

let _cached_encoder_for_ProvideUserInformationResultArg: $.ASN1Encoder<ProvideUserInformationResultArg> | null = null;

/**
 * @summary Encodes a(n) ProvideUserInformationResultArg into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ProvideUserInformationResultArg, encoded as an ASN.1 Element.
 */
export
function _encode_ProvideUserInformationResultArg (value: ProvideUserInformationResultArg, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_ProvideUserInformationResultArg) { _cached_encoder_for_ProvideUserInformationResultArg = _get_encoder_for_OPTIONALLY_PROTECTED<ProvideUserInformationResultArg_Type>(_encode_ProvideUserInformationResultArg_Type); }
    return _cached_encoder_for_ProvideUserInformationResultArg(value, elGetter);
}


/* eslint-enable */
