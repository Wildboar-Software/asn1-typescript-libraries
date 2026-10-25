/* eslint-disable */
import {
    type INTEGER,
    type ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    ASN1Construction as _Construction,
    ASN1UniversalType as _UniversalType,
    ObjectIdentifier as _OID,
    External as _External,
    EmbeddedPDV as _PDV,
    ASN1ConstructionError as _ConstructionError,
} from '@wildboar/asn1';
import * as $ from '@wildboar/asn1/functional';

/**
 * @summary SecurityProblem
 * @description
 *
 * Defined in ITU-T X.411 (1999) (§8).
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
export const SecurityProblem_assemby_instructions_conflict_with_security_services = 0 satisfies SecurityProblem; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary SecurityProblem_assemby_instructions_conflict_with_security_services
 * @constant
 * @type {number}
 */
export const assemby_instructions_conflict_with_security_services = SecurityProblem_assemby_instructions_conflict_with_security_services satisfies SecurityProblem; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary SecurityProblem_authentication_problem
 * @constant
 * @type {number}
 */
export const SecurityProblem_authentication_problem = 1 satisfies SecurityProblem; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary SecurityProblem_authentication_problem
 * @constant
 * @type {number}
 */
export const authentication_problem = SecurityProblem_authentication_problem satisfies SecurityProblem; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary SecurityProblem_authentication_failure_on_subject_message
 * @constant
 * @type {number}
 */
export const SecurityProblem_authentication_failure_on_subject_message = 2 satisfies SecurityProblem; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary SecurityProblem_authentication_failure_on_subject_message
 * @constant
 * @type {number}
 */
export const authentication_failure_on_subject_message = SecurityProblem_authentication_failure_on_subject_message satisfies SecurityProblem; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary SecurityProblem_confidentiality_association_problem
 * @constant
 * @type {number}
 */
export const SecurityProblem_confidentiality_association_problem = 3 satisfies SecurityProblem; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary SecurityProblem_confidentiality_association_problem
 * @constant
 * @type {number}
 */
export const confidentiality_association_problem = SecurityProblem_confidentiality_association_problem satisfies SecurityProblem; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary SecurityProblem_decryption_failed
 * @constant
 * @type {number}
 */
export const SecurityProblem_decryption_failed = 4 satisfies SecurityProblem; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary SecurityProblem_decryption_failed
 * @constant
 * @type {number}
 */
export const decryption_failed = SecurityProblem_decryption_failed satisfies SecurityProblem; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary SecurityProblem_decryption_key_unobtainable
 * @constant
 * @type {number}
 */
export const SecurityProblem_decryption_key_unobtainable = 5 satisfies SecurityProblem; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary SecurityProblem_decryption_key_unobtainable
 * @constant
 * @type {number}
 */
export const decryption_key_unobtainable = SecurityProblem_decryption_key_unobtainable satisfies SecurityProblem; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary SecurityProblem_failure_of_proof_of_message
 * @constant
 * @type {number}
 */
export const SecurityProblem_failure_of_proof_of_message = 6 satisfies SecurityProblem; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary SecurityProblem_failure_of_proof_of_message
 * @constant
 * @type {number}
 */
export const failure_of_proof_of_message = SecurityProblem_failure_of_proof_of_message satisfies SecurityProblem; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary SecurityProblem_forbidden_user_security_label_register
 * @constant
 * @type {number}
 */
export const SecurityProblem_forbidden_user_security_label_register = 7 satisfies SecurityProblem; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary SecurityProblem_forbidden_user_security_label_register
 * @constant
 * @type {number}
 */
export const forbidden_user_security_label_register = SecurityProblem_forbidden_user_security_label_register satisfies SecurityProblem; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary SecurityProblem_incompatible_change_with_original_security_context
 * @constant
 * @type {number}
 */
export const SecurityProblem_incompatible_change_with_original_security_context = 8 satisfies SecurityProblem; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary SecurityProblem_incompatible_change_with_original_security_context
 * @constant
 * @type {number}
 */
export const incompatible_change_with_original_security_context = SecurityProblem_incompatible_change_with_original_security_context satisfies SecurityProblem; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary SecurityProblem_integrity_failure_on_subject_message
 * @constant
 * @type {number}
 */
export const SecurityProblem_integrity_failure_on_subject_message = 9 satisfies SecurityProblem; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary SecurityProblem_integrity_failure_on_subject_message
 * @constant
 * @type {number}
 */
export const integrity_failure_on_subject_message = SecurityProblem_integrity_failure_on_subject_message satisfies SecurityProblem; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary SecurityProblem_invalid_security_label
 * @constant
 * @type {number}
 */
export const SecurityProblem_invalid_security_label = 10 satisfies SecurityProblem; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary SecurityProblem_invalid_security_label
 * @constant
 * @type {number}
 */
