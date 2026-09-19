/* eslint-disable */
import {
    ASN1Element as _Element,
    INTEGER
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
const ErrorCode_err_ok: ErrorCode = 0; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ErrorCode_err_ok
 * @constant
 * @type {number}
 */
export
const err_ok: ErrorCode = ErrorCode_err_ok; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary ErrorCode_err_out_of_sequence
 * @constant
 * @type {number}
 */
export
const ErrorCode_err_out_of_sequence: ErrorCode = 1; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ErrorCode_err_out_of_sequence
 * @constant
 * @type {number}
 */
export
const err_out_of_sequence: ErrorCode = ErrorCode_err_out_of_sequence; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary ErrorCode_err_unknown_sequence
 * @constant
 * @type {number}
 */
export
const ErrorCode_err_unknown_sequence: ErrorCode = 2; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ErrorCode_err_unknown_sequence
 * @constant
 * @type {number}
 */
export
const err_unknown_sequence: ErrorCode = ErrorCode_err_unknown_sequence; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary ErrorCode_err_unsupported_version
 * @constant
 * @type {number}
 */
export
const ErrorCode_err_unsupported_version: ErrorCode = 3; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ErrorCode_err_unsupported_version
 * @constant
 * @type {number}
 */
export
const err_unsupported_version: ErrorCode = ErrorCode_err_unsupported_version; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary ErrorCode_err_timeout
 * @constant
 * @type {number}
 */
export
const ErrorCode_err_timeout: ErrorCode = 4; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ErrorCode_err_timeout
 * @constant
 * @type {number}
 */
export
const err_timeout: ErrorCode = ErrorCode_err_timeout; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary ErrorCode_err_unknown_route
 * @constant
 * @type {number}
 */
export
const ErrorCode_err_unknown_route: ErrorCode = 5; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ErrorCode_err_unknown_route
 * @constant
 * @type {number}
 */
export
const err_unknown_route: ErrorCode = ErrorCode_err_unknown_route; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary ErrorCode_err_routing_not_supported
 * @constant
 * @type {number}
 */
export
const ErrorCode_err_routing_not_supported: ErrorCode = 6; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ErrorCode_err_routing_not_supported
 * @constant
 * @type {number}
 */
export
const err_routing_not_supported: ErrorCode = ErrorCode_err_routing_not_supported; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary ErrorCode_err_max_hops_exceeded
 * @constant
 * @type {number}
 */
export
const ErrorCode_err_max_hops_exceeded: ErrorCode = 7; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ErrorCode_err_max_hops_exceeded
 * @constant
 * @type {number}
 */
export
const err_max_hops_exceeded: ErrorCode = ErrorCode_err_max_hops_exceeded; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary ErrorCode_err_unknown_error
 * @constant
 * @type {number}
 */
export
const ErrorCode_err_unknown_error: ErrorCode = 255; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ErrorCode_err_unknown_error
 * @constant
 * @type {number}
 */
export
const err_unknown_error: ErrorCode = ErrorCode_err_unknown_error; /* SHORT_NAMED_INTEGER_VALUE */

let _cached_decoder_for_ErrorCode: $.ASN1Decoder<ErrorCode> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) ErrorCode
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_ErrorCode (el: _Element): ErrorCode {
    if (!_cached_decoder_for_ErrorCode) { _cached_decoder_for_ErrorCode = $._decodeInteger; }
    return _cached_decoder_for_ErrorCode(el);
}

let _cached_encoder_for_ErrorCode: $.ASN1Encoder<ErrorCode> | null = null;

/**
 * @summary Encodes a(n) ErrorCode into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ErrorCode, encoded as an ASN.1 Element.
 */
export
function _encode_ErrorCode (value: ErrorCode, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_ErrorCode) { _cached_encoder_for_ErrorCode = $._encodeInteger; }
    return _cached_encoder_for_ErrorCode(value, elGetter);
}


/* eslint-enable */
