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

/* START_OF_SYMBOL_DEFINITION _enum_for_AddrRestrictionType */
/**
 * @summary AddrRestrictionType
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * AddrRestrictionType  ::=  ENUMERATED {
 *   public, secret, call-screen, no-marketing, complete-only}
 * ```@enum {number}
 */
export enum _enum_for_AddrRestrictionType {
  public_ = 0,
  secret = 1,
  call_screen = 2,
  no_marketing = 3,
  complete_only = 4,
}
/* END_OF_SYMBOL_DEFINITION _enum_for_AddrRestrictionType */

/* START_OF_SYMBOL_DEFINITION AddrRestrictionType */
/**
 * @summary AddrRestrictionType
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * AddrRestrictionType  ::=  ENUMERATED {
 *   public, secret, call-screen, no-marketing, complete-only}
 * ```@enum {number}
 */
export type AddrRestrictionType = _enum_for_AddrRestrictionType;
/* END_OF_SYMBOL_DEFINITION AddrRestrictionType */

/* START_OF_SYMBOL_DEFINITION AddrRestrictionType */
/**
 * @summary AddrRestrictionType
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * AddrRestrictionType  ::=  ENUMERATED {
 *   public, secret, call-screen, no-marketing, complete-only}
 * ```@enum {number}
 */
export const AddrRestrictionType = _enum_for_AddrRestrictionType;
/* END_OF_SYMBOL_DEFINITION AddrRestrictionType */

/* START_OF_SYMBOL_DEFINITION AddrRestrictionType_public_ */
/**
 * @summary AddrRestrictionType_public_
 * @constant
 * @type {number}
 */
export const AddrRestrictionType_public_: AddrRestrictionType =
  AddrRestrictionType.public_; /* LONG_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION AddrRestrictionType_public_ */

/* START_OF_SYMBOL_DEFINITION public_ */
/**
 * @summary public_
 * @constant
 * @type {number}
 */
export const public_: AddrRestrictionType =
  AddrRestrictionType.public_; /* SHORT_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION public_ */

/* START_OF_SYMBOL_DEFINITION AddrRestrictionType_secret */
/**
 * @summary AddrRestrictionType_secret
 * @constant
 * @type {number}
 */
export const AddrRestrictionType_secret: AddrRestrictionType =
  AddrRestrictionType.secret; /* LONG_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION AddrRestrictionType_secret */

/* START_OF_SYMBOL_DEFINITION secret */
/**
 * @summary secret
 * @constant
 * @type {number}
 */
export const secret: AddrRestrictionType =
  AddrRestrictionType.secret; /* SHORT_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION secret */

/* START_OF_SYMBOL_DEFINITION AddrRestrictionType_call_screen */
/**
 * @summary AddrRestrictionType_call_screen
 * @constant
 * @type {number}
 */
export const AddrRestrictionType_call_screen: AddrRestrictionType =
  AddrRestrictionType.call_screen; /* LONG_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION AddrRestrictionType_call_screen */

/* START_OF_SYMBOL_DEFINITION call_screen */
/**
 * @summary call_screen
 * @constant
 * @type {number}
 */
export const call_screen: AddrRestrictionType =
  AddrRestrictionType.call_screen; /* SHORT_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION call_screen */

/* START_OF_SYMBOL_DEFINITION AddrRestrictionType_no_marketing */
/**
 * @summary AddrRestrictionType_no_marketing
 * @constant
 * @type {number}
 */
export const AddrRestrictionType_no_marketing: AddrRestrictionType =
  AddrRestrictionType.no_marketing; /* LONG_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION AddrRestrictionType_no_marketing */

/* START_OF_SYMBOL_DEFINITION no_marketing */
/**
 * @summary no_marketing
 * @constant
 * @type {number}
 */
export const no_marketing: AddrRestrictionType =
  AddrRestrictionType.no_marketing; /* SHORT_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION no_marketing */

/* START_OF_SYMBOL_DEFINITION AddrRestrictionType_complete_only */
/**
 * @summary AddrRestrictionType_complete_only
 * @constant
 * @type {number}
 */
export const AddrRestrictionType_complete_only: AddrRestrictionType =
  AddrRestrictionType.complete_only; /* LONG_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION AddrRestrictionType_complete_only */

/* START_OF_SYMBOL_DEFINITION complete_only */
/**
 * @summary complete_only
 * @constant
 * @type {number}
 */
export const complete_only: AddrRestrictionType =
  AddrRestrictionType.complete_only; /* SHORT_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION complete_only */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_AddrRestrictionType */
let _cached_decoder_for_AddrRestrictionType: $.ASN1Decoder<AddrRestrictionType> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_AddrRestrictionType */

/* START_OF_SYMBOL_DEFINITION _decode_AddrRestrictionType */
/**
 * @summary Decodes an ASN.1 element into a(n) AddrRestrictionType
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {AddrRestrictionType} The decoded data structure.
 */
export function _decode_AddrRestrictionType(el: _Element) {
  if (!_cached_decoder_for_AddrRestrictionType) {
    _cached_decoder_for_AddrRestrictionType = $._decodeEnumerated;
  }
  return _cached_decoder_for_AddrRestrictionType(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_AddrRestrictionType */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_AddrRestrictionType */
let _cached_encoder_for_AddrRestrictionType: $.ASN1Encoder<AddrRestrictionType> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_AddrRestrictionType */

/* START_OF_SYMBOL_DEFINITION _encode_AddrRestrictionType */
/**
 * @summary Encodes a(n) AddrRestrictionType into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The AddrRestrictionType, encoded as an ASN.1 Element.
 */
export function _encode_AddrRestrictionType(
  value: AddrRestrictionType,
  elGetter: $.ASN1Encoder<AddrRestrictionType>
) {
  if (!_cached_encoder_for_AddrRestrictionType) {
    _cached_encoder_for_AddrRestrictionType = $._encodeEnumerated;
  }
  return _cached_encoder_for_AddrRestrictionType(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_AddrRestrictionType */

/* eslint-enable */
