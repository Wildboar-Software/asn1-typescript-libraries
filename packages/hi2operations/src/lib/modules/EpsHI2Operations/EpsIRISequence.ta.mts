/* eslint-disable */
import {
    ASN1Element as _Element
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { EpsIRIContent, _decode_EpsIRIContent, _encode_EpsIRIContent } from "../EpsHI2Operations/EpsIRIContent.ta.mjs";
// export { EpsIRIContent, _decode_EpsIRIContent, _encode_EpsIRIContent } from "../EpsHI2Operations/EpsIRIContent.ta.mjs";


/**
 * @summary EpsIRISequence
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * EpsIRISequence  ::=  SEQUENCE OF EpsIRIContent
 * ```
 */
export
type EpsIRISequence = EpsIRIContent[]; // SequenceOfType

let _cached_decoder_for_EpsIRISequence: $.ASN1Decoder<EpsIRISequence> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) EpsIRISequence
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_EpsIRISequence (el: _Element): EpsIRISequence {
    if (!_cached_decoder_for_EpsIRISequence) { _cached_decoder_for_EpsIRISequence = $._decodeSequenceOf<EpsIRIContent>(() => _decode_EpsIRIContent); }
    return _cached_decoder_for_EpsIRISequence(el);
}

let _cached_encoder_for_EpsIRISequence: $.ASN1Encoder<EpsIRISequence> | null = null;

/**
 * @summary Encodes a(n) EpsIRISequence into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The EpsIRISequence, encoded as an ASN.1 Element.
 */
export
function _encode_EpsIRISequence (value: EpsIRISequence, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_EpsIRISequence) { _cached_encoder_for_EpsIRISequence = $._encodeSequenceOf<EpsIRIContent>(() => _encode_EpsIRIContent, $.BER); }
    return _cached_encoder_for_EpsIRISequence(value, elGetter);
}


/* eslint-enable */
