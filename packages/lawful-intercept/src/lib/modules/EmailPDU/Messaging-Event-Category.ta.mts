/* eslint-disable */
import {
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { Messaging_Event, _decode_Messaging_Event, _encode_Messaging_Event } from "../EmailPDU/Messaging-Event.ta.mjs";
// export { Messaging_Event, _enum_for_Messaging_Event, Messaging_Event_deposit /* IMPORTED_LONG_ENUMERATION_ITEM */, deposit /* IMPORTED_SHORT_ENUMERATION_ITEM */, Messaging_Event_retrieve /* IMPORTED_LONG_ENUMERATION_ITEM */, retrieve /* IMPORTED_SHORT_ENUMERATION_ITEM */, Messaging_Event_delete /* IMPORTED_LONG_ENUMERATION_ITEM */, Messaging_Event_save /* IMPORTED_LONG_ENUMERATION_ITEM */, save /* IMPORTED_SHORT_ENUMERATION_ITEM */, Messaging_Event_slamdown /* IMPORTED_LONG_ENUMERATION_ITEM */, slamdown /* IMPORTED_SHORT_ENUMERATION_ITEM */, Messaging_Event_calendar /* IMPORTED_LONG_ENUMERATION_ITEM */, calendar /* IMPORTED_SHORT_ENUMERATION_ITEM */, Messaging_Event_contact /* IMPORTED_LONG_ENUMERATION_ITEM */, contact /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_Messaging_Event, _encode_Messaging_Event } from "../EmailPDU/Messaging-Event.ta.mjs";
import { Messaging_Box_Event, _decode_Messaging_Box_Event, _encode_Messaging_Box_Event } from "../EmailPDU/Messaging-Box-Event.ta.mjs";
// export { Messaging_Box_Event, _enum_for_Messaging_Box_Event, Messaging_Box_Event_login /* IMPORTED_LONG_ENUMERATION_ITEM */, login /* IMPORTED_SHORT_ENUMERATION_ITEM */, Messaging_Box_Event_logout /* IMPORTED_LONG_ENUMERATION_ITEM */, logout /* IMPORTED_SHORT_ENUMERATION_ITEM */, Messaging_Box_Event_lock /* IMPORTED_LONG_ENUMERATION_ITEM */, lock /* IMPORTED_SHORT_ENUMERATION_ITEM */, Messaging_Box_Event_unlock /* IMPORTED_LONG_ENUMERATION_ITEM */, unlock /* IMPORTED_SHORT_ENUMERATION_ITEM */, Messaging_Box_Event_activate /* IMPORTED_LONG_ENUMERATION_ITEM */, activate /* IMPORTED_SHORT_ENUMERATION_ITEM */, Messaging_Box_Event_deactivate /* IMPORTED_LONG_ENUMERATION_ITEM */, deactivate /* IMPORTED_SHORT_ENUMERATION_ITEM */, Messaging_Box_Event_delete /* IMPORTED_LONG_ENUMERATION_ITEM */, Messaging_Box_Event_pin_change /* IMPORTED_LONG_ENUMERATION_ITEM */, pin_change /* IMPORTED_SHORT_ENUMERATION_ITEM */, Messaging_Box_Event_greeting_record /* IMPORTED_LONG_ENUMERATION_ITEM */, greeting_record /* IMPORTED_SHORT_ENUMERATION_ITEM */, Messaging_Box_Event_greeting_change /* IMPORTED_LONG_ENUMERATION_ITEM */, greeting_change /* IMPORTED_SHORT_ENUMERATION_ITEM */, Messaging_Box_Event_greeting_delete /* IMPORTED_LONG_ENUMERATION_ITEM */, greeting_delete /* IMPORTED_SHORT_ENUMERATION_ITEM */, Messaging_Box_Event_greeting_enable /* IMPORTED_LONG_ENUMERATION_ITEM */, greeting_enable /* IMPORTED_SHORT_ENUMERATION_ITEM */, Messaging_Box_Event_greeting_disable /* IMPORTED_LONG_ENUMERATION_ITEM */, greeting_disable /* IMPORTED_SHORT_ENUMERATION_ITEM */, Messaging_Box_Event_notification_enable /* IMPORTED_LONG_ENUMERATION_ITEM */, notification_enable /* IMPORTED_SHORT_ENUMERATION_ITEM */, Messaging_Box_Event_notification_disable /* IMPORTED_LONG_ENUMERATION_ITEM */, notification_disable /* IMPORTED_SHORT_ENUMERATION_ITEM */, Messaging_Box_Event_disconnect /* IMPORTED_LONG_ENUMERATION_ITEM */, disconnect /* IMPORTED_SHORT_ENUMERATION_ITEM */, Messaging_Box_Event_connect /* IMPORTED_LONG_ENUMERATION_ITEM */, connect /* IMPORTED_SHORT_ENUMERATION_ITEM */, Messaging_Box_Event_unknown /* IMPORTED_LONG_ENUMERATION_ITEM */, unknown /* IMPORTED_SHORT_ENUMERATION_ITEM */, Messaging_Box_Event_greeting_play /* IMPORTED_LONG_ENUMERATION_ITEM */, greeting_play /* IMPORTED_SHORT_ENUMERATION_ITEM */, Messaging_Box_Event_language_change /* IMPORTED_LONG_ENUMERATION_ITEM */, language_change /* IMPORTED_SHORT_ENUMERATION_ITEM */, Messaging_Box_Event_pin_security_enable /* IMPORTED_LONG_ENUMERATION_ITEM */, pin_security_enable /* IMPORTED_SHORT_ENUMERATION_ITEM */, Messaging_Box_Event_pin_security_disable /* IMPORTED_LONG_ENUMERATION_ITEM */, pin_security_disable /* IMPORTED_SHORT_ENUMERATION_ITEM */, Messaging_Box_Event_personal_operator_add /* IMPORTED_LONG_ENUMERATION_ITEM */, personal_operator_add /* IMPORTED_SHORT_ENUMERATION_ITEM */, Messaging_Box_Event_personal_operator_change /* IMPORTED_LONG_ENUMERATION_ITEM */, personal_operator_change /* IMPORTED_SHORT_ENUMERATION_ITEM */, Messaging_Box_Event_personal_operator_remove /* IMPORTED_LONG_ENUMERATION_ITEM */, personal_operator_remove /* IMPORTED_SHORT_ENUMERATION_ITEM */, Messaging_Box_Event_additional_destination_add /* IMPORTED_LONG_ENUMERATION_ITEM */, additional_destination_add /* IMPORTED_SHORT_ENUMERATION_ITEM */, Messaging_Box_Event_additional_destination_change /* IMPORTED_LONG_ENUMERATION_ITEM */, additional_destination_change /* IMPORTED_SHORT_ENUMERATION_ITEM */, Messaging_Box_Event_additional_destination_remove /* IMPORTED_LONG_ENUMERATION_ITEM */, additional_destination_remove /* IMPORTED_SHORT_ENUMERATION_ITEM */, Messaging_Box_Event_auto_play_enable /* IMPORTED_LONG_ENUMERATION_ITEM */, auto_play_enable /* IMPORTED_SHORT_ENUMERATION_ITEM */, Messaging_Box_Event_auto_play_disable /* IMPORTED_LONG_ENUMERATION_ITEM */, auto_play_disable /* IMPORTED_SHORT_ENUMERATION_ITEM */, Messaging_Box_Event_header_play_enable /* IMPORTED_LONG_ENUMERATION_ITEM */, header_play_enable /* IMPORTED_SHORT_ENUMERATION_ITEM */, Messaging_Box_Event_header_play_disable /* IMPORTED_LONG_ENUMERATION_ITEM */, header_play_disable /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_Messaging_Box_Event, _encode_Messaging_Box_Event } from "../EmailPDU/Messaging-Box-Event.ta.mjs";
import { Messaging_Notification_Event, _decode_Messaging_Notification_Event, _encode_Messaging_Notification_Event } from "../EmailPDU/Messaging-Notification-Event.ta.mjs";
// export { Messaging_Notification_Event, _enum_for_Messaging_Notification_Event, Messaging_Notification_Event_sms /* IMPORTED_LONG_ENUMERATION_ITEM */, sms /* IMPORTED_SHORT_ENUMERATION_ITEM */, Messaging_Notification_Event_sms_deposit /* IMPORTED_LONG_ENUMERATION_ITEM */, sms_deposit /* IMPORTED_SHORT_ENUMERATION_ITEM */, Messaging_Notification_Event_sms_slamdown /* IMPORTED_LONG_ENUMERATION_ITEM */, sms_slamdown /* IMPORTED_SHORT_ENUMERATION_ITEM */, Messaging_Notification_Event_sms_pin_reminder /* IMPORTED_LONG_ENUMERATION_ITEM */, sms_pin_reminder /* IMPORTED_SHORT_ENUMERATION_ITEM */, Messaging_Notification_Event_email /* IMPORTED_LONG_ENUMERATION_ITEM */, email /* IMPORTED_SHORT_ENUMERATION_ITEM */, Messaging_Notification_Event_fax_to_email /* IMPORTED_LONG_ENUMERATION_ITEM */, fax_to_email /* IMPORTED_SHORT_ENUMERATION_ITEM */, Messaging_Notification_Event_mms /* IMPORTED_LONG_ENUMERATION_ITEM */, mms /* IMPORTED_SHORT_ENUMERATION_ITEM */, Messaging_Notification_Event_generic /* IMPORTED_LONG_ENUMERATION_ITEM */, generic /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_Messaging_Notification_Event, _encode_Messaging_Notification_Event } from "../EmailPDU/Messaging-Notification-Event.ta.mjs";
import { Messaging_Call_Event, _decode_Messaging_Call_Event, _encode_Messaging_Call_Event } from "../EmailPDU/Messaging-Call-Event.ta.mjs";
// export { Messaging_Call_Event, _enum_for_Messaging_Call_Event, Messaging_Call_Event_callout /* IMPORTED_LONG_ENUMERATION_ITEM */, callout /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_Messaging_Call_Event, _encode_Messaging_Call_Event } from "../EmailPDU/Messaging-Call-Event.ta.mjs";


/**
 * @summary Messaging_Event_Category
 * @description
 *
 * Which family of unified-messaging operation a `MessagingIRI` reports. The UM
 * system's own event is translated into one of these alternatives. The choice
 * is extensible.
 *
 * ETSI TS 102 232-2 V3.16.1 (2023-03), clause 8.0 to 8.5.
 * https://www.etsi.org/deliver/etsi_ts/102200_102299/10223202/03.16.01_60/ts_10223202v031601p.pdf
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * Messaging-Event-Category  ::=  CHOICE
 * {
 *     message                     [0] Messaging-Event,
 *     message-box                 [1] Messaging-Box-Event,
 *     message-notification        [2] Messaging-Notification-Event,
 *     call                        [3] Messaging-Call-Event,
 *     ...
 * }
 * ```
 */
export
type Messaging_Event_Category =
    /**
     * A message was manipulated in the UM system: deposit, retrieve, delete,
     * save, slamdown, calendar, or contact. Clause 8.2.
     *
     * ETSI TS 102 232-2 V3.16.1 (2023-03), clause 8.2.
     */
    { message: Messaging_Event } /* CHOICE_ALT_ROOT */
    /**
     * An operation on the target's message box, including login, greeting, PIN,
     * and notification settings. Clause 8.3.
     *
     * ETSI TS 102 232-2 V3.16.1 (2023-03), clause 8.3.
     */
    | { message_box: Messaging_Box_Event } /* CHOICE_ALT_ROOT */
    /**
     * A notification was sent to the target. Clause 8.4.
     *
     * ETSI TS 102 232-2 V3.16.1 (2023-03), clause 8.4.
     */
    | { message_notification: Messaging_Notification_Event } /* CHOICE_ALT_ROOT */
    /**
     * A call event related to the messaging system. The only named event is
     * `callout`. Clause 8.5.
     *
     * ETSI TS 102 232-2 V3.16.1 (2023-03), clause 8.5.
     */
    | { call: Messaging_Call_Event } /* CHOICE_ALT_ROOT */
    | _Element /* CHOICE_ALT_UNRECOGNIZED_EXT */;

let _cached_decoder_for_Messaging_Event_Category: $.ASN1Decoder<Messaging_Event_Category> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) Messaging_Event_Category
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_Messaging_Event_Category (el: _Element): Messaging_Event_Category {
    if (!_cached_decoder_for_Messaging_Event_Category) { _cached_decoder_for_Messaging_Event_Category = $._decode_extensible_choice<Messaging_Event_Category>({
    "CONTEXT 0": [ "message", $._decode_implicit<Messaging_Event>(() => _decode_Messaging_Event) ],
    "CONTEXT 1": [ "message_box", $._decode_implicit<Messaging_Box_Event>(() => _decode_Messaging_Box_Event) ],
    "CONTEXT 2": [ "message_notification", $._decode_implicit<Messaging_Notification_Event>(() => _decode_Messaging_Notification_Event) ],
    "CONTEXT 3": [ "call", $._decode_implicit<Messaging_Call_Event>(() => _decode_Messaging_Call_Event) ]
}); }
    return _cached_decoder_for_Messaging_Event_Category(el);
}

let _cached_encoder_for_Messaging_Event_Category: $.ASN1Encoder<Messaging_Event_Category> | null = null;

/**
 * @summary Encodes a(n) Messaging_Event_Category into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The Messaging_Event_Category, encoded as an ASN.1 Element.
 */
export
function _encode_Messaging_Event_Category (value: Messaging_Event_Category, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_Messaging_Event_Category) { _cached_encoder_for_Messaging_Event_Category = $._encode_choice<Messaging_Event_Category>({
    "message": $._encode_implicit(_TagClass.context, 0, () => _encode_Messaging_Event, $.BER),
    "message_box": $._encode_implicit(_TagClass.context, 1, () => _encode_Messaging_Box_Event, $.BER),
    "message_notification": $._encode_implicit(_TagClass.context, 2, () => _encode_Messaging_Notification_Event, $.BER),
    "call": $._encode_implicit(_TagClass.context, 3, () => _encode_Messaging_Call_Event, $.BER),
}, $.BER); }
    return _cached_encoder_for_Messaging_Event_Category(value, elGetter);
}


/* eslint-enable */
