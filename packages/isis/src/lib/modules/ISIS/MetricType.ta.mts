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
 * @summary MetricType
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * MetricType  ::=  ENUMERATED {internal(0), external(1)}
 * ```
 *
 * @enum {number}
 */
export enum _enum_for_MetricType {
  internal = 0,
  external = 1,
}

/**
 * @summary MetricType
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * MetricType  ::=  ENUMERATED {internal(0), external(1)}
 * ```
 *
 * @enum {number}
 */
export type MetricType = _enum_for_MetricType;

/**
 * @summary MetricType
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * MetricType  ::=  ENUMERATED {internal(0), external(1)}
 * ```
 *
 * @enum {number}
 */
export const MetricType = _enum_for_MetricType;

/**
 * @summary MetricType_internal
 * @constant
 * @type {number}
 */
export const MetricType_internal: MetricType =
  MetricType.internal; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary internal
 * @constant
 * @type {number}
 */
export const internal: MetricType =
  MetricType.internal; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary MetricType_external
 * @constant
 * @type {number}
 */
export const MetricType_external: MetricType =
  MetricType.external; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary external
 * @constant
 * @type {number}
 */
export const external: MetricType =
  MetricType.external; /* SHORT_NAMED_ENUMERATED_VALUE */


export const _decode_MetricType = $._decodeEnumerated;


export const _encode_MetricType = $._encodeEnumerated;


/* eslint-enable */
