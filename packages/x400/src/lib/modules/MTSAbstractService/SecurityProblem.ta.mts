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

/**
 * @summary SecurityProblem_assemby_instructions_conflict_with_security_services
 * @constant
 * @type {number}
 */
export const SecurityProblem_assemby_instructions_conflict_with_security_services: SecurityProblem = 0; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary SecurityProblem_assemby_instructions_conflict_with_security_services
 * @constant
 * @type {number}
 */
export const assemby_instructions_conflict_with_security_services: SecurityProblem = SecurityProblem_assemby_instructions_conflict_with_security_services; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary SecurityProblem_authentication_problem
 * @constant
 * @type {number}
 */
export const SecurityProblem_authentication_problem: SecurityProblem = 1; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary SecurityProblem_authentication_problem
 * @constant
 * @type {number}
 */
export const authentication_problem: SecurityProblem = SecurityProblem_authentication_problem; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary SecurityProblem_authentication_failure_on_subject_message
 * @constant
 * @type {number}
 */
export const SecurityProblem_authentication_failure_on_subject_message: SecurityProblem = 2; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary SecurityProblem_authentication_failure_on_subject_message
 * @constant
 * @type {number}
 */
export const authentication_failure_on_subject_message: SecurityProblem = SecurityProblem_authentication_failure_on_subject_message; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary SecurityProblem_confidentiality_association_problem
 * @constant
 * @type {number}
 */
export const SecurityProblem_confidentiality_association_problem: SecurityProblem = 3; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary SecurityProblem_confidentiality_association_problem
 * @constant
 * @type {number}
 */
export const confidentiality_association_problem: SecurityProblem = SecurityProblem_confidentiality_association_problem; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary SecurityProblem_decryption_failed
 * @constant
 * @type {number}
 */
export const SecurityProblem_decryption_failed: SecurityProblem = 4; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary SecurityProblem_decryption_failed
 * @constant
 * @type {number}
 */
export const decryption_failed: SecurityProblem = SecurityProblem_decryption_failed; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary SecurityProblem_decryption_key_unobtainable
 * @constant
 * @type {number}
 */
export const SecurityProblem_decryption_key_unobtainable: SecurityProblem = 5; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary SecurityProblem_decryption_key_unobtainable
 * @constant
 * @type {number}
 */
export const decryption_key_unobtainable: SecurityProblem = SecurityProblem_decryption_key_unobtainable; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary SecurityProblem_failure_of_proof_of_message
 * @constant
 * @type {number}
 */
export const SecurityProblem_failure_of_proof_of_message: SecurityProblem = 6; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary SecurityProblem_failure_of_proof_of_message
 * @constant
 * @type {number}
 */
export const failure_of_proof_of_message: SecurityProblem = SecurityProblem_failure_of_proof_of_message; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary SecurityProblem_forbidden_user_security_label_register
 * @constant
 * @type {number}
 */
export const SecurityProblem_forbidden_user_security_label_register: SecurityProblem = 7; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary SecurityProblem_forbidden_user_security_label_register
 * @constant
 * @type {number}
 */
export const forbidden_user_security_label_register: SecurityProblem = SecurityProblem_forbidden_user_security_label_register; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary SecurityProblem_incompatible_change_with_original_security_context
 * @constant
 * @type {number}
 */
export const SecurityProblem_incompatible_change_with_original_security_context: SecurityProblem = 8; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary SecurityProblem_incompatible_change_with_original_security_context
 * @constant
 * @type {number}
 */
export const incompatible_change_with_original_security_context: SecurityProblem = SecurityProblem_incompatible_change_with_original_security_context; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary SecurityProblem_integrity_failure_on_subject_message
 * @constant
 * @type {number}
 */
export const SecurityProblem_integrity_failure_on_subject_message: SecurityProblem = 9; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary SecurityProblem_integrity_failure_on_subject_message
 * @constant
 * @type {number}
 */
export const integrity_failure_on_subject_message: SecurityProblem = SecurityProblem_integrity_failure_on_subject_message; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary SecurityProblem_invalid_security_label
 * @constant
 * @type {number}
 */
export const SecurityProblem_invalid_security_label: SecurityProblem = 10; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary SecurityProblem_invalid_security_label
 * @constant
 * @type {number}
 */
export const invalid_security_label: SecurityProblem = SecurityProblem_invalid_security_label; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary SecurityProblem_invalid_security_label_update
 * @constant
 * @type {number}
 */
export const SecurityProblem_invalid_security_label_update: SecurityProblem = 11; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary SecurityProblem_invalid_security_label_update
 * @constant
 * @type {number}
 */
