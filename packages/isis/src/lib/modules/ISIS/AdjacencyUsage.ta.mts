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
 * @summary AdjacencyUsage
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * AdjacencyUsage  ::=  ENUMERATED {
 *   undefined(0), level1(1), level2(2), level1and2(3)}
 * ```
 *
 * @enum {number}
 */
export enum _enum_for_AdjacencyUsage {
  undefined = 0,
  level1 = 1,
  level2 = 2,
  level1and2 = 3,
}

/**
 * @summary AdjacencyUsage
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * AdjacencyUsage  ::=  ENUMERATED {
 *   undefined(0), level1(1), level2(2), level1and2(3)}
 * ```
 *
 * @enum {number}
 */
export type AdjacencyUsage = _enum_for_AdjacencyUsage;

/**
 * @summary AdjacencyUsage
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * AdjacencyUsage  ::=  ENUMERATED {
 *   undefined(0), level1(1), level2(2), level1and2(3)}
 * ```
 *
 * @enum {number}
 */
export const AdjacencyUsage = _enum_for_AdjacencyUsage;

/**
 * @summary AdjacencyUsage_undefined
 * @constant
 * @type {number}
 */
export const AdjacencyUsage_undefined: AdjacencyUsage =
  AdjacencyUsage.undefined; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary undefined
 * @constant
 * @type {number}
 */
export const undefined: AdjacencyUsage =
  AdjacencyUsage.undefined; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary AdjacencyUsage_level1
 * @constant
 * @type {number}
 */
export const AdjacencyUsage_level1: AdjacencyUsage =
  AdjacencyUsage.level1; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary level1
 * @constant
 * @type {number}
 */
export const level1: AdjacencyUsage =
  AdjacencyUsage.level1; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary AdjacencyUsage_level2
 * @constant
 * @type {number}
 */
export const AdjacencyUsage_level2: AdjacencyUsage =
  AdjacencyUsage.level2; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary level2
 * @constant
 * @type {number}
 */
export const level2: AdjacencyUsage =
  AdjacencyUsage.level2; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary AdjacencyUsage_level1and2
 * @constant
 * @type {number}
 */
export const AdjacencyUsage_level1and2: AdjacencyUsage =
  AdjacencyUsage.level1and2; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary level1and2
 * @constant
 * @type {number}
 */
export const level1and2: AdjacencyUsage =
  AdjacencyUsage.level1and2; /* SHORT_NAMED_ENUMERATED_VALUE */


export const _decode_AdjacencyUsage = $._decodeEnumerated;


export const _encode_AdjacencyUsage = $._encodeEnumerated;


/* eslint-enable */
