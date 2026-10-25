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
 * @summary SubmissionError
 * @description
 *
 * Defined in ITU-T X.411 (1999) (accounting objects).
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * SubmissionError  ::=  INTEGER {
 *   submission-control-violated(1), element-of-service-not-subscribed(2),
 *   deferred-delivery-cancellation-rejected(3), originator-invalid(4),
 *   recipient-improperly-specified(5), --  has parameters
 *   message-submission-identifier-invalid(6), inconsistent-request(7),
 *   security-error(8), --  has parameters
 *   unsupported-critical-function(9), remote-bind-error(10)}
 * ```
 */
export type SubmissionError = INTEGER;

/**
 * @summary SubmissionError_submission_control_violated
 * @constant
 * @type {number}
 */
export const SubmissionError_submission_control_violated = 1 satisfies SubmissionError; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary SubmissionError_submission_control_violated
 * @constant
 * @type {number}
 */
export const submission_control_violated = SubmissionError_submission_control_violated satisfies SubmissionError; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary SubmissionError_element_of_service_not_subscribed
 * @constant
 * @type {number}
 */
export const SubmissionError_element_of_service_not_subscribed = 2 satisfies SubmissionError; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary SubmissionError_element_of_service_not_subscribed
 * @constant
 * @type {number}
 */
export const element_of_service_not_subscribed = SubmissionError_element_of_service_not_subscribed satisfies SubmissionError; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary SubmissionError_deferred_delivery_cancellation_rejected
 * @constant
 * @type {number}
 */
export const SubmissionError_deferred_delivery_cancellation_rejected = 3 satisfies SubmissionError; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary SubmissionError_deferred_delivery_cancellation_rejected
 * @constant
 * @type {number}
 */
export const deferred_delivery_cancellation_rejected = SubmissionError_deferred_delivery_cancellation_rejected satisfies SubmissionError; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary SubmissionError_originator_invalid
 * @constant
 * @type {number}
 */
export const SubmissionError_originator_invalid = 4 satisfies SubmissionError; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary SubmissionError_originator_invalid
 * @constant
 * @type {number}
 */
export const originator_invalid = SubmissionError_originator_invalid satisfies SubmissionError; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary SubmissionError_recipient_improperly_specified
 * @constant
 * @type {number}
 */
export const SubmissionError_recipient_improperly_specified = 5 satisfies SubmissionError; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary SubmissionError_recipient_improperly_specified
 * @constant
 * @type {number}
 */
export const recipient_improperly_specified = SubmissionError_recipient_improperly_specified satisfies SubmissionError; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary SubmissionError_message_submission_identifier_invalid
 * @constant
 * @type {number}
 */
export const SubmissionError_message_submission_identifier_invalid = 6 satisfies SubmissionError; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary SubmissionError_message_submission_identifier_invalid
 * @constant
 * @type {number}
 */
export const message_submission_identifier_invalid = SubmissionError_message_submission_identifier_invalid satisfies SubmissionError; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary SubmissionError_inconsistent_request
 * @constant
 * @type {number}
 */
export const SubmissionError_inconsistent_request = 7 satisfies SubmissionError; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary SubmissionError_inconsistent_request
 * @constant
 * @type {number}
 */
export const inconsistent_request = SubmissionError_inconsistent_request satisfies SubmissionError; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary SubmissionError_security_error
 * @constant
 * @type {number}
 */
export const SubmissionError_security_error = 8 satisfies SubmissionError; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary SubmissionError_security_error
 * @constant
 * @type {number}
 */
export const security_error = SubmissionError_security_error satisfies SubmissionError; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary SubmissionError_unsupported_critical_function
 * @constant
 * @type {number}
 */
export const SubmissionError_unsupported_critical_function = 9 satisfies SubmissionError; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary SubmissionError_unsupported_critical_function
 * @constant
 * @type {number}
 */
export const unsupported_critical_function = SubmissionError_unsupported_critical_function satisfies SubmissionError; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary SubmissionError_remote_bind_error
 * @constant
 * @type {number}
 */
export const SubmissionError_remote_bind_error = 10 satisfies SubmissionError; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary SubmissionError_remote_bind_error
 * @constant
 * @type {number}
 */
export const remote_bind_error = SubmissionError_remote_bind_error satisfies SubmissionError; /* SHORT_NAMED_INTEGER_VALUE */


export const _decode_SubmissionError = $._decodeInteger;


export const _encode_SubmissionError = $._encodeInteger;


/* eslint-enable */
