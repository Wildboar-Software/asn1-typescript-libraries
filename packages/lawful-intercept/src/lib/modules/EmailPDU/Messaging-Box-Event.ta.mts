/* eslint-disable */
import {
    ASN1Element as _Element,
    ENUMERATED
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



export
enum _enum_for_Messaging_Box_Event {
    login = 1,
    logout = 2,
    lock = 3,
    unlock = 4,
    activate = 5,
    deactivate = 6,
    delete_ = 7,
    pin_change = 8,
    greeting_record = 9,
    greeting_change = 10,
    greeting_delete = 11,
    greeting_enable = 12,
    greeting_disable = 13,
    notification_enable = 14,
    notification_disable = 15,
    disconnect = 16,
    connect = 17,
    unknown = 0,
    greeting_play = 18,
    language_change = 19,
    pin_security_enable = 20,
    pin_security_disable = 21,
    personal_operator_add = 22,
    personal_operator_change = 23,
    personal_operator_remove = 24,
    additional_destination_add = 25,
    additional_destination_change = 26,
    additional_destination_remove = 27,
    auto_play_enable = 28,
    auto_play_disable = 29,
    header_play_enable = 30,
    header_play_disable = 31,
}

/**
 * @summary Messaging_Box_Event
 * @description
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
 * @constant
 * @type {number}
 */
export
const Messaging_Box_Event_login: Messaging_Box_Event = 1; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary login
 * @constant
 * @type {number}
 */
export
const login: Messaging_Box_Event = Messaging_Box_Event_login; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary Messaging_Box_Event_logout
 * @constant
 * @type {number}
 */
export
const Messaging_Box_Event_logout: Messaging_Box_Event = 2; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary logout
 * @constant
 * @type {number}
 */
export
const logout: Messaging_Box_Event = Messaging_Box_Event_logout; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary Messaging_Box_Event_lock
 * @constant
 * @type {number}
 */
export
const Messaging_Box_Event_lock: Messaging_Box_Event = 3; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary lock
 * @constant
 * @type {number}
 */
export
const lock: Messaging_Box_Event = Messaging_Box_Event_lock; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary Messaging_Box_Event_unlock
 * @constant
 * @type {number}
 */
export
const Messaging_Box_Event_unlock: Messaging_Box_Event = 4; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary unlock
 * @constant
 * @type {number}
 */
export
const unlock: Messaging_Box_Event = Messaging_Box_Event_unlock; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary Messaging_Box_Event_activate
 * @constant
 * @type {number}
 */
export
const Messaging_Box_Event_activate: Messaging_Box_Event = 5; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary activate
 * @constant
 * @type {number}
 */
export
const activate: Messaging_Box_Event = Messaging_Box_Event_activate; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary Messaging_Box_Event_deactivate
 * @constant
 * @type {number}
 */
export
const Messaging_Box_Event_deactivate: Messaging_Box_Event = 6; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary deactivate
 * @constant
 * @type {number}
 */
export
const deactivate: Messaging_Box_Event = Messaging_Box_Event_deactivate; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary Messaging_Box_Event_delete_
 * @constant
 * @type {number}
 */
export
const Messaging_Box_Event_delete_: Messaging_Box_Event = 7; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary delete_
 * @constant
 * @type {number}
 */
export
const delete_: Messaging_Box_Event = Messaging_Box_Event_delete_; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary Messaging_Box_Event_pin_change
 * @constant
 * @type {number}
 */
export
const Messaging_Box_Event_pin_change: Messaging_Box_Event = 8; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary pin_change
 * @constant
 * @type {number}
 */
export
const pin_change: Messaging_Box_Event = Messaging_Box_Event_pin_change; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary Messaging_Box_Event_greeting_record
 * @constant
 * @type {number}
 */
export
const Messaging_Box_Event_greeting_record: Messaging_Box_Event = 9; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary greeting_record
 * @constant
 * @type {number}
 */
export
const greeting_record: Messaging_Box_Event = Messaging_Box_Event_greeting_record; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary Messaging_Box_Event_greeting_change
 * @constant
 * @type {number}
 */
export
const Messaging_Box_Event_greeting_change: Messaging_Box_Event = 10; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary greeting_change
 * @constant
 * @type {number}
 */
export
const greeting_change: Messaging_Box_Event = Messaging_Box_Event_greeting_change; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary Messaging_Box_Event_greeting_delete
 * @constant
 * @type {number}
 */
export
const Messaging_Box_Event_greeting_delete: Messaging_Box_Event = 11; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary greeting_delete
 * @constant
 * @type {number}
 */
export
const greeting_delete: Messaging_Box_Event = Messaging_Box_Event_greeting_delete; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary Messaging_Box_Event_greeting_enable
 * @constant
 * @type {number}
 */
export
const Messaging_Box_Event_greeting_enable: Messaging_Box_Event = 12; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary greeting_enable
 * @constant
 * @type {number}
 */
export
const greeting_enable: Messaging_Box_Event = Messaging_Box_Event_greeting_enable; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary Messaging_Box_Event_greeting_disable
 * @constant
 * @type {number}
 */
export
const Messaging_Box_Event_greeting_disable: Messaging_Box_Event = 13; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary greeting_disable
 * @constant
 * @type {number}
 */
export
const greeting_disable: Messaging_Box_Event = Messaging_Box_Event_greeting_disable; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary Messaging_Box_Event_notification_enable
 * @constant
 * @type {number}
 */
export
const Messaging_Box_Event_notification_enable: Messaging_Box_Event = 14; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary notification_enable
 * @constant
 * @type {number}
 */
export
const notification_enable: Messaging_Box_Event = Messaging_Box_Event_notification_enable; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary Messaging_Box_Event_notification_disable
 * @constant
 * @type {number}
 */
export
const Messaging_Box_Event_notification_disable: Messaging_Box_Event = 15; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary notification_disable
 * @constant
 * @type {number}
 */
export
const notification_disable: Messaging_Box_Event = Messaging_Box_Event_notification_disable; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary Messaging_Box_Event_disconnect
 * @constant
 * @type {number}
 */
export
const Messaging_Box_Event_disconnect: Messaging_Box_Event = 16; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary disconnect
 * @constant
 * @type {number}
 */
export
const disconnect: Messaging_Box_Event = Messaging_Box_Event_disconnect; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary Messaging_Box_Event_connect
 * @constant
 * @type {number}
 */
export
const Messaging_Box_Event_connect: Messaging_Box_Event = 17; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary connect
 * @constant
 * @type {number}
 */
export
const connect: Messaging_Box_Event = Messaging_Box_Event_connect; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary Messaging_Box_Event_unknown
 * @constant
 * @type {number}
 */
export
const Messaging_Box_Event_unknown: Messaging_Box_Event = 0; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary unknown
 * @constant
 * @type {number}
 */
export
const unknown: Messaging_Box_Event = Messaging_Box_Event_unknown; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary Messaging_Box_Event_greeting_play
 * @constant
 * @type {number}
 */
export
const Messaging_Box_Event_greeting_play: Messaging_Box_Event = 18; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary greeting_play
 * @constant
 * @type {number}
 */
export
const greeting_play: Messaging_Box_Event = Messaging_Box_Event_greeting_play; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary Messaging_Box_Event_language_change
 * @constant
 * @type {number}
 */
export
const Messaging_Box_Event_language_change: Messaging_Box_Event = 19; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary language_change
 * @constant
 * @type {number}
 */
export
const language_change: Messaging_Box_Event = Messaging_Box_Event_language_change; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary Messaging_Box_Event_pin_security_enable
 * @constant
 * @type {number}
 */
export
const Messaging_Box_Event_pin_security_enable: Messaging_Box_Event = 20; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary pin_security_enable
 * @constant
 * @type {number}
 */
export
const pin_security_enable: Messaging_Box_Event = Messaging_Box_Event_pin_security_enable; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary Messaging_Box_Event_pin_security_disable
 * @constant
 * @type {number}
 */
export
const Messaging_Box_Event_pin_security_disable: Messaging_Box_Event = 21; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary pin_security_disable
 * @constant
 * @type {number}
 */
export
const pin_security_disable: Messaging_Box_Event = Messaging_Box_Event_pin_security_disable; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary Messaging_Box_Event_personal_operator_add
 * @constant
 * @type {number}
 */
export
const Messaging_Box_Event_personal_operator_add: Messaging_Box_Event = 22; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary personal_operator_add
 * @constant
 * @type {number}
 */
export
const personal_operator_add: Messaging_Box_Event = Messaging_Box_Event_personal_operator_add; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary Messaging_Box_Event_personal_operator_change
 * @constant
 * @type {number}
 */
export
const Messaging_Box_Event_personal_operator_change: Messaging_Box_Event = 23; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary personal_operator_change
 * @constant
 * @type {number}
 */
export
const personal_operator_change: Messaging_Box_Event = Messaging_Box_Event_personal_operator_change; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary Messaging_Box_Event_personal_operator_remove
 * @constant
 * @type {number}
 */
export
const Messaging_Box_Event_personal_operator_remove: Messaging_Box_Event = 24; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary personal_operator_remove
 * @constant
 * @type {number}
 */
export
const personal_operator_remove: Messaging_Box_Event = Messaging_Box_Event_personal_operator_remove; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary Messaging_Box_Event_additional_destination_add
 * @constant
 * @type {number}
 */
export
const Messaging_Box_Event_additional_destination_add: Messaging_Box_Event = 25; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary additional_destination_add
 * @constant
 * @type {number}
 */
export
const additional_destination_add: Messaging_Box_Event = Messaging_Box_Event_additional_destination_add; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary Messaging_Box_Event_additional_destination_change
 * @constant
 * @type {number}
 */
export
const Messaging_Box_Event_additional_destination_change: Messaging_Box_Event = 26; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary additional_destination_change
 * @constant
 * @type {number}
 */
export
const additional_destination_change: Messaging_Box_Event = Messaging_Box_Event_additional_destination_change; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary Messaging_Box_Event_additional_destination_remove
 * @constant
 * @type {number}
 */
export
const Messaging_Box_Event_additional_destination_remove: Messaging_Box_Event = 27; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary additional_destination_remove
 * @constant
 * @type {number}
 */
export
const additional_destination_remove: Messaging_Box_Event = Messaging_Box_Event_additional_destination_remove; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary Messaging_Box_Event_auto_play_enable
 * @constant
 * @type {number}
 */
export
const Messaging_Box_Event_auto_play_enable: Messaging_Box_Event = 28; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary auto_play_enable
 * @constant
 * @type {number}
 */
export
const auto_play_enable: Messaging_Box_Event = Messaging_Box_Event_auto_play_enable; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary Messaging_Box_Event_auto_play_disable
 * @constant
 * @type {number}
 */
export
const Messaging_Box_Event_auto_play_disable: Messaging_Box_Event = 29; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary auto_play_disable
 * @constant
 * @type {number}
 */
export
const auto_play_disable: Messaging_Box_Event = Messaging_Box_Event_auto_play_disable; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary Messaging_Box_Event_header_play_enable
 * @constant
 * @type {number}
 */
export
const Messaging_Box_Event_header_play_enable: Messaging_Box_Event = 30; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary header_play_enable
 * @constant
 * @type {number}
 */
export
const header_play_enable: Messaging_Box_Event = Messaging_Box_Event_header_play_enable; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary Messaging_Box_Event_header_play_disable
 * @constant
 * @type {number}
 */
export
const Messaging_Box_Event_header_play_disable: Messaging_Box_Event = 31; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary header_play_disable
 * @constant
 * @type {number}
 */
export
const header_play_disable: Messaging_Box_Event = Messaging_Box_Event_header_play_disable; /* SHORT_NAMED_ENUMERATED_VALUE */

let _cached_decoder_for_Messaging_Box_Event: $.ASN1Decoder<Messaging_Box_Event> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) Messaging_Box_Event
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_Messaging_Box_Event (el: _Element): Messaging_Box_Event {
    if (!_cached_decoder_for_Messaging_Box_Event) { _cached_decoder_for_Messaging_Box_Event = $._decodeEnumerated; }
    return _cached_decoder_for_Messaging_Box_Event(el);
}

let _cached_encoder_for_Messaging_Box_Event: $.ASN1Encoder<Messaging_Box_Event> | null = null;

/**
 * @summary Encodes a(n) Messaging_Box_Event into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The Messaging_Box_Event, encoded as an ASN.1 Element.
 */
export
function _encode_Messaging_Box_Event (value: Messaging_Box_Event, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_Messaging_Box_Event) { _cached_encoder_for_Messaging_Box_Event = $._encodeEnumerated; }
    return _cached_encoder_for_Messaging_Box_Event(value, elGetter);
}


/* eslint-enable */
