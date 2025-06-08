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

/* START_OF_SYMBOL_DEFINITION _enum_for_AbortProblem */
/**
 * @summary AbortProblem
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * AbortProblem  ::=  ENUMERATED {
 *   unrecognizedInvocationId(0), abortUnexpected(1), unrecognizedError(2),
 *   unexpectedError(3), mistypedErrorParameter(4)}
 * ```@enum {number}
 */
export enum _enum_for_AbortProblem {
  unrecognizedInvocationId = 0,
  abortUnexpected = 1,
  unrecognizedError = 2,
  unexpectedError = 3,
  mistypedErrorParameter = 4,
}
/* END_OF_SYMBOL_DEFINITION _enum_for_AbortProblem */

/* START_OF_SYMBOL_DEFINITION AbortProblem */
/**
 * @summary AbortProblem
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * AbortProblem  ::=  ENUMERATED {
 *   unrecognizedInvocationId(0), abortUnexpected(1), unrecognizedError(2),
 *   unexpectedError(3), mistypedErrorParameter(4)}
 * ```@enum {number}
 */
export type AbortProblem = _enum_for_AbortProblem;
/* END_OF_SYMBOL_DEFINITION AbortProblem */

/* START_OF_SYMBOL_DEFINITION AbortProblem */
/**
 * @summary AbortProblem
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * AbortProblem  ::=  ENUMERATED {
 *   unrecognizedInvocationId(0), abortUnexpected(1), unrecognizedError(2),
 *   unexpectedError(3), mistypedErrorParameter(4)}
 * ```@enum {number}
 */
export const AbortProblem = _enum_for_AbortProblem;
/* END_OF_SYMBOL_DEFINITION AbortProblem */

/* START_OF_SYMBOL_DEFINITION AbortProblem_unrecognizedInvocationId */
/**
 * @summary AbortProblem_unrecognizedInvocationId
 * @constant
 * @type {number}
 */
export const AbortProblem_unrecognizedInvocationId: AbortProblem =
  AbortProblem.unrecognizedInvocationId; /* LONG_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION AbortProblem_unrecognizedInvocationId */

/* START_OF_SYMBOL_DEFINITION unrecognizedInvocationId */
/**
 * @summary unrecognizedInvocationId
 * @constant
 * @type {number}
 */
export const unrecognizedInvocationId: AbortProblem =
  AbortProblem.unrecognizedInvocationId; /* SHORT_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION unrecognizedInvocationId */

/* START_OF_SYMBOL_DEFINITION AbortProblem_abortUnexpected */
/**
 * @summary AbortProblem_abortUnexpected
 * @constant
 * @type {number}
 */
export const AbortProblem_abortUnexpected: AbortProblem =
  AbortProblem.abortUnexpected; /* LONG_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION AbortProblem_abortUnexpected */

/* START_OF_SYMBOL_DEFINITION abortUnexpected */
/**
 * @summary abortUnexpected
 * @constant
 * @type {number}
 */
export const abortUnexpected: AbortProblem =
  AbortProblem.abortUnexpected; /* SHORT_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION abortUnexpected */

/* START_OF_SYMBOL_DEFINITION AbortProblem_unrecognizedError */
/**
 * @summary AbortProblem_unrecognizedError
 * @constant
 * @type {number}
 */
export const AbortProblem_unrecognizedError: AbortProblem =
  AbortProblem.unrecognizedError; /* LONG_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION AbortProblem_unrecognizedError */

/* START_OF_SYMBOL_DEFINITION unrecognizedError */
/**
 * @summary unrecognizedError
 * @constant
 * @type {number}
 */
export const unrecognizedError: AbortProblem =
  AbortProblem.unrecognizedError; /* SHORT_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION unrecognizedError */

/* START_OF_SYMBOL_DEFINITION AbortProblem_unexpectedError */
/**
 * @summary AbortProblem_unexpectedError
 * @constant
 * @type {number}
 */
export const AbortProblem_unexpectedError: AbortProblem =
  AbortProblem.unexpectedError; /* LONG_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION AbortProblem_unexpectedError */

/* START_OF_SYMBOL_DEFINITION unexpectedError */
/**
 * @summary unexpectedError
 * @constant
 * @type {number}
 */
export const unexpectedError: AbortProblem =
  AbortProblem.unexpectedError; /* SHORT_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION unexpectedError */

/* START_OF_SYMBOL_DEFINITION AbortProblem_mistypedErrorParameter */
/**
 * @summary AbortProblem_mistypedErrorParameter
 * @constant
 * @type {number}
 */
export const AbortProblem_mistypedErrorParameter: AbortProblem =
  AbortProblem.mistypedErrorParameter; /* LONG_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION AbortProblem_mistypedErrorParameter */

/* START_OF_SYMBOL_DEFINITION mistypedErrorParameter */
/**
 * @summary mistypedErrorParameter
 * @constant
 * @type {number}
 */
export const mistypedErrorParameter: AbortProblem =
  AbortProblem.mistypedErrorParameter; /* SHORT_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION mistypedErrorParameter */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_AbortProblem */
let _cached_decoder_for_AbortProblem: $.ASN1Decoder<AbortProblem> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_AbortProblem */

/* START_OF_SYMBOL_DEFINITION _decode_AbortProblem */
/**
 * @summary Decodes an ASN.1 element into a(n) AbortProblem
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {AbortProblem} The decoded data structure.
 */
export function _decode_AbortProblem(el: _Element) {
  if (!_cached_decoder_for_AbortProblem) {
    _cached_decoder_for_AbortProblem = $._decodeEnumerated;
  }
  return _cached_decoder_for_AbortProblem(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_AbortProblem */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_AbortProblem */
let _cached_encoder_for_AbortProblem: $.ASN1Encoder<AbortProblem> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_AbortProblem */

/* START_OF_SYMBOL_DEFINITION _encode_AbortProblem */
/**
 * @summary Encodes a(n) AbortProblem into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The AbortProblem, encoded as an ASN.1 Element.
 */
export function _encode_AbortProblem(
  value: AbortProblem,
  elGetter: $.ASN1Encoder<AbortProblem>
) {
  if (!_cached_encoder_for_AbortProblem) {
    _cached_encoder_for_AbortProblem = $._encodeEnumerated;
  }
  return _cached_encoder_for_AbortProblem(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_AbortProblem */

/* eslint-enable */
