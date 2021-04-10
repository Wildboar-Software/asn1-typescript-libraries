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

/* START_OF_SYMBOL_DEFINITION _enum_for_Option */
/**
 * @summary Option
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * Option  ::=  ENUMERATED {paging, weighting}
 * ```@enum {number}
 */
export enum _enum_for_Option {
  paging = 0,
  weighting = 1,
}
/* END_OF_SYMBOL_DEFINITION _enum_for_Option */

/* START_OF_SYMBOL_DEFINITION Option */
/**
 * @summary Option
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * Option  ::=  ENUMERATED {paging, weighting}
 * ```@enum {number}
 */
export type Option = _enum_for_Option;
/* END_OF_SYMBOL_DEFINITION Option */

/* START_OF_SYMBOL_DEFINITION Option */
/**
 * @summary Option
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * Option  ::=  ENUMERATED {paging, weighting}
 * ```@enum {number}
 */
export const Option = _enum_for_Option;
/* END_OF_SYMBOL_DEFINITION Option */

/* START_OF_SYMBOL_DEFINITION Option_paging */
/**
 * @summary Option_paging
 * @constant
 * @type {number}
 */
export const Option_paging: Option =
  Option.paging; /* LONG_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION Option_paging */

/* START_OF_SYMBOL_DEFINITION paging */
/**
 * @summary paging
 * @constant
 * @type {number}
 */
export const paging: Option = Option.paging; /* SHORT_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION paging */

/* START_OF_SYMBOL_DEFINITION Option_weighting */
/**
 * @summary Option_weighting
 * @constant
 * @type {number}
 */
export const Option_weighting: Option =
  Option.weighting; /* LONG_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION Option_weighting */

/* START_OF_SYMBOL_DEFINITION weighting */
/**
 * @summary weighting
 * @constant
 * @type {number}
 */
export const weighting: Option =
  Option.weighting; /* SHORT_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION weighting */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_Option */
let _cached_decoder_for_Option: $.ASN1Decoder<Option> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_Option */

/* START_OF_SYMBOL_DEFINITION _decode_Option */
/**
 * @summary Decodes an ASN.1 element into a(n) Option
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {Option} The decoded data structure.
 */
export function _decode_Option(el: _Element) {
  if (!_cached_decoder_for_Option) {
    _cached_decoder_for_Option = $._decodeEnumerated;
  }
  return _cached_decoder_for_Option(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_Option */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_Option */
let _cached_encoder_for_Option: $.ASN1Encoder<Option> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_Option */

/* START_OF_SYMBOL_DEFINITION _encode_Option */
/**
 * @summary Encodes a(n) Option into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The Option, encoded as an ASN.1 Element.
 */
export function _encode_Option(value: Option, elGetter: $.ASN1Encoder<Option>) {
  if (!_cached_encoder_for_Option) {
    _cached_encoder_for_Option = $._encodeEnumerated;
  }
  return _cached_encoder_for_Option(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_Option */

/* eslint-enable */
