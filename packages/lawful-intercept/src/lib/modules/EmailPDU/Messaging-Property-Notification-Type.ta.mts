/* eslint-disable */
import {
    ASN1Element as _Element,
    ENUMERATED
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



export
enum _enum_for_Messaging_Property_Notification_Type {
    empty_call = 1,
    lost_call = 2,
    message_to_email = 3,
    read_report = 4,
    delivery_report = 5,
    allow_delivery_report = 6,
    deny_delivery_report = 7,
    message_wait_indication = 8,
    voice_to_text = 9,
    new_message_sms = 10,
    new_message_outcall = 11,
    new_message_reminder = 12,
}

/**
 * @summary Messaging_Property_Notification_Type
 * @description
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
 * @constant
 * @type {number}
 */
export
const Messaging_Property_Notification_Type_empty_call: Messaging_Property_Notification_Type = 1; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary empty_call
 * @constant
 * @type {number}
 */
export
const empty_call: Messaging_Property_Notification_Type = Messaging_Property_Notification_Type_empty_call; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary Messaging_Property_Notification_Type_lost_call
 * @constant
 * @type {number}
 */
export
const Messaging_Property_Notification_Type_lost_call: Messaging_Property_Notification_Type = 2; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary lost_call
 * @constant
 * @type {number}
 */
export
const lost_call: Messaging_Property_Notification_Type = Messaging_Property_Notification_Type_lost_call; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary Messaging_Property_Notification_Type_message_to_email
 * @constant
 * @type {number}
 */
export
const Messaging_Property_Notification_Type_message_to_email: Messaging_Property_Notification_Type = 3; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary message_to_email
 * @constant
 * @type {number}
 */
export
const message_to_email: Messaging_Property_Notification_Type = Messaging_Property_Notification_Type_message_to_email; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary Messaging_Property_Notification_Type_read_report
 * @constant
 * @type {number}
 */
export
const Messaging_Property_Notification_Type_read_report: Messaging_Property_Notification_Type = 4; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary read_report
 * @constant
 * @type {number}
 */
export
const read_report: Messaging_Property_Notification_Type = Messaging_Property_Notification_Type_read_report; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary Messaging_Property_Notification_Type_delivery_report
 * @constant
 * @type {number}
 */
export
const Messaging_Property_Notification_Type_delivery_report: Messaging_Property_Notification_Type = 5; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary delivery_report
 * @constant
 * @type {number}
 */
export
const delivery_report: Messaging_Property_Notification_Type = Messaging_Property_Notification_Type_delivery_report; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary Messaging_Property_Notification_Type_allow_delivery_report
 * @constant
 * @type {number}
 */
export
const Messaging_Property_Notification_Type_allow_delivery_report: Messaging_Property_Notification_Type = 6; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary allow_delivery_report
 * @constant
 * @type {number}
 */
export
const allow_delivery_report: Messaging_Property_Notification_Type = Messaging_Property_Notification_Type_allow_delivery_report; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary Messaging_Property_Notification_Type_deny_delivery_report
 * @constant
 * @type {number}
 */
export
const Messaging_Property_Notification_Type_deny_delivery_report: Messaging_Property_Notification_Type = 7; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary deny_delivery_report
 * @constant
 * @type {number}
 */
export
const deny_delivery_report: Messaging_Property_Notification_Type = Messaging_Property_Notification_Type_deny_delivery_report; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary Messaging_Property_Notification_Type_message_wait_indication
 * @constant
 * @type {number}
 */
export
const Messaging_Property_Notification_Type_message_wait_indication: Messaging_Property_Notification_Type = 8; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary message_wait_indication
 * @constant
 * @type {number}
 */
export
const message_wait_indication: Messaging_Property_Notification_Type = Messaging_Property_Notification_Type_message_wait_indication; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary Messaging_Property_Notification_Type_voice_to_text
 * @constant
 * @type {number}
 */
export
const Messaging_Property_Notification_Type_voice_to_text: Messaging_Property_Notification_Type = 9; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary voice_to_text
 * @constant
 * @type {number}
 */
export
const voice_to_text: Messaging_Property_Notification_Type = Messaging_Property_Notification_Type_voice_to_text; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary Messaging_Property_Notification_Type_new_message_sms
 * @constant
 * @type {number}
 */
export
const Messaging_Property_Notification_Type_new_message_sms: Messaging_Property_Notification_Type = 10; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary new_message_sms
 * @constant
 * @type {number}
 */
export
const new_message_sms: Messaging_Property_Notification_Type = Messaging_Property_Notification_Type_new_message_sms; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary Messaging_Property_Notification_Type_new_message_outcall
 * @constant
 * @type {number}
 */
export
const Messaging_Property_Notification_Type_new_message_outcall: Messaging_Property_Notification_Type = 11; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary new_message_outcall
 * @constant
 * @type {number}
 */
export
const new_message_outcall: Messaging_Property_Notification_Type = Messaging_Property_Notification_Type_new_message_outcall; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary Messaging_Property_Notification_Type_new_message_reminder
 * @constant
 * @type {number}
 */
export
const Messaging_Property_Notification_Type_new_message_reminder: Messaging_Property_Notification_Type = 12; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary new_message_reminder
 * @constant
 * @type {number}
 */
export
const new_message_reminder: Messaging_Property_Notification_Type = Messaging_Property_Notification_Type_new_message_reminder; /* SHORT_NAMED_ENUMERATED_VALUE */
export const _decode_Messaging_Property_Notification_Type: $.ASN1Decoder<Messaging_Property_Notification_Type> = $._decodeEnumerated;
export const _encode_Messaging_Property_Notification_Type: $.ASN1Encoder<Messaging_Property_Notification_Type> = $._encodeEnumerated;


/* eslint-enable */
