/* eslint-disable */
import {
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    OCTET_STRING
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary ServiceMessageIdentity
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ServiceMessageIdentity  ::=  CHOICE
 * {
 *     serviceRequest    [1] OCTET STRING,
 *     serviceAccept     [2] OCTET STRING
 * }
 * ```
 */
export
type ServiceMessageIdentity =
    { serviceRequest: OCTET_STRING } /* CHOICE_ALT_ROOT */
    | { serviceAccept: OCTET_STRING } /* CHOICE_ALT_ROOT */;

let _cached_decoder_for_ServiceMessageIdentity: $.ASN1Decoder<ServiceMessageIdentity> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) ServiceMessageIdentity
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_ServiceMessageIdentity (el: _Element): ServiceMessageIdentity {
    if (!_cached_decoder_for_ServiceMessageIdentity) { _cached_decoder_for_ServiceMessageIdentity = $._decode_inextensible_choice<ServiceMessageIdentity>({
    "CONTEXT 1": [ "serviceRequest", $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString) ],
    "CONTEXT 2": [ "serviceAccept", $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString) ]
}); }
    return _cached_decoder_for_ServiceMessageIdentity(el);
}

let _cached_encoder_for_ServiceMessageIdentity: $.ASN1Encoder<ServiceMessageIdentity> | null = null;

/**
 * @summary Encodes a(n) ServiceMessageIdentity into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ServiceMessageIdentity, encoded as an ASN.1 Element.
 */
export
function _encode_ServiceMessageIdentity (value: ServiceMessageIdentity, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_ServiceMessageIdentity) { _cached_encoder_for_ServiceMessageIdentity = $._encode_choice<ServiceMessageIdentity>({
    "serviceRequest": $._encode_implicit(_TagClass.context, 1, () => $._encodeOctetString, $.BER),
    "serviceAccept": $._encode_implicit(_TagClass.context, 2, () => $._encodeOctetString, $.BER),
}, $.BER); }
    return _cached_encoder_for_ServiceMessageIdentity(value, elGetter);
}


/* eslint-enable */
