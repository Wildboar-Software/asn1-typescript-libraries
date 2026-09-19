/* eslint-disable */
import {
    ASN1Element as _Element,
    INTEGER
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary ErrorCode
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ErrorCode  ::=  INTEGER(0..65535)
 * ```
 */
export
type ErrorCode = INTEGER;

let _cached_decoder_for_ErrorCode: $.ASN1Decoder<ErrorCode> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) ErrorCode
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_ErrorCode (el: _Element): ErrorCode {
    if (!_cached_decoder_for_ErrorCode) { _cached_decoder_for_ErrorCode = $._decodeInteger; }
    return _cached_decoder_for_ErrorCode(el);
}

let _cached_encoder_for_ErrorCode: $.ASN1Encoder<ErrorCode> | null = null;

/**
 * @summary Encodes a(n) ErrorCode into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ErrorCode, encoded as an ASN.1 Element.
 */
export
function _encode_ErrorCode (value: ErrorCode, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_ErrorCode) { _cached_encoder_for_ErrorCode = $._encodeInteger; }
    return _cached_encoder_for_ErrorCode(value, elGetter);
}


/* eslint-enable */
