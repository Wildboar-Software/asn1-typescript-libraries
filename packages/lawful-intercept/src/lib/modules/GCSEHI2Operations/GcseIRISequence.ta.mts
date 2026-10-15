/* eslint-disable */
import {
    ASN1Element as _Element
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { GcseIRIContent, _decode_GcseIRIContent, _encode_GcseIRIContent } from "../GCSEHI2Operations/GcseIRIContent.ta.mjs";
// export { GcseIRIContent, _decode_GcseIRIContent, _encode_GcseIRIContent } from "../GCSEHI2Operations/GcseIRIContent.ta.mjs";


/**
 * @summary GcseIRISequence
 * @description
 * 
 * Aggregated GCSE IRI records for one LEA destination. Do not delay a record in
 * the delivery or mediation function in order to build this sequence. 3GPP TS
 * 33.108, annex B.14.1.
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * GcseIRISequence         ::=  SEQUENCE OF GcseIRIContent
 * ```
 */
export
type GcseIRISequence = GcseIRIContent[]; // SequenceOfType

let _cached_decoder_for_GcseIRISequence: $.ASN1Decoder<GcseIRISequence> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) GcseIRISequence
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_GcseIRISequence (el: _Element): GcseIRISequence {
    if (!_cached_decoder_for_GcseIRISequence) { _cached_decoder_for_GcseIRISequence = $._decodeSequenceOf<GcseIRIContent>(() => _decode_GcseIRIContent); }
    return _cached_decoder_for_GcseIRISequence(el);
}

let _cached_encoder_for_GcseIRISequence: $.ASN1Encoder<GcseIRISequence> | null = null;

/**
 * @summary Encodes a(n) GcseIRISequence into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The GcseIRISequence, encoded as an ASN.1 Element.
 */
export
function _encode_GcseIRISequence (value: GcseIRISequence, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_GcseIRISequence) { _cached_encoder_for_GcseIRISequence = $._encodeSequenceOf<GcseIRIContent>(() => _encode_GcseIRIContent, $.BER); }
    return _cached_encoder_for_GcseIRISequence(value, elGetter);
}


/* eslint-enable */
