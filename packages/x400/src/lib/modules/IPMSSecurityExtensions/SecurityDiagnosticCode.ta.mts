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
 * @summary SecurityDiagnosticCode
 * @description
 *
 * Defined in ITU-T X.420 (1999) (§15).
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * SecurityDiagnosticCode  ::=  INTEGER {
 *   integrity-failure-on-subject-message(0),
 *   integrity-failure-on-forwarded-message(1),
 *   moac-failure-on-subject-message(2), unsupported-security-policy(3),
 *   unsupported-algorithm-identifier(4), decryption-failed(5), token-error(6),
 *   unable-to-sign-notification(7), unable-to-sign-message-receipt(8),
 *   authentication-failure-on-subject-message(9),
 *   security-context-failure-message(10), message-sequence-failure(11),
 *   message-security-labelling-failure(12), repudiation-failure-of-message(13),
 *   failure-of-proof-of-message(14), signature-key-unobtainable(15),
 *   decryption-key-unobtainable(16), key-failure(17),
 *   unsupported-request-for-security-service(18),
 *   inconsistent-request-for-security-service(19),
 *   ipn-non-repudiation-provided-instead-of-content-proof(20),
 *   token-decryption-failed(21), double-enveloping-message-restoring-failure(22),
 *   unauthorised-dl-member(23), reception-security-failure(24),
 *   unsuitable-alternate-recipient(25), security-services-refusal(26),
 *   unauthorised-recipient(27), unknown-certification-authority-name(28),
 *   unknown-dl-name(29), unknown-originator-name(30), unknown-recipient-name(31),
 *   security-policy-violation(32)}
 * ```
 */
export type SecurityDiagnosticCode = INTEGER;

/**
 * @summary SecurityDiagnosticCode_integrity_failure_on_subject_message
 * @constant
 * @type {number}
 */
export const SecurityDiagnosticCode_integrity_failure_on_subject_message = 0 satisfies SecurityDiagnosticCode; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary SecurityDiagnosticCode_integrity_failure_on_subject_message
 * @constant
 * @type {number}
 */
export const integrity_failure_on_subject_message = SecurityDiagnosticCode_integrity_failure_on_subject_message; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary SecurityDiagnosticCode_integrity_failure_on_forwarded_message
 * @constant
 * @type {number}
 */
export const SecurityDiagnosticCode_integrity_failure_on_forwarded_message = 1 satisfies SecurityDiagnosticCode; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary SecurityDiagnosticCode_integrity_failure_on_forwarded_message
 * @constant
 * @type {number}
 */
export const integrity_failure_on_forwarded_message = SecurityDiagnosticCode_integrity_failure_on_forwarded_message; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary SecurityDiagnosticCode_moac_failure_on_subject_message
 * @constant
 * @type {number}
 */
export const SecurityDiagnosticCode_moac_failure_on_subject_message = 2 satisfies SecurityDiagnosticCode; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary SecurityDiagnosticCode_moac_failure_on_subject_message
 * @constant
 * @type {number}
 */
export const moac_failure_on_subject_message = SecurityDiagnosticCode_moac_failure_on_subject_message; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary SecurityDiagnosticCode_unsupported_security_policy
 * @constant
 * @type {number}
 */
export const SecurityDiagnosticCode_unsupported_security_policy = 3 satisfies SecurityDiagnosticCode; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary SecurityDiagnosticCode_unsupported_security_policy
 * @constant
 * @type {number}
 */
export const unsupported_security_policy = SecurityDiagnosticCode_unsupported_security_policy; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary SecurityDiagnosticCode_unsupported_algorithm_identifier
 * @constant
 * @type {number}
 */
export const SecurityDiagnosticCode_unsupported_algorithm_identifier = 4 satisfies SecurityDiagnosticCode; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary SecurityDiagnosticCode_unsupported_algorithm_identifier
 * @constant
 * @type {number}
 */
export const unsupported_algorithm_identifier = SecurityDiagnosticCode_unsupported_algorithm_identifier; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary SecurityDiagnosticCode_decryption_failed
 * @constant
 * @type {number}
 */
export const SecurityDiagnosticCode_decryption_failed = 5 satisfies SecurityDiagnosticCode; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary SecurityDiagnosticCode_decryption_failed
 * @constant
 * @type {number}
 */
export const decryption_failed = SecurityDiagnosticCode_decryption_failed; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary SecurityDiagnosticCode_token_error
 * @constant
 * @type {number}
 */
export const SecurityDiagnosticCode_token_error = 6 satisfies SecurityDiagnosticCode; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary SecurityDiagnosticCode_token_error
 * @constant
 * @type {number}
 */
export const token_error = SecurityDiagnosticCode_token_error; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary SecurityDiagnosticCode_unable_to_sign_notification
 * @constant
 * @type {number}
 */
export const SecurityDiagnosticCode_unable_to_sign_notification = 7 satisfies SecurityDiagnosticCode; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary SecurityDiagnosticCode_unable_to_sign_notification
 * @constant
 * @type {number}
 */
export const unable_to_sign_notification = SecurityDiagnosticCode_unable_to_sign_notification; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary SecurityDiagnosticCode_unable_to_sign_message_receipt
 * @constant
 * @type {number}
 */
export const SecurityDiagnosticCode_unable_to_sign_message_receipt = 8 satisfies SecurityDiagnosticCode; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary SecurityDiagnosticCode_unable_to_sign_message_receipt
 * @constant
 * @type {number}
 */
export const unable_to_sign_message_receipt = SecurityDiagnosticCode_unable_to_sign_message_receipt; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary SecurityDiagnosticCode_authentication_failure_on_subject_message
 * @constant
 * @type {number}
 */
export const SecurityDiagnosticCode_authentication_failure_on_subject_message = 9 satisfies SecurityDiagnosticCode; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary SecurityDiagnosticCode_authentication_failure_on_subject_message
 * @constant
 * @type {number}
 */
export const authentication_failure_on_subject_message = SecurityDiagnosticCode_authentication_failure_on_subject_message; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary SecurityDiagnosticCode_security_context_failure_message
 * @constant
 * @type {number}
 */
export const SecurityDiagnosticCode_security_context_failure_message = 10 satisfies SecurityDiagnosticCode; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary SecurityDiagnosticCode_security_context_failure_message
 * @constant
 * @type {number}
 */
export const security_context_failure_message = SecurityDiagnosticCode_security_context_failure_message; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary SecurityDiagnosticCode_message_sequence_failure
 * @constant
 * @type {number}
 */
export const SecurityDiagnosticCode_message_sequence_failure = 11 satisfies SecurityDiagnosticCode; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary SecurityDiagnosticCode_message_sequence_failure
 * @constant
 * @type {number}
 */
export const message_sequence_failure = SecurityDiagnosticCode_message_sequence_failure; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary SecurityDiagnosticCode_message_security_labelling_failure
 * @constant
 * @type {number}
 */
export const SecurityDiagnosticCode_message_security_labelling_failure = 12 satisfies SecurityDiagnosticCode; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary SecurityDiagnosticCode_message_security_labelling_failure
 * @constant
 * @type {number}
 */
export const message_security_labelling_failure = SecurityDiagnosticCode_message_security_labelling_failure; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary SecurityDiagnosticCode_repudiation_failure_of_message
 * @constant
 * @type {number}
 */
export const SecurityDiagnosticCode_repudiation_failure_of_message = 13 satisfies SecurityDiagnosticCode; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary SecurityDiagnosticCode_repudiation_failure_of_message
 * @constant
 * @type {number}
 */
export const repudiation_failure_of_message = SecurityDiagnosticCode_repudiation_failure_of_message; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary SecurityDiagnosticCode_failure_of_proof_of_message
 * @constant
 * @type {number}
 */
export const SecurityDiagnosticCode_failure_of_proof_of_message = 14 satisfies SecurityDiagnosticCode; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary SecurityDiagnosticCode_failure_of_proof_of_message
 * @constant
 * @type {number}
 */
export const failure_of_proof_of_message = SecurityDiagnosticCode_failure_of_proof_of_message; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary SecurityDiagnosticCode_signature_key_unobtainable
 * @constant
 * @type {number}
 */
export const SecurityDiagnosticCode_signature_key_unobtainable = 15 satisfies SecurityDiagnosticCode; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary SecurityDiagnosticCode_signature_key_unobtainable
 * @constant
 * @type {number}
 */
export const signature_key_unobtainable = SecurityDiagnosticCode_signature_key_unobtainable; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary SecurityDiagnosticCode_decryption_key_unobtainable
 * @constant
 * @type {number}
 */
export const SecurityDiagnosticCode_decryption_key_unobtainable = 16 satisfies SecurityDiagnosticCode; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary SecurityDiagnosticCode_decryption_key_unobtainable
 * @constant
 * @type {number}
 */
export const decryption_key_unobtainable = SecurityDiagnosticCode_decryption_key_unobtainable; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary SecurityDiagnosticCode_key_failure
 * @constant
 * @type {number}
 */
export const SecurityDiagnosticCode_key_failure = 17 satisfies SecurityDiagnosticCode; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary SecurityDiagnosticCode_key_failure
 * @constant
 * @type {number}
 */
export const key_failure = SecurityDiagnosticCode_key_failure; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary SecurityDiagnosticCode_unsupported_request_for_security_service
 * @constant
 * @type {number}
 */
export const SecurityDiagnosticCode_unsupported_request_for_security_service = 18 satisfies SecurityDiagnosticCode; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary SecurityDiagnosticCode_unsupported_request_for_security_service
 * @constant
 * @type {number}
 */
export const unsupported_request_for_security_service = SecurityDiagnosticCode_unsupported_request_for_security_service; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary SecurityDiagnosticCode_inconsistent_request_for_security_service
 * @constant
 * @type {number}
 */
export const SecurityDiagnosticCode_inconsistent_request_for_security_service = 19 satisfies SecurityDiagnosticCode; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary SecurityDiagnosticCode_inconsistent_request_for_security_service
 * @constant
 * @type {number}
 */
export const inconsistent_request_for_security_service = SecurityDiagnosticCode_inconsistent_request_for_security_service; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary SecurityDiagnosticCode_ipn_non_repudiation_provided_instead_of_content_proof
 * @constant
 * @type {number}
 */
export const SecurityDiagnosticCode_ipn_non_repudiation_provided_instead_of_content_proof = 20 satisfies SecurityDiagnosticCode; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary SecurityDiagnosticCode_ipn_non_repudiation_provided_instead_of_content_proof
 * @constant
 * @type {number}
 */
export const ipn_non_repudiation_provided_instead_of_content_proof = SecurityDiagnosticCode_ipn_non_repudiation_provided_instead_of_content_proof; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary SecurityDiagnosticCode_token_decryption_failed
 * @constant
 * @type {number}
 */
export const SecurityDiagnosticCode_token_decryption_failed = 21 satisfies SecurityDiagnosticCode; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary SecurityDiagnosticCode_token_decryption_failed
 * @constant
 * @type {number}
 */
export const token_decryption_failed = SecurityDiagnosticCode_token_decryption_failed; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary SecurityDiagnosticCode_double_enveloping_message_restoring_failure
 * @constant
 * @type {number}
 */
export const SecurityDiagnosticCode_double_enveloping_message_restoring_failure = 22 satisfies SecurityDiagnosticCode; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary SecurityDiagnosticCode_double_enveloping_message_restoring_failure
 * @constant
 * @type {number}
 */
export const double_enveloping_message_restoring_failure = SecurityDiagnosticCode_double_enveloping_message_restoring_failure; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary SecurityDiagnosticCode_unauthorised_dl_member
 * @constant
 * @type {number}
 */
export const SecurityDiagnosticCode_unauthorised_dl_member = 23 satisfies SecurityDiagnosticCode; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary SecurityDiagnosticCode_unauthorised_dl_member
 * @constant
 * @type {number}
 */
export const unauthorised_dl_member = SecurityDiagnosticCode_unauthorised_dl_member; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary SecurityDiagnosticCode_reception_security_failure
 * @constant
 * @type {number}
 */
export const SecurityDiagnosticCode_reception_security_failure = 24 satisfies SecurityDiagnosticCode; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary SecurityDiagnosticCode_reception_security_failure
 * @constant
 * @type {number}
 */
export const reception_security_failure = SecurityDiagnosticCode_reception_security_failure; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary SecurityDiagnosticCode_unsuitable_alternate_recipient
 * @constant
 * @type {number}
 */
export const SecurityDiagnosticCode_unsuitable_alternate_recipient = 25 satisfies SecurityDiagnosticCode; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary SecurityDiagnosticCode_unsuitable_alternate_recipient
 * @constant
 * @type {number}
 */
export const unsuitable_alternate_recipient = SecurityDiagnosticCode_unsuitable_alternate_recipient; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary SecurityDiagnosticCode_security_services_refusal
 * @constant
 * @type {number}
 */
export const SecurityDiagnosticCode_security_services_refusal = 26 satisfies SecurityDiagnosticCode; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary SecurityDiagnosticCode_security_services_refusal
 * @constant
 * @type {number}
 */
export const security_services_refusal = SecurityDiagnosticCode_security_services_refusal; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary SecurityDiagnosticCode_unauthorised_recipient
 * @constant
 * @type {number}
 */
export const SecurityDiagnosticCode_unauthorised_recipient = 27 satisfies SecurityDiagnosticCode; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary SecurityDiagnosticCode_unauthorised_recipient
 * @constant
 * @type {number}
 */
export const unauthorised_recipient = SecurityDiagnosticCode_unauthorised_recipient; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary SecurityDiagnosticCode_unknown_certification_authority_name
 * @constant
 * @type {number}
 */
export const SecurityDiagnosticCode_unknown_certification_authority_name = 28 satisfies SecurityDiagnosticCode; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary SecurityDiagnosticCode_unknown_certification_authority_name
 * @constant
 * @type {number}
 */
export const unknown_certification_authority_name = SecurityDiagnosticCode_unknown_certification_authority_name; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary SecurityDiagnosticCode_unknown_dl_name
 * @constant
 * @type {number}
 */
export const SecurityDiagnosticCode_unknown_dl_name = 29 satisfies SecurityDiagnosticCode; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary SecurityDiagnosticCode_unknown_dl_name
 * @constant
 * @type {number}
 */
export const unknown_dl_name = SecurityDiagnosticCode_unknown_dl_name; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary SecurityDiagnosticCode_unknown_originator_name
 * @constant
 * @type {number}
 */
export const SecurityDiagnosticCode_unknown_originator_name = 30 satisfies SecurityDiagnosticCode; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary SecurityDiagnosticCode_unknown_originator_name
 * @constant
 * @type {number}
 */
export const unknown_originator_name = SecurityDiagnosticCode_unknown_originator_name; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary SecurityDiagnosticCode_unknown_recipient_name
 * @constant
 * @type {number}
 */
export const SecurityDiagnosticCode_unknown_recipient_name = 31 satisfies SecurityDiagnosticCode; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary SecurityDiagnosticCode_unknown_recipient_name
 * @constant
 * @type {number}
 */
export const unknown_recipient_name = SecurityDiagnosticCode_unknown_recipient_name; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary SecurityDiagnosticCode_security_policy_violation
 * @constant
 * @type {number}
 */
export const SecurityDiagnosticCode_security_policy_violation = 32 satisfies SecurityDiagnosticCode; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary SecurityDiagnosticCode_security_policy_violation
 * @constant
 * @type {number}
 */
export const security_policy_violation = SecurityDiagnosticCode_security_policy_violation; /* SHORT_NAMED_INTEGER_VALUE */


export const _decode_SecurityDiagnosticCode = $._decodeInteger;


export const _encode_SecurityDiagnosticCode = $._encodeInteger;


/* eslint-enable */
