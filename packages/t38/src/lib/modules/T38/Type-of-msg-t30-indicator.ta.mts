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

/* START_OF_SYMBOL_DEFINITION _enum_for_Type_of_msg_t30_indicator */
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
/* END_OF_SYMBOL_DEFINITION _enum_for_Type_of_msg_t30_indicator */

/* START_OF_SYMBOL_DEFINITION Type_of_msg_t30_indicator */
/**
 * @summary Type_of_msg_t30_indicator
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * Type-of-msg-t30-indicator ::= ENUMERATED { -- REMOVED_FROM_UNNESTING -- }
 * ```@enum {number}
 */
export type Type_of_msg_t30_indicator =
  | _enum_for_Type_of_msg_t30_indicator
  | ENUMERATED;
/* END_OF_SYMBOL_DEFINITION Type_of_msg_t30_indicator */

/* START_OF_SYMBOL_DEFINITION Type_of_msg_t30_indicator_no_signal */
/**
 * @summary Type_of_msg_t30_indicator_no_signal
 * @constant
 * @type {number}
 */
export const Type_of_msg_t30_indicator_no_signal: Type_of_msg_t30_indicator = 0; /* LONG_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION Type_of_msg_t30_indicator_no_signal */

/* START_OF_SYMBOL_DEFINITION no_signal */
/**
 * @summary no_signal
 * @constant
 * @type {number}
 */
export const no_signal: Type_of_msg_t30_indicator = Type_of_msg_t30_indicator_no_signal; /* SHORT_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION no_signal */

/* START_OF_SYMBOL_DEFINITION Type_of_msg_t30_indicator_cng */
/**
 * @summary Type_of_msg_t30_indicator_cng
 * @constant
 * @type {number}
 */
export const Type_of_msg_t30_indicator_cng: Type_of_msg_t30_indicator = 1; /* LONG_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION Type_of_msg_t30_indicator_cng */

/* START_OF_SYMBOL_DEFINITION cng */
/**
 * @summary cng
 * @constant
 * @type {number}
 */
export const cng: Type_of_msg_t30_indicator = Type_of_msg_t30_indicator_cng; /* SHORT_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION cng */

/* START_OF_SYMBOL_DEFINITION Type_of_msg_t30_indicator_ced */
/**
 * @summary Type_of_msg_t30_indicator_ced
 * @constant
 * @type {number}
 */
export const Type_of_msg_t30_indicator_ced: Type_of_msg_t30_indicator = 2; /* LONG_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION Type_of_msg_t30_indicator_ced */

/* START_OF_SYMBOL_DEFINITION ced */
/**
 * @summary ced
 * @constant
 * @type {number}
 */
export const ced: Type_of_msg_t30_indicator = Type_of_msg_t30_indicator_ced; /* SHORT_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION ced */

/* START_OF_SYMBOL_DEFINITION Type_of_msg_t30_indicator_v21_preamble */
/**
 * @summary Type_of_msg_t30_indicator_v21_preamble
 * @constant
 * @type {number}
 */
export const Type_of_msg_t30_indicator_v21_preamble: Type_of_msg_t30_indicator = 3; /* LONG_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION Type_of_msg_t30_indicator_v21_preamble */

/* START_OF_SYMBOL_DEFINITION v21_preamble */
/**
 * @summary v21_preamble
 * @constant
 * @type {number}
 */
export const v21_preamble: Type_of_msg_t30_indicator = Type_of_msg_t30_indicator_v21_preamble; /* SHORT_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION v21_preamble */

/* START_OF_SYMBOL_DEFINITION Type_of_msg_t30_indicator_v27_2400_training */
/**
 * @summary Type_of_msg_t30_indicator_v27_2400_training
 * @constant
 * @type {number}
 */
export const Type_of_msg_t30_indicator_v27_2400_training: Type_of_msg_t30_indicator = 4; /* LONG_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION Type_of_msg_t30_indicator_v27_2400_training */

