/* eslint-disable */
import {
  INTEGER,
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
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_ReturnResultProblem */

/* START_OF_SYMBOL_DEFINITION _decode_ReturnResultProblem */
export const _decode_ReturnResultProblem = $._decodeInteger;
/* END_OF_SYMBOL_DEFINITION _decode_ReturnResultProblem */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_ReturnResultProblem */
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_ReturnResultProblem */

/* START_OF_SYMBOL_DEFINITION _encode_ReturnResultProblem */
export const _encode_ReturnResultProblem = $._encodeInteger;

/* END_OF_SYMBOL_DEFINITION _encode_ReturnResultProblem */

/* eslint-enable */
