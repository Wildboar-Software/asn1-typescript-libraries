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
 * @summary NeighbourSystemType
 * @description
 *
 * Type of the neighbour on an adjacency, from IIH/ESH/ISH exchange.
 *
 * (ISO/IEC 10589:2002 clauses 8.2.2, 11.2.6.4 and 11.3.1).
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * NeighbourSystemType  ::=  ENUMERATED {
 *   unknown(0), endSystem(1), intermediateSystem(2), l1IntermediateSystem(3),
 *   l2IntermediateSystem(4)}
 * ```
 *
 * @enum {number}
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
 * Type of the neighbour on an adjacency, from IIH/ESH/ISH exchange.
 *
 * (ISO/IEC 10589:2002 clauses 8.2.2, 11.2.6.4 and 11.3.1).
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * NeighbourSystemType  ::=  ENUMERATED {
 *   unknown(0), endSystem(1), intermediateSystem(2), l1IntermediateSystem(3),
 *   l2IntermediateSystem(4)}
 * ```
 *
 * @enum {number}
 */
export type NeighbourSystemType = _enum_for_NeighbourSystemType;

/**
 * @summary NeighbourSystemType
 * @description
 *
 * Type of the neighbour on an adjacency, from IIH/ESH/ISH exchange.
 *
 * (ISO/IEC 10589:2002 clauses 8.2.2, 11.2.6.4 and 11.3.1).
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * NeighbourSystemType  ::=  ENUMERATED {
 *   unknown(0), endSystem(1), intermediateSystem(2), l1IntermediateSystem(3),
 *   l2IntermediateSystem(4)}
 * ```
 *
 * @enum {number}
 */
export const NeighbourSystemType = _enum_for_NeighbourSystemType;

/**
 * @summary NeighbourSystemType_unknown
 * @description
 *
 * Neighbour type not yet known (adjacency created from an ISH).
 *
 * (ISO/IEC 10589:2002 clause 8.2.2).
 *
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
 * @description
 *
 * Neighbour is an End System (ESH received).
 *
 * (ISO/IEC 10589:2002 clause 8.2.1).
 *
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
 * @description
 *
 * Neighbour is an IS, but Level 1 vs Level 2 is not yet known.
 *
 * (ISO/IEC 10589:2002 clause 8.2.2).
 *
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
 * @description
 *
 * Neighbour is a Level 1 Intermediate System.
 *
 * (ISO/IEC 10589:2002 clause 11.2.6.4).
 *
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
 * @description
 *
 * Neighbour is a Level 2 Intermediate System.
 *
 * (ISO/IEC 10589:2002 clause 11.2.6.4).
 *
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
