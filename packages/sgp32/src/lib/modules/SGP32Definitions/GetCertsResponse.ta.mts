/* eslint-disable */
import {
    itu_t,
    itu_r,
    ccitt,
    iso,
    joint_iso_itu_t,
    joint_iso_ccitt,
    OPTIONAL,
    BOOLEAN,
    INTEGER,
    BIT_STRING,
    OCTET_STRING,
    NULL,
    OBJECT_IDENTIFIER,
    ObjectDescriptor,
    EXTERNAL,
    REAL,
    INSTANCE_OF,
    ENUMERATED,
    EMBEDDED_PDV,
    UTF8String,
    RELATIVE_OID,
    SEQUENCE,
    SEQUENCE_OF,
    SET,
    SET_OF,
    GraphicString,
    NumericString,
    VisibleString,
    PrintableString,
    ISO646String,
    TeletexString,
    GeneralString,
    T61String,
    UniversalString,
    VideotexString,
    BMPString,
    IA5String,
    CharacterString,
    UTCTime,
    GeneralizedTime,
    TIME,
    DATE,
    TIME_OF_DAY,
    DATE_TIME,
    DURATION,
    OID_IRI,
    RELATIVE_OID_IRI,
    TRUE,
    FALSE,
    TRUE_BIT,
    FALSE_BIT,
    PLUS_INFINITY,
    MINUS_INFINITY,
    NOT_A_NUMBER,
    TYPE_IDENTIFIER,
    ABSTRACT_SYNTAX,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    ASN1Construction as _Construction,
    ASN1UniversalType as _UniversalType,
    ObjectIdentifier as _OID,
    External as _External,
    EmbeddedPDV as _PDV,
    ASN1ConstructionError as _ConstructionError,
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { GetCertsResponse_certs, _decode_GetCertsResponse_certs, _encode_GetCertsResponse_certs } from "../SGP32Definitions/GetCertsResponse-certs.ta.mjs";
// export { GetCertsResponse_certs, _decode_GetCertsResponse_certs, _encode_GetCertsResponse_certs } from "../SGP32Definitions/GetCertsResponse-certs.ta.mjs";
import { GetCertsResponse_getCertsError, GetCertsResponse_getCertsError_invalidCiPKId /* IMPORTED_LONG_NAMED_INTEGER */, invalidCiPKId /* IMPORTED_SHORT_NAMED_INTEGER */, GetCertsResponse_getCertsError_undfinedError /* IMPORTED_LONG_NAMED_INTEGER */, undfinedError /* IMPORTED_SHORT_NAMED_INTEGER */, _decode_GetCertsResponse_getCertsError, _encode_GetCertsResponse_getCertsError } from "../SGP32Definitions/GetCertsResponse-getCertsError.ta.mjs";
// export { GetCertsResponse_getCertsError, GetCertsResponse_getCertsError_invalidCiPKId /* IMPORTED_LONG_NAMED_INTEGER */, invalidCiPKId /* IMPORTED_SHORT_NAMED_INTEGER */, GetCertsResponse_getCertsError_undfinedError /* IMPORTED_LONG_NAMED_INTEGER */, undfinedError /* IMPORTED_SHORT_NAMED_INTEGER */, _decode_GetCertsResponse_getCertsError, _encode_GetCertsResponse_getCertsError } from "../SGP32Definitions/GetCertsResponse-getCertsError.ta.mjs";


/**
 * @summary GetCertsResponse
 * @description
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
