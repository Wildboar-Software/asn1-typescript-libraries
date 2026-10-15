/* eslint-disable */
import {
    ASN1Element as _Element
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { IWLANUmtsIRIContent, _decode_IWLANUmtsIRIContent, _encode_IWLANUmtsIRIContent } from "../IWLANUmtsHI2Operations/IWLANUmtsIRIContent.ta.mjs";
// export { IWLANUmtsIRIContent, _decode_IWLANUmtsIRIContent, _encode_IWLANUmtsIRIContent } from "../IWLANUmtsHI2Operations/IWLANUmtsIRIContent.ta.mjs";
import { IWLANUmtsIRISequence, _decode_IWLANUmtsIRISequence, _encode_IWLANUmtsIRISequence } from "../IWLANUmtsHI2Operations/IWLANUmtsIRISequence.ta.mjs";
// export { IWLANUmtsIRISequence, _decode_IWLANUmtsIRISequence, _encode_IWLANUmtsIRISequence } from "../IWLANUmtsHI2Operations/IWLANUmtsIRISequence.ta.mjs";


/**
 * @summary IWLANUmtsIRIsContent
 * @description
 * 
 * One IRI record (`iWLANumtsiRIContent`) or a sequence of records
 * (`iWLANumtsIRISequence`) for the same LEA.
 * 
 * Use the sequence only when several records are already available for delivery
 * together. Do not withhold a record in order to aggregate it. When not
 * aggregating, choose the single record.
 * 
 * 3GPP TS 33.108, clause 8 and annex B.7.
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * IWLANUmtsIRIsContent         ::=  CHOICE
 * {
 *     iWLANumtsiRIContent            IWLANUmtsIRIContent,
 *     iWLANumtsIRISequence        IWLANUmtsIRISequence
 * }
 * ```
 */
export
type IWLANUmtsIRIsContent =
    { iWLANumtsiRIContent: IWLANUmtsIRIContent } /* CHOICE_ALT_ROOT */
    | { iWLANumtsIRISequence: IWLANUmtsIRISequence } /* CHOICE_ALT_ROOT */;

let _cached_decoder_for_IWLANUmtsIRIsContent: $.ASN1Decoder<IWLANUmtsIRIsContent> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) IWLANUmtsIRIsContent
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_IWLANUmtsIRIsContent (el: _Element): IWLANUmtsIRIsContent {
    if (!_cached_decoder_for_IWLANUmtsIRIsContent) { _cached_decoder_for_IWLANUmtsIRIsContent = $._decode_inextensible_choice<IWLANUmtsIRIsContent>({
    "CONTEXT 1": [ "iWLANumtsiRIContent", _decode_IWLANUmtsIRIContent ],
    "CONTEXT 2": [ "iWLANumtsiRIContent", _decode_IWLANUmtsIRIContent ],
    "CONTEXT 3": [ "iWLANumtsiRIContent", _decode_IWLANUmtsIRIContent ],
    "UNIVERSAL 16": [ "iWLANumtsIRISequence", _decode_IWLANUmtsIRISequence ]
}); }
    return _cached_decoder_for_IWLANUmtsIRIsContent(el);
}

let _cached_encoder_for_IWLANUmtsIRIsContent: $.ASN1Encoder<IWLANUmtsIRIsContent> | null = null;

/**
 * @summary Encodes a(n) IWLANUmtsIRIsContent into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The IWLANUmtsIRIsContent, encoded as an ASN.1 Element.
 */
export
function _encode_IWLANUmtsIRIsContent (value: IWLANUmtsIRIsContent, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_IWLANUmtsIRIsContent) { _cached_encoder_for_IWLANUmtsIRIsContent = $._encode_choice<IWLANUmtsIRIsContent>({
    "iWLANumtsiRIContent": _encode_IWLANUmtsIRIContent,
    "iWLANumtsIRISequence": _encode_IWLANUmtsIRISequence,
}, $.BER); }
    return _cached_encoder_for_IWLANUmtsIRIsContent(value, elGetter);
}


/* eslint-enable */
