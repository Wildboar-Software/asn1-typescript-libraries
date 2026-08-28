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
} from '@wildboar/asn1';
import * as $ from '@wildboar/asn1/functional';


/**
 * @summary Object_Type_Attribute
 * @description
 *
 * Named values `file`(0), `file-directory`(1), `reference`(2).
 * Not defined in ISO 8571:1988 Parts 1–4 (ISO 8571-4:1988
 * Figure 11 has no such type).
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * Object-Type-Attribute  ::=  INTEGER {file(0), file-directory(1), reference(2)}
 * ```
 */
export type Object_Type_Attribute = INTEGER;


/**
 * @summary Object_Type_Attribute_file
 * @description
 *
 * Named value `file`(0). Not in ISO 8571:1988 Parts 1–4.
 *
 * @constant
 * @type {number}
 */
export const Object_Type_Attribute_file: Object_Type_Attribute = 0; /* LONG_NAMED_INTEGER_VALUE */


/**
 * @summary Object_Type_Attribute_file
 * @constant
 * @type {number}
 */
export const file: Object_Type_Attribute = Object_Type_Attribute_file; /* SHORT_NAMED_INTEGER_VALUE */


/**
 * @summary Object_Type_Attribute_file_directory
 * @description
 *
 * Named value `file-directory`(1). Not in ISO 8571:1988
 * Parts 1–4.
 *
 * @constant
 * @type {number}
 */
export const Object_Type_Attribute_file_directory: Object_Type_Attribute = 1; /* LONG_NAMED_INTEGER_VALUE */


/**
 * @summary Object_Type_Attribute_file_directory
 * @constant
 * @type {number}
 */
export const file_directory: Object_Type_Attribute = Object_Type_Attribute_file_directory; /* SHORT_NAMED_INTEGER_VALUE */


/**
 * @summary Object_Type_Attribute_reference
 * @description
 *
 * Named value `reference`(2). Not in ISO 8571:1988 Parts 1–4.
 *
 * @constant
 * @type {number}
 */
export const Object_Type_Attribute_reference: Object_Type_Attribute = 2; /* LONG_NAMED_INTEGER_VALUE */


/**
 * @summary Object_Type_Attribute_reference
 * @constant
 * @type {number}
 */
export const reference: Object_Type_Attribute = Object_Type_Attribute_reference; /* SHORT_NAMED_INTEGER_VALUE */




export const _decode_Object_Type_Attribute = $._decodeInteger;




export const _encode_Object_Type_Attribute = $._encodeInteger;


/* eslint-enable */
