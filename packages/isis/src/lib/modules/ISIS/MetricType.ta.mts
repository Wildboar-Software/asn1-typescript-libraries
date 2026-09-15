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
 * @summary MetricType
 * @description
 *
 * Whether a reachable-address metric is internal (destination inside the
 * routeing domain) or external (outside). Internal routes are always preferred
 * over external ones even if the external cost is lower. Level 1 routeing
 * always uses internal metrics. Manual adjacencies shall be internal.
 *
 * (ISO/IEC 10589:2002 clauses 7.2.2, 7.2.12 and 11.2.12.4).
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
 * Whether a reachable-address metric is internal (destination inside the
 * routeing domain) or external (outside). Internal routes are always preferred
 * over external ones even if the external cost is lower. Level 1 routeing
 * always uses internal metrics. Manual adjacencies shall be internal.
 *
 * (ISO/IEC 10589:2002 clauses 7.2.2, 7.2.12 and 11.2.12.4).
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
 * Whether a reachable-address metric is internal (destination inside the
 * routeing domain) or external (outside). Internal routes are always preferred
 * over external ones even if the external cost is lower. Level 1 routeing
 * always uses internal metrics. Manual adjacencies shall be internal.
 *
 * (ISO/IEC 10589:2002 clauses 7.2.2, 7.2.12 and 11.2.12.4).
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
 * @description
 *
 * Metric describes a link/route to a destination inside the routeing domain.
 * Default for reachable-address metricType attributes.
 *
 * (ISO/IEC 10589:2002 clauses 7.2.2 and 11.3.2).
 *
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
 * @description
 *
 * Metric describes a link/route to a destination outside the routeing domain.
 *
 * (ISO/IEC 10589:2002 clause 7.2.2).
 *
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
