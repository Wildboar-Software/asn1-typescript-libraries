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

/* START_OF_SYMBOL_DEFINITION P_AbortCause */
/**
 * @summary P_AbortCause
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * P-AbortCause  ::=  [APPLICATION 10]  INTEGER {
 *   unrecognizedMessageType(0), unrecognizedTransactionID(1),
 *   badlyFormattedTransactionPortion(2), incorrectTransactionPortion(3),
 *   resourceLimitation(4)}(0..127)
 * ```
 */
export type P_AbortCause = INTEGER;
/* END_OF_SYMBOL_DEFINITION P_AbortCause */

/* START_OF_SYMBOL_DEFINITION P_AbortCause_unrecognizedMessageType */
/**
 * @summary P_AbortCause_unrecognizedMessageType
 * @constant
 * @type {number}
 */
export const P_AbortCause_unrecognizedMessageType: P_AbortCause = 0; /* LONG_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION P_AbortCause_unrecognizedMessageType */

/* START_OF_SYMBOL_DEFINITION unrecognizedMessageType */
/**
 * @summary P_AbortCause_unrecognizedMessageType
 * @constant
 * @type {number}
 */
export const unrecognizedMessageType: P_AbortCause = P_AbortCause_unrecognizedMessageType; /* SHORT_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION unrecognizedMessageType */

/* START_OF_SYMBOL_DEFINITION P_AbortCause_unrecognizedTransactionID */
/**
 * @summary P_AbortCause_unrecognizedTransactionID
 * @constant
 * @type {number}
 */
export const P_AbortCause_unrecognizedTransactionID: P_AbortCause = 1; /* LONG_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION P_AbortCause_unrecognizedTransactionID */

/* START_OF_SYMBOL_DEFINITION unrecognizedTransactionID */
/**
 * @summary P_AbortCause_unrecognizedTransactionID
 * @constant
 * @type {number}
 */
export const unrecognizedTransactionID: P_AbortCause = P_AbortCause_unrecognizedTransactionID; /* SHORT_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION unrecognizedTransactionID */

/* START_OF_SYMBOL_DEFINITION P_AbortCause_badlyFormattedTransactionPortion */
/**
 * @summary P_AbortCause_badlyFormattedTransactionPortion
 * @constant
 * @type {number}
 */
export const P_AbortCause_badlyFormattedTransactionPortion: P_AbortCause = 2; /* LONG_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION P_AbortCause_badlyFormattedTransactionPortion */

/* START_OF_SYMBOL_DEFINITION badlyFormattedTransactionPortion */
/**
 * @summary P_AbortCause_badlyFormattedTransactionPortion
 * @constant
 * @type {number}
 */
export const badlyFormattedTransactionPortion: P_AbortCause = P_AbortCause_badlyFormattedTransactionPortion; /* SHORT_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION badlyFormattedTransactionPortion */

/* START_OF_SYMBOL_DEFINITION P_AbortCause_incorrectTransactionPortion */
/**
 * @summary P_AbortCause_incorrectTransactionPortion
 * @constant
 * @type {number}
 */
export const P_AbortCause_incorrectTransactionPortion: P_AbortCause = 3; /* LONG_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION P_AbortCause_incorrectTransactionPortion */

/* START_OF_SYMBOL_DEFINITION incorrectTransactionPortion */
/**
 * @summary P_AbortCause_incorrectTransactionPortion
 * @constant
 * @type {number}
 */
export const incorrectTransactionPortion: P_AbortCause = P_AbortCause_incorrectTransactionPortion; /* SHORT_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION incorrectTransactionPortion */

/* START_OF_SYMBOL_DEFINITION P_AbortCause_resourceLimitation */
/**
 * @summary P_AbortCause_resourceLimitation
 * @constant
 * @type {number}
 */
export const P_AbortCause_resourceLimitation: P_AbortCause = 4; /* LONG_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION P_AbortCause_resourceLimitation */

/* START_OF_SYMBOL_DEFINITION resourceLimitation */
/**
 * @summary P_AbortCause_resourceLimitation
 * @constant
 * @type {number}
 */
export const resourceLimitation: P_AbortCause = P_AbortCause_resourceLimitation; /* SHORT_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION resourceLimitation */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_P_AbortCause */
let _cached_decoder_for_P_AbortCause: $.ASN1Decoder<P_AbortCause> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_P_AbortCause */

/* START_OF_SYMBOL_DEFINITION _decode_P_AbortCause */
/**
 * @summary Decodes an ASN.1 element into a(n) P_AbortCause
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {P_AbortCause} The decoded data structure.
 */
export function _decode_P_AbortCause(el: _Element) {
  if (!_cached_decoder_for_P_AbortCause) {
    _cached_decoder_for_P_AbortCause = $._decode_implicit<P_AbortCause>(
      () => $._decodeInteger
    );
  }
  return _cached_decoder_for_P_AbortCause(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_P_AbortCause */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_P_AbortCause */
let _cached_encoder_for_P_AbortCause: $.ASN1Encoder<P_AbortCause> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_P_AbortCause */

/* START_OF_SYMBOL_DEFINITION _encode_P_AbortCause */
/**
 * @summary Encodes a(n) P_AbortCause into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The P_AbortCause, encoded as an ASN.1 Element.
 */
export function _encode_P_AbortCause(
  value: P_AbortCause,
  elGetter: $.ASN1Encoder<P_AbortCause>
) {
  if (!_cached_encoder_for_P_AbortCause) {
    _cached_encoder_for_P_AbortCause = $._encode_implicit(
      _TagClass.application,
      10,
      () => $._encodeInteger,
      $.BER
    );
  }
  return _cached_encoder_for_P_AbortCause(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_P_AbortCause */

/* eslint-enable */
