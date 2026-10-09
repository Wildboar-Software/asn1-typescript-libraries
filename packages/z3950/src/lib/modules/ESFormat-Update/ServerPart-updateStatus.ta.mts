/* eslint-disable */
import {
    INTEGER
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary ServerPart_updateStatus
 * @description
 * 
 * Outcome of the update task as a whole, as distinct from each record. Not
 * set until the task is complete or rejected, and not until every record
 * has a final record status. `partial` means the task is finished and only
 * some records succeeded.
 * 
 * ANSI/NISO Z39.50-2003 EXT.1.5, EXT.1.5.1.
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
 * @description
 * 
 * The update was performed successfully. Every record status is success.
 * 
 * ANSI/NISO Z39.50-2003 EXT.1.5, EXT.1.5.1.
 * 
 * @constant
 * @type {number}
 */
export
const ServerPart_updateStatus_success: ServerPart_updateStatus = 1; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ServerPart_updateStatus_success
 * @description
 * 
 * Update succeeded for every record (EXT.1.5).
 * 
 * @constant
 * @type {number}
 */
export
const success: ServerPart_updateStatus = ServerPart_updateStatus_success; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary ServerPart_updateStatus_partial
 * @description
 * 
 * The update failed for one or more records. The task is done; this does
 * not mean the task is only partly done. Some record statuses are success
 * and some are not.
 * 
 * ANSI/NISO Z39.50-2003 EXT.1.5, EXT.1.5.1.
 * 
 * @constant
 * @type {number}
 */
export
const ServerPart_updateStatus_partial: ServerPart_updateStatus = 2; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ServerPart_updateStatus_partial
 * @description
 * 
 * Task finished; only some records were updated (EXT.1.5.1).
 * 
 * @constant
 * @type {number}
 */
export
const partial: ServerPart_updateStatus = ServerPart_updateStatus_partial; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary ServerPart_updateStatus_failure
 * @description
 * 
 * The server rejected execution of the task. One or more non-surrogate
 * diagnostics should be supplied as global diagnostics.
 * 
 * ANSI/NISO Z39.50-2003 EXT.1.5.
 * 
 * @constant
 * @type {number}
 */
export
const ServerPart_updateStatus_failure: ServerPart_updateStatus = 3; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ServerPart_updateStatus_failure
 * @description
 * 
 * Server rejected the task; see global diagnostics (EXT.1.5).
 * 
 * @constant
 * @type {number}
 */
export
const failure: ServerPart_updateStatus = ServerPart_updateStatus_failure; /* SHORT_NAMED_INTEGER_VALUE */
export const _decode_ServerPart_updateStatus = $._decodeInteger;
export const _encode_ServerPart_updateStatus = $._encodeInteger;


/* eslint-enable */
