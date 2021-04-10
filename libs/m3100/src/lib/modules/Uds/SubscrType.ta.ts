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

/* START_OF_SYMBOL_DEFINITION _enum_for_SubscrType */
/**
 * @summary SubscrType
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * SubscrType  ::=  ENUMERATED {residential, organization, government}
 * ```@enum {number}
 */
export enum _enum_for_SubscrType {
  residential = 0,
  organization = 1,
  government = 2,
}
/* END_OF_SYMBOL_DEFINITION _enum_for_SubscrType */

/* START_OF_SYMBOL_DEFINITION SubscrType */
/**
 * @summary SubscrType
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * SubscrType  ::=  ENUMERATED {residential, organization, government}
 * ```@enum {number}
 */
export type SubscrType = _enum_for_SubscrType;
/* END_OF_SYMBOL_DEFINITION SubscrType */

/* START_OF_SYMBOL_DEFINITION SubscrType */
/**
 * @summary SubscrType
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * SubscrType  ::=  ENUMERATED {residential, organization, government}
 * ```@enum {number}
 */
export const SubscrType = _enum_for_SubscrType;
/* END_OF_SYMBOL_DEFINITION SubscrType */

/* START_OF_SYMBOL_DEFINITION SubscrType_residential */
/**
 * @summary SubscrType_residential
 * @constant
 * @type {number}
 */
export const SubscrType_residential: SubscrType =
  SubscrType.residential; /* LONG_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION SubscrType_residential */

/* START_OF_SYMBOL_DEFINITION residential */
/**
 * @summary residential
 * @constant
 * @type {number}
 */
export const residential: SubscrType =
  SubscrType.residential; /* SHORT_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION residential */

/* START_OF_SYMBOL_DEFINITION SubscrType_organization */
/**
 * @summary SubscrType_organization
 * @constant
 * @type {number}
 */
export const SubscrType_organization: SubscrType =
  SubscrType.organization; /* LONG_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION SubscrType_organization */

/* START_OF_SYMBOL_DEFINITION organization */
/**
 * @summary organization
 * @constant
 * @type {number}
 */
export const organization: SubscrType =
  SubscrType.organization; /* SHORT_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION organization */

/* START_OF_SYMBOL_DEFINITION SubscrType_government */
/**
 * @summary SubscrType_government
 * @constant
 * @type {number}
 */
export const SubscrType_government: SubscrType =
  SubscrType.government; /* LONG_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION SubscrType_government */

/* START_OF_SYMBOL_DEFINITION government */
/**
 * @summary government
 * @constant
 * @type {number}
 */
export const government: SubscrType =
  SubscrType.government; /* SHORT_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION government */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_SubscrType */
let _cached_decoder_for_SubscrType: $.ASN1Decoder<SubscrType> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_SubscrType */

/* START_OF_SYMBOL_DEFINITION _decode_SubscrType */
/**
 * @summary Decodes an ASN.1 element into a(n) SubscrType
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {SubscrType} The decoded data structure.
 */
export function _decode_SubscrType(el: _Element) {
  if (!_cached_decoder_for_SubscrType) {
    _cached_decoder_for_SubscrType = $._decodeEnumerated;
  }
  return _cached_decoder_for_SubscrType(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_SubscrType */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_SubscrType */
let _cached_encoder_for_SubscrType: $.ASN1Encoder<SubscrType> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_SubscrType */

/* START_OF_SYMBOL_DEFINITION _encode_SubscrType */
/**
 * @summary Encodes a(n) SubscrType into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The SubscrType, encoded as an ASN.1 Element.
 */
export function _encode_SubscrType(
  value: SubscrType,
  elGetter: $.ASN1Encoder<SubscrType>
) {
  if (!_cached_encoder_for_SubscrType) {
    _cached_encoder_for_SubscrType = $._encodeEnumerated;
  }
  return _cached_encoder_for_SubscrType(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_SubscrType */

/* eslint-enable */
