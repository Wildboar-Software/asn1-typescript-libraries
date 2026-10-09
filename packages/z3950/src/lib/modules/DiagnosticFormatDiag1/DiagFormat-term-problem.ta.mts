/* eslint-disable */
import {
    INTEGER
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary DiagFormat_term_problem
 * @description
 * 
 * What is wrong with the term (diag-1): coded value (124), unparsable value
 * (127), too short (9), or unsupported type (229). DIAG.1.
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * DiagFormat-term-problem ::= INTEGER {
 *     codedValue (1),
 *     unparsable (2),
 *     tooShort (3),
 *     type (4)
 * }
 * ```
 */
export
type DiagFormat_term_problem = INTEGER;

/**
 * @summary DiagFormat_term_problem_codedValue
 * @description
 * 
 * Unsupported coded value for term (DIAG.1 condition 124). Addinfo is the
 * value.
 * 
 * @constant
 * @type {number}
 */
export
const DiagFormat_term_problem_codedValue: DiagFormat_term_problem = 1; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary DiagFormat_term_problem_codedValue
 * @description
 * 
 * Unsupported coded value for term (DIAG.1 condition 124). Addinfo is the
 * value.
 * 
 * @constant
 * @type {number}
 */
export
const codedValue: DiagFormat_term_problem = DiagFormat_term_problem_codedValue; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary DiagFormat_term_problem_unparsable
 * @description
 * 
 * Unparsable format for un-normalized value (DIAG.1 condition 127). Addinfo is
 * the value.
 * 
 * @constant
 * @type {number}
 */
export
const DiagFormat_term_problem_unparsable: DiagFormat_term_problem = 2; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary DiagFormat_term_problem_unparsable
 * @description
 * 
 * Unparsable format for un-normalized value (DIAG.1 condition 127). Addinfo is
 * the value.
 * 
 * @constant
 * @type {number}
 */
export
const unparsable: DiagFormat_term_problem = DiagFormat_term_problem_unparsable; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary DiagFormat_term_problem_tooShort
 * @description
 * 
 * Truncated words too short (DIAG.1 condition 9).
 * 
 * @constant
 * @type {number}
 */
export
const DiagFormat_term_problem_tooShort: DiagFormat_term_problem = 3; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary DiagFormat_term_problem_tooShort
 * @description
 * 
 * Truncated words too short (DIAG.1 condition 9).
 * 
 * @constant
 * @type {number}
 */
export
const tooShort: DiagFormat_term_problem = DiagFormat_term_problem_tooShort; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary DiagFormat_term_problem_type_
 * @description
 * 
 * Term type not supported (DIAG.1 condition 229). Addinfo is the type.
 * 
 * @constant
 * @type {number}
 */
export
const DiagFormat_term_problem_type_: DiagFormat_term_problem = 4; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary DiagFormat_term_problem_type_
 * @description
 * 
 * Term type not supported (DIAG.1 condition 229). Addinfo is the type.
 * 
 * @constant
 * @type {number}
 */
export
const type_: DiagFormat_term_problem = DiagFormat_term_problem_type_; /* SHORT_NAMED_INTEGER_VALUE */
export const _decode_DiagFormat_term_problem = $._decodeInteger;
export const _encode_DiagFormat_term_problem = $._encodeInteger;


/* eslint-enable */
