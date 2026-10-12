/* eslint-disable */
import {
    ASN1Element as _Element
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { TetraIRIContent, _decode_TetraIRIContent, _encode_TetraIRIContent } from "../TETRA-HI2Operations/TetraIRIContent.ta.mjs";
// export { TetraIRIContent, _decode_TetraIRIContent, _encode_TetraIRIContent } from "../TETRA-HI2Operations/TetraIRIContent.ta.mjs";
import { TetraIRISequence, _decode_TetraIRISequence, _encode_TetraIRISequence } from "../TETRA-HI2Operations/TetraIRISequence.ta.mjs";
// export { TetraIRISequence, _decode_TetraIRISequence, _encode_TetraIRISequence } from "../TETRA-HI2Operations/TetraIRISequence.ta.mjs";


/**
 * @summary TETRAIRIsContent
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * TETRAIRIsContent         ::=  CHOICE
 * {
 *     tetraiRIContent            TetraIRIContent,
 *     tetraIRISequence        TetraIRISequence
 * }
 * ```
 */
export
type TETRAIRIsContent =
    { tetraiRIContent: TetraIRIContent } /* CHOICE_ALT_ROOT */
    | { tetraIRISequence: TetraIRISequence } /* CHOICE_ALT_ROOT */;

let _cached_decoder_for_TETRAIRIsContent: $.ASN1Decoder<TETRAIRIsContent> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) TETRAIRIsContent
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_TETRAIRIsContent (el: _Element): TETRAIRIsContent {
    if (!_cached_decoder_for_TETRAIRIsContent) { _cached_decoder_for_TETRAIRIsContent = $._decode_inextensible_choice<TETRAIRIsContent>({
    "CONTEXT 1": [ "tetraiRIContent", _decode_TetraIRIContent ],
    "CONTEXT 2": [ "tetraiRIContent", _decode_TetraIRIContent ],
    "CONTEXT 3": [ "tetraiRIContent", _decode_TetraIRIContent ],
    "CONTEXT 4": [ "tetraiRIContent", _decode_TetraIRIContent ],
    "UNIVERSAL 16": [ "tetraIRISequence", _decode_TetraIRISequence ]
}); }
    return _cached_decoder_for_TETRAIRIsContent(el);
}

let _cached_encoder_for_TETRAIRIsContent: $.ASN1Encoder<TETRAIRIsContent> | null = null;

/**
 * @summary Encodes a(n) TETRAIRIsContent into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The TETRAIRIsContent, encoded as an ASN.1 Element.
 */
export
function _encode_TETRAIRIsContent (value: TETRAIRIsContent, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_TETRAIRIsContent) { _cached_encoder_for_TETRAIRIsContent = $._encode_choice<TETRAIRIsContent>({
    "tetraiRIContent": _encode_TetraIRIContent,
    "tetraIRISequence": _encode_TetraIRISequence,
}, $.BER); }
    return _cached_encoder_for_TETRAIRIsContent(value, elGetter);
}


/* eslint-enable */
