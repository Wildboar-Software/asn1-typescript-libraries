/* eslint-disable */
import {
    ASN1Element as _Element
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { EpsIRIContent, _decode_EpsIRIContent, _encode_EpsIRIContent } from "../EpsHI2Operations/EpsIRIContent.ta.mjs";
// export { EpsIRIContent, _decode_EpsIRIContent, _encode_EpsIRIContent } from "../EpsHI2Operations/EpsIRIContent.ta.mjs";
import { EpsIRISequence, _decode_EpsIRISequence, _encode_EpsIRISequence } from "../EpsHI2Operations/EpsIRISequence.ta.mjs";
// export { EpsIRISequence, _decode_EpsIRISequence, _encode_EpsIRISequence } from "../EpsHI2Operations/EpsIRISequence.ta.mjs";


/**
 * @summary EpsIRIsContent
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * EpsIRIsContent  ::=  CHOICE
 * {
 *  epsiRIContent EpsIRIContent,
 *  epsIRISequence EpsIRISequence
 * }
 * ```
 */
export
type EpsIRIsContent =
    { epsiRIContent: EpsIRIContent } /* CHOICE_ALT_ROOT */
    | { epsIRISequence: EpsIRISequence } /* CHOICE_ALT_ROOT */;

let _cached_decoder_for_EpsIRIsContent: $.ASN1Decoder<EpsIRIsContent> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) EpsIRIsContent
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_EpsIRIsContent (el: _Element): EpsIRIsContent {
    if (!_cached_decoder_for_EpsIRIsContent) { _cached_decoder_for_EpsIRIsContent = $._decode_inextensible_choice<EpsIRIsContent>({
    "CONTEXT 1": [ "epsiRIContent", _decode_EpsIRIContent ],
    "CONTEXT 2": [ "epsiRIContent", _decode_EpsIRIContent ],
    "CONTEXT 3": [ "epsiRIContent", _decode_EpsIRIContent ],
    "CONTEXT 4": [ "epsiRIContent", _decode_EpsIRIContent ],
    "UNIVERSAL 16": [ "epsIRISequence", _decode_EpsIRISequence ]
}); }
    return _cached_decoder_for_EpsIRIsContent(el);
}

let _cached_encoder_for_EpsIRIsContent: $.ASN1Encoder<EpsIRIsContent> | null = null;

/**
 * @summary Encodes a(n) EpsIRIsContent into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The EpsIRIsContent, encoded as an ASN.1 Element.
 */
export
function _encode_EpsIRIsContent (value: EpsIRIsContent, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_EpsIRIsContent) { _cached_encoder_for_EpsIRIsContent = $._encode_choice<EpsIRIsContent>({
    "epsiRIContent": _encode_EpsIRIContent,
    "epsIRISequence": _encode_EpsIRISequence,
}, $.BER); }
    return _cached_encoder_for_EpsIRIsContent(value, elGetter);
}


/* eslint-enable */
