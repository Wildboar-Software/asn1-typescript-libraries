/* eslint-disable */
import {
    INTEGER
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary ClientPartToKeep_resultSetDisposition
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ClientPartToKeep-resultSetDisposition ::= INTEGER {
 *     replace (1),
 *     append (2),
 *     createNew (3)  -- Only if client and server have agreement about naming
 *     -- convention for the resulting package,
 *     -- and only if no result set is specified
 * }
 * ```
 */
export
type ClientPartToKeep_resultSetDisposition = INTEGER;

/**
 * @summary ClientPartToKeep_resultSetDisposition_replace
 * @constant
 * @type {number}
 */
export
const ClientPartToKeep_resultSetDisposition_replace: ClientPartToKeep_resultSetDisposition = 1; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ClientPartToKeep_resultSetDisposition_replace
 * @constant
 * @type {number}
 */
export
const replace: ClientPartToKeep_resultSetDisposition = ClientPartToKeep_resultSetDisposition_replace; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary ClientPartToKeep_resultSetDisposition_append
 * @constant
 * @type {number}
 */
export
const ClientPartToKeep_resultSetDisposition_append: ClientPartToKeep_resultSetDisposition = 2; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ClientPartToKeep_resultSetDisposition_append
 * @constant
 * @type {number}
 */
export
const append: ClientPartToKeep_resultSetDisposition = ClientPartToKeep_resultSetDisposition_append; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary ClientPartToKeep_resultSetDisposition_createNew
 * @constant
 * @type {number}
 */
export
const ClientPartToKeep_resultSetDisposition_createNew: ClientPartToKeep_resultSetDisposition = 3; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ClientPartToKeep_resultSetDisposition_createNew
 * @constant
 * @type {number}
 */
export
const createNew: ClientPartToKeep_resultSetDisposition = ClientPartToKeep_resultSetDisposition_createNew; /* SHORT_NAMED_INTEGER_VALUE */
export const _decode_ClientPartToKeep_resultSetDisposition = $._decodeInteger;
export const _encode_ClientPartToKeep_resultSetDisposition = $._encodeInteger;


/* eslint-enable */
