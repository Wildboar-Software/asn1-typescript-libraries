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
 * @summary TransferProblem
 * @description
 *
 * SE-P-ABORT problem resulting from a received SE-TRANSFER.
 * ITU-T Rec. X.832 (04/95) [§6.4.2, §7.1](https://www.itu.int/rec/T-REC-X.832-199504-I).
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * TransferProblem  ::=  ENUMERATED {
 *   duplicateInvocationId(0), unrecognizedSecurityExchange(1), mistypedItem(2),
 *   inappropriateInvocationId(3), alternatingSequenceError(4)}
 * ```
 *
 * @enum {number}
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
 * SE-P-ABORT problem resulting from a received SE-TRANSFER.
 * ITU-T Rec. X.832 (04/95) [§6.4.2, §7.1](https://www.itu.int/rec/T-REC-X.832-199504-I).
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * TransferProblem  ::=  ENUMERATED {
 *   duplicateInvocationId(0), unrecognizedSecurityExchange(1), mistypedItem(2),
 *   inappropriateInvocationId(3), alternatingSequenceError(4)}
 * ```
 *
 * @enum {number}
 */
export type TransferProblem = _enum_for_TransferProblem;


/**
 * @summary TransferProblem
 * @description
 *
 * SE-P-ABORT problem resulting from a received SE-TRANSFER.
 * ITU-T Rec. X.832 (04/95) [§6.4.2, §7.1](https://www.itu.int/rec/T-REC-X.832-199504-I).
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * TransferProblem  ::=  ENUMERATED {
 *   duplicateInvocationId(0), unrecognizedSecurityExchange(1), mistypedItem(2),
 *   inappropriateInvocationId(3), alternatingSequenceError(4)}
 * ```
 *
 * @enum {number}
 */
export const TransferProblem = _enum_for_TransferProblem;


/**
 * @summary TransferProblem_duplicateInvocationId
 * @description
 *
 * `duplicateInvocationId` (0): that invocation id is
 * already in use. ITU-T Rec. X.832 (04/95) §6.4.2.
 *
 * @constant
 * @type {number}
 */
export const TransferProblem_duplicateInvocationId =
  TransferProblem.duplicateInvocationId satisfies TransferProblem; /* LONG_NAMED_ENUMERATED_VALUE */


/**
 * @summary duplicateInvocationId
 * @constant
 * @type {number}
 */
export const duplicateInvocationId =
  TransferProblem.duplicateInvocationId satisfies TransferProblem; /* SHORT_NAMED_ENUMERATED_VALUE */


/**
 * @summary TransferProblem_unrecognizedSecurityExchange
 * @description
 *
 * `unrecognizedSecurityExchange` (1): exchange is not
 * valid for this ASO-context. ITU-T Rec. X.832 (04/95)
 * §6.4.2.
 *
 * @constant
 * @type {number}
 */
export const TransferProblem_unrecognizedSecurityExchange =
  TransferProblem.unrecognizedSecurityExchange satisfies TransferProblem; /* LONG_NAMED_ENUMERATED_VALUE */


/**
 * @summary unrecognizedSecurityExchange
 * @constant
 * @type {number}
 */
export const unrecognizedSecurityExchange =
  TransferProblem.unrecognizedSecurityExchange satisfies TransferProblem; /* SHORT_NAMED_ENUMERATED_VALUE */


/**
 * @summary TransferProblem_mistypedItem
 * @description
 *
 * `mistypedItem` (2): SEI type does not match the object
 * class definition. ITU-T Rec. X.832 (04/95) §6.4.2.
 *
 * @constant
 * @type {number}
 */
export const TransferProblem_mistypedItem =
  TransferProblem.mistypedItem satisfies TransferProblem; /* LONG_NAMED_ENUMERATED_VALUE */


/**
 * @summary mistypedItem
 * @constant
 * @type {number}
 */
export const mistypedItem =
  TransferProblem.mistypedItem satisfies TransferProblem; /* SHORT_NAMED_ENUMERATED_VALUE */


/**
 * @summary TransferProblem_inappropriateInvocationId
 * @description
 *
 * `inappropriateInvocationId` (3): id is outside the set
 * specified for this ASO-context. ITU-T Rec. X.832
 * (04/95) §6.4.2.
 *
 * @constant
 * @type {number}
 */
export const TransferProblem_inappropriateInvocationId =
  TransferProblem.inappropriateInvocationId satisfies TransferProblem; /* LONG_NAMED_ENUMERATED_VALUE */


/**
 * @summary inappropriateInvocationId
 * @constant
 * @type {number}
 */
export const inappropriateInvocationId =
  TransferProblem.inappropriateInvocationId satisfies TransferProblem; /* SHORT_NAMED_ENUMERATED_VALUE */


/**
 * @summary TransferProblem_alternatingSequenceError
 * @description
 *
 * `alternatingSequenceError` (4): SETR does not follow
 * the Alternating-class sequence. ITU-T Rec. X.832
 * (04/95) §6.2, §6.4.2.
 *
 * @constant
 * @type {number}
 */
export const TransferProblem_alternatingSequenceError =
  TransferProblem.alternatingSequenceError satisfies TransferProblem; /* LONG_NAMED_ENUMERATED_VALUE */


/**
 * @summary alternatingSequenceError
 * @constant
 * @type {number}
 */
export const alternatingSequenceError =
  TransferProblem.alternatingSequenceError satisfies TransferProblem; /* SHORT_NAMED_ENUMERATED_VALUE */




export function _decode_TransferProblem(el: _Element): TransferProblem {
  const enumerated = $._decodeEnumerated(el);
  switch (enumerated) {
    case TransferProblem.duplicateInvocationId: return TransferProblem.duplicateInvocationId;
    case TransferProblem.unrecognizedSecurityExchange: return TransferProblem.unrecognizedSecurityExchange;
    case TransferProblem.mistypedItem: return TransferProblem.mistypedItem;
    case TransferProblem.inappropriateInvocationId: return TransferProblem.inappropriateInvocationId;
    case TransferProblem.alternatingSequenceError: return TransferProblem.alternatingSequenceError;
    default:
      throw new _ConstructionError(
        'Invalid ENUMERATED value ' + enumerated + ' for TransferProblem.',
        el,
      );
  }
}




export const _encode_TransferProblem: $.ASN1Encoder<TransferProblem> = $._encodeEnumerated as $.ASN1Encoder<TransferProblem>;


/* eslint-enable */
