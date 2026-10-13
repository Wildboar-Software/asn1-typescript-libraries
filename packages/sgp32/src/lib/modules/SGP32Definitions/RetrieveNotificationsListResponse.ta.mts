/* eslint-disable */
import {
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { PendingNotificationList, _decode_PendingNotificationList, _encode_PendingNotificationList } from "../SGP32Definitions/PendingNotificationList.ta.mjs";
import { RetrieveNotificationsListResponse_notificationsListResultError, _decode_RetrieveNotificationsListResponse_notificationsListResultError, _encode_RetrieveNotificationsListResponse_notificationsListResultError } from "../SGP32Definitions/RetrieveNotificationsListResponse-notificationsListResultError.ta.mjs";
import { EuiccPackageResultList, _decode_EuiccPackageResultList, _encode_EuiccPackageResultList } from "../SGP32Definitions/EuiccPackageResultList.ta.mjs";


/**
 * @summary RetrieveNotificationsListResponse
 * @description
 * 
 * Response to ES10b.RetrieveNotificationsList. notificationList is the pending
 * Notifications that match the filter, in any order, and is empty when none
 * match. Each entry is a ProfileInstallationResult or an
 * OtherSignedNotification as defined in SGP.22 section 5.7.10.
 * euiccPackageResultList is the matching eUICC Package Results, also in any
 * order, and empty when none match. notificationsListResultError is the error
 * alternative. SGP.32 v1.2, section 5.9.11.
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
