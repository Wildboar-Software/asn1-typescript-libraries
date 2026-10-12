/* eslint-disable */
import {
    ENUMERATED
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



export
enum _enum_for_Messaging_Notification_Event {
    sms = 1,
    sms_deposit = 2,
    sms_slamdown = 3,
    sms_pin_reminder = 4,
    email = 5,
    fax_to_email = 6,
    mms = 7,
    generic = 8,
}

/**
 * @summary Messaging_Notification_Event
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * Messaging-Notification-Event  ::=  ENUMERATED
 * {
 *     sms(1),
 *     sms-deposit(2),
 *     sms-slamdown(3),
 *     sms-pin-reminder(4),
 *     email(5),
 *     fax-to-email(6),
 *     ...,
 *     mms(7),
 *     generic(8)
 * }
 * ```
 * 
 * @enum {number}
 */
export
type Messaging_Notification_Event = _enum_for_Messaging_Notification_Event | ENUMERATED;

/**
 * @summary Messaging_Notification_Event_sms
 * @constant
 * @type {number}
 */
export
const Messaging_Notification_Event_sms: Messaging_Notification_Event = 1; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary sms
 * @constant
 * @type {number}
 */
export
const sms: Messaging_Notification_Event = Messaging_Notification_Event_sms; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary Messaging_Notification_Event_sms_deposit
 * @constant
 * @type {number}
 */
export
const Messaging_Notification_Event_sms_deposit: Messaging_Notification_Event = 2; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary sms_deposit
 * @constant
 * @type {number}
 */
export
const sms_deposit: Messaging_Notification_Event = Messaging_Notification_Event_sms_deposit; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary Messaging_Notification_Event_sms_slamdown
 * @constant
 * @type {number}
 */
export
const Messaging_Notification_Event_sms_slamdown: Messaging_Notification_Event = 3; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary sms_slamdown
 * @constant
 * @type {number}
 */
export
const sms_slamdown: Messaging_Notification_Event = Messaging_Notification_Event_sms_slamdown; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary Messaging_Notification_Event_sms_pin_reminder
 * @constant
 * @type {number}
 */
export
const Messaging_Notification_Event_sms_pin_reminder: Messaging_Notification_Event = 4; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary sms_pin_reminder
 * @constant
 * @type {number}
 */
export
const sms_pin_reminder: Messaging_Notification_Event = Messaging_Notification_Event_sms_pin_reminder; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary Messaging_Notification_Event_email
 * @constant
 * @type {number}
 */
export
const Messaging_Notification_Event_email: Messaging_Notification_Event = 5; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary email
 * @constant
 * @type {number}
 */
export
const email: Messaging_Notification_Event = Messaging_Notification_Event_email; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary Messaging_Notification_Event_fax_to_email
 * @constant
 * @type {number}
 */
export
const Messaging_Notification_Event_fax_to_email: Messaging_Notification_Event = 6; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary fax_to_email
 * @constant
 * @type {number}
 */
export
const fax_to_email: Messaging_Notification_Event = Messaging_Notification_Event_fax_to_email; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary Messaging_Notification_Event_mms
 * @constant
 * @type {number}
 */
export
const Messaging_Notification_Event_mms: Messaging_Notification_Event = 7; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary mms
 * @constant
 * @type {number}
 */
export
const mms: Messaging_Notification_Event = Messaging_Notification_Event_mms; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary Messaging_Notification_Event_generic
 * @constant
 * @type {number}
 */
export
const Messaging_Notification_Event_generic: Messaging_Notification_Event = 8; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary generic
 * @constant
 * @type {number}
 */
export
const generic: Messaging_Notification_Event = Messaging_Notification_Event_generic; /* SHORT_NAMED_ENUMERATED_VALUE */
export const _decode_Messaging_Notification_Event: $.ASN1Decoder<Messaging_Notification_Event> = $._decodeEnumerated;
export const _encode_Messaging_Notification_Event: $.ASN1Encoder<Messaging_Notification_Event> = $._encodeEnumerated;


/* eslint-enable */
