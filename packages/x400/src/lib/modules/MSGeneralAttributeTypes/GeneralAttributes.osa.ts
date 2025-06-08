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
import { X413ATTRIBUTE } from '../MSAbstractService/X413ATTRIBUTE.oca';
export { X413ATTRIBUTE } from '../MSAbstractService/X413ATTRIBUTE.oca';
import { single_valued, multi_valued } from "../MSAbstractService/X413ATTRIBUTE-numeration.ta";
import { ms_child_sequence_numbers } from '../MSGeneralAttributeTypes/ms-child-sequence-numbers.oa';
export { ms_child_sequence_numbers } from '../MSGeneralAttributeTypes/ms-child-sequence-numbers.oa';
import { mt_content } from '../MSGeneralAttributeTypes/mt-content.oa';
export { mt_content } from '../MSGeneralAttributeTypes/mt-content.oa';
import { mt_content_confidentiality_algorithm_identifier } from '../MSGeneralAttributeTypes/mt-content-confidentiality-algorithm-identifier.oa';
export { mt_content_confidentiality_algorithm_identifier } from '../MSGeneralAttributeTypes/mt-content-confidentiality-algorithm-identifier.oa';
import { mt_content_correlator } from '../MSGeneralAttributeTypes/mt-content-correlator.oa';
export { mt_content_correlator } from '../MSGeneralAttributeTypes/mt-content-correlator.oa';
import { mt_content_identifier } from '../MSGeneralAttributeTypes/mt-content-identifier.oa';
export { mt_content_identifier } from '../MSGeneralAttributeTypes/mt-content-identifier.oa';
import { mt_content_integrity_check } from '../MSGeneralAttributeTypes/mt-content-integrity-check.oa';
export { mt_content_integrity_check } from '../MSGeneralAttributeTypes/mt-content-integrity-check.oa';
import { ms_content_length } from '../MSGeneralAttributeTypes/ms-content-length.oa';
export { ms_content_length } from '../MSGeneralAttributeTypes/ms-content-length.oa';
import { ms_content_returned } from '../MSGeneralAttributeTypes/ms-content-returned.oa';
export { ms_content_returned } from '../MSGeneralAttributeTypes/ms-content-returned.oa';
import { mt_content_type } from '../MSGeneralAttributeTypes/mt-content-type.oa';
export { mt_content_type } from '../MSGeneralAttributeTypes/mt-content-type.oa';
import { mt_conversion_with_loss_prohibited } from '../MSGeneralAttributeTypes/mt-conversion-with-loss-prohibited.oa';
export { mt_conversion_with_loss_prohibited } from '../MSGeneralAttributeTypes/mt-conversion-with-loss-prohibited.oa';
import { mt_converted_EITs } from '../MSGeneralAttributeTypes/mt-converted-EITs.oa';
export { mt_converted_EITs } from '../MSGeneralAttributeTypes/mt-converted-EITs.oa';
import { ms_creation_time } from '../MSGeneralAttributeTypes/ms-creation-time.oa';
export { ms_creation_time } from '../MSGeneralAttributeTypes/ms-creation-time.oa';
import { ms_delivered_EITs } from '../MSGeneralAttributeTypes/ms-delivered-EITs.oa';
export { ms_delivered_EITs } from '../MSGeneralAttributeTypes/ms-delivered-EITs.oa';
import { mt_delivery_flags } from '../MSGeneralAttributeTypes/mt-delivery-flags.oa';
export { mt_delivery_flags } from '../MSGeneralAttributeTypes/mt-delivery-flags.oa';
import { mt_dl_expansion_history } from '../MSGeneralAttributeTypes/mt-dl-expansion-history.oa';
export { mt_dl_expansion_history } from '../MSGeneralAttributeTypes/mt-dl-expansion-history.oa';
import { ms_entry_type } from '../MSGeneralAttributeTypes/ms-entry-type.oa';
export { ms_entry_type } from '../MSGeneralAttributeTypes/ms-entry-type.oa';
import { mt_message_delivery_envelope } from '../MSGeneralAttributeTypes/mt-message-delivery-envelope.oa';
export { mt_message_delivery_envelope } from '../MSGeneralAttributeTypes/mt-message-delivery-envelope.oa';
import { mt_message_delivery_time } from '../MSGeneralAttributeTypes/mt-message-delivery-time.oa';
export { mt_message_delivery_time } from '../MSGeneralAttributeTypes/mt-message-delivery-time.oa';
import { mt_message_identifier } from '../MSGeneralAttributeTypes/mt-message-identifier.oa';
export { mt_message_identifier } from '../MSGeneralAttributeTypes/mt-message-identifier.oa';
import { mt_message_origin_authentication_check } from '../MSGeneralAttributeTypes/mt-message-origin-authentication-check.oa';
export { mt_message_origin_authentication_check } from '../MSGeneralAttributeTypes/mt-message-origin-authentication-check.oa';
import { mt_message_security_label } from '../MSGeneralAttributeTypes/mt-message-security-label.oa';
export { mt_message_security_label } from '../MSGeneralAttributeTypes/mt-message-security-label.oa';
import { mt_message_submission_time } from '../MSGeneralAttributeTypes/mt-message-submission-time.oa';
export { mt_message_submission_time } from '../MSGeneralAttributeTypes/mt-message-submission-time.oa';
import { mt_message_token } from '../MSGeneralAttributeTypes/mt-message-token.oa';
export { mt_message_token } from '../MSGeneralAttributeTypes/mt-message-token.oa';
import { mt_original_EITs } from '../MSGeneralAttributeTypes/mt-original-EITs.oa';
export { mt_original_EITs } from '../MSGeneralAttributeTypes/mt-original-EITs.oa';
import { mt_originally_intended_recipient_name } from '../MSGeneralAttributeTypes/mt-originally-intended-recipient-name.oa';
export { mt_originally_intended_recipient_name } from '../MSGeneralAttributeTypes/mt-originally-intended-recipient-name.oa';
import { mt_originator_certificate } from '../MSGeneralAttributeTypes/mt-originator-certificate.oa';
export { mt_originator_certificate } from '../MSGeneralAttributeTypes/mt-originator-certificate.oa';
import { mt_originator_name } from '../MSGeneralAttributeTypes/mt-originator-name.oa';
export { mt_originator_name } from '../MSGeneralAttributeTypes/mt-originator-name.oa';
import { mt_other_recipient_names } from '../MSGeneralAttributeTypes/mt-other-recipient-names.oa';
export { mt_other_recipient_names } from '../MSGeneralAttributeTypes/mt-other-recipient-names.oa';
import { ms_parent_sequence_number } from '../MSGeneralAttributeTypes/ms-parent-sequence-number.oa';
export { ms_parent_sequence_number } from '../MSGeneralAttributeTypes/ms-parent-sequence-number.oa';
import { mt_per_recipient_report_delivery_fields } from '../MSGeneralAttributeTypes/mt-per-recipient-report-delivery-fields.oa';
export { mt_per_recipient_report_delivery_fields } from '../MSGeneralAttributeTypes/mt-per-recipient-report-delivery-fields.oa';
import { mt_priority } from '../MSGeneralAttributeTypes/mt-priority.oa';
export { mt_priority } from '../MSGeneralAttributeTypes/mt-priority.oa';
import { mt_proof_of_delivery_request } from '../MSGeneralAttributeTypes/mt-proof-of-delivery-request.oa';
export { mt_proof_of_delivery_request } from '../MSGeneralAttributeTypes/mt-proof-of-delivery-request.oa';
import { mt_redirection_history } from '../MSGeneralAttributeTypes/mt-redirection-history.oa';
export { mt_redirection_history } from '../MSGeneralAttributeTypes/mt-redirection-history.oa';
import { mt_report_delivery_envelope } from '../MSGeneralAttributeTypes/mt-report-delivery-envelope.oa';
export { mt_report_delivery_envelope } from '../MSGeneralAttributeTypes/mt-report-delivery-envelope.oa';
import { mt_reporting_DL_name } from '../MSGeneralAttributeTypes/mt-reporting-DL-name.oa';
export { mt_reporting_DL_name } from '../MSGeneralAttributeTypes/mt-reporting-DL-name.oa';
import { mt_reporting_MTA_certificate } from '../MSGeneralAttributeTypes/mt-reporting-MTA-certificate.oa';
export { mt_reporting_MTA_certificate } from '../MSGeneralAttributeTypes/mt-reporting-MTA-certificate.oa';
import { mt_report_origin_authentication_check } from '../MSGeneralAttributeTypes/mt-report-origin-authentication-check.oa';
export { mt_report_origin_authentication_check } from '../MSGeneralAttributeTypes/mt-report-origin-authentication-check.oa';
import { ms_retrieval_status } from '../MSGeneralAttributeTypes/ms-retrieval-status.oa';
export { ms_retrieval_status } from '../MSGeneralAttributeTypes/ms-retrieval-status.oa';
import { mt_security_classification } from '../MSGeneralAttributeTypes/mt-security-classification.oa';
export { mt_security_classification } from '../MSGeneralAttributeTypes/mt-security-classification.oa';
import { ms_sequence_number } from '../MSGeneralAttributeTypes/ms-sequence-number.oa';
export { ms_sequence_number } from '../MSGeneralAttributeTypes/ms-sequence-number.oa';
import { mt_subject_submission_identifier } from '../MSGeneralAttributeTypes/mt-subject-submission-identifier.oa';
export { mt_subject_submission_identifier } from '../MSGeneralAttributeTypes/mt-subject-submission-identifier.oa';
import { mt_this_recipient_name } from '../MSGeneralAttributeTypes/mt-this-recipient-name.oa';
export { mt_this_recipient_name } from '../MSGeneralAttributeTypes/mt-this-recipient-name.oa';
import { ms_ac_correlated_report_list } from '../MSGeneralAttributeTypes/ms-ac-correlated-report-list.oa';
export { ms_ac_correlated_report_list } from '../MSGeneralAttributeTypes/ms-ac-correlated-report-list.oa';
import { ms_ac_report_subject_entry } from '../MSGeneralAttributeTypes/ms-ac-report-subject-entry.oa';
export { ms_ac_report_subject_entry } from '../MSGeneralAttributeTypes/ms-ac-report-subject-entry.oa';
import { ms_ac_report_summary } from '../MSGeneralAttributeTypes/ms-ac-report-summary.oa';
export { ms_ac_report_summary } from '../MSGeneralAttributeTypes/ms-ac-report-summary.oa';
import { ms_ac_uncorrelated_report_list } from '../MSGeneralAttributeTypes/ms-ac-uncorrelated-report-list.oa';
export { ms_ac_uncorrelated_report_list } from '../MSGeneralAttributeTypes/ms-ac-uncorrelated-report-list.oa';
import { ms_auto_action_error } from '../MSGeneralAttributeTypes/ms-auto-action-error.oa';
export { ms_auto_action_error } from '../MSGeneralAttributeTypes/ms-auto-action-error.oa';
import { ms_auto_action_registration_identifier } from '../MSGeneralAttributeTypes/ms-auto-action-registration-identifier.oa';
export { ms_auto_action_registration_identifier } from '../MSGeneralAttributeTypes/ms-auto-action-registration-identifier.oa';
import { ms_auto_action_subject_entry } from '../MSGeneralAttributeTypes/ms-auto-action-subject-entry.oa';
export { ms_auto_action_subject_entry } from '../MSGeneralAttributeTypes/ms-auto-action-subject-entry.oa';
import { ms_auto_action_type } from '../MSGeneralAttributeTypes/ms-auto-action-type.oa';
export { ms_auto_action_type } from '../MSGeneralAttributeTypes/ms-auto-action-type.oa';
import { mt_certificate_selectors } from '../MSGeneralAttributeTypes/mt-certificate-selectors.oa';
export { mt_certificate_selectors } from '../MSGeneralAttributeTypes/mt-certificate-selectors.oa';
import { ms_deferred_delivery_cancellation_time } from '../MSGeneralAttributeTypes/ms-deferred-delivery-cancellation-time.oa';
export { ms_deferred_delivery_cancellation_time } from '../MSGeneralAttributeTypes/ms-deferred-delivery-cancellation-time.oa';
import { mt_deferred_delivery_time } from '../MSGeneralAttributeTypes/mt-deferred-delivery-time.oa';
export { mt_deferred_delivery_time } from '../MSGeneralAttributeTypes/mt-deferred-delivery-time.oa';
import { ms_deletion_time } from '../MSGeneralAttributeTypes/ms-deletion-time.oa';
export { ms_deletion_time } from '../MSGeneralAttributeTypes/ms-deletion-time.oa';
import { mt_dl_exempted_recipients } from '../MSGeneralAttributeTypes/mt-dl-exempted-recipients.oa';
export { mt_dl_exempted_recipients } from '../MSGeneralAttributeTypes/mt-dl-exempted-recipients.oa';
import { mt_dl_expansion_prohibited } from '../MSGeneralAttributeTypes/mt-dl-expansion-prohibited.oa';
export { mt_dl_expansion_prohibited } from '../MSGeneralAttributeTypes/mt-dl-expansion-prohibited.oa';
import { mt_internal_trace_information } from '../MSGeneralAttributeTypes/mt-internal-trace-information.oa';
export { mt_internal_trace_information } from '../MSGeneralAttributeTypes/mt-internal-trace-information.oa';
import { mt_latest_delivery_time } from '../MSGeneralAttributeTypes/mt-latest-delivery-time.oa';
export { mt_latest_delivery_time } from '../MSGeneralAttributeTypes/mt-latest-delivery-time.oa';
import { ms_locally_originated } from '../MSGeneralAttributeTypes/ms-locally-originated.oa';
export { ms_locally_originated } from '../MSGeneralAttributeTypes/ms-locally-originated.oa';
import { ms_marked_for_deletion } from '../MSGeneralAttributeTypes/ms-marked-for-deletion.oa';
export { ms_marked_for_deletion } from '../MSGeneralAttributeTypes/ms-marked-for-deletion.oa';
import { ms_message_group_name } from '../MSGeneralAttributeTypes/ms-message-group-name.oa';
export { ms_message_group_name } from '../MSGeneralAttributeTypes/ms-message-group-name.oa';
import { ms_message_notes } from '../MSGeneralAttributeTypes/ms-message-notes.oa';
export { ms_message_notes } from '../MSGeneralAttributeTypes/ms-message-notes.oa';
import { mt_message_submission_envelope } from '../MSGeneralAttributeTypes/mt-message-submission-envelope.oa';
export { mt_message_submission_envelope } from '../MSGeneralAttributeTypes/mt-message-submission-envelope.oa';
import { mt_multiple_originator_certificates } from '../MSGeneralAttributeTypes/mt-multiple-originator-certificates.oa';
export { mt_multiple_originator_certificates } from '../MSGeneralAttributeTypes/mt-multiple-originator-certificates.oa';
import { ms_originated } from '../MSGeneralAttributeTypes/ms-originated.oa';
export { ms_originated } from '../MSGeneralAttributeTypes/ms-originated.oa';
import { ms_submission_error } from '../MSGeneralAttributeTypes/ms-submission-error.oa';
export { ms_submission_error } from '../MSGeneralAttributeTypes/ms-submission-error.oa';
import { mt_originating_MTA_certificate } from '../MSGeneralAttributeTypes/mt-originating-MTA-certificate.oa';
export { mt_originating_MTA_certificate } from '../MSGeneralAttributeTypes/mt-originating-MTA-certificate.oa';
import { mt_originator_report_request } from '../MSGeneralAttributeTypes/mt-originator-report-request.oa';
export { mt_originator_report_request } from '../MSGeneralAttributeTypes/mt-originator-report-request.oa';
import { mt_originator_return_address } from '../MSGeneralAttributeTypes/mt-originator-return-address.oa';
export { mt_originator_return_address } from '../MSGeneralAttributeTypes/mt-originator-return-address.oa';
import { mt_per_message_indicators } from '../MSGeneralAttributeTypes/mt-per-message-indicators.oa';
export { mt_per_message_indicators } from '../MSGeneralAttributeTypes/mt-per-message-indicators.oa';
import { mt_per_recipient_message_submission_fields } from '../MSGeneralAttributeTypes/mt-per-recipient-message-submission-fields.oa';
export { mt_per_recipient_message_submission_fields } from '../MSGeneralAttributeTypes/mt-per-recipient-message-submission-fields.oa';
import { mt_per_recipient_probe_submission_fields } from '../MSGeneralAttributeTypes/mt-per-recipient-probe-submission-fields.oa';
export { mt_per_recipient_probe_submission_fields } from '../MSGeneralAttributeTypes/mt-per-recipient-probe-submission-fields.oa';
import { mt_probe_origin_authentication_check } from '../MSGeneralAttributeTypes/mt-probe-origin-authentication-check.oa';
export { mt_probe_origin_authentication_check } from '../MSGeneralAttributeTypes/mt-probe-origin-authentication-check.oa';
import { mt_probe_submission_envelope } from '../MSGeneralAttributeTypes/mt-probe-submission-envelope.oa';
export { mt_probe_submission_envelope } from '../MSGeneralAttributeTypes/mt-probe-submission-envelope.oa';
import { mt_proof_of_submission } from '../MSGeneralAttributeTypes/mt-proof-of-submission.oa';
export { mt_proof_of_submission } from '../MSGeneralAttributeTypes/mt-proof-of-submission.oa';
import { mt_recipient_certificate } from '../MSGeneralAttributeTypes/mt-recipient-certificate.oa';
export { mt_recipient_certificate } from '../MSGeneralAttributeTypes/mt-recipient-certificate.oa';
import { ms_recipient_names } from '../MSGeneralAttributeTypes/ms-recipient-names.oa';
export { ms_recipient_names } from '../MSGeneralAttributeTypes/ms-recipient-names.oa';
import { mt_recipient_reassignment_prohibited } from '../MSGeneralAttributeTypes/mt-recipient-reassignment-prohibited.oa';
export { mt_recipient_reassignment_prohibited } from '../MSGeneralAttributeTypes/mt-recipient-reassignment-prohibited.oa';
import { ms_signature_verification_status } from '../MSGeneralAttributeTypes/ms-signature-verification-status.oa';
export { ms_signature_verification_status } from '../MSGeneralAttributeTypes/ms-signature-verification-status.oa';
import { ms_storage_period } from '../MSGeneralAttributeTypes/ms-storage-period.oa';
export { ms_storage_period } from '../MSGeneralAttributeTypes/ms-storage-period.oa';
import { ms_storage_time } from '../MSGeneralAttributeTypes/ms-storage-time.oa';
export { ms_storage_time } from '../MSGeneralAttributeTypes/ms-storage-time.oa';
import { mt_trace_information } from '../MSGeneralAttributeTypes/mt-trace-information.oa';
export { mt_trace_information } from '../MSGeneralAttributeTypes/mt-trace-information.oa';

