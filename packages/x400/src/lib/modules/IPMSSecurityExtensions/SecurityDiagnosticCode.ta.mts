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

/* START_OF_SYMBOL_DEFINITION SecurityDiagnosticCode */
/**
 * @summary SecurityDiagnosticCode
 * @description
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
/* END_OF_SYMBOL_DEFINITION SecurityDiagnosticCode */

/* START_OF_SYMBOL_DEFINITION SecurityDiagnosticCode_integrity_failure_on_subject_message */
/**
 * @summary SecurityDiagnosticCode_integrity_failure_on_subject_message
 * @constant
 * @type {number}
 */
export const SecurityDiagnosticCode_integrity_failure_on_subject_message: SecurityDiagnosticCode = 0; /* LONG_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION SecurityDiagnosticCode_integrity_failure_on_subject_message */

/* START_OF_SYMBOL_DEFINITION integrity_failure_on_subject_message */
/**
 * @summary SecurityDiagnosticCode_integrity_failure_on_subject_message
 * @constant
 * @type {number}
 */
export const integrity_failure_on_subject_message: SecurityDiagnosticCode = SecurityDiagnosticCode_integrity_failure_on_subject_message; /* SHORT_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION integrity_failure_on_subject_message */

/* START_OF_SYMBOL_DEFINITION SecurityDiagnosticCode_integrity_failure_on_forwarded_message */
/**
 * @summary SecurityDiagnosticCode_integrity_failure_on_forwarded_message
 * @constant
 * @type {number}
 */
export const SecurityDiagnosticCode_integrity_failure_on_forwarded_message: SecurityDiagnosticCode = 1; /* LONG_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION SecurityDiagnosticCode_integrity_failure_on_forwarded_message */

/* START_OF_SYMBOL_DEFINITION integrity_failure_on_forwarded_message */
/**
 * @summary SecurityDiagnosticCode_integrity_failure_on_forwarded_message
 * @constant
 * @type {number}
 */
export const integrity_failure_on_forwarded_message: SecurityDiagnosticCode = SecurityDiagnosticCode_integrity_failure_on_forwarded_message; /* SHORT_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION integrity_failure_on_forwarded_message */

/* START_OF_SYMBOL_DEFINITION SecurityDiagnosticCode_moac_failure_on_subject_message */
/**
 * @summary SecurityDiagnosticCode_moac_failure_on_subject_message
 * @constant
 * @type {number}
 */
export const SecurityDiagnosticCode_moac_failure_on_subject_message: SecurityDiagnosticCode = 2; /* LONG_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION SecurityDiagnosticCode_moac_failure_on_subject_message */

/* START_OF_SYMBOL_DEFINITION moac_failure_on_subject_message */
/**
 * @summary SecurityDiagnosticCode_moac_failure_on_subject_message
 * @constant
 * @type {number}
 */
export const moac_failure_on_subject_message: SecurityDiagnosticCode = SecurityDiagnosticCode_moac_failure_on_subject_message; /* SHORT_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION moac_failure_on_subject_message */

/* START_OF_SYMBOL_DEFINITION SecurityDiagnosticCode_unsupported_security_policy */
/**
 * @summary SecurityDiagnosticCode_unsupported_security_policy
 * @constant
 * @type {number}
 */
export const SecurityDiagnosticCode_unsupported_security_policy: SecurityDiagnosticCode = 3; /* LONG_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION SecurityDiagnosticCode_unsupported_security_policy */

/* START_OF_SYMBOL_DEFINITION unsupported_security_policy */
/**
 * @summary SecurityDiagnosticCode_unsupported_security_policy
 * @constant
 * @type {number}
 */
export const unsupported_security_policy: SecurityDiagnosticCode = SecurityDiagnosticCode_unsupported_security_policy; /* SHORT_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION unsupported_security_policy */

/* START_OF_SYMBOL_DEFINITION SecurityDiagnosticCode_unsupported_algorithm_identifier */
/**
 * @summary SecurityDiagnosticCode_unsupported_algorithm_identifier
 * @constant
 * @type {number}
 */
