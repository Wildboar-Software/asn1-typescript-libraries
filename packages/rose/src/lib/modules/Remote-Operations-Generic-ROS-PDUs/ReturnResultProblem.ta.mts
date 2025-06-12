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
import * as $ from 'asn1-ts/dist/functional.mjs';

/* START_OF_SYMBOL_DEFINITION ReturnResultProblem */
/**
 * @summary ReturnResultProblem
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ReturnResultProblem  ::=  INTEGER {
 *   unrecognizedInvocation(0), resultResponseUnexpected(1), mistypedResult(2)
 * }
 * ```
 */
export type ReturnResultProblem = INTEGER;
/* END_OF_SYMBOL_DEFINITION ReturnResultProblem */

/* START_OF_SYMBOL_DEFINITION ReturnResultProblem_unrecognizedInvocation */
/**
 * @summary ReturnResultProblem_unrecognizedInvocation
 * @constant
 * @type {number}
 */
export const ReturnResultProblem_unrecognizedInvocation: ReturnResultProblem = 0; /* LONG_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION ReturnResultProblem_unrecognizedInvocation */

/* START_OF_SYMBOL_DEFINITION unrecognizedInvocation */
/**
 * @summary ReturnResultProblem_unrecognizedInvocation
 * @constant
 * @type {number}
 */
export const unrecognizedInvocation: ReturnResultProblem = ReturnResultProblem_unrecognizedInvocation; /* SHORT_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION unrecognizedInvocation */

/* START_OF_SYMBOL_DEFINITION ReturnResultProblem_resultResponseUnexpected */
/**
 * @summary ReturnResultProblem_resultResponseUnexpected
 * @constant
 * @type {number}
 */
export const ReturnResultProblem_resultResponseUnexpected: ReturnResultProblem = 1; /* LONG_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION ReturnResultProblem_resultResponseUnexpected */

/* START_OF_SYMBOL_DEFINITION resultResponseUnexpected */
/**
 * @summary ReturnResultProblem_resultResponseUnexpected
 * @constant
 * @type {number}
 */
export const resultResponseUnexpected: ReturnResultProblem = ReturnResultProblem_resultResponseUnexpected; /* SHORT_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION resultResponseUnexpected */

/* START_OF_SYMBOL_DEFINITION ReturnResultProblem_mistypedResult */
/**
 * @summary ReturnResultProblem_mistypedResult
 * @constant
 * @type {number}
 */
export const ReturnResultProblem_mistypedResult: ReturnResultProblem = 2; /* LONG_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION ReturnResultProblem_mistypedResult */

/* START_OF_SYMBOL_DEFINITION mistypedResult */
/**
 * @summary ReturnResultProblem_mistypedResult
 * @constant
 * @type {number}
 */
export const mistypedResult: ReturnResultProblem = ReturnResultProblem_mistypedResult; /* SHORT_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION mistypedResult */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_ReturnResultProblem */
let _cached_decoder_for_ReturnResultProblem: $.ASN1Decoder<ReturnResultProblem> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_ReturnResultProblem */

/* START_OF_SYMBOL_DEFINITION _decode_ReturnResultProblem */
/**
 * @summary Decodes an ASN.1 element into a(n) ReturnResultProblem
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {ReturnResultProblem} The decoded data structure.
 */
export function _decode_ReturnResultProblem(el: _Element) {
  if (!_cached_decoder_for_ReturnResultProblem) {
    _cached_decoder_for_ReturnResultProblem = $._decodeInteger;
  }
  return _cached_decoder_for_ReturnResultProblem(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_ReturnResultProblem */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_ReturnResultProblem */
let _cached_encoder_for_ReturnResultProblem: $.ASN1Encoder<ReturnResultProblem> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_ReturnResultProblem */

/* START_OF_SYMBOL_DEFINITION _encode_ReturnResultProblem */
/**
 * @summary Encodes a(n) ReturnResultProblem into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ReturnResultProblem, encoded as an ASN.1 Element.
 */
export function _encode_ReturnResultProblem(
  value: ReturnResultProblem,
  elGetter: $.ASN1Encoder<ReturnResultProblem>
) {
  if (!_cached_encoder_for_ReturnResultProblem) {
    _cached_encoder_for_ReturnResultProblem = $._encodeInteger;
  }
  return _cached_encoder_for_ReturnResultProblem(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_ReturnResultProblem */

/* eslint-enable */
