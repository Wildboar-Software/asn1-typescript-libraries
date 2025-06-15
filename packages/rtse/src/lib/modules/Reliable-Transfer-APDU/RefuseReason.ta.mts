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


/**
 * @summary RefuseReason
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * RefuseReason  ::=  INTEGER {
 *   rtsBusy(0), cannotRecover(1), validationFailure(2),
 *   unacceptableDialogueMode(3)}
 * ```
 */
export type RefuseReason = INTEGER;


/**
 * @summary RefuseReason_rtsBusy
 * @constant
 * @type {number}
 */
export const RefuseReason_rtsBusy: RefuseReason = 0; /* LONG_NAMED_INTEGER_VALUE */


/**
 * @summary RefuseReason_rtsBusy
 * @constant
 * @type {number}
 */
export const rtsBusy: RefuseReason = RefuseReason_rtsBusy; /* SHORT_NAMED_INTEGER_VALUE */


/**
 * @summary RefuseReason_cannotRecover
 * @constant
 * @type {number}
 */
export const RefuseReason_cannotRecover: RefuseReason = 1; /* LONG_NAMED_INTEGER_VALUE */


/**
 * @summary RefuseReason_cannotRecover
 * @constant
 * @type {number}
 */
export const cannotRecover: RefuseReason = RefuseReason_cannotRecover; /* SHORT_NAMED_INTEGER_VALUE */


/**
 * @summary RefuseReason_validationFailure
 * @constant
 * @type {number}
 */
export const RefuseReason_validationFailure: RefuseReason = 2; /* LONG_NAMED_INTEGER_VALUE */


/**
 * @summary RefuseReason_validationFailure
 * @constant
 * @type {number}
 */
export const validationFailure: RefuseReason = RefuseReason_validationFailure; /* SHORT_NAMED_INTEGER_VALUE */


/**
 * @summary RefuseReason_unacceptableDialogueMode
 * @constant
 * @type {number}
 */
export const RefuseReason_unacceptableDialogueMode: RefuseReason = 3; /* LONG_NAMED_INTEGER_VALUE */


/**
 * @summary RefuseReason_unacceptableDialogueMode
 * @constant
 * @type {number}
 */
export const unacceptableDialogueMode: RefuseReason = RefuseReason_unacceptableDialogueMode; /* SHORT_NAMED_INTEGER_VALUE */




export const _decode_RefuseReason = $._decodeInteger;




export const _encode_RefuseReason = $._encodeInteger;


/* eslint-enable */
