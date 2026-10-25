/* eslint-disable */
import {
    type INTEGER,
    type ASN1Element as _Element,
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
 * @summary DeleteProblem
 * @description
 *
 * Defined in ITU-T X.413 (1999) (§6).
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * DeleteProblem  ::=  INTEGER {
 *   child-entry-specified(0),
 *   delete-restriction-problem(1),
 *   -- 1994 extensions
 *   new-entry-specified(2), entry-class-restriction(3), stored-message-exists(4)
 * }(0..ub-error-reasons)
 * ```
 */
export type DeleteProblem = INTEGER;

/**
 * @summary DeleteProblem_child_entry_specified
 * @constant
 * @type {number}
 */
export const DeleteProblem_child_entry_specified = 0 satisfies DeleteProblem; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary DeleteProblem_child_entry_specified
 * @constant
 * @type {number}
 */
export const child_entry_specified = DeleteProblem_child_entry_specified satisfies DeleteProblem; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary DeleteProblem_delete_restriction_problem
 * @constant
 * @type {number}
 */
export const DeleteProblem_delete_restriction_problem = 1 satisfies DeleteProblem; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary DeleteProblem_delete_restriction_problem
 * @constant
 * @type {number}
 */
export const delete_restriction_problem = DeleteProblem_delete_restriction_problem satisfies DeleteProblem; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary DeleteProblem_new_entry_specified
 * @constant
 * @type {number}
 */
export const DeleteProblem_new_entry_specified = 2 satisfies DeleteProblem; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary DeleteProblem_new_entry_specified
 * @constant
 * @type {number}
 */
export const new_entry_specified = DeleteProblem_new_entry_specified satisfies DeleteProblem; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary DeleteProblem_entry_class_restriction
 * @constant
 * @type {number}
 */
export const DeleteProblem_entry_class_restriction = 3 satisfies DeleteProblem; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary DeleteProblem_entry_class_restriction
 * @constant
 * @type {number}
 */
export const entry_class_restriction = DeleteProblem_entry_class_restriction satisfies DeleteProblem; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary DeleteProblem_stored_message_exists
 * @constant
 * @type {number}
 */
export const DeleteProblem_stored_message_exists = 4 satisfies DeleteProblem; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary DeleteProblem_stored_message_exists
 * @constant
 * @type {number}
 */
export const stored_message_exists = DeleteProblem_stored_message_exists satisfies DeleteProblem; /* SHORT_NAMED_INTEGER_VALUE */


export const _decode_DeleteProblem = $._decodeInteger;


export const _encode_DeleteProblem = $._encodeInteger;


/* eslint-enable */
