/* eslint-disable */
import {
    ASN1Element as _Element,
    INTEGER
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary DiagFormat_unSupOp
 * @description
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
 * @constant
 * @type {number}
 */
export
const DiagFormat_unSupOp_and: DiagFormat_unSupOp = 0; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary DiagFormat_unSupOp_and
 * @constant
 * @type {number}
 */
export
const and: DiagFormat_unSupOp = DiagFormat_unSupOp_and; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary DiagFormat_unSupOp_or
 * @constant
 * @type {number}
 */
export
const DiagFormat_unSupOp_or: DiagFormat_unSupOp = 1; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary DiagFormat_unSupOp_or
 * @constant
 * @type {number}
 */
export
const or: DiagFormat_unSupOp = DiagFormat_unSupOp_or; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary DiagFormat_unSupOp_and_not
 * @constant
 * @type {number}
 */
export
const DiagFormat_unSupOp_and_not: DiagFormat_unSupOp = 2; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary DiagFormat_unSupOp_and_not
 * @constant
 * @type {number}
 */
export
const and_not: DiagFormat_unSupOp = DiagFormat_unSupOp_and_not; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary DiagFormat_unSupOp_prox
 * @constant
 * @type {number}
 */
export
const DiagFormat_unSupOp_prox: DiagFormat_unSupOp = 3; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary DiagFormat_unSupOp_prox
 * @constant
 * @type {number}
 */
export
const prox: DiagFormat_unSupOp = DiagFormat_unSupOp_prox; /* SHORT_NAMED_INTEGER_VALUE */
export const _decode_DiagFormat_unSupOp = $._decodeInteger;
export const _encode_DiagFormat_unSupOp = $._encodeInteger;


/* eslint-enable */
