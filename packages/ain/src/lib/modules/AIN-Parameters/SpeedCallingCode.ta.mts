/* eslint-disable */
import {
    ASN1Element as _Element,
    IA5String
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary SpeedCallingCode
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * SpeedCallingCode  ::=  IA5String(SIZE(1..3))
 * ```
 */
export
type SpeedCallingCode = IA5String; // IA5String

let _cached_decoder_for_SpeedCallingCode: $.ASN1Decoder<SpeedCallingCode> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) SpeedCallingCode
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_SpeedCallingCode (el: _Element): SpeedCallingCode {
    if (!_cached_decoder_for_SpeedCallingCode) { _cached_decoder_for_SpeedCallingCode = $._decodeIA5String; }
    return _cached_decoder_for_SpeedCallingCode(el);
}

let _cached_encoder_for_SpeedCallingCode: $.ASN1Encoder<SpeedCallingCode> | null = null;

/**
 * @summary Encodes a(n) SpeedCallingCode into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The SpeedCallingCode, encoded as an ASN.1 Element.
 */
export
function _encode_SpeedCallingCode (value: SpeedCallingCode, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_SpeedCallingCode) { _cached_encoder_for_SpeedCallingCode = $._encodeIA5String; }
    return _cached_encoder_for_SpeedCallingCode(value, elGetter);
}


/* eslint-enable */
