/* eslint-disable */
import { ASN1Element as _Element, INTEGER } from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";

/**
 * @summary Abort_reason
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * Abort-reason  ::=  INTEGER {
 *   reason-not-specified                 (0),
 *   unrecognized-ppdu                    (1),
 *   unexpected-ppdu                      (2),
 *   unexpected-session-service-primitive (3),
 *   unrecognized-ppdu-parameter          (4),
 *   unexpected-ppdu-parameter            (5),
 *   invalid-ppdu-parameter-value         (6)}
 * ```
 */
export type Abort_reason = INTEGER;

/**
 * @summary Abort_reason_reason_not_specified
 * @constant
 * @type {number}
 */
export const Abort_reason_reason_not_specified: Abort_reason = 0; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary Abort_reason_reason_not_specified
 * @constant
 * @type {number}
 */
export const reason_not_specified: Abort_reason = Abort_reason_reason_not_specified; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary Abort_reason_unrecognized_ppdu
 * @constant
 * @type {number}
 */
export const Abort_reason_unrecognized_ppdu: Abort_reason = 1; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary Abort_reason_unrecognized_ppdu
 * @constant
 * @type {number}
 */
export const unrecognized_ppdu: Abort_reason = Abort_reason_unrecognized_ppdu; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary Abort_reason_unexpected_ppdu
 * @constant
 * @type {number}
 */
export const Abort_reason_unexpected_ppdu: Abort_reason = 2; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary Abort_reason_unexpected_ppdu
 * @constant
 * @type {number}
 */
export const unexpected_ppdu: Abort_reason = Abort_reason_unexpected_ppdu; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary Abort_reason_unexpected_session_service_primitive
 * @constant
 * @type {number}
 */
export const Abort_reason_unexpected_session_service_primitive: Abort_reason = 3; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary Abort_reason_unexpected_session_service_primitive
 * @constant
 * @type {number}
 */
export const unexpected_session_service_primitive: Abort_reason = Abort_reason_unexpected_session_service_primitive; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary Abort_reason_unrecognized_ppdu_parameter
 * @constant
 * @type {number}
 */
export const Abort_reason_unrecognized_ppdu_parameter: Abort_reason = 4; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary Abort_reason_unrecognized_ppdu_parameter
 * @constant
 * @type {number}
 */
export const unrecognized_ppdu_parameter: Abort_reason = Abort_reason_unrecognized_ppdu_parameter; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary Abort_reason_unexpected_ppdu_parameter
 * @constant
 * @type {number}
 */
export const Abort_reason_unexpected_ppdu_parameter: Abort_reason = 5; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary Abort_reason_unexpected_ppdu_parameter
 * @constant
 * @type {number}
 */
export const unexpected_ppdu_parameter: Abort_reason = Abort_reason_unexpected_ppdu_parameter; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary Abort_reason_invalid_ppdu_parameter_value
 * @constant
 * @type {number}
 */
export const Abort_reason_invalid_ppdu_parameter_value: Abort_reason = 6; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary Abort_reason_invalid_ppdu_parameter_value
 * @constant
 * @type {number}
 */
export const invalid_ppdu_parameter_value: Abort_reason = Abort_reason_invalid_ppdu_parameter_value; /* SHORT_NAMED_INTEGER_VALUE */


export const _decode_Abort_reason = $._decodeInteger;


export const _encode_Abort_reason = $._encodeInteger;


/* eslint-enable */
