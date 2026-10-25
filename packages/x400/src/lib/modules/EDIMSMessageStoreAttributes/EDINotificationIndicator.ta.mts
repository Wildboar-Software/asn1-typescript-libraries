/* eslint-disable */
import {
    type ASN1Element as _Element,
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
 * The EDI Notification Indicator attribute contains information about whether any EDI
 * Notifications have been sent by the MS in response to an EDIM, and if so which type of
 * EDI Notifications were sent. The MS creates this attribute for each new EDIM and
 * maintains the attribute values, depending on the auto-actions performed. See ITU-T X.435
 * (1999), §18.8.2.
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
export const EDINotificationIndicator_no_notification_sent =
    EDINotificationIndicator.no_notification_sent; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary no_notification_sent
 * @constant
 * @type {number}
 */
export const no_notification_sent =
    EDINotificationIndicator.no_notification_sent; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary EDINotificationIndicator_pn_sent
 * @constant
 * @type {number}
 */
export const EDINotificationIndicator_pn_sent =
    EDINotificationIndicator.pn_sent; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary pn_sent
 * @constant
 * @type {number}
 */
export const pn_sent =
    EDINotificationIndicator.pn_sent; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary EDINotificationIndicator_nn_sent
 * @constant
 * @type {number}
 */
export const EDINotificationIndicator_nn_sent =
    EDINotificationIndicator.nn_sent; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary nn_sent
 * @constant
 * @type {number}
 */
export const nn_sent =
    EDINotificationIndicator.nn_sent; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary EDINotificationIndicator_fn_sent
 * @constant
 * @type {number}
 */
export const EDINotificationIndicator_fn_sent =
    EDINotificationIndicator.fn_sent; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary fn_sent
 * @constant
 * @type {number}
 */
export const fn_sent =
    EDINotificationIndicator.fn_sent; /* SHORT_NAMED_ENUMERATED_VALUE */


export function _decode_EDINotificationIndicator(el: _Element): EDINotificationIndicator {
    const enumerated = $._decodeEnumerated(el);
    switch (enumerated) {
        case EDINotificationIndicator.no_notification_sent: return EDINotificationIndicator.no_notification_sent;
        case EDINotificationIndicator.pn_sent: return EDINotificationIndicator.pn_sent;
        case EDINotificationIndicator.nn_sent: return EDINotificationIndicator.nn_sent;
        case EDINotificationIndicator.fn_sent: return EDINotificationIndicator.fn_sent;
        default:
            throw new _ConstructionError(
                'Invalid ENUMERATED value ' + enumerated + ' for EDINotificationIndicator.',
                el,
            );
    }
}


export const _encode_EDINotificationIndicator: $.ASN1Encoder<EDINotificationIndicator> = $._encodeEnumerated as $.ASN1Encoder<EDINotificationIndicator>;


/* eslint-enable */