export const invalid_security_label_update: SecurityProblem = SecurityProblem_invalid_security_label_update; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary SecurityProblem_key_failure
 * @constant
 * @type {number}
 */
export const SecurityProblem_key_failure: SecurityProblem = 12; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary SecurityProblem_key_failure
 * @constant
 * @type {number}
 */
export const key_failure: SecurityProblem = SecurityProblem_key_failure; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary SecurityProblem_mandatory_parameter_absence
 * @constant
 * @type {number}
 */
export const SecurityProblem_mandatory_parameter_absence: SecurityProblem = 13; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary SecurityProblem_mandatory_parameter_absence
 * @constant
 * @type {number}
 */
export const mandatory_parameter_absence: SecurityProblem = SecurityProblem_mandatory_parameter_absence; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary SecurityProblem_operation_security_failure
 * @constant
 * @type {number}
 */
export const SecurityProblem_operation_security_failure: SecurityProblem = 14; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary SecurityProblem_operation_security_failure
 * @constant
 * @type {number}
 */
export const operation_security_failure: SecurityProblem = SecurityProblem_operation_security_failure; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary SecurityProblem_redirection_prohibited
 * @constant
 * @type {number}
 */
export const SecurityProblem_redirection_prohibited: SecurityProblem = 15; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary SecurityProblem_redirection_prohibited
 * @constant
 * @type {number}
 */
export const redirection_prohibited: SecurityProblem = SecurityProblem_redirection_prohibited; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary SecurityProblem_refused_alternate_recipient_name
 * @constant
 * @type {number}
 */
export const SecurityProblem_refused_alternate_recipient_name: SecurityProblem = 16; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary SecurityProblem_refused_alternate_recipient_name
 * @constant
 * @type {number}
 */
export const refused_alternate_recipient_name: SecurityProblem = SecurityProblem_refused_alternate_recipient_name; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary SecurityProblem_repudiation_failure_of_message
 * @constant
 * @type {number}
 */
export const SecurityProblem_repudiation_failure_of_message: SecurityProblem = 17; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary SecurityProblem_repudiation_failure_of_message
 * @constant
 * @type {number}
 */
export const repudiation_failure_of_message: SecurityProblem = SecurityProblem_repudiation_failure_of_message; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary SecurityProblem_responder_credentials_checking_problem
 * @constant
 * @type {number}
 */
export const SecurityProblem_responder_credentials_checking_problem: SecurityProblem = 18; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary SecurityProblem_responder_credentials_checking_problem
 * @constant
 * @type {number}
 */
export const responder_credentials_checking_problem: SecurityProblem = SecurityProblem_responder_credentials_checking_problem; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary SecurityProblem_security_context_failure
 * @constant
 * @type {number}
 */
export const SecurityProblem_security_context_failure: SecurityProblem = 19; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary SecurityProblem_security_context_failure
 * @constant
 * @type {number}
 */
export const security_context_failure: SecurityProblem = SecurityProblem_security_context_failure; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary SecurityProblem_security_context_problem
 * @constant
 * @type {number}
 */
export const SecurityProblem_security_context_problem: SecurityProblem = 20; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary SecurityProblem_security_context_problem
 * @constant
 * @type {number}
 */
export const security_context_problem: SecurityProblem = SecurityProblem_security_context_problem; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary SecurityProblem_security_policy_violation
 * @constant
 * @type {number}
 */
export const SecurityProblem_security_policy_violation: SecurityProblem = 21; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary SecurityProblem_security_policy_violation
 * @constant
 * @type {number}
 */
export const security_policy_violation: SecurityProblem = SecurityProblem_security_policy_violation; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary SecurityProblem_security_services_refusal
 * @constant
 * @type {number}
 */
export const SecurityProblem_security_services_refusal: SecurityProblem = 22; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary SecurityProblem_security_services_refusal
 * @constant
 * @type {number}
 */
export const security_services_refusal: SecurityProblem = SecurityProblem_security_services_refusal; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary SecurityProblem_token_decryption_failed
 * @constant
 * @type {number}
 */
export const SecurityProblem_token_decryption_failed: SecurityProblem = 23; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary SecurityProblem_token_decryption_failed
 * @constant
 * @type {number}
 */
export const token_decryption_failed: SecurityProblem = SecurityProblem_token_decryption_failed; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary SecurityProblem_token_error
 * @constant
 * @type {number}
 */
export const SecurityProblem_token_error: SecurityProblem = 24; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary SecurityProblem_token_error
 * @constant
 * @type {number}
 */
