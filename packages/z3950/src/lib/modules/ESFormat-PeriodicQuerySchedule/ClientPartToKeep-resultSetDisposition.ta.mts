/* eslint-disable */
import {
    INTEGER
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary ClientPartToKeep_resultSetDisposition
 * @description
 * 
 * What the server does with results each time the periodic query runs.
 * `createNew` only if client and server have agreed on names for the
 * resulting package, and only if no result set is specified. On create, if
 * a result set is specified, this is mandatory and must be `replace` or
 * `append`. If the period is continuous, `append` is recommended.
 * 
 * ANSI/NISO Z39.50-2003 EXT.1.3.
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
 * @description
 * 
 * Replace the contents of the existing result set each time the query
 * runs. On create, if a result set is specified, disposition must be
 * `replace` or `append`.
 * 
 * ANSI/NISO Z39.50-2003 EXT.1.3.
 * 
 * @constant
 * @type {number}
 */
export
const ClientPartToKeep_resultSetDisposition_replace: ClientPartToKeep_resultSetDisposition = 1; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ClientPartToKeep_resultSetDisposition_replace
 * @description
 * 
 * Replace the existing result set's contents on each run (EXT.1.3).
 * 
 * @constant
 * @type {number}
 */
export
const replace: ClientPartToKeep_resultSetDisposition = ClientPartToKeep_resultSetDisposition_replace; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary ClientPartToKeep_resultSetDisposition_append
 * @description
 * 
 * Append new results to the end of the result set. This lets the server
 * keep extending the result set. Recommended when the period is
 * continuous. On create, if a result set is specified, disposition must be
 * `replace` or `append`.
 * 
 * ANSI/NISO Z39.50-2003 EXT.1.3.
 * 
 * @constant
 * @type {number}
 */
export
const ClientPartToKeep_resultSetDisposition_append: ClientPartToKeep_resultSetDisposition = 2; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ClientPartToKeep_resultSetDisposition_append
 * @description
 * 
 * Append new results to the result set on each run (EXT.1.3).
 * 
 * @constant
 * @type {number}
 */
export
const append: ClientPartToKeep_resultSetDisposition = ClientPartToKeep_resultSetDisposition_append; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary ClientPartToKeep_resultSetDisposition_createNew
 * @description
 * 
 * Create a new result set each time the query runs. Use only when client
 * and server have agreed how to name the resulting package, and only if no
 * result set is specified.
 * 
 * ANSI/NISO Z39.50-2003 EXT.1.3.
 * 
 * @constant
 * @type {number}
 */
export
const ClientPartToKeep_resultSetDisposition_createNew: ClientPartToKeep_resultSetDisposition = 3; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ClientPartToKeep_resultSetDisposition_createNew
 * @description
 * 
 * Create a new result set on each run; requires a naming agreement
 * (EXT.1.3).
 * 
 * @constant
 * @type {number}
 */
export
const createNew: ClientPartToKeep_resultSetDisposition = ClientPartToKeep_resultSetDisposition_createNew; /* SHORT_NAMED_INTEGER_VALUE */
export const _decode_ClientPartToKeep_resultSetDisposition = $._decodeInteger;
export const _encode_ClientPartToKeep_resultSetDisposition = $._encodeInteger;


/* eslint-enable */
