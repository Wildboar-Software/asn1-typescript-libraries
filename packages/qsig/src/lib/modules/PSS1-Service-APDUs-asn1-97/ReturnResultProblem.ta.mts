/* eslint-disable */
import {
    INTEGER
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary ReturnResultProblem
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ReturnResultProblem  ::=  INTEGER {
 *     unrecognisedInvocation(0),
 *     resultResponseUnexpected(1),
 *     mistypedResult(2)
 * }
 * ```
 */
export
type ReturnResultProblem = INTEGER;

/**
 * @summary ReturnResultProblem_unrecognisedInvocation
 * @constant
 * @type {number}
 */
export
const ReturnResultProblem_unrecognisedInvocation: ReturnResultProblem = 0; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ReturnResultProblem_unrecognisedInvocation
 * @constant
 * @type {number}
 */
export
const unrecognisedInvocation: ReturnResultProblem = ReturnResultProblem_unrecognisedInvocation; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary ReturnResultProblem_resultResponseUnexpected
 * @constant
 * @type {number}
 */
export
const ReturnResultProblem_resultResponseUnexpected: ReturnResultProblem = 1; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ReturnResultProblem_resultResponseUnexpected
 * @constant
 * @type {number}
 */
export
const resultResponseUnexpected: ReturnResultProblem = ReturnResultProblem_resultResponseUnexpected; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary ReturnResultProblem_mistypedResult
 * @constant
 * @type {number}
 */
export
const ReturnResultProblem_mistypedResult: ReturnResultProblem = 2; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ReturnResultProblem_mistypedResult
 * @constant
 * @type {number}
 */
export
const mistypedResult: ReturnResultProblem = ReturnResultProblem_mistypedResult; /* SHORT_NAMED_INTEGER_VALUE */

export
const _decode_ReturnResultProblem: $.ASN1Decoder<ReturnResultProblem> = $._decodeInteger;

export
const _encode_ReturnResultProblem: $.ASN1Encoder<ReturnResultProblem> = $._encodeInteger;

/* eslint-enable */
