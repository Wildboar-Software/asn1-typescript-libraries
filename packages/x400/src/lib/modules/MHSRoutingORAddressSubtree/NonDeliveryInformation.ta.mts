/* eslint-disable */
import {
    itu_t,
    itu_r,
    ccitt,
    iso,
    joint_iso_itu_t,
    joint_iso_ccitt,
    OPTIONAL,
    BOOLEAN,
    INTEGER,
    BIT_STRING,
    OCTET_STRING,
    NULL,
    OBJECT_IDENTIFIER,
    ObjectDescriptor,
    EXTERNAL,
    REAL,
    INSTANCE_OF,
    ENUMERATED,
    EMBEDDED_PDV,
    UTF8String,
    RELATIVE_OID,
    SEQUENCE,
    SEQUENCE_OF,
    SET,
    SET_OF,
    GraphicString,
    NumericString,
    VisibleString,
    PrintableString,
    ISO646String,
    TeletexString,
    GeneralString,
    T61String,
    UniversalString,
    VideotexString,
    BMPString,
    IA5String,
    CharacterString,
    UTCTime,
    GeneralizedTime,
    TIME,
    DATE,
    TIME_OF_DAY,
    DATE_TIME,
    DURATION,
    OID_IRI,
    RELATIVE_OID_IRI,
    TRUE,
    FALSE,
    TRUE_BIT,
    FALSE_BIT,
    PLUS_INFINITY,
    MINUS_INFINITY,
    NOT_A_NUMBER,
    TYPE_IDENTIFIER,
    ABSTRACT_SYNTAX,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    ASN1Construction as _Construction,
    ASN1UniversalType as _UniversalType,
    ObjectIdentifier as _OID,
    External as _External,
    EmbeddedPDV as _PDV,
    ASN1ConstructionError as _ConstructionError,
} from 'asn1-ts';
import * as $ from 'asn1-ts/dist/functional.mjs';
import {
    NonDeliveryReasonCode,
    NonDeliveryReasonCode_transfer_failure /* IMPORTED_LONG_NAMED_INTEGER */,
    transfer_failure /* IMPORTED_SHORT_NAMED_INTEGER */,
    NonDeliveryReasonCode_unable_to_transfer /* IMPORTED_LONG_NAMED_INTEGER */,
    unable_to_transfer /* IMPORTED_SHORT_NAMED_INTEGER */,
    NonDeliveryReasonCode_conversion_not_performed /* IMPORTED_LONG_NAMED_INTEGER */,
    conversion_not_performed /* IMPORTED_SHORT_NAMED_INTEGER */,
    NonDeliveryReasonCode_physical_rendition_not_performed /* IMPORTED_LONG_NAMED_INTEGER */,
    physical_rendition_not_performed /* IMPORTED_SHORT_NAMED_INTEGER */,
    NonDeliveryReasonCode_physical_delivery_not_performed /* IMPORTED_LONG_NAMED_INTEGER */,
    physical_delivery_not_performed /* IMPORTED_SHORT_NAMED_INTEGER */,
    NonDeliveryReasonCode_restricted_delivery /* IMPORTED_LONG_NAMED_INTEGER */,
    restricted_delivery /* IMPORTED_SHORT_NAMED_INTEGER */,
    NonDeliveryReasonCode_directory_operation_unsuccessful /* IMPORTED_LONG_NAMED_INTEGER */,
    directory_operation_unsuccessful /* IMPORTED_SHORT_NAMED_INTEGER */,
    NonDeliveryReasonCode_deferred_delivery_not_performed /* IMPORTED_LONG_NAMED_INTEGER */,
    deferred_delivery_not_performed /* IMPORTED_SHORT_NAMED_INTEGER */,
    NonDeliveryReasonCode_transfer_failure_for_security_reason /* IMPORTED_LONG_NAMED_INTEGER */,
    transfer_failure_for_security_reason /* IMPORTED_SHORT_NAMED_INTEGER */,
    _decode_NonDeliveryReasonCode,
    _encode_NonDeliveryReasonCode,
} from '../MTSAbstractService/NonDeliveryReasonCode.ta.mjs';
export {
    NonDeliveryReasonCode,
    NonDeliveryReasonCode_transfer_failure /* IMPORTED_LONG_NAMED_INTEGER */,
    transfer_failure /* IMPORTED_SHORT_NAMED_INTEGER */,
    NonDeliveryReasonCode_unable_to_transfer /* IMPORTED_LONG_NAMED_INTEGER */,
    unable_to_transfer /* IMPORTED_SHORT_NAMED_INTEGER */,
    NonDeliveryReasonCode_conversion_not_performed /* IMPORTED_LONG_NAMED_INTEGER */,
    conversion_not_performed /* IMPORTED_SHORT_NAMED_INTEGER */,
    NonDeliveryReasonCode_physical_rendition_not_performed /* IMPORTED_LONG_NAMED_INTEGER */,
    physical_rendition_not_performed /* IMPORTED_SHORT_NAMED_INTEGER */,
    NonDeliveryReasonCode_physical_delivery_not_performed /* IMPORTED_LONG_NAMED_INTEGER */,
    physical_delivery_not_performed /* IMPORTED_SHORT_NAMED_INTEGER */,
    NonDeliveryReasonCode_restricted_delivery /* IMPORTED_LONG_NAMED_INTEGER */,
    restricted_delivery /* IMPORTED_SHORT_NAMED_INTEGER */,
    NonDeliveryReasonCode_directory_operation_unsuccessful /* IMPORTED_LONG_NAMED_INTEGER */,
    directory_operation_unsuccessful /* IMPORTED_SHORT_NAMED_INTEGER */,
    NonDeliveryReasonCode_deferred_delivery_not_performed /* IMPORTED_LONG_NAMED_INTEGER */,
    deferred_delivery_not_performed /* IMPORTED_SHORT_NAMED_INTEGER */,
    NonDeliveryReasonCode_transfer_failure_for_security_reason /* IMPORTED_LONG_NAMED_INTEGER */,
    transfer_failure_for_security_reason /* IMPORTED_SHORT_NAMED_INTEGER */,
    _decode_NonDeliveryReasonCode,
    _encode_NonDeliveryReasonCode,
} from '../MTSAbstractService/NonDeliveryReasonCode.ta.mjs';
import {
    NonDeliveryDiagnosticCode,
    NonDeliveryDiagnosticCode_unrecognised_OR_name /* IMPORTED_LONG_NAMED_INTEGER */,
    unrecognised_OR_name /* IMPORTED_SHORT_NAMED_INTEGER */,
    NonDeliveryDiagnosticCode_ambiguous_OR_name /* IMPORTED_LONG_NAMED_INTEGER */,
    ambiguous_OR_name /* IMPORTED_SHORT_NAMED_INTEGER */,
    NonDeliveryDiagnosticCode_mts_congestion /* IMPORTED_LONG_NAMED_INTEGER */,
    mts_congestion /* IMPORTED_SHORT_NAMED_INTEGER */,
    NonDeliveryDiagnosticCode_loop_detected /* IMPORTED_LONG_NAMED_INTEGER */,
    loop_detected /* IMPORTED_SHORT_NAMED_INTEGER */,
    NonDeliveryDiagnosticCode_recipient_unavailable /* IMPORTED_LONG_NAMED_INTEGER */,
    recipient_unavailable /* IMPORTED_SHORT_NAMED_INTEGER */,
    NonDeliveryDiagnosticCode_maximum_time_expired /* IMPORTED_LONG_NAMED_INTEGER */,
    maximum_time_expired /* IMPORTED_SHORT_NAMED_INTEGER */,
    NonDeliveryDiagnosticCode_encoded_information_types_unsupported /* IMPORTED_LONG_NAMED_INTEGER */,
    encoded_information_types_unsupported /* IMPORTED_SHORT_NAMED_INTEGER */,
    NonDeliveryDiagnosticCode_content_too_long /* IMPORTED_LONG_NAMED_INTEGER */,
    content_too_long /* IMPORTED_SHORT_NAMED_INTEGER */,
    NonDeliveryDiagnosticCode_conversion_impractical /* IMPORTED_LONG_NAMED_INTEGER */,
    conversion_impractical /* IMPORTED_SHORT_NAMED_INTEGER */,
    NonDeliveryDiagnosticCode_implicit_conversion_prohibited /* IMPORTED_LONG_NAMED_INTEGER */,
    implicit_conversion_prohibited /* IMPORTED_SHORT_NAMED_INTEGER */,
    NonDeliveryDiagnosticCode_implicit_conversion_not_subscribed /* IMPORTED_LONG_NAMED_INTEGER */,
    implicit_conversion_not_subscribed /* IMPORTED_SHORT_NAMED_INTEGER */,
    NonDeliveryDiagnosticCode_invalid_arguments /* IMPORTED_LONG_NAMED_INTEGER */,
    invalid_arguments /* IMPORTED_SHORT_NAMED_INTEGER */,
    NonDeliveryDiagnosticCode_content_syntax_error /* IMPORTED_LONG_NAMED_INTEGER */,
    content_syntax_error /* IMPORTED_SHORT_NAMED_INTEGER */,
    NonDeliveryDiagnosticCode_size_constraint_violation /* IMPORTED_LONG_NAMED_INTEGER */,
    size_constraint_violation /* IMPORTED_SHORT_NAMED_INTEGER */,
    NonDeliveryDiagnosticCode_protocol_violation /* IMPORTED_LONG_NAMED_INTEGER */,
    protocol_violation /* IMPORTED_SHORT_NAMED_INTEGER */,
    NonDeliveryDiagnosticCode_content_type_not_supported /* IMPORTED_LONG_NAMED_INTEGER */,
    content_type_not_supported /* IMPORTED_SHORT_NAMED_INTEGER */,
    NonDeliveryDiagnosticCode_too_many_recipients /* IMPORTED_LONG_NAMED_INTEGER */,
    too_many_recipients /* IMPORTED_SHORT_NAMED_INTEGER */,
    NonDeliveryDiagnosticCode_no_bilateral_agreement /* IMPORTED_LONG_NAMED_INTEGER */,
    no_bilateral_agreement /* IMPORTED_SHORT_NAMED_INTEGER */,
    NonDeliveryDiagnosticCode_unsupported_critical_function /* IMPORTED_LONG_NAMED_INTEGER */,
    unsupported_critical_function /* IMPORTED_SHORT_NAMED_INTEGER */,
    NonDeliveryDiagnosticCode_conversion_with_loss_prohibited /* IMPORTED_LONG_NAMED_INTEGER */,
    conversion_with_loss_prohibited /* IMPORTED_SHORT_NAMED_INTEGER */,
    NonDeliveryDiagnosticCode_line_too_long /* IMPORTED_LONG_NAMED_INTEGER */,
    line_too_long /* IMPORTED_SHORT_NAMED_INTEGER */,
    NonDeliveryDiagnosticCode_page_split /* IMPORTED_LONG_NAMED_INTEGER */,
    page_split /* IMPORTED_SHORT_NAMED_INTEGER */,
    NonDeliveryDiagnosticCode_pictorial_symbol_loss /* IMPORTED_LONG_NAMED_INTEGER */,
    pictorial_symbol_loss /* IMPORTED_SHORT_NAMED_INTEGER */,
    NonDeliveryDiagnosticCode_punctuation_symbol_loss /* IMPORTED_LONG_NAMED_INTEGER */,
    punctuation_symbol_loss /* IMPORTED_SHORT_NAMED_INTEGER */,
    NonDeliveryDiagnosticCode_alphabetic_character_loss /* IMPORTED_LONG_NAMED_INTEGER */,
    alphabetic_character_loss /* IMPORTED_SHORT_NAMED_INTEGER */,
    NonDeliveryDiagnosticCode_multiple_information_loss /* IMPORTED_LONG_NAMED_INTEGER */,
    multiple_information_loss /* IMPORTED_SHORT_NAMED_INTEGER */,
    NonDeliveryDiagnosticCode_recipient_reassignment_prohibited /* IMPORTED_LONG_NAMED_INTEGER */,
    recipient_reassignment_prohibited /* IMPORTED_SHORT_NAMED_INTEGER */,
    NonDeliveryDiagnosticCode_redirection_loop_detected /* IMPORTED_LONG_NAMED_INTEGER */,
    redirection_loop_detected /* IMPORTED_SHORT_NAMED_INTEGER */,
    NonDeliveryDiagnosticCode_dl_expansion_prohibited /* IMPORTED_LONG_NAMED_INTEGER */,
    dl_expansion_prohibited /* IMPORTED_SHORT_NAMED_INTEGER */,
    NonDeliveryDiagnosticCode_no_dl_submit_permission /* IMPORTED_LONG_NAMED_INTEGER */,
    no_dl_submit_permission /* IMPORTED_SHORT_NAMED_INTEGER */,
    NonDeliveryDiagnosticCode_dl_expansion_failure /* IMPORTED_LONG_NAMED_INTEGER */,
    dl_expansion_failure /* IMPORTED_SHORT_NAMED_INTEGER */,
    NonDeliveryDiagnosticCode_physical_rendition_attributes_not_supported /* IMPORTED_LONG_NAMED_INTEGER */,
    physical_rendition_attributes_not_supported /* IMPORTED_SHORT_NAMED_INTEGER */,
    NonDeliveryDiagnosticCode_undeliverable_mail_physical_delivery_address_incorrect /* IMPORTED_LONG_NAMED_INTEGER */,
    undeliverable_mail_physical_delivery_address_incorrect /* IMPORTED_SHORT_NAMED_INTEGER */,
    NonDeliveryDiagnosticCode_undeliverable_mail_physical_delivery_office_incorrect_or_invalid /* IMPORTED_LONG_NAMED_INTEGER */,
    undeliverable_mail_physical_delivery_office_incorrect_or_invalid /* IMPORTED_SHORT_NAMED_INTEGER */,
    NonDeliveryDiagnosticCode_undeliverable_mail_physical_delivery_address_incomplete /* IMPORTED_LONG_NAMED_INTEGER */,
    undeliverable_mail_physical_delivery_address_incomplete /* IMPORTED_SHORT_NAMED_INTEGER */,
    NonDeliveryDiagnosticCode_undeliverable_mail_recipient_unknown /* IMPORTED_LONG_NAMED_INTEGER */,
    undeliverable_mail_recipient_unknown /* IMPORTED_SHORT_NAMED_INTEGER */,
    NonDeliveryDiagnosticCode_undeliverable_mail_recipient_deceased /* IMPORTED_LONG_NAMED_INTEGER */,
    undeliverable_mail_recipient_deceased /* IMPORTED_SHORT_NAMED_INTEGER */,
    NonDeliveryDiagnosticCode_undeliverable_mail_organization_expired /* IMPORTED_LONG_NAMED_INTEGER */,
    undeliverable_mail_organization_expired /* IMPORTED_SHORT_NAMED_INTEGER */,
    NonDeliveryDiagnosticCode_undeliverable_mail_recipient_refused_to_accept /* IMPORTED_LONG_NAMED_INTEGER */,
    undeliverable_mail_recipient_refused_to_accept /* IMPORTED_SHORT_NAMED_INTEGER */,
    NonDeliveryDiagnosticCode_undeliverable_mail_recipient_did_not_claim /* IMPORTED_LONG_NAMED_INTEGER */,
    undeliverable_mail_recipient_did_not_claim /* IMPORTED_SHORT_NAMED_INTEGER */,
    NonDeliveryDiagnosticCode_undeliverable_mail_recipient_changed_address_permanently /* IMPORTED_LONG_NAMED_INTEGER */,
    undeliverable_mail_recipient_changed_address_permanently /* IMPORTED_SHORT_NAMED_INTEGER */,
    NonDeliveryDiagnosticCode_undeliverable_mail_recipient_changed_address_temporarily /* IMPORTED_LONG_NAMED_INTEGER */,
    undeliverable_mail_recipient_changed_address_temporarily /* IMPORTED_SHORT_NAMED_INTEGER */,
    NonDeliveryDiagnosticCode_undeliverable_mail_recipient_changed_temporary_address /* IMPORTED_LONG_NAMED_INTEGER */,
    undeliverable_mail_recipient_changed_temporary_address /* IMPORTED_SHORT_NAMED_INTEGER */,
    NonDeliveryDiagnosticCode_undeliverable_mail_new_address_unknown /* IMPORTED_LONG_NAMED_INTEGER */,
    undeliverable_mail_new_address_unknown /* IMPORTED_SHORT_NAMED_INTEGER */,
    NonDeliveryDiagnosticCode_undeliverable_mail_recipient_did_not_want_forwarding /* IMPORTED_LONG_NAMED_INTEGER */,
    undeliverable_mail_recipient_did_not_want_forwarding /* IMPORTED_SHORT_NAMED_INTEGER */,
    NonDeliveryDiagnosticCode_undeliverable_mail_originator_prohibited_forwarding /* IMPORTED_LONG_NAMED_INTEGER */,
    undeliverable_mail_originator_prohibited_forwarding /* IMPORTED_SHORT_NAMED_INTEGER */,
    NonDeliveryDiagnosticCode_secure_messaging_error /* IMPORTED_LONG_NAMED_INTEGER */,
    secure_messaging_error /* IMPORTED_SHORT_NAMED_INTEGER */,
    NonDeliveryDiagnosticCode_unable_to_downgrade /* IMPORTED_LONG_NAMED_INTEGER */,
    unable_to_downgrade /* IMPORTED_SHORT_NAMED_INTEGER */,
    NonDeliveryDiagnosticCode_unable_to_complete_transfer /* IMPORTED_LONG_NAMED_INTEGER */,
    unable_to_complete_transfer /* IMPORTED_SHORT_NAMED_INTEGER */,
    NonDeliveryDiagnosticCode_transfer_attempts_limit_reached /* IMPORTED_LONG_NAMED_INTEGER */,
    transfer_attempts_limit_reached /* IMPORTED_SHORT_NAMED_INTEGER */,
    NonDeliveryDiagnosticCode_incorrect_notification_type /* IMPORTED_LONG_NAMED_INTEGER */,
    incorrect_notification_type /* IMPORTED_SHORT_NAMED_INTEGER */,
    NonDeliveryDiagnosticCode_dl_expansion_prohibited_by_security_policy /* IMPORTED_LONG_NAMED_INTEGER */,
    dl_expansion_prohibited_by_security_policy /* IMPORTED_SHORT_NAMED_INTEGER */,
    NonDeliveryDiagnosticCode_forbidden_alternate_recipient /* IMPORTED_LONG_NAMED_INTEGER */,
    forbidden_alternate_recipient /* IMPORTED_SHORT_NAMED_INTEGER */,
    NonDeliveryDiagnosticCode_security_policy_violation /* IMPORTED_LONG_NAMED_INTEGER */,
    security_policy_violation /* IMPORTED_SHORT_NAMED_INTEGER */,
    NonDeliveryDiagnosticCode_security_services_refusal /* IMPORTED_LONG_NAMED_INTEGER */,
    security_services_refusal /* IMPORTED_SHORT_NAMED_INTEGER */,
    NonDeliveryDiagnosticCode_unauthorised_dl_member /* IMPORTED_LONG_NAMED_INTEGER */,
    unauthorised_dl_member /* IMPORTED_SHORT_NAMED_INTEGER */,
    NonDeliveryDiagnosticCode_unauthorised_dl_name /* IMPORTED_LONG_NAMED_INTEGER */,
    unauthorised_dl_name /* IMPORTED_SHORT_NAMED_INTEGER */,
    NonDeliveryDiagnosticCode_unauthorised_originally_intended_recipient_name /* IMPORTED_LONG_NAMED_INTEGER */,
    unauthorised_originally_intended_recipient_name /* IMPORTED_SHORT_NAMED_INTEGER */,
    NonDeliveryDiagnosticCode_unauthorised_originator_name /* IMPORTED_LONG_NAMED_INTEGER */,
    unauthorised_originator_name /* IMPORTED_SHORT_NAMED_INTEGER */,
    NonDeliveryDiagnosticCode_unauthorised_recipient_name /* IMPORTED_LONG_NAMED_INTEGER */,
    unauthorised_recipient_name /* IMPORTED_SHORT_NAMED_INTEGER */,
    NonDeliveryDiagnosticCode_unreliable_system /* IMPORTED_LONG_NAMED_INTEGER */,
    unreliable_system /* IMPORTED_SHORT_NAMED_INTEGER */,
    NonDeliveryDiagnosticCode_authentication_failure_on_subject_message /* IMPORTED_LONG_NAMED_INTEGER */,
    authentication_failure_on_subject_message /* IMPORTED_SHORT_NAMED_INTEGER */,
    NonDeliveryDiagnosticCode_decryption_failed /* IMPORTED_LONG_NAMED_INTEGER */,
    decryption_failed /* IMPORTED_SHORT_NAMED_INTEGER */,
    NonDeliveryDiagnosticCode_decryption_key_unobtainable /* IMPORTED_LONG_NAMED_INTEGER */,
    decryption_key_unobtainable /* IMPORTED_SHORT_NAMED_INTEGER */,
    NonDeliveryDiagnosticCode_double_envelope_creation_failure /* IMPORTED_LONG_NAMED_INTEGER */,
    double_envelope_creation_failure /* IMPORTED_SHORT_NAMED_INTEGER */,
    NonDeliveryDiagnosticCode_double_enveloping_message_restoring_failure /* IMPORTED_LONG_NAMED_INTEGER */,
    double_enveloping_message_restoring_failure /* IMPORTED_SHORT_NAMED_INTEGER */,
    NonDeliveryDiagnosticCode_failure_of_proof_of_message /* IMPORTED_LONG_NAMED_INTEGER */,
    failure_of_proof_of_message /* IMPORTED_SHORT_NAMED_INTEGER */,
    NonDeliveryDiagnosticCode_integrity_failure_on_subject_message /* IMPORTED_LONG_NAMED_INTEGER */,
    integrity_failure_on_subject_message /* IMPORTED_SHORT_NAMED_INTEGER */,
    NonDeliveryDiagnosticCode_invalid_security_label /* IMPORTED_LONG_NAMED_INTEGER */,
    invalid_security_label /* IMPORTED_SHORT_NAMED_INTEGER */,
    NonDeliveryDiagnosticCode_key_failure /* IMPORTED_LONG_NAMED_INTEGER */,
    key_failure /* IMPORTED_SHORT_NAMED_INTEGER */,
    NonDeliveryDiagnosticCode_mandatory_parameter_absence /* IMPORTED_LONG_NAMED_INTEGER */,
    mandatory_parameter_absence /* IMPORTED_SHORT_NAMED_INTEGER */,
    NonDeliveryDiagnosticCode_operation_security_failure /* IMPORTED_LONG_NAMED_INTEGER */,
    operation_security_failure /* IMPORTED_SHORT_NAMED_INTEGER */,
    NonDeliveryDiagnosticCode_repudiation_failure_of_message /* IMPORTED_LONG_NAMED_INTEGER */,
    repudiation_failure_of_message /* IMPORTED_SHORT_NAMED_INTEGER */,
    NonDeliveryDiagnosticCode_security_context_failure /* IMPORTED_LONG_NAMED_INTEGER */,
    security_context_failure /* IMPORTED_SHORT_NAMED_INTEGER */,
    NonDeliveryDiagnosticCode_token_decryption_failed /* IMPORTED_LONG_NAMED_INTEGER */,
    token_decryption_failed /* IMPORTED_SHORT_NAMED_INTEGER */,
    NonDeliveryDiagnosticCode_token_error /* IMPORTED_LONG_NAMED_INTEGER */,
    token_error /* IMPORTED_SHORT_NAMED_INTEGER */,
    NonDeliveryDiagnosticCode_unknown_security_label /* IMPORTED_LONG_NAMED_INTEGER */,
    unknown_security_label /* IMPORTED_SHORT_NAMED_INTEGER */,
    NonDeliveryDiagnosticCode_unsupported_algorithm_identifier /* IMPORTED_LONG_NAMED_INTEGER */,
    unsupported_algorithm_identifier /* IMPORTED_SHORT_NAMED_INTEGER */,
    NonDeliveryDiagnosticCode_unsupported_security_policy /* IMPORTED_LONG_NAMED_INTEGER */,
    unsupported_security_policy /* IMPORTED_SHORT_NAMED_INTEGER */,
    _decode_NonDeliveryDiagnosticCode,
    _encode_NonDeliveryDiagnosticCode,
} from '../MTSAbstractService/NonDeliveryDiagnosticCode.ta.mjs';
export {
    NonDeliveryDiagnosticCode,
    NonDeliveryDiagnosticCode_unrecognised_OR_name /* IMPORTED_LONG_NAMED_INTEGER */,
    unrecognised_OR_name /* IMPORTED_SHORT_NAMED_INTEGER */,
    NonDeliveryDiagnosticCode_ambiguous_OR_name /* IMPORTED_LONG_NAMED_INTEGER */,
    ambiguous_OR_name /* IMPORTED_SHORT_NAMED_INTEGER */,
    NonDeliveryDiagnosticCode_mts_congestion /* IMPORTED_LONG_NAMED_INTEGER */,
    mts_congestion /* IMPORTED_SHORT_NAMED_INTEGER */,
    NonDeliveryDiagnosticCode_loop_detected /* IMPORTED_LONG_NAMED_INTEGER */,
    loop_detected /* IMPORTED_SHORT_NAMED_INTEGER */,
    NonDeliveryDiagnosticCode_recipient_unavailable /* IMPORTED_LONG_NAMED_INTEGER */,
    recipient_unavailable /* IMPORTED_SHORT_NAMED_INTEGER */,
    NonDeliveryDiagnosticCode_maximum_time_expired /* IMPORTED_LONG_NAMED_INTEGER */,
    maximum_time_expired /* IMPORTED_SHORT_NAMED_INTEGER */,
    NonDeliveryDiagnosticCode_encoded_information_types_unsupported /* IMPORTED_LONG_NAMED_INTEGER */,
    encoded_information_types_unsupported /* IMPORTED_SHORT_NAMED_INTEGER */,
    NonDeliveryDiagnosticCode_content_too_long /* IMPORTED_LONG_NAMED_INTEGER */,
    content_too_long /* IMPORTED_SHORT_NAMED_INTEGER */,
    NonDeliveryDiagnosticCode_conversion_impractical /* IMPORTED_LONG_NAMED_INTEGER */,
    conversion_impractical /* IMPORTED_SHORT_NAMED_INTEGER */,
    NonDeliveryDiagnosticCode_implicit_conversion_prohibited /* IMPORTED_LONG_NAMED_INTEGER */,
    implicit_conversion_prohibited /* IMPORTED_SHORT_NAMED_INTEGER */,
    NonDeliveryDiagnosticCode_implicit_conversion_not_subscribed /* IMPORTED_LONG_NAMED_INTEGER */,
    implicit_conversion_not_subscribed /* IMPORTED_SHORT_NAMED_INTEGER */,
    NonDeliveryDiagnosticCode_invalid_arguments /* IMPORTED_LONG_NAMED_INTEGER */,
    invalid_arguments /* IMPORTED_SHORT_NAMED_INTEGER */,
    NonDeliveryDiagnosticCode_content_syntax_error /* IMPORTED_LONG_NAMED_INTEGER */,
    content_syntax_error /* IMPORTED_SHORT_NAMED_INTEGER */,
    NonDeliveryDiagnosticCode_size_constraint_violation /* IMPORTED_LONG_NAMED_INTEGER */,
    size_constraint_violation /* IMPORTED_SHORT_NAMED_INTEGER */,
    NonDeliveryDiagnosticCode_protocol_violation /* IMPORTED_LONG_NAMED_INTEGER */,
    protocol_violation /* IMPORTED_SHORT_NAMED_INTEGER */,
    NonDeliveryDiagnosticCode_content_type_not_supported /* IMPORTED_LONG_NAMED_INTEGER */,
    content_type_not_supported /* IMPORTED_SHORT_NAMED_INTEGER */,
    NonDeliveryDiagnosticCode_too_many_recipients /* IMPORTED_LONG_NAMED_INTEGER */,
    too_many_recipients /* IMPORTED_SHORT_NAMED_INTEGER */,
    NonDeliveryDiagnosticCode_no_bilateral_agreement /* IMPORTED_LONG_NAMED_INTEGER */,
    no_bilateral_agreement /* IMPORTED_SHORT_NAMED_INTEGER */,
    NonDeliveryDiagnosticCode_unsupported_critical_function /* IMPORTED_LONG_NAMED_INTEGER */,
    unsupported_critical_function /* IMPORTED_SHORT_NAMED_INTEGER */,
    NonDeliveryDiagnosticCode_conversion_with_loss_prohibited /* IMPORTED_LONG_NAMED_INTEGER */,
    conversion_with_loss_prohibited /* IMPORTED_SHORT_NAMED_INTEGER */,
    NonDeliveryDiagnosticCode_line_too_long /* IMPORTED_LONG_NAMED_INTEGER */,
    line_too_long /* IMPORTED_SHORT_NAMED_INTEGER */,
    NonDeliveryDiagnosticCode_page_split /* IMPORTED_LONG_NAMED_INTEGER */,
    page_split /* IMPORTED_SHORT_NAMED_INTEGER */,
    NonDeliveryDiagnosticCode_pictorial_symbol_loss /* IMPORTED_LONG_NAMED_INTEGER */,
    pictorial_symbol_loss /* IMPORTED_SHORT_NAMED_INTEGER */,
    NonDeliveryDiagnosticCode_punctuation_symbol_loss /* IMPORTED_LONG_NAMED_INTEGER */,
    punctuation_symbol_loss /* IMPORTED_SHORT_NAMED_INTEGER */,
    NonDeliveryDiagnosticCode_alphabetic_character_loss /* IMPORTED_LONG_NAMED_INTEGER */,
    alphabetic_character_loss /* IMPORTED_SHORT_NAMED_INTEGER */,
    NonDeliveryDiagnosticCode_multiple_information_loss /* IMPORTED_LONG_NAMED_INTEGER */,
    multiple_information_loss /* IMPORTED_SHORT_NAMED_INTEGER */,
    NonDeliveryDiagnosticCode_recipient_reassignment_prohibited /* IMPORTED_LONG_NAMED_INTEGER */,
    recipient_reassignment_prohibited /* IMPORTED_SHORT_NAMED_INTEGER */,
    NonDeliveryDiagnosticCode_redirection_loop_detected /* IMPORTED_LONG_NAMED_INTEGER */,
    redirection_loop_detected /* IMPORTED_SHORT_NAMED_INTEGER */,
    NonDeliveryDiagnosticCode_dl_expansion_prohibited /* IMPORTED_LONG_NAMED_INTEGER */,
    dl_expansion_prohibited /* IMPORTED_SHORT_NAMED_INTEGER */,
    NonDeliveryDiagnosticCode_no_dl_submit_permission /* IMPORTED_LONG_NAMED_INTEGER */,
    no_dl_submit_permission /* IMPORTED_SHORT_NAMED_INTEGER */,
    NonDeliveryDiagnosticCode_dl_expansion_failure /* IMPORTED_LONG_NAMED_INTEGER */,
    dl_expansion_failure /* IMPORTED_SHORT_NAMED_INTEGER */,
    NonDeliveryDiagnosticCode_physical_rendition_attributes_not_supported /* IMPORTED_LONG_NAMED_INTEGER */,
    physical_rendition_attributes_not_supported /* IMPORTED_SHORT_NAMED_INTEGER */,
    NonDeliveryDiagnosticCode_undeliverable_mail_physical_delivery_address_incorrect /* IMPORTED_LONG_NAMED_INTEGER */,
    undeliverable_mail_physical_delivery_address_incorrect /* IMPORTED_SHORT_NAMED_INTEGER */,
    NonDeliveryDiagnosticCode_undeliverable_mail_physical_delivery_office_incorrect_or_invalid /* IMPORTED_LONG_NAMED_INTEGER */,
    undeliverable_mail_physical_delivery_office_incorrect_or_invalid /* IMPORTED_SHORT_NAMED_INTEGER */,
    NonDeliveryDiagnosticCode_undeliverable_mail_physical_delivery_address_incomplete /* IMPORTED_LONG_NAMED_INTEGER */,
    undeliverable_mail_physical_delivery_address_incomplete /* IMPORTED_SHORT_NAMED_INTEGER */,
    NonDeliveryDiagnosticCode_undeliverable_mail_recipient_unknown /* IMPORTED_LONG_NAMED_INTEGER */,
    undeliverable_mail_recipient_unknown /* IMPORTED_SHORT_NAMED_INTEGER */,
    NonDeliveryDiagnosticCode_undeliverable_mail_recipient_deceased /* IMPORTED_LONG_NAMED_INTEGER */,
    undeliverable_mail_recipient_deceased /* IMPORTED_SHORT_NAMED_INTEGER */,
    NonDeliveryDiagnosticCode_undeliverable_mail_organization_expired /* IMPORTED_LONG_NAMED_INTEGER */,
    undeliverable_mail_organization_expired /* IMPORTED_SHORT_NAMED_INTEGER */,
    NonDeliveryDiagnosticCode_undeliverable_mail_recipient_refused_to_accept /* IMPORTED_LONG_NAMED_INTEGER */,
    undeliverable_mail_recipient_refused_to_accept /* IMPORTED_SHORT_NAMED_INTEGER */,
    NonDeliveryDiagnosticCode_undeliverable_mail_recipient_did_not_claim /* IMPORTED_LONG_NAMED_INTEGER */,
    undeliverable_mail_recipient_did_not_claim /* IMPORTED_SHORT_NAMED_INTEGER */,
    NonDeliveryDiagnosticCode_undeliverable_mail_recipient_changed_address_permanently /* IMPORTED_LONG_NAMED_INTEGER */,
    undeliverable_mail_recipient_changed_address_permanently /* IMPORTED_SHORT_NAMED_INTEGER */,
    NonDeliveryDiagnosticCode_undeliverable_mail_recipient_changed_address_temporarily /* IMPORTED_LONG_NAMED_INTEGER */,
    undeliverable_mail_recipient_changed_address_temporarily /* IMPORTED_SHORT_NAMED_INTEGER */,
    NonDeliveryDiagnosticCode_undeliverable_mail_recipient_changed_temporary_address /* IMPORTED_LONG_NAMED_INTEGER */,
    undeliverable_mail_recipient_changed_temporary_address /* IMPORTED_SHORT_NAMED_INTEGER */,
    NonDeliveryDiagnosticCode_undeliverable_mail_new_address_unknown /* IMPORTED_LONG_NAMED_INTEGER */,
    undeliverable_mail_new_address_unknown /* IMPORTED_SHORT_NAMED_INTEGER */,
    NonDeliveryDiagnosticCode_undeliverable_mail_recipient_did_not_want_forwarding /* IMPORTED_LONG_NAMED_INTEGER */,
    undeliverable_mail_recipient_did_not_want_forwarding /* IMPORTED_SHORT_NAMED_INTEGER */,
    NonDeliveryDiagnosticCode_undeliverable_mail_originator_prohibited_forwarding /* IMPORTED_LONG_NAMED_INTEGER */,
    undeliverable_mail_originator_prohibited_forwarding /* IMPORTED_SHORT_NAMED_INTEGER */,
    NonDeliveryDiagnosticCode_secure_messaging_error /* IMPORTED_LONG_NAMED_INTEGER */,
    secure_messaging_error /* IMPORTED_SHORT_NAMED_INTEGER */,
    NonDeliveryDiagnosticCode_unable_to_downgrade /* IMPORTED_LONG_NAMED_INTEGER */,
    unable_to_downgrade /* IMPORTED_SHORT_NAMED_INTEGER */,
    NonDeliveryDiagnosticCode_unable_to_complete_transfer /* IMPORTED_LONG_NAMED_INTEGER */,
    unable_to_complete_transfer /* IMPORTED_SHORT_NAMED_INTEGER */,
    NonDeliveryDiagnosticCode_transfer_attempts_limit_reached /* IMPORTED_LONG_NAMED_INTEGER */,
    transfer_attempts_limit_reached /* IMPORTED_SHORT_NAMED_INTEGER */,
    NonDeliveryDiagnosticCode_incorrect_notification_type /* IMPORTED_LONG_NAMED_INTEGER */,
    incorrect_notification_type /* IMPORTED_SHORT_NAMED_INTEGER */,
    NonDeliveryDiagnosticCode_dl_expansion_prohibited_by_security_policy /* IMPORTED_LONG_NAMED_INTEGER */,
    dl_expansion_prohibited_by_security_policy /* IMPORTED_SHORT_NAMED_INTEGER */,
    NonDeliveryDiagnosticCode_forbidden_alternate_recipient /* IMPORTED_LONG_NAMED_INTEGER */,
    forbidden_alternate_recipient /* IMPORTED_SHORT_NAMED_INTEGER */,
    NonDeliveryDiagnosticCode_security_policy_violation /* IMPORTED_LONG_NAMED_INTEGER */,
    security_policy_violation /* IMPORTED_SHORT_NAMED_INTEGER */,
    NonDeliveryDiagnosticCode_security_services_refusal /* IMPORTED_LONG_NAMED_INTEGER */,
    security_services_refusal /* IMPORTED_SHORT_NAMED_INTEGER */,
    NonDeliveryDiagnosticCode_unauthorised_dl_member /* IMPORTED_LONG_NAMED_INTEGER */,
    unauthorised_dl_member /* IMPORTED_SHORT_NAMED_INTEGER */,
    NonDeliveryDiagnosticCode_unauthorised_dl_name /* IMPORTED_LONG_NAMED_INTEGER */,
    unauthorised_dl_name /* IMPORTED_SHORT_NAMED_INTEGER */,
    NonDeliveryDiagnosticCode_unauthorised_originally_intended_recipient_name /* IMPORTED_LONG_NAMED_INTEGER */,
    unauthorised_originally_intended_recipient_name /* IMPORTED_SHORT_NAMED_INTEGER */,
    NonDeliveryDiagnosticCode_unauthorised_originator_name /* IMPORTED_LONG_NAMED_INTEGER */,
    unauthorised_originator_name /* IMPORTED_SHORT_NAMED_INTEGER */,
    NonDeliveryDiagnosticCode_unauthorised_recipient_name /* IMPORTED_LONG_NAMED_INTEGER */,
    unauthorised_recipient_name /* IMPORTED_SHORT_NAMED_INTEGER */,
    NonDeliveryDiagnosticCode_unreliable_system /* IMPORTED_LONG_NAMED_INTEGER */,
    unreliable_system /* IMPORTED_SHORT_NAMED_INTEGER */,
    NonDeliveryDiagnosticCode_authentication_failure_on_subject_message /* IMPORTED_LONG_NAMED_INTEGER */,
    authentication_failure_on_subject_message /* IMPORTED_SHORT_NAMED_INTEGER */,
    NonDeliveryDiagnosticCode_decryption_failed /* IMPORTED_LONG_NAMED_INTEGER */,
    decryption_failed /* IMPORTED_SHORT_NAMED_INTEGER */,
    NonDeliveryDiagnosticCode_decryption_key_unobtainable /* IMPORTED_LONG_NAMED_INTEGER */,
    decryption_key_unobtainable /* IMPORTED_SHORT_NAMED_INTEGER */,
    NonDeliveryDiagnosticCode_double_envelope_creation_failure /* IMPORTED_LONG_NAMED_INTEGER */,
    double_envelope_creation_failure /* IMPORTED_SHORT_NAMED_INTEGER */,
    NonDeliveryDiagnosticCode_double_enveloping_message_restoring_failure /* IMPORTED_LONG_NAMED_INTEGER */,
    double_enveloping_message_restoring_failure /* IMPORTED_SHORT_NAMED_INTEGER */,
    NonDeliveryDiagnosticCode_failure_of_proof_of_message /* IMPORTED_LONG_NAMED_INTEGER */,
    failure_of_proof_of_message /* IMPORTED_SHORT_NAMED_INTEGER */,
    NonDeliveryDiagnosticCode_integrity_failure_on_subject_message /* IMPORTED_LONG_NAMED_INTEGER */,
    integrity_failure_on_subject_message /* IMPORTED_SHORT_NAMED_INTEGER */,
    NonDeliveryDiagnosticCode_invalid_security_label /* IMPORTED_LONG_NAMED_INTEGER */,
    invalid_security_label /* IMPORTED_SHORT_NAMED_INTEGER */,
    NonDeliveryDiagnosticCode_key_failure /* IMPORTED_LONG_NAMED_INTEGER */,
    key_failure /* IMPORTED_SHORT_NAMED_INTEGER */,
    NonDeliveryDiagnosticCode_mandatory_parameter_absence /* IMPORTED_LONG_NAMED_INTEGER */,
    mandatory_parameter_absence /* IMPORTED_SHORT_NAMED_INTEGER */,
    NonDeliveryDiagnosticCode_operation_security_failure /* IMPORTED_LONG_NAMED_INTEGER */,
    operation_security_failure /* IMPORTED_SHORT_NAMED_INTEGER */,
    NonDeliveryDiagnosticCode_repudiation_failure_of_message /* IMPORTED_LONG_NAMED_INTEGER */,
    repudiation_failure_of_message /* IMPORTED_SHORT_NAMED_INTEGER */,
    NonDeliveryDiagnosticCode_security_context_failure /* IMPORTED_LONG_NAMED_INTEGER */,
    security_context_failure /* IMPORTED_SHORT_NAMED_INTEGER */,
    NonDeliveryDiagnosticCode_token_decryption_failed /* IMPORTED_LONG_NAMED_INTEGER */,
    token_decryption_failed /* IMPORTED_SHORT_NAMED_INTEGER */,
    NonDeliveryDiagnosticCode_token_error /* IMPORTED_LONG_NAMED_INTEGER */,
    token_error /* IMPORTED_SHORT_NAMED_INTEGER */,
    NonDeliveryDiagnosticCode_unknown_security_label /* IMPORTED_LONG_NAMED_INTEGER */,
    unknown_security_label /* IMPORTED_SHORT_NAMED_INTEGER */,
    NonDeliveryDiagnosticCode_unsupported_algorithm_identifier /* IMPORTED_LONG_NAMED_INTEGER */,
    unsupported_algorithm_identifier /* IMPORTED_SHORT_NAMED_INTEGER */,
    NonDeliveryDiagnosticCode_unsupported_security_policy /* IMPORTED_LONG_NAMED_INTEGER */,
    unsupported_security_policy /* IMPORTED_SHORT_NAMED_INTEGER */,
    _decode_NonDeliveryDiagnosticCode,
    _encode_NonDeliveryDiagnosticCode,
} from '../MTSAbstractService/NonDeliveryDiagnosticCode.ta.mjs';
import {
    SupplementaryInformation,
    _decode_SupplementaryInformation,
    _encode_SupplementaryInformation,
} from '../MTSAbstractService/SupplementaryInformation.ta.mjs';
export {
    SupplementaryInformation,
    _decode_SupplementaryInformation,
    _encode_SupplementaryInformation,
} from '../MTSAbstractService/SupplementaryInformation.ta.mjs';

