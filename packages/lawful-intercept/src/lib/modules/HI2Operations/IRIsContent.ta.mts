/* eslint-disable */
import {
    ASN1Element as _Element
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { IRIContent, _decode_IRIContent, _encode_IRIContent } from "../HI2Operations/IRIContent.ta.mjs";
// export { IRIContent, _decode_IRIContent, _encode_IRIContent } from "../HI2Operations/IRIContent.ta.mjs";
import { IRISequence, _decode_IRISequence, _encode_IRISequence } from "../HI2Operations/IRISequence.ta.mjs";
// export { IRISequence, _decode_IRISequence, _encode_IRISequence } from "../HI2Operations/IRISequence.ta.mjs";


/**
 * @summary IRIsContent
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * IRIsContent  ::=  CHOICE
 * {
 *     iRIContent        IRIContent,
 *     iRISequence        IRISequence
 * }
 * ```
 */
export
type IRIsContent =
    { iRIContent: IRIContent } /* CHOICE_ALT_ROOT */
    | { iRISequence: IRISequence } /* CHOICE_ALT_ROOT */;

let _cached_decoder_for_IRIsContent: $.ASN1Decoder<IRIsContent> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) IRIsContent
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_IRIsContent (el: _Element): IRIsContent {
    if (!_cached_decoder_for_IRIsContent) { _cached_decoder_for_IRIsContent = $._decode_inextensible_choice<IRIsContent>({
    "CONTEXT 1": [ "iRIContent", _decode_IRIContent ],
    "CONTEXT 2": [ "iRIContent", _decode_IRIContent ],
    "CONTEXT 3": [ "iRIContent", _decode_IRIContent ],
    "CONTEXT 4": [ "iRIContent", _decode_IRIContent ],
    "UNIVERSAL 16": [ "iRISequence", _decode_IRISequence ]
}); }
    return _cached_decoder_for_IRIsContent(el);
}

let _cached_encoder_for_IRIsContent: $.ASN1Encoder<IRIsContent> | null = null;

/**
 * @summary Encodes a(n) IRIsContent into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The IRIsContent, encoded as an ASN.1 Element.
 */
export
function _encode_IRIsContent (value: IRIsContent, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_IRIsContent) { _cached_encoder_for_IRIsContent = $._encode_choice<IRIsContent>({
    "iRIContent": _encode_IRIContent,
    "iRISequence": _encode_IRISequence,
}, $.BER); }
    return _cached_encoder_for_IRIsContent(value, elGetter);
}


/* eslint-enable */
