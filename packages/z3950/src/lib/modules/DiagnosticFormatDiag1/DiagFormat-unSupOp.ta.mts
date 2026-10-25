/* eslint-disable */
import {
    type INTEGER
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
const DiagFormat_unSupOp_and = 0 satisfies DiagFormat_unSupOp; /* LONG_NAMED_INTEGER_VALUE */

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
const and = DiagFormat_unSupOp_and satisfies DiagFormat_unSupOp; /* SHORT_NAMED_INTEGER_VALUE */

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
const DiagFormat_unSupOp_or = 1 satisfies DiagFormat_unSupOp; /* LONG_NAMED_INTEGER_VALUE */

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
const or = DiagFormat_unSupOp_or satisfies DiagFormat_unSupOp; /* SHORT_NAMED_INTEGER_VALUE */

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
const DiagFormat_unSupOp_and_not = 2 satisfies DiagFormat_unSupOp; /* LONG_NAMED_INTEGER_VALUE */

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
const and_not = DiagFormat_unSupOp_and_not satisfies DiagFormat_unSupOp; /* SHORT_NAMED_INTEGER_VALUE */

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
const DiagFormat_unSupOp_prox = 3 satisfies DiagFormat_unSupOp; /* LONG_NAMED_INTEGER_VALUE */

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
const prox = DiagFormat_unSupOp_prox satisfies DiagFormat_unSupOp; /* SHORT_NAMED_INTEGER_VALUE */
export const _decode_DiagFormat_unSupOp: $.ASN1Decoder<DiagFormat_unSupOp> = $._decodeInteger;
export const _encode_DiagFormat_unSupOp: $.ASN1Encoder<DiagFormat_unSupOp> = $._encodeInteger;


/* eslint-enable */
