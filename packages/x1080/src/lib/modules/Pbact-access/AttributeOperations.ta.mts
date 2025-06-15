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

/* START_OF_SYMBOL_DEFINITION AttributeOperations */
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
/* END_OF_SYMBOL_DEFINITION AttributeOperations */

/* START_OF_SYMBOL_DEFINITION AttributeOperations_read */
/**
 * @summary AttributeOperations_read
 * @constant
 */
export const AttributeOperations_read: number = 0; /* LONG_NAMED_BIT */
/* END_OF_SYMBOL_DEFINITION AttributeOperations_read */

/* START_OF_SYMBOL_DEFINITION read */
/**
 * @summary read
 * @constant
 */
export const read: number = AttributeOperations_read; /* SHORT_NAMED_BIT */
/* END_OF_SYMBOL_DEFINITION read */

/* START_OF_SYMBOL_DEFINITION AttributeOperations_compare */
/**
 * @summary AttributeOperations_compare
 * @constant
 */
export const AttributeOperations_compare: number = 1; /* LONG_NAMED_BIT */
/* END_OF_SYMBOL_DEFINITION AttributeOperations_compare */

/* START_OF_SYMBOL_DEFINITION compare */
/**
 * @summary compare
 * @constant
 */
export const compare: number = AttributeOperations_compare; /* SHORT_NAMED_BIT */
/* END_OF_SYMBOL_DEFINITION compare */

/* START_OF_SYMBOL_DEFINITION AttributeOperations_add */
/**
 * @summary AttributeOperations_add
 * @constant
 */
export const AttributeOperations_add: number = 2; /* LONG_NAMED_BIT */
/* END_OF_SYMBOL_DEFINITION AttributeOperations_add */

/* START_OF_SYMBOL_DEFINITION add */
/**
 * @summary add
 * @constant
 */
export const add: number = AttributeOperations_add; /* SHORT_NAMED_BIT */
/* END_OF_SYMBOL_DEFINITION add */

/* START_OF_SYMBOL_DEFINITION AttributeOperations_modify */
/**
 * @summary AttributeOperations_modify
 * @constant
 */
export const AttributeOperations_modify: number = 3; /* LONG_NAMED_BIT */
/* END_OF_SYMBOL_DEFINITION AttributeOperations_modify */

/* START_OF_SYMBOL_DEFINITION modify */
/**
 * @summary modify
 * @constant
 */
export const modify: number = AttributeOperations_modify; /* SHORT_NAMED_BIT */
/* END_OF_SYMBOL_DEFINITION modify */

/* START_OF_SYMBOL_DEFINITION AttributeOperations_delete_ */
/**
 * @summary AttributeOperations_delete_
 * @constant
 */
export const AttributeOperations_delete_: number = 4; /* LONG_NAMED_BIT */
/* END_OF_SYMBOL_DEFINITION AttributeOperations_delete_ */

/* START_OF_SYMBOL_DEFINITION delete_ */
/**
 * @summary delete_
 * @constant
 */
export const delete_: number = AttributeOperations_delete_; /* SHORT_NAMED_BIT */
/* END_OF_SYMBOL_DEFINITION delete_ */

/* START_OF_SYMBOL_DEFINITION AttributeOperations_deleteValue */
/**
 * @summary AttributeOperations_deleteValue
 * @constant
 */
export const AttributeOperations_deleteValue: number = 5; /* LONG_NAMED_BIT */
/* END_OF_SYMBOL_DEFINITION AttributeOperations_deleteValue */

/* START_OF_SYMBOL_DEFINITION deleteValue */
/**
 * @summary deleteValue
 * @constant
 */
export const deleteValue: number = AttributeOperations_deleteValue; /* SHORT_NAMED_BIT */
/* END_OF_SYMBOL_DEFINITION deleteValue */

/* START_OF_SYMBOL_DEFINITION AttributeOperations_replaceAttribute */
/**
 * @summary AttributeOperations_replaceAttribute
 * @constant
 */
export const AttributeOperations_replaceAttribute: number = 6; /* LONG_NAMED_BIT */
/* END_OF_SYMBOL_DEFINITION AttributeOperations_replaceAttribute */

/* START_OF_SYMBOL_DEFINITION replaceAttribute */
/**
 * @summary replaceAttribute
 * @constant
 */
export const replaceAttribute: number = AttributeOperations_replaceAttribute; /* SHORT_NAMED_BIT */
/* END_OF_SYMBOL_DEFINITION replaceAttribute */

/* START_OF_SYMBOL_DEFINITION AttributeOperations_discloseOnError */
/**
 * @summary AttributeOperations_discloseOnError
 * @constant
 */
export const AttributeOperations_discloseOnError: number = 7; /* LONG_NAMED_BIT */
/* END_OF_SYMBOL_DEFINITION AttributeOperations_discloseOnError */

/* START_OF_SYMBOL_DEFINITION discloseOnError */
/**
 * @summary discloseOnError
 * @constant
 */
export const discloseOnError: number = AttributeOperations_discloseOnError; /* SHORT_NAMED_BIT */
/* END_OF_SYMBOL_DEFINITION discloseOnError */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_AttributeOperations */
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_AttributeOperations */

/* START_OF_SYMBOL_DEFINITION _decode_AttributeOperations */
export const _decode_AttributeOperations = $._decodeBitString;
/* END_OF_SYMBOL_DEFINITION _decode_AttributeOperations */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_AttributeOperations */
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_AttributeOperations */

/* START_OF_SYMBOL_DEFINITION _encode_AttributeOperations */
export const _encode_AttributeOperations = $._encodeBitString;

/* END_OF_SYMBOL_DEFINITION _encode_AttributeOperations */

/* eslint-enable */
