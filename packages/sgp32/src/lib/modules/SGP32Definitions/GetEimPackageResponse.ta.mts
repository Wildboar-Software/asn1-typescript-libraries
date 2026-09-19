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
import { EuiccPackageRequest, _decode_EuiccPackageRequest, _encode_EuiccPackageRequest } from "../SGP32Definitions/EuiccPackageRequest.ta.mjs";
// export { EuiccPackageRequest, _decode_EuiccPackageRequest, _encode_EuiccPackageRequest } from "../SGP32Definitions/EuiccPackageRequest.ta.mjs";
import { IpaEuiccDataRequest, _decode_IpaEuiccDataRequest, _encode_IpaEuiccDataRequest } from "../SGP32Definitions/IpaEuiccDataRequest.ta.mjs";
// export { IpaEuiccDataRequest, _decode_IpaEuiccDataRequest, _encode_IpaEuiccDataRequest } from "../SGP32Definitions/IpaEuiccDataRequest.ta.mjs";
import { ProfileDownloadTriggerRequest, _decode_ProfileDownloadTriggerRequest, _encode_ProfileDownloadTriggerRequest } from "../SGP32Definitions/ProfileDownloadTriggerRequest.ta.mjs";
// export { ProfileDownloadTriggerRequest, _decode_ProfileDownloadTriggerRequest, _encode_ProfileDownloadTriggerRequest } from "../SGP32Definitions/ProfileDownloadTriggerRequest.ta.mjs";
import { GetEimPackageResponse_eimPackageError, GetEimPackageResponse_eimPackageError_noEimPackageAvailable /* IMPORTED_LONG_NAMED_INTEGER */, noEimPackageAvailable /* IMPORTED_SHORT_NAMED_INTEGER */, GetEimPackageResponse_eimPackageError_eidNotFound /* IMPORTED_LONG_NAMED_INTEGER */, eidNotFound /* IMPORTED_SHORT_NAMED_INTEGER */, GetEimPackageResponse_eimPackageError_invalidEid /* IMPORTED_LONG_NAMED_INTEGER */, invalidEid /* IMPORTED_SHORT_NAMED_INTEGER */, GetEimPackageResponse_eimPackageError_missingEid /* IMPORTED_LONG_NAMED_INTEGER */, missingEid /* IMPORTED_SHORT_NAMED_INTEGER */, GetEimPackageResponse_eimPackageError_undefinedError /* IMPORTED_LONG_NAMED_INTEGER */, undefinedError /* IMPORTED_SHORT_NAMED_INTEGER */, _decode_GetEimPackageResponse_eimPackageError, _encode_GetEimPackageResponse_eimPackageError } from "../SGP32Definitions/GetEimPackageResponse-eimPackageError.ta.mjs";
// export { GetEimPackageResponse_eimPackageError, GetEimPackageResponse_eimPackageError_noEimPackageAvailable /* IMPORTED_LONG_NAMED_INTEGER */, noEimPackageAvailable /* IMPORTED_SHORT_NAMED_INTEGER */, GetEimPackageResponse_eimPackageError_eidNotFound /* IMPORTED_LONG_NAMED_INTEGER */, eidNotFound /* IMPORTED_SHORT_NAMED_INTEGER */, GetEimPackageResponse_eimPackageError_invalidEid /* IMPORTED_LONG_NAMED_INTEGER */, invalidEid /* IMPORTED_SHORT_NAMED_INTEGER */, GetEimPackageResponse_eimPackageError_missingEid /* IMPORTED_LONG_NAMED_INTEGER */, missingEid /* IMPORTED_SHORT_NAMED_INTEGER */, GetEimPackageResponse_eimPackageError_undefinedError /* IMPORTED_LONG_NAMED_INTEGER */, undefinedError /* IMPORTED_SHORT_NAMED_INTEGER */, _decode_GetEimPackageResponse_eimPackageError, _encode_GetEimPackageResponse_eimPackageError } from "../SGP32Definitions/GetEimPackageResponse-eimPackageError.ta.mjs";


/**
 * @summary GetEimPackageResponse
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * GetEimPackageResponse  ::=  [79] CHOICE { -- Tag 'BF4F'
 *     euiccPackageRequest [81] EuiccPackageRequest, -- Tag 'BF51'
 *     ipaEuiccDataRequest [82] IpaEuiccDataRequest, -- Tag 'BF52'
 *     profileDownloadTriggerRequest [84] ProfileDownloadTriggerRequest, -- Tag 'BF54'
 *     eimPackageError INTEGER {
 *         noEimPackageAvailable(1),
 *         eidNotFound(2),
 *         invalidEid(3),
 *         missingEid(4),
 *         undefinedError(127)
 *     }
 * }
 * ```
 */
export
type GetEimPackageResponse =
    { euiccPackageRequest: EuiccPackageRequest } /* CHOICE_ALT_ROOT */
    | { ipaEuiccDataRequest: IpaEuiccDataRequest } /* CHOICE_ALT_ROOT */
    | { profileDownloadTriggerRequest: ProfileDownloadTriggerRequest } /* CHOICE_ALT_ROOT */
    | { eimPackageError: GetEimPackageResponse_eimPackageError } /* CHOICE_ALT_ROOT */;

let _cached_decoder_for_GetEimPackageResponse: $.ASN1Decoder<GetEimPackageResponse> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) GetEimPackageResponse
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_GetEimPackageResponse (el: _Element): GetEimPackageResponse {
    if (!_cached_decoder_for_GetEimPackageResponse) { _cached_decoder_for_GetEimPackageResponse = $._decode_explicit<GetEimPackageResponse>(() => $._decode_inextensible_choice<GetEimPackageResponse>({
    "CONTEXT 81": [ "euiccPackageRequest", $._decode_implicit<EuiccPackageRequest>(() => _decode_EuiccPackageRequest) ],
    "CONTEXT 82": [ "ipaEuiccDataRequest", $._decode_implicit<IpaEuiccDataRequest>(() => _decode_IpaEuiccDataRequest) ],
    "CONTEXT 84": [ "profileDownloadTriggerRequest", $._decode_implicit<ProfileDownloadTriggerRequest>(() => _decode_ProfileDownloadTriggerRequest) ],
    "UNIVERSAL 2": [ "eimPackageError", _decode_GetEimPackageResponse_eimPackageError ]
})); }
    return _cached_decoder_for_GetEimPackageResponse(el);
}

let _cached_encoder_for_GetEimPackageResponse: $.ASN1Encoder<GetEimPackageResponse> | null = null;

/**
 * @summary Encodes a(n) GetEimPackageResponse into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The GetEimPackageResponse, encoded as an ASN.1 Element.
 */
export
function _encode_GetEimPackageResponse (value: GetEimPackageResponse, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_GetEimPackageResponse) { _cached_encoder_for_GetEimPackageResponse = $._encode_explicit(_TagClass.context, 79, () => $._encode_choice<GetEimPackageResponse>({
    "euiccPackageRequest": $._encode_implicit(_TagClass.context, 81, () => _encode_EuiccPackageRequest, $.BER),
    "ipaEuiccDataRequest": $._encode_implicit(_TagClass.context, 82, () => _encode_IpaEuiccDataRequest, $.BER),
    "profileDownloadTriggerRequest": $._encode_implicit(_TagClass.context, 84, () => _encode_ProfileDownloadTriggerRequest, $.BER),
    "eimPackageError": _encode_GetEimPackageResponse_eimPackageError,
}, $.BER), $.BER); }
    return _cached_encoder_for_GetEimPackageResponse(value, elGetter);
}


/* eslint-enable */
