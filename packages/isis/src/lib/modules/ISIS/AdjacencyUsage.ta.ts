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

/* START_OF_SYMBOL_DEFINITION _enum_for_AdjacencyUsage */
/**
 * @summary AdjacencyUsage
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * AdjacencyUsage  ::=  ENUMERATED {
 *   undefined(0), level1(1), level2(2), level1and2(3)}
 * ```@enum {number}
 */
export enum _enum_for_AdjacencyUsage {
  undefined = 0,
  level1 = 1,
  level2 = 2,
  level1and2 = 3,
}
/* END_OF_SYMBOL_DEFINITION _enum_for_AdjacencyUsage */

/* START_OF_SYMBOL_DEFINITION AdjacencyUsage */
/**
 * @summary AdjacencyUsage
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * AdjacencyUsage  ::=  ENUMERATED {
 *   undefined(0), level1(1), level2(2), level1and2(3)}
 * ```@enum {number}
 */
export type AdjacencyUsage = _enum_for_AdjacencyUsage;
/* END_OF_SYMBOL_DEFINITION AdjacencyUsage */

/* START_OF_SYMBOL_DEFINITION AdjacencyUsage */
/**
 * @summary AdjacencyUsage
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * AdjacencyUsage  ::=  ENUMERATED {
 *   undefined(0), level1(1), level2(2), level1and2(3)}
 * ```@enum {number}
 */
export const AdjacencyUsage = _enum_for_AdjacencyUsage;
/* END_OF_SYMBOL_DEFINITION AdjacencyUsage */

/* START_OF_SYMBOL_DEFINITION AdjacencyUsage_undefined */
/**
 * @summary AdjacencyUsage_undefined
 * @constant
 * @type {number}
 */
export const AdjacencyUsage_undefined: AdjacencyUsage =
  AdjacencyUsage.undefined; /* LONG_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION AdjacencyUsage_undefined */

/* START_OF_SYMBOL_DEFINITION undefined */
/**
 * @summary undefined
 * @constant
 * @type {number}
 */
export const undefined: AdjacencyUsage =
  AdjacencyUsage.undefined; /* SHORT_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION undefined */

/* START_OF_SYMBOL_DEFINITION AdjacencyUsage_level1 */
/**
 * @summary AdjacencyUsage_level1
 * @constant
 * @type {number}
 */
export const AdjacencyUsage_level1: AdjacencyUsage =
  AdjacencyUsage.level1; /* LONG_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION AdjacencyUsage_level1 */

/* START_OF_SYMBOL_DEFINITION level1 */
/**
 * @summary level1
 * @constant
 * @type {number}
 */
export const level1: AdjacencyUsage =
  AdjacencyUsage.level1; /* SHORT_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION level1 */

/* START_OF_SYMBOL_DEFINITION AdjacencyUsage_level2 */
/**
 * @summary AdjacencyUsage_level2
 * @constant
 * @type {number}
 */
export const AdjacencyUsage_level2: AdjacencyUsage =
  AdjacencyUsage.level2; /* LONG_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION AdjacencyUsage_level2 */

/* START_OF_SYMBOL_DEFINITION level2 */
/**
 * @summary level2
 * @constant
 * @type {number}
 */
export const level2: AdjacencyUsage =
  AdjacencyUsage.level2; /* SHORT_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION level2 */

/* START_OF_SYMBOL_DEFINITION AdjacencyUsage_level1and2 */
/**
 * @summary AdjacencyUsage_level1and2
 * @constant
 * @type {number}
 */
export const AdjacencyUsage_level1and2: AdjacencyUsage =
  AdjacencyUsage.level1and2; /* LONG_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION AdjacencyUsage_level1and2 */

/* START_OF_SYMBOL_DEFINITION level1and2 */
/**
 * @summary level1and2
 * @constant
 * @type {number}
 */
export const level1and2: AdjacencyUsage =
  AdjacencyUsage.level1and2; /* SHORT_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION level1and2 */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_AdjacencyUsage */
let _cached_decoder_for_AdjacencyUsage: $.ASN1Decoder<AdjacencyUsage> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_AdjacencyUsage */

/* START_OF_SYMBOL_DEFINITION _decode_AdjacencyUsage */
/**
 * @summary Decodes an ASN.1 element into a(n) AdjacencyUsage
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {AdjacencyUsage} The decoded data structure.
 */
export function _decode_AdjacencyUsage(el: _Element) {
  if (!_cached_decoder_for_AdjacencyUsage) {
    _cached_decoder_for_AdjacencyUsage = $._decodeEnumerated;
  }
  return _cached_decoder_for_AdjacencyUsage(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_AdjacencyUsage */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_AdjacencyUsage */
let _cached_encoder_for_AdjacencyUsage: $.ASN1Encoder<AdjacencyUsage> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_AdjacencyUsage */

/* START_OF_SYMBOL_DEFINITION _encode_AdjacencyUsage */
/**
 * @summary Encodes a(n) AdjacencyUsage into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The AdjacencyUsage, encoded as an ASN.1 Element.
 */
export function _encode_AdjacencyUsage(
  value: AdjacencyUsage,
  elGetter: $.ASN1Encoder<AdjacencyUsage>
) {
  if (!_cached_encoder_for_AdjacencyUsage) {
    _cached_encoder_for_AdjacencyUsage = $._encodeEnumerated;
  }
  return _cached_encoder_for_AdjacencyUsage(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_AdjacencyUsage */

/* eslint-enable */