export const SecurityDiagnosticCode_unsupported_algorithm_identifier: SecurityDiagnosticCode = 4; /* LONG_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION SecurityDiagnosticCode_unsupported_algorithm_identifier */

/* START_OF_SYMBOL_DEFINITION unsupported_algorithm_identifier */
/**
 * @summary SecurityDiagnosticCode_unsupported_algorithm_identifier
 * @constant
 * @type {number}
 */
export const unsupported_algorithm_identifier: SecurityDiagnosticCode = SecurityDiagnosticCode_unsupported_algorithm_identifier; /* SHORT_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION unsupported_algorithm_identifier */

/* START_OF_SYMBOL_DEFINITION SecurityDiagnosticCode_decryption_failed */
/**
 * @summary SecurityDiagnosticCode_decryption_failed
 * @constant
 * @type {number}
 */
export const SecurityDiagnosticCode_decryption_failed: SecurityDiagnosticCode = 5; /* LONG_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION SecurityDiagnosticCode_decryption_failed */

/* START_OF_SYMBOL_DEFINITION decryption_failed */
/**
 * @summary SecurityDiagnosticCode_decryption_failed
 * @constant
 * @type {number}
 */
export const decryption_failed: SecurityDiagnosticCode = SecurityDiagnosticCode_decryption_failed; /* SHORT_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION decryption_failed */

/* START_OF_SYMBOL_DEFINITION SecurityDiagnosticCode_token_error */
/**
 * @summary SecurityDiagnosticCode_token_error
 * @constant
 * @type {number}
 */
export const SecurityDiagnosticCode_token_error: SecurityDiagnosticCode = 6; /* LONG_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION SecurityDiagnosticCode_token_error */

/* START_OF_SYMBOL_DEFINITION token_error */
/**
 * @summary SecurityDiagnosticCode_token_error
 * @constant
 * @type {number}
 */
export const token_error: SecurityDiagnosticCode = SecurityDiagnosticCode_token_error; /* SHORT_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION token_error */

/* START_OF_SYMBOL_DEFINITION SecurityDiagnosticCode_unable_to_sign_notification */
/**
 * @summary SecurityDiagnosticCode_unable_to_sign_notification
 * @constant
 * @type {number}
 */
export const SecurityDiagnosticCode_unable_to_sign_notification: SecurityDiagnosticCode = 7; /* LONG_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION SecurityDiagnosticCode_unable_to_sign_notification */

/* START_OF_SYMBOL_DEFINITION unable_to_sign_notification */
/**
 * @summary SecurityDiagnosticCode_unable_to_sign_notification
 * @constant
 * @type {number}
 */
export const unable_to_sign_notification: SecurityDiagnosticCode = SecurityDiagnosticCode_unable_to_sign_notification; /* SHORT_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION unable_to_sign_notification */

/* START_OF_SYMBOL_DEFINITION SecurityDiagnosticCode_unable_to_sign_message_receipt */
/**
 * @summary SecurityDiagnosticCode_unable_to_sign_message_receipt
 * @constant
 * @type {number}
 */
export const SecurityDiagnosticCode_unable_to_sign_message_receipt: SecurityDiagnosticCode = 8; /* LONG_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION SecurityDiagnosticCode_unable_to_sign_message_receipt */

/* START_OF_SYMBOL_DEFINITION unable_to_sign_message_receipt */
/**
 * @summary SecurityDiagnosticCode_unable_to_sign_message_receipt
 * @constant
 * @type {number}
 */
export const unable_to_sign_message_receipt: SecurityDiagnosticCode = SecurityDiagnosticCode_unable_to_sign_message_receipt; /* SHORT_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION unable_to_sign_message_receipt */

/* START_OF_SYMBOL_DEFINITION SecurityDiagnosticCode_authentication_failure_on_subject_message */
/**
 * @summary SecurityDiagnosticCode_authentication_failure_on_subject_message
 * @constant
 * @type {number}
 */
