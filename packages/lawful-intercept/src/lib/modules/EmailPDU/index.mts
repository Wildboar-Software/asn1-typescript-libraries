/**
 * Service-specific HI2 and HI3 for messaging, from ETSI TS 102 232-2
 * V3.16.1 (2023-03).
 *
 * Email events use `EmailIRI` and `EmailCC`. Unified-messaging events
 * use `MessagingIRI` with `MessagingCC` or `MessagingMMCC`. A national
 * agreement may allow email to use the messaging structures instead.
 * The module object identifier is `emailPDUObjId`.
 *
 * ETSI TS 102 232-2 V3.16.1 (2023-03), clauses 1, 4.2, 6, and 8.
 * https://www.etsi.org/deliver/etsi_ts/102200_102299/10223202/03.16.01_60/ts_10223202v031601p.pdf
 *
 * Short named bits, integers, and enumeration items omitted because the
 * same short name is declared more than once in this module:
 * `delete_`, `none`, `operation_failed`, `operation_succeeded`, `read`, `unknown`
 */
export {
    type AAAInformation,
    _decode_AAAInformation,
    _encode_AAAInformation,
} from "./AAAInformation.ta.mjs";

export {
    type AAAResult,
    AAAResult_aAAFailed,
    AAAResult_aAASucceeded,
    AAAResult_resultUnknown,
    _decode_AAAResult,
    _encode_AAAResult,
    _enum_for_AAAResult,
    aAAFailed,
    aAASucceeded,
    resultUnknown,
} from "./AAAResult.ta.mjs";

export {
    type AAAauthMethod,
    AAAauthMethod_cramMD5,
    AAAauthMethod_digestMD5,
    AAAauthMethod_undefinedAuthMethod,
    _decode_AAAauthMethod,
    _encode_AAAauthMethod,
    _enum_for_AAAauthMethod,
    cramMD5,
    digestMD5,
    undefinedAuthMethod,
} from "./AAAauthMethod.ta.mjs";

export {
    ASMTPAAAInformation,
    _decode_ASMTPAAAInformation,
    _encode_ASMTPAAAInformation,
    _extension_additions_list_spec_for_ASMTPAAAInformation,
    _root_component_type_list_1_spec_for_ASMTPAAAInformation,
    _root_component_type_list_2_spec_for_ASMTPAAAInformation,
} from "./ASMTPAAAInformation.ta.mjs";

export {
    type E_mail_Address_List,
    _decode_E_mail_Address_List,
    _encode_E_mail_Address_List,
} from "./E-mail-Address-List.ta.mjs";

export {
    type E_mail_Event,
    E_mail_Event_e_mail_download,
    E_mail_Event_e_mail_logoff,
    E_mail_Event_e_mail_logon,
    E_mail_Event_e_mail_logon_attempt,
    E_mail_Event_e_mail_logon_failure,
    E_mail_Event_e_mail_partial_download,
    E_mail_Event_e_mail_receive,
    E_mail_Event_e_mail_send,
    E_mail_Event_e_mail_upload,
    _decode_E_mail_Event,
    _encode_E_mail_Event,
    _enum_for_E_mail_Event,
    e_mail_download,
    e_mail_logoff,
    e_mail_logon,
    e_mail_logon_attempt,
    e_mail_logon_failure,
    e_mail_partial_download,
    e_mail_receive,
    e_mail_send,
    e_mail_upload,
} from "./E-mail-Event.ta.mjs";

export {
    type E_mail_Protocol,
    E_mail_Protocol_imap4,
    E_mail_Protocol_pop3,
    E_mail_Protocol_smtp,
    E_mail_Protocol_undefined,
    E_mail_Protocol_webmail,
    _decode_E_mail_Protocol,
    _encode_E_mail_Protocol,
    _enum_for_E_mail_Protocol,
    imap4,
    pop3,
    smtp,
    undefined,
    webmail,
} from "./E-mail-Protocol.ta.mjs";

export {
    E_mail_Status,
    E_mail_Status_operation_failed,
    E_mail_Status_operation_succeeded,
    E_mail_Status_status_unknown,
    _decode_E_mail_Status,
    _encode_E_mail_Status,
    _enum_for_E_mail_Status,
    status_unknown,
} from "./E-mail-Status.ta.mjs";

