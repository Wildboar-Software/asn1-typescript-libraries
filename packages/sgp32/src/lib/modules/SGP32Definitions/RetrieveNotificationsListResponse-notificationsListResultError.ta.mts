/* eslint-disable */
import {
    type ASN1Element as _Element,
    type INTEGER
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary RetrieveNotificationsListResponse_notificationsListResultError
 * @description
 * 
 * Error alternative of ES10b.RetrieveNotificationsList. The only named code is
 * undefinedError(127). SGP.32 v1.2, section 5.9.11.
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
 * SGP.32 v1.2 lists undefinedError(127) as the only code on this error and
 * does not further define when it is returned. Section 5.9.11.
 * @constant
 * @type {number}
 */
export
const RetrieveNotificationsListResponse_notificationsListResultError_undefinedError = 127 satisfies RetrieveNotificationsListResponse_notificationsListResultError; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary RetrieveNotificationsListResponse_notificationsListResultError_undefinedError
 * @description
 * SGP.32 v1.2 does not further define undefinedError(127). Section 5.9.11.
 * @constant
 * @type {number}
 */
export
const undefinedError = RetrieveNotificationsListResponse_notificationsListResultError_undefinedError satisfies RetrieveNotificationsListResponse_notificationsListResultError; /* SHORT_NAMED_INTEGER_VALUE */
export const _decode_RetrieveNotificationsListResponse_notificationsListResultError: $.ASN1Decoder<RetrieveNotificationsListResponse_notificationsListResultError> = $._decodeInteger;
export const _encode_RetrieveNotificationsListResponse_notificationsListResultError: $.ASN1Encoder<RetrieveNotificationsListResponse_notificationsListResultError> = $._encodeInteger;


/* eslint-enable */
