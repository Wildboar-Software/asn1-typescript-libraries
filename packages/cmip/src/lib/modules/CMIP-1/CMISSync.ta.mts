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

/* START_OF_SYMBOL_DEFINITION _enum_for_CMISSync */
/**
 * @summary CMISSync
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * CMISSync  ::=  ENUMERATED {bestEffort(0), atomic(1)}
 * ```@enum {number}
 */
export enum _enum_for_CMISSync {
  bestEffort = 0,
  atomic = 1,
}
/* END_OF_SYMBOL_DEFINITION _enum_for_CMISSync */

/* START_OF_SYMBOL_DEFINITION CMISSync */
/**
 * @summary CMISSync
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * CMISSync  ::=  ENUMERATED {bestEffort(0), atomic(1)}
 * ```@enum {number}
 */
export type CMISSync = _enum_for_CMISSync;
/* END_OF_SYMBOL_DEFINITION CMISSync */

/* START_OF_SYMBOL_DEFINITION CMISSync */
/**
 * @summary CMISSync
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * CMISSync  ::=  ENUMERATED {bestEffort(0), atomic(1)}
 * ```@enum {number}
 */
export const CMISSync = _enum_for_CMISSync;
/* END_OF_SYMBOL_DEFINITION CMISSync */

/* START_OF_SYMBOL_DEFINITION CMISSync_bestEffort */
/**
 * @summary CMISSync_bestEffort
 * @constant
 * @type {number}
 */
export const CMISSync_bestEffort: CMISSync =
  CMISSync.bestEffort; /* LONG_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION CMISSync_bestEffort */

/* START_OF_SYMBOL_DEFINITION bestEffort */
/**
 * @summary bestEffort
 * @constant
 * @type {number}
 */
export const bestEffort: CMISSync =
  CMISSync.bestEffort; /* SHORT_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION bestEffort */

/* START_OF_SYMBOL_DEFINITION CMISSync_atomic */
/**
 * @summary CMISSync_atomic
 * @constant
 * @type {number}
 */
export const CMISSync_atomic: CMISSync =
  CMISSync.atomic; /* LONG_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION CMISSync_atomic */

/* START_OF_SYMBOL_DEFINITION atomic */
/**
 * @summary atomic
 * @constant
 * @type {number}
 */
export const atomic: CMISSync =
  CMISSync.atomic; /* SHORT_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION atomic */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_CMISSync */
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_CMISSync */

/* START_OF_SYMBOL_DEFINITION _decode_CMISSync */
export const _decode_CMISSync = $._decodeEnumerated;
/* END_OF_SYMBOL_DEFINITION _decode_CMISSync */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_CMISSync */
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_CMISSync */

/* START_OF_SYMBOL_DEFINITION _encode_CMISSync */
export const _encode_CMISSync = $._encodeEnumerated;

/* END_OF_SYMBOL_DEFINITION _encode_CMISSync */

/* eslint-enable */
