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


/**
 * @summary AbortProblem_unrecognizedInvocationId
 * @constant
 * @type {number}
 */
export const AbortProblem_unrecognizedInvocationId: AbortProblem =
  AbortProblem.unrecognizedInvocationId; /* LONG_NAMED_ENUMERATED_VALUE */


/**
 * @summary unrecognizedInvocationId
 * @constant
 * @type {number}
 */
export const unrecognizedInvocationId: AbortProblem =
  AbortProblem.unrecognizedInvocationId; /* SHORT_NAMED_ENUMERATED_VALUE */


/**
 * @summary AbortProblem_abortUnexpected
 * @constant
 * @type {number}
 */
export const AbortProblem_abortUnexpected: AbortProblem =
  AbortProblem.abortUnexpected; /* LONG_NAMED_ENUMERATED_VALUE */


/**
 * @summary abortUnexpected
 * @constant
 * @type {number}
 */
export const abortUnexpected: AbortProblem =
  AbortProblem.abortUnexpected; /* SHORT_NAMED_ENUMERATED_VALUE */


/**
 * @summary AbortProblem_unrecognizedError
 * @constant
 * @type {number}
 */
export const AbortProblem_unrecognizedError: AbortProblem =
  AbortProblem.unrecognizedError; /* LONG_NAMED_ENUMERATED_VALUE */


/**
 * @summary unrecognizedError
 * @constant
 * @type {number}
 */
export const unrecognizedError: AbortProblem =
  AbortProblem.unrecognizedError; /* SHORT_NAMED_ENUMERATED_VALUE */


/**
 * @summary AbortProblem_unexpectedError
 * @constant
 * @type {number}
 */
export const AbortProblem_unexpectedError: AbortProblem =
  AbortProblem.unexpectedError; /* LONG_NAMED_ENUMERATED_VALUE */


/**
 * @summary unexpectedError
 * @constant
 * @type {number}
 */
export const unexpectedError: AbortProblem =
  AbortProblem.unexpectedError; /* SHORT_NAMED_ENUMERATED_VALUE */


/**
 * @summary AbortProblem_mistypedErrorParameter
 * @constant
 * @type {number}
 */
export const AbortProblem_mistypedErrorParameter: AbortProblem =
  AbortProblem.mistypedErrorParameter; /* LONG_NAMED_ENUMERATED_VALUE */


/**
 * @summary mistypedErrorParameter
 * @constant
 * @type {number}
 */
export const mistypedErrorParameter: AbortProblem =
  AbortProblem.mistypedErrorParameter; /* SHORT_NAMED_ENUMERATED_VALUE */




export const _decode_AbortProblem = $._decodeEnumerated;




export const _encode_AbortProblem = $._encodeEnumerated;


/* eslint-enable */
