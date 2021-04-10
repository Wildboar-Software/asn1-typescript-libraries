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
import * as $ from 'asn1-ts/dist/node/functional';

/* START_OF_SYMBOL_DEFINITION F_OPEN_request_processing_mode */
/**
 * @summary F_OPEN_request_processing_mode
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * F-OPEN-request-processing-mode ::= BIT STRING { -- REMOVED_FROM_UNNESTING -- }
 * ```
 */
export type F_OPEN_request_processing_mode = BIT_STRING;
/* END_OF_SYMBOL_DEFINITION F_OPEN_request_processing_mode */

/* START_OF_SYMBOL_DEFINITION F_OPEN_request_processing_mode_f_read */
/**
 * @summary F_OPEN_request_processing_mode_f_read
 * @constant
 */
export const F_OPEN_request_processing_mode_f_read: number = 0; /* LONG_NAMED_BIT */
/* END_OF_SYMBOL_DEFINITION F_OPEN_request_processing_mode_f_read */

/* START_OF_SYMBOL_DEFINITION f_read */
/**
 * @summary f_read
 * @constant
 */
export const f_read: number = F_OPEN_request_processing_mode_f_read; /* SHORT_NAMED_BIT */
/* END_OF_SYMBOL_DEFINITION f_read */

/* START_OF_SYMBOL_DEFINITION F_OPEN_request_processing_mode_f_insert */
/**
 * @summary F_OPEN_request_processing_mode_f_insert
 * @constant
 */
export const F_OPEN_request_processing_mode_f_insert: number = 1; /* LONG_NAMED_BIT */
/* END_OF_SYMBOL_DEFINITION F_OPEN_request_processing_mode_f_insert */

/* START_OF_SYMBOL_DEFINITION f_insert */
/**
 * @summary f_insert
 * @constant
 */
export const f_insert: number = F_OPEN_request_processing_mode_f_insert; /* SHORT_NAMED_BIT */
/* END_OF_SYMBOL_DEFINITION f_insert */

/* START_OF_SYMBOL_DEFINITION F_OPEN_request_processing_mode_f_replace */
/**
 * @summary F_OPEN_request_processing_mode_f_replace
 * @constant
 */
export const F_OPEN_request_processing_mode_f_replace: number = 2; /* LONG_NAMED_BIT */
/* END_OF_SYMBOL_DEFINITION F_OPEN_request_processing_mode_f_replace */

/* START_OF_SYMBOL_DEFINITION f_replace */
/**
 * @summary f_replace
 * @constant
 */
export const f_replace: number = F_OPEN_request_processing_mode_f_replace; /* SHORT_NAMED_BIT */
/* END_OF_SYMBOL_DEFINITION f_replace */

/* START_OF_SYMBOL_DEFINITION F_OPEN_request_processing_mode_f_extend */
/**
 * @summary F_OPEN_request_processing_mode_f_extend
 * @constant
 */
export const F_OPEN_request_processing_mode_f_extend: number = 3; /* LONG_NAMED_BIT */
/* END_OF_SYMBOL_DEFINITION F_OPEN_request_processing_mode_f_extend */

/* START_OF_SYMBOL_DEFINITION f_extend */
/**
 * @summary f_extend
 * @constant
 */
export const f_extend: number = F_OPEN_request_processing_mode_f_extend; /* SHORT_NAMED_BIT */
/* END_OF_SYMBOL_DEFINITION f_extend */

/* START_OF_SYMBOL_DEFINITION F_OPEN_request_processing_mode_f_erase */
/**
 * @summary F_OPEN_request_processing_mode_f_erase
 * @constant
 */
export const F_OPEN_request_processing_mode_f_erase: number = 4; /* LONG_NAMED_BIT */
/* END_OF_SYMBOL_DEFINITION F_OPEN_request_processing_mode_f_erase */

/* START_OF_SYMBOL_DEFINITION f_erase */
/**
 * @summary f_erase
 * @constant
 */
export const f_erase: number = F_OPEN_request_processing_mode_f_erase; /* SHORT_NAMED_BIT */
/* END_OF_SYMBOL_DEFINITION f_erase */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_F_OPEN_request_processing_mode */
let _cached_decoder_for_F_OPEN_request_processing_mode: $.ASN1Decoder<F_OPEN_request_processing_mode> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_F_OPEN_request_processing_mode */

/* START_OF_SYMBOL_DEFINITION _decode_F_OPEN_request_processing_mode */
/**
 * @summary Decodes an ASN.1 element into a(n) F_OPEN_request_processing_mode
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {F_OPEN_request_processing_mode} The decoded data structure.
 */
export function _decode_F_OPEN_request_processing_mode(el: _Element) {
  if (!_cached_decoder_for_F_OPEN_request_processing_mode) {
    _cached_decoder_for_F_OPEN_request_processing_mode = $._decodeBitString;
  }
  return _cached_decoder_for_F_OPEN_request_processing_mode(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_F_OPEN_request_processing_mode */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_F_OPEN_request_processing_mode */
let _cached_encoder_for_F_OPEN_request_processing_mode: $.ASN1Encoder<F_OPEN_request_processing_mode> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_F_OPEN_request_processing_mode */

/* START_OF_SYMBOL_DEFINITION _encode_F_OPEN_request_processing_mode */
/**
 * @summary Encodes a(n) F_OPEN_request_processing_mode into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The F_OPEN_request_processing_mode, encoded as an ASN.1 Element.
 */
export function _encode_F_OPEN_request_processing_mode(
  value: F_OPEN_request_processing_mode,
  elGetter: $.ASN1Encoder<F_OPEN_request_processing_mode>
) {
  if (!_cached_encoder_for_F_OPEN_request_processing_mode) {
    _cached_encoder_for_F_OPEN_request_processing_mode = $._encodeBitString;
  }
  return _cached_encoder_for_F_OPEN_request_processing_mode(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_F_OPEN_request_processing_mode */

/* eslint-enable */
