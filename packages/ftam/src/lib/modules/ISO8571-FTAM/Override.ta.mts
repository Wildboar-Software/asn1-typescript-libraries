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
 * @summary Override
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * Override  ::=  INTEGER {
 *   create-failure(0), select-old-Object(1),
 *   delete-and-create-with-old-attributes(2),
 *   delete-and-create-with-new-attributes(3)}
 * ```
 */
export type Override = INTEGER;


/**
 * @summary Override_create_failure
 * @constant
 * @type {number}
 */
export const Override_create_failure: Override = 0; /* LONG_NAMED_INTEGER_VALUE */


/**
 * @summary Override_create_failure
 * @constant
 * @type {number}
 */
export const create_failure: Override = Override_create_failure; /* SHORT_NAMED_INTEGER_VALUE */


/**
 * @summary Override_select_old_Object
 * @constant
 * @type {number}
 */
export const Override_select_old_Object: Override = 1; /* LONG_NAMED_INTEGER_VALUE */


/**
 * @summary Override_select_old_Object
 * @constant
 * @type {number}
 */
export const select_old_Object: Override = Override_select_old_Object; /* SHORT_NAMED_INTEGER_VALUE */


/**
 * @summary Override_delete_and_create_with_old_attributes
 * @constant
 * @type {number}
 */
export const Override_delete_and_create_with_old_attributes: Override = 2; /* LONG_NAMED_INTEGER_VALUE */


/**
 * @summary Override_delete_and_create_with_old_attributes
 * @constant
 * @type {number}
 */
export const delete_and_create_with_old_attributes: Override = Override_delete_and_create_with_old_attributes; /* SHORT_NAMED_INTEGER_VALUE */


/**
 * @summary Override_delete_and_create_with_new_attributes
 * @constant
 * @type {number}
 */
export const Override_delete_and_create_with_new_attributes: Override = 3; /* LONG_NAMED_INTEGER_VALUE */


/**
 * @summary Override_delete_and_create_with_new_attributes
 * @constant
 * @type {number}
 */
export const delete_and_create_with_new_attributes: Override = Override_delete_and_create_with_new_attributes; /* SHORT_NAMED_INTEGER_VALUE */




export const _decode_Override = $._decodeInteger;




export const _encode_Override = $._encodeInteger;


/* eslint-enable */
