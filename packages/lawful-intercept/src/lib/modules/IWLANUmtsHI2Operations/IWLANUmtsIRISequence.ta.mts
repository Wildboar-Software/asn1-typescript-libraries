/* eslint-disable */
import {
    ASN1Element as _Element
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { type IWLANUmtsIRIContent, _decode_IWLANUmtsIRIContent, _encode_IWLANUmtsIRIContent } from "../IWLANUmtsHI2Operations/IWLANUmtsIRIContent.ta.mjs";
// export { IWLANUmtsIRIContent, _decode_IWLANUmtsIRIContent, _encode_IWLANUmtsIRIContent } from "../IWLANUmtsHI2Operations/IWLANUmtsIRIContent.ta.mjs";


/**
 * @summary IWLANUmtsIRISequence
 * @description
 * 
 * IRI records aggregated for one LEA because they were available at the same
 * time. Aggregation is optional and is not a reason to delay a record.
 * 
 * 3GPP TS 33.108, annex B.7.
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * IWLANUmtsIRISequence         ::=  SEQUENCE OF IWLANUmtsIRIContent
 * ```
 */
export
type IWLANUmtsIRISequence = IWLANUmtsIRIContent[]; // SequenceOfType

let _cached_decoder_for_IWLANUmtsIRISequence: $.ASN1Decoder<IWLANUmtsIRISequence> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) IWLANUmtsIRISequence
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_IWLANUmtsIRISequence (el: _Element): IWLANUmtsIRISequence {
    if (!_cached_decoder_for_IWLANUmtsIRISequence) { _cached_decoder_for_IWLANUmtsIRISequence = $._decodeSequenceOf<IWLANUmtsIRIContent>(() => _decode_IWLANUmtsIRIContent); }
    return _cached_decoder_for_IWLANUmtsIRISequence(el);
}

let _cached_encoder_for_IWLANUmtsIRISequence: $.ASN1Encoder<IWLANUmtsIRISequence> | null = null;

/**
 * @summary Encodes a(n) IWLANUmtsIRISequence into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The IWLANUmtsIRISequence, encoded as an ASN.1 Element.
 */
export
function _encode_IWLANUmtsIRISequence (value: IWLANUmtsIRISequence, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_IWLANUmtsIRISequence) { _cached_encoder_for_IWLANUmtsIRISequence = $._encodeSequenceOf<IWLANUmtsIRIContent>(() => _encode_IWLANUmtsIRIContent, $.BER); }
    return _cached_encoder_for_IWLANUmtsIRISequence(value, elGetter);
}


/* eslint-enable */
