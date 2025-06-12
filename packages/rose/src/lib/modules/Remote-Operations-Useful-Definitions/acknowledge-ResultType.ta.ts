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

/* START_OF_SYMBOL_DEFINITION _enum_for_acknowledge_ResultType */
export enum _enum_for_acknowledge_ResultType {
  acknowledged = 0,
  unknown = 1,
}
/* END_OF_SYMBOL_DEFINITION _enum_for_acknowledge_ResultType */

/* START_OF_SYMBOL_DEFINITION acknowledge_ResultType */
/**
 * @summary acknowledge_ResultType
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * acknowledge-ResultType ::= ENUMERATED { -- REMOVED_FROM_UNNESTING -- }
 * ```@enum {number}
 */
export type acknowledge_ResultType =
  | _enum_for_acknowledge_ResultType
  | ENUMERATED;
/* END_OF_SYMBOL_DEFINITION acknowledge_ResultType */

/* START_OF_SYMBOL_DEFINITION acknowledge_ResultType_acknowledged */
/**
 * @summary acknowledge_ResultType_acknowledged
 * @constant
 * @type {number}
 */
export const acknowledge_ResultType_acknowledged: acknowledge_ResultType = 0; /* LONG_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION acknowledge_ResultType_acknowledged */

/* START_OF_SYMBOL_DEFINITION acknowledged */
/**
 * @summary acknowledged
 * @constant
 * @type {number}
 */
export const acknowledged: acknowledge_ResultType = acknowledge_ResultType_acknowledged; /* SHORT_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION acknowledged */

/* START_OF_SYMBOL_DEFINITION acknowledge_ResultType_unknown */
/**
 * @summary acknowledge_ResultType_unknown
 * @constant
 * @type {number}
 */
export const acknowledge_ResultType_unknown: acknowledge_ResultType = 1; /* LONG_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION acknowledge_ResultType_unknown */

/* START_OF_SYMBOL_DEFINITION unknown */
/**
 * @summary unknown
 * @constant
 * @type {number}
 */
export const unknown: acknowledge_ResultType = acknowledge_ResultType_unknown; /* SHORT_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION unknown */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_acknowledge_ResultType */
let _cached_decoder_for_acknowledge_ResultType: $.ASN1Decoder<acknowledge_ResultType> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_acknowledge_ResultType */

/* START_OF_SYMBOL_DEFINITION _decode_acknowledge_ResultType */
/**
 * @summary Decodes an ASN.1 element into a(n) acknowledge_ResultType
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {acknowledge_ResultType} The decoded data structure.
 */
export function _decode_acknowledge_ResultType(el: _Element) {
  if (!_cached_decoder_for_acknowledge_ResultType) {
    _cached_decoder_for_acknowledge_ResultType = $._decodeEnumerated;
  }
  return _cached_decoder_for_acknowledge_ResultType(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_acknowledge_ResultType */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_acknowledge_ResultType */
let _cached_encoder_for_acknowledge_ResultType: $.ASN1Encoder<acknowledge_ResultType> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_acknowledge_ResultType */

/* START_OF_SYMBOL_DEFINITION _encode_acknowledge_ResultType */
/**
 * @summary Encodes a(n) acknowledge_ResultType into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The acknowledge_ResultType, encoded as an ASN.1 Element.
 */
export function _encode_acknowledge_ResultType(
  value: acknowledge_ResultType,
  elGetter: $.ASN1Encoder<acknowledge_ResultType>
) {
  if (!_cached_encoder_for_acknowledge_ResultType) {
    _cached_encoder_for_acknowledge_ResultType = $._encodeEnumerated;
  }
  return _cached_encoder_for_acknowledge_ResultType(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_acknowledge_ResultType */

/* eslint-enable */
