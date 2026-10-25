/* eslint-disable */
import {
    ASN1Element as _Element
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { type ProSeIRIContent, _decode_ProSeIRIContent, _encode_ProSeIRIContent } from "../ProSeHI2Operations/ProSeIRIContent.ta.mjs";
// export { ProSeIRIContent, _decode_ProSeIRIContent, _encode_ProSeIRIContent } from "../ProSeHI2Operations/ProSeIRIContent.ta.mjs";


/**
 * @summary ProSeIRISequence
 * @description
 * 
 * Aggregated ProSe IRI records for one LEA destination. Do not delay a record
 * in the delivery or mediation function in order to build this sequence. 3GPP
 * TS 33.108, annex B.13.
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ProSeIRISequence         ::=  SEQUENCE OF ProSeIRIContent
 * ```
 */
export
type ProSeIRISequence = ProSeIRIContent[]; // SequenceOfType

let _cached_decoder_for_ProSeIRISequence: $.ASN1Decoder<ProSeIRISequence> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) ProSeIRISequence
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_ProSeIRISequence (el: _Element): ProSeIRISequence {
    if (!_cached_decoder_for_ProSeIRISequence) { _cached_decoder_for_ProSeIRISequence = $._decodeSequenceOf<ProSeIRIContent>(() => _decode_ProSeIRIContent); }
    return _cached_decoder_for_ProSeIRISequence(el);
}

let _cached_encoder_for_ProSeIRISequence: $.ASN1Encoder<ProSeIRISequence> | null = null;

/**
 * @summary Encodes a(n) ProSeIRISequence into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ProSeIRISequence, encoded as an ASN.1 Element.
 */
export
function _encode_ProSeIRISequence (value: ProSeIRISequence, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_ProSeIRISequence) { _cached_encoder_for_ProSeIRISequence = $._encodeSequenceOf<ProSeIRIContent>(() => _encode_ProSeIRIContent, $.BER); }
    return _cached_encoder_for_ProSeIRISequence(value, elGetter);
}


/* eslint-enable */
