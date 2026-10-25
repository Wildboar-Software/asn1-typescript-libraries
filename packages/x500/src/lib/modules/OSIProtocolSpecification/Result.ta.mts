/* eslint-disable */
import { ASN1Element as _Element, type INTEGER } from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";

/**
 * @summary Result
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * Result  ::=  INTEGER {
 *   acceptance         (0),
 *   user-rejection     (1),
 *   provider-rejection (2)}
 * ```
 */
export type Result = INTEGER;

/**
 * @summary Result_acceptance
 * @constant
 * @type {number}
 */
export const Result_acceptance: 0 = 0 satisfies Result; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary Result_acceptance
 * @constant
 * @type {number}
 */
export const acceptance: 0 = Result_acceptance; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary Result_user_rejection
 * @constant
 * @type {number}
 */
export const Result_user_rejection: 1 = 1 satisfies Result; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary Result_user_rejection
 * @constant
 * @type {number}
 */
export const user_rejection: 1 = Result_user_rejection; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary Result_provider_rejection
 * @constant
 * @type {number}
 */
export const Result_provider_rejection: 2 = 2 satisfies Result; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary Result_provider_rejection
 * @constant
 * @type {number}
 */
export const provider_rejection: 2 = Result_provider_rejection; /* SHORT_NAMED_INTEGER_VALUE */


export const _decode_Result: $.ASN1Decoder<INTEGER> = $._decodeInteger;


export const _encode_Result: $.ASN1Encoder<INTEGER> = $._encodeInteger;


/* eslint-enable */
