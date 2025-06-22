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
} from '@wildboar/asn1';
import * as $ from '@wildboar/asn1/functional';

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

/**
 * @summary FetchRestrictionProblem_content_type_problem
 * @constant
 * @type {number}
 */
export const FetchRestrictionProblem_content_type_problem: FetchRestrictionProblem = 1; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary FetchRestrictionProblem_content_type_problem
 * @constant
 * @type {number}
 */
export const content_type_problem: FetchRestrictionProblem = FetchRestrictionProblem_content_type_problem; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary FetchRestrictionProblem_eit_problem
 * @constant
 * @type {number}
 */
export const FetchRestrictionProblem_eit_problem: FetchRestrictionProblem = 2; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary FetchRestrictionProblem_eit_problem
 * @constant
 * @type {number}
 */
export const eit_problem: FetchRestrictionProblem = FetchRestrictionProblem_eit_problem; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary FetchRestrictionProblem_maximum_length_problem
 * @constant
 * @type {number}
 */
export const FetchRestrictionProblem_maximum_length_problem: FetchRestrictionProblem = 3; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary FetchRestrictionProblem_maximum_length_problem
 * @constant
 * @type {number}
 */
export const maximum_length_problem: FetchRestrictionProblem = FetchRestrictionProblem_maximum_length_problem; /* SHORT_NAMED_INTEGER_VALUE */


export const _decode_FetchRestrictionProblem = $._decodeInteger;


export const _encode_FetchRestrictionProblem = $._encodeInteger;


/* eslint-enable */
