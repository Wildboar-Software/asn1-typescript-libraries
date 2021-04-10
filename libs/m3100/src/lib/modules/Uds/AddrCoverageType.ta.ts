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

/* START_OF_SYMBOL_DEFINITION _enum_for_AddrCoverageType */
/**
 * @summary AddrCoverageType
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * AddrCoverageType  ::=  ENUMERATED {
 *   international, national, stateOrProvince, locality}
 * ```@enum {number}
 */
export enum _enum_for_AddrCoverageType {
  international = 0,
  national = 1,
  stateOrProvince = 2,
  locality = 3,
}
/* END_OF_SYMBOL_DEFINITION _enum_for_AddrCoverageType */

/* START_OF_SYMBOL_DEFINITION AddrCoverageType */
/**
 * @summary AddrCoverageType
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * AddrCoverageType  ::=  ENUMERATED {
 *   international, national, stateOrProvince, locality}
 * ```@enum {number}
 */
export type AddrCoverageType = _enum_for_AddrCoverageType;
/* END_OF_SYMBOL_DEFINITION AddrCoverageType */

/* START_OF_SYMBOL_DEFINITION AddrCoverageType */
/**
 * @summary AddrCoverageType
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * AddrCoverageType  ::=  ENUMERATED {
 *   international, national, stateOrProvince, locality}
 * ```@enum {number}
 */
export const AddrCoverageType = _enum_for_AddrCoverageType;
/* END_OF_SYMBOL_DEFINITION AddrCoverageType */

/* START_OF_SYMBOL_DEFINITION AddrCoverageType_international */
/**
 * @summary AddrCoverageType_international
 * @constant
 * @type {number}
 */
export const AddrCoverageType_international: AddrCoverageType =
  AddrCoverageType.international; /* LONG_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION AddrCoverageType_international */

/* START_OF_SYMBOL_DEFINITION international */
/**
 * @summary international
 * @constant
 * @type {number}
 */
export const international: AddrCoverageType =
  AddrCoverageType.international; /* SHORT_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION international */

/* START_OF_SYMBOL_DEFINITION AddrCoverageType_national */
/**
 * @summary AddrCoverageType_national
 * @constant
 * @type {number}
 */
export const AddrCoverageType_national: AddrCoverageType =
  AddrCoverageType.national; /* LONG_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION AddrCoverageType_national */

/* START_OF_SYMBOL_DEFINITION national */
/**
 * @summary national
 * @constant
 * @type {number}
 */
export const national: AddrCoverageType =
  AddrCoverageType.national; /* SHORT_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION national */

/* START_OF_SYMBOL_DEFINITION AddrCoverageType_stateOrProvince */
/**
 * @summary AddrCoverageType_stateOrProvince
 * @constant
 * @type {number}
 */
export const AddrCoverageType_stateOrProvince: AddrCoverageType =
  AddrCoverageType.stateOrProvince; /* LONG_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION AddrCoverageType_stateOrProvince */

/* START_OF_SYMBOL_DEFINITION stateOrProvince */
/**
 * @summary stateOrProvince
 * @constant
 * @type {number}
 */
export const stateOrProvince: AddrCoverageType =
  AddrCoverageType.stateOrProvince; /* SHORT_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION stateOrProvince */

/* START_OF_SYMBOL_DEFINITION AddrCoverageType_locality */
/**
 * @summary AddrCoverageType_locality
 * @constant
 * @type {number}
 */
export const AddrCoverageType_locality: AddrCoverageType =
  AddrCoverageType.locality; /* LONG_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION AddrCoverageType_locality */

/* START_OF_SYMBOL_DEFINITION locality */
/**
 * @summary locality
 * @constant
 * @type {number}
 */
export const locality: AddrCoverageType =
  AddrCoverageType.locality; /* SHORT_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION locality */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_AddrCoverageType */
let _cached_decoder_for_AddrCoverageType: $.ASN1Decoder<AddrCoverageType> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_AddrCoverageType */

/* START_OF_SYMBOL_DEFINITION _decode_AddrCoverageType */
/**
 * @summary Decodes an ASN.1 element into a(n) AddrCoverageType
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {AddrCoverageType} The decoded data structure.
 */
export function _decode_AddrCoverageType(el: _Element) {
  if (!_cached_decoder_for_AddrCoverageType) {
    _cached_decoder_for_AddrCoverageType = $._decodeEnumerated;
  }
  return _cached_decoder_for_AddrCoverageType(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_AddrCoverageType */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_AddrCoverageType */
let _cached_encoder_for_AddrCoverageType: $.ASN1Encoder<AddrCoverageType> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_AddrCoverageType */

/* START_OF_SYMBOL_DEFINITION _encode_AddrCoverageType */
/**
 * @summary Encodes a(n) AddrCoverageType into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The AddrCoverageType, encoded as an ASN.1 Element.
 */
export function _encode_AddrCoverageType(
  value: AddrCoverageType,
  elGetter: $.ASN1Encoder<AddrCoverageType>
) {
  if (!_cached_encoder_for_AddrCoverageType) {
    _cached_encoder_for_AddrCoverageType = $._encodeEnumerated;
  }
  return _cached_encoder_for_AddrCoverageType(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_AddrCoverageType */

/* eslint-enable */
