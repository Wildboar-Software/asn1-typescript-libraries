/* eslint-disable */
import {
    ASN1Element as _Element,
    INTEGER
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary ESMCause
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ESMCause  ::=  INTEGER (0..255)
 * ```
 */
export
type ESMCause = INTEGER;

let _cached_decoder_for_ESMCause: $.ASN1Decoder<ESMCause> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) ESMCause
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_ESMCause (el: _Element): ESMCause {
    if (!_cached_decoder_for_ESMCause) { _cached_decoder_for_ESMCause = $._decodeInteger; }
    return _cached_decoder_for_ESMCause(el);
}

let _cached_encoder_for_ESMCause: $.ASN1Encoder<ESMCause> | null = null;

/**
 * @summary Encodes a(n) ESMCause into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ESMCause, encoded as an ASN.1 Element.
 */
export
function _encode_ESMCause (value: ESMCause, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_ESMCause) { _cached_encoder_for_ESMCause = $._encodeInteger; }
    return _cached_encoder_for_ESMCause(value, elGetter);
}


/* eslint-enable */
