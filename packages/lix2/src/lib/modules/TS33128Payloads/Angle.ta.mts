/* eslint-disable */
import {
    ASN1Element as _Element,
    INTEGER
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary Angle
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * Angle  ::=  INTEGER (0..360)
 * ```
 */
export
type Angle = INTEGER;

let _cached_decoder_for_Angle: $.ASN1Decoder<Angle> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) Angle
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_Angle (el: _Element): Angle {
    if (!_cached_decoder_for_Angle) { _cached_decoder_for_Angle = $._decodeInteger; }
    return _cached_decoder_for_Angle(el);
}

let _cached_encoder_for_Angle: $.ASN1Encoder<Angle> | null = null;

/**
 * @summary Encodes a(n) Angle into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The Angle, encoded as an ASN.1 Element.
 */
export
function _encode_Angle (value: Angle, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_Angle) { _cached_encoder_for_Angle = $._encodeInteger; }
    return _cached_encoder_for_Angle(value, elGetter);
}


/* eslint-enable */
