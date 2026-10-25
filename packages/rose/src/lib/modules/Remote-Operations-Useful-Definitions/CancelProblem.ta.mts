/* eslint-disable */
import {
  type ENUMERATED,
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


export const _enum_for_CancelProblem = {
  unknownOperation: 0,
  tooLate: 1,
  operationNotCancellable: 2,
} as const;

export type _enum_for_CancelProblem =
  (typeof _enum_for_CancelProblem)[keyof typeof _enum_for_CancelProblem];


/**
 * @summary CancelProblem
 * @description
 *
 * Why a `cancel` failed (ITU-T Rec. X.880 (1994) Amd.1 (11/95) §10.10.2.1). Extensible (`...`).
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
 * @description Invocation never happened or has been forgotten (Amd.1 §10.10.2.1 a).
 * @constant
 * @type {number}
 */
export const CancelProblem_unknownOperation = _enum_for_CancelProblem.unknownOperation satisfies CancelProblem; /* LONG_NAMED_ENUMERATED_VALUE */


/**
 * @summary unknownOperation
 * @description Invocation never happened or has been forgotten (Amd.1 §10.10.2.1 a).
 * @constant
 * @type {number}
 */
export const unknownOperation = CancelProblem_unknownOperation satisfies CancelProblem; /* SHORT_NAMED_ENUMERATED_VALUE */


/**
 * @summary CancelProblem_tooLate
 * @description Operation already performed, or execution is past the point where cancellation is possible (Amd.1 §10.10.2.1 b).
 * @constant
 * @type {number}
 */
export const CancelProblem_tooLate = _enum_for_CancelProblem.tooLate satisfies CancelProblem; /* LONG_NAMED_ENUMERATED_VALUE */


/**
 * @summary tooLate
 * @description Operation already performed, or execution is past the point where cancellation is possible (Amd.1 §10.10.2.1 b).
 * @constant
 * @type {number}
 */
export const tooLate = CancelProblem_tooLate satisfies CancelProblem; /* SHORT_NAMED_ENUMERATED_VALUE */


/**
 * @summary CancelProblem_operationNotCancellable
 * @description Invoked operation does not include `cancelled` in `&Errors` (Amd.1 §10.10.2.1 c).
 * @constant
 * @type {number}
 */
export const CancelProblem_operationNotCancellable = _enum_for_CancelProblem.operationNotCancellable satisfies CancelProblem; /* LONG_NAMED_ENUMERATED_VALUE */


/**
 * @summary operationNotCancellable
 * @description Invoked operation does not include `cancelled` in `&Errors` (Amd.1 §10.10.2.1 c).
 * @constant
 * @type {number}
 */
export const operationNotCancellable = CancelProblem_operationNotCancellable satisfies CancelProblem; /* SHORT_NAMED_ENUMERATED_VALUE */




export const _decode_CancelProblem = $._decodeEnumerated;




export const _encode_CancelProblem = $._encodeEnumerated;


/* eslint-enable */
