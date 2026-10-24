/* eslint-disable */
import {
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { GetCertsResponse_certs, _decode_GetCertsResponse_certs, _encode_GetCertsResponse_certs } from "../SGP32Definitions/GetCertsResponse-certs.ta.mjs";
import { type GetCertsResponse_getCertsError, _decode_GetCertsResponse_getCertsError, _encode_GetCertsResponse_getCertsError } from "../SGP32Definitions/GetCertsResponse-getCertsError.ta.mjs";


/**
 * @summary GetCertsResponse
 * @description
 * 
 * ES10b.GetCerts response. Select `certs` to return both the EUM certificate
 * and the eUICC certificate. Select `getCertsError` on failure. SGP.32 v1.2
 * section 5.9.10 names `invalidCiPKId(1)` and `undfinedError(127)` and does
 * not further define the conditions that produce them. SGP.32 v1.2, section
 * 5.9.10.
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * GetCertsResponse  ::=  [86] CHOICE { -- Tag 'BF56'
 *     certs SEQUENCE {
 *         eumCertificate [5] Certificate, -- Tag 'A5'
 *         euiccCertificate [6] Certificate -- Tag 'A6'
 *     },
 *     getCertsError INTEGER {invalidCiPKId(1), undfinedError(127)}
 * }
 * ```
 */
export
type GetCertsResponse =
    { certs: GetCertsResponse_certs } /* CHOICE_ALT_ROOT */
    | { getCertsError: GetCertsResponse_getCertsError } /* CHOICE_ALT_ROOT */;

let _cached_decoder_for_GetCertsResponse: $.ASN1Decoder<GetCertsResponse> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) GetCertsResponse
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_GetCertsResponse (el: _Element): GetCertsResponse {
    if (!_cached_decoder_for_GetCertsResponse) { _cached_decoder_for_GetCertsResponse = $._decode_explicit<GetCertsResponse>(() => $._decode_inextensible_choice<GetCertsResponse>({
    "CONTEXT 0": [ "certs", _decode_GetCertsResponse_certs ],
    "CONTEXT 1": [ "getCertsError", _decode_GetCertsResponse_getCertsError ]
})); }
    return _cached_decoder_for_GetCertsResponse(el);
}

let _cached_encoder_for_GetCertsResponse: $.ASN1Encoder<GetCertsResponse> | null = null;

/**
 * @summary Encodes a(n) GetCertsResponse into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The GetCertsResponse, encoded as an ASN.1 Element.
 */
export
function _encode_GetCertsResponse (value: GetCertsResponse, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_GetCertsResponse) { _cached_encoder_for_GetCertsResponse = $._encode_explicit(_TagClass.context, 86, () => $._encode_choice<GetCertsResponse>({
    "certs": _encode_GetCertsResponse_certs,
    "getCertsError": _encode_GetCertsResponse_getCertsError,
}, $.BER), $.BER); }
    return _cached_encoder_for_GetCertsResponse(value, elGetter);
}


/* eslint-enable */
