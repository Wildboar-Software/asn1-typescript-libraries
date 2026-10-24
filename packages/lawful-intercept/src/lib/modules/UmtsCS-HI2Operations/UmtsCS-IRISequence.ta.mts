/* eslint-disable */
import {
    ASN1Element as _Element
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { type UmtsCS_IRIContent, _decode_UmtsCS_IRIContent, _encode_UmtsCS_IRIContent } from "../UmtsCS-HI2Operations/UmtsCS-IRIContent.ta.mjs";
// export { UmtsCS_IRIContent, _decode_UmtsCS_IRIContent, _encode_UmtsCS_IRIContent } from "../UmtsCS-HI2Operations/UmtsCS-IRIContent.ta.mjs";


/**
 * @summary UmtsCS_IRISequence
 * @description
 * 
 * Aggregated CS IRI records for one LEA destination. Do not delay a record in
 * order to build this sequence. 3GPP TS 33.108, annex B.3a.
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * UmtsCS-IRISequence         ::=  SEQUENCE OF UmtsCS-IRIContent
 * ```
 */
export
type UmtsCS_IRISequence = UmtsCS_IRIContent[]; // SequenceOfType

let _cached_decoder_for_UmtsCS_IRISequence: $.ASN1Decoder<UmtsCS_IRISequence> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) UmtsCS_IRISequence
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_UmtsCS_IRISequence (el: _Element): UmtsCS_IRISequence {
    if (!_cached_decoder_for_UmtsCS_IRISequence) { _cached_decoder_for_UmtsCS_IRISequence = $._decodeSequenceOf<UmtsCS_IRIContent>(() => _decode_UmtsCS_IRIContent); }
    return _cached_decoder_for_UmtsCS_IRISequence(el);
}

let _cached_encoder_for_UmtsCS_IRISequence: $.ASN1Encoder<UmtsCS_IRISequence> | null = null;

/**
 * @summary Encodes a(n) UmtsCS_IRISequence into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The UmtsCS_IRISequence, encoded as an ASN.1 Element.
 */
export
function _encode_UmtsCS_IRISequence (value: UmtsCS_IRISequence, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_UmtsCS_IRISequence) { _cached_encoder_for_UmtsCS_IRISequence = $._encodeSequenceOf<UmtsCS_IRIContent>(() => _encode_UmtsCS_IRIContent, $.BER); }
    return _cached_encoder_for_UmtsCS_IRISequence(value, elGetter);
}


/* eslint-enable */