export const SecurityDiagnosticCode_authentication_failure_on_subject_message: SecurityDiagnosticCode = 9; /* LONG_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION SecurityDiagnosticCode_authentication_failure_on_subject_message */

/* START_OF_SYMBOL_DEFINITION authentication_failure_on_subject_message */
/**
 * @summary SecurityDiagnosticCode_authentication_failure_on_subject_message
 * @constant
 * @type {number}
 */
export const authentication_failure_on_subject_message: SecurityDiagnosticCode = SecurityDiagnosticCode_authentication_failure_on_subject_message; /* SHORT_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION authentication_failure_on_subject_message */

/* START_OF_SYMBOL_DEFINITION SecurityDiagnosticCode_security_context_failure_message */
/**
 * @summary SecurityDiagnosticCode_security_context_failure_message
 * @constant
 * @type {number}
 */
export const SecurityDiagnosticCode_security_context_failure_message: SecurityDiagnosticCode = 10; /* LONG_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION SecurityDiagnosticCode_security_context_failure_message */

/* START_OF_SYMBOL_DEFINITION security_context_failure_message */
/**
 * @summary SecurityDiagnosticCode_security_context_failure_message
 * @constant
 * @type {number}
 */
export const security_context_failure_message: SecurityDiagnosticCode = SecurityDiagnosticCode_security_context_failure_message; /* SHORT_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION security_context_failure_message */

/* START_OF_SYMBOL_DEFINITION SecurityDiagnosticCode_message_sequence_failure */
/**
 * @summary SecurityDiagnosticCode_message_sequence_failure
 * @constant
 * @type {number}
 */
export const SecurityDiagnosticCode_message_sequence_failure: SecurityDiagnosticCode = 11; /* LONG_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION SecurityDiagnosticCode_message_sequence_failure */

/* START_OF_SYMBOL_DEFINITION message_sequence_failure */
/**
 * @summary SecurityDiagnosticCode_message_sequence_failure
 * @constant
 * @type {number}
 */
export const message_sequence_failure: SecurityDiagnosticCode = SecurityDiagnosticCode_message_sequence_failure; /* SHORT_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION message_sequence_failure */

/* START_OF_SYMBOL_DEFINITION SecurityDiagnosticCode_message_security_labelling_failure */
/**
 * @summary SecurityDiagnosticCode_message_security_labelling_failure
 * @constant
 * @type {number}
 */
export const SecurityDiagnosticCode_message_security_labelling_failure: SecurityDiagnosticCode = 12; /* LONG_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION SecurityDiagnosticCode_message_security_labelling_failure */

/* START_OF_SYMBOL_DEFINITION message_security_labelling_failure */
/**
 * @summary SecurityDiagnosticCode_message_security_labelling_failure
 * @constant
 * @type {number}
 */
export const message_security_labelling_failure: SecurityDiagnosticCode = SecurityDiagnosticCode_message_security_labelling_failure; /* SHORT_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION message_security_labelling_failure */

/* START_OF_SYMBOL_DEFINITION SecurityDiagnosticCode_repudiation_failure_of_message */
/**
 * @summary SecurityDiagnosticCode_repudiation_failure_of_message
 * @constant
 * @type {number}
 */
export const SecurityDiagnosticCode_repudiation_failure_of_message: SecurityDiagnosticCode = 13; /* LONG_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION SecurityDiagnosticCode_repudiation_failure_of_message */

/* START_OF_SYMBOL_DEFINITION repudiation_failure_of_message */
/**
 * @summary SecurityDiagnosticCode_repudiation_failure_of_message
 * @constant
 * @type {number}
 */
export const repudiation_failure_of_message: SecurityDiagnosticCode = SecurityDiagnosticCode_repudiation_failure_of_message; /* SHORT_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION repudiation_failure_of_message */

/* START_OF_SYMBOL_DEFINITION SecurityDiagnosticCode_failure_of_proof_of_message */
/**
 * @summary SecurityDiagnosticCode_failure_of_proof_of_message
 * @constant
 * @type {number}
 */
