/* eslint-disable */
import { ASN1Element as _Element, type INTEGER } from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";

/**
 * @summary InvokeProblem
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * InvokeProblem  ::=  INTEGER {
 *   duplicateInvocation      (0),
 *   unrecognizedOperation    (1),
 *   mistypedArgument         (2),
 *   resourceLimitation       (3),
 *   releaseInProgress        (4)}
 * ```
 */
export type InvokeProblem = INTEGER;

/**
 * @summary InvokeProblem_duplicateInvocation
 * @constant
 * @type {number}
 */
export const InvokeProblem_duplicateInvocation = 0 satisfies InvokeProblem; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary InvokeProblem_duplicateInvocation
 * @constant
 * @type {number}
 */
export const duplicateInvocation = InvokeProblem_duplicateInvocation satisfies InvokeProblem; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary InvokeProblem_unrecognizedOperation
 * @constant
 * @type {number}
 */
export const InvokeProblem_unrecognizedOperation = 1 satisfies InvokeProblem; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary InvokeProblem_unrecognizedOperation
 * @constant
 * @type {number}
 */
export const unrecognizedOperation = InvokeProblem_unrecognizedOperation satisfies InvokeProblem; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary InvokeProblem_mistypedArgument
 * @constant
 * @type {number}
 */
export const InvokeProblem_mistypedArgument = 2 satisfies InvokeProblem; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary InvokeProblem_mistypedArgument
 * @constant
 * @type {number}
 */
export const mistypedArgument = InvokeProblem_mistypedArgument satisfies InvokeProblem; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary InvokeProblem_resourceLimitation
 * @constant
 * @type {number}
 */
export const InvokeProblem_resourceLimitation = 3 satisfies InvokeProblem; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary InvokeProblem_resourceLimitation
 * @constant
 * @type {number}
 */
export const resourceLimitation = InvokeProblem_resourceLimitation satisfies InvokeProblem; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary InvokeProblem_releaseInProgress
 * @constant
 * @type {number}
 */
export const InvokeProblem_releaseInProgress = 4 satisfies InvokeProblem; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary InvokeProblem_releaseInProgress
 * @constant
 * @type {number}
 */
export const releaseInProgress = InvokeProblem_releaseInProgress satisfies InvokeProblem; /* SHORT_NAMED_INTEGER_VALUE */


export const _decode_InvokeProblem = $._decodeInteger;


export const _encode_InvokeProblem = $._encodeInteger;


/* eslint-enable */
