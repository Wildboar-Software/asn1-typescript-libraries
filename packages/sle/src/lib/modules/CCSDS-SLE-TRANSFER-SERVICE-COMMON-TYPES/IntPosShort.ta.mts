/* eslint-disable */
import {
    ASN1Element as _Element,
    INTEGER
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary IntPosShort
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * IntPosShort             ::=     INTEGER (1 .. 65535)
 * ```
 */
export
type IntPosShort = INTEGER;

let _cached_decoder_for_IntPosShort: $.ASN1Decoder<IntPosShort> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) IntPosShort
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_IntPosShort (el: _Element): IntPosShort {
    if (!_cached_decoder_for_IntPosShort) { _cached_decoder_for_IntPosShort = $._decodeInteger; }
    return _cached_decoder_for_IntPosShort(el);
}

let _cached_encoder_for_IntPosShort: $.ASN1Encoder<IntPosShort> | null = null;

/**
 * @summary Encodes a(n) IntPosShort into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The IntPosShort, encoded as an ASN.1 Element.
 */
export
function _encode_IntPosShort (value: IntPosShort, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_IntPosShort) { _cached_encoder_for_IntPosShort = $._encodeInteger; }
    return _cached_encoder_for_IntPosShort(value, elGetter);
}


/* eslint-enable */