export const SecurityDiagnosticCode_failure_of_proof_of_message: SecurityDiagnosticCode = 14; /* LONG_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION SecurityDiagnosticCode_failure_of_proof_of_message */

/* START_OF_SYMBOL_DEFINITION failure_of_proof_of_message */
/**
 * @summary SecurityDiagnosticCode_failure_of_proof_of_message
 * @constant
 * @type {number}
 */
export const failure_of_proof_of_message: SecurityDiagnosticCode = SecurityDiagnosticCode_failure_of_proof_of_message; /* SHORT_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION failure_of_proof_of_message */

/* START_OF_SYMBOL_DEFINITION SecurityDiagnosticCode_signature_key_unobtainable */
/**
 * @summary SecurityDiagnosticCode_signature_key_unobtainable
 * @constant
 * @type {number}
 */
export const SecurityDiagnosticCode_signature_key_unobtainable: SecurityDiagnosticCode = 15; /* LONG_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION SecurityDiagnosticCode_signature_key_unobtainable */

/* START_OF_SYMBOL_DEFINITION signature_key_unobtainable */
/**
 * @summary SecurityDiagnosticCode_signature_key_unobtainable
 * @constant
 * @type {number}
 */
export const signature_key_unobtainable: SecurityDiagnosticCode = SecurityDiagnosticCode_signature_key_unobtainable; /* SHORT_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION signature_key_unobtainable */

/* START_OF_SYMBOL_DEFINITION SecurityDiagnosticCode_decryption_key_unobtainable */
/**
 * @summary SecurityDiagnosticCode_decryption_key_unobtainable
 * @constant
 * @type {number}
 */
export const SecurityDiagnosticCode_decryption_key_unobtainable: SecurityDiagnosticCode = 16; /* LONG_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION SecurityDiagnosticCode_decryption_key_unobtainable */

/* START_OF_SYMBOL_DEFINITION decryption_key_unobtainable */
/**
 * @summary SecurityDiagnosticCode_decryption_key_unobtainable
 * @constant
 * @type {number}
 */
export const decryption_key_unobtainable: SecurityDiagnosticCode = SecurityDiagnosticCode_decryption_key_unobtainable; /* SHORT_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION decryption_key_unobtainable */

/* START_OF_SYMBOL_DEFINITION SecurityDiagnosticCode_key_failure */
/**
 * @summary SecurityDiagnosticCode_key_failure
 * @constant
 * @type {number}
 */
export const SecurityDiagnosticCode_key_failure: SecurityDiagnosticCode = 17; /* LONG_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION SecurityDiagnosticCode_key_failure */

/* START_OF_SYMBOL_DEFINITION key_failure */
/**
 * @summary SecurityDiagnosticCode_key_failure
 * @constant
 * @type {number}
 */
export const key_failure: SecurityDiagnosticCode = SecurityDiagnosticCode_key_failure; /* SHORT_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION key_failure */

/* START_OF_SYMBOL_DEFINITION SecurityDiagnosticCode_unsupported_request_for_security_service */
/**
 * @summary SecurityDiagnosticCode_unsupported_request_for_security_service
 * @constant
 * @type {number}
 */
export const SecurityDiagnosticCode_unsupported_request_for_security_service: SecurityDiagnosticCode = 18; /* LONG_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION SecurityDiagnosticCode_unsupported_request_for_security_service */

/* START_OF_SYMBOL_DEFINITION unsupported_request_for_security_service */
/**
 * @summary SecurityDiagnosticCode_unsupported_request_for_security_service
 * @constant
 * @type {number}
 */
export const unsupported_request_for_security_service: SecurityDiagnosticCode = SecurityDiagnosticCode_unsupported_request_for_security_service; /* SHORT_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION unsupported_request_for_security_service */

/* START_OF_SYMBOL_DEFINITION SecurityDiagnosticCode_inconsistent_request_for_security_service */
/**
 * @summary SecurityDiagnosticCode_inconsistent_request_for_security_service
 * @constant
 * @type {number}
 */
