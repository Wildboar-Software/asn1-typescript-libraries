/* eslint-disable */
import {
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    OCTET_STRING
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary MonitorTime
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * MonitorTime  ::=  [65] IMPLICIT OCTET STRING(SIZE(3))
 * ```
 */
export
type MonitorTime = OCTET_STRING; // OctetStringType

let _cached_decoder_for_MonitorTime: $.ASN1Decoder<MonitorTime> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) MonitorTime
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_MonitorTime (el: _Element): MonitorTime {
    if (!_cached_decoder_for_MonitorTime) { _cached_decoder_for_MonitorTime = $._decode_implicit<MonitorTime>(() => $._decodeOctetString); }
    return _cached_decoder_for_MonitorTime(el);
}

let _cached_encoder_for_MonitorTime: $.ASN1Encoder<MonitorTime> | null = null;

/**
 * @summary Encodes a(n) MonitorTime into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The MonitorTime, encoded as an ASN.1 Element.
 */
export
function _encode_MonitorTime (value: MonitorTime, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_MonitorTime) { _cached_encoder_for_MonitorTime = $._encode_implicit(_TagClass.context, 65, () => $._encodeOctetString, $.BER); }
    return _cached_encoder_for_MonitorTime(value, elGetter);
}


/* eslint-enable */
