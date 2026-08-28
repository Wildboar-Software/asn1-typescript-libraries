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
} from '@wildboar/asn1';
import * as $ from '@wildboar/asn1/functional';


/**
 * @summary AbortProblem
 * @description
 *
 * SE-P-ABORT problem resulting from a received SE-U-ABORT.
 * ITU-T Rec. X.832 (04/95) [§6.4.3, §7.1](https://www.itu.int/rec/T-REC-X.832-199504-I).
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * AbortProblem  ::=  ENUMERATED {
 *   unrecognizedInvocationId(0), abortUnexpected(1), unrecognizedError(2),
 *   unexpectedError(3), mistypedErrorParameter(4)}
 * ```
 *
 * @enum {number}
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
 * SE-P-ABORT problem resulting from a received SE-U-ABORT.
 * ITU-T Rec. X.832 (04/95) [§6.4.3, §7.1](https://www.itu.int/rec/T-REC-X.832-199504-I).
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * AbortProblem  ::=  ENUMERATED {
 *   unrecognizedInvocationId(0), abortUnexpected(1), unrecognizedError(2),
 *   unexpectedError(3), mistypedErrorParameter(4)}
 * ```
 *
 * @enum {number}
 */
export type AbortProblem = _enum_for_AbortProblem;


/**
 * @summary AbortProblem
 * @description
 *
 * SE-P-ABORT problem resulting from a received SE-U-ABORT.
 * ITU-T Rec. X.832 (04/95) [§6.4.3, §7.1](https://www.itu.int/rec/T-REC-X.832-199504-I).
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * AbortProblem  ::=  ENUMERATED {
 *   unrecognizedInvocationId(0), abortUnexpected(1), unrecognizedError(2),
 *   unexpectedError(3), mistypedErrorParameter(4)}
 * ```
 *
 * @enum {number}
 */
export const AbortProblem = _enum_for_AbortProblem;


/**
 * @summary AbortProblem_unrecognizedInvocationId
 * @description
 *
 * `unrecognizedInvocationId` (0): id does not name an
 * active or just-completed transfer. ITU-T Rec. X.832
 * (04/95) §6.4.3.
 *
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
 * @description
 *
 * `abortUnexpected` (1): the exchange does not generate
 * an abort for this SEI. ITU-T Rec. X.832 (04/95) §6.4.3.
 *
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
 * @description
 *
 * `unrecognizedError` (2): the exchange does not generate
 * this error. ITU-T Rec. X.832 (04/95) §6.4.3.
 *
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
 * @description
 *
 * `unexpectedError` (3): the exchange does not generate
 * this error for this SEI. ITU-T Rec. X.832 (04/95)
 * §6.4.3.
 *
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
 * @description
 *
 * `mistypedErrorParameter` (4): error parameter type does
 * not match the error definition. ITU-T Rec. X.832
 * (04/95) §6.4.3.
 *
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
