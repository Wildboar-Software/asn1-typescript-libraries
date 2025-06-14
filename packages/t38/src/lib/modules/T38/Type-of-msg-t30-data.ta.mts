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

/* START_OF_SYMBOL_DEFINITION _enum_for_Type_of_msg_t30_data */
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
/* END_OF_SYMBOL_DEFINITION _enum_for_Type_of_msg_t30_data */

/* START_OF_SYMBOL_DEFINITION Type_of_msg_t30_data */
/**
 * @summary Type_of_msg_t30_data
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * Type-of-msg-t30-data ::= ENUMERATED { -- REMOVED_FROM_UNNESTING -- }
 * ```@enum {number}
 */
export type Type_of_msg_t30_data = _enum_for_Type_of_msg_t30_data | ENUMERATED;
/* END_OF_SYMBOL_DEFINITION Type_of_msg_t30_data */

/* START_OF_SYMBOL_DEFINITION Type_of_msg_t30_data_v21 */
/**
 * @summary Type_of_msg_t30_data_v21
 * @constant
 * @type {number}
 */
export const Type_of_msg_t30_data_v21: Type_of_msg_t30_data = 0; /* LONG_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION Type_of_msg_t30_data_v21 */

/* START_OF_SYMBOL_DEFINITION v21 */
/**
 * @summary v21
 * @constant
 * @type {number}
 */
export const v21: Type_of_msg_t30_data = Type_of_msg_t30_data_v21; /* SHORT_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION v21 */

/* START_OF_SYMBOL_DEFINITION Type_of_msg_t30_data_v27_2400 */
/**
 * @summary Type_of_msg_t30_data_v27_2400
 * @constant
 * @type {number}
 */
export const Type_of_msg_t30_data_v27_2400: Type_of_msg_t30_data = 1; /* LONG_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION Type_of_msg_t30_data_v27_2400 */

/* START_OF_SYMBOL_DEFINITION v27_2400 */
/**
 * @summary v27_2400
 * @constant
 * @type {number}
 */
export const v27_2400: Type_of_msg_t30_data = Type_of_msg_t30_data_v27_2400; /* SHORT_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION v27_2400 */

/* START_OF_SYMBOL_DEFINITION Type_of_msg_t30_data_v27_4800 */
/**
 * @summary Type_of_msg_t30_data_v27_4800
 * @constant
 * @type {number}
 */
export const Type_of_msg_t30_data_v27_4800: Type_of_msg_t30_data = 2; /* LONG_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION Type_of_msg_t30_data_v27_4800 */

/* START_OF_SYMBOL_DEFINITION v27_4800 */
/**
 * @summary v27_4800
 * @constant
 * @type {number}
 */
export const v27_4800: Type_of_msg_t30_data = Type_of_msg_t30_data_v27_4800; /* SHORT_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION v27_4800 */

/* START_OF_SYMBOL_DEFINITION Type_of_msg_t30_data_v29_7200 */
/**
 * @summary Type_of_msg_t30_data_v29_7200
 * @constant
 * @type {number}
 */
export const Type_of_msg_t30_data_v29_7200: Type_of_msg_t30_data = 3; /* LONG_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION Type_of_msg_t30_data_v29_7200 */

/* START_OF_SYMBOL_DEFINITION v29_7200 */
/**
 * @summary v29_7200
 * @constant
 * @type {number}
 */
export const v29_7200: Type_of_msg_t30_data = Type_of_msg_t30_data_v29_7200; /* SHORT_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION v29_7200 */

/* START_OF_SYMBOL_DEFINITION Type_of_msg_t30_data_v29_9600 */
/**
 * @summary Type_of_msg_t30_data_v29_9600
 * @constant
 * @type {number}
 */
export const Type_of_msg_t30_data_v29_9600: Type_of_msg_t30_data = 4; /* LONG_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION Type_of_msg_t30_data_v29_9600 */

/* START_OF_SYMBOL_DEFINITION v29_9600 */
/**
 * @summary v29_9600
 * @constant
 * @type {number}
 */
export const v29_9600: Type_of_msg_t30_data = Type_of_msg_t30_data_v29_9600; /* SHORT_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION v29_9600 */

