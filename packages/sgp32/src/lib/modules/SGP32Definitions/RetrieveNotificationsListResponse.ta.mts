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
import { PendingNotificationList, _decode_PendingNotificationList, _encode_PendingNotificationList } from "../SGP32Definitions/PendingNotificationList.ta.mjs";
// export { PendingNotificationList, _decode_PendingNotificationList, _encode_PendingNotificationList } from "../SGP32Definitions/PendingNotificationList.ta.mjs";
import { RetrieveNotificationsListResponse_notificationsListResultError, RetrieveNotificationsListResponse_notificationsListResultError_undefinedError /* IMPORTED_LONG_NAMED_INTEGER */, undefinedError /* IMPORTED_SHORT_NAMED_INTEGER */, _decode_RetrieveNotificationsListResponse_notificationsListResultError, _encode_RetrieveNotificationsListResponse_notificationsListResultError } from "../SGP32Definitions/RetrieveNotificationsListResponse-notificationsListResultError.ta.mjs";
// export { RetrieveNotificationsListResponse_notificationsListResultError, RetrieveNotificationsListResponse_notificationsListResultError_undefinedError /* IMPORTED_LONG_NAMED_INTEGER */, undefinedError /* IMPORTED_SHORT_NAMED_INTEGER */, _decode_RetrieveNotificationsListResponse_notificationsListResultError, _encode_RetrieveNotificationsListResponse_notificationsListResultError } from "../SGP32Definitions/RetrieveNotificationsListResponse-notificationsListResultError.ta.mjs";
import { EuiccPackageResultList, _decode_EuiccPackageResultList, _encode_EuiccPackageResultList } from "../SGP32Definitions/EuiccPackageResultList.ta.mjs";
// export { EuiccPackageResultList, _decode_EuiccPackageResultList, _encode_EuiccPackageResultList } from "../SGP32Definitions/EuiccPackageResultList.ta.mjs";


/**
 * @summary RetrieveNotificationsListResponse
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * RetrieveNotificationsListResponse  ::=  [43] CHOICE { -- Tag 'BF2B'
 *     notificationList PendingNotificationList, -- Tag 'A0'
 *     notificationsListResultError INTEGER { undefinedError(127)}, -- Tag '81'
 *     euiccPackageResultList EuiccPackageResultList -- Tag 'A2'
 * }
 * ```
 */
export
type RetrieveNotificationsListResponse =
    { notificationList: PendingNotificationList } /* CHOICE_ALT_ROOT */
    | { notificationsListResultError: RetrieveNotificationsListResponse_notificationsListResultError } /* CHOICE_ALT_ROOT */
    | { euiccPackageResultList: EuiccPackageResultList } /* CHOICE_ALT_ROOT */;

let _cached_decoder_for_RetrieveNotificationsListResponse: $.ASN1Decoder<RetrieveNotificationsListResponse> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) RetrieveNotificationsListResponse
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_RetrieveNotificationsListResponse (el: _Element): RetrieveNotificationsListResponse {
    if (!_cached_decoder_for_RetrieveNotificationsListResponse) { _cached_decoder_for_RetrieveNotificationsListResponse = $._decode_explicit<RetrieveNotificationsListResponse>(() => $._decode_inextensible_choice<RetrieveNotificationsListResponse>({
    "CONTEXT 0": [ "notificationList", _decode_PendingNotificationList ],
    "CONTEXT 1": [ "notificationsListResultError", _decode_RetrieveNotificationsListResponse_notificationsListResultError ],
    "CONTEXT 2": [ "euiccPackageResultList", _decode_EuiccPackageResultList ]
})); }
    return _cached_decoder_for_RetrieveNotificationsListResponse(el);
}

let _cached_encoder_for_RetrieveNotificationsListResponse: $.ASN1Encoder<RetrieveNotificationsListResponse> | null = null;

/**
 * @summary Encodes a(n) RetrieveNotificationsListResponse into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The RetrieveNotificationsListResponse, encoded as an ASN.1 Element.
 */
export
function _encode_RetrieveNotificationsListResponse (value: RetrieveNotificationsListResponse, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_RetrieveNotificationsListResponse) { _cached_encoder_for_RetrieveNotificationsListResponse = $._encode_explicit(_TagClass.context, 43, () => $._encode_choice<RetrieveNotificationsListResponse>({
    "notificationList": _encode_PendingNotificationList,
    "notificationsListResultError": _encode_RetrieveNotificationsListResponse_notificationsListResultError,
    "euiccPackageResultList": _encode_EuiccPackageResultList,
}, $.BER), $.BER); }
    return _cached_encoder_for_RetrieveNotificationsListResponse(value, elGetter);
}


/* eslint-enable */
