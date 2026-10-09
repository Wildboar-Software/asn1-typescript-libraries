/* eslint-disable */
import {
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { DRNType, _decode_DRNType, _encode_DRNType } from "../AccessControlFormat-des-1/DRNType.ta.mjs";


/**
 * @summary DES_RN_Object
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
 * des-1 `{Z39-50-accessControl 2}` carries a random number, and optionally a
 * user id and a salt, as either the challenge or the response (ASN1.9.2). The
 * standard does not describe the DES computation.
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * DES-RN-Object  ::=  CHOICE {
 *     challenge               [1] IMPLICIT DRNType,
 *     response                [2] IMPLICIT DRNType
 * }
 * ```
 */
export
type DES_RN_Object =
    { challenge: DRNType } /* CHOICE_ALT_ROOT */
    | { response: DRNType } /* CHOICE_ALT_ROOT */;

let _cached_decoder_for_DES_RN_Object: $.ASN1Decoder<DES_RN_Object> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) DES_RN_Object
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_DES_RN_Object (el: _Element): DES_RN_Object {
    if (!_cached_decoder_for_DES_RN_Object) { _cached_decoder_for_DES_RN_Object = $._decode_inextensible_choice<DES_RN_Object>({
    "CONTEXT 1": [ "challenge", $._decode_implicit<DRNType>(() => _decode_DRNType) ],
    "CONTEXT 2": [ "response", $._decode_implicit<DRNType>(() => _decode_DRNType) ]
}); }
    return _cached_decoder_for_DES_RN_Object(el);
}

let _cached_encoder_for_DES_RN_Object: $.ASN1Encoder<DES_RN_Object> | null = null;

/**
 * @summary Encodes a(n) DES_RN_Object into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The DES_RN_Object, encoded as an ASN.1 Element.
 */
export
function _encode_DES_RN_Object (value: DES_RN_Object, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_DES_RN_Object) { _cached_encoder_for_DES_RN_Object = $._encode_choice<DES_RN_Object>({
    "challenge": $._encode_implicit(_TagClass.context, 1, () => _encode_DRNType, $.BER),
    "response": $._encode_implicit(_TagClass.context, 2, () => _encode_DRNType, $.BER),
}, $.BER); }
    return _cached_encoder_for_DES_RN_Object(value, elGetter);
}


/* eslint-enable */
