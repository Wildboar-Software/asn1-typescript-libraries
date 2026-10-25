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
export const SubmissionError_submission_control_violated: 1 = 1 satisfies SubmissionError; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary SubmissionError_submission_control_violated
 * @constant
 * @type {number}
 */
export const submission_control_violated: 1 = SubmissionError_submission_control_violated; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary SubmissionError_element_of_service_not_subscribed
 * @constant
 * @type {number}
 */
export const SubmissionError_element_of_service_not_subscribed: 2 = 2 satisfies SubmissionError; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary SubmissionError_element_of_service_not_subscribed
 * @constant
 * @type {number}
 */
export const element_of_service_not_subscribed: 2 = SubmissionError_element_of_service_not_subscribed; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary SubmissionError_deferred_delivery_cancellation_rejected
 * @constant
 * @type {number}
 */
export const SubmissionError_deferred_delivery_cancellation_rejected: 3 = 3 satisfies SubmissionError; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary SubmissionError_deferred_delivery_cancellation_rejected
 * @constant
 * @type {number}
 */
export const deferred_delivery_cancellation_rejected: 3 = SubmissionError_deferred_delivery_cancellation_rejected; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary SubmissionError_originator_invalid
 * @constant
 * @type {number}
 */
export const SubmissionError_originator_invalid: 4 = 4 satisfies SubmissionError; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary SubmissionError_originator_invalid
 * @constant
 * @type {number}
 */
export const originator_invalid: 4 = SubmissionError_originator_invalid; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary SubmissionError_recipient_improperly_specified
 * @constant
 * @type {number}
 */
export const SubmissionError_recipient_improperly_specified: 5 = 5 satisfies SubmissionError; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary SubmissionError_recipient_improperly_specified
 * @constant
 * @type {number}
 */
export const recipient_improperly_specified: 5 = SubmissionError_recipient_improperly_specified; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary SubmissionError_message_submission_identifier_invalid
 * @constant
 * @type {number}
 */
export const SubmissionError_message_submission_identifier_invalid: 6 = 6 satisfies SubmissionError; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary SubmissionError_message_submission_identifier_invalid
 * @constant
 * @type {number}
 */
export const message_submission_identifier_invalid: 6 = SubmissionError_message_submission_identifier_invalid; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary SubmissionError_inconsistent_request
 * @constant
 * @type {number}
 */
export const SubmissionError_inconsistent_request: 7 = 7 satisfies SubmissionError; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary SubmissionError_inconsistent_request
 * @constant
 * @type {number}
 */
export const inconsistent_request: 7 = SubmissionError_inconsistent_request; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary SubmissionError_security_error
 * @constant
 * @type {number}
 */
export const SubmissionError_security_error: 8 = 8 satisfies SubmissionError; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary SubmissionError_security_error
 * @constant
 * @type {number}
 */
export const security_error: 8 = SubmissionError_security_error; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary SubmissionError_unsupported_critical_function
 * @constant
 * @type {number}
 */
export const SubmissionError_unsupported_critical_function: 9 = 9 satisfies SubmissionError; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary SubmissionError_unsupported_critical_function
 * @constant
 * @type {number}
 */
export const unsupported_critical_function: 9 = SubmissionError_unsupported_critical_function; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary SubmissionError_remote_bind_error
 * @constant
 * @type {number}
 */
export const SubmissionError_remote_bind_error: 10 = 10 satisfies SubmissionError; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary SubmissionError_remote_bind_error
 * @constant
 * @type {number}
 */
export const remote_bind_error: 10 = SubmissionError_remote_bind_error; /* SHORT_NAMED_INTEGER_VALUE */


export const _decode_SubmissionError: $.ASN1Decoder<INTEGER> = $._decodeInteger;


export const _encode_SubmissionError: $.ASN1Encoder<INTEGER> = $._encodeInteger;


/* eslint-enable */
