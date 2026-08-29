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
 * @summary AttributeOperations
 * @description
 *
 * Attribute-level privileges. Also need the corresponding
 * object-level permission (read for read/compare; modify for add,
 * modify, delete, deleteValue, and replaceAttribute).
 * ITU-T Rec. X.1080.0 (2017) Cor.1
 * [§7.5](https://www.itu.int/rec/T-REC-X.1080.0-201703-I!Cor1).
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
 * @description
 *
 * Return the attribute. Also needs object-level read.
 * ITU-T Rec. X.1080.0 (2017) Cor.1
 * [§7.5](https://www.itu.int/rec/T-REC-X.1080.0-201703-I!Cor1).
 *
 * @constant
 */
export const AttributeOperations_read: number = 0; /* LONG_NAMED_BIT */


/**
 * @summary read
 * @description
 *
 * Return the attribute. Also needs object-level read.
 * ITU-T Rec. X.1080.0 (2017) Cor.1
 * [§7.5](https://www.itu.int/rec/T-REC-X.1080.0-201703-I!Cor1).
 *
 * @constant
 */
export const read: number = AttributeOperations_read; /* SHORT_NAMED_BIT */


/**
 * @summary AttributeOperations_compare
 * @description
 *
 * Compare a purported value. Also needs object-level read.
 * ITU-T Rec. X.1080.0 (2017) Cor.1
 * [§7.5](https://www.itu.int/rec/T-REC-X.1080.0-201703-I!Cor1).
 *
 * @constant
 */
export const AttributeOperations_compare: number = 1; /* LONG_NAMED_BIT */


/**
 * @summary compare
 * @description
 *
 * Compare a purported value. Also needs object-level read.
 * ITU-T Rec. X.1080.0 (2017) Cor.1
 * [§7.5](https://www.itu.int/rec/T-REC-X.1080.0-201703-I!Cor1).
 *
 * @constant
 */
export const compare: number = AttributeOperations_compare; /* SHORT_NAMED_BIT */


/**
 * @summary AttributeOperations_add
 * @description
 *
 * Add an attribute. Also needs object-level modify.
 * ITU-T Rec. X.1080.0 (2017) Cor.1
 * [§7.5](https://www.itu.int/rec/T-REC-X.1080.0-201703-I!Cor1).
 *
 * @constant
 */
export const AttributeOperations_add: number = 2; /* LONG_NAMED_BIT */


/**
 * @summary add
 * @description
 *
 * Add an attribute. Also needs object-level modify.
 * ITU-T Rec. X.1080.0 (2017) Cor.1
 * [§7.5](https://www.itu.int/rec/T-REC-X.1080.0-201703-I!Cor1).
 *
 * @constant
 */
export const add: number = AttributeOperations_add; /* SHORT_NAMED_BIT */


/**
 * @summary AttributeOperations_modify
 * @description
 *
 * Modify an attribute. Also needs object-level modify.
 * ITU-T Rec. X.1080.0 (2017) Cor.1
 * [§7.5](https://www.itu.int/rec/T-REC-X.1080.0-201703-I!Cor1).
 *
 * @constant
 */
export const AttributeOperations_modify: number = 3; /* LONG_NAMED_BIT */


/**
 * @summary modify
 * @description
 *
 * Modify an attribute. Also needs object-level modify.
 * ITU-T Rec. X.1080.0 (2017) Cor.1
 * [§7.5](https://www.itu.int/rec/T-REC-X.1080.0-201703-I!Cor1).
 *
 * @constant
 */
export const modify: number = AttributeOperations_modify; /* SHORT_NAMED_BIT */


/**
 * @summary AttributeOperations_delete_
 * @description
 *
 * Delete an attribute. Also needs object-level modify.
 * ITU-T Rec. X.1080.0 (2017) Cor.1
 * [§7.5](https://www.itu.int/rec/T-REC-X.1080.0-201703-I!Cor1).
 *
 * @constant
 */
export const AttributeOperations_delete_: number = 4; /* LONG_NAMED_BIT */


/**
 * @summary delete_
 * @description
 *
 * Delete an attribute. Also needs object-level modify.
 * ITU-T Rec. X.1080.0 (2017) Cor.1
 * [§7.5](https://www.itu.int/rec/T-REC-X.1080.0-201703-I!Cor1).
 *
 * @constant
 */
export const delete_: number = AttributeOperations_delete_; /* SHORT_NAMED_BIT */


/**
 * @summary AttributeOperations_deleteValue
 * @description
 *
 * Delete one or more values. Also needs object-level modify.
 * ITU-T Rec. X.1080.0 (2017) Cor.1
 * [§7.5](https://www.itu.int/rec/T-REC-X.1080.0-201703-I!Cor1).
 *
 * @constant
 */
export const AttributeOperations_deleteValue: number = 5; /* LONG_NAMED_BIT */


/**
 * @summary deleteValue
 * @description
 *
 * Delete one or more values. Also needs object-level modify.
 * ITU-T Rec. X.1080.0 (2017) Cor.1
 * [§7.5](https://www.itu.int/rec/T-REC-X.1080.0-201703-I!Cor1).
 *
 * @constant
 */
export const deleteValue: number = AttributeOperations_deleteValue; /* SHORT_NAMED_BIT */


/**
 * @summary AttributeOperations_replaceAttribute
 * @description
 *
 * Replace an attribute of the same type. Also needs object-level
 * modify.
 * ITU-T Rec. X.1080.0 (2017) Cor.1
 * [§7.5](https://www.itu.int/rec/T-REC-X.1080.0-201703-I!Cor1).
 *
 * @constant
 */
export const AttributeOperations_replaceAttribute: number = 6; /* LONG_NAMED_BIT */


/**
 * @summary replaceAttribute
 * @description
 *
 * Replace an attribute of the same type. Also needs object-level
 * modify.
 * ITU-T Rec. X.1080.0 (2017) Cor.1
 * [§7.5](https://www.itu.int/rec/T-REC-X.1080.0-201703-I!Cor1).
 *
 * @constant
 */
export const replaceAttribute: number = AttributeOperations_replaceAttribute; /* SHORT_NAMED_BIT */


/**
 * @summary AttributeOperations_discloseOnError
 * @description
 *
 * May learn the attribute exists when an operation fails.
 * ITU-T Rec. X.1080.0 (2017) Cor.1
 * [§7.5](https://www.itu.int/rec/T-REC-X.1080.0-201703-I!Cor1).
 *
 * @constant
 */
export const AttributeOperations_discloseOnError: number = 7; /* LONG_NAMED_BIT */


/**
 * @summary discloseOnError
 * @description
 *
 * May learn the attribute exists when an operation fails.
 * ITU-T Rec. X.1080.0 (2017) Cor.1
 * [§7.5](https://www.itu.int/rec/T-REC-X.1080.0-201703-I!Cor1).
 *
 * @constant
 */
export const discloseOnError: number = AttributeOperations_discloseOnError; /* SHORT_NAMED_BIT */




export const _decode_AttributeOperations = $._decodeBitString;




export const _encode_AttributeOperations = $._encodeBitString;


/* eslint-enable */