/* START_OF_SYMBOL_DEFINITION v27_2400_training */
/**
 * @summary v27_2400_training
 * @constant
 * @type {number}
 */
export const v27_2400_training: Type_of_msg_t30_indicator = Type_of_msg_t30_indicator_v27_2400_training; /* SHORT_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION v27_2400_training */

/* START_OF_SYMBOL_DEFINITION Type_of_msg_t30_indicator_v27_4800_training */
/**
 * @summary Type_of_msg_t30_indicator_v27_4800_training
 * @constant
 * @type {number}
 */
export const Type_of_msg_t30_indicator_v27_4800_training: Type_of_msg_t30_indicator = 5; /* LONG_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION Type_of_msg_t30_indicator_v27_4800_training */

/* START_OF_SYMBOL_DEFINITION v27_4800_training */
/**
 * @summary v27_4800_training
 * @constant
 * @type {number}
 */
export const v27_4800_training: Type_of_msg_t30_indicator = Type_of_msg_t30_indicator_v27_4800_training; /* SHORT_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION v27_4800_training */

/* START_OF_SYMBOL_DEFINITION Type_of_msg_t30_indicator_v29_7200_training */
/**
 * @summary Type_of_msg_t30_indicator_v29_7200_training
 * @constant
 * @type {number}
 */
export const Type_of_msg_t30_indicator_v29_7200_training: Type_of_msg_t30_indicator = 6; /* LONG_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION Type_of_msg_t30_indicator_v29_7200_training */

/* START_OF_SYMBOL_DEFINITION v29_7200_training */
/**
 * @summary v29_7200_training
 * @constant
 * @type {number}
 */
export const v29_7200_training: Type_of_msg_t30_indicator = Type_of_msg_t30_indicator_v29_7200_training; /* SHORT_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION v29_7200_training */

/* START_OF_SYMBOL_DEFINITION Type_of_msg_t30_indicator_v29_9600_training */
/**
 * @summary Type_of_msg_t30_indicator_v29_9600_training
 * @constant
 * @type {number}
 */
export const Type_of_msg_t30_indicator_v29_9600_training: Type_of_msg_t30_indicator = 7; /* LONG_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION Type_of_msg_t30_indicator_v29_9600_training */

/* START_OF_SYMBOL_DEFINITION v29_9600_training */
/**
 * @summary v29_9600_training
 * @constant
 * @type {number}
 */
export const v29_9600_training: Type_of_msg_t30_indicator = Type_of_msg_t30_indicator_v29_9600_training; /* SHORT_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION v29_9600_training */

/* START_OF_SYMBOL_DEFINITION Type_of_msg_t30_indicator_v17_7200_short_training */
/**
 * @summary Type_of_msg_t30_indicator_v17_7200_short_training
 * @constant
 * @type {number}
 */
export const Type_of_msg_t30_indicator_v17_7200_short_training: Type_of_msg_t30_indicator = 8; /* LONG_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION Type_of_msg_t30_indicator_v17_7200_short_training */

/* START_OF_SYMBOL_DEFINITION v17_7200_short_training */
/**
 * @summary v17_7200_short_training
 * @constant
 * @type {number}
 */
export const v17_7200_short_training: Type_of_msg_t30_indicator = Type_of_msg_t30_indicator_v17_7200_short_training; /* SHORT_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION v17_7200_short_training */

/* START_OF_SYMBOL_DEFINITION Type_of_msg_t30_indicator_v17_7200_long_training */
/**
 * @summary Type_of_msg_t30_indicator_v17_7200_long_training
 * @constant
 * @type {number}
 */
export const Type_of_msg_t30_indicator_v17_7200_long_training: Type_of_msg_t30_indicator = 9; /* LONG_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION Type_of_msg_t30_indicator_v17_7200_long_training */

/* START_OF_SYMBOL_DEFINITION v17_7200_long_training */
/**
 * @summary v17_7200_long_training
 * @constant
 * @type {number}
 */
export const v17_7200_long_training: Type_of_msg_t30_indicator = Type_of_msg_t30_indicator_v17_7200_long_training; /* SHORT_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION v17_7200_long_training */

