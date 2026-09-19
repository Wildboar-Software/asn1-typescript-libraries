/* eslint-disable */
import {
    ASN1Element as _Element,
    INTEGER
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary ListNotificationResponse_listNotificationsResultError
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ListNotificationResponse-listNotificationsResultError ::= INTEGER { -- REMOVED_FROM_UNNESTING -- }
 * ```
 */
export
type ListNotificationResponse_listNotificationsResultError = INTEGER;

/**
 * @summary ListNotificationResponse_listNotificationsResultError_undefinedError
 * @constant
 * @type {number}
 */
export
const ListNotificationResponse_listNotificationsResultError_undefinedError: ListNotificationResponse_listNotificationsResultError = 127; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ListNotificationResponse_listNotificationsResultError_undefinedError
 * @constant
 * @type {number}
 */
export
const undefinedError: ListNotificationResponse_listNotificationsResultError = ListNotificationResponse_listNotificationsResultError_undefinedError; /* SHORT_NAMED_INTEGER_VALUE */

let _cached_decoder_for_ListNotificationResponse_listNotificationsResultError: $.ASN1Decoder<ListNotificationResponse_listNotificationsResultError> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) ListNotificationResponse_listNotificationsResultError
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_ListNotificationResponse_listNotificationsResultError (el: _Element): ListNotificationResponse_listNotificationsResultError {
    if (!_cached_decoder_for_ListNotificationResponse_listNotificationsResultError) { _cached_decoder_for_ListNotificationResponse_listNotificationsResultError = $._decodeInteger; }
    return _cached_decoder_for_ListNotificationResponse_listNotificationsResultError(el);
}

let _cached_encoder_for_ListNotificationResponse_listNotificationsResultError: $.ASN1Encoder<ListNotificationResponse_listNotificationsResultError> | null = null;

/**
 * @summary Encodes a(n) ListNotificationResponse_listNotificationsResultError into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ListNotificationResponse_listNotificationsResultError, encoded as an ASN.1 Element.
 */
export
function _encode_ListNotificationResponse_listNotificationsResultError (value: ListNotificationResponse_listNotificationsResultError, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_ListNotificationResponse_listNotificationsResultError) { _cached_encoder_for_ListNotificationResponse_listNotificationsResultError = $._encodeInteger; }
    return _cached_encoder_for_ListNotificationResponse_listNotificationsResultError(value, elGetter);
}


/* eslint-enable */
