/* eslint-disable */
import {
    ASN1Element as _Element,
    INTEGER
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary FiveGSMCause
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * FiveGSMCause  ::=  INTEGER (0..255)
 * ```
 */
export
type FiveGSMCause = INTEGER;

let _cached_decoder_for_FiveGSMCause: $.ASN1Decoder<FiveGSMCause> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) FiveGSMCause
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_FiveGSMCause (el: _Element): FiveGSMCause {
    if (!_cached_decoder_for_FiveGSMCause) { _cached_decoder_for_FiveGSMCause = $._decodeInteger; }
    return _cached_decoder_for_FiveGSMCause(el);
}

let _cached_encoder_for_FiveGSMCause: $.ASN1Encoder<FiveGSMCause> | null = null;

/**
 * @summary Encodes a(n) FiveGSMCause into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The FiveGSMCause, encoded as an ASN.1 Element.
 */
export
function _encode_FiveGSMCause (value: FiveGSMCause, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_FiveGSMCause) { _cached_encoder_for_FiveGSMCause = $._encodeInteger; }
    return _cached_encoder_for_FiveGSMCause(value, elGetter);
}


/* eslint-enable */
