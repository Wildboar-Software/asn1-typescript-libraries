/* eslint-disable */
import {
    GeneralizedTime,
    OCTET_STRING,
    UTF8String,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    ASN1SizeError
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { Messaging_Property_Priority, _decode_Messaging_Property_Priority, _encode_Messaging_Property_Priority } from "../EmailPDU/Messaging-Property-Priority.ta.mjs";
// export { Messaging_Property_Priority, _enum_for_Messaging_Property_Priority, Messaging_Property_Priority_low /* IMPORTED_LONG_ENUMERATION_ITEM */, low /* IMPORTED_SHORT_ENUMERATION_ITEM */, Messaging_Property_Priority_medium /* IMPORTED_LONG_ENUMERATION_ITEM */, medium /* IMPORTED_SHORT_ENUMERATION_ITEM */, Messaging_Property_Priority_high /* IMPORTED_LONG_ENUMERATION_ITEM */, high /* IMPORTED_SHORT_ENUMERATION_ITEM */, Messaging_Property_Priority_private /* IMPORTED_LONG_ENUMERATION_ITEM */, private_ /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_Messaging_Property_Priority, _encode_Messaging_Property_Priority } from "../EmailPDU/Messaging-Property-Priority.ta.mjs";
import { Messaging_Property_Greeting_Type, _decode_Messaging_Property_Greeting_Type, _encode_Messaging_Property_Greeting_Type } from "../EmailPDU/Messaging-Property-Greeting-Type.ta.mjs";
// export { Messaging_Property_Greeting_Type, _enum_for_Messaging_Property_Greeting_Type, Messaging_Property_Greeting_Type_general /* IMPORTED_LONG_ENUMERATION_ITEM */, general /* IMPORTED_SHORT_ENUMERATION_ITEM */, Messaging_Property_Greeting_Type_name /* IMPORTED_LONG_ENUMERATION_ITEM */, name /* IMPORTED_SHORT_ENUMERATION_ITEM */, Messaging_Property_Greeting_Type_personal /* IMPORTED_LONG_ENUMERATION_ITEM */, personal /* IMPORTED_SHORT_ENUMERATION_ITEM */, Messaging_Property_Greeting_Type_absence /* IMPORTED_LONG_ENUMERATION_ITEM */, absence /* IMPORTED_SHORT_ENUMERATION_ITEM */, Messaging_Property_Greeting_Type_number /* IMPORTED_LONG_ENUMERATION_ITEM */, number_ /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_Messaging_Property_Greeting_Type, _encode_Messaging_Property_Greeting_Type } from "../EmailPDU/Messaging-Property-Greeting-Type.ta.mjs";
import { Messaging_Property_Notification_Type, _decode_Messaging_Property_Notification_Type, _encode_Messaging_Property_Notification_Type } from "../EmailPDU/Messaging-Property-Notification-Type.ta.mjs";
// export { Messaging_Property_Notification_Type, _enum_for_Messaging_Property_Notification_Type, Messaging_Property_Notification_Type_empty_call /* IMPORTED_LONG_ENUMERATION_ITEM */, empty_call /* IMPORTED_SHORT_ENUMERATION_ITEM */, Messaging_Property_Notification_Type_lost_call /* IMPORTED_LONG_ENUMERATION_ITEM */, lost_call /* IMPORTED_SHORT_ENUMERATION_ITEM */, Messaging_Property_Notification_Type_message_to_email /* IMPORTED_LONG_ENUMERATION_ITEM */, message_to_email /* IMPORTED_SHORT_ENUMERATION_ITEM */, Messaging_Property_Notification_Type_read_report /* IMPORTED_LONG_ENUMERATION_ITEM */, read_report /* IMPORTED_SHORT_ENUMERATION_ITEM */, Messaging_Property_Notification_Type_delivery_report /* IMPORTED_LONG_ENUMERATION_ITEM */, delivery_report /* IMPORTED_SHORT_ENUMERATION_ITEM */, Messaging_Property_Notification_Type_allow_delivery_report /* IMPORTED_LONG_ENUMERATION_ITEM */, allow_delivery_report /* IMPORTED_SHORT_ENUMERATION_ITEM */, Messaging_Property_Notification_Type_deny_delivery_report /* IMPORTED_LONG_ENUMERATION_ITEM */, deny_delivery_report /* IMPORTED_SHORT_ENUMERATION_ITEM */, Messaging_Property_Notification_Type_message_wait_indication /* IMPORTED_LONG_ENUMERATION_ITEM */, message_wait_indication /* IMPORTED_SHORT_ENUMERATION_ITEM */, Messaging_Property_Notification_Type_voice_to_text /* IMPORTED_LONG_ENUMERATION_ITEM */, voice_to_text /* IMPORTED_SHORT_ENUMERATION_ITEM */, Messaging_Property_Notification_Type_new_message_sms /* IMPORTED_LONG_ENUMERATION_ITEM */, new_message_sms /* IMPORTED_SHORT_ENUMERATION_ITEM */, Messaging_Property_Notification_Type_new_message_outcall /* IMPORTED_LONG_ENUMERATION_ITEM */, new_message_outcall /* IMPORTED_SHORT_ENUMERATION_ITEM */, Messaging_Property_Notification_Type_new_message_reminder /* IMPORTED_LONG_ENUMERATION_ITEM */, new_message_reminder /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_Messaging_Property_Notification_Type, _encode_Messaging_Property_Notification_Type } from "../EmailPDU/Messaging-Property-Notification-Type.ta.mjs";
import { Messaging_Property_Message_Status, _decode_Messaging_Property_Message_Status, _encode_Messaging_Property_Message_Status } from "../EmailPDU/Messaging-Property-Message-Status.ta.mjs";
// export { Messaging_Property_Message_Status, _enum_for_Messaging_Property_Message_Status, Messaging_Property_Message_Status_indeterminate /* IMPORTED_LONG_ENUMERATION_ITEM */, indeterminate /* IMPORTED_SHORT_ENUMERATION_ITEM */, Messaging_Property_Message_Status_expired /* IMPORTED_LONG_ENUMERATION_ITEM */, expired /* IMPORTED_SHORT_ENUMERATION_ITEM */, Messaging_Property_Message_Status_retrieved /* IMPORTED_LONG_ENUMERATION_ITEM */, retrieved /* IMPORTED_SHORT_ENUMERATION_ITEM */, Messaging_Property_Message_Status_rejected /* IMPORTED_LONG_ENUMERATION_ITEM */, rejected /* IMPORTED_SHORT_ENUMERATION_ITEM */, Messaging_Property_Message_Status_deferred /* IMPORTED_LONG_ENUMERATION_ITEM */, deferred /* IMPORTED_SHORT_ENUMERATION_ITEM */, Messaging_Property_Message_Status_forwarded /* IMPORTED_LONG_ENUMERATION_ITEM */, forwarded /* IMPORTED_SHORT_ENUMERATION_ITEM */, Messaging_Property_Message_Status_unrecognized /* IMPORTED_LONG_ENUMERATION_ITEM */, unrecognized /* IMPORTED_SHORT_ENUMERATION_ITEM */, Messaging_Property_Message_Status_unreachable /* IMPORTED_LONG_ENUMERATION_ITEM */, unreachable /* IMPORTED_SHORT_ENUMERATION_ITEM */, Messaging_Property_Message_Status_read /* IMPORTED_LONG_ENUMERATION_ITEM */, Messaging_Property_Message_Status_deleted_without_being_read /* IMPORTED_LONG_ENUMERATION_ITEM */, deleted_without_being_read /* IMPORTED_SHORT_ENUMERATION_ITEM */, Messaging_Property_Message_Status_delivery_condition_not_met /* IMPORTED_LONG_ENUMERATION_ITEM */, delivery_condition_not_met /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_Messaging_Property_Message_Status, _encode_Messaging_Property_Message_Status } from "../EmailPDU/Messaging-Property-Message-Status.ta.mjs";
import { Messaging_Property_Requested_Reports, _decode_Messaging_Property_Requested_Reports, _encode_Messaging_Property_Requested_Reports } from "../EmailPDU/Messaging-Property-Requested-Reports.ta.mjs";
// export { Messaging_Property_Requested_Reports, _enum_for_Messaging_Property_Requested_Reports, Messaging_Property_Requested_Reports_none /* IMPORTED_LONG_ENUMERATION_ITEM */, none /* IMPORTED_SHORT_ENUMERATION_ITEM */, Messaging_Property_Requested_Reports_delivery /* IMPORTED_LONG_ENUMERATION_ITEM */, delivery /* IMPORTED_SHORT_ENUMERATION_ITEM */, Messaging_Property_Requested_Reports_read /* IMPORTED_LONG_ENUMERATION_ITEM */, Messaging_Property_Requested_Reports_delivery_and_read /* IMPORTED_LONG_ENUMERATION_ITEM */, delivery_and_read /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_Messaging_Property_Requested_Reports, _encode_Messaging_Property_Requested_Reports } from "../EmailPDU/Messaging-Property-Requested-Reports.ta.mjs";


/**
 * @summary Messaging_Property
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * Messaging-Property  ::=  CHOICE
 * {
 *     pincode             [0] OCTET STRING (SIZE (1..32)),
 *     ...,
 *     priority            [1] Messaging-Property-Priority,
 *     greeting-type       [2] Messaging-Property-Greeting-Type,
 *     notification-type   [3] Messaging-Property-Notification-Type,
 *     language            [4] OCTET STRING,
 *         -- Language according to RFC 4646 [24]
 *     message-identifier  [5] OCTET STRING,
 *     subject             [6] UTF8String,
 *     user-agent          [7] UTF8String,
 *     password            [8] OCTET STRING,
 *     message-status      [9] Messaging-Property-Message-Status,
 *     requested-reports   [10] Messaging-Property-Requested-Reports,
 *     expires             [11] GeneralizedTime,
 *     message-date        [12] GeneralizedTime
 * }
 * ```
 */
export
type Messaging_Property =
    { pincode: OCTET_STRING } /* CHOICE_ALT_ROOT */
    | { priority: Messaging_Property_Priority } /* CHOICE_ALT_EXT */
    | { greeting_type: Messaging_Property_Greeting_Type } /* CHOICE_ALT_EXT */
    | { notification_type: Messaging_Property_Notification_Type } /* CHOICE_ALT_EXT */
    | { language: OCTET_STRING } /* CHOICE_ALT_EXT */
    | { message_identifier: OCTET_STRING } /* CHOICE_ALT_EXT */
    | { subject: UTF8String } /* CHOICE_ALT_EXT */
    | { user_agent: UTF8String } /* CHOICE_ALT_EXT */
    | { password: OCTET_STRING } /* CHOICE_ALT_EXT */
    | { message_status: Messaging_Property_Message_Status } /* CHOICE_ALT_EXT */
    | { requested_reports: Messaging_Property_Requested_Reports } /* CHOICE_ALT_EXT */
    | { expires: GeneralizedTime } /* CHOICE_ALT_EXT */
    | { message_date: GeneralizedTime } /* CHOICE_ALT_EXT */
    | _Element /* CHOICE_ALT_UNRECOGNIZED_EXT */;

let _cached_decoder_for_Messaging_Property: $.ASN1Decoder<Messaging_Property> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) Messaging_Property
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_Messaging_Property (el: _Element): Messaging_Property {
    if (!_cached_decoder_for_Messaging_Property) { _cached_decoder_for_Messaging_Property = $._decode_extensible_choice<Messaging_Property>({
    "CONTEXT 0": [ "pincode", $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString) ],
    "CONTEXT 1": [ "priority", $._decode_implicit<Messaging_Property_Priority>(() => _decode_Messaging_Property_Priority) ],
    "CONTEXT 2": [ "greeting_type", $._decode_implicit<Messaging_Property_Greeting_Type>(() => _decode_Messaging_Property_Greeting_Type) ],
    "CONTEXT 3": [ "notification_type", $._decode_implicit<Messaging_Property_Notification_Type>(() => _decode_Messaging_Property_Notification_Type) ],
    "CONTEXT 4": [ "language", $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString) ],
    "CONTEXT 5": [ "message_identifier", $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString) ],
    "CONTEXT 6": [ "subject", $._decode_implicit<UTF8String>(() => $._decodeUTF8String) ],
    "CONTEXT 7": [ "user_agent", $._decode_implicit<UTF8String>(() => $._decodeUTF8String) ],
    "CONTEXT 8": [ "password", $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString) ],
    "CONTEXT 9": [ "message_status", $._decode_implicit<Messaging_Property_Message_Status>(() => _decode_Messaging_Property_Message_Status) ],
    "CONTEXT 10": [ "requested_reports", $._decode_implicit<Messaging_Property_Requested_Reports>(() => _decode_Messaging_Property_Requested_Reports) ],
    "CONTEXT 11": [ "expires", $._decode_implicit<GeneralizedTime>(() => $._decodeGeneralizedTime) ],
    "CONTEXT 12": [ "message_date", $._decode_implicit<GeneralizedTime>(() => $._decodeGeneralizedTime) ]
}); }
    const _value = _cached_decoder_for_Messaging_Property(el);
    if ("pincode" in _value && _value.pincode !== undefined) {
        const _alt = _value.pincode;
        if (_alt.length < 1 || _alt.length > 32) {
            throw new ASN1SizeError("Messaging_Property.pincode violates SIZE constraint");
        }
    }
    return _value;
}

