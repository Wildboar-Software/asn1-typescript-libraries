/* eslint-disable */
import {
    INTEGER
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary ServerPart_updateStatus
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ServerPart-updateStatus ::= INTEGER {
 *     success (1),
 *     partial (2),
 *     failure (3)
 * }
 * ```
 */
export
type ServerPart_updateStatus = INTEGER;

/**
 * @summary ServerPart_updateStatus_success
 * @constant
 * @type {number}
 */
export
const ServerPart_updateStatus_success: ServerPart_updateStatus = 1; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ServerPart_updateStatus_success
 * @constant
 * @type {number}
 */
export
const success: ServerPart_updateStatus = ServerPart_updateStatus_success; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary ServerPart_updateStatus_partial
 * @constant
 * @type {number}
 */
export
const ServerPart_updateStatus_partial: ServerPart_updateStatus = 2; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ServerPart_updateStatus_partial
 * @constant
 * @type {number}
 */
export
const partial: ServerPart_updateStatus = ServerPart_updateStatus_partial; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary ServerPart_updateStatus_failure
 * @constant
 * @type {number}
 */
export
const ServerPart_updateStatus_failure: ServerPart_updateStatus = 3; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ServerPart_updateStatus_failure
 * @constant
 * @type {number}
 */
export
const failure: ServerPart_updateStatus = ServerPart_updateStatus_failure; /* SHORT_NAMED_INTEGER_VALUE */
export const _decode_ServerPart_updateStatus = $._decodeInteger;
export const _encode_ServerPart_updateStatus = $._encodeInteger;


/* eslint-enable */
