/* eslint-disable */
import {
    INTEGER,
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

/* START_OF_SYMBOL_DEFINITION SecurityProblem */
/**
 * @summary SecurityProblem
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * SecurityProblem  ::=  INTEGER {
 *   assemby-instructions-conflict-with-security-services(0),
 *   authentication-problem(1), authentication-failure-on-subject-message(2),
 *   confidentiality-association-problem(3), decryption-failed(4),
 *   decryption-key-unobtainable(5), failure-of-proof-of-message(6),
 *   forbidden-user-security-label-register(7),
 *   incompatible-change-with-original-security-context(8),
 *   integrity-failure-on-subject-message(9), invalid-security-label(10),
 *   invalid-security-label-update(11), key-failure(12),
 *   mandatory-parameter-absence(13), operation-security-failure(14),
 *   redirection-prohibited(15), refused-alternate-recipient-name(16),
 *   repudiation-failure-of-message(17),
 *   responder-credentials-checking-problem(18), security-context-failure(19),
 *   security-context-problem(20), security-policy-violation(21),
 *   security-services-refusal(22), token-decryption-failed(23), token-error(24),
 *   unable-to-aggregate-security-labels(25), unauthorised-dl-name(26),
 *   unauthorised-entry-class(27),
 *   unauthorised-originally-intended-recipient-name(28),
 *   unauthorised-originator-name(29), unauthorised-recipient-name(30),
 *   unauthorised-security-label-update(31), unauthorised-user-name(32),
 *   unknown-security-label(33), unsupported-algorithm-identifier(34),
 *   unsupported-security-policy(35)}(0..ub-security-problems)
 * ```
 */
export type SecurityProblem = INTEGER;
/* END_OF_SYMBOL_DEFINITION SecurityProblem */

/* START_OF_SYMBOL_DEFINITION SecurityProblem_assemby_instructions_conflict_with_security_services */
/**
 * @summary SecurityProblem_assemby_instructions_conflict_with_security_services
 * @constant
 * @type {number}
 */
export const SecurityProblem_assemby_instructions_conflict_with_security_services: SecurityProblem = 0; /* LONG_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION SecurityProblem_assemby_instructions_conflict_with_security_services */

/* START_OF_SYMBOL_DEFINITION assemby_instructions_conflict_with_security_services */
/**
 * @summary SecurityProblem_assemby_instructions_conflict_with_security_services
 * @constant
 * @type {number}
 */
export const assemby_instructions_conflict_with_security_services: SecurityProblem = SecurityProblem_assemby_instructions_conflict_with_security_services; /* SHORT_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION assemby_instructions_conflict_with_security_services */

/* START_OF_SYMBOL_DEFINITION SecurityProblem_authentication_problem */
/**
 * @summary SecurityProblem_authentication_problem
 * @constant
 * @type {number}
 */
export const SecurityProblem_authentication_problem: SecurityProblem = 1; /* LONG_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION SecurityProblem_authentication_problem */

/* START_OF_SYMBOL_DEFINITION authentication_problem */
/**
 * @summary SecurityProblem_authentication_problem
 * @constant
 * @type {number}
 */
export const authentication_problem: SecurityProblem = SecurityProblem_authentication_problem; /* SHORT_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION authentication_problem */

/* START_OF_SYMBOL_DEFINITION SecurityProblem_authentication_failure_on_subject_message */
/**
 * @summary SecurityProblem_authentication_failure_on_subject_message
 * @constant
 * @type {number}
 */
export const SecurityProblem_authentication_failure_on_subject_message: SecurityProblem = 2; /* LONG_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION SecurityProblem_authentication_failure_on_subject_message */

/* START_OF_SYMBOL_DEFINITION authentication_failure_on_subject_message */
/**
 * @summary SecurityProblem_authentication_failure_on_subject_message
 * @constant
 * @type {number}
 */
export const authentication_failure_on_subject_message: SecurityProblem = SecurityProblem_authentication_failure_on_subject_message; /* SHORT_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION authentication_failure_on_subject_message */

/* START_OF_SYMBOL_DEFINITION SecurityProblem_confidentiality_association_problem */
/**
 * @summary SecurityProblem_confidentiality_association_problem
 * @constant
 * @type {number}
 */
export const SecurityProblem_confidentiality_association_problem: SecurityProblem = 3; /* LONG_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION SecurityProblem_confidentiality_association_problem */

/* START_OF_SYMBOL_DEFINITION confidentiality_association_problem */
/**
 * @summary SecurityProblem_confidentiality_association_problem
 * @constant
 * @type {number}
 */
export const confidentiality_association_problem: SecurityProblem = SecurityProblem_confidentiality_association_problem; /* SHORT_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION confidentiality_association_problem */

/* START_OF_SYMBOL_DEFINITION SecurityProblem_decryption_failed */
/**
 * @summary SecurityProblem_decryption_failed
 * @constant
 * @type {number}
 */
export const SecurityProblem_decryption_failed: SecurityProblem = 4; /* LONG_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION SecurityProblem_decryption_failed */

/* START_OF_SYMBOL_DEFINITION decryption_failed */
/**
 * @summary SecurityProblem_decryption_failed
 * @constant
 * @type {number}
 */
export const decryption_failed: SecurityProblem = SecurityProblem_decryption_failed; /* SHORT_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION decryption_failed */

/* START_OF_SYMBOL_DEFINITION SecurityProblem_decryption_key_unobtainable */
/**
 * @summary SecurityProblem_decryption_key_unobtainable
 * @constant
 * @type {number}
 */
export const SecurityProblem_decryption_key_unobtainable: SecurityProblem = 5; /* LONG_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION SecurityProblem_decryption_key_unobtainable */

/* START_OF_SYMBOL_DEFINITION decryption_key_unobtainable */
/**
 * @summary SecurityProblem_decryption_key_unobtainable
 * @constant
 * @type {number}
 */
export const decryption_key_unobtainable: SecurityProblem = SecurityProblem_decryption_key_unobtainable; /* SHORT_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION decryption_key_unobtainable */

/* START_OF_SYMBOL_DEFINITION SecurityProblem_failure_of_proof_of_message */
/**
 * @summary SecurityProblem_failure_of_proof_of_message
 * @constant
 * @type {number}
 */
export const SecurityProblem_failure_of_proof_of_message: SecurityProblem = 6; /* LONG_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION SecurityProblem_failure_of_proof_of_message */

/* START_OF_SYMBOL_DEFINITION failure_of_proof_of_message */
/**
 * @summary SecurityProblem_failure_of_proof_of_message
 * @constant
 * @type {number}
 */
export const failure_of_proof_of_message: SecurityProblem = SecurityProblem_failure_of_proof_of_message; /* SHORT_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION failure_of_proof_of_message */

/* START_OF_SYMBOL_DEFINITION SecurityProblem_forbidden_user_security_label_register */
/**
 * @summary SecurityProblem_forbidden_user_security_label_register
 * @constant
 * @type {number}
 */
export const SecurityProblem_forbidden_user_security_label_register: SecurityProblem = 7; /* LONG_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION SecurityProblem_forbidden_user_security_label_register */

/* START_OF_SYMBOL_DEFINITION forbidden_user_security_label_register */
/**
 * @summary SecurityProblem_forbidden_user_security_label_register
 * @constant
 * @type {number}
 */
export const forbidden_user_security_label_register: SecurityProblem = SecurityProblem_forbidden_user_security_label_register; /* SHORT_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION forbidden_user_security_label_register */

/* START_OF_SYMBOL_DEFINITION SecurityProblem_incompatible_change_with_original_security_context */
/**
 * @summary SecurityProblem_incompatible_change_with_original_security_context
 * @constant
 * @type {number}
 */
export const SecurityProblem_incompatible_change_with_original_security_context: SecurityProblem = 8; /* LONG_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION SecurityProblem_incompatible_change_with_original_security_context */

/* START_OF_SYMBOL_DEFINITION incompatible_change_with_original_security_context */
/**
 * @summary SecurityProblem_incompatible_change_with_original_security_context
 * @constant
 * @type {number}
 */
export const incompatible_change_with_original_security_context: SecurityProblem = SecurityProblem_incompatible_change_with_original_security_context; /* SHORT_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION incompatible_change_with_original_security_context */

/* START_OF_SYMBOL_DEFINITION SecurityProblem_integrity_failure_on_subject_message */
/**
 * @summary SecurityProblem_integrity_failure_on_subject_message
 * @constant
 * @type {number}
 */
export const SecurityProblem_integrity_failure_on_subject_message: SecurityProblem = 9; /* LONG_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION SecurityProblem_integrity_failure_on_subject_message */

/* START_OF_SYMBOL_DEFINITION integrity_failure_on_subject_message */
/**
 * @summary SecurityProblem_integrity_failure_on_subject_message
 * @constant
 * @type {number}
 */
export const integrity_failure_on_subject_message: SecurityProblem = SecurityProblem_integrity_failure_on_subject_message; /* SHORT_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION integrity_failure_on_subject_message */

/* START_OF_SYMBOL_DEFINITION SecurityProblem_invalid_security_label */
/**
 * @summary SecurityProblem_invalid_security_label
 * @constant
 * @type {number}
 */
export const SecurityProblem_invalid_security_label: SecurityProblem = 10; /* LONG_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION SecurityProblem_invalid_security_label */

/* START_OF_SYMBOL_DEFINITION invalid_security_label */
/**
 * @summary SecurityProblem_invalid_security_label
 * @constant
 * @type {number}
 */
export const invalid_security_label: SecurityProblem = SecurityProblem_invalid_security_label; /* SHORT_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION invalid_security_label */

/* START_OF_SYMBOL_DEFINITION SecurityProblem_invalid_security_label_update */
/**
 * @summary SecurityProblem_invalid_security_label_update
 * @constant
 * @type {number}
 */
export const SecurityProblem_invalid_security_label_update: SecurityProblem = 11; /* LONG_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION SecurityProblem_invalid_security_label_update */

/* START_OF_SYMBOL_DEFINITION invalid_security_label_update */
/**
 * @summary SecurityProblem_invalid_security_label_update
 * @constant
 * @type {number}
 */
export const invalid_security_label_update: SecurityProblem = SecurityProblem_invalid_security_label_update; /* SHORT_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION invalid_security_label_update */

/* START_OF_SYMBOL_DEFINITION SecurityProblem_key_failure */
/**
 * @summary SecurityProblem_key_failure
 * @constant
 * @type {number}
 */
export const SecurityProblem_key_failure: SecurityProblem = 12; /* LONG_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION SecurityProblem_key_failure */

/* START_OF_SYMBOL_DEFINITION key_failure */
/**
 * @summary SecurityProblem_key_failure
 * @constant
 * @type {number}
 */
export const key_failure: SecurityProblem = SecurityProblem_key_failure; /* SHORT_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION key_failure */

/* START_OF_SYMBOL_DEFINITION SecurityProblem_mandatory_parameter_absence */
/**
 * @summary SecurityProblem_mandatory_parameter_absence
 * @constant
 * @type {number}
 */
export const SecurityProblem_mandatory_parameter_absence: SecurityProblem = 13; /* LONG_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION SecurityProblem_mandatory_parameter_absence */

/* START_OF_SYMBOL_DEFINITION mandatory_parameter_absence */
/**
 * @summary SecurityProblem_mandatory_parameter_absence
 * @constant
 * @type {number}
 */
export const mandatory_parameter_absence: SecurityProblem = SecurityProblem_mandatory_parameter_absence; /* SHORT_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION mandatory_parameter_absence */

/* START_OF_SYMBOL_DEFINITION SecurityProblem_operation_security_failure */
/**
 * @summary SecurityProblem_operation_security_failure
 * @constant
 * @type {number}
 */
export const SecurityProblem_operation_security_failure: SecurityProblem = 14; /* LONG_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION SecurityProblem_operation_security_failure */

/* START_OF_SYMBOL_DEFINITION operation_security_failure */
/**
 * @summary SecurityProblem_operation_security_failure
 * @constant
 * @type {number}
 */
export const operation_security_failure: SecurityProblem = SecurityProblem_operation_security_failure; /* SHORT_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION operation_security_failure */

/* START_OF_SYMBOL_DEFINITION SecurityProblem_redirection_prohibited */
/**
 * @summary SecurityProblem_redirection_prohibited
 * @constant
 * @type {number}
 */
export const SecurityProblem_redirection_prohibited: SecurityProblem = 15; /* LONG_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION SecurityProblem_redirection_prohibited */

/* START_OF_SYMBOL_DEFINITION redirection_prohibited */
/**
 * @summary SecurityProblem_redirection_prohibited
 * @constant
 * @type {number}
 */
export const redirection_prohibited: SecurityProblem = SecurityProblem_redirection_prohibited; /* SHORT_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION redirection_prohibited */

/* START_OF_SYMBOL_DEFINITION SecurityProblem_refused_alternate_recipient_name */
/**
 * @summary SecurityProblem_refused_alternate_recipient_name
 * @constant
 * @type {number}
 */
export const SecurityProblem_refused_alternate_recipient_name: SecurityProblem = 16; /* LONG_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION SecurityProblem_refused_alternate_recipient_name */

/* START_OF_SYMBOL_DEFINITION refused_alternate_recipient_name */
/**
 * @summary SecurityProblem_refused_alternate_recipient_name
 * @constant
 * @type {number}
 */
export const refused_alternate_recipient_name: SecurityProblem = SecurityProblem_refused_alternate_recipient_name; /* SHORT_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION refused_alternate_recipient_name */

/* START_OF_SYMBOL_DEFINITION SecurityProblem_repudiation_failure_of_message */
/**
 * @summary SecurityProblem_repudiation_failure_of_message
 * @constant
 * @type {number}
 */
export const SecurityProblem_repudiation_failure_of_message: SecurityProblem = 17; /* LONG_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION SecurityProblem_repudiation_failure_of_message */

/* START_OF_SYMBOL_DEFINITION repudiation_failure_of_message */
/**
 * @summary SecurityProblem_repudiation_failure_of_message
 * @constant
 * @type {number}
 */
export const repudiation_failure_of_message: SecurityProblem = SecurityProblem_repudiation_failure_of_message; /* SHORT_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION repudiation_failure_of_message */

/* START_OF_SYMBOL_DEFINITION SecurityProblem_responder_credentials_checking_problem */
/**
 * @summary SecurityProblem_responder_credentials_checking_problem
 * @constant
 * @type {number}
 */
export const SecurityProblem_responder_credentials_checking_problem: SecurityProblem = 18; /* LONG_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION SecurityProblem_responder_credentials_checking_problem */

/* START_OF_SYMBOL_DEFINITION responder_credentials_checking_problem */
/**
 * @summary SecurityProblem_responder_credentials_checking_problem
 * @constant
 * @type {number}
 */
export const responder_credentials_checking_problem: SecurityProblem = SecurityProblem_responder_credentials_checking_problem; /* SHORT_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION responder_credentials_checking_problem */

/* START_OF_SYMBOL_DEFINITION SecurityProblem_security_context_failure */
/**
 * @summary SecurityProblem_security_context_failure
 * @constant
 * @type {number}
 */
export const SecurityProblem_security_context_failure: SecurityProblem = 19; /* LONG_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION SecurityProblem_security_context_failure */

/* START_OF_SYMBOL_DEFINITION security_context_failure */
/**
 * @summary SecurityProblem_security_context_failure
 * @constant
 * @type {number}
 */
export const security_context_failure: SecurityProblem = SecurityProblem_security_context_failure; /* SHORT_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION security_context_failure */

/* START_OF_SYMBOL_DEFINITION SecurityProblem_security_context_problem */
/**
 * @summary SecurityProblem_security_context_problem
 * @constant
 * @type {number}
 */
export const SecurityProblem_security_context_problem: SecurityProblem = 20; /* LONG_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION SecurityProblem_security_context_problem */

/* START_OF_SYMBOL_DEFINITION security_context_problem */
/**
 * @summary SecurityProblem_security_context_problem
 * @constant
 * @type {number}
 */
export const security_context_problem: SecurityProblem = SecurityProblem_security_context_problem; /* SHORT_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION security_context_problem */

/* START_OF_SYMBOL_DEFINITION SecurityProblem_security_policy_violation */
/**
 * @summary SecurityProblem_security_policy_violation
 * @constant
 * @type {number}
 */
export const SecurityProblem_security_policy_violation: SecurityProblem = 21; /* LONG_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION SecurityProblem_security_policy_violation */

/* START_OF_SYMBOL_DEFINITION security_policy_violation */
/**
 * @summary SecurityProblem_security_policy_violation
 * @constant
 * @type {number}
 */
export const security_policy_violation: SecurityProblem = SecurityProblem_security_policy_violation; /* SHORT_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION security_policy_violation */

/* START_OF_SYMBOL_DEFINITION SecurityProblem_security_services_refusal */
/**
 * @summary SecurityProblem_security_services_refusal
 * @constant
 * @type {number}
 */
export const SecurityProblem_security_services_refusal: SecurityProblem = 22; /* LONG_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION SecurityProblem_security_services_refusal */

/* START_OF_SYMBOL_DEFINITION security_services_refusal */
/**
 * @summary SecurityProblem_security_services_refusal
 * @constant
 * @type {number}
 */
export const security_services_refusal: SecurityProblem = SecurityProblem_security_services_refusal; /* SHORT_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION security_services_refusal */

/* START_OF_SYMBOL_DEFINITION SecurityProblem_token_decryption_failed */
/**
 * @summary SecurityProblem_token_decryption_failed
 * @constant
 * @type {number}
 */
export const SecurityProblem_token_decryption_failed: SecurityProblem = 23; /* LONG_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION SecurityProblem_token_decryption_failed */

/* START_OF_SYMBOL_DEFINITION token_decryption_failed */
/**
 * @summary SecurityProblem_token_decryption_failed
 * @constant
 * @type {number}
 */
export const token_decryption_failed: SecurityProblem = SecurityProblem_token_decryption_failed; /* SHORT_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION token_decryption_failed */

/* START_OF_SYMBOL_DEFINITION SecurityProblem_token_error */
/**
 * @summary SecurityProblem_token_error
 * @constant
 * @type {number}
 */
export const SecurityProblem_token_error: SecurityProblem = 24; /* LONG_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION SecurityProblem_token_error */

/* START_OF_SYMBOL_DEFINITION token_error */
/**
 * @summary SecurityProblem_token_error
 * @constant
 * @type {number}
 */
export const token_error: SecurityProblem = SecurityProblem_token_error; /* SHORT_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION token_error */

/* START_OF_SYMBOL_DEFINITION SecurityProblem_unable_to_aggregate_security_labels */
/**
 * @summary SecurityProblem_unable_to_aggregate_security_labels
 * @constant
 * @type {number}
 */
export const SecurityProblem_unable_to_aggregate_security_labels: SecurityProblem = 25; /* LONG_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION SecurityProblem_unable_to_aggregate_security_labels */

/* START_OF_SYMBOL_DEFINITION unable_to_aggregate_security_labels */
/**
 * @summary SecurityProblem_unable_to_aggregate_security_labels
 * @constant
 * @type {number}
 */
export const unable_to_aggregate_security_labels: SecurityProblem = SecurityProblem_unable_to_aggregate_security_labels; /* SHORT_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION unable_to_aggregate_security_labels */

/* START_OF_SYMBOL_DEFINITION SecurityProblem_unauthorised_dl_name */
/**
 * @summary SecurityProblem_unauthorised_dl_name
 * @constant
 * @type {number}
 */
export const SecurityProblem_unauthorised_dl_name: SecurityProblem = 26; /* LONG_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION SecurityProblem_unauthorised_dl_name */

/* START_OF_SYMBOL_DEFINITION unauthorised_dl_name */
/**
 * @summary SecurityProblem_unauthorised_dl_name
 * @constant
 * @type {number}
 */
export const unauthorised_dl_name: SecurityProblem = SecurityProblem_unauthorised_dl_name; /* SHORT_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION unauthorised_dl_name */

/* START_OF_SYMBOL_DEFINITION SecurityProblem_unauthorised_entry_class */
/**
 * @summary SecurityProblem_unauthorised_entry_class
 * @constant
 * @type {number}
 */
export const SecurityProblem_unauthorised_entry_class: SecurityProblem = 27; /* LONG_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION SecurityProblem_unauthorised_entry_class */

/* START_OF_SYMBOL_DEFINITION unauthorised_entry_class */
/**
 * @summary SecurityProblem_unauthorised_entry_class
 * @constant
 * @type {number}
 */
export const unauthorised_entry_class: SecurityProblem = SecurityProblem_unauthorised_entry_class; /* SHORT_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION unauthorised_entry_class */

/* START_OF_SYMBOL_DEFINITION SecurityProblem_unauthorised_originally_intended_recipient_name */
/**
 * @summary SecurityProblem_unauthorised_originally_intended_recipient_name
 * @constant
 * @type {number}
 */
export const SecurityProblem_unauthorised_originally_intended_recipient_name: SecurityProblem = 28; /* LONG_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION SecurityProblem_unauthorised_originally_intended_recipient_name */

/* START_OF_SYMBOL_DEFINITION unauthorised_originally_intended_recipient_name */
/**
 * @summary SecurityProblem_unauthorised_originally_intended_recipient_name
 * @constant
 * @type {number}
 */
export const unauthorised_originally_intended_recipient_name: SecurityProblem = SecurityProblem_unauthorised_originally_intended_recipient_name; /* SHORT_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION unauthorised_originally_intended_recipient_name */

/* START_OF_SYMBOL_DEFINITION SecurityProblem_unauthorised_originator_name */
/**
 * @summary SecurityProblem_unauthorised_originator_name
 * @constant
 * @type {number}
 */
export const SecurityProblem_unauthorised_originator_name: SecurityProblem = 29; /* LONG_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION SecurityProblem_unauthorised_originator_name */

/* START_OF_SYMBOL_DEFINITION unauthorised_originator_name */
/**
 * @summary SecurityProblem_unauthorised_originator_name
 * @constant
 * @type {number}
 */
export const unauthorised_originator_name: SecurityProblem = SecurityProblem_unauthorised_originator_name; /* SHORT_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION unauthorised_originator_name */

/* START_OF_SYMBOL_DEFINITION SecurityProblem_unauthorised_recipient_name */
/**
 * @summary SecurityProblem_unauthorised_recipient_name
 * @constant
 * @type {number}
 */
export const SecurityProblem_unauthorised_recipient_name: SecurityProblem = 30; /* LONG_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION SecurityProblem_unauthorised_recipient_name */

/* START_OF_SYMBOL_DEFINITION unauthorised_recipient_name */
/**
 * @summary SecurityProblem_unauthorised_recipient_name
 * @constant
 * @type {number}
 */
export const unauthorised_recipient_name: SecurityProblem = SecurityProblem_unauthorised_recipient_name; /* SHORT_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION unauthorised_recipient_name */

/* START_OF_SYMBOL_DEFINITION SecurityProblem_unauthorised_security_label_update */
/**
 * @summary SecurityProblem_unauthorised_security_label_update
 * @constant
 * @type {number}
 */
export const SecurityProblem_unauthorised_security_label_update: SecurityProblem = 31; /* LONG_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION SecurityProblem_unauthorised_security_label_update */

/* START_OF_SYMBOL_DEFINITION unauthorised_security_label_update */
/**
 * @summary SecurityProblem_unauthorised_security_label_update
 * @constant
 * @type {number}
 */
export const unauthorised_security_label_update: SecurityProblem = SecurityProblem_unauthorised_security_label_update; /* SHORT_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION unauthorised_security_label_update */

/* START_OF_SYMBOL_DEFINITION SecurityProblem_unauthorised_user_name */
/**
 * @summary SecurityProblem_unauthorised_user_name
 * @constant
 * @type {number}
 */
export const SecurityProblem_unauthorised_user_name: SecurityProblem = 32; /* LONG_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION SecurityProblem_unauthorised_user_name */

/* START_OF_SYMBOL_DEFINITION unauthorised_user_name */
/**
 * @summary SecurityProblem_unauthorised_user_name
 * @constant
 * @type {number}
 */
export const unauthorised_user_name: SecurityProblem = SecurityProblem_unauthorised_user_name; /* SHORT_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION unauthorised_user_name */

/* START_OF_SYMBOL_DEFINITION SecurityProblem_unknown_security_label */
/**
 * @summary SecurityProblem_unknown_security_label
 * @constant
 * @type {number}
 */
export const SecurityProblem_unknown_security_label: SecurityProblem = 33; /* LONG_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION SecurityProblem_unknown_security_label */

/* START_OF_SYMBOL_DEFINITION unknown_security_label */
/**
 * @summary SecurityProblem_unknown_security_label
 * @constant
 * @type {number}
 */
export const unknown_security_label: SecurityProblem = SecurityProblem_unknown_security_label; /* SHORT_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION unknown_security_label */

/* START_OF_SYMBOL_DEFINITION SecurityProblem_unsupported_algorithm_identifier */
/**
 * @summary SecurityProblem_unsupported_algorithm_identifier
 * @constant
 * @type {number}
 */
export const SecurityProblem_unsupported_algorithm_identifier: SecurityProblem = 34; /* LONG_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION SecurityProblem_unsupported_algorithm_identifier */

/* START_OF_SYMBOL_DEFINITION unsupported_algorithm_identifier */
/**
 * @summary SecurityProblem_unsupported_algorithm_identifier
 * @constant
 * @type {number}
 */
export const unsupported_algorithm_identifier: SecurityProblem = SecurityProblem_unsupported_algorithm_identifier; /* SHORT_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION unsupported_algorithm_identifier */

/* START_OF_SYMBOL_DEFINITION SecurityProblem_unsupported_security_policy */
/**
 * @summary SecurityProblem_unsupported_security_policy
 * @constant
 * @type {number}
 */
export const SecurityProblem_unsupported_security_policy: SecurityProblem = 35; /* LONG_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION SecurityProblem_unsupported_security_policy */

/* START_OF_SYMBOL_DEFINITION unsupported_security_policy */
/**
 * @summary SecurityProblem_unsupported_security_policy
 * @constant
 * @type {number}
 */
export const unsupported_security_policy: SecurityProblem = SecurityProblem_unsupported_security_policy; /* SHORT_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION unsupported_security_policy */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_SecurityProblem */
let _cached_decoder_for_SecurityProblem: $.ASN1Decoder<SecurityProblem> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_SecurityProblem */

/* START_OF_SYMBOL_DEFINITION _decode_SecurityProblem */
/**
 * @summary Decodes an ASN.1 element into a(n) SecurityProblem
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {SecurityProblem} The decoded data structure.
 */
export function _decode_SecurityProblem(el: _Element) {
    if (!_cached_decoder_for_SecurityProblem) {
        _cached_decoder_for_SecurityProblem = $._decodeInteger;
    }
    return _cached_decoder_for_SecurityProblem(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_SecurityProblem */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_SecurityProblem */
let _cached_encoder_for_SecurityProblem: $.ASN1Encoder<SecurityProblem> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_SecurityProblem */

/* START_OF_SYMBOL_DEFINITION _encode_SecurityProblem */
/**
 * @summary Encodes a(n) SecurityProblem into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The SecurityProblem, encoded as an ASN.1 Element.
 */
export function _encode_SecurityProblem(
    value: SecurityProblem,
    elGetter: $.ASN1Encoder<SecurityProblem>
) {
    if (!_cached_encoder_for_SecurityProblem) {
        _cached_encoder_for_SecurityProblem = $._encodeInteger;
    }
    return _cached_encoder_for_SecurityProblem(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_SecurityProblem */

/* eslint-enable */
