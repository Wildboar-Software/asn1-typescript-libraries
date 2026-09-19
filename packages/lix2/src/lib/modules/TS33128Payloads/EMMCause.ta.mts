/* eslint-disable */
import {
    ASN1Element as _Element,
    INTEGER
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary EMMCause
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * EMMCause  ::=  INTEGER (0..255)
 * ```
 */
export
type EMMCause = INTEGER;

let _cached_decoder_for_EMMCause: $.ASN1Decoder<EMMCause> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) EMMCause
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_EMMCause (el: _Element): EMMCause {
    if (!_cached_decoder_for_EMMCause) { _cached_decoder_for_EMMCause = $._decodeInteger; }
    return _cached_decoder_for_EMMCause(el);
}

let _cached_encoder_for_EMMCause: $.ASN1Encoder<EMMCause> | null = null;

/**
 * @summary Encodes a(n) EMMCause into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The EMMCause, encoded as an ASN.1 Element.
 */
export
function _encode_EMMCause (value: EMMCause, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_EMMCause) { _cached_encoder_for_EMMCause = $._encodeInteger; }
    return _cached_encoder_for_EMMCause(value, elGetter);
}


/* eslint-enable */
