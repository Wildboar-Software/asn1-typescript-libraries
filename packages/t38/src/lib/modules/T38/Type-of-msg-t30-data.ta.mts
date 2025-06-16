/* eslint-disable */
import {
  ENUMERATED,
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


export enum _enum_for_Type_of_msg_t30_data {
  v21 = 0,
  v27_2400 = 1,
  v27_4800 = 2,
  v29_7200 = 3,
  v29_9600 = 4,
  v17_7200 = 5,
  v17_9600 = 6,
  v17_12000 = 7,
  v17_14400 = 8,
  v8 = 9,
  v34_pri_rate = 9,
  v34_CC_1200 = 9,
  v34_pri_ch = 9,
  v33_12000 = 9,
  v33_14400 = 9,
}


/**
 * @summary Type_of_msg_t30_data
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * Type-of-msg-t30-data ::= ENUMERATED { -- REMOVED_FROM_UNNESTING -- }
 *  {number}
 */
export type Type_of_msg_t30_data = _enum_for_Type_of_msg_t30_data | ENUMERATED;


/**
 * @summary Type_of_msg_t30_data_v21
 * @constant
 * @type {number}
 */
export const Type_of_msg_t30_data_v21: Type_of_msg_t30_data = 0; /* LONG_NAMED_ENUMERATED_VALUE */


/**
 * @summary v21
 * @constant
 * @type {number}
 */
export const v21: Type_of_msg_t30_data = Type_of_msg_t30_data_v21; /* SHORT_NAMED_ENUMERATED_VALUE */


/**
 * @summary Type_of_msg_t30_data_v27_2400
 * @constant
 * @type {number}
 */
export const Type_of_msg_t30_data_v27_2400: Type_of_msg_t30_data = 1; /* LONG_NAMED_ENUMERATED_VALUE */


/**
 * @summary v27_2400
 * @constant
 * @type {number}
 */
export const v27_2400: Type_of_msg_t30_data = Type_of_msg_t30_data_v27_2400; /* SHORT_NAMED_ENUMERATED_VALUE */


/**
 * @summary Type_of_msg_t30_data_v27_4800
 * @constant
 * @type {number}
 */
export const Type_of_msg_t30_data_v27_4800: Type_of_msg_t30_data = 2; /* LONG_NAMED_ENUMERATED_VALUE */


/**
 * @summary v27_4800
 * @constant
 * @type {number}
 */
export const v27_4800: Type_of_msg_t30_data = Type_of_msg_t30_data_v27_4800; /* SHORT_NAMED_ENUMERATED_VALUE */


/**
 * @summary Type_of_msg_t30_data_v29_7200
 * @constant
 * @type {number}
 */
export const Type_of_msg_t30_data_v29_7200: Type_of_msg_t30_data = 3; /* LONG_NAMED_ENUMERATED_VALUE */


/**
 * @summary v29_7200
 * @constant
 * @type {number}
 */
export const v29_7200: Type_of_msg_t30_data = Type_of_msg_t30_data_v29_7200; /* SHORT_NAMED_ENUMERATED_VALUE */


/**
 * @summary Type_of_msg_t30_data_v29_9600
 * @constant
 * @type {number}
 */
export const Type_of_msg_t30_data_v29_9600: Type_of_msg_t30_data = 4; /* LONG_NAMED_ENUMERATED_VALUE */


/**
 * @summary v29_9600
 * @constant
 * @type {number}
 */
export const v29_9600: Type_of_msg_t30_data = Type_of_msg_t30_data_v29_9600; /* SHORT_NAMED_ENUMERATED_VALUE */


/**
 * @summary Type_of_msg_t30_data_v17_7200
 * @constant
 * @type {number}
 */
export const Type_of_msg_t30_data_v17_7200: Type_of_msg_t30_data = 5; /* LONG_NAMED_ENUMERATED_VALUE */


/**
 * @summary v17_7200
 * @constant
 * @type {number}
 */
export const v17_7200: Type_of_msg_t30_data = Type_of_msg_t30_data_v17_7200; /* SHORT_NAMED_ENUMERATED_VALUE */


/**
 * @summary Type_of_msg_t30_data_v17_9600
 * @constant
 * @type {number}
 */
export const Type_of_msg_t30_data_v17_9600: Type_of_msg_t30_data = 6; /* LONG_NAMED_ENUMERATED_VALUE */


/**
 * @summary v17_9600
 * @constant
 * @type {number}
 */
export const v17_9600: Type_of_msg_t30_data = Type_of_msg_t30_data_v17_9600; /* SHORT_NAMED_ENUMERATED_VALUE */


/**
 * @summary Type_of_msg_t30_data_v17_12000
 * @constant
 * @type {number}
 */
export const Type_of_msg_t30_data_v17_12000: Type_of_msg_t30_data = 7; /* LONG_NAMED_ENUMERATED_VALUE */


/**
 * @summary v17_12000
 * @constant
 * @type {number}
 */
export const v17_12000: Type_of_msg_t30_data = Type_of_msg_t30_data_v17_12000; /* SHORT_NAMED_ENUMERATED_VALUE */


/**
 * @summary Type_of_msg_t30_data_v17_14400
 * @constant
 * @type {number}
 */
export const Type_of_msg_t30_data_v17_14400: Type_of_msg_t30_data = 8; /* LONG_NAMED_ENUMERATED_VALUE */


/**
 * @summary v17_14400
 * @constant
 * @type {number}
 */
export const v17_14400: Type_of_msg_t30_data = Type_of_msg_t30_data_v17_14400; /* SHORT_NAMED_ENUMERATED_VALUE */


/**
 * @summary Type_of_msg_t30_data_v8
 * @constant
 * @type {number}
 */
export const Type_of_msg_t30_data_v8: Type_of_msg_t30_data = 9; /* LONG_NAMED_ENUMERATED_VALUE */


/**
 * @summary v8
 * @constant
 * @type {number}
 */
export const v8: Type_of_msg_t30_data = Type_of_msg_t30_data_v8; /* SHORT_NAMED_ENUMERATED_VALUE */


/**
 * @summary Type_of_msg_t30_data_v34_pri_rate
 * @constant
 * @type {number}
 */
export const Type_of_msg_t30_data_v34_pri_rate: Type_of_msg_t30_data = 9; /* LONG_NAMED_ENUMERATED_VALUE */


/**
 * @summary v34_pri_rate
 * @constant
 * @type {number}
 */
export const v34_pri_rate: Type_of_msg_t30_data = Type_of_msg_t30_data_v34_pri_rate; /* SHORT_NAMED_ENUMERATED_VALUE */


/**
 * @summary Type_of_msg_t30_data_v34_CC_1200
 * @constant
 * @type {number}
 */
export const Type_of_msg_t30_data_v34_CC_1200: Type_of_msg_t30_data = 9; /* LONG_NAMED_ENUMERATED_VALUE */


/**
 * @summary v34_CC_1200
 * @constant
 * @type {number}
 */
export const v34_CC_1200: Type_of_msg_t30_data = Type_of_msg_t30_data_v34_CC_1200; /* SHORT_NAMED_ENUMERATED_VALUE */


/**
 * @summary Type_of_msg_t30_data_v34_pri_ch
 * @constant
 * @type {number}
 */
export const Type_of_msg_t30_data_v34_pri_ch: Type_of_msg_t30_data = 9; /* LONG_NAMED_ENUMERATED_VALUE */


/**
 * @summary v34_pri_ch
 * @constant
 * @type {number}
 */
export const v34_pri_ch: Type_of_msg_t30_data = Type_of_msg_t30_data_v34_pri_ch; /* SHORT_NAMED_ENUMERATED_VALUE */


/**
 * @summary Type_of_msg_t30_data_v33_12000
 * @constant
 * @type {number}
 */
export const Type_of_msg_t30_data_v33_12000: Type_of_msg_t30_data = 9; /* LONG_NAMED_ENUMERATED_VALUE */


/**
 * @summary v33_12000
 * @constant
 * @type {number}
 */
export const v33_12000: Type_of_msg_t30_data = Type_of_msg_t30_data_v33_12000; /* SHORT_NAMED_ENUMERATED_VALUE */


/**
 * @summary Type_of_msg_t30_data_v33_14400
 * @constant
 * @type {number}
 */
export const Type_of_msg_t30_data_v33_14400: Type_of_msg_t30_data = 9; /* LONG_NAMED_ENUMERATED_VALUE */


/**
 * @summary v33_14400
 * @constant
 * @type {number}
 */
export const v33_14400: Type_of_msg_t30_data = Type_of_msg_t30_data_v33_14400; /* SHORT_NAMED_ENUMERATED_VALUE */




export const _decode_Type_of_msg_t30_data = $._decodeEnumerated;




export const _encode_Type_of_msg_t30_data = $._encodeEnumerated;

