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
import {
  MetricType,
  _enum_for_MetricType,
  MetricType_internal /* IMPORTED_LONG_ENUMERATION_ITEM */,
  _decode_MetricType,
  _encode_MetricType,
} from '../ISIS/MetricType.ta.mjs';
/**
 * @summary metricType_Default
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * metricType-Default MetricType ::= internal
 * ```
 *
 * @constant
 */
export const metricType_Default: MetricType = MetricType_internal;

/* eslint-enable */
