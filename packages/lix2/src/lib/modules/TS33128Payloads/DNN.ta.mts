/* eslint-disable */
import {
    ASN1Element as _Element,
    UTF8String
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary DNN
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * DNN  ::=  UTF8String
 * ```
 */
export
type DNN = UTF8String; // UTF8String

let _cached_decoder_for_DNN: $.ASN1Decoder<DNN> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) DNN
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_DNN (el: _Element): DNN {
    if (!_cached_decoder_for_DNN) { _cached_decoder_for_DNN = $._decodeUTF8String; }
    return _cached_decoder_for_DNN(el);
}

let _cached_encoder_for_DNN: $.ASN1Encoder<DNN> | null = null;

/**
 * @summary Encodes a(n) DNN into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The DNN, encoded as an ASN.1 Element.
 */
export
function _encode_DNN (value: DNN, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_DNN) { _cached_encoder_for_DNN = $._encodeUTF8String; }
    return _cached_encoder_for_DNN(value, elGetter);
}


/* eslint-enable */
