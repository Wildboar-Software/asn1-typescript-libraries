/* eslint-disable */
import { ASN1Element as _Element, INTEGER } from "asn1-ts";
import * as $ from "asn1-ts/dist/functional.mjs";

/* START_OF_SYMBOL_DEFINITION NameProblem */
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
/* END_OF_SYMBOL_DEFINITION NameProblem */

/* START_OF_SYMBOL_DEFINITION NameProblem_noSuchObject */
/**
 * @summary NameProblem_noSuchObject
 * @constant
 * @type {number}
 */
export const NameProblem_noSuchObject: NameProblem = 1; /* LONG_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION NameProblem_noSuchObject */

/* START_OF_SYMBOL_DEFINITION noSuchObject */
/**
 * @summary NameProblem_noSuchObject
 * @constant
 * @type {number}
 */
export const noSuchObject: NameProblem = NameProblem_noSuchObject; /* SHORT_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION noSuchObject */

/* START_OF_SYMBOL_DEFINITION NameProblem_aliasProblem */
/**
 * @summary NameProblem_aliasProblem
 * @constant
 * @type {number}
 */
export const NameProblem_aliasProblem: NameProblem = 2; /* LONG_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION NameProblem_aliasProblem */

/* START_OF_SYMBOL_DEFINITION aliasProblem */
/**
 * @summary NameProblem_aliasProblem
 * @constant
 * @type {number}
 */
export const aliasProblem: NameProblem = NameProblem_aliasProblem; /* SHORT_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION aliasProblem */

/* START_OF_SYMBOL_DEFINITION NameProblem_invalidAttributeSyntax */
/**
 * @summary NameProblem_invalidAttributeSyntax
 * @constant
 * @type {number}
 */
export const NameProblem_invalidAttributeSyntax: NameProblem = 3; /* LONG_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION NameProblem_invalidAttributeSyntax */

/* START_OF_SYMBOL_DEFINITION invalidAttributeSyntax */
/**
 * @summary NameProblem_invalidAttributeSyntax
 * @constant
 * @type {number}
 */
export const invalidAttributeSyntax: NameProblem = NameProblem_invalidAttributeSyntax; /* SHORT_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION invalidAttributeSyntax */

/* START_OF_SYMBOL_DEFINITION NameProblem_aliasDereferencingProblem */
/**
 * @summary NameProblem_aliasDereferencingProblem
 * @constant
 * @type {number}
 */
export const NameProblem_aliasDereferencingProblem: NameProblem = 4; /* LONG_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION NameProblem_aliasDereferencingProblem */

/* START_OF_SYMBOL_DEFINITION aliasDereferencingProblem */
/**
 * @summary NameProblem_aliasDereferencingProblem
 * @constant
 * @type {number}
 */
export const aliasDereferencingProblem: NameProblem = NameProblem_aliasDereferencingProblem; /* SHORT_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION aliasDereferencingProblem */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_NameProblem */
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_NameProblem */

/* START_OF_SYMBOL_DEFINITION _decode_NameProblem */
export const _decode_NameProblem = $._decodeInteger;
/* END_OF_SYMBOL_DEFINITION _decode_NameProblem */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_NameProblem */
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_NameProblem */

/* START_OF_SYMBOL_DEFINITION _encode_NameProblem */
export const _encode_NameProblem = $._encodeInteger;

/* END_OF_SYMBOL_DEFINITION _encode_NameProblem */

/* eslint-enable */
