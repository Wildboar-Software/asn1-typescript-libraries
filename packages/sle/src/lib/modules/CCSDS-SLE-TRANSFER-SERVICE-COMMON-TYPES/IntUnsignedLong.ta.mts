/* eslint-disable */
import {
    ASN1Element as _Element,
    INTEGER
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary IntUnsignedLong
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * IntUnsignedLong         ::=     INTEGER (0 .. 4294967295)
 * ```
 */
export
type IntUnsignedLong = INTEGER;

let _cached_decoder_for_IntUnsignedLong: $.ASN1Decoder<IntUnsignedLong> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) IntUnsignedLong
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_IntUnsignedLong (el: _Element): IntUnsignedLong {
    if (!_cached_decoder_for_IntUnsignedLong) { _cached_decoder_for_IntUnsignedLong = $._decodeInteger; }
    return _cached_decoder_for_IntUnsignedLong(el);
}

let _cached_encoder_for_IntUnsignedLong: $.ASN1Encoder<IntUnsignedLong> | null = null;

/**
 * @summary Encodes a(n) IntUnsignedLong into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The IntUnsignedLong, encoded as an ASN.1 Element.
 */
export
function _encode_IntUnsignedLong (value: IntUnsignedLong, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_IntUnsignedLong) { _cached_encoder_for_IntUnsignedLong = $._encodeInteger; }
    return _cached_encoder_for_IntUnsignedLong(value, elGetter);
}


/* eslint-enable */