/* START_OF_SYMBOL_DEFINITION GeneralAttributes */
/**
 * @summary GeneralAttributes
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * GeneralAttributes X413ATTRIBUTE ::= {ms-child-sequence-numbers | mt-content |
 *    mt-content-confidentiality-algorithm-identifier | mt-content-correlator |
 *    mt-content-identifier | mt-content-integrity-check | ms-content-length |
 *    ms-content-returned | mt-content-type | mt-conversion-with-loss-prohibited |
 *    mt-converted-EITs | ms-creation-time | ms-delivered-EITs | mt-delivery-flags
 *    | mt-dl-expansion-history | ms-entry-type | mt-message-delivery-envelope |
 *    mt-message-delivery-time | mt-message-identifier |
 *    mt-message-origin-authentication-check | mt-message-security-label |
 *    mt-message-submission-time | mt-message-token | mt-original-EITs |
 *    mt-originally-intended-recipient-name | mt-originator-certificate |
 *    mt-originator-name | mt-other-recipient-names | ms-parent-sequence-number |
 *    mt-per-recipient-report-delivery-fields | mt-priority |
 *    mt-proof-of-delivery-request | mt-redirection-history |
 *    mt-report-delivery-envelope | mt-reporting-DL-name |
 *    mt-reporting-MTA-certificate | mt-report-origin-authentication-check |
 *    ms-retrieval-status | mt-security-classification | ms-sequence-number |
 *    mt-subject-submission-identifier | mt-this-recipient-name,
 *    ... -- 1994 extension additions --, ms-ac-correlated-report-list |
 *    ms-ac-report-subject-entry | ms-ac-report-summary |
 *    ms-ac-uncorrelated-report-list | ms-auto-action-error |
 *    ms-auto-action-registration-identifier | ms-auto-action-subject-entry |
 *    ms-auto-action-type | mt-certificate-selectors |
 *    ms-deferred-delivery-cancellation-time | mt-deferred-delivery-time |
 *    ms-deletion-time | mt-dl-exempted-recipients | mt-dl-expansion-prohibited |
 *    mt-internal-trace-information | mt-latest-delivery-time |
 *    ms-locally-originated | ms-marked-for-deletion | ms-message-group-name |
 *    ms-message-notes | mt-message-submission-envelope |
 *    mt-multiple-originator-certificates | ms-originated | ms-submission-error |
 *    mt-originating-MTA-certificate | mt-originator-report-request |
 *    mt-originator-return-address | mt-per-message-indicators |
 *    mt-per-recipient-message-submission-fields |
 *    mt-per-recipient-probe-submission-fields |
 *    mt-probe-origin-authentication-check | mt-probe-submission-envelope |
 *    mt-proof-of-submission | mt-recipient-certificate | ms-recipient-names |
 *    mt-recipient-reassignment-prohibited | ms-signature-verification-status |
 *    ms-storage-period | ms-storage-time | mt-trace-information}
 * ```
 *
 * @constant
 * @type {X413ATTRIBUTE[]}
 *
 */
