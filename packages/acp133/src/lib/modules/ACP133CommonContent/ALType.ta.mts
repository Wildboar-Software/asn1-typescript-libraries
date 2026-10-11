/* eslint-disable */
import {
    ASN1Element as _Element,
    INTEGER
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary ALType
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ALType  ::=  INTEGER { aig(0), type(1), cad(2), taskforce(3), dag(4) }
 * ```
 */
export
type ALType = INTEGER;

/**
 * @summary ALType_aig
 * @constant
 * @type {number}
 */
export
const ALType_aig: ALType = 0; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ALType_aig
 * @constant
 * @type {number}
 */
export
const aig: ALType = ALType_aig; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary ALType_type_
 * @constant
 * @type {number}
 */
export
const ALType_type_: ALType = 1; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ALType_type_
 * @constant
 * @type {number}
 */
export
const type_: ALType = ALType_type_; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary ALType_cad
 * @constant
 * @type {number}
 */
export
const ALType_cad: ALType = 2; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ALType_cad
 * @constant
 * @type {number}
 */
export
const cad: ALType = ALType_cad; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary ALType_taskforce
 * @constant
 * @type {number}
 */
export
const ALType_taskforce: ALType = 3; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ALType_taskforce
 * @constant
 * @type {number}
 */
export
const taskforce: ALType = ALType_taskforce; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary ALType_dag
 * @constant
 * @type {number}
 */
export
const ALType_dag: ALType = 4; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ALType_dag
 * @constant
 * @type {number}
 */
export
const dag: ALType = ALType_dag; /* SHORT_NAMED_INTEGER_VALUE */
export const _decode_ALType = $._decodeInteger;
export const _encode_ALType = $._encodeInteger;


/* eslint-enable */
