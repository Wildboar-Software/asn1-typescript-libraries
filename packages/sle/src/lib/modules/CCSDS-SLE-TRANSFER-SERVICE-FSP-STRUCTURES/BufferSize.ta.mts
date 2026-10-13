/* eslint-disable */
import {
    ASN1Element as _Element,
    INTEGER
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary BufferSize
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * BufferSize            ::=    INTEGER (7 .. 66560)
 * ```
 */
export
type BufferSize = INTEGER;

let _cached_decoder_for_BufferSize: $.ASN1Decoder<BufferSize> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) BufferSize
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_BufferSize (el: _Element): BufferSize {
    if (!_cached_decoder_for_BufferSize) { _cached_decoder_for_BufferSize = $._decodeInteger; }
    return _cached_decoder_for_BufferSize(el);
}

let _cached_encoder_for_BufferSize: $.ASN1Encoder<BufferSize> | null = null;

/**
 * @summary Encodes a(n) BufferSize into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The BufferSize, encoded as an ASN.1 Element.
 */
export
function _encode_BufferSize (value: BufferSize, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_BufferSize) { _cached_encoder_for_BufferSize = $._encodeInteger; }
    return _cached_encoder_for_BufferSize(value, elGetter);
}


/* eslint-enable */
