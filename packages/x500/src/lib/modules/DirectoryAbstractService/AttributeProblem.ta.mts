/* eslint-disable */
import { ASN1Element as _Element, INTEGER } from "asn1-ts";
import * as $ from "asn1-ts/dist/functional.mjs";

/**
 * @summary AttributeProblem
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * AttributeProblem  ::=  INTEGER {
 *   noSuchAttributeOrValue        (1),
 *   invalidAttributeSyntax        (2),
 *   undefinedAttributeType        (3),
 *   inappropriateMatching         (4),
 *   constraintViolation           (5),
 *   attributeOrValueAlreadyExists (6),
 *   contextViolation              (7) }
 * ```
 */
export type AttributeProblem = INTEGER;

/**
 * @summary AttributeProblem_noSuchAttributeOrValue
 * @constant
 * @type {number}
 */
export const AttributeProblem_noSuchAttributeOrValue: AttributeProblem = 1; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary AttributeProblem_noSuchAttributeOrValue
 * @constant
 * @type {number}
 */
export const noSuchAttributeOrValue: AttributeProblem = AttributeProblem_noSuchAttributeOrValue; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary AttributeProblem_invalidAttributeSyntax
 * @constant
 * @type {number}
 */
export const AttributeProblem_invalidAttributeSyntax: AttributeProblem = 2; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary AttributeProblem_invalidAttributeSyntax
 * @constant
 * @type {number}
 */
export const invalidAttributeSyntax: AttributeProblem = AttributeProblem_invalidAttributeSyntax; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary AttributeProblem_undefinedAttributeType
 * @constant
 * @type {number}
 */
export const AttributeProblem_undefinedAttributeType: AttributeProblem = 3; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary AttributeProblem_undefinedAttributeType
 * @constant
 * @type {number}
 */
export const undefinedAttributeType: AttributeProblem = AttributeProblem_undefinedAttributeType; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary AttributeProblem_inappropriateMatching
 * @constant
 * @type {number}
 */
export const AttributeProblem_inappropriateMatching: AttributeProblem = 4; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary AttributeProblem_inappropriateMatching
 * @constant
 * @type {number}
 */
export const inappropriateMatching: AttributeProblem = AttributeProblem_inappropriateMatching; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary AttributeProblem_constraintViolation
 * @constant
 * @type {number}
 */
export const AttributeProblem_constraintViolation: AttributeProblem = 5; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary AttributeProblem_constraintViolation
 * @constant
 * @type {number}
 */
export const constraintViolation: AttributeProblem = AttributeProblem_constraintViolation; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary AttributeProblem_attributeOrValueAlreadyExists
 * @constant
 * @type {number}
 */
export const AttributeProblem_attributeOrValueAlreadyExists: AttributeProblem = 6; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary AttributeProblem_attributeOrValueAlreadyExists
 * @constant
 * @type {number}
 */
export const attributeOrValueAlreadyExists: AttributeProblem = AttributeProblem_attributeOrValueAlreadyExists; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary AttributeProblem_contextViolation
 * @constant
 * @type {number}
 */
export const AttributeProblem_contextViolation: AttributeProblem = 7; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary AttributeProblem_contextViolation
 * @constant
 * @type {number}
 */
export const contextViolation: AttributeProblem = AttributeProblem_contextViolation; /* SHORT_NAMED_INTEGER_VALUE */


export const _decode_AttributeProblem = $._decodeInteger;


export const _encode_AttributeProblem = $._encodeInteger;


/* eslint-enable */