export const invalid_security_label = SecurityProblem_invalid_security_label satisfies SecurityProblem; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary SecurityProblem_invalid_security_label_update
 * @constant
 * @type {number}
 */
export const SecurityProblem_invalid_security_label_update = 11 satisfies SecurityProblem; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary SecurityProblem_invalid_security_label_update
 * @constant
 * @type {number}
 */
export const invalid_security_label_update = SecurityProblem_invalid_security_label_update satisfies SecurityProblem; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary SecurityProblem_key_failure
 * @constant
 * @type {number}
 */
export const SecurityProblem_key_failure = 12 satisfies SecurityProblem; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary SecurityProblem_key_failure
 * @constant
 * @type {number}
 */
export const key_failure = SecurityProblem_key_failure satisfies SecurityProblem; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary SecurityProblem_mandatory_parameter_absence
 * @constant
 * @type {number}
 */
export const SecurityProblem_mandatory_parameter_absence = 13 satisfies SecurityProblem; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary SecurityProblem_mandatory_parameter_absence
 * @constant
 * @type {number}
 */
export const mandatory_parameter_absence = SecurityProblem_mandatory_parameter_absence satisfies SecurityProblem; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary SecurityProblem_operation_security_failure
 * @constant
 * @type {number}
 */
export const SecurityProblem_operation_security_failure = 14 satisfies SecurityProblem; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary SecurityProblem_operation_security_failure
 * @constant
 * @type {number}
 */
export const operation_security_failure = SecurityProblem_operation_security_failure satisfies SecurityProblem; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary SecurityProblem_redirection_prohibited
 * @constant
 * @type {number}
 */
export const SecurityProblem_redirection_prohibited = 15 satisfies SecurityProblem; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary SecurityProblem_redirection_prohibited
 * @constant
 * @type {number}
 */
export const redirection_prohibited = SecurityProblem_redirection_prohibited satisfies SecurityProblem; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary SecurityProblem_refused_alternate_recipient_name
 * @constant
 * @type {number}
 */
export const SecurityProblem_refused_alternate_recipient_name = 16 satisfies SecurityProblem; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary SecurityProblem_refused_alternate_recipient_name
 * @constant
 * @type {number}
 */
export const refused_alternate_recipient_name = SecurityProblem_refused_alternate_recipient_name satisfies SecurityProblem; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary SecurityProblem_repudiation_failure_of_message
 * @constant
 * @type {number}
 */
export const SecurityProblem_repudiation_failure_of_message = 17 satisfies SecurityProblem; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary SecurityProblem_repudiation_failure_of_message
 * @constant
 * @type {number}
 */
export const repudiation_failure_of_message = SecurityProblem_repudiation_failure_of_message satisfies SecurityProblem; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary SecurityProblem_responder_credentials_checking_problem
 * @constant
 * @type {number}
 */
export const SecurityProblem_responder_credentials_checking_problem = 18 satisfies SecurityProblem; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary SecurityProblem_responder_credentials_checking_problem
 * @constant
 * @type {number}
 */
export const responder_credentials_checking_problem = SecurityProblem_responder_credentials_checking_problem satisfies SecurityProblem; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary SecurityProblem_security_context_failure
 * @constant
 * @type {number}
 */
export const SecurityProblem_security_context_failure = 19 satisfies SecurityProblem; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary SecurityProblem_security_context_failure
 * @constant
 * @type {number}
 */
export const security_context_failure = SecurityProblem_security_context_failure satisfies SecurityProblem; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary SecurityProblem_security_context_problem
 * @constant
 * @type {number}
 */
export const SecurityProblem_security_context_problem = 20 satisfies SecurityProblem; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary SecurityProblem_security_context_problem
 * @constant
 * @type {number}
 */
export const security_context_problem = SecurityProblem_security_context_problem satisfies SecurityProblem; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary SecurityProblem_security_policy_violation
 * @constant
 * @type {number}
 */
export const SecurityProblem_security_policy_violation = 21 satisfies SecurityProblem; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary SecurityProblem_security_policy_violation
 * @constant
 * @type {number}
 */
export const security_policy_violation = SecurityProblem_security_policy_violation satisfies SecurityProblem; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary SecurityProblem_security_services_refusal
 * @constant
 * @type {number}
 */
export const SecurityProblem_security_services_refusal = 22 satisfies SecurityProblem; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary SecurityProblem_security_services_refusal
 * @constant
 * @type {number}
 */
export const security_services_refusal = SecurityProblem_security_services_refusal satisfies SecurityProblem; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary SecurityProblem_token_decryption_failed
 * @constant
 * @type {number}
 */
export const SecurityProblem_token_decryption_failed = 23 satisfies SecurityProblem; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary SecurityProblem_token_decryption_failed
 * @constant
 * @type {number}
 */
export const token_decryption_failed = SecurityProblem_token_decryption_failed satisfies SecurityProblem; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary SecurityProblem_token_error
 * @constant
 * @type {number}
 */
