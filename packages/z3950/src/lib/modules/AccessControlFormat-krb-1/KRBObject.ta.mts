/* eslint-disable */
import {
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { KRBRequest, _decode_KRBRequest, _encode_KRBRequest } from "../AccessControlFormat-krb-1/KRBRequest.ta.mjs";
import { KRBResponse, _decode_KRBResponse, _encode_KRBResponse } from "../AccessControlFormat-krb-1/KRBResponse.ta.mjs";


/**
 * @summary KRBObject
 * @description
 * 
 * Access-control formats are carried in securityChallenge and
 * securityChallengeResponse, and in Init idAuthentication (appendix ACC). The
 * server challenges the client, either for one active operation or for the
 * Z-association (§3.2.5). Under concurrent operations a reference-id ties the
 * challenge to that operation; omitting it means the association. Under serial
 * operations the challenge belongs to the active operation and carries its
 * reference-id. The client must answer while access control is in effect. The
 * server may challenge again before the terminating response, and may suspend
 * the operation until the answer arrives. If the answer is acceptable,
 * processing continues as if there had been no challenge. If it is not, the
 * operation may end in an access-control failure. During Init the server may
 * reject the association or refuse one proposed capability. During Search or
 * Present it may substitute the surrogate diagnostic that the security
 * challenge failed and the record was not included.
 * 
 * krb-1 `{Z39-50-accessControl 3}`: the server requests a Kerberos ticket, and
 * the client returns one (ASN1.9.3).
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * KRBObject  ::=  CHOICE {
 *     challenge   [1] IMPLICIT KRBRequest,
 *     response    [2] IMPLICIT KRBResponse}
 * ```
 */
export
type KRBObject =
    { challenge: KRBRequest } /* CHOICE_ALT_ROOT */
    | { response: KRBResponse } /* CHOICE_ALT_ROOT */;

let _cached_decoder_for_KRBObject: $.ASN1Decoder<KRBObject> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) KRBObject
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_KRBObject (el: _Element): KRBObject {
    if (!_cached_decoder_for_KRBObject) { _cached_decoder_for_KRBObject = $._decode_inextensible_choice<KRBObject>({
    "CONTEXT 1": [ "challenge", $._decode_implicit<KRBRequest>(() => _decode_KRBRequest) ],
    "CONTEXT 2": [ "response", $._decode_implicit<KRBResponse>(() => _decode_KRBResponse) ]
}); }
    return _cached_decoder_for_KRBObject(el);
}

let _cached_encoder_for_KRBObject: $.ASN1Encoder<KRBObject> | null = null;

/**
 * @summary Encodes a(n) KRBObject into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The KRBObject, encoded as an ASN.1 Element.
 */
export
function _encode_KRBObject (value: KRBObject, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_KRBObject) { _cached_encoder_for_KRBObject = $._encode_choice<KRBObject>({
    "challenge": $._encode_implicit(_TagClass.context, 1, () => _encode_KRBRequest, $.BER),
    "response": $._encode_implicit(_TagClass.context, 2, () => _encode_KRBResponse, $.BER),
}, $.BER); }
    return _cached_encoder_for_KRBObject(value, elGetter);
}


/* eslint-enable */
