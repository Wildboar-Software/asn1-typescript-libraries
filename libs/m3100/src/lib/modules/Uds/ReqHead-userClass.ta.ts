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

/* START_OF_SYMBOL_DEFINITION _enum_for_ReqHead_userClass */
/**
 * @summary ReqHead_userClass
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ReqHead-userClass ::= ENUMERATED { -- REMOVED_FROM_UNNESTING -- }
 * ```@enum {number}
 */
export enum _enum_for_ReqHead_userClass {
  operator = 0,
  publicUser = 1,
}
/* END_OF_SYMBOL_DEFINITION _enum_for_ReqHead_userClass */

/* START_OF_SYMBOL_DEFINITION ReqHead_userClass */
/**
 * @summary ReqHead_userClass
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ReqHead-userClass ::= ENUMERATED { -- REMOVED_FROM_UNNESTING -- }
 * ```@enum {number}
 */
export type ReqHead_userClass = _enum_for_ReqHead_userClass;
/* END_OF_SYMBOL_DEFINITION ReqHead_userClass */

/* START_OF_SYMBOL_DEFINITION ReqHead_userClass */
/**
 * @summary ReqHead_userClass
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ReqHead-userClass ::= ENUMERATED { -- REMOVED_FROM_UNNESTING -- }
 * ```@enum {number}
 */
export const ReqHead_userClass = _enum_for_ReqHead_userClass;
/* END_OF_SYMBOL_DEFINITION ReqHead_userClass */

/* START_OF_SYMBOL_DEFINITION ReqHead_userClass_operator */
/**
 * @summary ReqHead_userClass_operator
 * @constant
 * @type {number}
 */
export const ReqHead_userClass_operator: ReqHead_userClass =
  ReqHead_userClass.operator; /* LONG_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION ReqHead_userClass_operator */

/* START_OF_SYMBOL_DEFINITION operator */
/**
 * @summary operator
 * @constant
 * @type {number}
 */
export const operator: ReqHead_userClass =
  ReqHead_userClass.operator; /* SHORT_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION operator */

/* START_OF_SYMBOL_DEFINITION ReqHead_userClass_publicUser */
/**
 * @summary ReqHead_userClass_publicUser
 * @constant
 * @type {number}
 */
export const ReqHead_userClass_publicUser: ReqHead_userClass =
  ReqHead_userClass.publicUser; /* LONG_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION ReqHead_userClass_publicUser */

/* START_OF_SYMBOL_DEFINITION publicUser */
/**
 * @summary publicUser
 * @constant
 * @type {number}
 */
export const publicUser: ReqHead_userClass =
  ReqHead_userClass.publicUser; /* SHORT_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION publicUser */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_ReqHead_userClass */
let _cached_decoder_for_ReqHead_userClass: $.ASN1Decoder<ReqHead_userClass> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_ReqHead_userClass */

/* START_OF_SYMBOL_DEFINITION _decode_ReqHead_userClass */
/**
 * @summary Decodes an ASN.1 element into a(n) ReqHead_userClass
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {ReqHead_userClass} The decoded data structure.
 */
export function _decode_ReqHead_userClass(el: _Element) {
  if (!_cached_decoder_for_ReqHead_userClass) {
    _cached_decoder_for_ReqHead_userClass = $._decodeEnumerated;
  }
  return _cached_decoder_for_ReqHead_userClass(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_ReqHead_userClass */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_ReqHead_userClass */
let _cached_encoder_for_ReqHead_userClass: $.ASN1Encoder<ReqHead_userClass> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_ReqHead_userClass */

/* START_OF_SYMBOL_DEFINITION _encode_ReqHead_userClass */
/**
 * @summary Encodes a(n) ReqHead_userClass into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ReqHead_userClass, encoded as an ASN.1 Element.
 */
export function _encode_ReqHead_userClass(
  value: ReqHead_userClass,
  elGetter: $.ASN1Encoder<ReqHead_userClass>
) {
  if (!_cached_encoder_for_ReqHead_userClass) {
    _cached_encoder_for_ReqHead_userClass = $._encodeEnumerated;
  }
  return _cached_encoder_for_ReqHead_userClass(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_ReqHead_userClass */

/* eslint-enable */
