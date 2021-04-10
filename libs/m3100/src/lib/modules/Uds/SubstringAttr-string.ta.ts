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

/* START_OF_SYMBOL_DEFINITION _enum_for_SubstringAttr_string */
/**
 * @summary SubstringAttr_string
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * SubstringAttr-string ::= ENUMERATED { -- REMOVED_FROM_UNNESTING -- }
 * ```@enum {number}
 */
export enum _enum_for_SubstringAttr_string {
  exact = 0,
  deletion = 1,
  restrDeletion = 2,
  permutation = 3,
  permutationAndDeletion = 4,
  providerDefined = 5,
}
/* END_OF_SYMBOL_DEFINITION _enum_for_SubstringAttr_string */

/* START_OF_SYMBOL_DEFINITION SubstringAttr_string */
/**
 * @summary SubstringAttr_string
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * SubstringAttr-string ::= ENUMERATED { -- REMOVED_FROM_UNNESTING -- }
 * ```@enum {number}
 */
export type SubstringAttr_string = _enum_for_SubstringAttr_string;
/* END_OF_SYMBOL_DEFINITION SubstringAttr_string */

/* START_OF_SYMBOL_DEFINITION SubstringAttr_string */
/**
 * @summary SubstringAttr_string
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * SubstringAttr-string ::= ENUMERATED { -- REMOVED_FROM_UNNESTING -- }
 * ```@enum {number}
 */
export const SubstringAttr_string = _enum_for_SubstringAttr_string;
/* END_OF_SYMBOL_DEFINITION SubstringAttr_string */

/* START_OF_SYMBOL_DEFINITION SubstringAttr_string_exact */
/**
 * @summary SubstringAttr_string_exact
 * @constant
 * @type {number}
 */
export const SubstringAttr_string_exact: SubstringAttr_string =
  SubstringAttr_string.exact; /* LONG_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION SubstringAttr_string_exact */

/* START_OF_SYMBOL_DEFINITION exact */
/**
 * @summary exact
 * @constant
 * @type {number}
 */
export const exact: SubstringAttr_string =
  SubstringAttr_string.exact; /* SHORT_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION exact */

/* START_OF_SYMBOL_DEFINITION SubstringAttr_string_deletion */
/**
 * @summary SubstringAttr_string_deletion
 * @constant
 * @type {number}
 */
export const SubstringAttr_string_deletion: SubstringAttr_string =
  SubstringAttr_string.deletion; /* LONG_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION SubstringAttr_string_deletion */

/* START_OF_SYMBOL_DEFINITION deletion */
/**
 * @summary deletion
 * @constant
 * @type {number}
 */
export const deletion: SubstringAttr_string =
  SubstringAttr_string.deletion; /* SHORT_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION deletion */

/* START_OF_SYMBOL_DEFINITION SubstringAttr_string_restrDeletion */
/**
 * @summary SubstringAttr_string_restrDeletion
 * @constant
 * @type {number}
 */
export const SubstringAttr_string_restrDeletion: SubstringAttr_string =
  SubstringAttr_string.restrDeletion; /* LONG_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION SubstringAttr_string_restrDeletion */

/* START_OF_SYMBOL_DEFINITION restrDeletion */
/**
 * @summary restrDeletion
 * @constant
 * @type {number}
 */
export const restrDeletion: SubstringAttr_string =
  SubstringAttr_string.restrDeletion; /* SHORT_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION restrDeletion */

/* START_OF_SYMBOL_DEFINITION SubstringAttr_string_permutation */
/**
 * @summary SubstringAttr_string_permutation
 * @constant
 * @type {number}
 */
export const SubstringAttr_string_permutation: SubstringAttr_string =
  SubstringAttr_string.permutation; /* LONG_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION SubstringAttr_string_permutation */

/* START_OF_SYMBOL_DEFINITION permutation */
/**
 * @summary permutation
 * @constant
 * @type {number}
 */
export const permutation: SubstringAttr_string =
  SubstringAttr_string.permutation; /* SHORT_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION permutation */

/* START_OF_SYMBOL_DEFINITION SubstringAttr_string_permutationAndDeletion */
/**
 * @summary SubstringAttr_string_permutationAndDeletion
 * @constant
 * @type {number}
 */
export const SubstringAttr_string_permutationAndDeletion: SubstringAttr_string =
  SubstringAttr_string.permutationAndDeletion; /* LONG_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION SubstringAttr_string_permutationAndDeletion */

/* START_OF_SYMBOL_DEFINITION permutationAndDeletion */
/**
 * @summary permutationAndDeletion
 * @constant
 * @type {number}
 */
export const permutationAndDeletion: SubstringAttr_string =
  SubstringAttr_string.permutationAndDeletion; /* SHORT_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION permutationAndDeletion */

/* START_OF_SYMBOL_DEFINITION SubstringAttr_string_providerDefined */
/**
 * @summary SubstringAttr_string_providerDefined
 * @constant
 * @type {number}
 */
export const SubstringAttr_string_providerDefined: SubstringAttr_string =
  SubstringAttr_string.providerDefined; /* LONG_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION SubstringAttr_string_providerDefined */

/* START_OF_SYMBOL_DEFINITION providerDefined */
/**
 * @summary providerDefined
 * @constant
 * @type {number}
 */
export const providerDefined: SubstringAttr_string =
  SubstringAttr_string.providerDefined; /* SHORT_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION providerDefined */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_SubstringAttr_string */
let _cached_decoder_for_SubstringAttr_string: $.ASN1Decoder<SubstringAttr_string> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_SubstringAttr_string */

/* START_OF_SYMBOL_DEFINITION _decode_SubstringAttr_string */
/**
 * @summary Decodes an ASN.1 element into a(n) SubstringAttr_string
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {SubstringAttr_string} The decoded data structure.
 */
export function _decode_SubstringAttr_string(el: _Element) {
  if (!_cached_decoder_for_SubstringAttr_string) {
    _cached_decoder_for_SubstringAttr_string = $._decodeEnumerated;
  }
  return _cached_decoder_for_SubstringAttr_string(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_SubstringAttr_string */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_SubstringAttr_string */
let _cached_encoder_for_SubstringAttr_string: $.ASN1Encoder<SubstringAttr_string> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_SubstringAttr_string */

/* START_OF_SYMBOL_DEFINITION _encode_SubstringAttr_string */
/**
 * @summary Encodes a(n) SubstringAttr_string into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The SubstringAttr_string, encoded as an ASN.1 Element.
 */
export function _encode_SubstringAttr_string(
  value: SubstringAttr_string,
  elGetter: $.ASN1Encoder<SubstringAttr_string>
) {
  if (!_cached_encoder_for_SubstringAttr_string) {
    _cached_encoder_for_SubstringAttr_string = $._encodeEnumerated;
  }
  return _cached_encoder_for_SubstringAttr_string(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_SubstringAttr_string */

/* eslint-enable */
