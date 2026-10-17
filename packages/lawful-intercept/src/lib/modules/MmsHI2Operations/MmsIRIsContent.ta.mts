/* eslint-disable */
import {
    ASN1Element as _Element
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { MmsIRIContent, _decode_MmsIRIContent, _encode_MmsIRIContent } from "../MmsHI2Operations/MmsIRIContent.ta.mjs";
// export { MmsIRIContent, _decode_MmsIRIContent, _encode_MmsIRIContent } from "../MmsHI2Operations/MmsIRIContent.ta.mjs";
import { MmsIRISequence, _decode_MmsIRISequence, _encode_MmsIRISequence } from "../MmsHI2Operations/MmsIRISequence.ta.mjs";
// export { MmsIRISequence, _decode_MmsIRISequence, _encode_MmsIRISequence } from "../MmsHI2Operations/MmsIRISequence.ta.mjs";


/**
 * @summary MmsIRIsContent
 * @description
 * 
 * One IRI record (`mmsiRIContent`) or a sequence of records (`mmsIRISequence`)
 * for the same LEA.
 * 
 * Use the sequence only when several records are already available for delivery
 * together. Do not withhold a record in order to aggregate it. When not
 * aggregating, choose the single record. The single record includes the events
 * that correspond to MMS.
 * 
 * 3GPP TS 33.108, clause 15.3 and annex B.15.
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * MmsIRIsContent         ::=  CHOICE
 * {
 *     mmsiRIContent            MmsIRIContent,
 *     mmsIRISequence            MmsIRISequence
 * }
 * ```
 */
export
type MmsIRIsContent =
    { mmsiRIContent: MmsIRIContent } /* CHOICE_ALT_ROOT */
    | { mmsIRISequence: MmsIRISequence } /* CHOICE_ALT_ROOT */;

let _cached_decoder_for_MmsIRIsContent: $.ASN1Decoder<MmsIRIsContent> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) MmsIRIsContent
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_MmsIRIsContent (el: _Element): MmsIRIsContent {
    if (!_cached_decoder_for_MmsIRIsContent) { _cached_decoder_for_MmsIRIsContent = $._decode_inextensible_choice<MmsIRIsContent>({
    "CONTEXT 1": [ "mmsiRIContent", _decode_MmsIRIContent ],
    "CONTEXT 2": [ "mmsiRIContent", _decode_MmsIRIContent ],
    "CONTEXT 3": [ "mmsiRIContent", _decode_MmsIRIContent ],
    "CONTEXT 4": [ "mmsiRIContent", _decode_MmsIRIContent ],
    "UNIVERSAL 16": [ "mmsIRISequence", _decode_MmsIRISequence ]
}); }
    return _cached_decoder_for_MmsIRIsContent(el);
}

let _cached_encoder_for_MmsIRIsContent: $.ASN1Encoder<MmsIRIsContent> | null = null;

/**
 * @summary Encodes a(n) MmsIRIsContent into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The MmsIRIsContent, encoded as an ASN.1 Element.
 */
export
function _encode_MmsIRIsContent (value: MmsIRIsContent, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_MmsIRIsContent) { _cached_encoder_for_MmsIRIsContent = $._encode_choice<MmsIRIsContent>({
    "mmsiRIContent": _encode_MmsIRIContent,
    "mmsIRISequence": _encode_MmsIRISequence,
}, $.BER); }
    return _cached_encoder_for_MmsIRIsContent(value, elGetter);
}


/* eslint-enable */