/* START_OF_SYMBOL_DEFINITION Type_of_msg_t30_data_v17_7200 */
/**
 * @summary Type_of_msg_t30_data_v17_7200
 * @constant
 * @type {number}
 */
export const Type_of_msg_t30_data_v17_7200: Type_of_msg_t30_data = 5; /* LONG_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION Type_of_msg_t30_data_v17_7200 */

/* START_OF_SYMBOL_DEFINITION v17_7200 */
/**
 * @summary v17_7200
 * @constant
 * @type {number}
 */
export const v17_7200: Type_of_msg_t30_data = Type_of_msg_t30_data_v17_7200; /* SHORT_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION v17_7200 */

/* START_OF_SYMBOL_DEFINITION Type_of_msg_t30_data_v17_9600 */
/**
 * @summary Type_of_msg_t30_data_v17_9600
 * @constant
 * @type {number}
 */
export const Type_of_msg_t30_data_v17_9600: Type_of_msg_t30_data = 6; /* LONG_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION Type_of_msg_t30_data_v17_9600 */

/* START_OF_SYMBOL_DEFINITION v17_9600 */
/**
 * @summary v17_9600
 * @constant
 * @type {number}
 */
export const v17_9600: Type_of_msg_t30_data = Type_of_msg_t30_data_v17_9600; /* SHORT_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION v17_9600 */

/* START_OF_SYMBOL_DEFINITION Type_of_msg_t30_data_v17_12000 */
/**
 * @summary Type_of_msg_t30_data_v17_12000
 * @constant
 * @type {number}
 */
export const Type_of_msg_t30_data_v17_12000: Type_of_msg_t30_data = 7; /* LONG_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION Type_of_msg_t30_data_v17_12000 */

/* START_OF_SYMBOL_DEFINITION v17_12000 */
/**
 * @summary v17_12000
 * @constant
 * @type {number}
 */
export const v17_12000: Type_of_msg_t30_data = Type_of_msg_t30_data_v17_12000; /* SHORT_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION v17_12000 */

/* START_OF_SYMBOL_DEFINITION Type_of_msg_t30_data_v17_14400 */
/**
 * @summary Type_of_msg_t30_data_v17_14400
 * @constant
 * @type {number}
 */
export const Type_of_msg_t30_data_v17_14400: Type_of_msg_t30_data = 8; /* LONG_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION Type_of_msg_t30_data_v17_14400 */

/* START_OF_SYMBOL_DEFINITION v17_14400 */
/**
 * @summary v17_14400
 * @constant
 * @type {number}
 */
export const v17_14400: Type_of_msg_t30_data = Type_of_msg_t30_data_v17_14400; /* SHORT_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION v17_14400 */

/* START_OF_SYMBOL_DEFINITION Type_of_msg_t30_data_v8 */
/**
 * @summary Type_of_msg_t30_data_v8
 * @constant
 * @type {number}
 */
export const Type_of_msg_t30_data_v8: Type_of_msg_t30_data = 9; /* LONG_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION Type_of_msg_t30_data_v8 */

/* START_OF_SYMBOL_DEFINITION v8 */
/**
 * @summary v8
 * @constant
 * @type {number}
 */
export const v8: Type_of_msg_t30_data = Type_of_msg_t30_data_v8; /* SHORT_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION v8 */

/* START_OF_SYMBOL_DEFINITION Type_of_msg_t30_data_v34_pri_rate */
/**
 * @summary Type_of_msg_t30_data_v34_pri_rate
 * @constant
 * @type {number}
 */
export const Type_of_msg_t30_data_v34_pri_rate: Type_of_msg_t30_data = 9; /* LONG_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION Type_of_msg_t30_data_v34_pri_rate */

/* START_OF_SYMBOL_DEFINITION v34_pri_rate */
/**
 * @summary v34_pri_rate
 * @constant
 * @type {number}
 */
export const v34_pri_rate: Type_of_msg_t30_data = Type_of_msg_t30_data_v34_pri_rate; /* SHORT_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION v34_pri_rate */

/* START_OF_SYMBOL_DEFINITION Type_of_msg_t30_data_v34_CC_1200 */
/**
 * @summary Type_of_msg_t30_data_v34_CC_1200
 * @constant
 * @type {number}
 */
