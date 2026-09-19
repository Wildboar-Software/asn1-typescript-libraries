/* eslint-disable */
import {
    ASN1Element as _Element,
    BIT_STRING
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary N3IWFIDNGAP
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * N3IWFIDNGAP  ::=  BIT STRING (SIZE(16))
 * ```
 */
export
type N3IWFIDNGAP = BIT_STRING;

let _cached_decoder_for_N3IWFIDNGAP: $.ASN1Decoder<N3IWFIDNGAP> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) N3IWFIDNGAP
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_N3IWFIDNGAP (el: _Element): N3IWFIDNGAP {
    if (!_cached_decoder_for_N3IWFIDNGAP) { _cached_decoder_for_N3IWFIDNGAP = $._decodeBitString; }
    return _cached_decoder_for_N3IWFIDNGAP(el);
}

let _cached_encoder_for_N3IWFIDNGAP: $.ASN1Encoder<N3IWFIDNGAP> | null = null;

/**
 * @summary Encodes a(n) N3IWFIDNGAP into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The N3IWFIDNGAP, encoded as an ASN.1 Element.
 */
export
function _encode_N3IWFIDNGAP (value: N3IWFIDNGAP, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_N3IWFIDNGAP) { _cached_encoder_for_N3IWFIDNGAP = $._encodeBitString; }
    return _cached_encoder_for_N3IWFIDNGAP(value, elGetter);
}


/* eslint-enable */
