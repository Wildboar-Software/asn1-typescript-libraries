/* eslint-disable */
import {
    ASN1Element as _Element,
    INTEGER
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary IntPosLong
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * IntPosLong              ::=     INTEGER (1 .. 4294967295)
 * ```
 */
export
type IntPosLong = INTEGER;

let _cached_decoder_for_IntPosLong: $.ASN1Decoder<IntPosLong> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) IntPosLong
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_IntPosLong (el: _Element): IntPosLong {
    if (!_cached_decoder_for_IntPosLong) { _cached_decoder_for_IntPosLong = $._decodeInteger; }
    return _cached_decoder_for_IntPosLong(el);
}

let _cached_encoder_for_IntPosLong: $.ASN1Encoder<IntPosLong> | null = null;

/**
 * @summary Encodes a(n) IntPosLong into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The IntPosLong, encoded as an ASN.1 Element.
 */
export
function _encode_IntPosLong (value: IntPosLong, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_IntPosLong) { _cached_encoder_for_IntPosLong = $._encodeInteger; }
    return _cached_encoder_for_IntPosLong(value, elGetter);
}


/* eslint-enable */
