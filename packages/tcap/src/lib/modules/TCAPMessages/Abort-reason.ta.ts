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
  P_AbortCause,
  _decode_P_AbortCause,
  _encode_P_AbortCause,
} from '../TCAPMessages/P-AbortCause.ta.js';
export {
  P_AbortCause,
  _decode_P_AbortCause,
  _encode_P_AbortCause,
} from '../TCAPMessages/P-AbortCause.ta.js';
import {
  DialoguePortion,
  _decode_DialoguePortion,
  _encode_DialoguePortion,
} from '../TCAPMessages/DialoguePortion.ta.js';
export {
  DialoguePortion,
  _decode_DialoguePortion,
  _encode_DialoguePortion,
} from '../TCAPMessages/DialoguePortion.ta.js';

/* START_OF_SYMBOL_DEFINITION Abort_reason */
/**
 * @summary Abort_reason
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * Abort-reason ::= CHOICE { -- REMOVED_FROM_UNNESTING -- }
 * ```
 */
export type Abort_reason =
  | { p_abortCause: P_AbortCause } /* CHOICE_ALT_ROOT */
  | { u_abortCause: DialoguePortion } /* CHOICE_ALT_ROOT */;
/* END_OF_SYMBOL_DEFINITION Abort_reason */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_Abort_reason */
let _cached_decoder_for_Abort_reason: $.ASN1Decoder<Abort_reason> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_Abort_reason */

/* START_OF_SYMBOL_DEFINITION _decode_Abort_reason */
/**
 * @summary Decodes an ASN.1 element into a(n) Abort_reason
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {Abort_reason} The decoded data structure.
 */
export function _decode_Abort_reason(el: _Element) {
  if (!_cached_decoder_for_Abort_reason) {
    _cached_decoder_for_Abort_reason = $._decode_inextensible_choice<Abort_reason>(
      {
        'APPLICATION 10': ['p_abortCause', _decode_P_AbortCause],
        'APPLICATION 11': ['u_abortCause', _decode_DialoguePortion],
      }
    );
  }
  return _cached_decoder_for_Abort_reason(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_Abort_reason */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_Abort_reason */
let _cached_encoder_for_Abort_reason: $.ASN1Encoder<Abort_reason> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_Abort_reason */

/* START_OF_SYMBOL_DEFINITION _encode_Abort_reason */
/**
 * @summary Encodes a(n) Abort_reason into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The Abort_reason, encoded as an ASN.1 Element.
 */
export function _encode_Abort_reason(
  value: Abort_reason,
  elGetter: $.ASN1Encoder<Abort_reason>
) {
  if (!_cached_encoder_for_Abort_reason) {
    _cached_encoder_for_Abort_reason = $._encode_choice<Abort_reason>(
      {
        p_abortCause: _encode_P_AbortCause,
        u_abortCause: _encode_DialoguePortion,
      },
      $.BER
    );
  }
  return _cached_encoder_for_Abort_reason(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_Abort_reason */

/* eslint-enable */
