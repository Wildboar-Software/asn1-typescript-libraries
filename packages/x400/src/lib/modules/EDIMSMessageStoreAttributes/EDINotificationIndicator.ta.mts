/* eslint-disable */
import {
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    ASN1Construction as _Construction,
    ASN1UniversalType as _UniversalType,
    ObjectIdentifier as _OID,
    External as _External,
    EmbeddedPDV as _PDV,
    ASN1ConstructionError as _ConstructionError,
} from '@wildboar/asn1';
import * as $ from '@wildboar/asn1/functional';

/**
 * @summary EDINotificationIndicator
 * @description
 *
 * `EDINotificationIndicator`. The EDI Notification Indicator attribute contains
 * information about whether any EDI Notifications have been sent by the MS in response
 * to an EDIM, and if so which type of EDI Notifications were sent. The MS creates this
 * attribute for each new EDIM and maintains the attribute values, depending on the
 * auto-actions performed. See ITU-T X.435 (1999), §18.8.2. ENUMERATED value `0` is a
 * named variant, not a sentinel for 'absent' or 'unspecified'.
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * EDINotificationIndicator  ::=  ENUMERATED {
 *   no-notification-sent(0), pn-sent(1), nn-sent(2), fn-sent(3)}
 * ```
 *
 * @enum {number}
 */
export enum _enum_for_EDINotificationIndicator {
    no_notification_sent = 0,
    pn_sent = 1,
    nn_sent = 2,
    fn_sent = 3,
}

/**
 * @summary EDINotificationIndicator
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * EDINotificationIndicator  ::=  ENUMERATED {
 *   no-notification-sent(0), pn-sent(1), nn-sent(2), fn-sent(3)}
 * ```
 *
 * @enum {number}
 */
export type EDINotificationIndicator = _enum_for_EDINotificationIndicator;

/**
 * @summary EDINotificationIndicator
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * EDINotificationIndicator  ::=  ENUMERATED {
 *   no-notification-sent(0), pn-sent(1), nn-sent(2), fn-sent(3)}
 * ```
 *
 * @enum {number}
 */
export const EDINotificationIndicator = _enum_for_EDINotificationIndicator;

/**
 * @summary EDINotificationIndicator_no_notification_sent
 * @constant
 * @type {number}
 */
export const EDINotificationIndicator_no_notification_sent: EDINotificationIndicator =
    EDINotificationIndicator.no_notification_sent; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary no_notification_sent
 * @constant
 * @type {number}
 */
export const no_notification_sent: EDINotificationIndicator =
    EDINotificationIndicator.no_notification_sent; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary EDINotificationIndicator_pn_sent
 * @constant
 * @type {number}
 */
export const EDINotificationIndicator_pn_sent: EDINotificationIndicator =
    EDINotificationIndicator.pn_sent; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary pn_sent
 * @constant
 * @type {number}
 */
export const pn_sent: EDINotificationIndicator =
    EDINotificationIndicator.pn_sent; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary EDINotificationIndicator_nn_sent
 * @constant
 * @type {number}
 */
export const EDINotificationIndicator_nn_sent: EDINotificationIndicator =
    EDINotificationIndicator.nn_sent; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary nn_sent
 * @constant
 * @type {number}
 */
export const nn_sent: EDINotificationIndicator =
    EDINotificationIndicator.nn_sent; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary EDINotificationIndicator_fn_sent
 * @constant
 * @type {number}
 */
export const EDINotificationIndicator_fn_sent: EDINotificationIndicator =
    EDINotificationIndicator.fn_sent; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary fn_sent
 * @constant
 * @type {number}
 */
export const fn_sent: EDINotificationIndicator =
    EDINotificationIndicator.fn_sent; /* SHORT_NAMED_ENUMERATED_VALUE */


export const _decode_EDINotificationIndicator = $._decodeEnumerated;


export const _encode_EDINotificationIndicator = $._encodeEnumerated;


/* eslint-enable */
