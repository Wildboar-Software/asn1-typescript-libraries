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

/* START_OF_SYMBOL_DEFINITION Override */
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
/* END_OF_SYMBOL_DEFINITION Override */

/* START_OF_SYMBOL_DEFINITION Override_create_failure */
/**
 * @summary Override_create_failure
 * @constant
 * @type {number}
 */
export const Override_create_failure: Override = 0; /* LONG_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION Override_create_failure */

/* START_OF_SYMBOL_DEFINITION create_failure */
/**
 * @summary Override_create_failure
 * @constant
 * @type {number}
 */
export const create_failure: Override = Override_create_failure; /* SHORT_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION create_failure */

/* START_OF_SYMBOL_DEFINITION Override_select_old_Object */
/**
 * @summary Override_select_old_Object
 * @constant
 * @type {number}
 */
export const Override_select_old_Object: Override = 1; /* LONG_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION Override_select_old_Object */

/* START_OF_SYMBOL_DEFINITION select_old_Object */
/**
 * @summary Override_select_old_Object
 * @constant
 * @type {number}
 */
export const select_old_Object: Override = Override_select_old_Object; /* SHORT_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION select_old_Object */

/* START_OF_SYMBOL_DEFINITION Override_delete_and_create_with_old_attributes */
/**
 * @summary Override_delete_and_create_with_old_attributes
 * @constant
 * @type {number}
 */
export const Override_delete_and_create_with_old_attributes: Override = 2; /* LONG_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION Override_delete_and_create_with_old_attributes */

/* START_OF_SYMBOL_DEFINITION delete_and_create_with_old_attributes */
/**
 * @summary Override_delete_and_create_with_old_attributes
 * @constant
 * @type {number}
 */
export const delete_and_create_with_old_attributes: Override = Override_delete_and_create_with_old_attributes; /* SHORT_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION delete_and_create_with_old_attributes */

/* START_OF_SYMBOL_DEFINITION Override_delete_and_create_with_new_attributes */
/**
 * @summary Override_delete_and_create_with_new_attributes
 * @constant
 * @type {number}
 */
export const Override_delete_and_create_with_new_attributes: Override = 3; /* LONG_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION Override_delete_and_create_with_new_attributes */

/* START_OF_SYMBOL_DEFINITION delete_and_create_with_new_attributes */
/**
 * @summary Override_delete_and_create_with_new_attributes
 * @constant
 * @type {number}
 */
export const delete_and_create_with_new_attributes: Override = Override_delete_and_create_with_new_attributes; /* SHORT_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION delete_and_create_with_new_attributes */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_Override */
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_Override */

/* START_OF_SYMBOL_DEFINITION _decode_Override */
export const _decode_Override = $._decodeInteger;
/* END_OF_SYMBOL_DEFINITION _decode_Override */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_Override */
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_Override */

/* START_OF_SYMBOL_DEFINITION _encode_Override */
export const _encode_Override = $._encodeInteger;

/* END_OF_SYMBOL_DEFINITION _encode_Override */

/* eslint-enable */