/* START_OF_SYMBOL_DEFINITION NonDeliveryInformation */
/**
 * @summary NonDeliveryInformation
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * NonDeliveryInformation ::= SEQUENCE {
 *   reason                     [0]  NonDeliveryReasonCode,
 *   diagnostic                 [1]  NonDeliveryDiagnosticCode OPTIONAL,
 *   supplementary-information  [2]  SupplementaryInformation OPTIONAL
 * }
 * ```
 *
 * @class
 */
export class NonDeliveryInformation {
    constructor(
        /**
         * @summary `reason`.
         * @public
         * @readonly
         */
        readonly reason: NonDeliveryReasonCode,
        /**
         * @summary `diagnostic`.
         * @public
         * @readonly
         */
        readonly diagnostic: OPTIONAL<NonDeliveryDiagnosticCode>,
        /**
         * @summary `supplementary_information`.
         * @public
         * @readonly
         */
        readonly supplementary_information: OPTIONAL<SupplementaryInformation>
    ) {}

    /**
     * @summary Restructures an object into a NonDeliveryInformation
     * @description
     *
     * This takes an `object` and converts it to a `NonDeliveryInformation`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `NonDeliveryInformation`.
     * @returns {NonDeliveryInformation}
     */
    public static _from_object(
        _o: { [_K in keyof NonDeliveryInformation]: NonDeliveryInformation[_K] }
    ): NonDeliveryInformation {
        return new NonDeliveryInformation(
            _o.reason,
            _o.diagnostic,
            _o.supplementary_information
        );
    }
}
/* END_OF_SYMBOL_DEFINITION NonDeliveryInformation */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_NonDeliveryInformation */
/**
 * @summary The Leading Root Component Types of NonDeliveryInformation
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_NonDeliveryInformation: $.ComponentSpec[] = [
    new $.ComponentSpec(
        'reason',
        false,
        $.hasTag(_TagClass.context, 0),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        'diagnostic',
        true,
        $.hasTag(_TagClass.context, 1),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        'supplementary-information',
        true,
        $.hasTag(_TagClass.context, 2),
        undefined,
        undefined
    ),
];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_NonDeliveryInformation */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_NonDeliveryInformation */
/**
 * @summary The Trailing Root Component Types of NonDeliveryInformation
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_NonDeliveryInformation: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_NonDeliveryInformation */

