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
 * @summary AdjacencyUsage
 * @description
 *
 * How an IS adjacency is used for forwarding. There may be two adjacencies
 * (Level 1 and Level 2) between the same pair of ISs.
 *
 * (ISO/IEC 10589:2002 clauses 11.2.6.4 and 11.3.1).
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
 * How an IS adjacency is used for forwarding. There may be two adjacencies
 * (Level 1 and Level 2) between the same pair of ISs.
 *
 * (ISO/IEC 10589:2002 clauses 11.2.6.4 and 11.3.1).
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
 * How an IS adjacency is used for forwarding. There may be two adjacencies
 * (Level 1 and Level 2) between the same pair of ISs.
 *
 * (ISO/IEC 10589:2002 clauses 11.2.6.4 and 11.3.1).
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
 * @description
 *
 * Usage not yet determined.
 *
 * (ISO/IEC 10589:2002 clause 11.3.1).
 *
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
 * @description
 *
 * Used for Level 1 traffic only.
 *
 * (ISO/IEC 10589:2002 clause 11.2.6.4).
 *
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
 * @description
 *
 * Used for Level 2 traffic only.
 *
 * (ISO/IEC 10589:2002 clause 11.2.6.4).
 *
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
 * @description
 *
 * Used for both Level 1 and Level 2 traffic.
 *
 * (ISO/IEC 10589:2002 clause 11.2.6.4).
 *
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
