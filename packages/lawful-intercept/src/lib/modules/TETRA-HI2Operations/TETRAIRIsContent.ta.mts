/* eslint-disable */
import {
    ASN1Element as _Element
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { type TetraIRIContent, _decode_TetraIRIContent, _encode_TetraIRIContent } from "../TETRA-HI2Operations/TetraIRIContent.ta.mjs";
// export { TetraIRIContent, _decode_TetraIRIContent, _encode_TetraIRIContent } from "../TETRA-HI2Operations/TetraIRIContent.ta.mjs";
import { type TetraIRISequence, _decode_TetraIRISequence, _encode_TetraIRISequence } from "../TETRA-HI2Operations/TetraIRISequence.ta.mjs";
// export { TetraIRISequence, _decode_TetraIRISequence, _encode_TetraIRISequence } from "../TETRA-HI2Operations/TetraIRISequence.ta.mjs";


/**
 * @summary TETRAIRIsContent
 * @description
 * 
 * One TETRA IRI record, or a sequence of records. The module comment says
 * aggregation of UmtsIRIContent is an optional feature. It may be applied when,
 * at one time, several IRI records are available for the same LEA. As a general
 * rule, records created at any event shall be sent immediately and not withheld
 * in the DF or MF in order to apply aggregation. When aggregation is not to be
 * applied, the comment says UmtsIRIContent needs to be chosen. The alternatives
 * defined in this module are `tetraiRIContent` and `tetraIRISequence`.
 *
 * Clause 5.2 states the same rule for HI2: records are sent individually, or
 * optionally aggregated for one LEA in a single delivery. Use of aggregation is
 * subject to national or regional requirements. IRI shall be sent immediately
 * and shall not be held in the MF/DF in order to aggregate. Clause 8 requires
 * IRI to be sent as soon as possible once the information is available, and
 * allows buffering only in exceptional cases, such as data-link failure, for a
 * specified period.
 *
 * ETSI TS 101 671 V3.15.1 (2018-06), clause 5.2, clause 8, clause D.10.3.
 * https://www.etsi.org/deliver/etsi_ts/101600_101699/101671/03.15.01_60/ts_101671v031501p.pdf
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
