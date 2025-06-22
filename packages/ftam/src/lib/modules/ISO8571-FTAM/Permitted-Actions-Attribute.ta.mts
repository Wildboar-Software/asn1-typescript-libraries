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
 * @summary Permitted_Actions_Attribute
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * Permitted-Actions-Attribute  ::=  BIT STRING -- Actions available
 *                                 {
 *   read(0), insert(1), replace(2), extend(3), erase(4), read-attribute(5),
 *   change-attribute(6), delete-Object(7), pass(11),
 *   link(12),
 *   -- FADU-Identity groups available
 *   traversal(8), reverse-traversal(9), random-Order(10)}
 * ```
 */
export type Permitted_Actions_Attribute = BIT_STRING;


/**
 * @summary Permitted_Actions_Attribute_read
 * @constant
 */
export const Permitted_Actions_Attribute_read: number = 0; /* LONG_NAMED_BIT */


/**
 * @summary read
 * @constant
 */
export const read: number = Permitted_Actions_Attribute_read; /* SHORT_NAMED_BIT */


/**
 * @summary Permitted_Actions_Attribute_insert
 * @constant
 */
export const Permitted_Actions_Attribute_insert: number = 1; /* LONG_NAMED_BIT */


/**
 * @summary insert
 * @constant
 */
export const insert: number = Permitted_Actions_Attribute_insert; /* SHORT_NAMED_BIT */


/**
 * @summary Permitted_Actions_Attribute_replace
 * @constant
 */
export const Permitted_Actions_Attribute_replace: number = 2; /* LONG_NAMED_BIT */


/**
 * @summary replace
 * @constant
 */
export const replace: number = Permitted_Actions_Attribute_replace; /* SHORT_NAMED_BIT */


/**
 * @summary Permitted_Actions_Attribute_extend
 * @constant
 */
export const Permitted_Actions_Attribute_extend: number = 3; /* LONG_NAMED_BIT */


/**
 * @summary extend
 * @constant
 */
export const extend: number = Permitted_Actions_Attribute_extend; /* SHORT_NAMED_BIT */


/**
 * @summary Permitted_Actions_Attribute_erase
 * @constant
 */
export const Permitted_Actions_Attribute_erase: number = 4; /* LONG_NAMED_BIT */


/**
 * @summary erase
 * @constant
 */
export const erase: number = Permitted_Actions_Attribute_erase; /* SHORT_NAMED_BIT */


/**
 * @summary Permitted_Actions_Attribute_read_attribute
 * @constant
 */
export const Permitted_Actions_Attribute_read_attribute: number = 5; /* LONG_NAMED_BIT */


/**
 * @summary read_attribute
 * @constant
 */
export const read_attribute: number = Permitted_Actions_Attribute_read_attribute; /* SHORT_NAMED_BIT */


/**
 * @summary Permitted_Actions_Attribute_change_attribute
 * @constant
 */
export const Permitted_Actions_Attribute_change_attribute: number = 6; /* LONG_NAMED_BIT */


/**
 * @summary change_attribute
 * @constant
 */
export const change_attribute: number = Permitted_Actions_Attribute_change_attribute; /* SHORT_NAMED_BIT */


/**
 * @summary Permitted_Actions_Attribute_delete_Object
 * @constant
 */
export const Permitted_Actions_Attribute_delete_Object: number = 7; /* LONG_NAMED_BIT */


/**
 * @summary delete_Object
 * @constant
 */
export const delete_Object: number = Permitted_Actions_Attribute_delete_Object; /* SHORT_NAMED_BIT */


/**
 * @summary Permitted_Actions_Attribute_pass
 * @constant
 */
export const Permitted_Actions_Attribute_pass: number = 11; /* LONG_NAMED_BIT */


/**
 * @summary pass
 * @constant
 */
export const pass: number = Permitted_Actions_Attribute_pass; /* SHORT_NAMED_BIT */


/**
 * @summary Permitted_Actions_Attribute_link
 * @constant
 */
export const Permitted_Actions_Attribute_link: number = 12; /* LONG_NAMED_BIT */


/**
 * @summary link
 * @constant
 */
export const link: number = Permitted_Actions_Attribute_link; /* SHORT_NAMED_BIT */


/**
 * @summary Permitted_Actions_Attribute_traversal
 * @constant
 */
export const Permitted_Actions_Attribute_traversal: number = 8; /* LONG_NAMED_BIT */


/**
 * @summary traversal
 * @constant
 */
export const traversal: number = Permitted_Actions_Attribute_traversal; /* SHORT_NAMED_BIT */


/**
 * @summary Permitted_Actions_Attribute_reverse_traversal
 * @constant
 */
export const Permitted_Actions_Attribute_reverse_traversal: number = 9; /* LONG_NAMED_BIT */


/**
 * @summary reverse_traversal
 * @constant
 */
export const reverse_traversal: number = Permitted_Actions_Attribute_reverse_traversal; /* SHORT_NAMED_BIT */


/**
 * @summary Permitted_Actions_Attribute_random_Order
 * @constant
 */
export const Permitted_Actions_Attribute_random_Order: number = 10; /* LONG_NAMED_BIT */


/**
 * @summary random_Order
 * @constant
 */
export const random_Order: number = Permitted_Actions_Attribute_random_Order; /* SHORT_NAMED_BIT */




export const _decode_Permitted_Actions_Attribute = $._decodeBitString;




export const _encode_Permitted_Actions_Attribute = $._encodeBitString;


/* eslint-enable */
