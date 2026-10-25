/* eslint-disable */
import { ASN1Element as _Element, type INTEGER } from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";

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
export const GeneralProblem_unrecognizedPDU: 0 = 0 satisfies GeneralProblem; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary GeneralProblem_unrecognizedPDU
 * @constant
 * @type {number}
 */
export const unrecognizedPDU: 0 = GeneralProblem_unrecognizedPDU; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary GeneralProblem_mistypedPDU
 * @constant
 * @type {number}
 */
export const GeneralProblem_mistypedPDU: 1 = 1 satisfies GeneralProblem; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary GeneralProblem_mistypedPDU
 * @constant
 * @type {number}
 */
export const mistypedPDU: 1 = GeneralProblem_mistypedPDU; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary GeneralProblem_badlyStructuredPDU
 * @constant
 * @type {number}
 */
export const GeneralProblem_badlyStructuredPDU: 2 = 2 satisfies GeneralProblem; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary GeneralProblem_badlyStructuredPDU
 * @constant
 * @type {number}
 */
export const badlyStructuredPDU: 2 = GeneralProblem_badlyStructuredPDU; /* SHORT_NAMED_INTEGER_VALUE */


export const _decode_GeneralProblem: $.ASN1Decoder<INTEGER> = $._decodeInteger;


export const _encode_GeneralProblem: $.ASN1Encoder<INTEGER> = $._encodeInteger;


/* eslint-enable */
