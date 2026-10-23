/* eslint-disable */
import {
    ASN1Element as _Element
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { TCMessage, _decode_TCMessage, _encode_TCMessage } from "../TCAPMessages/TCMessage.ta.mjs";
// export { TCMessage, _decode_TCMessage, _encode_TCMessage } from "../TCAPMessages/TCMessage.ta.mjs";


/**
 * @summary AssistHandoffSSF_SCF_PDUs
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * AssistHandoffSSF-SCF-PDUs  ::= 
 *   TCMessage
 *     {{AssistHandoffSsfToScfInvokable}, {AssistHandoffSsfToScfReturnable}}
 * ```
 */
export
type AssistHandoffSSF_SCF_PDUs = TCMessage; // DefinedType

let _cached_decoder_for_AssistHandoffSSF_SCF_PDUs: $.ASN1Decoder<AssistHandoffSSF_SCF_PDUs> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) AssistHandoffSSF_SCF_PDUs
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_AssistHandoffSSF_SCF_PDUs (el: _Element): AssistHandoffSSF_SCF_PDUs {
    if (!_cached_decoder_for_AssistHandoffSSF_SCF_PDUs) { _cached_decoder_for_AssistHandoffSSF_SCF_PDUs = _decode_TCMessage; }
    return _cached_decoder_for_AssistHandoffSSF_SCF_PDUs(el);
}

let _cached_encoder_for_AssistHandoffSSF_SCF_PDUs: $.ASN1Encoder<AssistHandoffSSF_SCF_PDUs> | null = null;

/**
 * @summary Encodes a(n) AssistHandoffSSF_SCF_PDUs into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The AssistHandoffSSF_SCF_PDUs, encoded as an ASN.1 Element.
 */
export
function _encode_AssistHandoffSSF_SCF_PDUs (value: AssistHandoffSSF_SCF_PDUs, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_AssistHandoffSSF_SCF_PDUs) { _cached_encoder_for_AssistHandoffSSF_SCF_PDUs = _encode_TCMessage; }
    return _cached_encoder_for_AssistHandoffSSF_SCF_PDUs(value, elGetter);
}


/* eslint-enable */
