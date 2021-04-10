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

/* START_OF_SYMBOL_DEFINITION State_Result */
/**
 * @summary State_Result
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * State-Result  ::=  [APPLICATION 21] IMPLICIT INTEGER {success(0), failure(1)
 * }
 * ```
 */
export type State_Result = INTEGER;
/* END_OF_SYMBOL_DEFINITION State_Result */

/* START_OF_SYMBOL_DEFINITION State_Result_success */
/**
 * @summary State_Result_success
 * @constant
 * @type {number}
 */
export const State_Result_success: State_Result = 0; /* LONG_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION State_Result_success */

/* START_OF_SYMBOL_DEFINITION success */
/**
 * @summary State_Result_success
 * @constant
 * @type {number}
 */
export const success: State_Result = State_Result_success; /* SHORT_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION success */

/* START_OF_SYMBOL_DEFINITION State_Result_failure */
/**
 * @summary State_Result_failure
 * @constant
 * @type {number}
 */
export const State_Result_failure: State_Result = 1; /* LONG_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION State_Result_failure */

/* START_OF_SYMBOL_DEFINITION failure */
/**
 * @summary State_Result_failure
 * @constant
 * @type {number}
 */
export const failure: State_Result = State_Result_failure; /* SHORT_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION failure */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_State_Result */
let _cached_decoder_for_State_Result: $.ASN1Decoder<State_Result> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_State_Result */

/* START_OF_SYMBOL_DEFINITION _decode_State_Result */
/**
 * @summary Decodes an ASN.1 element into a(n) State_Result
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {State_Result} The decoded data structure.
 */
export function _decode_State_Result(el: _Element) {
  if (!_cached_decoder_for_State_Result) {
    _cached_decoder_for_State_Result = $._decode_implicit<State_Result>(
      () => $._decodeInteger
    );
  }
  return _cached_decoder_for_State_Result(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_State_Result */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_State_Result */
let _cached_encoder_for_State_Result: $.ASN1Encoder<State_Result> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_State_Result */

/* START_OF_SYMBOL_DEFINITION _encode_State_Result */
/**
 * @summary Encodes a(n) State_Result into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The State_Result, encoded as an ASN.1 Element.
 */
export function _encode_State_Result(
  value: State_Result,
  elGetter: $.ASN1Encoder<State_Result>
) {
  if (!_cached_encoder_for_State_Result) {
    _cached_encoder_for_State_Result = $._encode_implicit(
      _TagClass.application,
      21,
      () => $._encodeInteger,
      $.BER
    );
  }
  return _cached_encoder_for_State_Result(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_State_Result */

/* eslint-enable */