export const SecurityDiagnosticCode_inconsistent_request_for_security_service: SecurityDiagnosticCode = 19; /* LONG_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION SecurityDiagnosticCode_inconsistent_request_for_security_service */

/* START_OF_SYMBOL_DEFINITION inconsistent_request_for_security_service */
/**
 * @summary SecurityDiagnosticCode_inconsistent_request_for_security_service
 * @constant
 * @type {number}
 */
export const inconsistent_request_for_security_service: SecurityDiagnosticCode = SecurityDiagnosticCode_inconsistent_request_for_security_service; /* SHORT_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION inconsistent_request_for_security_service */

/* START_OF_SYMBOL_DEFINITION SecurityDiagnosticCode_ipn_non_repudiation_provided_instead_of_content_proof */
/**
 * @summary SecurityDiagnosticCode_ipn_non_repudiation_provided_instead_of_content_proof
 * @constant
 * @type {number}
 */
export const SecurityDiagnosticCode_ipn_non_repudiation_provided_instead_of_content_proof: SecurityDiagnosticCode = 20; /* LONG_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION SecurityDiagnosticCode_ipn_non_repudiation_provided_instead_of_content_proof */

/* START_OF_SYMBOL_DEFINITION ipn_non_repudiation_provided_instead_of_content_proof */
/**
 * @summary SecurityDiagnosticCode_ipn_non_repudiation_provided_instead_of_content_proof
 * @constant
 * @type {number}
 */
export const ipn_non_repudiation_provided_instead_of_content_proof: SecurityDiagnosticCode = SecurityDiagnosticCode_ipn_non_repudiation_provided_instead_of_content_proof; /* SHORT_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION ipn_non_repudiation_provided_instead_of_content_proof */

/* START_OF_SYMBOL_DEFINITION SecurityDiagnosticCode_token_decryption_failed */
/**
 * @summary SecurityDiagnosticCode_token_decryption_failed
 * @constant
 * @type {number}
 */
export const SecurityDiagnosticCode_token_decryption_failed: SecurityDiagnosticCode = 21; /* LONG_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION SecurityDiagnosticCode_token_decryption_failed */

/* START_OF_SYMBOL_DEFINITION token_decryption_failed */
/**
 * @summary SecurityDiagnosticCode_token_decryption_failed
 * @constant
 * @type {number}
 */
export const token_decryption_failed: SecurityDiagnosticCode = SecurityDiagnosticCode_token_decryption_failed; /* SHORT_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION token_decryption_failed */

/* START_OF_SYMBOL_DEFINITION SecurityDiagnosticCode_double_enveloping_message_restoring_failure */
/**
 * @summary SecurityDiagnosticCode_double_enveloping_message_restoring_failure
 * @constant
 * @type {number}
 */
export const SecurityDiagnosticCode_double_enveloping_message_restoring_failure: SecurityDiagnosticCode = 22; /* LONG_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION SecurityDiagnosticCode_double_enveloping_message_restoring_failure */

/* START_OF_SYMBOL_DEFINITION double_enveloping_message_restoring_failure */
/**
 * @summary SecurityDiagnosticCode_double_enveloping_message_restoring_failure
 * @constant
 * @type {number}
 */
export const double_enveloping_message_restoring_failure: SecurityDiagnosticCode = SecurityDiagnosticCode_double_enveloping_message_restoring_failure; /* SHORT_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION double_enveloping_message_restoring_failure */

/* START_OF_SYMBOL_DEFINITION SecurityDiagnosticCode_unauthorised_dl_member */
/**
 * @summary SecurityDiagnosticCode_unauthorised_dl_member
 * @constant
 * @type {number}
 */
export const SecurityDiagnosticCode_unauthorised_dl_member: SecurityDiagnosticCode = 23; /* LONG_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION SecurityDiagnosticCode_unauthorised_dl_member */

/* START_OF_SYMBOL_DEFINITION unauthorised_dl_member */
/**
 * @summary SecurityDiagnosticCode_unauthorised_dl_member
 * @constant
 * @type {number}
 */
