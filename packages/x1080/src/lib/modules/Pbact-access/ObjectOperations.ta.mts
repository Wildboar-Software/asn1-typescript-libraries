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
 * @summary ObjectOperations
 * @description
 *
 * Object-level privileges in a `TargetSelect`.
 * ITU-T Rec. X.1080.0 (2017) Cor.1
 * [§7.4](https://www.itu.int/rec/T-REC-X.1080.0-201703-I!Cor1).
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
 * @description
 *
 * Read information from an object.
 * ITU-T Rec. X.1080.0 (2017) Cor.1
 * [§7.4](https://www.itu.int/rec/T-REC-X.1080.0-201703-I!Cor1).
 *
 * @constant
 */
export const ObjectOperations_read: number = 0; /* LONG_NAMED_BIT */


/**
 * @summary read
 * @description
 *
 * Read information from an object.
 * ITU-T Rec. X.1080.0 (2017) Cor.1
 * [§7.4](https://www.itu.int/rec/T-REC-X.1080.0-201703-I!Cor1).
 *
 * @constant
 */
export const read: number = ObjectOperations_read; /* SHORT_NAMED_BIT */


/**
 * @summary ObjectOperations_add
 * @description
 *
 * Add new objects of the class. Also needs attribute-add for each
 * attribute added. Requires add for all objects of the class.
 * ITU-T Rec. X.1080.0 (2017) Cor.1
 * [§7.4](https://www.itu.int/rec/T-REC-X.1080.0-201703-I!Cor1).
 *
 * @constant
 */
export const ObjectOperations_add: number = 1; /* LONG_NAMED_BIT */


/**
 * @summary add
 * @description
 *
 * Add new objects of the class. Also needs attribute-add for each
 * attribute added. Requires add for all objects of the class.
 * ITU-T Rec. X.1080.0 (2017) Cor.1
 * [§7.4](https://www.itu.int/rec/T-REC-X.1080.0-201703-I!Cor1).
 *
 * @constant
 */
export const add: number = ObjectOperations_add; /* SHORT_NAMED_BIT */


/**
 * @summary ObjectOperations_modify
 * @description
 *
 * Modify an existing object. Also need matching attribute operations
 * (add, delete, modify, deleteValue, replaceAttribute).
 * ITU-T Rec. X.1080.0 (2017) Cor.1
 * [§7.4](https://www.itu.int/rec/T-REC-X.1080.0-201703-I!Cor1).
 *
 * @constant
 */
export const ObjectOperations_modify: number = 2; /* LONG_NAMED_BIT */


/**
 * @summary modify
 * @description
 *
 * Modify an existing object. Also need matching attribute operations
 * (add, delete, modify, deleteValue, replaceAttribute).
 * ITU-T Rec. X.1080.0 (2017) Cor.1
 * [§7.4](https://www.itu.int/rec/T-REC-X.1080.0-201703-I!Cor1).
 *
 * @constant
 */
export const modify: number = ObjectOperations_modify; /* SHORT_NAMED_BIT */


/**
 * @summary ObjectOperations_delete_
 * @description
 *
 * Delete an existing object.
 * ITU-T Rec. X.1080.0 (2017) Cor.1
 * [§7.4](https://www.itu.int/rec/T-REC-X.1080.0-201703-I!Cor1).
 *
 * @constant
 */
export const ObjectOperations_delete_: number = 3; /* LONG_NAMED_BIT */


/**
 * @summary delete_
 * @description
 *
 * Delete an existing object.
 * ITU-T Rec. X.1080.0 (2017) Cor.1
 * [§7.4](https://www.itu.int/rec/T-REC-X.1080.0-201703-I!Cor1).
 *
 * @constant
 */
export const delete_: number = ObjectOperations_delete_; /* SHORT_NAMED_BIT */


/**
 * @summary ObjectOperations_rename
 * @description
 *
 * Rename an existing object.
 * ITU-T Rec. X.1080.0 (2017) Cor.1
 * [§7.4](https://www.itu.int/rec/T-REC-X.1080.0-201703-I!Cor1).
 *
 * @constant
 */
export const ObjectOperations_rename: number = 4; /* LONG_NAMED_BIT */


/**
 * @summary rename
 * @description
 *
 * Rename an existing object.
 * ITU-T Rec. X.1080.0 (2017) Cor.1
 * [§7.4](https://www.itu.int/rec/T-REC-X.1080.0-201703-I!Cor1).
 *
 * @constant
 */
export const rename: number = ObjectOperations_rename; /* SHORT_NAMED_BIT */


/**
 * @summary ObjectOperations_discloseOnError
 * @description
 *
 * May learn the object exists when an operation fails. Without this,
 * failures often return `noSuchObject` instead of
 * `insufficientAccessRigth`.
 * ITU-T Rec. X.1080.0 (2017) Cor.1
 * [§7.4](https://www.itu.int/rec/T-REC-X.1080.0-201703-I!Cor1).
 *
 * @constant
 */
export const ObjectOperations_discloseOnError: number = 5; /* LONG_NAMED_BIT */


/**
 * @summary discloseOnError
 * @description
 *
 * May learn the object exists when an operation fails. Without this,
 * failures often return `noSuchObject` instead of
 * `insufficientAccessRigth`.
 * ITU-T Rec. X.1080.0 (2017) Cor.1
 * [§7.4](https://www.itu.int/rec/T-REC-X.1080.0-201703-I!Cor1).
 *
 * @constant
 */
export const discloseOnError: number = ObjectOperations_discloseOnError; /* SHORT_NAMED_BIT */




export const _decode_ObjectOperations = $._decodeBitString;




export const _encode_ObjectOperations = $._encodeBitString;


/* eslint-enable */
