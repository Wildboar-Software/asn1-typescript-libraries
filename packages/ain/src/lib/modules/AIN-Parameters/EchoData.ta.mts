/* eslint-disable */
import {
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    OCTET_STRING
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary EchoData
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * EchoData  ::=  [60] IMPLICIT OCTET STRING(SIZE(6))
 * ```
 */
export
type EchoData = OCTET_STRING; // OctetStringType

let _cached_decoder_for_EchoData: $.ASN1Decoder<EchoData> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) EchoData
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_EchoData (el: _Element): EchoData {
    if (!_cached_decoder_for_EchoData) { _cached_decoder_for_EchoData = $._decode_implicit<EchoData>(() => $._decodeOctetString); }
    return _cached_decoder_for_EchoData(el);
}

let _cached_encoder_for_EchoData: $.ASN1Encoder<EchoData> | null = null;

/**
 * @summary Encodes a(n) EchoData into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The EchoData, encoded as an ASN.1 Element.
 */
export
function _encode_EchoData (value: EchoData, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_EchoData) { _cached_encoder_for_EchoData = $._encode_implicit(_TagClass.context, 60, () => $._encodeOctetString, $.BER); }
    return _cached_encoder_for_EchoData(value, elGetter);
}


/* eslint-enable */