export {
    Email_Format,
    Email_Format_application,
    Email_Format_ip_packet,
    _decode_Email_Format,
    _encode_Email_Format,
    _enum_for_Email_Format,
    application,
    ip_packet,
} from "./Email-Format.ta.mjs";

export {
    EmailCC,
    _decode_EmailCC,
    _encode_EmailCC,
    _extension_additions_list_spec_for_EmailCC,
    _root_component_type_list_1_spec_for_EmailCC,
    _root_component_type_list_2_spec_for_EmailCC,
} from "./EmailCC.ta.mjs";

export {
    type EmailIRI_e_mail_Sender_Validity,
    EmailIRI_e_mail_Sender_Validity_nonvalidated,
    EmailIRI_e_mail_Sender_Validity_validated,
    _decode_EmailIRI_e_mail_Sender_Validity,
    _encode_EmailIRI_e_mail_Sender_Validity,
    _enum_for_EmailIRI_e_mail_Sender_Validity,
    nonvalidated,
    validated,
} from "./EmailIRI-e-mail-Sender-Validity.ta.mjs";

export {
    EmailIRI,
    _decode_EmailIRI,
    _encode_EmailIRI,
    _extension_additions_list_spec_for_EmailIRI,
    _root_component_type_list_1_spec_for_EmailIRI,
    _root_component_type_list_2_spec_for_EmailIRI,
} from "./EmailIRI.ta.mjs";

export {
    IMAPAAAInformation,
    _decode_IMAPAAAInformation,
    _encode_IMAPAAAInformation,
    _extension_additions_list_spec_for_IMAPAAAInformation,
    _root_component_type_list_1_spec_for_IMAPAAAInformation,
    _root_component_type_list_2_spec_for_IMAPAAAInformation,
} from "./IMAPAAAInformation.ta.mjs";

export {
    IP_Address_And_Port,
    _decode_IP_Address_And_Port,
    _encode_IP_Address_And_Port,
    _extension_additions_list_spec_for_IP_Address_And_Port,
    _root_component_type_list_1_spec_for_IP_Address_And_Port,
    _root_component_type_list_2_spec_for_IP_Address_And_Port,
} from "./IP-Address-And-Port.ta.mjs";

export {
    type Messaging_Box_Event,
    Messaging_Box_Event_activate,
    Messaging_Box_Event_additional_destination_add,
    Messaging_Box_Event_additional_destination_change,
    Messaging_Box_Event_additional_destination_remove,
    Messaging_Box_Event_auto_play_disable,
    Messaging_Box_Event_auto_play_enable,
    Messaging_Box_Event_connect,
    Messaging_Box_Event_deactivate,
    Messaging_Box_Event_delete_,
    Messaging_Box_Event_disconnect,
    Messaging_Box_Event_greeting_change,
    Messaging_Box_Event_greeting_delete,
    Messaging_Box_Event_greeting_disable,
    Messaging_Box_Event_greeting_enable,
    Messaging_Box_Event_greeting_play,
    Messaging_Box_Event_greeting_record,
    Messaging_Box_Event_header_play_disable,
    Messaging_Box_Event_header_play_enable,
    Messaging_Box_Event_language_change,
    Messaging_Box_Event_lock,
    Messaging_Box_Event_login,
    Messaging_Box_Event_logout,
    Messaging_Box_Event_notification_disable,
    Messaging_Box_Event_notification_enable,
    Messaging_Box_Event_personal_operator_add,
    Messaging_Box_Event_personal_operator_change,
    Messaging_Box_Event_personal_operator_remove,
    Messaging_Box_Event_pin_change,
    Messaging_Box_Event_pin_security_disable,
    Messaging_Box_Event_pin_security_enable,
    Messaging_Box_Event_unknown,
    Messaging_Box_Event_unlock,
    _decode_Messaging_Box_Event,
    _encode_Messaging_Box_Event,
    _enum_for_Messaging_Box_Event,
    activate,
    additional_destination_add,
    additional_destination_change,
    additional_destination_remove,
    auto_play_disable,
    auto_play_enable,
    connect,
    deactivate,
    disconnect,
    greeting_change,
    greeting_delete,
    greeting_disable,
    greeting_enable,
    greeting_play,
    greeting_record,
    header_play_disable,
    header_play_enable,
    language_change,
    lock,
    login,
    logout,
    notification_disable,
    notification_enable,
    personal_operator_add,
    personal_operator_change,
    personal_operator_remove,
    pin_change,
    pin_security_disable,
    pin_security_enable,
    unlock,
} from "./Messaging-Box-Event.ta.mjs";

