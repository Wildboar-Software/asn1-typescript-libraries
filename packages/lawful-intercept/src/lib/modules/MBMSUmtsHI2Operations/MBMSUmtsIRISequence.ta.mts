/* eslint-disable */
import {
    ASN1Element as _Element
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { MBMSUmtsIRIContent, _decode_MBMSUmtsIRIContent, _encode_MBMSUmtsIRIContent } from "../MBMSUmtsHI2Operations/MBMSUmtsIRIContent.ta.mjs";
// export { MBMSUmtsIRIContent, _decode_MBMSUmtsIRIContent, _encode_MBMSUmtsIRIContent } from "../MBMSUmtsHI2Operations/MBMSUmtsIRIContent.ta.mjs";


/**
 * @summary MBMSUmtsIRISequence
 * @description
 * 
 * IRI records aggregated for one LEA because they were available at the same
 * time. Aggregation is optional and is not a reason to delay a record.
 * 
 * 3GPP TS 33.108, annex B.8.
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * MBMSUmtsIRISequence         ::=  SEQUENCE OF MBMSUmtsIRIContent
 * ```
 */
export
type MBMSUmtsIRISequence = MBMSUmtsIRIContent[]; // SequenceOfType

let _cached_decoder_for_MBMSUmtsIRISequence: $.ASN1Decoder<MBMSUmtsIRISequence> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) MBMSUmtsIRISequence
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_MBMSUmtsIRISequence (el: _Element): MBMSUmtsIRISequence {
    if (!_cached_decoder_for_MBMSUmtsIRISequence) { _cached_decoder_for_MBMSUmtsIRISequence = $._decodeSequenceOf<MBMSUmtsIRIContent>(() => _decode_MBMSUmtsIRIContent); }
    return _cached_decoder_for_MBMSUmtsIRISequence(el);
}

let _cached_encoder_for_MBMSUmtsIRISequence: $.ASN1Encoder<MBMSUmtsIRISequence> | null = null;

/**
 * @summary Encodes a(n) MBMSUmtsIRISequence into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The MBMSUmtsIRISequence, encoded as an ASN.1 Element.
 */
export
function _encode_MBMSUmtsIRISequence (value: MBMSUmtsIRISequence, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_MBMSUmtsIRISequence) { _cached_encoder_for_MBMSUmtsIRISequence = $._encodeSequenceOf<MBMSUmtsIRIContent>(() => _encode_MBMSUmtsIRIContent, $.BER); }
    return _cached_encoder_for_MBMSUmtsIRISequence(value, elGetter);
}


/* eslint-enable */