export const Type_of_msg_t30_data_v34_CC_1200: Type_of_msg_t30_data = 9; /* LONG_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION Type_of_msg_t30_data_v34_CC_1200 */

/* START_OF_SYMBOL_DEFINITION v34_CC_1200 */
/**
 * @summary v34_CC_1200
 * @constant
 * @type {number}
 */
export const v34_CC_1200: Type_of_msg_t30_data = Type_of_msg_t30_data_v34_CC_1200; /* SHORT_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION v34_CC_1200 */

/* START_OF_SYMBOL_DEFINITION Type_of_msg_t30_data_v34_pri_ch */
/**
 * @summary Type_of_msg_t30_data_v34_pri_ch
 * @constant
 * @type {number}
 */
export const Type_of_msg_t30_data_v34_pri_ch: Type_of_msg_t30_data = 9; /* LONG_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION Type_of_msg_t30_data_v34_pri_ch */

/* START_OF_SYMBOL_DEFINITION v34_pri_ch */
/**
 * @summary v34_pri_ch
 * @constant
 * @type {number}
 */
export const v34_pri_ch: Type_of_msg_t30_data = Type_of_msg_t30_data_v34_pri_ch; /* SHORT_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION v34_pri_ch */

/* START_OF_SYMBOL_DEFINITION Type_of_msg_t30_data_v33_12000 */
/**
 * @summary Type_of_msg_t30_data_v33_12000
 * @constant
 * @type {number}
 */
export const Type_of_msg_t30_data_v33_12000: Type_of_msg_t30_data = 9; /* LONG_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION Type_of_msg_t30_data_v33_12000 */

/* START_OF_SYMBOL_DEFINITION v33_12000 */
/**
 * @summary v33_12000
 * @constant
 * @type {number}
 */
export const v33_12000: Type_of_msg_t30_data = Type_of_msg_t30_data_v33_12000; /* SHORT_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION v33_12000 */

/* START_OF_SYMBOL_DEFINITION Type_of_msg_t30_data_v33_14400 */
/**
 * @summary Type_of_msg_t30_data_v33_14400
 * @constant
 * @type {number}
 */
export const Type_of_msg_t30_data_v33_14400: Type_of_msg_t30_data = 9; /* LONG_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION Type_of_msg_t30_data_v33_14400 */

/* START_OF_SYMBOL_DEFINITION v33_14400 */
/**
 * @summary v33_14400
 * @constant
 * @type {number}
 */
export const v33_14400: Type_of_msg_t30_data = Type_of_msg_t30_data_v33_14400; /* SHORT_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION v33_14400 */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_Type_of_msg_t30_data */
let _cached_decoder_for_Type_of_msg_t30_data: $.ASN1Decoder<Type_of_msg_t30_data> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_Type_of_msg_t30_data */

/* START_OF_SYMBOL_DEFINITION _decode_Type_of_msg_t30_data */
/**
 * @summary Decodes an ASN.1 element into a(n) Type_of_msg_t30_data
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {Type_of_msg_t30_data} The decoded data structure.
 */
export function _decode_Type_of_msg_t30_data(el: _Element) {
  if (!_cached_decoder_for_Type_of_msg_t30_data) {
    _cached_decoder_for_Type_of_msg_t30_data = $._decodeEnumerated;
  }
  return _cached_decoder_for_Type_of_msg_t30_data(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_Type_of_msg_t30_data */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_Type_of_msg_t30_data */
let _cached_encoder_for_Type_of_msg_t30_data: $.ASN1Encoder<Type_of_msg_t30_data> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_Type_of_msg_t30_data */

/* START_OF_SYMBOL_DEFINITION _encode_Type_of_msg_t30_data */
/**
 * @summary Encodes a(n) Type_of_msg_t30_data into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The Type_of_msg_t30_data, encoded as an ASN.1 Element.
 */
export function _encode_Type_of_msg_t30_data(
  value: Type_of_msg_t30_data,
  elGetter: $.ASN1Encoder<Type_of_msg_t30_data>
) {
  if (!_cached_encoder_for_Type_of_msg_t30_data) {
    _cached_encoder_for_Type_of_msg_t30_data = $._encodeEnumerated;
  }
  return _cached_encoder_for_Type_of_msg_t30_data(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_Type_of_msg_t30_data */

/* eslint-enable */
