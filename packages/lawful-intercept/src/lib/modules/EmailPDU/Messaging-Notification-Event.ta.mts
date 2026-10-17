/* eslint-disable */
import {
    ENUMERATED
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @description
 *
 * A notification the unified-messaging system sent to the target.
 *
 * Every named value is in table 5 and shall trigger captured content. One UM
 * event can cause more than one notification, for example SMS and email
 * together.
 *
 * ETSI TS 102 232-2 V3.16.1 (2023-03), clauses 8.1 and 8.4.
 * https://www.etsi.org/deliver/etsi_ts/102200_102299/10223202/03.16.01_60/ts_10223202v031601p.pdf
 */
export
enum _enum_for_Messaging_Notification_Event {
    /**
     * An SMS was sent to the target. Content is `text/plain`, with an optional
     * character encoding. Table 5 requires captured-content delivery for this
     * event.
     *
     * ETSI TS 102 232-2 V3.16.1 (2023-03), clauses 8.1 and 8.4.
     */
    sms = 1,
    /**
     * The target is notified that a new message is available in the box. Table
     * 5 requires captured-content delivery for this event.
     *
     * ETSI TS 102 232-2 V3.16.1 (2023-03), clauses 8.1 and 8.4.
     */
    sms_deposit = 2,
    /**
     * The target is notified that a user disconnected before delivering a
     * message, for example during the voicemail greeting, before the beep.
     * Table 5 requires captured-content delivery for this event.
     *
     * ETSI TS 102 232-2 V3.16.1 (2023-03), clauses 8.1 and 8.4.
     */
    sms_slamdown = 3,
    /**
     * A reminder containing the PIN of the message box was sent to the target.
     * Table 5 requires captured-content delivery for this event.
     *
     * ETSI TS 102 232-2 V3.16.1 (2023-03), clauses 8.1 and 8.4.
     */
    sms_pin_reminder = 4,
    /**
     * An email was sent to the target. Table 5 requires captured-content
     * delivery for this event.
     *
     * ETSI TS 102 232-2 V3.16.1 (2023-03), clauses 8.1 and 8.4.
     */
    email = 5,
    /**
     * The UM system received a fax and forwarded it to the target as email.
     * Table 5 requires captured-content delivery for this event.
     *
     * ETSI TS 102 232-2 V3.16.1 (2023-03), clauses 8.1 and 8.4.
     */
    fax_to_email = 6,
    /**
     * An MMS was sent to the target. Table 5 requires captured-content delivery
     * for this event.
     *
     * ETSI TS 102 232-2 V3.16.1 (2023-03), clauses 8.1 and 8.4.
     */
    mms = 7,
    /**
     * A notification was sent to the target, of a kind not given its own value.
     * Table 5 requires captured-content delivery for this event.
     *
     * ETSI TS 102 232-2 V3.16.1 (2023-03), clauses 8.1 and 8.4.
     */
    generic = 8,
}

/**
 * @summary Messaging_Notification_Event
 * @description
 *
 * A notification the unified-messaging system sent to the target.
 *
 * Every named value is in table 5 and shall trigger captured content. One UM
 * event can cause more than one notification, for example SMS and email
 * together.
 *
 * ETSI TS 102 232-2 V3.16.1 (2023-03), clauses 8.1 and 8.4.
 * https://www.etsi.org/deliver/etsi_ts/102200_102299/10223202/03.16.01_60/ts_10223202v031601p.pdf
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
 * @description
 *
 * An SMS was sent to the target. Content is `text/plain`, with an optional
 * character encoding. Table 5 requires captured-content delivery for this
 * event.
 *
 * ETSI TS 102 232-2 V3.16.1 (2023-03), clauses 8.1 and 8.4.
 *
 * @constant
 * @type {number}
 */
export
const Messaging_Notification_Event_sms: Messaging_Notification_Event = 1; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary sms
 * @description
 *
 * An SMS was sent to the target. Content is `text/plain`, with an optional
 * character encoding. Table 5 requires captured-content delivery for this
 * event.
 *
 * ETSI TS 102 232-2 V3.16.1 (2023-03), clauses 8.1 and 8.4.
 *
 * @constant
 * @type {number}
 */
export
const sms: Messaging_Notification_Event = Messaging_Notification_Event_sms; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary Messaging_Notification_Event_sms_deposit
 * @description
 *
 * The target is notified that a new message is available in the box. Table 5
 * requires captured-content delivery for this event.
 *
 * ETSI TS 102 232-2 V3.16.1 (2023-03), clauses 8.1 and 8.4.
 *
 * @constant
 * @type {number}
 */
export
const Messaging_Notification_Event_sms_deposit: Messaging_Notification_Event = 2; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary sms_deposit
 * @description
 *
 * The target is notified that a new message is available in the box. Table 5
 * requires captured-content delivery for this event.
 *
 * ETSI TS 102 232-2 V3.16.1 (2023-03), clauses 8.1 and 8.4.
 *
 * @constant
 * @type {number}
 */
export
const sms_deposit: Messaging_Notification_Event = Messaging_Notification_Event_sms_deposit; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary Messaging_Notification_Event_sms_slamdown
 * @description
 *
 * The target is notified that a user disconnected before delivering a message,
 * for example during the voicemail greeting, before the beep. Table 5 requires
 * captured-content delivery for this event.
 *
 * ETSI TS 102 232-2 V3.16.1 (2023-03), clauses 8.1 and 8.4.
 *
 * @constant
 * @type {number}
 */
export
const Messaging_Notification_Event_sms_slamdown: Messaging_Notification_Event = 3; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary sms_slamdown
 * @description
 *
 * The target is notified that a user disconnected before delivering a message,
 * for example during the voicemail greeting, before the beep. Table 5 requires
 * captured-content delivery for this event.
 *
 * ETSI TS 102 232-2 V3.16.1 (2023-03), clauses 8.1 and 8.4.
 *
 * @constant
 * @type {number}
 */
export
const sms_slamdown: Messaging_Notification_Event = Messaging_Notification_Event_sms_slamdown; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary Messaging_Notification_Event_sms_pin_reminder
 * @description
 *
 * A reminder containing the PIN of the message box was sent to the target.
 * Table 5 requires captured-content delivery for this event.
 *
 * ETSI TS 102 232-2 V3.16.1 (2023-03), clauses 8.1 and 8.4.
 *
 * @constant
 * @type {number}
 */
export
const Messaging_Notification_Event_sms_pin_reminder: Messaging_Notification_Event = 4; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary sms_pin_reminder
 * @description
 *
 * A reminder containing the PIN of the message box was sent to the target.
 * Table 5 requires captured-content delivery for this event.
 *
 * ETSI TS 102 232-2 V3.16.1 (2023-03), clauses 8.1 and 8.4.
 *
 * @constant
 * @type {number}
 */
export
const sms_pin_reminder: Messaging_Notification_Event = Messaging_Notification_Event_sms_pin_reminder; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary Messaging_Notification_Event_email
 * @description
 *
 * An email was sent to the target. Table 5 requires captured-content delivery
 * for this event.
 *
 * ETSI TS 102 232-2 V3.16.1 (2023-03), clauses 8.1 and 8.4.
 *
 * @constant
 * @type {number}
 */
export
const Messaging_Notification_Event_email: Messaging_Notification_Event = 5; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary email
 * @description
 *
 * An email was sent to the target. Table 5 requires captured-content delivery
 * for this event.
 *
 * ETSI TS 102 232-2 V3.16.1 (2023-03), clauses 8.1 and 8.4.
 *
 * @constant
 * @type {number}
 */
export
const email: Messaging_Notification_Event = Messaging_Notification_Event_email; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary Messaging_Notification_Event_fax_to_email
 * @description
 *
 * The UM system received a fax and forwarded it to the target as email. Table 5
 * requires captured-content delivery for this event.
 *
 * ETSI TS 102 232-2 V3.16.1 (2023-03), clauses 8.1 and 8.4.
 *
 * @constant
 * @type {number}
 */
export
const Messaging_Notification_Event_fax_to_email: Messaging_Notification_Event = 6; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary fax_to_email
 * @description
 *
 * The UM system received a fax and forwarded it to the target as email. Table 5
 * requires captured-content delivery for this event.
 *
 * ETSI TS 102 232-2 V3.16.1 (2023-03), clauses 8.1 and 8.4.
 *
 * @constant
 * @type {number}
 */
export
const fax_to_email: Messaging_Notification_Event = Messaging_Notification_Event_fax_to_email; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary Messaging_Notification_Event_mms
 * @description
 *
 * An MMS was sent to the target. Table 5 requires captured-content delivery for
 * this event.
 *
 * ETSI TS 102 232-2 V3.16.1 (2023-03), clauses 8.1 and 8.4.
 *
 * @constant
 * @type {number}
 */
export
const Messaging_Notification_Event_mms: Messaging_Notification_Event = 7; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary mms
 * @description
 *
 * An MMS was sent to the target. Table 5 requires captured-content delivery for
 * this event.
 *
 * ETSI TS 102 232-2 V3.16.1 (2023-03), clauses 8.1 and 8.4.
 *
 * @constant
 * @type {number}
 */
export
const mms: Messaging_Notification_Event = Messaging_Notification_Event_mms; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary Messaging_Notification_Event_generic
 * @description
 *
 * A notification was sent to the target, of a kind not given its own value.
 * Table 5 requires captured-content delivery for this event.
 *
 * ETSI TS 102 232-2 V3.16.1 (2023-03), clauses 8.1 and 8.4.
 *
 * @constant
 * @type {number}
 */
export
const Messaging_Notification_Event_generic: Messaging_Notification_Event = 8; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary generic
 * @description
 *
 * A notification was sent to the target, of a kind not given its own value.
 * Table 5 requires captured-content delivery for this event.
 *
 * ETSI TS 102 232-2 V3.16.1 (2023-03), clauses 8.1 and 8.4.
 *
 * @constant
 * @type {number}
 */
export
const generic: Messaging_Notification_Event = Messaging_Notification_Event_generic; /* SHORT_NAMED_ENUMERATED_VALUE */
export const _decode_Messaging_Notification_Event: $.ASN1Decoder<Messaging_Notification_Event> = $._decodeEnumerated;
export const _encode_Messaging_Notification_Event: $.ASN1Encoder<Messaging_Notification_Event> = $._encodeEnumerated;


/* eslint-enable */
