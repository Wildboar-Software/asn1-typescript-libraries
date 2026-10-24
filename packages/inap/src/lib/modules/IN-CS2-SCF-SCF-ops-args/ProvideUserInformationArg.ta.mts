/* eslint-disable */
import {
    ASN1Element as _Element
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { type OPTIONALLY_PROTECTED, _get_decoder_for_OPTIONALLY_PROTECTED, _get_encoder_for_OPTIONALLY_PROTECTED } from "../EnhancedSecurity/OPTIONALLY-PROTECTED.ta.mjs";
// export { OPTIONALLY_PROTECTED, _get_decoder_for_OPTIONALLY_PROTECTED, _get_encoder_for_OPTIONALLY_PROTECTED } from "../EnhancedSecurity/OPTIONALLY-PROTECTED.ta.mjs";
import { ProvideUserInformationArg_Type, _decode_ProvideUserInformationArg_Type, _encode_ProvideUserInformationArg_Type } from "../IN-CS2-SCF-SCF-ops-args/ProvideUserInformationArg-Type.ta.mjs";
// export { ProvideUserInformationArg_Type, _decode_ProvideUserInformationArg_Type, _encode_ProvideUserInformationArg_Type } from "../IN-CS2-SCF-SCF-ops-args/ProvideUserInformationArg-Type.ta.mjs";


/**
 * @summary ProvideUserInformationArg
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ProvideUserInformationArg  ::= 
 *   OPTIONALLY-PROTECTED
 *     {SEQUENCE {constraints             [0]  CollectedInfo,
 *                --    infoToSend            [1] InformationToSend {bound},
 *                --    errorInfo            [2] InformationToSend {bound}    type OPTIONAL,
 *                typeOfRequestedInfo     [3]  InfoType DEFAULT numericString,
 *                numberOfAllowedRetries  [4]  INTEGER(0..127) DEFAULT 0,
 *                actions                 [5]  Actions OPTIONAL,
 *                preferredLanguage       [6]  Language OPTIONAL,
 *                securityParameters      [7]  SecurityParameters OPTIONAL,
 *                extensions
 *                  [8]  SEQUENCE OF
 *                         ExtensionField OPTIONAL,
 *                ...}}
 * ```
 */
export
type ProvideUserInformationArg = OPTIONALLY_PROTECTED<ProvideUserInformationArg_Type>; // DefinedType

let _cached_decoder_for_ProvideUserInformationArg: $.ASN1Decoder<ProvideUserInformationArg> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) ProvideUserInformationArg
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_ProvideUserInformationArg (el: _Element): ProvideUserInformationArg {
    if (!_cached_decoder_for_ProvideUserInformationArg) { _cached_decoder_for_ProvideUserInformationArg = _get_decoder_for_OPTIONALLY_PROTECTED<ProvideUserInformationArg_Type>(_decode_ProvideUserInformationArg_Type); }
    return _cached_decoder_for_ProvideUserInformationArg(el);
}

let _cached_encoder_for_ProvideUserInformationArg: $.ASN1Encoder<ProvideUserInformationArg> | null = null;

/**
 * @summary Encodes a(n) ProvideUserInformationArg into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ProvideUserInformationArg, encoded as an ASN.1 Element.
 */
export
function _encode_ProvideUserInformationArg (value: ProvideUserInformationArg, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_ProvideUserInformationArg) { _cached_encoder_for_ProvideUserInformationArg = _get_encoder_for_OPTIONALLY_PROTECTED<ProvideUserInformationArg_Type>(_encode_ProvideUserInformationArg_Type); }
    return _cached_encoder_for_ProvideUserInformationArg(value, elGetter);
}


/* eslint-enable */
