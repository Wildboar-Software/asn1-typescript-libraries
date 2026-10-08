/* eslint-disable */
import {
    ASN1Element as _Element,
    INTEGER
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary NotificationSentResponse_deleteNotificationStatus
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * NotificationSentResponse-deleteNotificationStatus ::= INTEGER { -- REMOVED_FROM_UNNESTING -- }
 * ```
 */
export
type NotificationSentResponse_deleteNotificationStatus = INTEGER;

/**
 * @summary NotificationSentResponse_deleteNotificationStatus_ok
 * @constant
 * @type {number}
 */
export
const NotificationSentResponse_deleteNotificationStatus_ok: NotificationSentResponse_deleteNotificationStatus = 0; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary NotificationSentResponse_deleteNotificationStatus_ok
 * @constant
 * @type {number}
 */
export
const ok: NotificationSentResponse_deleteNotificationStatus = NotificationSentResponse_deleteNotificationStatus_ok; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary NotificationSentResponse_deleteNotificationStatus_nothingToDelete
 * @constant
 * @type {number}
 */
export
const NotificationSentResponse_deleteNotificationStatus_nothingToDelete: NotificationSentResponse_deleteNotificationStatus = 1; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary NotificationSentResponse_deleteNotificationStatus_nothingToDelete
 * @constant
 * @type {number}
 */
export
const nothingToDelete: NotificationSentResponse_deleteNotificationStatus = NotificationSentResponse_deleteNotificationStatus_nothingToDelete; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary NotificationSentResponse_deleteNotificationStatus_undefinedError
 * @constant
 * @type {number}
 */
export
const NotificationSentResponse_deleteNotificationStatus_undefinedError: NotificationSentResponse_deleteNotificationStatus = 127; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary NotificationSentResponse_deleteNotificationStatus_undefinedError
 * @constant
 * @type {number}
 */
export
const undefinedError: NotificationSentResponse_deleteNotificationStatus = NotificationSentResponse_deleteNotificationStatus_undefinedError; /* SHORT_NAMED_INTEGER_VALUE */
export const _decode_NotificationSentResponse_deleteNotificationStatus = $._decodeInteger;
export const _encode_NotificationSentResponse_deleteNotificationStatus = $._encodeInteger;


/* eslint-enable */
