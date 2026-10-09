/* eslint-disable */
import {
    ASN1Element as _Element,
    INTEGER
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary RetrieveNotificationsListResponse_notificationsListResultError
 * @description
 * 
 * Error alternative of ES10b.RetrieveNotificationsList. This module defines
 * `undefinedError` (127). SGP.22 v3.1 §5.7.10.
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * RetrieveNotificationsListResponse-notificationsListResultError ::= INTEGER {
 *     undefinedError(127)
 * }
 * ```
 */
export
type RetrieveNotificationsListResponse_notificationsListResultError = INTEGER;

/**
 * @summary RetrieveNotificationsListResponse_notificationsListResultError_undefinedError
 * @description
 * 
 * RetrieveNotificationsList failed. SGP.22 v3.1 §5.7.10.
 * 
 * @constant
 * @type {number}
 */
export
const RetrieveNotificationsListResponse_notificationsListResultError_undefinedError: RetrieveNotificationsListResponse_notificationsListResultError = 127; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary RetrieveNotificationsListResponse_notificationsListResultError_undefinedError
 * @description
 * 
 * RetrieveNotificationsList failed. SGP.22 v3.1 §5.7.10.
 * 
 * @constant
 * @type {number}
 */
export
const undefinedError: RetrieveNotificationsListResponse_notificationsListResultError = RetrieveNotificationsListResponse_notificationsListResultError_undefinedError; /* SHORT_NAMED_INTEGER_VALUE */
export const _decode_RetrieveNotificationsListResponse_notificationsListResultError = $._decodeInteger;
export const _encode_RetrieveNotificationsListResponse_notificationsListResultError = $._encodeInteger;


/* eslint-enable */
