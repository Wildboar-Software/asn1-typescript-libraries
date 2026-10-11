/* eslint-disable */
import {
    ASN1Element as _Element
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { UmtsIRIContent, _decode_UmtsIRIContent, _encode_UmtsIRIContent } from "../UmtsHI2Operations/UmtsIRIContent.ta.mjs";
// export { UmtsIRIContent, _decode_UmtsIRIContent, _encode_UmtsIRIContent } from "../UmtsHI2Operations/UmtsIRIContent.ta.mjs";


/**
 * @summary UmtsIRISequence
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * UmtsIRISequence         ::=  SEQUENCE OF UmtsIRIContent
 * ```
 */
export
type UmtsIRISequence = UmtsIRIContent[]; // SequenceOfType

let _cached_decoder_for_UmtsIRISequence: $.ASN1Decoder<UmtsIRISequence> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) UmtsIRISequence
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_UmtsIRISequence (el: _Element): UmtsIRISequence {
    if (!_cached_decoder_for_UmtsIRISequence) { _cached_decoder_for_UmtsIRISequence = $._decodeSequenceOf<UmtsIRIContent>(() => _decode_UmtsIRIContent); }
    return _cached_decoder_for_UmtsIRISequence(el);
}

let _cached_encoder_for_UmtsIRISequence: $.ASN1Encoder<UmtsIRISequence> | null = null;

/**
 * @summary Encodes a(n) UmtsIRISequence into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The UmtsIRISequence, encoded as an ASN.1 Element.
 */
export
function _encode_UmtsIRISequence (value: UmtsIRISequence, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_UmtsIRISequence) { _cached_encoder_for_UmtsIRISequence = $._encodeSequenceOf<UmtsIRIContent>(() => _encode_UmtsIRIContent, $.BER); }
    return _cached_encoder_for_UmtsIRISequence(value, elGetter);
}


/* eslint-enable */
