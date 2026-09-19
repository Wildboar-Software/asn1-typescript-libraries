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
import { EuiccPackageResult, _decode_EuiccPackageResult, _encode_EuiccPackageResult } from "../SGP32Definitions/EuiccPackageResult.ta.mjs";
// export { EuiccPackageResult, _decode_EuiccPackageResult, _encode_EuiccPackageResult } from "../SGP32Definitions/EuiccPackageResult.ta.mjs";
import { EimPackageResult_ePRAndNotifications, _decode_EimPackageResult_ePRAndNotifications, _encode_EimPackageResult_ePRAndNotifications } from "../SGP32Definitions/EimPackageResult-ePRAndNotifications.ta.mjs";
// export { EimPackageResult_ePRAndNotifications, _decode_EimPackageResult_ePRAndNotifications, _encode_EimPackageResult_ePRAndNotifications } from "../SGP32Definitions/EimPackageResult-ePRAndNotifications.ta.mjs";
import { IpaEuiccDataResponse, _decode_IpaEuiccDataResponse, _encode_IpaEuiccDataResponse } from "../SGP32Definitions/IpaEuiccDataResponse.ta.mjs";
// export { IpaEuiccDataResponse, _decode_IpaEuiccDataResponse, _encode_IpaEuiccDataResponse } from "../SGP32Definitions/IpaEuiccDataResponse.ta.mjs";
import { ProfileDownloadTriggerResult, _decode_ProfileDownloadTriggerResult, _encode_ProfileDownloadTriggerResult } from "../SGP32Definitions/ProfileDownloadTriggerResult.ta.mjs";
// export { ProfileDownloadTriggerResult, _decode_ProfileDownloadTriggerResult, _encode_ProfileDownloadTriggerResult } from "../SGP32Definitions/ProfileDownloadTriggerResult.ta.mjs";
import { EimPackageResultResponseError, _decode_EimPackageResultResponseError, _encode_EimPackageResultResponseError } from "../SGP32Definitions/EimPackageResultResponseError.ta.mjs";
// export { EimPackageResultResponseError, _decode_EimPackageResultResponseError, _encode_EimPackageResultResponseError } from "../SGP32Definitions/EimPackageResultResponseError.ta.mjs";


/**
 * @summary EimPackageResult
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * EimPackageResult  ::=  CHOICE {
 *     euiccPackageResult [81] EuiccPackageResult, -- Tag 'BF51'
 *     ePRAndNotifications SEQUENCE {
 *         euiccPackageResult [81] EuiccPackageResult, -- Tag 'BF51'
 *         notificationList [0] PendingNotificationList -- Tag 'A0'
 *     },
 *     ipaEuiccDataResponse [82] IpaEuiccDataResponse, -- Tag 'BF52'
 *     profileDownloadTriggerResult [84] ProfileDownloadTriggerResult, -- Tag 'BF54'    
 *     eimPackageResultResponseError [0] EimPackageResultResponseError
 * }
 * ```
 */
export
type EimPackageResult =
    { euiccPackageResult: EuiccPackageResult } /* CHOICE_ALT_ROOT */
    | { ePRAndNotifications: EimPackageResult_ePRAndNotifications } /* CHOICE_ALT_ROOT */
    | { ipaEuiccDataResponse: IpaEuiccDataResponse } /* CHOICE_ALT_ROOT */
    | { profileDownloadTriggerResult: ProfileDownloadTriggerResult } /* CHOICE_ALT_ROOT */
    | { eimPackageResultResponseError: EimPackageResultResponseError } /* CHOICE_ALT_ROOT */;

let _cached_decoder_for_EimPackageResult: $.ASN1Decoder<EimPackageResult> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) EimPackageResult
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_EimPackageResult (el: _Element): EimPackageResult {
    if (!_cached_decoder_for_EimPackageResult) { _cached_decoder_for_EimPackageResult = $._decode_inextensible_choice<EimPackageResult>({
    "CONTEXT 81": [ "euiccPackageResult", $._decode_implicit<EuiccPackageResult>(() => _decode_EuiccPackageResult) ],
    "UNIVERSAL 16": [ "ePRAndNotifications", _decode_EimPackageResult_ePRAndNotifications ],
    "CONTEXT 82": [ "ipaEuiccDataResponse", $._decode_implicit<IpaEuiccDataResponse>(() => _decode_IpaEuiccDataResponse) ],
    "CONTEXT 84": [ "profileDownloadTriggerResult", $._decode_implicit<ProfileDownloadTriggerResult>(() => _decode_ProfileDownloadTriggerResult) ],
    "CONTEXT 0": [ "eimPackageResultResponseError", $._decode_implicit<EimPackageResultResponseError>(() => _decode_EimPackageResultResponseError) ]
}); }
    return _cached_decoder_for_EimPackageResult(el);
}

let _cached_encoder_for_EimPackageResult: $.ASN1Encoder<EimPackageResult> | null = null;

/**
 * @summary Encodes a(n) EimPackageResult into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The EimPackageResult, encoded as an ASN.1 Element.
 */
export
function _encode_EimPackageResult (value: EimPackageResult, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_EimPackageResult) { _cached_encoder_for_EimPackageResult = $._encode_choice<EimPackageResult>({
    "euiccPackageResult": $._encode_implicit(_TagClass.context, 81, () => _encode_EuiccPackageResult, $.BER),
    "ePRAndNotifications": _encode_EimPackageResult_ePRAndNotifications,
    "ipaEuiccDataResponse": $._encode_implicit(_TagClass.context, 82, () => _encode_IpaEuiccDataResponse, $.BER),
    "profileDownloadTriggerResult": $._encode_implicit(_TagClass.context, 84, () => _encode_ProfileDownloadTriggerResult, $.BER),
    "eimPackageResultResponseError": $._encode_implicit(_TagClass.context, 0, () => _encode_EimPackageResultResponseError, $.BER),
}, $.BER); }
    return _cached_encoder_for_EimPackageResult(value, elGetter);
}


/* eslint-enable */
