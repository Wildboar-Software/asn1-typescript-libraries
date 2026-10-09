/* eslint-disable */
import {
    INTEGER
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary ClientPartNotToKeep_replaceOrAppend
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ClientPartNotToKeep-replaceOrAppend ::= INTEGER {
 *     -- Only if function is "modify"
 *     replace (1),
 *     append (2)
 * }
 * ```
 */
export
type ClientPartNotToKeep_replaceOrAppend = INTEGER;

/**
 * @summary ClientPartNotToKeep_replaceOrAppend_replace
 * @constant
 * @type {number}
 */
export
const ClientPartNotToKeep_replaceOrAppend_replace: ClientPartNotToKeep_replaceOrAppend = 1; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ClientPartNotToKeep_replaceOrAppend_replace
 * @constant
 * @type {number}
 */
export
const replace: ClientPartNotToKeep_replaceOrAppend = ClientPartNotToKeep_replaceOrAppend_replace; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary ClientPartNotToKeep_replaceOrAppend_append
 * @constant
 * @type {number}
 */
export
const ClientPartNotToKeep_replaceOrAppend_append: ClientPartNotToKeep_replaceOrAppend = 2; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ClientPartNotToKeep_replaceOrAppend_append
 * @constant
 * @type {number}
 */
export
const append: ClientPartNotToKeep_replaceOrAppend = ClientPartNotToKeep_replaceOrAppend_append; /* SHORT_NAMED_INTEGER_VALUE */
export const _decode_ClientPartNotToKeep_replaceOrAppend = $._decodeInteger;
export const _encode_ClientPartNotToKeep_replaceOrAppend = $._encodeInteger;


/* eslint-enable */
