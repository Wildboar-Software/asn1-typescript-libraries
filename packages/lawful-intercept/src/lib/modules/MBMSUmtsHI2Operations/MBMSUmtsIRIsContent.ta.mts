/* eslint-disable */
import {
    type ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { type MBMSUmtsIRIContent, _decode_MBMSUmtsIRIContent, _encode_MBMSUmtsIRIContent } from "../MBMSUmtsHI2Operations/MBMSUmtsIRIContent.ta.mjs";
// export { MBMSUmtsIRIContent, _decode_MBMSUmtsIRIContent, _encode_MBMSUmtsIRIContent } from "../MBMSUmtsHI2Operations/MBMSUmtsIRIContent.ta.mjs";
import { type MBMSUmtsIRISequence, _decode_MBMSUmtsIRISequence, _encode_MBMSUmtsIRISequence } from "../MBMSUmtsHI2Operations/MBMSUmtsIRISequence.ta.mjs";
// export { MBMSUmtsIRISequence, _decode_MBMSUmtsIRISequence, _encode_MBMSUmtsIRISequence } from "../MBMSUmtsHI2Operations/MBMSUmtsIRISequence.ta.mjs";


/**
 * @summary MBMSUmtsIRIsContent
 * @description
 * 
 * One IRI record (`mBMSumtsiRIContent`) or a sequence of records
 * (`mBMSumtsIRISequence`) for the same LEA.
 * 
 * Use the sequence only when several records are already available for delivery
 * together. Do not withhold a record in order to aggregate it. When not
 * aggregating, choose the single record.
 * 
 * 3GPP TS 33.108, clause 9 and annex B.8.
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * MBMSUmtsIRIsContent         ::=  CHOICE
 * {
 *     mBMSumtsiRIContent        [1] MBMSUmtsIRIContent,
 *     mBMSumtsIRISequence        [2] MBMSUmtsIRISequence
 * }
 * ```
 */
export
type MBMSUmtsIRIsContent =
    { mBMSumtsiRIContent: MBMSUmtsIRIContent } /* CHOICE_ALT_ROOT */
    | { mBMSumtsIRISequence: MBMSUmtsIRISequence } /* CHOICE_ALT_ROOT */;

let _cached_decoder_for_MBMSUmtsIRIsContent: $.ASN1Decoder<MBMSUmtsIRIsContent> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) MBMSUmtsIRIsContent
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_MBMSUmtsIRIsContent (el: _Element): MBMSUmtsIRIsContent {
    if (!_cached_decoder_for_MBMSUmtsIRIsContent) { _cached_decoder_for_MBMSUmtsIRIsContent = $._decode_inextensible_choice<MBMSUmtsIRIsContent>({
    "CONTEXT 1": [ "mBMSumtsiRIContent", $._decode_explicit<MBMSUmtsIRIContent>(() => _decode_MBMSUmtsIRIContent) ],
    "CONTEXT 2": [ "mBMSumtsIRISequence", $._decode_implicit<MBMSUmtsIRISequence>(() => _decode_MBMSUmtsIRISequence) ]
}); }
    return _cached_decoder_for_MBMSUmtsIRIsContent(el);
}

let _cached_encoder_for_MBMSUmtsIRIsContent: $.ASN1Encoder<MBMSUmtsIRIsContent> | null = null;

/**
 * @summary Encodes a(n) MBMSUmtsIRIsContent into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The MBMSUmtsIRIsContent, encoded as an ASN.1 Element.
 */
export
function _encode_MBMSUmtsIRIsContent (value: MBMSUmtsIRIsContent, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_MBMSUmtsIRIsContent) { _cached_encoder_for_MBMSUmtsIRIsContent = $._encode_choice<MBMSUmtsIRIsContent>({
    "mBMSumtsiRIContent": $._encode_explicit(_TagClass.context, 1, () => _encode_MBMSUmtsIRIContent, $.BER),
    "mBMSumtsIRISequence": $._encode_implicit(_TagClass.context, 2, () => _encode_MBMSUmtsIRISequence, $.BER),
}, $.BER); }
    return _cached_encoder_for_MBMSUmtsIRIsContent(value, elGetter);
}


/* eslint-enable */
