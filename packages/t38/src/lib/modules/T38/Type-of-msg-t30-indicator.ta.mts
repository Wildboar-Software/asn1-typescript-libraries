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


export enum _enum_for_Type_of_msg_t30_indicator {
  no_signal = 0,
  cng = 1,
  ced = 2,
  v21_preamble = 3,
  v27_2400_training = 4,
  v27_4800_training = 5,
  v29_7200_training = 6,
  v29_9600_training = 7,
  v17_7200_short_training = 8,
  v17_7200_long_training = 9,
  v17_9600_short_training = 10,
  v17_9600_long_training = 11,
  v17_12000_short_training = 12,
  v17_12000_long_training = 13,
  v17_14400_short_training = 14,
  v17_14400_long_training = 15,
  v8_ansam = 16,
  v8_signal = 16,
  v34_cntl_channel_1200 = 16,
  v34_pri_channel = 16,
  v34_CC_retrain = 16,
  v33_12000_training = 16,
  v33_14400_training = 16,
}


/**
 * @summary Type_of_msg_t30_indicator
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * Type-of-msg-t30-indicator ::= ENUMERATED { -- REMOVED_FROM_UNNESTING -- }
 *  {number}
 */
export type Type_of_msg_t30_indicator =
  | _enum_for_Type_of_msg_t30_indicator
  | ENUMERATED;


/**
 * @summary Type_of_msg_t30_indicator_no_signal
 * @constant
 * @type {number}
 */
export const Type_of_msg_t30_indicator_no_signal: Type_of_msg_t30_indicator = 0; /* LONG_NAMED_ENUMERATED_VALUE */


/**
 * @summary no_signal
 * @constant
 * @type {number}
 */
export const no_signal: Type_of_msg_t30_indicator = Type_of_msg_t30_indicator_no_signal; /* SHORT_NAMED_ENUMERATED_VALUE */


/**
 * @summary Type_of_msg_t30_indicator_cng
 * @constant
 * @type {number}
 */
export const Type_of_msg_t30_indicator_cng: Type_of_msg_t30_indicator = 1; /* LONG_NAMED_ENUMERATED_VALUE */


/**
 * @summary cng
 * @constant
 * @type {number}
 */
export const cng: Type_of_msg_t30_indicator = Type_of_msg_t30_indicator_cng; /* SHORT_NAMED_ENUMERATED_VALUE */


/**
 * @summary Type_of_msg_t30_indicator_ced
 * @constant
 * @type {number}
 */
export const Type_of_msg_t30_indicator_ced: Type_of_msg_t30_indicator = 2; /* LONG_NAMED_ENUMERATED_VALUE */


/**
 * @summary ced
 * @constant
 * @type {number}
 */
export const ced: Type_of_msg_t30_indicator = Type_of_msg_t30_indicator_ced; /* SHORT_NAMED_ENUMERATED_VALUE */


/**
 * @summary Type_of_msg_t30_indicator_v21_preamble
 * @constant
 * @type {number}
 */
export const Type_of_msg_t30_indicator_v21_preamble: Type_of_msg_t30_indicator = 3; /* LONG_NAMED_ENUMERATED_VALUE */


/**
 * @summary v21_preamble
 * @constant
 * @type {number}
 */
export const v21_preamble: Type_of_msg_t30_indicator = Type_of_msg_t30_indicator_v21_preamble; /* SHORT_NAMED_ENUMERATED_VALUE */


/**
 * @summary Type_of_msg_t30_indicator_v27_2400_training
 * @constant
 * @type {number}
 */
export const Type_of_msg_t30_indicator_v27_2400_training: Type_of_msg_t30_indicator = 4; /* LONG_NAMED_ENUMERATED_VALUE */


/**
 * @summary v27_2400_training
 * @constant
 * @type {number}
 */
export const v27_2400_training: Type_of_msg_t30_indicator = Type_of_msg_t30_indicator_v27_2400_training; /* SHORT_NAMED_ENUMERATED_VALUE */


/**
 * @summary Type_of_msg_t30_indicator_v27_4800_training
 * @constant
 * @type {number}
 */
export const Type_of_msg_t30_indicator_v27_4800_training: Type_of_msg_t30_indicator = 5; /* LONG_NAMED_ENUMERATED_VALUE */


/**
 * @summary v27_4800_training
 * @constant
 * @type {number}
 */
export const v27_4800_training: Type_of_msg_t30_indicator = Type_of_msg_t30_indicator_v27_4800_training; /* SHORT_NAMED_ENUMERATED_VALUE */


/**
 * @summary Type_of_msg_t30_indicator_v29_7200_training
 * @constant
 * @type {number}
 */
export const Type_of_msg_t30_indicator_v29_7200_training: Type_of_msg_t30_indicator = 6; /* LONG_NAMED_ENUMERATED_VALUE */


