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
import * as $ from 'asn1-ts/dist/functional.mjs';


/**
 * @summary AttributeOperations
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * AttributeOperations  ::=  BIT STRING {
 *   read             (0),
 *   compare          (1),
 *   add              (2),
 *   modify           (3),
 *   delete           (4),
 *   deleteValue      (5),
 *   replaceAttribute (6),
 *   discloseOnError  (7) }
 * ```
 */
export type AttributeOperations = BIT_STRING;


/**
 * @summary AttributeOperations_read
 * @constant
 */
export const AttributeOperations_read: number = 0; /* LONG_NAMED_BIT */


/**
 * @summary read
 * @constant
 */
export const read: number = AttributeOperations_read; /* SHORT_NAMED_BIT */


/**
 * @summary AttributeOperations_compare
 * @constant
 */
export const AttributeOperations_compare: number = 1; /* LONG_NAMED_BIT */


/**
 * @summary compare
 * @constant
 */
export const compare: number = AttributeOperations_compare; /* SHORT_NAMED_BIT */


/**
 * @summary AttributeOperations_add
 * @constant
 */
export const AttributeOperations_add: number = 2; /* LONG_NAMED_BIT */


/**
 * @summary add
 * @constant
 */
export const add: number = AttributeOperations_add; /* SHORT_NAMED_BIT */


/**
 * @summary AttributeOperations_modify
 * @constant
 */
export const AttributeOperations_modify: number = 3; /* LONG_NAMED_BIT */


/**
 * @summary modify
 * @constant
 */
export const modify: number = AttributeOperations_modify; /* SHORT_NAMED_BIT */


/**
 * @summary AttributeOperations_delete_
 * @constant
 */
export const AttributeOperations_delete_: number = 4; /* LONG_NAMED_BIT */


/**
 * @summary delete_
 * @constant
 */
export const delete_: number = AttributeOperations_delete_; /* SHORT_NAMED_BIT */


/**
 * @summary AttributeOperations_deleteValue
 * @constant
 */
export const AttributeOperations_deleteValue: number = 5; /* LONG_NAMED_BIT */


/**
 * @summary deleteValue
 * @constant
 */
export const deleteValue: number = AttributeOperations_deleteValue; /* SHORT_NAMED_BIT */


/**
 * @summary AttributeOperations_replaceAttribute
 * @constant
 */
export const AttributeOperations_replaceAttribute: number = 6; /* LONG_NAMED_BIT */


/**
 * @summary replaceAttribute
 * @constant
 */
export const replaceAttribute: number = AttributeOperations_replaceAttribute; /* SHORT_NAMED_BIT */


/**
 * @summary AttributeOperations_discloseOnError
 * @constant
 */
export const AttributeOperations_discloseOnError: number = 7; /* LONG_NAMED_BIT */


/**
 * @summary discloseOnError
 * @constant
 */
export const discloseOnError: number = AttributeOperations_discloseOnError; /* SHORT_NAMED_BIT */




export const _decode_AttributeOperations = $._decodeBitString;




export const _encode_AttributeOperations = $._encodeBitString;


/* eslint-enable */
