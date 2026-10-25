/* eslint-disable */
import { ASN1Element as _Element, type INTEGER } from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";

/**
 * @summary Associate_result
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * Associate-result  ::=  INTEGER {
 *   accepted           (0),
 *   rejected-permanent (1),
 *   rejected-transient (2)}(0..2, ...)
 * ```
 */
export type Associate_result = INTEGER;

/**
 * @summary Associate_result_accepted
 * @constant
 * @type {number}
 */
export const Associate_result_accepted = 0 satisfies Associate_result; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary Associate_result_accepted
 * @constant
 * @type {number}
 */
export const accepted = Associate_result_accepted satisfies Associate_result; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary Associate_result_rejected_permanent
 * @constant
 * @type {number}
 */
export const Associate_result_rejected_permanent = 1 satisfies Associate_result; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary Associate_result_rejected_permanent
 * @constant
 * @type {number}
 */
export const rejected_permanent = Associate_result_rejected_permanent satisfies Associate_result; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary Associate_result_rejected_transient
 * @constant
 * @type {number}
 */
export const Associate_result_rejected_transient = 2 satisfies Associate_result; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary Associate_result_rejected_transient
 * @constant
 * @type {number}
 */
export const rejected_transient = Associate_result_rejected_transient satisfies Associate_result; /* SHORT_NAMED_INTEGER_VALUE */


export const _decode_Associate_result = $._decodeInteger;


export const _encode_Associate_result = $._encodeInteger;


/* eslint-enable */
