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
 * @summary NeighbourSystemType
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * NeighbourSystemType  ::=  ENUMERATED {
 *   unknown(0), endSystem(1), intermediateSystem(2), l1IntermediateSystem(3),
 *   l2IntermediateSystem(4)}
 * ```@enum {number}
 */
export enum _enum_for_NeighbourSystemType {
  unknown = 0,
  endSystem = 1,
  intermediateSystem = 2,
  l1IntermediateSystem = 3,
  l2IntermediateSystem = 4,
}

/**
 * @summary NeighbourSystemType
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * NeighbourSystemType  ::=  ENUMERATED {
 *   unknown(0), endSystem(1), intermediateSystem(2), l1IntermediateSystem(3),
 *   l2IntermediateSystem(4)}
 * ```@enum {number}
 */
export type NeighbourSystemType = _enum_for_NeighbourSystemType;

/**
 * @summary NeighbourSystemType
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * NeighbourSystemType  ::=  ENUMERATED {
 *   unknown(0), endSystem(1), intermediateSystem(2), l1IntermediateSystem(3),
 *   l2IntermediateSystem(4)}
 * ```@enum {number}
 */
export const NeighbourSystemType = _enum_for_NeighbourSystemType;

/**
 * @summary NeighbourSystemType_unknown
 * @constant
 * @type {number}
 */
export const NeighbourSystemType_unknown: NeighbourSystemType =
  NeighbourSystemType.unknown; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary unknown
 * @constant
 * @type {number}
 */
export const unknown: NeighbourSystemType =
  NeighbourSystemType.unknown; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary NeighbourSystemType_endSystem
 * @constant
 * @type {number}
 */
export const NeighbourSystemType_endSystem: NeighbourSystemType =
  NeighbourSystemType.endSystem; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary endSystem
 * @constant
 * @type {number}
 */
export const endSystem: NeighbourSystemType =
  NeighbourSystemType.endSystem; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary NeighbourSystemType_intermediateSystem
 * @constant
 * @type {number}
 */
export const NeighbourSystemType_intermediateSystem: NeighbourSystemType =
  NeighbourSystemType.intermediateSystem; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary intermediateSystem
 * @constant
 * @type {number}
 */
export const intermediateSystem: NeighbourSystemType =
  NeighbourSystemType.intermediateSystem; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary NeighbourSystemType_l1IntermediateSystem
 * @constant
 * @type {number}
 */
export const NeighbourSystemType_l1IntermediateSystem: NeighbourSystemType =
  NeighbourSystemType.l1IntermediateSystem; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary l1IntermediateSystem
 * @constant
 * @type {number}
 */
export const l1IntermediateSystem: NeighbourSystemType =
  NeighbourSystemType.l1IntermediateSystem; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary NeighbourSystemType_l2IntermediateSystem
 * @constant
 * @type {number}
 */
export const NeighbourSystemType_l2IntermediateSystem: NeighbourSystemType =
  NeighbourSystemType.l2IntermediateSystem; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary l2IntermediateSystem
 * @constant
 * @type {number}
 */
export const l2IntermediateSystem: NeighbourSystemType =
  NeighbourSystemType.l2IntermediateSystem; /* SHORT_NAMED_ENUMERATED_VALUE */


export const _decode_NeighbourSystemType = $._decodeEnumerated;


export const _encode_NeighbourSystemType = $._encodeEnumerated;


/* eslint-enable */