export {
    type Messaging_Call_Event,
    Messaging_Call_Event_callout,
    _decode_Messaging_Call_Event,
    _encode_Messaging_Call_Event,
    _enum_for_Messaging_Call_Event,
    callout,
} from "./Messaging-Call-Event.ta.mjs";

export {
    type Messaging_Copy_Qualifier,
    Messaging_Copy_Qualifier_bcc,
    Messaging_Copy_Qualifier_cc,
    Messaging_Copy_Qualifier_none,
    Messaging_Copy_Qualifier_unknown,
    _decode_Messaging_Copy_Qualifier,
    _encode_Messaging_Copy_Qualifier,
    _enum_for_Messaging_Copy_Qualifier,
    bcc,
    cc,
} from "./Messaging-Copy-Qualifier.ta.mjs";

export {
    type Messaging_Event_Category,
    _decode_Messaging_Event_Category,
    _encode_Messaging_Event_Category,
} from "./Messaging-Event-Category.ta.mjs";

export {
    type Messaging_Event,
    Messaging_Event_calendar,
    Messaging_Event_contact,
    Messaging_Event_delete_,
    Messaging_Event_deposit,
    Messaging_Event_retrieve,
    Messaging_Event_save,
    Messaging_Event_slamdown,
    _decode_Messaging_Event,
    _encode_Messaging_Event,
    _enum_for_Messaging_Event,
    calendar,
    contact,
    deposit,
    retrieve,
    save,
    slamdown,
} from "./Messaging-Event.ta.mjs";

export {
    type Messaging_Notification_Event,
    Messaging_Notification_Event_email,
    Messaging_Notification_Event_fax_to_email,
    Messaging_Notification_Event_generic,
    Messaging_Notification_Event_mms,
    Messaging_Notification_Event_sms,
    Messaging_Notification_Event_sms_deposit,
    Messaging_Notification_Event_sms_pin_reminder,
    Messaging_Notification_Event_sms_slamdown,
    _decode_Messaging_Notification_Event,
    _encode_Messaging_Notification_Event,
    _enum_for_Messaging_Notification_Event,
    email,
    fax_to_email,
    generic,
    mms,
    sms,
    sms_deposit,
    sms_pin_reminder,
    sms_slamdown,
} from "./Messaging-Notification-Event.ta.mjs";

export {
    type Messaging_Party_Identity,
    _decode_Messaging_Party_Identity,
    _encode_Messaging_Party_Identity,
} from "./Messaging-Party-Identity.ta.mjs";

export {
    Messaging_Party_Information,
    _decode_Messaging_Party_Information,
    _encode_Messaging_Party_Information,
    _extension_additions_list_spec_for_Messaging_Party_Information,
    _root_component_type_list_1_spec_for_Messaging_Party_Information,
    _root_component_type_list_2_spec_for_Messaging_Party_Information,
} from "./Messaging-Party-Information.ta.mjs";

export {
    type Messaging_Party_Qualifier,
    Messaging_Party_Qualifier_associated_party,
    Messaging_Party_Qualifier_originating_party,
    Messaging_Party_Qualifier_terminating_party,
    Messaging_Party_Qualifier_unknown_party,
    _decode_Messaging_Party_Qualifier,
    _encode_Messaging_Party_Qualifier,
    _enum_for_Messaging_Party_Qualifier,
    associated_party,
    originating_party,
    terminating_party,
    unknown_party,
} from "./Messaging-Party-Qualifier.ta.mjs";

