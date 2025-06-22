/* eslint-disable */
import { ASN1Element as _Element, INTEGER } from "asn1-ts";
import * as $ from "@wildboar/asn1/functional";

/**
 * @summary HOBRole
 * @description
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
 * @constant
 * @type {number}
 */
export const HOBRole_superior: HOBRole = 0; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary HOBRole_superior
 * @constant
 * @type {number}
 */
export const superior: HOBRole = HOBRole_superior; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary HOBRole_subordinate
 * @constant
 * @type {number}
 */
export const HOBRole_subordinate: HOBRole = 1; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary HOBRole_subordinate
 * @constant
 * @type {number}
 */
export const subordinate: HOBRole = HOBRole_subordinate; /* SHORT_NAMED_INTEGER_VALUE */


export const _decode_HOBRole = $._decodeInteger;


export const _encode_HOBRole = $._encodeInteger;


/* eslint-enable */
