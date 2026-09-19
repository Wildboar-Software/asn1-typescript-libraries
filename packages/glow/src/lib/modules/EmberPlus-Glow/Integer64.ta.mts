/* eslint-disable */
import {
    ASN1Element as _Element,
    INTEGER
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary Integer64
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * Integer64  ::=  INTEGER (-9223372036854775808 .. 9223372036854775807)
 * ```
 */
export
type Integer64 = INTEGER;

let _cached_decoder_for_Integer64: $.ASN1Decoder<Integer64> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) Integer64
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_Integer64 (el: _Element): Integer64 {
    if (!_cached_decoder_for_Integer64) { _cached_decoder_for_Integer64 = $._decodeInteger; }
    return _cached_decoder_for_Integer64(el);
}

let _cached_encoder_for_Integer64: $.ASN1Encoder<Integer64> | null = null;

/**
 * @summary Encodes a(n) Integer64 into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The Integer64, encoded as an ASN.1 Element.
 */
export
function _encode_Integer64 (value: Integer64, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_Integer64) { _cached_encoder_for_Integer64 = $._encodeInteger; }
    return _cached_encoder_for_Integer64(value, elGetter);
}


/* eslint-enable */
