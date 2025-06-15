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


/**
 * @summary ModifyOperator_replace
 * @constant
 * @type {number}
 */
export const ModifyOperator_replace: ModifyOperator = 0; /* LONG_NAMED_INTEGER_VALUE */


/**
 * @summary ModifyOperator_replace
 * @constant
 * @type {number}
 */
export const replace: ModifyOperator = ModifyOperator_replace; /* SHORT_NAMED_INTEGER_VALUE */


/**
 * @summary ModifyOperator_addValues
 * @constant
 * @type {number}
 */
export const ModifyOperator_addValues: ModifyOperator = 1; /* LONG_NAMED_INTEGER_VALUE */


/**
 * @summary ModifyOperator_addValues
 * @constant
 * @type {number}
 */
export const addValues: ModifyOperator = ModifyOperator_addValues; /* SHORT_NAMED_INTEGER_VALUE */


/**
 * @summary ModifyOperator_removeValues
 * @constant
 * @type {number}
 */
export const ModifyOperator_removeValues: ModifyOperator = 2; /* LONG_NAMED_INTEGER_VALUE */


/**
 * @summary ModifyOperator_removeValues
 * @constant
 * @type {number}
 */
export const removeValues: ModifyOperator = ModifyOperator_removeValues; /* SHORT_NAMED_INTEGER_VALUE */


/**
 * @summary ModifyOperator_setToDefault
 * @constant
 * @type {number}
 */
export const ModifyOperator_setToDefault: ModifyOperator = 3; /* LONG_NAMED_INTEGER_VALUE */


/**
 * @summary ModifyOperator_setToDefault
 * @constant
 * @type {number}
 */
export const setToDefault: ModifyOperator = ModifyOperator_setToDefault; /* SHORT_NAMED_INTEGER_VALUE */




export const _decode_ModifyOperator = $._decodeInteger;




export const _encode_ModifyOperator = $._encodeInteger;


/* eslint-enable */
