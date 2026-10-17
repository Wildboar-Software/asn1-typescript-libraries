/* eslint-disable */
import {
    ENUMERATED
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @description
 *
 * Why a unified-messaging notification was sent. Only `voice-to-text` is listed
 * in table 5 as requiring captured content; the notification events of clause
 * 8.4 are a separate enumeration.
 *
 * ETSI TS 102 232-2 V3.16.1 (2023-03), clauses 8.1 and 8.7.
 * https://www.etsi.org/deliver/etsi_ts/102200_102299/10223202/03.16.01_60/ts_10223202v031601p.pdf
 */
export
enum _enum_for_Messaging_Property_Notification_Type {
    /**
     * Notify because a user connected to a box and did not leave a message
     * after the beep.
     *
     * ETSI TS 102 232-2 V3.16.1 (2023-03), clause 8.7.
     */
    empty_call = 1,
    /**
     * Notify because a user called another user who did not answer.
     *
     * ETSI TS 102 232-2 V3.16.1 (2023-03), clause 8.7.
     */
    lost_call = 2,
    /**
     * Send an email notification when the user's box receives a message.
     *
     * ETSI TS 102 232-2 V3.16.1 (2023-03), clause 8.7.
     */
    message_to_email = 3,
    /**
     * A read report, requested by the originating party.
     *
     * ETSI TS 102 232-2 V3.16.1 (2023-03), clause 8.7.
     */
    read_report = 4,
    /**
     * A delivery report, requested by the originating party.
     *
     * ETSI TS 102 232-2 V3.16.1 (2023-03), clause 8.7.
     */
    delivery_report = 5,
    /**
     * Tell the messaging system that it may send a delivery report to the
     * originating party.
     *
     * ETSI TS 102 232-2 V3.16.1 (2023-03), clause 8.7.
     */
    allow_delivery_report = 6,
    /**
     * Tell the messaging system that it may not send a delivery report to the
     * originating party.
     *
     * ETSI TS 102 232-2 V3.16.1 (2023-03), clause 8.7.
     */
    deny_delivery_report = 7,
    /**
     * Tell a user that a message is waiting to be collected.
     *
     * ETSI TS 102 232-2 V3.16.1 (2023-03), clause 8.7.
     */
    message_wait_indication = 8,
    /**
     * An audio message deposited in the user's box was converted to text and
     * sent to a user. Table 5 requires captured content for this property.
     *
     * ETSI TS 102 232-2 V3.16.1 (2023-03), clauses 8.1 and 8.7.
     */
    voice_to_text = 9,
    /**
     * Tell a user that a new message was deposited in their box.
     *
     * ETSI TS 102 232-2 V3.16.1 (2023-03), clause 8.7.
     */
    new_message_sms = 10,
    /**
     * Cause a missed call from the messaging system to appear in the user's
     * call history, showing that a message was deposited.
     *
     * ETSI TS 102 232-2 V3.16.1 (2023-03), clause 8.7.
     */
    new_message_outcall = 11,
    /**
     * Remind a user that new messages are in the box and have not been listened
     * to.
     *
     * ETSI TS 102 232-2 V3.16.1 (2023-03), clause 8.7.
     */
    new_message_reminder = 12,
}

/**
 * @summary Messaging_Property_Notification_Type
 * @description
 *
 * Why a unified-messaging notification was sent. Only `voice-to-text` is listed
 * in table 5 as requiring captured content; the notification events of clause
 * 8.4 are a separate enumeration.
 *
 * ETSI TS 102 232-2 V3.16.1 (2023-03), clauses 8.1 and 8.7.
 * https://www.etsi.org/deliver/etsi_ts/102200_102299/10223202/03.16.01_60/ts_10223202v031601p.pdf
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * Messaging-Property-Notification-Type  ::=  ENUMERATED
 * {
 *     empty-call(1),
 *     lost-call(2),
 *     ...,
 *     message-to-email(3),
 *     read-report(4),
 *     delivery-report(5),
 *     allow-delivery-report(6),
 *     deny-delivery-report(7),
 *     message-wait-indication(8),
 *     voice-to-text(9),
 *     new-message-sms(10),
 *     new-message-outcall(11),
 *     new-message-reminder(12)
 * }
 * ```
 * 
 * @enum {number}
 */
export
type Messaging_Property_Notification_Type = _enum_for_Messaging_Property_Notification_Type | ENUMERATED;

/**
 * @summary Messaging_Property_Notification_Type_empty_call
 * @description
 *
 * Notify because a user connected to a box and did not leave a message after
 * the beep.
 *
 * ETSI TS 102 232-2 V3.16.1 (2023-03), clause 8.7.
 *
 * @constant
 * @type {number}
 */
export
const Messaging_Property_Notification_Type_empty_call: Messaging_Property_Notification_Type = 1; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary empty_call
 * @description
 *
 * Notify because a user connected to a box and did not leave a message after
 * the beep.
 *
 * ETSI TS 102 232-2 V3.16.1 (2023-03), clause 8.7.
 *
 * @constant
 * @type {number}
 */
export
const empty_call: Messaging_Property_Notification_Type = Messaging_Property_Notification_Type_empty_call; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary Messaging_Property_Notification_Type_lost_call
 * @description
 *
 * Notify because a user called another user who did not answer.
 *
 * ETSI TS 102 232-2 V3.16.1 (2023-03), clause 8.7.
 *
 * @constant
 * @type {number}
 */
export
const Messaging_Property_Notification_Type_lost_call: Messaging_Property_Notification_Type = 2; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary lost_call
 * @description
 *
 * Notify because a user called another user who did not answer.
 *
 * ETSI TS 102 232-2 V3.16.1 (2023-03), clause 8.7.
 *
 * @constant
 * @type {number}
 */
export
const lost_call: Messaging_Property_Notification_Type = Messaging_Property_Notification_Type_lost_call; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary Messaging_Property_Notification_Type_message_to_email
 * @description
 *
 * Send an email notification when the user's box receives a message.
 *
 * ETSI TS 102 232-2 V3.16.1 (2023-03), clause 8.7.
 *
 * @constant
 * @type {number}
 */
export
const Messaging_Property_Notification_Type_message_to_email: Messaging_Property_Notification_Type = 3; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary message_to_email
 * @description
 *
 * Send an email notification when the user's box receives a message.
 *
 * ETSI TS 102 232-2 V3.16.1 (2023-03), clause 8.7.
 *
 * @constant
 * @type {number}
 */
export
const message_to_email: Messaging_Property_Notification_Type = Messaging_Property_Notification_Type_message_to_email; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary Messaging_Property_Notification_Type_read_report
 * @description
 *
 * A read report, requested by the originating party.
 *
 * ETSI TS 102 232-2 V3.16.1 (2023-03), clause 8.7.
 *
 * @constant
 * @type {number}
 */
export
const Messaging_Property_Notification_Type_read_report: Messaging_Property_Notification_Type = 4; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary read_report
 * @description
 *
 * A read report, requested by the originating party.
 *
 * ETSI TS 102 232-2 V3.16.1 (2023-03), clause 8.7.
 *
 * @constant
 * @type {number}
 */
export
const read_report: Messaging_Property_Notification_Type = Messaging_Property_Notification_Type_read_report; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary Messaging_Property_Notification_Type_delivery_report
 * @description
 *
 * A delivery report, requested by the originating party.
 *
 * ETSI TS 102 232-2 V3.16.1 (2023-03), clause 8.7.
 *
 * @constant
 * @type {number}
 */
export
const Messaging_Property_Notification_Type_delivery_report: Messaging_Property_Notification_Type = 5; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary delivery_report
 * @description
 *
 * A delivery report, requested by the originating party.
 *
 * ETSI TS 102 232-2 V3.16.1 (2023-03), clause 8.7.
 *
 * @constant
 * @type {number}
 */
export
const delivery_report: Messaging_Property_Notification_Type = Messaging_Property_Notification_Type_delivery_report; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary Messaging_Property_Notification_Type_allow_delivery_report
 * @description
 *
 * Tell the messaging system that it may send a delivery report to the
 * originating party.
 *
 * ETSI TS 102 232-2 V3.16.1 (2023-03), clause 8.7.
 *
 * @constant
 * @type {number}
 */
export
const Messaging_Property_Notification_Type_allow_delivery_report: Messaging_Property_Notification_Type = 6; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary allow_delivery_report
 * @description
 *
 * Tell the messaging system that it may send a delivery report to the
 * originating party.
 *
 * ETSI TS 102 232-2 V3.16.1 (2023-03), clause 8.7.
 *
 * @constant
 * @type {number}
 */
export
const allow_delivery_report: Messaging_Property_Notification_Type = Messaging_Property_Notification_Type_allow_delivery_report; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary Messaging_Property_Notification_Type_deny_delivery_report
 * @description
 *
 * Tell the messaging system that it may not send a delivery report to the
 * originating party.
 *
 * ETSI TS 102 232-2 V3.16.1 (2023-03), clause 8.7.
 *
 * @constant
 * @type {number}
 */
export
const Messaging_Property_Notification_Type_deny_delivery_report: Messaging_Property_Notification_Type = 7; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary deny_delivery_report
 * @description
 *
 * Tell the messaging system that it may not send a delivery report to the
 * originating party.
 *
 * ETSI TS 102 232-2 V3.16.1 (2023-03), clause 8.7.
 *
 * @constant
 * @type {number}
 */
export
const deny_delivery_report: Messaging_Property_Notification_Type = Messaging_Property_Notification_Type_deny_delivery_report; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary Messaging_Property_Notification_Type_message_wait_indication
 * @description
 *
 * Tell a user that a message is waiting to be collected.
 *
 * ETSI TS 102 232-2 V3.16.1 (2023-03), clause 8.7.
 *
 * @constant
 * @type {number}
 */
export
const Messaging_Property_Notification_Type_message_wait_indication: Messaging_Property_Notification_Type = 8; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary message_wait_indication
 * @description
 *
 * Tell a user that a message is waiting to be collected.
 *
 * ETSI TS 102 232-2 V3.16.1 (2023-03), clause 8.7.
 *
 * @constant
 * @type {number}
 */
export
const message_wait_indication: Messaging_Property_Notification_Type = Messaging_Property_Notification_Type_message_wait_indication; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary Messaging_Property_Notification_Type_voice_to_text
 * @description
 *
 * An audio message deposited in the user's box was converted to text and sent
 * to a user. Table 5 requires captured content for this property.
 *
 * ETSI TS 102 232-2 V3.16.1 (2023-03), clauses 8.1 and 8.7.
 *
 * @constant
 * @type {number}
 */
export
const Messaging_Property_Notification_Type_voice_to_text: Messaging_Property_Notification_Type = 9; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary voice_to_text
 * @description
 *
 * An audio message deposited in the user's box was converted to text and sent
 * to a user. Table 5 requires captured content for this property.
 *
 * ETSI TS 102 232-2 V3.16.1 (2023-03), clauses 8.1 and 8.7.
 *
 * @constant
 * @type {number}
 */
export
const voice_to_text: Messaging_Property_Notification_Type = Messaging_Property_Notification_Type_voice_to_text; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary Messaging_Property_Notification_Type_new_message_sms
 * @description
 *
 * Tell a user that a new message was deposited in their box.
 *
 * ETSI TS 102 232-2 V3.16.1 (2023-03), clause 8.7.
 *
 * @constant
 * @type {number}
 */
export
const Messaging_Property_Notification_Type_new_message_sms: Messaging_Property_Notification_Type = 10; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary new_message_sms
 * @description
 *
 * Tell a user that a new message was deposited in their box.
 *
 * ETSI TS 102 232-2 V3.16.1 (2023-03), clause 8.7.
 *
 * @constant
 * @type {number}
 */
export
const new_message_sms: Messaging_Property_Notification_Type = Messaging_Property_Notification_Type_new_message_sms; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary Messaging_Property_Notification_Type_new_message_outcall
 * @description
 *
 * Cause a missed call from the messaging system to appear in the user's call
 * history, showing that a message was deposited.
 *
 * ETSI TS 102 232-2 V3.16.1 (2023-03), clause 8.7.
 *
 * @constant
 * @type {number}
 */
export
const Messaging_Property_Notification_Type_new_message_outcall: Messaging_Property_Notification_Type = 11; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary new_message_outcall
 * @description
 *
 * Cause a missed call from the messaging system to appear in the user's call
 * history, showing that a message was deposited.
 *
 * ETSI TS 102 232-2 V3.16.1 (2023-03), clause 8.7.
 *
 * @constant
 * @type {number}
 */
export
const new_message_outcall: Messaging_Property_Notification_Type = Messaging_Property_Notification_Type_new_message_outcall; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary Messaging_Property_Notification_Type_new_message_reminder
 * @description
 *
 * Remind a user that new messages are in the box and have not been listened to.
 *
 * ETSI TS 102 232-2 V3.16.1 (2023-03), clause 8.7.
 *
 * @constant
 * @type {number}
 */
export
const Messaging_Property_Notification_Type_new_message_reminder: Messaging_Property_Notification_Type = 12; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary new_message_reminder
 * @description
 *
 * Remind a user that new messages are in the box and have not been listened to.
 *
 * ETSI TS 102 232-2 V3.16.1 (2023-03), clause 8.7.
 *
 * @constant
 * @type {number}
 */
export
const new_message_reminder: Messaging_Property_Notification_Type = Messaging_Property_Notification_Type_new_message_reminder; /* SHORT_NAMED_ENUMERATED_VALUE */
export const _decode_Messaging_Property_Notification_Type: $.ASN1Decoder<Messaging_Property_Notification_Type> = $._decodeEnumerated;
export const _encode_Messaging_Property_Notification_Type: $.ASN1Encoder<Messaging_Property_Notification_Type> = $._encodeEnumerated;


/* eslint-enable */
