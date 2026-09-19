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
import { TransferEimPackageResponse_ePRAndNotifications, _decode_TransferEimPackageResponse_ePRAndNotifications, _encode_TransferEimPackageResponse_ePRAndNotifications } from "../SGP32Definitions/TransferEimPackageResponse-ePRAndNotifications.ta.mjs";
// export { TransferEimPackageResponse_ePRAndNotifications, _decode_TransferEimPackageResponse_ePRAndNotifications, _encode_TransferEimPackageResponse_ePRAndNotifications } from "../SGP32Definitions/TransferEimPackageResponse-ePRAndNotifications.ta.mjs";
import { IpaEuiccDataResponse, _decode_IpaEuiccDataResponse, _encode_IpaEuiccDataResponse } from "../SGP32Definitions/IpaEuiccDataResponse.ta.mjs";
// export { IpaEuiccDataResponse, _decode_IpaEuiccDataResponse, _encode_IpaEuiccDataResponse } from "../SGP32Definitions/IpaEuiccDataResponse.ta.mjs";
import { EimPackageReceivedWithCid, _decode_EimPackageReceivedWithCid, _encode_EimPackageReceivedWithCid } from "../SGP32Definitions/EimPackageReceivedWithCid.ta.mjs";
// export { EimPackageReceivedWithCid, _decode_EimPackageReceivedWithCid, _encode_EimPackageReceivedWithCid } from "../SGP32Definitions/EimPackageReceivedWithCid.ta.mjs";
import { TransferEimPackageResponse_eimPackageError, TransferEimPackageResponse_eimPackageError_invalidPackageFormat /* IMPORTED_LONG_NAMED_INTEGER */, invalidPackageFormat /* IMPORTED_SHORT_NAMED_INTEGER */, TransferEimPackageResponse_eimPackageError_unknownPackage /* IMPORTED_LONG_NAMED_INTEGER */, unknownPackage /* IMPORTED_SHORT_NAMED_INTEGER */, TransferEimPackageResponse_eimPackageError_undefinedError /* IMPORTED_LONG_NAMED_INTEGER */, undefinedError /* IMPORTED_SHORT_NAMED_INTEGER */, _decode_TransferEimPackageResponse_eimPackageError, _encode_TransferEimPackageResponse_eimPackageError } from "../SGP32Definitions/TransferEimPackageResponse-eimPackageError.ta.mjs";
// export { TransferEimPackageResponse_eimPackageError, TransferEimPackageResponse_eimPackageError_invalidPackageFormat /* IMPORTED_LONG_NAMED_INTEGER */, invalidPackageFormat /* IMPORTED_SHORT_NAMED_INTEGER */, TransferEimPackageResponse_eimPackageError_unknownPackage /* IMPORTED_LONG_NAMED_INTEGER */, unknownPackage /* IMPORTED_SHORT_NAMED_INTEGER */, TransferEimPackageResponse_eimPackageError_undefinedError /* IMPORTED_LONG_NAMED_INTEGER */, undefinedError /* IMPORTED_SHORT_NAMED_INTEGER */, _decode_TransferEimPackageResponse_eimPackageError, _encode_TransferEimPackageResponse_eimPackageError } from "../SGP32Definitions/TransferEimPackageResponse-eimPackageError.ta.mjs";
import { EimPackageErrorWithCid, _decode_EimPackageErrorWithCid, _encode_EimPackageErrorWithCid } from "../SGP32Definitions/EimPackageErrorWithCid.ta.mjs";
// export { EimPackageErrorWithCid, _decode_EimPackageErrorWithCid, _encode_EimPackageErrorWithCid } from "../SGP32Definitions/EimPackageErrorWithCid.ta.mjs";


/**
 * @summary TransferEimPackageResponse
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * TransferEimPackageResponse  ::=  [78] CHOICE { -- Tag 'BF4E'
 *     euiccPackageResult [81] EuiccPackageResult, -- Tag 'BF51'
 *     ePRAndNotifications SEQUENCE {
 *         euiccPackageResult [81] EuiccPackageResult, -- Tag 'BF51'
 *         notificationList [0] PendingNotificationList  -- Tag 'A0'
 *     },
 *     ipaEuiccDataResponse [82] IpaEuiccDataResponse, -- Tag 'BF52'
 *     eimPackageReceived NULL,
 *     eimPackageReceivedWithCid [96] EimPackageReceivedWithCid,
 *     eimPackageError INTEGER {
 *         invalidPackageFormat(1),
 *         unknownPackage(2),
 *         undefinedError(127)
 *     },
 *     eimPackageErrorWithCid [97] EimPackageErrorWithCid
 * }
 * ```
 */