/**
 * @summary v29_7200_training
 * @constant
 * @type {number}
 */
export const v29_7200_training: Type_of_msg_t30_indicator = Type_of_msg_t30_indicator_v29_7200_training; /* SHORT_NAMED_ENUMERATED_VALUE */


/**
 * @summary Type_of_msg_t30_indicator_v29_9600_training
 * @constant
 * @type {number}
 */
export const Type_of_msg_t30_indicator_v29_9600_training: Type_of_msg_t30_indicator = 7; /* LONG_NAMED_ENUMERATED_VALUE */


/**
 * @summary v29_9600_training
 * @constant
 * @type {number}
 */
export const v29_9600_training: Type_of_msg_t30_indicator = Type_of_msg_t30_indicator_v29_9600_training; /* SHORT_NAMED_ENUMERATED_VALUE */


/**
 * @summary Type_of_msg_t30_indicator_v17_7200_short_training
 * @constant
 * @type {number}
 */
export const Type_of_msg_t30_indicator_v17_7200_short_training: Type_of_msg_t30_indicator = 8; /* LONG_NAMED_ENUMERATED_VALUE */


/**
 * @summary v17_7200_short_training
 * @constant
 * @type {number}
 */
export const v17_7200_short_training: Type_of_msg_t30_indicator = Type_of_msg_t30_indicator_v17_7200_short_training; /* SHORT_NAMED_ENUMERATED_VALUE */


/**
 * @summary Type_of_msg_t30_indicator_v17_7200_long_training
 * @constant
 * @type {number}
 */
export const Type_of_msg_t30_indicator_v17_7200_long_training: Type_of_msg_t30_indicator = 9; /* LONG_NAMED_ENUMERATED_VALUE */


/**
 * @summary v17_7200_long_training
 * @constant
 * @type {number}
 */
export const v17_7200_long_training: Type_of_msg_t30_indicator = Type_of_msg_t30_indicator_v17_7200_long_training; /* SHORT_NAMED_ENUMERATED_VALUE */


/**
 * @summary Type_of_msg_t30_indicator_v17_9600_short_training
 * @constant
 * @type {number}
 */
export const Type_of_msg_t30_indicator_v17_9600_short_training: Type_of_msg_t30_indicator = 10; /* LONG_NAMED_ENUMERATED_VALUE */


/**
 * @summary v17_9600_short_training
 * @constant
 * @type {number}
 */
export const v17_9600_short_training: Type_of_msg_t30_indicator = Type_of_msg_t30_indicator_v17_9600_short_training; /* SHORT_NAMED_ENUMERATED_VALUE */


/**
 * @summary Type_of_msg_t30_indicator_v17_9600_long_training
 * @constant
 * @type {number}
 */
export const Type_of_msg_t30_indicator_v17_9600_long_training: Type_of_msg_t30_indicator = 11; /* LONG_NAMED_ENUMERATED_VALUE */


/**
 * @summary v17_9600_long_training
 * @constant
 * @type {number}
 */
export const v17_9600_long_training: Type_of_msg_t30_indicator = Type_of_msg_t30_indicator_v17_9600_long_training; /* SHORT_NAMED_ENUMERATED_VALUE */


/**
 * @summary Type_of_msg_t30_indicator_v17_12000_short_training
 * @constant
 * @type {number}
 */
export const Type_of_msg_t30_indicator_v17_12000_short_training: Type_of_msg_t30_indicator = 12; /* LONG_NAMED_ENUMERATED_VALUE */


/**
 * @summary v17_12000_short_training
 * @constant
 * @type {number}
 */
export const v17_12000_short_training: Type_of_msg_t30_indicator = Type_of_msg_t30_indicator_v17_12000_short_training; /* SHORT_NAMED_ENUMERATED_VALUE */


/**
 * @summary Type_of_msg_t30_indicator_v17_12000_long_training
 * @constant
 * @type {number}
 */
export const Type_of_msg_t30_indicator_v17_12000_long_training: Type_of_msg_t30_indicator = 13; /* LONG_NAMED_ENUMERATED_VALUE */


/**
 * @summary v17_12000_long_training
 * @constant
 * @type {number}
 */
export const v17_12000_long_training: Type_of_msg_t30_indicator = Type_of_msg_t30_indicator_v17_12000_long_training; /* SHORT_NAMED_ENUMERATED_VALUE */


/**
 * @summary Type_of_msg_t30_indicator_v17_14400_short_training
 * @constant
 * @type {number}
 */
export const Type_of_msg_t30_indicator_v17_14400_short_training: Type_of_msg_t30_indicator = 14; /* LONG_NAMED_ENUMERATED_VALUE */


/**
 * @summary v17_14400_short_training
 * @constant
 * @type {number}
 */
export const v17_14400_short_training: Type_of_msg_t30_indicator = Type_of_msg_t30_indicator_v17_14400_short_training; /* SHORT_NAMED_ENUMERATED_VALUE */


