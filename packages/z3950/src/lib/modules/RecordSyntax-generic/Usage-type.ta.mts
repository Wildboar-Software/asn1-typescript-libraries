/* eslint-disable */
import {
    INTEGER
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary Usage_type
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * Usage-type ::= INTEGER {
 *     redistributable (1),
 *     -- Element is freely redistributable
 *     restricted (2),
 *     -- Restriction contains statement
 *     licensePointer (3)  -- Restriction contains license pointer
 * }
 * ```
 */
export
type Usage_type = INTEGER;

/**
 * @summary Usage_type_redistributable
 * @constant
 * @type {number}
 */
export
const Usage_type_redistributable: Usage_type = 1; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary Usage_type_redistributable
 * @constant
 * @type {number}
 */
export
const redistributable: Usage_type = Usage_type_redistributable; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary Usage_type_restricted
 * @constant
 * @type {number}
 */
export
const Usage_type_restricted: Usage_type = 2; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary Usage_type_restricted
 * @constant
 * @type {number}
 */
export
const restricted: Usage_type = Usage_type_restricted; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary Usage_type_licensePointer
 * @constant
 * @type {number}
 */
export
const Usage_type_licensePointer: Usage_type = 3; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary Usage_type_licensePointer
 * @constant
 * @type {number}
 */
export
const licensePointer: Usage_type = Usage_type_licensePointer; /* SHORT_NAMED_INTEGER_VALUE */
export const _decode_Usage_type = $._decodeInteger;
export const _encode_Usage_type = $._encodeInteger;


/* eslint-enable */