export const unauthorised_dl_member: SecurityDiagnosticCode = SecurityDiagnosticCode_unauthorised_dl_member; /* SHORT_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION unauthorised_dl_member */

/* START_OF_SYMBOL_DEFINITION SecurityDiagnosticCode_reception_security_failure */
/**
 * @summary SecurityDiagnosticCode_reception_security_failure
 * @constant
 * @type {number}
 */
export const SecurityDiagnosticCode_reception_security_failure: SecurityDiagnosticCode = 24; /* LONG_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION SecurityDiagnosticCode_reception_security_failure */

/* START_OF_SYMBOL_DEFINITION reception_security_failure */
/**
 * @summary SecurityDiagnosticCode_reception_security_failure
 * @constant
 * @type {number}
 */
export const reception_security_failure: SecurityDiagnosticCode = SecurityDiagnosticCode_reception_security_failure; /* SHORT_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION reception_security_failure */

/* START_OF_SYMBOL_DEFINITION SecurityDiagnosticCode_unsuitable_alternate_recipient */
/**
 * @summary SecurityDiagnosticCode_unsuitable_alternate_recipient
 * @constant
 * @type {number}
 */
export const SecurityDiagnosticCode_unsuitable_alternate_recipient: SecurityDiagnosticCode = 25; /* LONG_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION SecurityDiagnosticCode_unsuitable_alternate_recipient */

/* START_OF_SYMBOL_DEFINITION unsuitable_alternate_recipient */
/**
 * @summary SecurityDiagnosticCode_unsuitable_alternate_recipient
 * @constant
 * @type {number}
 */
export const unsuitable_alternate_recipient: SecurityDiagnosticCode = SecurityDiagnosticCode_unsuitable_alternate_recipient; /* SHORT_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION unsuitable_alternate_recipient */

/* START_OF_SYMBOL_DEFINITION SecurityDiagnosticCode_security_services_refusal */
/**
 * @summary SecurityDiagnosticCode_security_services_refusal
 * @constant
 * @type {number}
 */
export const SecurityDiagnosticCode_security_services_refusal: SecurityDiagnosticCode = 26; /* LONG_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION SecurityDiagnosticCode_security_services_refusal */

/* START_OF_SYMBOL_DEFINITION security_services_refusal */
/**
 * @summary SecurityDiagnosticCode_security_services_refusal
 * @constant
 * @type {number}
 */
export const security_services_refusal: SecurityDiagnosticCode = SecurityDiagnosticCode_security_services_refusal; /* SHORT_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION security_services_refusal */

/* START_OF_SYMBOL_DEFINITION SecurityDiagnosticCode_unauthorised_recipient */
/**
 * @summary SecurityDiagnosticCode_unauthorised_recipient
 * @constant
 * @type {number}
 */
export const SecurityDiagnosticCode_unauthorised_recipient: SecurityDiagnosticCode = 27; /* LONG_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION SecurityDiagnosticCode_unauthorised_recipient */

/* START_OF_SYMBOL_DEFINITION unauthorised_recipient */
/**
 * @summary SecurityDiagnosticCode_unauthorised_recipient
 * @constant
 * @type {number}
 */
export const unauthorised_recipient: SecurityDiagnosticCode = SecurityDiagnosticCode_unauthorised_recipient; /* SHORT_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION unauthorised_recipient */

/* START_OF_SYMBOL_DEFINITION SecurityDiagnosticCode_unknown_certification_authority_name */
/**
 * @summary SecurityDiagnosticCode_unknown_certification_authority_name
 * @constant
 * @type {number}
 */
export const SecurityDiagnosticCode_unknown_certification_authority_name: SecurityDiagnosticCode = 28; /* LONG_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION SecurityDiagnosticCode_unknown_certification_authority_name */

/* START_OF_SYMBOL_DEFINITION unknown_certification_authority_name */
/**
 * @summary SecurityDiagnosticCode_unknown_certification_authority_name
 * @constant
 * @type {number}
 */
