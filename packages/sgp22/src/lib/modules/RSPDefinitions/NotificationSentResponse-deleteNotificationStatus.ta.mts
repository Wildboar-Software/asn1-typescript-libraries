/* eslint-disable */
import {
    type ASN1Element as _Element,
    type INTEGER
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary NotificationSentResponse_deleteNotificationStatus
 * @description
 * 
 * `ok` (0), `nothingToDelete` (1), or `undefinedError` (127). SGP.22 v3.1
 * §5.7.11.
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * NotificationSentResponse-deleteNotificationStatus ::= INTEGER {
 *     ok(0),
 *     nothingToDelete(1),
 *     undefinedError(127)
 * }
 * ```
 */
export
type NotificationSentResponse_deleteNotificationStatus = INTEGER;

/**
 * @summary NotificationSentResponse_deleteNotificationStatus_ok
 * @description
 * 
 * The notification with that sequence number was removed. SGP.22 v3.1 §5.7.11.
 * 
 * @constant
 * @type {number}
 */
export
const NotificationSentResponse_deleteNotificationStatus_ok: 0 = 0 satisfies NotificationSentResponse_deleteNotificationStatus; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary NotificationSentResponse_deleteNotificationStatus_ok
 * @description
 * 
 * The notification with that sequence number was removed. SGP.22 v3.1 §5.7.11.
 * 
 * @constant
 * @type {number}
 */
export
const ok: 0 = NotificationSentResponse_deleteNotificationStatus_ok; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary NotificationSentResponse_deleteNotificationStatus_nothingToDelete
 * @description
 * 
 * No pending notification has that sequence number. SGP.22 v3.1 §5.7.11.
 * 
 * @constant
 * @type {number}
 */
export
const NotificationSentResponse_deleteNotificationStatus_nothingToDelete: 1 = 1 satisfies NotificationSentResponse_deleteNotificationStatus; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary NotificationSentResponse_deleteNotificationStatus_nothingToDelete
 * @description
 * 
 * No pending notification has that sequence number. SGP.22 v3.1 §5.7.11.
 * 
 * @constant
 * @type {number}
 */
export
const nothingToDelete: 1 = NotificationSentResponse_deleteNotificationStatus_nothingToDelete; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary NotificationSentResponse_deleteNotificationStatus_undefinedError
 * @description
 * 
 * The notification was not removed. SGP.22 v3.1 §5.7.11.
 * 
 * @constant
 * @type {number}
 */
export
const NotificationSentResponse_deleteNotificationStatus_undefinedError: 127 = 127 satisfies NotificationSentResponse_deleteNotificationStatus; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary NotificationSentResponse_deleteNotificationStatus_undefinedError
 * @description
 * 
 * The notification was not removed. SGP.22 v3.1 §5.7.11.
 * 
 * @constant
 * @type {number}
 */
export
const undefinedError: 127 = NotificationSentResponse_deleteNotificationStatus_undefinedError; /* SHORT_NAMED_INTEGER_VALUE */
export const _decode_NotificationSentResponse_deleteNotificationStatus: $.ASN1Decoder<INTEGER> = $._decodeInteger;
export const _encode_NotificationSentResponse_deleteNotificationStatus: $.ASN1Encoder<INTEGER> = $._encodeInteger;


/* eslint-enable */