export {
    type Messaging_Party_Validity,
    Messaging_Party_Validity_trusted,
    Messaging_Party_Validity_unknown,
    Messaging_Party_Validity_untrusted,
    _decode_Messaging_Party_Validity,
    _encode_Messaging_Party_Validity,
    _enum_for_Messaging_Party_Validity,
    trusted,
    untrusted,
} from "./Messaging-Party-Validity.ta.mjs";

export {
    type Messaging_Property_Greeting_Type,
    Messaging_Property_Greeting_Type_absence,
    Messaging_Property_Greeting_Type_general,
    Messaging_Property_Greeting_Type_name,
    Messaging_Property_Greeting_Type_number_,
    Messaging_Property_Greeting_Type_personal,
    _decode_Messaging_Property_Greeting_Type,
    _encode_Messaging_Property_Greeting_Type,
    _enum_for_Messaging_Property_Greeting_Type,
    absence,
    general,
    name,
    number_,
    personal,
} from "./Messaging-Property-Greeting-Type.ta.mjs";

export {
    type Messaging_Property_Message_Status,
    Messaging_Property_Message_Status_deferred,
    Messaging_Property_Message_Status_deleted_without_being_read,
    Messaging_Property_Message_Status_delivery_condition_not_met,
    Messaging_Property_Message_Status_expired,
    Messaging_Property_Message_Status_forwarded,
    Messaging_Property_Message_Status_indeterminate,
    Messaging_Property_Message_Status_read,
    Messaging_Property_Message_Status_rejected,
    Messaging_Property_Message_Status_retrieved,
    Messaging_Property_Message_Status_unreachable,
    Messaging_Property_Message_Status_unrecognized,
    _decode_Messaging_Property_Message_Status,
    _encode_Messaging_Property_Message_Status,
    _enum_for_Messaging_Property_Message_Status,
    deferred,
    deleted_without_being_read,
    delivery_condition_not_met,
    expired,
    forwarded,
    indeterminate,
    rejected,
    retrieved,
    unreachable,
    unrecognized,
} from "./Messaging-Property-Message-Status.ta.mjs";

export {
    type Messaging_Property_Notification_Type,
    Messaging_Property_Notification_Type_allow_delivery_report,
    Messaging_Property_Notification_Type_delivery_report,
    Messaging_Property_Notification_Type_deny_delivery_report,
    Messaging_Property_Notification_Type_empty_call,
    Messaging_Property_Notification_Type_lost_call,
    Messaging_Property_Notification_Type_message_to_email,
    Messaging_Property_Notification_Type_message_wait_indication,
    Messaging_Property_Notification_Type_new_message_outcall,
    Messaging_Property_Notification_Type_new_message_reminder,
    Messaging_Property_Notification_Type_new_message_sms,
    Messaging_Property_Notification_Type_read_report,
    Messaging_Property_Notification_Type_voice_to_text,
    _decode_Messaging_Property_Notification_Type,
    _encode_Messaging_Property_Notification_Type,
    _enum_for_Messaging_Property_Notification_Type,
    allow_delivery_report,
    delivery_report,
    deny_delivery_report,
    empty_call,
    lost_call,
    message_to_email,
    message_wait_indication,
    new_message_outcall,
    new_message_reminder,
    new_message_sms,
    read_report,
    voice_to_text,
} from "./Messaging-Property-Notification-Type.ta.mjs";

export {
    type Messaging_Property_Priority,
    Messaging_Property_Priority_high,
    Messaging_Property_Priority_low,
    Messaging_Property_Priority_medium,
    Messaging_Property_Priority_private_,
    _decode_Messaging_Property_Priority,
    _encode_Messaging_Property_Priority,
    _enum_for_Messaging_Property_Priority,
    high,
    low,
    medium,
    private_,
} from "./Messaging-Property-Priority.ta.mjs";

export {
    type Messaging_Property_Requested_Reports,
    Messaging_Property_Requested_Reports_delivery,
    Messaging_Property_Requested_Reports_delivery_and_read,
    Messaging_Property_Requested_Reports_none,
    Messaging_Property_Requested_Reports_read,
    _decode_Messaging_Property_Requested_Reports,
    _encode_Messaging_Property_Requested_Reports,
    _enum_for_Messaging_Property_Requested_Reports,
    delivery,
    delivery_and_read,
} from "./Messaging-Property-Requested-Reports.ta.mjs";

