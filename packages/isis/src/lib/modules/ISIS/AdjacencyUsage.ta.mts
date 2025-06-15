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

/* START_OF_SYMBOL_DEFINITION _enum_for_AdjacencyUsage */
/**
 * @summary AdjacencyUsage
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * AdjacencyUsage  ::=  ENUMERATED {
 *   undefined(0), level1(1), level2(2), level1and2(3)}
 * ```@enum {number}
 */
export enum _enum_for_AdjacencyUsage {
  undefined = 0,
  level1 = 1,
  level2 = 2,
  level1and2 = 3,
}
/* END_OF_SYMBOL_DEFINITION _enum_for_AdjacencyUsage */

/* START_OF_SYMBOL_DEFINITION AdjacencyUsage */
/**
 * @summary AdjacencyUsage
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * AdjacencyUsage  ::=  ENUMERATED {
 *   undefined(0), level1(1), level2(2), level1and2(3)}
 * ```@enum {number}
 */
export type AdjacencyUsage = _enum_for_AdjacencyUsage;
/* END_OF_SYMBOL_DEFINITION AdjacencyUsage */

/* START_OF_SYMBOL_DEFINITION AdjacencyUsage */
/**
 * @summary AdjacencyUsage
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * AdjacencyUsage  ::=  ENUMERATED {
 *   undefined(0), level1(1), level2(2), level1and2(3)}
 * ```@enum {number}
 */
export const AdjacencyUsage = _enum_for_AdjacencyUsage;
/* END_OF_SYMBOL_DEFINITION AdjacencyUsage */

/* START_OF_SYMBOL_DEFINITION AdjacencyUsage_undefined */
/**
 * @summary AdjacencyUsage_undefined
 * @constant
 * @type {number}
 */
export const AdjacencyUsage_undefined: AdjacencyUsage =
  AdjacencyUsage.undefined; /* LONG_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION AdjacencyUsage_undefined */

/* START_OF_SYMBOL_DEFINITION undefined */
/**
 * @summary undefined
 * @constant
 * @type {number}
 */
export const undefined: AdjacencyUsage =
  AdjacencyUsage.undefined; /* SHORT_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION undefined */

/* START_OF_SYMBOL_DEFINITION AdjacencyUsage_level1 */
/**
 * @summary AdjacencyUsage_level1
 * @constant
 * @type {number}
 */
export const AdjacencyUsage_level1: AdjacencyUsage =
  AdjacencyUsage.level1; /* LONG_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION AdjacencyUsage_level1 */

/* START_OF_SYMBOL_DEFINITION level1 */
/**
 * @summary level1
 * @constant
 * @type {number}
 */
export const level1: AdjacencyUsage =
  AdjacencyUsage.level1; /* SHORT_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION level1 */

/* START_OF_SYMBOL_DEFINITION AdjacencyUsage_level2 */
/**
 * @summary AdjacencyUsage_level2
 * @constant
 * @type {number}
 */
export const AdjacencyUsage_level2: AdjacencyUsage =
  AdjacencyUsage.level2; /* LONG_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION AdjacencyUsage_level2 */

/* START_OF_SYMBOL_DEFINITION level2 */
/**
 * @summary level2
 * @constant
 * @type {number}
 */
export const level2: AdjacencyUsage =
  AdjacencyUsage.level2; /* SHORT_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION level2 */

/* START_OF_SYMBOL_DEFINITION AdjacencyUsage_level1and2 */
/**
 * @summary AdjacencyUsage_level1and2
 * @constant
 * @type {number}
 */
export const AdjacencyUsage_level1and2: AdjacencyUsage =
  AdjacencyUsage.level1and2; /* LONG_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION AdjacencyUsage_level1and2 */

/* START_OF_SYMBOL_DEFINITION level1and2 */
/**
 * @summary level1and2
 * @constant
 * @type {number}
 */
export const level1and2: AdjacencyUsage =
  AdjacencyUsage.level1and2; /* SHORT_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION level1and2 */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_AdjacencyUsage */
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_AdjacencyUsage */

/* START_OF_SYMBOL_DEFINITION _decode_AdjacencyUsage */
export const _decode_AdjacencyUsage = $._decodeEnumerated;
/* END_OF_SYMBOL_DEFINITION _decode_AdjacencyUsage */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_AdjacencyUsage */
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_AdjacencyUsage */

/* START_OF_SYMBOL_DEFINITION _encode_AdjacencyUsage */
export const _encode_AdjacencyUsage = $._encodeEnumerated;

/* END_OF_SYMBOL_DEFINITION _encode_AdjacencyUsage */

/* eslint-enable */
