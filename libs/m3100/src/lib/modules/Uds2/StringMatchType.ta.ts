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

/* START_OF_SYMBOL_DEFINITION _enum_for_StringMatchType */
/**
 * @summary StringMatchType
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * StringMatchType  ::=  ENUMERATED {
 *   exact, deletion, restrictedDeletion, permutation, permutationAndDeletion,
 *   providerDefined}
 * ```@enum {number}
 */
export enum _enum_for_StringMatchType {
  exact = 0,
  deletion = 1,
  restrictedDeletion = 2,
  permutation = 3,
  permutationAndDeletion = 4,
  providerDefined = 5,
}
/* END_OF_SYMBOL_DEFINITION _enum_for_StringMatchType */

/* START_OF_SYMBOL_DEFINITION StringMatchType */
/**
 * @summary StringMatchType
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * StringMatchType  ::=  ENUMERATED {
 *   exact, deletion, restrictedDeletion, permutation, permutationAndDeletion,
 *   providerDefined}
 * ```@enum {number}
 */
export type StringMatchType = _enum_for_StringMatchType;
/* END_OF_SYMBOL_DEFINITION StringMatchType */

/* START_OF_SYMBOL_DEFINITION StringMatchType */
/**
 * @summary StringMatchType
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * StringMatchType  ::=  ENUMERATED {
 *   exact, deletion, restrictedDeletion, permutation, permutationAndDeletion,
 *   providerDefined}
 * ```@enum {number}
 */
export const StringMatchType = _enum_for_StringMatchType;
/* END_OF_SYMBOL_DEFINITION StringMatchType */

/* START_OF_SYMBOL_DEFINITION StringMatchType_exact */
/**
 * @summary StringMatchType_exact
 * @constant
 * @type {number}
 */
export const StringMatchType_exact: StringMatchType =
  StringMatchType.exact; /* LONG_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION StringMatchType_exact */

/* START_OF_SYMBOL_DEFINITION exact */
/**
 * @summary exact
 * @constant
 * @type {number}
 */
export const exact: StringMatchType =
  StringMatchType.exact; /* SHORT_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION exact */

/* START_OF_SYMBOL_DEFINITION StringMatchType_deletion */
/**
 * @summary StringMatchType_deletion
 * @constant
 * @type {number}
 */
export const StringMatchType_deletion: StringMatchType =
  StringMatchType.deletion; /* LONG_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION StringMatchType_deletion */

/* START_OF_SYMBOL_DEFINITION deletion */
/**
 * @summary deletion
 * @constant
 * @type {number}
 */
export const deletion: StringMatchType =
  StringMatchType.deletion; /* SHORT_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION deletion */

/* START_OF_SYMBOL_DEFINITION StringMatchType_restrictedDeletion */
/**
 * @summary StringMatchType_restrictedDeletion
 * @constant
 * @type {number}
 */
export const StringMatchType_restrictedDeletion: StringMatchType =
  StringMatchType.restrictedDeletion; /* LONG_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION StringMatchType_restrictedDeletion */

/* START_OF_SYMBOL_DEFINITION restrictedDeletion */
/**
 * @summary restrictedDeletion
 * @constant
 * @type {number}
 */
export const restrictedDeletion: StringMatchType =
  StringMatchType.restrictedDeletion; /* SHORT_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION restrictedDeletion */

/* START_OF_SYMBOL_DEFINITION StringMatchType_permutation */
/**
 * @summary StringMatchType_permutation
 * @constant
 * @type {number}
 */
export const StringMatchType_permutation: StringMatchType =
  StringMatchType.permutation; /* LONG_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION StringMatchType_permutation */

/* START_OF_SYMBOL_DEFINITION permutation */
/**
 * @summary permutation
 * @constant
 * @type {number}
 */
export const permutation: StringMatchType =
  StringMatchType.permutation; /* SHORT_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION permutation */

/* START_OF_SYMBOL_DEFINITION StringMatchType_permutationAndDeletion */
/**
 * @summary StringMatchType_permutationAndDeletion
 * @constant
 * @type {number}
 */
export const StringMatchType_permutationAndDeletion: StringMatchType =
  StringMatchType.permutationAndDeletion; /* LONG_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION StringMatchType_permutationAndDeletion */

/* START_OF_SYMBOL_DEFINITION permutationAndDeletion */
/**
 * @summary permutationAndDeletion
 * @constant
 * @type {number}
 */
export const permutationAndDeletion: StringMatchType =
  StringMatchType.permutationAndDeletion; /* SHORT_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION permutationAndDeletion */

/* START_OF_SYMBOL_DEFINITION StringMatchType_providerDefined */
/**
 * @summary StringMatchType_providerDefined
 * @constant
 * @type {number}
 */
export const StringMatchType_providerDefined: StringMatchType =
  StringMatchType.providerDefined; /* LONG_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION StringMatchType_providerDefined */

/* START_OF_SYMBOL_DEFINITION providerDefined */
/**
 * @summary providerDefined
 * @constant
 * @type {number}
 */
export const providerDefined: StringMatchType =
  StringMatchType.providerDefined; /* SHORT_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION providerDefined */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_StringMatchType */
let _cached_decoder_for_StringMatchType: $.ASN1Decoder<StringMatchType> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_StringMatchType */

/* START_OF_SYMBOL_DEFINITION _decode_StringMatchType */
/**
 * @summary Decodes an ASN.1 element into a(n) StringMatchType
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {StringMatchType} The decoded data structure.
 */
export function _decode_StringMatchType(el: _Element) {
  if (!_cached_decoder_for_StringMatchType) {
    _cached_decoder_for_StringMatchType = $._decodeEnumerated;
  }
  return _cached_decoder_for_StringMatchType(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_StringMatchType */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_StringMatchType */
let _cached_encoder_for_StringMatchType: $.ASN1Encoder<StringMatchType> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_StringMatchType */

/* START_OF_SYMBOL_DEFINITION _encode_StringMatchType */
/**
 * @summary Encodes a(n) StringMatchType into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The StringMatchType, encoded as an ASN.1 Element.
 */
export function _encode_StringMatchType(
  value: StringMatchType,
  elGetter: $.ASN1Encoder<StringMatchType>
) {
  if (!_cached_encoder_for_StringMatchType) {
    _cached_encoder_for_StringMatchType = $._encodeEnumerated;
  }
  return _cached_encoder_for_StringMatchType(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_StringMatchType */

/* eslint-enable */
