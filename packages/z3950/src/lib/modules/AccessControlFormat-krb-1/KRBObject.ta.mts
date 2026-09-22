/* eslint-disable */
import {
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { KRBRequest, _decode_KRBRequest, _encode_KRBRequest } from "../AccessControlFormat-krb-1/KRBRequest.ta.mjs";
// export { KRBRequest, _decode_KRBRequest, _encode_KRBRequest } from "../AccessControlFormat-krb-1/KRBRequest.ta.mjs";
import { KRBResponse, _decode_KRBResponse, _encode_KRBResponse } from "../AccessControlFormat-krb-1/KRBResponse.ta.mjs";
// export { KRBResponse, _decode_KRBResponse, _encode_KRBResponse } from "../AccessControlFormat-krb-1/KRBResponse.ta.mjs";


/**
 * @summary KRBObject
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * KRBObject  ::=  CHOICE {
 *       challenge    [1] IMPLICIT KRBRequest,
 *       response     [2] IMPLICIT KRBResponse}
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
