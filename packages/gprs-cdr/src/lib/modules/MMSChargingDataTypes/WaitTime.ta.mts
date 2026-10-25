/* eslint-disable */
import {
    type ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    type OCTET_STRING,
    ASN1SizeError
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary WaitTime
 * @description
 * 
 * Either an absolute time (`http_date`) or a duration (`delta_seconds`).
 * Time of expiry is a desired expiry date or a duration before expiry.
 * Earliest time of delivery is the earliest time to deliver the MM, or the
 * number of seconds to wait before delivering it.
 *
 * 3GPP TS 32.270 V19.0.0 clause 6.1.1.1.
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
    const _decoded_WaitTime = _cached_decoder_for_WaitTime(el);
    if ("http_date" in _decoded_WaitTime && (_decoded_WaitTime.http_date.length !== 9)) {
        throw new ASN1SizeError("WaitTime.http_date violates SIZE constraint");
    }
    if ("delta_seconds" in _decoded_WaitTime && (_decoded_WaitTime.delta_seconds.length !== 8)) {
        throw new ASN1SizeError("WaitTime.delta_seconds violates SIZE constraint");
    }
    return _decoded_WaitTime;
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
