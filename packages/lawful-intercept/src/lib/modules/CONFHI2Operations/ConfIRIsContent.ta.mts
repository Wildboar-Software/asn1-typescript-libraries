/* eslint-disable */
import {
    ASN1Element as _Element
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { type ConfIRIContent, _decode_ConfIRIContent, _encode_ConfIRIContent } from "../CONFHI2Operations/ConfIRIContent.ta.mjs";
// export { ConfIRIContent, _decode_ConfIRIContent, _encode_ConfIRIContent } from "../CONFHI2Operations/ConfIRIContent.ta.mjs";
import { type ConfIRISequence, _decode_ConfIRISequence, _encode_ConfIRISequence } from "../CONFHI2Operations/ConfIRISequence.ta.mjs";
// export { ConfIRISequence, _decode_ConfIRISequence, _encode_ConfIRISequence } from "../CONFHI2Operations/ConfIRISequence.ta.mjs";


/**
 * @summary ConfIRIsContent
 * @description
 * 
 * One conference IRI record, or a sequence of them for the same LEA
 * destination.
 *
 * Aggregation is optional. It may be used only when several records are already
 * available for that destination. Records are sent immediately and are not held
 * back in order to aggregate. When aggregation is not used, send a single
 * record. 3GPP TS 33.108, annex B.11.1.
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ConfIRIsContent         ::=  CHOICE
 * {
 *     confiRIContent            ConfIRIContent,
 *     confIRISequence            ConfIRISequence
 * }
 * ```
 */
export
type ConfIRIsContent =
    { confiRIContent: ConfIRIContent } /* CHOICE_ALT_ROOT */
    | { confIRISequence: ConfIRISequence } /* CHOICE_ALT_ROOT */;

let _cached_decoder_for_ConfIRIsContent: $.ASN1Decoder<ConfIRIsContent> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) ConfIRIsContent
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_ConfIRIsContent (el: _Element): ConfIRIsContent {
    if (!_cached_decoder_for_ConfIRIsContent) { _cached_decoder_for_ConfIRIsContent = $._decode_inextensible_choice<ConfIRIsContent>({
    "CONTEXT 1": [ "confiRIContent", _decode_ConfIRIContent ],
    "CONTEXT 2": [ "confiRIContent", _decode_ConfIRIContent ],
    "CONTEXT 3": [ "confiRIContent", _decode_ConfIRIContent ],
    "CONTEXT 4": [ "confiRIContent", _decode_ConfIRIContent ],
    "UNIVERSAL 16": [ "confIRISequence", _decode_ConfIRISequence ]
}); }
    return _cached_decoder_for_ConfIRIsContent(el);
}

let _cached_encoder_for_ConfIRIsContent: $.ASN1Encoder<ConfIRIsContent> | null = null;

/**
 * @summary Encodes a(n) ConfIRIsContent into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ConfIRIsContent, encoded as an ASN.1 Element.
 */
export
function _encode_ConfIRIsContent (value: ConfIRIsContent, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_ConfIRIsContent) { _cached_encoder_for_ConfIRIsContent = $._encode_choice<ConfIRIsContent>({
    "confiRIContent": _encode_ConfIRIContent,
    "confIRISequence": _encode_ConfIRISequence,
}, $.BER); }
    return _cached_encoder_for_ConfIRIsContent(value, elGetter);
}


/* eslint-enable */
