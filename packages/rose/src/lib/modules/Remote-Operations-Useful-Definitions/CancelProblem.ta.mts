/* eslint-disable */
import {
  ENUMERATED,
  ASN1Element as _Element,
  ASN1TagClass as _TagClass,
  ASN1Construction as _Construction,
  ASN1UniversalType as _UniversalType,
  ObjectIdentifier as _OID,
  External as _External,
  EmbeddedPDV as _PDV,
  ASN1ConstructionError as _ConstructionError,
} from '@wildboar/asn1';
import * as $ from '@wildboar/asn1/functional';


export enum _enum_for_CancelProblem {
  unknownOperation = 0,
  tooLate = 1,
  operationNotCancellable = 2,
}


/**
 * @summary CancelProblem
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * CancelProblem  ::=  ENUMERATED {
 *   unknownOperation(0), tooLate(1), operationNotCancellable(2), ...
 *   }
 * ```
 *
 * @enum {number}
 */
export type CancelProblem = _enum_for_CancelProblem | ENUMERATED;


/**
 * @summary CancelProblem_unknownOperation
 * @constant
 * @type {number}
 */
export const CancelProblem_unknownOperation: CancelProblem = 0; /* LONG_NAMED_ENUMERATED_VALUE */


/**
 * @summary unknownOperation
 * @constant
 * @type {number}
 */
export const unknownOperation: CancelProblem = CancelProblem_unknownOperation; /* SHORT_NAMED_ENUMERATED_VALUE */


/**
 * @summary CancelProblem_tooLate
 * @constant
 * @type {number}
 */
export const CancelProblem_tooLate: CancelProblem = 1; /* LONG_NAMED_ENUMERATED_VALUE */


/**
 * @summary tooLate
 * @constant
 * @type {number}
 */
export const tooLate: CancelProblem = CancelProblem_tooLate; /* SHORT_NAMED_ENUMERATED_VALUE */


/**
 * @summary CancelProblem_operationNotCancellable
 * @constant
 * @type {number}
 */
export const CancelProblem_operationNotCancellable: CancelProblem = 2; /* LONG_NAMED_ENUMERATED_VALUE */


/**
 * @summary operationNotCancellable
 * @constant
 * @type {number}
 */
export const operationNotCancellable: CancelProblem = CancelProblem_operationNotCancellable; /* SHORT_NAMED_ENUMERATED_VALUE */




export const _decode_CancelProblem = $._decodeEnumerated;




export const _encode_CancelProblem = $._encodeEnumerated;


/* eslint-enable */
