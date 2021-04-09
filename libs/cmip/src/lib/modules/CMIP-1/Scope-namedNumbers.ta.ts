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

/* START_OF_SYMBOL_DEFINITION Scope_namedNumbers */
/**
 * @summary Scope_namedNumbers
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * Scope-namedNumbers ::= INTEGER { -- REMOVED_FROM_UNNESTING -- }
 * ```
 */
export type Scope_namedNumbers = INTEGER;
/* END_OF_SYMBOL_DEFINITION Scope_namedNumbers */

/* START_OF_SYMBOL_DEFINITION Scope_namedNumbers_baseObject */
/**
 * @summary Scope_namedNumbers_baseObject
 * @constant
 * @type {number}
 */
export const Scope_namedNumbers_baseObject: Scope_namedNumbers = 0; /* LONG_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION Scope_namedNumbers_baseObject */

/* START_OF_SYMBOL_DEFINITION baseObject */
/**
 * @summary Scope_namedNumbers_baseObject
 * @constant
 * @type {number}
 */
export const baseObject: Scope_namedNumbers = Scope_namedNumbers_baseObject; /* SHORT_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION baseObject */

/* START_OF_SYMBOL_DEFINITION Scope_namedNumbers_firstLevelOnly */
/**
 * @summary Scope_namedNumbers_firstLevelOnly
 * @constant
 * @type {number}
 */
export const Scope_namedNumbers_firstLevelOnly: Scope_namedNumbers = 1; /* LONG_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION Scope_namedNumbers_firstLevelOnly */

/* START_OF_SYMBOL_DEFINITION firstLevelOnly */
/**
 * @summary Scope_namedNumbers_firstLevelOnly
 * @constant
 * @type {number}
 */
export const firstLevelOnly: Scope_namedNumbers = Scope_namedNumbers_firstLevelOnly; /* SHORT_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION firstLevelOnly */

/* START_OF_SYMBOL_DEFINITION Scope_namedNumbers_wholeSubtree */
/**
 * @summary Scope_namedNumbers_wholeSubtree
 * @constant
 * @type {number}
 */
export const Scope_namedNumbers_wholeSubtree: Scope_namedNumbers = 2; /* LONG_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION Scope_namedNumbers_wholeSubtree */

/* START_OF_SYMBOL_DEFINITION wholeSubtree */
/**
 * @summary Scope_namedNumbers_wholeSubtree
 * @constant
 * @type {number}
 */
export const wholeSubtree: Scope_namedNumbers = Scope_namedNumbers_wholeSubtree; /* SHORT_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION wholeSubtree */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_Scope_namedNumbers */
let _cached_decoder_for_Scope_namedNumbers: $.ASN1Decoder<Scope_namedNumbers> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_Scope_namedNumbers */

/* START_OF_SYMBOL_DEFINITION _decode_Scope_namedNumbers */
/**
 * @summary Decodes an ASN.1 element into a(n) Scope_namedNumbers
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {Scope_namedNumbers} The decoded data structure.
 */
export function _decode_Scope_namedNumbers(el: _Element) {
  if (!_cached_decoder_for_Scope_namedNumbers) {
    _cached_decoder_for_Scope_namedNumbers = $._decodeInteger;
  }
  return _cached_decoder_for_Scope_namedNumbers(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_Scope_namedNumbers */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_Scope_namedNumbers */
let _cached_encoder_for_Scope_namedNumbers: $.ASN1Encoder<Scope_namedNumbers> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_Scope_namedNumbers */

/* START_OF_SYMBOL_DEFINITION _encode_Scope_namedNumbers */
/**
 * @summary Encodes a(n) Scope_namedNumbers into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The Scope_namedNumbers, encoded as an ASN.1 Element.
 */
export function _encode_Scope_namedNumbers(
  value: Scope_namedNumbers,
  elGetter: $.ASN1Encoder<Scope_namedNumbers>
) {
  if (!_cached_encoder_for_Scope_namedNumbers) {
    _cached_encoder_for_Scope_namedNumbers = $._encodeInteger;
  }
  return _cached_encoder_for_Scope_namedNumbers(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_Scope_namedNumbers */

/* eslint-enable */
