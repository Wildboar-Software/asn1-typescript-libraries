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
 * @summary ModifyProblem
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ModifyProblem  ::=  INTEGER {
 *   attribute-not-present(0), value-not-present(1),
 *   attribute-or-value-already-exists(2), invalid-position(3),
 *   modify-restriction-problem(4)}(0..ub-error-reasons)
 * ```
 */
export type ModifyProblem = INTEGER;

/**
 * @summary ModifyProblem_attribute_not_present
 * @constant
 * @type {number}
 */
export const ModifyProblem_attribute_not_present: ModifyProblem = 0; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ModifyProblem_attribute_not_present
 * @constant
 * @type {number}
 */
export const attribute_not_present: ModifyProblem = ModifyProblem_attribute_not_present; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary ModifyProblem_value_not_present
 * @constant
 * @type {number}
 */
export const ModifyProblem_value_not_present: ModifyProblem = 1; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ModifyProblem_value_not_present
 * @constant
 * @type {number}
 */
export const value_not_present: ModifyProblem = ModifyProblem_value_not_present; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary ModifyProblem_attribute_or_value_already_exists
 * @constant
 * @type {number}
 */
export const ModifyProblem_attribute_or_value_already_exists: ModifyProblem = 2; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ModifyProblem_attribute_or_value_already_exists
 * @constant
 * @type {number}
 */
export const attribute_or_value_already_exists: ModifyProblem = ModifyProblem_attribute_or_value_already_exists; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary ModifyProblem_invalid_position
 * @constant
 * @type {number}
 */
export const ModifyProblem_invalid_position: ModifyProblem = 3; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ModifyProblem_invalid_position
 * @constant
 * @type {number}
 */
export const invalid_position: ModifyProblem = ModifyProblem_invalid_position; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary ModifyProblem_modify_restriction_problem
 * @constant
 * @type {number}
 */
export const ModifyProblem_modify_restriction_problem: ModifyProblem = 4; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ModifyProblem_modify_restriction_problem
 * @constant
 * @type {number}
 */
export const modify_restriction_problem: ModifyProblem = ModifyProblem_modify_restriction_problem; /* SHORT_NAMED_INTEGER_VALUE */


export const _decode_ModifyProblem = $._decodeInteger;


export const _encode_ModifyProblem = $._encodeInteger;


/* eslint-enable */
