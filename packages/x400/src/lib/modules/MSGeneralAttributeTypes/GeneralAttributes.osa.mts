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
import { X413ATTRIBUTE } from '../MSAbstractService/X413ATTRIBUTE.oca.mjs';
export { X413ATTRIBUTE } from '../MSAbstractService/X413ATTRIBUTE.oca.mjs';
import { single_valued, multi_valued } from "../MSAbstractService/X413ATTRIBUTE-numeration.ta.mjs";
import { ms_child_sequence_numbers } from '../MSGeneralAttributeTypes/ms-child-sequence-numbers.oa.mjs';
export { ms_child_sequence_numbers } from '../MSGeneralAttributeTypes/ms-child-sequence-numbers.oa.mjs';
import { mt_content } from '../MSGeneralAttributeTypes/mt-content.oa.mjs';
export { mt_content } from '../MSGeneralAttributeTypes/mt-content.oa.mjs';
import { mt_content_confidentiality_algorithm_identifier } from '../MSGeneralAttributeTypes/mt-content-confidentiality-algorithm-identifier.oa.mjs';
export { mt_content_confidentiality_algorithm_identifier } from '../MSGeneralAttributeTypes/mt-content-confidentiality-algorithm-identifier.oa.mjs';
import { mt_content_correlator } from '../MSGeneralAttributeTypes/mt-content-correlator.oa.mjs';
export { mt_content_correlator } from '../MSGeneralAttributeTypes/mt-content-correlator.oa.mjs';
import { mt_content_identifier } from '../MSGeneralAttributeTypes/mt-content-identifier.oa.mjs';
export { mt_content_identifier } from '../MSGeneralAttributeTypes/mt-content-identifier.oa.mjs';
import { mt_content_integrity_check } from '../MSGeneralAttributeTypes/mt-content-integrity-check.oa.mjs';
export { mt_content_integrity_check } from '../MSGeneralAttributeTypes/mt-content-integrity-check.oa.mjs';
import { ms_content_length } from '../MSGeneralAttributeTypes/ms-content-length.oa.mjs';
export { ms_content_length } from '../MSGeneralAttributeTypes/ms-content-length.oa.mjs';
import { ms_content_returned } from '../MSGeneralAttributeTypes/ms-content-returned.oa.mjs';
export { ms_content_returned } from '../MSGeneralAttributeTypes/ms-content-returned.oa.mjs';
import { mt_content_type } from '../MSGeneralAttributeTypes/mt-content-type.oa.mjs';
export { mt_content_type } from '../MSGeneralAttributeTypes/mt-content-type.oa.mjs';
import { mt_conversion_with_loss_prohibited } from '../MSGeneralAttributeTypes/mt-conversion-with-loss-prohibited.oa.mjs';
export { mt_conversion_with_loss_prohibited } from '../MSGeneralAttributeTypes/mt-conversion-with-loss-prohibited.oa.mjs';
import { mt_converted_EITs } from '../MSGeneralAttributeTypes/mt-converted-EITs.oa.mjs';
export { mt_converted_EITs } from '../MSGeneralAttributeTypes/mt-converted-EITs.oa.mjs';
import { ms_creation_time } from '../MSGeneralAttributeTypes/ms-creation-time.oa.mjs';
export { ms_creation_time } from '../MSGeneralAttributeTypes/ms-creation-time.oa.mjs';
import { ms_delivered_EITs } from '../MSGeneralAttributeTypes/ms-delivered-EITs.oa.mjs';
export { ms_delivered_EITs } from '../MSGeneralAttributeTypes/ms-delivered-EITs.oa.mjs';
import { mt_delivery_flags } from '../MSGeneralAttributeTypes/mt-delivery-flags.oa.mjs';
export { mt_delivery_flags } from '../MSGeneralAttributeTypes/mt-delivery-flags.oa.mjs';
import { mt_dl_expansion_history } from '../MSGeneralAttributeTypes/mt-dl-expansion-history.oa.mjs';
export { mt_dl_expansion_history } from '../MSGeneralAttributeTypes/mt-dl-expansion-history.oa.mjs';
import { ms_entry_type } from '../MSGeneralAttributeTypes/ms-entry-type.oa.mjs';
export { ms_entry_type } from '../MSGeneralAttributeTypes/ms-entry-type.oa.mjs';
import { mt_message_delivery_envelope } from '../MSGeneralAttributeTypes/mt-message-delivery-envelope.oa.mjs';
export { mt_message_delivery_envelope } from '../MSGeneralAttributeTypes/mt-message-delivery-envelope.oa.mjs';
import { mt_message_delivery_time } from '../MSGeneralAttributeTypes/mt-message-delivery-time.oa.mjs';
export { mt_message_delivery_time } from '../MSGeneralAttributeTypes/mt-message-delivery-time.oa.mjs';
import { mt_message_identifier } from '../MSGeneralAttributeTypes/mt-message-identifier.oa.mjs';
export { mt_message_identifier } from '../MSGeneralAttributeTypes/mt-message-identifier.oa.mjs';
import { mt_message_origin_authentication_check } from '../MSGeneralAttributeTypes/mt-message-origin-authentication-check.oa.mjs';
export { mt_message_origin_authentication_check } from '../MSGeneralAttributeTypes/mt-message-origin-authentication-check.oa.mjs';
import { mt_message_security_label } from '../MSGeneralAttributeTypes/mt-message-security-label.oa.mjs';
export { mt_message_security_label } from '../MSGeneralAttributeTypes/mt-message-security-label.oa.mjs';
import { mt_message_submission_time } from '../MSGeneralAttributeTypes/mt-message-submission-time.oa.mjs';
export { mt_message_submission_time } from '../MSGeneralAttributeTypes/mt-message-submission-time.oa.mjs';
import { mt_message_token } from '../MSGeneralAttributeTypes/mt-message-token.oa.mjs';
export { mt_message_token } from '../MSGeneralAttributeTypes/mt-message-token.oa.mjs';
import { mt_original_EITs } from '../MSGeneralAttributeTypes/mt-original-EITs.oa.mjs';
export { mt_original_EITs } from '../MSGeneralAttributeTypes/mt-original-EITs.oa.mjs';
import { mt_originally_intended_recipient_name } from '../MSGeneralAttributeTypes/mt-originally-intended-recipient-name.oa.mjs';
export { mt_originally_intended_recipient_name } from '../MSGeneralAttributeTypes/mt-originally-intended-recipient-name.oa.mjs';
import { mt_originator_certificate } from '../MSGeneralAttributeTypes/mt-originator-certificate.oa.mjs';
export { mt_originator_certificate } from '../MSGeneralAttributeTypes/mt-originator-certificate.oa.mjs';
import { mt_originator_name } from '../MSGeneralAttributeTypes/mt-originator-name.oa.mjs';
export { mt_originator_name } from '../MSGeneralAttributeTypes/mt-originator-name.oa.mjs';
import { mt_other_recipient_names } from '../MSGeneralAttributeTypes/mt-other-recipient-names.oa.mjs';
export { mt_other_recipient_names } from '../MSGeneralAttributeTypes/mt-other-recipient-names.oa.mjs';
import { ms_parent_sequence_number } from '../MSGeneralAttributeTypes/ms-parent-sequence-number.oa.mjs';
export { ms_parent_sequence_number } from '../MSGeneralAttributeTypes/ms-parent-sequence-number.oa.mjs';
import { mt_per_recipient_report_delivery_fields } from '../MSGeneralAttributeTypes/mt-per-recipient-report-delivery-fields.oa.mjs';
export { mt_per_recipient_report_delivery_fields } from '../MSGeneralAttributeTypes/mt-per-recipient-report-delivery-fields.oa.mjs';
import { mt_priority } from '../MSGeneralAttributeTypes/mt-priority.oa.mjs';
export { mt_priority } from '../MSGeneralAttributeTypes/mt-priority.oa.mjs';
import { mt_proof_of_delivery_request } from '../MSGeneralAttributeTypes/mt-proof-of-delivery-request.oa.mjs';
export { mt_proof_of_delivery_request } from '../MSGeneralAttributeTypes/mt-proof-of-delivery-request.oa.mjs';
import { mt_redirection_history } from '../MSGeneralAttributeTypes/mt-redirection-history.oa.mjs';
export { mt_redirection_history } from '../MSGeneralAttributeTypes/mt-redirection-history.oa.mjs';
import { mt_report_delivery_envelope } from '../MSGeneralAttributeTypes/mt-report-delivery-envelope.oa.mjs';
export { mt_report_delivery_envelope } from '../MSGeneralAttributeTypes/mt-report-delivery-envelope.oa.mjs';
import { mt_reporting_DL_name } from '../MSGeneralAttributeTypes/mt-reporting-DL-name.oa.mjs';
export { mt_reporting_DL_name } from '../MSGeneralAttributeTypes/mt-reporting-DL-name.oa.mjs';
import { mt_reporting_MTA_certificate } from '../MSGeneralAttributeTypes/mt-reporting-MTA-certificate.oa.mjs';
export { mt_reporting_MTA_certificate } from '../MSGeneralAttributeTypes/mt-reporting-MTA-certificate.oa.mjs';
import { mt_report_origin_authentication_check } from '../MSGeneralAttributeTypes/mt-report-origin-authentication-check.oa.mjs';
export { mt_report_origin_authentication_check } from '../MSGeneralAttributeTypes/mt-report-origin-authentication-check.oa.mjs';
import { ms_retrieval_status } from '../MSGeneralAttributeTypes/ms-retrieval-status.oa.mjs';
export { ms_retrieval_status } from '../MSGeneralAttributeTypes/ms-retrieval-status.oa.mjs';
import { mt_security_classification } from '../MSGeneralAttributeTypes/mt-security-classification.oa.mjs';
export { mt_security_classification } from '../MSGeneralAttributeTypes/mt-security-classification.oa.mjs';
import { ms_sequence_number } from '../MSGeneralAttributeTypes/ms-sequence-number.oa.mjs';
export { ms_sequence_number } from '../MSGeneralAttributeTypes/ms-sequence-number.oa.mjs';
import { mt_subject_submission_identifier } from '../MSGeneralAttributeTypes/mt-subject-submission-identifier.oa.mjs';
export { mt_subject_submission_identifier } from '../MSGeneralAttributeTypes/mt-subject-submission-identifier.oa.mjs';
import { mt_this_recipient_name } from '../MSGeneralAttributeTypes/mt-this-recipient-name.oa.mjs';
export { mt_this_recipient_name } from '../MSGeneralAttributeTypes/mt-this-recipient-name.oa.mjs';
import { ms_ac_correlated_report_list } from '../MSGeneralAttributeTypes/ms-ac-correlated-report-list.oa.mjs';
export { ms_ac_correlated_report_list } from '../MSGeneralAttributeTypes/ms-ac-correlated-report-list.oa.mjs';
import { ms_ac_report_subject_entry } from '../MSGeneralAttributeTypes/ms-ac-report-subject-entry.oa.mjs';
export { ms_ac_report_subject_entry } from '../MSGeneralAttributeTypes/ms-ac-report-subject-entry.oa.mjs';
import { ms_ac_report_summary } from '../MSGeneralAttributeTypes/ms-ac-report-summary.oa.mjs';
export { ms_ac_report_summary } from '../MSGeneralAttributeTypes/ms-ac-report-summary.oa.mjs';
import { ms_ac_uncorrelated_report_list } from '../MSGeneralAttributeTypes/ms-ac-uncorrelated-report-list.oa.mjs';
export { ms_ac_uncorrelated_report_list } from '../MSGeneralAttributeTypes/ms-ac-uncorrelated-report-list.oa.mjs';
import { ms_auto_action_error } from '../MSGeneralAttributeTypes/ms-auto-action-error.oa.mjs';
export { ms_auto_action_error } from '../MSGeneralAttributeTypes/ms-auto-action-error.oa.mjs';
import { ms_auto_action_registration_identifier } from '../MSGeneralAttributeTypes/ms-auto-action-registration-identifier.oa.mjs';
export { ms_auto_action_registration_identifier } from '../MSGeneralAttributeTypes/ms-auto-action-registration-identifier.oa.mjs';
import { ms_auto_action_subject_entry } from '../MSGeneralAttributeTypes/ms-auto-action-subject-entry.oa.mjs';
export { ms_auto_action_subject_entry } from '../MSGeneralAttributeTypes/ms-auto-action-subject-entry.oa.mjs';
import { ms_auto_action_type } from '../MSGeneralAttributeTypes/ms-auto-action-type.oa.mjs';
export { ms_auto_action_type } from '../MSGeneralAttributeTypes/ms-auto-action-type.oa.mjs';
import { mt_certificate_selectors } from '../MSGeneralAttributeTypes/mt-certificate-selectors.oa.mjs';
export { mt_certificate_selectors } from '../MSGeneralAttributeTypes/mt-certificate-selectors.oa.mjs';
import { ms_deferred_delivery_cancellation_time } from '../MSGeneralAttributeTypes/ms-deferred-delivery-cancellation-time.oa.mjs';
export { ms_deferred_delivery_cancellation_time } from '../MSGeneralAttributeTypes/ms-deferred-delivery-cancellation-time.oa.mjs';
import { mt_deferred_delivery_time } from '../MSGeneralAttributeTypes/mt-deferred-delivery-time.oa.mjs';
export { mt_deferred_delivery_time } from '../MSGeneralAttributeTypes/mt-deferred-delivery-time.oa.mjs';
import { ms_deletion_time } from '../MSGeneralAttributeTypes/ms-deletion-time.oa.mjs';
export { ms_deletion_time } from '../MSGeneralAttributeTypes/ms-deletion-time.oa.mjs';
import { mt_dl_exempted_recipients } from '../MSGeneralAttributeTypes/mt-dl-exempted-recipients.oa.mjs';
export { mt_dl_exempted_recipients } from '../MSGeneralAttributeTypes/mt-dl-exempted-recipients.oa.mjs';
import { mt_dl_expansion_prohibited } from '../MSGeneralAttributeTypes/mt-dl-expansion-prohibited.oa.mjs';
export { mt_dl_expansion_prohibited } from '../MSGeneralAttributeTypes/mt-dl-expansion-prohibited.oa.mjs';
import { mt_internal_trace_information } from '../MSGeneralAttributeTypes/mt-internal-trace-information.oa.mjs';
export { mt_internal_trace_information } from '../MSGeneralAttributeTypes/mt-internal-trace-information.oa.mjs';
import { mt_latest_delivery_time } from '../MSGeneralAttributeTypes/mt-latest-delivery-time.oa.mjs';
export { mt_latest_delivery_time } from '../MSGeneralAttributeTypes/mt-latest-delivery-time.oa.mjs';
import { ms_locally_originated } from '../MSGeneralAttributeTypes/ms-locally-originated.oa.mjs';
export { ms_locally_originated } from '../MSGeneralAttributeTypes/ms-locally-originated.oa.mjs';
import { ms_marked_for_deletion } from '../MSGeneralAttributeTypes/ms-marked-for-deletion.oa.mjs';
export { ms_marked_for_deletion } from '../MSGeneralAttributeTypes/ms-marked-for-deletion.oa.mjs';
import { ms_message_group_name } from '../MSGeneralAttributeTypes/ms-message-group-name.oa.mjs';
export { ms_message_group_name } from '../MSGeneralAttributeTypes/ms-message-group-name.oa.mjs';
import { ms_message_notes } from '../MSGeneralAttributeTypes/ms-message-notes.oa.mjs';
export { ms_message_notes } from '../MSGeneralAttributeTypes/ms-message-notes.oa.mjs';
import { mt_message_submission_envelope } from '../MSGeneralAttributeTypes/mt-message-submission-envelope.oa.mjs';
export { mt_message_submission_envelope } from '../MSGeneralAttributeTypes/mt-message-submission-envelope.oa.mjs';
import { mt_multiple_originator_certificates } from '../MSGeneralAttributeTypes/mt-multiple-originator-certificates.oa.mjs';
export { mt_multiple_originator_certificates } from '../MSGeneralAttributeTypes/mt-multiple-originator-certificates.oa.mjs';
import { ms_originated } from '../MSGeneralAttributeTypes/ms-originated.oa.mjs';
export { ms_originated } from '../MSGeneralAttributeTypes/ms-originated.oa.mjs';
import { ms_submission_error } from '../MSGeneralAttributeTypes/ms-submission-error.oa.mjs';
export { ms_submission_error } from '../MSGeneralAttributeTypes/ms-submission-error.oa.mjs';
import { mt_originating_MTA_certificate } from '../MSGeneralAttributeTypes/mt-originating-MTA-certificate.oa.mjs';
export { mt_originating_MTA_certificate } from '../MSGeneralAttributeTypes/mt-originating-MTA-certificate.oa.mjs';
import { mt_originator_report_request } from '../MSGeneralAttributeTypes/mt-originator-report-request.oa.mjs';
export { mt_originator_report_request } from '../MSGeneralAttributeTypes/mt-originator-report-request.oa.mjs';
import { mt_originator_return_address } from '../MSGeneralAttributeTypes/mt-originator-return-address.oa.mjs';
export { mt_originator_return_address } from '../MSGeneralAttributeTypes/mt-originator-return-address.oa.mjs';
import { mt_per_message_indicators } from '../MSGeneralAttributeTypes/mt-per-message-indicators.oa.mjs';
export { mt_per_message_indicators } from '../MSGeneralAttributeTypes/mt-per-message-indicators.oa.mjs';
import { mt_per_recipient_message_submission_fields } from '../MSGeneralAttributeTypes/mt-per-recipient-message-submission-fields.oa.mjs';
export { mt_per_recipient_message_submission_fields } from '../MSGeneralAttributeTypes/mt-per-recipient-message-submission-fields.oa.mjs';
import { mt_per_recipient_probe_submission_fields } from '../MSGeneralAttributeTypes/mt-per-recipient-probe-submission-fields.oa.mjs';
export { mt_per_recipient_probe_submission_fields } from '../MSGeneralAttributeTypes/mt-per-recipient-probe-submission-fields.oa.mjs';
import { mt_probe_origin_authentication_check } from '../MSGeneralAttributeTypes/mt-probe-origin-authentication-check.oa.mjs';
export { mt_probe_origin_authentication_check } from '../MSGeneralAttributeTypes/mt-probe-origin-authentication-check.oa.mjs';
import { mt_probe_submission_envelope } from '../MSGeneralAttributeTypes/mt-probe-submission-envelope.oa.mjs';
export { mt_probe_submission_envelope } from '../MSGeneralAttributeTypes/mt-probe-submission-envelope.oa.mjs';
import { mt_proof_of_submission } from '../MSGeneralAttributeTypes/mt-proof-of-submission.oa.mjs';
export { mt_proof_of_submission } from '../MSGeneralAttributeTypes/mt-proof-of-submission.oa.mjs';
import { mt_recipient_certificate } from '../MSGeneralAttributeTypes/mt-recipient-certificate.oa.mjs';
export { mt_recipient_certificate } from '../MSGeneralAttributeTypes/mt-recipient-certificate.oa.mjs';
import { ms_recipient_names } from '../MSGeneralAttributeTypes/ms-recipient-names.oa.mjs';
export { ms_recipient_names } from '../MSGeneralAttributeTypes/ms-recipient-names.oa.mjs';
import { mt_recipient_reassignment_prohibited } from '../MSGeneralAttributeTypes/mt-recipient-reassignment-prohibited.oa.mjs';
export { mt_recipient_reassignment_prohibited } from '../MSGeneralAttributeTypes/mt-recipient-reassignment-prohibited.oa.mjs';
import { ms_signature_verification_status } from '../MSGeneralAttributeTypes/ms-signature-verification-status.oa.mjs';
export { ms_signature_verification_status } from '../MSGeneralAttributeTypes/ms-signature-verification-status.oa.mjs';
import { ms_storage_period } from '../MSGeneralAttributeTypes/ms-storage-period.oa.mjs';
export { ms_storage_period } from '../MSGeneralAttributeTypes/ms-storage-period.oa.mjs';
import { ms_storage_time } from '../MSGeneralAttributeTypes/ms-storage-time.oa.mjs';
export { ms_storage_time } from '../MSGeneralAttributeTypes/ms-storage-time.oa.mjs';
import { mt_trace_information } from '../MSGeneralAttributeTypes/mt-trace-information.oa.mjs';
export { mt_trace_information } from '../MSGeneralAttributeTypes/mt-trace-information.oa.mjs';

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
