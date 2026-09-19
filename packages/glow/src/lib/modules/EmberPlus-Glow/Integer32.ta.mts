/* eslint-disable */
import {
    ASN1Element as _Element,
    INTEGER
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary Integer32
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * Integer32  ::=  INTEGER (-2147483648 .. 2147483647)
 * ```
 */
export
type Integer32 = INTEGER;

let _cached_decoder_for_Integer32: $.ASN1Decoder<Integer32> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) Integer32
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_Integer32 (el: _Element): Integer32 {
    if (!_cached_decoder_for_Integer32) { _cached_decoder_for_Integer32 = $._decodeInteger; }
    return _cached_decoder_for_Integer32(el);
}

let _cached_encoder_for_Integer32: $.ASN1Encoder<Integer32> | null = null;

/**
 * @summary Encodes a(n) Integer32 into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The Integer32, encoded as an ASN.1 Element.
 */
export
function _encode_Integer32 (value: Integer32, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_Integer32) { _cached_encoder_for_Integer32 = $._encodeInteger; }
    return _cached_encoder_for_Integer32(value, elGetter);
}


/* eslint-enable */
