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
} from '@wildboar/asn1';
import * as $ from '@wildboar/asn1/functional';


/**
 * @summary Permitted_Actions_Attribute
 * @description
 *
 * Kernel-group vector of booleans: which file actions and
 * FADU-identity groups are available (ISO 8571-2:1988 §12.2,
 * §14.1; ISO 8571-4:1988 Figure 11). Set at create; not
 * changeable. `no-value-available` is forbidden for kernel
 * attributes (ISO 8571-2:1988 §14.1).
 *
 * ISO 8571-4:1988 Figure 11 stops at `random-order`(10). This
 * encoding adds `pass`(11) and `link`(12), which are not in
 * that figure. 1988 named bit 7 `delete-file`; this encoding
 * uses `delete-Object`.
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
 * @description
 *
 * File-access action read (ISO 8571-2:1988 §12.2).
 *
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
 * @description
 *
 * File-access action insert (ISO 8571-2:1988 §12.2).
 *
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
 * @description
 *
 * File-access action replace (ISO 8571-2:1988 §12.2).
 *
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
 * @description
 *
 * File-access action extend (ISO 8571-2:1988 §12.2).
 *
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
 * @description
 *
 * File-access action erase (ISO 8571-2:1988 §12.2).
 *
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
 * @description
 *
 * File action read attribute (ISO 8571-2:1988 §12.2).
 *
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
 * @description
 *
 * File action change attribute (ISO 8571-2:1988 §12.2).
 *
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
 * @description
 *
 * File action delete file (ISO 8571-2:1988 §12.2). 1988 named
 * this bit `delete-file`(7); this encoding uses
 * `delete-Object`.
 *
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
 * @description
 *
 * Not in ISO 8571-4:1988 Figure 11 (1988 stops at
 * `random-order`(10)).
 *
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
 * @description
 *
 * Not in ISO 8571-4:1988 Figure 11 (1988 stops at
 * `random-order`(10)).
 *
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
 * @description
 *
 * FADU-identity group: begin, first, next, last, end
 * (ISO 8571-2:1988 §12.2).
 *
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
 * @description
 *
 * FADU-identity group: begin, first, previous, last, end
 * (ISO 8571-2:1988 §12.2).
 *
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
 * @description
 *
 * FADU-identity group: current, single Node-Name, sequence of
 * Node-Names, node number (ISO 8571-2:1988 §12.2). 1988 named
 * this bit `random-order`.
 *
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
