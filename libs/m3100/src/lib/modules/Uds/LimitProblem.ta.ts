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

/* START_OF_SYMBOL_DEFINITION _enum_for_LimitProblem */
/**
 * @summary LimitProblem
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * LimitProblem  ::=  ENUMERATED {adminLimit, permanentRestriction}
 * ```@enum {number}
 */
export enum _enum_for_LimitProblem {
  adminLimit = 0,
  permanentRestriction = 1,
}
/* END_OF_SYMBOL_DEFINITION _enum_for_LimitProblem */

/* START_OF_SYMBOL_DEFINITION LimitProblem */
/**
 * @summary LimitProblem
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * LimitProblem  ::=  ENUMERATED {adminLimit, permanentRestriction}
 * ```@enum {number}
 */
export type LimitProblem = _enum_for_LimitProblem;
/* END_OF_SYMBOL_DEFINITION LimitProblem */

/* START_OF_SYMBOL_DEFINITION LimitProblem */
/**
 * @summary LimitProblem
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * LimitProblem  ::=  ENUMERATED {adminLimit, permanentRestriction}
 * ```@enum {number}
 */
export const LimitProblem = _enum_for_LimitProblem;
/* END_OF_SYMBOL_DEFINITION LimitProblem */

/* START_OF_SYMBOL_DEFINITION LimitProblem_adminLimit */
/**
 * @summary LimitProblem_adminLimit
 * @constant
 * @type {number}
 */
export const LimitProblem_adminLimit: LimitProblem =
  LimitProblem.adminLimit; /* LONG_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION LimitProblem_adminLimit */

/* START_OF_SYMBOL_DEFINITION adminLimit */
/**
 * @summary adminLimit
 * @constant
 * @type {number}
 */
export const adminLimit: LimitProblem =
  LimitProblem.adminLimit; /* SHORT_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION adminLimit */

/* START_OF_SYMBOL_DEFINITION LimitProblem_permanentRestriction */
/**
 * @summary LimitProblem_permanentRestriction
 * @constant
 * @type {number}
 */
export const LimitProblem_permanentRestriction: LimitProblem =
  LimitProblem.permanentRestriction; /* LONG_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION LimitProblem_permanentRestriction */

/* START_OF_SYMBOL_DEFINITION permanentRestriction */
/**
 * @summary permanentRestriction
 * @constant
 * @type {number}
 */
export const permanentRestriction: LimitProblem =
  LimitProblem.permanentRestriction; /* SHORT_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION permanentRestriction */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_LimitProblem */
let _cached_decoder_for_LimitProblem: $.ASN1Decoder<LimitProblem> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_LimitProblem */

/* START_OF_SYMBOL_DEFINITION _decode_LimitProblem */
/**
 * @summary Decodes an ASN.1 element into a(n) LimitProblem
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {LimitProblem} The decoded data structure.
 */
export function _decode_LimitProblem(el: _Element) {
  if (!_cached_decoder_for_LimitProblem) {
    _cached_decoder_for_LimitProblem = $._decodeEnumerated;
  }
  return _cached_decoder_for_LimitProblem(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_LimitProblem */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_LimitProblem */
let _cached_encoder_for_LimitProblem: $.ASN1Encoder<LimitProblem> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_LimitProblem */

/* START_OF_SYMBOL_DEFINITION _encode_LimitProblem */
/**
 * @summary Encodes a(n) LimitProblem into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The LimitProblem, encoded as an ASN.1 Element.
 */
export function _encode_LimitProblem(
  value: LimitProblem,
  elGetter: $.ASN1Encoder<LimitProblem>
) {
  if (!_cached_encoder_for_LimitProblem) {
    _cached_encoder_for_LimitProblem = $._encodeEnumerated;
  }
  return _cached_encoder_for_LimitProblem(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_LimitProblem */

/* eslint-enable */
