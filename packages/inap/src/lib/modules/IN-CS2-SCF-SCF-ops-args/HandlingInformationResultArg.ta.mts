/* eslint-disable */
import {
    ASN1Element as _Element
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { OPTIONALLY_PROTECTED, _get_decoder_for_OPTIONALLY_PROTECTED, _get_encoder_for_OPTIONALLY_PROTECTED } from "../EnhancedSecurity/OPTIONALLY-PROTECTED.ta.mjs";
// export { OPTIONALLY_PROTECTED, _get_decoder_for_OPTIONALLY_PROTECTED, _get_encoder_for_OPTIONALLY_PROTECTED } from "../EnhancedSecurity/OPTIONALLY-PROTECTED.ta.mjs";
import { HandlingInformationResultArg_Type, _decode_HandlingInformationResultArg_Type, _encode_HandlingInformationResultArg_Type } from "../IN-CS2-SCF-SCF-ops-args/HandlingInformationResultArg-Type.ta.mjs";
// export { HandlingInformationResultArg_Type, _decode_HandlingInformationResultArg_Type, _encode_HandlingInformationResultArg_Type } from "../IN-CS2-SCF-SCF-ops-args/HandlingInformationResultArg-Type.ta.mjs";


/**
 * @summary HandlingInformationResultArg
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * HandlingInformationResultArg  ::= 
 *   OPTIONALLY-PROTECTED
 *     {SEQUENCE {routingAddress          [0]  RoutingAddress OPTIONAL,
 *                highLayerCompatibility  [1]  HighLayerCompatibility OPTIONAL,
 *                supplementaryServices   [2]  SupplementaryServices OPTIONAL,
 *                preferredLanguage       [3]  Language OPTIONAL,
 *                carrier                 [4]  Carrier OPTIONAL,
 *                callingPartyNumber      [5]  CallingPartyNumber OPTIONAL,
 *                originalCalledPartyID
 *                  [6]  OriginalCalledPartyID OPTIONAL,
 *                redirectingPartyID      [7]  RedirectingPartyID OPTIONAL,
 *                redirectionInformation  [8]  RedirectionInformation OPTIONAL,
 *                callingPartysCategory   [9]  CallingPartysCategory OPTIONAL,
 *                securityParameters      [10]  SecurityParameters OPTIONAL,
 *                extensions
 *                  [11]  SEQUENCE OF
 *                          ExtensionField
 *                    type OPTIONAL,
 *                ...}}
 * ```
 */
export
type HandlingInformationResultArg = OPTIONALLY_PROTECTED<HandlingInformationResultArg_Type>; // DefinedType

let _cached_decoder_for_HandlingInformationResultArg: $.ASN1Decoder<HandlingInformationResultArg> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) HandlingInformationResultArg
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_HandlingInformationResultArg (el: _Element): HandlingInformationResultArg {
    if (!_cached_decoder_for_HandlingInformationResultArg) { _cached_decoder_for_HandlingInformationResultArg = _get_decoder_for_OPTIONALLY_PROTECTED<HandlingInformationResultArg_Type>(_decode_HandlingInformationResultArg_Type); }
    return _cached_decoder_for_HandlingInformationResultArg(el);
}

let _cached_encoder_for_HandlingInformationResultArg: $.ASN1Encoder<HandlingInformationResultArg> | null = null;

/**
 * @summary Encodes a(n) HandlingInformationResultArg into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The HandlingInformationResultArg, encoded as an ASN.1 Element.
 */
export
function _encode_HandlingInformationResultArg (value: HandlingInformationResultArg, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_HandlingInformationResultArg) { _cached_encoder_for_HandlingInformationResultArg = _get_encoder_for_OPTIONALLY_PROTECTED<HandlingInformationResultArg_Type>(_encode_HandlingInformationResultArg_Type); }
    return _cached_encoder_for_HandlingInformationResultArg(value, elGetter);
}


/* eslint-enable */
