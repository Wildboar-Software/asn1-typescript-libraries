/* eslint-disable */
import {
    ASN1Element as _Element
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { type ConfIRIContent, _decode_ConfIRIContent, _encode_ConfIRIContent } from "../CONFHI2Operations/ConfIRIContent.ta.mjs";
// export { ConfIRIContent, _decode_ConfIRIContent, _encode_ConfIRIContent } from "../CONFHI2Operations/ConfIRIContent.ta.mjs";


/**
 * @summary ConfIRISequence
 * @description
 * 
 * Aggregated conference IRI records for one LEA destination.
 *
 * Optional. Do not delay a record in the delivery or mediation function in
 * order to build this sequence. 3GPP TS 33.108, annex B.11.1.
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ConfIRISequence         ::=  SEQUENCE OF ConfIRIContent
 * ```
 */
export
type ConfIRISequence = ConfIRIContent[]; // SequenceOfType

let _cached_decoder_for_ConfIRISequence: $.ASN1Decoder<ConfIRISequence> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) ConfIRISequence
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_ConfIRISequence (el: _Element): ConfIRISequence {
    if (!_cached_decoder_for_ConfIRISequence) { _cached_decoder_for_ConfIRISequence = $._decodeSequenceOf<ConfIRIContent>(() => _decode_ConfIRIContent); }
    return _cached_decoder_for_ConfIRISequence(el);
}

let _cached_encoder_for_ConfIRISequence: $.ASN1Encoder<ConfIRISequence> | null = null;

/**
 * @summary Encodes a(n) ConfIRISequence into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ConfIRISequence, encoded as an ASN.1 Element.
 */
export
function _encode_ConfIRISequence (value: ConfIRISequence, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_ConfIRISequence) { _cached_encoder_for_ConfIRISequence = $._encodeSequenceOf<ConfIRIContent>(() => _encode_ConfIRIContent, $.BER); }
    return _cached_encoder_for_ConfIRISequence(value, elGetter);
}


/* eslint-enable */
