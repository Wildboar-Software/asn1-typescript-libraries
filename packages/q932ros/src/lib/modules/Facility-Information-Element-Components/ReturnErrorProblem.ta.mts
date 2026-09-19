/* eslint-disable */
import {
    ASN1Element as _Element,
    INTEGER
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary ReturnErrorProblem
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ReturnErrorProblem  ::=  INTEGER {
 *   unrecognizedInvocation(0), errorResponseUnexpected(1), unrecognizedError(2),
 *   unexpectedError(3), mistypedParameter(4)}
 * ```
 */
export
type ReturnErrorProblem = INTEGER;

/**
 * @summary ReturnErrorProblem_unrecognizedInvocation
 * @constant
 * @type {number}
 */
export
const ReturnErrorProblem_unrecognizedInvocation: ReturnErrorProblem = 0; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ReturnErrorProblem_unrecognizedInvocation
 * @constant
 * @type {number}
 */
export
const unrecognizedInvocation: ReturnErrorProblem = ReturnErrorProblem_unrecognizedInvocation; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary ReturnErrorProblem_errorResponseUnexpected
 * @constant
 * @type {number}
 */
export
const ReturnErrorProblem_errorResponseUnexpected: ReturnErrorProblem = 1; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ReturnErrorProblem_errorResponseUnexpected
 * @constant
 * @type {number}
 */
export
const errorResponseUnexpected: ReturnErrorProblem = ReturnErrorProblem_errorResponseUnexpected; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary ReturnErrorProblem_unrecognizedError
 * @constant
 * @type {number}
 */
export
const ReturnErrorProblem_unrecognizedError: ReturnErrorProblem = 2; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ReturnErrorProblem_unrecognizedError
 * @constant
 * @type {number}
 */
export
const unrecognizedError: ReturnErrorProblem = ReturnErrorProblem_unrecognizedError; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary ReturnErrorProblem_unexpectedError
 * @constant
 * @type {number}
 */
export
const ReturnErrorProblem_unexpectedError: ReturnErrorProblem = 3; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ReturnErrorProblem_unexpectedError
 * @constant
 * @type {number}
 */
export
const unexpectedError: ReturnErrorProblem = ReturnErrorProblem_unexpectedError; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary ReturnErrorProblem_mistypedParameter
 * @constant
 * @type {number}
 */
export
const ReturnErrorProblem_mistypedParameter: ReturnErrorProblem = 4; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ReturnErrorProblem_mistypedParameter
 * @constant
 * @type {number}
 */
export
const mistypedParameter: ReturnErrorProblem = ReturnErrorProblem_mistypedParameter; /* SHORT_NAMED_INTEGER_VALUE */

let _cached_decoder_for_ReturnErrorProblem: $.ASN1Decoder<ReturnErrorProblem> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) ReturnErrorProblem
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_ReturnErrorProblem (el: _Element): ReturnErrorProblem {
    if (!_cached_decoder_for_ReturnErrorProblem) { _cached_decoder_for_ReturnErrorProblem = $._decodeInteger; }
    return _cached_decoder_for_ReturnErrorProblem(el);
}

let _cached_encoder_for_ReturnErrorProblem: $.ASN1Encoder<ReturnErrorProblem> | null = null;

/**
 * @summary Encodes a(n) ReturnErrorProblem into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ReturnErrorProblem, encoded as an ASN.1 Element.
 */
export
function _encode_ReturnErrorProblem (value: ReturnErrorProblem, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_ReturnErrorProblem) { _cached_encoder_for_ReturnErrorProblem = $._encodeInteger; }
    return _cached_encoder_for_ReturnErrorProblem(value, elGetter);
}


/* eslint-enable */
