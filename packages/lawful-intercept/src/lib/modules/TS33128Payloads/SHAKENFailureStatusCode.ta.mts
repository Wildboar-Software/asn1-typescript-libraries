/* eslint-disable */
import {
    ASN1Element as _Element,
    INTEGER
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary SHAKENFailureStatusCode
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * SHAKENFailureStatusCode  ::=  INTEGER
 * ```
 */
export
type SHAKENFailureStatusCode = INTEGER;

let _cached_decoder_for_SHAKENFailureStatusCode: $.ASN1Decoder<SHAKENFailureStatusCode> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) SHAKENFailureStatusCode
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_SHAKENFailureStatusCode (el: _Element): SHAKENFailureStatusCode {
    if (!_cached_decoder_for_SHAKENFailureStatusCode) { _cached_decoder_for_SHAKENFailureStatusCode = $._decodeInteger; }
    return _cached_decoder_for_SHAKENFailureStatusCode(el);
}

let _cached_encoder_for_SHAKENFailureStatusCode: $.ASN1Encoder<SHAKENFailureStatusCode> | null = null;

/**
 * @summary Encodes a(n) SHAKENFailureStatusCode into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The SHAKENFailureStatusCode, encoded as an ASN.1 Element.
 */
export
function _encode_SHAKENFailureStatusCode (value: SHAKENFailureStatusCode, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_SHAKENFailureStatusCode) { _cached_encoder_for_SHAKENFailureStatusCode = $._encodeInteger; }
    return _cached_encoder_for_SHAKENFailureStatusCode(value, elGetter);
}


/* eslint-enable */
