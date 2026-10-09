/* eslint-disable */
import {
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    EXTERNAL,
    OCTET_STRING
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary AccessControlRequest_securityChallenge
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * AccessControlRequest-securityChallenge ::= CHOICE {
 *     simpleForm [37] IMPLICIT OCTET STRING,
 *     externallyDefined [0] EXTERNAL
 * }
 * ```
 */
export
type AccessControlRequest_securityChallenge =
    { simpleForm: OCTET_STRING } /* CHOICE_ALT_ROOT */
    | { externallyDefined: EXTERNAL } /* CHOICE_ALT_ROOT */;

let _cached_decoder_for_AccessControlRequest_securityChallenge: $.ASN1Decoder<AccessControlRequest_securityChallenge> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) AccessControlRequest_securityChallenge
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_AccessControlRequest_securityChallenge (el: _Element): AccessControlRequest_securityChallenge {
    if (!_cached_decoder_for_AccessControlRequest_securityChallenge) { _cached_decoder_for_AccessControlRequest_securityChallenge = $._decode_inextensible_choice<AccessControlRequest_securityChallenge>({
    "CONTEXT 37": [ "simpleForm", $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString) ],
    "CONTEXT 0": [ "externallyDefined", $._decode_implicit<EXTERNAL>(() => $._decodeExternal) ]
}); }
    return _cached_decoder_for_AccessControlRequest_securityChallenge(el);
}

let _cached_encoder_for_AccessControlRequest_securityChallenge: $.ASN1Encoder<AccessControlRequest_securityChallenge> | null = null;

/**
 * @summary Encodes a(n) AccessControlRequest_securityChallenge into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The AccessControlRequest_securityChallenge, encoded as an ASN.1 Element.
 */
export
function _encode_AccessControlRequest_securityChallenge (value: AccessControlRequest_securityChallenge, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_AccessControlRequest_securityChallenge) { _cached_encoder_for_AccessControlRequest_securityChallenge = $._encode_choice<AccessControlRequest_securityChallenge>({
    "simpleForm": $._encode_implicit(_TagClass.context, 37, () => $._encodeOctetString, $.BER),
    "externallyDefined": $._encode_implicit(_TagClass.context, 0, () => $._encodeExternal, $.BER),
}, $.BER); }
    return _cached_encoder_for_AccessControlRequest_securityChallenge(value, elGetter);
}


/* eslint-enable */
