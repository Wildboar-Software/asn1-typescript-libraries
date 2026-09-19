/* eslint-disable */
import {
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { NotificationMetadata, _decode_NotificationMetadata, _encode_NotificationMetadata } from "../RSPDefinitions/NotificationMetadata.ta.mjs";
// export { NotificationMetadata, _decode_NotificationMetadata, _encode_NotificationMetadata } from "../RSPDefinitions/NotificationMetadata.ta.mjs";
import { ListNotificationResponse_listNotificationsResultError, _decode_ListNotificationResponse_listNotificationsResultError, _encode_ListNotificationResponse_listNotificationsResultError } from "../RSPDefinitions/ListNotificationResponse-listNotificationsResultError.ta.mjs";
// export { ListNotificationResponse_listNotificationsResultError, ListNotificationResponse_listNotificationsResultError_undefinedError /* IMPORTED_LONG_NAMED_INTEGER */, undefinedError /* IMPORTED_SHORT_NAMED_INTEGER */, _decode_ListNotificationResponse_listNotificationsResultError, _encode_ListNotificationResponse_listNotificationsResultError } from "../RSPDefinitions/ListNotificationResponse-listNotificationsResultError.ta.mjs";


/**
 * @summary ListNotificationResponse
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ListNotificationResponse  ::=  [40] CHOICE { -- Tag 'BF28'
 *     notificationMetadataList SEQUENCE OF NotificationMetadata,
 *     listNotificationsResultError INTEGER {undefinedError(127)}
 * }
 * ```
 */
export
type ListNotificationResponse =
    { notificationMetadataList: NotificationMetadata[] } /* CHOICE_ALT_ROOT */
    | { listNotificationsResultError: ListNotificationResponse_listNotificationsResultError } /* CHOICE_ALT_ROOT */;

let _cached_decoder_for_ListNotificationResponse: $.ASN1Decoder<ListNotificationResponse> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) ListNotificationResponse
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_ListNotificationResponse (el: _Element): ListNotificationResponse {
    if (!_cached_decoder_for_ListNotificationResponse) { _cached_decoder_for_ListNotificationResponse = $._decode_explicit<ListNotificationResponse>(() => $._decode_inextensible_choice<ListNotificationResponse>({
    "CONTEXT 0": [ "notificationMetadataList", $._decodeSequenceOf<NotificationMetadata>(() => _decode_NotificationMetadata) ],
    "CONTEXT 1": [ "listNotificationsResultError", _decode_ListNotificationResponse_listNotificationsResultError ]
})); }
    return _cached_decoder_for_ListNotificationResponse(el);
}

let _cached_encoder_for_ListNotificationResponse: $.ASN1Encoder<ListNotificationResponse> | null = null;

/**
 * @summary Encodes a(n) ListNotificationResponse into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ListNotificationResponse, encoded as an ASN.1 Element.
 */
export
function _encode_ListNotificationResponse (value: ListNotificationResponse, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_ListNotificationResponse) { _cached_encoder_for_ListNotificationResponse = $._encode_explicit(_TagClass.context, 40, () => $._encode_choice<ListNotificationResponse>({
    "notificationMetadataList": $._encodeSequenceOf<NotificationMetadata>(() => _encode_NotificationMetadata, $.BER),
    "listNotificationsResultError": _encode_ListNotificationResponse_listNotificationsResultError,
}, $.BER), $.BER); }
    return _cached_encoder_for_ListNotificationResponse(value, elGetter);
}


/* eslint-enable */
