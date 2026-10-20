/* eslint-disable */
import {
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    OCTET_STRING
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary WaitTime
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * WaitTime    ::=  CHOICE {
 *    http-date         [0] IMPLICIT OCTET STRING ( SIZE( 9 ) ),
 *    delta-seconds     [1] IMPLICIT OCTET STRING ( SIZE( 8 ) )}
 * ```
 */
export
type WaitTime =
    { http_date: OCTET_STRING } /* CHOICE_ALT_ROOT */
    | { delta_seconds: OCTET_STRING } /* CHOICE_ALT_ROOT */;

let _cached_decoder_for_WaitTime: $.ASN1Decoder<WaitTime> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) WaitTime
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_WaitTime (el: _Element): WaitTime {
    if (!_cached_decoder_for_WaitTime) { _cached_decoder_for_WaitTime = $._decode_inextensible_choice<WaitTime>({
    "CONTEXT 0": [ "http_date", $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString) ],
    "CONTEXT 1": [ "delta_seconds", $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString) ]
}); }
    return _cached_decoder_for_WaitTime(el);
}

let _cached_encoder_for_WaitTime: $.ASN1Encoder<WaitTime> | null = null;

/**
 * @summary Encodes a(n) WaitTime into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The WaitTime, encoded as an ASN.1 Element.
 */
export
function _encode_WaitTime (value: WaitTime, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_WaitTime) { _cached_encoder_for_WaitTime = $._encode_choice<WaitTime>({
    "http_date": $._encode_implicit(_TagClass.context, 0, () => $._encodeOctetString, $.BER),
    "delta_seconds": $._encode_implicit(_TagClass.context, 1, () => $._encodeOctetString, $.BER),
}, $.BER); }
    return _cached_encoder_for_WaitTime(value, elGetter);
}


/* eslint-enable */
