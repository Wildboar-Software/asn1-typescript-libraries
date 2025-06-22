/* eslint-disable */
import {
    BIT_STRING,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    ASN1Construction as _Construction,
    ASN1UniversalType as _UniversalType,
    ObjectIdentifier as _OID,
    External as _External,
    EmbeddedPDV as _PDV,
    ASN1ConstructionError as _ConstructionError,
} from 'asn1-ts';
import * as $ from '@wildboar/asn1/functional';


/**
 * @summary ObjectOperations
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ObjectOperations  ::=  BIT STRING {
 *   read            (0),
 *   add             (1),
 *   modify          (2),
 *   delete          (3),
 *   rename          (4),
 *   discloseOnError (5) }
 * ```
 */
export type ObjectOperations = BIT_STRING;


/**
 * @summary ObjectOperations_read
 * @constant
 */
export const ObjectOperations_read: number = 0; /* LONG_NAMED_BIT */


/**
 * @summary read
 * @constant
 */
export const read: number = ObjectOperations_read; /* SHORT_NAMED_BIT */


/**
 * @summary ObjectOperations_add
 * @constant
 */
export const ObjectOperations_add: number = 1; /* LONG_NAMED_BIT */


/**
 * @summary add
 * @constant
 */
export const add: number = ObjectOperations_add; /* SHORT_NAMED_BIT */


/**
 * @summary ObjectOperations_modify
 * @constant
 */
export const ObjectOperations_modify: number = 2; /* LONG_NAMED_BIT */


/**
 * @summary modify
 * @constant
 */
export const modify: number = ObjectOperations_modify; /* SHORT_NAMED_BIT */


/**
 * @summary ObjectOperations_delete_
 * @constant
 */
export const ObjectOperations_delete_: number = 3; /* LONG_NAMED_BIT */


/**
 * @summary delete_
 * @constant
 */
export const delete_: number = ObjectOperations_delete_; /* SHORT_NAMED_BIT */


/**
 * @summary ObjectOperations_rename
 * @constant
 */
export const ObjectOperations_rename: number = 4; /* LONG_NAMED_BIT */


/**
 * @summary rename
 * @constant
 */
export const rename: number = ObjectOperations_rename; /* SHORT_NAMED_BIT */


/**
 * @summary ObjectOperations_discloseOnError
 * @constant
 */
export const ObjectOperations_discloseOnError: number = 5; /* LONG_NAMED_BIT */


/**
 * @summary discloseOnError
 * @constant
 */
export const discloseOnError: number = ObjectOperations_discloseOnError; /* SHORT_NAMED_BIT */




export const _decode_ObjectOperations = $._decodeBitString;




export const _encode_ObjectOperations = $._encodeBitString;


/* eslint-enable */
