/* eslint-disable */
import {
    ASN1Element as _Element,
    INTEGER
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary DiagFormat_term_problem
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * DiagFormat-term-problem ::= INTEGER {
 *     codedValue   (1),
 *     unparsable   (2),
 *     tooShort     (3),
 *     type         (4)
 * }
 * ```
 */
export
type DiagFormat_term_problem = INTEGER;

/**
 * @summary DiagFormat_term_problem_codedValue
 * @constant
 * @type {number}
 */
export
const DiagFormat_term_problem_codedValue: DiagFormat_term_problem = 1; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary DiagFormat_term_problem_codedValue
 * @constant
 * @type {number}
 */
export
const codedValue: DiagFormat_term_problem = DiagFormat_term_problem_codedValue; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary DiagFormat_term_problem_unparsable
 * @constant
 * @type {number}
 */
export
const DiagFormat_term_problem_unparsable: DiagFormat_term_problem = 2; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary DiagFormat_term_problem_unparsable
 * @constant
 * @type {number}
 */
export
const unparsable: DiagFormat_term_problem = DiagFormat_term_problem_unparsable; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary DiagFormat_term_problem_tooShort
 * @constant
 * @type {number}
 */
export
const DiagFormat_term_problem_tooShort: DiagFormat_term_problem = 3; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary DiagFormat_term_problem_tooShort
 * @constant
 * @type {number}
 */
export
const tooShort: DiagFormat_term_problem = DiagFormat_term_problem_tooShort; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary DiagFormat_term_problem_type_
 * @constant
 * @type {number}
 */
export
const DiagFormat_term_problem_type_: DiagFormat_term_problem = 4; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary DiagFormat_term_problem_type_
 * @constant
 * @type {number}
 */
export
const type_: DiagFormat_term_problem = DiagFormat_term_problem_type_; /* SHORT_NAMED_INTEGER_VALUE */
export const _decode_DiagFormat_term_problem = $._decodeInteger;
export const _encode_DiagFormat_term_problem = $._encodeInteger;


/* eslint-enable */
