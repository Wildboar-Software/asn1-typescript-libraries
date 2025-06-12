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

/* START_OF_SYMBOL_DEFINITION _enum_for_MetricType */
/**
 * @summary MetricType
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * MetricType  ::=  ENUMERATED {internal(0), external(1)}
 * ```@enum {number}
 */
export enum _enum_for_MetricType {
  internal = 0,
  external = 1,
}
/* END_OF_SYMBOL_DEFINITION _enum_for_MetricType */

/* START_OF_SYMBOL_DEFINITION MetricType */
/**
 * @summary MetricType
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * MetricType  ::=  ENUMERATED {internal(0), external(1)}
 * ```@enum {number}
 */
export type MetricType = _enum_for_MetricType;
/* END_OF_SYMBOL_DEFINITION MetricType */

/* START_OF_SYMBOL_DEFINITION MetricType */
/**
 * @summary MetricType
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * MetricType  ::=  ENUMERATED {internal(0), external(1)}
 * ```@enum {number}
 */
export const MetricType = _enum_for_MetricType;
/* END_OF_SYMBOL_DEFINITION MetricType */

/* START_OF_SYMBOL_DEFINITION MetricType_internal */
/**
 * @summary MetricType_internal
 * @constant
 * @type {number}
 */
export const MetricType_internal: MetricType =
  MetricType.internal; /* LONG_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION MetricType_internal */

/* START_OF_SYMBOL_DEFINITION internal */
/**
 * @summary internal
 * @constant
 * @type {number}
 */
export const internal: MetricType =
  MetricType.internal; /* SHORT_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION internal */

/* START_OF_SYMBOL_DEFINITION MetricType_external */
/**
 * @summary MetricType_external
 * @constant
 * @type {number}
 */
export const MetricType_external: MetricType =
  MetricType.external; /* LONG_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION MetricType_external */

/* START_OF_SYMBOL_DEFINITION external */
/**
 * @summary external
 * @constant
 * @type {number}
 */
export const external: MetricType =
  MetricType.external; /* SHORT_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION external */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_MetricType */
let _cached_decoder_for_MetricType: $.ASN1Decoder<MetricType> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_MetricType */

/* START_OF_SYMBOL_DEFINITION _decode_MetricType */
/**
 * @summary Decodes an ASN.1 element into a(n) MetricType
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {MetricType} The decoded data structure.
 */
export function _decode_MetricType(el: _Element) {
  if (!_cached_decoder_for_MetricType) {
    _cached_decoder_for_MetricType = $._decodeEnumerated;
  }
  return _cached_decoder_for_MetricType(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_MetricType */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_MetricType */
let _cached_encoder_for_MetricType: $.ASN1Encoder<MetricType> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_MetricType */

/* START_OF_SYMBOL_DEFINITION _encode_MetricType */
/**
 * @summary Encodes a(n) MetricType into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The MetricType, encoded as an ASN.1 Element.
 */
export function _encode_MetricType(
  value: MetricType,
  elGetter: $.ASN1Encoder<MetricType>
) {
  if (!_cached_encoder_for_MetricType) {
    _cached_encoder_for_MetricType = $._encodeEnumerated;
  }
  return _cached_encoder_for_MetricType(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_MetricType */

/* eslint-enable */
