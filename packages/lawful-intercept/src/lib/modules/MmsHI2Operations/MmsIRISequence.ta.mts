/* eslint-disable */
import {
    ASN1Element as _Element
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { type MmsIRIContent, _decode_MmsIRIContent, _encode_MmsIRIContent } from "../MmsHI2Operations/MmsIRIContent.ta.mjs";
// export { MmsIRIContent, _decode_MmsIRIContent, _encode_MmsIRIContent } from "../MmsHI2Operations/MmsIRIContent.ta.mjs";


/**
 * @summary MmsIRISequence
 * @description
 * 
 * IRI records aggregated for one LEA because they were available at the same
 * time. Aggregation is optional and is not a reason to delay a record.
 * 
 * 3GPP TS 33.108, annex B.15.
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * MmsIRISequence         ::=  SEQUENCE OF MmsIRIContent
 * ```
 */
export
type MmsIRISequence = MmsIRIContent[]; // SequenceOfType

let _cached_decoder_for_MmsIRISequence: $.ASN1Decoder<MmsIRISequence> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) MmsIRISequence
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_MmsIRISequence (el: _Element): MmsIRISequence {
    if (!_cached_decoder_for_MmsIRISequence) { _cached_decoder_for_MmsIRISequence = $._decodeSequenceOf<MmsIRIContent>(() => _decode_MmsIRIContent); }
    return _cached_decoder_for_MmsIRISequence(el);
}

let _cached_encoder_for_MmsIRISequence: $.ASN1Encoder<MmsIRISequence> | null = null;

/**
 * @summary Encodes a(n) MmsIRISequence into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The MmsIRISequence, encoded as an ASN.1 Element.
 */
export
function _encode_MmsIRISequence (value: MmsIRISequence, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_MmsIRISequence) { _cached_encoder_for_MmsIRISequence = $._encodeSequenceOf<MmsIRIContent>(() => _encode_MmsIRIContent, $.BER); }
    return _cached_encoder_for_MmsIRISequence(value, elGetter);
}


/* eslint-enable */
