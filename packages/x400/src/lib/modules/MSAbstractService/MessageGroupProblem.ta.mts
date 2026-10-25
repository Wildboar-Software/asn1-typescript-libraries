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
 * @summary MessageGroupProblem
 * @description
 *
 * Defined in ITU-T X.413 (1999) (§6).
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * MessageGroupProblem  ::=  INTEGER {
 *   name-not-registered(0), name-already-registered(1), parent-not-registered(2),
 *   group-not-empty(3), name-in-use(4), child-group-registered(5),
 *   group-depth-exceeded(6)}(0..ub-error-reasons)
 * ```
 */
export type MessageGroupProblem = INTEGER;

/**
 * @summary MessageGroupProblem_name_not_registered
 * @constant
 * @type {number}
 */
export const MessageGroupProblem_name_not_registered = 0 satisfies MessageGroupProblem; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary MessageGroupProblem_name_not_registered
 * @constant
 * @type {number}
 */
export const name_not_registered = MessageGroupProblem_name_not_registered; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary MessageGroupProblem_name_already_registered
 * @constant
 * @type {number}
 */
export const MessageGroupProblem_name_already_registered = 1 satisfies MessageGroupProblem; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary MessageGroupProblem_name_already_registered
 * @constant
 * @type {number}
 */
export const name_already_registered = MessageGroupProblem_name_already_registered; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary MessageGroupProblem_parent_not_registered
 * @constant
 * @type {number}
 */
export const MessageGroupProblem_parent_not_registered = 2 satisfies MessageGroupProblem; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary MessageGroupProblem_parent_not_registered
 * @constant
 * @type {number}
 */
export const parent_not_registered = MessageGroupProblem_parent_not_registered; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary MessageGroupProblem_group_not_empty
 * @constant
 * @type {number}
 */
export const MessageGroupProblem_group_not_empty = 3 satisfies MessageGroupProblem; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary MessageGroupProblem_group_not_empty
 * @constant
 * @type {number}
 */
export const group_not_empty = MessageGroupProblem_group_not_empty; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary MessageGroupProblem_name_in_use
 * @constant
 * @type {number}
 */
export const MessageGroupProblem_name_in_use = 4 satisfies MessageGroupProblem; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary MessageGroupProblem_name_in_use
 * @constant
 * @type {number}
 */
export const name_in_use = MessageGroupProblem_name_in_use; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary MessageGroupProblem_child_group_registered
 * @constant
 * @type {number}
 */
export const MessageGroupProblem_child_group_registered = 5 satisfies MessageGroupProblem; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary MessageGroupProblem_child_group_registered
 * @constant
 * @type {number}
 */
export const child_group_registered = MessageGroupProblem_child_group_registered; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary MessageGroupProblem_group_depth_exceeded
 * @constant
 * @type {number}
 */
export const MessageGroupProblem_group_depth_exceeded = 6 satisfies MessageGroupProblem; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary MessageGroupProblem_group_depth_exceeded
 * @constant
 * @type {number}
 */
export const group_depth_exceeded = MessageGroupProblem_group_depth_exceeded; /* SHORT_NAMED_INTEGER_VALUE */


export const _decode_MessageGroupProblem = $._decodeInteger;


export const _encode_MessageGroupProblem = $._encodeInteger;


/* eslint-enable */
