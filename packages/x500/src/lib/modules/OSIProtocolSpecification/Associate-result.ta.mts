/* eslint-disable */
import { ASN1Element as _Element, INTEGER } from "asn1-ts";
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
export const Associate_result_accepted: Associate_result = 0; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary Associate_result_accepted
 * @constant
 * @type {number}
 */
export const accepted: Associate_result = Associate_result_accepted; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary Associate_result_rejected_permanent
 * @constant
 * @type {number}
 */
export const Associate_result_rejected_permanent: Associate_result = 1; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary Associate_result_rejected_permanent
 * @constant
 * @type {number}
 */
export const rejected_permanent: Associate_result = Associate_result_rejected_permanent; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary Associate_result_rejected_transient
 * @constant
 * @type {number}
 */
export const Associate_result_rejected_transient: Associate_result = 2; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary Associate_result_rejected_transient
 * @constant
 * @type {number}
 */
export const rejected_transient: Associate_result = Associate_result_rejected_transient; /* SHORT_NAMED_INTEGER_VALUE */


export const _decode_Associate_result = $._decodeInteger;


export const _encode_Associate_result = $._encodeInteger;


/* eslint-enable */
