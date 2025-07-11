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
} from '@wildboar/asn1';
import * as $ from '@wildboar/asn1/functional';

/**
 * @summary SubmissionError
 * @description
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
export const SubmissionError_submission_control_violated: SubmissionError = 1; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary SubmissionError_submission_control_violated
 * @constant
 * @type {number}
 */
export const submission_control_violated: SubmissionError = SubmissionError_submission_control_violated; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary SubmissionError_element_of_service_not_subscribed
 * @constant
 * @type {number}
 */
export const SubmissionError_element_of_service_not_subscribed: SubmissionError = 2; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary SubmissionError_element_of_service_not_subscribed
 * @constant
 * @type {number}
 */
export const element_of_service_not_subscribed: SubmissionError = SubmissionError_element_of_service_not_subscribed; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary SubmissionError_deferred_delivery_cancellation_rejected
 * @constant
 * @type {number}
 */
export const SubmissionError_deferred_delivery_cancellation_rejected: SubmissionError = 3; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary SubmissionError_deferred_delivery_cancellation_rejected
 * @constant
 * @type {number}
 */
export const deferred_delivery_cancellation_rejected: SubmissionError = SubmissionError_deferred_delivery_cancellation_rejected; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary SubmissionError_originator_invalid
 * @constant
 * @type {number}
 */
export const SubmissionError_originator_invalid: SubmissionError = 4; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary SubmissionError_originator_invalid
 * @constant
 * @type {number}
 */
export const originator_invalid: SubmissionError = SubmissionError_originator_invalid; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary SubmissionError_recipient_improperly_specified
 * @constant
 * @type {number}
 */
export const SubmissionError_recipient_improperly_specified: SubmissionError = 5; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary SubmissionError_recipient_improperly_specified
 * @constant
 * @type {number}
 */
export const recipient_improperly_specified: SubmissionError = SubmissionError_recipient_improperly_specified; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary SubmissionError_message_submission_identifier_invalid
 * @constant
 * @type {number}
 */
export const SubmissionError_message_submission_identifier_invalid: SubmissionError = 6; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary SubmissionError_message_submission_identifier_invalid
 * @constant
 * @type {number}
 */
export const message_submission_identifier_invalid: SubmissionError = SubmissionError_message_submission_identifier_invalid; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary SubmissionError_inconsistent_request
 * @constant
 * @type {number}
 */
export const SubmissionError_inconsistent_request: SubmissionError = 7; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary SubmissionError_inconsistent_request
 * @constant
 * @type {number}
 */
export const inconsistent_request: SubmissionError = SubmissionError_inconsistent_request; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary SubmissionError_security_error
 * @constant
 * @type {number}
 */
export const SubmissionError_security_error: SubmissionError = 8; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary SubmissionError_security_error
 * @constant
 * @type {number}
 */
export const security_error: SubmissionError = SubmissionError_security_error; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary SubmissionError_unsupported_critical_function
 * @constant
 * @type {number}
 */
export const SubmissionError_unsupported_critical_function: SubmissionError = 9; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary SubmissionError_unsupported_critical_function
 * @constant
 * @type {number}
 */
export const unsupported_critical_function: SubmissionError = SubmissionError_unsupported_critical_function; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary SubmissionError_remote_bind_error
 * @constant
 * @type {number}
 */
export const SubmissionError_remote_bind_error: SubmissionError = 10; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary SubmissionError_remote_bind_error
 * @constant
 * @type {number}
 */
export const remote_bind_error: SubmissionError = SubmissionError_remote_bind_error; /* SHORT_NAMED_INTEGER_VALUE */


export const _decode_SubmissionError = $._decodeInteger;


export const _encode_SubmissionError = $._encodeInteger;


/* eslint-enable */
