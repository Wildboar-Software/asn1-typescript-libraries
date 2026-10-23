/* eslint-disable */
import {
    INTEGER
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary ExecutionProblem
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ExecutionProblem  ::=  INTEGER {missingInputValues(1), executionFailure(2)
 * }
 * ```
 */
export
type ExecutionProblem = INTEGER;

/**
 * @summary ExecutionProblem_missingInputValues
 * @constant
 * @type {number}
 */
export
const ExecutionProblem_missingInputValues: ExecutionProblem = 1; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ExecutionProblem_missingInputValues
 * @constant
 * @type {number}
 */
export
const missingInputValues: ExecutionProblem = ExecutionProblem_missingInputValues; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary ExecutionProblem_executionFailure
 * @constant
 * @type {number}
 */
export
const ExecutionProblem_executionFailure: ExecutionProblem = 2; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ExecutionProblem_executionFailure
 * @constant
 * @type {number}
 */
export
const executionFailure: ExecutionProblem = ExecutionProblem_executionFailure; /* SHORT_NAMED_INTEGER_VALUE */

export
const _decode_ExecutionProblem: $.ASN1Decoder<ExecutionProblem> = $._decodeInteger;

export
const _encode_ExecutionProblem: $.ASN1Encoder<ExecutionProblem> = $._encodeInteger;

/* eslint-enable */