/* START_OF_SYMBOL_DEFINITION Type_of_msg_t30_indicator_v17_9600_short_training */
/**
 * @summary Type_of_msg_t30_indicator_v17_9600_short_training
 * @constant
 * @type {number}
 */
export const Type_of_msg_t30_indicator_v17_9600_short_training: Type_of_msg_t30_indicator = 10; /* LONG_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION Type_of_msg_t30_indicator_v17_9600_short_training */

/* START_OF_SYMBOL_DEFINITION v17_9600_short_training */
/**
 * @summary v17_9600_short_training
 * @constant
 * @type {number}
 */
export const v17_9600_short_training: Type_of_msg_t30_indicator = Type_of_msg_t30_indicator_v17_9600_short_training; /* SHORT_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION v17_9600_short_training */

/* START_OF_SYMBOL_DEFINITION Type_of_msg_t30_indicator_v17_9600_long_training */
/**
 * @summary Type_of_msg_t30_indicator_v17_9600_long_training
 * @constant
 * @type {number}
 */
export const Type_of_msg_t30_indicator_v17_9600_long_training: Type_of_msg_t30_indicator = 11; /* LONG_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION Type_of_msg_t30_indicator_v17_9600_long_training */

/* START_OF_SYMBOL_DEFINITION v17_9600_long_training */
/**
 * @summary v17_9600_long_training
 * @constant
 * @type {number}
 */
export const v17_9600_long_training: Type_of_msg_t30_indicator = Type_of_msg_t30_indicator_v17_9600_long_training; /* SHORT_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION v17_9600_long_training */

/* START_OF_SYMBOL_DEFINITION Type_of_msg_t30_indicator_v17_12000_short_training */
/**
 * @summary Type_of_msg_t30_indicator_v17_12000_short_training
 * @constant
 * @type {number}
 */
export const Type_of_msg_t30_indicator_v17_12000_short_training: Type_of_msg_t30_indicator = 12; /* LONG_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION Type_of_msg_t30_indicator_v17_12000_short_training */

/* START_OF_SYMBOL_DEFINITION v17_12000_short_training */
/**
 * @summary v17_12000_short_training
 * @constant
 * @type {number}
 */
export const v17_12000_short_training: Type_of_msg_t30_indicator = Type_of_msg_t30_indicator_v17_12000_short_training; /* SHORT_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION v17_12000_short_training */

/* START_OF_SYMBOL_DEFINITION Type_of_msg_t30_indicator_v17_12000_long_training */
/**
 * @summary Type_of_msg_t30_indicator_v17_12000_long_training
 * @constant
 * @type {number}
 */
export const Type_of_msg_t30_indicator_v17_12000_long_training: Type_of_msg_t30_indicator = 13; /* LONG_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION Type_of_msg_t30_indicator_v17_12000_long_training */

/* START_OF_SYMBOL_DEFINITION v17_12000_long_training */
/**
 * @summary v17_12000_long_training
 * @constant
 * @type {number}
 */
export const v17_12000_long_training: Type_of_msg_t30_indicator = Type_of_msg_t30_indicator_v17_12000_long_training; /* SHORT_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION v17_12000_long_training */

/* START_OF_SYMBOL_DEFINITION Type_of_msg_t30_indicator_v17_14400_short_training */
/**
 * @summary Type_of_msg_t30_indicator_v17_14400_short_training
 * @constant
 * @type {number}
 */
export const Type_of_msg_t30_indicator_v17_14400_short_training: Type_of_msg_t30_indicator = 14; /* LONG_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION Type_of_msg_t30_indicator_v17_14400_short_training */

/* START_OF_SYMBOL_DEFINITION v17_14400_short_training */
/**
 * @summary v17_14400_short_training
 * @constant
 * @type {number}
 */
export const v17_14400_short_training: Type_of_msg_t30_indicator = Type_of_msg_t30_indicator_v17_14400_short_training; /* SHORT_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION v17_14400_short_training */

