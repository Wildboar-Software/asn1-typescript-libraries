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
 * @summary ModifyOperator
 * @description
 *
 * How to apply a set modification. Default in
 * `modificationList` is `replace`. When
 * `setToDefault`, `attributeValue` is absent. ITU-T Rec.
 * X.711 (10/97)
 * [§7.4](https://www.itu.int/rec/T-REC-X.711-199710-I).
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
 * @description
 *
 * Replace the attribute with `attributeValue`.
 *
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
 * @description
 *
 * Add the given values to the attribute.
 *
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
 * @description
 *
 * Remove the given values from the attribute.
 *
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
 * @description
 *
 * Restore the attribute's default. `attributeValue` is
 * absent. X.711 §7.4.
 *
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
