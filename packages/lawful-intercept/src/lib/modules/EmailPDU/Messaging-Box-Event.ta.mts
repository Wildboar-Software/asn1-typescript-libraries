/* eslint-disable */
import {
    type ENUMERATED
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @description
 *
 * An operation on the target's unified-messaging box.
 *
 * Table 5 requires captured content for greeting record, change, delete,
 * enable, disable, and play. The other box events are not in that table.
 *
 * ETSI TS 102 232-2 V3.16.1 (2023-03), clauses 8.1 and 8.3.
 * https://www.etsi.org/deliver/etsi_ts/102200_102299/10223202/03.16.01_60/ts_10223202v031601p.pdf
 */
export
enum _enum_for_Messaging_Box_Event {
    /**
     * The target logs in to the box.
     *
     * ETSI TS 102 232-2 V3.16.1 (2023-03), clause 8.3.
     */
    login = 1,
    /**
     * The target logs out of the box.
     *
     * ETSI TS 102 232-2 V3.16.1 (2023-03), clause 8.3.
     */
    logout = 2,
    /**
     * The target locks the box.
     *
     * ETSI TS 102 232-2 V3.16.1 (2023-03), clause 8.3.
     */
    lock = 3,
    /**
     * The target unlocks the box.
     *
     * ETSI TS 102 232-2 V3.16.1 (2023-03), clause 8.3.
     */
    unlock = 4,
    /**
     * A box is activated, for example the target activates voicemail.
     *
     * ETSI TS 102 232-2 V3.16.1 (2023-03), clause 8.3.
     */
    activate = 5,
    /**
     * A box is deactivated.
     *
     * ETSI TS 102 232-2 V3.16.1 (2023-03), clause 8.3.
     */
    deactivate = 6,
    /**
     * A box is deleted. This is deletion of the box, not of one message
     * (`Messaging_Event` delete).
     *
     * ETSI TS 102 232-2 V3.16.1 (2023-03), clause 8.3.
     */
    delete_ = 7,
    /**
     * The target changes the PIN of the box.
     *
     * ETSI TS 102 232-2 V3.16.1 (2023-03), clause 8.3.
     */
    pin_change = 8,
    /**
     * The target records a new greeting. Table 5 requires captured-content
     * delivery for this event.
     *
     * ETSI TS 102 232-2 V3.16.1 (2023-03), clauses 8.1 and 8.3.
     */
    greeting_record = 9,
    /**
     * The target changes an existing greeting. Table 5 requires
     * captured-content delivery for this event.
     *
     * ETSI TS 102 232-2 V3.16.1 (2023-03), clauses 8.1 and 8.3.
     */
    greeting_change = 10,
    /**
     * The target deletes a greeting. Table 5 requires captured-content delivery
     * for this event.
     *
     * ETSI TS 102 232-2 V3.16.1 (2023-03), clauses 8.1 and 8.3.
     */
    greeting_delete = 11,
    /**
     * The target enables a greeting. Table 5 requires captured-content delivery
     * for this event.
     *
     * ETSI TS 102 232-2 V3.16.1 (2023-03), clauses 8.1 and 8.3.
     */
    greeting_enable = 12,
    /**
     * The target disables a greeting. Table 5 requires captured-content
     * delivery for this event.
     *
     * ETSI TS 102 232-2 V3.16.1 (2023-03), clauses 8.1 and 8.3.
     */
    greeting_disable = 13,
    /**
     * The target enables notification of new messages.
     *
     * ETSI TS 102 232-2 V3.16.1 (2023-03), clause 8.3.
     */
    notification_enable = 14,
    /**
     * The target disables notification of new messages.
     *
     * ETSI TS 102 232-2 V3.16.1 (2023-03), clause 8.3.
     */
    notification_disable = 15,
    /**
     * The target is disconnected from the box without a logout.
     *
     * ETSI TS 102 232-2 V3.16.1 (2023-03), clause 8.3.
     */
    disconnect = 16,
    /**
     * A party, the target or a third party, connects to the messaging system
     * and has not yet done anything else. RTP legs of a UM call are correlated
     * to this event (table 6).
     *
     * ETSI TS 102 232-2 V3.16.1 (2023-03), clauses 8.1 and 8.3.
     */
    connect = 17,
    /**
     * An unknown operation occurs on the box.
     *
     * ETSI TS 102 232-2 V3.16.1 (2023-03), clause 8.3.
     */
    unknown = 0,
    /**
     * A greeting is played for a party. Table 5 requires captured-content
     * delivery for this event.
     *
     * ETSI TS 102 232-2 V3.16.1 (2023-03), clauses 8.1 and 8.3.
     */
    greeting_play = 18,
    /**
     * The target changes the language preference.
     *
     * ETSI TS 102 232-2 V3.16.1 (2023-03), clause 8.3.
     */
    language_change = 19,
    /**
     * The target enables PIN security. Without it, access may be granted by
     * verifying only the end-user device. With it, PIN authentication is
     * required on every access.
     *
     * ETSI TS 102 232-2 V3.16.1 (2023-03), clause 8.3.
     */
    pin_security_enable = 20,
    /**
     * The target disables PIN security.
     *
     * ETSI TS 102 232-2 V3.16.1 (2023-03), clause 8.3.
     */
    pin_security_disable = 21,
    /**
     * The target adds the personal-operator definition on the box.
     *
     * ETSI TS 102 232-2 V3.16.1 (2023-03), clause 8.3.
     */
    personal_operator_add = 22,
    /**
     * The target changes the personal-operator definition on the box.
     *
     * ETSI TS 102 232-2 V3.16.1 (2023-03), clause 8.3.
     */
    personal_operator_change = 23,
    /**
     * The target removes the personal-operator definition from the box.
     *
     * ETSI TS 102 232-2 V3.16.1 (2023-03), clause 8.3.
     */
    personal_operator_remove = 24,
    /**
     * The target creates additional delivery destinations on the box.
     *
     * ETSI TS 102 232-2 V3.16.1 (2023-03), clause 8.3.
     */
    additional_destination_add = 25,
    /**
     * The target changes additional delivery destinations on the box.
     *
     * ETSI TS 102 232-2 V3.16.1 (2023-03), clause 8.3.
     */
    additional_destination_change = 26,
    /**
     * The target removes additional delivery destinations from the box.
     *
     * ETSI TS 102 232-2 V3.16.1 (2023-03), clause 8.3.
     */
    additional_destination_remove = 27,
    /**
     * The target enables playback of message options, such as save and delete,
     * after the system has played a message during retrieval.
     *
     * ETSI TS 102 232-2 V3.16.1 (2023-03), clause 8.3.
     */
    auto_play_enable = 28,
    /**
     * The target disables auto-play of message options.
     *
     * ETSI TS 102 232-2 V3.16.1 (2023-03), clause 8.3.
     */
    auto_play_disable = 29,
    /**
     * The target enables playback of meta-information, such as the deposit
     * date, before the system plays a message during retrieval.
     *
     * ETSI TS 102 232-2 V3.16.1 (2023-03), clause 8.3.
     */
    header_play_enable = 30,
    /**
     * The target disables playback of message meta-information.
     *
     * ETSI TS 102 232-2 V3.16.1 (2023-03), clause 8.3.
     */
    header_play_disable = 31,
}

/**
 * @summary Messaging_Box_Event
 * @description
 *
 * An operation on the target's unified-messaging box.
 *
 * Table 5 requires captured content for greeting record, change, delete,
 * enable, disable, and play. The other box events are not in that table.
 *
 * ETSI TS 102 232-2 V3.16.1 (2023-03), clauses 8.1 and 8.3.
 * https://www.etsi.org/deliver/etsi_ts/102200_102299/10223202/03.16.01_60/ts_10223202v031601p.pdf
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * Messaging-Box-Event  ::=  ENUMERATED
 * {
 *     login(1),
 *     logout(2),
 *     lock(3),
 *     unlock(4),
 *     activate(5),
 *     deactivate(6),
 *     delete(7),
 *     pin-change(8),
 *     greeting-record(9),
 *     greeting-change(10),
 *     greeting-delete(11),
 *     greeting-enable(12),
 *     greeting-disable(13),
 *     notification-enable(14),
 *     notification-disable(15),
 *     disconnect(16),
 *     connect(17),
 *     ...,
 *     unknown(0),
 *     greeting-play(18),
 *     language-change(19),
 *     pin-security-enable(20),
 *     pin-security-disable(21),
 *     personal-operator-add(22),
 *     personal-operator-change(23),
 *     personal-operator-remove(24),
 *     additional-destination-add(25),
 *     additional-destination-change(26),
 *     additional-destination-remove(27),
 *     auto-play-enable(28),
 *     auto-play-disable(29),
 *     header-play-enable(30),
 *     header-play-disable(31)
 * }
 * ```
 * 
 * @enum {number}
 */
export
type Messaging_Box_Event = _enum_for_Messaging_Box_Event | ENUMERATED;

/**
 * @summary Messaging_Box_Event_login
 * @description
 *
 * The target logs in to the box.
 *
 * ETSI TS 102 232-2 V3.16.1 (2023-03), clause 8.3.
 *
 * @constant
 * @type {number}
 */
export
const Messaging_Box_Event_login = _enum_for_Messaging_Box_Event.login; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary login
 * @description
 *
 * The target logs in to the box.
 *
 * ETSI TS 102 232-2 V3.16.1 (2023-03), clause 8.3.
 *
 * @constant
 * @type {number}
 */
export
const login = Messaging_Box_Event_login; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary Messaging_Box_Event_logout
 * @description
 *
 * The target logs out of the box.
 *
 * ETSI TS 102 232-2 V3.16.1 (2023-03), clause 8.3.
 *
 * @constant
 * @type {number}
 */
export
const Messaging_Box_Event_logout = _enum_for_Messaging_Box_Event.logout; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary logout
 * @description
 *
 * The target logs out of the box.
 *
 * ETSI TS 102 232-2 V3.16.1 (2023-03), clause 8.3.
 *
 * @constant
 * @type {number}
 */
export
const logout = Messaging_Box_Event_logout; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary Messaging_Box_Event_lock
 * @description
 *
 * The target locks the box.
 *
 * ETSI TS 102 232-2 V3.16.1 (2023-03), clause 8.3.
 *
 * @constant
 * @type {number}
 */
export
const Messaging_Box_Event_lock = _enum_for_Messaging_Box_Event.lock; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary lock
 * @description
 *
 * The target locks the box.
 *
 * ETSI TS 102 232-2 V3.16.1 (2023-03), clause 8.3.
 *
 * @constant
 * @type {number}
 */
export
const lock = Messaging_Box_Event_lock; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary Messaging_Box_Event_unlock
 * @description
 *
 * The target unlocks the box.
 *
 * ETSI TS 102 232-2 V3.16.1 (2023-03), clause 8.3.
 *
 * @constant
 * @type {number}
 */
export
const Messaging_Box_Event_unlock = _enum_for_Messaging_Box_Event.unlock; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary unlock
 * @description
 *
 * The target unlocks the box.
 *
 * ETSI TS 102 232-2 V3.16.1 (2023-03), clause 8.3.
 *
 * @constant
 * @type {number}
 */
export
const unlock = Messaging_Box_Event_unlock; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary Messaging_Box_Event_activate
 * @description
 *
 * A box is activated, for example the target activates voicemail.
 *
 * ETSI TS 102 232-2 V3.16.1 (2023-03), clause 8.3.
 *
 * @constant
 * @type {number}
 */
export
const Messaging_Box_Event_activate = _enum_for_Messaging_Box_Event.activate; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary activate
 * @description
 *
 * A box is activated, for example the target activates voicemail.
 *
 * ETSI TS 102 232-2 V3.16.1 (2023-03), clause 8.3.
 *
 * @constant
 * @type {number}
 */
export
const activate = Messaging_Box_Event_activate; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary Messaging_Box_Event_deactivate
 * @description
 *
 * A box is deactivated.
 *
 * ETSI TS 102 232-2 V3.16.1 (2023-03), clause 8.3.
 *
 * @constant
 * @type {number}
 */
export
const Messaging_Box_Event_deactivate = _enum_for_Messaging_Box_Event.deactivate; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary deactivate
 * @description
 *
 * A box is deactivated.
 *
 * ETSI TS 102 232-2 V3.16.1 (2023-03), clause 8.3.
 *
 * @constant
 * @type {number}
 */
export
const deactivate = Messaging_Box_Event_deactivate; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary Messaging_Box_Event_delete_
 * @description
 *
 * A box is deleted. This is deletion of the box, not of one message
 * (`Messaging_Event` delete).
 *
 * ETSI TS 102 232-2 V3.16.1 (2023-03), clause 8.3.
 *
 * @constant
 * @type {number}
 */
export
const Messaging_Box_Event_delete_ = _enum_for_Messaging_Box_Event.delete_; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary delete_
 * @description
 *
 * A box is deleted. This is deletion of the box, not of one message
 * (`Messaging_Event` delete).
 *
 * ETSI TS 102 232-2 V3.16.1 (2023-03), clause 8.3.
 *
 * @constant
 * @type {number}
 */
export
const delete_ = Messaging_Box_Event_delete_; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary Messaging_Box_Event_pin_change
 * @description
 *
 * The target changes the PIN of the box.
 *
 * ETSI TS 102 232-2 V3.16.1 (2023-03), clause 8.3.
 *
 * @constant
 * @type {number}
 */
export
const Messaging_Box_Event_pin_change = _enum_for_Messaging_Box_Event.pin_change; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary pin_change
 * @description
 *
 * The target changes the PIN of the box.
 *
 * ETSI TS 102 232-2 V3.16.1 (2023-03), clause 8.3.
 *
 * @constant
 * @type {number}
 */
export
const pin_change = Messaging_Box_Event_pin_change; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary Messaging_Box_Event_greeting_record
 * @description
 *
 * The target records a new greeting. Table 5 requires captured-content delivery
 * for this event.
 *
 * ETSI TS 102 232-2 V3.16.1 (2023-03), clauses 8.1 and 8.3.
 *
 * @constant
 * @type {number}
 */
export
const Messaging_Box_Event_greeting_record = _enum_for_Messaging_Box_Event.greeting_record; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary greeting_record
 * @description
 *
 * The target records a new greeting. Table 5 requires captured-content delivery
 * for this event.
 *
 * ETSI TS 102 232-2 V3.16.1 (2023-03), clauses 8.1 and 8.3.
 *
 * @constant
 * @type {number}
 */
export
const greeting_record = Messaging_Box_Event_greeting_record; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary Messaging_Box_Event_greeting_change
 * @description
 *
 * The target changes an existing greeting. Table 5 requires captured-content
 * delivery for this event.
 *
 * ETSI TS 102 232-2 V3.16.1 (2023-03), clauses 8.1 and 8.3.
 *
 * @constant
 * @type {number}
 */
export
const Messaging_Box_Event_greeting_change = _enum_for_Messaging_Box_Event.greeting_change; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary greeting_change
 * @description
 *
 * The target changes an existing greeting. Table 5 requires captured-content
 * delivery for this event.
 *
 * ETSI TS 102 232-2 V3.16.1 (2023-03), clauses 8.1 and 8.3.
 *
 * @constant
 * @type {number}
 */
export
const greeting_change = Messaging_Box_Event_greeting_change; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary Messaging_Box_Event_greeting_delete
 * @description
 *
 * The target deletes a greeting. Table 5 requires captured-content delivery for
 * this event.
 *
 * ETSI TS 102 232-2 V3.16.1 (2023-03), clauses 8.1 and 8.3.
 *
 * @constant
 * @type {number}
 */
export
const Messaging_Box_Event_greeting_delete = _enum_for_Messaging_Box_Event.greeting_delete; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary greeting_delete
 * @description
 *
 * The target deletes a greeting. Table 5 requires captured-content delivery for
 * this event.
 *
 * ETSI TS 102 232-2 V3.16.1 (2023-03), clauses 8.1 and 8.3.
 *
 * @constant
 * @type {number}
 */
export
const greeting_delete = Messaging_Box_Event_greeting_delete; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary Messaging_Box_Event_greeting_enable
 * @description
 *
 * The target enables a greeting. Table 5 requires captured-content delivery for
 * this event.
 *
 * ETSI TS 102 232-2 V3.16.1 (2023-03), clauses 8.1 and 8.3.
 *
 * @constant
 * @type {number}
 */
export
const Messaging_Box_Event_greeting_enable = _enum_for_Messaging_Box_Event.greeting_enable; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary greeting_enable
 * @description
 *
 * The target enables a greeting. Table 5 requires captured-content delivery for
 * this event.
 *
 * ETSI TS 102 232-2 V3.16.1 (2023-03), clauses 8.1 and 8.3.
 *
 * @constant
 * @type {number}
 */
export
const greeting_enable = Messaging_Box_Event_greeting_enable; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary Messaging_Box_Event_greeting_disable
 * @description
 *
 * The target disables a greeting. Table 5 requires captured-content delivery
 * for this event.
 *
 * ETSI TS 102 232-2 V3.16.1 (2023-03), clauses 8.1 and 8.3.
 *
 * @constant
 * @type {number}
 */
export
const Messaging_Box_Event_greeting_disable = _enum_for_Messaging_Box_Event.greeting_disable; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary greeting_disable
 * @description
 *
 * The target disables a greeting. Table 5 requires captured-content delivery
 * for this event.
 *
 * ETSI TS 102 232-2 V3.16.1 (2023-03), clauses 8.1 and 8.3.
 *
 * @constant
 * @type {number}
 */
export
const greeting_disable = Messaging_Box_Event_greeting_disable; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary Messaging_Box_Event_notification_enable
 * @description
 *
 * The target enables notification of new messages.
 *
 * ETSI TS 102 232-2 V3.16.1 (2023-03), clause 8.3.
 *
 * @constant
 * @type {number}
 */
export
const Messaging_Box_Event_notification_enable = _enum_for_Messaging_Box_Event.notification_enable; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary notification_enable
 * @description
 *
 * The target enables notification of new messages.
 *
 * ETSI TS 102 232-2 V3.16.1 (2023-03), clause 8.3.
 *
 * @constant
 * @type {number}
 */
export
const notification_enable = Messaging_Box_Event_notification_enable; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary Messaging_Box_Event_notification_disable
 * @description
 *
 * The target disables notification of new messages.
 *
 * ETSI TS 102 232-2 V3.16.1 (2023-03), clause 8.3.
 *
 * @constant
 * @type {number}
 */
export
const Messaging_Box_Event_notification_disable = _enum_for_Messaging_Box_Event.notification_disable; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary notification_disable
 * @description
 *
 * The target disables notification of new messages.
 *
 * ETSI TS 102 232-2 V3.16.1 (2023-03), clause 8.3.
 *
 * @constant
 * @type {number}
 */
export
const notification_disable = Messaging_Box_Event_notification_disable; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary Messaging_Box_Event_disconnect
 * @description
 *
 * The target is disconnected from the box without a logout.
 *
 * ETSI TS 102 232-2 V3.16.1 (2023-03), clause 8.3.
 *
 * @constant
 * @type {number}
 */
export
const Messaging_Box_Event_disconnect = _enum_for_Messaging_Box_Event.disconnect; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary disconnect
 * @description
 *
 * The target is disconnected from the box without a logout.
 *
 * ETSI TS 102 232-2 V3.16.1 (2023-03), clause 8.3.
 *
 * @constant
 * @type {number}
 */
export
const disconnect = Messaging_Box_Event_disconnect; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary Messaging_Box_Event_connect
 * @description
 *
 * A party, the target or a third party, connects to the messaging system and
 * has not yet done anything else. RTP legs of a UM call are correlated to this
 * event (table 6).
 *
 * ETSI TS 102 232-2 V3.16.1 (2023-03), clauses 8.1 and 8.3.
 *
 * @constant
 * @type {number}
 */
export
const Messaging_Box_Event_connect = _enum_for_Messaging_Box_Event.connect; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary connect
 * @description
 *
 * A party, the target or a third party, connects to the messaging system and
 * has not yet done anything else. RTP legs of a UM call are correlated to this
 * event (table 6).
 *
 * ETSI TS 102 232-2 V3.16.1 (2023-03), clauses 8.1 and 8.3.
 *
 * @constant
 * @type {number}
 */
export
const connect = Messaging_Box_Event_connect; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary Messaging_Box_Event_unknown
 * @description
 *
 * An unknown operation occurs on the box.
 *
 * ETSI TS 102 232-2 V3.16.1 (2023-03), clause 8.3.
 *
 * @constant
 * @type {number}
 */
export
const Messaging_Box_Event_unknown = _enum_for_Messaging_Box_Event.unknown; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary unknown
 * @description
 *
 * An unknown operation occurs on the box.
 *
 * ETSI TS 102 232-2 V3.16.1 (2023-03), clause 8.3.
 *
 * @constant
 * @type {number}
 */
export
const unknown = Messaging_Box_Event_unknown; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary Messaging_Box_Event_greeting_play
 * @description
 *
 * A greeting is played for a party. Table 5 requires captured-content delivery
 * for this event.
 *
 * ETSI TS 102 232-2 V3.16.1 (2023-03), clauses 8.1 and 8.3.
 *
 * @constant
 * @type {number}
 */
export
const Messaging_Box_Event_greeting_play = _enum_for_Messaging_Box_Event.greeting_play; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary greeting_play
 * @description
 *
 * A greeting is played for a party. Table 5 requires captured-content delivery
 * for this event.
 *
 * ETSI TS 102 232-2 V3.16.1 (2023-03), clauses 8.1 and 8.3.
 *
 * @constant
 * @type {number}
 */
export
const greeting_play = Messaging_Box_Event_greeting_play; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary Messaging_Box_Event_language_change
 * @description
 *
 * The target changes the language preference.
 *
 * ETSI TS 102 232-2 V3.16.1 (2023-03), clause 8.3.
 *
 * @constant
 * @type {number}
 */
export
const Messaging_Box_Event_language_change = _enum_for_Messaging_Box_Event.language_change; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary language_change
 * @description
 *
 * The target changes the language preference.
 *
 * ETSI TS 102 232-2 V3.16.1 (2023-03), clause 8.3.
 *
 * @constant
 * @type {number}
 */
export
const language_change = Messaging_Box_Event_language_change; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary Messaging_Box_Event_pin_security_enable
 * @description
 *
 * The target enables PIN security. Without it, access may be granted by
 * verifying only the end-user device. With it, PIN authentication is required
 * on every access.
 *
 * ETSI TS 102 232-2 V3.16.1 (2023-03), clause 8.3.
 *
 * @constant
 * @type {number}
 */
export
const Messaging_Box_Event_pin_security_enable = _enum_for_Messaging_Box_Event.pin_security_enable; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary pin_security_enable
 * @description
 *
 * The target enables PIN security. Without it, access may be granted by
 * verifying only the end-user device. With it, PIN authentication is required
 * on every access.
 *
 * ETSI TS 102 232-2 V3.16.1 (2023-03), clause 8.3.
 *
 * @constant
 * @type {number}
 */
export
const pin_security_enable = Messaging_Box_Event_pin_security_enable; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary Messaging_Box_Event_pin_security_disable
 * @description
 *
 * The target disables PIN security.
 *
 * ETSI TS 102 232-2 V3.16.1 (2023-03), clause 8.3.
 *
 * @constant
 * @type {number}
 */
export
const Messaging_Box_Event_pin_security_disable = _enum_for_Messaging_Box_Event.pin_security_disable; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary pin_security_disable
 * @description
 *
 * The target disables PIN security.
 *
 * ETSI TS 102 232-2 V3.16.1 (2023-03), clause 8.3.
 *
 * @constant
 * @type {number}
 */
export
const pin_security_disable = Messaging_Box_Event_pin_security_disable; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary Messaging_Box_Event_personal_operator_add
 * @description
 *
 * The target adds the personal-operator definition on the box.
 *
 * ETSI TS 102 232-2 V3.16.1 (2023-03), clause 8.3.
 *
 * @constant
 * @type {number}
 */
export
const Messaging_Box_Event_personal_operator_add = _enum_for_Messaging_Box_Event.personal_operator_add; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary personal_operator_add
 * @description
 *
 * The target adds the personal-operator definition on the box.
 *
 * ETSI TS 102 232-2 V3.16.1 (2023-03), clause 8.3.
 *
 * @constant
 * @type {number}
 */
export
const personal_operator_add = Messaging_Box_Event_personal_operator_add; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary Messaging_Box_Event_personal_operator_change
 * @description
 *
 * The target changes the personal-operator definition on the box.
 *
 * ETSI TS 102 232-2 V3.16.1 (2023-03), clause 8.3.
 *
 * @constant
 * @type {number}
 */
export
const Messaging_Box_Event_personal_operator_change = _enum_for_Messaging_Box_Event.personal_operator_change; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary personal_operator_change
 * @description
 *
 * The target changes the personal-operator definition on the box.
 *
 * ETSI TS 102 232-2 V3.16.1 (2023-03), clause 8.3.
 *
 * @constant
 * @type {number}
 */
export
const personal_operator_change = Messaging_Box_Event_personal_operator_change; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary Messaging_Box_Event_personal_operator_remove
 * @description
 *
 * The target removes the personal-operator definition from the box.
 *
 * ETSI TS 102 232-2 V3.16.1 (2023-03), clause 8.3.
 *
 * @constant
 * @type {number}
 */
export
const Messaging_Box_Event_personal_operator_remove = _enum_for_Messaging_Box_Event.personal_operator_remove; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary personal_operator_remove
 * @description
 *
 * The target removes the personal-operator definition from the box.
 *
 * ETSI TS 102 232-2 V3.16.1 (2023-03), clause 8.3.
 *
 * @constant
 * @type {number}
 */
export
const personal_operator_remove = Messaging_Box_Event_personal_operator_remove; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary Messaging_Box_Event_additional_destination_add
 * @description
 *
 * The target creates additional delivery destinations on the box.
 *
 * ETSI TS 102 232-2 V3.16.1 (2023-03), clause 8.3.
 *
 * @constant
 * @type {number}
 */
export
const Messaging_Box_Event_additional_destination_add = _enum_for_Messaging_Box_Event.additional_destination_add; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary additional_destination_add
 * @description
 *
 * The target creates additional delivery destinations on the box.
 *
 * ETSI TS 102 232-2 V3.16.1 (2023-03), clause 8.3.
 *
 * @constant
 * @type {number}
 */
export
const additional_destination_add = Messaging_Box_Event_additional_destination_add; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary Messaging_Box_Event_additional_destination_change
 * @description
 *
 * The target changes additional delivery destinations on the box.
 *
 * ETSI TS 102 232-2 V3.16.1 (2023-03), clause 8.3.
 *
 * @constant
 * @type {number}
 */
export
const Messaging_Box_Event_additional_destination_change = _enum_for_Messaging_Box_Event.additional_destination_change; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary additional_destination_change
 * @description
 *
 * The target changes additional delivery destinations on the box.
 *
 * ETSI TS 102 232-2 V3.16.1 (2023-03), clause 8.3.
 *
 * @constant
 * @type {number}
 */
export
const additional_destination_change = Messaging_Box_Event_additional_destination_change; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary Messaging_Box_Event_additional_destination_remove
 * @description
 *
 * The target removes additional delivery destinations from the box.
 *
 * ETSI TS 102 232-2 V3.16.1 (2023-03), clause 8.3.
 *
 * @constant
 * @type {number}
 */
export
const Messaging_Box_Event_additional_destination_remove = _enum_for_Messaging_Box_Event.additional_destination_remove; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary additional_destination_remove
 * @description
 *
 * The target removes additional delivery destinations from the box.
 *
 * ETSI TS 102 232-2 V3.16.1 (2023-03), clause 8.3.
 *
 * @constant
 * @type {number}
 */
export
const additional_destination_remove = Messaging_Box_Event_additional_destination_remove; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary Messaging_Box_Event_auto_play_enable
 * @description
 *
 * The target enables playback of message options, such as save and delete,
 * after the system has played a message during retrieval.
 *
 * ETSI TS 102 232-2 V3.16.1 (2023-03), clause 8.3.
 *
 * @constant
 * @type {number}
 */
export
const Messaging_Box_Event_auto_play_enable = _enum_for_Messaging_Box_Event.auto_play_enable; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary auto_play_enable
 * @description
 *
 * The target enables playback of message options, such as save and delete,
 * after the system has played a message during retrieval.
 *
 * ETSI TS 102 232-2 V3.16.1 (2023-03), clause 8.3.
 *
 * @constant
 * @type {number}
 */
export
const auto_play_enable = Messaging_Box_Event_auto_play_enable; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary Messaging_Box_Event_auto_play_disable
 * @description
 *
 * The target disables auto-play of message options.
 *
 * ETSI TS 102 232-2 V3.16.1 (2023-03), clause 8.3.
 *
 * @constant
 * @type {number}
 */
export
const Messaging_Box_Event_auto_play_disable = _enum_for_Messaging_Box_Event.auto_play_disable; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary auto_play_disable
 * @description
 *
 * The target disables auto-play of message options.
 *
 * ETSI TS 102 232-2 V3.16.1 (2023-03), clause 8.3.
 *
 * @constant
 * @type {number}
 */
export
const auto_play_disable = Messaging_Box_Event_auto_play_disable; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary Messaging_Box_Event_header_play_enable
 * @description
 *
 * The target enables playback of meta-information, such as the deposit date,
 * before the system plays a message during retrieval.
 *
 * ETSI TS 102 232-2 V3.16.1 (2023-03), clause 8.3.
 *
 * @constant
 * @type {number}
 */
export
const Messaging_Box_Event_header_play_enable = _enum_for_Messaging_Box_Event.header_play_enable; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary header_play_enable
 * @description
 *
 * The target enables playback of meta-information, such as the deposit date,
 * before the system plays a message during retrieval.
 *
 * ETSI TS 102 232-2 V3.16.1 (2023-03), clause 8.3.
 *
 * @constant
 * @type {number}
 */
export
const header_play_enable = Messaging_Box_Event_header_play_enable; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary Messaging_Box_Event_header_play_disable
 * @description
 *
 * The target disables playback of message meta-information.
 *
 * ETSI TS 102 232-2 V3.16.1 (2023-03), clause 8.3.
 *
 * @constant
 * @type {number}
 */
export
const Messaging_Box_Event_header_play_disable = _enum_for_Messaging_Box_Event.header_play_disable; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary header_play_disable
 * @description
 *
 * The target disables playback of message meta-information.
 *
 * ETSI TS 102 232-2 V3.16.1 (2023-03), clause 8.3.
 *
 * @constant
 * @type {number}
 */
export
const header_play_disable = Messaging_Box_Event_header_play_disable; /* SHORT_NAMED_ENUMERATED_VALUE */
export const _decode_Messaging_Box_Event: $.ASN1Decoder<Messaging_Box_Event> = $._decodeEnumerated;
export const _encode_Messaging_Box_Event: $.ASN1Encoder<Messaging_Box_Event> = $._encodeEnumerated;


/* eslint-enable */
