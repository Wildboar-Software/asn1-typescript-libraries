/* eslint-disable */
import {
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    OCTET_STRING
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary SignalingPointCode
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * SignalingPointCode  ::=  [142] IMPLICIT OCTET STRING(SIZE(3))
 * ```
 */
export
type SignalingPointCode = OCTET_STRING; // OctetStringType

let _cached_decoder_for_SignalingPointCode: $.ASN1Decoder<SignalingPointCode> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) SignalingPointCode
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_SignalingPointCode (el: _Element): SignalingPointCode {
    if (!_cached_decoder_for_SignalingPointCode) { _cached_decoder_for_SignalingPointCode = $._decode_implicit<SignalingPointCode>(() => $._decodeOctetString); }
    return _cached_decoder_for_SignalingPointCode(el);
}

let _cached_encoder_for_SignalingPointCode: $.ASN1Encoder<SignalingPointCode> | null = null;

/**
 * @summary Encodes a(n) SignalingPointCode into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The SignalingPointCode, encoded as an ASN.1 Element.
 */
export
function _encode_SignalingPointCode (value: SignalingPointCode, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_SignalingPointCode) { _cached_encoder_for_SignalingPointCode = $._encode_implicit(_TagClass.context, 142, () => $._encodeOctetString, $.BER); }
    return _cached_encoder_for_SignalingPointCode(value, elGetter);
}


/* eslint-enable */
