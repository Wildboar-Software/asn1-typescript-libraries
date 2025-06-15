/* eslint-disable */
import {
    INTEGER,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    ASN1Construction as _Construction,
    ASN1UniversalType as _UniversalType,
    ObjectIdentifier as _OID,
    External as _External,
    EmbeddedPDV as _PDV,
    ASN1ConstructionError as _ConstructionError,
} from 'asn1-ts';
import * as $ from 'asn1-ts/dist/functional.mjs';

/* START_OF_SYMBOL_DEFINITION FetchRestrictionProblem */
/**
 * @summary FetchRestrictionProblem
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * FetchRestrictionProblem  ::=  INTEGER {
 *   content-type-problem(1), eit-problem(2), maximum-length-problem(3)
 * }(0..ub-error-reasons)
 * ```
 */
export type FetchRestrictionProblem = INTEGER;
/* END_OF_SYMBOL_DEFINITION FetchRestrictionProblem */

/* START_OF_SYMBOL_DEFINITION FetchRestrictionProblem_content_type_problem */
/**
 * @summary FetchRestrictionProblem_content_type_problem
 * @constant
 * @type {number}
 */
export const FetchRestrictionProblem_content_type_problem: FetchRestrictionProblem = 1; /* LONG_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION FetchRestrictionProblem_content_type_problem */

/* START_OF_SYMBOL_DEFINITION content_type_problem */
/**
 * @summary FetchRestrictionProblem_content_type_problem
 * @constant
 * @type {number}
 */
export const content_type_problem: FetchRestrictionProblem = FetchRestrictionProblem_content_type_problem; /* SHORT_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION content_type_problem */

/* START_OF_SYMBOL_DEFINITION FetchRestrictionProblem_eit_problem */
/**
 * @summary FetchRestrictionProblem_eit_problem
 * @constant
 * @type {number}
 */
export const FetchRestrictionProblem_eit_problem: FetchRestrictionProblem = 2; /* LONG_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION FetchRestrictionProblem_eit_problem */

/* START_OF_SYMBOL_DEFINITION eit_problem */
/**
 * @summary FetchRestrictionProblem_eit_problem
 * @constant
 * @type {number}
 */
export const eit_problem: FetchRestrictionProblem = FetchRestrictionProblem_eit_problem; /* SHORT_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION eit_problem */

/* START_OF_SYMBOL_DEFINITION FetchRestrictionProblem_maximum_length_problem */
/**
 * @summary FetchRestrictionProblem_maximum_length_problem
 * @constant
 * @type {number}
 */
export const FetchRestrictionProblem_maximum_length_problem: FetchRestrictionProblem = 3; /* LONG_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION FetchRestrictionProblem_maximum_length_problem */

/* START_OF_SYMBOL_DEFINITION maximum_length_problem */
/**
 * @summary FetchRestrictionProblem_maximum_length_problem
 * @constant
 * @type {number}
 */
export const maximum_length_problem: FetchRestrictionProblem = FetchRestrictionProblem_maximum_length_problem; /* SHORT_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION maximum_length_problem */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_FetchRestrictionProblem */
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_FetchRestrictionProblem */

/* START_OF_SYMBOL_DEFINITION _decode_FetchRestrictionProblem */
export const _decode_FetchRestrictionProblem = $._decodeInteger;
/* END_OF_SYMBOL_DEFINITION _decode_FetchRestrictionProblem */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_FetchRestrictionProblem */
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_FetchRestrictionProblem */

/* START_OF_SYMBOL_DEFINITION _encode_FetchRestrictionProblem */
export const _encode_FetchRestrictionProblem = $._encodeInteger;

/* END_OF_SYMBOL_DEFINITION _encode_FetchRestrictionProblem */

/* eslint-enable */
