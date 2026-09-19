/* eslint-disable */
import {
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    OCTET_STRING
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary ConnectTime
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ConnectTime  ::=  [58] IMPLICIT OCTET STRING(SIZE(5))
 * ```
 */
export
type ConnectTime = OCTET_STRING; // OctetStringType

let _cached_decoder_for_ConnectTime: $.ASN1Decoder<ConnectTime> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) ConnectTime
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_ConnectTime (el: _Element): ConnectTime {
    if (!_cached_decoder_for_ConnectTime) { _cached_decoder_for_ConnectTime = $._decode_implicit<ConnectTime>(() => $._decodeOctetString); }
    return _cached_decoder_for_ConnectTime(el);
}

let _cached_encoder_for_ConnectTime: $.ASN1Encoder<ConnectTime> | null = null;

/**
 * @summary Encodes a(n) ConnectTime into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ConnectTime, encoded as an ASN.1 Element.
 */
export
function _encode_ConnectTime (value: ConnectTime, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_ConnectTime) { _cached_encoder_for_ConnectTime = $._encode_implicit(_TagClass.context, 58, () => $._encodeOctetString, $.BER); }
    return _cached_encoder_for_ConnectTime(value, elGetter);
}


/* eslint-enable */
