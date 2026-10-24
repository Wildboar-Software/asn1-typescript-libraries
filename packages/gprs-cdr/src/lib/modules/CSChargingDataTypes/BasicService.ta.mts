/* eslint-disable */
import {
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    type OCTET_STRING,
    ASN1SizeError
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary BasicService
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * BasicService  ::=  CHOICE {
 *    bearerService     [2] IMPLICIT OCTET STRING ( SIZE( 1 ) ),
 *    teleservice       [3] IMPLICIT OCTET STRING ( SIZE( 1 ) )}
 * ```
 */
export
type BasicService =
    { bearerService: OCTET_STRING } /* CHOICE_ALT_ROOT */
    | { teleservice: OCTET_STRING } /* CHOICE_ALT_ROOT */;

let _cached_decoder_for_BasicService: $.ASN1Decoder<BasicService> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) BasicService
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_BasicService (el: _Element): BasicService {
    if (!_cached_decoder_for_BasicService) { _cached_decoder_for_BasicService = $._decode_inextensible_choice<BasicService>({
    "CONTEXT 2": [ "bearerService", $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString) ],
    "CONTEXT 3": [ "teleservice", $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString) ]
}); }
    const _decoded_BasicService = _cached_decoder_for_BasicService(el);
    if ("bearerService" in _decoded_BasicService && (_decoded_BasicService.bearerService.length !== 1)) {
        throw new ASN1SizeError("BasicService.bearerService violates SIZE constraint");
    }
    if ("teleservice" in _decoded_BasicService && (_decoded_BasicService.teleservice.length !== 1)) {
        throw new ASN1SizeError("BasicService.teleservice violates SIZE constraint");
    }
    return _decoded_BasicService;
}

let _cached_encoder_for_BasicService: $.ASN1Encoder<BasicService> | null = null;

/**
 * @summary Encodes a(n) BasicService into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The BasicService, encoded as an ASN.1 Element.
 */
export
function _encode_BasicService (value: BasicService, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_BasicService) { _cached_encoder_for_BasicService = $._encode_choice<BasicService>({
    "bearerService": $._encode_implicit(_TagClass.context, 2, () => $._encodeOctetString, $.BER),
    "teleservice": $._encode_implicit(_TagClass.context, 3, () => $._encodeOctetString, $.BER),
}, $.BER); }
    return _cached_encoder_for_BasicService(value, elGetter);
}


/* eslint-enable */
