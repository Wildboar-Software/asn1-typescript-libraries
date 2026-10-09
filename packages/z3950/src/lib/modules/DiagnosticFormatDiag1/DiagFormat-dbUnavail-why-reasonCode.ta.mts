/* eslint-disable */
import {
    INTEGER
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary DiagFormat_dbUnavail_why_reasonCode
 * @description
 * 
 * Why the named database cannot be used: it does not exist (235), is
 * unavailable (109), is locked (29), or access is denied (236). DIAG.1.
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * DiagFormat-dbUnavail-why-reasonCode ::= INTEGER {
 *     doesNotExist (0),
 *     existsButUnavail (1),
 *     locked (2),
 *     accessDenied (3)
 * }
 * ```
 */
export
type DiagFormat_dbUnavail_why_reasonCode = INTEGER;

/**
 * @summary DiagFormat_dbUnavail_why_reasonCode_doesNotExist
 * @description
 * 
 * Database does not exist (DIAG.1 condition 235). Addinfo is the database name.
 * 
 * @constant
 * @type {number}
 */
export
const DiagFormat_dbUnavail_why_reasonCode_doesNotExist: DiagFormat_dbUnavail_why_reasonCode = 0; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary DiagFormat_dbUnavail_why_reasonCode_doesNotExist
 * @description
 * 
 * Database does not exist (DIAG.1 condition 235). Addinfo is the database name.
 * 
 * @constant
 * @type {number}
 */
export
const doesNotExist: DiagFormat_dbUnavail_why_reasonCode = DiagFormat_dbUnavail_why_reasonCode_doesNotExist; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary DiagFormat_dbUnavail_why_reasonCode_existsButUnavail
 * @description
 * 
 * Database unavailable (DIAG.1 condition 109). Addinfo is the database name.
 * 
 * @constant
 * @type {number}
 */
export
const DiagFormat_dbUnavail_why_reasonCode_existsButUnavail: DiagFormat_dbUnavail_why_reasonCode = 1; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary DiagFormat_dbUnavail_why_reasonCode_existsButUnavail
 * @description
 * 
 * Database unavailable (DIAG.1 condition 109). Addinfo is the database name.
 * 
 * @constant
 * @type {number}
 */
export
const existsButUnavail: DiagFormat_dbUnavail_why_reasonCode = DiagFormat_dbUnavail_why_reasonCode_existsButUnavail; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary DiagFormat_dbUnavail_why_reasonCode_locked
 * @description
 * 
 * One of the specified databases is locked (DIAG.1 condition 29).
 * 
 * @constant
 * @type {number}
 */
export
const DiagFormat_dbUnavail_why_reasonCode_locked: DiagFormat_dbUnavail_why_reasonCode = 2; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary DiagFormat_dbUnavail_why_reasonCode_locked
 * @description
 * 
 * One of the specified databases is locked (DIAG.1 condition 29).
 * 
 * @constant
 * @type {number}
 */
export
const locked: DiagFormat_dbUnavail_why_reasonCode = DiagFormat_dbUnavail_why_reasonCode_locked; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary DiagFormat_dbUnavail_why_reasonCode_accessDenied
 * @description
 * 
 * Access to the specified database denied (DIAG.1 condition 236). Addinfo is
 * the database name.
 * 
 * @constant
 * @type {number}
 */
export
const DiagFormat_dbUnavail_why_reasonCode_accessDenied: DiagFormat_dbUnavail_why_reasonCode = 3; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary DiagFormat_dbUnavail_why_reasonCode_accessDenied
 * @description
 * 
 * Access to the specified database denied (DIAG.1 condition 236). Addinfo is
 * the database name.
 * 
 * @constant
 * @type {number}
 */
export
const accessDenied: DiagFormat_dbUnavail_why_reasonCode = DiagFormat_dbUnavail_why_reasonCode_accessDenied; /* SHORT_NAMED_INTEGER_VALUE */
export const _decode_DiagFormat_dbUnavail_why_reasonCode: $.ASN1Decoder<DiagFormat_dbUnavail_why_reasonCode> = $._decodeInteger;
export const _encode_DiagFormat_dbUnavail_why_reasonCode: $.ASN1Encoder<DiagFormat_dbUnavail_why_reasonCode> = $._encodeInteger;


/* eslint-enable */
