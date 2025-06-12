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

/* START_OF_SYMBOL_DEFINITION Result */
/**
 * @summary Result
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * Result  ::=  INTEGER {acceptance(0), user-rejection(1), provider-rejection(2)}
 * ```
 */
export type Result = INTEGER;
/* END_OF_SYMBOL_DEFINITION Result */

/* START_OF_SYMBOL_DEFINITION Result_acceptance */
/**
 * @summary Result_acceptance
 * @constant
 * @type {number}
 */
export const Result_acceptance: Result = 0; /* LONG_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION Result_acceptance */

/* START_OF_SYMBOL_DEFINITION acceptance */
/**
 * @summary Result_acceptance
 * @constant
 * @type {number}
 */
export const acceptance: Result = Result_acceptance; /* SHORT_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION acceptance */

/* START_OF_SYMBOL_DEFINITION Result_user_rejection */
/**
 * @summary Result_user_rejection
 * @constant
 * @type {number}
 */
export const Result_user_rejection: Result = 1; /* LONG_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION Result_user_rejection */

/* START_OF_SYMBOL_DEFINITION user_rejection */
/**
 * @summary Result_user_rejection
 * @constant
 * @type {number}
 */
export const user_rejection: Result = Result_user_rejection; /* SHORT_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION user_rejection */

/* START_OF_SYMBOL_DEFINITION Result_provider_rejection */
/**
 * @summary Result_provider_rejection
 * @constant
 * @type {number}
 */
export const Result_provider_rejection: Result = 2; /* LONG_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION Result_provider_rejection */

/* START_OF_SYMBOL_DEFINITION provider_rejection */
/**
 * @summary Result_provider_rejection
 * @constant
 * @type {number}
 */
export const provider_rejection: Result = Result_provider_rejection; /* SHORT_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION provider_rejection */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_Result */
let _cached_decoder_for_Result: $.ASN1Decoder<Result> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_Result */

/* START_OF_SYMBOL_DEFINITION _decode_Result */
/**
 * @summary Decodes an ASN.1 element into a(n) Result
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {Result} The decoded data structure.
 */
export function _decode_Result(el: _Element) {
  if (!_cached_decoder_for_Result) {
    _cached_decoder_for_Result = $._decodeInteger;
  }
  return _cached_decoder_for_Result(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_Result */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_Result */
let _cached_encoder_for_Result: $.ASN1Encoder<Result> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_Result */

/* START_OF_SYMBOL_DEFINITION _encode_Result */
/**
 * @summary Encodes a(n) Result into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The Result, encoded as an ASN.1 Element.
 */
export function _encode_Result(value: Result, elGetter: $.ASN1Encoder<Result>) {
  if (!_cached_encoder_for_Result) {
    _cached_encoder_for_Result = $._encodeInteger;
  }
  return _cached_encoder_for_Result(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_Result */

/* eslint-enable */
