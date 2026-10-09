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
 * Which profile-management operations produce a notification. The same bit may
 * appear in several `NotificationConfigurationInformation` entries, which means
 * several recipient addresses for one event. In `NotificationMetadata` exactly
 * one bit is set. SGP.22 v3.1 §5.5.3 names bits 1-3 `notificationLocalEnable`,
 * `notificationLocalDisable`, and `notificationLocalDelete`, and adds RPM bits
 * that this module does not declare.
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
 * @description
 * 
 * Notify when the Profile has been installed. SGP.22 v3.1 §5.5.3.
 * 
 * @constant
 */
export
const NotificationEvent_notificationInstall: number = 0; /* LONG_NAMED_BIT */

/**
 * @summary notificationInstall
 * @description
 * 
 * Notify when the Profile has been installed. SGP.22 v3.1 §5.5.3.
 * 
 * @constant
 */
export
const notificationInstall: number = NotificationEvent_notificationInstall; /* SHORT_NAMED_BIT */

/**
 * @summary NotificationEvent_notificationEnable
 * @description
 * 
 * Notify when the Profile is enabled locally. v3.1 names this bit
 * `notificationLocalEnable`. SGP.22 v3.1 §5.5.3.
 * 
 * @constant
 */
export
const NotificationEvent_notificationEnable: number = 1; /* LONG_NAMED_BIT */

/**
 * @summary notificationEnable
 * @description
 * 
 * Notify when the Profile is enabled locally. v3.1 names this bit
 * `notificationLocalEnable`. SGP.22 v3.1 §5.5.3.
 * 
 * @constant
 */
export
const notificationEnable: number = NotificationEvent_notificationEnable; /* SHORT_NAMED_BIT */

/**
 * @summary NotificationEvent_notificationDisable
 * @description
 * 
 * Notify when the Profile is disabled locally. v3.1 names this bit
 * `notificationLocalDisable`. SGP.22 v3.1 §5.5.3.
 * 
 * @constant
 */
export
const NotificationEvent_notificationDisable: number = 2; /* LONG_NAMED_BIT */

/**
 * @summary notificationDisable
 * @description
 * 
 * Notify when the Profile is disabled locally. v3.1 names this bit
 * `notificationLocalDisable`. SGP.22 v3.1 §5.5.3.
 * 
 * @constant
 */
export
const notificationDisable: number = NotificationEvent_notificationDisable; /* SHORT_NAMED_BIT */

/**
 * @summary NotificationEvent_notificationDelete
 * @description
 * 
 * Notify when the Profile is deleted locally. v3.1 names this bit
 * `notificationLocalDelete`. SGP.22 v3.1 §5.5.3.
 * 
 * @constant
 */
export
const NotificationEvent_notificationDelete: number = 3; /* LONG_NAMED_BIT */

/**
 * @summary notificationDelete
 * @description
 * 
 * Notify when the Profile is deleted locally. v3.1 names this bit
 * `notificationLocalDelete`. SGP.22 v3.1 §5.5.3.
 * 
 * @constant
 */
export
const notificationDelete: number = NotificationEvent_notificationDelete; /* SHORT_NAMED_BIT */
export const _decode_NotificationEvent = $._decodeBitString;
export const _encode_NotificationEvent = $._encodeBitString;


/* eslint-enable */