/* START_OF_SYMBOL_DEFINITION Type_of_msg_t30_indicator_v17_14400_long_training */
/**
 * @summary Type_of_msg_t30_indicator_v17_14400_long_training
 * @constant
 * @type {number}
 */
export const Type_of_msg_t30_indicator_v17_14400_long_training: Type_of_msg_t30_indicator = 15; /* LONG_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION Type_of_msg_t30_indicator_v17_14400_long_training */

/* START_OF_SYMBOL_DEFINITION v17_14400_long_training */
/**
 * @summary v17_14400_long_training
 * @constant
 * @type {number}
 */
export const v17_14400_long_training: Type_of_msg_t30_indicator = Type_of_msg_t30_indicator_v17_14400_long_training; /* SHORT_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION v17_14400_long_training */

/* START_OF_SYMBOL_DEFINITION Type_of_msg_t30_indicator_v8_ansam */
/**
 * @summary Type_of_msg_t30_indicator_v8_ansam
 * @constant
 * @type {number}
 */
export const Type_of_msg_t30_indicator_v8_ansam: Type_of_msg_t30_indicator = 16; /* LONG_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION Type_of_msg_t30_indicator_v8_ansam */

/* START_OF_SYMBOL_DEFINITION v8_ansam */
/**
 * @summary v8_ansam
 * @constant
 * @type {number}
 */
export const v8_ansam: Type_of_msg_t30_indicator = Type_of_msg_t30_indicator_v8_ansam; /* SHORT_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION v8_ansam */

/* START_OF_SYMBOL_DEFINITION Type_of_msg_t30_indicator_v8_signal */
/**
 * @summary Type_of_msg_t30_indicator_v8_signal
 * @constant
 * @type {number}
 */
export const Type_of_msg_t30_indicator_v8_signal: Type_of_msg_t30_indicator = 16; /* LONG_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION Type_of_msg_t30_indicator_v8_signal */

/* START_OF_SYMBOL_DEFINITION v8_signal */
/**
 * @summary v8_signal
 * @constant
 * @type {number}
 */
export const v8_signal: Type_of_msg_t30_indicator = Type_of_msg_t30_indicator_v8_signal; /* SHORT_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION v8_signal */

/* START_OF_SYMBOL_DEFINITION Type_of_msg_t30_indicator_v34_cntl_channel_1200 */
/**
 * @summary Type_of_msg_t30_indicator_v34_cntl_channel_1200
 * @constant
 * @type {number}
 */
export const Type_of_msg_t30_indicator_v34_cntl_channel_1200: Type_of_msg_t30_indicator = 16; /* LONG_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION Type_of_msg_t30_indicator_v34_cntl_channel_1200 */

/* START_OF_SYMBOL_DEFINITION v34_cntl_channel_1200 */
/**
 * @summary v34_cntl_channel_1200
 * @constant
 * @type {number}
 */
export const v34_cntl_channel_1200: Type_of_msg_t30_indicator = Type_of_msg_t30_indicator_v34_cntl_channel_1200; /* SHORT_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION v34_cntl_channel_1200 */

/* START_OF_SYMBOL_DEFINITION Type_of_msg_t30_indicator_v34_pri_channel */
/**
 * @summary Type_of_msg_t30_indicator_v34_pri_channel
 * @constant
 * @type {number}
 */
export const Type_of_msg_t30_indicator_v34_pri_channel: Type_of_msg_t30_indicator = 16; /* LONG_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION Type_of_msg_t30_indicator_v34_pri_channel */

/* START_OF_SYMBOL_DEFINITION v34_pri_channel */
/**
 * @summary v34_pri_channel
 * @constant
 * @type {number}
 */
export const v34_pri_channel: Type_of_msg_t30_indicator = Type_of_msg_t30_indicator_v34_pri_channel; /* SHORT_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION v34_pri_channel */

/* START_OF_SYMBOL_DEFINITION Type_of_msg_t30_indicator_v34_CC_retrain */
/**
 * @summary Type_of_msg_t30_indicator_v34_CC_retrain
 * @constant
 * @type {number}
 */