export const GeneralAttributes: X413ATTRIBUTE[] = [
    ms_child_sequence_numbers,
    mt_content,
    mt_content_confidentiality_algorithm_identifier,
    mt_content_correlator,
    mt_content_identifier,
    mt_content_integrity_check,
    ms_content_length,
    ms_content_returned,
    mt_content_type,
    mt_conversion_with_loss_prohibited,
    mt_converted_EITs,
    ms_creation_time,
    ms_delivered_EITs,
    mt_delivery_flags,
    mt_dl_expansion_history,
    ms_entry_type,
    mt_message_delivery_envelope,
    mt_message_delivery_time,
    mt_message_identifier,
    mt_message_origin_authentication_check,
    mt_message_security_label,
    mt_message_submission_time,
    mt_message_token,
    mt_original_EITs,
    mt_originally_intended_recipient_name,
    mt_originator_certificate,
    mt_originator_name,
    mt_other_recipient_names,
    ms_parent_sequence_number,
    mt_per_recipient_report_delivery_fields,
    mt_priority,
    mt_proof_of_delivery_request,
    mt_redirection_history,
    mt_report_delivery_envelope,
    mt_reporting_DL_name,
    mt_reporting_MTA_certificate,
    mt_report_origin_authentication_check,
    ms_retrieval_status,
    mt_security_classification,
    ms_sequence_number,
    mt_subject_submission_identifier,
    mt_this_recipient_name,
    /* OBJECT_SET_EXTENSION_MARKER */ ms_ac_correlated_report_list,
    ms_ac_report_subject_entry,
    ms_ac_report_summary,
    ms_ac_uncorrelated_report_list,
    ms_auto_action_error,
    ms_auto_action_registration_identifier,
    ms_auto_action_subject_entry,
    ms_auto_action_type,
    mt_certificate_selectors,
    ms_deferred_delivery_cancellation_time,
    mt_deferred_delivery_time,
    ms_deletion_time,
    mt_dl_exempted_recipients,
    mt_dl_expansion_prohibited,
    mt_internal_trace_information,
    mt_latest_delivery_time,
    ms_locally_originated,
    ms_marked_for_deletion,
    ms_message_group_name,
    ms_message_notes,
    mt_message_submission_envelope,
    mt_multiple_originator_certificates,
    ms_originated,
    ms_submission_error,
    mt_originating_MTA_certificate,
    mt_originator_report_request,
    mt_originator_return_address,
    mt_per_message_indicators,
    mt_per_recipient_message_submission_fields,
    mt_per_recipient_probe_submission_fields,
    mt_probe_origin_authentication_check,
    mt_probe_submission_envelope,
    mt_proof_of_submission,
    mt_recipient_certificate,
    ms_recipient_names,
    mt_recipient_reassignment_prohibited,
    ms_signature_verification_status,
    ms_storage_period,
    ms_storage_time,
    mt_trace_information,
];
/* END_OF_SYMBOL_DEFINITION GeneralAttributes */

/* eslint-enable */
