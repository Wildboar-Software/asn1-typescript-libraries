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

/* START_OF_SYMBOL_DEFINITION Referent_Indicator */
/**
 * @summary Referent_Indicator
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * Referent-Indicator  ::=  [APPLICATION 29] IMPLICIT BOOLEAN
 * ```
 */
export type Referent_Indicator = BOOLEAN; // BooleanType
/* END_OF_SYMBOL_DEFINITION Referent_Indicator */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_Referent_Indicator */
let _cached_decoder_for_Referent_Indicator: $.ASN1Decoder<Referent_Indicator> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_Referent_Indicator */

/* START_OF_SYMBOL_DEFINITION _decode_Referent_Indicator */
/**
 * @summary Decodes an ASN.1 element into a(n) Referent_Indicator
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {Referent_Indicator} The decoded data structure.
 */
export function _decode_Referent_Indicator(el: _Element) {
  if (!_cached_decoder_for_Referent_Indicator) {
    _cached_decoder_for_Referent_Indicator = $._decode_implicit<Referent_Indicator>(
      () => $._decodeBoolean
    );
  }
  return _cached_decoder_for_Referent_Indicator(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_Referent_Indicator */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_Referent_Indicator */
let _cached_encoder_for_Referent_Indicator: $.ASN1Encoder<Referent_Indicator> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_Referent_Indicator */

/* START_OF_SYMBOL_DEFINITION _encode_Referent_Indicator */
/**
 * @summary Encodes a(n) Referent_Indicator into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The Referent_Indicator, encoded as an ASN.1 Element.
 */
export function _encode_Referent_Indicator(
  value: Referent_Indicator,
  elGetter: $.ASN1Encoder<Referent_Indicator>
) {
  if (!_cached_encoder_for_Referent_Indicator) {
    _cached_encoder_for_Referent_Indicator = $._encode_implicit(
      _TagClass.application,
      29,
      () => $._encodeBoolean,
      $.BER
    );
  }
  return _cached_encoder_for_Referent_Indicator(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_Referent_Indicator */

/* eslint-enable */