export const Type_of_msg_t30_indicator_v34_CC_retrain: Type_of_msg_t30_indicator = 16; /* LONG_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION Type_of_msg_t30_indicator_v34_CC_retrain */

/* START_OF_SYMBOL_DEFINITION v34_CC_retrain */
/**
 * @summary v34_CC_retrain
 * @constant
 * @type {number}
 */
export const v34_CC_retrain: Type_of_msg_t30_indicator = Type_of_msg_t30_indicator_v34_CC_retrain; /* SHORT_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION v34_CC_retrain */

/* START_OF_SYMBOL_DEFINITION Type_of_msg_t30_indicator_v33_12000_training */
/**
 * @summary Type_of_msg_t30_indicator_v33_12000_training
 * @constant
 * @type {number}
 */
export const Type_of_msg_t30_indicator_v33_12000_training: Type_of_msg_t30_indicator = 16; /* LONG_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION Type_of_msg_t30_indicator_v33_12000_training */

/* START_OF_SYMBOL_DEFINITION v33_12000_training */
/**
 * @summary v33_12000_training
 * @constant
 * @type {number}
 */
export const v33_12000_training: Type_of_msg_t30_indicator = Type_of_msg_t30_indicator_v33_12000_training; /* SHORT_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION v33_12000_training */

/* START_OF_SYMBOL_DEFINITION Type_of_msg_t30_indicator_v33_14400_training */
/**
 * @summary Type_of_msg_t30_indicator_v33_14400_training
 * @constant
 * @type {number}
 */
export const Type_of_msg_t30_indicator_v33_14400_training: Type_of_msg_t30_indicator = 16; /* LONG_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION Type_of_msg_t30_indicator_v33_14400_training */

/* START_OF_SYMBOL_DEFINITION v33_14400_training */
/**
 * @summary v33_14400_training
 * @constant
 * @type {number}
 */
export const v33_14400_training: Type_of_msg_t30_indicator = Type_of_msg_t30_indicator_v33_14400_training; /* SHORT_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION v33_14400_training */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_Type_of_msg_t30_indicator */
let _cached_decoder_for_Type_of_msg_t30_indicator: $.ASN1Decoder<Type_of_msg_t30_indicator> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_Type_of_msg_t30_indicator */

/* START_OF_SYMBOL_DEFINITION _decode_Type_of_msg_t30_indicator */
/**
 * @summary Decodes an ASN.1 element into a(n) Type_of_msg_t30_indicator
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {Type_of_msg_t30_indicator} The decoded data structure.
 */
export function _decode_Type_of_msg_t30_indicator(el: _Element) {
  if (!_cached_decoder_for_Type_of_msg_t30_indicator) {
    _cached_decoder_for_Type_of_msg_t30_indicator = $._decodeEnumerated;
  }
  return _cached_decoder_for_Type_of_msg_t30_indicator(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_Type_of_msg_t30_indicator */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_Type_of_msg_t30_indicator */
let _cached_encoder_for_Type_of_msg_t30_indicator: $.ASN1Encoder<Type_of_msg_t30_indicator> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_Type_of_msg_t30_indicator */

/* START_OF_SYMBOL_DEFINITION _encode_Type_of_msg_t30_indicator */
/**
 * @summary Encodes a(n) Type_of_msg_t30_indicator into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The Type_of_msg_t30_indicator, encoded as an ASN.1 Element.
 */
export function _encode_Type_of_msg_t30_indicator(
  value: Type_of_msg_t30_indicator,
  elGetter: $.ASN1Encoder<Type_of_msg_t30_indicator>
) {
  if (!_cached_encoder_for_Type_of_msg_t30_indicator) {
    _cached_encoder_for_Type_of_msg_t30_indicator = $._encodeEnumerated;
  }
  return _cached_encoder_for_Type_of_msg_t30_indicator(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_Type_of_msg_t30_indicator */

/* eslint-enable */