let _cached_encoder_for_Messaging_Property: $.ASN1Encoder<Messaging_Property> | null = null;

/**
 * @summary Encodes a(n) Messaging_Property into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The Messaging_Property, encoded as an ASN.1 Element.
 */
export
function _encode_Messaging_Property (value: Messaging_Property, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_Messaging_Property) { _cached_encoder_for_Messaging_Property = $._encode_choice<Messaging_Property>({
    "pincode": $._encode_implicit(_TagClass.context, 0, () => $._encodeOctetString, $.BER),
    "priority": $._encode_implicit(_TagClass.context, 1, () => _encode_Messaging_Property_Priority, $.BER),
    "greeting_type": $._encode_implicit(_TagClass.context, 2, () => _encode_Messaging_Property_Greeting_Type, $.BER),
    "notification_type": $._encode_implicit(_TagClass.context, 3, () => _encode_Messaging_Property_Notification_Type, $.BER),
    "language": $._encode_implicit(_TagClass.context, 4, () => $._encodeOctetString, $.BER),
    "message_identifier": $._encode_implicit(_TagClass.context, 5, () => $._encodeOctetString, $.BER),
    "subject": $._encode_implicit(_TagClass.context, 6, () => $._encodeUTF8String, $.BER),
    "user_agent": $._encode_implicit(_TagClass.context, 7, () => $._encodeUTF8String, $.BER),
    "password": $._encode_implicit(_TagClass.context, 8, () => $._encodeOctetString, $.BER),
    "message_status": $._encode_implicit(_TagClass.context, 9, () => _encode_Messaging_Property_Message_Status, $.BER),
    "requested_reports": $._encode_implicit(_TagClass.context, 10, () => _encode_Messaging_Property_Requested_Reports, $.BER),
    "expires": $._encode_implicit(_TagClass.context, 11, () => $._encodeGeneralizedTime, $.BER),
    "message_date": $._encode_implicit(_TagClass.context, 12, () => $._encodeGeneralizedTime, $.BER),
}, $.BER); }
    return _cached_encoder_for_Messaging_Property(value, elGetter);
}


/* eslint-enable */
