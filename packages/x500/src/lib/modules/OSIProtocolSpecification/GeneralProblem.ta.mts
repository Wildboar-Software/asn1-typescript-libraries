/* eslint-disable */
import { ASN1Element as _Element, INTEGER } from "asn1-ts";
import * as $ from "asn1-ts/dist/functional.mjs";

/**
 * @summary GeneralProblem
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * GeneralProblem  ::=  INTEGER {
 *   unrecognizedPDU          (0),
 *   mistypedPDU              (1),
 *   badlyStructuredPDU       (2) }
 * ```
 */
export type GeneralProblem = INTEGER;

/**
 * @summary GeneralProblem_unrecognizedPDU
 * @constant
 * @type {number}
 */
export const GeneralProblem_unrecognizedPDU: GeneralProblem = 0; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary GeneralProblem_unrecognizedPDU
 * @constant
 * @type {number}
 */
export const unrecognizedPDU: GeneralProblem = GeneralProblem_unrecognizedPDU; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary GeneralProblem_mistypedPDU
 * @constant
 * @type {number}
 */
export const GeneralProblem_mistypedPDU: GeneralProblem = 1; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary GeneralProblem_mistypedPDU
 * @constant
 * @type {number}
 */
export const mistypedPDU: GeneralProblem = GeneralProblem_mistypedPDU; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary GeneralProblem_badlyStructuredPDU
 * @constant
 * @type {number}
 */
export const GeneralProblem_badlyStructuredPDU: GeneralProblem = 2; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary GeneralProblem_badlyStructuredPDU
 * @constant
 * @type {number}
 */
export const badlyStructuredPDU: GeneralProblem = GeneralProblem_badlyStructuredPDU; /* SHORT_NAMED_INTEGER_VALUE */


export const _decode_GeneralProblem = $._decodeInteger;


export const _encode_GeneralProblem = $._encodeInteger;


/* eslint-enable */
