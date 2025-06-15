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
 * @summary TransferProblem
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * TransferProblem  ::=  ENUMERATED {
 *   duplicateInvocationId(0), unrecognizedSecurityExchange(1), mistypedItem(2),
 *   inappropriateInvocationId(3), alternatingSequenceError(4)}
 * ```@enum {number}
 */
export enum _enum_for_TransferProblem {
  duplicateInvocationId = 0,
  unrecognizedSecurityExchange = 1,
  mistypedItem = 2,
  inappropriateInvocationId = 3,
  alternatingSequenceError = 4,
}


/**
 * @summary TransferProblem
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * TransferProblem  ::=  ENUMERATED {
 *   duplicateInvocationId(0), unrecognizedSecurityExchange(1), mistypedItem(2),
 *   inappropriateInvocationId(3), alternatingSequenceError(4)}
 * ```@enum {number}
 */
export type TransferProblem = _enum_for_TransferProblem;


/**
 * @summary TransferProblem
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * TransferProblem  ::=  ENUMERATED {
 *   duplicateInvocationId(0), unrecognizedSecurityExchange(1), mistypedItem(2),
 *   inappropriateInvocationId(3), alternatingSequenceError(4)}
 * ```@enum {number}
 */
export const TransferProblem = _enum_for_TransferProblem;


/**
 * @summary TransferProblem_duplicateInvocationId
 * @constant
 * @type {number}
 */
export const TransferProblem_duplicateInvocationId: TransferProblem =
  TransferProblem.duplicateInvocationId; /* LONG_NAMED_ENUMERATED_VALUE */


/**
 * @summary duplicateInvocationId
 * @constant
 * @type {number}
 */
export const duplicateInvocationId: TransferProblem =
  TransferProblem.duplicateInvocationId; /* SHORT_NAMED_ENUMERATED_VALUE */


/**
 * @summary TransferProblem_unrecognizedSecurityExchange
 * @constant
 * @type {number}
 */
export const TransferProblem_unrecognizedSecurityExchange: TransferProblem =
  TransferProblem.unrecognizedSecurityExchange; /* LONG_NAMED_ENUMERATED_VALUE */


/**
 * @summary unrecognizedSecurityExchange
 * @constant
 * @type {number}
 */
export const unrecognizedSecurityExchange: TransferProblem =
  TransferProblem.unrecognizedSecurityExchange; /* SHORT_NAMED_ENUMERATED_VALUE */


/**
 * @summary TransferProblem_mistypedItem
 * @constant
 * @type {number}
 */
export const TransferProblem_mistypedItem: TransferProblem =
  TransferProblem.mistypedItem; /* LONG_NAMED_ENUMERATED_VALUE */


/**
 * @summary mistypedItem
 * @constant
 * @type {number}
 */
export const mistypedItem: TransferProblem =
  TransferProblem.mistypedItem; /* SHORT_NAMED_ENUMERATED_VALUE */


/**
 * @summary TransferProblem_inappropriateInvocationId
 * @constant
 * @type {number}
 */
export const TransferProblem_inappropriateInvocationId: TransferProblem =
  TransferProblem.inappropriateInvocationId; /* LONG_NAMED_ENUMERATED_VALUE */


/**
 * @summary inappropriateInvocationId
 * @constant
 * @type {number}
 */
export const inappropriateInvocationId: TransferProblem =
  TransferProblem.inappropriateInvocationId; /* SHORT_NAMED_ENUMERATED_VALUE */


/**
 * @summary TransferProblem_alternatingSequenceError
 * @constant
 * @type {number}
 */
export const TransferProblem_alternatingSequenceError: TransferProblem =
  TransferProblem.alternatingSequenceError; /* LONG_NAMED_ENUMERATED_VALUE */


/**
 * @summary alternatingSequenceError
 * @constant
 * @type {number}
 */
export const alternatingSequenceError: TransferProblem =
  TransferProblem.alternatingSequenceError; /* SHORT_NAMED_ENUMERATED_VALUE */




export const _decode_TransferProblem = $._decodeEnumerated;




export const _encode_TransferProblem = $._encodeEnumerated;


/* eslint-enable */
