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
} from '@wildboar/asn1';
import * as $ from '@wildboar/asn1/functional';

/**
 * @summary PathMetric
 * @description
 *
 * Total metric of a complete path, 0 through `maxPathMetric` (1023). Used as
 * `defaultMetricPathCost` (and the delay/expense/error equivalents) on
 * destination managed objects, and as the Level 2 default-metric cost of a
 * virtual adjacency.
 *
 * (ISO/IEC 10589:2002 clauses 7.5, 11.2.7.2, 11.2.9 and 11.3.1).
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * PathMetric  ::=  INTEGER(0..maxPathMetric)
 * ```
 */
export type PathMetric = INTEGER;


export const _decode_PathMetric = $._decodeInteger;


export const _encode_PathMetric = $._encodeInteger;


/* eslint-enable */
