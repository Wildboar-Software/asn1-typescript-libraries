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

/* START_OF_SYMBOL_DEFINITION RefuseReason */
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
/* END_OF_SYMBOL_DEFINITION RefuseReason */

/* START_OF_SYMBOL_DEFINITION RefuseReason_rtsBusy */
/**
 * @summary RefuseReason_rtsBusy
 * @constant
 * @type {number}
 */
export const RefuseReason_rtsBusy: RefuseReason = 0; /* LONG_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION RefuseReason_rtsBusy */

/* START_OF_SYMBOL_DEFINITION rtsBusy */
/**
 * @summary RefuseReason_rtsBusy
 * @constant
 * @type {number}
 */
export const rtsBusy: RefuseReason = RefuseReason_rtsBusy; /* SHORT_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION rtsBusy */

/* START_OF_SYMBOL_DEFINITION RefuseReason_cannotRecover */
/**
 * @summary RefuseReason_cannotRecover
 * @constant
 * @type {number}
 */
export const RefuseReason_cannotRecover: RefuseReason = 1; /* LONG_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION RefuseReason_cannotRecover */

/* START_OF_SYMBOL_DEFINITION cannotRecover */
/**
 * @summary RefuseReason_cannotRecover
 * @constant
 * @type {number}
 */
export const cannotRecover: RefuseReason = RefuseReason_cannotRecover; /* SHORT_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION cannotRecover */

/* START_OF_SYMBOL_DEFINITION RefuseReason_validationFailure */
/**
 * @summary RefuseReason_validationFailure
 * @constant
 * @type {number}
 */
export const RefuseReason_validationFailure: RefuseReason = 2; /* LONG_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION RefuseReason_validationFailure */

/* START_OF_SYMBOL_DEFINITION validationFailure */
/**
 * @summary RefuseReason_validationFailure
 * @constant
 * @type {number}
 */
export const validationFailure: RefuseReason = RefuseReason_validationFailure; /* SHORT_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION validationFailure */

/* START_OF_SYMBOL_DEFINITION RefuseReason_unacceptableDialogueMode */
/**
 * @summary RefuseReason_unacceptableDialogueMode
 * @constant
 * @type {number}
 */
export const RefuseReason_unacceptableDialogueMode: RefuseReason = 3; /* LONG_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION RefuseReason_unacceptableDialogueMode */

/* START_OF_SYMBOL_DEFINITION unacceptableDialogueMode */
/**
 * @summary RefuseReason_unacceptableDialogueMode
 * @constant
 * @type {number}
 */
export const unacceptableDialogueMode: RefuseReason = RefuseReason_unacceptableDialogueMode; /* SHORT_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION unacceptableDialogueMode */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_RefuseReason */
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_RefuseReason */

/* START_OF_SYMBOL_DEFINITION _decode_RefuseReason */
export const _decode_RefuseReason = $._decodeInteger;
/* END_OF_SYMBOL_DEFINITION _decode_RefuseReason */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_RefuseReason */
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_RefuseReason */

/* START_OF_SYMBOL_DEFINITION _encode_RefuseReason */
export const _encode_RefuseReason = $._encodeInteger;

/* END_OF_SYMBOL_DEFINITION _encode_RefuseReason */

/* eslint-enable */
