/* eslint-disable */
import {
    ASN1Element as _Element,
    VisibleString
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary Talk_burst_reason_code
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * Talk-burst-reason-code  ::=  VisibleString
 * ```
 */
export
type Talk_burst_reason_code = VisibleString; // VisibleString

let _cached_decoder_for_Talk_burst_reason_code: $.ASN1Decoder<Talk_burst_reason_code> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) Talk_burst_reason_code
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_Talk_burst_reason_code (el: _Element): Talk_burst_reason_code {
    if (!_cached_decoder_for_Talk_burst_reason_code) { _cached_decoder_for_Talk_burst_reason_code = $._decodeVisibleString; }
    return _cached_decoder_for_Talk_burst_reason_code(el);
}

let _cached_encoder_for_Talk_burst_reason_code: $.ASN1Encoder<Talk_burst_reason_code> | null = null;

/**
 * @summary Encodes a(n) Talk_burst_reason_code into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The Talk_burst_reason_code, encoded as an ASN.1 Element.
 */
export
function _encode_Talk_burst_reason_code (value: Talk_burst_reason_code, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_Talk_burst_reason_code) { _cached_encoder_for_Talk_burst_reason_code = $._encodeVisibleString; }
    return _cached_encoder_for_Talk_burst_reason_code(value, elGetter);
}


/* eslint-enable */
