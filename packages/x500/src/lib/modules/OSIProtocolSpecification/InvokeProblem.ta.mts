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
export const InvokeProblem_duplicateInvocation: 0 = 0 satisfies InvokeProblem; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary InvokeProblem_duplicateInvocation
 * @constant
 * @type {number}
 */
export const duplicateInvocation: 0 = InvokeProblem_duplicateInvocation; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary InvokeProblem_unrecognizedOperation
 * @constant
 * @type {number}
 */
export const InvokeProblem_unrecognizedOperation: 1 = 1 satisfies InvokeProblem; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary InvokeProblem_unrecognizedOperation
 * @constant
 * @type {number}
 */
export const unrecognizedOperation: 1 = InvokeProblem_unrecognizedOperation; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary InvokeProblem_mistypedArgument
 * @constant
 * @type {number}
 */
export const InvokeProblem_mistypedArgument: 2 = 2 satisfies InvokeProblem; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary InvokeProblem_mistypedArgument
 * @constant
 * @type {number}
 */
export const mistypedArgument: 2 = InvokeProblem_mistypedArgument; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary InvokeProblem_resourceLimitation
 * @constant
 * @type {number}
 */
export const InvokeProblem_resourceLimitation: 3 = 3 satisfies InvokeProblem; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary InvokeProblem_resourceLimitation
 * @constant
 * @type {number}
 */
export const resourceLimitation: 3 = InvokeProblem_resourceLimitation; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary InvokeProblem_releaseInProgress
 * @constant
 * @type {number}
 */
export const InvokeProblem_releaseInProgress: 4 = 4 satisfies InvokeProblem; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary InvokeProblem_releaseInProgress
 * @constant
 * @type {number}
 */
export const releaseInProgress: 4 = InvokeProblem_releaseInProgress; /* SHORT_NAMED_INTEGER_VALUE */


export const _decode_InvokeProblem: $.ASN1Decoder<INTEGER> = $._decodeInteger;


export const _encode_InvokeProblem: $.ASN1Encoder<INTEGER> = $._encodeInteger;


/* eslint-enable */
