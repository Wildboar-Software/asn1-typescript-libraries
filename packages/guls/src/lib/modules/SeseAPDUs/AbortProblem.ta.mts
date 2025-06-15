/* eslint-disable */
import {
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
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_AbortProblem */

/* START_OF_SYMBOL_DEFINITION _decode_AbortProblem */
export const _decode_AbortProblem = $._decodeEnumerated;
/* END_OF_SYMBOL_DEFINITION _decode_AbortProblem */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_AbortProblem */
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_AbortProblem */

/* START_OF_SYMBOL_DEFINITION _encode_AbortProblem */
export const _encode_AbortProblem = $._encodeEnumerated;

/* END_OF_SYMBOL_DEFINITION _encode_AbortProblem */

/* eslint-enable */
