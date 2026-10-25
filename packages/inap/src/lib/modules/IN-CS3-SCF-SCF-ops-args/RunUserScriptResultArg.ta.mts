/* eslint-disable */
import {
    ASN1Element as _Element
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { type ProvideUserInformationResultArg, _decode_ProvideUserInformationResultArg, _encode_ProvideUserInformationResultArg } from "../IN-CS3-SCF-SCF-ops-args/ProvideUserInformationResultArg.ta.mjs";
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

/**
 * @summary Decodes an ASN.1 element into a(n) RunUserScriptResultArg
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export const _decode_RunUserScriptResultArg: $.ASN1Decoder<RunUserScriptResultArg> = _decode_ProvideUserInformationResultArg;

/**
 * @summary Encodes a(n) RunUserScriptResultArg into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The RunUserScriptResultArg, encoded as an ASN.1 Element.
 */
export const _encode_RunUserScriptResultArg: $.ASN1Encoder<RunUserScriptResultArg> = _encode_ProvideUserInformationResultArg;


/* eslint-enable */
