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

/* START_OF_SYMBOL_DEFINITION SubmissionError */
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
/* END_OF_SYMBOL_DEFINITION SubmissionError */

/* START_OF_SYMBOL_DEFINITION SubmissionError_submission_control_violated */
/**
 * @summary SubmissionError_submission_control_violated
 * @constant
 * @type {number}
 */
export const SubmissionError_submission_control_violated: SubmissionError = 1; /* LONG_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION SubmissionError_submission_control_violated */

/* START_OF_SYMBOL_DEFINITION submission_control_violated */
/**
 * @summary SubmissionError_submission_control_violated
 * @constant
 * @type {number}
 */
export const submission_control_violated: SubmissionError = SubmissionError_submission_control_violated; /* SHORT_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION submission_control_violated */

/* START_OF_SYMBOL_DEFINITION SubmissionError_element_of_service_not_subscribed */
/**
 * @summary SubmissionError_element_of_service_not_subscribed
 * @constant
 * @type {number}
 */
export const SubmissionError_element_of_service_not_subscribed: SubmissionError = 2; /* LONG_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION SubmissionError_element_of_service_not_subscribed */

/* START_OF_SYMBOL_DEFINITION element_of_service_not_subscribed */
/**
 * @summary SubmissionError_element_of_service_not_subscribed
 * @constant
 * @type {number}
 */
export const element_of_service_not_subscribed: SubmissionError = SubmissionError_element_of_service_not_subscribed; /* SHORT_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION element_of_service_not_subscribed */

/* START_OF_SYMBOL_DEFINITION SubmissionError_deferred_delivery_cancellation_rejected */
/**
 * @summary SubmissionError_deferred_delivery_cancellation_rejected
 * @constant
 * @type {number}
 */
export const SubmissionError_deferred_delivery_cancellation_rejected: SubmissionError = 3; /* LONG_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION SubmissionError_deferred_delivery_cancellation_rejected */

/* START_OF_SYMBOL_DEFINITION deferred_delivery_cancellation_rejected */
/**
 * @summary SubmissionError_deferred_delivery_cancellation_rejected
 * @constant
 * @type {number}
 */
export const deferred_delivery_cancellation_rejected: SubmissionError = SubmissionError_deferred_delivery_cancellation_rejected; /* SHORT_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION deferred_delivery_cancellation_rejected */

/* START_OF_SYMBOL_DEFINITION SubmissionError_originator_invalid */
/**
 * @summary SubmissionError_originator_invalid
 * @constant
 * @type {number}
 */
export const SubmissionError_originator_invalid: SubmissionError = 4; /* LONG_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION SubmissionError_originator_invalid */

/* START_OF_SYMBOL_DEFINITION originator_invalid */
/**
 * @summary SubmissionError_originator_invalid
 * @constant
 * @type {number}
 */
export const originator_invalid: SubmissionError = SubmissionError_originator_invalid; /* SHORT_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION originator_invalid */

/* START_OF_SYMBOL_DEFINITION SubmissionError_recipient_improperly_specified */
/**
 * @summary SubmissionError_recipient_improperly_specified
 * @constant
 * @type {number}
 */
export const SubmissionError_recipient_improperly_specified: SubmissionError = 5; /* LONG_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION SubmissionError_recipient_improperly_specified */

/* START_OF_SYMBOL_DEFINITION recipient_improperly_specified */
/**
 * @summary SubmissionError_recipient_improperly_specified
 * @constant
 * @type {number}
 */
export const recipient_improperly_specified: SubmissionError = SubmissionError_recipient_improperly_specified; /* SHORT_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION recipient_improperly_specified */

/* START_OF_SYMBOL_DEFINITION SubmissionError_message_submission_identifier_invalid */
/**
 * @summary SubmissionError_message_submission_identifier_invalid
 * @constant
 * @type {number}
 */
export const SubmissionError_message_submission_identifier_invalid: SubmissionError = 6; /* LONG_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION SubmissionError_message_submission_identifier_invalid */

