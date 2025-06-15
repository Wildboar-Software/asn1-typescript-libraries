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

/* START_OF_SYMBOL_DEFINITION _enum_for_NeighbourSystemType */
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
/* END_OF_SYMBOL_DEFINITION _enum_for_NeighbourSystemType */

/* START_OF_SYMBOL_DEFINITION NeighbourSystemType */
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
/* END_OF_SYMBOL_DEFINITION NeighbourSystemType */

/* START_OF_SYMBOL_DEFINITION NeighbourSystemType */
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
/* END_OF_SYMBOL_DEFINITION NeighbourSystemType */

/* START_OF_SYMBOL_DEFINITION NeighbourSystemType_unknown */
/**
 * @summary NeighbourSystemType_unknown
 * @constant
 * @type {number}
 */
export const NeighbourSystemType_unknown: NeighbourSystemType =
  NeighbourSystemType.unknown; /* LONG_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION NeighbourSystemType_unknown */

/* START_OF_SYMBOL_DEFINITION unknown */
/**
 * @summary unknown
 * @constant
 * @type {number}
 */
export const unknown: NeighbourSystemType =
  NeighbourSystemType.unknown; /* SHORT_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION unknown */

/* START_OF_SYMBOL_DEFINITION NeighbourSystemType_endSystem */
/**
 * @summary NeighbourSystemType_endSystem
 * @constant
 * @type {number}
 */
export const NeighbourSystemType_endSystem: NeighbourSystemType =
  NeighbourSystemType.endSystem; /* LONG_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION NeighbourSystemType_endSystem */

/* START_OF_SYMBOL_DEFINITION endSystem */
/**
 * @summary endSystem
 * @constant
 * @type {number}
 */
export const endSystem: NeighbourSystemType =
  NeighbourSystemType.endSystem; /* SHORT_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION endSystem */

/* START_OF_SYMBOL_DEFINITION NeighbourSystemType_intermediateSystem */
/**
 * @summary NeighbourSystemType_intermediateSystem
 * @constant
 * @type {number}
 */
export const NeighbourSystemType_intermediateSystem: NeighbourSystemType =
  NeighbourSystemType.intermediateSystem; /* LONG_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION NeighbourSystemType_intermediateSystem */

/* START_OF_SYMBOL_DEFINITION intermediateSystem */
/**
 * @summary intermediateSystem
 * @constant
 * @type {number}
 */
export const intermediateSystem: NeighbourSystemType =
  NeighbourSystemType.intermediateSystem; /* SHORT_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION intermediateSystem */

/* START_OF_SYMBOL_DEFINITION NeighbourSystemType_l1IntermediateSystem */
/**
 * @summary NeighbourSystemType_l1IntermediateSystem
 * @constant
 * @type {number}
 */
export const NeighbourSystemType_l1IntermediateSystem: NeighbourSystemType =
  NeighbourSystemType.l1IntermediateSystem; /* LONG_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION NeighbourSystemType_l1IntermediateSystem */

/* START_OF_SYMBOL_DEFINITION l1IntermediateSystem */
/**
 * @summary l1IntermediateSystem
 * @constant
 * @type {number}
 */
export const l1IntermediateSystem: NeighbourSystemType =
  NeighbourSystemType.l1IntermediateSystem; /* SHORT_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION l1IntermediateSystem */

/* START_OF_SYMBOL_DEFINITION NeighbourSystemType_l2IntermediateSystem */
/**
 * @summary NeighbourSystemType_l2IntermediateSystem
 * @constant
 * @type {number}
 */
export const NeighbourSystemType_l2IntermediateSystem: NeighbourSystemType =
  NeighbourSystemType.l2IntermediateSystem; /* LONG_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION NeighbourSystemType_l2IntermediateSystem */

/* START_OF_SYMBOL_DEFINITION l2IntermediateSystem */
/**
 * @summary l2IntermediateSystem
 * @constant
 * @type {number}
 */
export const l2IntermediateSystem: NeighbourSystemType =
  NeighbourSystemType.l2IntermediateSystem; /* SHORT_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION l2IntermediateSystem */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_NeighbourSystemType */
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_NeighbourSystemType */

/* START_OF_SYMBOL_DEFINITION _decode_NeighbourSystemType */
export const _decode_NeighbourSystemType = $._decodeEnumerated;
/* END_OF_SYMBOL_DEFINITION _decode_NeighbourSystemType */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_NeighbourSystemType */
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_NeighbourSystemType */

/* START_OF_SYMBOL_DEFINITION _encode_NeighbourSystemType */
export const _encode_NeighbourSystemType = $._encodeEnumerated;

/* END_OF_SYMBOL_DEFINITION _encode_NeighbourSystemType */

/* eslint-enable */
