/* eslint-disable */
import {
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    EXTERNAL,
    OCTET_STRING
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary AccessControlResponse_securityChallengeResponse
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * AccessControlResponse-securityChallengeResponse ::= CHOICE { -- REMOVED_FROM_UNNESTING -- }
 * ```
 */
export
type AccessControlResponse_securityChallengeResponse =
    { simpleForm: OCTET_STRING } /* CHOICE_ALT_ROOT */
    | { externallyDefined: EXTERNAL } /* CHOICE_ALT_ROOT */;

let _cached_decoder_for_AccessControlResponse_securityChallengeResponse: $.ASN1Decoder<AccessControlResponse_securityChallengeResponse> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) AccessControlResponse_securityChallengeResponse
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_AccessControlResponse_securityChallengeResponse (el: _Element): AccessControlResponse_securityChallengeResponse {
    if (!_cached_decoder_for_AccessControlResponse_securityChallengeResponse) { _cached_decoder_for_AccessControlResponse_securityChallengeResponse = $._decode_inextensible_choice<AccessControlResponse_securityChallengeResponse>({
    "CONTEXT 38": [ "simpleForm", $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString) ],
    "CONTEXT 0": [ "externallyDefined", $._decode_implicit<EXTERNAL>(() => $._decodeExternal) ]
}); }
    return _cached_decoder_for_AccessControlResponse_securityChallengeResponse(el);
}

let _cached_encoder_for_AccessControlResponse_securityChallengeResponse: $.ASN1Encoder<AccessControlResponse_securityChallengeResponse> | null = null;

/**
 * @summary Encodes a(n) AccessControlResponse_securityChallengeResponse into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The AccessControlResponse_securityChallengeResponse, encoded as an ASN.1 Element.
 */
export
function _encode_AccessControlResponse_securityChallengeResponse (value: AccessControlResponse_securityChallengeResponse, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_AccessControlResponse_securityChallengeResponse) { _cached_encoder_for_AccessControlResponse_securityChallengeResponse = $._encode_choice<AccessControlResponse_securityChallengeResponse>({
    "simpleForm": $._encode_implicit(_TagClass.context, 38, () => $._encodeOctetString, $.BER),
    "externallyDefined": $._encode_implicit(_TagClass.context, 0, () => $._encodeExternal, $.BER),
}, $.BER); }
    return _cached_encoder_for_AccessControlResponse_securityChallengeResponse(value, elGetter);
}


/* eslint-enable */
