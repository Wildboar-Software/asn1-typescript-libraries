/* eslint-disable */
import {
    ASN1Element as _Element
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { UmtsIRIContent, _decode_UmtsIRIContent, _encode_UmtsIRIContent } from "../UmtsHI2Operations/UmtsIRIContent.ta.mjs";
// export { UmtsIRIContent, _decode_UmtsIRIContent, _encode_UmtsIRIContent } from "../UmtsHI2Operations/UmtsIRIContent.ta.mjs";
import { UmtsIRISequence, _decode_UmtsIRISequence, _encode_UmtsIRISequence } from "../UmtsHI2Operations/UmtsIRISequence.ta.mjs";
// export { UmtsIRISequence, _decode_UmtsIRISequence, _encode_UmtsIRISequence } from "../UmtsHI2Operations/UmtsIRISequence.ta.mjs";


/**
 * @summary UmtsIRIsContent
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * UmtsIRIsContent         ::=  CHOICE
 * {
 *     umtsiRIContent            UmtsIRIContent,
 *     umtsIRISequence            UmtsIRISequence
 * }
 * ```
 */
export
type UmtsIRIsContent =
    { umtsiRIContent: UmtsIRIContent } /* CHOICE_ALT_ROOT */
    | { umtsIRISequence: UmtsIRISequence } /* CHOICE_ALT_ROOT */;

let _cached_decoder_for_UmtsIRIsContent: $.ASN1Decoder<UmtsIRIsContent> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) UmtsIRIsContent
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_UmtsIRIsContent (el: _Element): UmtsIRIsContent {
    if (!_cached_decoder_for_UmtsIRIsContent) { _cached_decoder_for_UmtsIRIsContent = $._decode_inextensible_choice<UmtsIRIsContent>({
    "CONTEXT 1": [ "umtsiRIContent", _decode_UmtsIRIContent ],
    "CONTEXT 2": [ "umtsiRIContent", _decode_UmtsIRIContent ],
    "CONTEXT 3": [ "umtsiRIContent", _decode_UmtsIRIContent ],
    "CONTEXT 4": [ "umtsiRIContent", _decode_UmtsIRIContent ],
    "UNIVERSAL 16": [ "umtsIRISequence", _decode_UmtsIRISequence ]
}); }
    return _cached_decoder_for_UmtsIRIsContent(el);
}

let _cached_encoder_for_UmtsIRIsContent: $.ASN1Encoder<UmtsIRIsContent> | null = null;

/**
 * @summary Encodes a(n) UmtsIRIsContent into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The UmtsIRIsContent, encoded as an ASN.1 Element.
 */
export
function _encode_UmtsIRIsContent (value: UmtsIRIsContent, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_UmtsIRIsContent) { _cached_encoder_for_UmtsIRIsContent = $._encode_choice<UmtsIRIsContent>({
    "umtsiRIContent": _encode_UmtsIRIContent,
    "umtsIRISequence": _encode_UmtsIRISequence,
}, $.BER); }
    return _cached_encoder_for_UmtsIRIsContent(value, elGetter);
}


/* eslint-enable */
