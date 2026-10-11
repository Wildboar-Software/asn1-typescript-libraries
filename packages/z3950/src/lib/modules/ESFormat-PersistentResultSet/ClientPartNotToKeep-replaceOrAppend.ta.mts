/* eslint-disable */
import {
    INTEGER
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary ClientPartNotToKeep_replaceOrAppend
 * @description
 * 
 * On modify, whether the named transient result set replaces the
 * persistent result set or is appended to it. Valid only when the user has
 * modify-contents permission. Occurs only when the function is modify.
 * 
 * ANSI/NISO Z39.50-2003 EXT.1.1.
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
 * @description
 * 
 * The named transient result set replaces the existing persistent result
 * set. Modify only, and only with modify-contents permission.
 * 
 * ANSI/NISO Z39.50-2003 EXT.1.1.
 * 
 * @constant
 * @type {number}
 */
export
const ClientPartNotToKeep_replaceOrAppend_replace: ClientPartNotToKeep_replaceOrAppend = 1; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ClientPartNotToKeep_replaceOrAppend_replace
 * @description
 * 
 * On modify, replace the persistent result set (EXT.1.1).
 * 
 * @constant
 * @type {number}
 */
export
const replace: ClientPartNotToKeep_replaceOrAppend = ClientPartNotToKeep_replaceOrAppend_replace; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary ClientPartNotToKeep_replaceOrAppend_append
 * @description
 * 
 * The named transient result set is appended to the existing persistent
 * result set. Modify only, and only with modify-contents permission.
 * 
 * ANSI/NISO Z39.50-2003 EXT.1.1.
 * 
 * @constant
 * @type {number}
 */
export
const ClientPartNotToKeep_replaceOrAppend_append: ClientPartNotToKeep_replaceOrAppend = 2; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ClientPartNotToKeep_replaceOrAppend_append
 * @description
 * 
 * On modify, append to the persistent result set (EXT.1.1).
 * 
 * @constant
 * @type {number}
 */
export
const append: ClientPartNotToKeep_replaceOrAppend = ClientPartNotToKeep_replaceOrAppend_append; /* SHORT_NAMED_INTEGER_VALUE */
export const _decode_ClientPartNotToKeep_replaceOrAppend: $.ASN1Decoder<ClientPartNotToKeep_replaceOrAppend> = $._decodeInteger;
export const _encode_ClientPartNotToKeep_replaceOrAppend: $.ASN1Encoder<ClientPartNotToKeep_replaceOrAppend> = $._encodeInteger;


/* eslint-enable */
