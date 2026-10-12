/* eslint-disable */
import {
    ASN1Element as _Element
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { TetraIRIContent, _decode_TetraIRIContent, _encode_TetraIRIContent } from "../TETRA-HI2Operations/TetraIRIContent.ta.mjs";
// export { TetraIRIContent, _decode_TetraIRIContent, _encode_TetraIRIContent } from "../TETRA-HI2Operations/TetraIRIContent.ta.mjs";


/**
 * @summary TetraIRISequence
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * TetraIRISequence         ::=  SEQUENCE OF TetraIRIContent
 * ```
 */
export
type TetraIRISequence = TetraIRIContent[]; // SequenceOfType

let _cached_decoder_for_TetraIRISequence: $.ASN1Decoder<TetraIRISequence> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) TetraIRISequence
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_TetraIRISequence (el: _Element): TetraIRISequence {
    if (!_cached_decoder_for_TetraIRISequence) { _cached_decoder_for_TetraIRISequence = $._decodeSequenceOf<TetraIRIContent>(() => _decode_TetraIRIContent); }
    return _cached_decoder_for_TetraIRISequence(el);
}

let _cached_encoder_for_TetraIRISequence: $.ASN1Encoder<TetraIRISequence> | null = null;

/**
 * @summary Encodes a(n) TetraIRISequence into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The TetraIRISequence, encoded as an ASN.1 Element.
 */
export
function _encode_TetraIRISequence (value: TetraIRISequence, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_TetraIRISequence) { _cached_encoder_for_TetraIRISequence = $._encodeSequenceOf<TetraIRIContent>(() => _encode_TetraIRIContent, $.BER); }
    return _cached_encoder_for_TetraIRISequence(value, elGetter);
}


/* eslint-enable */
