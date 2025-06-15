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

/* START_OF_SYMBOL_DEFINITION ModifyOperator */
/**
 * @summary ModifyOperator
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ModifyOperator  ::=  INTEGER {
 *   replace(0), addValues(1), removeValues(2), setToDefault(3)}
 * ```
 */
export type ModifyOperator = INTEGER;
/* END_OF_SYMBOL_DEFINITION ModifyOperator */

/* START_OF_SYMBOL_DEFINITION ModifyOperator_replace */
/**
 * @summary ModifyOperator_replace
 * @constant
 * @type {number}
 */
export const ModifyOperator_replace: ModifyOperator = 0; /* LONG_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION ModifyOperator_replace */

/* START_OF_SYMBOL_DEFINITION replace */
/**
 * @summary ModifyOperator_replace
 * @constant
 * @type {number}
 */
export const replace: ModifyOperator = ModifyOperator_replace; /* SHORT_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION replace */

/* START_OF_SYMBOL_DEFINITION ModifyOperator_addValues */
/**
 * @summary ModifyOperator_addValues
 * @constant
 * @type {number}
 */
export const ModifyOperator_addValues: ModifyOperator = 1; /* LONG_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION ModifyOperator_addValues */

/* START_OF_SYMBOL_DEFINITION addValues */
/**
 * @summary ModifyOperator_addValues
 * @constant
 * @type {number}
 */
export const addValues: ModifyOperator = ModifyOperator_addValues; /* SHORT_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION addValues */

/* START_OF_SYMBOL_DEFINITION ModifyOperator_removeValues */
/**
 * @summary ModifyOperator_removeValues
 * @constant
 * @type {number}
 */
export const ModifyOperator_removeValues: ModifyOperator = 2; /* LONG_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION ModifyOperator_removeValues */

/* START_OF_SYMBOL_DEFINITION removeValues */
/**
 * @summary ModifyOperator_removeValues
 * @constant
 * @type {number}
 */
export const removeValues: ModifyOperator = ModifyOperator_removeValues; /* SHORT_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION removeValues */

/* START_OF_SYMBOL_DEFINITION ModifyOperator_setToDefault */
/**
 * @summary ModifyOperator_setToDefault
 * @constant
 * @type {number}
 */
export const ModifyOperator_setToDefault: ModifyOperator = 3; /* LONG_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION ModifyOperator_setToDefault */

/* START_OF_SYMBOL_DEFINITION setToDefault */
/**
 * @summary ModifyOperator_setToDefault
 * @constant
 * @type {number}
 */
export const setToDefault: ModifyOperator = ModifyOperator_setToDefault; /* SHORT_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION setToDefault */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_ModifyOperator */
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_ModifyOperator */

/* START_OF_SYMBOL_DEFINITION _decode_ModifyOperator */
export const _decode_ModifyOperator = $._decodeInteger;
/* END_OF_SYMBOL_DEFINITION _decode_ModifyOperator */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_ModifyOperator */
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_ModifyOperator */

/* START_OF_SYMBOL_DEFINITION _encode_ModifyOperator */
export const _encode_ModifyOperator = $._encodeInteger;

/* END_OF_SYMBOL_DEFINITION _encode_ModifyOperator */

/* eslint-enable */
