/* eslint-disable */
import {
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    INTEGER,
    OCTET_STRING,
    ASN1SizeError
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary Service
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * Service     ::=  CHOICE {
 *    teleservice                [1] IMPLICIT OCTET STRING ( SIZE( 1 ) ),
 *    bearerService              [2] IMPLICIT OCTET STRING ( SIZE( 1 ) ),
 *    supplementaryService       [3] IMPLICIT OCTET STRING ( SIZE( 1 ) ),
 *    networkSpecificService     [4] IMPLICIT INTEGER}
 * ```
 */
export
type Service =
    { teleservice: OCTET_STRING } /* CHOICE_ALT_ROOT */
    | { bearerService: OCTET_STRING } /* CHOICE_ALT_ROOT */
    | { supplementaryService: OCTET_STRING } /* CHOICE_ALT_ROOT */
    | { networkSpecificService: INTEGER } /* CHOICE_ALT_ROOT */;

let _cached_decoder_for_Service: $.ASN1Decoder<Service> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) Service
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_Service (el: _Element): Service {
    if (!_cached_decoder_for_Service) { _cached_decoder_for_Service = $._decode_inextensible_choice<Service>({
    "CONTEXT 1": [ "teleservice", $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString) ],
    "CONTEXT 2": [ "bearerService", $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString) ],
    "CONTEXT 3": [ "supplementaryService", $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString) ],
    "CONTEXT 4": [ "networkSpecificService", $._decode_implicit<INTEGER>(() => $._decodeInteger) ]
}); }
    const _decoded_Service = _cached_decoder_for_Service(el);
    if ("teleservice" in _decoded_Service && (_decoded_Service.teleservice.length !== 1)) {
        throw new ASN1SizeError("Service.teleservice violates SIZE constraint");
    }
    if ("bearerService" in _decoded_Service && (_decoded_Service.bearerService.length !== 1)) {
        throw new ASN1SizeError("Service.bearerService violates SIZE constraint");
    }
    if ("supplementaryService" in _decoded_Service && (_decoded_Service.supplementaryService.length !== 1)) {
        throw new ASN1SizeError("Service.supplementaryService violates SIZE constraint");
    }
    return _decoded_Service;
}

let _cached_encoder_for_Service: $.ASN1Encoder<Service> | null = null;

/**
 * @summary Encodes a(n) Service into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The Service, encoded as an ASN.1 Element.
 */
export
function _encode_Service (value: Service, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_Service) { _cached_encoder_for_Service = $._encode_choice<Service>({
    "teleservice": $._encode_implicit(_TagClass.context, 1, () => $._encodeOctetString, $.BER),
    "bearerService": $._encode_implicit(_TagClass.context, 2, () => $._encodeOctetString, $.BER),
    "supplementaryService": $._encode_implicit(_TagClass.context, 3, () => $._encodeOctetString, $.BER),
    "networkSpecificService": $._encode_implicit(_TagClass.context, 4, () => $._encodeInteger, $.BER),
}, $.BER); }
    return _cached_encoder_for_Service(value, elGetter);
}


/* eslint-enable */
