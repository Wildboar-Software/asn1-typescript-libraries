/* eslint-disable */
import {
    ASN1Element as _Element
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { ProvideUserInformationResultArg, _decode_ProvideUserInformationResultArg, _encode_ProvideUserInformationResultArg } from "../IN-CS3-SCF-SCF-ops-args/ProvideUserInformationResultArg.ta.mjs";
// export { ProvideUserInformationResultArg, _decode_ProvideUserInformationResultArg, _encode_ProvideUserInformationResultArg } from "../IN-CS3-SCF-SCF-ops-args/ProvideUserInformationResultArg.ta.mjs";


/**
 * @summary RunUserScriptResultArg
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * RunUserScriptResultArg  ::= 
 *   ProvideUserInformationResultArg
 * ```
 */
export
type RunUserScriptResultArg = ProvideUserInformationResultArg; // DefinedType

let _cached_decoder_for_RunUserScriptResultArg: $.ASN1Decoder<RunUserScriptResultArg> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) RunUserScriptResultArg
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_RunUserScriptResultArg (el: _Element): RunUserScriptResultArg {
    if (!_cached_decoder_for_RunUserScriptResultArg) { _cached_decoder_for_RunUserScriptResultArg = _decode_ProvideUserInformationResultArg; }
    return _cached_decoder_for_RunUserScriptResultArg(el);
}

let _cached_encoder_for_RunUserScriptResultArg: $.ASN1Encoder<RunUserScriptResultArg> | null = null;

/**
 * @summary Encodes a(n) RunUserScriptResultArg into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The RunUserScriptResultArg, encoded as an ASN.1 Element.
 */
export
function _encode_RunUserScriptResultArg (value: RunUserScriptResultArg, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_RunUserScriptResultArg) { _cached_encoder_for_RunUserScriptResultArg = _encode_ProvideUserInformationResultArg; }
    return _cached_encoder_for_RunUserScriptResultArg(value, elGetter);
}


/* eslint-enable */
