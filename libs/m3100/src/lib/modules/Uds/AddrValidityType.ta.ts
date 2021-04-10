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

/* START_OF_SYMBOL_DEFINITION _enum_for_AddrValidityType */
/**
 * @summary AddrValidityType
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * AddrValidityType  ::=  ENUMERATED {current, old, future, temporary}
 * ```@enum {number}
 */
export enum _enum_for_AddrValidityType {
  current = 0,
  old = 1,
  future = 2,
  temporary = 3,
}
/* END_OF_SYMBOL_DEFINITION _enum_for_AddrValidityType */

/* START_OF_SYMBOL_DEFINITION AddrValidityType */
/**
 * @summary AddrValidityType
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * AddrValidityType  ::=  ENUMERATED {current, old, future, temporary}
 * ```@enum {number}
 */
export type AddrValidityType = _enum_for_AddrValidityType;
/* END_OF_SYMBOL_DEFINITION AddrValidityType */

/* START_OF_SYMBOL_DEFINITION AddrValidityType */
/**
 * @summary AddrValidityType
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * AddrValidityType  ::=  ENUMERATED {current, old, future, temporary}
 * ```@enum {number}
 */
export const AddrValidityType = _enum_for_AddrValidityType;
/* END_OF_SYMBOL_DEFINITION AddrValidityType */

/* START_OF_SYMBOL_DEFINITION AddrValidityType_current */
/**
 * @summary AddrValidityType_current
 * @constant
 * @type {number}
 */
export const AddrValidityType_current: AddrValidityType =
  AddrValidityType.current; /* LONG_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION AddrValidityType_current */

/* START_OF_SYMBOL_DEFINITION current */
/**
 * @summary current
 * @constant
 * @type {number}
 */
export const current: AddrValidityType =
  AddrValidityType.current; /* SHORT_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION current */

/* START_OF_SYMBOL_DEFINITION AddrValidityType_old */
/**
 * @summary AddrValidityType_old
 * @constant
 * @type {number}
 */
export const AddrValidityType_old: AddrValidityType =
  AddrValidityType.old; /* LONG_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION AddrValidityType_old */

/* START_OF_SYMBOL_DEFINITION old */
/**
 * @summary old
 * @constant
 * @type {number}
 */
export const old: AddrValidityType =
  AddrValidityType.old; /* SHORT_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION old */

/* START_OF_SYMBOL_DEFINITION AddrValidityType_future */
/**
 * @summary AddrValidityType_future
 * @constant
 * @type {number}
 */
export const AddrValidityType_future: AddrValidityType =
  AddrValidityType.future; /* LONG_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION AddrValidityType_future */

/* START_OF_SYMBOL_DEFINITION future */
/**
 * @summary future
 * @constant
 * @type {number}
 */
export const future: AddrValidityType =
  AddrValidityType.future; /* SHORT_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION future */

/* START_OF_SYMBOL_DEFINITION AddrValidityType_temporary */
/**
 * @summary AddrValidityType_temporary
 * @constant
 * @type {number}
 */
export const AddrValidityType_temporary: AddrValidityType =
  AddrValidityType.temporary; /* LONG_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION AddrValidityType_temporary */

/* START_OF_SYMBOL_DEFINITION temporary */
/**
 * @summary temporary
 * @constant
 * @type {number}
 */
export const temporary: AddrValidityType =
  AddrValidityType.temporary; /* SHORT_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION temporary */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_AddrValidityType */
let _cached_decoder_for_AddrValidityType: $.ASN1Decoder<AddrValidityType> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_AddrValidityType */

/* START_OF_SYMBOL_DEFINITION _decode_AddrValidityType */
/**
 * @summary Decodes an ASN.1 element into a(n) AddrValidityType
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {AddrValidityType} The decoded data structure.
 */
export function _decode_AddrValidityType(el: _Element) {
  if (!_cached_decoder_for_AddrValidityType) {
    _cached_decoder_for_AddrValidityType = $._decodeEnumerated;
  }
  return _cached_decoder_for_AddrValidityType(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_AddrValidityType */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_AddrValidityType */
let _cached_encoder_for_AddrValidityType: $.ASN1Encoder<AddrValidityType> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_AddrValidityType */

/* START_OF_SYMBOL_DEFINITION _encode_AddrValidityType */
/**
 * @summary Encodes a(n) AddrValidityType into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The AddrValidityType, encoded as an ASN.1 Element.
 */
export function _encode_AddrValidityType(
  value: AddrValidityType,
  elGetter: $.ASN1Encoder<AddrValidityType>
) {
  if (!_cached_encoder_for_AddrValidityType) {
    _cached_encoder_for_AddrValidityType = $._encodeEnumerated;
  }
  return _cached_encoder_for_AddrValidityType(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_AddrValidityType */

/* eslint-enable */