/**
 * @summary Type_of_msg_t30_indicator_v17_14400_long_training
 * @constant
 * @type {number}
 */
export const Type_of_msg_t30_indicator_v17_14400_long_training: Type_of_msg_t30_indicator = 15; /* LONG_NAMED_ENUMERATED_VALUE */


/**
 * @summary v17_14400_long_training
 * @constant
 * @type {number}
 */
export const v17_14400_long_training: Type_of_msg_t30_indicator = Type_of_msg_t30_indicator_v17_14400_long_training; /* SHORT_NAMED_ENUMERATED_VALUE */


/**
 * @summary Type_of_msg_t30_indicator_v8_ansam
 * @constant
 * @type {number}
 */
export const Type_of_msg_t30_indicator_v8_ansam: Type_of_msg_t30_indicator = 16; /* LONG_NAMED_ENUMERATED_VALUE */


/**
 * @summary v8_ansam
 * @constant
 * @type {number}
 */
export const v8_ansam: Type_of_msg_t30_indicator = Type_of_msg_t30_indicator_v8_ansam; /* SHORT_NAMED_ENUMERATED_VALUE */


/**
 * @summary Type_of_msg_t30_indicator_v8_signal
 * @constant
 * @type {number}
 */
export const Type_of_msg_t30_indicator_v8_signal: Type_of_msg_t30_indicator = 16; /* LONG_NAMED_ENUMERATED_VALUE */


/**
 * @summary v8_signal
 * @constant
 * @type {number}
 */
export const v8_signal: Type_of_msg_t30_indicator = Type_of_msg_t30_indicator_v8_signal; /* SHORT_NAMED_ENUMERATED_VALUE */


/**
 * @summary Type_of_msg_t30_indicator_v34_cntl_channel_1200
 * @constant
 * @type {number}
 */
export const Type_of_msg_t30_indicator_v34_cntl_channel_1200: Type_of_msg_t30_indicator = 16; /* LONG_NAMED_ENUMERATED_VALUE */


/**
 * @summary v34_cntl_channel_1200
 * @constant
 * @type {number}
 */
export const v34_cntl_channel_1200: Type_of_msg_t30_indicator = Type_of_msg_t30_indicator_v34_cntl_channel_1200; /* SHORT_NAMED_ENUMERATED_VALUE */


/**
 * @summary Type_of_msg_t30_indicator_v34_pri_channel
 * @constant
 * @type {number}
 */
export const Type_of_msg_t30_indicator_v34_pri_channel: Type_of_msg_t30_indicator = 16; /* LONG_NAMED_ENUMERATED_VALUE */


/**
 * @summary v34_pri_channel
 * @constant
 * @type {number}
 */
export const v34_pri_channel: Type_of_msg_t30_indicator = Type_of_msg_t30_indicator_v34_pri_channel; /* SHORT_NAMED_ENUMERATED_VALUE */


/**
 * @summary Type_of_msg_t30_indicator_v34_CC_retrain
 * @constant
 * @type {number}
 */
export const Type_of_msg_t30_indicator_v34_CC_retrain: Type_of_msg_t30_indicator = 16; /* LONG_NAMED_ENUMERATED_VALUE */


/**
 * @summary v34_CC_retrain
 * @constant
 * @type {number}
 */
export const v34_CC_retrain: Type_of_msg_t30_indicator = Type_of_msg_t30_indicator_v34_CC_retrain; /* SHORT_NAMED_ENUMERATED_VALUE */


/**
 * @summary Type_of_msg_t30_indicator_v33_12000_training
 * @constant
 * @type {number}
 */
export const Type_of_msg_t30_indicator_v33_12000_training: Type_of_msg_t30_indicator = 16; /* LONG_NAMED_ENUMERATED_VALUE */


/**
 * @summary v33_12000_training
 * @constant
 * @type {number}
 */
export const v33_12000_training: Type_of_msg_t30_indicator = Type_of_msg_t30_indicator_v33_12000_training; /* SHORT_NAMED_ENUMERATED_VALUE */


/**
 * @summary Type_of_msg_t30_indicator_v33_14400_training
 * @constant
 * @type {number}
 */
export const Type_of_msg_t30_indicator_v33_14400_training: Type_of_msg_t30_indicator = 16; /* LONG_NAMED_ENUMERATED_VALUE */


/**
 * @summary v33_14400_training
 * @constant
 * @type {number}
 */
export const v33_14400_training: Type_of_msg_t30_indicator = Type_of_msg_t30_indicator_v33_14400_training; /* SHORT_NAMED_ENUMERATED_VALUE */




export const _decode_Type_of_msg_t30_indicator = $._decodeEnumerated;




export const _encode_Type_of_msg_t30_indicator = $._encodeEnumerated;