export {
    type Messaging_Property,
    _decode_Messaging_Property,
    _encode_Messaging_Property,
} from "./Messaging-Property.ta.mjs";

export {
    type Messaging_Status,
    Messaging_Status_not_applicable,
    Messaging_Status_operation_cancelled,
    Messaging_Status_operation_failed,
    Messaging_Status_operation_lost,
    Messaging_Status_operation_started,
    Messaging_Status_operation_succeeded,
    Messaging_Status_unknown,
    _decode_Messaging_Status,
    _encode_Messaging_Status,
    _enum_for_Messaging_Status,
    not_applicable,
    operation_cancelled,
    operation_lost,
    operation_started,
} from "./Messaging-Status.ta.mjs";

export {
    type Messaging_System_Type,
    Messaging_System_Type_unified_messaging,
    _decode_Messaging_System_Type,
    _encode_Messaging_System_Type,
    _enum_for_Messaging_System_Type,
    unified_messaging,
} from "./Messaging-System-Type.ta.mjs";

export {
    type Messaging_Trigger,
    Messaging_Trigger_system,
    Messaging_Trigger_system_operator,
    Messaging_Trigger_unknown,
    Messaging_Trigger_user,
    Messaging_Trigger_user_agent,
    _decode_Messaging_Trigger,
    _encode_Messaging_Trigger,
    _enum_for_Messaging_Trigger,
    system,
    system_operator,
    user,
    user_agent,
} from "./Messaging-Trigger.ta.mjs";

export {
    MessagingCC,
    _decode_MessagingCC,
    _encode_MessagingCC,
    _extension_additions_list_spec_for_MessagingCC,
    _root_component_type_list_1_spec_for_MessagingCC,
    _root_component_type_list_2_spec_for_MessagingCC,
} from "./MessagingCC.ta.mjs";

export {
    MessagingIRI,
    _decode_MessagingIRI,
    _encode_MessagingIRI,
    _extension_additions_list_spec_for_MessagingIRI,
    _root_component_type_list_1_spec_for_MessagingIRI,
    _root_component_type_list_2_spec_for_MessagingIRI,
} from "./MessagingIRI.ta.mjs";

export {
    MessagingMMCC,
    _decode_MessagingMMCC,
    _encode_MessagingMMCC,
    _extension_additions_list_spec_for_MessagingMMCC,
    _root_component_type_list_1_spec_for_MessagingMMCC,
    _root_component_type_list_2_spec_for_MessagingMMCC,
} from "./MessagingMMCC.ta.mjs";

export {
    National_EM_ASN1parameters,
    _decode_National_EM_ASN1parameters,
    _encode_National_EM_ASN1parameters,
    _extension_additions_list_spec_for_National_EM_ASN1parameters,
    _root_component_type_list_1_spec_for_National_EM_ASN1parameters,
    _root_component_type_list_2_spec_for_National_EM_ASN1parameters,
} from "./National-EM-ASN1parameters.ta.mjs";

export {
    POP3AAAInformation,
    _decode_POP3AAAInformation,
    _encode_POP3AAAInformation,
    _extension_additions_list_spec_for_POP3AAAInformation,
    _root_component_type_list_1_spec_for_POP3AAAInformation,
    _root_component_type_list_2_spec_for_POP3AAAInformation,
} from "./POP3AAAInformation.ta.mjs";

export {
    emailCCObjId,
} from "./emailCCObjId.va.mjs";

export {
    emailIRIObjId,
} from "./emailIRIObjId.va.mjs";

export {
    emailPDUObjId,
} from "./emailPDUObjId.va.mjs";

export {
    messagingCCObjId,
} from "./messagingCCObjId.va.mjs";

export {
    messagingIRIObjId,
} from "./messagingIRIObjId.va.mjs";

export {
    messagingMMCCObjId,
} from "./messagingMMCCObjId.va.mjs";
