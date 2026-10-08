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
 * ListNotificationResponse-listNotificationsResultError ::= INTEGER {
 *     undefinedError(127)
 * }
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
export const _decode_ListNotificationResponse_listNotificationsResultError = $._decodeInteger;
export const _encode_ListNotificationResponse_listNotificationsResultError = $._encodeInteger;


/* eslint-enable */
