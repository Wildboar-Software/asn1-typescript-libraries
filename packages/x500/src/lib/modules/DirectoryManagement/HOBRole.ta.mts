/* eslint-disable */
import { ASN1Element as _Element, INTEGER } from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";

/**
 * @summary HOBRole
 * @description
 *
 * INTEGER role of this DSA in a hierarchical operational binding (HOB).
 * `superior`(0) = holds the superior naming context; `subordinate`(1) = holds
 * the subordinate naming context. INTEGER, not ENUMERATED. MATCHES FOR
 * EQUALITY. `0` is a named role, not "none".
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * HOBRole  ::=  INTEGER {superior(0), subordinate(1)}
 * ```
 */
export type HOBRole = INTEGER;

/**
 * @summary HOBRole_superior
 * @description
 *
 * This DSA holds the superior naming context of the HOB. Named `0`, not
 * "none".
 *
 * @constant
 * @type {number}
 */
export const HOBRole_superior: HOBRole = 0; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary HOBRole_superior
 * @description
 *
 * This DSA holds the superior naming context of the HOB. Named `0`, not
 * "none".
 *
 * @constant
 * @type {number}
 */
export const superior: HOBRole = HOBRole_superior; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary HOBRole_subordinate
 * @description
 *
 * This DSA holds the subordinate naming context of the HOB.
 *
 * @constant
 * @type {number}
 */
export const HOBRole_subordinate: HOBRole = 1; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary HOBRole_subordinate
 * @description
 *
 * This DSA holds the subordinate naming context of the HOB.
 *
 * @constant
 * @type {number}
 */
export const subordinate: HOBRole = HOBRole_subordinate; /* SHORT_NAMED_INTEGER_VALUE */


export const _decode_HOBRole = $._decodeInteger;


export const _encode_HOBRole = $._encodeInteger;


/* eslint-enable */