/* START_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_NonDeliveryInformation */
/**
 * @summary The Extension Addition Component Types of NonDeliveryInformation
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_NonDeliveryInformation: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_NonDeliveryInformation */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_NonDeliveryInformation */
let _cached_decoder_for_NonDeliveryInformation: $.ASN1Decoder<NonDeliveryInformation> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_NonDeliveryInformation */

/* START_OF_SYMBOL_DEFINITION _decode_NonDeliveryInformation */
/**
 * @summary Decodes an ASN.1 element into a(n) NonDeliveryInformation
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {NonDeliveryInformation} The decoded data structure.
 */
export function _decode_NonDeliveryInformation(el: _Element) {
    if (!_cached_decoder_for_NonDeliveryInformation) {
        _cached_decoder_for_NonDeliveryInformation = function (
            el: _Element
        ): NonDeliveryInformation {
            /* START_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            let reason!: NonDeliveryReasonCode;
            let diagnostic: OPTIONAL<NonDeliveryDiagnosticCode>;
            let supplementary_information: OPTIONAL<SupplementaryInformation>;
            /* END_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            /* START_OF_CALLBACKS_MAP */
            const callbacks: $.DecodingMap = {
                reason: (_el: _Element): void => {
                    reason = $._decode_implicit<NonDeliveryReasonCode>(
                        () => _decode_NonDeliveryReasonCode
                    )(_el);
                },
                diagnostic: (_el: _Element): void => {
                    diagnostic = $._decode_implicit<NonDeliveryDiagnosticCode>(
                        () => _decode_NonDeliveryDiagnosticCode
                    )(_el);
                },
                'supplementary-information': (_el: _Element): void => {
                    supplementary_information = $._decode_implicit<SupplementaryInformation>(
                        () => _decode_SupplementaryInformation
                    )(_el);
                },
            };
            /* END_OF_CALLBACKS_MAP */
            $._parse_sequence(
                el,
                callbacks,
                _root_component_type_list_1_spec_for_NonDeliveryInformation,
                _extension_additions_list_spec_for_NonDeliveryInformation,
                _root_component_type_list_2_spec_for_NonDeliveryInformation,
                undefined
            );
            return new NonDeliveryInformation /* SEQUENCE_CONSTRUCTOR_CALL */(
                reason,
                diagnostic,
                supplementary_information
            );
        };
    }
    return _cached_decoder_for_NonDeliveryInformation(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_NonDeliveryInformation */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_NonDeliveryInformation */
let _cached_encoder_for_NonDeliveryInformation: $.ASN1Encoder<NonDeliveryInformation> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_NonDeliveryInformation */

/* START_OF_SYMBOL_DEFINITION _encode_NonDeliveryInformation */
/**
 * @summary Encodes a(n) NonDeliveryInformation into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The NonDeliveryInformation, encoded as an ASN.1 Element.
 */
export function _encode_NonDeliveryInformation(
    value: NonDeliveryInformation,
    elGetter: $.ASN1Encoder<NonDeliveryInformation>
) {
    if (!_cached_encoder_for_NonDeliveryInformation) {
        _cached_encoder_for_NonDeliveryInformation = function (
            value: NonDeliveryInformation,
            elGetter: $.ASN1Encoder<NonDeliveryInformation>
        ): _Element {
            return $._encodeSequence(
                ([] as (_Element | undefined)[])
                    .concat([
                        /* REQUIRED   */ $._encode_implicit(
                            _TagClass.context,
                            0,
                            () => _encode_NonDeliveryReasonCode,
                            $.BER
                        )(value.reason, $.BER),
                        /* IF_ABSENT  */ value.diagnostic === undefined
                            ? undefined
                            : $._encode_implicit(
                                  _TagClass.context,
                                  1,
                                  () => _encode_NonDeliveryDiagnosticCode,
                                  $.BER
                              )(value.diagnostic, $.BER),
                        /* IF_ABSENT  */ value.supplementary_information ===
                        undefined
                            ? undefined
                            : $._encode_implicit(
                                  _TagClass.context,
                                  2,
                                  () => _encode_SupplementaryInformation,
                                  $.BER
                              )(value.supplementary_information, $.BER),
                    ])
                    .filter((c: _Element | undefined): c is _Element => !!c),
                $.BER
            );
        };
    }
    return _cached_encoder_for_NonDeliveryInformation(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_NonDeliveryInformation */

/* eslint-enable */
