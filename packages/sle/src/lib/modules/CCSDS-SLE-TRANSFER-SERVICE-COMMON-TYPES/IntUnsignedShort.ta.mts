/* eslint-disable */
import {
    ASN1Element as _Element,
    INTEGER
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary IntUnsignedShort
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * IntUnsignedShort        ::=     INTEGER (0 .. 65535)
 * ```
 */
export
type IntUnsignedShort = INTEGER;

let _cached_decoder_for_IntUnsignedShort: $.ASN1Decoder<IntUnsignedShort> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) IntUnsignedShort
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_IntUnsignedShort (el: _Element): IntUnsignedShort {
    if (!_cached_decoder_for_IntUnsignedShort) { _cached_decoder_for_IntUnsignedShort = $._decodeInteger; }
    return _cached_decoder_for_IntUnsignedShort(el);
}

let _cached_encoder_for_IntUnsignedShort: $.ASN1Encoder<IntUnsignedShort> | null = null;

/**
 * @summary Encodes a(n) IntUnsignedShort into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The IntUnsignedShort, encoded as an ASN.1 Element.
 */
export
function _encode_IntUnsignedShort (value: IntUnsignedShort, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_IntUnsignedShort) { _cached_encoder_for_IntUnsignedShort = $._encodeInteger; }
    return _cached_encoder_for_IntUnsignedShort(value, elGetter);
}


/* eslint-enable */