/* START_OF_SYMBOL_DEFINITION message_submission_identifier_invalid */
/**
 * @summary SubmissionError_message_submission_identifier_invalid
 * @constant
 * @type {number}
 */
export const message_submission_identifier_invalid: SubmissionError = SubmissionError_message_submission_identifier_invalid; /* SHORT_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION message_submission_identifier_invalid */

/* START_OF_SYMBOL_DEFINITION SubmissionError_inconsistent_request */
/**
 * @summary SubmissionError_inconsistent_request
 * @constant
 * @type {number}
 */
export const SubmissionError_inconsistent_request: SubmissionError = 7; /* LONG_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION SubmissionError_inconsistent_request */

/* START_OF_SYMBOL_DEFINITION inconsistent_request */
/**
 * @summary SubmissionError_inconsistent_request
 * @constant
 * @type {number}
 */
export const inconsistent_request: SubmissionError = SubmissionError_inconsistent_request; /* SHORT_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION inconsistent_request */

/* START_OF_SYMBOL_DEFINITION SubmissionError_security_error */
/**
 * @summary SubmissionError_security_error
 * @constant
 * @type {number}
 */
export const SubmissionError_security_error: SubmissionError = 8; /* LONG_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION SubmissionError_security_error */

/* START_OF_SYMBOL_DEFINITION security_error */
/**
 * @summary SubmissionError_security_error
 * @constant
 * @type {number}
 */
export const security_error: SubmissionError = SubmissionError_security_error; /* SHORT_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION security_error */

/* START_OF_SYMBOL_DEFINITION SubmissionError_unsupported_critical_function */
/**
 * @summary SubmissionError_unsupported_critical_function
 * @constant
 * @type {number}
 */
export const SubmissionError_unsupported_critical_function: SubmissionError = 9; /* LONG_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION SubmissionError_unsupported_critical_function */

/* START_OF_SYMBOL_DEFINITION unsupported_critical_function */
/**
 * @summary SubmissionError_unsupported_critical_function
 * @constant
 * @type {number}
 */
export const unsupported_critical_function: SubmissionError = SubmissionError_unsupported_critical_function; /* SHORT_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION unsupported_critical_function */

/* START_OF_SYMBOL_DEFINITION SubmissionError_remote_bind_error */
/**
 * @summary SubmissionError_remote_bind_error
 * @constant
 * @type {number}
 */
export const SubmissionError_remote_bind_error: SubmissionError = 10; /* LONG_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION SubmissionError_remote_bind_error */

/* START_OF_SYMBOL_DEFINITION remote_bind_error */
/**
 * @summary SubmissionError_remote_bind_error
 * @constant
 * @type {number}
 */
export const remote_bind_error: SubmissionError = SubmissionError_remote_bind_error; /* SHORT_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION remote_bind_error */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_SubmissionError */
let _cached_decoder_for_SubmissionError: $.ASN1Decoder<SubmissionError> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_SubmissionError */

/* START_OF_SYMBOL_DEFINITION _decode_SubmissionError */
/**
 * @summary Decodes an ASN.1 element into a(n) SubmissionError
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {SubmissionError} The decoded data structure.
 */
export function _decode_SubmissionError(el: _Element) {
    if (!_cached_decoder_for_SubmissionError) {
        _cached_decoder_for_SubmissionError = $._decodeInteger;
    }
    return _cached_decoder_for_SubmissionError(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_SubmissionError */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_SubmissionError */
let _cached_encoder_for_SubmissionError: $.ASN1Encoder<SubmissionError> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_SubmissionError */

/* START_OF_SYMBOL_DEFINITION _encode_SubmissionError */
/**
 * @summary Encodes a(n) SubmissionError into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The SubmissionError, encoded as an ASN.1 Element.
 */
export function _encode_SubmissionError(
    value: SubmissionError,
    elGetter: $.ASN1Encoder<SubmissionError>
) {
    if (!_cached_encoder_for_SubmissionError) {
        _cached_encoder_for_SubmissionError = $._encodeInteger;
    }
    return _cached_encoder_for_SubmissionError(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_SubmissionError */

/* eslint-enable */
