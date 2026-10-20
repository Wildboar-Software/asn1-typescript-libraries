/* eslint-disable */
import {
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    OCTET_STRING
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary SSParameters
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * SSParameters  ::=  CHOICE {
 *    forwardedToNumber     [0] IMPLICIT OCTET STRING ( SIZE( 1 .. 20 ) ),
 *    unstructuredData      [1] IMPLICIT OCTET STRING}
 * ```
 */
export
type SSParameters =
    { forwardedToNumber: OCTET_STRING } /* CHOICE_ALT_ROOT */
    | { unstructuredData: OCTET_STRING } /* CHOICE_ALT_ROOT */;

let _cached_decoder_for_SSParameters: $.ASN1Decoder<SSParameters> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) SSParameters
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_SSParameters (el: _Element): SSParameters {
    if (!_cached_decoder_for_SSParameters) { _cached_decoder_for_SSParameters = $._decode_inextensible_choice<SSParameters>({
    "CONTEXT 0": [ "forwardedToNumber", $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString) ],
    "CONTEXT 1": [ "unstructuredData", $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString) ]
}); }
    return _cached_decoder_for_SSParameters(el);
}

let _cached_encoder_for_SSParameters: $.ASN1Encoder<SSParameters> | null = null;

/**
 * @summary Encodes a(n) SSParameters into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The SSParameters, encoded as an ASN.1 Element.
 */
export
function _encode_SSParameters (value: SSParameters, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_SSParameters) { _cached_encoder_for_SSParameters = $._encode_choice<SSParameters>({
    "forwardedToNumber": $._encode_implicit(_TagClass.context, 0, () => $._encodeOctetString, $.BER),
    "unstructuredData": $._encode_implicit(_TagClass.context, 1, () => $._encodeOctetString, $.BER),
}, $.BER); }
    return _cached_encoder_for_SSParameters(value, elGetter);
}


/* eslint-enable */
