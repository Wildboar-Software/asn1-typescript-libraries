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
import * as $ from '@wildboar/asn1/functional';

/**
 * @summary CancelProblem
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * CancelProblem  ::=  ENUMERATED {
 *   unknownInvocation(0), tooLate(1), notCancellable(2)}
 * ```
 *
 * @enum {number}
 */
export enum _enum_for_CancelProblem {
  unknownInvocation = 0,
  tooLate = 1,
  notCancellable = 2,
}

/**
 * @summary CancelProblem
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * CancelProblem  ::=  ENUMERATED {
 *   unknownInvocation(0), tooLate(1), notCancellable(2)}
 * ```
 *
 * @enum {number}
 */
export type CancelProblem = _enum_for_CancelProblem;

/**
 * @summary CancelProblem
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * CancelProblem  ::=  ENUMERATED {
 *   unknownInvocation(0), tooLate(1), notCancellable(2)}
 * ```
 *
 * @enum {number}
 */
export const CancelProblem = _enum_for_CancelProblem;

/**
 * @summary CancelProblem_unknownInvocation
 * @constant
 * @type {number}
 */
export const CancelProblem_unknownInvocation: CancelProblem =
  CancelProblem.unknownInvocation; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary unknownInvocation
 * @constant
 * @type {number}
 */
export const unknownInvocation: CancelProblem =
  CancelProblem.unknownInvocation; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary CancelProblem_tooLate
 * @constant
 * @type {number}
 */
export const CancelProblem_tooLate: CancelProblem =
  CancelProblem.tooLate; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary tooLate
 * @constant
 * @type {number}
 */
export const tooLate: CancelProblem =
  CancelProblem.tooLate; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary CancelProblem_notCancellable
 * @constant
 * @type {number}
 */
export const CancelProblem_notCancellable: CancelProblem =
  CancelProblem.notCancellable; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary notCancellable
 * @constant
 * @type {number}
 */
export const notCancellable: CancelProblem =
  CancelProblem.notCancellable; /* SHORT_NAMED_ENUMERATED_VALUE */


export const _decode_CancelProblem = $._decodeEnumerated;


export const _encode_CancelProblem = $._encodeEnumerated;


/* eslint-enable */