export const unknown_certification_authority_name: SecurityDiagnosticCode = SecurityDiagnosticCode_unknown_certification_authority_name; /* SHORT_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION unknown_certification_authority_name */

/* START_OF_SYMBOL_DEFINITION SecurityDiagnosticCode_unknown_dl_name */
/**
 * @summary SecurityDiagnosticCode_unknown_dl_name
 * @constant
 * @type {number}
 */
export const SecurityDiagnosticCode_unknown_dl_name: SecurityDiagnosticCode = 29; /* LONG_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION SecurityDiagnosticCode_unknown_dl_name */

/* START_OF_SYMBOL_DEFINITION unknown_dl_name */
/**
 * @summary SecurityDiagnosticCode_unknown_dl_name
 * @constant
 * @type {number}
 */
export const unknown_dl_name: SecurityDiagnosticCode = SecurityDiagnosticCode_unknown_dl_name; /* SHORT_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION unknown_dl_name */

/* START_OF_SYMBOL_DEFINITION SecurityDiagnosticCode_unknown_originator_name */
/**
 * @summary SecurityDiagnosticCode_unknown_originator_name
 * @constant
 * @type {number}
 */
export const SecurityDiagnosticCode_unknown_originator_name: SecurityDiagnosticCode = 30; /* LONG_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION SecurityDiagnosticCode_unknown_originator_name */

/* START_OF_SYMBOL_DEFINITION unknown_originator_name */
/**
 * @summary SecurityDiagnosticCode_unknown_originator_name
 * @constant
 * @type {number}
 */
export const unknown_originator_name: SecurityDiagnosticCode = SecurityDiagnosticCode_unknown_originator_name; /* SHORT_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION unknown_originator_name */

/* START_OF_SYMBOL_DEFINITION SecurityDiagnosticCode_unknown_recipient_name */
/**
 * @summary SecurityDiagnosticCode_unknown_recipient_name
 * @constant
 * @type {number}
 */
export const SecurityDiagnosticCode_unknown_recipient_name: SecurityDiagnosticCode = 31; /* LONG_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION SecurityDiagnosticCode_unknown_recipient_name */

/* START_OF_SYMBOL_DEFINITION unknown_recipient_name */
/**
 * @summary SecurityDiagnosticCode_unknown_recipient_name
 * @constant
 * @type {number}
 */
export const unknown_recipient_name: SecurityDiagnosticCode = SecurityDiagnosticCode_unknown_recipient_name; /* SHORT_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION unknown_recipient_name */

/* START_OF_SYMBOL_DEFINITION SecurityDiagnosticCode_security_policy_violation */
/**
 * @summary SecurityDiagnosticCode_security_policy_violation
 * @constant
 * @type {number}
 */
export const SecurityDiagnosticCode_security_policy_violation: SecurityDiagnosticCode = 32; /* LONG_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION SecurityDiagnosticCode_security_policy_violation */

/* START_OF_SYMBOL_DEFINITION security_policy_violation */
/**
 * @summary SecurityDiagnosticCode_security_policy_violation
 * @constant
 * @type {number}
 */
export const security_policy_violation: SecurityDiagnosticCode = SecurityDiagnosticCode_security_policy_violation; /* SHORT_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION security_policy_violation */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_SecurityDiagnosticCode */
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_SecurityDiagnosticCode */

/* START_OF_SYMBOL_DEFINITION _decode_SecurityDiagnosticCode */
export const _decode_SecurityDiagnosticCode = $._decodeInteger;
/* END_OF_SYMBOL_DEFINITION _decode_SecurityDiagnosticCode */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_SecurityDiagnosticCode */
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_SecurityDiagnosticCode */

/* START_OF_SYMBOL_DEFINITION _encode_SecurityDiagnosticCode */
export const _encode_SecurityDiagnosticCode = $._encodeInteger;

/* END_OF_SYMBOL_DEFINITION _encode_SecurityDiagnosticCode */

/* eslint-enable */
