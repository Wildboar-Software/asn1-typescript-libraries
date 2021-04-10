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

/* START_OF_SYMBOL_DEFINITION _enum_for_AddrTariffType */
/**
 * @summary AddrTariffType
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * AddrTariffType  ::=  ENUMERATED {normal, premium, toll-free}
 * ```@enum {number}
 */
export enum _enum_for_AddrTariffType {
  normal = 0,
  premium = 1,
  toll_free = 2,
}
/* END_OF_SYMBOL_DEFINITION _enum_for_AddrTariffType */

/* START_OF_SYMBOL_DEFINITION AddrTariffType */
/**
 * @summary AddrTariffType
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * AddrTariffType  ::=  ENUMERATED {normal, premium, toll-free}
 * ```@enum {number}
 */
export type AddrTariffType = _enum_for_AddrTariffType;
/* END_OF_SYMBOL_DEFINITION AddrTariffType */

/* START_OF_SYMBOL_DEFINITION AddrTariffType */
/**
 * @summary AddrTariffType
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * AddrTariffType  ::=  ENUMERATED {normal, premium, toll-free}
 * ```@enum {number}
 */
export const AddrTariffType = _enum_for_AddrTariffType;
/* END_OF_SYMBOL_DEFINITION AddrTariffType */

/* START_OF_SYMBOL_DEFINITION AddrTariffType_normal */
/**
 * @summary AddrTariffType_normal
 * @constant
 * @type {number}
 */
export const AddrTariffType_normal: AddrTariffType =
  AddrTariffType.normal; /* LONG_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION AddrTariffType_normal */

/* START_OF_SYMBOL_DEFINITION normal */
/**
 * @summary normal
 * @constant
 * @type {number}
 */
export const normal: AddrTariffType =
  AddrTariffType.normal; /* SHORT_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION normal */

/* START_OF_SYMBOL_DEFINITION AddrTariffType_premium */
/**
 * @summary AddrTariffType_premium
 * @constant
 * @type {number}
 */
export const AddrTariffType_premium: AddrTariffType =
  AddrTariffType.premium; /* LONG_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION AddrTariffType_premium */

/* START_OF_SYMBOL_DEFINITION premium */
/**
 * @summary premium
 * @constant
 * @type {number}
 */
export const premium: AddrTariffType =
  AddrTariffType.premium; /* SHORT_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION premium */

/* START_OF_SYMBOL_DEFINITION AddrTariffType_toll_free */
/**
 * @summary AddrTariffType_toll_free
 * @constant
 * @type {number}
 */
export const AddrTariffType_toll_free: AddrTariffType =
  AddrTariffType.toll_free; /* LONG_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION AddrTariffType_toll_free */

/* START_OF_SYMBOL_DEFINITION toll_free */
/**
 * @summary toll_free
 * @constant
 * @type {number}
 */
export const toll_free: AddrTariffType =
  AddrTariffType.toll_free; /* SHORT_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION toll_free */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_AddrTariffType */
let _cached_decoder_for_AddrTariffType: $.ASN1Decoder<AddrTariffType> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_AddrTariffType */

/* START_OF_SYMBOL_DEFINITION _decode_AddrTariffType */
/**
 * @summary Decodes an ASN.1 element into a(n) AddrTariffType
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {AddrTariffType} The decoded data structure.
 */
export function _decode_AddrTariffType(el: _Element) {
  if (!_cached_decoder_for_AddrTariffType) {
    _cached_decoder_for_AddrTariffType = $._decodeEnumerated;
  }
  return _cached_decoder_for_AddrTariffType(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_AddrTariffType */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_AddrTariffType */
let _cached_encoder_for_AddrTariffType: $.ASN1Encoder<AddrTariffType> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_AddrTariffType */

/* START_OF_SYMBOL_DEFINITION _encode_AddrTariffType */
/**
 * @summary Encodes a(n) AddrTariffType into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The AddrTariffType, encoded as an ASN.1 Element.
 */
export function _encode_AddrTariffType(
  value: AddrTariffType,
  elGetter: $.ASN1Encoder<AddrTariffType>
) {
  if (!_cached_encoder_for_AddrTariffType) {
    _cached_encoder_for_AddrTariffType = $._encodeEnumerated;
  }
  return _cached_encoder_for_AddrTariffType(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_AddrTariffType */

/* eslint-enable */
