/* eslint-disable */
import {
    ASN1Element as _Element,
    INTEGER
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary FiveGMMCause
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * FiveGMMCause  ::=  INTEGER (0..255)
 * ```
 */
export
type FiveGMMCause = INTEGER;

let _cached_decoder_for_FiveGMMCause: $.ASN1Decoder<FiveGMMCause> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) FiveGMMCause
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_FiveGMMCause (el: _Element): FiveGMMCause {
    if (!_cached_decoder_for_FiveGMMCause) { _cached_decoder_for_FiveGMMCause = $._decodeInteger; }
    return _cached_decoder_for_FiveGMMCause(el);
}

let _cached_encoder_for_FiveGMMCause: $.ASN1Encoder<FiveGMMCause> | null = null;

/**
 * @summary Encodes a(n) FiveGMMCause into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The FiveGMMCause, encoded as an ASN.1 Element.
 */
export
function _encode_FiveGMMCause (value: FiveGMMCause, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_FiveGMMCause) { _cached_encoder_for_FiveGMMCause = $._encodeInteger; }
    return _cached_encoder_for_FiveGMMCause(value, elGetter);
}


/* eslint-enable */