export const SecurityProblem_token_error = 24 satisfies SecurityProblem; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary SecurityProblem_token_error
 * @constant
 * @type {number}
 */
export const token_error = SecurityProblem_token_error satisfies SecurityProblem; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary SecurityProblem_unable_to_aggregate_security_labels
 * @constant
 * @type {number}
 */
export const SecurityProblem_unable_to_aggregate_security_labels = 25 satisfies SecurityProblem; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary SecurityProblem_unable_to_aggregate_security_labels
 * @constant
 * @type {number}
 */
export const unable_to_aggregate_security_labels = SecurityProblem_unable_to_aggregate_security_labels satisfies SecurityProblem; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary SecurityProblem_unauthorised_dl_name
 * @constant
 * @type {number}
 */
export const SecurityProblem_unauthorised_dl_name = 26 satisfies SecurityProblem; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary SecurityProblem_unauthorised_dl_name
 * @constant
 * @type {number}
 */
export const unauthorised_dl_name = SecurityProblem_unauthorised_dl_name satisfies SecurityProblem; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary SecurityProblem_unauthorised_entry_class
 * @constant
 * @type {number}
 */
export const SecurityProblem_unauthorised_entry_class = 27 satisfies SecurityProblem; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary SecurityProblem_unauthorised_entry_class
 * @constant
 * @type {number}
 */
export const unauthorised_entry_class = SecurityProblem_unauthorised_entry_class satisfies SecurityProblem; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary SecurityProblem_unauthorised_originally_intended_recipient_name
 * @constant
 * @type {number}
 */
export const SecurityProblem_unauthorised_originally_intended_recipient_name = 28 satisfies SecurityProblem; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary SecurityProblem_unauthorised_originally_intended_recipient_name
 * @constant
 * @type {number}
 */
export const unauthorised_originally_intended_recipient_name = SecurityProblem_unauthorised_originally_intended_recipient_name satisfies SecurityProblem; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary SecurityProblem_unauthorised_originator_name
 * @constant
 * @type {number}
 */
export const SecurityProblem_unauthorised_originator_name = 29 satisfies SecurityProblem; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary SecurityProblem_unauthorised_originator_name
 * @constant
 * @type {number}
 */
export const unauthorised_originator_name = SecurityProblem_unauthorised_originator_name satisfies SecurityProblem; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary SecurityProblem_unauthorised_recipient_name
 * @constant
 * @type {number}
 */
export const SecurityProblem_unauthorised_recipient_name = 30 satisfies SecurityProblem; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary SecurityProblem_unauthorised_recipient_name
 * @constant
 * @type {number}
 */
export const unauthorised_recipient_name = SecurityProblem_unauthorised_recipient_name satisfies SecurityProblem; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary SecurityProblem_unauthorised_security_label_update
 * @constant
 * @type {number}
 */
export const SecurityProblem_unauthorised_security_label_update = 31 satisfies SecurityProblem; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary SecurityProblem_unauthorised_security_label_update
 * @constant
 * @type {number}
 */
export const unauthorised_security_label_update = SecurityProblem_unauthorised_security_label_update satisfies SecurityProblem; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary SecurityProblem_unauthorised_user_name
 * @constant
 * @type {number}
 */
export const SecurityProblem_unauthorised_user_name = 32 satisfies SecurityProblem; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary SecurityProblem_unauthorised_user_name
 * @constant
 * @type {number}
 */
export const unauthorised_user_name = SecurityProblem_unauthorised_user_name satisfies SecurityProblem; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary SecurityProblem_unknown_security_label
 * @constant
 * @type {number}
 */
export const SecurityProblem_unknown_security_label = 33 satisfies SecurityProblem; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary SecurityProblem_unknown_security_label
 * @constant
 * @type {number}
 */
export const unknown_security_label = SecurityProblem_unknown_security_label satisfies SecurityProblem; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary SecurityProblem_unsupported_algorithm_identifier
 * @constant
 * @type {number}
 */
export const SecurityProblem_unsupported_algorithm_identifier = 34 satisfies SecurityProblem; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary SecurityProblem_unsupported_algorithm_identifier
 * @constant
 * @type {number}
 */
export const unsupported_algorithm_identifier = SecurityProblem_unsupported_algorithm_identifier satisfies SecurityProblem; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary SecurityProblem_unsupported_security_policy
 * @constant
 * @type {number}
 */
export const SecurityProblem_unsupported_security_policy = 35 satisfies SecurityProblem; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary SecurityProblem_unsupported_security_policy
 * @constant
 * @type {number}
 */
export const unsupported_security_policy = SecurityProblem_unsupported_security_policy satisfies SecurityProblem; /* SHORT_NAMED_INTEGER_VALUE */


export const _decode_SecurityProblem = $._decodeInteger;


export const _encode_SecurityProblem = $._encodeInteger;


/* eslint-enable */
