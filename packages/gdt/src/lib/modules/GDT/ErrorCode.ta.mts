/* eslint-disable */
import {
    type INTEGER
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary ErrorCode
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ErrorCode  ::=  INTEGER {
 *     err-ok                      (0),
 *     err-out-of-sequence         (1),
 *     err-unknown-sequence        (2),
 *     err-unsupported-version     (3),
 *     err-timeout                 (4),
 *     err-unknown-route           (5),
 *     err-routing-not-supported   (6),
 *     err-max-hops-exceeded       (7),
 *     err-unknown-error           (255)
 * }
 * ```
 */
export
type ErrorCode = INTEGER;

/**
 * @summary ErrorCode_err_ok
 * @constant
 * @type {number}
 */
export
const ErrorCode_err_ok: 0 = 0 satisfies ErrorCode; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ErrorCode_err_ok
 * @constant
 * @type {number}
 */
export
const err_ok: 0 = ErrorCode_err_ok; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary ErrorCode_err_out_of_sequence
 * @constant
 * @type {number}
 */
export
const ErrorCode_err_out_of_sequence: 1 = 1 satisfies ErrorCode; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ErrorCode_err_out_of_sequence
 * @constant
 * @type {number}
 */
export
const err_out_of_sequence: 1 = ErrorCode_err_out_of_sequence; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary ErrorCode_err_unknown_sequence
 * @constant
 * @type {number}
 */
export
const ErrorCode_err_unknown_sequence: 2 = 2 satisfies ErrorCode; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ErrorCode_err_unknown_sequence
 * @constant
 * @type {number}
 */
export
const err_unknown_sequence: 2 = ErrorCode_err_unknown_sequence; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary ErrorCode_err_unsupported_version
 * @constant
 * @type {number}
 */
export
const ErrorCode_err_unsupported_version: 3 = 3 satisfies ErrorCode; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ErrorCode_err_unsupported_version
 * @constant
 * @type {number}
 */
export
const err_unsupported_version: 3 = ErrorCode_err_unsupported_version; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary ErrorCode_err_timeout
 * @constant
 * @type {number}
 */
export
const ErrorCode_err_timeout: 4 = 4 satisfies ErrorCode; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ErrorCode_err_timeout
 * @constant
 * @type {number}
 */
export
const err_timeout: 4 = ErrorCode_err_timeout; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary ErrorCode_err_unknown_route
 * @constant
 * @type {number}
 */
export
const ErrorCode_err_unknown_route: 5 = 5 satisfies ErrorCode; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ErrorCode_err_unknown_route
 * @constant
 * @type {number}
 */
export
const err_unknown_route: 5 = ErrorCode_err_unknown_route; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary ErrorCode_err_routing_not_supported
 * @constant
 * @type {number}
 */
export
const ErrorCode_err_routing_not_supported: 6 = 6 satisfies ErrorCode; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ErrorCode_err_routing_not_supported
 * @constant
 * @type {number}
 */
export
const err_routing_not_supported: 6 = ErrorCode_err_routing_not_supported; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary ErrorCode_err_max_hops_exceeded
 * @constant
 * @type {number}
 */
export
const ErrorCode_err_max_hops_exceeded: 7 = 7 satisfies ErrorCode; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ErrorCode_err_max_hops_exceeded
 * @constant
 * @type {number}
 */
export
const err_max_hops_exceeded: 7 = ErrorCode_err_max_hops_exceeded; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary ErrorCode_err_unknown_error
 * @constant
 * @type {number}
 */
export
const ErrorCode_err_unknown_error: 255 = 255 satisfies ErrorCode; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ErrorCode_err_unknown_error
 * @constant
 * @type {number}
 */
export
const err_unknown_error: 255 = ErrorCode_err_unknown_error; /* SHORT_NAMED_INTEGER_VALUE */
export const _decode_ErrorCode: $.ASN1Decoder<INTEGER> = $._decodeInteger;
export const _encode_ErrorCode: $.ASN1Encoder<INTEGER> = $._encodeInteger;


/* eslint-enable */
