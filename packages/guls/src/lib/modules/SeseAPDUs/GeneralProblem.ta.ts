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

/* START_OF_SYMBOL_DEFINITION _enum_for_GeneralProblem */
/**
 * @summary GeneralProblem
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * GeneralProblem  ::=  ENUMERATED {invalidAPDU(0)}
 * ```@enum {number}
 */
export enum _enum_for_GeneralProblem {
  invalidAPDU = 0,
}
/* END_OF_SYMBOL_DEFINITION _enum_for_GeneralProblem */

/* START_OF_SYMBOL_DEFINITION GeneralProblem */
/**
 * @summary GeneralProblem
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * GeneralProblem  ::=  ENUMERATED {invalidAPDU(0)}
 * ```@enum {number}
 */
export type GeneralProblem = _enum_for_GeneralProblem;
/* END_OF_SYMBOL_DEFINITION GeneralProblem */

/* START_OF_SYMBOL_DEFINITION GeneralProblem */
/**
 * @summary GeneralProblem
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * GeneralProblem  ::=  ENUMERATED {invalidAPDU(0)}
 * ```@enum {number}
 */
export const GeneralProblem = _enum_for_GeneralProblem;
/* END_OF_SYMBOL_DEFINITION GeneralProblem */

/* START_OF_SYMBOL_DEFINITION GeneralProblem_invalidAPDU */
/**
 * @summary GeneralProblem_invalidAPDU
 * @constant
 * @type {number}
 */
export const GeneralProblem_invalidAPDU: GeneralProblem =
  GeneralProblem.invalidAPDU; /* LONG_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION GeneralProblem_invalidAPDU */

/* START_OF_SYMBOL_DEFINITION invalidAPDU */
/**
 * @summary invalidAPDU
 * @constant
 * @type {number}
 */
export const invalidAPDU: GeneralProblem =
  GeneralProblem.invalidAPDU; /* SHORT_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION invalidAPDU */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_GeneralProblem */
let _cached_decoder_for_GeneralProblem: $.ASN1Decoder<GeneralProblem> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_GeneralProblem */

/* START_OF_SYMBOL_DEFINITION _decode_GeneralProblem */
/**
 * @summary Decodes an ASN.1 element into a(n) GeneralProblem
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {GeneralProblem} The decoded data structure.
 */
export function _decode_GeneralProblem(el: _Element) {
  if (!_cached_decoder_for_GeneralProblem) {
    _cached_decoder_for_GeneralProblem = $._decodeEnumerated;
  }
  return _cached_decoder_for_GeneralProblem(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_GeneralProblem */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_GeneralProblem */
let _cached_encoder_for_GeneralProblem: $.ASN1Encoder<GeneralProblem> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_GeneralProblem */

/* START_OF_SYMBOL_DEFINITION _encode_GeneralProblem */
/**
 * @summary Encodes a(n) GeneralProblem into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The GeneralProblem, encoded as an ASN.1 Element.
 */
export function _encode_GeneralProblem(
  value: GeneralProblem,
  elGetter: $.ASN1Encoder<GeneralProblem>
) {
  if (!_cached_encoder_for_GeneralProblem) {
    _cached_encoder_for_GeneralProblem = $._encodeEnumerated;
  }
  return _cached_encoder_for_GeneralProblem(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_GeneralProblem */

/* eslint-enable */
