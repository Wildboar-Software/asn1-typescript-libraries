/* eslint-disable */
import {
    ASN1Element as _Element,
    BIT_STRING
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary NotificationEvent
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * NotificationEvent  ::=  BIT STRING {
 *     notificationInstall(0),
 *     notificationEnable(1),
 *     notificationDisable(2),
 *     notificationDelete(3)
 * }
 * ```
 */
export
type NotificationEvent = BIT_STRING;

/**
 * @summary NotificationEvent_notificationInstall
 * @constant
 */
export
const NotificationEvent_notificationInstall: number = 0; /* LONG_NAMED_BIT */

/**
 * @summary notificationInstall
 * @constant
 */
export
const notificationInstall: number = NotificationEvent_notificationInstall; /* SHORT_NAMED_BIT */

/**
 * @summary NotificationEvent_notificationEnable
 * @constant
 */
export
const NotificationEvent_notificationEnable: number = 1; /* LONG_NAMED_BIT */

/**
 * @summary notificationEnable
 * @constant
 */
export
const notificationEnable: number = NotificationEvent_notificationEnable; /* SHORT_NAMED_BIT */

/**
 * @summary NotificationEvent_notificationDisable
 * @constant
 */
export
const NotificationEvent_notificationDisable: number = 2; /* LONG_NAMED_BIT */

/**
 * @summary notificationDisable
 * @constant
 */
export
const notificationDisable: number = NotificationEvent_notificationDisable; /* SHORT_NAMED_BIT */

/**
 * @summary NotificationEvent_notificationDelete
 * @constant
 */
export
const NotificationEvent_notificationDelete: number = 3; /* LONG_NAMED_BIT */

/**
 * @summary notificationDelete
 * @constant
 */
export
const notificationDelete: number = NotificationEvent_notificationDelete; /* SHORT_NAMED_BIT */
export const _decode_NotificationEvent = $._decodeBitString;
export const _encode_NotificationEvent = $._encodeBitString;


/* eslint-enable */
