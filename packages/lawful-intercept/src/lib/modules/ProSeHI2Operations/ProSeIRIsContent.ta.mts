/* eslint-disable */
import {
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { ProSeIRIContent, _decode_ProSeIRIContent, _encode_ProSeIRIContent } from "../ProSeHI2Operations/ProSeIRIContent.ta.mjs";
// export { ProSeIRIContent, _decode_ProSeIRIContent, _encode_ProSeIRIContent } from "../ProSeHI2Operations/ProSeIRIContent.ta.mjs";
import { ProSeIRISequence, _decode_ProSeIRISequence, _encode_ProSeIRISequence } from "../ProSeHI2Operations/ProSeIRISequence.ta.mjs";
// export { ProSeIRISequence, _decode_ProSeIRISequence, _encode_ProSeIRISequence } from "../ProSeHI2Operations/ProSeIRISequence.ta.mjs";


/**
 * @summary ProSeIRIsContent
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ProSeIRIsContent         ::=  CHOICE
 * {
 *     proseIRIContent            [1] ProSeIRIContent,
 *     proseIRISequence        [2] ProSeIRISequence
 * }
 * ```
 */
export
type ProSeIRIsContent =
    { proseIRIContent: ProSeIRIContent } /* CHOICE_ALT_ROOT */
    | { proseIRISequence: ProSeIRISequence } /* CHOICE_ALT_ROOT */;

let _cached_decoder_for_ProSeIRIsContent: $.ASN1Decoder<ProSeIRIsContent> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) ProSeIRIsContent
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_ProSeIRIsContent (el: _Element): ProSeIRIsContent {
    if (!_cached_decoder_for_ProSeIRIsContent) { _cached_decoder_for_ProSeIRIsContent = $._decode_inextensible_choice<ProSeIRIsContent>({
    "CONTEXT 1": [ "proseIRIContent", $._decode_explicit<ProSeIRIContent>(() => _decode_ProSeIRIContent) ],
    "CONTEXT 2": [ "proseIRISequence", $._decode_implicit<ProSeIRISequence>(() => _decode_ProSeIRISequence) ]
}); }
    return _cached_decoder_for_ProSeIRIsContent(el);
}

let _cached_encoder_for_ProSeIRIsContent: $.ASN1Encoder<ProSeIRIsContent> | null = null;

/**
 * @summary Encodes a(n) ProSeIRIsContent into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ProSeIRIsContent, encoded as an ASN.1 Element.
 */
export
function _encode_ProSeIRIsContent (value: ProSeIRIsContent, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_ProSeIRIsContent) { _cached_encoder_for_ProSeIRIsContent = $._encode_choice<ProSeIRIsContent>({
    "proseIRIContent": $._encode_explicit(_TagClass.context, 1, () => _encode_ProSeIRIContent, $.BER),
    "proseIRISequence": $._encode_implicit(_TagClass.context, 2, () => _encode_ProSeIRISequence, $.BER),
}, $.BER); }
    return _cached_encoder_for_ProSeIRIsContent(value, elGetter);
}


/* eslint-enable */
