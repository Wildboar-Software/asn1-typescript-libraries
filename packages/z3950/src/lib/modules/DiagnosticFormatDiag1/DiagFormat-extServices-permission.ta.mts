/* eslint-disable */
import {
    INTEGER
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary DiagFormat_extServices_permission
 * @description
 * 
 * Extended services were denied (diag-1) because the id is not authorized
 * (DIAG.1 condition 222) or the package cannot be modified or deleted (223).
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * DiagFormat-extServices-permission ::= INTEGER {
 *     -- permission denied on ES, because:
 *     id (1),
 *     -- id not authorized, or
 *     modifyDelete (2)
 * }
 * ```
 */
export
type DiagFormat_extServices_permission = INTEGER;

/**
 * @summary DiagFormat_extServices_permission_id
 * @description
 * 
 * Permission denied: id not authorized (DIAG.1 condition 222).
 * 
 * @constant
 * @type {number}
 */
export
const DiagFormat_extServices_permission_id: DiagFormat_extServices_permission = 1; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary DiagFormat_extServices_permission_id
 * @description
 * 
 * Permission denied: id not authorized (DIAG.1 condition 222).
 * 
 * @constant
 * @type {number}
 */
export
const id: DiagFormat_extServices_permission = DiagFormat_extServices_permission_id; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary DiagFormat_extServices_permission_modifyDelete
 * @description
 * 
 * Permission denied: cannot modify or delete (DIAG.1 condition 223).
 * 
 * @constant
 * @type {number}
 */
export
const DiagFormat_extServices_permission_modifyDelete: DiagFormat_extServices_permission = 2; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary DiagFormat_extServices_permission_modifyDelete
 * @description
 * 
 * Permission denied: cannot modify or delete (DIAG.1 condition 223).
 * 
 * @constant
 * @type {number}
 */
export
const modifyDelete: DiagFormat_extServices_permission = DiagFormat_extServices_permission_modifyDelete; /* SHORT_NAMED_INTEGER_VALUE */
export const _decode_DiagFormat_extServices_permission = $._decodeInteger;
export const _encode_DiagFormat_extServices_permission = $._encodeInteger;


/* eslint-enable */
