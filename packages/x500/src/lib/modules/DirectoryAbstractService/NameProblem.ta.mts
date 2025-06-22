/* eslint-disable */
import { ASN1Element as _Element, INTEGER } from "asn1-ts";
import * as $ from "@wildboar/asn1/functional";

/**
 * @summary NameProblem
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * NameProblem  ::=  INTEGER {
 *   noSuchObject              (1),
 *   aliasProblem              (2),
 *   invalidAttributeSyntax    (3),
 *   aliasDereferencingProblem (4)
 *   -- not to be used         (5)-- }
 * ```
 */
export type NameProblem = INTEGER;

/**
 * @summary NameProblem_noSuchObject
 * @constant
 * @type {number}
 */
export const NameProblem_noSuchObject: NameProblem = 1; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary NameProblem_noSuchObject
 * @constant
 * @type {number}
 */
export const noSuchObject: NameProblem = NameProblem_noSuchObject; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary NameProblem_aliasProblem
 * @constant
 * @type {number}
 */
export const NameProblem_aliasProblem: NameProblem = 2; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary NameProblem_aliasProblem
 * @constant
 * @type {number}
 */
export const aliasProblem: NameProblem = NameProblem_aliasProblem; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary NameProblem_invalidAttributeSyntax
 * @constant
 * @type {number}
 */
export const NameProblem_invalidAttributeSyntax: NameProblem = 3; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary NameProblem_invalidAttributeSyntax
 * @constant
 * @type {number}
 */
export const invalidAttributeSyntax: NameProblem = NameProblem_invalidAttributeSyntax; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary NameProblem_aliasDereferencingProblem
 * @constant
 * @type {number}
 */
export const NameProblem_aliasDereferencingProblem: NameProblem = 4; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary NameProblem_aliasDereferencingProblem
 * @constant
 * @type {number}
 */
export const aliasDereferencingProblem: NameProblem = NameProblem_aliasDereferencingProblem; /* SHORT_NAMED_INTEGER_VALUE */


export const _decode_NameProblem = $._decodeInteger;


export const _encode_NameProblem = $._encodeInteger;


/* eslint-enable */
