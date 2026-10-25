/* eslint-disable */
import { ASN1Element as _Element, type INTEGER } from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";

/**
 * @summary AttributeProblem
 * @description
 *
 * INTEGER, not ENUMERATED (unknown values possible). No 0.
 * `noSuchAttributeOrValue` (1) = named entry lacks a listed attr/value.
 * `invalidAttributeSyntax` (2) = value vs syntax.
 * `undefinedAttributeType` (3) = only addEntry/modifyEntry.
 * `inappropriateMatching` (4) = MR not defined for that type (e.g. in a
 * filter). `constraintViolation` (5) = X.501 or attribute definition
 * (e.g. size). `attributeOrValueAlreadyExists` (6).
 * `contextViolation` (7) = context list vs X.501 / context definition /
 * DIT Context Use.
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
 * @description
 *
 * Named entry lacks a listed attr/value.
 *
 * @constant
 * @type {number}
 */
export const AttributeProblem_noSuchAttributeOrValue: 1 = 1 satisfies AttributeProblem; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary AttributeProblem_noSuchAttributeOrValue
 * @description
 *
 * Named entry lacks a listed attr/value.
 *
 * @constant
 * @type {number}
 */
export const noSuchAttributeOrValue: 1 = AttributeProblem_noSuchAttributeOrValue; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary AttributeProblem_invalidAttributeSyntax
 * @description
 *
 * Value vs syntax.
 *
 * @constant
 * @type {number}
 */
export const AttributeProblem_invalidAttributeSyntax: 2 = 2 satisfies AttributeProblem; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary AttributeProblem_invalidAttributeSyntax
 * @description
 *
 * Value vs syntax.
 *
 * @constant
 * @type {number}
 */
export const invalidAttributeSyntax: 2 = AttributeProblem_invalidAttributeSyntax; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary AttributeProblem_undefinedAttributeType
 * @description
 *
 * Only addEntry/modifyEntry.
 *
 * @constant
 * @type {number}
 */
export const AttributeProblem_undefinedAttributeType: 3 = 3 satisfies AttributeProblem; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary AttributeProblem_undefinedAttributeType
 * @description
 *
 * Only addEntry/modifyEntry.
 *
 * @constant
 * @type {number}
 */
export const undefinedAttributeType: 3 = AttributeProblem_undefinedAttributeType; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary AttributeProblem_inappropriateMatching
 * @description
 *
 * Matching rule not defined for that type (e.g. in a filter).
 *
 * @constant
 * @type {number}
 */
export const AttributeProblem_inappropriateMatching: 4 = 4 satisfies AttributeProblem; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary AttributeProblem_inappropriateMatching
 * @description
 *
 * Matching rule not defined for that type (e.g. in a filter).
 *
 * @constant
 * @type {number}
 */
export const inappropriateMatching: 4 = AttributeProblem_inappropriateMatching; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary AttributeProblem_constraintViolation
 * @description
 *
 * X.501 or attribute definition (e.g. size).
 *
 * @constant
 * @type {number}
 */
export const AttributeProblem_constraintViolation: 5 = 5 satisfies AttributeProblem; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary AttributeProblem_constraintViolation
 * @description
 *
 * X.501 or attribute definition (e.g. size).
 *
 * @constant
 * @type {number}
 */
export const constraintViolation: 5 = AttributeProblem_constraintViolation; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary AttributeProblem_attributeOrValueAlreadyExists
 * @description
 *
 * Type or value already present.
 *
 * @constant
 * @type {number}
 */
export const AttributeProblem_attributeOrValueAlreadyExists: 6 = 6 satisfies AttributeProblem; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary AttributeProblem_attributeOrValueAlreadyExists
 * @description
 *
 * Type or value already present.
 *
 * @constant
 * @type {number}
 */
export const attributeOrValueAlreadyExists: 6 = AttributeProblem_attributeOrValueAlreadyExists; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary AttributeProblem_contextViolation
 * @description
 *
 * Context list vs X.501 / context definition / DIT Context Use.
 *
 * @constant
 * @type {number}
 */
export const AttributeProblem_contextViolation: 7 = 7 satisfies AttributeProblem; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary AttributeProblem_contextViolation
 * @description
 *
 * Context list vs X.501 / context definition / DIT Context Use.
 *
 * @constant
 * @type {number}
 */
export const contextViolation: 7 = AttributeProblem_contextViolation; /* SHORT_NAMED_INTEGER_VALUE */


export const _decode_AttributeProblem: $.ASN1Decoder<INTEGER> = $._decodeInteger;


export const _encode_AttributeProblem: $.ASN1Encoder<INTEGER> = $._encodeInteger;


/* eslint-enable */
