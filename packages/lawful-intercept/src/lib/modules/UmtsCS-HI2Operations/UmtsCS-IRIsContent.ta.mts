/* eslint-disable */
import {
    ASN1Element as _Element
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { UmtsCS_IRIContent, _decode_UmtsCS_IRIContent, _encode_UmtsCS_IRIContent } from "../UmtsCS-HI2Operations/UmtsCS-IRIContent.ta.mjs";
// export { UmtsCS_IRIContent, _decode_UmtsCS_IRIContent, _encode_UmtsCS_IRIContent } from "../UmtsCS-HI2Operations/UmtsCS-IRIContent.ta.mjs";
import { UmtsCS_IRISequence, _decode_UmtsCS_IRISequence, _encode_UmtsCS_IRISequence } from "../UmtsCS-HI2Operations/UmtsCS-IRISequence.ta.mjs";
// export { UmtsCS_IRISequence, _decode_UmtsCS_IRISequence, _encode_UmtsCS_IRISequence } from "../UmtsCS-HI2Operations/UmtsCS-IRISequence.ta.mjs";


/**
 * @summary UmtsCS_IRIsContent
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * UmtsCS-IRIsContent         ::=  CHOICE
 * {
 *     iRIContent            UmtsCS-IRIContent,
 *     iRISequence            UmtsCS-IRISequence
 * }
 * ```
 */
export
type UmtsCS_IRIsContent =
    { iRIContent: UmtsCS_IRIContent } /* CHOICE_ALT_ROOT */
    | { iRISequence: UmtsCS_IRISequence } /* CHOICE_ALT_ROOT */;

let _cached_decoder_for_UmtsCS_IRIsContent: $.ASN1Decoder<UmtsCS_IRIsContent> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) UmtsCS_IRIsContent
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_UmtsCS_IRIsContent (el: _Element): UmtsCS_IRIsContent {
    if (!_cached_decoder_for_UmtsCS_IRIsContent) { _cached_decoder_for_UmtsCS_IRIsContent = $._decode_inextensible_choice<UmtsCS_IRIsContent>({
    "CONTEXT 1": [ "iRIContent", _decode_UmtsCS_IRIContent ],
    "CONTEXT 2": [ "iRIContent", _decode_UmtsCS_IRIContent ],
    "CONTEXT 3": [ "iRIContent", _decode_UmtsCS_IRIContent ],
    "CONTEXT 4": [ "iRIContent", _decode_UmtsCS_IRIContent ],
    "UNIVERSAL 16": [ "iRISequence", _decode_UmtsCS_IRISequence ]
}); }
    return _cached_decoder_for_UmtsCS_IRIsContent(el);
}

let _cached_encoder_for_UmtsCS_IRIsContent: $.ASN1Encoder<UmtsCS_IRIsContent> | null = null;

/**
 * @summary Encodes a(n) UmtsCS_IRIsContent into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The UmtsCS_IRIsContent, encoded as an ASN.1 Element.
 */
export
function _encode_UmtsCS_IRIsContent (value: UmtsCS_IRIsContent, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_UmtsCS_IRIsContent) { _cached_encoder_for_UmtsCS_IRIsContent = $._encode_choice<UmtsCS_IRIsContent>({
    "iRIContent": _encode_UmtsCS_IRIContent,
    "iRISequence": _encode_UmtsCS_IRISequence,
}, $.BER); }
    return _cached_encoder_for_UmtsCS_IRIsContent(value, elGetter);
}


/* eslint-enable */
