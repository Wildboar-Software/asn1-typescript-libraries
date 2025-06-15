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

/**
 * @summary OperationType
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * OperationType  ::=  INTEGER {
 *   action(0), create(1), delete(2), get(3), replace(4), addMember(5),
 *   removeMember(6), replaceWithDefault(7), multipleObjectSelection(8),
 *   filter(9)}
 * ```
 */
export type OperationType = INTEGER;

/**
 * @summary OperationType_action
 * @constant
 * @type {number}
 */
export const OperationType_action: OperationType = 0; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary OperationType_action
 * @constant
 * @type {number}
 */
export const action: OperationType = OperationType_action; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary OperationType_create
 * @constant
 * @type {number}
 */
export const OperationType_create: OperationType = 1; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary OperationType_create
 * @constant
 * @type {number}
 */
export const create: OperationType = OperationType_create; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary OperationType_delete_
 * @constant
 * @type {number}
 */
export const OperationType_delete_: OperationType = 2; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary OperationType_delete_
 * @constant
 * @type {number}
 */
export const delete_: OperationType = OperationType_delete_; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary OperationType_get_
 * @constant
 * @type {number}
 */
export const OperationType_get_: OperationType = 3; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary OperationType_get_
 * @constant
 * @type {number}
 */
export const get_: OperationType = OperationType_get_; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary OperationType_replace
 * @constant
 * @type {number}
 */
export const OperationType_replace: OperationType = 4; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary OperationType_replace
 * @constant
 * @type {number}
 */
export const replace: OperationType = OperationType_replace; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary OperationType_addMember
 * @constant
 * @type {number}
 */
export const OperationType_addMember: OperationType = 5; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary OperationType_addMember
 * @constant
 * @type {number}
 */
export const addMember: OperationType = OperationType_addMember; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary OperationType_removeMember
 * @constant
 * @type {number}
 */
export const OperationType_removeMember: OperationType = 6; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary OperationType_removeMember
 * @constant
 * @type {number}
 */
export const removeMember: OperationType = OperationType_removeMember; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary OperationType_replaceWithDefault
 * @constant
 * @type {number}
 */
export const OperationType_replaceWithDefault: OperationType = 7; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary OperationType_replaceWithDefault
 * @constant
 * @type {number}
 */
export const replaceWithDefault: OperationType = OperationType_replaceWithDefault; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary OperationType_multipleObjectSelection
 * @constant
 * @type {number}
 */
export const OperationType_multipleObjectSelection: OperationType = 8; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary OperationType_multipleObjectSelection
 * @constant
 * @type {number}
 */
export const multipleObjectSelection: OperationType = OperationType_multipleObjectSelection; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary OperationType_filter
 * @constant
 * @type {number}
 */
export const OperationType_filter: OperationType = 9; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary OperationType_filter
 * @constant
 * @type {number}
 */
export const filter: OperationType = OperationType_filter; /* SHORT_NAMED_INTEGER_VALUE */


export const _decode_OperationType = $._decodeInteger;


export const _encode_OperationType = $._encodeInteger;


/* eslint-enable */
