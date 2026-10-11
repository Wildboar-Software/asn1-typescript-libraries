/* eslint-disable */
import {
    ASN1Element as _Element,
    INTEGER
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary Confidence
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * Confidence  ::=  INTEGER (0..100)
 * ```
 */
export
type Confidence = INTEGER;

let _cached_decoder_for_Confidence: $.ASN1Decoder<Confidence> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) Confidence
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_Confidence (el: _Element): Confidence {
    if (!_cached_decoder_for_Confidence) { _cached_decoder_for_Confidence = $._decodeInteger; }
    return _cached_decoder_for_Confidence(el);
}

let _cached_encoder_for_Confidence: $.ASN1Encoder<Confidence> | null = null;

/**
 * @summary Encodes a(n) Confidence into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The Confidence, encoded as an ASN.1 Element.
 */
export
function _encode_Confidence (value: Confidence, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_Confidence) { _cached_encoder_for_Confidence = $._encodeInteger; }
    return _cached_encoder_for_Confidence(value, elGetter);
}


/* eslint-enable */
