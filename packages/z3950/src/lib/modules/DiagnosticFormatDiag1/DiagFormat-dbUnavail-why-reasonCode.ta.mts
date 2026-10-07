/* eslint-disable */
import {
    ASN1Element as _Element,
    INTEGER
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary DiagFormat_dbUnavail_why_reasonCode
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * DiagFormat-dbUnavail-why-reasonCode ::= INTEGER {
 *     doesNotExist        (0),
 *     existsButUnavail    (1),
 *     locked              (2),
 *     accessDenied        (3)
 * }
 * ```
 */
export
type DiagFormat_dbUnavail_why_reasonCode = INTEGER;

/**
 * @summary DiagFormat_dbUnavail_why_reasonCode_doesNotExist
 * @constant
 * @type {number}
 */
export
const DiagFormat_dbUnavail_why_reasonCode_doesNotExist: DiagFormat_dbUnavail_why_reasonCode = 0; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary DiagFormat_dbUnavail_why_reasonCode_doesNotExist
 * @constant
 * @type {number}
 */
export
const doesNotExist: DiagFormat_dbUnavail_why_reasonCode = DiagFormat_dbUnavail_why_reasonCode_doesNotExist; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary DiagFormat_dbUnavail_why_reasonCode_existsButUnavail
 * @constant
 * @type {number}
 */
export
const DiagFormat_dbUnavail_why_reasonCode_existsButUnavail: DiagFormat_dbUnavail_why_reasonCode = 1; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary DiagFormat_dbUnavail_why_reasonCode_existsButUnavail
 * @constant
 * @type {number}
 */
export
const existsButUnavail: DiagFormat_dbUnavail_why_reasonCode = DiagFormat_dbUnavail_why_reasonCode_existsButUnavail; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary DiagFormat_dbUnavail_why_reasonCode_locked
 * @constant
 * @type {number}
 */
export
const DiagFormat_dbUnavail_why_reasonCode_locked: DiagFormat_dbUnavail_why_reasonCode = 2; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary DiagFormat_dbUnavail_why_reasonCode_locked
 * @constant
 * @type {number}
 */
export
const locked: DiagFormat_dbUnavail_why_reasonCode = DiagFormat_dbUnavail_why_reasonCode_locked; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary DiagFormat_dbUnavail_why_reasonCode_accessDenied
 * @constant
 * @type {number}
 */
export
const DiagFormat_dbUnavail_why_reasonCode_accessDenied: DiagFormat_dbUnavail_why_reasonCode = 3; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary DiagFormat_dbUnavail_why_reasonCode_accessDenied
 * @constant
 * @type {number}
 */
export
const accessDenied: DiagFormat_dbUnavail_why_reasonCode = DiagFormat_dbUnavail_why_reasonCode_accessDenied; /* SHORT_NAMED_INTEGER_VALUE */
export const _decode_DiagFormat_dbUnavail_why_reasonCode = $._decodeInteger;
export const _encode_DiagFormat_dbUnavail_why_reasonCode = $._encodeInteger;


/* eslint-enable */
