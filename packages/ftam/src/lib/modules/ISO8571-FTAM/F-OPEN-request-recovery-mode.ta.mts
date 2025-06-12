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

/* START_OF_SYMBOL_DEFINITION F_OPEN_request_recovery_mode */
/**
 * @summary F_OPEN_request_recovery_mode
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * F-OPEN-request-recovery-mode ::= INTEGER { -- REMOVED_FROM_UNNESTING -- }
 * ```
 */
export type F_OPEN_request_recovery_mode = INTEGER;
/* END_OF_SYMBOL_DEFINITION F_OPEN_request_recovery_mode */

/* START_OF_SYMBOL_DEFINITION F_OPEN_request_recovery_mode_none */
/**
 * @summary F_OPEN_request_recovery_mode_none
 * @constant
 * @type {number}
 */
export const F_OPEN_request_recovery_mode_none: F_OPEN_request_recovery_mode = 0; /* LONG_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION F_OPEN_request_recovery_mode_none */

/* START_OF_SYMBOL_DEFINITION none */
/**
 * @summary F_OPEN_request_recovery_mode_none
 * @constant
 * @type {number}
 */
export const none: F_OPEN_request_recovery_mode = F_OPEN_request_recovery_mode_none; /* SHORT_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION none */

/* START_OF_SYMBOL_DEFINITION F_OPEN_request_recovery_mode_at_start_of_file */
/**
 * @summary F_OPEN_request_recovery_mode_at_start_of_file
 * @constant
 * @type {number}
 */
export const F_OPEN_request_recovery_mode_at_start_of_file: F_OPEN_request_recovery_mode = 1; /* LONG_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION F_OPEN_request_recovery_mode_at_start_of_file */

/* START_OF_SYMBOL_DEFINITION at_start_of_file */
/**
 * @summary F_OPEN_request_recovery_mode_at_start_of_file
 * @constant
 * @type {number}
 */
export const at_start_of_file: F_OPEN_request_recovery_mode = F_OPEN_request_recovery_mode_at_start_of_file; /* SHORT_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION at_start_of_file */

/* START_OF_SYMBOL_DEFINITION F_OPEN_request_recovery_mode_at_any_active_Checkpoint */
/**
 * @summary F_OPEN_request_recovery_mode_at_any_active_Checkpoint
 * @constant
 * @type {number}
 */
export const F_OPEN_request_recovery_mode_at_any_active_Checkpoint: F_OPEN_request_recovery_mode = 2; /* LONG_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION F_OPEN_request_recovery_mode_at_any_active_Checkpoint */

/* START_OF_SYMBOL_DEFINITION at_any_active_Checkpoint */
/**
 * @summary F_OPEN_request_recovery_mode_at_any_active_Checkpoint
 * @constant
 * @type {number}
 */
export const at_any_active_Checkpoint: F_OPEN_request_recovery_mode = F_OPEN_request_recovery_mode_at_any_active_Checkpoint; /* SHORT_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION at_any_active_Checkpoint */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_F_OPEN_request_recovery_mode */
let _cached_decoder_for_F_OPEN_request_recovery_mode: $.ASN1Decoder<F_OPEN_request_recovery_mode> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_F_OPEN_request_recovery_mode */

/* START_OF_SYMBOL_DEFINITION _decode_F_OPEN_request_recovery_mode */
/**
 * @summary Decodes an ASN.1 element into a(n) F_OPEN_request_recovery_mode
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {F_OPEN_request_recovery_mode} The decoded data structure.
 */
export function _decode_F_OPEN_request_recovery_mode(el: _Element) {
  if (!_cached_decoder_for_F_OPEN_request_recovery_mode) {
    _cached_decoder_for_F_OPEN_request_recovery_mode = $._decodeInteger;
  }
  return _cached_decoder_for_F_OPEN_request_recovery_mode(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_F_OPEN_request_recovery_mode */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_F_OPEN_request_recovery_mode */
let _cached_encoder_for_F_OPEN_request_recovery_mode: $.ASN1Encoder<F_OPEN_request_recovery_mode> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_F_OPEN_request_recovery_mode */

/* START_OF_SYMBOL_DEFINITION _encode_F_OPEN_request_recovery_mode */
/**
 * @summary Encodes a(n) F_OPEN_request_recovery_mode into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The F_OPEN_request_recovery_mode, encoded as an ASN.1 Element.
 */
export function _encode_F_OPEN_request_recovery_mode(
  value: F_OPEN_request_recovery_mode,
  elGetter: $.ASN1Encoder<F_OPEN_request_recovery_mode>
) {
  if (!_cached_encoder_for_F_OPEN_request_recovery_mode) {
    _cached_encoder_for_F_OPEN_request_recovery_mode = $._encodeInteger;
  }
  return _cached_encoder_for_F_OPEN_request_recovery_mode(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_F_OPEN_request_recovery_mode */

/* eslint-enable */
