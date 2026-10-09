/* eslint-disable */
import {
    INTEGER
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary DiagFormat_unSupOp
 * @description
 * 
 * The operator is unsupported (diag-1, DIAG.1 condition 110). The flat form
 * puts the operator in addinfo; here the operator is the enumerated value.
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * DiagFormat-unSupOp ::= INTEGER {
 *     -- unsupported operator
 *     and (0),
 *     or (1),
 *     and-not (2),
 *     prox (3)
 * }
 * ```
 */
export
type DiagFormat_unSupOp = INTEGER;

/**
 * @summary DiagFormat_unSupOp_and
 * @description
 * 
 * AND is unsupported (DIAG.1 condition 110). Addinfo is the operator.
 * 
 * @constant
 * @type {number}
 */
export
const DiagFormat_unSupOp_and: DiagFormat_unSupOp = 0; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary DiagFormat_unSupOp_and
 * @description
 * 
 * AND is unsupported (DIAG.1 condition 110). Addinfo is the operator.
 * 
 * @constant
 * @type {number}
 */
export
const and: DiagFormat_unSupOp = DiagFormat_unSupOp_and; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary DiagFormat_unSupOp_or
 * @description
 * 
 * OR is unsupported (DIAG.1 condition 110). Addinfo is the operator.
 * 
 * @constant
 * @type {number}
 */
export
const DiagFormat_unSupOp_or: DiagFormat_unSupOp = 1; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary DiagFormat_unSupOp_or
 * @description
 * 
 * OR is unsupported (DIAG.1 condition 110). Addinfo is the operator.
 * 
 * @constant
 * @type {number}
 */
export
const or: DiagFormat_unSupOp = DiagFormat_unSupOp_or; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary DiagFormat_unSupOp_and_not
 * @description
 * 
 * AND-NOT is unsupported (DIAG.1 condition 110). Addinfo is the operator.
 * 
 * @constant
 * @type {number}
 */
export
const DiagFormat_unSupOp_and_not: DiagFormat_unSupOp = 2; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary DiagFormat_unSupOp_and_not
 * @description
 * 
 * AND-NOT is unsupported (DIAG.1 condition 110). Addinfo is the operator.
 * 
 * @constant
 * @type {number}
 */
export
const and_not: DiagFormat_unSupOp = DiagFormat_unSupOp_and_not; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary DiagFormat_unSupOp_prox
 * @description
 * 
 * Proximity is unsupported (DIAG.1 condition 110). Addinfo is the operator.
 * 
 * @constant
 * @type {number}
 */
export
const DiagFormat_unSupOp_prox: DiagFormat_unSupOp = 3; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary DiagFormat_unSupOp_prox
 * @description
 * 
 * Proximity is unsupported (DIAG.1 condition 110). Addinfo is the operator.
 * 
 * @constant
 * @type {number}
 */
export
const prox: DiagFormat_unSupOp = DiagFormat_unSupOp_prox; /* SHORT_NAMED_INTEGER_VALUE */
export const _decode_DiagFormat_unSupOp = $._decodeInteger;
export const _encode_DiagFormat_unSupOp = $._encodeInteger;


/* eslint-enable */
