/* eslint-disable */
import {
  itu_t,
  itu_r,
  ccitt,
  iso,
  joint_iso_itu_t,
  joint_iso_ccitt,
  OPTIONAL,
  BOOLEAN,
  INTEGER,
  BIT_STRING,
  OCTET_STRING,
  NULL,
  OBJECT_IDENTIFIER,
  ObjectDescriptor,
  EXTERNAL,
  REAL,
  INSTANCE_OF,
  ENUMERATED,
  EMBEDDED_PDV,
  UTF8String,
  RELATIVE_OID,
  SEQUENCE,
  SEQUENCE_OF,
  SET,
  SET_OF,
  GraphicString,
  NumericString,
  VisibleString,
  PrintableString,
  ISO646String,
  TeletexString,
  GeneralString,
  T61String,
  UniversalString,
  VideotexString,
  BMPString,
  IA5String,
  CharacterString,
  UTCTime,
  GeneralizedTime,
  TIME,
  DATE,
  TIME_OF_DAY,
  DATE_TIME,
  DURATION,
  OID_IRI,
  RELATIVE_OID_IRI,
  TRUE,
  FALSE,
  TRUE_BIT,
  FALSE_BIT,
  PLUS_INFINITY,
  MINUS_INFINITY,
  NOT_A_NUMBER,
  TYPE_IDENTIFIER,
  ABSTRACT_SYNTAX,
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
import {
  Type_of_msg_t30_indicator,
  _enum_for_Type_of_msg_t30_indicator,
  Type_of_msg_t30_indicator_no_signal /* IMPORTED_LONG_ENUMERATION_ITEM */,
  no_signal /* IMPORTED_SHORT_ENUMERATION_ITEM */,
  Type_of_msg_t30_indicator_cng /* IMPORTED_LONG_ENUMERATION_ITEM */,
  cng /* IMPORTED_SHORT_ENUMERATION_ITEM */,
  Type_of_msg_t30_indicator_ced /* IMPORTED_LONG_ENUMERATION_ITEM */,
  ced /* IMPORTED_SHORT_ENUMERATION_ITEM */,
  Type_of_msg_t30_indicator_v21_preamble /* IMPORTED_LONG_ENUMERATION_ITEM */,
  v21_preamble /* IMPORTED_SHORT_ENUMERATION_ITEM */,
  Type_of_msg_t30_indicator_v27_2400_training /* IMPORTED_LONG_ENUMERATION_ITEM */,
  v27_2400_training /* IMPORTED_SHORT_ENUMERATION_ITEM */,
  Type_of_msg_t30_indicator_v27_4800_training /* IMPORTED_LONG_ENUMERATION_ITEM */,
  v27_4800_training /* IMPORTED_SHORT_ENUMERATION_ITEM */,
  Type_of_msg_t30_indicator_v29_7200_training /* IMPORTED_LONG_ENUMERATION_ITEM */,
  v29_7200_training /* IMPORTED_SHORT_ENUMERATION_ITEM */,
  Type_of_msg_t30_indicator_v29_9600_training /* IMPORTED_LONG_ENUMERATION_ITEM */,
  v29_9600_training /* IMPORTED_SHORT_ENUMERATION_ITEM */,
  Type_of_msg_t30_indicator_v17_7200_short_training /* IMPORTED_LONG_ENUMERATION_ITEM */,
  v17_7200_short_training /* IMPORTED_SHORT_ENUMERATION_ITEM */,
  Type_of_msg_t30_indicator_v17_7200_long_training /* IMPORTED_LONG_ENUMERATION_ITEM */,
  v17_7200_long_training /* IMPORTED_SHORT_ENUMERATION_ITEM */,
  Type_of_msg_t30_indicator_v17_9600_short_training /* IMPORTED_LONG_ENUMERATION_ITEM */,
  v17_9600_short_training /* IMPORTED_SHORT_ENUMERATION_ITEM */,
  Type_of_msg_t30_indicator_v17_9600_long_training /* IMPORTED_LONG_ENUMERATION_ITEM */,
  v17_9600_long_training /* IMPORTED_SHORT_ENUMERATION_ITEM */,
  Type_of_msg_t30_indicator_v17_12000_short_training /* IMPORTED_LONG_ENUMERATION_ITEM */,
  v17_12000_short_training /* IMPORTED_SHORT_ENUMERATION_ITEM */,
  Type_of_msg_t30_indicator_v17_12000_long_training /* IMPORTED_LONG_ENUMERATION_ITEM */,
  v17_12000_long_training /* IMPORTED_SHORT_ENUMERATION_ITEM */,
  Type_of_msg_t30_indicator_v17_14400_short_training /* IMPORTED_LONG_ENUMERATION_ITEM */,
  v17_14400_short_training /* IMPORTED_SHORT_ENUMERATION_ITEM */,
  Type_of_msg_t30_indicator_v17_14400_long_training /* IMPORTED_LONG_ENUMERATION_ITEM */,
  v17_14400_long_training /* IMPORTED_SHORT_ENUMERATION_ITEM */,
  Type_of_msg_t30_indicator_v8_ansam /* IMPORTED_LONG_ENUMERATION_ITEM */,
  v8_ansam /* IMPORTED_SHORT_ENUMERATION_ITEM */,
  Type_of_msg_t30_indicator_v8_signal /* IMPORTED_LONG_ENUMERATION_ITEM */,
  v8_signal /* IMPORTED_SHORT_ENUMERATION_ITEM */,
  Type_of_msg_t30_indicator_v34_cntl_channel_1200 /* IMPORTED_LONG_ENUMERATION_ITEM */,
  v34_cntl_channel_1200 /* IMPORTED_SHORT_ENUMERATION_ITEM */,
  Type_of_msg_t30_indicator_v34_pri_channel /* IMPORTED_LONG_ENUMERATION_ITEM */,
  v34_pri_channel /* IMPORTED_SHORT_ENUMERATION_ITEM */,
  Type_of_msg_t30_indicator_v34_CC_retrain /* IMPORTED_LONG_ENUMERATION_ITEM */,
  v34_CC_retrain /* IMPORTED_SHORT_ENUMERATION_ITEM */,
  Type_of_msg_t30_indicator_v33_12000_training /* IMPORTED_LONG_ENUMERATION_ITEM */,
  v33_12000_training /* IMPORTED_SHORT_ENUMERATION_ITEM */,
  Type_of_msg_t30_indicator_v33_14400_training /* IMPORTED_LONG_ENUMERATION_ITEM */,
  v33_14400_training /* IMPORTED_SHORT_ENUMERATION_ITEM */,
  _decode_Type_of_msg_t30_indicator,
  _encode_Type_of_msg_t30_indicator,
} from '../T38/Type-of-msg-t30-indicator.ta.js';
export {
  Type_of_msg_t30_indicator,
  _enum_for_Type_of_msg_t30_indicator,
  Type_of_msg_t30_indicator_no_signal /* IMPORTED_LONG_ENUMERATION_ITEM */,
  no_signal /* IMPORTED_SHORT_ENUMERATION_ITEM */,
  Type_of_msg_t30_indicator_cng /* IMPORTED_LONG_ENUMERATION_ITEM */,
  cng /* IMPORTED_SHORT_ENUMERATION_ITEM */,
  Type_of_msg_t30_indicator_ced /* IMPORTED_LONG_ENUMERATION_ITEM */,
  ced /* IMPORTED_SHORT_ENUMERATION_ITEM */,
  Type_of_msg_t30_indicator_v21_preamble /* IMPORTED_LONG_ENUMERATION_ITEM */,
  v21_preamble /* IMPORTED_SHORT_ENUMERATION_ITEM */,
  Type_of_msg_t30_indicator_v27_2400_training /* IMPORTED_LONG_ENUMERATION_ITEM */,
  v27_2400_training /* IMPORTED_SHORT_ENUMERATION_ITEM */,
  Type_of_msg_t30_indicator_v27_4800_training /* IMPORTED_LONG_ENUMERATION_ITEM */,
  v27_4800_training /* IMPORTED_SHORT_ENUMERATION_ITEM */,
  Type_of_msg_t30_indicator_v29_7200_training /* IMPORTED_LONG_ENUMERATION_ITEM */,
  v29_7200_training /* IMPORTED_SHORT_ENUMERATION_ITEM */,
  Type_of_msg_t30_indicator_v29_9600_training /* IMPORTED_LONG_ENUMERATION_ITEM */,
  v29_9600_training /* IMPORTED_SHORT_ENUMERATION_ITEM */,
  Type_of_msg_t30_indicator_v17_7200_short_training /* IMPORTED_LONG_ENUMERATION_ITEM */,
  v17_7200_short_training /* IMPORTED_SHORT_ENUMERATION_ITEM */,
  Type_of_msg_t30_indicator_v17_7200_long_training /* IMPORTED_LONG_ENUMERATION_ITEM */,
  v17_7200_long_training /* IMPORTED_SHORT_ENUMERATION_ITEM */,
  Type_of_msg_t30_indicator_v17_9600_short_training /* IMPORTED_LONG_ENUMERATION_ITEM */,
  v17_9600_short_training /* IMPORTED_SHORT_ENUMERATION_ITEM */,
  Type_of_msg_t30_indicator_v17_9600_long_training /* IMPORTED_LONG_ENUMERATION_ITEM */,
  v17_9600_long_training /* IMPORTED_SHORT_ENUMERATION_ITEM */,
  Type_of_msg_t30_indicator_v17_12000_short_training /* IMPORTED_LONG_ENUMERATION_ITEM */,
  v17_12000_short_training /* IMPORTED_SHORT_ENUMERATION_ITEM */,
  Type_of_msg_t30_indicator_v17_12000_long_training /* IMPORTED_LONG_ENUMERATION_ITEM */,
  v17_12000_long_training /* IMPORTED_SHORT_ENUMERATION_ITEM */,
  Type_of_msg_t30_indicator_v17_14400_short_training /* IMPORTED_LONG_ENUMERATION_ITEM */,
  v17_14400_short_training /* IMPORTED_SHORT_ENUMERATION_ITEM */,
  Type_of_msg_t30_indicator_v17_14400_long_training /* IMPORTED_LONG_ENUMERATION_ITEM */,
  v17_14400_long_training /* IMPORTED_SHORT_ENUMERATION_ITEM */,
  Type_of_msg_t30_indicator_v8_ansam /* IMPORTED_LONG_ENUMERATION_ITEM */,
  v8_ansam /* IMPORTED_SHORT_ENUMERATION_ITEM */,
  Type_of_msg_t30_indicator_v8_signal /* IMPORTED_LONG_ENUMERATION_ITEM */,
  v8_signal /* IMPORTED_SHORT_ENUMERATION_ITEM */,
  Type_of_msg_t30_indicator_v34_cntl_channel_1200 /* IMPORTED_LONG_ENUMERATION_ITEM */,
  v34_cntl_channel_1200 /* IMPORTED_SHORT_ENUMERATION_ITEM */,
  Type_of_msg_t30_indicator_v34_pri_channel /* IMPORTED_LONG_ENUMERATION_ITEM */,
  v34_pri_channel /* IMPORTED_SHORT_ENUMERATION_ITEM */,
  Type_of_msg_t30_indicator_v34_CC_retrain /* IMPORTED_LONG_ENUMERATION_ITEM */,
  v34_CC_retrain /* IMPORTED_SHORT_ENUMERATION_ITEM */,
  Type_of_msg_t30_indicator_v33_12000_training /* IMPORTED_LONG_ENUMERATION_ITEM */,
  v33_12000_training /* IMPORTED_SHORT_ENUMERATION_ITEM */,
  Type_of_msg_t30_indicator_v33_14400_training /* IMPORTED_LONG_ENUMERATION_ITEM */,
  v33_14400_training /* IMPORTED_SHORT_ENUMERATION_ITEM */,
  _decode_Type_of_msg_t30_indicator,
  _encode_Type_of_msg_t30_indicator,
} from '../T38/Type-of-msg-t30-indicator.ta.js';
import {
  Type_of_msg_t30_data,
  _enum_for_Type_of_msg_t30_data,
  Type_of_msg_t30_data_v21 /* IMPORTED_LONG_ENUMERATION_ITEM */,
  v21 /* IMPORTED_SHORT_ENUMERATION_ITEM */,
  Type_of_msg_t30_data_v27_2400 /* IMPORTED_LONG_ENUMERATION_ITEM */,
  v27_2400 /* IMPORTED_SHORT_ENUMERATION_ITEM */,
  Type_of_msg_t30_data_v27_4800 /* IMPORTED_LONG_ENUMERATION_ITEM */,
  v27_4800 /* IMPORTED_SHORT_ENUMERATION_ITEM */,
  Type_of_msg_t30_data_v29_7200 /* IMPORTED_LONG_ENUMERATION_ITEM */,
  v29_7200 /* IMPORTED_SHORT_ENUMERATION_ITEM */,
  Type_of_msg_t30_data_v29_9600 /* IMPORTED_LONG_ENUMERATION_ITEM */,
  v29_9600 /* IMPORTED_SHORT_ENUMERATION_ITEM */,
  Type_of_msg_t30_data_v17_7200 /* IMPORTED_LONG_ENUMERATION_ITEM */,
  v17_7200 /* IMPORTED_SHORT_ENUMERATION_ITEM */,
  Type_of_msg_t30_data_v17_9600 /* IMPORTED_LONG_ENUMERATION_ITEM */,
  v17_9600 /* IMPORTED_SHORT_ENUMERATION_ITEM */,
  Type_of_msg_t30_data_v17_12000 /* IMPORTED_LONG_ENUMERATION_ITEM */,
  v17_12000 /* IMPORTED_SHORT_ENUMERATION_ITEM */,
  Type_of_msg_t30_data_v17_14400 /* IMPORTED_LONG_ENUMERATION_ITEM */,
  v17_14400 /* IMPORTED_SHORT_ENUMERATION_ITEM */,
  Type_of_msg_t30_data_v8 /* IMPORTED_LONG_ENUMERATION_ITEM */,
  v8 /* IMPORTED_SHORT_ENUMERATION_ITEM */,
  Type_of_msg_t30_data_v34_pri_rate /* IMPORTED_LONG_ENUMERATION_ITEM */,
  v34_pri_rate /* IMPORTED_SHORT_ENUMERATION_ITEM */,
  Type_of_msg_t30_data_v34_CC_1200 /* IMPORTED_LONG_ENUMERATION_ITEM */,
  v34_CC_1200 /* IMPORTED_SHORT_ENUMERATION_ITEM */,
  Type_of_msg_t30_data_v34_pri_ch /* IMPORTED_LONG_ENUMERATION_ITEM */,
  v34_pri_ch /* IMPORTED_SHORT_ENUMERATION_ITEM */,
  Type_of_msg_t30_data_v33_12000 /* IMPORTED_LONG_ENUMERATION_ITEM */,
  v33_12000 /* IMPORTED_SHORT_ENUMERATION_ITEM */,
  Type_of_msg_t30_data_v33_14400 /* IMPORTED_LONG_ENUMERATION_ITEM */,
  v33_14400 /* IMPORTED_SHORT_ENUMERATION_ITEM */,
  _decode_Type_of_msg_t30_data,
  _encode_Type_of_msg_t30_data,
} from '../T38/Type-of-msg-t30-data.ta.js';
export {
  Type_of_msg_t30_data,
  _enum_for_Type_of_msg_t30_data,
  Type_of_msg_t30_data_v21 /* IMPORTED_LONG_ENUMERATION_ITEM */,
  v21 /* IMPORTED_SHORT_ENUMERATION_ITEM */,
  Type_of_msg_t30_data_v27_2400 /* IMPORTED_LONG_ENUMERATION_ITEM */,
  v27_2400 /* IMPORTED_SHORT_ENUMERATION_ITEM */,
  Type_of_msg_t30_data_v27_4800 /* IMPORTED_LONG_ENUMERATION_ITEM */,
  v27_4800 /* IMPORTED_SHORT_ENUMERATION_ITEM */,
  Type_of_msg_t30_data_v29_7200 /* IMPORTED_LONG_ENUMERATION_ITEM */,
  v29_7200 /* IMPORTED_SHORT_ENUMERATION_ITEM */,
  Type_of_msg_t30_data_v29_9600 /* IMPORTED_LONG_ENUMERATION_ITEM */,
  v29_9600 /* IMPORTED_SHORT_ENUMERATION_ITEM */,
  Type_of_msg_t30_data_v17_7200 /* IMPORTED_LONG_ENUMERATION_ITEM */,
  v17_7200 /* IMPORTED_SHORT_ENUMERATION_ITEM */,
  Type_of_msg_t30_data_v17_9600 /* IMPORTED_LONG_ENUMERATION_ITEM */,
  v17_9600 /* IMPORTED_SHORT_ENUMERATION_ITEM */,
  Type_of_msg_t30_data_v17_12000 /* IMPORTED_LONG_ENUMERATION_ITEM */,
  v17_12000 /* IMPORTED_SHORT_ENUMERATION_ITEM */,
  Type_of_msg_t30_data_v17_14400 /* IMPORTED_LONG_ENUMERATION_ITEM */,
  v17_14400 /* IMPORTED_SHORT_ENUMERATION_ITEM */,
  Type_of_msg_t30_data_v8 /* IMPORTED_LONG_ENUMERATION_ITEM */,
  v8 /* IMPORTED_SHORT_ENUMERATION_ITEM */,
  Type_of_msg_t30_data_v34_pri_rate /* IMPORTED_LONG_ENUMERATION_ITEM */,
  v34_pri_rate /* IMPORTED_SHORT_ENUMERATION_ITEM */,
  Type_of_msg_t30_data_v34_CC_1200 /* IMPORTED_LONG_ENUMERATION_ITEM */,
  v34_CC_1200 /* IMPORTED_SHORT_ENUMERATION_ITEM */,
  Type_of_msg_t30_data_v34_pri_ch /* IMPORTED_LONG_ENUMERATION_ITEM */,
  v34_pri_ch /* IMPORTED_SHORT_ENUMERATION_ITEM */,
  Type_of_msg_t30_data_v33_12000 /* IMPORTED_LONG_ENUMERATION_ITEM */,
  v33_12000 /* IMPORTED_SHORT_ENUMERATION_ITEM */,
  Type_of_msg_t30_data_v33_14400 /* IMPORTED_LONG_ENUMERATION_ITEM */,
  v33_14400 /* IMPORTED_SHORT_ENUMERATION_ITEM */,
  _decode_Type_of_msg_t30_data,
  _encode_Type_of_msg_t30_data,
} from '../T38/Type-of-msg-t30-data.ta.js';

/* START_OF_SYMBOL_DEFINITION Type_of_msg */
/**
 * @summary Type_of_msg
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * Type-of-msg  ::=  CHOICE {
 *   t30-indicator
 *     ENUMERATED {no-signal, cng, ced, v21-preamble, v27-2400-training,
 *                 v27-4800-training, v29-7200-training, v29-9600-training,
 *                 v17-7200-short-training, v17-7200-long-training,
 *                 v17-9600-short-training, v17-9600-long-training,
 *                 v17-12000-short-training, v17-12000-long-training,
 *                 v17-14400-short-training, v17-14400-long-training, ...,
 *                 v8-ansam, v8-signal, v34-cntl-channel-1200, v34-pri-channel,
 *                 v34-CC-retrain, v33-12000-training, v33-14400-training},
 *   t30-data
 *     ENUMERATED {v21, v27-2400, v27-4800, v29-7200, v29-9600, v17-7200,
 *                 v17-9600, v17-12000, v17-14400, ...,
 *                 v8, v34-pri-rate, v34-CC-1200, v34-pri-ch, v33-12000, v33-14400}
 * }
 * ```
 */
export type Type_of_msg =
  | { t30_indicator: Type_of_msg_t30_indicator } /* CHOICE_ALT_ROOT */
  | { t30_data: Type_of_msg_t30_data } /* CHOICE_ALT_ROOT */;
/* END_OF_SYMBOL_DEFINITION Type_of_msg */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_Type_of_msg */
let _cached_decoder_for_Type_of_msg: $.ASN1Decoder<Type_of_msg> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_Type_of_msg */

/* START_OF_SYMBOL_DEFINITION _decode_Type_of_msg */
/**
 * @summary Decodes an ASN.1 element into a(n) Type_of_msg
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {Type_of_msg} The decoded data structure.
 */
export function _decode_Type_of_msg(el: _Element) {
  if (!_cached_decoder_for_Type_of_msg) {
    _cached_decoder_for_Type_of_msg = $._decode_inextensible_choice<Type_of_msg>(
      {
        'CONTEXT 0': ['t30_indicator', _decode_Type_of_msg_t30_indicator],
        'CONTEXT 1': ['t30_data', _decode_Type_of_msg_t30_data],
      }
    );
  }
  return _cached_decoder_for_Type_of_msg(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_Type_of_msg */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_Type_of_msg */
let _cached_encoder_for_Type_of_msg: $.ASN1Encoder<Type_of_msg> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_Type_of_msg */

/* START_OF_SYMBOL_DEFINITION _encode_Type_of_msg */
/**
 * @summary Encodes a(n) Type_of_msg into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The Type_of_msg, encoded as an ASN.1 Element.
 */
export function _encode_Type_of_msg(
  value: Type_of_msg,
  elGetter: $.ASN1Encoder<Type_of_msg>
) {
  if (!_cached_encoder_for_Type_of_msg) {
    _cached_encoder_for_Type_of_msg = $._encode_choice<Type_of_msg>(
      {
        t30_indicator: _encode_Type_of_msg_t30_indicator,
        t30_data: _encode_Type_of_msg_t30_data,
      },
      $.BER
    );
  }
  return _cached_encoder_for_Type_of_msg(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_Type_of_msg */

/* eslint-enable */
