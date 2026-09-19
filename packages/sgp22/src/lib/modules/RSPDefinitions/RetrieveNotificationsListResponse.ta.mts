/* eslint-disable */
import {
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { PendingNotification, _decode_PendingNotification, _encode_PendingNotification } from "../RSPDefinitions/PendingNotification.ta.mjs";
// export { PendingNotification, _decode_PendingNotification, _encode_PendingNotification } from "../RSPDefinitions/PendingNotification.ta.mjs";
import { RetrieveNotificationsListResponse_notificationsListResultError, _decode_RetrieveNotificationsListResponse_notificationsListResultError, _encode_RetrieveNotificationsListResponse_notificationsListResultError } from "../RSPDefinitions/RetrieveNotificationsListResponse-notificationsListResultError.ta.mjs";
// export { RetrieveNotificationsListResponse_notificationsListResultError, RetrieveNotificationsListResponse_notificationsListResultError_undefinedError /* IMPORTED_LONG_NAMED_INTEGER */, undefinedError /* IMPORTED_SHORT_NAMED_INTEGER */, _decode_RetrieveNotificationsListResponse_notificationsListResultError, _encode_RetrieveNotificationsListResponse_notificationsListResultError } from "../RSPDefinitions/RetrieveNotificationsListResponse-notificationsListResultError.ta.mjs";


/**
 * @summary RetrieveNotificationsListResponse
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * RetrieveNotificationsListResponse  ::=  [43] CHOICE { -- Tag 'BF2B'
 *     notificationList SEQUENCE OF PendingNotification,
 *     notificationsListResultError INTEGER { undefinedError(127)}
 * }
 * ```
 */
export
type RetrieveNotificationsListResponse =
    { notificationList: PendingNotification[] } /* CHOICE_ALT_ROOT */
    | { notificationsListResultError: RetrieveNotificationsListResponse_notificationsListResultError } /* CHOICE_ALT_ROOT */;

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
    "CONTEXT 0": [ "notificationList", $._decodeSequenceOf<PendingNotification>(() => _decode_PendingNotification) ],
    "CONTEXT 1": [ "notificationsListResultError", _decode_RetrieveNotificationsListResponse_notificationsListResultError ]
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
    "notificationList": $._encodeSequenceOf<PendingNotification>(() => _encode_PendingNotification, $.BER),
    "notificationsListResultError": _encode_RetrieveNotificationsListResponse_notificationsListResultError,
}, $.BER), $.BER); }
    return _cached_encoder_for_RetrieveNotificationsListResponse(value, elGetter);
}


/* eslint-enable */
