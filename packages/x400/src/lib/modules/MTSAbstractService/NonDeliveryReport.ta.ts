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
import * as $ from 'asn1-ts/dist/node/functional';
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
} from '../MTSAbstractService/NonDeliveryReasonCode.ta';
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
} from '../MTSAbstractService/NonDeliveryReasonCode.ta';
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
} from '../MTSAbstractService/NonDeliveryDiagnosticCode.ta';
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
} from '../MTSAbstractService/NonDeliveryDiagnosticCode.ta';

/* START_OF_SYMBOL_DEFINITION NonDeliveryReport */
/**
 * @summary NonDeliveryReport
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * NonDeliveryReport ::= SET {
 *   non-delivery-reason-code      [0]  NonDeliveryReasonCode,
 *   non-delivery-diagnostic-code  [1]  NonDeliveryDiagnosticCode OPTIONAL
 * }
 * ```
 *
 * @class
 */
export class NonDeliveryReport {
    constructor(
        /**
         * @summary `non_delivery_reason_code`.
         * @public
         * @readonly
         */
        readonly non_delivery_reason_code: NonDeliveryReasonCode,
        /**
         * @summary `non_delivery_diagnostic_code`.
         * @public
         * @readonly
         */
        readonly non_delivery_diagnostic_code: OPTIONAL<NonDeliveryDiagnosticCode>
    ) {}

    /**
     * @summary Restructures an object into a NonDeliveryReport
     * @description
     *
     * This takes an `object` and converts it to a `NonDeliveryReport`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `NonDeliveryReport`.
     * @returns {NonDeliveryReport}
     */
    public static _from_object(
        _o: { [_K in keyof NonDeliveryReport]: NonDeliveryReport[_K] }
    ): NonDeliveryReport {
        return new NonDeliveryReport(
            _o.non_delivery_reason_code,
            _o.non_delivery_diagnostic_code
        );
    }
}
/* END_OF_SYMBOL_DEFINITION NonDeliveryReport */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_NonDeliveryReport */
/**
 * @summary The Leading Root Component Types of NonDeliveryReport
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_NonDeliveryReport: $.ComponentSpec[] = [
    new $.ComponentSpec(
        'non-delivery-reason-code',
        false,
        $.hasTag(_TagClass.context, 0),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        'non-delivery-diagnostic-code',
        true,
        $.hasTag(_TagClass.context, 1),
        undefined,
        undefined
    ),
];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_NonDeliveryReport */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_NonDeliveryReport */
/**
 * @summary The Trailing Root Component Types of NonDeliveryReport
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_NonDeliveryReport: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_NonDeliveryReport */

/* START_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_NonDeliveryReport */
/**
 * @summary The Extension Addition Component Types of NonDeliveryReport
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_NonDeliveryReport: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_NonDeliveryReport */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_NonDeliveryReport */
let _cached_decoder_for_NonDeliveryReport: $.ASN1Decoder<NonDeliveryReport> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_NonDeliveryReport */

/* START_OF_SYMBOL_DEFINITION _decode_NonDeliveryReport */
/**
 * @summary Decodes an ASN.1 element into a(n) NonDeliveryReport
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {NonDeliveryReport} The decoded data structure.
 */
export function _decode_NonDeliveryReport(el: _Element) {
    if (!_cached_decoder_for_NonDeliveryReport) {
        _cached_decoder_for_NonDeliveryReport = function (
            el: _Element
        ): NonDeliveryReport {
            /* START_OF_SET_COMPONENT_DECLARATIONS */
            let non_delivery_reason_code!: NonDeliveryReasonCode;
            let non_delivery_diagnostic_code: OPTIONAL<NonDeliveryDiagnosticCode>;
            /* END_OF_SET_COMPONENT_DECLARATIONS */
            /* START_OF_CALLBACKS_MAP */
            const callbacks: $.DecodingMap = {
                'non-delivery-reason-code': (_el: _Element): void => {
                    non_delivery_reason_code = $._decode_implicit<NonDeliveryReasonCode>(
                        () => _decode_NonDeliveryReasonCode
                    )(_el);
                },
                'non-delivery-diagnostic-code': (_el: _Element): void => {
                    non_delivery_diagnostic_code = $._decode_implicit<NonDeliveryDiagnosticCode>(
                        () => _decode_NonDeliveryDiagnosticCode
                    )(_el);
                },
            };
            /* END_OF_CALLBACKS_MAP */
            $._parse_set(
                el,
                callbacks,
                _root_component_type_list_1_spec_for_NonDeliveryReport,
                _extension_additions_list_spec_for_NonDeliveryReport,
                _root_component_type_list_2_spec_for_NonDeliveryReport,
                undefined
            );
            return new NonDeliveryReport /* SET_CONSTRUCTOR_CALL */(
                non_delivery_reason_code,
                non_delivery_diagnostic_code
            );
        };
    }
    return _cached_decoder_for_NonDeliveryReport(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_NonDeliveryReport */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_NonDeliveryReport */
let _cached_encoder_for_NonDeliveryReport: $.ASN1Encoder<NonDeliveryReport> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_NonDeliveryReport */

/* START_OF_SYMBOL_DEFINITION _encode_NonDeliveryReport */
/**
 * @summary Encodes a(n) NonDeliveryReport into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The NonDeliveryReport, encoded as an ASN.1 Element.
 */
export function _encode_NonDeliveryReport(
    value: NonDeliveryReport,
    elGetter: $.ASN1Encoder<NonDeliveryReport>
) {
    if (!_cached_encoder_for_NonDeliveryReport) {
        _cached_encoder_for_NonDeliveryReport = function (
            value: NonDeliveryReport,
            elGetter: $.ASN1Encoder<NonDeliveryReport>
        ): _Element {
            return $._encodeSet(
                ([] as (_Element | undefined)[])
                    .concat([
                        /* REQUIRED   */ $._encode_implicit(
                            _TagClass.context,
                            0,
                            () => _encode_NonDeliveryReasonCode,
                            $.BER
                        )(value.non_delivery_reason_code, $.BER),
                        /* IF_ABSENT  */ value.non_delivery_diagnostic_code ===
                        undefined
                            ? undefined
                            : $._encode_implicit(
                                  _TagClass.context,
                                  1,
                                  () => _encode_NonDeliveryDiagnosticCode,
                                  $.BER
                              )(value.non_delivery_diagnostic_code, $.BER),
                    ])
                    .filter((c: _Element | undefined): c is _Element => !!c),
                $.BER
            );
        };
    }
    return _cached_encoder_for_NonDeliveryReport(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_NonDeliveryReport */

/* eslint-enable */
