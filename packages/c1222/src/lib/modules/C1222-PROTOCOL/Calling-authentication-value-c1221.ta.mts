/* eslint-disable */
import {
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    OCTET_STRING
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary Calling_authentication_value_c1221
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * Calling-authentication-value-c1221  ::=  [0] IMPLICIT CHOICE {
 *     c1221-auth-identification   [0] IMPLICIT OCTET STRING (SIZE(3|5..259)),
 *     c1221-auth-request          [1] IMPLICIT OCTET STRING (SIZE(1..255)),
 *     c1221-auth-response         [2] IMPLICIT OCTET STRING (SIZE(0|1..255)),
 *     ...
 * }
 * ```
 */
export
type Calling_authentication_value_c1221 =
    { c1221_auth_identification: OCTET_STRING } /* CHOICE_ALT_ROOT */
    | { c1221_auth_request: OCTET_STRING } /* CHOICE_ALT_ROOT */
    | { c1221_auth_response: OCTET_STRING } /* CHOICE_ALT_ROOT */
    | _Element /* CHOICE_ALT_UNRECOGNIZED_EXT */;

let _cached_decoder_for_Calling_authentication_value_c1221: $.ASN1Decoder<Calling_authentication_value_c1221> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) Calling_authentication_value_c1221
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_Calling_authentication_value_c1221 (el: _Element): Calling_authentication_value_c1221 {
    if (!_cached_decoder_for_Calling_authentication_value_c1221) { _cached_decoder_for_Calling_authentication_value_c1221 = $._decode_explicit<Calling_authentication_value_c1221>(() => $._decode_extensible_choice<Calling_authentication_value_c1221>({
    "CONTEXT 0": [ "c1221_auth_identification", $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString) ],
    "CONTEXT 1": [ "c1221_auth_request", $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString) ],
    "CONTEXT 2": [ "c1221_auth_response", $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString) ]
})); }
    return _cached_decoder_for_Calling_authentication_value_c1221(el);
}

let _cached_encoder_for_Calling_authentication_value_c1221: $.ASN1Encoder<Calling_authentication_value_c1221> | null = null;

/**
 * @summary Encodes a(n) Calling_authentication_value_c1221 into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The Calling_authentication_value_c1221, encoded as an ASN.1 Element.
 */
export
function _encode_Calling_authentication_value_c1221 (value: Calling_authentication_value_c1221, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_Calling_authentication_value_c1221) { _cached_encoder_for_Calling_authentication_value_c1221 = $._encode_explicit(_TagClass.context, 0, () => $._encode_choice<Calling_authentication_value_c1221>({
    "c1221_auth_identification": $._encode_implicit(_TagClass.context, 0, () => $._encodeOctetString, $.BER),
    "c1221_auth_request": $._encode_implicit(_TagClass.context, 1, () => $._encodeOctetString, $.BER),
    "c1221_auth_response": $._encode_implicit(_TagClass.context, 2, () => $._encodeOctetString, $.BER),
}, $.BER), $.BER); }
    return _cached_encoder_for_Calling_authentication_value_c1221(value, elGetter);
}


/* eslint-enable */