export const token_error: SecurityProblem = SecurityProblem_token_error; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary SecurityProblem_unable_to_aggregate_security_labels
 * @constant
 * @type {number}
 */
export const SecurityProblem_unable_to_aggregate_security_labels: SecurityProblem = 25; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary SecurityProblem_unable_to_aggregate_security_labels
 * @constant
 * @type {number}
 */
export const unable_to_aggregate_security_labels: SecurityProblem = SecurityProblem_unable_to_aggregate_security_labels; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary SecurityProblem_unauthorised_dl_name
 * @constant
 * @type {number}
 */
export const SecurityProblem_unauthorised_dl_name: SecurityProblem = 26; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary SecurityProblem_unauthorised_dl_name
 * @constant
 * @type {number}
 */
export const unauthorised_dl_name: SecurityProblem = SecurityProblem_unauthorised_dl_name; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary SecurityProblem_unauthorised_entry_class
 * @constant
 * @type {number}
 */
export const SecurityProblem_unauthorised_entry_class: SecurityProblem = 27; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary SecurityProblem_unauthorised_entry_class
 * @constant
 * @type {number}
 */
export const unauthorised_entry_class: SecurityProblem = SecurityProblem_unauthorised_entry_class; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary SecurityProblem_unauthorised_originally_intended_recipient_name
 * @constant
 * @type {number}
 */
export const SecurityProblem_unauthorised_originally_intended_recipient_name: SecurityProblem = 28; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary SecurityProblem_unauthorised_originally_intended_recipient_name
 * @constant
 * @type {number}
 */
export const unauthorised_originally_intended_recipient_name: SecurityProblem = SecurityProblem_unauthorised_originally_intended_recipient_name; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary SecurityProblem_unauthorised_originator_name
 * @constant
 * @type {number}
 */
export const SecurityProblem_unauthorised_originator_name: SecurityProblem = 29; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary SecurityProblem_unauthorised_originator_name
 * @constant
 * @type {number}
 */
export const unauthorised_originator_name: SecurityProblem = SecurityProblem_unauthorised_originator_name; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary SecurityProblem_unauthorised_recipient_name
 * @constant
 * @type {number}
 */
export const SecurityProblem_unauthorised_recipient_name: SecurityProblem = 30; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary SecurityProblem_unauthorised_recipient_name
 * @constant
 * @type {number}
 */
export const unauthorised_recipient_name: SecurityProblem = SecurityProblem_unauthorised_recipient_name; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary SecurityProblem_unauthorised_security_label_update
 * @constant
 * @type {number}
 */
export const SecurityProblem_unauthorised_security_label_update: SecurityProblem = 31; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary SecurityProblem_unauthorised_security_label_update
 * @constant
 * @type {number}
 */
export const unauthorised_security_label_update: SecurityProblem = SecurityProblem_unauthorised_security_label_update; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary SecurityProblem_unauthorised_user_name
 * @constant
 * @type {number}
 */
export const SecurityProblem_unauthorised_user_name: SecurityProblem = 32; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary SecurityProblem_unauthorised_user_name
 * @constant
 * @type {number}
 */
export const unauthorised_user_name: SecurityProblem = SecurityProblem_unauthorised_user_name; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary SecurityProblem_unknown_security_label
 * @constant
 * @type {number}
 */
export const SecurityProblem_unknown_security_label: SecurityProblem = 33; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary SecurityProblem_unknown_security_label
 * @constant
 * @type {number}
 */
export const unknown_security_label: SecurityProblem = SecurityProblem_unknown_security_label; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary SecurityProblem_unsupported_algorithm_identifier
 * @constant
 * @type {number}
 */
export const SecurityProblem_unsupported_algorithm_identifier: SecurityProblem = 34; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary SecurityProblem_unsupported_algorithm_identifier
 * @constant
 * @type {number}
 */
export const unsupported_algorithm_identifier: SecurityProblem = SecurityProblem_unsupported_algorithm_identifier; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary SecurityProblem_unsupported_security_policy
 * @constant
 * @type {number}
 */
export const SecurityProblem_unsupported_security_policy: SecurityProblem = 35; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary SecurityProblem_unsupported_security_policy
 * @constant
 * @type {number}
 */
export const unsupported_security_policy: SecurityProblem = SecurityProblem_unsupported_security_policy; /* SHORT_NAMED_INTEGER_VALUE */


export const _decode_SecurityProblem = $._decodeInteger;


export const _encode_SecurityProblem = $._encodeInteger;


/* eslint-enable */