export
type TransferEimPackageResponse =
    { euiccPackageResult: EuiccPackageResult } /* CHOICE_ALT_ROOT */
    | { ePRAndNotifications: TransferEimPackageResponse_ePRAndNotifications } /* CHOICE_ALT_ROOT */
    | { ipaEuiccDataResponse: IpaEuiccDataResponse } /* CHOICE_ALT_ROOT */
    | { eimPackageReceived: NULL } /* CHOICE_ALT_ROOT */
    | { eimPackageReceivedWithCid: EimPackageReceivedWithCid } /* CHOICE_ALT_ROOT */
    | { eimPackageError: TransferEimPackageResponse_eimPackageError } /* CHOICE_ALT_ROOT */
    | { eimPackageErrorWithCid: EimPackageErrorWithCid } /* CHOICE_ALT_ROOT */;

let _cached_decoder_for_TransferEimPackageResponse: $.ASN1Decoder<TransferEimPackageResponse> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) TransferEimPackageResponse
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_TransferEimPackageResponse (el: _Element): TransferEimPackageResponse {
    if (!_cached_decoder_for_TransferEimPackageResponse) { _cached_decoder_for_TransferEimPackageResponse = $._decode_explicit<TransferEimPackageResponse>(() => $._decode_inextensible_choice<TransferEimPackageResponse>({
    "CONTEXT 81": [ "euiccPackageResult", $._decode_implicit<EuiccPackageResult>(() => _decode_EuiccPackageResult) ],
    "UNIVERSAL 16": [ "ePRAndNotifications", _decode_TransferEimPackageResponse_ePRAndNotifications ],
    "CONTEXT 82": [ "ipaEuiccDataResponse", $._decode_implicit<IpaEuiccDataResponse>(() => _decode_IpaEuiccDataResponse) ],
    "UNIVERSAL 5": [ "eimPackageReceived", $._decodeNull ],
    "CONTEXT 96": [ "eimPackageReceivedWithCid", $._decode_implicit<EimPackageReceivedWithCid>(() => _decode_EimPackageReceivedWithCid) ],
    "UNIVERSAL 2": [ "eimPackageError", _decode_TransferEimPackageResponse_eimPackageError ],
    "CONTEXT 97": [ "eimPackageErrorWithCid", $._decode_implicit<EimPackageErrorWithCid>(() => _decode_EimPackageErrorWithCid) ]
})); }
    return _cached_decoder_for_TransferEimPackageResponse(el);
}

let _cached_encoder_for_TransferEimPackageResponse: $.ASN1Encoder<TransferEimPackageResponse> | null = null;

/**
 * @summary Encodes a(n) TransferEimPackageResponse into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The TransferEimPackageResponse, encoded as an ASN.1 Element.
 */
export
function _encode_TransferEimPackageResponse (value: TransferEimPackageResponse, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_TransferEimPackageResponse) { _cached_encoder_for_TransferEimPackageResponse = $._encode_explicit(_TagClass.context, 78, () => $._encode_choice<TransferEimPackageResponse>({
    "euiccPackageResult": $._encode_implicit(_TagClass.context, 81, () => _encode_EuiccPackageResult, $.BER),
    "ePRAndNotifications": _encode_TransferEimPackageResponse_ePRAndNotifications,
    "ipaEuiccDataResponse": $._encode_implicit(_TagClass.context, 82, () => _encode_IpaEuiccDataResponse, $.BER),
    "eimPackageReceived": $._encodeNull,
    "eimPackageReceivedWithCid": $._encode_implicit(_TagClass.context, 96, () => _encode_EimPackageReceivedWithCid, $.BER),
    "eimPackageError": _encode_TransferEimPackageResponse_eimPackageError,
    "eimPackageErrorWithCid": $._encode_implicit(_TagClass.context, 97, () => _encode_EimPackageErrorWithCid, $.BER),
}, $.BER), $.BER); }
    return _cached_encoder_for_TransferEimPackageResponse(value, elGetter);
}


/* eslint-enable */
